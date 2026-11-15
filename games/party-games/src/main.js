// Party Games — flujo de partida, control del personaje, cámara, red y HUD
import {
  THREE, renderer, scene, camera, sunFollow, updateEnv, clearWorld, getWorld, updateAnims, updateParticles, fx, sfx,
  unlockAudio, toggleMute, isMuted, groundAt, pushOut, WATER_Y, PREVIEW, box, cyl, colBox, colCyl, island, addTree, addFlower,
  addBalloon, addAnim, toon, GEO, canvasTex, checkerTex, shade, labelTex,
} from './core.js';
import { makeCharacter, animateCharacter, squash, makeKart, animateKart, COLORS, CSS_COLORS } from './character.js';
import { MINIGAMES } from './minigames.js';

const FAST = (() => { try { return localStorage.getItem('pg:fast') === '1'; } catch { return false; } })();
const TS = FAST ? 0.25 : 1;
const CARD_T = 4.8 * TS, COUNT_T = 3 * TS, INTRO = CARD_T + COUNT_T;
const RESULTS = 7 * TS, PODIUM = 15;
const ROUND_POINTS = [3, 2, 1];
const MOVE = { max: 8.6, accel: 65, airAccel: 32, decel: 45, jump: 13, grav: -34, fallGrav: -50, coyote: 0.12, buffer: 0.15 };

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lerpAngle = (a, b, k) => a + ((((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) - Math.PI) * k;
const smooth = x => x * x * (3 - 2 * x);
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---------------- Estado ----------------
let myId = null;
const players = new Map();
const me = {
  pos: new THREE.Vector3(), vel: new THREE.Vector3(), ry: 0, onGround: false, ground: null, alive: true, frozen: true, finished: false,
  coyote: 0, jumpBuf: 0, jumpCut: false, stunT: 0, invulnT: 0, dashT: 0, dashCd: 0, lastLandVy: 0, airT: 0,
  kart: { speed: 0, steer: 0, drifting: false, driftDir: 0, driftT: 0, boostT: 0, spinT: 0, hopT: 0 },
};
let round = null, totals = {}, podiumData = null, spectate = null;
const H = { started: false, ready: new Set(), t0: performance.now(), order: [], idx: -1, cur: null, nextAt: 0, endAt: 0 };

const isHost = () => Arcade.isHost();
const hostId = () => Arcade.ctx.hostId;
const nameOf = id => (players.get(id) || {}).name || '???';
const slotOf = id => (players.get(id) || {}).slot || 0;
const posOf = id => (id === myId ? me.pos : (players.get(id) || {}).target || new THREE.Vector3(0, -99, 0));
const roundIds = () => (round && round.ids ? round.ids.filter(id => players.has(id)) : []);
const playing = () => !!round && round.phase === 'play';

function addPlayer(p) {
  players.set(p.id, {
    id: p.id, name: p.name, slot: p.slot, ch: makeCharacter(p.slot, p.name), kart: null,
    pos: new THREE.Vector3(), target: new THREE.Vector3(), ry: 0, curRy: 0, net: { a: 0, s: 0, vy: 0, k: 0, f: 0 },
  });
}
function removePlayer(id) {
  const pl = players.get(id);
  if (!pl) return;
  scene.remove(pl.ch);
  if (pl.kart) scene.remove(pl.kart);
  players.delete(id);
  toast(`${pl.name} se fue`);
  if (round && round.alive) round.alive.delete(id);
  if (round && round.mg && round.mg.onPlayerLeft) round.mg.onPlayerLeft(id);
  renderPlayers();
}

// ---------------- Red ----------------
function sendR(type, d = {}, opts) { d.ri = round.i; Arcade.send(type, d, opts); }
function sendMG(k, d = {}, opts) { d.k = k; sendR('mg', d, opts); }
function hostBroadcast(k, d = {}) { sendMG(k, { ...d }); if (round.mg.onMsg) round.mg.onMsg(k, d, myId); }
function toHost(k, d = {}) {
  if (isHost()) { if (round.mg.onMsg) round.mg.onMsg(k, d, myId); }
  else sendMG(k, { ...d }, { to: hostId() });
}
function sendTo(id, k, d = {}) {
  if (id === myId) { if (round.mg.onMsg) round.mg.onMsg(k, d, myId); }
  else sendMG(k, { ...d }, { to: id });
}

// ---------------- HUD ----------------
let bannerT = 0;
function banner(text, color = '#fff', secs = 1.6) {
  const b = $('banner');
  b.textContent = text; b.style.color = color;
  b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
  bannerT = secs;
}
function toast(text) {
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = text;
  $('toasts').prepend(el);
  while ($('toasts').children.length > 3) $('toasts').lastChild.remove();
  setTimeout(() => el.classList.add('bye'), 3200);
  setTimeout(() => el.remove(), 3700);
}
function renderPlayers() {
  const ids = [...players.keys()].sort((a, b) => (totals[b] || 0) - (totals[a] || 0));
  $('players').innerHTML = ids.map(id => {
    const out = round && round.alive && round.ids && round.ids.includes(id) && !round.alive.has(id) && round.phase !== 'podium';
    return `<div class="pr${id === myId ? ' me' : ''}${out ? ' out' : ''}"><i style="--c:${CSS_COLORS[slotOf(id) % 8]}">${esc(nameOf(id).charAt(0).toUpperCase())}</i><span>${esc(nameOf(id))}</span><b>${totals[id] || 0}<em>★</em></b></div>`;
  }).join('');
}

// ---------------- Acciones de juego ----------------
function eliminate() {
  if (!me.alive || !playing()) return;
  me.alive = false;
  me.vel.set(0, 0, 0);
  sfx.out();
  banner('¡Eliminado!', '#ff6b6b', 2);
  sendR('out');
  onOut(myId);
}
function onOut(id) {
  if (!round || !round.alive || !round.alive.has(id)) return;
  round.alive.delete(id);
  round.outOrder.push(id);
  const pl = players.get(id);
  if (pl) { fx.poof(pl.id === myId ? me.pos : pl.pos, COLORS[pl.slot % 8]); pl.ch.visible = false; if (pl.kart) pl.kart.visible = false; }
  if (id !== myId) toast(`${nameOf(id)} quedó afuera`);
  if (spectate === id) spectate = null;
  renderPlayers();
}
function respawn(pt, { poof = true } = {}) {
  me.pos.set(pt.x, pt.y + 0.3, pt.z);
  me.vel.set(0, 0, 0);
  if (pt.ry !== undefined) { me.ry = pt.ry; if (round && round.mg && !round.mg.kart) camYaw = pt.ry + Math.PI; }
  me.kart.speed = 0; me.kart.drifting = false; me.kart.spinT = 0;
  me.stunT = 0; me.invulnT = 1.2;
  if (poof) { fx.poof(me.pos, 0xffffff, 16); sfx.poof(); }
}
function knock(dir, power = 14, up = 7, stun = 0.45) {
  if (me.invulnT > 0 || !me.alive) return false;
  me.vel.x = dir.x * power; me.vel.z = dir.z * power; me.vel.y = Math.max(me.vel.y, up);
  me.onGround = false; me.stunT = Math.max(me.stunT, stun);
  squash(players.get(myId).ch, -0.3);
  sfx.bump();
  return true;
}

// Seguimiento de llegadas (carreras)
function finishTracker() {
  const order = [];
  let sent = false;
  return {
    order,
    reach() {
      if (sent || !me.alive || !playing()) return;
      sent = true; me.finished = true;
      sfx.finish(); fx.confetti(me.pos, 50, 3);
      banner('¡Llegaste!', '#ffd43b', 2);
      toHost('fin');
    },
    onMsg(k, d, from) {
      if (k === 'fin' && isHost() && !order.includes(from)) { order.push(from); hostBroadcast('fo', { o: order.slice() }); return true; }
      if (k === 'fo') {
        if (!isHost()) { order.length = 0; order.push(...d.o); }
        const id = d.o[d.o.length - 1];
        if (id !== myId) toast(`${nameOf(id)} llegó ${d.o.length}º`);
        return true;
      }
      return false;
    },
    done: () => roundIds().length > 0 && roundIds().every(id => order.includes(id)),
    rank(progressOf) {
      const rest = roundIds().filter(id => !order.includes(id)).sort((a, b) => progressOf(b) - progressOf(a));
      return [...order.filter(id => players.has(id)).map(id => [id]), ...rest.map(id => [id])];
    },
  };
}

const G = {
  THREE, toon, GEO, box, cyl, colBox, colCyl, island, addTree, addFlower, addBalloon, addAnim, canvasTex, checkerTex, shade, labelTex,
  fx, sfx, groundAt, WATER_Y, COLORS,
  get world() { return getWorld(); },
  get round() { return round; },
  me, players, myId: () => myId, ids: roundIds, posOf, nameOf, slotOf, isHost, playing, TS,
  alive: id => !!round && round.alive.has(id),
  aliveIds: () => roundIds().filter(id => round.alive.has(id)),
  hostBroadcast, toHost, sendTo, eliminate, respawn, knock, toast, banner, finishTracker,
  stun(secs) { me.stunT = Math.max(me.stunT, secs); },
  justPressed: (...codes) => codes.some(c => pressed[c]),
  broadcast(k, d = {}) { sendMG(k, { ...d }); if (round.mg.onMsg) round.mg.onMsg(k, d, myId); },
  markOut: id => onOut(id),
  characterOf: id => (players.get(id) || {}).ch,
  elimDone() { const n = roundIds().length; const a = roundIds().filter(id => round.alive.has(id)).length; return n >= 2 ? a <= 1 : a === 0; },
  elimRank() {
    const ids = roundIds();
    const alive = ids.filter(id => round.alive.has(id));
    const groups = alive.length ? [alive] : [];
    [...round.outOrder].reverse().filter(id => ids.includes(id)).forEach(id => groups.push([id]));
    ids.filter(id => !groups.flat().includes(id)).forEach(id => groups.push([id]));
    return groups;
  },
  scoreRank(scores) {
    const ids = roundIds().sort((a, b) => (scores[b] || 0) - (scores[a] || 0));
    const groups = [];
    ids.forEach(id => { const l = groups[groups.length - 1]; if (l && (scores[l[0]] || 0) === (scores[id] || 0)) l.push(id); else groups.push([id]); });
    return groups;
  },
};

// ---------------- Rondas ----------------
function startRound(d) {
  if (round && round.i === d.i && round.phase !== 'podium') return;
  clearWorld();
  const def = MINIGAMES[d.id];
  round = { i: d.i, id: d.id, def, phase: 'intro', t: 0, ids: d.ids, alive: new Set(d.ids.filter(id => players.has(id))), outOrder: [], lastCount: 99, total: d.total };
  round.mg = def.create(G);
  const n = d.ids.length;
  // karts
  for (const pl of players.values()) {
    if (pl.kart) { scene.remove(pl.kart); pl.kart = null; }
    if (pl.ch.parent !== scene) scene.add(pl.ch);
    pl.ch.position.set(0, 0, 0); pl.ch.rotation.set(0, 0, 0); pl.ch.scale.setScalar(1);
    if (round.mg.kart && d.ids.includes(pl.id)) {
      pl.kart = makeKart(pl.slot);
      pl.kart.add(pl.ch);
      pl.ch.position.set(0, 0.35, -0.35); pl.ch.scale.setScalar(0.85);
    }
  }
  d.ids.forEach((id, i) => {
    const pl = players.get(id);
    if (!pl) return;
    const sp = round.mg.spawn(i, n);
    pl.pos.set(sp.x, sp.y, sp.z); pl.target.copy(pl.pos); pl.ry = pl.curRy = sp.ry || 0;
    pl.ch.visible = true; if (pl.kart) pl.kart.visible = true;
  });
  for (const pl of players.values()) if (!d.ids.includes(pl.id)) { pl.ch.visible = false; }
  const idx = d.ids.indexOf(myId);
  const sp = idx >= 0 ? round.mg.spawn(idx, n) : { x: 0, y: 2, z: 0, ry: 0 };
  me.pos.set(sp.x, sp.y, sp.z); me.vel.set(0, 0, 0); me.ry = sp.ry || 0;
  Object.assign(me.kart, { speed: 0, steer: 0, drifting: false, driftT: 0, boostT: 0, spinT: 0 });
  me.stunT = 0; me.invulnT = 0; me.dashT = 0; me.dashCd = 0; me.finished = false; me.frozen = true;
  me.alive = idx >= 0 && !d.late;
  if (!me.alive) { round.alive.delete(myId); const pl = players.get(myId); if (pl) pl.ch.visible = false; }
  camYaw = (sp.ry || 0) + Math.PI; camPitch = 0.42;
  camPos.copy(introCamPos(0)); camLook.set(round.mg.introCam.x, round.mg.introCam.y || 0, round.mg.introCam.z);
  spectate = null;
  ['results', 'waiting', 'podiumUI'].forEach(x => { $(x).hidden = true; });
  showIntro(def, d);
  $('roundChip').innerHTML = `<span>${def.emoji}</span>${esc(def.name)}`;
  $('timer').textContent = '';
  $('widget').innerHTML = ''; $('corner').innerHTML = '';
  renderPlayers();
  sfx.whoosh();
}

function showIntro(def, d) {
  const keys = (def.controls || []).map(([k, txt]) => `<div class="ctl">${k.split(' ').map(x => `<kbd>${esc(x)}</kbd>`).join('')}<span>${esc(txt)}</span></div>`).join('');
  $('intro').innerHTML = `
    <div class="ic-top"><span class="ic-round">Ronda ${d.i + 1} / ${d.total}</span></div>
    <div class="ic-main">
      <div class="ic-emoji">${def.emoji}</div>
      <h1>${esc(def.name)}</h1>
      <p class="ic-goal">${esc(def.goal)}</p>
      <p class="ic-desc">${esc(def.desc)}</p>
      <div class="ic-ctl">${keys}</div>
    </div>`;
  $('intro').hidden = false;
  $('intro').classList.remove('leave');
  if (d.late) toast('Entraste tarde: mirás esta ronda');
}

function applyRoundEnd(d) {
  if (!round || round.i !== d.i) return;
  round.phase = 'end';
  me.frozen = true;
  totals = d.totals;
  renderPlayers();
  const medal = ['🥇', '🥈', '🥉'];
  let rows = '', n = 0;
  d.groups.forEach((g, gi) => g.forEach(id => {
    rows += `<div class="rr${id === myId ? ' me' : ''}" style="animation-delay:${0.15 + n++ * 0.12}s"><span class="pl">${medal[gi] || gi + 1 + 'º'}</span><i style="--c:${CSS_COLORS[slotOf(id) % 8]}">${esc(nameOf(id).charAt(0).toUpperCase())}</i><span class="nm">${esc(nameOf(id))}</span><span class="pts">${d.pts[id] ? '+' + d.pts[id] + '★' : ''}</span><span class="tot">${totals[id] || 0}★</span></div>`;
  }));
  $('results').innerHTML = `<h2>${round.def.emoji} ${esc(round.def.name)}</h2><div class="rlist">${rows}</div><small>${d.last ? '¡Vamos al podio!' : 'Siguiente minijuego…'}</small>`;
  $('results').hidden = false;
  $('widget').innerHTML = ''; $('corner').innerHTML = '';
  const winners = d.groups[0] || [];
  for (const id of winners) { const p = id === myId ? me.pos : (players.get(id) || {}).pos; if (p) fx.confetti(p, 40, 2); }
  if (winners.includes(myId)) sfx.win(); else sfx.pop();
}

// --- host ---
function hostBegin() {
  H.started = true;
  let only = null;
  try { only = (localStorage.getItem('pg:only') || '').split(',').filter(k => MINIGAMES[k]); } catch { /* */ }
  H.order = only && only.length ? only : shuffle(Object.keys(MINIGAMES));
  for (const id of players.keys()) totals[id] = 0;
  hostNextRound();
}
function hostNextRound() {
  H.idx++; H.nextAt = 0;
  if (H.idx >= H.order.length) return hostPodium();
  const d = { i: H.idx, id: H.order[H.idx], total: H.order.length, ids: [...players.keys()] };
  H.cur = d;
  Arcade.send('rs', d);
  startRound(d);
}
function hostEndRound() {
  round.phase = 'end';
  const groups = round.mg.hostRank().map(g => g.filter(id => players.has(id))).filter(g => g.length);
  const pts = {};
  groups.forEach((g, gi) => g.forEach(id => { pts[id] = ROUND_POINTS[gi] || 0; totals[id] = (totals[id] || 0) + pts[id]; }));
  const d = { i: round.i, groups, pts, totals: { ...totals }, last: H.idx >= H.order.length - 1 };
  Arcade.send('re', d);
  applyRoundEnd(d);
  H.nextAt = performance.now() + RESULTS * 1000;
}
function hostPodium() {
  const ids = [...players.keys()].sort((a, b) => (totals[b] || 0) - (totals[a] || 0));
  const d = { list: ids.map(id => ({ id, name: nameOf(id), slot: slotOf(id), pts: totals[id] || 0 })) };
  Arcade.send('pod', d);
  showPodium(d);
  H.endAt = performance.now() + PODIUM * 1000;
}

// ---------------- Podio ----------------
let podium = null;
function buildPodium(list) {
  clearWorld();
  for (const pl of players.values()) {
    if (pl.kart) { scene.remove(pl.kart); pl.kart = null; }
    if (pl.ch.parent !== scene) scene.add(pl.ch);
    pl.ch.scale.setScalar(1); pl.ch.visible = false;
  }
  island(0, 0, 16, 0, 12);
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + 0.3; addTree(Math.cos(a) * 13, 0, Math.sin(a) * 13 - 2, 1 + Math.random() * 0.4); }
  for (let i = 0; i < 18; i++) addFlower((Math.random() - 0.5) * 22, 0, 2 + Math.random() * 9);
  [0xff4d8d, 0xffd43b, 0x4dabff, 0x51cf66, 0xb197fc].forEach((c, i) => addBalloon(-9 + i * 4.5, 7 + (i % 2) * 1.5, -6, c));
  // escenario
  box(0, -1.2, 12, 7, 0.5, 0.5, 0xfff3bf, { edgeColor: 0xffd43b });
  const spots = [[0, 3.1, 0xffd43b], [-3, 2.2, 0xdee2e6], [3, 1.5, 0xff922b]];
  spots.forEach(([x, top, c], i) => {
    box(x, 0, 2.6, 2.6, top, top, c, { edgeColor: shade(c, 0.8) });
    const num = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: canvasTex(128, 128, (x2, w) => { x2.font = "900 104px 'Fredoka', system-ui"; x2.textAlign = 'center'; x2.textBaseline = 'middle'; x2.lineWidth = 12; x2.strokeStyle = '#1d1b3a'; x2.strokeText(i + 1, w / 2, w / 2 + 6); x2.fillStyle = '#fff'; x2.fillText(i + 1, w / 2, w / 2 + 6); }), transparent: true }));
    num.position.set(x, top / 2, 1.31); getWorld().add(num);
  });
  // arco de globos
  for (let i = 0; i <= 16; i++) {
    const a = Math.PI * (i / 16);
    const b = new THREE.Mesh(GEO.sphere, toon([0xff4d8d, 0xffd43b, 0x4dabff, 0x51cf66][i % 4]));
    b.scale.setScalar(0.65); b.position.set(Math.cos(a) * 7.5, Math.sin(a) * 6.5 + 0.3, -2.5); getWorld().add(b);
  }
  const placed = [];
  list.forEach((p, i) => {
    const pl = players.get(p.id);
    if (!pl) return;
    pl.ch.visible = true; pl.ch.rotation.set(0, 0, 0);
    if (i < 3) pl.ch.position.set(spots[i][0], spots[i][1], 0);
    else { const k = i - 3, side = k % 2 ? 1 : -1; pl.ch.position.set(side * (5.2 + Math.floor(k / 2) * 1.5), 0, 1.2 + Math.floor(k / 2) * 0.6); pl.ch.rotation.y = -side * 0.35; }
    placed.push({ ch: pl.ch, i, base: pl.ch.position.y });
  });
  return placed;
}
function showPodium(d) {
  podiumData = d;
  round = { phase: 'podium', i: 9999, alive: new Set(), ids: [], outOrder: [], t: 0 };
  me.frozen = true;
  ['intro', 'results', 'waiting', 'spect'].forEach(x => { $(x).hidden = true; });
  $('widget').innerHTML = ''; $('corner').innerHTML = ''; $('timer').textContent = ''; $('roundChip').innerHTML = '<span>🏆</span>Podio final';
  if (document.pointerLockElement) document.exitPointerLock();
  podium = { placed: buildPodium(d.list), t: 0, fw: 0 };
  const top = d.list[0];
  const winners = top ? d.list.filter(p => p.pts === top.pts).map(p => p.name) : [];
  $('podiumUI').innerHTML = `<h1>${esc(winners.join(' y '))} ${winners.length > 1 ? 'ganan' : 'gana'}</h1><div class="rlist">` +
    d.list.map((p, i) => `<div class="rr${p.id === myId ? ' me' : ''}" style="animation-delay:${0.6 + i * 0.12}s"><span class="pl">${['🥇', '🥈', '🥉'][i] || i + 1 + 'º'}</span><i style="--c:${CSS_COLORS[p.slot % 8]}">${esc(p.name.charAt(0).toUpperCase())}</i><span class="nm">${esc(p.name)}</span><span class="tot">${p.pts}★</span></div>`).join('') + '</div>';
  $('podiumUI').hidden = false;
  renderPlayers();
  sfx.fanfare();
  fx.confetti(new THREE.Vector3(0, 9, 0), 160, 9);
}
function updatePodium(dt, t) {
  podium.t += dt;
  podium.placed.forEach(p => {
    const st = p.i === 0 ? 'win' : p.i < 3 ? 'clap' : 'sad';
    animateCharacter(p.ch, { state: st }, dt, t + p.i);
    p.ch.position.y = p.base;
  });
  podium.fw -= dt;
  if (podium.fw <= 0) {
    podium.fw = 0.7;
    fx.burst(new THREE.Vector3((Math.random() - 0.5) * 16, 8 + Math.random() * 4, -4), [COLORS[Math.floor(Math.random() * 8)], 0xffffff], 30, 8);
    if (Math.random() < 0.5) fx.confetti(new THREE.Vector3(0, 10, 0), 30, 8);
  }
  const a = Math.sin(podium.t * 0.25) * 0.3;
  const zoom = Math.max(0, 1 - podium.t / 2.5);
  camera.position.set(Math.sin(a) * (11 + zoom * 8), 4.2 + zoom * 4, Math.cos(a) * (11 + zoom * 8) + 1);
  camera.lookAt(0, 2.4, 0);
  sunFollow({ x: 0, y: 0, z: 0 });
}

