// Convierte el mundo de columnas en mallas low-poly con texturas suaves generadas por código:
// - paredes con "marching squares" (bordes rectos y diagonales a 45°, sin serrucho)
// - piso suave con alturas en las esquinas y sombra de contacto junto a las paredes
// - cajas de madera, contenedores y bloques de piedra por separado
// - losas (techos de túneles y dinteles de puertas)
import * as THREE from 'three';

const THEMES = {
  dust2: {
    floor: [0.8, 0.66, 0.46], floorHi: [0.84, 0.71, 0.51], wall: [0.93, 0.82, 0.63], wallTop: [0.86, 0.74, 0.55], trim: [0.72, 0.6, 0.43],
    crate: [1, 0.95, 0.88], stone: [0.82, 0.72, 0.56], metal: [0.27, 0.47, 0.72], slab: [0.62, 0.47, 0.32],
    sky: ['#5c9ce0', '#f6e3c0'], fog: '#efdcb9', sun: '#fff0d2', ground: '#cfae7c', hemiSky: '#cfe3ff', wallTex: 'blocks', floorTex: 'sand',
  },
  mirage: {
    floor: [0.74, 0.68, 0.58], floorHi: [0.79, 0.73, 0.63], wall: [0.94, 0.87, 0.74], wallTop: [0.78, 0.43, 0.3], trim: [0.68, 0.58, 0.46],
    crate: [1, 0.95, 0.9], stone: [0.8, 0.74, 0.64], metal: [0.24, 0.55, 0.58], slab: [0.74, 0.42, 0.3],
    sky: ['#5b9fe0', '#f5dcb8'], fog: '#efdabb', sun: '#fff1da', ground: '#c9ae88', hemiSky: '#d4e6ff', wallTex: 'plaster', floorTex: 'tiles',
  },
  vertigo: {
    floor: [0.66, 0.66, 0.64], floorHi: [0.72, 0.72, 0.69], wall: [0.8, 0.8, 0.77], wallTop: [0.62, 0.62, 0.6], trim: [0.55, 0.55, 0.53],
    crate: [0.98, 0.95, 0.9], stone: [0.92, 0.72, 0.22], metal: [0.25, 0.45, 0.75], slab: [0.6, 0.6, 0.58],
    sky: ['#3f87d6', '#d2e6f6'], fog: '#cadcea', sun: '#ffffff', ground: '#6d7f8f', hemiSky: '#d6e8ff', wallTex: 'concrete', floorTex: 'slabs',
  },
};
export const themeOf = id => THEMES[id] || THEMES.dust2;

