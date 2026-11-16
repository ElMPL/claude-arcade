// Modelo 3D de un auto de fórmula original (sin marcas). Mira hacia +z, centro en el CG.
// Cada parte que se puede romper está en su propio grupo (alerones, trompa, esquinas, pontones).
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

// --- utilidades de geometría ---
// perfil lateral (z, y) extruido a lo ancho (x), centrado en x
function profile(pts, width, { bevel = 0.02, taper = null, curve = true } = {}) {
  const sh = new THREE.Shape();
  if (curve) {
    sh.moveTo(pts[0][0], pts[0][1]);
    sh.splineThru(pts.slice(1).map(p => new THREE.Vector2(p[0], p[1])));
    sh.lineTo(pts[0][0], pts[0][1]);
  } else { sh.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => sh.lineTo(p[0], p[1])); sh.closePath(); }
  const g = new THREE.ExtrudeGeometry(sh, { depth: width - bevel * 2, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 18 });
  g.rotateY(-Math.PI / 2);
  g.translate((width - bevel * 2) / 2, 0, 0);
  if (taper) { const p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setX(i, p.getX(i) * taper(p.getZ(i), p.getY(i))); }
  g.computeVertexNormals();
  return g;
}
// perfil alar (cuerda a lo largo de z, espesor en y)
function airfoil(chord, thick, span) {
  const f = t => 0.2969 * Math.sqrt(t) - 0.126 * t - 0.3516 * t * t + 0.2843 * t ** 3 - 0.1015 * t ** 4;
  const pts = [];
  for (let i = 0; i <= 12; i++) { const t = 1 - i / 12; pts.push([chord * (0.5 - t), thick * 5 * f(t)]); }
  for (let i = 12; i >= 0; i--) { const t = 1 - i / 12; pts.push([chord * (0.5 - t), -thick * 2.2 * f(t)]); }
  return profile(pts, span, { bevel: 0, curve: false });
}

