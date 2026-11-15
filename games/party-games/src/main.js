// Party Games — minijuegos 3D para 2 a 8 jugadores (ClaudeArcade)
// Red: cada jugador es dueño de su movimiento; el host controla rondas, eventos y puntajes.
import * as THREE from 'three';

const PREVIEW = new URLSearchParams(location.search).has('preview');
const FAST = (() => { try { return localStorage.getItem('pg:fast') === '1'; } catch { return false; } })();
const TS = FAST ? 0.2 : 1; // escala de tiempos (solo para pruebas)
const INTRO = 4.5 * TS;
const RESULTS = 6 * TS;
const PODIUM = 14;
const COLORS = [0xff4d6d, 0x4dabff, 0xffd43b, 0x51cf66, 0xb197fc, 0xff922b, 0x22d3ee, 0xf783ac];
const CSS_COLORS = COLORS.map(c => '#' + c.toString(16).padStart(6, '0'));
const ROUND_POINTS = [3, 2, 1];
const GRAV = -30, JUMP = 11.5, SPEED = 7.5;

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lerpAngle = (a, b, k) => { let d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI; return a + d * k; };
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---------------- Audio ----------------
let actx = null;
function beep(freq = 440, dur = 0.12, type = 'square', vol = 0.05) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
    o.connect(g).connect(actx.destination);
    o.start(); o.stop(actx.currentTime + dur);
  } catch { /* sin audio */ }
}

// ---------------- Render ----------------
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: PREVIEW });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const SKY = 0x9ad8ff;
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, 70, 190);
const camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 400);
scene.add(new THREE.HemisphereLight(0xffffff, 0x7a86a8, 1.15));
const sun = new THREE.DirectionalLight(0xffffff, 1.7);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 1, far: 140 });
sun.shadow.bias = -0.0005;
scene.add(sun, sun.target);

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const matCache = {};
const mat = c => (matCache[c] = matCache[c] || new THREE.MeshLambertMaterial({ color: c }));

// Decoración fija: nubes
(function clouds() {
  const cm = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xcfe9ff });
  for (let i = 0; i < 26; i++) {
    const g = new THREE.Group();
    const n = 3 + Math.floor(Math.random() * 3);
    for (let k = 0; k < n; k++) {
      const b = new THREE.Mesh(boxGeo, cm);
      b.scale.set(6 + Math.random() * 8, 2 + Math.random() * 2, 5 + Math.random() * 6);
      b.position.set(k * 5 - n * 2, Math.random() * 2, Math.random() * 4);
      g.add(b);
    }
    const a = Math.random() * Math.PI * 2, r = 90 + Math.random() * 60;
    g.position.set(Math.cos(a) * r, -25 + Math.random() * 70, Math.sin(a) * r + 40);
    scene.add(g);
  }
})();

// ---------------- Mundo y colisiones ----------------
let world = new THREE.Group();
scene.add(world);
let colliders = [];

function clearWorld() {
  scene.remove(world);
  world = new THREE.Group();
  scene.add(world);
  colliders = [];
}

function addBox(x, z, w, d, top, h, color, opts = {}) {
  const m = new THREE.Mesh(boxGeo, opts.material || mat(color));
  m.scale.set(w, h, d);
  m.position.set(x, top - h / 2, z);
  m.castShadow = !!opts.cast;
  m.receiveShadow = true;
  world.add(m);
  const col = { type: 'box', minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, top, bottom: top - h, off: false, mesh: m };
  if (!opts.noCollide) colliders.push(col);
  return col;
}

function addDisc(x, z, r, top, h, color) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 56), mat(color));
  m.position.set(x, top - h / 2, z);
  m.receiveShadow = true;
  world.add(m);
  const col = { type: 'circle', cx: x, cz: z, r, top, bottom: top - h, off: false, mesh: m };
  colliders.push(col);
  return col;
}

const inside = (c, x, z) => c.type === 'box'
  ? x >= c.minX && x <= c.maxX && z >= c.minZ && z <= c.maxZ
  : (x - c.cx) ** 2 + (z - c.cz) ** 2 <= c.r * c.r;

function groundAt(x, z, y) {
  let best = -Infinity;
  for (const c of colliders) {
    if (c.off || !inside(c, x, z)) continue;
    if (c.top <= y + 0.6 && c.top > best) best = c.top;
  }
  return best;
}
function blocked(x, z, y) {
  for (const c of colliders) {
    if (c.off || !inside(c, x, z)) continue;
    if (c.top > y + 0.6 && c.bottom < y + 1.7) return true;
  }
  return false;
}

function textTexture(text, { w = 256, h = 64, font = 'bold 34px system-ui, sans-serif', bg = 'rgba(0,0,0,.45)', fg = '#fff', radius = 18 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  x.font = font;
  if (bg) {
    const tw = Math.min(w - 4, x.measureText(text).width + 30);
    x.fillStyle = bg;
    x.beginPath();
    x.roundRect((w - tw) / 2, 4, tw, h - 8, radius);
    x.fill();
  }
  x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2 + 2);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------- Personajes ----------------
const faceTex = (() => {
  const c = document.createElement('canvas'); c.width = 16; c.height = 16;
  const x = c.getContext('2d');
  x.fillStyle = '#ffd6a5'; x.fillRect(0, 0, 16, 16);
  x.fillStyle = '#fff'; x.fillRect(3, 6, 4, 3); x.fillRect(9, 6, 4, 3);
  x.fillStyle = '#1b1b3a'; x.fillRect(5, 6, 2, 3); x.fillRect(9, 6, 2, 3);
  x.fillStyle = '#c2410c'; x.fillRect(6, 11, 4, 1);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

function makeAvatar(color, name) {
  const g = new THREE.Group();
  const shirt = new THREE.MeshLambertMaterial({ color });
  const skin = mat(0xffd6a5), pants = mat(0x2b2d42), hair = mat(0x5c3d2e);
  const limb = (w, h, d, m, x, y) => {
    const piv = new THREE.Group(); piv.position.set(x, y, 0);
    const b = new THREE.Mesh(boxGeo, m); b.scale.set(w, h, d); b.position.y = -h / 2; b.castShadow = true;
    piv.add(b); g.add(piv); return piv;
  };
  const legL = limb(0.3, 0.75, 0.3, pants, -0.16, 0.75);
  const legR = limb(0.3, 0.75, 0.3, pants, 0.16, 0.75);
  const body = new THREE.Mesh(boxGeo, shirt); body.scale.set(0.66, 0.8, 0.38); body.position.y = 1.15; body.castShadow = true; g.add(body);
  const armL = limb(0.22, 0.75, 0.22, shirt, -0.45, 1.53);
  const armR = limb(0.22, 0.75, 0.22, shirt, 0.45, 1.53);
  const faceMat = new THREE.MeshLambertMaterial({ map: faceTex });
  const head = new THREE.Mesh(boxGeo, [skin, skin, hair, skin, faceMat, hair]);
  head.scale.setScalar(0.6); head.position.y = 1.87; head.castShadow = true; g.add(head);
  const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTexture(name), transparent: true, depthWrite: false }));
  label.scale.set(2.2, 0.55, 1); label.position.y = 2.6; g.add(label);
  g.userData = { legL, legR, armL, armR, phase: 0 };
  scene.add(g);
  return g;
}

