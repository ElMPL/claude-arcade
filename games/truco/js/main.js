// Truco — mesa, configuración, red y sonido
import { cardURL } from './cards.js';
import { Engine } from './engine.js';
import {
  canEnvido, canTruco, canPlay, canMazo, isResponder, envidoRaises, nextTrucoLevel, TRUCO_NAMES, ENVIDO_NAMES, teamOf,
} from './rules.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const PREVIEW = new URLSearchParams(location.search).has('preview');
const FAST = (() => { try { return localStorage.getItem('truco:fast') === '1'; } catch { return false; } })();
const BOT_NAMES = ['Pampa', 'Gaucho', 'Chamamé', 'Malbec', 'Mate', 'Tango', 'Ombú'];
const END_SECS = 12;

let myId = null, S = null, hand = [], mySeat = -1, engine = null, dealAnim = false, deadlineLocal = 0;
let setupSel = { size: 2, goal: 30, mode: 'mix' };
const shownCards = new Set();

// ---------------- Sonido y voz ----------------
let actx = null, muted = false;
try { muted = localStorage.getItem('truco:muted') === '1'; } catch { /* */ }
function ac() { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); return actx; }
function tone(f, d, { type = 'triangle', vol = 0.12, at = 0 } = {}) {
  if (muted) return;
  try {
    const a = ac(), t = a.currentTime + at, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + d + 0.02);
  } catch { /* */ }
}
function snap(at = 0, vol = 0.18) {
  if (muted) return;
  try {
    const a = ac(), t = a.currentTime + at, len = 0.07;
    const b = a.createBuffer(1, a.sampleRate * len, a.sampleRate), ch = b.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / ch.length, 3);
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = b; f.type = 'highpass'; f.frequency.value = 1200; g.gain.value = vol;
    s.connect(f).connect(g).connect(a.destination); s.start(t);
  } catch { /* */ }
}
const sfx = {
  card: () => snap(0, 0.22),
  deal: () => { for (let i = 0; i < 6; i++) snap(i * 0.07, 0.12); },
  call: () => { tone(660, 0.12, { vol: 0.1 }); tone(990, 0.18, { vol: 0.1, at: 0.1 }); },
  win: () => [523, 659, 784].forEach((f, i) => tone(f, 0.2, { at: i * 0.08 })),
  lose: () => [392, 330].forEach((f, i) => tone(f, 0.22, { at: i * 0.1, vol: 0.08 })),
  turn: () => tone(880, 0.1, { type: 'sine', vol: 0.08 }),
  fanfare: () => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, 0.25, { at: i * 0.11 })),
};
let voices = [];
if ('speechSynthesis' in window) { const lv = () => { voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); }; lv(); speechSynthesis.onvoiceschanged = lv; }
function say(text) {
  if (muted || !('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(text.replace(/[¡!]/g, ''));
    const v = voices.find(x => /AR|419|US|MX/i.test(x.lang)) || voices[0];
    if (v) u.voice = v;
    u.lang = v ? v.lang : 'es-AR'; u.rate = 1.05; u.pitch = 1; u.volume = 0.9;
    speechSynthesis.speak(u);
  } catch { /* */ }
}
$('mute').addEventListener('click', () => {
  muted = !muted; $('mute').textContent = muted ? '🔇' : '🔊';
  try { localStorage.setItem('truco:muted', muted ? '1' : '0'); } catch { /* */ }
});
$('mute').textContent = muted ? '🔇' : '🔊';
addEventListener('pointerdown', () => { try { ac(); } catch { /* */ } }, { once: true });

// ---------------- Posiciones en la mesa ----------------
const POS = {
  2: [[16, 86], [50, 12]],
  4: [[16, 86], [90, 47], [50, 12], [10, 47]],
  6: [[16, 86], [87, 66], [79, 16], [50, 11], [21, 16], [13, 66]],
};
const CENTER = [50, 46];
function rel(seat) { const n = S.seats.length, me = mySeat < 0 ? 0 : mySeat; return (seat - me + n) % n; }
function seatPos(seat) { return POS[S.seats.length][rel(seat)]; }
function slotPos(seat) {
  const r = rel(seat);
  if (r === 0) return [50, 59];
  const [x, y] = seatPos(seat);
  return [CENTER[0] + (x - CENTER[0]) * 0.5, CENTER[1] + (y - CENTER[1]) * 0.55];
}
const myTeam = () => (mySeat >= 0 && S ? S.seats[mySeat].team : 0);
const teamLabel = t => (t === myTeam() ? 'Nosotros' : 'Ellos');

// ---------------- Render ----------------
function sticks(n) {
  const groups = [];
  for (let k = 0; k < n; k += 5) {
    const c = Math.min(5, n - k);
    const L = [[3, 3, 3, 23], [3, 23, 23, 23], [23, 23, 23, 3], [23, 3, 3, 3], [3, 3, 23, 23]].slice(0, c);
    groups.push(`<svg width="26" height="26" viewBox="0 0 26 26">${L.map(([a, b, c2, d]) => `<line x1="${a}" y1="${b}" x2="${c2}" y2="${d}" stroke="#f3d9a4" stroke-width="2.6" stroke-linecap="round"/><circle cx="${c2}" cy="${d}" r="2.3" fill="#e2483d"/>`).join('')}</svg>`);
  }
  return groups.join('');
}
function renderScore() {
  const goal = S.cfg.goal, half = goal / 2;
  const team = (t, cls) => {
    const p = S.score[t];
    const body = goal === 30
      ? `<div class="half">${sticks(Math.min(p, half))}</div><div class="sep"></div><div class="half">${sticks(Math.max(0, p - half))}</div>`
      : `<div class="half">${sticks(p)}</div>`;
    return `<div class="team ${cls}"><h4>${teamLabel(t).toUpperCase()}</h4><div class="pts">${p}</div><div class="sticks">${body}</div></div>`;
  };
  const me = myTeam();
  $('score').innerHTML = team(me, 't-nos') + team(1 - me, 't-ellos');
}

function renderSeats() {
  const n = S.seats.length;
  const actor = S.phase === 'play' ? (S.pending ? S.pending.responder : S.turn) : -1;
  $('seats').innerHTML = S.seats.map((st, i) => {
    const [x, y] = seatPos(i);
    const isMe = i === mySeat;
    const cls = `seat ${teamOf(S, i) === myTeam() ? 't0' : 't1'}${isMe ? ' me' : ''}${i === actor ? ' active' : ''}${y < 30 ? ' top' : ''}`;
    const backs = isMe ? '' : `<div class="backs">${Array.from({ length: S.counts[i] || 0 }, () => `<img src="${cardURL(null)}" alt="">`).join('')}</div>`;
    const ring = i === actor && !st.bot && S.tl ? '<svg class="ring" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="3"/><circle class="rc" cx="20" cy="20" r="18" fill="none" stroke="#f2c14e" stroke-width="3" stroke-dasharray="113" stroke-dashoffset="0"/></svg>' : '';
    return `<div class="${cls}" data-seat="${i}" style="left:${x}%;top:${y}%">
      <div class="avatar">${ring}${esc((st.name || '?').charAt(0).toUpperCase())}${st.bot ? '<span class="bot">🤖</span>' : ''}${i === S.mano ? '<span class="mano">MANO</span>' : ''}</div>
      <div class="nametag">${esc(st.name)}${isMe ? ' (vos)' : ''}</div>${backs}</div>`;
  }).join('');
  void n;
}

function renderPlayed() {
  const out = [];
  const W = innerWidth, Hh = innerHeight;
  S.tricks.forEach((tr, k) => tr.forEach(p => {
    const key = `${S.handNo}:${k}:${p.seat}`;
    const [sx, sy] = slotPos(p.seat);
    const [px, py] = seatPos(p.seat);
    const isNew = !shownCards.has(key);
    shownCards.add(key);
    const win = S.trickWin[k];
    const done = S.results.length > k;
    const cls = `pc${isNew ? ' new' : ''}${done && win === p.seat ? ' win' : ''}${done && win !== p.seat ? ' lose' : ''}`;
    const off = (k - (S.tricks.length - 1) / 2) * 0;
    const dx = (k - 1) * 26, dy = (k - 1) * 10;
    const fx = (px - sx) / 100 * W, fy = (py - sy) / 100 * Hh;
    out.push(`<img class="${cls}" src="${cardURL(p.card)}" style="left:calc(${sx}% + ${dx + off}px);top:calc(${sy}% + ${dy}px);--r:${((p.seat * 37 + k * 23) % 14) - 7}deg;--fx:${fx}px;--fy:${fy}px;z-index:${3 + k}" alt="">`);
  }));
  $('played').innerHTML = out.join('');
}

function renderHand() {
  const can = S && canPlay(S, mySeat);
  $('hand').classList.toggle('can', !!can);
  const n = hand.length;
  $('hand').innerHTML = hand.map((c, i) => {
    const r = (i - (n - 1) / 2) * 7;
    return `<img class="hc${dealAnim ? ' deal' : ''}" data-i="${i}" src="${cardURL(c)}" style="--r:${r}deg;animation-delay:${i * 0.12}s" alt="">`;
  }).join('');
  dealAnim = false;
}
$('hand').addEventListener('click', e => {
  const el = e.target.closest('.hc');
  if (!el || !S || !canPlay(S, mySeat)) return;
  const i = +el.dataset.i;
  hand.splice(i, 1); renderHand();
  act({ t: 'play', i });
});

let envOpen = false;
function renderActions() {
  const a = [];
  if (S.phase === 'play' && mySeat >= 0 && !isResponder(S, mySeat)) {
    if (canTruco(S, mySeat)) a.push(`<button class="btn truco" data-a="truco">${TRUCO_NAMES[nextTrucoLevel(S) - 1]}</button>`);
    if (canEnvido(S, mySeat)) {
      a.push(envOpen
        ? `<div class="envmenu"><button class="btn envido small" data-a="envido">Envido</button><button class="btn envido small" data-a="real">Real envido</button><button class="btn envido small" data-a="falta">Falta envido</button></div>`
        : '<button class="btn envido" data-a="envmenu">Envido</button>');
    }
    if (canMazo(S, mySeat)) a.push('<button class="btn mazo" data-a="mazo">Irse al mazo</button>');
  }
  $('actions').innerHTML = a.join('');
}
$('actions').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const t = b.dataset.a;
  if (t === 'envmenu') { envOpen = true; renderActions(); return; }
  envOpen = false;
  act({ t });
});

