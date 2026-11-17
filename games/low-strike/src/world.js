// Mundo de columnas: cada celda de la grilla tiene, por capa, un tramo sólido [bot, top].
// Sirve para colisiones (jugador = caja), raycast de balas/visión y para generar la malla.
export const Q = 0.08;             // cuantización de alturas (escalones invisibles en rampas)
export const STEP = 0.5;           // escalón que se sube caminando
const q = v => Math.round(v / Q) * Q;

// layers: [{ cls: Uint8Array, h: Float32Array }] (n*n). info: { n, cell, layers, zones, id }
export function buildWorld(info, layers) {
  const n = info.n, cell = info.cell, L = layers.length, N = n * n;
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
  for (const ly of layers) relaxFloors(n, ly.cls, ly.h);
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
  return W;
}
// El radar da la altura por color en franjas: entre franjas quedan escalones falsos. Se los
// convierte en rampas con difusión sobre el piso, sin cruzar los desniveles reales (> CLIFF).
const CLIFF = 1.7;
function relaxFloors(n, cls, h) {
  const N = n * n, fl = new Uint8Array(N);
  for (let i = 0; i < N; i++) fl[i] = (cls[i] & 3) === 1 ? 1 : 0;
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
