// F1 Clash — carreras de fórmula con física realista para ClaudeArcade.
// Red: cada jugador simula su propio auto; el host simula los bots y decide el resultado.
import * as THREE from 'three';
import { TRACKS } from './tracks.js';
import { buildTrack, locate, at, pointAt } from './track.js';
import { CAR, makeCar, gearbox, steerLimit, speed } from './physics.js';
import { simulate, trackInfo, progress, collideCars, gridSlot, updateSurface } from './world.js';
import { drive, makeBrain } from './ai.js';
import { buildScene } from './scene.js';
import { makeCarMesh, poseCar, LIVERIES } from './car3d.js';
import { Audio } from './audio.js';

const $ = id => document.getElementById(id);
function store0(k) { try { return !!localStorage.getItem(k); } catch { return false; } }
const IS_TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (IS_TOUCH) document.body.classList.add('touch');
const AUTOPILOT = store0('f1:autopilot');
const DIFF = [{ n: 'Fácil', k: 0.87 }, { n: 'Normal', k: 0.925 }, { n: 'Difícil', k: 0.97 }];
const LAPS = [1, 3, 5, 8];
const BOT_NAMES = ['Rossetti', 'Lindqvist', 'Okafor', 'Tanaka', 'Moreau', 'Duarte', 'Kowalski', 'Hayes', 'Navarro', 'Brandt', 'Ferreira', 'Sato'];
const fmt = t => { if (t == null || !isFinite(t)) return '—'; const m = Math.floor(t / 60), s = t - m * 60; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(3); };
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } } };

const prefs = Object.assign({ liv: Math.floor(Math.random() * 10), num: 2 + Math.floor(Math.random() * 97), auto: true, abs: true, tc: true, steer: true, line: false, cam: 0 }, store.get('f1:prefs', {}));
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
function resize() { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

// ---------- Estado ----------
let myId = 'local', online = false, isHost = true, players = [];
let phase = 'boot'; // lobby | grid | race | done
let T = null, world = null, trackIdx = -1;
const built = {};
let lobby = { track: 0, laps: 3, bots: 5, diff: 1, cars: {} };
let cars = []; // autos en carrera
let me = null; // mi auto
let race = null; // { laps, t0 (ms), outAt, lights, fastest, finishes, closeAt }
let lineMesh = null, previewMesh = null;

function getTrack(i) { if (!built[i]) built[i] = buildTrack(TRACKS[i]); return built[i]; }
function disposeScene(s) { s.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); }); }
function loadTrack(i) {
  if (trackIdx === i && world) return;
  if (world) disposeScene(world.scene);
  trackIdx = i; T = getTrack(i); world = buildScene(T, renderer);
  lineMesh = null; previewMesh = null;
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
  if (e.code === 'KeyR' && phase === 'race') resetMe();
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
$('tReset').addEventListener('pointerdown', e => { e.preventDefault(); if (phase === 'race') resetMe(); });
$('camBtn').addEventListener('click', () => cycleCam());
$('muteBtn').addEventListener('click', () => toggleMute());
function toggleMute() { Audio.init(); $('muteBtn').textContent = Audio.toggle() ? '🔇' : '🔊'; }

let ks = 0; // dirección de teclado -1..1 (positivo = izquierda)
let padPrev = {};
function readInput(dt) {
  let thr = 0, brk = 0, st = 0, analog = false;
  if (keys.KeyW || keys.ArrowUp || touch.gas) thr = 1;
  if (keys.KeyS || keys.ArrowDown || touch.brk) brk = 1;
  const left = keys.KeyA || keys.ArrowLeft || touch.l, right = keys.KeyD || keys.ArrowRight || touch.r;
  const want = (left ? 1 : 0) - (right ? 1 : 0);
  const rate = want === 0 || Math.sign(want) !== Math.sign(ks) ? 7 : 3.2;
  ks += Math.max(-rate * dt, Math.min(rate * dt, want - ks));
  st = ks;
  // joystick
  const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g && g.connected) : null;
  if (gp) {
    const ax = gp.axes[0] || 0;
    if (Math.abs(ax) > 0.08) { st = -Math.sign(ax) * Math.pow((Math.abs(ax) - 0.08) / 0.92, 1.6); analog = true; }
    const rt = gp.buttons[7] ? gp.buttons[7].value : 0, lt = gp.buttons[6] ? gp.buttons[6].value : 0;
    if (rt > 0.03) thr = Math.max(thr, rt); if (lt > 0.03) brk = Math.max(brk, lt);
    if (gp.buttons[0] && gp.buttons[0].value > 0.03) thr = Math.max(thr, gp.buttons[0].value);
    const pressed = i => gp.buttons[i] && gp.buttons[i].pressed && !padPrev[i];
    if (pressed(5)) upPress = true; if (pressed(4)) downPress = true; if (pressed(2)) drsPress = true;
    if (pressed(3)) cycleCam(); if (pressed(8) && phase === 'race') resetMe();
    padPrev = {}; gp.buttons.forEach((b, i) => padPrev[i] = b.pressed);
  }
  return { thr, brk, st, analog };
}
function steerAngle(c, st, analog) {
  const v = Math.max(0, c.vx);
  if (prefs.steer) {
    let a = st * steerLimit(v) * (analog ? 1.15 : 1);
    if (v > 5) a += Math.max(-0.12, Math.min(0.12, Math.atan2(c.vy, v) * 0.7)); // contravolante
    return a;
  }
  return st * CAR.maxSteer / (1 + v / (analog ? 60 : 40));
}

