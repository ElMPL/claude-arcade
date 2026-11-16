// Truco 3D — mesa en un bar, primera persona, skins, red y HUD
import { THREE, renderer, scene, camera, updateScene, makeCard, makeChair, TABLE_Y, PREVIEW } from './scene.js';
import { makeCharacter, setHeldCards, animateCharacter, react, MODELS, COLORS, HATS, randomSkin, validSkin } from './chars.js';
import { Engine } from '../js/engine.js';
import { canEnvido, canTruco, canPlay, canMazo, isResponder, envidoRaises, nextTrucoLevel, TRUCO_NAMES, ENVIDO_NAMES, teamOf } from '../js/rules.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const FAST = (() => { try { return localStorage.getItem('truco:fast') === '1'; } catch { return false; } })();
const BOT_NAMES = ['Pampa', 'Gaucho', 'Chamamé', 'Malbec', 'Mate', 'Tango', 'Ombú'];
const END_SECS = 12;

let myId = null, S = null, hand = [], mySeat = -1, engine = null, deadlineLocal = 0, layoutKey = '';
let setupSel = { size: 2, goal: 30, mode: 'mix' };
let mySkin = (() => { try { return validSkin(JSON.parse(localStorage.getItem('truco:skin'))) || randomSkin(); } catch { return randomSkin(); } })();
const skins = {}; // host: skin de cada jugador humano

// ---------------- Sonido y voz ----------------
let actx = null, muted = false;
try { muted = localStorage.getItem('truco:muted') === '1'; } catch { /* */ }
function ac() { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); return actx; }
function tone(f, d, { type = 'triangle', vol = 0.1, at = 0 } = {}) {
  if (muted) return;
  try { const a = ac(), t = a.currentTime + at, o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(g).connect(a.destination); o.start(t); o.stop(t + d + 0.02); } catch { /* */ }
}
function snap(at = 0, vol = 0.2) {
  if (muted) return;
  try {
    const a = ac(), t = a.currentTime + at, b = a.createBuffer(1, a.sampleRate * 0.07, a.sampleRate), ch = b.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / ch.length, 3);
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = b; f.type = 'highpass'; f.frequency.value = 1100; g.gain.value = vol; s.connect(f).connect(g).connect(a.destination); s.start(t);
  } catch { /* */ }
}
const sfx = {
  card: () => snap(0, 0.25), deal: () => { for (let i = 0; i < 6; i++) snap(i * 0.08, 0.13); },
  call: () => { tone(523, 0.12); tone(784, 0.2, { at: 0.1 }); },
  win: () => [523, 659, 784].forEach((f, i) => tone(f, 0.22, { at: i * 0.09 })), lose: () => [392, 311].forEach((f, i) => tone(f, 0.25, { at: i * 0.12, vol: 0.07 })),
  turn: () => tone(880, 0.12, { type: 'sine', vol: 0.07 }), fanfare: () => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, 0.28, { at: i * 0.12 })),
};
let voices = [];
if ('speechSynthesis' in window) { const lv = () => { voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); }; lv(); speechSynthesis.onvoiceschanged = lv; }
function say(text) {
  if (muted || !('speechSynthesis' in window)) return;
  try { const u = new SpeechSynthesisUtterance(text.replace(/[¡!]/g, '')); const v = voices.find(x => /AR|419|MX|US/i.test(x.lang)) || voices[0]; if (v) u.voice = v; u.lang = v ? v.lang : 'es-AR'; u.rate = 1.05; speechSynthesis.speak(u); } catch { /* */ }
}
$('mute').addEventListener('click', () => { muted = !muted; $('mute').textContent = muted ? '🔇' : '🔊'; try { localStorage.setItem('truco:muted', muted ? '1' : '0'); } catch { /* */ } });
$('mute').textContent = muted ? '🔇' : '🔊';
addEventListener('pointerdown', () => { try { ac(); } catch { /* */ } }, { once: true });

// ---------------- Mesa 3D ----------------
const seatObjs = []; // { ch, chair, angle, label, skinKey }
function rel(seat) { const n = S.seats.length; return (seat - (mySeat < 0 ? 0 : mySeat) + n) % n; }
function angleOf(seat) { return rel(seat) * (Math.PI * 2) / S.seats.length; }
const dirOf = a => new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
const myTeam = () => (mySeat >= 0 && S ? S.seats[mySeat].team : 0);

