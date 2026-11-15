// Motor: render toon, cielo, agua, nubes, colisiones, partículas y audio
import * as THREE from 'three';
export { THREE };

export const PREVIEW = new URLSearchParams(location.search).has('preview');

// ---------------- Render ----------------
export const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: PREVIEW, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);

export const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcdeeff, 90, 260);
export const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 900);
addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

// Luces
const hemi = new THREE.HemisphereLight(0xffffff, 0x8fa4c8, 1.25);
scene.add(hemi);
export const sun = new THREE.DirectionalLight(0xfff4dd, 2.1);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 160 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);
export function sunFollow(p) {
  sun.position.set(p.x + 22, p.y + 45, p.z + 16);
  sun.target.position.set(p.x, p.y, p.z);
}

// ---------------- Materiales toon ----------------
const gradData = new Uint8Array([110, 110, 110, 255, 185, 185, 185, 255, 255, 255, 255, 255]);
export const gradient = new THREE.DataTexture(gradData, 3, 1, THREE.RGBAFormat);
gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
gradient.needsUpdate = true;
const toonCache = new Map();
export function toon(color, opts) {
  if (opts) return new THREE.MeshToonMaterial({ color, gradientMap: gradient, ...opts });
  if (!toonCache.has(color)) toonCache.set(color, new THREE.MeshToonMaterial({ color, gradientMap: gradient }));
  return toonCache.get(color);
}
export const outlineMat = new THREE.MeshBasicMaterial({ color: 0x1d1b3a, side: THREE.BackSide });
export function withOutline(mesh, thickness = 0.06) {
  const o = new THREE.Mesh(mesh.geometry, outlineMat);
  const s = mesh.scale;
  o.scale.set(1 + thickness / Math.max(0.2, s.x), 1 + thickness / Math.max(0.2, s.y), 1 + thickness / Math.max(0.2, s.z));
  mesh.add(o);
  return mesh;
}

// ---------------- Cielo, nubes, agua ----------------
const skyMat = new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  uniforms: { top: { value: new THREE.Color(0x3fb4ff) }, mid: { value: new THREE.Color(0xa8e2ff) }, bot: { value: new THREE.Color(0xe6f8ff) } },
  vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.55, h)) : mix(mid, bot, smoothstep(0.0, -0.3, h)); gl_FragColor = vec4(c, 1.0); }',
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(700, 32, 16), skyMat);
scene.add(sky);
const sunGlow = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,235,1)'); g.addColorStop(0.25, 'rgba(255,248,200,.9)'); g.addColorStop(1, 'rgba(255,240,180,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), fog: false, depthWrite: false }));
  s.scale.set(120, 120, 1); s.position.set(260, 320, 420);
  scene.add(s); return s;
})();

const clouds = [];
(function makeClouds() {
  const cm = toon(0xffffff, { emissive: 0x5a7a99, emissiveIntensity: 0.35 });
  const sg = new THREE.SphereGeometry(1, 14, 10);
  for (let i = 0; i < 22; i++) {
    const g = new THREE.Group();
    const n = 4 + Math.floor(Math.random() * 4);
    for (let k = 0; k < n; k++) {
      const b = new THREE.Mesh(sg, cm);
      const s = 4 + Math.random() * 5;
      b.scale.set(s * 1.3, s * 0.8, s);
      b.position.set((k - n / 2) * 4.5, Math.random() * 2.5, (Math.random() - 0.5) * 4);
      g.add(b);
    }
    const a = Math.random() * Math.PI * 2, r = 170 + Math.random() * 160;
    g.position.set(Math.cos(a) * r, 25 + Math.random() * 60, Math.sin(a) * r);
    g.userData.speed = 1 + Math.random() * 2;
    scene.add(g); clouds.push(g);
  }
})();

