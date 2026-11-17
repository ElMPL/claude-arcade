// Mundo de columnas: cada celda de la grilla tiene, por capa, un tramo sólido [bot, top].
// Sirve para colisiones (jugador = caja), raycast de balas/visión y para generar la malla.
export const Q = 0.08;             // cuantización de alturas (escalones invisibles en rampas)
export const STEP = 0.62;           // escalón que se sube caminando
const q = v => Math.round(v / Q) * Q;

// layers: [{ cls: Uint8Array, h: Float32Array }] (n*n). info: { n, cell, layers, zones, id }
export function buildWorld(info, layers) {
  const n = info.n, cell = info.cell, L = layers.length, N = n * n;
  if (info.format === 'spans') { // mapa importado de un modelo 3D: los tramos ya vienen hechos
    const W = { n, cell, L, info, size: n * cell, top: [], bot: [], cls: [], flags: layers.flags || new Uint8Array(N), voidKill: false, imported: true };
    for (const ly of layers) { W.top.push(ly.top); W.bot.push(ly.bot); W.cls.push(ly.cls); }
    W.idx = (x, z) => { const cx = Math.floor(x / cell), cz = Math.floor(z / cell); return cx < 0 || cz < 0 || cx >= n || cz >= n ? -1 : cz * n + cx; };
    W.props = []; W.propCell = [];
    return W;
  }
  const multi = L > 1;
  const W = { n, cell, L, info, size: n * cell, top: [], bot: [], cls: [], flags: new Uint8Array(N), voidKill: multi };
  // distancia a lo caminable para cerrar el mapa con paredes
  const walk = new Uint8Array(N);
  for (const ly of layers) for (let i = 0; i < N; i++) { const c = ly.cls[i] & 3; if (c === 1 || c === 2) walk[i] = 1; }
  const near = new Uint8Array(N); // 1 si hay piso a ≤ 5 celdas
  {
    const R = 5;
    const rowAcc = new Uint8Array(N);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { let v = 0; for (let k = -R; k <= R && !v; k++) { const xx = x + k; if (xx >= 0 && xx < n && walk[y * n + xx]) v = 1; } rowAcc[y * n + x] = v; }
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { let v = 0; for (let k = -R; k <= R && !v; k++) { const yy = y + k; if (yy >= 0 && yy < n && rowAcc[yy * n + x]) v = 1; } near[y * n + x] = v; }
  }
  const clean = !!info.clean; // mapas ya rehechos en bloques: no hace falta limpiar ni suavizar
  if (!clean) for (const ly of layers) cleanMask(n, ly.cls, ly.h, multi);
  // paredes con puerta que el radar no dibuja (rectángulo de pared + hueco)
  for (const [x0, y0, x1, y1, g0, g1] of DOORWALLS[info.id] || []) {
    const ly = layers[0];
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const i = y * n + x, along = x1 - x0 >= y1 - y0 ? x : y;
      if (along >= g0 && along <= g1) continue;
      if ((ly.cls[i] & 3) === 1 || (ly.cls[i] & 3) === 2) ly.cls[i] = (ly.cls[i] & ~3) | 3;
    }
  }
  if (!clean) for (const ly of layers) relaxFloors(n, ly.cls, ly.h);
  if (!clean) for (const ly of layers) plateaus(n, ly.cls, ly.h);
  for (let li = 0; li < L; li++) {
    const { cls, h } = layers[li];
    const top = new Float32Array(N).fill(NaN), bot = new Float32Array(N).fill(NaN), cc = new Uint8Array(N);
    const WH = multi ? (li === 0 ? 3.95 : 4.6) : 6.2;
    // techo de las paredes: el piso más alto cerca + altura, en escalones de 0.6 m (sin bordes serruchados)
    const fmax = maxFilter(n, cls, h, 7);
    // obstáculos (cajas): un solo alto por bloque
    const omax = blockMax(n, cls, h);
    for (let i = 0; i < N; i++) {
      const raw = cls[i], c = raw & 3;
      if (li === 0) W.flags[i] |= raw & ~3;
      else W.flags[i] |= raw & ~3;
      let base = h[i];
      let t = NaN, b = NaN;
      if (c === 1) { t = q(base); }
      else if (c === 2) { t = q(omax[i] + 1.05); }
      else if (c === 3 || (c === 0 && !multi && near[i])) { const f = fmax[i] > -1e8 ? fmax[i] : base; t = q(Math.ceil((f + WH) / 0.6) * 0.6); if (multi) t = q(f + WH); }
      else if (c === 0 && multi && li === 0 && near[i] && !anyWalk(layers, i)) { /* borde del edificio: vacío (se puede caer) */ }
      if (!isNaN(t)) { b = li === 0 ? -30 : q(base) - 0.36; cc[i] = c === 0 ? 3 : c; }
      top[i] = t; bot[i] = b;
    }
    W.top.push(top); W.bot.push(bot); W.cls.push(cc);
  }
  // en mapas de 2 pisos, las paredes de abajo no atraviesan la losa de arriba
  if (multi) {
    const t0 = W.top[0], b1 = W.bot[1], c0 = W.cls[0];
    for (let i = 0; i < N; i++) if (c0[i] === 3 && !isNaN(b1[i]) && t0[i] > b1[i]) t0[i] = b1[i];
  }
  W.idx = (x, z) => { const cx = Math.floor(x / cell), cz = Math.floor(z / cell); return cx < 0 || cz < 0 || cx >= n || cz >= n ? -1 : cz * n + cx; };
  for (let l = 0; l < W.L; l++) orientedProps(W, l);
  if (!multi) addSlabs(W, layers[0]);
  return W;
}