// ---------------- Entrada y cámara ----------------
const keys = {}, pressed = {};
addEventListener('keydown', e => {
  if (!keys[e.code]) pressed[e.code] = true;
  keys[e.code] = true;
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  unlockAudio();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
const canvas = renderer.domElement;
let camYaw = Math.PI, camPitch = 0.42, mouseIdle = 99, dragging = false;
const camPos = new THREE.Vector3(0, 10, -20), camLook = new THREE.Vector3();
canvas.addEventListener('click', () => {
  unlockAudio();
  try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => { /* sin pointer lock: se usa arrastrar */ }); } catch { /* */ }
});
canvas.addEventListener('mousedown', e => { dragging = true; if (e.button === 0 && document.pointerLockElement === canvas) pressed.Mouse = true; });
addEventListener('mouseup', () => { dragging = false; });
addEventListener('mousemove', e => {
  if (document.pointerLockElement !== canvas && !dragging) return;
  camYaw -= e.movementX * 0.0026;
  camPitch = Math.max(-0.1, Math.min(1.2, camPitch + e.movementY * 0.002));
  mouseIdle = 0;
});
document.addEventListener('pointerlockchange', () => { $('hint').classList.toggle('dim', document.pointerLockElement === canvas); });

function input() {
  let ix = 0, iz = 0;
  if (keys.KeyW || keys.ArrowUp) iz += 1;
  if (keys.KeyS || keys.ArrowDown) iz -= 1;
  if (keys.KeyD || keys.ArrowRight) ix += 1;
  if (keys.KeyA || keys.ArrowLeft) ix -= 1;
  return { ix, iz };
}

