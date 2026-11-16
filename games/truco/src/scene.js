// Escena 3D: bar oscuro, mesa con paño, lámpara, polvo en el aire y cartas.
import * as THREE from 'three';
export { THREE };

export const PREVIEW = new URLSearchParams(location.search).has('preview');
export const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: PREVIEW });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.autoClear = false;
document.body.prepend(renderer.domElement);

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d0805);
scene.fog = new THREE.FogExp2(0x0d0805, 0.075);
export const camera = new THREE.PerspectiveCamera(56, innerWidth / innerHeight, 0.05, 60);
scene.add(camera);
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });

// ---------- Texturas procedurales ----------
function tex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}
const noise = (x, w, h, a, col = '0,0,0') => { for (let i = 0; i < w * h / 40; i++) { x.fillStyle = `rgba(${col},${Math.random() * a})`; x.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2); } };
const woodTex = (base = '#5a341b', dark = '#3b2010', rep = [1, 1]) => tex(512, 512, (x, w, h) => {
  x.fillStyle = base; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 70; i++) { x.strokeStyle = `rgba(30,15,5,${0.08 + Math.random() * 0.15})`; x.lineWidth = 1 + Math.random() * 3; x.beginPath(); const y = Math.random() * h; x.moveTo(0, y); for (let k = 0; k <= w; k += 32) x.lineTo(k, y + Math.sin(k * 0.02 + i) * 6); x.stroke(); }
  noise(x, w, h, 0.12);
  x.fillStyle = dark; x.globalAlpha = 0.25; x.fillRect(0, 0, w, 3); x.globalAlpha = 1;
}, rep);
const plankTex = () => tex(512, 512, (x, w, h) => {
  const cols = ['#4a2a15', '#553118', '#3f2311', '#5b351b'];
  for (let i = 0; i < 8; i++) {
    x.fillStyle = cols[i % 4]; x.fillRect(0, i * 64, w, 64);
    for (let k = 0; k < 12; k++) { x.strokeStyle = `rgba(20,10,4,${Math.random() * 0.2})`; x.beginPath(); const y = i * 64 + Math.random() * 64; x.moveTo(0, y); x.lineTo(w, y + Math.random() * 6 - 3); x.stroke(); }
    x.fillStyle = 'rgba(10,5,2,.6)'; x.fillRect(0, i * 64, w, 2);
    x.fillRect((i * 173) % w, i * 64, 2, 64);
  }
  noise(x, w, h, 0.15);
}, [6, 6]);
const feltTex = () => tex(512, 512, (x, w, h) => {
  const g = x.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, w / 2);
  g.addColorStop(0, '#2e8a52'); g.addColorStop(1, '#1b5e36');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  noise(x, w, h, 0.18); noise(x, w, h, 0.05, '255,255,255');
  x.strokeStyle = 'rgba(242,193,78,.35)'; x.lineWidth = 6; x.beginPath(); x.arc(w / 2, h / 2, w * 0.43, 0, Math.PI * 2); x.stroke();
  x.font = '700 60px Georgia, serif'; x.fillStyle = 'rgba(255,255,255,.07)'; x.textAlign = 'center'; x.fillText('TRUCO', w / 2, h / 2 + 20);
});