function animateAvatar(av, speed, dt, airborne) {
  const u = av.userData;
  u.phase += speed * dt * 2.3;
  const s = airborne ? 0.5 : Math.sin(u.phase) * 0.7 * Math.min(1, speed / 5);
  u.legL.rotation.x = s; u.legR.rotation.x = airborne ? -0.5 : -s;
  u.armL.rotation.x = airborne ? -2.6 : -s; u.armR.rotation.x = airborne ? -2.6 : s;
}

// ---------------- Estado ----------------
let myId = null;
const players = new Map(); // id -> { id, name, slot, avatar, pos, target, ry, curRy, moving }
const me = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), knock: new THREE.Vector3(), onGround: false, ry: 0, alive: true, frozen: true, finished: false, moving: false, coyote: 0, jumpReleased: true };
let round = null;     // ronda actual (todos)
let totals = {};      // puntos acumulados (último dato del host)
let podiumData = null;
const H = { started: false, ready: new Set(), t0: performance.now(), order: [], idx: -1, cur: null, nextAt: 0, endAt: 0 };

const isHost = () => Arcade.isHost();
const hostId = () => Arcade.ctx.hostId;
const nameOf = id => (players.get(id) || {}).name || '???';
const slotOf = id => (players.get(id) || {}).slot || 0;
const posOf = id => (id === myId ? me.pos : (players.get(id) || {}).target || new THREE.Vector3(0, -99, 0));
const roundIds = () => (round ? round.ids.filter(id => players.has(id)) : []);
const playing = () => round && round.phase === 'play';

function addPlayer(p) {
  const pl = { id: p.id, name: p.name, slot: p.slot, avatar: makeAvatar(COLORS[p.slot % 8], p.name), pos: new THREE.Vector3(), target: new THREE.Vector3(), ry: 0, curRy: 0, moving: 0 };
  players.set(p.id, pl);
}
function removePlayer(id) {
  const pl = players.get(id);
  if (!pl) return;
  scene.remove(pl.avatar);
  players.delete(id);
  feed(`👋 ${pl.name} se fue`);
  if (round && round.alive) round.alive.delete(id);
}

// ---------------- Red ----------------
function sendR(type, d = {}, opts) { d.ri = round.i; Arcade.send(type, d, opts); }
function sendMG(k, d = {}, opts) { d.k = k; sendR('mg', d, opts); }
function hostBroadcast(k, d = {}) { sendMG(k, { ...d }); round.mg.onMsg && round.mg.onMsg(k, d, myId); }
function toHost(k, d = {}) {
  if (isHost()) round.mg.onMsg && round.mg.onMsg(k, d, myId);
  else sendMG(k, { ...d }, { to: hostId() });
}

// ---------------- HUD ----------------
let bigT = 0;
function big(text, secs = 1.6, color = '#fff') { const b = $('big'); b.textContent = text; b.style.color = color; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); bigT = secs; }
function feed(text) {
  const el = document.createElement('div'); el.textContent = text;
  $('feed').prepend(el);
  while ($('feed').children.length > 6) $('feed').lastChild.remove();
  setTimeout(() => el.remove(), 5000);
}
function stars(n) { return n > 0 ? `${n} ⭐` : '0'; }
function renderBoard() {
  const ids = [...players.keys()].sort((a, b) => (totals[b] || 0) - (totals[a] || 0));
  $('board').innerHTML = '<b>Puntos</b>' + ids.map(id =>
    `<div class="row${id === myId ? ' me' : ''}"><i style="background:${CSS_COLORS[slotOf(id) % 8]}"></i><span>${esc(nameOf(id))}</span><em>${stars(totals[id] || 0)}</em></div>`).join('');
}

function eliminate(text) {
  if (!me.alive || !playing()) return;
  me.alive = false;
  big(text, 2.2, '#ff6b6b');
  beep(160, 0.45, 'sawtooth', 0.06);
  sendR('out');
  onOut(myId);
}
function onOut(id) {
  if (!round || !round.alive.has(id)) return;
  round.alive.delete(id);
  round.outOrder.push(id);
  const pl = players.get(id);
  if (pl) pl.avatar.visible = false;
  if (id !== myId) feed(`💀 ${nameOf(id)} quedó afuera`);
}
function respawnAt(v) { me.pos.copy(v); me.vel.set(0, 0, 0); me.knock.set(0, 0, 0); }

// Helpers que reciben los minijuegos
const G = {
  me, players, beep, big, feed, eliminate, respawnAt, hostBroadcast, toHost, nameOf, posOf, isHost, playing,
  addBox, addDisc, mat, textTexture, boxGeo,
  get world() { return world; },
  get round() { return round; },
  ids: roundIds,
  myId: () => myId,
  elimDone() { const n = roundIds().length; const a = roundIds().filter(id => round.alive.has(id)).length; return n >= 2 ? a <= 1 : a === 0; },
  elimRank() {
    const ids = roundIds();
    const alive = ids.filter(id => round.alive.has(id));
    const groups = alive.length ? [alive] : [];
    [...round.outOrder].reverse().filter(id => ids.includes(id)).forEach(id => groups.push([id]));
    ids.filter(id => !groups.flat().includes(id)).forEach(id => groups.push([id]));
    return groups;
  },
};