function rebuildSeats() {
  seatObjs.forEach(o => { if (o) { if (o.ch) scene.remove(o.ch); scene.remove(o.chair); o.label.remove(); } });
  seatObjs.length = 0;
  S.seats.forEach((st, i) => {
    const a = angleOf(i), d = dirOf(a);
    const chair = makeChair(); chair.position.copy(d.clone().multiplyScalar(1.9)); chair.rotation.y = a;
    let ch = null;
    if (i !== mySeat) {
      ch = makeCharacter(validSkin(st.skin) || randomSkin());
      ch.position.copy(d.clone().multiplyScalar(1.72)); ch.rotation.y = a + Math.PI;
    }
    const label = document.createElement('div'); label.className = 'plabel'; $('labels').appendChild(label);
    seatObjs[i] = { ch, chair, angle: a, label, skinKey: JSON.stringify(st.skin || null) };
  });
  layoutKey = S.seats.map(s => s.id || s.name).join('|') + ':' + mySeat;
}
function syncSkins() {
  S.seats.forEach((st, i) => {
    const o = seatObjs[i];
    if (!o || i === mySeat) return;
    const k = JSON.stringify(st.skin || null);
    if (k === o.skinKey) return;
    o.skinKey = k;
    const old = o.ch;
    o.ch = makeCharacter(validSkin(st.skin) || randomSkin());
    o.ch.position.copy(old.position); o.ch.rotation.copy(old.rotation);
    scene.remove(old);
  });
}

// Cámara en primera persona
const camBase = new THREE.Vector3(0, 1.58, 2.4), lookBase = new THREE.Vector3(0, 0.68, -0.05);
let mx = 0, my = 0, cyaw = 0, cpitch = 0;
addEventListener('pointermove', e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });
function updateCamera(dt) {
  cyaw += (-mx * 0.35 - cyaw) * Math.min(1, dt * 3);
  cpitch += (-my * 0.18 - cpitch) * Math.min(1, dt * 3);
  camera.position.copy(camBase);
  const look = lookBase.clone().sub(camBase);
  look.applyAxisAngle(new THREE.Vector3(0, 1, 0), cyaw);
  look.y += cpitch;
  camera.lookAt(camBase.clone().add(look));
}

// ---------------- Cartas en la mesa ----------------
const table = new Map(); // key -> { mesh, from, to, t, k, seat }
function spotFor(seat, k) {
  const a = angleOf(seat), d = dirOf(a), perp = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a));
  return d.multiplyScalar(rel(seat) === 0 ? 0.48 : 0.6).add(perp.multiplyScalar((k - 1) * 0.2)).setY(TABLE_Y + 0.006 + k * 0.003);
}
function originFor(seat) {
  if (seat === mySeat) { const v = new THREE.Vector3(0, -0.24, -0.55); camera.localToWorld(v); return v; }
  const o = seatObjs[seat];
  if (o && o.ch) { const v = new THREE.Vector3(); o.ch.userData.cards.getWorldPosition(v); return v; }
  return dirOf(angleOf(seat)).multiplyScalar(1.6).setY(1.05);
}
const glowMat = new THREE.MeshBasicMaterial({ color: 0xffd25e, transparent: true, opacity: 0.85, toneMapped: false });
function syncTable() {
  const keys = new Set();
  S.tricks.forEach((tr, k) => tr.forEach(p => {
    const key = `${S.handNo}:${k}:${p.seat}`;
    keys.add(key);
    let e = table.get(key);
    if (!e) {
      const mesh = makeCard(p.card);
      mesh.scale.setScalar(1.25);
      mesh.rotation.order = 'YXZ';
      const to = spotFor(p.seat, k), from = originFor(p.seat);
      mesh.position.copy(from);
      e = { mesh, from, to, t: 0, k, seat: p.seat, rot: angleOf(p.seat) + Math.PI + (Math.random() - 0.5) * 0.25 };
      if (p.seat === mySeat) removeHandCard(p.card);
      table.set(key, e);
    }
    const done = S.results.length > k;
    const win = done && S.trickWin[k] === p.seat;
    if (win && !e.glow) {
      e.glow = new THREE.Mesh(new THREE.PlaneGeometry(0.226, 0.342), glowMat);
      e.glow.position.z = -0.002; e.mesh.add(e.glow);
    }
  }));
  for (const [key, e] of table) if (!keys.has(key)) { scene.remove(e.mesh); table.delete(key); }
}
function updateTable(dt) {
  for (const e of table.values()) {
    if (e.t < 1) {
      e.t = Math.min(1, e.t + dt * 2.8);
      const t = 1 - Math.pow(1 - e.t, 3);
      e.mesh.position.lerpVectors(e.from, e.to, t);
      e.mesh.position.y += Math.sin(t * Math.PI) * 0.18;
      e.mesh.rotation.set(-Math.PI / 2 * t + (1 - t) * -0.3, e.rot, (1 - t) * 2.5);
    }
  }
}

