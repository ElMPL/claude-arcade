// F1 Clash — carreras de fórmula con física realista para ClaudeArcade.
// Red: cada jugador simula su propio auto; el host simula los bots y decide el resultado.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { TRACKS } from './tracks.js';
import { buildTrack, at, pointAt, headingAt } from './track.js';
import { CAR, makeCar, gearbox, speed, assistSteer, repair, PARTS } from './physics.js';
import { simulate, trackInfo, progress, collideCars, gridSlot, updateSurface, worldVel } from './world.js';
import { drive, makeBrain } from './ai.js';
import { buildScene } from './scene.js';
import { makeCarMesh, poseCar, LIVERIES, damageVisual, resetDamageVisual } from './car3d.js';
import { makeFX, makeSkids, makeDebris, updateProps, resetProps } from './effects.js';
import { Audio } from './audio.js';

const $ = id => document.getElementById(id);
function store0(k) { try { return !!localStorage.getItem(k); } catch { return false; } }
const IS_TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (IS_TOUCH) document.body.classList.add('touch');
const AUTOPILOT = store0('f1:autopilot');
const DIFF = [{ n: 'Fácil', k: 0.87 }, { n: 'Normal', k: 0.925 }, { n: 'Difícil', k: 0.97 }];
const LAPS = [1, 3, 5, 8];
const BOT_NAMES = ['Rossetti', 'Lindqvist', 'Okafor', 'Tanaka', 'Moreau', 'Duarte', 'Kowalski', 'Hayes', 'Navarro', 'Brandt', 'Ferreira', 'Sato'];
const admin = k => !!(window.Arcade && Arcade.admin && Arcade.admin.get(k));
let slowBots = false;
const PIT_LIMIT = 22.2; // 80 km/h
const fmt = t => { if (t == null || !isFinite(t)) return '—'; const m = Math.floor(t / 60), s = t - m * 60; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(3); };
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } } };

const prefs = Object.assign({ liv: Math.floor(Math.random() * 10), num: 2 + Math.floor(Math.random() * 97), auto: true, abs: true, tc: true, steer: true, brakeA: true, line: false, cam: 0 }, store.get('f1:prefs', {}));
if (IS_TOUCH) prefs.auto = true;
const savePrefs = () => store.set('f1:prefs', prefs);

// ---------- Render ----------
const renderer = new THREE.WebGLRenderer({ antialias: !IS_TOUCH, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, IS_TOUCH ? 1.25 : 1.75));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
$('view').appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 6000);
let composer = null, bloom = null, renderPass = null;
if (!IS_TOUCH) {
  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(new THREE.Scene(), camera); composer.addPass(renderPass);
  bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.3, 0.35, 0.92); composer.addPass(bloom);
  composer.addPass(new OutputPass());
}
function resize() {
  renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (composer) { composer.setSize(innerWidth, innerHeight); composer.setPixelRatio(renderer.getPixelRatio()); }
}
addEventListener('resize', resize); resize();
function render() {
  if (composer) { renderPass.scene = world.scene; composer.render(); }
  else renderer.render(world.scene, camera);
}

// ---------- Estado ----------
let myId = 'local', online = false, isHost = true, players = [];
let phase = 'boot'; // lobby | grid | race | done
let T = null, world = null, trackIdx = -1;
const built = {};
let lobby = { track: 0, laps: 3, bots: 5, diff: 1, cars: {} };
let cars = [];
let me = null;
let race = null;
let lineMesh = null, previewMesh = null;
let FX = null, skids = null, debris = null;

function getTrack(i) { if (!built[i]) built[i] = buildTrack(TRACKS[i]); return built[i]; }
function disposeScene(s) { s.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); }); }
function loadTrack(i) {
  if (trackIdx === i && world) return;
  if (world) disposeScene(world.scene);
  trackIdx = i; T = getTrack(i); world = buildScene(T, renderer);
  if (bloom) bloom.strength = world.theme.bloom;
  lineMesh = null; previewMesh = null;
  FX = makeFX(); world.scene.add(FX.obj);
  skids = makeSkids(world.scene);
  debris = makeDebris(world.scene);
  mini.prep();
}

// ---------- Minimapa ----------
const mini = {
  cv: $('mini'), pts: null,
  prep() {
    const c = this.cv, W = c.width, pad = 22;
    let a = 1e9, b = -1e9, d = 1e9, e = -1e9;
    for (let i = 0; i < T.N; i++) { a = Math.min(a, T.px[i]); b = Math.max(b, T.px[i]); d = Math.min(d, T.pz[i]); e = Math.max(e, T.pz[i]); }
    const s = (W - pad * 2) / Math.max(b - a, e - d), ox = (W - (b - a) * s) / 2, oz = (W - (e - d) * s) / 2;
    this.map = (x, z) => [ox + (b - x) * s, oz + (z - d) * s];
    this.pts = []; for (let i = 0; i < T.N; i += 2) this.pts.push(this.map(T.px[i], T.pz[i]));
  },
  draw() {
    const c = this.cv, x = c.getContext('2d'); x.clearRect(0, 0, c.width, c.height);
    if (!this.pts) return;
    x.lineJoin = 'round'; x.lineCap = 'round';
    const path = () => { x.beginPath(); this.pts.forEach((p, k) => k ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1])); x.closePath(); };
    path(); x.strokeStyle = 'rgba(0,0,0,.6)'; x.lineWidth = 9; x.stroke();
    path(); x.strokeStyle = '#e8e8ee'; x.lineWidth = 4.5; x.stroke();
    for (const s of incidents) { const [ix, iz] = this.map(...pointAt(T, s, 0)); x.beginPath(); x.arc(ix, iz, 7, 0, 7); x.fillStyle = 'rgba(255,210,26,.6)'; x.fill(); }
    const [sx, sz] = this.map(T.px[0], T.pz[0]); x.fillStyle = '#e10600'; x.fillRect(sx - 4, sz - 4, 8, 8);
    for (const car of cars) {
      if (car === me) continue;
      const [px, pz] = this.map(car.c.x, car.c.z);
      x.beginPath(); x.arc(px, pz, 5, 0, 7); x.fillStyle = LIVERIES[car.liv].c1; x.fill(); x.lineWidth = 1.5; x.strokeStyle = '#000'; x.stroke();
    }
    if (me) { const [px, pz] = this.map(me.c.x, me.c.z); x.beginPath(); x.arc(px, pz, 7.5, 0, 7); x.fillStyle = LIVERIES[me.liv].c1; x.fill(); x.lineWidth = 3; x.strokeStyle = '#fff'; x.stroke(); }
  },
};
function trackThumb(cv, t) {
  const TT = getTrack(t), x = cv.getContext('2d'), W = cv.width = 240, H = cv.height = 160, pad = 16;
  let a = 1e9, b = -1e9, d = 1e9, e = -1e9;
  for (let i = 0; i < TT.N; i++) { a = Math.min(a, TT.px[i]); b = Math.max(b, TT.px[i]); d = Math.min(d, TT.pz[i]); e = Math.max(e, TT.pz[i]); }
  const s = Math.min((W - pad * 2) / (b - a), (H - pad * 2) / (e - d)), ox = (W - (b - a) * s) / 2, oz = (H - (e - d) * s) / 2;
  x.lineJoin = 'round'; x.beginPath();
  for (let i = 0; i <= TT.N; i += 3) { const k = i % TT.N, X = ox + (b - TT.px[k]) * s, Z = oz + (TT.pz[k] - d) * s; i ? x.lineTo(X, Z) : x.moveTo(X, Z); }
  x.closePath(); x.strokeStyle = '#e10600'; x.lineWidth = 7; x.stroke(); x.strokeStyle = '#fff'; x.lineWidth = 3; x.stroke();
}

