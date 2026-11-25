// Camino Negro — cliente: lobby, red, cola de animaciones, efectos y HUD.
import * as THREE from 'three';
import { SQUARES, GROUPS, CARDS, SKIN_COLS, BAIL, JAIL, money, short, groupSquares } from './data.js';
import { createEngine, dur } from './engine.js';
import { botAcceptTrade } from './bot.js';
import { createScene, tileCenter, sideOut, makeAvatar, animAvatar, HATS } from './scene.js';
import { createFX } from './fx.js';

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const PREVIEW = new URLSearchParams(location.search).has('preview');
const store = { get(k, d) { try { const v = localStorage.getItem('cn:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem('cn:' + k, JSON.stringify(v)); } catch { /* sin storage */ } } };
const EMOS = ['😂', '😭', '😡', '🧉', '🙏', '💸', '🤡', '🔥'];

let SC = null, FX = null, S = null, engine = null, myId = null, ended = false;
let lobby = { seats: 4, limit: 30, looks: {} };
let myLook = store.get('look', Math.floor(Math.random() * HATS.length));
const queue = []; let qUntil = 0;
const pawns = [];
let selSq = -1, cheer = -1, gotLobby = false, lastTurn = -1;
let view = null;          // ventana abierta por el jugador: 'mine' | 'trade'
let tradeUI = null;       // borrador del trato
let prevCash = [];

// ---------- sonido ----------
let AC = null, muted = store.get('mute', false);
function beep(f = 440, d = 0.08, type = 'square', v = 0.05, slide = 0, delay = 0) {
  if (muted) return;
  try {
    AC = AC || new AudioContext(); const t = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.linearRampToValueAtTime(f + slide, t + d);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(g).connect(AC.destination); o.start(t); o.stop(t + d + 0.02);
  } catch { /* sin audio */ }
}
const SFX = {
  dice() { for (let k = 0; k < 8; k++) beep(250 + Math.random() * 500, 0.035, 'square', 0.03, 0, k * 0.09); beep(120, 0.12, 'sine', 0.09, -40, 0.9); },
  step(k) { beep(480 + k * 18, 0.05, 'triangle', 0.045); },
  land() { beep(180, 0.12, 'sine', 0.1, -60); },
  cash() { beep(988, 0.07, 'square', 0.04); beep(1319, 0.16, 'square', 0.04, 0, 0.07); },
  pay() { beep(330, 0.2, 'sawtooth', 0.035, -150); },
  jail() { for (let k = 0; k < 4; k++) beep(k % 2 ? 620 : 820, 0.22, 'sawtooth', 0.035, 0, k * 0.22); },
  card() { beep(660, 0.09, 'triangle', 0.05); beep(990, 0.14, 'triangle', 0.05, 0, 0.09); },
  build() { beep(392, 0.06, 'square', 0.05); beep(523, 0.06, 'square', 0.05, 0, 0.07); beep(659, 0.1, 'square', 0.05, 0, 0.14); },
  gavel() { beep(140, 0.08, 'square', 0.09); beep(140, 0.08, 'square', 0.09, 0, 0.16); },
  bid() { beep(740, 0.06, 'square', 0.04, 120); },
  turn() { [523, 659, 784].forEach((f, k) => beep(f, 0.12, 'square', 0.045, 0, k * 0.09)); },
  pop() { beep(880, 0.05, 'sine', 0.06, 300); },
  nope() { beep(220, 0.18, 'square', 0.04, -60); },
  win() { [523, 659, 784, 1046, 784, 1046].forEach((f, k) => beep(f, 0.22, 'square', 0.05, 0, k * 0.14)); },
  bk() { [392, 330, 262, 196].forEach((f, k) => beep(f, 0.3, 'sawtooth', 0.04, 0, k * 0.2)); },
};
$('mute').textContent = muted ? '🔇' : '🔊';
$('mute').onclick = () => { muted = !muted; store.set('mute', muted); $('mute').textContent = muted ? '🔇' : '🔊'; };

function toast(t, ms = 2200) { const e = $('toast'); e.innerHTML = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), ms); }
function banner(big, small = '') { const b = $('banner'); b.hidden = true; void b.offsetWidth; b.innerHTML = esc(big) + (small ? `<small>${esc(small)}</small>` : ''); b.hidden = false; clearTimeout(banner.t); banner.t = setTimeout(() => { b.hidden = true; }, 1650); }
const inf = v => Math.round(v * (S ? S.infl : 1));
const mySeat = () => S ? S.seats.findIndex(s => s.id === myId) : -1;
const colOf = i => S && S.seats[i] ? S.seats[i].col : '#888';
const nm = i => S && S.seats[i] ? esc(S.seats[i].name) : '';
const sqCol = q => { const s = SQUARES[q]; return s.t === 'prop' ? GROUPS[s.g].col : s.t === 'rail' ? '#3d3d3d' : '#4aa3c8'; };

// ---------- escena ----------
function initScene() {
  SC = createScene($('cv'), v => short(v)); FX = createFX(SC);
  const cv = $('cv'), hov = $('hover');
  cv.addEventListener('pointerup', e => {
    if (SC.cam.drag && SC.cam.drag.moved > 8) return;
    const i = SC.pick(e.clientX, e.clientY);
    if (i >= 0 && SQUARES[i].price) { openDeed(i); SFX.pop(); } else closeDeed();
  });
  let hk = 0;
  cv.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || (SC.cam.drag && SC.cam.drag.moved > 8) || !S) { hov.hidden = true; return; }
    if (performance.now() - hk < 60) return; hk = performance.now();
    const i = SC.pick(e.clientX, e.clientY);
    if (i < 0) { hov.hidden = true; cv.style.cursor = ''; return; }
    const s = SQUARES[i], o = S.own[i];
    hov.innerHTML = `<i style="--c:${s.price ? sqCol(i) : '#fff'}"></i><b>${esc(s.name)}</b>${s.price ? ` · ${o ? 'de ' + nm(o.o) + (o.m ? ' (hipotecada)' : '') : 'a la venta ' + short(inf(s.price))}` : s.sub ? ' · ' + esc(s.sub) : ''}`;
    hov.style.left = e.clientX + 'px'; hov.style.top = e.clientY + 'px'; hov.hidden = false; cv.style.cursor = s.price ? 'pointer' : '';
  });
  cv.addEventListener('pointerleave', () => { hov.hidden = true; });
}
function pawnSpot(i, k, n) {
  const [cx, cz] = tileCenter(i), [ox, oz] = sideOut(i);
  let bx = cx + ox * 0.2, bz = cz + oz * 0.2;
  if (i === JAIL && k >= 0 && S && S.seats[k] && S.seats[k].jail) { bx = cx - 0.3; bz = cz - 0.3; }
  const corner = i % 10 === 0, cols = corner ? 3 : 2;
  const j = k < 0 ? 0 : pawns.filter((p, idx) => idx < k && p && p.sq === i && !S.seats[idx].out).length;
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
    pawns[i] = { av, sq: s.pos, path: [], t: 0, tag, x: 0, z: 0, yaw: 0, squash: 0, fall: 0, steps: 0 };
    const [x, z] = pawnSpot(s.pos, i, 1); pawns[i].x = x; pawns[i].z = z; av.position.set(x, SC.BH, z);
  });
}
const pawnPos = (i, up = 0) => { const p = pawns[i]; return p ? new THREE.Vector3(p.av.position.x, SC.BH + 0.6 + up, p.av.position.z) : new THREE.Vector3(0, SC.BH + 0.4, 0); };
function updatePawns(dt) {
  if (!S) return;
  pawns.forEach((p, i) => {
    if (!p) return; const s = S.seats[i];
    p.fall += ((s.out ? 1 : 0) - p.fall) * Math.min(1, dt * 3);
    p.tag.style.display = s.out ? 'none' : '';
    let walk = false;
    if (p.path.length) {
      walk = true; p.t += dt / 0.19;
      const to = p.path[0], [tx, tz] = pawnSpot(to, -1, 1), k = Math.min(1, p.t);
      p.av.position.set(p.x + (tx - p.x) * k, SC.BH + Math.sin(k * Math.PI) * 0.4, p.z + (tz - p.z) * k);
      p.yaw = Math.atan2(tx - p.x, tz - p.z);
      if (k >= 1) {
        p.sq = to; p.path.shift(); p.t = 0; p.x = tx; p.z = tz; SFX.step(p.steps++);
        if (!p.path.length) { p.squash = 1; SFX.land(); const [cx, cz] = tileCenter(to); FX.ring(cx, cz, s.col, 1.2); }
      }
    } else {
      const n = pawns.filter((q, j) => q && q.sq === p.sq && !S.seats[j].out).length;
      const [tx, tz] = pawnSpot(p.sq, i, n);
      p.x += (tx - p.x) * Math.min(1, dt * 8); p.z += (tz - p.z) * Math.min(1, dt * 8);
      p.av.position.set(p.x, SC.BH, p.z);
      const toC = Math.atan2(-p.x, -p.z); p.yaw += (((toC - p.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * Math.min(1, dt * 4);
    }
    p.squash = Math.max(0, p.squash - dt * 4);
    const sq = Math.sin(p.squash * Math.PI) * 0.25;
    p.av.scale.set(1.7 * (1 + sq * 0.6), 1.7 * (1 - sq), 1.7 * (1 + sq * 0.6));
    p.av.rotation.set(0, p.yaw, p.fall * Math.PI / 2);
    animAvatar(p.av, walk, dt, cheer === i || (S.phase === 'over' && S.winner && S.winner.includes(i)));
    const [sx, sy, vis] = SC.project(new THREE.Vector3(p.av.position.x, p.av.position.y + 1.4, p.av.position.z));
    p.tag.style.left = sx + 'px'; p.tag.style.top = sy + 'px'; p.tag.style.visibility = vis ? 'visible' : 'hidden';
    p.tag.classList.toggle('turn', S.turn === i && S.phase !== 'over');
  });
  const P = pawns[S.turn]; if (P) { SC.cam.wantX = P.av.position.x * 0.18; SC.cam.wantZ = P.av.position.z * 0.18; }
}
// textos que flotan sobre una ficha
function floatAt(world, cls, html, ms = 1700) {
  const [sx, sy, vis] = SC.project(world); if (!vis) return;
  const d = document.createElement('div'); d.className = cls; d.innerHTML = html; d.style.left = sx + 'px'; d.style.top = sy + 'px';
  $('labels').appendChild(d); setTimeout(() => d.remove(), ms);
}
const floatMoney = (seat, v) => floatAt(pawnPos(seat, 1.2), 'money ' + (v > 0 ? 'plus' : 'minus'), (v > 0 ? '+' : '-') + short(Math.abs(v)), 1600);
const bubble = (seat, html, emo) => floatAt(pawnPos(seat, emo ? 1.45 : 1.25), 'bub' + (emo ? ' emo' : ''), html, emo ? 2000 : 1800);
const BANK = () => new THREE.Vector3(0, SC.BH + 0.3, 0);
const POT = () => { const [x, z] = tileCenter(20); return new THREE.Vector3(x, SC.BH + 0.3, z); };

// ---------- cola: eventos y estados en orden ----------
function onEvent(e) { if (e.e === 'bid' || e.e === 'fold') play(e); else queue.push({ e }); }
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
    case 'dice': {
      SC.rollDice(e.d); SFX.dice(); cheer = -1;
      setTimeout(() => { FX.shake(0.12); floatAt(new THREE.Vector3(0, SC.BH + 1.2, 0), 'dice', `${e.d[0] + e.d[1]}${e.d[0] === e.d[1] ? '<small>¡DOBLES!</small>' : ''}`, 1300); }, 950);
      break;
    }
    case 'move': { const p = pawns[e.s]; if (!p) break; p.path = []; p.steps = 0; for (let k = 1; k <= e.steps; k++) p.path.push((e.from + k) % 40); p.t = 0; break; }
    case 'tp': { const p = pawns[e.s]; if (!p) break; p.path = [e.to]; p.t = 0; break; }
    case 'pay': {
      const from = e.s >= 0 ? pawnPos(e.s) : BANK(), to = e.to >= 0 ? pawnPos(e.to) : e.to === -2 ? POT() : BANK();
      FX.coins(from, to, Math.min(14, 3 + Math.round(Math.log2(1 + e.v / Math.max(1, inf(20))) * 2)));
      if (e.s >= 0) floatMoney(e.s, -e.v); if (e.to >= 0) setTimeout(() => floatMoney(e.to, e.v), 550);
      (e.s === -1 ? SFX.cash : SFX.pay)();
      break;
    }
    case 'card': {
      showCard(e); SFX.card();
      const d = SC.decks[e.deck]; if (d) { d.position.y = SC.BH + 0.5; setTimeout(() => { d.position.y = SC.BH + 0.11; }, 180); }
      break;
    }
    case 'jail': { SFX.jail(); const [x, z] = tileCenter(JAIL); FX.siren(x, z); FX.shake(0.35); if (S) banner('¡PRESO!', S.seats[e.s].name + ' va a Marcos Paz'); break; }
    case 'buy': { SFX.cash(); cheer = e.s; FX.confetti(pawnPos(e.s, 0.6), 40, 2.6); const [x, z] = tileCenter(e.sq); FX.ring(x, z, colOf(e.s), 1.4); if (e.auc && S) toast(`🔨 ¡Vendido a ${nm(e.s)}!`); break; }
    case 'build': SFX.build(); { const [x, z] = tileCenter(e.sq); FX.ring(x, z, '#21b357', 1); } break;
    case 'bk': if (S) banner('¡QUEBRÓ!', S.seats[e.s].name + ' se fundió'); SFX.bk(); FX.shake(0.5); break;
    case 'aucst': SFX.gavel(); banner('¡SUBASTA!', SQUARES[e.sq].name); break;
    case 'bid': SFX.bid(); if (S) bubble(e.s, '🙋 ' + short(e.v)); { const b = document.querySelector('.bigBid b'); if (b) { b.classList.remove('hit'); void b.offsetWidth; b.classList.add('hit'); } } break;
    case 'fold': if (S) bubble(e.s, 'Paso 🙅'); break;
    case 'offer': if (S && S.seats[e.to] && S.seats[e.to].id === myId) { SFX.turn(); toast(`🤝 ${nm(e.from)} te ofrece un trato`); } break;
    case 'trade': if (e.ok) { SFX.cash(); FX.coins(pawnPos(e.from), pawnPos(e.to), 6); FX.coins(pawnPos(e.to), pawnPos(e.from), 6); FX.confetti(pawnPos(e.to, 0.6), 30); bubble(e.to, '🤝 ¡Trato!'); } else { SFX.nope(); bubble(e.to, '🙅 Ni en pedo'); } break;
    case 'over': SFX.win(); for (let k = 0; k < 4; k++) setTimeout(() => FX.confetti(new THREE.Vector3((Math.random() - 0.5) * 6, SC.BH + 0.5, (Math.random() - 0.5) * 6), 80, 4), k * 400); break;
  }
}
function showCard(e) {
  const c = CARDS[e.deck][e.i], el = $('card'), ef = c.e, v = ef.v ? money(inf(ef.v)) : '';
  const efTxt = { jail: '🚔 Vas preso', pay: '−' + v, get: '+' + v, pct: `−${Math.round(ef.v * 100)}% de tu plata`, repairs: `−${short(inf(ef.h))} por casa · −${short(inf(ef.ht))} por hotel`, skip: '⏸ Perdés un turno', go: '➡ A la Salida', move: '➡ ' + (SQUARES[ef.to] || {}).name, back: `⬅ ${ef.n} casilleros`, rail2: '🚆 Estación más cercana, pagás doble', jcard: '🎫 Salida libre de la cárcel', each: `+${v} de cada uno`, payeach: `−${v} a cada uno` }[ef.t];
  el.classList.remove('out');
  el.innerHTML = `<div class="c ${e.deck}"><h3>${e.deck === 'negro' ? '☠ CAMINO NEGRO' : '🤝 LA ROSCA'}</h3><div class="w">le tocó a ${nm(e.s)}</div><p>${esc(c.x)}</p><div class="ef">${esc(efTxt)}</div></div>`;
  el.hidden = false; clearTimeout(showCard.t); clearTimeout(showCard.t2);
  showCard.t = setTimeout(() => el.classList.add('out'), 3000); showCard.t2 = setTimeout(() => { el.hidden = true; el.classList.remove('out'); }, 3400);
}

function applyState(st) {
  const first = !S; S = st; S.recv = performance.now();
  ensurePawns();
  if (first) pawns.forEach((p, i) => { p.sq = S.seats[i].pos; });
  if (!queue.some(q => q.e && (q.e.e === 'move' || q.e.e === 'tp'))) pawns.forEach((p, i) => { if (p && !p.path.length && p.sq !== S.seats[i].pos) p.sq = S.seats[i].pos; });
  for (const s of SQUARES) if (s.price) SC.setProp(s.i, S.own[s.i], colOf, FX.pop);
  $('setup').hidden = true;
  if (S.turn !== lastTurn && S.phase !== 'over') { lastTurn = S.turn; if (S.turn === mySeat()) { banner('¡TE TOCA!', 'Tirá los dados'); SFX.turn(); } }
  if (tradeUI && !(S.turn === mySeat() && ['roll', 'end'].includes(S.phase))) { tradeUI = null; if (view === 'trade') view = null; }
  renderHUD();
  if (selSq >= 0) openDeed(selSq);
  renderModal();
  if (S.phase === 'over') showEnd();
}

// ---------- HUD ----------
function renderHUD() {
  if (!S) return;
  const me = mySeat(), pct = Math.round((S.infl - 1) * 100);
  const r = $('round'), prevPct = r.dataset.p;
  r.innerHTML = `<span>📅 Mes ${S.round}${S.limit ? '/' + S.limit : ''}</span><span class="inf ${prevPct != null && +prevPct !== pct ? 'bump' : ''}">📈 +${pct}%</span>${S.pot ? `<span class="pot">🏖️ ${short(S.pot)}</span>` : ''}`;
  r.dataset.p = pct;
  $('players').innerHTML = S.seats.map((s, i) => {
    const props = Object.values(S.own).filter(o => o.o === i).length;
    const d = prevCash[i] == null ? '' : s.cash < prevCash[i] ? 'flash' : s.cash > prevCash[i] ? 'gain' : '';
    return `<div class="pl ${S.turn === i && S.phase !== 'over' ? 'turn' : ''} ${s.out ? 'out' : ''} ${d}" style="--c:${s.col}" data-p="${i}" title="${i === me ? 'Vos' : 'Tocá para ofrecerle un trato'}"><div class="sw">${s.bot ? '🤖' : i === me ? '⭐' : '🙂'}</div><b>${esc(s.name)}<span class="tags">${s.jail ? '🚔' : ''}${s.jcards ? '🎫' : ''}${s.skip ? '⏸' : ''}</span></b><small>${s.out ? 'Quebró' : short(s.cash)}<i>🏠${props}</i></small>${S.turn === i && !s.bot && ['roll', 'buy', 'end'].includes(S.phase) ? '<div class="tm" data-tm></div>' : ''}</div>`;
  }).join('');
  prevCash = S.seats.map(s => s.cash);
  $('log').innerHTML = S.log.slice(-6).map(t => `<div>${esc(t)}</div>`).join('');
  renderDock();
}
$('players').addEventListener('click', e => {
  const el = e.target.closest('[data-p]'); if (!el || !S) return;
  const i = +el.dataset.p; if (i === mySeat()) { view = 'mine'; renderModal(true); return; }
  if (canTrade()) openTrade(i); else toast(S.seats[i].out ? 'Ese ya quebró' : 'Los tratos se ofrecen en tu turno');
});
function canAct() { return S && S.phase !== 'over' && S.turn === mySeat() && !queue.length && performance.now() >= qUntil; }
function canTrade() { return canAct() && ['roll', 'end'].includes(S.phase) && S.seats.some((s, i) => i !== mySeat() && !s.out); }
let dockKey = '';
function primary() {
  if (!S || !canAct()) return null;
  const p = S.seats[mySeat()];
  if (S.phase === 'roll') return { t: 'roll', txt: p.jail ? '🎲 PROBAR DOBLES' : '🎲 TIRAR DADOS', cls: 'g' };
  if (S.phase === 'end') return { t: 'end', txt: '✔ TERMINAR TURNO', cls: 'y' };
  return null;
}
function renderDock() {
  if (!S) return;
  const me = mySeat(), p = S.seats[me], mine = S.turn === me && me >= 0, ready = canAct();
  const k = [S.phase, S.turn, ready, p && p.cash, p && p.jail, p && p.jcards].join('|');
  if (k === dockKey) return; dockKey = k;
  const d = $('dock');
  if (S.phase === 'over') { d.innerHTML = ''; return; }
  const side = me >= 0 ? `<button class="b k" data-a="trade" ${canTrade() ? '' : 'disabled'} title="Ofrecer un trato">🤝</button><button class="b k" data-a="mine" title="Mis propiedades">🏠</button>` : '';
  if (!mine || S.phase === 'auction' || S.phase === 'trade') {
    const t = S.seats[S.turn];
    const what = S.phase === 'auction' ? '🔨 Subasta en curso' : S.phase === 'trade' ? '🤝 Negociando…' : `Juega <em>${esc(t.name)}</em>${t.bot ? ' 🤖' : ''}`;
    d.innerHTML = `<div class="msg" style="--c:${t.col}"><span class="dot"></span>${what}</div>` + side; return;
  }
  const pr = primary();
  let h = '';
  if (pr) h += `<button class="b xl ${pr.cls} pulse" data-a="${pr.t}">${pr.txt}<span class="key">espacio</span></button>`;
  else if (S.phase === 'buy') h += `<div class="msg"><span class="dot" style="--c:${sqCol(S.offer)}"></span>¿Comprás <em>${esc(SQUARES[S.offer].name)}</em>?</div>`;
  else h += `<div class="msg">⏳ Esperá…</div>`;
  if (S.phase === 'roll' && p.jail && ready) h += `<button class="b y" data-a="bail" ${p.cash < inf(BAIL) ? 'disabled' : ''}>💸 Fianza ${short(inf(BAIL))}</button>` + (p.jcards ? '<button class="b g" data-a="jcard">🎫 Salida libre</button>' : '');
  d.innerHTML = h + side;
}
$('dock').addEventListener('click', e => {
  const b = e.target.closest('button[data-a]'); if (!b || b.disabled) return;
  const a = b.dataset.a;
  if (a === 'mine') { view = view === 'mine' ? null : 'mine'; renderModal(true); return; }
  if (a === 'trade') { const o = S.seats.findIndex((s, i) => i !== mySeat() && !s.out); openTrade(tradeUI ? tradeUI.to : o); return; }
  act({ t: a });
});
addEventListener('keydown', e => {
  if ((e.code === 'Space' || e.code === 'Enter') && !e.repeat && $('setup').hidden && document.activeElement.tagName !== 'INPUT') {
    const pr = primary(); if (pr && !view) { e.preventDefault(); act({ t: pr.t }); }
  }
  if (e.code === 'Escape') { view = null; tradeUI = null; renderModal(true); closeDeed(); }
});
function act(a) {
  if (!S) return;
  dockKey = ''; $('dock').querySelectorAll('button[data-a]').forEach(b => { if (!['mine', 'trade'].includes(b.dataset.a)) b.disabled = true; });
  if (engine) engine.act(mySeat(), a); else Arcade.send('act', a, { to: Arcade.ctx.hostId });
}

// ---------- emotes ----------
$('emotes').innerHTML = EMOS.map(x => `<button data-e="${x}">${x}</button>`).join('');
let emoT = 0;
$('emotes').addEventListener('click', e => {
  const b = e.target.closest('button[data-e]'); if (!b || !S || mySeat() < 0 || performance.now() - emoT < 900) return;
  emoT = performance.now(); const k = EMOS.indexOf(b.dataset.e);
  showEmo(mySeat(), k); if (Arcade.isOnline()) Arcade.send('emo', { s: mySeat(), k });
});
function showEmo(seat, k) { if (!EMOS[k] || !pawns[seat]) return; bubble(seat, EMOS[k], true); SFX.pop(); cheer = seat; setTimeout(() => { if (cheer === seat) cheer = -1; }, 900); }

// ---------- escritura ----------
function rentRows(s, o) {
  if (s.t === 'prop') {
    const full = groupSquares(s.g).every(q => S.own[q] && S.own[q].o === (o ? o.o : -2));
    const names = ['Alquiler', 'Con 1 casa', 'Con 2 casas', 'Con 3 casas', 'Con 4 casas', 'Con HOTEL'];
    return names.map((n, k) => `<tr class="${o && !o.m && o.h === k ? 'on' : ''}"><td>${n}${k === 0 && full ? ' (x2 grupo)' : ''}</td><td>${money(inf(s.rent[k] * (k === 0 && full ? 2 : 1)))}</td></tr>`).join('');
  }
  if (s.t === 'rail') return [1, 2, 3, 4].map(n => `<tr><td>Con ${n} ${n > 1 ? 'estaciones' : 'estación'}</td><td>${money(inf(25 * 2 ** (n - 1)))}</td></tr>`).join('');
  return `<tr><td>Con 1 servicio</td><td>4 × dados</td></tr><tr><td>Con los 2</td><td>10 × dados</td></tr>`;
}
function deedHTML(i, withActs) {
  const s = SQUARES[i], o = S.own[i], me = mySeat();
  let acts = '';
  if (withActs && o && o.o === me && canAct() && S.phase !== 'buy') {
    if (s.t === 'prop') acts += `<button class="b g s" data-d="build" ${engineCheck('build', i) ? '' : 'disabled'}>🔨 Casa ${short(inf(GROUPS[s.g].house))}</button><button class="b k s" data-d="sell" ${engineCheck('sell', i) ? '' : 'disabled'}>Vender casa</button>`;
    acts += o.m ? `<button class="b y s" data-d="unmort" ${engineCheck('unmort', i) ? '' : 'disabled'}>Levantar ${short(inf(s.price * 0.55))}</button>` : `<button class="b r s" data-d="mort" ${engineCheck('mort', i) ? '' : 'disabled'}>Hipotecar +${short(inf(s.price / 2))}</button>`;
  }
  return `<div class="deedCard"><div class="hd" style="--c:${sqCol(i)}">${esc(s.name)}<small>${esc(s.sub || '')}</small></div><table>${rentRows(s, o)}</table>
    <div class="ft"><div>Precio ${money(inf(s.price))}${s.t === 'prop' ? ' · Casa ' + short(inf(GROUPS[s.g].house)) : ''}</div>
    <div>Dueño: <b style="color:${o ? colOf(o.o) : '#555'}">${o ? nm(o.o) : 'nadie'}</b>${o && o.m ? ' · <b style="color:#e8352f">HIPOTECADA</b>' : ''}${o && o.h ? ` · ${o.h === 5 ? '🏨 hotel' : '🏠'.repeat(o.h)}` : ''}</div>${acts ? `<div class="acts">${acts}</div>` : ''}</div></div>`;
}
function openDeed(i) { if (!S) return; selSq = i; SC.highlight(i); $('deed').innerHTML = `<button class="x" data-d="x">✕</button>` + deedHTML(i, true); $('deed').hidden = false; }
function closeDeed() { selSq = -1; SC && SC.highlight(-1); $('deed').hidden = true; }
$('deed').addEventListener('click', e => { const b = e.target.closest('button[data-d]'); if (!b || b.disabled) return; if (b.dataset.d === 'x') return closeDeed(); act({ t: b.dataset.d, sq: selSq }); });
function engineCheck(t, sq) {
  const s = SQUARES[sq], o = S.own[sq], me = mySeat(), p = S.seats[me]; if (!o || o.o !== me) return false;
  const gs = s.t === 'prop' ? groupSquares(s.g) : [];
  if (t === 'build') return s.t === 'prop' && o.h < 5 && gs.every(q => S.own[q] && S.own[q].o === me && !S.own[q].m) && o.h <= Math.min(...gs.map(q => S.own[q].h)) && p.cash >= inf(GROUPS[s.g].house);
  if (t === 'sell') return o.h > 0 && o.h >= Math.max(...gs.map(q => S.own[q] ? S.own[q].h : 0));
  if (t === 'mort') return !o.m && (s.t !== 'prop' || gs.every(q => !S.own[q] || S.own[q].h === 0));
  if (t === 'unmort') return o.m && p.cash >= inf(s.price * 0.55);
  return false;
}
const tradable = (q, owner) => S.own[q] && S.own[q].o === owner && (SQUARES[q].t !== 'prop' || groupSquares(SQUARES[q].g).every(x => !S.own[x] || S.own[x].h === 0));

// ---------- ventana central: compra, subasta, tratos, propiedades ----------
let modalKey = '';
function renderModal(force) {
  const m = $('modal'); if (!S) { m.hidden = true; return; }
  const me = mySeat();
  let kind = null;
  if (S.phase === 'auction' && S.auc) kind = 'auction';
  else if (S.phase === 'trade' && S.trade && (S.trade.to === me || S.trade.from === me)) kind = 'offer';
  else if (S.phase === 'buy' && S.turn === me && canAct()) kind = 'buy';
  else if (view === 'trade' && tradeUI) kind = 'trade';
  else if (view === 'mine') kind = 'mine';
  if (!kind) { m.hidden = true; modalKey = ''; return; }
  let html = '', w = 420;
  if (kind === 'buy') {
    const s = SQUARES[S.offer], c = inf(s.price), p = S.seats[me];
    html = `<h2>¿Lo comprás?<small>Si no, sale a subasta para todos</small></h2>${deedHTML(S.offer, false)}<div class="row"><button class="b g xl" data-m="buy" ${p.cash < c ? 'disabled' : ''}>🏠 Comprar ${short(c)}</button><button class="b r" data-m="auction">🔨 Subastar</button></div>`;
  } else if (kind === 'auction') {
    const A = S.auc, s = SQUARES[A.sq], p = me >= 0 ? S.seats[me] : null, inAuc = p && !p.out && !A.out.includes(me);
    const steps = [1, 5, 10].map(n => A.bid ? A.bid + A.step * n : A.step * n);
    const lead = A.by === me;
    html = `<h2>🔨 ¡SUBASTA!<small>${esc(s.name)} · vale ${short(inf(s.price))}</small></h2>
      <div class="bigBid"><b>${A.bid ? short(A.bid) : '—'}</b><span>${A.by >= 0 ? (lead ? '¡Vas ganando vos!' : 'la tiene ' + nm(A.by)) : 'Nadie ofertó todavía'}</span></div>
      <div class="tbar"><i data-auc></i></div>
      <div class="who">${S.seats.map((x, i) => x.out ? '' : `<span style="--c:${x.col}" class="${A.out.includes(i) ? 'off' : ''} ${A.by === i ? 'lead' : ''}">${esc(x.name)}</span>`).join('')}</div>
      ${inAuc && !lead ? `<div class="row">${steps.map((v, k) => `<button class="b ${['g', 'g', 'y'][k]}" data-m="bid" data-v="${v}" ${v > p.cash ? 'disabled' : ''}>+${short(v - A.bid)}</button>`).join('')}<button class="b r" data-m="fold">Me bajo</button></div>` : inAuc ? '<div class="row"><div class="none">Esperando que alguien te supere… 😏</div></div>' : '<div class="row"><div class="none">Mirás desde afuera</div></div>'}`;
  } else if (kind === 'offer') {
    const T = S.trade, mineIn = T.to === me;
    const side = (x, owner) => `${x.p.map(q => `<span class="chip" style="--c:${sqCol(q)}"><i></i>${esc(SQUARES[q].name)}</span>`).join('')}${x.c ? `<span class="chip">💵 ${short(x.c)}</span>` : ''}${x.j ? `<span class="chip">🎫 Salida libre</span>` : ''}` || '<span class="none">nada</span>';
    html = `<h2>🤝 ${mineIn ? nm(T.from) + ' te ofrece' : 'Esperando a ' + nm(T.to)}</h2>
      <div class="offerSide"><h5>${mineIn ? 'TE DA' : 'VOS DAS'}</h5><div class="chips">${side(T.give)}</div></div>
      <div class="offerSide"><h5>${mineIn ? 'TE PIDE' : 'PEDÍS'}</h5><div class="chips">${side(T.get)}</div></div>
      <div class="tbar"><i data-tr></i></div>
      <div class="row">${mineIn ? '<button class="b g xl" data-m="accept">✔ Aceptar</button><button class="b r" data-m="reject">✕ Rechazar</button>' : '<button class="b r" data-m="cancel">Cancelar oferta</button>'}</div>`;
  } else if (kind === 'trade') {
    w = 640; html = tradeHTML();
  } else if (kind === 'mine') {
    const list = Object.keys(S.own).map(Number).filter(q => S.own[q].o === me).sort((a, b) => a - b), ready = canAct() && S.phase !== 'buy';
    html = `<h2>🏠 Mis propiedades<small>Construís cuando tenés todo el grupo de un color (parejo y en tu turno)</small></h2><div class="mine">` + (list.length ? list.map(q => {
      const s = SQUARES[q], o = S.own[q];
      const btn = (t, txt, cls) => `<button class="b ${cls} s" data-m="${t}" data-q="${q}" ${ready && engineCheck(t, q) ? '' : 'disabled'}>${txt}</button>`;
      return `<div class="r" style="--c:${sqCol(q)}"><i></i><span>${esc(s.name)} ${o.m ? '<small style="color:#e8352f">(hipotecada)</small>' : ''} ${o.h ? (o.h === 5 ? '🏨' : '🏠'.repeat(o.h)) : ''}</span><span class="acts">${s.t === 'prop' ? btn('build', '🔨 +🏠', 'g') + btn('sell', '−🏠', 'k') : ''}${o.m ? btn('unmort', 'Levantar', 'y') : btn('mort', 'Hipotecar', 'r')}</span></div>`;
    }).join('') : '<div class="none">Todavía no tenés nada. Ni casa propia, como todo argentino.</div>') + `</div><div class="row"><button class="b k" data-m="close">Cerrar</button></div>`;
  }
  const key = kind + html;
  if (key === modalKey && !force) return;
  const isNew = !modalKey.startsWith(kind);
  modalKey = key; m.style.setProperty('--w', w + 'px'); m.innerHTML = html; m.hidden = false;
  if (isNew) { m.classList.remove('anim'); void m.offsetWidth; m.classList.add('anim'); }
}
$('modal').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || b.disabled) return;
  const a = b.dataset.m;
  if (b.dataset.tt != null) { tradeUI = newTrade(+b.dataset.tt); renderModal(true); return; }
  if (b.dataset.tq != null) { const q = +b.dataset.tq, side = b.dataset.side === 'give' ? tradeUI.give : tradeUI.get; const i = side.p.indexOf(q); if (i >= 0) side.p.splice(i, 1); else side.p.push(q); SFX.pop(); renderModal(true); return; }
  if (b.dataset.tc != null) { const side = b.dataset.side === 'give' ? tradeUI.give : tradeUI.get, owner = b.dataset.side === 'give' ? mySeat() : tradeUI.to; side.c = Math.max(0, Math.min(S.seats[owner].cash, side.c + (+b.dataset.tc) * inf(10))); renderModal(true); return; }
  if (b.dataset.tj != null) { const side = b.dataset.side === 'give' ? tradeUI.give : tradeUI.get; side.j = side.j ? 0 : 1; renderModal(true); return; }
  if (!a) return;
  if (a === 'close') { view = null; tradeUI = null; renderModal(true); return; }
  if (a === 'send') { act({ t: 'offer', to: tradeUI.to, give: tradeUI.give, get: tradeUI.get }); view = null; tradeUI = null; renderModal(true); return; }
  if (a === 'bid') { act({ t: 'bid', v: +b.dataset.v }); return; }
  act(b.dataset.q != null ? { t: a, sq: +b.dataset.q } : { t: a });
});
// trato: elegís a quién, qué das y qué pedís; para los bots se ve si les gusta
function newTrade(to) { return { to, give: { c: 0, p: [], j: 0 }, get: { c: 0, p: [], j: 0 } }; }
function openTrade(to) { if (!canTrade() || to < 0) return; if (!tradeUI || tradeUI.to !== to) tradeUI = newTrade(to); view = 'trade'; renderModal(true); }
function tradeHTML() {
  const me = mySeat(), T = tradeUI, them = S.seats[T.to];
  const tabs = S.seats.map((s, i) => i === me || s.out ? '' : `<button data-tt="${i}" class="${i === T.to ? 'on' : ''}" style="--c:${s.col}">${esc(s.name)}</button>`).join('');
  const col = (owner, side, key) => {
    const qs = Object.keys(S.own).map(Number).filter(q => S.own[q].o === owner).sort((a, b) => a - b);
    const chips = qs.map(q => { const ok = tradable(q, owner); return `<button class="chip ${side.p.includes(q) ? 'on' : ''} ${ok ? '' : 'no'}" ${ok ? `data-tq="${q}" data-side="${key}"` : 'disabled title="Tiene casas en el grupo"'} style="--c:${sqCol(q)}"><i></i>${esc(SQUARES[q].name)}${S.own[q].m ? ' 💤' : ''}</button>`; }).join('') || '<span class="none">sin propiedades</span>';
    const jc = S.seats[owner].jcards ? `<button class="chip ${side.j ? 'on' : ''}" data-tj="1" data-side="${key}">🎫 Salida libre</button>` : '';
    return `<div class="chips">${chips}${jc}</div><div class="cash"><button data-tc="-10" data-side="${key}">−</button><button data-tc="-1" data-side="${key}">-</button><b>💵 ${short(side.c)}</b><button data-tc="1" data-side="${key}">+</button><button data-tc="10" data-side="${key}">+</button></div>`;
  };
  const any = T.give.p.length + T.get.p.length + T.give.j + T.get.j > 0;
  let mood = '';
  if (them.bot && any) {
    const api = { S, inf, ownerOf: q => S.own[q] ? S.own[q].o : -1 };
    const ok = botAcceptTrade(api, { from: me, to: T.to, give: T.give, get: T.get });
    mood = `<div class="mood">A ${esc(them.name)} le parece: <b>${ok ? '😍' : '😒'}</b> ${ok ? 'le cierra' : 'pedí menos o ofrecé más'}</div>`;
  }
  return `<h2>🤝 Ofrecer un trato<small>Elegí con quién, qué das y qué pedís</small></h2><div class="tabs">${tabs}</div>
    <div class="tr"><div class="col"><h4><span class="sw" style="--c:${S.seats[me].col}"></span>Vos das</h4>${col(me, T.give, 'give')}</div>
    <div class="col"><h4><span class="sw" style="--c:${them.col}"></span>Le pedís a ${esc(them.name)}</h4>${col(T.to, T.get, 'get')}</div></div>${mood}
    <div class="row"><button class="b g xl" data-m="send" ${any ? '' : 'disabled'}>📨 Ofrecer</button><button class="b k" data-m="close">Cancelar</button></div>`;
}

