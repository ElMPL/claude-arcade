// Camino Negro — motor de la partida. Corre solo en el host; los demás reciben el estado y los eventos.
import { SQUARES, GROUPS, CARDS, JAIL, RAILS, UTILS, groupSquares, SALARY, BAIL, START_CASH, INFL_STEP, money } from './data.js';
import { botAction } from './bot.js';

// cuánto tarda cada evento en verse en pantalla (el cliente usa lo mismo para su cola)
export function dur(e) {
  switch (e.e) {
    case 'dice': return 1050;
    case 'move': return e.steps * 190 + 250;
    case 'tp': return 700;
    case 'card': return 2600;
    case 'jail': return 600;
    case 'bk': return 1400;
    case 'over': return 0;
    default: return 120;
  }
}
const HUMAN_T = 35000, BOT_T = 450;

export function createEngine(seatsIn, opts, hooks) {
  const decks = {};
  const shuffle = n => { const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  for (const k of Object.keys(CARDS)) decks[k] = shuffle(CARDS[k].length);

  const S = {
    seats: seatsIn.map(s => ({ id: s.id || null, name: s.name, bot: !!s.bot, col: s.col, look: s.look || 0, cash: START_CASH, pos: 0, jail: 0, jtries: 0, jcards: 0, skip: 0, out: false })),
    own: {}, turn: 0, phase: 'roll', dice: [1, 1], dbl: 0, rolled: false, infl: 1, round: 1, pot: 0,
    limit: opts.limit || 0, offer: -1, card: null, log: [], winner: null, busy: 0, deadline: 0,
  };
  const inf = v => Math.round(v * S.infl);
  const P = i => S.seats[i];
  const alive = () => S.seats.map((s, i) => i).filter(i => !S.seats[i].out);
  let evAcc = 0; // ms de animación acumulados en esta acción
  function ev(e) { evAcc += dur(e); hooks.event(e); }
  function log(t) { S.log.push(t); if (S.log.length > 40) S.log.shift(); }
  function push() { hooks.push(pub()); }
  function pub() { const o = JSON.parse(JSON.stringify(S)); o.tl = S.deadline ? Math.max(0, S.deadline - Date.now()) : 0; o.bz = Math.max(0, S.busy - Date.now()); delete o.deadline; delete o.busy; return o; }

  // ---------- reglas de propiedad ----------
  const ownerOf = sq => S.own[sq] ? S.own[sq].o : -1;
  const groupOwned = (g, seat) => groupSquares(g).every(q => ownerOf(q) === seat);
  function rentOf(sq, diceSum) {
    const s = SQUARES[sq], o = S.own[sq]; if (!o || o.m) return 0;
    if (s.t === 'prop') { let r = s.rent[o.h]; if (o.h === 0 && groupOwned(s.g, o.o)) r *= 2; return inf(r); }
    if (s.t === 'rail') { const n = RAILS.filter(q => ownerOf(q) === o.o).length; return inf(25 * 2 ** (n - 1)); }
    if (s.t === 'util') { const n = UTILS.filter(q => ownerOf(q) === o.o).length; return inf((n === 2 ? 10 : 4) * diceSum); }
    return 0;
  }
  function canBuild(seat, sq) {
    const s = SQUARES[sq], o = S.own[sq]; if (!o || o.o !== seat || s.t !== 'prop' || o.h >= 5) return false;
    if (!groupOwned(s.g, seat)) return false;
    const gs = groupSquares(s.g); if (gs.some(q => S.own[q].m)) return false;
    if (o.h > Math.min(...gs.map(q => S.own[q].h))) return false;
    return P(seat).cash >= inf(GROUPS[s.g].house);
  }
  function canSell(seat, sq) { const s = SQUARES[sq], o = S.own[sq]; return !!o && o.o === seat && o.h > 0 && o.h >= Math.max(...groupSquares(s.g).map(q => S.own[q] ? S.own[q].h : 0)); }
  function canMort(seat, sq) { const s = SQUARES[sq], o = S.own[sq]; if (!o || o.o !== seat || o.m) return false; return s.t !== 'prop' || groupSquares(s.g).every(q => !S.own[q] || S.own[q].h === 0); }
  function canUnmort(seat, sq) { const o = S.own[sq]; return !!o && o.o === seat && o.m && P(seat).cash >= inf(SQUARES[sq].price * 0.55); }
  function worth(seat) {
    const p = P(seat); if (p.out) return -1;
    let w = p.cash;
    for (const [q, o] of Object.entries(S.own)) if (o.o === seat) { const s = SQUARES[q]; w += inf(s.price * (o.m ? 0.5 : 1)); if (o.h) w += inf(GROUPS[s.g].house * o.h * 0.5); }
    return w;
  }

  // ---------- plata ----------
  // vende casas e hipoteca lo necesario para llegar a "need"
  function liquidate(seat, need) {
    const p = P(seat);
    while (p.cash < need) {
      const mine = Object.keys(S.own).map(Number).filter(q => S.own[q].o === seat);
      const h = mine.filter(q => canSell(seat, q)).sort((a, b) => S.own[b].h - S.own[a].h)[0];
      if (h !== undefined) { S.own[h].h--; p.cash += inf(GROUPS[SQUARES[h].g].house / 2); ev({ e: 'build', sq: h, h: S.own[h].h }); continue; }
      const m = mine.filter(q => canMort(seat, q)).sort((a, b) => SQUARES[a].price - SQUARES[b].price)[0];
      if (m !== undefined) { S.own[m].m = true; p.cash += inf(SQUARES[m].price / 2); log(`${p.name} hipotecó ${SQUARES[m].name}`); continue; }
      return false;
    }
    return true;
  }
  // to: número de asiento o -1 (banco) o -2 (pozo del feriado)
  function pay(seat, v, to = -1, why = '') {
    const p = P(seat); if (p.out || v <= 0) return true;
    if (p.cash < v && !liquidate(seat, v)) { bankrupt(seat, to >= 0 ? to : -1, why); return false; }
    p.cash -= v;
    if (to >= 0) P(to).cash += v; else if (to === -2) S.pot += v;
    ev({ e: 'pay', s: seat, to, v });
    return true;
  }
  function give(seat, v) { if (v <= 0) return; P(seat).cash += v; ev({ e: 'pay', s: -1, to: seat, v }); }
  function bankrupt(seat, to, why) {
    const p = P(seat);
    log(`💀 ${p.name} quebró${why ? ' (' + why + ')' : ''}`);
    for (const [q, o] of Object.entries(S.own)) if (o.o === seat) { if (to >= 0) { o.o = to; o.h = 0; } else delete S.own[q]; }
    if (to >= 0) { P(to).cash += p.cash; P(to).jcards += p.jcards; }
    p.cash = 0; p.jcards = 0; p.out = true; p.jail = 0;
    ev({ e: 'bk', s: seat, to });
    if (alive().length <= 1) finish();
  }

  // ---------- movimiento ----------
  function move(seat, steps) {
    const p = P(seat), from = p.pos;
    p.pos = (from + steps) % 40;
    ev({ e: 'move', s: seat, from, steps });
    if (from + steps >= 40) { give(seat, inf(SALARY)); log(`${p.name} pasó por la Salida y cobró el sueldo (${money(inf(SALARY))})`); }
  }
  const moveTo = (seat, to) => move(seat, (to - P(seat).pos + 40) % 40);
  function toJail(seat) {
    const p = P(seat); p.pos = JAIL; p.jail = 1; p.jtries = 0; S.dbl = 0;
    ev({ e: 'tp', s: seat, to: JAIL }); ev({ e: 'jail', s: seat });
    log(`🚔 ${p.name} va preso a Marcos Paz`);
  }

  function resolve(seat, diceSum, mult = 1) {
    const p = P(seat), s = SQUARES[p.pos];
    if (p.out || S.phase === 'over') return;
    if (s.t === 'prop' || s.t === 'rail' || s.t === 'util') {
      const o = S.own[p.pos];
      if (!o) { S.phase = 'buy'; S.offer = p.pos; return; }
      if (o.o !== seat && !o.m && !P(o.o).out) {
        const r = rentOf(p.pos, diceSum) * mult;
        log(`${p.name} le pagó ${money(r)} a ${P(o.o).name} por ${s.name}`);
        pay(seat, r, o.o, 'alquiler');
      }
    } else if (s.t === 'tax') { log(`${p.name} pagó ${s.name}: ${money(inf(s.v))}`); pay(seat, inf(s.v), -2, s.name); }
    else if (s.t === 'gojail') toJail(seat);
    else if (s.t === 'free') { if (S.pot > 0) { log(`🏖️ ${p.name} cobró el pozo del feriado: ${money(S.pot)}`); give(seat, S.pot); S.pot = 0; } }
    else if (s.t === 'card') drawCard(seat, s.deck, diceSum);
  }

  function drawCard(seat, deck, diceSum) {
    const p = P(seat);
    if (!decks[deck].length) decks[deck] = shuffle(CARDS[deck].length);
    let i = decks[deck].shift();
    // la salida libre no se repite mientras alguien la tenga guardada
    const c = CARDS[deck][i];
    S.card = { deck, i, s: seat };
    ev({ e: 'card', deck, i, s: seat });
    log(`🃏 ${p.name}: ${c.x}`);
    const e = c.e;
    switch (e.t) {
      case 'jail': toJail(seat); break;
      case 'pay': pay(seat, inf(e.v), -2, 'tarjeta'); break;
      case 'get': give(seat, inf(e.v)); break;
      case 'pct': pay(seat, Math.max(inf(10), Math.round(p.cash * e.v)), -2, 'tarjeta'); break;
      case 'repairs': {
        let n = 0; for (const o of Object.values(S.own)) if (o.o === seat && o.h) n += o.h === 5 ? inf(e.ht) : inf(e.h) * o.h;
        if (n) pay(seat, n, -2, 'tarjeta'); else log(`${p.name} no tiene casas: zafó`);
        break;
      }
      case 'skip': p.skip = 1; break;
      case 'go': moveTo(seat, 0); break;
      case 'move': moveTo(seat, e.to); resolve(seat, diceSum); break;
      case 'back': { p.pos = (p.pos - e.n + 40) % 40; ev({ e: 'tp', s: seat, to: p.pos }); resolve(seat, diceSum); break; }
      case 'rail2': { const to = RAILS.find(q => q > p.pos) ?? RAILS[0]; moveTo(seat, to); resolve(seat, diceSum, 2); break; }
      case 'jcard': p.jcards++; break;
      case 'each': for (const j of alive()) if (j !== seat) pay(j, inf(e.v), seat, 'cumpleaños'); break;
      case 'payeach': for (const j of alive()) if (j !== seat && !p.out) pay(seat, inf(e.v), j, 'tarjeta'); break;
    }
  }

  function afterMove(seat) {
    if (S.phase === 'over' || S.phase === 'buy') return;
    const p = P(seat);
    if (p.out) { nextTurn(); return; }
    S.phase = S.dice[0] === S.dice[1] && !p.jail && S.rolled === 'dbl' ? 'roll' : 'end';
    if (S.phase === 'roll') log(`${p.name} sacó dobles: tira de nuevo`);
  }

  function nextTurn() {
    if (S.phase === 'over') return;
    const n = S.seats.length; let t = S.turn, wrapped = false;
    for (let k = 0; k < n; k++) {
      t = (t + 1) % n; if (t <= S.turn) wrapped = true;
      if (S.seats[t].out) continue;
      if (S.seats[t].skip) { S.seats[t].skip = 0; log(`${S.seats[t].name} pierde el turno`); continue; }
      break;
    }
    if (wrapped) {
      S.round++; S.infl = Math.round(S.infl * (1 + INFL_STEP) * 1000) / 1000;
      if (S.limit && S.round > S.limit) { finish(); return; }
      if (S.round % 5 === 0) log(`📈 Inflación acumulada: +${Math.round((S.infl - 1) * 100)}%. Todo sale más caro (tu plata no)`);
    }
    S.turn = t; S.phase = 'roll'; S.dbl = 0; S.rolled = false; S.offer = -1; S.card = null;
  }

  function finish() {
    const list = alive();
    const best = Math.max(...list.map(worth));
    S.winner = list.filter(i => worth(i) === best);
    S.phase = 'over'; S.worths = S.seats.map((s, i) => worth(i));
    ev({ e: 'over', w: S.winner });
    hooks.over && hooks.over(S.winner);
  }

  // ---------- acciones ----------
  function roll(seat) {
    const p = P(seat);
    const d = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
    if (S.forceDice) { d[0] = S.forceDice[0]; d[1] = S.forceDice[1]; S.forceDice = null; }
    S.dice = d; const sum = d[0] + d[1], dbl = d[0] === d[1];
    ev({ e: 'dice', d, s: seat });
    if (p.jail) {
      if (dbl) { p.jail = 0; log(`${p.name} sacó dobles y se escapó de Marcos Paz`); S.rolled = 'jail'; move(seat, sum); resolve(seat, sum); afterMove(seat); return; }
      p.jtries++;
      if (p.jtries >= 3) { log(`${p.name} pagó la fianza después de 3 intentos`); if (!pay(seat, inf(BAIL), -2, 'fianza')) { if (S.phase !== 'over') nextTurn(); return; } p.jail = 0; S.rolled = 'jail'; move(seat, sum); resolve(seat, sum); afterMove(seat); return; }
      log(`${p.name} sigue preso (${p.jtries}/3)`); S.phase = 'end'; S.rolled = 'jail'; return;
    }
    if (dbl) { S.dbl++; if (S.dbl >= 3) { log(`${p.name} sacó tres dobles seguidos: sospechoso. VA PRESO`); toJail(seat); S.phase = 'end'; return; } }
    S.rolled = dbl ? 'dbl' : 'one';
    move(seat, sum); resolve(seat, sum); afterMove(seat);
  }

  function act(seat, a) {
    if (!a || typeof a !== 'object' || S.phase === 'over') return false;
    if (seat !== S.turn) return false;
    if (Date.now() < S.busy - 150) return false;
    const p = P(seat); if (p.out) return false;
    const sq = Number.isInteger(a.sq) ? a.sq : -1;
    evAcc = 0;
    let ok = true;
    switch (a.t) {
      case 'roll': if (S.phase !== 'roll') return false; roll(seat); break;
      case 'buy': {
        if (S.phase !== 'buy') return false;
        const s = SQUARES[S.offer], cost = inf(s.price);
        if (p.cash < cost) return false;
        p.cash -= cost; S.own[S.offer] = { o: seat, h: 0, m: false };
        ev({ e: 'buy', s: seat, sq: S.offer }); log(`🏠 ${p.name} compró ${s.name} por ${money(cost)}`);
        S.phase = 'x'; afterMove(seat); break;
      }
      case 'pass': if (S.phase !== 'buy') return false; log(`${p.name} no compró ${SQUARES[S.offer].name}`); S.phase = 'x'; afterMove(seat); break;
      case 'end': if (S.phase !== 'end') return false; nextTurn(); break;
      case 'bail': if (S.phase !== 'roll' || !p.jail || p.cash < inf(BAIL)) return false; p.cash -= inf(BAIL); S.pot += inf(BAIL); p.jail = 0; ev({ e: 'pay', s: seat, to: -2, v: inf(BAIL) }); log(`${p.name} pagó la fianza (${money(inf(BAIL))})`); break;
      case 'jcard': if (S.phase !== 'roll' || !p.jail || !p.jcards) return false; p.jcards--; p.jail = 0; log(`${p.name} usó la salida libre`); break;
      case 'build': if (!canBuild(seat, sq)) return false; S.own[sq].h++; p.cash -= inf(GROUPS[SQUARES[sq].g].house); ev({ e: 'build', sq, h: S.own[sq].h }); log(`🔨 ${p.name} construyó en ${SQUARES[sq].name}${S.own[sq].h === 5 ? ' un hotel' : ''}`); break;
      case 'sell': if (!canSell(seat, sq)) return false; S.own[sq].h--; p.cash += inf(GROUPS[SQUARES[sq].g].house / 2); ev({ e: 'build', sq, h: S.own[sq].h }); break;
      case 'mort': if (!canMort(seat, sq)) return false; S.own[sq].m = true; p.cash += inf(SQUARES[sq].price / 2); log(`${p.name} hipotecó ${SQUARES[sq].name}`); break;
      case 'unmort': if (!canUnmort(seat, sq)) return false; p.cash -= inf(SQUARES[sq].price * 0.55); S.own[sq].m = false; log(`${p.name} levantó la hipoteca de ${SQUARES[sq].name}`); break;
      default: ok = false;
    }
    if (!ok) return false;
    S.busy = Date.now() + evAcc;
    S.deadline = S.busy + (S.seats[S.turn].bot ? 0 : HUMAN_T);
    push();
    return true;
  }

  // reloj: bots y jugadores que se duermen
  function tick() {
    if (S.phase === 'over') return;
    const now = Date.now(); if (now < S.busy) return;
    const p = P(S.turn);
    if (p.bot) { if (now >= S.busy + BOT_T) { const a = botAction(api, S.turn); if (!act(S.turn, a)) act(S.turn, fallback()); } }
    else if (S.deadline && now > S.deadline) { if (!act(S.turn, botAction(api, S.turn, true))) act(S.turn, fallback()); }
  }
  function fallback() { return S.phase === 'buy' ? { t: 'pass' } : S.phase === 'roll' ? { t: 'roll' } : { t: 'end' }; }

  function setBot(seat, name) { const s = P(seat); s.bot = true; s.id = null; if (name) s.name = name; if (seat === S.turn) S.deadline = Date.now(); push(); }
  function admin(seat, k) {
    if (k === 'cash') { P(seat).cash += inf(1000); log(`✨ ${P(seat).name} encontró un bolso en un convento`); }
    else if (k.startsWith('dice')) S.forceDice = [+k[4] || 1, +k[5] || 1];
    else if (k === 'win') { for (const j of alive()) if (j !== seat) P(j).cash = 0; S.winner = [seat]; S.phase = 'over'; ev({ e: 'over', w: [seat] }); hooks.over && hooks.over([seat]); }
    push();
  }

  function restore(st) { const keep = { ...st }; delete keep.tl; delete keep.bz; Object.assign(S, keep); S.busy = Date.now() + 800; S.deadline = S.busy + (P(S.turn).bot ? 0 : HUMAN_T); push(); }
  const api = { S, restore, act, tick, push, setBot, admin, inf, rentOf, canBuild, canSell, canMort, canUnmort, worth, ownerOf, groupOwned };
  S.deadline = Date.now() + (P(0).bot ? 0 : HUMAN_T);
  return api;
}