function introCamPos(t) {
  const c = round.mg.introCam;
  const a = (c.a0 || 0) + t * 0.32;
  return new THREE.Vector3(c.x + Math.sin(a) * c.r, (c.y || 0) + c.h, c.z + Math.cos(a) * c.r);
}

function updateCamera(dt) {
  if (!round || round.phase === 'podium') return;
  const myPl = players.get(myId);
  let focus = me.pos, focusRy = me.ry;
  if (!me.alive) {
    const alive = G.aliveIds().filter(id => id !== myId);
    if (pressed.Tab && alive.length) { const i = alive.indexOf(spectate); spectate = alive[(i + 1) % alive.length]; }
    if (!spectate || !alive.includes(spectate)) spectate = alive[0] || null;
    const pl = spectate && players.get(spectate);
    if (pl) { focus = pl.pos; focusRy = pl.curRy; }
    else focus = new THREE.Vector3(round.mg.introCam.x, round.mg.introCam.y || 0, round.mg.introCam.z);
    $('spect').hidden = round.phase !== 'play';
    if (pl) $('spect').innerHTML = `👀 Mirando a <b>${esc(pl.name)}</b> <kbd>Tab</kbd>`;
  } else $('spect').hidden = true;

  // cámara de juego
  let gp, gl;
  if (round.mg.kart && me.alive) {
    const fwd = new THREE.Vector3(Math.sin(focusRy), 0, Math.cos(focusRy));
    const boost = me.kart.boostT > 0;
    gp = new THREE.Vector3(focus.x - fwd.x * 7.5, focus.y + 3.4, focus.z - fwd.z * 7.5);
    gl = new THREE.Vector3(focus.x + fwd.x * 4, focus.y + 1.2, focus.z + fwd.z * 4);
    camera.fov += ((boost ? 76 : 64) - camera.fov) * Math.min(1, dt * 4);
    camera.updateProjectionMatrix();
  } else {
    mouseIdle += dt;
    const sp = Math.hypot(me.vel.x, me.vel.z);
    if (me.alive && mouseIdle > 1.4 && sp > 3 && round.phase === 'play' && !round.mg.fixedCam) {
      camYaw = lerpAngle(camYaw, me.ry + Math.PI, 1 - Math.exp(-1.2 * dt));
    }
    if (keys.KeyQ) camYaw += 2.4 * dt;
    if (keys.KeyE) camYaw -= 2.4 * dt;
    const dist = round.mg.camDist || 8.5;
    gl = new THREE.Vector3(focus.x, focus.y + 1.3, focus.z);
    gp = new THREE.Vector3(gl.x + Math.sin(camYaw) * Math.cos(camPitch) * dist, gl.y + Math.sin(camPitch) * dist + 0.6, gl.z + Math.cos(camYaw) * Math.cos(camPitch) * dist);
    if (Math.abs(camera.fov - 62) > 0.1) { camera.fov += (62 - camera.fov) * Math.min(1, dt * 4); camera.updateProjectionMatrix(); }
  }
  if (round.phase === 'intro') {
    const ip = introCamPos(round.t);
    const c = round.mg.introCam;
    const il = new THREE.Vector3(c.x, (c.y || 0) + 1, c.z);
    const b = smooth(Math.max(0, Math.min(1, (round.t - CARD_T) / (COUNT_T * 0.8))));
    camPos.copy(ip).lerp(gp, b);
    camLook.copy(il).lerp(gl, b);
  } else {
    const k = 1 - Math.exp(-(round.mg.kart ? 7 : 12) * dt);
    camPos.lerp(gp, k);
    camLook.lerp(gl, 1 - Math.exp(-16 * dt));
  }
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  sunFollow(focus);
  if (myPl) myPl.ch.userData.label.visible = false;
}