// ---------- Bar ----------
const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0.05, ...o });
(function room() {
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), std({ map: plankTex(), roughness: 0.9 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const wallMat = std({ map: woodTex('#3a2414', '#24140a', [4, 1]), roughness: 0.95 });
  const walls = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 14), [wallMat, wallMat, std({ color: 0x140c07 }), std({ color: 0x140c07 }), wallMat, wallMat]);
  walls.material.forEach(m => { m.side = THREE.BackSide; });
  walls.position.y = 2.5; scene.add(walls);
  // zócalo
  const wains = std({ color: 0x241309, roughness: 0.7 });
  [[0, -6.95, 14, 0.1], [0, 6.95, 14, 0.1], [-6.95, 0, 0.1, 14], [6.95, 0, 0.1, 14]].forEach(([x, z, w, d]) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.1, d), wains); m.position.set(x, 0.55, z); scene.add(m); });
  // barra con botellas
  const bar = new THREE.Group(); bar.position.set(0, 0, -5.6); scene.add(bar);
  const counter = new THREE.Mesh(new THREE.BoxGeometry(7, 1.1, 0.9), std({ map: woodTex('#4a2a15', '#2b170a', [3, 1]), roughness: 0.6 }));
  counter.position.y = 0.55; counter.castShadow = true; bar.add(counter);
  const topb = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.08, 1.05), std({ color: 0x2a160a, roughness: 0.35 })); topb.position.y = 1.12; bar.add(topb);
  const bottleCols = [0x2f9e44, 0x8a5a00, 0x5c2a0a, 0x1971c2, 0xc92a2a, 0xe8d7a8, 0x2b8a3e];
  for (let row = 0; row < 3; row++) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.05, 0.35), std({ color: 0x2b170a })); shelf.position.set(0, 1.7 + row * 0.6, -0.95); bar.add(shelf);
    for (let i = 0; i < 16; i++) {
      const c = bottleCols[(i * 3 + row) % bottleCols.length], hgt = 0.28 + Math.random() * 0.14;
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, hgt, 10), new THREE.MeshStandardMaterial({ color: c, roughness: 0.15, metalness: 0.1, emissive: c, emissiveIntensity: 0.25, transparent: true, opacity: 0.85 }));
      b.position.set(-3 + i * 0.4 + Math.random() * 0.1, 1.72 + row * 0.6 + hgt / 2, -0.95); bar.add(b);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.025, 0.1, 8), b.material); neck.position.set(b.position.x, b.position.y + hgt / 2 + 0.05, -0.95); bar.add(neck);
    }
  }
  const barLight = new THREE.PointLight(0xffa860, 6, 6, 2); barLight.position.set(0, 3, -4.8); scene.add(barLight);
  // cartel de neón
  const neonC = document.createElement('canvas'); neonC.width = 512; neonC.height = 128;
  const nx = neonC.getContext('2d'); nx.font = "700 92px 'Fredoka', Georgia, serif"; nx.textAlign = 'center'; nx.textBaseline = 'middle';
  nx.shadowColor = '#ff5a3c'; nx.shadowBlur = 24; nx.fillStyle = '#ffd2c4'; nx.fillText('TRUCO', 256, 68); nx.fillText('TRUCO', 256, 68);
  const neonT = new THREE.CanvasTexture(neonC); neonT.colorSpace = THREE.SRGBColorSpace;
  const neon = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: neonT, transparent: true, fog: false, toneMapped: false }));
  neon.position.set(0, 3.7, -6.9); scene.add(neon);
  const neonLight = new THREE.PointLight(0xff5a3c, 3, 5, 2); neonLight.position.set(0, 3.6, -6.4); scene.add(neonLight);
  neon.userData.light = neonLight;
  scene.userData.neon = neon;
  // barriles
  [[-5.5, -5.2], [5.6, -5.3], [5.5, 4.5], [-5.6, 4.8]].forEach(([x, z], i) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1, 18), std({ map: woodTex('#6b3f20', '#3b2010', [2, 1]) })); b.position.set(x, 0.5, z); b.castShadow = true; scene.add(b);
    [0.15, 0.85].forEach(y => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.025, 6, 24), std({ color: 0x333333, metalness: 0.7, roughness: 0.4 })); r.rotation.x = Math.PI / 2; r.position.set(x, y, z); scene.add(r); });
    if (i < 2) { const b2 = b.clone(); b2.position.y = 1.5; scene.add(b2); }
  });
  // cuadros
  [[-4, 2.4, -6.92], [4, 2.4, -6.92], [-6.92, 2.4, -1], [6.92, 2.4, 1]].forEach(([x, y, z], i) => {
    const f = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.9, 0.06), std({ color: 0x6b4a1a, metalness: 0.4, roughness: 0.5 }));
    f.position.set(x, y, z); if (Math.abs(x) > 6) f.rotation.y = Math.PI / 2; scene.add(f);
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.7), std({ map: tex(128, 96, (c, w, h) => { const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, ['#3b5b7a', '#7a4b2a', '#2a5a3a', '#5a2a3a'][i]); g.addColorStop(1, '#1a120a'); c.fillStyle = g; c.fillRect(0, 0, w, h); c.fillStyle = 'rgba(255,220,150,.5)'; c.beginPath(); c.arc(w * 0.7, h * 0.35, 12, 0, 7); c.fill(); c.fillStyle = '#120a05'; c.beginPath(); c.moveTo(0, h); c.lineTo(w * 0.3, h * 0.55); c.lineTo(w * 0.55, h * 0.75); c.lineTo(w, h * 0.5); c.lineTo(w, h); c.fill(); }) }));
    p.position.set(0, 0, 0.035); f.add(p);
  });
})();

