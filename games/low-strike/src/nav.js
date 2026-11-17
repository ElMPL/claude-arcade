// Grilla de navegación para los bots: nodos cada 2 celdas del mapa, uno por piso caminable.
// Se construye sola a partir del mundo de columnas y se recorre con A*.
import { blocked, STEP, zoneCells } from './world.js';
import { PM } from './player.js';

const JUMP = 1.15, NSTEP = 0.74; // nodos cada 2 celdas: una rampa empinada sube ~0.65 entre nodos
 // los bots saltan escalones/cajas de hasta esta altura
export function buildNav(W) {
  const k = 2, m = W.n / k, N = m * m, c = W.cell * k;
  // por cada nodo y capa: altura del piso (NaN si no se puede estar)
  const H = [];
  for (let l = 0; l < W.L; l++) H.push(new Float32Array(N).fill(NaN));
  for (let z = 0; z < m; z++) for (let x = 0; x < m; x++) {
    const wx = (x + 0.5) * c, wz = (z + 0.5) * c;
    const i = W.idx(wx, wz);
    for (let l = 0; l < W.L; l++) {
      const t = W.top[l][i]; if (isNaN(t)) continue;
      const cl = W.cls[l][i]; if (cl === 3 || cl === 4) continue;
      if (blocked(W, wx, wz, t, PM.hCrouch + 0.05, 0.36)) continue;
      H[l][z * m + x] = t;
    }
  }
  // quitar nodos aislados / sin lugar a los costados (bordes de paredes)
  const nav = { W, k, m, c, H, L: W.L };
  nav.node = (l, i) => l * N + i;
  nav.pos = id => { const l = Math.floor(id / N), i = id % N; return [(i % m + 0.5) * c, H[l][i], (Math.floor(i / m) + 0.5) * c, l]; };
  nav.nearest = (x, y, z) => {
    const cx = Math.floor(x / c), cz = Math.floor(z / c);
    let best = -1, bd = 1e9;
    for (let r = 0; r <= 6 && best < 0; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
      const xx = cx + dx, zz = cz + dz; if (xx < 0 || zz < 0 || xx >= m || zz >= m) continue;
      const i = zz * m + xx;
      for (let l = 0; l < W.L; l++) {
        const h = H[l][i]; if (isNaN(h) || (nav.main && !nav.main[l * N + i])) continue;
        const d = Math.abs(h - y) * 3 + Math.hypot(dx, dz);
        if (d < bd) { bd = d; best = l * N + i; }
      }
    }
    return best;
  };
  // vecinos: 8 direcciones; subir ≤ STEP, bajar ≤ 2.2 m
  const DX = [1, -1, 0, 0, 1, 1, -1, -1], DZ = [0, 0, 1, -1, 1, -1, 1, -1];
  nav.neighbors = (id, out) => {
    out.length = 0;
    const l = Math.floor(id / N), i = id % N, x = i % m, z = (i - x) / m, h = H[l][i];
    for (let d = 0; d < 8; d++) {
      const xx = x + DX[d], zz = z + DZ[d]; if (xx < 0 || zz < 0 || xx >= m || zz >= m) continue;
      const j = zz * m + xx;
      if (d >= 4) { // diagonal: los dos lados tienen que estar libres
        if (!ok(l, z * m + xx, h) || !ok(l, zz * m + x, h)) continue;
      }
      for (let l2 = 0; l2 < W.L; l2++) {
        const h2 = H[l2][j]; if (isNaN(h2)) continue;
        const up = h2 - h;
        if (up > JUMP || -up > 2.2) continue;
        if (up > NSTEP && d >= 4) continue; // saltos solo en línea recta
        out.push(l2 * N + j, (d >= 4 ? 1.414 : 1) + (up > NSTEP ? 4 : 0));
      }
    }
    return out;
  };
  function ok(l, j, h) { for (let l2 = 0; l2 < W.L; l2++) { const h2 = H[l2][j]; if (!isNaN(h2) && Math.abs(h2 - h) <= NSTEP) return true; } return false; }
  // penalizar bordes (para que los bots no rocen las paredes)
  const edge = new Uint8Array(W.L * N);
  for (let l = 0; l < W.L; l++) for (let i = 0; i < N; i++) {
    if (isNaN(H[l][i])) continue;
    const x = i % m, z = (i - x) / m; let e = 0;
    for (let d = 0; d < 8; d++) { const xx = x + DX[d], zz = z + DZ[d]; if (xx < 0 || zz < 0 || xx >= m || zz >= m || !ok(l, zz * m + xx, H[l][i])) e++; }
    edge[l * N + i] = e;
  }
  nav.edge = edge;
  nav.N = N;
  // componente principal: nodos a los que se llega desde el spawn CT y desde los que se puede volver
  const T = W.L * N, nb = [];
  // se prueban varias semillas dentro del spawn CT (puede haber techos o recovecos) y gana la componente más grande
  const seeds = zoneCells(W, 32), cand = [];
  for (let k = 0; k < seeds.length && cand.length < 8; k += Math.max(1, Math.floor(seeds.length / 8))) {
    const c = seeds[k]; const x = (c % W.n + 0.5) * W.cell, z = (Math.floor(c / W.n) + 0.5) * W.cell; const j = Math.floor(z / nav.c) * m + Math.floor(x / nav.c);
    for (let l = 0; l < W.L; l++) if (!isNaN(H[l][j])) { cand.push(l * N + j); break; }
  }
  if (!cand.length) { for (let i = 0; i < T; i++) if (!isNaN(H[Math.floor(i / N)][i % N])) { cand.push(i); break; } }
  let best = null, bestN = -1;
  for (const s0 of cand) {
    if (best && best[s0]) continue;
    const fwd = new Uint8Array(T), bwd = new Uint8Array(T), radj = new Map();
    let st = [s0]; fwd[s0] = 1;
    while (st.length) { const c = st.pop(); nav.neighbors(c, nb); for (let k = 0; k < nb.length; k += 2) { const t = nb[k]; let r = radj.get(t); if (!r) radj.set(t, r = []); r.push(c); if (!fwd[t]) { fwd[t] = 1; st.push(t); } } }
    st = [s0]; bwd[s0] = 1;
    while (st.length) { const c = st.pop(); const r = radj.get(c); if (!r) continue; for (const t of r) if (!bwd[t]) { bwd[t] = 1; st.push(t); } }
    const main = new Uint8Array(T); let n = 0;
    for (let i = 0; i < T; i++) if (fwd[i] & bwd[i]) { main[i] = 1; n++; }
    if (n > bestN) { bestN = n; best = main; }
  }
  nav.main = best;
  return nav;
}