function renderRespond() {
  const R = $('respond');
  if (!(S.phase === 'play' && mySeat >= 0 && isResponder(S, mySeat))) { R.hidden = true; return; }
  const p = S.pending;
  const who = S.seats[p.caller].name;
  const what = p.kind === 'truco' ? TRUCO_NAMES[p.to - 1] : p.calls.map(c => ENVIDO_NAMES[c]).join(' + ');
  let rows = '<div class="row"><button class="btn yes" data-a="quiero">Quiero</button><button class="btn no" data-a="noquiero">No quiero</button></div>';
  const extra = [];
  if (p.kind === 'truco' && canTruco(S, mySeat)) extra.push(`<button class="btn truco small" data-a="truco">Quiero ${TRUCO_NAMES[p.to]}</button>`);
  if (p.kind === 'envido') envidoRaises(S, mySeat).forEach(k => extra.push(`<button class="btn envido small" data-a="${k}">${ENVIDO_NAMES[k]}</button>`));
  if (p.kind === 'truco' && canEnvido(S, mySeat)) ['envido', 'real', 'falta'].forEach(k => extra.push(`<button class="btn envido small" data-a="${k}">${ENVIDO_NAMES[k]}</button>`));
  if (extra.length) rows += `<div class="row">${extra.join('')}</div>`;
  const hint = p.kind === 'truco' && canEnvido(S, mySeat) ? '<h3>¡El envido está primero!</h3>' : '';
  R.innerHTML = `<h3>${esc(who)} cantó</h3><h2>¡${esc(what)}!</h2>${rows}${hint}`;
  R.hidden = false;
}
$('respond').addEventListener('click', e => { const b = e.target.closest('button'); if (b) act({ t: b.dataset.a }); });