// ---------------- Mi mano ----------------
const handGroup = new THREE.Group(); camera.add(handGroup);
let handMeshes = []; // { card, mesh, hover }
function keyOf(c) { return c.s + c.n; }
function syncHand(deal) {
  const keys = hand.map(keyOf);
  handMeshes = handMeshes.filter(h => { if (keys.includes(keyOf(h.card))) return true; handGroup.remove(h.mesh); return false; });
  hand.forEach((c, i) => {
    if (handMeshes.some(h => keyOf(h.card) === keyOf(c))) return;
    const mesh = makeCard(c, { lit: false }); scene.remove(mesh); handGroup.add(mesh); mesh.scale.setScalar(0.72);
    mesh.traverse(o => { o.castShadow = false; });
    mesh.position.set(0, -0.6, -0.55);
    mesh.userData.delay = deal ? i * 0.12 : 0;
    handMeshes.push({ card: c, mesh, hover: 0 });
  });
  handMeshes.sort((a, b) => keys.indexOf(keyOf(a.card)) - keys.indexOf(keyOf(b.card)));
}
function removeHandCard(c) {
  const i = handMeshes.findIndex(h => keyOf(h.card) === keyOf(c));
  if (i >= 0) { handGroup.remove(handMeshes[i].mesh); handMeshes.splice(i, 1); }
  hand = hand.filter(x => keyOf(x) !== keyOf(c));
}
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let hovered = -1;
function pick(e) {
  ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(handMeshes.map(h => h.mesh), true);
  if (!hits.length) return -1;
  return handMeshes.findIndex(h => h.mesh === hits[0].object.parent);
}
renderer.domElement.addEventListener('pointermove', e => { hovered = S && canPlay(S, mySeat) ? pick(e) : -1; renderer.domElement.style.cursor = hovered >= 0 ? 'pointer' : 'default'; });
renderer.domElement.addEventListener('click', e => {
  if (!S || !canPlay(S, mySeat)) return;
  const i = pick(e); if (i < 0) return;
  const card = handMeshes[i].card;
  const idx = hand.findIndex(c => keyOf(c) === keyOf(card));
  if (idx < 0) return;
  act({ t: 'play', i: idx });
});
function updateHand(dt) {
  const n = handMeshes.length, can = S && canPlay(S, mySeat);
  handMeshes.forEach((h, i) => {
    const m = h.mesh;
    if (m.userData.delay > 0) { m.userData.delay -= dt; return; }
    h.hover += ((i === hovered ? 1 : 0) - h.hover) * Math.min(1, dt * 12);
    const mid = (n - 1) / 2;
    const tx = (i - mid) * 0.1, ty = -0.27 - Math.abs(i - mid) * 0.01 + h.hover * 0.045 - (can ? 0 : 0.03), tz = -0.56 + i * 0.002;
    m.position.x += (tx - m.position.x) * Math.min(1, dt * 10);
    m.position.y += (ty - m.position.y) * Math.min(1, dt * 10);
    m.position.z += (tz - m.position.z) * Math.min(1, dt * 10);
    m.rotation.set(-0.12, 0, -(i - mid) * 0.11);
  });
}

