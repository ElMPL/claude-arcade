// Truco 3D — mesa en un bar, primera persona, skins, sala de espera, red y HUD
import { THREE, renderer, scene, camera, updateScene, makeCard, makeChair, makeStack, TABLE_Y, PREVIEW } from './scene.js';
import { makeCharacter, setHeldCards, animateCharacter, react, MODELS, COLORS, HATS, randomSkin, validSkin } from './chars.js';
import { Engine } from '../js/engine.js';
import { canEnvido, canTruco, canPlay, canMazo, isResponder, envidoRaises, nextTrucoLevel, TRUCO_NAMES, ENVIDO_NAMES, teamOf } from '../js/rules.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const FAST = (() => { try { return localStorage.getItem('truco:fast') === '1'; } catch { return false; } })();
const BOT_NAMES = ['Pampa', 'Gaucho', 'Chamamé', 'Malbec', 'Mate', 'Tango', 'Ombú'];
const END_SECS = 12;
const CHAT = ['¡Cantá!', '¡Poné!', '¡Vení!', 'Callado', 'Tengo para el envido', 'Tengo para el truco', 'No tengo nada', '¡Andá vos!'];
const SPEED = FAST ? 0.3 : 1;

let myId = null, S = null, hand = [], mySeat = -1, engine = null, deadlineLocal = 0, layoutKey = '';
let lobby = { sel: { size: 2, goal: 30, mode: 'mix' }, ready: [] };
let mySkin = (() => { try { return validSkin(JSON.parse(localStorage.getItem('truco:skin'))) || randomSkin(); } catch { return randomSkin(); } })();
const skins = {}; // (host) skin de cada humano

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
  riffle: () => { for (let i = 0; i < 14; i++) snap(i * 0.035, 0.08); },
  call: () => { tone(523, 0.12); tone(784, 0.2, { at: 0.1 }); }, chat: () => tone(1046, 0.08, { type: 'sine', vol: 0.06 }),
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
const seatObjs = [];
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
    if (i !== mySeat) { ch = makeCharacter(validSkin(st.skin) || randomSkin()); ch.position.copy(d.clone().multiplyScalar(1.72)); ch.rotation.y = a + Math.PI; }
    const label = document.createElement('div'); label.className = 'plabel'; $('labels').appendChild(label);
    seatObjs[i] = { ch, chair, angle: a, label };
  });
  layoutKey = S.seats.map(s => s.id || s.name).join('|') + ':' + mySeat;
}

// Cámara en primera persona (más cerca de la mesa)
const camBase = new THREE.Vector3(0, 1.33, 1.78), lookBase = new THREE.Vector3(0, 0.74, 0.1);
let mx = 0, my = 0, cyaw = 0, cpitch = 0;
addEventListener('pointermove', e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });
function updateCamera(dt) {
  cyaw += (-mx * 0.4 - cyaw) * Math.min(1, dt * 3);
  cpitch += (-my * 0.2 - cpitch) * Math.min(1, dt * 3);
  camera.position.copy(camBase);
  const look = lookBase.clone().sub(camBase);
  look.applyAxisAngle(new THREE.Vector3(0, 1, 0), cyaw);
  look.y += cpitch;
  camera.lookAt(camBase.clone().add(look));
}