function renderStatus() {
  const st = $('status');
  st.classList.remove('mine');
  if (S.phase === 'end' || S.phase === 'pause') { st.textContent = ''; return; }
  if (S.pending) {
    if (S.pending.responder === mySeat) { st.textContent = ''; return; }
    st.textContent = `Esperando la respuesta de ${S.seats[S.pending.responder].name}…`;
    return;
  }
  if (S.turn === mySeat) { st.textContent = '¡Te toca!'; st.classList.add('mine'); }
  else st.textContent = `Turno de ${S.seats[S.turn].name}`;
}

function render() {
  if (!S) return;
  renderScore(); renderSeats(); renderPlayed(); renderHand(); renderActions(); renderRespond(); renderStatus();
  $('info').textContent = `${S.seats.length / 2} vs ${S.seats.length / 2} · a ${S.cfg.goal}`;
  if (S.phase === 'end') showEnd();
}

setInterval(() => {
  const rc = document.querySelector('.rc');
  if (!rc || !deadlineLocal) return;
  const left = Math.max(0, deadlineLocal - Date.now());
  rc.setAttribute('stroke-dashoffset', String(113 * (1 - left / 45000)));
}, 250);

// ---------------- Eventos (globitos, sonidos) ----------------
function bubble(seat, text, cls = '') {
  if (!S || !S.seats[seat]) return;
  document.querySelectorAll(`.bubble[data-seat="${seat}"]`).forEach(b => b.remove());
  const [x, y] = seatPos(seat);
  const b = document.createElement('div');
  b.className = `bubble ${cls}${y < 30 ? ' below' : ''}`; b.textContent = text; b.dataset.seat = seat;
  b.style.left = x + '%'; b.style.top = y + '%';
  $('bubbles').appendChild(b);
  setTimeout(() => b.remove(), 2400);
}
let bannerT;
function onEvent(e) {
  if (e.kind === 'deal') { dealAnim = true; shownCards.clear(); sfx.deal(); envOpen = false; }
  else if (e.kind === 'play') sfx.card();
  else if (e.kind === 'call') { setTimeout(() => bubble(e.seat, e.text, 'big'), 30); sfx.call(); say(e.text); }
  else if (e.kind === 'tantos') { bubble(e.seat, e.text, 'num'); say(e.text); }
  else if (e.kind === 'info') bubble(e.seat, e.text);
  else if (e.kind === 'trick' && e.text) { /* parda */ }
  else if (e.kind === 'points') {
    const B = $('banner');
    const nos = S && e.team === myTeam();
    B.className = nos ? 't-nos' : 't-ellos';
    B.innerHTML = `<b>${nos ? 'Nosotros' : 'Ellos'} +${e.pts}</b><span>${esc(e.text || '')}</span>`;
    B.hidden = false;
    clearTimeout(bannerT); bannerT = setTimeout(() => { B.hidden = true; }, 2200);
    (nos ? sfx.win : sfx.lose)();
  }
}