// ---------------- Etiquetas y globitos ----------------
const v3 = new THREE.Vector3();
function project(v) { v3.copy(v).project(camera); return { x: (v3.x * 0.5 + 0.5) * innerWidth, y: (-v3.y * 0.5 + 0.5) * innerHeight, vis: v3.z < 1 }; }
function headPos(seat) {
  const o = seatObjs[seat];
  if (!o || !o.ch) return null;
  const v = new THREE.Vector3(); o.ch.userData.head.getWorldPosition(v); return v;
}
function updateLabels() {
  if (!S) return;
  const actor = S.phase === 'play' ? (S.pending ? S.pending.responder : S.turn) : -1;
  S.seats.forEach((st, i) => {
    const o = seatObjs[i]; if (!o) return;
    const mine = i === mySeat;
    const p = mine ? { x: innerWidth / 2, y: innerHeight * 0.6, vis: true } : (() => { const h = headPos(i); if (!h) return null; const q = project(h.add(new THREE.Vector3(0, 0.34, 0))); q.y = Math.max(q.y, 128); q.x = Math.max(70, Math.min(innerWidth - 70, q.x)); return q; })();
    if (!p) return;
    o.label.style.left = p.x + 'px'; o.label.style.top = p.y + 'px';
    o.label.className = `plabel ${teamOf(S, i) === myTeam() ? 'nos' : 'ellos'}${i === actor ? ' active' : ''}${mine ? ' mine' : ''}`;
    const html = `<span class="nm">${st.bot ? '🤖 ' : ''}${esc(st.name)}</span>${i === S.mano ? '<span class="mano">MANO</span>' : ''}${i === actor && !st.bot && deadlineLocal ? `<i class="tbar" style="--p:${Math.max(0, (deadlineLocal - Date.now()) / 45000)}"></i>` : ''}`;
    if (o.label.dataset.html !== html) { o.label.innerHTML = html; o.label.dataset.html = html; }
    const b = document.querySelector(`.bubble[data-seat="${i}"]`);
    if (b) { b.style.left = p.x + 'px'; b.style.top = (mine ? innerHeight * 0.52 : p.y - 26) + 'px'; }
  });
}
function bubble(seat, text, cls = '') {
  if (!S || !S.seats[seat]) return;
  document.querySelectorAll(`.bubble[data-seat="${seat}"]`).forEach(b => b.remove());
  const b = document.createElement('div');
  b.className = `bubble ${cls}`; b.textContent = text; b.dataset.seat = seat;
  $('bubbles').appendChild(b);
  updateLabels();
  setTimeout(() => b.remove(), 2400);
  const o = seatObjs[seat];
  if (o && o.ch) react(o.ch);
}

