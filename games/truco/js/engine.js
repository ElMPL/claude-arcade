// Motor del juego: corre solo en el host. Mantiene el estado público (S) y las manos privadas.
import {
  newDeck, rank, envido, handWinner, trucoValue, envidoPoints, teamOf, canEnvido, envidoRaises, canTruco,
  canPlay, canMazo, isResponder, nextOpponent, TRUCO_NAMES, ENVIDO_NAMES,
} from './rules.js';
import { decide } from './bot.js';

const HUMAN_TIMEOUT = 45000;

export class Engine {
  constructor({ cfg, seats, push, priv, event, end, speed = 1 }) {
    this.S = {
      phase: 'play', cfg, seats, score: [0, 0], dealer: Math.floor(Math.random() * seats.length), mano: 0, turn: 0,
      tricks: [[]], results: [], trickWin: [], truco: { level: 0, canRaise: null }, envidoDone: false, pending: null,
      counts: seats.map(() => 0), handNo: 0, last: null, winner: null, deadline: 0,
    };
    this.hands = seats.map(() => []);
    this.orig = seats.map(() => []);
    Object.assign(this, { pushFn: push, privFn: priv, eventFn: event, endFn: end, speed });
    this.timer = null;
    this.watchdog = setInterval(() => this.checkTimeout(), 1000);
  }
  destroy() { clearTimeout(this.timer); clearInterval(this.watchdog); clearTimeout(this.pause); }

  // ---------- Flujo ----------
  start() { this.newHand(); }
  newHand() {
    const S = this.S, n = S.seats.length;
    const deck = newDeck();
    S.dealer = (S.dealer + 1) % n;
    S.mano = (S.dealer + 1) % n;
    S.turn = S.mano;
    for (let i = 0; i < n; i++) { this.hands[i] = deck.splice(0, 3); this.orig[i] = this.hands[i].slice(); }
    Object.assign(S, { phase: 'deal', tricks: [[]], results: [], trickWin: [], truco: { level: 0, canRaise: null }, envidoDone: false, pending: null, last: null });
    S.handNo++;
    this.push();
    this.event({ kind: 'deal', dealer: S.dealer, mano: S.mano, n });
    // tiempo para la animación de mezclar y repartir
    clearTimeout(this.pause);
    this.pause = setTimeout(() => { S.phase = 'play'; this.push(); }, (1300 + 3 * n * 110 + 500) * this.speed);
  }
  push() {
    const S = this.S;
    S.counts = this.hands.map(h => h.length);
    const actor = this.actor();
    S.deadline = actor !== null && !S.seats[actor].bot ? Date.now() + HUMAN_TIMEOUT : 0;
    this.pushFn(S);
    S.seats.forEach((st, i) => { if (!st.bot) this.privFn(i, this.hands[i], this.orig[i]); });
    this.scheduleBot();
  }
  event(e) { this.eventFn(e); }
  actor() {
    const S = this.S;
    if (S.phase !== 'play') return null;
    return S.pending ? S.pending.responder : S.turn;
  }
  scheduleBot() {
    clearTimeout(this.timer);
    const a = this.actor();
    if (a === null || !this.S.seats[a].bot) return;
    this.timer = setTimeout(() => this.botMove(a), (800 + Math.random() * 900) * this.speed);
  }
  botMove(seat) {
    if (this.actor() !== seat) return;
    const d = decide(this.S, seat, this.hands[seat], this.orig[seat]);
    if (!this.act(seat, d)) this.act(seat, this.S.pending ? { t: 'noquiero' } : { t: 'play', i: 0 });
  }
  checkTimeout() {
    const S = this.S, a = this.actor();
    if (a === null || S.seats[a].bot || !S.deadline || Date.now() < S.deadline) return;
    this.event({ seat: a, kind: 'info', text: 'Se le acabó el tiempo' });
    this.botMove(a);
  }
  setSkin(seat, skin) { if (this.S.seats[seat]) { this.S.seats[seat].skin = skin; this.push(); } }
  setBot(seat, name) {
    const st = this.S.seats[seat];
    st.bot = true; st.id = null; if (name) st.name = name;
    this.push();
  }