const DOORWALLS = {
  dust2: [[220, 182, 254, 184, 230, 242]],
};
// Cajas y obstáculos chicos: se reemplaza la mancha del radar por una caja orientada (PCA),
// así quedan cajas derechas o rotadas en vez de escaleras de celdas.
function orientedProps(W, l) {
  const n = W.n, c = W.cell, cls = W.cls[l], top = W.top[l], bot = W.bot[l];
  W.props = W.props || []; W.propCell = W.propCell || [];
  const pc = new Int32Array(n * n); W.propCell[l] = pc;
  const seen = new Uint8Array(n * n), st = [], comp = [];
  for (let s = 0; s < n * n; s++) {
    if (seen[s] || cls[s] !== 2) continue;
    st.length = 0; comp.length = 0; st.push(s); seen[s] = 1;
    while (st.length) { const i = st.pop(); comp.push(i); const x = i % n, y = (i - x) / n; for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, y > 0 ? i - n : -1, y < n - 1 ? i + n : -1]) if (j >= 0 && !seen[j] && cls[j] === 2) { seen[j] = 1; st.push(j); } }
    if (comp.length < 6 || comp.length > 420) continue;
    // PCA
    let mx = 0, mz = 0; for (const i of comp) { mx += i % n; mz += Math.floor(i / n); } mx /= comp.length; mz /= comp.length;
    let sxx = 0, szz = 0, sxz = 0; for (const i of comp) { const dx = i % n - mx, dz = Math.floor(i / n) - mz; sxx += dx * dx; szz += dz * dz; sxz += dx * dz; }
    let ang = 0.5 * Math.atan2(2 * sxz, sxx - szz);
    if (Math.abs(sxx - szz) < 1e-6 && Math.abs(sxz) < 1e-6) ang = 0;
    // cerca de los ejes: derecho
    const sn = ((ang % (Math.PI / 2)) + Math.PI / 2) % (Math.PI / 2); if (sn < 0.14 || sn > Math.PI / 2 - 0.14) ang = Math.round(ang / (Math.PI / 2)) * (Math.PI / 2);
    const ca = Math.cos(ang), sa = Math.sin(ang);
    let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
    for (const i of comp) { const dx = i % n - mx, dz = Math.floor(i / n) - mz; const u = dx * ca + dz * sa, v = -dx * sa + dz * ca; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    const hu = (u1 - u0) / 2 + 0.5, hv = (v1 - v0) / 2 + 0.5, cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
    const ccx = mx + cu * ca - cv * sa, ccz = mz + cu * sa + cv * ca;
    // base: piso más bajo alrededor
    let base = 1e9, yTop = -1e9; for (const i of comp) yTop = Math.max(yTop, top[i]);
    for (const i of comp) { const x = i % n; for (const j of [i - 1, i + 1, i - n, i + n]) if (j >= 0 && j < n * n && cls[j] === 1 && Math.abs((j % n) - x) <= 1) base = Math.min(base, top[j]); }
    if (base > 1e8) continue;
    const id = W.props.length + 1;
    const R = Math.ceil(Math.max(hu, hv)) + 1;
    for (let z = Math.floor(ccz) - R; z <= Math.ceil(ccz) + R; z++) for (let x = Math.floor(ccx) - R; x <= Math.ceil(ccx) + R; x++) {
      if (x < 0 || z < 0 || x >= n || z >= n) continue;
      const i = z * n + x, dx = x - ccx, dz = z - ccz, u = dx * ca + dz * sa, v = -dx * sa + dz * ca;
      const inside = Math.abs(u) <= hu - 0.35 && Math.abs(v) <= hv - 0.35;
      if (inside && (cls[i] === 1 || cls[i] === 2)) { cls[i] = 2; top[i] = yTop; pc[i] = id; }
      else if (!inside && cls[i] === 2 && comp.includes(i)) { cls[i] = 1; top[i] = Math.round(base / Q) * Q; }
    }
    W.props.push({ l, x: (ccx + 0.5) * c, z: (ccz + 0.5) * c, hu: hu * c, hv: hv * c, ang, y0: base, y1: yTop, cells: comp.length });
  }
}
// Techos de túneles e interiores (rectángulos en coordenadas de la grilla, mirando el radar)
const ROOFS = {
  dust2: [[142, 188, 224, 220], [30, 203, 128, 257], [46, 158, 64, 205], [68, 253, 102, 290], [126, 212, 162, 252], [336, 276, 374, 334]],
  mirage: [[110, 76, 306, 114], [200, 92, 228, 136], [320, 360, 432, 412], [210, 204, 238, 254]],
};
// Capa extra con losas (clase 4): techos y dinteles de puertas, para que los pasos angostos sean puertas
function addSlabs(W, ly0) {
  const n = W.n, N = n * n, c = W.cell, t0 = W.top[0], c0 = W.cls[0];
  const top = new Float32Array(N).fill(NaN), bot = new Float32Array(N).fill(NaN), cc = new Uint8Array(N);
  const fmax = maxFilter(n, ly0.cls, ly0.h, 7);
  const walkable = i => c0[i] === 1 || c0[i] === 2;
  const solid = i => !walkable(i);
  const wallTop = i => q(Math.ceil(((fmax[i] > -1e8 ? fmax[i] : t0[i]) + 6.2) / 0.6) * 0.6);
  // techos
  for (const [x0, y0, x1, y1] of ROOFS[W.info.id] || []) {
    let hi = -1e9; for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) { const i = y * n + x; if (c0[i] === 1 && t0[i] > hi) hi = t0[i]; }
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const i = y * n + x; if (!walkable(i)) continue;
      const b = q(hi + 2.9);
      bot[i] = b; top[i] = Math.max(b + 0.5, wallTop(i) - 0.6); cc[i] = 4;
    }
  }
  // puertas: paso angosto (≤ 3.2 m) y corto (≤ 2 m) entre dos zonas anchas
  const D = Math.round(3.2 / c), P = Math.round(2.0 / c);
  const spanX = new Uint16Array(N), spanZ = new Uint16Array(N);
  for (let y = 0; y < n; y++) { let x = 0; while (x < n) { if (solid(y * n + x)) { x++; continue; } let e = x; while (e < n && !solid(y * n + e)) e++; for (let k = x; k < e; k++) spanX[y * n + k] = e - x; x = e; } }
  for (let x = 0; x < n; x++) { let y = 0; while (y < n) { if (solid(y * n + x)) { y++; continue; } let e = y; while (e < n && !solid(e * n + x)) e++; for (let k = y; k < e; k++) spanZ[k * n + x] = e - y; y = e; } }
  const mark = (i, hb) => { if (cc[i]) return; bot[i] = q(hb + 2.45); top[i] = wallTop(i); cc[i] = 4; };
  const runMax = (list) => { let m = -1e9; for (const i of list) if (t0[i] > m) m = t0[i]; return m; };
  // pasaje a lo largo de z (pared corre en x): celdas con spanX ≤ D, tramo corto en z
  for (let x = 0; x < n; x++) { let y = 0; while (y < n) {
    const i = y * n + x; if (solid(i) || spanX[i] > D) { y++; continue; }
    let e = y; while (e < n && !solid(e * n + x) && spanX[e * n + x] <= D) e++;
    const len = e - y;
    if (len <= P && y > 0 && e < n && !solid((y - 1) * n + x) && !solid(e * n + x) && spanX[(y - 1) * n + x] > D + 2 && spanX[e * n + x] > D + 2) { const L2 = []; for (let k = y; k < e; k++) L2.push(k * n + x); const m = runMax(L2); for (const i2 of L2) mark(i2, m); }
    y = e; } }
  for (let y = 0; y < n; y++) { let x = 0; while (x < n) {
    const i = y * n + x; if (solid(i) || spanZ[i] > D) { x++; continue; }
    let e = x; while (e < n && !solid(y * n + e) && spanZ[y * n + e] <= D) e++;
    const len = e - x;
    if (len <= P && x > 0 && e < n && !solid(y * n + x - 1) && !solid(y * n + e) && spanZ[y * n + x - 1] > D + 2 && spanZ[y * n + e] > D + 2) { const L2 = []; for (let k = x; k < e; k++) L2.push(y * n + k); const m = runMax(L2); for (const i2 of L2) mark(i2, m); }
    x = e; } }
  W.top.push(top); W.bot.push(bot); W.cls.push(cc); W.L = 2; W.slabs = true;
}
// Limpia el plano: saca manchitas de pared sueltas (líneas y textos del radar) y suaviza los bordes
function cleanMask(n, cls, h, multi) {
  const N = n * n, seen = new Uint8Array(N), st = [], comp = [];
  const isW = i => (cls[i] & 3) === 3;
  for (let s = 0; s < N; s++) {
    if (seen[s] || !isW(s)) continue;
    st.length = 0; comp.length = 0; st.push(s); seen[s] = 1; let touchVoid = false;
    while (st.length) {
      const i = st.pop(); comp.push(i); const x = i % n, y = (i - x) / n;
      for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, y > 0 ? i - n : -1, y < n - 1 ? i + n : -1]) {
        if (j < 0) continue; if ((cls[j] & 3) === 0) touchVoid = true;
        if (!seen[j] && isW(j)) { seen[j] = 1; st.push(j); }
      }
    }
    if (comp.length < 40 && !touchVoid) for (const i of comp) toFloor(i);
  }
  function toFloor(i) {
    const x = i % n, y = (i - x) / n; let s = 0, k = 0;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= n || yy >= n) continue; const j = yy * n + xx; if ((cls[j] & 3) === 1) { s += h[j]; k++; } }
    cls[i] = (cls[i] & ~3) | 1; if (k) h[i] = s / k;
  }
  if (multi) return;
  // mayoría 3x3 sobre lo sólido (pared o vacío): quita dientes de 1 celda
  for (let pass = 0; pass < 2; pass++) {
    const sol = new Uint8Array(N); for (let i = 0; i < N; i++) { const c = cls[i] & 3; sol[i] = c === 3 || c === 0 ? 1 : 0; }
    for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
      const i = y * n + x; let cnt = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) cnt += sol[i + dy * n + dx];
      if (sol[i] && cnt <= 3 && (cls[i] & 3) === 3) toFloor(i);
      else if (!sol[i] && cnt >= 7 && (cls[i] & 3) === 1) cls[i] = (cls[i] & ~3) | 3;
    }
  }
}
// El radar da la altura por color en franjas: entre franjas quedan escalones falsos. Se los
// convierte en rampas con difusión sobre el piso, sin cruzar los desniveles reales (> CLIFF).
const CLIFF = 1.7;
function relaxFloors(n, cls, h) {
  const N = n * n, fl = new Uint8Array(N);
  for (let i = 0; i < N; i++) fl[i] = (cls[i] & 3) === 1 ? 1 : 0;
  // el borde del radar (contorno con antialias) da alturas falsas junto a las paredes: se rellena desde adentro
  {
    const edge = new Uint8Array(N);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x; if (!fl[i]) continue;
      let e = 0; for (let dy = -4; dy <= 4 && !e; dy++) for (let dx = -4; dx <= 4; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= n || yy >= n) continue; const c = cls[yy * n + xx] & 3; if (c === 3 || c === 0) { e = 1; break; } }
      edge[i] = e;
    }
    for (let pass = 0; pass < 7; pass++) {
      for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
        const i = y * n + x; if (edge[i] !== 1 && edge[i] !== 2) continue;
        let s = 0, k = 0;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const j = i + dy * n + dx; if (fl[j] && (edge[j] === 0 || edge[j] === 3)) { s += h[j]; k++; } }
        if (k) { h[i] = s / k; edge[i] = 2; }
      }
      for (let i = 0; i < N; i++) if (edge[i] === 2) edge[i] = 3;
    }
  }
  // aristas válidas (derecha y abajo): bit 1 = derecha, bit 2 = abajo
  const e = new Uint8Array(N);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const i = y * n + x; if (!fl[i]) continue;
    if (x + 1 < n && fl[i + 1] && Math.abs(h[i] - h[i + 1]) <= CLIFF) e[i] |= 1;
    if (y + 1 < n && fl[i + n] && Math.abs(h[i] - h[i + n]) <= CLIFF) e[i] |= 2;
  }
  let a = Float32Array.from(h), b = new Float32Array(N);
  for (let it = 0; it < 48; it++) {
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x; if (!fl[i]) { b[i] = a[i]; continue; }
      let s = a[i] * 2, c = 2;
      if (e[i] & 1) { s += a[i + 1]; c++; }
      if (e[i] & 2) { s += a[i + n]; c++; }
      if (x > 0 && (e[i - 1] & 1)) { s += a[i - 1]; c++; }
      if (y > 0 && (e[i - n] & 2)) { s += a[i - n]; c++; }
      b[i] = s / c;
    }
    const t = a; a = b; b = t;
  }
  for (let i = 0; i < N; i++) if (fl[i]) h[i] = a[i];
}
function maxFilter(n, cls, h, R) {
  const N = n * n, a = new Float32Array(N).fill(-1e9), b = new Float32Array(N).fill(-1e9);
  for (let i = 0; i < N; i++) if ((cls[i] & 3) === 1) a[i] = h[i];
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { let m = -1e9; for (let k = Math.max(0, x - R); k <= Math.min(n - 1, x + R); k++) { const v = a[y * n + k]; if (v > m) m = v; } b[y * n + x] = m; }
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { let m = -1e9; for (let k = Math.max(0, y - R); k <= Math.min(n - 1, y + R); k++) { const v = b[k * n + x]; if (v > m) m = v; } a[y * n + x] = m; }
  return a;
}
function blockMax(n, cls, h) {
  const N = n * n, out = new Float32Array(N), seen = new Uint8Array(N), st = [], comp = [];
  for (let s = 0; s < N; s++) {
    if (seen[s] || (cls[s] & 3) !== 2) continue;
    st.length = 0; comp.length = 0; st.push(s); seen[s] = 1; let m = -1e9;
    while (st.length) {
      const i = st.pop(); comp.push(i); if (h[i] > m) m = h[i];
      const x = i % n, y = (i - x) / n;
      for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, y > 0 ? i - n : -1, y < n - 1 ? i + n : -1]) if (j >= 0 && !seen[j] && (cls[j] & 3) === 2) { seen[j] = 1; st.push(j); }
    }
    // bloques enormes (plataformas) siguen el piso
    if (comp.length > 900) for (const i of comp) out[i] = h[i]; else for (const i of comp) out[i] = m;
  }
  return out;
}
// Pisos coherentes: las zonas casi planas quedan perfectamente planas (a su mediana) y las rampas
// se rehacen como interpolación lisa entre esas zonas.
function plateaus(n, cls, h) {
  const N = n * n, fl = new Uint8Array(N);
  for (let i = 0; i < N; i++) fl[i] = (cls[i] & 3) === 1 ? 1 : 0;
  const flat = new Uint8Array(N);
  for (let y = 2; y < n - 2; y++) for (let x = 2; x < n - 2; x++) {
    const i = y * n + x; if (!fl[i]) continue;
    let g = 0;
    for (const d of [2, -2, 2 * n, -2 * n]) { const j = i + d; if (fl[j]) g = Math.max(g, Math.abs(h[j] - h[i]) / 2); }
    flat[i] = g < 0.045 ? 1 : 0;
  }
  // componentes planas
  const lab = new Int32Array(N).fill(-1), st = [], comp = [];
  let nl = 0;
  for (let s = 0; s < N; s++) {
    if (!flat[s] || lab[s] >= 0) continue;
    st.length = 0; comp.length = 0; st.push(s); lab[s] = nl;
    while (st.length) { const i = st.pop(); comp.push(i); const x = i % n; for (const j of [x > 0 ? i - 1 : -1, x < n - 1 ? i + 1 : -1, i - n, i + n]) if (j >= 0 && j < N && flat[j] && lab[j] < 0 && Math.abs(h[j] - h[i]) < 0.12) { lab[j] = nl; st.push(j); } }
    if (comp.length >= 25) { const v = comp.map(i => h[i]).sort((a, b) => a - b), m = v[v.length >> 1]; for (const i of comp) h[i] = m; }
    else for (const i of comp) flat[i] = 0;
    nl++;
  }
  // rampas: Laplace con las zonas planas fijas
  const a = Float32Array.from(h);
  for (let it = 0; it < 80; it++) {
    for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
      const i = y * n + x; if (!fl[i] || flat[i]) continue;
      let sum = 0, k = 0;
      for (const j of [i - 1, i + 1, i - n, i + n]) if (fl[j] && Math.abs(a[j] - a[i]) < 1.7) { sum += a[j]; k++; }
      if (k) a[i] = sum / k;
    }
  }
  for (let i = 0; i < N; i++) if (fl[i]) h[i] = a[i];
}
function anyWalk(layers, i) { for (const ly of layers) { const c = ly.cls[i] & 3; if (c === 1 || c === 2) return true; } return false; }