// ---------------- HUD ----------------
const teamLabel = t => (t === myTeam() ? 'Nosotros' : 'Ellos');
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
    const body = goal === 30 ? `<div class="half">${sticks(Math.min(p, half))}</div><div class="sep"></div><div class="half">${sticks(Math.max(0, p - half))}</div>` : `<div class="half">${sticks(p)}</div>`;
    return `<div class="team ${cls}"><h4>${teamLabel(t).toUpperCase()}</h4><div class="pts">${p}</div><div class="sticks">${body}</div></div>`;
  };
  $('score').innerHTML = team(myTeam(), 't-nos') + team(1 - myTeam(), 't-ellos');
}
let envOpen = false;
function renderActions() {
  const a = [];
  if (S.phase === 'play' && mySeat >= 0 && !isResponder(S, mySeat)) {
    if (canTruco(S, mySeat)) a.push(`<button class="btn truco" data-a="truco">${TRUCO_NAMES[nextTrucoLevel(S) - 1]}</button>`);
    if (canEnvido(S, mySeat)) a.push(envOpen ? '<div class="envmenu"><button class="btn envido small" data-a="envido">Envido</button><button class="btn envido small" data-a="real">Real envido</button><button class="btn envido small" data-a="falta">Falta envido</button></div>' : '<button class="btn envido" data-a="envmenu">Envido</button>');
    if (canMazo(S, mySeat)) a.push('<button class="btn mazo" data-a="mazo">Irse al mazo</button>');
  }
  $('actions').innerHTML = a.join('');
}
$('actions').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.a === 'envmenu') { envOpen = true; renderActions(); return; }
  envOpen = false; act({ t: b.dataset.a });
});
function renderRespond() {
  const R = $('respond');
  if (!(S.phase === 'play' && mySeat >= 0 && isResponder(S, mySeat))) { R.hidden = true; return; }
  const p = S.pending;
  const what = p.kind === 'truco' ? TRUCO_NAMES[p.to - 1] : p.calls.map(c => ENVIDO_NAMES[c]).join(' + ');
  let rows = '<div class="row"><button class="btn yes" data-a="quiero">Quiero</button><button class="btn no" data-a="noquiero">No quiero</button></div>';
  const extra = [];
  if (p.kind === 'truco' && canTruco(S, mySeat)) extra.push(`<button class="btn truco small" data-a="truco">Quiero ${TRUCO_NAMES[p.to]}</button>`);
  if (p.kind === 'envido') envidoRaises(S, mySeat).forEach(k => extra.push(`<button class="btn envido small" data-a="${k}">${ENVIDO_NAMES[k]}</button>`));
  if (p.kind === 'truco' && canEnvido(S, mySeat)) ['envido', 'real', 'falta'].forEach(k => extra.push(`<button class="btn envido small" data-a="${k}">${ENVIDO_NAMES[k]}</button>`));
  if (extra.length) rows += `<div class="row">${extra.join('')}</div>`;
  R.innerHTML = `<h3>${esc(S.seats[p.caller].name)} cantó</h3><h2>¡${esc(what)}!</h2>${rows}${p.kind === 'truco' && canEnvido(S, mySeat) ? '<h3>¡El envido está primero!</h3>' : ''}`;
  R.hidden = false;
}
$('respond').addEventListener('click', e => { const b = e.target.closest('button'); if (b) act({ t: b.dataset.a }); });
function renderStatus() {
  const st = $('status'); st.classList.remove('mine');
  if (S.phase !== 'play') { st.textContent = ''; return; }
  if (S.pending) { st.textContent = S.pending.responder === mySeat ? '' : `Esperando la respuesta de ${S.seats[S.pending.responder].name}…`; return; }
  if (S.turn === mySeat) { st.textContent = '¡Te toca! Elegí una carta'; st.classList.add('mine'); }
  else st.textContent = `Turno de ${S.seats[S.turn].name}`;
}
function render() {
  if (!S) return;
  const lk = S.seats.map(s => s.id || s.name).join('|') + ':' + mySeat;
  if (lk !== layoutKey) rebuildSeats(); else syncSkins();
  S.seats.forEach((st, i) => { const o = seatObjs[i]; if (o && o.ch) setHeldCards(o.ch, S.counts[i] || 0); });
  syncTable();
  renderScore(); renderActions(); renderRespond(); renderStatus();
  $('info').textContent = `${S.seats.length / 2} vs ${S.seats.length / 2} · a ${S.cfg.goal}`;
  if (S.phase === 'end') showEnd();
}

// ---------------- Eventos ----------------
let bannerT;
function onEvent(e) {
  if (e.kind === 'deal') { sfx.deal(); envOpen = false; seatObjs.forEach(o => { if (o && o.ch) o.ch.userData.mood = null; }); }
  else if (e.kind === 'play') sfx.card();
  else if (e.kind === 'call') { setTimeout(() => bubble(e.seat, e.text, 'big'), 30); sfx.call(); say(e.text); }
  else if (e.kind === 'tantos') { bubble(e.seat, e.text, 'num'); say(e.text); }
  else if (e.kind === 'info') bubble(e.seat, e.text);
  else if (e.kind === 'points') {
    const nos = S && e.team === myTeam();
    const B = $('banner');
    B.className = nos ? 't-nos' : 't-ellos';
    B.innerHTML = `<b>${nos ? 'Nosotros' : 'Ellos'} +${e.pts}</b><span>${esc(e.text || '')}</span>`;
    B.hidden = false;
    clearTimeout(bannerT); bannerT = setTimeout(() => { B.hidden = true; }, 2200);
    (nos ? sfx.win : sfx.lose)();
    if (S) S.seats.forEach((st, i) => { const o = seatObjs[i]; if (o && o.ch) { react(o.ch, st.team === e.team ? 'win' : 'sad'); setTimeout(() => { if (o.ch) o.ch.userData.mood = null; }, 1800); } });
  }
}