// ---------- Mesa y lámpara ----------
export const TABLE_Y = 0.78;
const tables = { round: new THREE.Group(), rect: new THREE.Group() };
scene.add(tables.round, tables.rect);
export function setTableShape(shape) { tables.round.visible = shape === 'round'; tables.rect.visible = shape === 'rect'; }
(function table() {
  const R = tables.round;
  const top = new THREE.Mesh(new THREE.CylinderGeometry(1.32, 1.3, 0.09, 64), std({ map: woodTex('#5a2f15', '#2b1608', [2, 1]), roughness: 0.45 }));
  top.position.y = TABLE_Y - 0.05; top.castShadow = true; top.receiveShadow = true; R.add(top);
  const felt = new THREE.Mesh(new THREE.CylinderGeometry(1.16, 1.16, 0.012, 64), std({ map: feltTex(), roughness: 1 }));
  felt.position.y = TABLE_Y; felt.receiveShadow = true; R.add(felt);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.045, 10, 64), std({ color: 0x3a1d0c, roughness: 0.35 }));
  rim.rotation.x = Math.PI / 2; rim.position.y = TABLE_Y + 0.01; R.add(rim);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, TABLE_Y - 0.1, 16), std({ color: 0x2b1608 })); leg.position.y = (TABLE_Y - 0.1) / 2; R.add(leg);
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.06, 24), std({ color: 0x2b1608 })); foot.position.y = 0.03; R.add(foot);
  // mesa rectangular (3 vs 3)
  const Q = tables.rect;
  const wood = std({ map: woodTex('#5a2f15', '#2b1608', [3, 1]), roughness: 0.45 });
  const rtop = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.09, 1.95), wood); rtop.position.y = TABLE_Y - 0.05; rtop.castShadow = rtop.receiveShadow = true; Q.add(rtop);
  const rfelt = new THREE.Mesh(new THREE.BoxGeometry(3.05, 0.012, 1.7), std({ map: feltTex(), roughness: 1 })); rfelt.position.y = TABLE_Y; rfelt.receiveShadow = true; Q.add(rfelt);
  const rimM = std({ color: 0x3a1d0c, roughness: 0.35 });
  [[0, 0.9, 3.3, 0.1], [0, -0.9, 3.3, 0.1], [1.6, 0, 0.1, 1.9], [-1.6, 0, 0.1, 1.9]].forEach(([x, z, w, d]) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), rimM); m.position.set(x, TABLE_Y + 0.012, z); Q.add(m); });
  [[-1.45, -0.75], [1.45, -0.75], [-1.45, 0.75], [1.45, 0.75]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.1, TABLE_Y - 0.1, 0.1), std({ color: 0x2b1608 })); l.position.set(x, (TABLE_Y - 0.1) / 2, z); Q.add(l); });
  Q.visible = false;
  // lámpara colgante
  const lamp = new THREE.Group(); lamp.position.set(0, 2.55, 0); scene.add(lamp);
  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.5), std({ color: 0x111111 })); cord.position.y = 1.25; lamp.add(cord);
  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.32, 32, 1, true), std({ color: 0x1f4d2c, metalness: 0.3, roughness: 0.4, side: THREE.DoubleSide })); lamp.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe2a8, toneMapped: false })); bulb.position.y = -0.12; lamp.add(bulb);
  const spot = new THREE.SpotLight(0xffd59a, 40, 7, 0.8, 0.55, 2);
  spot.position.set(0, 2.42, 0); spot.target.position.set(0, 0, 0); spot.castShadow = true;
  spot.shadow.mapSize.set(2048, 2048); spot.shadow.bias = -0.0004; spot.shadow.radius = 4;
  scene.add(spot, spot.target);
  const fill = new THREE.PointLight(0xffb070, 3.5, 5, 2); fill.position.set(0, 2.2, 0); scene.add(fill);
  scene.add(new THREE.HemisphereLight(0x8a6a50, 0x120a05, 0.35));
  scene.userData.lamp = lamp;
})();