// ---------- fin ----------
let endShown = false;
function showEnd() {
  if (endShown) return; endShown = true;
  const order = S.seats.map((s, i) => ({ s, i, w: S.worths ? S.worths[i] : s.cash })).sort((a, b) => b.w - a.w);
  const names = S.winner.map(i => S.seats[i].name).join(' y ');
  let n = 12;
  const draw = () => {
    $('end').innerHTML = `<div class="box"><div class="logo">${S.winner.length > 1 ? 'EMPATE' : '¡GANÓ ' + esc(names).toUpperCase() + '!'}</div><div class="sub">${S.winner.length > 1 ? esc(names) : 'Se quedó con todo. Como corresponde.'}</div><div class="rank">${order.map((o, k) => `<div class="${S.winner.includes(o.i) ? 'w' : ''}"><span>${['🥇', '🥈', '🥉'][k] || k + 1 + '°'}</span><span class="sw" style="--c:${o.s.col}"></span><span>${esc(o.s.name)}${o.s.out ? ' 💀' : ''}</span><span>${o.s.out ? 'Quebró' : money(o.w)}</span></div>`).join('')}</div><div class="count">Volviendo a la sala en ${n}…</div></div>`;
  };
  setTimeout(() => { $('end').hidden = false; $('modal').hidden = true; draw(); }, 1800);
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
  const html = `<div class="box"><div class="logo">CAMINO <span>NEGRO</span></div><div class="sub">Comprá barrios, cobrá alquileres, hacé tratos y sobreviví a la inflación.</div>
    <h4>Jugadores</h4><div class="seats">${seatHTML}</div>
    <h4>¿Cuántos?</h4>${opt('seats', [2, 3, 4, 5, 6].filter(n => n >= Math.max(2, H.length)), v => v)}
    <h4>Duración</h4>${opt('limit', [15, 30, 45], v => v + ' meses')}
    <h4>Tu muñequito</h4><div class="opts">${HATS.map((h, k) => `<button data-look="${k}" class="${myLook === k ? 'on' : ''}">${h}</button>`).join('')}</div>
    <div class="rules">🎲 Tirá y avanzá · 🏠 Comprá o mandalo a subasta · 🤝 Tocá a un jugador para ofrecerle un trato<br>📈 Cada mes todo sale 4% más caro · gana el que más tiene al final</div>
    ${host ? '<div class="go"><button class="b g xl" id="startBtn">▶ EMPEZAR</button></div>' : '<div class="wait">Esperando que el host empiece…</div>'}</div>`;
  if ($('setup')._h !== html) { $('setup').innerHTML = html; $('setup')._h = html; }
  $('setup').hidden = false;
}
$('setup').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.id === 'startBtn') return startGame();
  if (b.dataset.look != null) { myLook = +b.dataset.look; store.set('look', myLook); SFX.pop(); if (Arcade.isHost()) { lobby.looks[myId] = myLook; broadcastLobby(); } else { Arcade.send('look', { k: myLook }, { to: Arcade.ctx.hostId }); renderSetup(); } return; }
  if (!Arcade.isHost() || !b.dataset.k) return;
  lobby[b.dataset.k] = +b.dataset.v; SFX.pop(); broadcastLobby();
});
function broadcastLobby() { if (Arcade.isOnline()) Arcade.send('lobby', lobby); renderSetup(); }
function hooks() { return { push: st => { if (Arcade.isOnline()) Arcade.send('st', st); onState(st); }, event: e => { if (Arcade.isOnline()) Arcade.send('ev', e); onEvent(e); } }; }
function startGame() {
  if (engine || S) return;
  const H = humans(), total = Math.max(H.length, Math.max(2, lobby.seats));
  const BOTN = ['El Tano', 'La Chola', 'Don Ramón', 'Pocho', 'La Turca', 'Cacho', 'Tito', 'Marta'].sort(() => Math.random() - 0.5);
  const seats = [...H.map(h => ({ id: h.id, name: h.name, look: lobby.looks[h.id] ?? (h.id === myId ? myLook : h.slot) })), ...Array.from({ length: total - H.length }, (_, k) => ({ name: BOTN[k], bot: true, look: (k + 2) % HATS.length }))]
    .map((s, i) => ({ ...s, col: SKIN_COLS[i] }));
  engine = createEngine(seats, { limit: lobby.limit }, hooks());
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

// ---------- vista previa (foto del juego) ----------
function preview() {
  const seats = ['Gaby', 'Nico', 'Sofi', 'Tano'].map((n, i) => ({ name: n, col: SKIN_COLS[i], look: i, bot: true }));
  engine = createEngine(seats, { limit: 30 }, { push: st => onState(st), event: () => {} });
  const E = engine.S; E.infl = 1.24; E.round = 7;
  const own = { 1: [0, 2], 3: [0, 2], 6: [1, 1], 8: [1, 1], 9: [1, 2], 11: [2, 0], 16: [3, 0], 18: [3, 0], 21: [2, 0], 24: [1, 0], 37: [0, 5], 39: [0, 5], 5: [2, 0], 15: [3, 0], 31: [3, 0] };
  for (const [q, [o, h]] of Object.entries(own)) E.own[q] = { o, h, m: false };
  E.seats[0].pos = 7; E.seats[1].pos = 3; E.seats[2].pos = 13; E.seats[3].pos = 10; E.seats[3].jail = 1; E.turn = 0; E.phase = 'end';
  E.seats.forEach((s, i) => { s.cash = [2410, 1180, 760, 330][i]; });
  engine.push(); SC.cam.yaw = 0; SC.cam.dist = 15; SC.cam.pitch = 1.02;
}

// ---------- loop ----------
let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  pump();
  if (engine && !PREVIEW) engine.tick();
  updatePawns(dt);
  FX.update(dt);
  if (S) {
    renderDock();
    if (!queue.length && S.phase === 'buy') renderModal();
    const el = performance.now() - S.recv;
    const tm = document.querySelector('[data-tm]'); if (tm && S.tl) tm.style.width = (Math.max(0, S.tl - el) / 35000 * 100) + '%';
    const ab = document.querySelector('[data-auc]'); if (ab && S.auc) ab.style.width = (Math.max(0, S.auc.left - el) / 10000 * 100) + '%';
    const tb = document.querySelector('[data-tr]'); if (tb && S.trade) tb.style.width = (Math.max(0, S.trade.left - el) / 30000 * 100) + '%';
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
    Arcade.on('emo', (d, from) => { if (d && S && S.seats[d.s] && S.seats[d.s].id === from) showEmo(d.s, d.k | 0); });
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
      engine = createEngine(S.seats, { limit: S.limit }, hooks());
      engine.restore(S);
      S.seats.forEach((s, i) => { if (s.id && !Arcade.players.some(p => p.id === s.id)) engine.setBot(i); });
    });
    renderSetup();
    if (!Arcade.isHost()) {
      let tries = 0;
      const hi = setInterval(() => { if (S || gotLobby || ++tries > 30) clearInterval(hi); else if (tries % 3 === 0) Arcade.send('hi', { look: myLook }, { to: Arcade.ctx.hostId }); }, 1000);
      Arcade.send('hi', { look: myLook }, { to: Arcade.ctx.hostId });
    }
  });
});
window.__cn = { get S() { return S; }, get engine() { return engine; }, get SC() { return SC; }, get pawns() { return pawns; } };