const water = (() => {
  const geo = new THREE.PlaneGeometry(1400, 1400, 90, 90);
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(geo, toon(0x2bb3e0, { emissive: 0x0b4f75, emissiveIntensity: 0.35 }));
  m.position.y = -30;
  m.receiveShadow = false;
  scene.add(m);
  const base = geo.attributes.position.array.slice();
  return { m, geo, base };
})();
export const WATER_Y = -30;

// Islas decorativas lejanas (se crean al final del módulo)
function farIslands() {
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + Math.random() * 0.3, r = 150 + Math.random() * 90;
    const g = new THREE.Group();
    const s = 10 + Math.random() * 14;
    const rock = new THREE.Mesh(new THREE.ConeGeometry(s, s * 1.6, 7), toon(0xb08968));
    rock.rotation.x = Math.PI; rock.position.y = -s * 0.8; g.add(rock);
    const grass = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.02, s, 2, 7), toon(0x69db7c)); grass.position.y = 0.5; g.add(grass);
    for (let t = 0; t < 3 + Math.floor(Math.random() * 4); t++) {
      const tr = tree(1.2 + Math.random());
      tr.position.set((Math.random() - 0.5) * s, 1.5, (Math.random() - 0.5) * s); g.add(tr);
    }
    g.position.set(Math.cos(a) * r, -18 + Math.random() * 30, Math.sin(a) * r);
    g.userData.bob = Math.random() * 6;
    scene.add(g); clouds.push(g);
  }
}

export function updateEnv(dt, t) {
  for (const c of clouds) {
    if (c.userData.speed) { c.position.x += c.userData.speed * dt; if (c.position.x > 360) c.position.x = -360; }
    else c.position.y += Math.sin(t * 0.4 + c.userData.bob) * 0.01;
  }
  const p = water.geo.attributes.position.array, b = water.base;
  for (let i = 0; i < p.length; i += 3) p[i + 1] = Math.sin(b[i] * 0.05 + t * 1.3) * 0.7 + Math.cos(b[i + 2] * 0.06 + t) * 0.6;
  water.geo.attributes.position.needsUpdate = true;
  water.geo.computeVertexNormals();
  sky.position.copy(camera.position);
  sunGlow.position.set(camera.position.x + 260, 320, camera.position.z + 420);
}

// ---------------- Mundo por ronda ----------------
export let world = new THREE.Group();
scene.add(world);
export const colliders = [];
export const animated = []; // funciones (dt,t) de decoraciones
export function clearWorld() {
  scene.remove(world);
  world.traverse(o => { if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose(); });
  world = new THREE.Group();
  scene.add(world);
  colliders.length = 0;
  animated.length = 0;
}
export const getWorld = () => world;
export function addAnim(fn) { animated.push(fn); }
export function updateAnims(dt, t) { for (const f of animated) f(dt, t); }

const shared = g => { g.userData.shared = true; return g; };
export const GEO = {
  box: shared(new THREE.BoxGeometry(1, 1, 1)),
  sphere: shared(new THREE.SphereGeometry(1, 20, 14)),
  cyl: shared(new THREE.CylinderGeometry(1, 1, 1, 32)),
  hex: shared(new THREE.CylinderGeometry(1, 1, 1, 6)),
};

// Colisionadores: box (x,z,hw,hd), cyl (x,z,r), con top/bottom. Pueden moverse (vx,vy,vz por frame).
function makeCol(o) {
  const c = Object.assign({ kind: 'box', x: 0, z: 0, hw: 1, hd: 1, r: 1, top: 0, bottom: -1, off: false, dx: 0, dy: 0, dz: 0, bounce: 0, slip: 0 }, o);
  colliders.push(c);
  return c;
}
export function colBox(x, z, w, d, top, h, extra) { return makeCol({ kind: 'box', x, z, hw: w / 2, hd: d / 2, top, bottom: top - h, ...extra }); }
export function colCyl(x, z, r, top, h, extra) { return makeCol({ kind: 'cyl', x, z, r, top, bottom: top - h, ...extra }); }