// ---------------- Minijuegos ----------------
function makeFinish(line) {
  const order = [];
  let sent = false;
  return {
    order,
    check() {
      if (!sent && me.alive && playing() && me.pos.z > line) {
        sent = true; me.finished = true;
        big('🏁 ¡Llegaste!', 2, '#ffd43b'); beep(880, 0.3, 'triangle', 0.07);
        toHost('fin');
      }
    },
    onMsg(k, d, from) {
      if (k === 'fin' && isHost() && !order.includes(from)) { order.push(from); hostBroadcast('fo', { o: order.slice() }); }
      else if (k === 'fo') {
        if (!isHost()) { order.length = 0; order.push(...d.o); }
        const id = d.o[d.o.length - 1];
        feed(`🏁 ${nameOf(id)} llegó ${d.o.length}º`);
      }
    },
    done: () => roundIds().every(id => order.includes(id)),
    rank() {
      const rest = roundIds().filter(id => !order.includes(id)).sort((a, b) => posOf(b).z - posOf(a).z);
      return [...order.filter(id => players.has(id)).map(id => [id]), ...rest.map(id => [id])];
    },
  };
}

// 1) Pisos que caen
function createPisos() {
  const N = 12, S = 2, layers = [0, -9];
  const palette = [[0x74c0fc, 0xa5d8ff], [0xffa94d, 0xffd8a8]];
  const warn = mat(0xff3b3b);
  const tiles = [];
  layers.forEach((top, li) => {
    for (let ix = 0; ix < N; ix++) for (let iz = 0; iz < N; iz++) {
      const x = (ix - (N - 1) / 2) * S, z = (iz - (N - 1) / 2) * S;
      tiles.push({ col: addBox(x, z, S - 0.1, S - 0.1, top, 0.6, palette[li][(ix + iz) % 2]), state: 0, t: 0 });
    }
  });
  const indexAt = p => {
    for (let li = 0; li < layers.length; li++) {
      if (Math.abs(p.y - layers[li]) > 0.35) continue;
      const ix = Math.round(p.x / S + (N - 1) / 2), iz = Math.round(p.z / S + (N - 1) / 2);
      if (ix >= 0 && iz >= 0 && ix < N && iz < N) return li * N * N + ix * N + iz;
    }
    return -1;
  };
  return {
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return new THREE.Vector3(Math.sin(a) * 6, 0, Math.cos(a) * 6); },
    update(dt) {
      for (const t of tiles) {
        if (t.state === 1) { t.t += dt; if (t.t > 0.55) { t.state = 2; t.t = 0; t.col.off = true; } }
        else if (t.state === 2) { t.t += dt; t.col.mesh.position.y -= dt * (3 + t.t * 25); if (t.t > 1.4) { t.state = 3; t.col.mesh.visible = false; } }
      }
      if (me.pos.y < -24) eliminate('¡Te caíste!');
    },
    hostUpdate() {
      for (const id of round.alive) {
        const i = indexAt(posOf(id));
        if (i >= 0 && tiles[i].state === 0) hostBroadcast('tf', { i });
      }
    },
    onMsg(k, d) {
      if (k !== 'tf') return;
      const t = tiles[d.i];
      if (t && t.state === 0) { t.state = 1; t.t = 0; t.col.mesh.material = warn; }
    },
    hostDone: () => G.elimDone(),
    hostRank: () => G.elimRank(),
  };
}

// 2) Lluvia de yunques
function createYunques() {
  const R = 13, FALL = 1.4;
  addDisc(0, 0, R, 0, 1.2, 0x8ce99a);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(R, 0.35, 8, 64), mat(0x2f9e44));
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.05; world.add(ring);
  const dark = mat(0x495057), shadowGeo = new THREE.CircleGeometry(1, 24);
  const anvils = [];
  let acc = 0;
  function makeAnvil() {
    const g = new THREE.Group();
    [[1.3, 0.45, 0.9, 0.22], [0.55, 0.45, 0.55, 0.65], [1.9, 0.5, 0.9, 1.1]].forEach(([w, h, d, y]) => {
      const b = new THREE.Mesh(boxGeo, dark); b.scale.set(w, h, d); b.position.y = y; b.castShadow = true; g.add(b);
    });
    return g;
  }
  function drop(x, z) {
    const sh = new THREE.Mesh(shadowGeo, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.set(x, 0.03, z); world.add(sh);
    const a = makeAnvil(); a.position.set(x, 30, z); a.rotation.y = Math.random() * 3; world.add(a);
    anvils.push({ x, z, t: 0, sh, a, hit: false });
  }
  return {
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return new THREE.Vector3(Math.sin(a) * 5, 0, Math.cos(a) * 5); },
    update(dt) {
      for (let i = anvils.length - 1; i >= 0; i--) {
        const v = anvils[i];
        v.t += dt;
        const k = Math.min(1, v.t / FALL);
        v.sh.material.opacity = 0.15 + 0.5 * k;
        v.sh.scale.setScalar(0.4 + 0.9 * k);
        v.a.position.y = 30 * (1 - k * k);
        if (k >= 1 && !v.hit) {
          v.hit = true;
          const d = Math.hypot(me.pos.x - v.x, me.pos.z - v.z);
          if (d < 6) beep(90, 0.15, 'square', 0.04);
          if (d < 1.15 && me.pos.y < 1.7) eliminate('¡Aplastado!');
        }
        if (v.t > FALL + 1.1) { world.remove(v.sh, v.a); anvils.splice(i, 1); }
      }
      if (me.pos.y < -18) eliminate('¡Te caíste!');
    },
    hostUpdate(dt, t) {
      acc += dt;
      if (acc < Math.max(0.16, 0.75 - t * 0.014)) return;
      acc = 0;
      const alive = [...round.alive];
      const l = [];
      for (let c = 0; c < 1 + Math.floor(t / 12); c++) {
        let x, z;
        if (alive.length && Math.random() < 0.4) {
          const p = posOf(alive[Math.floor(Math.random() * alive.length)]);
          x = p.x + (Math.random() - 0.5) * 3; z = p.z + (Math.random() - 0.5) * 3;
        } else {
          const a = Math.random() * Math.PI * 2, r = 12 * Math.sqrt(Math.random());
          x = Math.cos(a) * r; z = Math.sin(a) * r;
        }
        l.push([+x.toFixed(2), +z.toFixed(2)]);
      }
      hostBroadcast('av', { l });
    },
    onMsg(k, d) { if (k === 'av') d.l.forEach(([x, z]) => drop(x, z)); },
    hostDone: () => G.elimDone(),
    hostRank: () => G.elimRank(),
  };
}