// ---------------- Movimiento del jugador ----------------
function moveToward(v, tx, tz, maxDelta) {
  const dx = tx - v.x, dz = tz - v.z, d = Math.hypot(dx, dz);
  if (d <= maxDelta || d < 1e-6) { v.x = tx; v.z = tz; } else { v.x += dx / d * maxDelta; v.z += dz / d * maxDelta; }
}

function bodyCollisions() {
  if (!round.mg.collide && !round.mg.kart) return;
  for (const pl of players.values()) {
    if (pl.id === myId || !round.alive.has(pl.id) || !pl.ch.visible) continue;
    const dx = me.pos.x - pl.pos.x, dz = me.pos.z - pl.pos.z, dy = Math.abs(me.pos.y - pl.pos.y);
    const d = Math.hypot(dx, dz), min = round.mg.kart ? 1.7 : 0.95;
    if (d < min && dy < 1.4 && d > 1e-4) {
      const push = (min - d) * 0.6;
      me.pos.x += dx / d * push; me.pos.z += dz / d * push;
      if (round.mg.kart) me.kart.speed *= 0.97;
    }
  }
}

function landed(vy) {
  const ch = players.get(myId).ch;
  if (vy < -10) { squash(ch, -0.28); fx.dust(me.pos, 6); sfx.land(); }
  else if (vy < -4) { squash(ch, -0.14); fx.dust(me.pos, 3); }
}