export function box(x, z, w, d, top, h, color, opts = {}) {
  const m = new THREE.Mesh(GEO.box, opts.mat || toon(color));
  m.scale.set(w, h, d); m.position.set(x, top - h / 2, z);
  m.castShadow = opts.cast !== false; m.receiveShadow = true;
  world.add(m);
  if (opts.edge !== false && h > 0.3) {
    const lip = new THREE.Mesh(GEO.box, toon(opts.edgeColor || shade(color, 0.82)));
    lip.scale.set(w + 0.12, Math.min(0.3, h * 0.3), d + 0.12); lip.position.set(x, top - Math.min(0.3, h * 0.3) / 2 + 0.01, z);
    lip.receiveShadow = true; world.add(lip);
    m.userData.lip = lip;
  }
  const col = opts.noCol ? null : colBox(x, z, w, d, top, h, opts.col);
  if (col) col.mesh = m;
  return { mesh: m, col };
}
export function cyl(x, z, r, top, h, color, opts = {}) {
  const m = new THREE.Mesh(opts.sides === 6 ? GEO.hex : GEO.cyl, opts.mat || toon(color));
  m.scale.set(r, h, r); m.position.set(x, top - h / 2, z);
  m.castShadow = opts.cast !== false; m.receiveShadow = true;
  world.add(m);
  const col = opts.noCol ? null : colCyl(x, z, opts.sides === 6 ? r * 0.92 : r, top, h, opts.col);
  if (col) col.mesh = m;
  return { mesh: m, col };
}

export function shade(hex, k) {
  const c = new THREE.Color(hex); c.multiplyScalar(k); return c.getHex();
}

const inside = (c, x, z, pad) => c.kind === 'box'
  ? Math.abs(x - c.x) <= c.hw + pad && Math.abs(z - c.z) <= c.hd + pad
  : (x - c.x) ** 2 + (z - c.z) ** 2 <= (c.r + pad) ** 2;

export const STEP = 0.55;
export function groundAt(x, z, y, pad = 0.18) {
  let best = -Infinity, col = null;
  for (const c of colliders) {
    if (c.off || !inside(c, x, z, pad)) continue;
    if (c.top <= y + STEP && c.top > best) { best = c.top; col = c; }
  }
  return { top: best, col };
}
// Empuja un círculo (radio r) fuera de paredes. Devuelve normal de choque o null.
export function pushOut(p, r, feetY, height = 1.6) {
  let hit = null;
  for (const c of colliders) {
    if (c.off || c.top <= feetY + STEP || c.bottom >= feetY + height) continue;
    if (c.kind === 'box') {
      const cx = Math.max(c.x - c.hw, Math.min(p.x, c.x + c.hw));
      const cz = Math.max(c.z - c.hd, Math.min(p.z, c.z + c.hd));
      let dx = p.x - cx, dz = p.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 < 1e-8) {
        const px = c.hw - Math.abs(p.x - c.x), pz = c.hd - Math.abs(p.z - c.z);
        if (px < pz) { dx = Math.sign(p.x - c.x) || 1; dz = 0; p.x = c.x + dx * (c.hw + r); }
        else { dz = Math.sign(p.z - c.z) || 1; dx = 0; p.z = c.z + dz * (c.hd + r); }
        hit = { x: dx, z: dz };
      } else {
        const d = Math.sqrt(d2);
        p.x = cx + (dx / d) * r; p.z = cz + (dz / d) * r;
        hit = { x: dx / d, z: dz / d };
      }
    } else {
      const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + r;
      if (d >= m) continue;
      const nx = d > 1e-6 ? dx / d : 1, nz = d > 1e-6 ? dz / d : 0;
      p.x = c.x + nx * m; p.z = c.z + nz * m;
      hit = { x: nx, z: nz, col: c };
    }
  }
  return hit;
}