// ---------- Cámara ----------
const CAMS = ['Persecución', 'Persecución lejana', 'Sobre el casco', 'Cockpit'];
let camMode = prefs.cam || 0, camYaw = 0, camPos = new THREE.Vector3(), camInit = false, shake = 0;
function cycleCam() { camMode = (camMode + 1) % CAMS.length; prefs.cam = camMode; savePrefs(); flash('🎥 ' + CAMS[camMode], '', 900); }
function updateCamera(car, dt) {
  const c = car.c, v = speed(c);
  const fx = Math.sin(c.h), fz = Math.cos(c.h);
  shake = Math.max(0, shake - dt * 3);
  const kerb = c.surf && c.surf.some(s => s === 1) ? 0.6 : 0, off = c.surf && c.surf.some(s => s >= 2) ? 1 : 0;
  const sh = (shake + kerb * 0.04 * Math.min(1, v / 30) + off * 0.06 * Math.min(1, v / 20));
  const jx = (Math.random() - 0.5) * sh, jy = (Math.random() - 0.5) * sh;
  if (camMode >= 2) {
    const m = car.mesh; m.updateMatrixWorld();
    const local = camMode === 2 ? new THREE.Vector3(0, 1.22, -0.3) : new THREE.Vector3(0, 0.82, 0.1);
    const p = local.applyMatrix4(m.matrixWorld);
    camera.position.set(p.x + jx * 0.3, p.y + jy * 0.3, p.z);
    const look = new THREE.Vector3(0, camMode === 2 ? 0.9 : 0.75, 12).applyMatrix4(m.matrixWorld);
    camera.lookAt(look);
    camera.fov = 72 + Math.min(10, v * 0.09);
  } else {
    const far = camMode === 1;
    // yaw sigue el rumbo con un poco de retraso (y la dirección de la velocidad al derrapar)
    let tgt = c.h;
    if (v > 6) { const wv = Math.atan2(fx * c.vx + Math.cos(c.h) * c.vy, fz * c.vx - Math.sin(c.h) * c.vy); tgt = c.vx > 0 ? lerpAngle(c.h, wv, 0.35) : c.h; }
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

// ---------- Partículas (humo / polvo / chispas) ----------
const FX = (() => {
  const N = 260, geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), alpha = new Float32Array(N);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.setAttribute('size', new THREE.BufferAttribute(size, 1)); geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1));
  const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: tex }, scale: { value: 600 } }, transparent: true, depthWrite: false, vertexColors: true,
    vertexShader: 'attribute float size; attribute float alpha; varying vec3 vC; varying float vA; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = abs(size) * 3.0 * (600.0 / -mv.z); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }',
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
  const P = []; for (let i = 0; i < N; i++) P.push({ life: 0 });
  let k = 0;
  return {
    obj: pts,
    emit(x, y, z, vx, vy, vz, r, g, b, s, life, a = 0.4) { const p = P[k]; k = (k + 1) % N; Object.assign(p, { x, y, z, vx, vy, vz, r, g, b, s, life, max: life, a }); },
    update(dt) {
      for (let i = 0; i < N; i++) {
        const p = P[i];
        if (p.life > 0) { p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.vx *= 0.97; p.vz *= 0.97; p.vy += (p.g > 0.6 ? -9 : 0.4) * dt; }
        const a = Math.max(0, p.life / (p.max || 1));
        pos[i * 3] = p.x || 0; pos[i * 3 + 1] = p.life > 0 ? p.y : -999; pos[i * 3 + 2] = p.z || 0;
        col[i * 3] = p.r || 0; col[i * 3 + 1] = p.g || 0; col[i * 3 + 2] = p.b || 0;
        size[i] = p.life > 0 ? p.s * (1.8 - a * 0.8) : 0; alpha[i] = a * (p.a || 0.4);
      }
      geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true; geo.attributes.size.needsUpdate = true; geo.attributes.alpha.needsUpdate = true;
    },
  };
})();
function carFx(car, dt) {
  const c = car.c, v = speed(c);
  if (v < 3) return;
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  const WP = [[CAR.a, 0.8], [CAR.a, -0.8], [-CAR.b, 0.8], [-CAR.b, -0.8]];
  for (let i = 0; i < 4; i++) {
    const s = c.surf ? c.surf[i] : 0;
    const lock = c.kap && (c.kap[i] < -0.25 || c.kap[i] > 0.3 || (c.use && c.use[i] > 1.35));
    const dirt = s >= 2;
    if (!(lock || dirt) || Math.random() > (dirt ? 0.18 : 0.4) * dt * 60) continue;
    const x = c.x + fx * WP[i][0] + lx * WP[i][1], z = c.z + fz * WP[i][0] + lz * WP[i][1];
    if (dirt) FX.emit(x, 0.3, z, (Math.random() - 0.5) * 3 + fx * v * 0.2, 1 + Math.random(), (Math.random() - 0.5) * 3 + fz * v * 0.2, s === 3 ? 0.78 : 0.45, s === 3 ? 0.66 : 0.4, s === 3 ? 0.5 : 0.25, 0.8, 0.9, 0.3);
    else FX.emit(x, 0.3, z, (Math.random() - 0.5) * 2, 0.8 + Math.random(), (Math.random() - 0.5) * 2, 0.85, 0.85, 0.88, 1.0, 1.4, 0.35);
  }
}
function sparks(c, n) {
  for (let i = 0; i < n; i++) FX.emit(c.x, 0.3, c.z, (Math.random() - 0.5) * 12, 2 + Math.random() * 4, (Math.random() - 0.5) * 12, 1, 0.75, 0.2, 0.3, 0.5, 1);
}