// 3) Caza de gemas
function createGemas() {
  addBox(0, 0, 34, 34, 0, 1, 0xb2f2bb);
  [[0, 17.3, 35.2, 0.6], [0, -17.3, 35.2, 0.6], [17.3, 0, 0.6, 35.2], [-17.3, 0, 0.6, 35.2]]
    .forEach(([x, z, w, d]) => addBox(x, z, w, d, 1.4, 1.4, 0x2f9e44));
  const surfaces = [{ x: 0, z: 0, w: 33, d: 33, top: 0 }];
  [[-10, -10, 6, 6, 1.2, 0xffc9c9], [10, 10, 6, 6, 1.2, 0xd0bfff], [10, -10, 6, 6, 2.2, 0xffec99], [-10, 10, 6, 6, 2.2, 0xa5d8ff],
   [0, 0, 5, 5, 3, 0xffa8a8], [0, 4, 2.5, 2.5, 1.4, 0xffd8a8], [0, -4, 2.5, 2.5, 1.4, 0xffd8a8]]
    .forEach(([x, z, w, d, top, c]) => { addBox(x, z, w, d, top, top + 1, c, { cast: true }); surfaces.push({ x, z, w, d, top }, { x, z, w, d, top }); });
  const gemGeo = new THREE.OctahedronGeometry(0.45);
  const gemMat = new THREE.MeshLambertMaterial({ color: 0x22d3ee, emissive: 0x0b7285 });
  const goldMat = new THREE.MeshLambertMaterial({ color: 0xffd43b, emissive: 0x8a6a00 });
  const gems = new Map(), pending = new Set();
  let scores = {}, nextId = 1, acc = 0;
  return {
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return new THREE.Vector3(Math.sin(a) * 8, 0, Math.cos(a) * 8); },
    update(dt, t) {
      for (const [id, g] of gems) {
        g.mesh.rotation.y += dt * 2.5;
        g.mesh.position.y = g.y + Math.sin(t * 3 + id) * 0.15;
        if (playing() && me.alive && !pending.has(id) && Math.hypot(me.pos.x - g.x, me.pos.y + 0.9 - g.y, me.pos.z - g.z) < 1.35) {
          pending.add(id);
          toHost('gc', { id });
        }
      }
    },
    hostUpdate(dt) {
      acc += dt;
      if (acc < 0.5 || gems.size >= 3 + roundIds().length) return;
      acc = 0;
      const s = surfaces[Math.floor(Math.random() * surfaces.length)];
      const x = s.x + (Math.random() - 0.5) * (s.w - 1.2), z = s.z + (Math.random() - 0.5) * (s.d - 1.2);
      if (groundAt(x, z, 99) !== s.top) return; // quedaría adentro de una plataforma
      hostBroadcast('gs', { id: nextId++, x: +x.toFixed(2), y: s.top + 0.9, z: +z.toFixed(2), v: Math.random() < 0.12 ? 3 : 1 });
    },
    onMsg(k, d, from) {
      if (k === 'gs') {
        const mesh = new THREE.Mesh(gemGeo, d.v === 3 ? goldMat : gemMat);
        if (d.v === 3) mesh.scale.setScalar(1.4);
        mesh.position.set(d.x, d.y, d.z); mesh.castShadow = true; world.add(mesh);
        gems.set(d.id, { mesh, x: d.x, y: d.y, z: d.z, v: d.v });
      } else if (k === 'gc' && isHost()) {
        const g = gems.get(d.id);
        if (!g || !playing()) return;
        scores[from] = (scores[from] || 0) + g.v;
        hostBroadcast('gt', { id: d.id, by: from, s: { ...scores } });
      } else if (k === 'gt') {
        const g = gems.get(d.id);
        if (g) { world.remove(g.mesh); gems.delete(d.id); }
        pending.delete(d.id);
        scores = d.s;
        if (d.by === myId) beep(g && g.v === 3 ? 1320 : 990, 0.1, 'triangle', 0.06);
      }
    },
    hostRank() {
      const ids = roundIds().sort((a, b) => (scores[b] || 0) - (scores[a] || 0));
      const groups = [];
      ids.forEach(id => {
        const last = groups[groups.length - 1];
        if (last && (scores[last[0]] || 0) === (scores[id] || 0)) last.push(id); else groups.push([id]);
      });
      return groups;
    },
    hud() {
      const top = roundIds().sort((a, b) => (scores[b] || 0) - (scores[a] || 0)).slice(0, 3)
        .map(id => `${esc(nameOf(id))} ${scores[id] || 0}`).join(' · ');
      return `<div class="pill">💎 Tus gemas: <b>${scores[myId] || 0}</b></div><div class="sub">${top}</div>`;
    },
  };
}

