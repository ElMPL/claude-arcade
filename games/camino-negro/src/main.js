// Camino Negro — cliente: lobby, red, cola de animaciones y HUD.
import * as THREE from 'three';
import { SQUARES, GROUPS, CARDS, SKIN_COLS, BAIL, JAIL, money, short, groupSquares } from './data.js';
import { createEngine, dur } from './engine.js';
import { createScene, tileCenter, sideOut, makeAvatar, animAvatar, HATS, HALF } from './scene.js';

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const PREVIEW = new URLSearchParams(location.search).has('preview');
const store = { get(k, d) { try { const v = localStorage.getItem('cn:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem('cn:' + k, JSON.stringify(v)); } catch { /* sin storage */ } } };

let SC = null, S = null, engine = null, myId = null, ended = false;
let lobby = { seats: 4, limit: 30, looks: {} };
let myLook = store.get('look', Math.floor(Math.random() * HATS.length));
const queue = []; let qUntil = 0;
const pawns = []; // { av, sq (casillero que se ve), path: [], t, tag, money: [] }
let selSq = -1, cheer = -1, gotLobby = false;

// ---------- sonido ----------
let AC = null, muted = store.get('mute', false);
function beep(f = 440, d = 0.08, type = 'square', v = 0.05, slide = 0) {
  if (muted) return;
  try { AC = AC || new AudioContext(); const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = f; if (slide) o.frequency.linearRampToValueAtTime(f + slide, AC.currentTime + d); g.gain.value = v; g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + d); o.connect(g).connect(AC.destination); o.start(); o.stop(AC.currentTime + d); } catch { /* sin audio */ }
}
const SFX = {
  dice() { for (let k = 0; k < 7; k++) setTimeout(() => beep(300 + Math.random() * 400, 0.04, 'square', 0.03), k * 90); },
  step() { beep(520, 0.05, 'triangle', 0.04); },
  cash() { beep(880, 0.08, 'square', 0.04); setTimeout(() => beep(1320, 0.12, 'square', 0.04), 80); },
  pay() { beep(300, 0.18, 'sawtooth', 0.04, -120); },
  jail() { beep(200, 0.5, 'sawtooth', 0.05, -100); setTimeout(() => beep(150, 0.5, 'sawtooth', 0.05), 200); },
  card() { beep(660, 0.1, 'triangle', 0.05); setTimeout(() => beep(990, 0.14, 'triangle', 0.05), 100); },
  build() { beep(420, 0.06, 'square', 0.05); setTimeout(() => beep(520, 0.06, 'square', 0.05), 70); },
  win() { [523, 659, 784, 1046].forEach((f, k) => setTimeout(() => beep(f, 0.25, 'square', 0.05), k * 150)); },
};
$('mute').textContent = muted ? '🔇' : '🔊';
$('mute').onclick = () => { muted = !muted; store.set('mute', muted); $('mute').textContent = muted ? '🔇' : '🔊'; };

function toast(t, ms = 2200) { const e = $('toast'); e.innerHTML = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), ms); }
const inf = v => Math.round(v * (S ? S.infl : 1));
const mySeat = () => S ? S.seats.findIndex(s => s.id === myId) : -1;
const colOf = i => S && S.seats[i] ? S.seats[i].col : '#888';

// ---------- escena ----------
function initScene() {
  SC = createScene($('cv'), v => short(v));
  $('cv').addEventListener('pointerup', e => {
    if (SC.cam.drag && SC.cam.drag.moved > 8) return;
    const i = SC.pick(e.clientX, e.clientY);
    if (i >= 0 && SQUARES[i].price) openDeed(i); else closeDeed();
  });
}
function pawnSpot(i, k, n) {
  const [cx, cz] = tileCenter(i), [ox, oz] = sideOut(i);
  let bx = cx + ox * 0.2, bz = cz + oz * 0.2;
  if (i === JAIL && k >= 0 && S && S.seats[k] && S.seats[k].jail) { bx = cx - 0.3; bz = cz - 0.3; } // adentro de la celda
  const corner = i % 10 === 0, cols = corner ? 3 : 2;
  const j = pawns.filter((p, idx) => idx < k && p.sq === i && !S.seats[idx].out).length;
  const r = Math.floor(j / cols), c = j % cols;
  const along = ox ? [0, 1] : [1, 0], perp = [ox, oz];
  const sp = corner ? 0.42 : 0.34;
  const a = (c - (Math.min(cols, n) - 1) / 2) * sp, b = (r - 0.5 * (n > cols ? 1 : 0)) * 0.42;
  return [bx + along[0] * a + perp[0] * b, bz + along[1] * a + perp[1] * b];
}
function ensurePawns() {
  if (!S) return;
  S.seats.forEach((s, i) => {
    if (pawns[i]) return;
    const av = makeAvatar(s.col, s.look); SC.scene.add(av);
    const tag = document.createElement('div'); tag.className = 'tag'; tag.style.setProperty('--c', s.col); tag.textContent = s.name; $('labels').appendChild(tag);
    pawns[i] = { av, sq: s.pos, path: [], t: 0, tag, x: 0, z: 0, yaw: 0 };
    const n = pawns.filter(p => p.sq === s.pos).length; const [x, z] = pawnSpot(s.pos, i, n); pawns[i].x = x; pawns[i].z = z; av.position.set(x, SC.BH, z);
  });
}
function updatePawns(dt) {
  if (!S) return;
  pawns.forEach((p, i) => {
    if (!p) return; const s = S.seats[i];
    p.av.visible = !s.out; p.tag.style.display = s.out ? 'none' : '';
    let walk = false;
    if (p.path.length) {
      walk = true; p.t += dt / 0.19;
      const to = p.path[0], [fx, fz] = [p.x, p.z], [tx, tz] = pawnSpot(to, -1, 1);
      const k = Math.min(1, p.t);
      p.av.position.set(fx + (tx - fx) * k, SC.BH + Math.sin(k * Math.PI) * 0.35, fz + (tz - fz) * k);
      p.yaw = Math.atan2(tx - fx, tz - fz);
      if (k >= 1) { p.sq = to; p.path.shift(); p.t = 0; p.x = tx; p.z = tz; SFX.step(); }
    } else {
      const n = pawns.filter((q, j) => q && q.sq === p.sq && !S.seats[j].out).length;
      const [tx, tz] = pawnSpot(p.sq, i, n);
      p.x += (tx - p.x) * Math.min(1, dt * 8); p.z += (tz - p.z) * Math.min(1, dt * 8);
      p.av.position.set(p.x, SC.BH, p.z);
      const toC = Math.atan2(-p.x, -p.z); p.yaw += (((toC - p.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * Math.min(1, dt * 4);
    }
    p.av.rotation.y = p.yaw;
    animAvatar(p.av, walk, dt, cheer === i || (S.phase === 'over' && S.winner && S.winner.includes(i)));
    const [sx, sy, vis] = SC.project(new THREE.Vector3(p.av.position.x, p.av.position.y + 1.6, p.av.position.z));
    p.tag.style.left = sx + 'px'; p.tag.style.top = sy + 'px'; p.tag.style.visibility = vis ? 'visible' : 'hidden';
    p.tag.style.outline = S.turn === i && S.phase !== 'over' ? '3px solid #fff' : '';
  });
  // la cámara sigue un poco a quien juega
  const P = pawns[S.turn]; if (P) { SC.cam.wantX = P.av.position.x * 0.18; SC.cam.wantZ = P.av.position.z * 0.18; }
}
function floatMoney(seat, v) {
  const p = pawns[seat]; if (!p) return;
  const [sx, sy] = SC.project(new THREE.Vector3(p.av.position.x, p.av.position.y + 1.8, p.av.position.z));
  const d = document.createElement('div'); d.className = 'money ' + (v > 0 ? 'plus' : 'minus'); d.textContent = (v > 0 ? '+' : '-') + short(Math.abs(v));
  d.style.left = sx + 'px'; d.style.top = sy + 'px'; $('labels').appendChild(d); setTimeout(() => d.remove(), 1600);
}

// ---------- cola: eventos y estados en orden ----------
function onEvent(e) { queue.push({ e }); }
function onState(st) { queue.push({ st }); }
function pump() {
  const now = performance.now();
  while (queue.length && now >= qUntil) {
    const it = queue.shift();
    if (it.st) { applyState(it.st); continue; }
    play(it.e); qUntil = now + dur(it.e);
  }
}
function play(e) {
  ensurePawns();
  switch (e.e) {
    case 'dice': SC.rollDice(e.d); SFX.dice(); cheer = -1; break;
    case 'move': { const p = pawns[e.s]; if (!p) break; p.path = []; for (let k = 1; k <= e.steps; k++) p.path.push((e.from + k) % 40); p.t = 0; break; }
    case 'tp': { const p = pawns[e.s]; if (!p) break; p.path = [e.to]; p.t = 0; break; }
    case 'pay': if (e.s >= 0) floatMoney(e.s, -e.v); if (e.to >= 0) floatMoney(e.to, e.v); (e.s === -1 ? SFX.cash : SFX.pay)(); break;
    case 'card': showCard(e); SFX.card(); break;
    case 'jail': SFX.jail(); if (S) toast(`🚔 ${esc(S.seats[e.s].name)} va preso`); break;
    case 'buy': SFX.cash(); cheer = e.s; break;
    case 'build': SFX.build(); break;
    case 'bk': if (S) toast(`💀 ${esc(S.seats[e.s].name)} quebró`, 3000); SFX.pay(); break;
    case 'over': SFX.win(); break;
  }
}
function showCard(e) {
  const c = CARDS[e.deck][e.i], el = $('card');
  const ef = c.e, v = ef.v ? money(inf(ef.v)) : '';
  const efTxt = { jail: '🚔 Vas preso', pay: '−' + v, get: '+' + v, pct: `−${Math.round(ef.v * 100)}% de tu plata`, repairs: `−${money(inf(ef.h))} por casa · −${money(inf(ef.ht))} por hotel`, skip: '⏸ Perdés un turno', go: '➡ A la Salida', move: '➡ ' + (SQUARES[ef.to] || {}).name, back: `⬅ ${ef.n} casilleros`, rail2: '🚆 Estación más cercana, pagás doble', jcard: '🎫 Salida libre de la cárcel', each: `+${v} de cada uno`, payeach: `−${v} a cada uno` }[ef.t];
  el.innerHTML = `<div class="c ${e.deck}"><h3>${e.deck === 'negro' ? '☠ CAMINO NEGRO' : '🤝 LA ROSCA'}</h3><div class="who">le tocó a ${esc(S ? S.seats[e.s].name : '')}</div><p>${esc(c.x)}</p><div class="ef">${esc(efTxt)}</div></div>`;
  el.hidden = false; clearTimeout(showCard.t); showCard.t = setTimeout(() => { el.hidden = true; }, 3400);
}

function applyState(st) {
  const first = !S; S = st; S.recv = performance.now();
  ensurePawns();
  if (first) pawns.forEach((p, i) => { p.sq = S.seats[i].pos; });
  // si no hay animación pendiente, las fichas quedan donde dice el estado
  if (!queue.some(q => q.e && (q.e.e === 'move' || q.e.e === 'tp'))) pawns.forEach((p, i) => { if (p && !p.path.length && p.sq !== S.seats[i].pos) p.sq = S.seats[i].pos; });
  for (const s of SQUARES) if (s.price) SC.setProp(s.i, S.own[s.i], colOf);
  $('setup').hidden = true;
  renderHUD();
  if (selSq >= 0) openDeed(selSq, true);
  if (!$('mine').hidden) renderMine();
  if (S.phase === 'over') showEnd();
}

// ---------- HUD ----------
function renderHUD() {
  if (!S) return;
  const me = mySeat();
  $('round').innerHTML = `Mes ${S.round}${S.limit ? ' / ' + S.limit : ''} · <span class="inf">Inflación +${Math.round((S.infl - 1) * 100)}%</span>${S.pot ? ` · <span class="pot">🏖️ Pozo ${short(S.pot)}</span>` : ''}`;
  $('players').innerHTML = S.seats.map((s, i) => {
    const props = Object.values(S.own).filter(o => o.o === i).length;
    return `<div class="pl ${S.turn === i && S.phase !== 'over' ? 'turn' : ''} ${s.out ? 'out' : ''}" style="--c:${s.col}"><div class="sw">${s.bot ? '🤖' : i === me ? '⭐' : '🙂'}</div><b>${esc(s.name)}<span class="tags">${s.jail ? '🚔' : ''}${s.jcards ? '🎫' : ''}${s.skip ? '⏸' : ''}</span></b><small>${s.out ? 'Quebró' : money(s.cash)} · 🏠${props}</small>${S.turn === i && !s.bot && S.phase !== 'over' ? '<div class="tm" data-tm></div>' : ''}</div>`;
  }).join('');
  $('log').innerHTML = S.log.slice(-8).map(t => `<div>${esc(t)}</div>`).join('');
  renderBar();
}
function canAct() { return S && S.phase !== 'over' && S.turn === mySeat() && !queue.length && performance.now() >= qUntil; }
let barKey = '';
function renderBar() {
  if (!S) return;
  const me = mySeat(), p = S.seats[me], mine = S.turn === me && me >= 0;
  const ready = canAct();
  const k = [S.phase, S.turn, ready, p && p.cash, p && p.jail, p && p.jcards, S.offer, S.round].join('|');
  if (k === barKey) return; barKey = k;
  const bar = $('bar');
  if (S.phase === 'over') { bar.innerHTML = ''; return; }
  if (!mine) { const t = S.seats[S.turn]; bar.innerHTML = `<div class="msg">Juega <em>${esc(t.name)}</em>${t.bot ? ' 🤖' : ''}</div>` + (me >= 0 ? '<button class="b k" data-a="mine">📋 Mis propiedades</button>' : ''); return; }
  let h = '';
  if (S.phase === 'roll' && p.jail) {
    h = `<div class="msg">Estás en <em>Marcos Paz</em> (intento ${p.jtries + 1}/3)</div><button class="b" data-a="roll">🎲 Probar dobles</button><button class="b y" data-a="bail" ${p.cash < inf(BAIL) ? 'disabled' : ''}>💸 Fianza ${money(inf(BAIL))}</button>` + (p.jcards ? '<button class="b g" data-a="jcard">🎫 Salida libre</button>' : '');
  } else if (S.phase === 'roll') h = `<button class="b g" data-a="roll">🎲 Tirar dados</button>`;
  else if (S.phase === 'buy') { const s = SQUARES[S.offer], c = inf(s.price); h = `<div class="msg">¿Comprás <em>${esc(s.name)}</em>?</div><button class="b g" data-a="buy" ${p.cash < c ? 'disabled' : ''}>🏠 Comprar ${money(c)}</button><button class="b r" data-a="pass">No, gracias</button>`; }
  else if (S.phase === 'end') h = `<button class="b y" data-a="end">✔ Terminar turno</button>`;
  h += '<button class="b k" data-a="mine">📋 Mis propiedades</button>';
  bar.innerHTML = h;
  bar.querySelectorAll('button[data-a]').forEach(b => { if (b.dataset.a !== 'mine' && !ready) b.disabled = true; });
}
$('bar').addEventListener('click', e => {
  const b = e.target.closest('button[data-a]'); if (!b || b.disabled) return;
  if (b.dataset.a === 'mine') { $('mine').hidden = !$('mine').hidden; renderMine(); return; }
  if (b.dataset.a === 'buy' || b.dataset.a === 'pass') closeDeed();
  act({ t: b.dataset.a });
});
function act(a) {
  if (!S) return;
  barKey = ''; $('bar').querySelectorAll('button[data-a]').forEach(b => { if (b.dataset.a !== 'mine') b.disabled = true; });
  if (engine) engine.act(mySeat(), a); else Arcade.send('act', a, { to: Arcade.ctx.hostId });
}

// escritura de una propiedad (y botones si es tuya)
function rentRows(s, o) {
  if (s.t === 'prop') {
    const full = groupSquares(s.g).every(q => S.own[q] && S.own[q].o === (o ? o.o : -2));
    const names = ['Alquiler', 'Con 1 casa', 'Con 2 casas', 'Con 3 casas', 'Con 4 casas', 'Con HOTEL'];
    return names.map((n, k) => `<tr class="${o && !o.m && o.h === k ? 'on' : ''}"><td>${n}${k === 0 && full ? ' (x2 grupo)' : ''}</td><td>${money(inf(s.rent[k] * (k === 0 && full ? 2 : 1)))}</td></tr>`).join('');
  }
  if (s.t === 'rail') return [1, 2, 3, 4].map(n => `<tr><td>Con ${n} estación${n > 1 ? 'es' : ''}</td><td>${money(inf(25 * 2 ** (n - 1)))}</td></tr>`).join('');
  return `<tr><td>Con 1 servicio</td><td>4 × dados</td></tr><tr><td>Con los 2</td><td>10 × dados</td></tr>`;
}
function openDeed(i, refresh) {
  if (!S) return;
  selSq = i; SC.highlight(i);
  const s = SQUARES[i], o = S.own[i], me = mySeat();
  const col = s.t === 'prop' ? GROUPS[s.g].col : s.t === 'rail' ? '#3d3d3d' : '#4aa3c8';
  let acts = '';
  if (o && o.o === me && canAct()) {
    const can = (t) => engineCheck(t, i);
    if (s.t === 'prop') acts += `<button class="b g s" data-d="build" ${can('build') ? '' : 'disabled'}>🔨 Construir ${money(inf(GROUPS[s.g].house))}</button><button class="b k s" data-d="sell" ${can('sell') ? '' : 'disabled'}>Vender casa</button>`;
    acts += o.m ? `<button class="b y s" data-d="unmort" ${can('unmort') ? '' : 'disabled'}>Levantar hipoteca ${money(inf(s.price * 0.55))}</button>` : `<button class="b r s" data-d="mort" ${can('mort') ? '' : 'disabled'}>Hipotecar +${money(inf(s.price / 2))}</button>`;
  }
  $('deed').innerHTML = `<button class="x" data-d="x">✕</button><div class="hd" style="--c:${col}">${esc(s.name)}<small>${esc(s.sub || '')}</small></div><table>${rentRows(s, o)}</table>
    <div class="ft"><div>Precio ${money(inf(s.price))}${s.t === 'prop' ? ' · Casa ' + money(inf(GROUPS[s.g].house)) : ''} · Hipoteca ${money(inf(s.price / 2))}</div>
    <div>Dueño: <b style="color:${o ? colOf(o.o) : '#555'}">${o ? esc(S.seats[o.o].name) : 'nadie (está a la venta)'}</b>${o && o.m ? ' · <b style="color:#e8352f">HIPOTECADA</b>' : ''}${o && o.h ? ` · ${o.h === 5 ? 'hotel' : o.h + ' casa(s)'}` : ''}</div>${acts ? `<div class="acts">${acts}</div>` : ''}</div>`;
  $('deed').hidden = false;
}
function closeDeed() { selSq = -1; SC && SC.highlight(-1); $('deed').hidden = true; }
$('deed').addEventListener('click', e => { const b = e.target.closest('button[data-d]'); if (!b || b.disabled) return; if (b.dataset.d === 'x') return closeDeed(); act({ t: b.dataset.d, sq: selSq }); });
// mismas reglas que el motor (para habilitar botones también en los que no son host)
function engineCheck(t, sq) {
  const s = SQUARES[sq], o = S.own[sq], me = mySeat(), p = S.seats[me]; if (!o || o.o !== me) return false;
  const gs = s.t === 'prop' ? groupSquares(s.g) : [];
  if (t === 'build') return s.t === 'prop' && o.h < 5 && gs.every(q => S.own[q] && S.own[q].o === me && !S.own[q].m) && o.h <= Math.min(...gs.map(q => S.own[q].h)) && p.cash >= inf(GROUPS[s.g].house);
  if (t === 'sell') return o.h > 0 && o.h >= Math.max(...gs.map(q => S.own[q] ? S.own[q].h : 0));
  if (t === 'mort') return !o.m && (s.t !== 'prop' || gs.every(q => !S.own[q] || S.own[q].h === 0));
  if (t === 'unmort') return o.m && p.cash >= inf(s.price * 0.55);
  return false;
}
function renderMine() {
  if (!S || $('mine').hidden) return;
  const me = mySeat();
  const list = Object.keys(S.own).map(Number).filter(q => S.own[q].o === me).sort((a, b) => a - b);
  const ready = canAct();
  $('mine').innerHTML = `<h2>Mis propiedades <button class="b k s" data-m="x">Cerrar</button></h2>` + (list.length ? list.map(q => {
    const s = SQUARES[q], o = S.own[q], col = s.t === 'prop' ? GROUPS[s.g].col : '#555';
    const btn = (t, txt, cls) => `<button class="b ${cls} s" data-m="${t}" data-q="${q}" ${ready && engineCheck(t, q) ? '' : 'disabled'}>${txt}</button>`;
    return `<div class="row" style="--c:${col}"><i></i><span>${esc(s.name)} ${o.m ? '<small style="color:#e8352f">(hipotecada)</small>' : ''} ${o.h ? (o.h === 5 ? '🏨' : '🏠'.repeat(o.h)) : ''}</span><span class="acts">${s.t === 'prop' ? btn('build', '🔨', 'g') + btn('sell', '−🏠', 'k') : ''}${o.m ? btn('unmort', 'Levantar', 'y') : btn('mort', 'Hipotecar', 'r')}</span></div>`;
  }).join('') : '<div class="none">Todavía no tenés nada. Ni casa propia, como todo argentino.</div>') + `<div class="none" style="padding:8px">Construís cuando tenés todo el grupo del mismo color, parejo. Solo en tu turno.</div>`;
}
$('mine').addEventListener('click', e => { const b = e.target.closest('button[data-m]'); if (!b || b.disabled) return; if (b.dataset.m === 'x') { $('mine').hidden = true; return; } act({ t: b.dataset.m, sq: +b.dataset.q }); });

// ---------- fin ----------
let endShown = false;
function showEnd() {
  if (endShown) return; endShown = true;
  const order = S.seats.map((s, i) => ({ s, i, w: S.worths ? S.worths[i] : s.cash })).sort((a, b) => b.w - a.w);
  const names = S.winner.map(i => S.seats[i].name).join(' y ');
  let n = 12;
  const draw = () => {
    $('end').innerHTML = `<div class="box"><div class="logo">${S.winner.length > 1 ? 'EMPATE' : '¡GANÓ ' + esc(names).toUpperCase() + '!'}</div><div class="sub">${S.winner.length > 1 ? esc(names) : 'Se quedó con todo. Como corresponde.'}</div><div class="rank">${order.map((o, k) => `<div class="${S.winner.includes(o.i) ? 'w' : ''}"><span>${k + 1}°</span><span class="sw" style="--c:${o.s.col}"></span><span>${esc(o.s.name)}${o.s.out ? ' 💀' : ''}</span><span>${o.s.out ? 'Quebró' : money(o.w)}</span></div>`).join('')}</div><div class="count">Volviendo a la sala en ${n}…</div></div>`;
  };
  setTimeout(() => { $('end').hidden = false; draw(); }, 1500);
  const iv = setInterval(() => { n--; if (!$('end').hidden) draw(); if (n <= 0) { clearInterval(iv); finishGame(); } }, 1000);
}
function finishGame() {
  if (ended) return; ended = true;
  if (!Arcade.isHost() && Arcade.isOnline()) return;
  const winners = (S.winner || []).map(i => S.seats[i]).filter(s => !s.bot && s.id).map(s => s.id);
  Arcade.end({ winners, text: winners.length ? '' : '🤖 Ganó un bot en Camino Negro' });
}

// ---------- lobby ----------
function humans() { return Arcade.players.map(p => ({ id: p.id, name: p.name, slot: p.slot })).sort((a, b) => a.slot - b.slot); }
function renderSetup() {
  if (S) return;
  const H = humans(), host = Arcade.isHost(), total = Math.max(H.length, lobby.seats);
  const seats = [...H.map(h => ({ name: h.name, id: h.id })), ...Array.from({ length: total - H.length }, (_, k) => ({ name: 'Bot ' + (k + 1), bot: true }))];
  const seatHTML = seats.map((s, i) => `<div class="seat ${s.id === myId ? 'me' : ''}" style="--c:${SKIN_COLS[i]}"><span class="sw">${s.bot ? '🤖' : '🙂'}</span>${esc(s.name)}</div>`).join('');
  const opt = (k, vals, lab) => `<div class="opts">${vals.map(v => `<button data-k="${k}" data-v="${v}" class="${lobby[k] === v ? 'on' : ''}" ${host ? '' : 'disabled'}>${lab(v)}</button>`).join('')}</div>`;
  const html = `<div class="box"><div class="logo">CAMINO <span>NEGRO</span></div><div class="sub">Comprá barrios, cobrá alquileres y sobreviví a la inflación.<br>Cada vuelta todo sale 4% más caro… menos tu plata guardada.</div>
    <h4>Jugadores (los lugares libres los juegan bots)</h4><div class="seats">${seatHTML}</div>
    <h4>Cantidad de jugadores</h4>${opt('seats', [2, 3, 4, 5, 6].filter(n => n >= Math.max(2, H.length)), v => v)}
    <h4>Duración</h4>${opt('limit', [15, 30, 45], v => v + ' meses')}
    <h4>Tu muñequito</h4><div class="opts">${HATS.map((h, k) => `<button data-look="${k}" class="${myLook === k ? 'on' : ''}">${h}</button>`).join('')}</div>
    ${host ? '<div class="go"><button class="b g" id="startBtn">▶ Empezar</button></div>' : '<div class="wait">Esperando que el host empiece…</div>'}</div>`;
  if ($('setup')._h !== html) { $('setup').innerHTML = html; $('setup')._h = html; }
  $('setup').hidden = false;
}
$('setup').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.id === 'startBtn') return startGame();
  if (b.dataset.look != null) { myLook = +b.dataset.look; store.set('look', myLook); if (Arcade.isHost()) { lobby.looks[myId] = myLook; broadcastLobby(); } else { Arcade.send('look', { k: myLook }, { to: Arcade.ctx.hostId }); renderSetup(); } return; }
  if (!Arcade.isHost() || !b.dataset.k) return;
  lobby[b.dataset.k] = +b.dataset.v; broadcastLobby();
});
function broadcastLobby() { if (Arcade.isOnline()) Arcade.send('lobby', lobby); renderSetup(); }
function startGame() {
  if (engine || S) return;
  const H = humans(), total = Math.max(H.length, Math.max(2, lobby.seats));
  const BOTN = ['El Tano', 'La Chola', 'Don Ramón', 'Pocho', 'La Turca', 'Cacho', 'Tito', 'Marta'].sort(() => Math.random() - 0.5);
  const seats = [...H.map(h => ({ id: h.id, name: h.name, look: lobby.looks[h.id] ?? (h.id === myId ? myLook : h.slot) })), ...Array.from({ length: total - H.length }, (_, k) => ({ name: BOTN[k], bot: true, look: (k + 2) % HATS.length }))]
    .map((s, i) => ({ ...s, col: SKIN_COLS[i] }));
  engine = createEngine(seats, { limit: lobby.limit }, {
    push: st => { if (Arcade.isOnline()) Arcade.send('st', st); onState(st); },
    event: e => { if (Arcade.isOnline()) Arcade.send('ev', e); onEvent(e); },
  });
  engine.push();
}

// ---------- admin ----------
function setupAdmin() {
  if (!Arcade.admin) return;
  Arcade.admin.define([
    { id: 'cn.cash', label: 'Bolso en el convento (+$1M)', type: 'button' },
    { id: 'cn.d66', label: 'Próxima tirada: doble 6', type: 'button' },
    { id: 'cn.win', label: 'Ganar ya', type: 'button' },
  ]);
  const req = k => { if (engine) engine.admin(mySeat(), k); else Arcade.send('admReq', { k }, { to: Arcade.ctx.hostId }); };
  Arcade.admin.on('cn.cash', () => req('cash'));
  Arcade.admin.on('cn.d66', () => req('dice66'));
  Arcade.admin.on('cn.win', () => req('win'));
  Arcade.on('admReq', (d, from, meta) => { if (!engine || !meta || !meta.admin || !d) return; const seat = engine.S.seats.findIndex(s => s.id === from); if (seat >= 0 && ['cash', 'dice66', 'win'].includes(d.k)) engine.admin(seat, d.k); });
}

// ---------- vista previa (para la foto del juego) ----------
function preview() {
  const seats = ['Gaby', 'Nico', 'Sofi', 'Tano'].map((n, i) => ({ name: n, col: SKIN_COLS[i], look: i, bot: true }));
  engine = createEngine(seats, { limit: 30 }, { push: st => onState(st), event: () => {} });
  const E = engine.S; E.infl = 1.24; E.round = 7;
  const own = { 1: [0, 2], 3: [0, 2], 6: [1, 1], 8: [1, 1], 9: [1, 2], 11: [2, 0], 16: [3, 0], 18: [3, 0], 21: [2, 0], 24: [1, 0], 37: [0, 5], 39: [0, 5], 5: [2, 0], 15: [3, 0], 31: [3, 0] };
  for (const [q, [o, h]] of Object.entries(own)) E.own[q] = { o, h, m: false };
  E.seats[0].pos = 7; E.seats[1].pos = 3; E.seats[2].pos = 13; E.seats[3].pos = 10; E.seats[3].jail = 1; E.turn = 0; E.phase = 'end';
  E.seats.forEach((s, i) => { s.cash = [2410, 1180, 760, 330][i]; });
  E.log.push('🏠 Gaby compró Bariloche', '🃏 Nico: Te paró la caminera', '🚔 Tano va preso a Marcos Paz');
  engine.push(); SC.cam.yaw = 0; SC.cam.dist = 15; SC.cam.pitch = 1.02;
  setTimeout(() => { showCard({ deck: 'negro', i: 0, s: 0 }); clearTimeout(showCard.t); }, 600);
}

// ---------- loop ----------
let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  pump();
  if (engine && !PREVIEW) engine.tick();
  updatePawns(dt);
  if (S) {
    renderBar();
    const tm = document.querySelector('[data-tm]');
    if (tm && S.tl) { const left = Math.max(0, S.tl - (performance.now() - S.recv)); tm.style.width = (left / 35000 * 100) + '%'; }
  }
  SC.update(dt);
  requestAnimationFrame(loop);
}