// ¿Está bloqueada la caja del jugador (centro x,z; pies y; alto hgt; radio r)?
export function blocked(W, x, z, y, hgt, r = 0.4) {
  for (const [ox, oz] of FOOT) {
    const i = W.idx(x + ox * r, z + oz * r);
    if (i < 0) return true;
    for (let l = 0; l < W.L; l++) {
      const t = W.top[l][i]; if (isNaN(t)) continue;
      if (t > y + STEP && W.bot[l][i] < y + hgt) return true;
    }
  }
  return false;
}
const FOOT = [[0, 0], [1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];

// piso bajo los pies (máximo top ≤ y+STEP) y techo sobre la cabeza
export function ground(W, x, z, y, r = 0.38) {
  let g = -Infinity;
  for (const [ox, oz] of FOOT) {
    const i = W.idx(x + ox * r, z + oz * r);
    if (i < 0) continue;
    for (let l = 0; l < W.L; l++) {
      const t = W.top[l][i]; if (isNaN(t)) continue;
      if (t <= y + STEP && t > g && W.bot[l][i] < y + 0.1 + STEP) g = t;
    }
  }
  return g;
}
export function ceiling(W, x, z, y, r = 0.38) {
  let c = Infinity;
  for (const [ox, oz] of FOOT) {
    const i = W.idx(x + ox * r, z + oz * r);
    if (i < 0) continue;
    for (let l = 0; l < W.L; l++) {
      const b = W.bot[l][i]; if (isNaN(b)) continue;
      if (b > y + 0.2 && b < c) c = b;
    }
  }
  return c;
}
// altura del piso en un punto (para colocar cosas): el piso más alto debajo de y
export function floorAt(W, x, z, y = 1e9) {
  const i = W.idx(x, z); if (i < 0) return -Infinity;
  let g = -Infinity;
  for (let l = 0; l < W.L; l++) { const t = W.top[l][i]; if (!isNaN(t) && t <= y && t > g) g = t; }
  return g;
}

// Raycast contra el mapa. Devuelve { t, nx, ny, nz, cell, layer } o null.
export function raycast(W, ox, oy, oz, dx, dy, dz, maxT = 200) {
  const cell = W.cell, n = W.n;
  let cx = Math.floor(ox / cell), cz = Math.floor(oz / cell);
  const sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
  const tdx = dx !== 0 ? Math.abs(cell / dx) : Infinity, tdz = dz !== 0 ? Math.abs(cell / dz) : Infinity;
  let tmx = dx !== 0 ? ((dx > 0 ? (cx + 1) * cell - ox : ox - cx * cell) / Math.abs(dx)) : Infinity;
  let tmz = dz !== 0 ? ((dz > 0 ? (cz + 1) * cell - oz : oz - cz * cell) / Math.abs(dz)) : Infinity;
  let t0 = 0, enterAxis = -1;
  for (let it = 0; it < 4000; it++) {
    if (cx < 0 || cz < 0 || cx >= n || cz >= n) return null;
    const t1 = Math.min(tmx, tmz, maxT);
    const i = cz * n + cx;
    const y0 = oy + dy * t0, y1 = oy + dy * t1;
    for (let l = 0; l < W.L; l++) {
      const top = W.top[l][i]; if (isNaN(top)) continue;
      const bot = W.bot[l][i];
      // entra por el costado
      if (y0 >= bot && y0 <= top && it > 0) {
        return { t: t0, nx: enterAxis === 0 ? -sx : 0, ny: 0, nz: enterAxis === 1 ? -sz : 0, cell: i, layer: l };
      }
      if (y0 >= bot && y0 <= top && it === 0) return { t: 0, nx: 0, ny: 1, nz: 0, cell: i, layer: l };
      // atraviesa la cara de arriba / abajo dentro de la celda
      if (y0 > top && y1 <= top && dy < 0) { const t = (top - oy) / dy; return { t, nx: 0, ny: 1, nz: 0, cell: i, layer: l }; }
      if (y0 < bot && y1 >= bot && dy > 0) { const t = (bot - oy) / dy; return { t, nx: 0, ny: -1, nz: 0, cell: i, layer: l }; }
    }
    if (t1 >= maxT) return null;
    t0 = t1;
    if (tmx < tmz) { cx += sx; tmx += tdx; enterAxis = 0; } else { cz += sz; tmz += tdz; enterAxis = 1; }
  }
  return null;
}
export function lineOfSight(W, ax, ay, az, bx, by, bz) {
  const dx = bx - ax, dy = by - ay, dz = bz - az, L = Math.hypot(dx, dy, dz);
  if (L < 1e-3) return true;
  const h = raycast(W, ax, ay, az, dx / L, dy / L, dz / L, L);
  return !h || h.t >= L - 0.05;
}

export function solidAt(W, x, y, z) {
  const i = W.idx(x, z); if (i < 0) return false;
  for (let l = 0; l < W.L; l++) { const t = W.top[l][i]; if (!isNaN(t) && y <= t && y >= W.bot[l][i]) return true; }
  return false;
}
// celdas de zonas (bit 4 = A, 8 = B, 16 = spawn T, 32 = spawn CT)
export function zoneAt(W, x, z) { const i = W.idx(x, z); return i < 0 ? 0 : W.flags[i]; }
export function zoneCells(W, bit) {
  const out = [];
  for (let i = 0; i < W.n * W.n; i++) if (W.flags[i] & bit) out.push(i);
  return out;
}