// ---------------- Texturas ----------------
export function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...opts.repeat); }
  t.anisotropy = 4;
  return t;
}
export const FONT = "'Fredoka', 'Baloo 2', system-ui, sans-serif";
export function labelTex(text, color = '#ffffff') {
  return canvasTex(256, 72, (x, w, h) => {
    x.font = `700 36px ${FONT}`;
    const tw = Math.min(w - 8, x.measureText(text).width + 34);
    x.fillStyle = 'rgba(29,27,58,.78)';
    x.beginPath(); x.roundRect((w - tw) / 2, 8, tw, h - 16, 26); x.fill();
    x.lineWidth = 4; x.strokeStyle = color; x.stroke();
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, w / 2, h / 2 + 2);
  });
}
export const checkerTex = (n = 8, a = '#ffffff', b = '#1d1b3a') => canvasTex(128, 128, (x, w) => {
  const s = w / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { x.fillStyle = (i + j) % 2 ? a : b; x.fillRect(i * s, j * s, s, s); }
});

// ---------------- Decoración ----------------
const trunkMat = () => toon(0x8d5a3b);
export function tree(s = 1, color) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(GEO.cyl, trunkMat()); trunk.scale.set(0.22 * s, 1.6 * s, 0.22 * s); trunk.position.y = 0.8 * s; trunk.castShadow = true; g.add(trunk);
  const cols = [0x51cf66, 0x40c057, 0x69db7c, 0x8ce99a];
  const c = color || cols[Math.floor(Math.random() * cols.length)];
  const top = new THREE.Mesh(GEO.sphere, toon(c)); top.scale.set(1.1 * s, 1.0 * s, 1.1 * s); top.position.y = 2.1 * s; top.castShadow = true; g.add(top);
  const top2 = new THREE.Mesh(GEO.sphere, toon(shade(c, 1.12))); top2.scale.setScalar(0.65 * s); top2.position.set(0.4 * s, 2.7 * s, 0.2 * s); g.add(top2);
  g.userData.top = top;
  return g;
}
export function addTree(x, y, z, s = 1, color) {
  const t = tree(s, color); t.position.set(x, y, z); t.rotation.y = Math.random() * 6;
  world.add(t);
  const ph = Math.random() * 6;
  addAnim((dt, time) => { t.rotation.z = Math.sin(time * 1.2 + ph) * 0.03; t.userData.top.scale.y = s * (1 + Math.sin(time * 2 + ph) * 0.03); });
  return t;
}
export function addFlower(x, y, z) {
  const g = new THREE.Group();
  const stem = new THREE.Mesh(GEO.cyl, toon(0x37b24d)); stem.scale.set(0.04, 0.5, 0.04); stem.position.y = 0.25; g.add(stem);
  const cols = [0xff6b9d, 0xffd43b, 0xffffff, 0xb197fc, 0xff922b];
  const head = new THREE.Mesh(GEO.sphere, toon(cols[Math.floor(Math.random() * cols.length)])); head.scale.set(0.2, 0.1, 0.2); head.position.y = 0.52; g.add(head);
  const c = new THREE.Mesh(GEO.sphere, toon(0xffe066)); c.scale.setScalar(0.08); c.position.y = 0.57; g.add(c);
  g.position.set(x, y, z); world.add(g);
  const ph = Math.random() * 6;
  addAnim((dt, t) => { g.rotation.z = Math.sin(t * 2 + ph) * 0.12; });
}
export function addBalloon(x, y, z, color) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(GEO.sphere, toon(color)); b.scale.set(0.9, 1.1, 0.9); g.add(b);
  const knot = new THREE.Mesh(GEO.sphere, toon(color)); knot.scale.setScalar(0.15); knot.position.y = -1.1; g.add(knot);
  const str = new THREE.Mesh(GEO.cyl, toon(0xffffff)); str.scale.set(0.02, 2.5, 0.02); str.position.y = -2.3; g.add(str);
  g.position.set(x, y, z); world.add(g);
  const ph = Math.random() * 6;
  addAnim((dt, t) => { g.position.y = y + Math.sin(t * 1.3 + ph) * 0.5; g.rotation.z = Math.sin(t + ph) * 0.1; });
}
// Isla flotante: pasto arriba y roca abajo (solo visual)
export function island(x, z, r, top, depth = 8, grass = 0x69db7c, rockColor = 0xc59a6d) {
  const g = new THREE.Group();
  const rock = new THREE.Mesh(new THREE.ConeGeometry(r * 0.98, depth, 9), toon(rockColor));
  rock.rotation.x = Math.PI; rock.position.y = top - 0.8 - depth / 2; rock.castShadow = false; g.add(rock);
  const rock2 = new THREE.Mesh(new THREE.ConeGeometry(r * 0.5, depth * 0.7, 7), toon(shade(rockColor, 0.85)));
  rock2.rotation.x = Math.PI; rock2.position.set(r * 0.3, top - 0.8 - depth * 0.9, r * 0.2); g.add(rock2);
  const dirt = new THREE.Mesh(GEO.cyl, toon(0xa47148)); dirt.scale.set(r, 0.9, r); dirt.position.y = top - 0.55; dirt.receiveShadow = true; g.add(dirt);
  const gr = new THREE.Mesh(GEO.cyl, toon(grass)); gr.scale.set(r * 1.02, 0.35, r * 1.02); gr.position.y = top - 0.17; gr.receiveShadow = true; g.add(gr);
  g.position.set(x, 0, z);
  world.add(g);
  return g;
}