// ---------------- Cartas en la mesa ----------------
const table = new Map();
function spotFor(seat, k) {
  const a = angleOf(seat), d = dirOf(a), perp = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a));
  return d.multiplyScalar(rel(seat) === 0 ? 0.42 : 0.56).add(perp.multiplyScalar((k - 1) * 0.25)).setY(TABLE_Y + 0.016 + k * 0.004);
}
function originFor(seat) {
  if (seat === mySeat) { const v = new THREE.Vector3(0, -0.25, -0.55); camera.localToWorld(v); return v; }
  const o = seatObjs[seat];
  if (o && o.ch) { const v = new THREE.Vector3(); o.ch.userData.cards.getWorldPosition(v); return v; }
  return dirOf(angleOf(seat)).multiplyScalar(1.6).setY(1.05);
}
const glowMat = new THREE.MeshBasicMaterial({ color: 0xffd25e, transparent: true, opacity: 0.9, toneMapped: false });
function syncTable() {
  const keys = new Set();
  S.tricks.forEach((tr, k) => tr.forEach(p => {
    const key = `${S.handNo}:${k}:${p.seat}`;
    keys.add(key);
    let e = table.get(key);
    if (!e) {
      const mesh = makeCard(p.card);
      mesh.scale.setScalar(1.5); mesh.rotation.order = 'YXZ';
      mesh.traverse(o => { o.castShadow = false; });
      const to = spotFor(p.seat, k), from = originFor(p.seat);
      mesh.position.copy(from);
      e = { mesh, from, to, t: 0, rot: angleOf(p.seat) + Math.PI + (Math.random() - 0.5) * 0.2 };
      if (p.seat === mySeat) removeHandCard(p.card);
      table.set(key, e);
    }
    if (S.results.length > k && S.trickWin[k] === p.seat && !e.glow) {
      e.glow = new THREE.Mesh(new THREE.PlaneGeometry(0.226, 0.342), glowMat); e.glow.position.z = -0.002; e.mesh.add(e.glow);
    }
  }));
  for (const [key, e] of table) if (!keys.has(key)) { scene.remove(e.mesh); table.delete(key); }
}
function updateTable(dt) {
  for (const e of table.values()) {
    if (e.t >= 1) continue;
    e.t = Math.min(1, e.t + dt * 2.8);
    const t = 1 - Math.pow(1 - e.t, 3);
    e.mesh.position.lerpVectors(e.from, e.to, t);
    e.mesh.position.y += Math.sin(t * Math.PI) * 0.18;
    e.mesh.rotation.set(-Math.PI / 2 * t + (1 - t) * -0.3, e.rot, (1 - t) * 2.5);
  }
}

// ---------------- Mezclar y repartir ----------------
let deal = null;
const DEAL_SHUFFLE = 1.3, DEAL_GAP = 0.11, DEAL_FLY = 0.32;
function startDeal(e) {
  if (!S) return;
  endDeal();
  const n = e.n || S.seats.length;
  const a = angleOf(e.dealer), d = dirOf(a);
  const deckPos = d.clone().multiplyScalar(0.72).setY(TABLE_Y + 0.03);
  const halves = [makeStack(20), makeStack(20)];
  halves.forEach(h => { h.position.copy(deckPos); h.rotation.y = a; });
  deal = { t: 0, dealer: e.dealer, n, mano: e.mano, deckPos, a, halves, flying: [], arrived: Array(n).fill(0), next: 0 };
  sfx.riffle();
  const o = seatObjs[e.dealer]; if (o && o.ch) react(o.ch);
}
function endDeal() {
  if (!deal) return;
  deal.halves.forEach(h => scene.remove(h));
  deal.flying.forEach(f => scene.remove(f.mesh));
  deal = null;
}
function dealTarget(seat) {
  if (seat === mySeat) { const v = new THREE.Vector3(0, -0.3, -0.55); camera.localToWorld(v); return v; }
  return originFor(seat);
}
function updateDeal(dt) {
  if (!deal) return;
  const prevT = deal.t;
  deal.t += dt / SPEED;
  const t = deal.t, side = new THREE.Vector3(Math.cos(deal.a), 0, -Math.sin(deal.a));
  if (t < DEAL_SHUFFLE) {
    const cyc = (t / DEAL_SHUFFLE) * 2 % 1;
    const sep = Math.sin(Math.min(1, cyc * 1.6) * Math.PI) * 0.14;
    const up = cyc > 0.3 && cyc < 0.7;
    deal.halves.forEach((h, i) => {
      const sgn = i ? 1 : -1;
      h.position.copy(deal.deckPos).addScaledVector(side, sgn * sep);
      h.position.y = deal.deckPos.y + (up ? 0.04 : 0) + i * 0.003;
      h.rotation.set(0, deal.a, sgn * (up ? 0.25 : 0));
    });
    if (Math.floor(t / (DEAL_SHUFFLE / 2)) !== Math.floor(prevT / (DEAL_SHUFFLE / 2))) sfx.riffle();
    return;
  }
  deal.halves[1].visible = false;
  const h0 = deal.halves[0]; h0.position.copy(deal.deckPos); h0.rotation.set(0, deal.a, 0);
  const total = 3 * deal.n;
  while (deal.next < total && t >= DEAL_SHUFFLE + deal.next * DEAL_GAP) {
    const seat = (deal.mano + deal.next) % deal.n;
    const mesh = makeCard(null); mesh.scale.setScalar(0.9);
    deal.flying.push({ mesh, seat, t: 0, from: deal.deckPos.clone().setY(deal.deckPos.y + 0.03) });
    deal.next++;
    snap(0, 0.12);
  }
  for (let i = deal.flying.length - 1; i >= 0; i--) {
    const f = deal.flying[i];
    f.t += dt / SPEED / DEAL_FLY;
    const k = Math.min(1, f.t);
    f.mesh.position.lerpVectors(f.from, dealTarget(f.seat), k);
    f.mesh.position.y += Math.sin(k * Math.PI) * 0.12;
    f.mesh.rotation.set(-Math.PI / 2, deal.a + k * 4, 0);
    if (k >= 1) { scene.remove(f.mesh); deal.flying.splice(i, 1); deal.arrived[f.seat]++; }
  }
  h0.scale.y = Math.max(0.05, 1 - deal.next / total);
  if (deal.next >= total && !deal.flying.length) endDeal();
}
const shownCount = seat => (deal ? Math.min(S.counts[seat] || 0, deal.arrived[seat] || 0) : S.counts[seat] || 0);