// ---------------- Fin ----------------
let endShown = false;
function showEnd() {
  if (endShown) return;
  endShown = true;
  const nos = S.winner === myTeam();
  const names = S.seats.filter(s => s.team === S.winner).map(s => s.name).join(', ');
  $('end').innerHTML = `<div class="panel"><h1>${mySeat < 0 ? '¡Fin!' : nos ? '¡Ganamos! 🎉' : 'Perdimos 😢'}</h1><h2>${S.score[myTeam()]} a ${S.score[1 - myTeam()]}</h2><p>Ganó el equipo de ${esc(names)}</p><div class="end-count">Volviendo al menú en <b id="endc">${END_SECS}</b></div></div>`;
  $('end').hidden = false;
  if (nos) sfx.fanfare(); else sfx.lose();
  S.seats.forEach((st, i) => { const o = seatObjs[i]; if (o && o.ch) o.ch.userData.mood = st.team === S.winner ? 'win' : 'sad'; });
  let left = END_SECS;
  const iv = setInterval(() => { left--; const el = $('endc'); if (el) el.textContent = Math.max(0, left); if (left <= 0) clearInterval(iv); }, 1000);
}
function finishGame(team) {
  setTimeout(() => {
    const winners = S.seats.filter(s => s.team === team && !s.bot && s.id).map(s => s.id);
    Arcade.end({ winners, text: winners.length ? '' : '🤖 Ganaron los bots al Truco' });
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
let lastHandNo = -1;
function onHand(cards) {
  hand = cards.slice();
  const deal = S && S.handNo !== lastHandNo;
  if (S) lastHandNo = S.handNo;
  syncHand(deal);
}

// ---------------- Skins ----------------
const pv = { renderer: null, scene: null, cam: null, ch: null };
function initPreview(canvas) {
  if (!pv.renderer) {
    pv.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    pv.scene = new THREE.Scene();
    pv.scene.add(new THREE.HemisphereLight(0xfff0dd, 0x332211, 1.6));
    const d = new THREE.DirectionalLight(0xffe2b0, 2.2); d.position.set(1, 2, 2); pv.scene.add(d);
    pv.cam = new THREE.PerspectiveCamera(30, 1, 0.1, 10); pv.cam.position.set(0, 1.4, 2.6); pv.cam.lookAt(0, 1.18, 0);
  }
  canvas.replaceWith(pv.renderer.domElement);
  pv.renderer.domElement.className = 'skinprev';
  pv.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); pv.renderer.setSize(200, 220);
  refreshPreview();
}
function refreshPreview() {
  if (!pv.scene) return;
  if (pv.ch) pv.scene.remove(pv.ch);
  pv.ch = makeCharacter(mySkin, pv.scene);
  setHeldCards(pv.ch, 0);
}
function skinUI() {
  const btns = (list, key) => list.map(x => `<button data-skin="${key}" data-v="${x.id}" class="${mySkin[key] === x.id ? 'on' : ''}">${x.name}</button>`).join('');
  return `<div class="skin"><canvas id="pvc"></canvas><div class="skinopts">
    <label>Personaje</label><div class="seg">${btns(MODELS, 'model')}</div>
    <label>Color</label><div class="swatches">${COLORS.map(c => `<button data-skin="color" data-v="${c}" class="${mySkin.color === c ? 'on' : ''}" style="background:${c}"></button>`).join('')}</div>
    <label>Sombrero</label><div class="seg">${btns(HATS, 'hat')}</div></div></div>`;
}
function setSkin(key, v) {
  mySkin = { ...mySkin, [key]: v };
  try { localStorage.setItem('truco:skin', JSON.stringify(mySkin)); } catch { /* */ }
  if (Arcade.isHost()) { skins[myId] = mySkin; if (engine && mySeat >= 0) engine.setSkin(mySeat, mySkin); }
  else Arcade.send('skin', mySkin, { to: Arcade.ctx.hostId });
  refreshPreview();
  document.querySelectorAll(`[data-skin="${key}"]`).forEach(b => b.classList.toggle('on', b.dataset.v === v));
}
document.addEventListener('click', e => { const b = e.target.closest('[data-skin]'); if (b) setSkin(b.dataset.skin, b.dataset.v); });
$('skinBtn').addEventListener('click', () => {
  $('skinPanel').innerHTML = `<div class="panel"><h2>Tu personaje</h2>${skinUI()}<button class="go" id="skinClose">Listo</button></div>`;
  $('skinPanel').hidden = false;
  initPreview($('pvc'));
});
$('skinPanel').addEventListener('click', e => { if (e.target.id === 'skinClose') $('skinPanel').hidden = true; });

// ---------------- Configuración (host) ----------------
function humans() { return Arcade.players.map(p => ({ id: p.id, name: p.name })); }
function validSizes(h) { return [2, 4, 6].filter(s => s >= h); }
function buildSeats() {
  const H = humans(), n = setupSel.size, seats = Array.from({ length: n }, (_, i) => ({ id: null, name: '', bot: true, team: i % 2, skin: null }));
  const order = setupSel.mode === 'together' && H.length <= n / 2
    ? [...Array.from({ length: n / 2 }, (_, k) => k * 2), ...Array.from({ length: n / 2 }, (_, k) => k * 2 + 1)]
    : Array.from({ length: n }, (_, k) => k);
  H.forEach((h, k) => { const s = seats[order[k]]; Object.assign(s, { id: h.id, name: h.name, bot: false, skin: skins[h.id] || null }); });
  const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5);
  seats.forEach(s => { if (s.bot) { s.name = names.pop(); s.skin = randomSkin(); } });
  return seats;
}
function renderSetup() {
  const H = humans(), host = Arcade.isHost();
  const sizes = validSizes(H.length);
  if (!sizes.includes(setupSel.size)) setupSel.size = sizes[0] || 6;
  const seats = buildSeats();
  const col = t => seats.filter(s => s.team === t).map(s => `<span>${s.bot ? '🤖 ' : ''}${esc(s.name)}</span>`).join('');
  const seg = (key, opts) => `<div class="seg">${opts.map(([v, label, dis]) => `<button data-k="${key}" data-v="${v}" class="${setupSel[key] === v ? 'on' : ''}" ${dis || !host ? 'disabled' : ''}>${label}</button>`).join('')}</div>`;
  const canTogether = H.length > 1 && H.length <= setupSel.size / 2;
  $('setup').innerHTML = `<div class="panel wide"><h1>Truco</h1>
    <div class="cols"><div class="col">
      <p>${host ? 'Armá la mesa. Los lugares vacíos los ocupan bots.' : 'El host está armando la mesa…'}</p>
      <div class="opt"><label>Mesa</label>${seg('size', [[2, '1 vs 1', H.length > 2], [4, '2 vs 2', H.length > 4], [6, '3 vs 3', false]])}</div>
      <div class="opt"><label>Puntos</label>${seg('goal', [[15, 'A 15'], [30, 'A 30']])}</div>
      ${H.length > 1 && setupSel.size > H.length ? `<div class="opt"><label>Equipos</label>${seg('mode', [['mix', 'Mezclados'], ['together', 'Humanos vs bots', !canTogether]])}</div>` : ''}
      <div class="teams-prev"><div class="a">Equipo 1${col(0)}</div><div class="b">Equipo 2${col(1)}</div></div>
    </div><div class="col"><h3>Tu personaje</h3>${skinUI()}</div></div>
    ${host ? '<button class="go" id="go">¡A jugar!</button>' : ''}</div>`;
  $('setup').hidden = false;
  initPreview($('pvc'));
}
$('setup').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || !Arcade.isHost() || b.dataset.skin) return;
  if (b.id === 'go') return startEngine();
  const k = b.dataset.k; if (!k) return;
  setupSel[k] = k === 'mode' ? b.dataset.v : +b.dataset.v;
  renderSetup();
  Arcade.send('setup', setupSel);
});
function startEngine() {
  skins[myId] = mySkin;
  const seats = buildSeats();
  engine = new Engine({
    cfg: { size: setupSel.size, goal: setupSel.goal }, seats, speed: FAST ? 0.3 : 1,
    push: s => { const pub = JSON.parse(JSON.stringify(s)); pub.tl = s.deadline ? s.deadline - Date.now() : 0; delete pub.deadline; Arcade.send('st', pub); onState(pub); },
    priv: (seat, cards) => { const id = seats[seat].id; if (id === myId) onHand(cards); else if (id) Arcade.send('hd', { cards, handNo: engine ? engine.S.handNo : 0 }, { to: id }); },
    event: e => { Arcade.send('ev', e); onEvent(e); },
    end: team => finishGame(team),
  });
  engine.start();
}