function updatePlayer(dt) {
  const mg = round.mg;
  const can = !me.frozen && me.alive && me.stunT <= 0;
  me.stunT -= dt; me.invulnT -= dt; me.dashCd -= dt; me.dashT -= dt;
  const { ix, iz } = can ? input() : { ix: 0, iz: 0 };
  const fx_ = -Math.sin(camYaw), fz = -Math.cos(camYaw), rx = Math.cos(camYaw), rz = -Math.sin(camYaw);
  let wx = fx_ * iz + rx * ix, wz = fz * iz + rz * ix;
  const wl = Math.hypot(wx, wz);
  if (wl > 1) { wx /= wl; wz /= wl; }
  const max = MOVE.max * (mg.speedMul ? mg.speedMul() : 1);
  if (me.dashT <= 0) {
    const acc = me.onGround ? (wl > 0 ? MOVE.accel : MOVE.decel) : MOVE.airAccel;
    if (me.stunT > 0) moveToward(me.vel, 0, 0, (me.onGround ? 18 : 2) * dt);
    else moveToward(me.vel, wx * max, wz * max, acc * dt);
  }
  // salto
  if (pressed.Space) me.jumpBuf = MOVE.buffer;
  me.jumpBuf -= dt;
  me.coyote -= dt;
  if (me.jumpBuf > 0 && me.coyote > 0 && can) {
    me.vel.y = MOVE.jump; me.jumpBuf = 0; me.coyote = 0; me.onGround = false; me.jumpCut = true;
    squash(players.get(myId).ch, 0.25); fx.dust(me.pos, 3); sfx.jump();
  }
  if (me.jumpCut && !keys.Space && me.vel.y > 0) { me.vel.y *= 0.5; me.jumpCut = false; }
  if (me.vel.y <= 0) me.jumpCut = false;
  // empujón (si el minijuego lo permite)
  if (mg.dash && can && me.dashCd <= 0 && (pressed.KeyF || pressed.ShiftLeft || pressed.Mouse)) {
    me.dashCd = 1.1; me.dashT = 0.22;
    const dx = Math.sin(me.ry), dz = Math.cos(me.ry);
    me.vel.x = dx * 20; me.vel.z = dz * 20;
    sfx.dash(); fx.dust(me.pos, 5);
    if (mg.onDash) mg.onDash();
  }
  me.vel.y = Math.max(-55, me.vel.y + (me.vel.y > 0 ? MOVE.grav : MOVE.fallGrav) * dt);
  // plataforma móvil
  if (me.onGround && me.ground) { me.pos.x += me.ground.dx; me.pos.z += me.ground.dz; me.pos.y += me.ground.dy; }
  me.pos.x += me.vel.x * dt; me.pos.z += me.vel.z * dt;
  const hit = pushOut(me.pos, 0.45, me.pos.y);
  if (hit && hit.col && hit.col.bumper) {
    me.vel.x = hit.x * hit.col.bumper; me.vel.z = hit.z * hit.col.bumper; me.vel.y = Math.max(me.vel.y, 5);
    sfx.pop(); if (hit.col.mesh) hit.col.squash = 1;
  }
  bodyCollisions();
  const g = groundAt(me.pos.x, me.pos.z, me.pos.y);
  const ny = me.pos.y + me.vel.y * dt;
  if (me.vel.y <= 0 && ny <= g.top) {
    if (!me.onGround) landed(me.vel.y);
    me.pos.y = g.top;
    if (g.col && g.col.bounce) {
      me.vel.y = g.col.bounce; me.onGround = false; me.ground = null; me.jumpCut = false;
      squash(players.get(myId).ch, 0.3); sfx.boost(); fx.sparkle(me.pos, 0xffffff, 10);
      if (g.col.mesh) g.col.squash = 1;
    } else {
      me.vel.y = 0; me.onGround = true; me.ground = g.col; me.coyote = MOVE.coyote;
      if (g.col && g.col.onLand) g.col.onLand();
    }
  } else {
    me.pos.y = ny; me.onGround = false; me.ground = null;
  }
  const hs = Math.hypot(me.vel.x, me.vel.z);
  if (hs > 0.6 && me.stunT <= 0) me.ry = lerpAngle(me.ry, Math.atan2(me.vel.x, me.vel.z), 1 - Math.exp(-14 * dt));
  if (me.onGround && hs > 6 && Math.random() < dt * 5) fx.dust(me.pos, 1);
  if (me.pos.y < (mg.fallY ?? -16) || !isFinite(me.pos.y)) handleFall();
}