// ---------- inicio ----------
document.fonts.load('40px "Lilita One"').catch(() => {}).finally(() => {
  initScene();
  requestAnimationFrame(loop);
  Arcade.ready().then(ctx => {
    myId = ctx.me.id;
    if (PREVIEW) return preview();
    lobby.looks[myId] = myLook;
    lobby.seats = Math.max(4, ctx.players.length);
    setupAdmin();
    Arcade.on('st', st => { if (!engine) onState(st); });
    Arcade.on('ev', e => { if (!engine) onEvent(e); });
    Arcade.on('lobby', L => { if (Arcade.isHost() || S) return; gotLobby = true; lobby = L; renderSetup(); });
    Arcade.on('look', (d, from) => { if (!Arcade.isHost() || engine || !d) return; lobby.looks[from] = Math.max(0, Math.min(HATS.length - 1, d.k | 0)); broadcastLobby(); });
    Arcade.on('act', (a, from) => { if (!engine) return; const seat = engine.S.seats.findIndex(s => s.id === from); if (seat >= 0) engine.act(seat, a); });
    Arcade.on('hi', (d, from) => {
      if (!Arcade.isHost()) return;
      if (d && Number.isInteger(d.look)) lobby.looks[from] = d.look;
      if (engine) engine.push(); else broadcastLobby();
    });
    Arcade.onPlayerLeft(id => {
      if (engine) { const seat = engine.S.seats.findIndex(s => s.id === id); if (seat >= 0) engine.setBot(seat); }
      else if (Arcade.isHost()) broadcastLobby(); else renderSetup();
    });
    Arcade.onHostChanged(() => {
      if (!Arcade.isHost()) return;
      if (!S) { broadcastLobby(); return; }
      if (S.phase === 'over') { finishGame(); return; }
      // el nuevo host sigue la partida desde el último estado
      engine = createEngine(S.seats, { limit: S.limit }, { push: st => { Arcade.send('st', st); onState(st); }, event: e => { Arcade.send('ev', e); onEvent(e); } });
      engine.restore(S);
      S.seats.forEach((s, i) => { if (s.id && !Arcade.players.some(p => p.id === s.id)) engine.setBot(i); });
    });
    if (Arcade.isHost()) renderSetup();
    else {
      renderSetup();
      let tries = 0;
      const hi = setInterval(() => { if (S || gotLobby || ++tries > 30) clearInterval(hi); else if (tries % 3 === 0) Arcade.send('hi', { look: myLook }, { to: Arcade.ctx.hostId }); }, 1000);
      Arcade.send('hi', { look: myLook }, { to: Arcade.ctx.hostId });
    }
  });
});
window.__cn = { get S() { return S; }, get engine() { return engine; } };