// ---------------- Loop ----------------
let last = performance.now(), clock = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now; clock += dt;
  updateCamera(dt);
  updateScene(dt, clock);
  if (S) {
    const actor = S.phase === 'play' ? (S.pending ? S.pending.responder : S.turn) : -1;
    const target = actor === mySeat || actor < 0 ? camera.position.clone() : (headPos(actor) || new THREE.Vector3(0, 1, 0));
    seatObjs.forEach((o, i) => { if (o && o.ch) animateCharacter(o.ch, dt, i === actor ? camera.position : target, i === actor); });
  }
  updateTable(dt);
  updateHand(dt);
  updateLabels();
  renderer.render(scene, camera);
  if (pv.renderer && pv.ch && pv.renderer.domElement.isConnected) {
    pv.ch.rotation.y += dt * 0.8; animateCharacter(pv.ch, dt, null, false);
    pv.renderer.render(pv.scene, pv.cam);
  }
}

// ---------------- Vista previa (miniatura) ----------------
function preview() {
  myId = 'me';
  const sk = [null, { model: 'gato', color: '#f08a2c', hat: 'sombrero' }, { model: 'oso', color: '#3b82f6', hat: 'boina' }, { model: 'zorro', color: '#e8505b', hat: 'galera' }];
  S = {
    phase: 'play', cfg: { size: 4, goal: 30 }, score: [17, 12], mano: 1, turn: 0, handNo: 1, counts: [3, 2, 2, 2],
    seats: [{ id: 'me', name: 'Gaby', team: 0 }, { id: 'b', name: 'Agus', team: 1 }, { id: 'c', name: 'Sofi', team: 0 }, { id: null, name: 'Pampa', bot: true, team: 1 }].map((s, i) => ({ ...s, skin: sk[i] })),
    tricks: [[{ seat: 1, card: { s: 'o', n: 7 } }, { seat: 2, card: { s: 'c', n: 3 } }, { seat: 3, card: { s: 'b', n: 12 } }]], results: [], trickWin: [],
    truco: { level: 0, canRaise: null }, envidoDone: false, pending: null, tl: 0,
  };
  mySeat = 0;
  render();
  hand = [{ s: 'e', n: 1 }, { s: 'b', n: 1 }, { s: 'e', n: 7 }]; syncHand(false);
  for (const e of table.values()) e.t = 0.999;
  ['score', 'topright', 'status', 'actions'].forEach(id => { $(id).style.visibility = 'hidden'; });
  $('labels').style.visibility = 'hidden';
  $('preview').hidden = false;
  setTimeout(() => { window.__ready = true; }, 2500);
}