const G = {};
function geo() {
  if (G.ok) return G;
  G.ok = true;
  G.box = new THREE.BoxGeometry(1, 1, 1);
  G.tub = profile([[-0.75, 0.12], [1.5, 0.13], [1.5, 0.5], [0.95, 0.56], [0.35, 0.6], [-0.75, 0.64]], 0.7, { bevel: 0.05, curve: false, taper: z => 1 - 0.28 * Math.max(0, (z - 0.55) / 0.95) });
  G.nose = profile([[1.45, 0.14], [2.4, 0.17], [3.0, 0.22], [3.08, 0.28], [2.9, 0.34], [2.2, 0.42], [1.45, 0.5]], 0.5, { bevel: 0.03, taper: z => Math.max(0.3, 1 - 0.68 * Math.max(0, (z - 1.45) / 1.6)) });
  G.pod = profile([[0.78, 0.15], [-0.4, 0.11], [-1.55, 0.13], [-1.6, 0.3], [-0.6, 0.42], [0.55, 0.55], [0.8, 0.56]], 0.44, { bevel: 0.06, taper: z => 1 - 0.18 * Math.max(0, (-z) / 1.6) });
  G.cover = profile([[-0.1, 0.5], [0.02, 0.98], [-0.25, 1.06], [-0.7, 0.92], [-1.4, 0.68], [-2.15, 0.46], [-2.15, 0.3], [-0.2, 0.32]], 0.46, { bevel: 0.04, taper: z => 1 - 0.55 * Math.max(0, Math.min(1, (-z - 0.2) / 1.9)) });
  G.fin = profile([[-0.45, 0.95], [-1.9, 0.66], [-1.95, 0.55], [-0.6, 0.85]], 0.02, { bevel: 0, curve: false });
  G.floor = (() => {
    const s = new THREE.Shape(); const w = 0.76, r = 0.25;
    s.moveTo(-w + r, -2.05); s.lineTo(w - r, -2.05); s.quadraticCurveTo(w, -2.05, w, -2.05 + r); s.lineTo(w, 0.75); s.quadraticCurveTo(w, 1.25, 0.25, 1.4); s.lineTo(-0.25, 1.4); s.quadraticCurveTo(-w, 1.25, -w, 0.75); s.lineTo(-w, -2.05 + r); s.quadraticCurveTo(-w, -2.05, -w + r, -2.05);
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: false }); g.rotateX(Math.PI / 2); g.translate(0, 0.085, 0); return g;
  })();
  G.wingMain = airfoil(0.5, 0.045, 0.83);
  G.wingFlap = airfoil(0.3, 0.035, 0.78);
  G.wingFlap2 = airfoil(0.2, 0.03, 0.7);
  G.rwMain = airfoil(0.42, 0.06, 0.96);
  G.rwFlap = airfoil(0.26, 0.045, 0.96);
  G.endF = profile([[2.42, 0.06], [3.08, 0.06], [3.06, 0.24], [2.72, 0.3], [2.42, 0.22]], 0.025, { bevel: 0, curve: false });
  G.endR = profile([[-2.05, 0.42], [-2.72, 0.48], [-2.75, 1.05], [-2.12, 1.06], [-2.05, 0.8]], 0.025, { bevel: 0, curve: false });
  const tire = (w) => {
    const R = CAR.R, h = w / 2, pts = [[0.24, -h], [0.315, -h], [0.345, -h + 0.025], [0.358, -h + 0.07], [R, -h + 0.11], [R, h - 0.11], [0.358, h - 0.07], [0.345, h - 0.025], [0.315, h], [0.24, h]].map(p => new THREE.Vector2(p[0], p[1]));
    const g = new THREE.LatheGeometry(pts, 36); g.rotateZ(Math.PI / 2); return g;
  };
  G.tireF = tire(0.37); G.tireR = tire(0.45);
  G.barrel = new THREE.CylinderGeometry(0.245, 0.245, 1, 24, 1, true); G.barrel.rotateZ(Math.PI / 2);
  G.disc = new THREE.CircleGeometry(0.245, 24);
  G.brake = new THREE.CylinderGeometry(0.17, 0.17, 0.04, 20); G.brake.rotateZ(Math.PI / 2);
  G.ring = new THREE.RingGeometry(0.27, 0.3, 36);
  G.halo = (() => { const g = new THREE.TorusGeometry(0.34, 0.034, 10, 24, Math.PI); g.rotateX(Math.PI / 2); return g; })();
  G.helm = new THREE.SphereGeometry(0.158, 20, 16);
  G.arm = (() => { const g = new THREE.CylinderGeometry(0.02, 0.02, 1, 6); g.rotateZ(Math.PI / 2); return g; })();
  G.mirror = profile([[0, 0], [0.12, 0], [0.1, 0.07], [0.01, 0.07]], 0.16, { bevel: 0.01, curve: false });
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
function numberTex(num, c1, c2) {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = c1; x.fillRect(0, 0, 128, 128);
  x.font = 'italic 900 92px "Titillium Web", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 8; x.strokeStyle = c2; x.strokeText(String(num), 64, 70);
  x.fillStyle = '#fff'; x.fillText(String(num), 64, 70);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function makeCarMesh(livery, num) {
  const g = geo();
  const L = typeof livery === 'number' ? LIVERIES[livery % LIVERIES.length] : livery;
  const paint = paintM(L.c1), accent = paintM(L.c2), carbon = carbonM();
  const black = std('#0a0a0c', { roughness: 0.75, metalness: 0 });
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const add = (parent, geom, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, shadow = true) => {
    const o = new THREE.Mesh(geom, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.rotation.set(rx, ry, rz); o.castShadow = shadow; parent.add(o); return o;
  };
  add(body, g.floor, carbon);
  add(body, g.box, carbon, 0, 0.18, -2.15, 1.0, 0.16, 0.45, -0.3);
  add(body, g.tub, paint);
  add(body, g.box, black, 0, 0.59, 0.12, 0.42, 0.03, 0.7, 0, 0, 0, false);
  add(body, g.cover, paint);
  add(body, g.fin, accent);
  add(body, g.box, black, 0, 0.92, 0.035, 0.22, 0.13, 0.03, 0, 0, 0, false);
  add(body, g.box, accent, 0, 1.07, -0.26, 0.05, 0.05, 0.12);
  add(body, g.halo, carbon, 0, 0.74, 0.1);
  add(body, g.box, carbon, 0, 0.71, 0.53, 0.06, 0.05, 0.42, 0.42);
  add(body, g.helm, mat('h' + L.helm, () => new THREE.MeshPhysicalMaterial({ color: L.helm, roughness: 0.2, metalness: 0.2, clearcoat: 1 })), 0, 0.68, 0.0);
  add(body, g.box, std('#111', { metalness: 0.8, roughness: 0.1 }), 0, 0.7, 0.14, 0.22, 0.065, 0.05, 0, 0, 0, false);
  for (const sx of [1, -1]) { add(body, g.mirror, carbon, sx * 0.44, 0.6, 0.66); add(body, g.box, carbon, sx * 0.36, 0.56, 0.66, 0.16, 0.02, 0.02, 0, 0, sx * 0.4); }
  add(body, g.box, carbon, 0, 0.62, -2.3, 0.05, 0.42, 0.14);
  const rain = add(body, g.box, new THREE.MeshStandardMaterial({ color: '#ff2030', emissive: '#ff0018', emissiveIntensity: 0.5 }), 0, 0.34, -2.4, 0.12, 0.06, 0.03, 0, 0, 0, false);
  const nm = new THREE.MeshBasicMaterial({ map: numberTex(num, L.c1, L.c2) });
  const np = new THREE.PlaneGeometry(0.28, 0.28);
  const n2 = new THREE.Mesh(np, nm); n2.rotation.y = Math.PI / 2; n2.position.set(0.155, 0.72, -1.0); body.add(n2);
  const n3 = new THREE.Mesh(np, nm); n3.rotation.y = -Math.PI / 2; n3.position.set(-0.155, 0.72, -1.0); body.add(n3);

  // trompa + alerón delantero (cada mitad por separado)
  const nose = new THREE.Group(); body.add(nose);
  add(nose, g.nose, paint);
  const n1 = new THREE.Mesh(np, nm); n1.rotation.x = -Math.PI / 2 + 0.1; n1.position.set(0, 0.47, 2.0); nose.add(n1);
  add(nose, g.box, accent, 0.12, 0.15, 2.62, 0.03, 0.14, 0.3); add(nose, g.box, accent, -0.12, 0.15, 2.62, 0.03, 0.14, 0.3);
  const fw = [];
  for (const sd of [1, -1]) {
    const w = new THREE.Group(); nose.add(w);
    add(w, g.wingMain, accent, sd * 0.53, 0.1, 2.8);
    add(w, g.wingFlap, carbon, sd * 0.55, 0.19, 2.64, 1, 1, 1, -0.32);
    add(w, g.wingFlap2, carbon, sd * 0.58, 0.27, 2.55, 1, 1, 1, -0.6);
    add(w, g.endF, accent, sd * 0.95, 0, 0);
    fw.push(w);
  }
  const pods = [];
  for (const sd of [1, -1]) {
    const p = new THREE.Group(); body.add(p);
    add(p, g.pod, paint, sd * 0.55, 0, 0);
    add(p, g.box, black, sd * 0.56, 0.36, 0.79, 0.36, 0.34, 0.02, 0, 0, 0, false);
    add(p, g.box, accent, sd * 0.56, 0.565, 0.3, 0.3, 0.012, 0.6, -0.05, 0, 0, false);
    pods.push(p);
  }
  const rw = new THREE.Group(); body.add(rw);
  add(rw, g.rwMain, paint, 0, 0.86, -2.4);
  add(rw, g.rwFlap, accent, 0, 0.99, -2.3, 1, 1, 1, -0.38);
  add(rw, g.endR, paint, 0.49, 0, 0); add(rw, g.endR, paint, -0.49, 0, 0);
  add(rw, g.box, carbon, 0, 0.5, -2.45, 0.9, 0.025, 0.18, -0.2);

  const rubber = std('#141416', { roughness: 0.92, metalness: 0 });
  const stripe = std('#e8c21a', { roughness: 0.6, side: THREE.DoubleSide });
  const discM = new THREE.MeshStandardMaterial({ color: '#3a3a3a', emissive: '#ff5a10', emissiveIntensity: 0, metalness: 0.6, roughness: 0.4 });
  const wheels = [], corners = [];
  const WP = [[0.8, CAR.a, 1], [-0.8, CAR.a, 1], [0.8, -CAR.b, 0], [-0.8, -CAR.b, 0]];
  for (const [x, z, f] of WP) {
    const corner = new THREE.Group(); root.add(corner); corners.push(corner);
    const pivot = new THREE.Group(); pivot.position.set(x, CAR.R, z); corner.add(pivot);
    const spin = new THREE.Group(); pivot.add(spin);
    const w = f ? 0.37 : 0.45;
    const t = new THREE.Mesh(f ? g.tireF : g.tireR, rubber); t.castShadow = true; spin.add(t);
    const br = new THREE.Mesh(g.barrel, std('#25272c', { metalness: 0.7, roughness: 0.35 })); br.scale.set(w - 0.02, 1, 1); spin.add(br);
    for (const sd of [1, -1]) {
      const d = new THREE.Mesh(g.disc, rimTex()); d.rotation.y = sd * Math.PI / 2; d.position.x = sd * (w / 2 - 0.05); spin.add(d);
      const ring = new THREE.Mesh(g.ring, stripe); ring.rotation.y = sd * Math.PI / 2; ring.position.x = sd * (w / 2 + 0.003); spin.add(ring);
    }
    const disc = new THREE.Mesh(g.brake, discM); disc.position.x = (x > 0 ? -1 : 1) * 0.05; pivot.add(disc);
    wheels.push({ pivot, spin, front: !!f });
    for (const dy of [0.1, -0.08]) {
      const len = Math.abs(x) - 0.32;
      const a = new THREE.Mesh(g.arm, carbon); a.scale.set(len, 1, 1); a.position.set(x / 2 + Math.sign(x) * 0.16, CAR.R + dy, z); corner.add(a);
    }
  }
  const parts = [fw[0], fw[1], nose, rw, corners[0], corners[1], corners[2], corners[3], pods[0], pods[1], null];
  root.userData = { wheels, body, rain, livery: L, parts, discM, rnd: Array.from({ length: 11 }, () => Math.random() - 0.5) };
  return root;
}

// Aplica el daño a lo visual. Devuelve las partes recién desprendidas (para crear escombros)
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