  // ---------- Acciones ----------
  act(seat, a) {
    const S = this.S;
    if (!a || S.phase !== 'play') return false;
    switch (a.t) {
      case 'play': return this.play(seat, a.i);
      case 'truco': return this.callTruco(seat);
      case 'envido': case 'real': case 'falta': return this.callEnvido(seat, a.t);
      case 'quiero': case 'noquiero': return this.respond(seat, a.t === 'quiero');
      case 'mazo': return this.mazo(seat);
    }
    return false;
  }

  play(seat, i) {
    const S = this.S;
    if (!canPlay(S, seat)) return false;
    const card = this.hands[seat][i];
    if (!card) return false;
    this.hands[seat].splice(i, 1);
    const tr = S.tricks[S.tricks.length - 1];
    tr.push({ seat, card });
    this.event({ seat, kind: 'play', card });
    if (tr.length < S.seats.length) {
      S.turn = (seat + 1) % S.seats.length;
      this.push();
      return true;
    }
    this.resolveTrick();
    return true;
  }

  resolveTrick() {
    const S = this.S;
    const tr = S.tricks[S.tricks.length - 1];
    const best = Math.max(...tr.map(p => rank(p.card)));
    const tops = tr.filter(p => rank(p.card) === best);
    const teams = new Set(tops.map(p => teamOf(S, p.seat)));
    const res = teams.size > 1 ? 't' : [...teams][0];
    const winSeat = res === 't' ? null : tops[0].seat;
    S.results.push(res);
    S.trickWin.push(winSeat);
    S.phase = 'pause';
    this.event({ kind: 'trick', seat: winSeat, text: res === 't' ? 'Parda' : null });
    const hw = handWinner(S.results, teamOf(S, S.mano));
    this.push();
    clearTimeout(this.pause);
    if (hw !== null) {
      this.pause = setTimeout(() => this.endHand(hw, trucoValue(S.truco.level), S.truco.level ? TRUCO_NAMES[S.truco.level - 1] : 'la mano'), 1300 * this.speed);
    } else {
      this.pause = setTimeout(() => {
        S.tricks.push([]);
        S.turn = res === 't' ? tr[0].seat : winSeat;
        S.phase = 'play';
        this.push();
      }, 1400 * this.speed);
    }
  }

  callTruco(seat) {
    const S = this.S;
    if (!canTruco(S, seat)) return false;
    let to;
    if (S.pending) { S.truco.level = S.pending.to; to = S.pending.to + 1; } // "quiero retruco"
    else to = S.truco.level + 1;
    S.pending = { kind: 'truco', to, byTeam: teamOf(S, seat), caller: seat, responder: nextOpponent(S, seat) };
    this.event({ seat, kind: 'call', text: `¡${TRUCO_NAMES[to - 1]}!` });
    this.push();
    return true;
  }

  callEnvido(seat, kind) {
    const S = this.S;
    const p = S.pending;
    if (p && p.kind === 'envido') {
      if (!envidoRaises(S, seat).includes(kind)) return false;
      p.calls.push(kind); p.byTeam = teamOf(S, seat); p.caller = seat; p.responder = nextOpponent(S, seat);
    } else {
      if (!canEnvido(S, seat)) return false;
      S.pending = { kind: 'envido', calls: [kind], byTeam: teamOf(S, seat), caller: seat, responder: nextOpponent(S, seat), savedTruco: p && p.kind === 'truco' ? p : null };
    }
    this.event({ seat, kind: 'call', text: `¡${ENVIDO_NAMES[kind]}!` });
    this.push();
    return true;
  }