// ---------- HUD ----------
for (let i = 0; i < 15; i++) { const l = document.createElement('i'); l.className = i < 5 ? 'g' : i < 10 ? 'r' : 'b'; $('leds').appendChild(l); }
let msgTimer = 0;
function flash(text, cls = '', ms = 1800) {
  const m = $('msg'); m.textContent = text; m.className = 'show ' + cls;
  clearTimeout(msgTimer); msgTimer = setTimeout(() => m.className = cls, ms);
}
function hint(text, ms = 9000) { const h = $('hint'); h.textContent = text; h.classList.remove('out'); setTimeout(() => h.classList.add('out'), ms); }

function standings() {
  const arr = cars.slice();
  arr.sort((a, b) => {
    if (a.finTime != null || b.finTime != null) {
      if (a.finTime != null && b.finTime != null) return a.finTime - b.finTime;
      return a.finTime != null ? -1 : 1;
    }
    return (b.c.prog ?? -1e9) - (a.c.prog ?? -1e9);
  });
  return arr;
}
let towerTick = 0;
function updateHUD(dt, now) {
  const c = me ? me.c : null;
  const rt = raceTime(now);
  // tablero
  if (c) {
    const kmh = Math.round(Math.abs(c.vx) * 3.6);
    $('spd').textContent = kmh;
    $('gear').textContent = c.gear === -1 ? 'R' : c.gear === 0 ? 'N' : c.gear;
    const leds = $('leds').children, f = Math.max(0, Math.min(1, (c.rpm - 9000) / (CAR.upRpm - 9000)));
    const n = Math.round(f * 15);
    for (let i = 0; i < 15; i++) leds[i].classList.toggle('on', i < n);
    $('leds').classList.toggle('flash', !c.assist.auto && c.rpm > CAR.upRpm + 100 && (now / 80 | 0) % 2 === 0);
    $('pThr').style.setProperty('--v', c.thr.toFixed(2)); $('pBrk').style.setProperty('--v', c.brk.toFixed(2));
    $('drs').className = c.drs ? 'on' : me.drsAvail ? 'avail' : '';
    $('tDrs').classList.toggle('avail', !!me.drsAvail);
    $('tow').className = c.tow > 0.15 ? 'on' : '';
  }
  // vuelta y reloj
  if (race && me) {
    const lapNow = Math.max(1, Math.min(race.laps, (me.c.lap || 0)));
    $('lapN').textContent = (me.finTime != null ? race.laps : lapNow) + '/' + race.laps;
    const cur = phase === 'race' && me.finTime == null && rt > 0 ? rt - me.lapStart : (me.finTime != null ? me.finTime : 0);
    $('clock').textContent = me.finTime != null ? fmt(me.finTime) : fmt(Math.max(0, cur));
    $('tLast').textContent = fmt(me.last);
    const tb = $('tBest'); tb.textContent = fmt(me.best); tb.className = me.best != null && race.fastest && race.fastest.id === me.id ? 'pb' : '';
    // delta contra la mejor vuelta (por distancia)
    const dEl = $('tDelta');
    if (me.bestTrace && me.curTrace && me.c.lap >= 2 && me.finTime == null) {
      const k = Math.floor(((me.c.ts % T.L) + T.L) % T.L / 50);
      const a = me.curTrace[k], b = me.bestTrace[k];
      if (a != null && b != null) { const d = a - b; dEl.textContent = (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(2); dEl.className = d < 0 ? 'neg' : 'pos'; }
    } else { dEl.textContent = '—'; dEl.className = ''; }
  }
  // torre de tiempos (4 veces por segundo)
  towerTick -= dt;
  if (towerTick <= 0 && race) {
    towerTick = 0.25;
    const st = standings(), lead = st[0];
    let h = `<div class="th"><span>${T.def.name.toUpperCase()}</span><span>${phase === 'grid' ? 'LARGADA' : 'V' + Math.max(1, Math.min(race.laps, lead ? lead.c.lap || 1 : 1))}</span></div>`;
    st.forEach((car, k) => {
      let g = '';
      if (k === 0) g = car.finTime != null ? '🏁' : 'Líder';
      else if (car.finTime != null && lead.finTime != null) g = '+' + (car.finTime - lead.finTime).toFixed(3);
      else if (lead.c.prog - car.c.prog > T.L) g = '+' + Math.floor((lead.c.prog - car.c.prog) / T.L) + ' V';
      else {
        const ci = Math.floor((car.c.prog || 0) / 100);
        const a = car.cp[ci], b = lead.cp[ci];
        g = a != null && b != null ? '+' + Math.max(0, a - b).toFixed(1) : '';
      }
      const L = LIVERIES[car.liv];
      h += `<div class="tr ${car === me ? 'me' : ''} ${car.finTime != null ? 'fin' : ''}" style="--c1:${L.c1}"><span class="p">${k + 1}</span><span class="bar"></span><span class="n">${car.abbr}</span><span class="g">${g}</span></div>`;
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
  const as = { aAuto: 'auto', aAbs: 'abs', aTc: 'tc', aSteer: 'steer', aLine: 'line' };
  for (const [id, k] of Object.entries(as)) { const el = $(id); el.checked = !!prefs[k]; el.onchange = () => { prefs[k] = el.checked; savePrefs(); }; }
  if (IS_TOUCH) { $('aAuto').checked = true; $('aAuto').disabled = true; }
  $('goBtn').onclick = onGo;
}
function humanCount() { return players.length; }
function myEntry() { return { liv: prefs.liv, num: prefs.num, ready: !!(lobby.cars[myId] && lobby.cars[myId].ready) }; }
function myCarChanged() {
  const e = myEntry(); lobby.cars[myId] = e;
  if (isHost) hostChanged(); else { Arcade.send('car', e, { to: Arcade.ctx.hostId }); renderLobby(); }
  previewMesh = null;
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
  // pilotos
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
    go.disabled = waiting.length > 0;
    go.className = 'go';
    go.textContent = waiting.length ? `ESPERANDO A ${waiting.length}…` : players.length + lobby.bots < 1 ? 'LARGAR' : '🏁 LARGAR CARRERA';
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
  world.scene.add(FX.obj);
  const now = performance.now();
  race = { laps: msg.laps, start: now, outAt: now + 5000 + msg.out, t0: null, lights: 0, fastest: null, finishes: {}, closeAt: null, done: false, grid: msg.grid };
  msg.grid.forEach((g, k) => {
    const slot = gridSlot(T, k), [x, z] = pointAt(T, slot.s, slot.off);
    const c = makeCar(x, z, Math.atan2(at(T, T.tx, slot.s), at(T, T.tz, slot.s)));
    trackInfo(T, c); c.lap = 0; c.prevS = c.ts; c.half = false; c.gridLap = true; c.prog = c.ts - T.L;
    for (let i = 0; i < 4; i++) c.w[i] = 0;
    const own = g.id === myId || (g.bot && isHost);
    if (g.id === myId) c.assist = { abs: prefs.abs, tc: prefs.tc, auto: prefs.auto || IS_TOUCH };
    const mesh = makeCarMesh(g.liv, g.num); world.scene.add(mesh);
    const car = { ...g, abbr: g.name.replace(/[^\p{L}\p{N}]/gu, '').slice(0, 3).toUpperCase() || 'P' + (k + 1), c, mesh, own, snaps: [], cp: {}, lapStart: 0, last: null, best: null, finTime: null, brain: g.bot ? makeBrain(g.skill || 0.92) : null, ghost: 0, stuck: 0, sendT: 0 };
    poseCar(mesh, c);
    cars.push(car);
    if (g.id === myId) me = car;
  });
  if (!cars.includes(me)) me = null;
  camInit = false;
  if (prefs.line && me) addLine();
  hint(IS_TOUCH ? 'Botones: ◀ ▶ doblar · ACEL / FRENO · DRS en las rectas' : 'W/S acelerar y frenar · A/D doblar · Espacio DRS · C cámara · R volver a pista');
  $('lights').className = ''; [...$('lights').children].forEach(l => l.className = '');
  world.setLights(0);
  if (late) { race.outAt = now; }
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

// zonas de DRS: rectas largas a fondo
let drsZones = [];
function computeDrs() {
  drsZones = [];
  const N = T.N; let start = -1;
  const full = i => T.vmax[i] >= 90;
  // empezar desde un punto que no sea a fondo para no partir una zona
  let o = 0; while (full(o) && o < N) o++;
  for (let k = 0; k <= N; k++) {
    const i = (o + k) % N;
    if (full(i) && k < N) { if (start < 0) start = o + k; }
    else if (start >= 0) {
      const len = (o + k - start) * T.ds;
      if (len > 380) drsZones.push({ a: (start * T.ds + 90) % T.L, b: ((o + k) * T.ds - 40) % T.L, det: ((start * T.ds - 160) % T.L + T.L) % T.L });
      start = -1;
    }
  }
}
const inRange = (s, a, b) => a <= b ? s >= a && s <= b : s >= a || s <= b;

function resetMe() {
  if (!me || me.finTime != null) return;
  resetCar(me);
  flash('↺ De vuelta a la pista', '', 1000);
}
function resetCar(car) {
  const c = car.c, s = c.ts;
  const [x, z] = pointAt(T, s, Math.max(-T.hw + 2, Math.min(T.hw - 2, at(T, T.line, s))));
  c.x = x; c.z = z; c.h = Math.atan2(at(T, T.tx, s), at(T, T.tz, s));
  c.vx = 4; c.vy = 0; c.r = 0; c.steer = 0; c.gear = 1; c.tcCut = 1;
  for (let i = 0; i < 4; i++) c.w[i] = 4 / CAR.R;
  car.ghost = 2.5; car.stuck = 0;
  trackInfo(T, c);
}

function stateArr(car) {
  const c = car.c, r2 = v => Math.round(v * 100) / 100;
  return [r2(c.x), r2(c.z), Math.round(c.h * 1000) / 1000, r2(c.vx), r2(c.vy), Math.round(c.steer * 1000) / 1000, Math.round(c.rpm), r2(c.thr), r2(c.brk), c.gear, r2(c.prog || 0), c.lap || 0, car.ghost > 0 ? 1 : 0];
}
function pushSnap(car, a, now) {
  car.snaps.push({ t: now, x: a[0], z: a[1], h: a[2], vx: a[3], vy: a[4], st: a[5], rpm: a[6], thr: a[7], brk: a[8], gear: a[9], prog: a[10], lap: a[11], ghost: a[12] });
  if (car.snaps.length > 30) car.snaps.shift();
}
function interpRemote(car, now, dt) {
  const S = car.snaps; if (!S.length) return;
  const rt = now - 110;
  let a = S[0], b = null;
  for (let i = S.length - 1; i >= 0; i--) if (S[i].t <= rt) { a = S[i]; b = S[i + 1] || null; break; }
  const c = car.c;
  if (b) {
    const f = (rt - a.t) / Math.max(1, b.t - a.t);
    c.x = a.x + (b.x - a.x) * f; c.z = a.z + (b.z - a.z) * f; c.h = lerpAngle(a.h, b.h, f);
    c.vx = a.vx + (b.vx - a.vx) * f; c.vy = a.vy + (b.vy - a.vy) * f;
  } else {
    a = S[S.length - 1]; const e = Math.min(0.25, (rt - a.t) / 1000);
    const fx = Math.sin(a.h), fz = Math.cos(a.h), lx = Math.cos(a.h), lz = -Math.sin(a.h);
    c.x = a.x + (a.vx * fx + a.vy * lx) * e; c.z = a.z + (a.vx * fz + a.vy * lz) * e; c.h = a.h; c.vx = a.vx; c.vy = a.vy;
  }
  c.steer = a.st; c.rpm = a.rpm; c.thr = a.thr; c.brk = a.brk; c.gear = a.gear; c.prog = (b || a).prog; c.lap = (b || a).lap;
  car.ghost = a.ghost ? 1 : 0;
  for (let i = 0; i < 4; i++) { c.w[i] = c.vx / CAR.R; c.rot[i] += c.w[i] * dt; }
  const L = trackInfo(T, c); updateSurface(T, c, L);
}

function onLapCross(car, now) {
  const c = car.c, rt = raceTime(now);
  if (c.lap >= 2) {
    const lt = rt - car.lapStart; car.lapStart = rt; car.last = lt;
    const pb = car.best == null || lt < car.best;
    if (pb) { car.best = lt; if (car === me) { me.bestTrace = me.curTrace; } }
    if (car === me) me.curTrace = [];
    const ev = { id: car.id, lap: c.lap, last: lt, best: car.best };
    if (online) Arcade.send('lap', ev);
    onLapEvent(ev);
    if (car === me) {
      const fastest = race.fastest && race.fastest.id === me.id && race.fastest.t === lt;
      if (c.lap > race.laps) { /* bandera */ }
      else if (fastest) flash('VUELTA RÁPIDA  ' + fmt(lt), 'purple', 2600);
      else if (pb) flash('MEJOR VUELTA PERSONAL  ' + fmt(lt), 'green', 2400);
      else flash(fmt(lt), '', 1800);
      if (c.lap === race.laps && race.laps > 1) setTimeout(() => flash('ÚLTIMA VUELTA', 'gold', 2000), 2700);
    }
    if (c.lap > race.laps && car.finTime == null) {
      car.finTime = rt;
      const fe = { id: car.id, time: rt, best: car.best };
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
  car.finTime = fe.time; car.best = fe.best ?? car.best;
  race.finishes[fe.id] = fe.time;
  const order = Object.keys(race.finishes).length;
  if (order === 1) {
    if (car === me) { flash('🏁 ¡GANASTE LA CARRERA!', 'gold', 4000); Audio.blip('fanfare'); }
    else flash(`🏁 ${car.name} gana la carrera`, 'gold', 3000);
    if (isHost && race.closeAt == null) race.closeAt = performance.now() + 45000;
  } else if (car === me) { flash(`🏁 Terminaste P${order}`, 'gold', 3500); }
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
    if (car.finTime != null) res = car === lead ? fmt(car.finTime) : '+' + (car.finTime - lead.finTime).toFixed(3);
    else { const down = Math.max(1, Math.ceil(((lead.c.prog || 0) - (car.c.prog || 0)) / T.L)); res = '+' + down + (down === 1 ? ' vuelta' : ' vueltas'); }
    return { id: car.id, name: car.name, liv: car.liv, num: car.num, bot: car.bot, res, best: car.best };
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
  const t = $('rsTable');
  t.innerHTML = msg.rows.map((r, k) => {
    const L = LIVERIES[r.liv], fl = msg.fastest && msg.fastest.id === r.id;
    return `<tr class="p${k + 1} ${r.id === myId ? 'me' : ''}" style="--c1:${L.c1}"><td>${k + 1}</td><td class="nm"><i></i>${esc(r.name)}${r.bot ? ' 🤖' : ''} <small style="color:#888">#${r.num}</small></td><td class="t">${r.res}</td><td class="b ${fl ? 'fl' : ''}">${r.best != null ? (fl ? '🟣 ' : '') + fmt(r.best) : ''}</td></tr>`;
  }).join('');
  $('results').hidden = false;
  let n = 12; $('rsCount').textContent = `Volviendo al menú en ${n}…`;
  clearInterval(showResults.iv);
  showResults.iv = setInterval(() => { n--; $('rsCount').textContent = n > 0 ? `Volviendo al menú en ${n}…` : 'Volviendo al menú…'; if (n <= 0) clearInterval(showResults.iv); }, 1000);
}

// ---------- Bucle ----------
let last = performance.now(), sendAcc = 0, lobbyAng = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (!world) return;
  if (phase === 'lobby' || phase === 'boot') { lobbyView(dt); renderer.render(world.scene, camera); return; }
  // semáforo
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
  // autos propios
  for (const car of cars) {
    if (!car.own) continue;
    const c = car.c;
    let inp;
    if (car === me && car.finTime == null && !AUTOPILOT) {
      inp = { thr: inp0.thr, brk: inp0.brk, steer: steerAngle(c, inp0.st, inp0.analog) };
      if (c.gear === -1) { const t = inp.thr; inp.thr = inp.brk; inp.brk = t; }
    } else {
      if (!car.brain) car.brain = makeBrain(0.85);
      inp = drive(T, c, car.brain, cars.map(x => x.c), dt);
      if (car.finTime != null && !car.bot) { inp.thr *= 0.6; }
    }
    inp.dt = dt; inp.up = car === me && upPress; inp.down = car === me && downPress;
    if (!racing) { // en la grilla: frenado, se puede acelerar en vacío
      c.thr += (inp.thr - c.thr) * Math.min(1, dt * 10); c.rpm += ((4000 + c.thr * 7000) - c.rpm) * Math.min(1, dt * 8); continue;
    }
    // DRS
    car.drsAvail = false;
    if (race.laps > 1 && (c.lap || 0) >= 2 && car.finTime == null) {
      for (const z of drsZones) {
        if (Math.abs(c.ts - z.det) < 25 && car.drsZone !== z) {
          car.drsZone = null;
          const ahead = carAhead(car);
          if (ahead && ahead.gapT < 1.0) car.drsZone = z;
        }
        if (car.drsZone === z && inRange(c.ts, z.a, z.b)) car.drsAvail = true;
      }
    }
    if (car.drsAvail && ((car === me && drsPress) || (car.bot && c.thr > 0.95))) c.drs = true;
    if (!car.drsAvail || c.brk > 0.1) { if (c.drs && car === me && !car.drsAvail) car.drsZone = null; c.drs = false; }
    // rebufo
    let tow = 0;
    for (const o of cars) {
      if (o === car) continue;
      let gap = (o.c.prog || 0) - (c.prog || 0);
      if (gap > 0 && gap < 45 && Math.abs((o.c.td || 0) - (c.td || 0)) < 2.2) tow = Math.max(tow, 1 - gap / 45);
    }
    c.tow += (tow - c.tow) * Math.min(1, dt * 3);
    const sh = gearbox(c, inp);
    if (sh && car === me) Audio.blip('shift');
    const hit = simulate(T, c, inp, dt);
    if (hit > 4) { sparks(c, Math.min(30, hit * 2 | 0)); if (car === me) { Audio.blip('hit'); shake = Math.min(1.2, hit * 0.05); } }
    if (progress(T, c)) onLapCross(car, now);
    // atascado (bots): volver a la pista
    if (car.ghost > 0) car.ghost -= dt;
    if (car !== me || car.finTime != null) {
      car.stuck = (Math.abs(c.vx) < 3 || Math.abs(c.td) > T.hw + 6) ? car.stuck + dt : 0;
      if (car.stuck > 3) resetCar(car);
    }
  }
  upPress = downPress = drsPress = false;
  // autos remotos
  for (const car of cars) if (!car.own) interpRemote(car, now, dt);
  // choques entre autos
  if (racing) for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) {
    const a = cars[i], b = cars[j]; if (!a.own && !b.own) continue;
    if (a.ghost > 0 || b.ghost > 0) continue;
    const imp = collideCars(a.c, b.c, a.own, b.own);
    if (imp > 3 && (a === me || b === me)) { Audio.blip('hit'); shake = Math.min(1, imp * 0.05); sparks(a === me ? a.c : b.c, 8); }
  }
  // tiempos por checkpoint (cada 100 m) para las diferencias
  const rt = raceTime(now);
  for (const car of cars) {
    const ci = Math.floor((car.c.prog || 0) / 100);
    if (racing && car.cp[ci] == null && ci >= 0) car.cp[ci] = rt;
    if (car === me && me.curTrace && racing) { const k = Math.floor(((me.c.ts % T.L) + T.L) % T.L / 50); if (me.curTrace[k] == null) me.curTrace[k] = rt - me.lapStart; }
  }
  // enviar estado (20 Hz)
  sendAcc += dt;
  if (online && sendAcc >= 0.05) {
    sendAcc = 0;
    if (me && me.own) Arcade.send('p', stateArr(me), { volatile: true });
    if (isHost) { const b = cars.filter(c => c.bot).map(c => [c.id, ...stateArr(c)]); if (b.length) Arcade.send('b', b, { volatile: true }); }
  }
  hostCheckEnd(now);
  // visual
  for (const car of cars) {
    poseCar(car.mesh, car.c);
    car.mesh.visible = !(car.ghost > 0 && (now / 120 | 0) % 2 === 0);
    car.mesh.userData.rain.material.emissiveIntensity = car.c.brk > 0.2 ? 2.5 : 0.4;
    if (racing) carFx(car, dt);
  }
  FX.update(dt);
  const focus = me || standings()[0];
  if (focus) { updateCamera(focus, dt); world.followSun(focus.c.x, focus.c.z); }
  // contramano
  if (me && racing && me.finTime == null) {
    const i = me.c.ti ?? 0, fd = Math.sin(me.c.h) * T.tx[i] + Math.cos(me.c.h) * T.tz[i];
    me.wrongT = fd < -0.3 && speed(me.c) > 3 ? (me.wrongT || 0) + dt : 0;
    $('wrong').hidden = me.wrongT < 1;
  } else $('wrong').hidden = true;
  // sonido: mi auto y el rival más cercano
  let near = null, nd = 1e9;
  for (const car of cars) if (car !== me) { const d = Math.hypot(car.c.x - camera.position.x, car.c.z - camera.position.z); if (d < nd) { nd = d; near = car.c; } }
  Audio.update(me ? me.c : null, near, nd);
  updateHUD(dt, now);
  mini.draw();
  renderer.render(world.scene, camera);
}
function carAhead(car) {
  let best = null;
  for (const o of cars) {
    if (o === car) continue;
    const gap = (o.c.prog || 0) - (car.c.prog || 0);
    if (gap > 0 && (!best || gap < best.gap)) best = { car: o, gap };
  }
  if (!best) return null;
  best.gapT = best.gap / Math.max(10, car.c.vx);
  return best;
}
function lobbyView(dt) {
  lobbyAng += dt * 0.12;
  if (!previewMesh && T) {
    previewMesh = makeCarMesh(prefs.liv, prefs.num);
    const sl = gridSlot(T, 0), [x, z] = pointAt(T, sl.s + 6, 0);
    previewMesh.position.set(x, 0, z); previewMesh.rotation.y = Math.atan2(at(T, T.tx, sl.s), at(T, T.tz, sl.s));
    world.scene.add(previewMesh);
    // eliminar previas
    world.scene.children.filter(o => o.userData && o.userData.preview && o !== previewMesh).forEach(o => world.scene.remove(o));
    previewMesh.userData.preview = true;
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
  Arcade.on('lobby', L => { if (isHost || phase !== 'lobby') return; lobby = L; renderLobby(); });
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
      // tomar los bots
      for (const car of cars) if (car.bot) {
        car.own = true; car.brain = makeBrain(car.skill || 0.92);
        const s = car.snaps[car.snaps.length - 1];
        if (s) { Object.assign(car.c, { x: s.x, z: s.z, h: s.h, vx: s.vx, vy: s.vy, lap: s.lap, prog: s.prog }); trackInfo(T, car.c); car.c.prevS = car.c.ts; car.c.half = false; }
      }
      if (phase === 'lobby') hostChanged();
      if (race && !race.done && Object.keys(race.finishes).length && race.closeAt == null) race.closeAt = performance.now() + 30000;
    }
  });
}

// ---------- Inicio ----------
Arcade.ready().then(ctx => {
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
    hi(); let n = 0; const iv = setInterval(() => { if (phase !== 'lobby' || ++n > 6) clearInterval(iv); else if (!Object.keys(lobbyReceived).length) hi(); }, 1500);
  }
  setTimeout(() => $('loading').classList.add('out'), 200);
  requestAnimationFrame(frame);
  window.__f1 = { get cars() { return cars; }, get me() { return me; }, get race() { return race; }, place(s, v, off = 0) { const c = me.c, [x, z] = pointAt(T, s, off); Object.assign(c, { x, z, h: Math.atan2(at(T, T.tx, s), at(T, T.tz, s)), vx: v, vy: 0, r: 0 }); for (let i = 0; i < 4; i++) c.w[i] = v / CAR.R; c.gear = 6; c.ti = -1; trackInfo(T, c); c.prevS = c.ts; } };
});
const lobbyReceived = {};
Arcade.on && Arcade.on('lobby', () => { lobbyReceived.ok = 1; });