function hash(x, y) { let h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const clamp01 = v => Math.max(0, Math.min(1, v));

// ---------------- texturas (canvas) ----------------
function rng(seed) { let s = seed | 0; return () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function canvasTex(size, draw) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const x = c.getContext('2d'); draw(x, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function noise(x, S, r, amt, base = 235, n = 2400, sz = 3) {
  x.fillStyle = `rgb(${base},${base},${base})`; x.fillRect(0, 0, S, S);
  for (let i = 0; i < n; i++) { const v = base + (r() - 0.5) * amt; x.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.5)`; const s = 1 + r() * sz; x.fillRect(r() * S, r() * S, s, s); }
}
const TEX = {};
export function texFor(kind) {
  if (TEX[kind]) return TEX[kind];
  const r = rng(kind.length * 977 + kind.charCodeAt(0));
  let t;
  if (kind === 'blocks') t = canvasTex(256, (x, S) => { // arenisca en bloques
    noise(x, S, r, 40, 232, 3000);
    const rows = 4; for (let j = 0; j < rows; j++) {
      const y = j * S / rows; x.fillStyle = 'rgba(120,100,80,.35)'; x.fillRect(0, y, S, 3);
      const off = j % 2 ? S / 4 : 0; for (let k = 0; k < 3; k++) { const xx = (off + k * S / 2) % S; x.fillRect(xx, y, 3, S / rows); }
      for (let k = 0; k < 6; k++) { x.fillStyle = `rgba(255,250,240,${0.08 + r() * 0.08})`; x.fillRect(r() * S, y + 4 + r() * (S / rows - 8), 20 + r() * 50, 6 + r() * 10); }
    }
    x.fillStyle = 'rgba(90,70,50,.04)'; for (let i = 0; i < 14; i++) { x.beginPath(); x.arc(r() * S, r() * S, 4 + r() * 18, 0, 7); x.fill(); }
  });
  else if (kind === 'plaster') t = canvasTex(256, (x, S) => { // revoque con manchas y grietas
    noise(x, S, r, 26, 238, 2600);
    for (let i = 0; i < 10; i++) { x.fillStyle = `rgba(150,130,100,${0.03 + r() * 0.04})`; x.beginPath(); x.ellipse(r() * S, r() * S, 10 + r() * 40, 6 + r() * 26, r() * 3, 0, 7); x.fill(); }
    x.strokeStyle = 'rgba(110,90,70,.35)'; x.lineWidth = 1;
    for (let i = 0; i < 5; i++) { let px = r() * S, py = r() * S; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 6; k++) { px += (r() - 0.5) * 24; py += r() * 14; x.lineTo(px, py); } x.stroke(); }
  });
  else if (kind === 'concrete') t = canvasTex(256, (x, S) => { // paneles de hormigón
    noise(x, S, r, 30, 228, 3500, 2);
    x.fillStyle = 'rgba(80,80,80,.35)'; x.fillRect(0, 0, S, 2); x.fillRect(0, 0, 2, S); x.fillRect(S / 2, 0, 2, S);
    x.fillStyle = 'rgba(60,60,60,.45)'; for (const [a, b] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) { x.beginPath(); x.arc(a * S, b * S, 3, 0, 7); x.fill(); }
    for (let i = 0; i < 8; i++) { x.fillStyle = `rgba(90,85,80,${0.06 + r() * 0.08})`; x.fillRect(r() * S, r() * S, 2 + r() * 4, 20 + r() * 60); }
  });
  else if (kind === 'sand') t = canvasTex(256, (x, S) => {
    noise(x, S, r, 46, 230, 5000, 2);
    for (let i = 0; i < 40; i++) { x.fillStyle = `rgba(150,120,80,${0.06 + r() * 0.06})`; x.beginPath(); x.ellipse(r() * S, r() * S, 8 + r() * 30, 3 + r() * 8, r() * 3, 0, 7); x.fill(); }
    for (let i = 0; i < 25; i++) { x.fillStyle = 'rgba(120,100,80,.35)'; x.fillRect(r() * S, r() * S, 2 + r() * 3, 2 + r() * 3); }
  });
  else if (kind === 'tiles') t = canvasTex(256, (x, S) => { // baldosas de piedra
    noise(x, S, r, 30, 232, 3000, 2);
    const k = 4; x.fillStyle = 'rgba(110,95,75,.4)';
    for (let i = 0; i <= k; i++) { x.fillRect(i * S / k - 1, 0, 2, S); x.fillRect(0, i * S / k - 1, S, 2); }
    for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) { x.fillStyle = `rgba(${r() < 0.5 ? '255,250,240' : '120,100,80'},${0.05 + r() * 0.07})`; x.fillRect(i * S / k + 2, j * S / k + 2, S / k - 4, S / k - 4); }
  });
  else if (kind === 'slabs') t = canvasTex(256, (x, S) => {
    noise(x, S, r, 34, 226, 4000, 2);
    x.fillStyle = 'rgba(70,70,70,.35)'; x.fillRect(0, 0, S, 2); x.fillRect(0, 0, 2, S); x.fillRect(0, S / 2, S, 2);
    for (let i = 0; i < 6; i++) { x.fillStyle = `rgba(60,60,60,${0.05 + r() * 0.08})`; x.beginPath(); x.ellipse(r() * S, r() * S, 10 + r() * 30, 6 + r() * 14, r() * 3, 0, 7); x.fill(); }
  });
  else if (kind === 'crate') t = canvasTex(128, (x, S) => { // caja de madera con marco y cruz
    x.fillStyle = '#a7773f'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 6; i++) { x.fillStyle = i % 2 ? '#9a6c38' : '#b17f46'; x.fillRect(0, i * S / 6, S, S / 6); x.fillStyle = 'rgba(60,35,15,.5)'; x.fillRect(0, i * S / 6, S, 1); }
    for (let i = 0; i < 120; i++) { x.fillStyle = `rgba(70,40,15,${r() * 0.25})`; x.fillRect(r() * S, r() * S, 6 + r() * 20, 1); }
    x.strokeStyle = '#7a5228'; x.lineWidth = 12; x.strokeRect(6, 6, S - 12, S - 12);
    x.lineWidth = 11; x.beginPath(); x.moveTo(10, 10); x.lineTo(S - 10, S - 10); x.stroke();
    x.strokeStyle = 'rgba(40,20,5,.6)'; x.lineWidth = 1.5; x.strokeRect(12, 12, S - 24, S - 24); x.strokeRect(0.5, 0.5, S - 1, S - 1);
    x.fillStyle = '#3b2a1a'; for (const [a, b] of [[6, 6], [S - 6, 6], [6, S - 6], [S - 6, S - 6]]) { x.beginPath(); x.arc(a, b, 2.5, 0, 7); x.fill(); }
  });
  else if (kind === 'metal') t = canvasTex(128, (x, S) => { // chapa acanalada (contenedor)
    noise(x, S, r, 20, 225, 900, 2);
    for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? 'rgba(0,0,0,.18)' : 'rgba(255,255,255,.12)'; x.fillRect(i * S / 16, 0, S / 16, S); }
    for (let i = 0; i < 10; i++) { x.fillStyle = `rgba(110,60,30,${0.1 + r() * 0.2})`; x.fillRect(r() * S, r() * S, 4 + r() * 12, 2 + r() * 16); }
    x.fillStyle = 'rgba(0,0,0,.3)'; x.fillRect(0, 0, S, 4); x.fillRect(0, S - 4, S, 4);
  });
  else if (kind === 'stone') t = canvasTex(128, (x, S) => {
    noise(x, S, r, 40, 228, 1500, 2);
    x.fillStyle = 'rgba(90,75,55,.4)'; x.fillRect(0, 0, S, 3); x.fillRect(0, S / 2, S, 2); x.fillRect(S / 2, 0, 2, S / 2); x.fillRect(S / 4, S / 2, 2, S / 2);
  });
  else if (kind === 'wood') t = canvasTex(128, (x, S) => { // vigas
    x.fillStyle = '#d9c3a3'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 4; i++) { x.fillStyle = `rgba(90,60,30,${0.15 + r() * 0.1})`; x.fillRect(0, i * S / 4, S, S / 4 - 3); x.fillStyle = 'rgba(50,30,10,.5)'; x.fillRect(0, i * S / 4 - 2, S, 3); }
    for (let i = 0; i < 80; i++) { x.fillStyle = `rgba(70,40,15,${r() * 0.2})`; x.fillRect(r() * S, r() * S, 8 + r() * 30, 1); }
  });
  TEX[kind] = t; return t;
}

// ---------------- geometría ----------------
function bucket() { return { pos: [], nor: [], col: [], uv: [] }; }
function pushV(b, p, n, c, u, v) { b.pos.push(p[0], p[1], p[2]); b.nor.push(n[0], n[1], n[2]); b.col.push(c[0], c[1], c[2]); b.uv.push(u, v); }
function tri(b, a, c2, d, col, uvf, cols) {
  const ux = c2[0] - a[0], uy = c2[1] - a[1], uz = c2[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
  let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const L = Math.hypot(nx, ny, nz) || 1; const n = [nx / L, ny / L, nz / L];
  const P = [a, c2, d];
  for (let k = 0; k < 3; k++) { const uv = uvf(P[k]); pushV(b, P[k], n, cols ? cols[k] : col, uv[0], uv[1]); }
}
// cuadrilátero orientado según la normal deseada
function quadN(b, pts, want, col, uvf, cols) {
  const [p0, p1, p2] = pts;
  const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2], vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
  const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  let P = pts, C = cols;
  if (nx * want[0] + ny * want[1] + nz * want[2] < 0) { P = [pts[0], pts[3], pts[2], pts[1]]; if (cols) C = [cols[0], cols[3], cols[2], cols[1]]; }
  tri(b, P[0], P[1], P[2], col, uvf, C && [C[0], C[1], C[2]]);
  tri(b, P[0], P[2], P[3], col, uvf, C && [C[0], C[2], C[3]]);
}
const uvTop = s => p => [p[0] / s, p[2] / s];
const uvSide = (nx, nz, s) => p => [(p[0] * nz - p[2] * nx) / s, p[1] / s];

export function buildMeshes(W, mapId) {
  const T = themeOf(mapId), n = W.n, c = W.cell;
  const B = { wall: bucket(), floor: bucket(), crate: bucket(), metal: bucket(), stone: bucket(), wood: bucket() };
  const tint = (base, x, y, amt = 0.05) => { const k = 1 + (hash(x, y) - 0.5) * 2 * amt; return [base[0] * k, base[1] * k, base[2] * k]; };

  for (let l = 0; l < W.L; l++) {
    const top = W.top[l], bot = W.bot[l], cls = W.cls[l];
    const isWall = i => i >= 0 && i < n * n && cls[i] === 3;
    // ---------- tipo de cada bloque de obstáculos: 1 caja, 2 contenedor, 3 piedra ----------
    const kind = new Uint8Array(n * n);
    {
      const seen = new Uint8Array(n * n), st = [], comp = [];
      for (let s = 0; s < n * n; s++) {
        if (seen[s] || cls[s] !== 2) continue;
        st.length = 0; comp.length = 0; st.push(s); seen[s] = 1; let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1;
        while (st.length) { const i = st.pop(); comp.push(i); const x = i % n, y = (i - x) / n; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, y > 0 ? i - n : -1, y < n - 1 ? i + n : -1]) if (j >= 0 && !seen[j] && cls[j] === 2) { seen[j] = 1; st.push(j); } }
        const w = (x1 - x0 + 1) * c, d = (y1 - y0 + 1) * c, long = Math.max(w, d), short = Math.min(w, d);
        let k = 1;
        if (comp.length > 260) k = 3;
        else if (long > 3.2 && short > 1.4 && long / short > 1.7) k = mapId === 'vertigo' ? 3 : 2;
        else if (hash(x0, y0) < 0.18) k = 3;
        for (const i of comp) kind[i] = k;
      }
    }
    // ---------- piso suave ----------
    const cH = (t, cx, cz) => {
      let s = 0, k = 0;
      for (let dz = -1; dz <= 0; dz++) for (let dx = -1; dx <= 0; dx++) {
        const x = cx + dx, z = cz + dz; if (x < 0 || z < 0 || x >= n || z >= n) continue;
        const j = z * n + x; if (cls[j] !== 1 || isNaN(top[j]) || Math.abs(top[j] - t) > 0.6) continue;
        s += top[j]; k++;
      }
      return k ? s / k : t;
    };
    const done = new Uint8Array(n * n);
    const fuv = uvTop(2.2);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x;
      if (cls[i] === 3) { // piso debajo de los chaflanes de las paredes
        let s = 0, k = 0;
        for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, y > 0 ? i - n : -1, y < n - 1 ? i + n : -1]) if (j >= 0 && cls[j] === 1) { s += top[j]; k++; }
        if (k) { const h = s / k - 0.01, x0 = x * c, x1 = (x + 1) * c, z0 = y * c, z1 = (y + 1) * c; const col = mul(T.floor, 0.62); quadN(B.floor, [[x0, h, z0], [x0, h, z1], [x1, h, z1], [x1, h, z0]], [0, 1, 0], col, fuv); }
        continue;
      }
      if (W.propCell && W.propCell[l] && W.propCell[l][i]) { const p = W.props[W.propCell[l][i] - 1]; const h = p.y0, x0 = x * c, x1 = (x + 1) * c, z0 = y * c, z1 = (y + 1) * c; quadN(B.floor, [[x0, h, z0], [x0, h, z1], [x1, h, z1], [x1, h, z0]], [0, 1, 0], mul(T.floor, 0.7), fuv); continue; }
      if (cls[i] !== 1 || isNaN(top[i])) continue;
      const t = top[i];
      const h00 = cH(t, x, y), h10 = cH(t, x + 1, y), h01 = cH(t, x, y + 1), h11 = cH(t, x + 1, y + 1);
      const near = isWall(i - 1) || isWall(i + 1) || isWall(i - n) || isWall(i + n) || isWall(i - n - 1) || isWall(i - n + 1) || isWall(i + n - 1) || isWall(i + n + 1);
      const flat = Math.abs(h00 - t) < 0.004 && Math.abs(h10 - t) < 0.004 && Math.abs(h01 - t) < 0.004 && Math.abs(h11 - t) < 0.004;
      if (flat && !near) continue;
      done[i] = 1;
      const x0 = x * c, x1 = (x + 1) * c, z0 = y * c, z1 = (y + 1) * c;
      const rgb = tint(mix(T.floor, T.floorHi, clamp01(t / 6)), x >> 3, y >> 3, 0.04);
      const ao = (cx, cz) => { let w = 0; for (let dz = -1; dz <= 0; dz++) for (let dx = -1; dx <= 0; dx++) { const xx = cx + dx, zz = cz + dz; if (xx >= 0 && zz >= 0 && xx < n && zz < n && cls[zz * n + xx] === 3) w++; } return mul(rgb, 1 - w * 0.13); };
      const cs = [ao(x, y), ao(x, y + 1), ao(x + 1, y + 1), ao(x + 1, y)];
      tri(B.floor, [x0, h00, z0], [x0, h01, z1], [x1, h11, z1], rgb, fuv, [cs[0], cs[1], cs[2]]);
      tri(B.floor, [x0, h00, z0], [x1, h11, z1], [x1, h10, z0], rgb, fuv, [cs[0], cs[2], cs[3]]);
    }
    // ---------- caras de arriba planas (pisos, cajas, losas) con fusión greedy ----------
    const pcl = W.propCell ? W.propCell[l] : null;
    const key = i => isNaN(top[i]) || done[i] || cls[i] === 3 || (pcl && pcl[i]) ? null : (cls[i] * 100000 + kind[i] * 10000 + Math.round(top[i] * 100)) * 10000 + (l > 0 ? Math.round(bot[i] * 100) + 5000 : 0);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x; if (done[i]) continue; const k = key(i); if (k === null) continue;
      let w = 1; while (x + w < n && !done[i + w] && key(i + w) === k) w++;
      let h = 1; outer: while (y + h < n) { for (let j = 0; j < w; j++) { const ii = (y + h) * n + x + j; if (done[ii] || key(ii) !== k) break outer; } h++; }
      for (let yy = 0; yy < h; yy++) for (let j = 0; j < w; j++) done[(y + yy) * n + x + j] = 1;
      const Y = top[i], x0 = x * c, x1 = (x + w) * c, z0 = y * c, z1 = (y + h) * c, cl = cls[i];
      const P = [[x0, Y, z0], [x0, Y, z1], [x1, Y, z1], [x1, Y, z0]];
      if (cl === 1) quadN(B.floor, P, [0, 1, 0], tint(mix(T.floor, T.floorHi, clamp01(Y / 6)), x >> 3, y >> 3, 0.04), fuv);
      else if (cl === 2) { const kd = kind[i]; quadN(kd === 1 ? B.crate : kd === 2 ? B.metal : B.stone, P, [0, 1, 0], kd === 1 ? T.crate : kd === 2 ? mul(T.metal, 1.1) : T.stone, uvTop(kd === 1 ? 1.1 : 2)); }
      else if (cl === 4) quadN(B.wood, P, [0, 1, 0], mul(T.wallTop, 0.95), uvTop(2));
      if (l > 0) { const Bt = bot[i]; quadN(cl === 4 ? B.wood : B.floor, [[x0, Bt, z0], [x0, Bt, z1], [x1, Bt, z1], [x1, Bt, z0]], [0, -1, 0], cl === 4 ? T.slab : mul(T.floor, 0.6), uvTop(2)); }
    }
    // ---------- costados en grilla (escalones del piso, cajas y losas) ----------
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let d = 0; d < 4; d++) {
      const [dx, dz] = DIRS[d];
      const along = dx !== 0 ? 'z' : 'x';
      for (let a = 0; a < n; a++) {
        let run = null;
        const flush = () => {
          if (!run) return;
          const { s, e, y0, y1, cl, line, kd } = run;
          let P;
          if (along === 'z') { const X = (dx > 0 ? line + 1 : line) * c; P = [[X, y0, s * c], [X, y0, (e + 1) * c], [X, y1, (e + 1) * c], [X, y1, s * c]]; }
          else { const Z = (dz > 0 ? line + 1 : line) * c; P = [[s * c, y0, Z], [(e + 1) * c, y0, Z], [(e + 1) * c, y1, Z], [s * c, y1, Z]]; }
          const shade = d < 2 ? 0.93 : 0.84;
          let b, col, uvf;
          if (cl === 2) { b = kd === 1 ? B.crate : kd === 2 ? B.metal : B.stone; col = mul(kd === 1 ? T.crate : kd === 2 ? T.metal : T.stone, shade); const s2 = kd === 1 ? 1.1 : 2; uvf = p => [(p[0] * dz - p[2] * dx) / s2, (p[1] - y0) / s2]; }
          else if (cl === 4) { b = B.wood; col = mul(T.slab, shade); uvf = uvSide(dx, dz, 2); }
          else { b = B.wall; col = mul(T.trim, shade); uvf = uvSide(dx, dz, 2.2); }
          const lo = mul(col, 0.8);
          quadN(b, P, [dx, 0, dz], col, uvf, [lo, lo, col, col]);
          run = null;
        };
        for (let bb = 0; bb < n; bb++) {
          const x = along === 'z' ? a : bb, y = along === 'z' ? bb : a;
          const i = y * n + x;
          let seg = null;
          if (!isNaN(top[i]) && cls[i] !== 3 && !(pcl && pcl[i])) {
            const xx = x + dx, yy = y + dz;
            const j = xx < 0 || yy < 0 || xx >= n || yy >= n ? -1 : yy * n + xx;
            let y1 = top[i], y0 = bot[i];
            if (j >= 0 && !isNaN(top[j])) {
              if (cls[i] === 1 && cls[j] === 1 && Math.abs(top[i] - top[j]) <= 0.6) y1 = y0;
              else if (top[j] >= y1 && bot[j] <= y0) y1 = y0;
              else if (bot[j] <= y0 + 0.01) y0 = Math.max(y0, top[j]);
            } else if (l === 0) {
              let low = 1e9; for (let m = 0; m < W.L; m++) if (j >= 0 && !isNaN(W.top[m][j]) && W.cls[m][j] !== 4) low = Math.min(low, W.top[m][j]);
              y0 = low < 1e9 ? Math.max(y0, low) : (W.voidKill ? -25 : Math.max(y0, y1 - 8));
            }
            if (y1 - y0 > 0.01) seg = { y0: Math.round(y0 * 100) / 100, y1: Math.round(y1 * 100) / 100, cl: cls[i], kd: kind[i] };
          }
          if (seg && run && run.y0 === seg.y0 && run.y1 === seg.y1 && run.cl === seg.cl && run.kd === seg.kd && run.e === bb - 1) run.e = bb;
          else { flush(); if (seg) run = { s: bb, e: bb, ...seg, line: a }; }
        }
        flush();
      }
    }
    // ---------- paredes con marching squares ----------
    msWalls(W, l, B, T);
  }
  // cajas orientadas
  for (const p of W.props || []) {
    const long = Math.max(p.hu, p.hv) * 2, short = Math.min(p.hu, p.hv) * 2;
    let kd = 1;
    if (p.cells > 260) kd = 3;
    else if (long > 3.2 && short > 1.3 && long / short > 1.7) kd = mapId === 'vertigo' ? 3 : 2;
    else if (hash(Math.round(p.x * 7), Math.round(p.z * 7)) < 0.16) kd = 3;
    const b = kd === 1 ? B.crate : kd === 2 ? B.metal : B.stone, base = kd === 1 ? T.crate : kd === 2 ? T.metal : T.stone, ts = kd === 1 ? 1.1 : 2;
    const ca = Math.cos(p.ang), sa = Math.sin(p.ang);
    const P = (u, v, y) => [p.x + u * ca - v * sa, y, p.z + u * sa + v * ca];
    const y0 = p.y0 - 0.05, y1 = p.y1;
    const cr = [[-p.hu, -p.hv], [p.hu, -p.hv], [p.hu, p.hv], [-p.hu, p.hv]];
    for (let k = 0; k < 4; k++) {
      const a = cr[k], d = cr[(k + 1) % 4];
      const len = Math.hypot(d[0] - a[0], d[1] - a[1]);
      const mu = (a[0] + d[0]) / 2, mv = (a[1] + d[1]) / 2, nl = Math.hypot(mu, mv);
      const nw = [(mu * ca - mv * sa) / nl, 0, (mu * sa + mv * ca) / nl];
      const shade = 0.82 + 0.14 * Math.abs(nw[0]);
      const col = mul(base, shade), lo = mul(col, 0.8);
      const A = P(a[0], a[1], y0), Bq = P(d[0], d[1], y0), C = P(d[0], d[1], y1), D = P(a[0], a[1], y1);
      const rep = Math.max(1, Math.round(len / ts)), vrep = Math.max(1, Math.round((y1 - y0) / ts));
      const uvf = q => { const along = Math.hypot(q[0] - A[0], q[2] - A[2]); return [along / len * rep, (q[1] - y0) / (y1 - y0) * vrep]; };
      quadN(b, [A, Bq, C, D], nw, col, uvf, [lo, lo, col, col]);
    }
    const tp = cr.map(([u, v]) => P(u, v, y1));
    quadN(b, tp, [0, 1, 0], mul(base, 1.04), q => { const du = q[0] - p.x, dv = q[2] - p.z; return [(du * ca + dv * sa + p.hu) / ts, (-du * sa + dv * ca + p.hv) / ts]; });
  }
  const group = new THREE.Group();
  let tris = 0;
  const mk = (b, texKind) => {
    if (!b.pos.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(b.col, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, map: typeof document !== 'undefined' ? texFor(texKind) : null }));
    m.matrixAutoUpdate = false; m.castShadow = true; m.receiveShadow = true;
    group.add(m); tris += b.pos.length / 9;
  };
  mk(B.wall, T.wallTex); mk(B.floor, T.floorTex); mk(B.crate, 'crate'); mk(B.metal, 'metal'); mk(B.stone, 'stone'); mk(B.wood, 'wood');
  group.matrixAutoUpdate = false;
  return { mesh: group, tris, theme: T };
}

// Paredes: contorno con marching squares sobre los centros de celda.
// Cada cuadrado entre 4 centros da el polígono sólido (arriba de la pared) y los bordes (costados).
const CASES = (() => {
  // 0 A,1 B,2 C,3 D (esquinas) · 4 AB,5 BC,6 CD,7 DA (puntos medios)
  const t = [];
  t[0] = []; t[1] = [0, 4, 7]; t[2] = [1, 5, 4]; t[3] = [0, 1, 5, 7]; t[4] = [2, 6, 5]; t[5] = [0, 4, 5, 2, 6, 7];
  t[6] = [1, 2, 6, 4]; t[7] = [0, 1, 2, 6, 7]; t[8] = [3, 7, 6]; t[9] = [0, 4, 6, 3]; t[10] = [1, 5, 6, 3, 7, 4];
  t[11] = [0, 1, 5, 6, 3]; t[12] = [2, 3, 7, 5]; t[13] = [0, 4, 5, 2, 3]; t[14] = [1, 2, 3, 7, 4]; t[15] = [0, 1, 2, 3];
  return t;
})();
function msWalls(W, l, B, T) {
  const n = W.n, c = W.cell, top = W.top[l], bot = W.bot[l], cls = W.cls[l];
  const solid = i => cls[i] === 3;
  const wb = B.wall, tuv = uvTop(2.2), sq = [0, 0, 0, 0];
  for (let z = 0; z < n - 1; z++) for (let x = 0; x < n - 1; x++) {
    sq[0] = z * n + x; sq[1] = z * n + x + 1; sq[2] = (z + 1) * n + x + 1; sq[3] = (z + 1) * n + x;
    let cs = 0; for (let k = 0; k < 4; k++) if (solid(sq[k])) cs |= 1 << k;
    if (!cs) continue;
    const poly = CASES[cs];
    const cx = (x + 0.5) * c, cz = (z + 0.5) * c;
    const CP = [[cx, cz], [cx + c, cz], [cx + c, cz + c], [cx, cz + c]];
    // vértice: [x, z, alto, base, esquina?]
    const V = poly.map(v => {
      if (v < 4) return [CP[v][0], CP[v][1], top[sq[v]], NaN, v];
      const a = v - 4, b = (a + 1) % 4;
      const s = solid(sq[a]) ? a : b, e = s === a ? b : a;
      const si = sq[s], ei = sq[e];
      let base;
      if (!isNaN(top[ei]) && cls[ei] === 1) base = top[ei] - 0.12;
      else if (!isNaN(top[ei]) && cls[ei] === 2) base = top[ei] - 1.2;
      else if (l === 0) base = W.voidKill ? -25 : top[si] - 8;
      else base = bot[si];
      return [(CP[a][0] + CP[b][0]) / 2, (CP[a][1] + CP[b][1]) / 2, top[si], base, -1];
    });
    // arriba de la pared (abanico, polígonos convexos; el orden A,B,C,D mira hacia abajo)
    for (let k = 1; k < V.length - 1; k++) {
      tri(wb, [V[0][0], V[0][2], V[0][1]], [V[k + 1][0], V[k + 1][2], V[k + 1][1]], [V[k][0], V[k][2], V[k][1]], T.wallTop, tuv);
    }
    let gx = 0, gz = 0; for (const v of V) { gx += v[0]; gz += v[1]; } gx /= V.length; gz /= V.length;
    for (let k = 0; k < V.length; k++) {
      const P = V[k], Q = V[(k + 1) % V.length];
      if (P[4] >= 0 || Q[4] >= 0) continue;
      let nx = Q[1] - P[1], nz = -(Q[0] - P[0]); const L = Math.hypot(nx, nz); nx /= L; nz /= L;
      const mx = (P[0] + Q[0]) / 2 - gx, mz = (P[1] + Q[1]) / 2 - gz;
      if (nx * mx + nz * mz < 0) { nx = -nx; nz = -nz; }
      const shade = 0.86 + 0.1 * Math.abs(nx) - 0.04 * Math.abs(nz);
      const col = mul(T.wall, shade), lo = mul(T.trim, shade * 0.95), mid = mul(col, 0.95);
      // zócalo más oscuro (0.45 m) y pared arriba
      const ph = Math.min(P[2], P[3] + 0.45), qh = Math.min(Q[2], Q[3] + 0.45);
      const pb = [P[0], P[3], P[1]], qb = [Q[0], Q[3], Q[1]], pm = [P[0], ph, P[1]], qm = [Q[0], qh, Q[1]], pt = [P[0], P[2], P[1]], qt = [Q[0], Q[2], Q[1]];
      const uvf = uvSide(nx, nz, 2.2);
      quadN(wb, [pb, qb, qm, pm], [nx, 0, nz], lo, uvf, [mul(lo, 0.75), mul(lo, 0.75), lo, lo]);
      if (P[2] > ph + 0.01 || Q[2] > qh + 0.01) quadN(wb, [pm, qm, qt, pt], [nx, 0, nz], col, uvf, [mid, mid, col, col]);
    }
  }
}

// Cielo con sol, luces (con sombras) y terreno lejano (dunas o la ciudad debajo en Vertigo)
export function buildEnvironment(scene, W, mapId, quality = 1) {
  const T = themeOf(mapId), S = W.size;
  scene.background = new THREE.Color(T.sky[1]);
  scene.fog = new THREE.Fog(T.fog, 70, mapId === 'vertigo' ? 460 : 330);
  const sd = new THREE.Vector3(0.45, 0.62, 0.3).normalize();
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { a: { value: new THREE.Color(T.sky[0]) }, b: { value: new THREE.Color(T.sky[1]) }, sd: { value: sd } },
    vertexShader: 'varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: 'uniform vec3 a; uniform vec3 b; uniform vec3 sd; varying vec3 vp; void main(){ vec3 col = mix(b, a, smoothstep(-0.05, 0.55, vp.y)); float s = max(dot(vp, sd), 0.); col += vec3(1.,.93,.75) * (pow(s, 700.) * 2.5 + pow(s, 14.) * .2); gl_FragColor = vec4(col, 1.);\n#include <colorspace_fragment>\n}',
  }));
  sky.position.set(S / 2, 0, S / 2); sky.frustumCulled = false; scene.add(sky);
  scene.add(new THREE.HemisphereLight(T.hemiSky, T.ground, 1.0));
  const sun = new THREE.DirectionalLight(T.sun, 2.2);
  sun.position.set(S / 2 + sd.x * S, sd.y * S, S / 2 + sd.z * S); sun.target.position.set(S / 2, 0, S / 2);
  if (quality > 0) {
    sun.castShadow = true;
    const sc = sun.shadow.camera, h = S * 0.62;
    sc.left = -h; sc.right = h; sc.top = h; sc.bottom = -h; sc.near = 1; sc.far = S * 2.4;
    const ms = quality > 1 ? 4096 : 2048;
    sun.shadow.mapSize.set(ms, ms);
    sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.06;
  }
  scene.add(sun, sun.target);
  scene.add(new THREE.AmbientLight('#ffffff', 0.1));
  const rnd = mulberry(7);
  if (mapId === 'vertigo') {
    const g = new THREE.BoxGeometry(1, 1, 1), m = new THREE.MeshLambertMaterial({ color: '#ffffff' });
    const im = new THREE.InstancedMesh(g, m, 140), o = new THREE.Object3D();
    for (let k = 0; k < 140; k++) {
      const a = rnd() * Math.PI * 2, r = 120 + rnd() * 320, h = 40 + rnd() * 140;
      o.position.set(S / 2 + Math.cos(a) * r, -160 + h / 2, S / 2 + Math.sin(a) * r); o.scale.set(14 + rnd() * 26, h, 14 + rnd() * 26); o.updateMatrix(); im.setMatrixAt(k, o.matrix);
      im.setColorAt(k, new THREE.Color().setHSL(0.58, 0.14, 0.45 + rnd() * 0.25));
    }
    scene.add(im);
    const base = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: T.ground })); base.rotation.x = -Math.PI / 2; base.position.set(S / 2, -160, S / 2); scene.add(base);
  } else {
    const base = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: T.ground })); base.rotation.x = -Math.PI / 2; base.position.set(S / 2, -0.6, S / 2); scene.add(base);
    const g = new THREE.ConeGeometry(1, 1, 6, 1), m = new THREE.MeshLambertMaterial({ color: T.ground, flatShading: true });
    const im = new THREE.InstancedMesh(g, m, 40), o = new THREE.Object3D();
    for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2, r = 260 + rnd() * 160, h = 25 + rnd() * 50; o.position.set(S / 2 + Math.cos(a) * r, h / 2 - 1, S / 2 + Math.sin(a) * r); o.scale.set(60 + rnd() * 60, h, 60 + rnd() * 60); o.rotation.y = rnd() * 3; o.updateMatrix(); im.setMatrixAt(k, o.matrix); }
    scene.add(im);
  }
  return sun;
}
function mulberry(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
