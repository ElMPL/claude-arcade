// Props del mapa al estilo de los mapas de CS: barriles, pallets con bolsas, cubiertas, garrafas,
// macetas, carretillas, bolsas de arena, cajones del mercado. Se colocan contra las paredes, en lugares
// abiertos (nunca en pasillos angostos) y siempre igual para todos (semilla por mapa). Tienen colisión:
// se suben al mundo como obstáculos, así que se pueden usar de cobertura o para subirse.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { texMat } from './textures.js';

function rng(seed) { let s = seed | 0; return () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const col = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3), C = new THREE.Color(c); for (let i = 0; i < n; i++) { a[i * 3] = C.r; a[i * 3 + 1] = C.g; a[i * 3 + 2] = C.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
const ni = g => (g.index ? g.toNonIndexed() : g);
const box = (w, h, d, x, y, z, c, ry = 0) => col(ni(new THREE.BoxGeometry(w, h, d).rotateY(ry).translate(x, y, z)), c);
const cylg = (r0, r1, h, x, y, z, c, s = 18) => col(ni(new THREE.CylinderGeometry(r0, r1, h, s).translate(x, y, z)), c);
const torus = (R, r, x, y, z, c) => col(ni(new THREE.TorusGeometry(R, r, 10, 22).rotateX(Math.PI / 2).translate(x, y, z)), c);
const sph = (rx, ry, rz, x, y, z, c) => col(ni(new THREE.SphereGeometry(1, 14, 10).scale(rx, ry, rz).translate(x, y, z)), c);

// cada prop: geometría por material + caja de colisión (radio en x/z, alto)
const PROPS = {
  barrel(c = '#4f6f8a') {
    const g = [cylg(0.29, 0.29, 0.88, 0, 0.44, 0, c), torus(0.295, 0.02, 0, 0.25, 0, '#3a3a3a'), torus(0.295, 0.02, 0, 0.63, 0, '#3a3a3a'), cylg(0.27, 0.27, 0.02, 0, 0.885, 0, '#555')];
    return { metal: g, hw: 0.32, hd: 0.32, h: 0.9 };
  },
  barrels2() { const a = PROPS.barrel('#7a3b2a').metal, b = PROPS.barrel('#4f6f8a').metal.map(g => g.clone().translate(0.62, 0, 0.1)); return { metal: [...a, ...b], hw: 0.65, hd: 0.36, h: 0.9, cx: 0.31 }; },
  pallet() {
    const w = [];
    for (let i = 0; i < 5; i++) w.push(box(1.2, 0.025, 0.14, 0, 0.13, -0.45 + i * 0.225, '#9a7650'));
    for (const z of [-0.45, 0, 0.45]) w.push(box(1.2, 0.1, 0.12, 0, 0.065, z, '#7d5e3c'));
    // bolsas apiladas
    const s = [];
    for (let k = 0; k < 6; k++) { const x = -0.33 + (k % 3) * 0.33, z = k < 3 ? -0.2 : 0.2; s.push(sph(0.17, 0.09, 0.23, x, 0.24, z, '#d8c9a3')); }
    for (let k = 0; k < 3; k++) s.push(sph(0.17, 0.09, 0.23, -0.17 + (k % 2) * 0.33, 0.41, k === 2 ? 0.2 : -0.1, '#cdbd94'));
    return { wood: w, cloth: s, hw: 0.62, hd: 0.5, h: 0.52 };
  },
  tires() {
    const t = [];
    for (let i = 0; i < 4; i++) t.push(torus(0.3, 0.11, 0, 0.11 + i * 0.21, 0, '#1d1d1d'));
    return { rubber: t, hw: 0.42, hd: 0.42, h: 0.85 };
  },
  gas() {
    const m = [];
    for (let i = 0; i < 3; i++) { const x = -0.26 + i * 0.26; m.push(cylg(0.11, 0.11, 0.62, x, 0.31, 0, i === 1 ? '#c23a2a' : '#b9a24a'), sph(0.11, 0.07, 0.11, x, 0.62, 0, '#888'), cylg(0.03, 0.03, 0.1, x, 0.71, 0, '#444')); }
    return { metal: m, hw: 0.42, hd: 0.15, h: 0.75 };
  },
  pot() {
    const p = [cylg(0.26, 0.18, 0.55, 0, 0.275, 0, '#b0603a'), torus(0.26, 0.03, 0, 0.55, 0, '#9a5232')];
    const l = []; for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; l.push(col(ni(new THREE.ConeGeometry(0.05, 0.7, 6).rotateZ(0.5).rotateY(a).translate(Math.cos(a) * 0.14, 0.85, Math.sin(a) * 0.14)), '#4f7a33')); }
    return { clay: p, plant: l, hw: 0.28, hd: 0.28, h: 0.6 };
  },
  sandbags() {
    const s = [];
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4 - (r === 2 ? 1 : 0); i++) s.push(sph(0.27, 0.12, 0.18, -0.75 + i * 0.5 + (r % 2) * 0.25, 0.12 + r * 0.22, 0, r % 2 ? '#a99a72' : '#b6a77d'));
    return { cloth: s, hw: 1.0, hd: 0.25, h: 0.7 };
  },
  cart() {
    const w = [box(1.3, 0.1, 0.8, 0, 0.55, 0, '#8a6a46'), box(1.3, 0.35, 0.05, 0, 0.75, 0.38, '#7a5c3c'), box(1.3, 0.35, 0.05, 0, 0.75, -0.38, '#7a5c3c'), box(0.05, 0.35, 0.8, 0.63, 0.75, 0, '#7a5c3c'),
      box(0.06, 0.06, 1.0, -1.05, 0.62, 0.3, '#6a4e33', 0), box(0.06, 0.06, 1.0, -1.05, 0.62, -0.3, '#6a4e33')];
    const r = [col(ni(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16).rotateX(Math.PI / 2).translate(0.15, 0.35, 0.46)), '#4a3a2a'), col(ni(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16).rotateX(Math.PI / 2).translate(0.15, 0.35, -0.46)), '#4a3a2a')];
    w[4].rotateY(0); // manijas
    return { wood: [...w, ...r], hw: 1.15, hd: 0.5, h: 0.95 };
  },
  crates() {
    const c = [box(0.9, 0.9, 0.9, 0, 0.45, 0, '#c9a77a'), box(0.6, 0.6, 0.6, 0.12, 1.2, 0.05, '#bf9c6e', 0.3)];
    return { crate: c, hw: 0.5, hd: 0.5, h: 1.5 };
  },
  fruit() { // cajones del mercado con fruta
    const w = [box(1.4, 0.5, 0.7, 0, 0.25, 0, '#8d6b45'), box(1.4, 0.04, 0.7, 0, 0.52, 0, '#6d5235')];
    const f = []; for (let i = 0; i < 18; i++) f.push(sph(0.08, 0.08, 0.08, -0.6 + (i % 9) * 0.15, 0.6, -0.15 + Math.floor(i / 9) * 0.3, i % 3 ? '#d9822b' : '#c23a2a'));
    return { wood: w, plant: f, hw: 0.72, hd: 0.38, h: 0.68 };
  },
};
const SETS = { dust2: ['barrel', 'barrels2', 'pallet', 'tires', 'gas', 'sandbags', 'cart', 'crates', 'pot'], mirage: ['pot', 'pot', 'fruit', 'cart', 'pallet', 'barrel', 'gas', 'sandbags', 'crates'] };