// ---------------- Inicio ----------------
requestAnimationFrame(loop);
Arcade.ready().then(ctx => {
  if (PREVIEW) return preview();
  myId = ctx.me.id;
  skins[myId] = mySkin;
  Arcade.on('st', st => onState(st));
  Arcade.on('hd', d => onHand(d.cards));
  Arcade.on('ev', e => onEvent(e));
  Arcade.on('setup', sel => { if (S || JSON.stringify(sel) === JSON.stringify(setupSel)) return; setupSel = sel; renderSetup(); });
  Arcade.on('skin', (sk, from) => {
    if (!Arcade.isHost() || !validSkin(sk)) return;
    skins[from] = sk;
    if (engine) { const seat = engine.S.seats.findIndex(s => s.id === from); if (seat >= 0) engine.setSkin(seat, sk); }
  });
  Arcade.on('act', (a, from) => {
    if (!Arcade.isHost() || !engine) return;
    const seat = engine.S.seats.findIndex(s => s.id === from);
    if (seat >= 0) engine.act(seat, a);
  });
  Arcade.on('hi', (d, from) => {
    if (!Arcade.isHost()) return;
    if (d && validSkin(d.skin)) skins[from] = d.skin;
    if (engine) engine.push(); else if (!d || !d.again) Arcade.send('setup', setupSel, { to: from });
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
    const winners = lead === null ? [] : S.seats.filter(s => s.team === lead && !s.bot && s.id).map(s => s.id);
    Arcade.end({ winners, text: 'El host se fue: la partida terminó' });
  });
  setupSel.size = validSizes(humans().length)[0] || 6;
  renderSetup();
  if (!Arcade.isHost()) {
    const hi = setInterval(() => { if (S) clearInterval(hi); else Arcade.send('hi', { skin: mySkin, again: 1 }, { to: Arcade.ctx.hostId }); }, 1000);
    Arcade.send('hi', { skin: mySkin }, { to: Arcade.ctx.hostId });
  }
});