// ---------------- Fin ----------------
let endShown = false;
function showEnd() {
  if (endShown) return;
  endShown = true;
  const nos = S.winner === myTeam();
  const names = S.seats.filter(s => s.team === S.winner).map(s => s.name).join(', ');
  $('end').innerHTML = `<div class="panel"><h1>${mySeat < 0 ? '¡Fin!' : nos ? '¡Ganamos! 🎉' : 'Perdimos 😢'}</h1>
    <h2>${S.score[myTeam()]} a ${S.score[1 - myTeam()]}</h2><p>Ganó el equipo de ${esc(names)}</p>
    <div class="end-count">Volviendo al menú en <b id="endc">${END_SECS}</b></div></div>`;
  $('end').hidden = false;
  if (nos) sfx.fanfare(); else sfx.lose();
  let left = END_SECS;
  const iv = setInterval(() => { left--; const el = $('endc'); if (el) el.textContent = Math.max(0, left); if (left <= 0) clearInterval(iv); }, 1000);
}
function finishGame(team) {
  setTimeout(() => {
    const winners = S.seats.filter(s => s.team === team && !s.bot && s.id).map(s => s.id);
    const names = S.seats.filter(s => s.team === team).map(s => s.name);
    Arcade.end({ winners, text: winners.length ? '' : `🤖 Ganaron los bots al Truco (${names.join(', ')})` });
  }, END_SECS * 1000);
}