// 4) Carrera de obstáculos
function createCarrera() {
  addBox(0, 4, 10, 12, 0, 1, 0x74c0fc);
  const jcol = [0xffa8a8, 0xffd43b, 0x69db7c, 0xb197fc, 0xff922b];
  [[0, 14], [2.5, 18], [-2, 22], [1, 26], [-1.5, 30]].forEach(([x, z], i) => addBox(x, z, 3, 3, 0, 1, jcol[i], { cast: true }));
  addBox(0, 43, 10, 20, 0, 1, 0xffd8a8);
  const bars = [{ cz: 38, sp: 1.8, a: 0 }, { cz: 48, sp: -2.2, a: 1.5 }].map(b => {
    const piv = new THREE.Group(); piv.position.set(0, 0, b.cz);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 9.6, 12), mat(0xe03131));
    bar.rotation.z = Math.PI / 2; bar.position.y = 0.7; bar.castShadow = true; piv.add(bar);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 12), mat(0x343a40)); post.position.y = 0.7; piv.add(post);
    world.add(piv);
    return { ...b, piv };
  });
  for (let k = 0; k < 5; k++) addBox(0, 55.5 + k * 3, 6, 3, 1 + k, 2 + k, [0xd0bfff, 0xa5d8ff, 0x96f2d7, 0xffec99, 0xffc9c9][k], { cast: true });
  addBox(0, 73.6, 1.3, 9.2, 5, 0.6, 0x845ef7, { cast: true });
  addBox(1.5, 78.4, 4.3, 1.3, 5, 0.6, 0x845ef7, { cast: true });
  addBox(3, 83.2, 1.3, 9.2, 5, 0.6, 0x845ef7, { cast: true });
  addBox(0, 94, 12, 12, 5, 1, 0xfff3bf);
  // meta
  const gold = mat(0xfab005);
  [[-5, 0], [5, 0]].forEach(([x]) => { const p = new THREE.Mesh(boxGeo, gold); p.scale.set(0.6, 5, 0.6); p.position.set(x, 7.5, 92); p.castShadow = true; world.add(p); });
  const topBar = new THREE.Mesh(boxGeo, gold); topBar.scale.set(10.6, 0.8, 0.6); topBar.position.set(0, 10.2, 92); world.add(topBar);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.4), new THREE.MeshBasicMaterial({ map: textTexture('META', { w: 256, h: 64, bg: null, fg: '#1b1b3a', font: 'bold 44px system-ui' }), transparent: true }));
  sign.position.set(0, 10.2, 91.6); sign.rotation.y = Math.PI; world.add(sign);
  const fin = makeFinish(92);
  const cps = [{ z: -99, p: [0, 0.2, 2] }, { z: 33.5, p: [0, 0.2, 34.5] }, { z: 54, p: [0, 1.2, 55.5] }, { z: 66.5, p: [0, 5.2, 68] }];
  let cp = 0, hitCd = 0;
  return {
    spawn(i, n) { return new THREE.Vector3((i - (n - 1) / 2) * 1.1, 0, 1); },
    update(dt, t) {
      bars.forEach(b => { b.ang = b.a + b.sp * (round.phase === 'play' ? t : 0); b.piv.rotation.y = -b.ang; });
      if (!me.alive) return;
      for (let k = cps.length - 1; k > cp; k--) if (me.onGround && me.pos.z > cps[k].z) { cp = k; feed('🚩 Checkpoint'); beep(660, 0.1, 'triangle'); break; }
      hitCd -= dt;
      for (const b of bars) {
        const dx = Math.cos(b.ang), dz = Math.sin(b.ang);
        const rx = me.pos.x, rz = me.pos.z - b.cz;
        const proj = Math.max(-4.8, Math.min(4.8, rx * dx + rz * dz));
        const dist = Math.hypot(rx - dx * proj, rz - dz * proj);
        if (dist < 0.6 && me.pos.y < 1.3 && hitCd <= 0) {
          hitCd = 0.6;
          const s = Math.sign(b.sp) * Math.sign(proj || 1);
          me.knock.set(-dz * s * 15, 0, dx * s * 15);
          me.vel.y = 8; me.onGround = false;
          beep(220, 0.15, 'square');
        }
      }
      if (me.pos.y < -12) { respawnAt(new THREE.Vector3(...cps[cp].p)); big('¡Ups! De vuelta al checkpoint', 1.3); beep(200, 0.2, 'sawtooth'); }
      fin.check();
    },
    onMsg: fin.onMsg,
    hostDone: fin.done,
    hostRank: fin.rank,
    hud() { return me.finished ? '<div class="pill">🏁 ¡Llegaste! Esperando al resto…</div>' : '<div class="pill">🏁 Llegá a la META</div>'; },
  };
}

// 5) Luz roja, luz verde
function createLuz() {
  addBox(0, 30, 16, 64, 0, 1, 0xc3fae8);
  [[-8.3], [8.3]].forEach(([x]) => addBox(x, 30, 0.6, 64, 1.4, 1.4, 0x0ca678));
  addBox(0, 63, 17.2, 0.6, 1.4, 1.4, 0x0ca678);
  addBox(0, -2.3, 17.2, 0.6, 1.4, 1.4, 0x0ca678);
  const stripe = (z, c) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(16, 1), new THREE.MeshLambertMaterial({ color: c })); m.rotation.x = -Math.PI / 2; m.position.set(0, 0.02, z); world.add(m); };
  stripe(3, 0xffffff); stripe(56, 0x1b1b3a); stripe(57, 0xffffff);
  // semáforo
  const tower = new THREE.Group(); tower.position.set(0, 0, 66);
  const post = new THREE.Mesh(boxGeo, mat(0x343a40)); post.scale.set(0.8, 8, 0.8); post.position.y = 4; tower.add(post);
  const house = new THREE.Mesh(boxGeo, mat(0x212529)); house.scale.set(3, 8, 1.4); house.position.y = 11; tower.add(house);
  const lights = {};
  [['r', 0xff2222, 13.5], ['y', 0xffcc00, 11], ['g', 0x22dd55, 8.5]].forEach(([k, c, y]) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 16), new THREE.MeshBasicMaterial({ color: 0x333333 }));
    m.position.set(0, y, -0.8); tower.add(m); lights[k] = { m, c };
  });
  world.add(tower);
  const fin = makeFinish(56);
  let state = null, st = 0, hostT = 2.5;
  const setLight = s => { state = s; st = 0; for (const k in lights) lights[k].m.material.color.setHex(k === s ? lights[k].c : 0x333333); };
  setLight('g');
  return {
    spawn(i, n) { return new THREE.Vector3((i - (n - 1) / 2) * 1.6, 0, 1); },
    update(dt) {
      st += dt;
      if (!me.alive) return;
      if (playing() && state === 'r' && st > 0.35 && !me.finished && (me.moving || !me.onGround)) {
        respawnAt(new THREE.Vector3(me.pos.x, 0.2, 1));
        big('🔴 ¡Te moviste! Volvés al inicio', 1.6, '#ff6b6b');
        beep(140, 0.35, 'sawtooth');
      }
      fin.check();
    },
    hostUpdate(dt) {
      hostT -= dt;
      if (hostT > 0) return;
      if (state === 'g') { hostBroadcast('lt', { s: 'y' }); hostT = 0.8; }
      else if (state === 'y') { hostBroadcast('lt', { s: 'r' }); hostT = 1.6 + Math.random() * 1.8; }
      else { hostBroadcast('lt', { s: 'g' }); hostT = 1.6 + Math.random() * 3; }
    },
    onMsg(k, d, from) {
      if (k === 'lt') { setLight(d.s); beep(d.s === 'g' ? 880 : d.s === 'y' ? 520 : 260, 0.18, 'triangle', 0.06); }
      else fin.onMsg(k, d, from);
    },
    hostDone: fin.done,
    hostRank: fin.rank,
    hud() {
      if (me.finished) return '<div class="pill">🏁 ¡Llegaste!</div>';
      if (state === 'r') return '<div class="pill light r">🔴 ¡QUIETO!</div>';
      if (state === 'y') return '<div class="pill light y">🟡 ¡Atención!</div>';
      return '<div class="pill light g">🟢 ¡CORRÉ!</div>';
    },
  };
}