// Elige lugares y sube los props al mundo. Devuelve la lista para dibujarlos.
export function placeProps(W, nav, mapId, count = 46) {
  const kinds = SETS[mapId] || SETS.dust2, r = rng(mapId.length * 7919 + 13);
  const out = [], { m, N, H } = nav;
  const spawnC = [16, 32].map(f => { let x = 0, z = 0, n = 0; for (let i = 0; i < W.n * W.n; i += 7) if (W.flags[i] & f) { x += i % W.n; z += Math.floor(i / W.n); n++; } return n ? [x / n * W.cell, z / n * W.cell] : [-99, -99]; });
  // candidatos: nodos principales con una pared a ≤1 nodo y mucho espacio libre alrededor
  const cand = [];
  for (let z = 4; z < m - 4; z += 2) for (let x = 4; x < m - 4; x += 2) {
    const i = z * m + x; let l = -1;
    for (let q = 0; q < nav.L; q++) if (nav.main[q * N + i]) { l = q; break; }
    if (l < 0) continue;
    const h = H[l][i]; let wall = null, open = 0, tot = 0;
    for (let dz = -4; dz <= 4; dz++) for (let dx = -4; dx <= 4; dx++) {
      const j = (z + dz) * m + x + dx, hh = H[l][j]; tot++;
      if (!isNaN(hh) && Math.abs(hh - h) < 0.3) open++;
      else if (Math.abs(dx) <= 1 && Math.abs(dz) <= 1 && (dx || dz) && !wall) wall = [dx, dz];
    }
    if (!wall || open / tot < 0.62) continue;
    const px = (x + 0.5) * nav.c, pz = (z + 0.5) * nav.c;
    if (spawnC.some(s => Math.hypot(s[0] - px, s[1] - pz) < 7)) continue;
    cand.push([px, h, pz, Math.atan2(wall[0], wall[1])]);
  }
  for (let k = cand.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [cand[k], cand[j]] = [cand[j], cand[k]]; }
  for (const c of cand) {
    if (out.length >= count) break;
    if (out.some(o => Math.hypot(o.x - c[0], o.z - c[2]) < 9)) continue;
    const kind = kinds[Math.floor(r() * kinds.length)], P = PROPS[kind]();
    // de espaldas a la pared: se corre un poco hacia la pared
    const ry = c[3] + (r() - 0.5) * 0.3, back = 0.25;
    const x = c[0] + Math.sin(c[3]) * back, z = c[2] + Math.cos(c[3]) * back;
    // colisión: todas las celdas bajo el prop rotado
    const cells = [], cs = Math.cos(ry), sn = Math.sin(ry);
    const R = Math.hypot(P.hw, P.hd) + W.cell;
    for (let gz = Math.floor((z - R) / W.cell); gz <= Math.floor((z + R) / W.cell); gz++) for (let gx = Math.floor((x - R) / W.cell); gx <= Math.floor((x + R) / W.cell); gx++) {
      const wx = (gx + 0.5) * W.cell - x, wz = (gz + 0.5) * W.cell - z;
      const lx = wx * cs - wz * sn - (P.cx || 0), lz = wx * sn + wz * cs;
      if (Math.abs(lx) <= P.hw && Math.abs(lz) <= P.hd) cells.push(gz * W.n + gx);
    }
    let ok = cells.length > 0;
    for (const ci of cells) { const t = W.top[0][ci]; let fl = NaN; for (let q = 0; q < W.L; q++) if (!isNaN(W.top[q][ci]) && Math.abs(W.top[q][ci] - c[1]) < 0.25) fl = q; if (isNaN(fl) || W.cls[fl][ci] !== 1) { ok = false; break; } }
    if (!ok) continue;
    for (const ci of cells) for (let q = 0; q < W.L; q++) if (!isNaN(W.top[q][ci]) && Math.abs(W.top[q][ci] - c[1]) < 0.25) {
      const above = q + 1 < W.L && !isNaN(W.bot[q + 1][ci]) ? W.bot[q + 1][ci] : 99;
      W.top[q][ci] = Math.min(above, c[1] + P.h); W.cls[q][ci] = 2;
    }
    out.push({ kind, x, y: c[1], z, ry });
  }
  return out;
}