// sillas (se ubican cuando se arma la mesa)
const chairMat = std({ map: woodTex('#4a2712', '#2b1608', [1, 1]), roughness: 0.6 });
export function makeChair() {
  const g = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.48), chairMat); seat.position.y = 0.48; seat.castShadow = true; g.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.62, 0.05), chairMat); back.position.set(0, 0.8, 0.23); back.castShadow = true; g.add(back);
  [[-0.21, -0.2], [0.21, -0.2], [-0.21, 0.2], [0.21, 0.2]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.46, 0.05), chairMat); l.position.set(x, 0.23, z); g.add(l); });
  scene.add(g);
  return g;
}

// polvo flotando en la luz
const dust = (() => {
  const N = 260, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { const a = Math.random() * 6.28, r = Math.random() * 1.6; pos.set([Math.cos(a) * r, 0.9 + Math.random() * 1.6, Math.sin(a) * r], i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe0b0, size: 0.012, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(p); return p;
})();
export function updateScene(dt, t) {
  const a = dust.geometry.attributes.position;
  for (let i = 0; i < a.count; i++) {
    let y = a.getY(i) + dt * 0.03 * (1 + (i % 3));
    if (y > 2.5) y = 0.9;
    a.setY(i, y); a.setX(i, a.getX(i) + Math.sin(t * 0.3 + i) * dt * 0.02);
  }
  a.needsUpdate = true;
  scene.userData.lamp.rotation.z = Math.sin(t * 0.6) * 0.012;
  const n = scene.userData.neon;
  const flick = Math.random() < 0.01 ? 0.3 : 1;
  n.material.opacity = flick; n.userData.light.intensity = 3 * flick;
}

// ---------- Cartas ----------
export const CARD_W = 0.2, CARD_H = 0.316;
const ORDER_S = ['e', 'b', 'o', 'c'], ORDER_N = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
const loader = new THREE.TextureLoader();
const atlas = loader.load('assets/cartas.webp'); // relativo a index.html
atlas.colorSpace = THREE.SRGBColorSpace; atlas.anisotropy = 8;
const faceCache = new Map();
function faceTexture(c) {
  const k = c.s + c.n;
  if (!faceCache.has(k)) {
    const t = atlas.clone();
    t.repeat.set(1 / 10, 1 / 4);
    t.offset.set(ORDER_N.indexOf(c.n) / 10, 1 - (ORDER_S.indexOf(c.s) + 1) / 4);
    t.needsUpdate = true;
    faceCache.set(k, new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.5, roughness: 0.95, metalness: 0, color: 0xd9d0c0, side: THREE.FrontSide }));
  }
  return faceCache.get(k);
}
// Dorso azul (diseño propio, estilo clásico)
const backMat = new THREE.MeshStandardMaterial({
  roughness: 0.5, transparent: true, alphaTest: 0.5,
  map: tex(200, 316, (x, w, h) => {
    x.fillStyle = '#fbf8ef'; x.beginPath(); x.roundRect(0, 0, w, h, 16); x.fill();
    x.fillStyle = '#1a4597'; x.beginPath(); x.roundRect(9, 9, w - 18, h - 18, 10); x.fill();
    x.save(); x.beginPath(); x.roundRect(9, 9, w - 18, h - 18, 10); x.clip();
    x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 1.4;
    for (let i = -h; i < w + h; i += 12) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + h, h); x.stroke(); x.beginPath(); x.moveTo(i, h); x.lineTo(i + h, 0); x.stroke(); }
    x.fillStyle = 'rgba(255,255,255,.55)';
    for (let yy = 15; yy < h; yy += 12) for (let xx = 15 + ((yy / 12) % 2) * 6; xx < w; xx += 12) { x.beginPath(); x.arc(xx, yy, 1.2, 0, 7); x.fill(); }
    x.restore();
    x.strokeStyle = '#fbf8ef'; x.lineWidth = 3; x.beginPath(); x.roundRect(16, 16, w - 32, h - 32, 8); x.stroke();
    x.fillStyle = '#fbf8ef'; x.beginPath(); x.ellipse(w / 2, h / 2, 46, 58, 0, 0, 7); x.fill();
    x.strokeStyle = '#1a4597'; x.lineWidth = 3; x.beginPath(); x.ellipse(w / 2, h / 2, 40, 52, 0, 0, 7); x.stroke();
    x.save(); x.translate(w / 2, h / 2);
    for (let i = 0; i < 16; i++) { x.rotate(Math.PI / 8); x.fillStyle = i % 2 ? '#e2a72e' : '#1a4597'; x.beginPath(); x.moveTo(0, -12); x.lineTo(5, -32); x.lineTo(-5, -32); x.fill(); }
    x.fillStyle = '#e2a72e'; x.beginPath(); x.arc(0, 0, 13, 0, 7); x.fill();
    x.fillStyle = '#fbf8ef'; x.beginPath(); x.arc(0, 0, 7, 0, 7); x.fill();
    x.restore();
  }),
});
const cardGeo = new THREE.PlaneGeometry(CARD_W, CARD_H);
const basicCache = new Map();
function basicFace(c) {
  const k = c.s + c.n;
  if (!basicCache.has(k)) { const m = faceTexture(c); basicCache.set(k, new THREE.MeshBasicMaterial({ map: m.map, transparent: true, alphaTest: 0.5, color: 0xf2e8d8 })); }
  return basicCache.get(k);
}
export function makeCard(c, { lit = true } = {}) {
  const g = new THREE.Group();
  const front = new THREE.Mesh(cardGeo, c ? (lit ? faceTexture(c) : basicFace(c)) : backMat);
  const back = new THREE.Mesh(cardGeo, backMat); back.rotation.y = Math.PI;
  front.castShadow = true; back.castShadow = true;
  g.add(front, back);
  g.userData.front = front;
  scene.add(g);
  return g;
}
const deckSide = new THREE.MeshStandardMaterial({ color: 0xf3ede0, roughness: 0.8 });
export function makeStack(count) {
  const h = Math.max(0.004, count * 0.0011);
  const m = new THREE.Mesh(new THREE.BoxGeometry(CARD_W, h, CARD_H), [deckSide, deckSide, backMat, backMat, deckSide, deckSide]);
  m.castShadow = true; m.userData.h = h;
  scene.add(m);
  return m;
}
export function setCardFace(g, c) { g.userData.front.material = c ? faceTexture(c) : backMat; }