const MINIGAMES = {
  pisos: { name: 'Pisos que caen', emoji: '🟥', time: 100, desc: 'Cada piso que pisás se cae al ratito. Hay dos niveles. Saltar no rompe pisos. ¡El último en pie gana!', create: createPisos },
  yunques: { name: 'Lluvia de yunques', emoji: '⚒️', time: 45, desc: 'Caen yunques del cielo: mirá las sombras y esquivalos. ¡Sobreviví 45 segundos!', create: createYunques },
  gemas: { name: 'Caza de gemas', emoji: '💎', time: 45, desc: 'Agarrá todas las gemas que puedas en 45 segundos. Las doradas valen 3.', create: createGemas },
  carrera: { name: 'Carrera de obstáculos', emoji: '🏁', time: 90, desc: 'Saltá las plataformas, esquivá las barras giratorias y llegá primero a la META.', create: createCarrera },
  luz: { name: 'Luz roja, luz verde', emoji: '🚦', time: 75, desc: 'Corré con luz verde. Si te movés con luz roja, volvés al inicio. ¡Llegá primero!', create: createLuz },
};

// ---------------- Rondas ----------------
function startRound(d) {
  if (round && round.i === d.i && round.phase !== 'podium') return;
  clearWorld();
  const def = MINIGAMES[d.id];
  round = { i: d.i, id: d.id, def, phase: 'intro', t: 0, ids: d.ids, alive: new Set(d.ids.filter(id => players.has(id))), outOrder: [], lastCount: 99 };
  round.mg = def.create();
  const n = d.ids.length;
  d.ids.forEach((id, i) => {
    const pl = players.get(id);
    if (!pl) return;
    const sp = round.mg.spawn(i, n);
    pl.pos.copy(sp); pl.target.copy(sp); pl.avatar.position.copy(sp); pl.avatar.visible = true;
    pl.ry = pl.curRy = 0;
  });
  for (const pl of players.values()) if (!d.ids.includes(pl.id)) pl.avatar.visible = false;
  const idx = d.ids.indexOf(myId);
  respawnAt(idx >= 0 ? round.mg.spawn(idx, n) : new THREE.Vector3(0, 0.2, 0));
  me.alive = idx >= 0 && !d.late;
  if (!me.alive) { round.alive.delete(myId); players.get(myId).avatar.visible = false; }
  me.finished = false; me.frozen = true; me.ry = 0;
  camYaw = Math.PI; camPitch = 0.38;
  camTarget.copy(me.pos).y += 1.6;
  $('results').hidden = true;
  $('waiting').hidden = true;
  $('podium').hidden = true;
  $('card').innerHTML = `<small>Ronda ${d.i + 1} de ${d.total}</small><div class="emoji">${def.emoji}</div><h1>${esc(def.name)}</h1><p>${esc(def.desc)}</p><div class="count" id="count"></div>`;
  $('card').hidden = false;
  $('roundName').textContent = `Ronda ${d.i + 1}/${d.total} · ${def.name}`;
  if (d.late) big('Entraste tarde: mirás esta ronda', 3);
  beep(520, 0.15, 'triangle');
}

function applyRoundEnd(d) {
  if (!round || round.i !== d.i) return;
  round.phase = 'end';
  me.frozen = true;
  totals = d.totals;
  renderBoard();
  const medal = ['🥇', '🥈', '🥉'];
  let rows = '';
  d.groups.forEach((g, gi) => g.forEach(id => {
    rows += `<div class="rrow${id === myId ? ' me' : ''}"><span class="pl">${medal[gi] || gi + 1 + 'º'}</span><i style="background:${CSS_COLORS[slotOf(id) % 8]}"></i><span class="nm">${esc(nameOf(id))}</span><span class="pts">${d.pts[id] ? '+' + d.pts[id] + ' ⭐' : ''}</span><span class="tot">${totals[id] || 0} ⭐</span></div>`;
  }));
  $('results').innerHTML = `<h2>${round.def.emoji} ${esc(round.def.name)}</h2>${rows}<small>${d.last ? 'Último minijuego… ¡vamos al podio!' : 'Siguiente minijuego en unos segundos…'}</small>`;
  $('results').hidden = false;
  const myGroup = d.groups.findIndex(g => g.includes(myId));
  if (myGroup === 0) { big('🏆 ¡Ganaste la ronda!', 2.5, '#ffd43b'); beep(660, 0.12, 'triangle'); setTimeout(() => beep(990, 0.25, 'triangle'), 130); }
}

