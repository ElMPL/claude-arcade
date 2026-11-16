// Modelo 3D de un auto de fórmula original (sin marcas). Mira hacia +z, centro en el CG.
// La carrocería se arma por secciones suaves (loft); cada parte rompible va en su propio grupo.
import * as THREE from 'three';
import { CAR } from './physics.js';

export const LIVERIES = [
  { name: 'Rojo carrera', c1: '#d7141a', c2: '#ffd400', helm: '#ffd400' },
  { name: 'Plata y turquesa', c1: '#b9c3c9', c2: '#00c2a8', helm: '#1b1f24' },
  { name: 'Naranja', c1: '#ff7a00', c2: '#1d6bff', helm: '#ff7a00' },
  { name: 'Azul noche', c1: '#122a6b', c2: '#ff2a55', helm: '#ffd400' },
  { name: 'Verde', c1: '#0a6b47', c2: '#c7ff3a', helm: '#ffffff' },
  { name: 'Rosa', c1: '#ff4fa3', c2: '#2a1a5e', helm: '#ff4fa3' },
  { name: 'Celeste', c1: '#4fc3ff', c2: '#ffffff', helm: '#ffffff' },
  { name: 'Amarillo', c1: '#ffd21a', c2: '#151515', helm: '#151515' },
  { name: 'Blanco', c1: '#f3f3f3', c2: '#e3262e', helm: '#e3262e' },
  { name: 'Negro y oro', c1: '#17171a', c2: '#d4a64a', helm: '#d4a64a' },
];

// ---------- geometría ----------
const Z0 = 3.15, Z1 = -2.35; // rango de la textura de pintura a lo largo del auto
const cr = (p0, p1, p2, p3, t) => 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
// Secciones superelípticas {z, cx, hw (medio ancho), b (abajo), t (arriba), n (forma)} unidas con splines
function loft(secs, { seg = 28, steps = 6, capA = true, capB = true } = {}) {
  const keys = ['z', 'cx', 'hw', 'b', 't', 'n'];
  const S = secs.map(s => ({ cx: 0, n: 2.6, ...s }));
  const rings = [];
  for (let i = 0; i < S.length - 1; i++) {
    for (let k = 0; k < steps; k++) {
      const t = k / steps, r = {};
      for (const key of keys) r[key] = cr(S[Math.max(0, i - 1)][key], S[i][key], S[i + 1][key], S[Math.min(S.length - 1, i + 2)][key], t);
      rings.push(r);
    }
  }
  rings.push({ ...S[S.length - 1] });
  const pos = [], uv = [], idx = [];
  for (const r of rings) {
    const cy = (r.t + r.b) / 2, hh = Math.max(0.002, (r.t - r.b) / 2), hw = Math.max(0.002, r.hw), e = 2 / Math.max(1.2, r.n);
    for (let k = 0; k <= seg; k++) {
      const th = -Math.PI / 2 + (k / seg) * Math.PI * 2, c = Math.cos(th), s = Math.sin(th);
      pos.push(r.cx + hw * Math.sign(c) * Math.pow(Math.abs(c), e), cy + hh * Math.sign(s) * Math.pow(Math.abs(s), e), r.z);
      uv.push(k / seg, (Z0 - r.z) / (Z0 - Z1));
    }
  }
  const W = seg + 1;
  for (let j = 0; j < rings.length - 1; j++) for (let k = 0; k < seg; k++) {
    const a = j * W + k, b = a + 1, c = a + W, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const cap = (j, flip) => {
    const r = rings[j], ci = pos.length / 3;
    pos.push(r.cx, (r.t + r.b) / 2, r.z); uv.push(0.5, (Z0 - r.z) / (Z0 - Z1));
    for (let k = 0; k < seg; k++) { const a = j * W + k, b = a + 1; flip ? idx.push(ci, a, b) : idx.push(ci, b, a); }
  };
  if (capA) cap(0, rings[0].z < rings[1].z);
  if (capB) cap(rings.length - 1, rings[rings.length - 1].z > rings[rings.length - 2].z);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  // orientar las caras hacia afuera según el orden de las secciones
  if (S[0].z < S[S.length - 1].z) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } g.computeVertexNormals(); }
  return g;
}
// perfil lateral (z, y) extruido a lo ancho (x), con pasos para poder curvarlo
function profile(pts, width, { bevel = 0, steps = 1, curve = false } = {}) {
  const sh = new THREE.Shape();
  sh.moveTo(pts[0][0], pts[0][1]);
  if (curve) sh.splineThru(pts.slice(1).map(p => new THREE.Vector2(p[0], p[1]))); else pts.slice(1).forEach(p => sh.lineTo(p[0], p[1]));
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: width - bevel * 2, steps, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 16 });
  g.rotateY(-Math.PI / 2);
  g.translate((width - bevel * 2) / 2, 0, 0);
  g.computeVertexNormals();
  return g;
}
function airfoilPts(chord, thick) {
  const f = t => 0.2969 * Math.sqrt(t) - 0.126 * t - 0.3516 * t * t + 0.2843 * t ** 3 - 0.1015 * t ** 4;
  const pts = [];
  for (let i = 0; i <= 14; i++) { const t = 1 - i / 14; pts.push([chord * (0.5 - t), thick * 5 * f(t)]); }
  for (let i = 13; i > 0; i--) { const t = 1 - i / 14; pts.push([chord * (0.5 - t), -thick * 2.4 * f(t)]); }
  return pts;
}
// ala curvada: bend(xRel 0..1) -> [dy, dz]
function wing(chord, thick, span, bend) {
  const g = profile(airfoilPts(chord, thick), span, { steps: 14 });
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const u = (p.getX(i) + span / 2) / span, [dy, dz] = bend(u); p.setY(i, p.getY(i) + dy); p.setZ(i, p.getZ(i) + dz); }
  g.computeVertexNormals();
  return g;
}
function rodGeo(a, b, r = 0.018) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), L = d.length();
  const g = new THREE.CylinderGeometry(r, r, L, 6); g.translate(0, L / 2, 0);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
  g.translate(A.x, A.y, A.z);
  return g;
}