// ---------------- Red ----------------
function act(a) {
  if (Arcade.isHost()) { if (engine) engine.act(mySeat, a); }
  else Arcade.send('act', a, { to: Arcade.ctx.hostId });
}
function onState(st) {
  const prevTurn = S && S.turn, prevPend = S && S.pending;
  S = st;
  mySeat = S.seats.findIndex(s => s.id === myId);
  deadlineLocal = S.tl ? Date.now() + S.tl : 0;
  $('setup').hidden = true;
  if (S.phase === 'play' && mySeat >= 0 && ((S.turn === mySeat && prevTurn !== mySeat && !S.pending) || (S.pending && S.pending.responder === mySeat && !prevPend))) sfx.turn();
  render();
}
function onHand(cards) { hand = cards.slice(); renderHand(); }

// ---------------- Configuración de la mesa (host) ----------------
function humans() { return Arcade.players.map(p => ({ id: p.id, name: p.name })); }
function validSizes(h) { return [2, 4, 6].filter(s => s >= h); }
function buildSeats() {
  const H = humans(), n = setupSel.size, seats = Array.from({ length: n }, (_, i) => ({ id: null, name: '', bot: true, team: i % 2 }));
  let order;
  if (setupSel.mode === 'together' && H.length <= n / 2) order = [...Array.from({ length: n / 2 }, (_, k) => k * 2), ...Array.from({ length: n / 2 }, (_, k) => k * 2 + 1)];
  else order = Array.from({ length: n }, (_, k) => k);
  H.forEach((h, k) => { const s = seats[order[k]]; s.id = h.id; s.name = h.name; s.bot = false; });
  const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5);
  seats.forEach(s => { if (s.bot) s.name = names.pop(); });
  return seats;
}
function renderSetup() {
  const H = humans();
  const sizes = validSizes(H.length);
  if (!sizes.includes(setupSel.size)) setupSel.size = sizes[0] || 6;
  const host = Arcade.isHost();
  const seats = buildSeats();
  const col = t => seats.filter(s => s.team === t).map(s => `<span>${s.bot ? '🤖 ' : ''}${esc(s.name)}</span>`).join('');
  const seg = (key, opts) => `<div class="seg">${opts.map(([v, label, dis]) => `<button data-k="${key}" data-v="${v}" class="${setupSel[key] === v ? 'on' : ''}" ${dis || !host ? 'disabled' : ''}>${label}</button>`).join('')}</div>`;
  const canTogether = H.length > 1 && H.length <= setupSel.size / 2;
  $('setup').innerHTML = `<div class="panel"><h1>Truco</h1>
    <p>${host ? 'Armá la mesa. Los lugares vacíos los ocupan bots.' : 'El host está armando la mesa…'}</p>
    <div class="opt"><label>Mesa</label>${seg('size', [[2, '1 vs 1', H.length > 2], [4, '2 vs 2', H.length > 4], [6, '3 vs 3', false]])}</div>
    <div class="opt"><label>Puntos</label>${seg('goal', [[15, 'A 15'], [30, 'A 30']])}</div>
    ${H.length > 1 && setupSel.size > H.length ? `<div class="opt"><label>Equipos</label>${seg('mode', [['mix', 'Mezclados'], ['together', 'Humanos vs bots', !canTogether]])}</div>` : ''}
    <div class="teams-prev"><div class="a">Equipo 1${col(0)}</div><div class="b">Equipo 2${col(1)}</div></div>
    ${host ? '<button class="go" id="go">¡A jugar!</button>' : ''}</div>`;
  $('setup').hidden = false;
}
$('setup').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || !Arcade.isHost()) return;
  if (b.id === 'go') return startEngine();
  const k = b.dataset.k; if (!k) return;
  setupSel[k] = k === 'mode' ? b.dataset.v : +b.dataset.v;
  renderSetup();
  Arcade.send('setup', setupSel);
});
function startEngine() {
  const seats = buildSeats();
  engine = new Engine({
    cfg: { size: setupSel.size, goal: setupSel.goal }, seats, speed: FAST ? 0.3 : 1,
    push: s => { const pub = JSON.parse(JSON.stringify(s)); pub.tl = s.deadline ? s.deadline - Date.now() : 0; delete pub.deadline; Arcade.send('st', pub); onState(pub); },
    priv: (seat, cards) => { const id = seats[seat].id; if (id === myId) onHand(cards); else if (id) Arcade.send('hd', { cards }, { to: id }); },
    event: e => { Arcade.send('ev', e); onEvent(e); },
    end: team => finishGame(team),
  });
  engine.start();
}