// ---------------- Partículas ----------------
const dummy = new THREE.Object3D();
class Pool {
  constructor(geo, max) {
    this.max = max;
    this.mesh = new THREE.InstancedMesh(geo, new THREE.MeshToonMaterial({ gradientMap: gradient }), max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.setColorAt(0, new THREE.Color());
    this.list = [];
    scene.add(this.mesh);
  }
  spawn(o) {
    if (this.list.length >= this.max) this.list.shift();
    this.list.push(Object.assign({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 1, age: 0, size: 0.3, grow: 0, grav: 0, drag: 0, color: 0xffffff, spin: 0, rot: Math.random() * 6 }, o));
  }
  update(dt) {
    const L = this.list;
    let n = 0;
    const col = new THREE.Color();
    for (let i = 0; i < L.length; i++) {
      const p = L[i];
      p.age += dt;
      if (p.age >= p.life) continue;
      p.vy += p.grav * dt;
      const k = Math.exp(-p.drag * dt);
      p.vx *= k; p.vy *= k; p.vz *= k;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.rot += p.spin * dt;
      const f = p.age / p.life;
      const s = Math.max(0.001, p.size * (1 + p.grow * f) * (f > 0.7 ? (1 - f) / 0.3 : 1));
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rot, p.rot * 0.7, 0);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(n, dummy.matrix);
      this.mesh.setColorAt(n, col.setHex(p.color));
      L[n++] = p;
    }
    L.length = n;
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}
const puffs = new Pool(new THREE.IcosahedronGeometry(1, 1), 500);
const bits = new Pool(new THREE.BoxGeometry(1, 1, 0.25), 700);
export function updateParticles(dt) { puffs.update(dt); bits.update(dt); }
const R = (a = 1) => (Math.random() - 0.5) * 2 * a;
export const fx = {
  dust(p, n = 4, color = 0xfffaf0) {
    for (let i = 0; i < n; i++) puffs.spawn({ x: p.x + R(0.3), y: p.y + 0.1, z: p.z + R(0.3), vx: R(1.6), vy: 0.6 + Math.random() * 0.8, vz: R(1.6), life: 0.35 + Math.random() * 0.15, size: 0.07 + Math.random() * 0.05, grow: 1.1, drag: 3.5, color });
  },
  poof(p, color = 0xffffff, n = 14) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      puffs.spawn({ x: p.x, y: p.y + 0.8, z: p.z, vx: Math.cos(a) * 4, vy: R(2) + 1, vz: Math.sin(a) * 4, life: 0.6, size: 0.35, grow: 0.8, drag: 4, color });
    }
  },
  burst(p, colors, n = 24, speed = 7) {
    for (let i = 0; i < n; i++) bits.spawn({ x: p.x, y: p.y, z: p.z, vx: R(speed), vy: Math.random() * speed + 2, vz: R(speed), life: 0.9 + Math.random() * 0.5, size: 0.18, grav: -16, drag: 0.6, spin: R(12), color: colors[i % colors.length] });
  },
  sparkle(p, color = 0xffe066, n = 8) {
    for (let i = 0; i < n; i++) puffs.spawn({ x: p.x + R(0.4), y: p.y + R(0.4), z: p.z + R(0.4), vx: R(2), vy: Math.random() * 3, vz: R(2), life: 0.5, size: 0.09, drag: 2, color });
  },
  sparks(p, color, n = 2) {
    for (let i = 0; i < n; i++) puffs.spawn({ x: p.x, y: p.y, z: p.z, vx: R(3), vy: Math.random() * 3 + 1, vz: R(3), life: 0.3, size: 0.07, grav: -12, color });
  },
  splash(p) {
    for (let i = 0; i < 26; i++) puffs.spawn({ x: p.x + R(0.6), y: WATER_Y + 0.5, z: p.z + R(0.6), vx: R(3), vy: 6 + Math.random() * 6, vz: R(3), life: 0.9, size: 0.25, grav: -20, color: i % 3 ? 0xd0f4ff : 0x74c0fc });
  },
  explosion(p) {
    for (let i = 0; i < 30; i++) puffs.spawn({ x: p.x, y: p.y + 1, z: p.z, vx: R(9), vy: R(6) + 4, vz: R(9), life: 0.7 + Math.random() * 0.4, size: 0.5, grow: 1, drag: 3, color: [0xffd43b, 0xff922b, 0xff6b6b, 0x495057][i % 4] });
  },
  confetti(p, n = 60, spread = 8) {
    const cols = [0xff4d8d, 0xffd43b, 0x4dabff, 0x51cf66, 0xb197fc, 0xff922b];
    for (let i = 0; i < n; i++) bits.spawn({ x: p.x + R(spread), y: p.y + Math.random() * 3, z: p.z + R(spread), vx: R(2), vy: Math.random() * 4, vz: R(2), life: 3 + Math.random() * 2, size: 0.22, grav: -3, drag: 1.4, spin: R(8), color: cols[i % cols.length] });
  },
  trail(p, color, size = 0.25) {
    puffs.spawn({ x: p.x + R(0.15), y: p.y, z: p.z + R(0.15), vy: 0.6, life: 0.35, size, grow: 0.6, drag: 2, color });
  },
};