// ---------- Entrada ----------
const keys = {};
const touch = { l: false, r: false, gas: false, brk: false };
let drsPress = false, upPress = false, downPress = false;
addEventListener('keydown', e => {
  if (e.target && e.target.tagName === 'INPUT' && e.target.type === 'number') return;
  keys[e.code] = true;
  if (e.code === 'Space') { drsPress = true; e.preventDefault(); }
  if (e.code === 'KeyE' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') upPress = true;
  if (e.code === 'KeyQ' || e.code === 'ControlLeft' || e.code === 'ControlRight') downPress = true;
  if (e.code === 'KeyC' && phase !== 'lobby') cycleCam();
  if (e.code === 'KeyR' && phase === 'race' && !e.repeat) rescueMe();
  if (e.code === 'KeyP' && phase === 'race' && !e.repeat) requestBox();
  if (e.code === 'KeyM' && phase !== 'lobby') toggleMute();
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  Audio.init();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('pointerdown', () => Audio.init());
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
function bindTouch(id, f) {
  const b = $(id);
  const on = e => { e.preventDefault(); touch[f] = true; b.classList.add('on'); Audio.init(); };
  const off = e => { e.preventDefault(); touch[f] = false; b.classList.remove('on'); };
  b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
}
bindTouch('tL', 'l'); bindTouch('tR', 'r'); bindTouch('tGas', 'gas'); bindTouch('tBrk', 'brk');
$('tDrs').addEventListener('pointerdown', e => { e.preventDefault(); drsPress = true; });
$('tReset').addEventListener('pointerdown', e => { e.preventDefault(); if (phase === 'race') rescueMe(); });
$('tBox').addEventListener('pointerdown', e => { e.preventDefault(); if (phase === 'race') requestBox(); });
$('camBtn').addEventListener('click', () => cycleCam());
$('muteBtn').addEventListener('click', () => toggleMute());
function toggleMute() { Audio.init(); $('muteBtn').textContent = Audio.toggle() ? '🔇' : '🔊'; }

let ks = 0, padPrev = {};
function readInput(dt) {
  let thr = 0, brk = 0, st = 0, analog = false;
  if (keys.KeyW || keys.ArrowUp || touch.gas) thr = 1;
  if (keys.KeyS || keys.ArrowDown || touch.brk) brk = 1;
  const left = keys.KeyA || keys.ArrowLeft || touch.l, right = keys.KeyD || keys.ArrowRight || touch.r;
  const want = (left ? 1 : 0) - (right ? 1 : 0);
  const rate = want === 0 || Math.sign(want) !== Math.sign(ks) ? 8 : 4.5;
  ks += Math.max(-rate * dt, Math.min(rate * dt, want - ks));
  st = ks;
  const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g && g.connected) : null;
  if (gp) {
    const ax = gp.axes[0] || 0;
    if (Math.abs(ax) > 0.08) { st = -Math.sign(ax) * Math.pow((Math.abs(ax) - 0.08) / 0.92, 1.4); analog = true; }
    const rt = gp.buttons[7] ? gp.buttons[7].value : 0, lt = gp.buttons[6] ? gp.buttons[6].value : 0;
    if (rt > 0.03) thr = Math.max(thr, rt); if (lt > 0.03) brk = Math.max(brk, lt);
    if (gp.buttons[0] && gp.buttons[0].value > 0.03) thr = Math.max(thr, gp.buttons[0].value);
    const pressed = i => gp.buttons[i] && gp.buttons[i].pressed && !padPrev[i];
    if (pressed(5)) upPress = true; if (pressed(4)) downPress = true; if (pressed(2)) drsPress = true;
    if (pressed(3)) cycleCam(); if (pressed(8) && phase === 'race') rescueMe(); if (pressed(1) && phase === 'race') requestBox();
    padPrev = {}; gp.buttons.forEach((b, i) => padPrev[i] = b.pressed);
  }
  return { thr, brk, st, analog };
}
function steerAngle(c, st, analog) {
  if (prefs.steer) return assistSteer(c, st, analog);
  const v = Math.max(0, c.vx);
  return st * CAR.maxSteer / (1 + v / (analog ? 75 : 58)); // arcade: dobla más a alta velocidad
}

// ---------- Cámara ----------
const CAMS = ['Persecución', 'Persecución lejana', 'Sobre el casco', 'Cockpit'];
let camMode = prefs.cam || 0, camYaw = 0, camPos = new THREE.Vector3(), camInit = false, shake = 0;
function cycleCam() { camMode = (camMode + 1) % CAMS.length; prefs.cam = camMode; savePrefs(); flash('🎥 ' + CAMS[camMode], '', 900); }
function updateCamera(car, dt) {
  const c = car.c, v = speed(c);
  shake = Math.max(0, shake - dt * 3);
  const kerb = c.surf && c.surf.some(s => s === 1) ? 0.6 : 0, off = c.surf && c.surf.some(s => s === 2 || s === 3) ? 1 : 0;
  const sh = shake + kerb * 0.04 * Math.min(1, v / 30) + off * 0.06 * Math.min(1, v / 20);
  const jx = (Math.random() - 0.5) * sh, jy = (Math.random() - 0.5) * sh;
  if (camMode >= 2 && !car.pit) {
    const m = car.mesh; m.updateMatrixWorld();
    const local = camMode === 2 ? new THREE.Vector3(0, 1.22, -0.3) : new THREE.Vector3(0, 0.82, 0.1);
    const p = local.applyMatrix4(m.matrixWorld);
    camera.position.set(p.x + jx * 0.3, p.y + jy * 0.3, p.z);
    camera.lookAt(new THREE.Vector3(0, camMode === 2 ? 0.9 : 0.75, 12).applyMatrix4(m.matrixWorld));
    camera.fov = 72 + Math.min(10, v * 0.09);
  } else {
    const far = camMode === 1;
    let tgt = c.h;
    if (v > 6 && c.vx > 0) { const [wx, wz] = worldVel(c); tgt = lerpAngle(c.h, Math.atan2(wx, wz), 0.35); }
    if (!camInit) { camYaw = tgt; camInit = true; }
    camYaw = lerpAngle(camYaw, tgt, Math.min(1, dt * (far ? 4 : 6)));
    const dist = (far ? 9.5 : 6.4) + Math.min(1.6, v * 0.012), hgt = far ? 3.4 : 2.15;
    const want = new THREE.Vector3(c.x - Math.sin(camYaw) * dist, hgt, c.z - Math.cos(camYaw) * dist);
    camPos.lerp(want, Math.min(1, dt * 14));
    if (camPos.distanceTo(want) > 30) camPos.copy(want);
    camera.position.set(camPos.x + jx, camPos.y + jy, camPos.z);
    camera.lookAt(c.x + Math.sin(camYaw) * 4, 1.0, c.z + Math.cos(camYaw) * 4);
    camera.fov = 60 + Math.min(14, v * 0.12);
  }
  camera.updateProjectionMatrix();
}
function lerpAngle(a, b, t) { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; }

// ---------- Efectos por auto ----------
const WPOS = [[CAR.a, 0.8], [CAR.a, -0.8], [-CAR.b, 0.8], [-CAR.b, -0.8]];
function carFx(car, dt) {
  const c = car.c, v = speed(c);
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  const rate = dt * 60;
  for (let i = 0; i < 4; i++) {
    const x = c.x + fx * WPOS[i][0] + lx * WPOS[i][1], z = c.z + fz * WPOS[i][0] + lz * WPOS[i][1];
    const s = c.surf ? c.surf[i] : 0;
    const lost = c.dmg && c.dmg[4 + i] >= 1;
    let slip = 0;
    if (car.own && c.kap) slip = Math.max(-c.kap[i] * 2.2, c.kap[i] * 1.4, (c.use[i] - 1.05) * 1.6);
    else slip = (c.brk > 0.9 && v > 15 ? 0.6 : 0) + Math.max(0, Math.abs(c.vy) - 2.5) * 0.25;
    if ((s === 0 || s === 1 || s === 4) && v > 4 && slip > 0.45 && !lost) skids.add(car.id + i, x, z, fx, fz, i < 2 ? 0.34 : 0.42, (slip - 0.4) * 0.7);
    else skids.cut(car.id + i);
    if (v < 3) continue;
    if (lost && Math.random() < 0.9 * rate) FX.emit(x, 0.1, z, (Math.random() - 0.5) * 6, 1 + Math.random() * 3, (Math.random() - 0.5) * 6, 1, 0.7, 0.25, 0.25, 0.4, 1, 1);
    else if ((s === 2 || s === 3) && Math.random() < 0.2 * rate) FX.emit(x, 0.3, z, (Math.random() - 0.5) * 3 + fx * v * 0.2, 1 + Math.random(), (Math.random() - 0.5) * 3 + fz * v * 0.2, s === 3 ? 0.78 : 0.45, s === 3 ? 0.66 : 0.4, s === 3 ? 0.5 : 0.25, 0.8, 0.9, 0.3);
    else if (slip > 0.7 && Math.random() < 0.45 * rate) FX.emit(x, 0.3, z, (Math.random() - 0.5) * 2, 0.8 + Math.random(), (Math.random() - 0.5) * 2, 0.86, 0.86, 0.9, 1.0, 1.5, 0.32);
  }
  if (c.dmg && c.dmg[10] > 0.35 && Math.random() < c.dmg[10] * 0.7 * rate) FX.emit(c.x - fx * 2, 0.9, c.z - fz * 2, (Math.random() - 0.5), 1.5, (Math.random() - 0.5), 0.3, 0.3, 0.32, 1.4, 2.2, 0.45);
  if (v > 55 && c.surf && c.surf.some(q => q === 1) && Math.random() < 0.3 * rate) FX.emit(c.x - fx * 1.5, 0.08, c.z - fz * 1.5, -fx * 6 + (Math.random() - 0.5) * 4, 1 + Math.random() * 2, -fz * 6 + (Math.random() - 0.5) * 4, 1, 0.75, 0.3, 0.18, 0.35, 1, 1);
}
function sparks(x, z, n) { for (let i = 0; i < n; i++) FX.emit(x, 0.4, z, (Math.random() - 0.5) * 14, 2 + Math.random() * 5, (Math.random() - 0.5) * 14, 1, 0.75, 0.25, 0.28, 0.6, 1, 1); }
function fireworks(x, z) {
  const cols = [[1, 0.2, 0.2], [1, 0.85, 0.2], [0.3, 0.6, 1], [0.3, 1, 0.5], [1, 0.4, 0.9]];
  for (let b = 0; b < 6; b++) setTimeout(() => {
    if (!FX) return;
    const cx = x + (Math.random() - 0.5) * 40, cy = 28 + Math.random() * 18, cz = z + (Math.random() - 0.5) * 40, col = cols[b % cols.length];
    for (let i = 0; i < 45; i++) { const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI - Math.PI / 2, sp = 10 + Math.random() * 6; FX.emit(cx, cy, cz, Math.cos(a) * Math.cos(e) * sp, Math.sin(e) * sp, Math.sin(a) * Math.cos(e) * sp, col[0], col[1], col[2], 0.7, 1.6, 1, 0.25); }
    Audio.blip('pop');
  }, b * 380);
}

// ---------- HUD ----------
for (let i = 0; i < 15; i++) { const l = document.createElement('i'); l.className = i < 5 ? 'g' : i < 10 ? 'r' : 'b'; $('leds').appendChild(l); }
let msgTimer = 0;
function flash(text, cls = '', ms = 1800) {
  const m = $('msg'); m.textContent = text; m.className = 'show ' + cls;
  clearTimeout(msgTimer); msgTimer = setTimeout(() => m.className = cls, ms);
}
function hint(text, ms = 9000) { const h = $('hint'); h.textContent = text; h.classList.remove('out'); setTimeout(() => h.classList.add('out'), ms); }
function adjTime(car) { return car.finTime != null ? car.finTime + (car.pen || 0) : null; }
function standings() {
  const arr = cars.slice();
  arr.sort((a, b) => {
    const ta = adjTime(a), tb = adjTime(b);
    if (ta != null || tb != null) { if (ta != null && tb != null) return ta - tb; return ta != null ? -1 : 1; }
    return (b.c.prog ?? -1e9) - (a.c.prog ?? -1e9);
  });
  return arr;
}
const dmgColor = d => d >= 1 ? '#555' : d < 0.05 ? '#2bd46a' : d < 0.4 ? '#c7e43a' : d < 0.75 ? '#ffb020' : '#ff3030';
let towerTick = 0;
function updateHUD(dt, now) {
  const c = me ? me.c : null;
  const rt = raceTime(now);
  if (c) {
    $('spd').textContent = Math.round(Math.abs(c.vx) * 3.6);
    $('gear').textContent = c.gear === -1 ? 'R' : c.gear === 0 ? 'N' : c.gear;
    const leds = $('leds').children, f = Math.max(0, Math.min(1, (c.rpm - 9000) / (CAR.upRpm - 9000)));
    const n = Math.round(f * 15);
    for (let i = 0; i < 15; i++) leds[i].classList.toggle('on', i < n);
    $('leds').classList.toggle('flash', !c.assist.auto && c.rpm > CAR.upRpm + 100 && (now / 80 | 0) % 2 === 0);
    $('pThr').style.setProperty('--v', c.thr.toFixed(2)); $('pBrk').style.setProperty('--v', c.brk.toFixed(2));
    $('drs').className = c.drs ? 'on' : me.drsAvail ? 'avail' : '';
    $('tDrs').classList.toggle('avail', !!me.drsAvail);
    $('tow').className = c.tow > 0.15 ? 'on' : '';
    $('bas').className = c.bAssist ? 'on' : '';
    $('lim').className = c.limiter ? 'on' : '';
    for (let p = 0; p < 11; p++) { const el = $('d' + p); if (el) el.style.fill = dmgColor(c.dmg[p]); }
    const crit = c.dmg[4] >= 1 || c.dmg[5] >= 1 || c.dmg[6] >= 1 || c.dmg[7] >= 1 || c.dmg[2] >= 1;
    $('dmgWarn').hidden = !(crit && !me.pit && me.finTime == null);
  }
  if (race && me) {
    const lapNow = Math.max(1, Math.min(race.laps, (me.c.lap || 0)));
    $('lapN').textContent = (me.finTime != null ? race.laps : lapNow) + '/' + race.laps;
    const cur = phase === 'race' && me.finTime == null && rt > 0 ? rt - me.lapStart : 0;
    $('clock').textContent = me.finTime != null ? fmt(me.finTime) : fmt(Math.max(0, cur));
    $('tLast').textContent = fmt(me.last);
    const tb = $('tBest'); tb.textContent = fmt(me.best); tb.className = me.best != null && race.fastest && race.fastest.id === me.id ? 'pb' : '';
    const dEl = $('tDelta');
    if (me.bestTrace && me.curTrace && me.c.lap >= 2 && me.finTime == null && !me.pit) {
      const k = Math.floor(sAbs(me.c.ts) / 50);
      const a = me.curTrace[k], b = me.bestTrace[k];
      if (a != null && b != null) { const d = a - b; dEl.textContent = (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(2); dEl.className = d < 0 ? 'neg' : 'pos'; }
    } else { dEl.textContent = '—'; dEl.className = ''; }
    $('pen').hidden = !me.pen; $('pen').textContent = '+' + (me.pen || 0) + ' s';
    for (let k = 0; k < 3; k++) {
      const el = $('s' + k), v = me.secCur[k] ?? (me.secShow ? me.secShow[k] : null);
      el.textContent = v != null ? v.toFixed(1) : 'S' + (k + 1);
      el.className = v == null ? '' : race.bestSec[k] != null && v <= race.bestSec[k] + 1e-6 ? 'purple' : me.secBest[k] != null && v <= me.secBest[k] + 1e-6 ? 'green' : 'yellow';
    }
    const pb = $('pitbox');
    if (me.pit) {
      pb.hidden = false;
      const P = me.pit;
      if (P.phase === 'stop') { $('pitTxt').textContent = P.wait > 0.05 ? `EN BOXES · reparando ${P.wait.toFixed(1)} s` : 'SALIENDO DE BOXES'; $('pitBar').style.width = (100 * (1 - P.wait / P.total)).toFixed(1) + '%'; }
      else { $('pitTxt').textContent = P.phase === 'in' ? 'ENTRANDO A BOXES · limitador 80 km/h' : 'SALIDA DE BOXES · limitador 80 km/h'; $('pitBar').style.width = '0%'; }
    } else pb.hidden = true;
    $('boxReq').hidden = !me.boxReq || !!me.pit;
    let yellow = false;
    for (const s of incidents) { let d = s - sAbs(me.c.ts); if (d < 0) d += T.L; if (d < 400 && d > 5) yellow = true; }
    $('flagY').hidden = !yellow || phase !== 'race';
  }
  towerTick -= dt;
  if (towerTick <= 0 && race) {
    towerTick = 0.25;
    const st = standings(), lead = st[0];
    let h = `<div class="th"><span>${T.def.name.toUpperCase()}</span><span>${phase === 'grid' ? 'LARGADA' : 'V' + Math.max(1, Math.min(race.laps, lead ? lead.c.lap || 1 : 1))}</span></div>`;
    st.forEach((car, k) => {
      let g = '';
      if (car.pit) g = 'BOX';
      else if (k === 0) g = car.finTime != null ? '🏁' : 'Líder';
      else if (car.finTime != null && lead.finTime != null) g = '+' + (adjTime(car) - adjTime(lead)).toFixed(3);
      else if (lead.c.prog - car.c.prog > T.L) g = '+' + Math.floor((lead.c.prog - car.c.prog) / T.L) + ' V';
      else { const ci = Math.floor((car.c.prog || 0) / 100); const a = car.cp[ci], b = lead.cp[ci]; g = a != null && b != null ? '+' + Math.max(0, a - b).toFixed(1) : ''; }
      const L = LIVERIES[car.liv];
      const dm = car.c.dmg && car.c.dmg.some(d => d >= 1) ? ' 🔧' : '';
      h += `<div class="tr ${car === me ? 'me' : ''} ${car.finTime != null ? 'fin' : ''}" style="--c1:${L.c1}"><span class="p">${k + 1}</span><span class="bar"></span><span class="n">${car.abbr}${dm}${car.pen ? ' <em>+' + car.pen + '</em>' : ''}</span><span class="g">${g}</span></div>`;
    });
    $('tower').innerHTML = h;
  }
}

// ---------- Sala ----------
function buildLobbyUI() {
  const tr = $('tracks'); tr.innerHTML = '';
  TRACKS.forEach((t, i) => {
    const b = document.createElement('button'); b.className = 'tcard'; b.dataset.i = i;
    const cv = document.createElement('canvas'); b.appendChild(cv); trackThumb(cv, i);
    b.insertAdjacentHTML('beforeend', `<b>${t.name}</b><small>${t.desc} · ${(getTrack(i).L / 1000).toFixed(2)} km</small>`);
    b.onclick = () => { if (!isHost) return; lobby.track = i; hostChanged(); };
    tr.appendChild(b);
  });
  $('laps').innerHTML = LAPS.map(n => `<button data-n="${n}">${n}</button>`).join('');
  $('laps').onclick = e => { const n = +e.target.dataset.n; if (!n || !isHost) return; lobby.laps = n; hostChanged(); };
  $('diff').innerHTML = DIFF.map((d, i) => `<button data-i="${i}">${d.n}</button>`).join('');
  $('diff').onclick = e => { const i = e.target.dataset.i; if (i == null || !isHost) return; lobby.diff = +i; hostChanged(); };
  $('botMinus').onclick = () => { if (!isHost) return; lobby.bots = Math.max(0, lobby.bots - 1); hostChanged(); };
  $('botPlus').onclick = () => { if (!isHost) return; lobby.bots = Math.min(8 - humanCount(), lobby.bots + 1); hostChanged(); };
  const sw = $('swatches'); sw.innerHTML = '';
  LIVERIES.forEach((L, i) => {
    const b = document.createElement('button'); b.className = 'sw'; b.style.setProperty('--c1', L.c1); b.style.setProperty('--c2', L.c2); b.title = L.name;
    b.onclick = () => { prefs.liv = i; savePrefs(); myCarChanged(); };
    sw.appendChild(b);
  });
  $('num').value = prefs.num;
  $('num').onchange = () => { prefs.num = Math.max(1, Math.min(99, Math.round(+$('num').value || 1))); $('num').value = prefs.num; savePrefs(); myCarChanged(); };
  const as = { aAuto: 'auto', aAbs: 'abs', aTc: 'tc', aSteer: 'steer', aBrake: 'brakeA', aLine: 'line' };
  for (const [id, k] of Object.entries(as)) { const el = $(id); el.checked = !!prefs[k]; el.onchange = () => { prefs[k] = el.checked; savePrefs(); }; }
  if (IS_TOUCH) { $('aAuto').checked = true; $('aAuto').disabled = true; }
  $('goBtn').onclick = onGo;
}
function humanCount() { return players.length; }
function myEntry() { return { liv: prefs.liv, num: prefs.num, ready: !!(lobby.cars[myId] && lobby.cars[myId].ready) }; }
function myCarChanged() {
  const e = myEntry(); lobby.cars[myId] = e;
  if (isHost) hostChanged(); else { Arcade.send('car', e, { to: Arcade.ctx.hostId }); renderLobby(); }
  if (previewMesh) { world.scene.remove(previewMesh); previewMesh = null; }
}
function hostChanged() {
  lobby.bots = Math.max(0, Math.min(8 - humanCount(), lobby.bots));
  if (online) Arcade.send('lobby', lobby);
  renderLobby();
}
function renderLobby() {
  if (phase !== 'lobby') return;
  loadTrack(lobby.track);
  document.querySelectorAll('.tcard').forEach(b => { b.classList.toggle('sel', +b.dataset.i === lobby.track); b.disabled = !isHost; });
  document.querySelectorAll('#laps button').forEach(b => { b.classList.toggle('sel', +b.dataset.n === lobby.laps); b.disabled = !isHost; });
  document.querySelectorAll('#diff button').forEach(b => { b.classList.toggle('sel', +b.dataset.i === lobby.diff); b.disabled = !isHost; });
  $('botN').textContent = lobby.bots; $('botMinus').disabled = $('botPlus').disabled = !isHost;
  $('hostNote').hidden = isHost;
  document.querySelectorAll('.sw').forEach((b, i) => b.classList.toggle('sel', i === prefs.liv));
  $('livName').textContent = LIVERIES[prefs.liv].name;
  let h = '';
  players.forEach(p => {
    const e = lobby.cars[p.id] || { liv: 0, num: '?' }, L = LIVERIES[e.liv || 0];
    const host = p.id === (online ? Arcade.ctx.hostId : myId);
    const ok = host || e.ready;
    h += `<div class="prow ${p.id === myId ? 'me' : ''}" style="--c1:${L.c1};--c2:${L.c2}"><span class="num">${e.num}</span><span class="nm">${esc(p.name)}${host ? ' 👑' : ''}</span><span class="st ${ok ? 'ok' : ''}">${host ? 'HOST' : ok ? 'LISTO' : 'ELIGIENDO'}</span></div>`;
  });
  for (let k = 0; k < lobby.bots; k++) h += `<div class="prow bot" style="--c1:#444;--c2:#666"><span class="num">🤖</span><span class="nm">${BOT_NAMES[k]} (bot)</span><span class="st">${DIFF[lobby.diff].n}</span></div>`;
  $('plist').innerHTML = h;
  $('pCount').textContent = `${players.length + lobby.bots}/8`;
  const go = $('goBtn');
  if (isHost) {
    const waiting = players.filter(p => p.id !== myId && !(lobby.cars[p.id] && lobby.cars[p.id].ready));
    go.disabled = waiting.length > 0; go.className = 'go';
    go.textContent = waiting.length ? `ESPERANDO A ${waiting.length}…` : '🏁 LARGAR CARRERA';
    $('lbSub').textContent = online ? 'Elegí el circuito y largá cuando estén todos listos' : 'Modo práctica contra bots';
  } else {
    const r = lobby.cars[myId] && lobby.cars[myId].ready;
    go.disabled = false; go.className = 'go' + (r ? ' wait' : ''); go.textContent = r ? '✔ LISTO — ESPERANDO AL HOST' : 'LISTO';
    $('lbSub').textContent = 'Elegí tu auto y marcá Listo';
  }
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function onGo() {
  Audio.init();
  if (isHost) { startRace(); return; }
  const e = myEntry(); e.ready = !e.ready; lobby.cars[myId] = e;
  Arcade.send('car', e, { to: Arcade.ctx.hostId }); renderLobby();
}

// ---------- Carrera ----------
function startRace() {
  const grid = [];
  players.forEach(p => { const e = lobby.cars[p.id] || { liv: 0, num: 1 }; grid.push({ id: p.id, name: p.name, liv: e.liv, num: e.num, bot: false }); });
  const usedL = new Set(grid.map(g => g.liv)), usedN = new Set(grid.map(g => +g.num));
  for (let k = 0; k < lobby.bots; k++) {
    let liv = k % 10; for (let t = 0; t < 10 && usedL.has(liv); t++) liv = (liv + 1) % 10; usedL.add(liv);
    let num = 3 + Math.floor(Math.random() * 95); while (usedN.has(num)) num = 3 + Math.floor(Math.random() * 95); usedN.add(num);
    grid.push({ id: 'bot' + k, name: BOT_NAMES[k], liv, num, bot: true, skill: DIFF[lobby.diff].k + (Math.random() - 0.5) * 0.035 });
  }
  for (let i = grid.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [grid[i], grid[j]] = [grid[j], grid[i]]; }
  const msg = { track: lobby.track, laps: lobby.laps, grid, out: 400 + Math.floor(Math.random() * 1800) };
  if (online) Arcade.send('start', msg);
  beginRace(msg);
}

function beginRace(msg, late = false) {
  phase = 'grid';
  loadTrack(msg.track);
  $('lobby').hidden = true; $('hud').hidden = false; $('touch').hidden = !IS_TOUCH; $('results').hidden = true;
  cars.forEach(c => world.scene.remove(c.mesh)); cars = [];
  if (previewMesh) { world.scene.remove(previewMesh); previewMesh = null; }
  resetProps(world.props); debris.clear();
  const now = performance.now();
  race = { laps: msg.laps, start: now, outAt: now + 5000 + msg.out, t0: null, lights: 0, fastest: null, finishes: {}, closeAt: null, done: false, grid: msg.grid, bestSec: [null, null, null] };
  incidents = [];
  msg.grid.forEach((g, k) => {
    const slot = gridSlot(T, k), [x, z] = pointAt(T, slot.s, slot.off);
    const c = makeCar(x, z, headingAt(T, slot.s));
    trackInfo(T, c); c.lap = 0; c.prevS = c.ts; c.half = false; c.gridLap = true; c.prog = c.ts - T.L;
    const own = g.id === myId || (g.bot && isHost);
    if (g.id === myId) c.assist = { abs: prefs.abs, tc: prefs.tc, auto: prefs.auto || IS_TOUCH };
    if (g.bot) c.dmgScale = 0.6;
    const mesh = makeCarMesh(g.liv, g.num); world.scene.add(mesh);
    const car = { ...g, slot: k, abbr: g.name.replace(/[^\p{L}\p{N}]/gu, '').slice(0, 3).toUpperCase() || 'P' + (k + 1), c, mesh, own, snaps: [], cp: {}, lapStart: 0, last: null, best: null, finTime: null, brain: g.bot ? makeBrain(g.skill || 0.92) : null, ghost: 0, stuck: 0, pen: 0, warn: 0, secCur: [null, null, null], secBest: [null, null, null], secStart: 0, pit: null };
    poseCar(mesh, c);
    cars.push(car);
    if (g.id === myId) me = car;
  });
  if (!cars.includes(me)) me = null;
  camInit = false;
  if (prefs.line && me) addLine();
  hint(IS_TOUCH ? '◀ ▶ doblar · ACEL / FRENO · DRS en las rectas · BOX = entrar a boxes · ↺ = reaparecer' : 'W/S acelerar y frenar · A/D doblar · Espacio DRS · P entrar a boxes · R reaparecer · C cámara');
  $('lights').className = ''; [...$('lights').children].forEach(l => l.className = '');
  world.setLights(0);
  if (late) race.outAt = now;
}

function addLine() {
  const pos = [], col = [];
  const red = new THREE.Color('#ff2a2a'), grn = new THREE.Color('#2bd46a'), yel = new THREE.Color('#ffd21a');
  for (let i = 0; i < T.N; i++) {
    const j = (i + 1) % T.N;
    const brake = T.vmax[(i + 3) % T.N] < T.vmax[i] - 0.15, slow = T.vmax[i] < 60 && !brake;
    const cc = brake ? red : slow ? yel : grn;
    const p = (k, o) => [T.px[k] + T.nx[k] * (T.line[k] + o), T.pz[k] + T.nz[k] * (T.line[k] + o)];
    const a0 = p(i, -0.22), b0 = p(i, 0.22), a1 = p(j, -0.22), b1 = p(j, 0.22);
    pos.push(a0[0], 0.02, a0[1], b0[0], 0.02, b0[1], a1[0], 0.02, a1[1], b0[0], 0.02, b0[1], b1[0], 0.02, b1[1], a1[0], 0.02, a1[1]);
    for (let q = 0; q < 6; q++) col.push(cc.r, cc.g, cc.b);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  lineMesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
  world.scene.add(lineMesh);
}

const raceTime = now => race && race.t0 != null ? (now - race.t0) / 1000 : 0;
const sAbs = s => ((s % T.L) + T.L) % T.L;

let drsZones = [];
function computeDrs() {
  drsZones = [];
  const N = T.N; let start = -1;
  const full = i => T.vmax[i] >= 90;
  let o = 0; while (full(o) && o < N) o++;
  for (let k = 0; k <= N; k++) {
    const i = (o + k) % N;
    if (full(i) && k < N) { if (start < 0) start = o + k; }
    else if (start >= 0) {
      const len = (o + k - start) * T.ds;
      if (len > 380) drsZones.push({ a: (start * T.ds + 90) % T.L, b: ((o + k) * T.ds - 40) % T.L, det: sAbs(start * T.ds - 160) });
      start = -1;
    }
  }
}
const inRange = (s, a, b) => a <= b ? s >= a && s <= b : s >= a || s <= b;

// ---------- Boxes ----------
function repairTime(c) {
  const W = [1.5, 1.5, 2, 2.5, 2, 2, 2, 2, 1, 1, 3];
  return 2.2 + c.dmg.reduce((a, d, i) => a + Math.min(1, d) * W[i], 0);
}
function requestBox() {
  if (!me || me.pit || me.finTime != null) return;
  me.boxReq = !me.boxReq;
  flash(me.boxReq ? '📻 BOX, BOX — entrá a boxes en esta vuelta' : 'Entrada a boxes cancelada', me.boxReq ? 'gold' : '', 2000);
}
function rescueMe() {
  if (!me || me.pit || me.finTime != null || phase !== 'race') return;
  respawnCar(me);
}
// Reaparece en la pista un poco más atrás: titila (sin choques) y va más lento unos segundos.
// Las partes destrozadas vuelven "dañadas" para poder seguir; en boxes se arreglan del todo.
function respawnCar(car) {
  const c = car.c, s = c.ts - 25;
  const off = Math.max(-T.hw + 2, Math.min(T.hw - 2, at(T, T.line, s)));
  const [x, z] = pointAt(T, s, off);
  const v = Math.min(18, at(T, T.vmax, s) * 0.6);
  Object.assign(c, { x, z, h: headingAt(T, s), vx: v, vy: 0, r: 0, steer: 0, gear: 2, tcCut: 1, drs: false });
  for (let i = 0; i < 4; i++) c.w[i] = v / CAR.R;
  for (let i = 0; i < 11; i++) if (c.dmg[i] > 0.45) c.dmg[i] = 0.45;
  resetDamageVisual(car.mesh); damageVisual(car.mesh, c.dmg);
  trackInfo(T, c); c.prevS = c.ts;
  car.ghost = 4; car.slowT = 6; car.stuck = 0; car.critT = 0; car.boxReq = false;
  if (car === me) { $('fade').classList.add('on'); setTimeout(() => $('fade').classList.remove('on'), 350); flash('↺ Reapareciste · 6 s con menos potencia', 'gold', 2600); }
}
function goToPits(car, teleport) {
  const c = car.c, P = T.pit, sBox = P.boxes[car.slot % P.boxes.length], sBoxA = sAbs(sBox);
  let extra = 0;
  if (teleport) {
    const cur = sAbs(c.ts);
    const dist = cur <= sBoxA ? sBoxA - cur : 0;
    extra = 6 + dist / 50;
    const [x, z] = pointAt(T, sBox, P.lane + 1.2);
    Object.assign(c, { x, z, h: headingAt(T, sBox), vx: 0, vy: 0, r: 0, steer: 0, drs: false });
    for (let i = 0; i < 4; i++) c.w[i] = 0;
    trackInfo(T, c); c.prevS = c.ts; c.half = true;
    const rt = repairTime(c) + extra;
    car.pit = { phase: 'stop', s: sBox, wait: rt, total: rt };
  } else {
    car.pit = { phase: 'in', s: c.ts, d0: c.td, v: Math.max(PIT_LIMIT, c.vx) };
  }
  car.boxReq = false; car.drsZone = null;
  if (online) Arcade.send('pit', { id: car.id });
  return extra;
}
function pitStep(car, dt) {
  const c = car.c, P = T.pit, S = car.pit;
  const sBox = P.boxes[car.slot % P.boxes.length];
  if (S.phase === 'in' || S.phase === 'out') {
    const r0 = T.rel(S.s);
    if (S.phase === 'in') {
      const toBox = sBox - r0;
      let target = r0 < P.limitA ? Math.max(PIT_LIMIT, S.v - 12 * dt) : PIT_LIMIT;
      if (toBox < 30) target = Math.min(target, Math.max(1.5, toBox * 0.75));
      S.v = Math.min(S.v, Math.max(target, S.v - 12 * dt)); if (S.v > target) S.v = Math.max(target, S.v - 12 * dt);
    } else S.v = Math.min(PIT_LIMIT, S.v + 6 * dt);
    S.s += S.v * dt;
    const offAt = s => {
      const r = T.rel(s);
      if (S.phase === 'in') return r > sBox - 25 ? P.lane + 1.2 * Math.min(1, (r - (sBox - 25)) / 25) : P.offsetAt(s, S.d0);
      if (r < sBox + 25) return P.lane + 1.2 * Math.max(0, 1 - (r - sBox) / 25);
      return P.offsetAt(s, P.lane);
    };
    const [x, z] = pointAt(T, S.s, offAt(S.s)), [x2, z2] = pointAt(T, S.s + 2, offAt(S.s + 2));
    c.x = x; c.z = z; c.h = Math.atan2(x2 - x, z2 - z); c.vx = S.v; c.vy = 0; c.r = 0; c.steer = 0; c.limiter = PIT_LIMIT;
    c.thr = 0.3; c.brk = S.phase === 'in' && S.v < 15 ? 0.5 : 0; c.gear = Math.max(1, Math.min(3, Math.round(S.v / 9)));
    c.rpm = 6000 + S.v * 120;
    for (let i = 0; i < 4; i++) { c.w[i] = S.v / CAR.R; c.rot[i] += c.w[i] * dt; }
    const r2 = T.rel(S.s);
    if (S.phase === 'in' && r2 >= sBox - 0.3) { const t = repairTime(c); car.pit = { phase: 'stop', s: sBox, wait: t, total: t }; c.vx = 0; }
    else if (S.phase === 'out' && r2 >= P.outS) {
      c.limiter = 0; c.vx = PIT_LIMIT; car.pit = null; car.ghost = 1.0;
      for (let i = 0; i < 4; i++) c.w[i] = c.vx / CAR.R;
    }
  } else if (S.phase === 'stop') {
    c.vx = 0; c.vy = 0; c.thr = 0; c.brk = 0; c.rpm = 4200 + Math.random() * 200; c.limiter = PIT_LIMIT;
    S.wait -= dt;
    if (S.wait <= 0) {
      repair(c); resetDamageVisual(car.mesh);
      car.pit = { phase: 'out', s: S.s, v: 0 };
      if (car === me) flash('🔧 Auto reparado — ¡salí!', 'green', 1600);
    }
  }
  trackInfo(T, c);
  if (progress(T, c)) onLapCross(car, performance.now());
}

// ---------- Penalizaciones ----------
function trackLimits(car) {
  const c = car.c;
  if (car.bot || car.pit || car.finTime != null || T.street) return;
  const out = Math.abs(c.td) > T.hw + 2.3 && c.vx > 15;
  const corner = Math.abs(at(T, T.curv, c.ts)) > 1 / 350;
  if (out && corner && !car.outNow) {
    car.outNow = true; car.warn++;
    if (car.warn >= 3 && (car.warn - 3) % 2 === 0) addPenalty(car, 5, 'Límites de pista');
    else if (car === me) flash(`⚠ Límites de pista (${Math.min(car.warn, 3)}/3)`, 'gold', 1800);
  } else if (!out && Math.abs(c.td) < T.hw) car.outNow = false;
}
function addPenalty(car, sec, why) {
  if (car.penCd && performance.now() < car.penCd) return;
  car.penCd = performance.now() + 4000;
  car.pen = (car.pen || 0) + sec;
  if (car === me) { flash(`⛔ +${sec} s de penalización · ${why}`, 'red', 3000); Audio.blip('hit'); }
  if (online) Arcade.send('pen', { id: car.id, pen: car.pen });
}

// ---------- Incidentes (bandera amarilla) ----------
let incidents = [];
function updateIncidents(now) {
  incidents = [];
  if (phase !== 'race' || raceTime(now) < 8) return;
  for (const car of cars) {
    if (car.pit || car.finTime != null) continue;
    const c = car.c, slow = speed(c) < 9, crashed = car.hitT && now - car.hitT < 3000;
    if (slow || crashed) incidents.push(sAbs(c.ts));
  }
  if (world.panels) for (const p of world.panels) {
    let on = false;
    for (const s of incidents) { let d = s - p.s; if (d < 0) d += T.L; if (d < 320) on = true; }
    p.m.emissiveIntensity = on ? ((now / 300 | 0) % 2 ? 3 : 0.4) : 0;
  }
}

// ---------- Red: estado compacto ----------
function stateArr(car) {
  const c = car.c, r2 = v => Math.round(v * 100) / 100;
  const dm = c.dmg.map(d => d >= 1 ? 9 : Math.min(8, Math.floor(d * 9))).join('');
  return [r2(c.x), r2(c.z), Math.round(c.h * 1000) / 1000, r2(c.vx), r2(c.vy), Math.round(c.steer * 1000) / 1000, Math.round(c.rpm), r2(c.thr), r2(c.brk), c.gear, r2(c.prog || 0), c.lap || 0, car.ghost > 0 ? 1 : 0, dm, car.pit ? 1 : 0];
}
function pushSnap(car, a, now) {
  car.snaps.push({ t: now, x: a[0], z: a[1], h: a[2], vx: a[3], vy: a[4], st: a[5], rpm: a[6], thr: a[7], brk: a[8], gear: a[9], prog: a[10], lap: a[11], ghost: a[12], dm: a[13], pit: a[14] });
  if (car.snaps.length > 30) car.snaps.shift();
}
function interpRemote(car, now, dt) {
  const S = car.snaps; if (!S.length) return;
  const rt = now - 110;
  let a = S[0], b = null;
  for (let i = S.length - 1; i >= 0; i--) if (S[i].t <= rt) { a = S[i]; b = S[i + 1] || null; break; }
  const c = car.c;
  if (b && Math.hypot(b.x - a.x, b.z - a.z) < 60) {
    const f = (rt - a.t) / Math.max(1, b.t - a.t);
    c.x = a.x + (b.x - a.x) * f; c.z = a.z + (b.z - a.z) * f; c.h = lerpAngle(a.h, b.h, f);
    c.vx = a.vx + (b.vx - a.vx) * f; c.vy = a.vy + (b.vy - a.vy) * f;
  } else {
    a = S[S.length - 1]; const e = Math.min(0.25, (rt - a.t) / 1000);
    const fx = Math.sin(a.h), fz = Math.cos(a.h), lx = Math.cos(a.h), lz = -Math.sin(a.h);
    c.x = a.x + (a.vx * fx + a.vy * lx) * e; c.z = a.z + (a.vx * fz + a.vy * lz) * e; c.h = a.h; c.vx = a.vx; c.vy = a.vy;
  }
  const L = b || a;
  c.steer = a.st; c.rpm = a.rpm; c.thr = a.thr; c.brk = a.brk; c.gear = a.gear; c.prog = L.prog; c.lap = L.lap;
  car.ghost = a.ghost ? 1 : 0; car.pit = L.pit ? { phase: 'remote' } : null;
  if (typeof L.dm === 'string') for (let i = 0; i < 11; i++) { const d = +L.dm[i]; c.dmg[i] = d === 9 ? 1 : d / 9; }
  for (let i = 0; i < 4; i++) { c.w[i] = c.vx / CAR.R; c.rot[i] += c.w[i] * dt; }
  const Lc = trackInfo(T, c); updateSurface(T, c, Lc);
}

// ---------- Vueltas, sectores y llegada ----------
function sectorCheck(car, rt) {
  if (car.pit || car.c.lap < 1) { car.secIdx = null; return; }
  const s = sAbs(car.c.ts), k = s < T.sectors[0] ? 0 : s < T.sectors[1] ? 1 : 2;
  if (car.secIdx == null) { car.secIdx = k; car.secStart = rt; car.secValid = k === 0 && s < 30; return; }
  if (k === car.secIdx) return;
  if (k === (car.secIdx + 1) % 3) {
    const prev = car.secIdx, t = rt - car.secStart;
    if (car.secValid) {
      car.secCur[prev] = t;
      if (car.secBest[prev] == null || t < car.secBest[prev]) car.secBest[prev] = t;
      if (race.bestSec[prev] == null || t < race.bestSec[prev]) { race.bestSec[prev] = t; if (online) Arcade.send('sec', { k: prev, t }); }
    }
    if (k === 0) { car.secShow = car.secCur.slice(); car.secCur = [null, null, null]; }
  }
  car.secValid = k === (car.secIdx + 1) % 3;
  car.secIdx = k; car.secStart = rt;
}
function onLapCross(car, now) {
  const c = car.c, rt = raceTime(now);
  if (c.lap >= 2) {
    const lt = rt - car.lapStart; car.lapStart = rt; car.last = lt;
    const pb = car.best == null || lt < car.best;
    if (pb) { car.best = lt; if (car === me) me.bestTrace = me.curTrace; }
    if (car === me) me.curTrace = [];
    const ev = { id: car.id, lap: c.lap, last: lt, best: car.best };
    if (online) Arcade.send('lap', ev);
    onLapEvent(ev);
    if (car === me && c.lap <= race.laps) {
      const fastest = race.fastest && race.fastest.id === me.id && race.fastest.t === lt;
      if (fastest) flash('VUELTA RÁPIDA  ' + fmt(lt), 'purple', 2600);
      else if (pb) flash('MEJOR VUELTA PERSONAL  ' + fmt(lt), 'green', 2400);
      else flash(fmt(lt), '', 1800);
      if (c.lap === race.laps && race.laps > 1) setTimeout(() => flash('ÚLTIMA VUELTA', 'gold', 2000), 2700);
    }
    if (c.lap > race.laps && car.finTime == null) {
      car.finTime = rt;
      const fe = { id: car.id, time: rt, best: car.best, pen: car.pen || 0 };
      if (online) Arcade.send('fin', fe);
      onFinish(fe);
    }
  } else {
    car.lapStart = 0; if (car === me) me.curTrace = [];
  }
}
function onLapEvent(ev) {
  const car = cars.find(c => c.id === ev.id); if (!car) return;
  car.last = ev.last; car.best = ev.best;
  if (!race.fastest || ev.last < race.fastest.t) {
    race.fastest = { id: ev.id, t: ev.last };
    if (car !== me && race.t0 != null && ev.lap > 2) flash(`🟣 Vuelta rápida: ${car.abbr} ${fmt(ev.last)}`, 'purple', 2000);
  }
}
function onFinish(fe) {
  const car = cars.find(c => c.id === fe.id); if (!car) return;
  car.finTime = fe.time; car.best = fe.best ?? car.best; car.pen = fe.pen ?? car.pen;
  race.finishes[fe.id] = fe.time;
  const order = Object.keys(race.finishes).length;
  if (order === 1) {
    fireworks(T.px[0], T.pz[0]);
    if (car === me) { flash('🏁 ¡CRUZASTE PRIMERO!', 'gold', 4000); Audio.blip('fanfare'); }
    else flash(`🏁 ${car.name} cruza primero`, 'gold', 3000);
    if (isHost && race.closeAt == null) race.closeAt = performance.now() + 45000;
  } else if (car === me) { flash(`🏁 Terminaste P${standings().indexOf(me) + 1}`, 'gold', 3500); }
}
function hostCheckEnd(now) {
  if (!isHost || !race || race.done) return;
  const humans = cars.filter(c => !c.bot), bots = cars.filter(c => c.bot);
  const humansDone = humans.every(c => c.finTime != null);
  if (humansDone && race.lastHuman == null) race.lastHuman = now;
  if (humans.length && !humansDone) race.lastHuman = null;
  const anyFin = Object.keys(race.finishes).length > 0;
  const botsDone = bots.every(c => c.finTime != null);
  if ((anyFin && humansDone && (botsDone || now - race.lastHuman > 8000)) || (race.closeAt && now > race.closeAt)) finishRace();
}
function finishRace() {
  race.done = true;
  const st = standings();
  const lead = st[0];
  const rows = st.map(car => {
    let res;
    if (car.finTime != null) res = car === lead ? fmt(adjTime(car)) : '+' + (adjTime(car) - adjTime(lead)).toFixed(3);
    else { const down = Math.max(1, Math.ceil(((lead.c.prog || 0) - (car.c.prog || 0)) / T.L)); res = '+' + down + (down === 1 ? ' vuelta' : ' vueltas'); }
    return { id: car.id, name: car.name, liv: car.liv, num: car.num, bot: car.bot, res, best: car.best, pen: car.pen || 0 };
  });
  const msg = { rows, fastest: race.fastest };
  if (online) Arcade.send('res', msg);
  showResults(msg);
  const w = rows[0];
  const winners = w && !w.bot ? [w.id] : [];
  setTimeout(() => Arcade.end({ winners, text: w ? (w.bot ? `🏁 Ganó ${w.name} (bot) en ${T.def.name}` : `🏁 ${w.name} ganó en ${T.def.name}`) : '' }), 12000);
}
function showResults(msg) {
  phase = 'done';
  if (race) race.done = true;
  $('rsTable').innerHTML = msg.rows.map((r, k) => {
    const L = LIVERIES[r.liv], fl = msg.fastest && msg.fastest.id === r.id;
    return `<tr class="p${k + 1} ${r.id === myId ? 'me' : ''}" style="--c1:${L.c1}"><td>${k + 1}</td><td class="nm"><i></i>${esc(r.name)}${r.bot ? ' 🤖' : ''} <small style="color:#888">#${r.num}</small>${r.pen ? ` <em class="penT">+${r.pen} s</em>` : ''}</td><td class="t">${r.res}</td><td class="b ${fl ? 'fl' : ''}">${r.best != null ? (fl ? '🟣 ' : '') + fmt(r.best) : ''}</td></tr>`;
  }).join('');
  $('results').hidden = false;
  let n = 12; $('rsCount').textContent = `Volviendo al menú en ${n}…`;
  clearInterval(showResults.iv);
  showResults.iv = setInterval(() => { n--; $('rsCount').textContent = n > 0 ? `Volviendo al menú en ${n}…` : 'Volviendo al menú…'; if (n <= 0) clearInterval(showResults.iv); }, 1000);
}

function resetCar(car) { respawnCar(car); }
function resetCarOld(car) {
  const c = car.c, s = c.ts;
  const [x, z] = pointAt(T, s, Math.max(-T.hw + 2, Math.min(T.hw - 2, at(T, T.line, s))));
  c.x = x; c.z = z; c.h = headingAt(T, s);
  c.vx = 4; c.vy = 0; c.r = 0; c.steer = 0; c.gear = 1; c.tcCut = 1;
  for (let i = 0; i < 4; i++) c.w[i] = 4 / CAR.R;
  car.ghost = 2.5; car.stuck = 0;
  trackInfo(T, c);
}
function carAhead(car) {
  let best = null;
  for (const o of cars) {
    if (o === car || o.pit) continue;
    const gap = (o.c.prog || 0) - (car.c.prog || 0);
    if (gap > 0 && (!best || gap < best.gap)) best = { car: o, gap };
  }
  if (!best) return null;
  best.gapT = best.gap / Math.max(10, car.c.vx);
  return best;
}

// ---------- Bucle ----------
let last = performance.now(), sendAcc = 0, lobbyAng = 0, crowdT = 0;
const tmpM = new THREE.Matrix4();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (!world) return;
  if (phase === 'lobby' || phase === 'boot') { lobbyView(dt); render(); return; }
  if (phase === 'grid') {
    const el = now - race.start;
    const n = Math.max(0, Math.min(5, Math.floor(el / 1000)));
    if (n !== race.lights) { race.lights = n; world.setLights(n); [...$('lights').children].forEach((l, k) => l.classList.toggle('on', k < n)); if (n > 0) Audio.blip('beep'); }
    if (now >= race.outAt) {
      phase = 'race'; race.t0 = now; world.setLights(0); $('lights').className = 'go'; Audio.blip('go');
      setTimeout(() => $('lights').classList.add('hide'), 1200);
      computeDrs();
    }
  }
  const racing = phase === 'race' || phase === 'done';
  const inp0 = readInput(dt);
  const rt = raceTime(now);
  for (const car of cars) {
    if (!car.own) continue;
    const c = car.c;
    if (car.pit && racing) { pitStep(car, dt); continue; }
    let inp;
    if (car === me && car.finTime == null && !AUTOPILOT) {
      inp = { thr: inp0.thr, brk: inp0.brk, steer: steerAngle(c, inp0.st, inp0.analog) };
      if (c.gear === -1) { const t = inp.thr; inp.thr = inp.brk; inp.brk = t; }
      else if (racing) c.bAssist = prefs.brakeA && c.vx > 15 && c.vx > Math.min(at(T, T.vsafe, c.ts + c.vx * 0.55), at(T, T.vsafe, c.ts + c.vx * 0.9) + 4) + 2;
    } else {
      if (!car.brain) car.brain = makeBrain(0.85);
      inp = drive(T, c, car.brain, cars.map(x => x.c), dt);
      if (car.finTime != null && !car.bot) inp.thr *= 0.6;
    }
    inp.dt = dt; inp.up = car === me && upPress; inp.down = car === me && downPress;
    if (!racing) { c.thr += (inp.thr - c.thr) * Math.min(1, dt * 10); c.rpm += ((4000 + c.thr * 7000) - c.rpm) * Math.min(1, dt * 8); continue; }
    car.drsAvail = false;
    c.gripX = car === me && admin('f1.grip') ? 1.75 : 1.3; c.arcade = !car.bot; // arcade: más agarre para todos, ayuda de derrape para los humanos
    if (car === me) { c.dmgScale = admin('f1.god') ? 0 : 1; if (admin('f1.ghost')) car.ghost = Math.max(car.ghost, 0.15); }
    if (car.bot && car.brain) car.brain.slow = slowBots ? 0.72 : 1;
    if (car === me && admin('f1.drs') && car.finTime == null) { car.drsAvail = true; }
    else if (race.laps > 1 && (c.lap || 0) >= 2 && car.finTime == null) {
      for (const z of drsZones) {
        if (Math.abs(sAbs(c.ts) - z.det) < 25 && car.drsZone !== z) { car.drsZone = null; const ahead = carAhead(car); if (ahead && ahead.gapT < 1.0) car.drsZone = z; }
        if (car.drsZone === z && inRange(sAbs(c.ts), z.a, z.b)) car.drsAvail = true;
      }
    }
    if (car.drsAvail && c.dmg[3] < 1 && ((car === me && drsPress) || (car.bot && c.thr > 0.95))) c.drs = true;
    if (!car.drsAvail || c.brk > 0.1) c.drs = false;
    let tow = 0;
    for (const o of cars) {
      if (o === car || o.pit) continue;
      const gap = (o.c.prog || 0) - (c.prog || 0);
      if (gap > 0 && gap < 45 && Math.abs((o.c.td || 0) - (c.td || 0)) < 2.2) tow = Math.max(tow, 1 - gap / 45);
    }
    c.tow += (tow - c.tow) * Math.min(1, dt * 3);
    const sh = gearbox(c, inp);
    if (sh && car === me) Audio.blip('shift');
    c.broke = null;
    const prevS = c.ts;
    const hit = simulate(T, c, inp, dt);
    if (hit > 4) {
      const lh = c.lastHit || c;
      sparks(lh.x, lh.z, Math.min(40, hit * 2 | 0)); car.hitT = now;
      if (car === me) { Audio.blip(hit > 14 ? 'crash' : 'hit'); shake = Math.min(1.4, hit * 0.06); }
    }
    if (c.broke && c.broke.length) onBroke(car, c.broke);
    if (progress(T, c)) onLapCross(car, now);
    sectorCheck(car, rt);
    trackLimits(car);
    if (car.boxReq && car.finTime == null) {
      const a = T.rel(prevS), b = T.rel(c.ts);
      if (a < T.pit.inS && b >= T.pit.inS && b - a < 50) goToPits(car, false);
    }
    if (car.ghost > 0) car.ghost -= dt;
    if (car.hitDebris > 0) car.hitDebris -= dt;
    {
      const human = car === me && !AUTOPILOT && car.finTime == null;
      car.stuck = (Math.abs(c.vx) < 2.5 || Math.abs(c.td) > T.hw + 8) ? car.stuck + dt : 0;
      const crit = c.dmg[4] >= 1 || c.dmg[5] >= 1 || c.dmg[6] >= 1 || c.dmg[7] >= 1 || c.dmg[2] >= 1;
      car.critT = crit ? (car.critT || 0) + dt : 0;
      if (car.critT > (human ? 2.5 : 1) || car.stuck > (human ? 6 : 3)) respawnCar(car);
    }
    if (car.slowT > 0) { car.slowT -= dt; c.powerF = 0.55; } else c.powerF = admin('f1.power') ? 1.6 : 1;
  }
  upPress = downPress = drsPress = false;
  for (const car of cars) if (!car.own) interpRemote(car, now, dt);
  if (racing) for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) {
    const a = cars[i], b = cars[j]; if (!a.own && !b.own) continue;
    if (a.ghost > 0 || b.ghost > 0 || a.pit || b.pit) continue;
    a.c.broke = null; b.c.broke = null;
    const imp = collideCars(a.c, b.c, a.own, b.own);
    if (imp > 3) {
      if (a === me || b === me) { Audio.blip(imp > 12 ? 'crash' : 'hit'); shake = Math.min(1, imp * 0.05); }
      sparks((a.c.x + b.c.x) / 2, (a.c.z + b.c.z) / 2, Math.min(30, imp * 2 | 0));
      for (const [x, y] of [[a, b], [b, a]]) if (x.own && !x.bot && imp > 9 && (x.c.prog || 0) < (y.c.prog || 0) - 1) addPenalty(x, 5, 'Provocar un choque');
    }
    for (const car of [a, b]) if (car.c.broke && car.c.broke.length) onBroke(car, car.c.broke);
  }
  for (const car of cars) {
    const ci = Math.floor((car.c.prog || 0) / 100);
    if (racing && car.cp[ci] == null && ci >= 0) car.cp[ci] = rt;
    if (car === me && me.curTrace && racing && !me.pit) { const k = Math.floor(sAbs(me.c.ts) / 50); if (me.curTrace[k] == null) me.curTrace[k] = rt - me.lapStart; }
  }
  sendAcc += dt;
  if (online && sendAcc >= 0.05) {
    sendAcc = 0;
    if (me && me.own) Arcade.send('p', stateArr(me), { volatile: true });
    if (isHost) { const b = cars.filter(c => c.bot).map(c => [c.id, ...stateArr(c)]); if (b.length) Arcade.send('b', b, { volatile: true }); }
  }
  hostCheckEnd(now);
  updateIncidents(now);
  let crewCar = null;
  for (const car of cars) {
    poseCar(car.mesh, car.c);
    const newly = damageVisual(car.mesh, car.c.dmg);
    for (const p of newly) spawnDebris(car, p);
    car.mesh.visible = !(car.ghost > 0.2 && !car.pit && (now / 120 | 0) % 2 === 0);
    car.mesh.userData.rain.material.emissiveIntensity = car.c.brk > 0.2 ? 4 : (car.c.dmg[10] > 0.5 || car.pit ? ((now / 250 | 0) % 2) * 3 : 0.6);
    if (racing && !car.pit) carFx(car, dt);
    if (car.pit && speed(car.c) < 0.5 && (!crewCar || car === me)) crewCar = car;
  }
  if (crewCar) {
    const cr = world.crew; cr.visible = true; cr.position.set(crewCar.c.x, 0, crewCar.c.z); cr.rotation.y = crewCar.c.h;
    cr.children.forEach((p, k) => { p.position.y = Math.abs(Math.sin(now / 140 + k)) * 0.08; });
  } else world.crew.visible = false;
  updateProps(world.props, cars, dt);
  debris.update(dt, cars);
  FX.update(dt);
  crowdT += dt;
  if (world.crowd && crowdT > 0.08) {
    crowdT = 0; const cr = world.crowd, P = cr.userData.pos, t = now / 1000, ex = phase === 'done' ? 1 : 0.35;
    for (let k = 0; k < P.length; k++) { tmpM.makeTranslation(P[k][0], P[k][1] + Math.max(0, Math.sin(t * 7 + k * 1.7)) * 0.25 * ex, P[k][2]); cr.setMatrixAt(k, tmpM); }
    cr.instanceMatrix.needsUpdate = true;
  }
  const focus = me || standings()[0];
  if (focus) { updateCamera(focus, dt); world.followSun(focus.c.x, focus.c.z); }
  if (me && racing && me.finTime == null && !me.pit) {
    const i = me.c.ti ?? 0, fd = Math.sin(me.c.h) * T.tx[i] + Math.cos(me.c.h) * T.tz[i];
    me.wrongT = fd < -0.3 && speed(me.c) > 3 ? (me.wrongT || 0) + dt : 0;
    $('wrong').hidden = me.wrongT < 1;
  } else $('wrong').hidden = true;
  let near = null, nd = 1e9;
  for (const car of cars) if (car !== me) { const d = Math.hypot(car.c.x - camera.position.x, car.c.z - camera.position.z); if (d < nd) { nd = d; near = car.c; } }
  Audio.update(me ? me.c : null, near, nd);
  updateHUD(dt, now);
  mini.draw();
  render();
}
function onBroke(car, parts) {
  if (car === me) for (const p of parts) flash(`💥 ${PARTS[p]} ${p >= 4 && p <= 7 ? '— perdiste la rueda' : 'roto'}`, 'red', 2200);
  const newly = damageVisual(car.mesh, car.c.dmg);
  for (const p of newly) spawnDebris(car, p);
}
function spawnDebris(car, p) {
  const obj = car.mesh.userData.parts[p]; if (!obj) return;
  obj.visible = true;
  debris.spawn(car.mesh, obj, car.c);
  obj.visible = false;
  sparks(car.c.x, car.c.z, 10);
}
function lobbyView(dt) {
  lobbyAng += dt * 0.12;
  if (!previewMesh && T) {
    previewMesh = makeCarMesh(prefs.liv, prefs.num);
    const sl = gridSlot(T, 0), [x, z] = pointAt(T, sl.s + 6, 0);
    previewMesh.position.set(x, 0, z); previewMesh.rotation.y = headingAt(T, sl.s);
    world.scene.add(previewMesh);
  }
  if (previewMesh) {
    const p = previewMesh.position;
    camera.position.set(p.x + Math.cos(lobbyAng) * 7.5, 2.3, p.z + Math.sin(lobbyAng) * 7.5);
    camera.fov = 50; camera.updateProjectionMatrix();
    camera.lookAt(p.x, 0.5, p.z);
    world.followSun(p.x, p.z);
  }
}

// ---------- Red ----------
function wireNet() {
  Arcade.on('lobby', L => { lobbyReceived = true; if (isHost || phase !== 'lobby') return; lobby = L; renderLobby(); });
  Arcade.on('car', (e, from) => {
    if (!isHost || phase !== 'lobby' || !e) return;
    lobby.cars[from] = { liv: Math.max(0, Math.min(9, e.liv | 0)), num: Math.max(1, Math.min(99, e.num | 0)), ready: !!e.ready };
    hostChanged();
  });
  Arcade.on('hi', (e, from) => {
    if (!isHost) return;
    if (e && e.car) lobby.cars[from] = { liv: Math.max(0, Math.min(9, e.car.liv | 0)), num: Math.max(1, Math.min(99, e.car.num | 0)), ready: false };
    if (phase === 'lobby') hostChanged();
    else if (race && race.grid) Arcade.send('start', { track: trackIdx, laps: race.laps, grid: race.grid, out: 0, late: true }, { to: from });
  });
  Arcade.on('start', m => { if (isHost && !m.late) return; beginRace(m, !!m.late); });
  Arcade.on('p', (a, from) => { const car = cars.find(c => c.id === from); if (car && !car.own) pushSnap(car, a, performance.now()); });
  Arcade.on('b', list => { if (isHost) return; const now = performance.now(); for (const a of list) { const car = cars.find(c => c.id === a[0]); if (car && !car.own) pushSnap(car, a.slice(1), now); } });
  Arcade.on('lap', ev => { if (race) onLapEvent(ev); });
  Arcade.on('sec', ev => { if (race && (race.bestSec[ev.k] == null || ev.t < race.bestSec[ev.k])) race.bestSec[ev.k] = ev.t; });
  Arcade.on('pen', ev => { const car = cars.find(c => c.id === ev.id); if (car) car.pen = ev.pen; });
  Arcade.on('pit', ev => { const car = cars.find(c => c.id === ev.id); if (car && !car.own) car.snaps.length = 0; });
  Arcade.on('fin', fe => { if (race) onFinish(fe); });
  Arcade.on('res', msg => { if (!isHost) showResults(msg); });
  Arcade.onPlayerLeft(id => {
    players = players.filter(p => p.id !== id);
    delete lobby.cars[id];
    const car = cars.find(c => c.id === id);
    if (car) { world.scene.remove(car.mesh); cars = cars.filter(c => c !== car); flash(`${car.name} abandonó`, '', 1800); }
    if (phase === 'lobby') { if (isHost) hostChanged(); else renderLobby(); }
  });
  Arcade.onHostChanged(() => {
    const was = isHost; isHost = Arcade.isHost();
    if (!was && isHost) {
      for (const car of cars) if (car.bot) {
        car.own = true; car.brain = makeBrain(car.skill || 0.92); car.pit = null;
        const s = car.snaps[car.snaps.length - 1];
        if (s) { Object.assign(car.c, { x: s.x, z: s.z, h: s.h, vx: s.vx, vy: s.vy, lap: s.lap, prog: s.prog }); trackInfo(T, car.c); car.c.prevS = car.c.ts; car.c.half = false; }
      }
      if (phase === 'lobby') hostChanged();
      if (race && !race.done && Object.keys(race.finishes).length && race.closeAt == null) race.closeAt = performance.now() + 30000;
    }
  });
}

// ---------- Inicio ----------
let lobbyReceived = false;
// ---------- Modo admin (panel F7 de la plataforma) ----------
function setupAdmin() {
  if (!Arcade.admin) return;
  Arcade.admin.define([
    { id: 'f1.power', label: 'Motor turbo (+60 % potencia)', type: 'toggle' },
    { id: 'f1.grip', label: 'Súper agarre', type: 'toggle' },
    { id: 'f1.god', label: 'Indestructible (sin daño)', type: 'toggle' },
    { id: 'f1.ghost', label: 'Fantasma (atravesás autos)', type: 'toggle' },
    { id: 'f1.drs', label: 'DRS en cualquier lado (Espacio)', type: 'toggle' },
    { id: 'f1.slow', label: 'Bots lentos', type: 'toggle', desc: 'Lo aplica el host' },
    { id: 'f1.lead', label: '🚀 Pasar al primer puesto', type: 'button' },
    { id: 'f1.fix', label: '🔧 Reparar el auto', type: 'button' },
    { id: 'f1.finish', label: '🏁 Cruzar la meta ya', type: 'button' },
  ]);
  const setSlow = v => { if (isHost) slowBots = !!v; else Arcade.send('admReq', { k: 'slow', v: !!v }); };
  Arcade.admin.on('f1.slow', setSlow);
  Arcade.admin.on('f1.fix', () => { if (!me) return; repair(me.c); resetDamageVisual(me.mesh); flash('🔧 Auto reparado', 'green', 1200); });
  Arcade.admin.on('f1.lead', () => {
    if (!me || phase !== 'race' || me.finTime != null) return;
    const lead = standings().find(c => c !== me && c.finTime == null);
    if (!lead) return;
    const c = me.c, s = lead.c.ts + 35;
    const [x, z] = pointAt(T, s, at(T, T.line, s));
    Object.assign(c, { x, z, h: headingAt(T, s), vx: Math.max(30, lead.c.vx), vy: 0, r: 0 });
    for (let i = 0; i < 4; i++) c.w[i] = c.vx / CAR.R;
    trackInfo(T, c); c.lap = lead.c.lap + (sAbs(lead.c.ts) > sAbs(s) ? 1 : 0); c.prevS = c.ts; c.half = sAbs(s) > T.L / 2; c.prog = (c.lap - 1) * T.L + c.ts;
    me.ghost = 1.5; flash('🚀 ¡Primero!', 'gold', 1200);
  });
  Arcade.admin.on('f1.finish', () => {
    if (!me || phase !== 'race' || me.finTime != null) return;
    const c = me.c, s = T.L - 40;
    const [x, z] = pointAt(T, s, 0);
    Object.assign(c, { x, z, h: headingAt(T, s), vx: 60, vy: 0, r: 0 });
    for (let i = 0; i < 4; i++) c.w[i] = c.vx / CAR.R;
    trackInfo(T, c); c.lap = race.laps; c.half = true; c.prevS = c.ts; me.ghost = 1;
  });
  Arcade.on('admReq', (d, from, meta) => { if (isHost && meta && meta.admin && d && d.k === 'slow') slowBots = !!d.v; });
  if (Arcade.admin.get('f1.slow')) setSlow(true);
}

Arcade.ready().then(ctx => {
  setupAdmin();
  online = !!ctx.online; myId = ctx.me.id; isHost = online ? !!ctx.isHost : true;
  players = ctx.players && ctx.players.length ? ctx.players.slice() : [{ id: myId, name: ctx.me.name || 'Vos' }];
  lobby.cars[myId] = { liv: prefs.liv, num: prefs.num, ready: false };
  lobby.bots = Math.max(0, Math.min(8 - players.length, online ? 6 - players.length : 5));
  buildLobbyUI();
  phase = 'lobby';
  loadTrack(lobby.track);
  $('lobby').hidden = false;
  renderLobby();
  wireNet();
  if (online && !isHost) {
    const hi = () => Arcade.send('hi', { car: myEntry() }, { to: ctx.hostId });
    hi(); let n = 0; const iv = setInterval(() => { if (phase !== 'lobby' || ++n > 6) clearInterval(iv); else if (!lobbyReceived) hi(); }, 1500);
  }
  setTimeout(() => $('loading').classList.add('out'), 200);
  requestAnimationFrame(frame);
  window.__f1 = {
    get cars() { return cars; }, get me() { return me; }, get race() { return race; }, get T() { return T; },
    place(s, v, off = 0) { const c = me.c, [x, z] = pointAt(T, s, off); Object.assign(c, { x, z, h: headingAt(T, s), vx: v, vy: 0, r: 0 }); for (let i = 0; i < 4; i++) c.w[i] = v / CAR.R; c.gear = 6; c.ti = -1; trackInfo(T, c); c.prevS = c.ts; },
    rescue: () => rescueMe(), box: () => requestBox(),
  };
});