const G = {};
function geo() {
  if (G.ok) return G;
  G.ok = true;
  G.box = new THREE.BoxGeometry(1, 1, 1);
  // trompa (se desprende)
  G.nose = loft([
    { z: 3.06, hw: 0.05, b: 0.18, t: 0.25, n: 2.2 },
    { z: 2.85, hw: 0.11, b: 0.16, t: 0.31 },
    { z: 2.4, hw: 0.17, b: 0.14, t: 0.38 },
    { z: 1.9, hw: 0.22, b: 0.13, t: 0.45 },
    { z: 1.45, hw: 0.27, b: 0.12, t: 0.51, n: 2.8 },
  ], { capB: false });
  // monocasco + cubierta de motor
  G.body = loft([
    { z: 1.47, hw: 0.27, b: 0.12, t: 0.51, n: 2.8 },
    { z: 1.0, hw: 0.32, b: 0.12, t: 0.57, n: 3 },
    { z: 0.4, hw: 0.35, b: 0.12, t: 0.6, n: 3 },
    { z: -0.15, hw: 0.36, b: 0.12, t: 0.66, n: 3 },
    { z: -0.7, hw: 0.31, b: 0.12, t: 0.72, n: 2.8 },
    { z: -1.3, hw: 0.22, b: 0.13, t: 0.62, n: 2.6 },
    { z: -1.85, hw: 0.13, b: 0.15, t: 0.48, n: 2.4 },
    { z: -2.25, hw: 0.07, b: 0.17, t: 0.38, n: 2.2 },
  ], { capA: false, steps: 8 });
  // toma de aire sobre el piloto (roll hoop)
  G.airbox = loft([
    { z: 0.12, hw: 0.11, b: 0.6, t: 1.0, n: 2.2 },
    { z: -0.15, hw: 0.15, b: 0.6, t: 1.05, n: 2.4 },
    { z: -0.6, hw: 0.16, b: 0.6, t: 0.92, n: 2.6 },
    { z: -1.15, hw: 0.12, b: 0.55, t: 0.76, n: 2.6 },
    { z: -1.5, hw: 0.06, b: 0.55, t: 0.62 },
  ]);
  // pontón con undercut (lado izquierdo; el derecho se espeja)
  const pod = sd => loft([
    { z: 0.88, cx: sd * 0.5, hw: 0.2, b: 0.26, t: 0.56, n: 3.4 },
    { z: 0.65, cx: sd * 0.54, hw: 0.23, b: 0.2, t: 0.57, n: 3.2 },
    { z: 0.1, cx: sd * 0.55, hw: 0.23, b: 0.14, t: 0.53, n: 3 },
    { z: -0.6, cx: sd * 0.5, hw: 0.2, b: 0.12, t: 0.43, n: 2.8 },
    { z: -1.25, cx: sd * 0.39, hw: 0.14, b: 0.13, t: 0.31, n: 2.6 },
    { z: -1.7, cx: sd * 0.26, hw: 0.05, b: 0.15, t: 0.22, n: 2.2 },
  ], { steps: 6 });
  G.podL = pod(1); G.podR = pod(-1);
  G.inlet = new THREE.CircleGeometry(1, 20);
  G.cockpit = new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  G.fin = profile([[-0.5, 0.98], [-1.95, 0.7], [-2.02, 0.56], [-0.7, 0.82]], 0.018);
  G.floor = (() => {
    const s = new THREE.Shape(); const w = 0.78;
    s.moveTo(-0.3, 1.45); s.lineTo(0.3, 1.45); s.quadraticCurveTo(w, 1.1, w, 0.55); s.lineTo(w, -1.5); s.quadraticCurveTo(w, -2.0, 0.55, -2.1); s.lineTo(-0.55, -2.1); s.quadraticCurveTo(-w, -2.0, -w, -1.5); s.lineTo(-w, 0.55); s.quadraticCurveTo(-w, 1.1, -0.3, 1.45);
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.01, bevelSegments: 2 }); g.rotateX(Math.PI / 2); g.translate(0, 0.085, 0); return g;
  })();
  G.floorEdge = profile([[0.9, 0.06], [-1.4, 0.06], [-1.45, 0.13], [0.6, 0.11]], 0.012);
  G.diffuser = profile([[-1.6, 0.07], [-2.18, 0.2], [-2.2, 0.26], [-1.6, 0.11]], 1.0);
  // alerón delantero: 3 elementos que suben y se barren hacia afuera
  const fwBend = (lift, sweep) => u => [lift * u * u, -sweep * u * u];
  G.fw1 = wing(0.52, 0.04, 0.83, fwBend(0.03, 0.04));
  G.fw2 = wing(0.3, 0.032, 0.8, fwBend(0.1, 0.12));
  G.fw3 = wing(0.22, 0.028, 0.74, fwBend(0.16, 0.2));
  G.endF = profile([[2.38, 0.05], [3.08, 0.05], [3.07, 0.2], [2.9, 0.29], [2.55, 0.33], [2.38, 0.25]], 0.022, { curve: true });
  // alerón trasero tipo cuchara
  const spoon = d => u => [-d * (1 - Math.pow(2 * u - 1, 2)), 0];
  G.rw1 = wing(0.4, 0.06, 0.94, spoon(0.04));
  G.rw2 = wing(0.25, 0.045, 0.94, spoon(0.03));
  G.beam = wing(0.2, 0.04, 0.8, spoon(0.0));
  G.endR = profile([[-2.05, 0.4], [-2.62, 0.45], [-2.72, 0.7], [-2.7, 1.04], [-2.12, 1.06], [-2.02, 0.85]], 0.022, { curve: true });
  G.swan = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.55, -1.75), new THREE.Vector3(0, 0.82, -1.9), new THREE.Vector3(0, 0.98, -2.12), new THREE.Vector3(0, 0.93, -2.3)]), 16, 0.022, 6);
  // halo
  G.halo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([[0.31, 0.6, -0.12], [0.34, 0.72, 0.15], [0.24, 0.77, 0.38], [0, 0.79, 0.47], [-0.24, 0.77, 0.38], [-0.34, 0.72, 0.15], [-0.31, 0.6, -0.12]].map(p => new THREE.Vector3(...p))), 40, 0.034, 8);
  G.haloPillar = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([[0, 0.79, 0.47], [0, 0.72, 0.62], [0, 0.6, 0.78]].map(p => new THREE.Vector3(...p))), 10, 0.03, 6);
  G.helm = new THREE.SphereGeometry(0.155, 22, 16);
  G.visor = new THREE.SphereGeometry(0.158, 22, 8, -0.9, 1.8, 1.1, 0.45);
  G.mirror = loft([{ z: 0.06, hw: 0.075, b: -0.03, t: 0.03, n: 3 }, { z: -0.02, hw: 0.08, b: -0.035, t: 0.035, n: 3 }], { steps: 2 });
  // ruedas
  const tire = w => {
    const R = CAR.R, h = w / 2, pts = [[0.24, -h], [0.315, -h], [0.345, -h + 0.025], [0.358, -h + 0.07], [R, -h + 0.11], [R, h - 0.11], [0.358, h - 0.07], [0.345, h - 0.025], [0.315, h], [0.24, h]].map(p => new THREE.Vector2(p[0], p[1]));
    const g = new THREE.LatheGeometry(pts, 40); g.rotateZ(Math.PI / 2); return g;
  };
  G.tireF = tire(0.37); G.tireR = tire(0.45);
  G.barrel = new THREE.CylinderGeometry(0.245, 0.245, 1, 24, 1, true); G.barrel.rotateZ(Math.PI / 2);
  G.disc = new THREE.CircleGeometry(0.245, 28);
  G.brake = new THREE.CylinderGeometry(0.17, 0.17, 0.04, 20); G.brake.rotateZ(Math.PI / 2);
  G.ring = new THREE.RingGeometry(0.27, 0.3, 40);
  G.wheelWing = (() => { const g = new THREE.TorusGeometry(0.43, 0.012, 4, 16, 1.3); g.rotateY(Math.PI / 2); g.rotateX(0.95); return g; })();
  G.duct = loft([{ z: 0.14, hw: 0.05, b: -0.08, t: 0.08, n: 3 }, { z: -0.14, hw: 0.05, b: -0.1, t: 0.1, n: 3 }], { steps: 2 });
  return G;
}