// ---------------- Vista previa (miniatura) ----------------
function preview() {
  myId = 'me';
  S = {
    phase: 'play', cfg: { size: 4, goal: 30 }, score: [17, 12], mano: 1, turn: 0, handNo: 1, counts: [3, 2, 2, 2],
    seats: [{ id: 'me', name: 'Gaby', bot: false, team: 0 }, { id: 'b', name: 'Agus', bot: false, team: 1 }, { id: 'c', name: 'Sofi', bot: false, team: 0 }, { id: null, name: 'Pampa', bot: true, team: 1 }],
    tricks: [[{ seat: 1, card: { s: 'o', n: 7 } }, { seat: 2, card: { s: 'c', n: 3 } }, { seat: 3, card: { s: 'b', n: 12 } }]], results: [], trickWin: [],
    truco: { level: 0, canRaise: null }, envidoDone: false, pending: null, tl: 0,
  };
  mySeat = 0;
  hand = [{ s: 'e', n: 1 }, { s: 'b', n: 1 }, { s: 'e', n: 7 }];
  render();
  document.querySelectorAll('.pc').forEach(p => p.classList.remove('new'));
  setTimeout(() => { bubble(1, '¡Truco!', 'big'); bubble(3, '30', 'num'); }, 50);
  $('status').textContent = ''; $('actions').innerHTML = '';
  $('preview').hidden = false;
  $('score').style.visibility = 'hidden'; $('topright').style.visibility = 'hidden';
  setTimeout(() => { window.__ready = true; }, 600);
}

// ---------------- Inicio ----------------
Arcade.ready().then(ctx => {
  if (PREVIEW) return preview();
  myId = ctx.me.id;
  Arcade.on('st', st => onState(st));
  Arcade.on('hd', d => onHand(d.cards));
  Arcade.on('ev', e => onEvent(e));
  Arcade.on('setup', sel => { if (!S) { setupSel = sel; renderSetup(); } });
  Arcade.on('act', (a, from) => {
    if (!Arcade.isHost() || !engine) return;
    const seat = engine.S.seats.findIndex(s => s.id === from);
    if (seat >= 0) engine.act(seat, a);
  });
  Arcade.on('hi', (d, from) => {
    if (!Arcade.isHost()) return;
    if (engine) engine.push(); else Arcade.send('setup', setupSel, { to: from });
  });
  Arcade.onPlayerLeft(id => {
    if (engine) { const seat = engine.S.seats.findIndex(s => s.id === id); if (seat >= 0) engine.setBot(seat, engine.S.seats[seat].name + ' (bot)'); }
    else if (Arcade.isHost()) renderSetup();
  });
  Arcade.onHostChanged(() => {
    if (!Arcade.isHost()) return;
    if (!S) { renderSetup(); return; }
    if (S.phase === 'end') { finishGame(S.winner); return; }
    const lead = S.score[0] === S.score[1] ? null : S.score[0] > S.score[1] ? 0 : 1;
    const winners = lead === null ? [] : S.seats.filter(s => s.team === lead && !s.bot && s.id && s.id !== ctx.hostId).map(s => s.id);
    Arcade.end({ winners, text: 'El host se fue: la partida terminó' });
  });
  const sizes = validSizes(humans().length);
  setupSel.size = sizes[0] || 6;
  renderSetup();
  if (!Arcade.isHost()) {
    const hi = setInterval(() => { if (S) clearInterval(hi); else Arcade.send('hi', {}, { to: Arcade.ctx.hostId }); }, 1000);
    Arcade.send('hi', {}, { to: Arcade.ctx.hostId });
  }
});
addEventListener('resize', () => { if (S) render(); });