// ---------------- Mi mano (se dibuja encima de todo, así no se mete en la mesa) ----------------
const handScene = new THREE.Scene();
const handGroup = new THREE.Group(); handScene.add(handGroup);
let handMeshes = [];
const keyOf = c => c.s + c.n;
function syncHand() {
  const keys = hand.map(keyOf);
  handMeshes = handMeshes.filter(h => { if (keys.includes(keyOf(h.card))) return true; handGroup.remove(h.mesh); return false; });
  hand.forEach(c => {
    if (handMeshes.some(h => keyOf(h.card) === keyOf(c))) return;
    const mesh = makeCard(c, { lit: false }); scene.remove(mesh); handGroup.add(mesh);
    mesh.scale.setScalar(0.72); mesh.traverse(o => { o.castShadow = false; });
    mesh.position.set(0, -0.5, -0.55);
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
  handScene.updateMatrixWorld();
  const hits = ray.intersectObjects(handMeshes.filter(h => h.mesh.visible).map(h => h.mesh), true);
  return hits.length ? handMeshes.findIndex(h => h.mesh === hits[0].object.parent) : -1;
}
renderer.domElement.addEventListener('pointermove', e => { hovered = S && canPlay(S, mySeat) ? pick(e) : -1; renderer.domElement.style.cursor = hovered >= 0 ? 'pointer' : 'default'; });
renderer.domElement.addEventListener('click', e => {
  if (!S || !canPlay(S, mySeat)) return;
  const i = pick(e); if (i < 0) return;
  const idx = hand.findIndex(c => keyOf(c) === keyOf(handMeshes[i].card));
  if (idx >= 0) act({ t: 'play', i: idx });
});
function updateHand(dt) {
  handGroup.position.copy(camera.position); handGroup.quaternion.copy(camera.quaternion);
  const n = handMeshes.length, can = S && canPlay(S, mySeat);
  const vis = deal && mySeat >= 0 ? deal.arrived[mySeat] || 0 : n;
  handMeshes.forEach((h, i) => {
    const m = h.mesh;
    m.visible = i < vis;
    h.hover += ((i === hovered ? 1 : 0) - h.hover) * Math.min(1, dt * 12);
    const mid = (n - 1) / 2;
    const tx = (i - mid) * 0.095, ty = -0.19 - Math.abs(i - mid) * 0.01 + h.hover * 0.05 - (can ? 0 : 0.03), tz = -0.52 + i * 0.002;
    m.position.x += (tx - m.position.x) * Math.min(1, dt * 10);
    m.position.y += (ty - m.position.y) * Math.min(1, dt * 10);
    m.position.z += (tz - m.position.z) * Math.min(1, dt * 10);
    m.rotation.set(-0.1, 0, -(i - mid) * 0.12);
  });
}

// ---------------- Etiquetas y globitos ----------------
const v3 = new THREE.Vector3();
function project(v) { v3.copy(v).project(camera); return { x: (v3.x * 0.5 + 0.5) * innerWidth, y: (-v3.y * 0.5 + 0.5) * innerHeight }; }
function headPos(seat) { const o = seatObjs[seat]; if (!o || !o.ch) return null; const v = new THREE.Vector3(); o.ch.userData.head.getWorldPosition(v); return v; }
function updateLabels() {
  if (!S) return;
  const actor = S.phase === 'play' ? (S.pending ? S.pending.responder : S.turn) : -1;
  S.seats.forEach((st, i) => {
    const o = seatObjs[i]; if (!o) return;
    const mine = i === mySeat;
    let p;
    if (mine) p = { x: innerWidth / 2, y: innerHeight * 0.56 };
    else { const h = headPos(i); if (!h) return; p = project(h.add(new THREE.Vector3(0, 0.34, 0))); p.y = Math.max(p.y, 150); p.x = Math.max(90, Math.min(innerWidth - 80, p.x)); }
    o.label.style.left = p.x + 'px'; o.label.style.top = p.y + 'px';
    o.label.className = `plabel ${teamOf(S, i) === myTeam() ? 'nos' : 'ellos'}${i === actor ? ' active' : ''}${mine ? ' mine' : ''}`;
    const html = `<span class="nm">${st.bot ? '🤖 ' : ''}${esc(st.name)}</span>${i === S.mano ? '<span class="mano">MANO</span>' : ''}${i === actor && !st.bot && deadlineLocal ? `<i class="tbar" style="--p:${Math.max(0, (deadlineLocal - Date.now()) / 45000)}"></i>` : ''}`;
    if (o.label.dataset.html !== html) { o.label.innerHTML = html; o.label.dataset.html = html; }
    document.querySelectorAll(`.bubble[data-seat="${i}"]`).forEach(b => { b.style.left = p.x + 'px'; b.style.top = (mine ? innerHeight * 0.5 : p.y - 26) + 'px'; });
  });
}
function bubble(seat, text, cls = '', ms = 2400) {
  if (!S || !S.seats[seat]) return;
  document.querySelectorAll(`.bubble[data-seat="${seat}"]`).forEach(b => b.remove());
  const b = document.createElement('div');
  b.className = `bubble ${cls}`; b.textContent = text; b.dataset.seat = seat;
  $('bubbles').appendChild(b);
  updateLabels();
  setTimeout(() => b.remove(), ms);
  const o = seatObjs[seat]; if (o && o.ch) react(o.ch);
}

// ---------------- HUD ----------------
const teamLabel = t => (t === myTeam() ? 'Nosotros' : 'Ellos');
function sticks(n) {
  const out = [];
  for (let k = 0; k < n; k += 5) {
    const L = [[3, 3, 3, 23], [3, 23, 23, 23], [23, 23, 23, 3], [23, 3, 3, 3], [3, 3, 23, 23]].slice(0, Math.min(5, n - k));
    out.push(`<svg width="26" height="26" viewBox="0 0 26 26">${L.map(([a, b, c, d]) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#f3d9a4" stroke-width="2.6" stroke-linecap="round"/><circle cx="${c}" cy="${d}" r="2.3" fill="#e2483d"/>`).join('')}</svg>`);
  }
  return out.join('');
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

// Botonera de cantos (siempre visible; se habilita lo que se puede cantar)
function renderBar() {
  const bar = $('bar');
  if (!S || mySeat < 0 || S.phase === 'end') { bar.hidden = true; return; }
  bar.hidden = false;
  const B = (a, label, cls, on) => `<button class="cb ${cls}" data-a="${a}" ${on ? '' : 'disabled'}>${label}</button>`;
  if (isResponder(S, mySeat)) {
    const p = S.pending;
    const what = p.kind === 'truco' ? TRUCO_NAMES[p.to - 1] : ENVIDO_NAMES[p.calls[p.calls.length - 1]];
    const btns = [B('quiero', 'QUIERO', 'yes', true), B('noquiero', 'NO QUIERO', 'no', true)];
    if (p.kind === 'truco' && canTruco(S, mySeat)) btns.push(B('truco', TRUCO_NAMES[p.to].toUpperCase(), 'truco', true));
    if (p.kind === 'envido') envidoRaises(S, mySeat).forEach(k => btns.push(B(k, ENVIDO_NAMES[k].toUpperCase(), 'envido', true)));
    if (p.kind === 'truco' && canEnvido(S, mySeat)) ['envido', 'real', 'falta'].forEach(k => btns.push(B(k, ENVIDO_NAMES[k].toUpperCase(), 'envido', true)));
    bar.className = 'respond';
    bar.innerHTML = `<div class="sung"><b>${esc(S.seats[p.caller].name)}</b> cantó <em>¡${esc(what)}!</em>${p.kind === 'truco' && canEnvido(S, mySeat) ? '<small>¡El envido está primero!</small>' : ''}</div><div class="row">${btns.join('')}</div>`;
    return;
  }
  const env = canEnvido(S, mySeat), tr = canTruco(S, mySeat);
  const lvl = Math.min(3, nextTrucoLevel(S));
  bar.className = S.phase === 'play' && S.turn === mySeat && !S.pending ? 'myturn' : '';
  bar.innerHTML = `<div class="row">
    <div class="grp">${B('envido', 'ENVIDO', 'envido', env)}${B('real', 'REAL ENVIDO', 'envido', env)}${B('falta', 'FALTA ENVIDO', 'envido', env)}</div>
    <div class="grp">${B('truco', (TRUCO_NAMES[lvl - 1] || 'Vale cuatro').toUpperCase(), 'truco', tr)}</div>
    <div class="grp">${B('mazo', 'IRSE AL MAZO', 'mazo', canMazo(S, mySeat))}</div></div>`;
}
$('bar').addEventListener('click', e => { const b = e.target.closest('button'); if (b && !b.disabled) act({ t: b.dataset.a }); });
function renderStatus() {
  const st = $('status'); st.classList.remove('mine');
  if (!S || S.phase === 'end') { st.textContent = ''; return; }
  if (S.phase === 'deal') { st.textContent = `${S.seats[S.dealer].name} mezcla y reparte…`; return; }
  if (S.phase !== 'play') { st.textContent = ''; return; }
  if (S.pending) { st.textContent = S.pending.responder === mySeat ? '' : `Esperando la respuesta de ${S.seats[S.pending.responder].name}…`; return; }
  if (S.turn === mySeat) { st.textContent = '¡Te toca! Elegí una carta'; st.classList.add('mine'); }
  else st.textContent = `Turno de ${S.seats[S.turn].name}`;
}

// Chat de equipo (4 y 6 jugadores): solo lo ven tus compañeros
const chatLog = [];
function teammates() { return S ? S.seats.map((s, i) => ({ s, i })).filter(x => x.i !== mySeat && x.s.team === myTeam() && !x.s.bot && x.s.id) : []; }
function renderChat() {
  const show = !!S && S.seats.length >= 4 && mySeat >= 0 && S.phase !== 'end';
  $('chat').hidden = !show;
  if (show) $('chatLog').innerHTML = chatLog.slice(-4).map(m => `<div><b>${esc(m.name)}:</b> ${esc(m.text)}</div>`).join('');
}
$('chatBtn').addEventListener('click', () => {
  const m = $('chatMenu');
  m.hidden = !m.hidden;
  if (!m.hidden) m.innerHTML = CHAT.map((t, i) => `<button data-c="${i}">${esc(t)}</button>`).join('');
});
$('chatMenu').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const i = +b.dataset.c;
  $('chatMenu').hidden = true;
  teammates().forEach(x => Arcade.send('chat', { i, seat: mySeat }, { to: x.s.id }));
  onChat({ i, seat: mySeat });
});
function onChat(d) {
  if (!S || !S.seats[d.seat] || !CHAT[d.i] || S.seats[d.seat].team !== myTeam()) return;
  chatLog.push({ name: S.seats[d.seat].name, text: CHAT[d.i] });
  bubble(d.seat, CHAT[d.i], 'chat', 2600);
  sfx.chat();
  renderChat();
}

function render() {
  if (!S) return;
  const lk = S.seats.map(s => s.id || s.name).join('|') + ':' + mySeat;
  if (lk !== layoutKey) rebuildSeats();
  syncTable();
  renderScore(); renderBar(); renderStatus(); renderChat();
  $('info').textContent = `${S.seats.length / 2} vs ${S.seats.length / 2} · a ${S.cfg.goal}`;
  if (S.phase === 'end') showEnd();
}

// ---------------- Eventos ----------------
let bannerT;
function onEvent(e) {
  if (e.kind === 'deal') { seatObjs.forEach(o => { if (o && o.ch) o.ch.userData.mood = null; }); startDeal(e); }
  else if (e.kind === 'play') snap(0, 0.25);
  else if (e.kind === 'call') { setTimeout(() => bubble(e.seat, e.text, 'big'), 30); sfx.call(); say(e.text); }
  else if (e.kind === 'tantos') { bubble(e.seat, e.text, e.num ? 'num' : ''); say(e.text); }
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
function onHand(cards) { hand = cards.slice(); syncHand(); }

// ---------------- Skins (solo en la sala de espera) ----------------
const pv = { renderer: null, scene: null, cam: null, ch: null };
function initPreview(canvas) {
  if (!canvas) return;
  if (!pv.renderer) {
    pv.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    pv.scene = new THREE.Scene();
    pv.scene.add(new THREE.HemisphereLight(0xfff0dd, 0x332211, 1.6));
    const d = new THREE.DirectionalLight(0xffe2b0, 2.2); d.position.set(1, 2, 2); pv.scene.add(d);
    pv.cam = new THREE.PerspectiveCamera(30, 200 / 220, 0.1, 10); pv.cam.position.set(0, 1.4, 2.6); pv.cam.lookAt(0, 1.18, 0);
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
document.addEventListener('click', e => {
  const b = e.target.closest('[data-skin]');
  if (!b || S) return; // en partida no se cambia
  mySkin = { ...mySkin, [b.dataset.skin]: b.dataset.v };
  try { localStorage.setItem('truco:skin', JSON.stringify(mySkin)); } catch { /* */ }
  if (Arcade.isHost()) skins[myId] = mySkin; else Arcade.send('skin', mySkin, { to: Arcade.ctx.hostId });
  refreshPreview();
  document.querySelectorAll(`[data-skin="${b.dataset.skin}"]`).forEach(x => x.classList.toggle('on', x.dataset.v === b.dataset.v));
});

// ---------------- Sala de espera ----------------
function humans() { return Arcade.players.map(p => ({ id: p.id, name: p.name })); }
function validSizes(h) { return [2, 4, 6].filter(s => s >= h); }
function fixSel() { const s = validSizes(humans().length); if (!s.includes(lobby.sel.size)) lobby.sel.size = s[0] || 6; }
function buildSeats() {
  const H = humans(), n = lobby.sel.size, seats = Array.from({ length: n }, (_, i) => ({ id: null, name: '', bot: true, team: i % 2, skin: null }));
  const order = lobby.sel.mode === 'together' && H.length <= n / 2
    ? [...Array.from({ length: n / 2 }, (_, k) => k * 2), ...Array.from({ length: n / 2 }, (_, k) => k * 2 + 1)]
    : Array.from({ length: n }, (_, k) => k);
  H.forEach((h, k) => Object.assign(seats[order[k]], { id: h.id, name: h.name, bot: false, skin: skins[h.id] || null }));
  const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5);
  seats.forEach(s => { if (s.bot) { s.name = names.pop(); s.skin = randomSkin(); } });
  return seats;
}
let setupKey = '';
function renderSetup(force) {
  if (S) return;
  fixSel();
  const H = humans(), host = Arcade.isHost(), sel = lobby.sel;
  const key = JSON.stringify([lobby, H, host]);
  if (!force && key === setupKey && !$('setup').hidden) return;
  setupKey = key;
  const meReady = lobby.ready.includes(myId);
  const seg = (k, opts) => `<div class="seg">${opts.map(([v, label, dis]) => `<button data-k="${k}" data-v="${v}" class="${sel[k] === v ? 'on' : ''}" ${dis || !host ? 'disabled' : ''}>${label}</button>`).join('')}</div>`;
  const canTogether = H.length > 1 && H.length <= sel.size / 2;
  const seats = buildSeats();
  const col = t => seats.filter(s => s.team === t).map(s => `<span>${s.bot ? '🤖 ' : (lobby.ready.includes(s.id) ? '✅ ' : '⏳ ')}${esc(s.name)}</span>`).join('');
  $('setup').innerHTML = `<div class="panel wide"><h1>Truco</h1>
    <div class="cols"><div class="col">
      <p>${host ? 'Armá la mesa. Los lugares vacíos los ocupan bots.' : 'El host arma la mesa.'}</p>
      <div class="opt"><label>Mesa</label>${seg('size', [[2, '1 vs 1', H.length > 2], [4, '2 vs 2', H.length > 4], [6, '3 vs 3', false]])}</div>
      <div class="opt"><label>Puntos</label>${seg('goal', [[15, 'A 15'], [30, 'A 30']])}</div>
      ${H.length > 1 && sel.size > H.length ? `<div class="opt"><label>Equipos</label>${seg('mode', [['mix', 'Mezclados'], ['together', 'Humanos vs bots', !canTogether]])}</div>` : ''}
      <div class="teams-prev"><div class="a">Equipo 1${col(0)}</div><div class="b">Equipo 2${col(1)}</div></div>
      <p class="waiting">${lobby.ready.length}/${H.length} listos · empieza cuando estén todos</p>
    </div><div class="col"><h3>Tu personaje</h3>${skinUI()}<p class="note">Elegilo antes de empezar: en la partida no se puede cambiar.</p></div></div>
    <button class="go${meReady ? ' on' : ''}" id="ready">${meReady ? '✅ ¡Listo! (tocá para cancelar)' : '¡Estoy listo!'}</button></div>`;
  $('setup').hidden = false;
  initPreview($('pvc'));
}
$('setup').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || b.dataset.skin) return;
  if (b.id === 'ready') {
    const v = !lobby.ready.includes(myId);
    if (Arcade.isHost()) setReady(myId, v);
    else { Arcade.send('ready', { v }, { to: Arcade.ctx.hostId }); lobby.ready = v ? [...lobby.ready, myId] : lobby.ready.filter(x => x !== myId); renderSetup(true); }
    return;
  }
  if (!Arcade.isHost() || !b.dataset.k) return;
  lobby.sel = { ...lobby.sel, [b.dataset.k]: b.dataset.k === 'mode' ? b.dataset.v : +b.dataset.v };
  broadcastLobby();
});
function broadcastLobby() { fixSel(); Arcade.send('lobby', lobby); renderSetup(true); checkAllReady(); }
function setReady(id, v) {
  lobby.ready = lobby.ready.filter(x => x !== id && Arcade.players.some(p => p.id === x));
  if (v) lobby.ready.push(id);
  broadcastLobby();
}
let startTimer = null;
function checkAllReady() {
  if (!Arcade.isHost() || engine) return;
  clearTimeout(startTimer);
  const allReady = () => { const H = humans(); return H.length > 0 && H.every(h => lobby.ready.includes(h.id)); };
  if (allReady()) startTimer = setTimeout(() => { if (!engine && allReady()) startEngine(); }, 900);
}
function startEngine() {
  skins[myId] = mySkin;
  const seats = buildSeats();
  engine = new Engine({
    cfg: { size: lobby.sel.size, goal: lobby.sel.goal }, seats, speed: SPEED,
    push: s => { const pub = JSON.parse(JSON.stringify(s)); pub.tl = s.deadline ? s.deadline - Date.now() : 0; delete pub.deadline; Arcade.send('st', pub); onState(pub); },
    priv: (seat, cards) => { const id = seats[seat].id; if (id === myId) onHand(cards); else if (id) Arcade.send('hd', { cards }, { to: id }); },
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
  updateDeal(dt);
  if (S) {
    const actor = S.phase === 'play' ? (S.pending ? S.pending.responder : S.turn) : S.phase === 'deal' ? S.dealer : -1;
    const target = actor === mySeat || actor < 0 ? camera.position.clone() : (headPos(actor) || new THREE.Vector3(0, 1, 0));
    seatObjs.forEach((o, i) => {
      if (!o || !o.ch) return;
      setHeldCards(o.ch, shownCount(i));
      animateCharacter(o.ch, dt, i === actor ? (deal ? deal.deckPos : camera.position) : target, i === actor);
    });
  }
  updateTable(dt);
  updateHand(dt);
  updateLabels();
  renderer.clear();
  renderer.render(scene, camera);
  renderer.clearDepth();
  renderer.render(handScene, camera);
  if (pv.renderer && pv.ch && pv.renderer.domElement.isConnected) { pv.ch.rotation.y += dt * 0.8; animateCharacter(pv.ch, dt, null, false); pv.renderer.render(pv.scene, pv.cam); }
}

// ---------------- Vista previa (miniatura) ----------------
function preview() {
  myId = 'me';
  const sk = [null, { model: 'gato', color: '#f08a2c', hat: 'sombrero' }, { model: 'oso', color: '#3b82f6', hat: 'boina' }, { model: 'zorro', color: '#e8505b', hat: 'galera' }];
  S = {
    phase: 'play', cfg: { size: 4, goal: 30 }, score: [17, 12], mano: 1, dealer: 0, turn: 0, handNo: 1, counts: [3, 2, 2, 2],
    seats: [{ id: 'me', name: 'Gaby', team: 0 }, { id: 'b', name: 'Agus', team: 1 }, { id: 'c', name: 'Sofi', team: 0 }, { id: null, name: 'Pampa', bot: true, team: 1 }].map((s, i) => ({ ...s, skin: sk[i] })),
    tricks: [[{ seat: 1, card: { s: 'o', n: 7 } }, { seat: 2, card: { s: 'c', n: 3 } }, { seat: 3, card: { s: 'b', n: 12 } }]], results: [], trickWin: [],
    truco: { level: 0, canRaise: null }, envidoDone: false, pending: null, tl: 0,
  };
  mySeat = 0;
  render();
  hand = [{ s: 'e', n: 1 }, { s: 'b', n: 1 }, { s: 'e', n: 7 }]; syncHand();
  for (const e of table.values()) e.t = 0.999;
  ['score', 'topright', 'status', 'bar', 'labels', 'chat'].forEach(id => { $(id).style.visibility = 'hidden'; });
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
  Arcade.on('chat', d => onChat(d));
  Arcade.on('lobby', L => { if (Arcade.isHost() || S) return; lobby = L; renderSetup(); });
  Arcade.on('ready', (d, from) => { if (Arcade.isHost() && !engine) setReady(from, !!(d && d.v)); });
  Arcade.on('skin', (sk, from) => { if (Arcade.isHost() && !engine && validSkin(sk)) skins[from] = sk; });
  Arcade.on('act', (a, from) => {
    if (!Arcade.isHost() || !engine) return;
    const seat = engine.S.seats.findIndex(s => s.id === from);
    if (seat >= 0) engine.act(seat, a);
  });
  Arcade.on('hi', (d, from) => {
    if (!Arcade.isHost()) return;
    if (d && validSkin(d.skin) && !engine) skins[from] = d.skin;
    if (engine) engine.push(); else Arcade.send('lobby', lobby, { to: from });
  });
  Arcade.onPlayerLeft(id => {
    if (engine) { const seat = engine.S.seats.findIndex(s => s.id === id); if (seat >= 0) engine.setBot(seat, engine.S.seats[seat].name + ' (bot)'); }
    else if (Arcade.isHost()) { lobby.ready = lobby.ready.filter(x => x !== id); broadcastLobby(); }
    else renderSetup(true);
  });
  Arcade.onHostChanged(() => {
    if (!Arcade.isHost()) return;
    if (!S) { broadcastLobby(); return; }
    if (S.phase === 'end') { finishGame(S.winner); return; }
    const lead = S.score[0] === S.score[1] ? null : S.score[0] > S.score[1] ? 0 : 1;
    const winners = lead === null ? [] : S.seats.filter(s => s.team === lead && !s.bot && s.id).map(s => s.id);
    Arcade.end({ winners, text: 'El host se fue: la partida terminó' });
  });
  fixSel();
  renderSetup(true);
  if (!Arcade.isHost()) {
    let tries = 0;
    const hi = setInterval(() => { if (S || ++tries > 30) clearInterval(hi); else if (tries % 3 === 0) Arcade.send('hi', { skin: mySkin }, { to: Arcade.ctx.hostId }); }, 1000);
    Arcade.send('hi', { skin: mySkin }, { to: Arcade.ctx.hostId });
  }
});