function handleFall() {
  if (me.pos.y < WATER_Y + 3) { fx.splash(me.pos); sfx.splash(); }
  if (round.mg.onFall) round.mg.onFall();
  else {
    const p = round.mg.respawnPoint ? round.mg.respawnPoint() : round.mg.spawn(Math.max(0, round.ids.indexOf(myId)), round.ids.length);
    respawn(p);
  }
}

function updateKart(dt) {
  const k = me.kart, mg = round.mg;
  const can = !me.frozen && me.alive;
  const { ix, iz } = can ? input() : { ix: 0, iz: 0 };
  k.steer += (-ix - k.steer) * Math.min(1, dt * 10);
  const off = mg.isOffroad ? mg.isOffroad(me.pos) : false;
  let max = off ? 12 : 25;
  if (k.boostT > 0) { k.boostT -= dt; max = 35; k.speed = Math.max(k.speed, 30); if (Math.random() < 0.6) fx.trail({ x: me.pos.x - Math.sin(me.ry) * 1.4, y: me.pos.y + 0.6, z: me.pos.z - Math.cos(me.ry) * 1.4 }, 0xffa94d, 0.3); }
  if (k.spinT > 0) {
    k.spinT -= dt; me.ry += 13 * dt; k.speed *= Math.exp(-2.5 * dt); k.drifting = false;
  } else {
    if (iz > 0) k.speed += (k.speed < max ? 22 : -18) * dt;
    else if (iz < 0) k.speed -= (k.speed > 0 ? 34 : 14) * dt;
    else k.speed *= Math.exp(-0.9 * dt);
    k.speed = Math.max(-9, Math.min(k.speed, Math.max(max, k.speed - 30 * dt)));
    // derrape
    if (pressed.Space && can && Math.abs(k.steer) > 0.3 && k.speed > 12 && me.onGround && !k.drifting) {
      k.drifting = true; k.driftDir = Math.sign(k.steer); k.driftT = 0; me.vel.y = 4.5; me.onGround = false; sfx.jump();
    }
    let turn;
    if (k.drifting) {
      k.driftT += dt;
      turn = k.driftDir * (1.25 + 0.75 * k.steer * k.driftDir);
      const col = k.driftT > 1.6 ? 0xff922b : k.driftT > 0.8 ? 0x4dabff : 0xffffff;
      fx.sparks({ x: me.pos.x - Math.sin(me.ry) * 1 + Math.cos(me.ry) * 0.8 * k.driftDir, y: me.pos.y + 0.2, z: me.pos.z - Math.cos(me.ry) * 1 - Math.sin(me.ry) * 0.8 * k.driftDir }, col, 2);
      if (!keys.Space || k.speed < 8) {
        if (k.driftT > 1.6) { k.boostT = 1.3; sfx.boost(); } else if (k.driftT > 0.8) { k.boostT = 0.7; sfx.boost(); }
        k.drifting = false;
      }
    } else turn = k.steer;
    me.ry += turn * 2.1 * Math.max(-1, Math.min(1, k.speed / 9)) * dt;
  }
  const fwdX = Math.sin(me.ry), fwdZ = Math.cos(me.ry);
  const slide = k.drifting ? -k.driftDir * k.speed * 0.18 : 0;
  me.vel.x = fwdX * k.speed + Math.cos(me.ry) * slide;
  me.vel.z = fwdZ * k.speed - Math.sin(me.ry) * slide;
  me.vel.y = Math.max(-50, me.vel.y - 34 * dt);
  me.pos.x += me.vel.x * dt; me.pos.z += me.vel.z * dt;
  const hit = pushOut(me.pos, 1.0, me.pos.y);
  if (hit) { k.speed *= 0.55; if (Math.abs(k.speed) > 6) { sfx.bump(); fx.sparkle(me.pos, 0xffffff, 6); } }
  bodyCollisions();
  const g = groundAt(me.pos.x, me.pos.z, me.pos.y);
  const ny = me.pos.y + me.vel.y * dt;
  if (me.vel.y <= 0 && ny <= g.top) { if (!me.onGround && me.vel.y < -6) { fx.dust(me.pos, 4); } me.pos.y = g.top; me.vel.y = 0; me.onGround = true; }
  else { me.pos.y = ny; me.onGround = false; }
  if (off && Math.abs(k.speed) > 5 && Math.random() < 0.5) fx.dust(me.pos, 1, 0x8ce99a);
  if (me.pos.y < -12) handleFall();
}