// ---------------- Audio ----------------
let actx = null, master = null, muted = false;
try { muted = localStorage.getItem('pg:muted') === '1'; } catch { /* */ }
function ac() {
  if (!actx) {
    actx = new (window.AudioContext || window.webkitAudioContext)();
    master = actx.createGain(); master.gain.value = muted ? 0 : 0.55; master.connect(actx.destination);
  }
  if (actx.state === 'suspended') actx.resume();
  return actx;
}
export function unlockAudio() { try { ac(); } catch { /* */ } }
export function toggleMute() {
  muted = !muted;
  try { localStorage.setItem('pg:muted', muted ? '1' : '0'); } catch { /* */ }
  if (master) master.gain.value = muted ? 0 : 0.55;
  return muted;
}
export const isMuted = () => muted;
function tone(f, d, { type = 'triangle', vol = 0.2, at = 0, slide = 0 } = {}) {
  try {
    const a = ac(), t = a.currentTime + at;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), t + d);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(master); o.start(t); o.stop(t + d + 0.02);
  } catch { /* */ }
}
let noiseBuf = null;
function noise(d, { vol = 0.3, at = 0, freq = 1200, q = 0.7 } = {}) {
  try {
    const a = ac(), t = a.currentTime + at;
    if (!noiseBuf) { noiseBuf = a.createBuffer(1, a.sampleRate, a.sampleRate); const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1; }
    const s = a.createBufferSource(); s.buffer = noiseBuf;
    const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq; f.Q.value = q;
    const g = a.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + d);
  } catch { /* */ }
}
const notes = (list, gap = 0.1, o = {}) => list.forEach((f, i) => tone(f, o.d || 0.16, { ...o, at: i * gap }));
export const sfx = {
  jump: () => tone(420, 0.14, { type: 'sine', vol: 0.09, slide: 1.8 }),
  land: () => noise(0.06, { vol: 0.07, freq: 500 }),
  coin: () => notes([988, 1319], 0.07, { type: 'triangle', vol: 0.1, d: 0.12 }),
  bigcoin: () => notes([784, 988, 1175, 1568], 0.06, { type: 'triangle', vol: 0.1, d: 0.12 }),
  bump: () => { tone(200, 0.15, { type: 'sine', vol: 0.14, slide: 0.55 }); noise(0.07, { vol: 0.06, freq: 800 }); },
  poof: () => noise(0.18, { vol: 0.06, freq: 1800 }),
  splash: () => { noise(0.35, { vol: 0.1, freq: 1400 }); tone(320, 0.25, { type: 'sine', vol: 0.05, slide: 0.5 }); },
  boom: () => { noise(0.6, { vol: 0.22, freq: 420 }); tone(110, 0.45, { type: 'sine', vol: 0.18, slide: 0.4 }); },
  count: () => tone(660, 0.12, { type: 'triangle', vol: 0.12 }),
  go: () => notes([784, 1047], 0.1, { type: 'triangle', vol: 0.14, d: 0.25 }),
  checkpoint: () => notes([660, 880, 1320], 0.07, { type: 'triangle', vol: 0.1 }),
  item: () => notes([523, 659, 784, 1047], 0.05, { type: 'triangle', vol: 0.08, d: 0.09 }),
  boost: () => { tone(260, 0.35, { type: 'triangle', vol: 0.07, slide: 2.4 }); noise(0.3, { vol: 0.04, freq: 2500 }); },
  spin: () => notes([880, 740, 587, 440], 0.06, { type: 'triangle', vol: 0.08, d: 0.08 }),
  tick: () => tone(1200, 0.04, { type: 'sine', vol: 0.06 }),
  pass: () => notes([523, 784], 0.05, { type: 'triangle', vol: 0.1, d: 0.1 }),
  out: () => notes([587, 494, 392], 0.13, { type: 'triangle', vol: 0.1, d: 0.18 }),
  finish: () => notes([523, 659, 784, 1047], 0.09, { type: 'triangle', vol: 0.12, d: 0.18 }),
  win: () => notes([523, 659, 784, 1047, 1319], 0.08, { type: 'triangle', vol: 0.11, d: 0.25 }),
  whistle: () => { tone(1500, 0.18, { type: 'sine', vol: 0.09, slide: 1.15 }); tone(1500, 0.3, { type: 'sine', vol: 0.09, slide: 1.15, at: 0.22 }); },
  fanfare: () => { notes([392, 523, 659, 784], 0.13, { type: 'triangle', vol: 0.1, d: 0.3 }); notes([523, 659, 784, 1047], 0.13, { type: 'triangle', vol: 0.12, d: 0.5, at: 0.6 }); },
  whoosh: () => noise(0.3, { vol: 0.05, freq: 1300 }),
  pop: () => tone(600, 0.08, { type: 'sine', vol: 0.1, slide: 2 }),
  dash: () => noise(0.15, { vol: 0.07, freq: 2200 }),
  rocket: () => { tone(300, 0.6, { type: 'triangle', vol: 0.06, slide: 2 }); noise(0.5, { vol: 0.05, freq: 2000 }); },
  star: () => notes([784, 988, 1175, 1568, 1175, 1568], 0.07, { type: 'triangle', vol: 0.08, d: 0.1 }),
};

farIslands();