const MATS = {};
const mat = k => MATS[k] || (MATS[k] = k === 'metal' ? texMat('metal', { rough: 0.55, metal: 0.3 }) : k === 'wood' ? texMat('wood') : k === 'crate' ? texMat('crate') : k === 'cloth' ? texMat('fabric', { rough: 1 }) : k === 'clay' ? texMat('plaster', { rough: 0.9 }) : new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
export function propsMesh(list) {
  const groups = {};
  for (const p of list) {
    const P = PROPS[p.kind]();
    for (const [k, gs] of Object.entries(P)) {
      if (!Array.isArray(gs)) continue;
      for (const g of gs) {
        const gg = g.clone();
        // UV de caja simple
        const pos = gg.attributes.position, uv = new Float32Array(pos.count * 2);
        for (let i = 0; i < pos.count; i++) { uv[i * 2] = (pos.getX(i) + pos.getZ(i)) * 1.5; uv[i * 2 + 1] = pos.getY(i) * 1.5; }
        gg.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        gg.rotateY(p.ry); gg.translate(p.x, p.y, p.z);
        (groups[k] = groups[k] || []).push(gg);
      }
    }
  }
  const root = new THREE.Group();
  for (const [k, gs] of Object.entries(groups)) {
    const m = new THREE.Mesh(mergeGeometries(gs), mat(k));
    m.castShadow = true; m.receiveShadow = true; root.add(m);
  }
  return root;
}