  respond(seat, quiero) {
    const S = this.S, p = S.pending;
    if (!isResponder(S, seat)) return false;
    this.event({ seat, kind: 'call', text: quiero ? '¡Quiero!' : 'No quiero' });
    if (p.kind === 'truco') {
      if (quiero) { S.truco.level = p.to; S.truco.canRaise = teamOf(S, seat); S.pending = null; this.push(); }
      else { S.pending = null; S.phase = 'pause'; this.push(); clearTimeout(this.pause); this.pause = setTimeout(() => this.endHand(p.byTeam, trucoValue(p.to - 1), `${TRUCO_NAMES[p.to - 1]} no querido`), 900 * this.speed); }
      return true;
    }
    // envido
    S.envidoDone = true;
    if (!quiero) {
      const pts = envidoPoints(S, p.calls, false);
      S.score[p.byTeam] += pts;
      this.event({ kind: 'points', team: p.byTeam, pts, text: `${ENVIDO_NAMES[p.calls[p.calls.length - 1]]} no querido` });
      S.pending = p.savedTruco || null;
      if (!this.checkGameEnd()) this.push();
      return true;
    }
    const pts = envidoPoints(S, p.calls, true);
    // cantan los tantos desde la mano
    const n = S.seats.length;
    let bestSeat = null, best = -1;
    const order = [];
    for (let k = 0; k < n; k++) {
      const s = (S.mano + k) % n, t = envido(this.orig[s]);
      order.push({ seat: s, t });
      if (t > best) { best = t; bestSeat = s; }
    }
    S.pending = null; S.phase = 'pause';
    this.push();
    let shown = -1;
    order.forEach((o, k) => {
      const text = o.t > shown ? `Tengo ${o.t}` : 'Son buenas';
      if (o.t > shown) shown = o.t;
      setTimeout(() => this.event({ seat: o.seat, kind: 'tantos', text, num: text.startsWith('Tengo') }), (500 + k * 750) * this.speed);
    });
    clearTimeout(this.pause);
    this.pause = setTimeout(() => {
      const team = teamOf(S, bestSeat);
      S.score[team] += pts;
      this.event({ kind: 'points', team, pts, text: `${ENVIDO_NAMES[p.calls[p.calls.length - 1]]}: ${best} de ${S.seats[bestSeat].name}` });
      S.pending = p.savedTruco || null;
      S.phase = 'play';
      if (!this.checkGameEnd()) this.push();
    }, (900 + n * 750) * this.speed);
    return true;
  }

  mazo(seat) {
    const S = this.S;
    if (!canMazo(S, seat)) return false;
    const other = 1 - teamOf(S, seat);
    const lvl = S.pending && S.pending.kind === 'truco' ? S.pending.to - 1 : S.truco.level;
    // En primera, sin que se haya cantado nada (ni envido ni truco), irse al mazo da 2 puntos
    const nothingSung = S.tricks.length === 1 && !S.envidoDone && S.truco.level === 0 && !S.pending;
    const pts = nothingSung ? 2 : trucoValue(lvl);
    this.event({ seat, kind: 'call', text: 'Me voy al mazo' });
    S.pending = null; S.phase = 'pause';
    this.push();
    clearTimeout(this.pause);
    this.pause = setTimeout(() => this.endHand(other, pts, nothingSung ? 'se fueron al mazo en primera' : 'se fueron al mazo'), 900 * this.speed);
    return true;
  }

  endHand(team, pts, reason) {
    const S = this.S;
    S.score[team] += pts;
    S.last = { team, pts, reason };
    S.phase = 'pause';
    this.event({ kind: 'points', team, pts, text: reason });
    if (this.checkGameEnd()) return;
    this.push();
    clearTimeout(this.pause);
    this.pause = setTimeout(() => this.newHand(), 2600 * this.speed);
  }

  checkGameEnd() {
    const S = this.S;
    const t = S.score[0] >= S.cfg.goal ? 0 : S.score[1] >= S.cfg.goal ? 1 : null;
    if (t === null) return false;
    S.score = S.score.map(x => Math.min(x, S.cfg.goal));
    S.phase = 'end'; S.winner = t; S.pending = null;
    clearTimeout(this.timer); clearTimeout(this.pause);
    this.push();
    this.endFn(t);
    return true;
  }
}