// ---------------- Avatares ----------------
const A_CODES = ['idle', 'run', 'air', 'stun', 'sit'];
function myAnimState() {
  if (round && round.mg && round.mg.kart) return 4;
  if (me.stunT > 0) return 3;
  if (!me.onGround) return 2;
  return Math.hypot(me.vel.x, me.vel.z) > 0.8 ? 1 : 0;
}
function updateAvatars(dt, t) {
  const k = 1 - Math.exp(-14 * dt);
  for (const pl of players.values()) {
    const ch = pl.ch;
    if (pl.id === myId) {
      pl.pos.copy(me.pos); pl.curRy = me.ry;
      const a = myAnimState();
      const holder = pl.kart || ch;
      holder.position.copy(me.pos); holder.rotation.y = me.ry;
      if (pl.kart) {
        pl.kart.rotation.z = me.kart.drifting ? -me.kart.driftDir * 0.12 : 0;
        animateKart(pl.kart, me.kart.speed, me.kart.steer, dt);
        animateCharacter(ch, { state: 'sit' }, dt, t);
        ch.rotation.y = me.kart.spinT > 0 ? Math.sin(t * 20) * 0.3 : -me.kart.steer * 0.25;
      } else animateCharacter(ch, { state: A_CODES[a], speed: Math.hypot(me.vel.x, me.vel.z), vy: me.vel.y }, dt, t);
    } else {
      pl.pos.lerp(pl.target, k);
      pl.curRy = lerpAngle(pl.curRy, pl.ry, k);
      const holder = pl.kart || ch;
      holder.position.copy(pl.pos); holder.rotation.y = pl.curRy;
      if (pl.kart) {
        pl.kart.rotation.z = pl.net.f & 1 ? -Math.sign(pl.net.k || 1) * 0.12 : 0;
        animateKart(pl.kart, pl.net.s, pl.net.k, dt);
        animateCharacter(ch, { state: 'sit' }, dt, t);
        if (pl.net.f & 2 && Math.random() < 0.5) fx.trail({ x: pl.pos.x - Math.sin(pl.curRy) * 1.4, y: pl.pos.y + 0.6, z: pl.pos.z - Math.cos(pl.curRy) * 1.4 }, 0xffa94d, 0.3);
      } else animateCharacter(ch, { state: A_CODES[pl.net.a] || 'idle', speed: pl.net.s, vy: pl.net.vy }, dt, t);
      ch.userData.label.visible = true;
    }
  }
}