const MATS = {};
function mat(key, make) { if (!MATS[key]) MATS[key] = make(); return MATS[key]; }
const std = (color, o = {}) => mat('s' + color + JSON.stringify(o), () => new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.2, ...o }));
const paintM = color => mat('p' + color, () => new THREE.MeshPhysicalMaterial({ color, roughness: 0.38, metalness: 0.15, clearcoat: 0.8, clearcoatRoughness: 0.12 }));
function carbonM() {
  return mat('carbon', () => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const x = cv.getContext('2d');
    x.fillStyle = '#16171b'; x.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#202228' : '#121317'; x.fillRect(i * 8, j * 8, 8, 4); x.fillStyle = (i + j) % 2 ? '#121317' : '#202228'; x.fillRect(i * 8, j * 8 + 4, 8, 4); }
    const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 6); t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.38, metalness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  });
}
function rimTex() {
  return mat('rimtex', () => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
    x.fillStyle = '#1b1d22'; x.beginPath(); x.arc(64, 64, 64, 0, 7); x.fill();
    x.strokeStyle = '#a7adb5'; x.lineWidth = 9;
    for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; x.beginPath(); x.moveTo(64 + Math.cos(a) * 16, 64 + Math.sin(a) * 16); x.lineTo(64 + Math.cos(a + 0.25) * 60, 64 + Math.sin(a + 0.25) * 60); x.stroke(); }
    x.fillStyle = '#d3d7dc'; x.beginPath(); x.arc(64, 64, 15, 0, 7); x.fill(); x.fillStyle = '#e8c21a'; x.beginPath(); x.arc(64, 64, 6, 0, 7); x.fill();
    x.strokeStyle = '#c9ced4'; x.lineWidth = 4; x.beginPath(); x.arc(64, 64, 61, 0, 7); x.stroke();
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshStandardMaterial({ map: t, metalness: 0.7, roughness: 0.35, side: THREE.DoubleSide });
  });
}
// pintura con diseño: base, franja superior, banda lateral y panza de carbono (u = vuelta, v = largo)
function liveryM(L) {
  return mat('liv' + L.c1 + L.c2, () => {
    const W = 256, H = 1024, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const x = cv.getContext('2d');
    const zy = z => (Z0 - z) / (Z0 - Z1) * H;
    x.fillStyle = L.c1; x.fillRect(0, 0, W, H);
    // brillo suave hacia arriba
    const gr = x.createLinearGradient(0, 0, W, 0); gr.addColorStop(0, 'rgba(0,0,0,0.25)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.08)'); gr.addColorStop(1, 'rgba(0,0,0,0.25)');
    x.fillStyle = gr; x.fillRect(0, 0, W, H);
    // franja superior (trompa y cubierta de motor)
    x.fillStyle = L.c2; x.fillRect(W * 0.465, 0, W * 0.07, zy(1.0)); x.fillRect(W * 0.465, zy(-0.6), W * 0.07, H);
    x.fillStyle = '#fff'; x.fillRect(W * 0.455, 0, W * 0.008, zy(1.0)); x.fillRect(W * 0.537, 0, W * 0.008, zy(1.0));
    // banda lateral en diagonal (los dos lados)
    for (const uc of [0.25, 0.75]) {
      x.fillStyle = L.c2;
      x.beginPath(); x.moveTo(W * (uc - 0.13), zy(1.4)); x.lineTo(W * (uc + 0.02), zy(1.4)); x.lineTo(W * (uc + 0.13), zy(-1.6)); x.lineTo(W * (uc - 0.02), zy(-1.6)); x.closePath(); x.fill();
      x.strokeStyle = 'rgba(255,255,255,0.85)'; x.lineWidth = 3; x.stroke();
    }
    // panza de carbono
    x.fillStyle = '#16171b'; x.fillRect(0, 0, W * 0.1, H); x.fillRect(W * 0.9, 0, W * 0.1, H);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.35, metalness: 0.2, clearcoat: 0.9, clearcoatRoughness: 0.1 });
  });
}
function numberTex(num, c1, c2) {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const x = cv.getContext('2d');
  x.clearRect(0, 0, 128, 128);
  x.font = 'italic 900 96px "Titillium Web", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 10; x.strokeStyle = c2 === '#ffffff' ? '#111' : c2; x.strokeText(String(num), 64, 70);
  x.fillStyle = '#fff'; x.fillText(String(num), 64, 70);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function makeCarMesh(livery, num) {
  const g = geo();
  const L = typeof livery === 'number' ? LIVERIES[livery % LIVERIES.length] : livery;
  const liv = liveryM(L), accent = paintM(L.c2), carbon = carbonM();
  const black = std('#08080a', { roughness: 0.7, metalness: 0 });
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const add = (parent, geom, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, shadow = true) => {
    const o = new THREE.Mesh(geom, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.rotation.set(rx, ry, rz); o.castShadow = shadow; parent.add(o); return o;
  };
  add(body, g.floor, carbon);
  add(body, g.floorEdge, carbon, 0.77, 0, 0); add(body, g.floorEdge, carbon, -0.77, 0, 0);
  add(body, g.diffuser, carbon);
  for (const sx of [-0.25, 0, 0.25]) add(body, g.box, carbon, sx, 0.16, -2.0, 0.012, 0.14, 0.38, -0.25);
  add(body, g.body, liv);
  add(body, g.airbox, liv);
  add(body, g.inlet, black, 0, 0.84, 0.125, 0.08, 0.13, 1, 0, 0, 0, false);
  add(body, g.fin, accent);
  add(body, g.cockpit, black, 0, 0.585, 0.3, 0.25, 0.05, 0.5, 0, 0, 0, false);
  add(body, g.halo, carbon); add(body, g.haloPillar, carbon);
  add(body, g.helm, mat('h' + L.helm, () => new THREE.MeshPhysicalMaterial({ color: L.helm, roughness: 0.2, metalness: 0.2, clearcoat: 1 })), 0, 0.69, 0.05);
  add(body, g.visor, std('#0c0c10', { metalness: 0.9, roughness: 0.08 }), 0, 0.69, 0.05, 1, 1, 1, 0, 0, 0, false);
  add(body, g.box, accent, 0, 1.08, -0.2, 0.06, 0.05, 0.14); // T-cam
  add(body, rodGeo([0, 0.98, -0.5], [0, 1.12, -0.62], 0.006), carbon); // antena
  for (const sx of [1, -1]) {
    add(body, g.mirror, liv, sx * 0.47, 0.64, 0.72);
    add(body, rodGeo([sx * 0.3, 0.58, 0.7], [sx * 0.42, 0.63, 0.72], 0.012), carbon);
  }
  add(body, g.swan, carbon);
  const rain = add(body, g.box, new THREE.MeshStandardMaterial({ color: '#ff2030', emissive: '#ff0018', emissiveIntensity: 0.5 }), 0, 0.3, -2.25, 0.14, 0.06, 0.03, 0, 0, 0, false);
  const nm = new THREE.MeshBasicMaterial({ map: numberTex(num, L.c1, L.c2), transparent: true });
  const np = new THREE.PlaneGeometry(0.3, 0.3);
  const n2 = new THREE.Mesh(np, nm); n2.rotation.y = Math.PI / 2; n2.position.set(0.215, 0.62, -0.75); n2.rotation.z = 0; body.add(n2);
  const n3 = new THREE.Mesh(np, nm); n3.rotation.y = -Math.PI / 2; n3.position.set(-0.215, 0.62, -0.75); body.add(n3);

  // trompa + alerón delantero (cada mitad por separado)
  const nose = new THREE.Group(); body.add(nose);
  add(nose, g.nose, liv);
  const n1 = new THREE.Mesh(np, nm); n1.rotation.x = -Math.PI / 2 + 0.14; n1.position.set(0, 0.452, 2.05); n1.scale.setScalar(0.85); nose.add(n1);
  for (const sx of [0.1, -0.1]) add(nose, g.box, carbon, sx, 0.15, 2.66, 0.025, 0.12, 0.34, 0, 0, sx > 0 ? -0.12 : 0.12);
  const fw = [];
  for (const sd of [1, -1]) {
    const w = new THREE.Group(); nose.add(w);
    const place = (geom, m, y, z, rx) => { const o = add(w, geom, m, sd * 0.53, y, z, 1, 1, 1, rx); if (sd < 0) o.scale.x = -1; return o; };
    place(g.fw1, carbon, 0.1, 2.8, 0);
    place(g.fw2, accent, 0.19, 2.63, -0.3);
    place(g.fw3, carbon, 0.27, 2.52, -0.55);
    add(w, g.endF, accent, sd * 0.955, 0, 0);
    fw.push(w);
  }
  // pontones
  const pods = [];
  for (const sd of [1, -1]) {
    const p = new THREE.Group(); body.add(p);
    add(p, sd > 0 ? g.podL : g.podR, liv);
    add(p, g.inlet, black, sd * 0.53, 0.42, 0.885, 0.17, 0.13, 1, 0, 0, 0, false);
    pods.push(p);
  }
  // alerón trasero
  const rw = new THREE.Group(); body.add(rw);
  add(rw, g.rw1, liv, 0, 0.9, -2.4, 1, 1, 1, 0.05);
  add(rw, g.rw2, accent, 0, 1.0, -2.24, 1, 1, 1, -0.42);
  add(rw, g.endR, liv, 0.48, 0, 0); add(rw, g.endR, liv, -0.48, 0, 0);
  add(rw, g.beam, carbon, 0, 0.5, -2.36, 1, 1, 1, -0.15);

  // ruedas (cada esquina: rueda + suspensión, se puede perder)
  const rubber = std('#141416', { roughness: 0.92, metalness: 0 });
  const stripe = std('#e8c21a', { roughness: 0.6, side: THREE.DoubleSide });
  const discM = new THREE.MeshStandardMaterial({ color: '#3a3a3a', emissive: '#ff5a10', emissiveIntensity: 0, metalness: 0.6, roughness: 0.4 });
  const wheels = [], corners = [];
  const WP = [[0.8, CAR.a, 1], [-0.8, CAR.a, 1], [0.8, -CAR.b, 0], [-0.8, -CAR.b, 0]];
  for (const [x, z, f] of WP) {
    const corner = new THREE.Group(); root.add(corner); corners.push(corner);
    const pivot = new THREE.Group(); pivot.position.set(x, CAR.R, z); corner.add(pivot);
    const spin = new THREE.Group(); pivot.add(spin);
    const w = f ? 0.37 : 0.45, sd = Math.sign(x);
    const t = new THREE.Mesh(f ? g.tireF : g.tireR, rubber); t.castShadow = true; spin.add(t);
    const br = new THREE.Mesh(g.barrel, std('#25272c', { metalness: 0.7, roughness: 0.35 })); br.scale.set(w - 0.02, 1, 1); spin.add(br);
    for (const s2 of [1, -1]) {
      const d = new THREE.Mesh(g.disc, rimTex()); d.rotation.y = s2 * Math.PI / 2; d.position.x = s2 * (w / 2 - 0.05); spin.add(d);
      const ring = new THREE.Mesh(g.ring, stripe); ring.rotation.y = s2 * Math.PI / 2; ring.position.x = s2 * (w / 2 + 0.003); spin.add(ring);
    }
    const disc = new THREE.Mesh(g.brake, discM); disc.position.x = -sd * 0.05; pivot.add(disc);
    const duct = new THREE.Mesh(g.duct, carbon); duct.position.set(-sd * 0.2, 0.02, 0); pivot.add(duct);
    if (f) { const ww = new THREE.Mesh(g.wheelWing, carbon); ww.position.set(-sd * 0.05, 0, 0); pivot.add(ww); }
    wheels.push({ pivot, spin, front: !!f });
    // brazos de suspensión (dos triángulos + push-rod)
    const ix = sd * 0.3, ox = x - sd * 0.16, y0 = CAR.R;
    const arms = [[[ix, y0 + 0.12, z + 0.3], [ox, y0 + 0.13, z]], [[ix, y0 + 0.12, z - 0.3], [ox, y0 + 0.13, z]], [[ix, y0 - 0.1, z + 0.32], [ox, y0 - 0.11, z]], [[ix, y0 - 0.1, z - 0.32], [ox, y0 - 0.11, z]], [[ix * 0.8, y0 + 0.24, z - 0.05], [ox, y0 - 0.1, z]]];
    for (const [a, b] of arms) corner.add(new THREE.Mesh(rodGeo(a, b, 0.016), carbon));
  }
  const parts = [fw[0], fw[1], nose, rw, corners[0], corners[1], corners[2], corners[3], pods[0], pods[1], null];
  root.userData = { wheels, body, rain, livery: L, parts, discM, rnd: Array.from({ length: 11 }, () => Math.random() - 0.5) };
  return root;
}

export function damageVisual(mesh, dmg) {
  const U = mesh.userData, out = [];
  for (let p = 0; p < 10; p++) {
    const d = dmg[p] || 0, o = U.parts[p];
    if (!o) continue;
    if (d >= 1) { if (o.visible) { o.visible = false; out.push(p); } continue; }
    if (!o.visible) o.visible = true;
    const r = U.rnd[p];
    if (p <= 1) { const sd = p === 0 ? 1 : -1; o.rotation.set(d * 0.18, r * d * 0.2, -sd * d * 0.22); o.position.set(0, -d * 0.06, -d * 0.05); }
    else if (p === 2) o.rotation.set(d * 0.08, r * d * 0.15, 0);
    else if (p === 3) { o.rotation.set(-d * 0.35, r * d * 0.2, r * d * 0.3); o.position.y = -d * 0.08; }
    else if (p <= 7) { const sd = (p === 4 || p === 6) ? 1 : -1; o.rotation.set(0, d > 0.2 ? r * d * 0.25 : 0, d > 0.2 ? sd * d * 0.18 : 0); }
    else { o.rotation.set(0, 0, r * d * 0.15); o.position.y = -d * 0.04; o.scale.set(1 - d * 0.15, 1, 1); }
  }
  return out;
}
export function resetDamageVisual(mesh) {
  for (const o of mesh.userData.parts) if (o) { o.visible = true; o.rotation.set(0, 0, 0); o.position.set(0, 0, 0); o.scale.set(1, 1, 1); }
}

export function poseCar(mesh, c) {
  mesh.position.set(c.x, 0, c.z);
  mesh.rotation.set(0, c.h, 0);
  const W = mesh.userData.wheels;
  for (let i = 0; i < 4; i++) {
    const w = W[i];
    if (w.front) w.pivot.rotation.y = c.steer || 0;
    w.spin.rotation.x = c.rot ? c.rot[i] : 0;
  }
  const b = mesh.userData.body;
  const ax = c.axs || 0, ay = c.ays || 0;
  b.rotation.x += ((-ax * 0.0022) - b.rotation.x) * 0.2;
  b.rotation.z += ((ay * 0.0016) - b.rotation.z) * 0.2;
  let roll = 0, pitch = 0;
  if (c.dmg) { if (c.dmg[4] >= 1 || c.dmg[6] >= 1) roll -= 0.06; if (c.dmg[5] >= 1 || c.dmg[7] >= 1) roll += 0.06; if (c.dmg[4] >= 1 || c.dmg[5] >= 1) pitch += 0.05; if (c.dmg[6] >= 1 || c.dmg[7] >= 1) pitch -= 0.05; }
  b.position.y = -0.012 * Math.min(1, (c.vx || 0) * (c.vx || 0) / 7000) - Math.abs(roll) * 2 - Math.abs(pitch) * 2;
  b.rotation.z += roll * 0.2; b.rotation.x += pitch * 0.2;
  const heat = Math.min(1, (c.brk || 0) * Math.max(0, c.vx || 0) / 60);
  const dm = mesh.userData.discM; dm.emissiveIntensity += (heat * 2.5 - dm.emissiveIntensity) * 0.08;
}