// --- Host ---
function hostBegin() {
  H.started = true;
  H.order = shuffle(Object.keys(MINIGAMES));
  for (const id of players.keys()) totals[id] = 0;
  hostNextRound();
}
function hostNextRound() {
  H.idx++;
  H.nextAt = 0;
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
let confetti = null, podiumT = 0;
function buildPodium(list) {
  clearWorld();
  addDisc(0, 0, 14, 0, 1, 0x8ce99a);
  const spots = [[0, 3, 0xffd43b], [-3.1, 2, 0xced4da], [3.1, 1.2, 0xe8590c]];
  spots.forEach(([x, top, c], i) => {
    addBox(x, 0, 2.8, 2.8, top, top, c, { cast: true });
    const num = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshBasicMaterial({ map: textTexture(String(i + 1), { w: 128, h: 128, bg: null, fg: '#1b1b3a', font: 'bold 110px system-ui' }), transparent: true }));
    num.position.set(x, top / 2, 1.42); world.add(num);
  });
  const placed = [];
  list.forEach((p, i) => {
    let pl = players.get(p.id);
    if (!pl) return;
    const av = pl.avatar;
    av.visible = true;
    if (i < 3) av.position.set(spots[i][0], spots[i][1], 0);
    else av.position.set((i - 3 - (list.length - 4) / 2) * 1.5, 0, -3.2);
    av.rotation.y = 0;
    placed.push({ av, base: av.position.y, i });
  });
  const N = 500, pos = new Float32Array(N * 3), col = new Float32Array(N * 3), c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    pos.set([(Math.random() - 0.5) * 24, Math.random() * 18, (Math.random() - 0.5) * 14], i * 3);
    c.setHex(COLORS[i % 8]); col.set([c.r, c.g, c.b], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  confetti = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.28, vertexColors: true }));
  world.add(confetti);
  return placed;
}
let podiumPlaced = [];
function showPodium(d) {
  podiumData = d;
  round = { phase: 'podium', i: 9999, alive: new Set(), ids: [], outOrder: [] };
  me.frozen = true;
  $('card').hidden = true; $('results').hidden = true; $('waiting').hidden = true; $('mgHud').innerHTML = '';
  $('big').textContent = ''; bigT = 0; $('hint').hidden = true; $('feed').innerHTML = '';
  if (document.pointerLockElement) document.exitPointerLock();
  $('roundName').textContent = '🏆 Podio final'; $('timer').textContent = '';
  podiumPlaced = buildPodium(d.list);
  const top = d.list[0];
  const winners = d.list.filter(p => p.pts === top.pts).map(p => p.name);
  $('podium').innerHTML = `<h1>🏆 ${esc(winners.join(' y '))} ${winners.length > 1 ? 'ganan' : 'gana'}</h1>` +
    d.list.map((p, i) => `<div class="rrow${p.id === myId ? ' me' : ''}"><span class="pl">${['🥇', '🥈', '🥉'][i] || i + 1 + 'º'}</span><i style="background:${CSS_COLORS[p.slot % 8]}"></i><span class="nm">${esc(p.name)}</span><span class="tot">${p.pts} ⭐</span></div>`).join('');
  $('podium').hidden = false;
  podiumT = 0;
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.22, 'triangle', 0.06), i * 160));
}
function updatePodium(dt) {
  podiumT += dt;
  podiumPlaced.forEach(p => { p.av.position.y = p.base + (p.i === 0 ? Math.abs(Math.sin(podiumT * 4)) * 0.6 : Math.abs(Math.sin(podiumT * 3 + p.i)) * 0.25); });
  if (confetti) {
    const a = confetti.geometry.attributes.position;
    for (let i = 0; i < a.count; i++) {
      let y = a.getY(i) - dt * (2 + (i % 5) * 0.4);
      if (y < 0) y = 18;
      a.setY(i, y);
      a.setX(i, a.getX(i) + Math.sin(podiumT * 2 + i) * dt * 0.6);
    }
    a.needsUpdate = true;
  }
  const ang = Math.sin(podiumT * 0.25) * 0.35;
  camera.position.set(Math.sin(ang) * 13, 5.2, Math.cos(ang) * 13);
  camera.lookAt(0, 2.6, 0);
  sun.position.set(10, 30, 20); sun.target.position.set(0, 0, 0);
}

// ---------------- Controles y cámara ----------------
const keys = {};
let camYaw = Math.PI, camPitch = 0.38, dragging = false;
const camTarget = new THREE.Vector3();
addEventListener('keydown', e => { keys[e.code] = true; if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault(); });
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
const canvas = renderer.domElement;
canvas.addEventListener('click', () => { try { canvas.requestPointerLock(); } catch { /* sin pointer lock */ } beep(1, 0.01, 'sine', 0.0001); });
canvas.addEventListener('mousedown', () => { dragging = true; });
addEventListener('mouseup', () => { dragging = false; });
addEventListener('mousemove', e => {
  if (document.pointerLockElement !== canvas && !dragging) return;
  camYaw -= e.movementX * 0.0028;
  camPitch = Math.max(-0.15, Math.min(1.25, camPitch + e.movementY * 0.0022));
});
document.addEventListener('pointerlockchange', () => { $('hint').hidden = document.pointerLockElement === canvas; });

function updateLocal(dt) {
  let ix = 0, iz = 0;
  const can = !me.frozen && me.alive;
  if (can) {
    if (keys.KeyW || keys.ArrowUp) iz += 1;
    if (keys.KeyS || keys.ArrowDown) iz -= 1;
    if (keys.KeyD || keys.ArrowRight) ix += 1;
    if (keys.KeyA || keys.ArrowLeft) ix -= 1;
  }
  if (keys.KeyQ) camYaw += 2.4 * dt;
  if (keys.KeyE) camYaw -= 2.4 * dt;
  const fx = -Math.sin(camYaw), fz = -Math.cos(camYaw), rx = Math.cos(camYaw), rz = -Math.sin(camYaw);
  let dx = fx * iz + rx * ix, dz = fz * iz + rz * ix;
  const len = Math.hypot(dx, dz);
  me.moving = len > 0;
  if (len) { dx /= len; dz /= len; me.ry = lerpAngle(me.ry, Math.atan2(dx, dz), 1 - Math.exp(-15 * dt)); }
  const vx = dx * SPEED + me.knock.x, vz = dz * SPEED + me.knock.z;
  me.knock.multiplyScalar(Math.exp(-3.5 * dt));
  me.coyote -= dt;
  if (me.onGround) me.coyote = 0.1;
  if (keys.Space && can && me.coyote > 0 && me.jumpReleased) { me.vel.y = JUMP; me.coyote = 0; me.onGround = false; me.jumpReleased = false; beep(330, 0.06, 'sine', 0.03); }
  if (!keys.Space) me.jumpReleased = true;
  me.vel.y = Math.max(-40, me.vel.y + GRAV * dt);
  const p = me.pos;
  const nx = p.x + vx * dt; if (!blocked(nx, p.z, p.y)) p.x = nx; else me.knock.x = 0;
  const nz = p.z + vz * dt; if (!blocked(p.x, nz, p.y)) p.z = nz; else me.knock.z = 0;
  const g = groundAt(p.x, p.z, p.y);
  const ny = p.y + me.vel.y * dt;
  if (ny <= g) { p.y = g; me.vel.y = 0; me.onGround = true; } else { p.y = ny; me.onGround = false; }
}

function updateAvatars(dt) {
  const k = 1 - Math.exp(-12 * dt);
  for (const pl of players.values()) {
    if (round && round.phase === 'podium') continue;
    const av = pl.avatar;
    if (pl.id === myId) {
      av.position.copy(me.pos);
      av.rotation.y = me.ry;
      animateAvatar(av, me.moving ? SPEED : 0, dt, !me.onGround);
    } else {
      const ox = pl.pos.x, oz = pl.pos.z, oy = pl.pos.y;
      pl.pos.lerp(pl.target, k);
      pl.curRy = lerpAngle(pl.curRy, pl.ry, k);
      av.position.copy(pl.pos);
      av.rotation.y = pl.curRy;
      const sp = Math.hypot(pl.pos.x - ox, pl.pos.z - oz) / Math.max(dt, 1e-3);
      animateAvatar(av, sp, dt, Math.abs(pl.pos.y - oy) / Math.max(dt, 1e-3) > 1.5);
    }
  }
}