// ---------------- Loop ----------------
let last = performance.now(), sendAcc = 0, hudAcc = 0, clock = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.25, (now - last) / 1000); // tiempo real (para relojes)
  last = now; clock += dt;
  const steps = Math.min(8, Math.ceil(dt / 0.034)), sdt = dt / steps; // física en pasos chicos

  if (isHost()) {
    if (!H.started) {
      const others = [...players.keys()].filter(id => id !== myId);
      if (others.every(id => H.ready.has(id)) || now - H.t0 > 8000) hostBegin();
    }
    if (H.nextAt && now >= H.nextAt) hostNextRound();
    if (H.endAt && now >= H.endAt) {
      H.endAt = 0;
      const w = podiumData && podiumData.list[0];
      Arcade.end({ text: w ? `🏆 ${w.name} ganó Party Games con ${w.pts} ★` : 'Fin de Party Games' });
    }
  }

  if (round && round.phase === 'podium') {
    updatePodium(dt, clock);
  } else if (round) {
    round.t += dt;
    if (round.phase === 'intro') {
      if (round.t >= CARD_T && !$('intro').classList.contains('leave')) { $('intro').classList.add('leave'); setTimeout(() => { if (round && round.phase !== 'intro') return; $('intro').hidden = true; }, 400); }
      const left = Math.ceil(INTRO - round.t);
      if (round.t >= CARD_T && left !== round.lastCount && left > 0) { round.lastCount = left; showCount(left); sfx.count(); }
      if (round.t >= INTRO) {
        round.phase = 'play'; round.t = 0; me.frozen = false;
        $('intro').hidden = true;
        showCount('¡YA!'); sfx.go();
      }
    }
    for (let i = 0; i < steps; i++) {
      if (round.mg.kart) updateKart(sdt); else updatePlayer(sdt);
      if (round.mg.update) round.mg.update(sdt, round.t - dt + sdt * (i + 1));
      if (i < steps - 1) for (const k in pressed) delete pressed[k];
    }
    if (isHost() && round.phase === 'play') {
      if (round.mg.hostUpdate) round.mg.hostUpdate(dt, round.t);
      if (round.phase === 'play' && (round.t >= round.def.time * TS || (round.mg.hostDone && round.mg.hostDone()))) hostEndRound();
    }
    sendAcc += dt;
    if (sendAcc >= 0.05) {
      sendAcc = 0;
      const k = me.kart;
      Arcade.send('p', {
        x: +me.pos.x.toFixed(2), y: +me.pos.y.toFixed(2), z: +me.pos.z.toFixed(2), r: +me.ry.toFixed(2), a: myAnimState(),
        s: +(round.mg.kart ? k.speed : Math.hypot(me.vel.x, me.vel.z)).toFixed(1), vy: +me.vel.y.toFixed(1),
        k: +k.steer.toFixed(2), f: (k.drifting ? 1 : 0) | (k.boostT > 0 ? 2 : 0), pr: round.mg.progress ? +round.mg.progress().toFixed(2) : 0,
      }, { volatile: true });
    }
  }
  if (round && round.phase !== 'podium') {
    updateAvatars(Math.min(dt, 0.05), clock);
    updateCamera(Math.min(dt, 0.05));
  }
  updateAnims(Math.min(dt, 0.05), clock);
  updateParticles(Math.min(dt, 0.05));
  updateEnv(dt, clock);

  hudAcc += dt;
  if (hudAcc > 0.1) {
    hudAcc = 0;
    if (round && round.phase === 'play') {
      const left = Math.max(0, Math.ceil(round.def.time * TS - round.t));
      $('timer').textContent = left;
      $('timer').classList.toggle('low', left <= 10);
      $('widget').innerHTML = round.mg.hud ? round.mg.hud() : '';
      $('corner').innerHTML = round.mg.hudCorner ? round.mg.hudCorner() : '';
    }
  }
  if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) $('banner').classList.remove('show'); }
  for (const k in pressed) delete pressed[k];
  renderer.render(scene, camera);
}

function showCount(v) {
  const c = $('count');
  c.textContent = v;
  c.classList.remove('go'); void c.offsetWidth; c.classList.add('go');
  c.classList.toggle('ya', typeof v === 'string');
}

// ---------------- Inicio ----------------
function wire() {
  Arcade.on('p', (d, from) => {
    const pl = players.get(from);
    if (!pl || !d) return;
    pl.target.set(d.x, d.y, d.z);
    pl.ry = d.r;
    pl.net = d;
    if (pl.pos.distanceTo(pl.target) > 10) pl.pos.copy(pl.target);
  });
  Arcade.on('rs', d => startRound(d));
  Arcade.on('re', d => applyRoundEnd(d));
  Arcade.on('pod', d => { if (!podiumData) showPodium(d); });
  Arcade.on('out', (d, from) => { if (round && d && d.ri === round.i) onOut(from); });
  Arcade.on('mg', (d, from) => { if (round && round.mg && d && d.ri === round.i && round.mg.onMsg) round.mg.onMsg(d.k, d, from); });
  Arcade.on('hi', (d, from) => {
    if (!isHost()) return;
    H.ready.add(from);
    if (podiumData) Arcade.send('pod', podiumData, { to: from });
    else if (H.cur) Arcade.send('rs', { ...H.cur, late: !H.cur.ids.includes(from) }, { to: from });
  });
  Arcade.onPlayerLeft(id => removePlayer(id));
  Arcade.onHostChanged(() => {
    if (!isHost()) return;
    toast('Ahora sos el host');
    if (podiumData) { H.endAt = performance.now() + 5000; return; }
    hostPodium();
  });
  $('mute').addEventListener('click', e => { e.stopPropagation(); $('mute').textContent = toggleMute() ? '🔇' : '🔊'; });
  $('mute').textContent = isMuted() ? '🔇' : '🔊';
  setTimeout(() => $('hint').classList.add('dim'), 15000);
}

function startPreview() {
  const names = ['Gaby', 'Agus', 'Tomi', 'Sofi', 'Juli', 'Mati', 'Lu', 'Nico'];
  names.forEach((n, i) => addPlayer({ id: 'p' + i, name: n, slot: i }));
  myId = 'p0';
  const list = names.map((n, i) => ({ id: 'p' + i, name: n, slot: i, pts: 15 - i * 2 }));
  podium = { placed: buildPodium(list), t: 3, fw: 0 };
  round = { phase: 'podium' };
  document.querySelectorAll('.ui').forEach(e => { e.hidden = true; });
  $('preview').hidden = false;
  fx.confetti(new THREE.Vector3(0, 6, 0), 200, 9);
  let n = 0;
  requestAnimationFrame(function f() {
    updatePodium(0.016, 1.3); updateParticles(0.016); updateEnv(0.016, 1); updateAnims(0.016, 1);
    renderer.render(scene, camera);
    if (++n < 45) requestAnimationFrame(f); else window.__ready = true;
  });
}

(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => Arcade.ready()).then(ctx => {
  if (PREVIEW) return startPreview();
  myId = ctx.me.id;
  ctx.players.forEach(addPlayer);
  wire();
  renderPlayers();
  $('waiting').hidden = false;
  if (!ctx.online) $('waiting').innerHTML = '<h2>Modo práctica</h2><p>Para jugar con amigos, abrí Party Games desde una sala online.</p>';
  if (!isHost()) {
    const hi = setInterval(() => { if (round) clearInterval(hi); else Arcade.send('hi', {}, { to: hostId() }); }, 800);
    Arcade.send('hi', {}, { to: hostId() });
  }
  camera.position.set(0, 20, 40); camera.lookAt(0, 0, 0);
  requestAnimationFrame(loop);
});