// A* con montículo binario. Devuelve lista de puntos [x,y,z] o null.
const heap = { a: [], f: [] };
export function findPath(nav, from, to, maxIter = 60000) {
  if (from < 0 || to < 0) return null;
  const T = nav.L * nav.N;
  if (!nav.g || nav.g.length !== T) { nav.g = new Float32Array(T); nav.came = new Int32Array(T); nav.seen = new Uint32Array(T); nav.closed = new Uint32Array(T); nav.stamp = 0; }
  const g = nav.g, came = nav.came, seen = nav.seen, closed = nav.closed; const st = ++nav.stamp;
  const [tx, , tz] = nav.pos(to);
  const hfun = id => { const p = nav.pos(id); return Math.hypot(p[0] - tx, p[2] - tz) / nav.c; };
  heap.a.length = 0; heap.f.length = 0;
  push(from, hfun(from)); g[from] = 0; came[from] = -1; seen[from] = st;
  const nb = [];
  let it = 0;
  while (heap.a.length && it++ < maxIter) {
    const cur = pop();
    if (cur === to) break;
    if (closed[cur] === st) continue;
    closed[cur] = st;
    nav.neighbors(cur, nb);
    for (let k = 0; k < nb.length; k += 2) {
      const nx = nb[k], ng = g[cur] + nb[k + 1] + nav.edge[nx] * 0.35;
      if (seen[nx] === st && ng >= g[nx]) continue;
      seen[nx] = st; g[nx] = ng; came[nx] = cur; push(nx, ng + hfun(nx));
    }
  }
  if (seen[to] !== st) return null;
  const out = [];
  for (let c = to; c !== -1; c = came[c]) out.push(nav.pos(c));
  out.reverse();
  return smooth(nav, out);
}
function push(id, f) {
  const a = heap.a, F = heap.f; a.push(id); F.push(f);
  let i = a.length - 1;
  while (i > 0) { const p = (i - 1) >> 1; if (F[p] <= F[i]) break; [a[p], a[i]] = [a[i], a[p]]; [F[p], F[i]] = [F[i], F[p]]; i = p; }
}
function pop() {
  const a = heap.a, F = heap.f, top = a[0], la = a.pop(), lf = F.pop();
  if (a.length) {
    a[0] = la; F[0] = lf; let i = 0;
    for (;;) {
      const l = 2 * i + 1, r = l + 1; let s = i;
      if (l < a.length && F[l] < F[s]) s = l; if (r < a.length && F[r] < F[s]) s = r;
      if (s === i) break; [a[s], a[i]] = [a[i], a[s]]; [F[s], F[i]] = [F[i], F[s]]; i = s;
    }
  }
  return top;
}
// sacar puntos intermedios en línea recta (cada ~4 nodos se conserva uno)
function smooth(nav, pts) {
  if (pts.length < 3) return pts;
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = out[out.length - 1], b = pts[i + 1];
    const dirA = [pts[i][0] - a[0], pts[i][2] - a[2]], dirB = [b[0] - pts[i][0], b[2] - pts[i][2]];
    const cross = Math.abs(dirA[0] * dirB[1] - dirA[1] * dirB[0]);
    if (cross > 1e-4 || Math.abs(pts[i][1] - a[1]) > 0.3 || Math.hypot(pts[i][0] - a[0], pts[i][2] - a[2]) > nav.c * 6) out.push(pts[i]);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

// puntos de una zona (sitio A/B, spawns) que sean nodos válidos
export function zoneNodes(nav, bit) {
  const W = nav.W, out = new Set();
  for (const i of zoneCells(W, bit)) {
    const x = (i % W.n + 0.5) * W.cell, z = (Math.floor(i / W.n) + 0.5) * W.cell;
    const cx = Math.floor(x / nav.c), cz = Math.floor(z / nav.c), j = cz * nav.m + cx;
    for (let l = W.L - 1; l >= 0; l--) if (!isNaN(nav.H[l][j]) && nav.main[l * nav.N + j]) { out.add(l * nav.N + j); break; }
  }
  return [...out];
}