function updateCamera(dt) {
  let focus = me.pos;
  if (!me.alive && round) {
    const id = [...round.alive].find(i => players.has(i));
    focus = id ? players.get(id).pos : new THREE.Vector3(0, 0, 0);
  }
  camTarget.lerp(new THREE.Vector3(focus.x, focus.y + 1.6, focus.z), 1 - Math.exp(-10 * dt));
  const dist = 7.5;
  camera.position.set(
    camTarget.x + Math.sin(camYaw) * Math.cos(camPitch) * dist,
    camTarget.y + Math.sin(camPitch) * dist,
    camTarget.z + Math.cos(camYaw) * Math.cos(camPitch) * dist);
  camera.lookAt(camTarget);
  sun.position.set(focus.x + 18, focus.y + 40, focus.z + 12);
  sun.target.position.copy(focus);
}

// ---------------- Loop ----------------
let last = performance.now(), sendAcc = 0, hudAcc = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;

  if (isHost()) {
    if (!H.started) {
      const others = [...players.keys()].filter(id => id !== myId);
      if (others.every(id => H.ready.has(id)) || now - H.t0 > 7000) hostBegin();
    }
    if (H.nextAt && now >= H.nextAt) hostNextRound();
    if (H.endAt && now >= H.endAt) {
      H.endAt = 0;
      const w = podiumData && podiumData.list[0];
      Arcade.end({ text: w ? `🏆 ${w.name} ganó Party Games con ${w.pts} ⭐` : 'Fin de Party Games' });
    }
  }

  if (round && round.phase === 'podium') {
    updatePodium(dt);
  } else if (round) {
    round.t += dt;
    if (round.phase === 'intro') {
      const left = Math.ceil(INTRO - round.t);
      if (left !== round.lastCount && left <= 3 && left > 0) { round.lastCount = left; beep(440, 0.12, 'square', 0.05); }
      const c = $('count'); if (c) c.textContent = left <= 3 ? left : '';
      if (round.t >= INTRO) {
        round.phase = 'play'; round.t = 0;
        me.frozen = false;
        $('card').hidden = true;
        big('¡YA!', 1, '#51cf66'); beep(880, 0.25, 'square', 0.06);
      }
    }
    updateLocal(dt);
    round.mg.update && round.mg.update(dt, round.t);
    if (isHost() && round.phase === 'play') {
      round.mg.hostUpdate && round.mg.hostUpdate(dt, round.t);
      if (round.phase === 'play' && (round.t >= round.def.time * TS || (round.mg.hostDone && round.mg.hostDone()))) hostEndRound();
    }
    sendAcc += dt;
    if (sendAcc >= 1 / 15) {
      sendAcc = 0;
      Arcade.send('p', { x: +me.pos.x.toFixed(2), y: +me.pos.y.toFixed(2), z: +me.pos.z.toFixed(2), r: +me.ry.toFixed(2) }, { volatile: true });
    }
  }
  if (!(round && round.phase === 'podium')) {
    updateAvatars(dt);
    updateCamera(dt);
  }

  hudAcc += dt;
  if (hudAcc > 0.1) {
    hudAcc = 0;
    if (round && round.phase === 'play') {
      $('timer').textContent = `⏱ ${Math.max(0, Math.ceil(round.def.time * TS - round.t))}`;
      $('mgHud').innerHTML = (round.mg.hud ? round.mg.hud() : '') + (me.alive ? '' : '<div class="pill dead">👻 Estás mirando</div>');
    } else if (round && round.phase !== 'podium') { $('timer').textContent = ''; $('mgHud').innerHTML = ''; }
  }
  if (bigT > 0) { bigT -= dt; if (bigT <= 0) $('big').textContent = ''; }
  renderer.render(scene, camera);
}

// ---------------- Inicio ----------------
function wire() {
  Arcade.on('p', (d, from) => {
    const pl = players.get(from);
    if (!pl || !d) return;
    pl.target.set(d.x, d.y, d.z);
    pl.ry = d.r;
    if (pl.pos.distanceTo(pl.target) > 8) pl.pos.copy(pl.target);
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
  Arcade.onPlayerLeft(id => { removePlayer(id); renderBoard(); });
  Arcade.onHostChanged(() => {
    if (!isHost()) return;
    feed('👑 Ahora sos el host');
    if (podiumData) { H.endAt = performance.now() + 5000; return; }
    hostPodium(); // si se va el host, se termina con los puntos que había
  });
}

function startPreview() {
  const names = ['Gaby', 'Agus', 'Tomi', 'Sofi', 'Juli', 'Mati', 'Lu', 'Nico'];
  names.forEach((n, i) => addPlayer({ id: 'p' + i, name: n, slot: i }));
  myId = 'p0';
  const list = names.map((n, i) => ({ id: 'p' + i, name: n, slot: i, pts: 15 - i * 2 }));
  podiumPlaced = buildPodium(list);
  podiumT = 0.35;
  updatePodium(0);
  $('preview').hidden = false;
  document.querySelectorAll('.hud:not(#preview)').forEach(e => { e.hidden = true; });
  renderer.render(scene, camera);
  requestAnimationFrame(function f() { updatePodium(0); renderer.render(scene, camera); window.__ready = true; });
}

Arcade.ready().then(ctx => {
  if (PREVIEW) return startPreview();
  myId = ctx.me.id;
  ctx.players.forEach(addPlayer);
  wire();
  renderBoard();
  $('waiting').hidden = false;
  if (!ctx.online) $('waiting').innerHTML = '<h2>Modo práctica</h2><p>Para jugar con amigos, abrí Party Games desde una sala online.</p>';
  if (!isHost()) {
    const hi = setInterval(() => { if (round) clearInterval(hi); else Arcade.send('hi', {}, { to: hostId() }); }, 800);
    Arcade.send('hi', {}, { to: hostId() });
  }
  requestAnimationFrame(loop);
});
