// Grilla de navegación para los bots: nodos cada 2 celdas del mapa, uno por piso caminable.
// Se construye sola a partir del mundo de columnas y se recorre con A*.
import { blocked, STEP, zoneCells } from './world.js';
import { PM } from './player.js';

const JUMP = 1.15, NSTEP = 0.74; // nodos cada ~0.55 m: una rampa empinada sube ~0.65 entre nodos
 // los bots saltan escalones/cajas de hasta esta altura
export function buildNav(W) {
  const k = Math.max(1, Math.round(0.55 / W.cell)), m = Math.floor(W.n / k), N = m * m, c = W.cell * k;
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

// Trampas: lugares a los que un jugador puede caer (o saltar) desde la zona jugable pero de los que no
// puede volver — afuera del mapa, pozos, techos bajos al borde. Se tapan con paredes invisibles hasta
// arriba para que nadie quede atrapado ni se caiga del mapa. Devuelve cuántas celdas se taparon.
export function sealTraps(W, nav, jump = 1.45) {
  const { m, N, H } = nav, T = W.L * N;
  if (!nav.main) return 0;
  const D4 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const nbr = (id, fn) => {
    const l = Math.floor(id / N), i = id % N, x = i % m, z = (i - x) / m, h = H[l][i];
    for (const [dx, dz] of D4) {
      const xx = x + dx, zz = z + dz; if (xx < 0 || zz < 0 || xx >= m || zz >= m) continue;
      const j = zz * m + xx;
      for (let l2 = 0; l2 < W.L; l2++) { const h2 = H[l2][j]; if (!isNaN(h2) && h2 - h <= jump) fn(l2 * N + j); }
    }
  };
  // hacia adelante desde la zona principal (el jugador puede bajar cualquier altura)
  const fwd = new Uint8Array(T), st = [];
  for (let n = 0; n < T; n++) if (nav.main[n]) { fwd[n] = 1; st.push(n); }
  while (st.length) { const u = st.pop(); nbr(u, v => { if (!fwd[v]) { fwd[v] = 1; st.push(v); } }); }
  // ¿desde dónde se puede volver? búsqueda inversa
  const rev = new Map();
  for (let n = 0; n < T; n++) if (fwd[n]) nbr(n, v => { if (!fwd[v]) return; let r = rev.get(v); if (!r) rev.set(v, r = []); r.push(n); });
  const back = new Uint8Array(T);
  for (let n = 0; n < T; n++) if (nav.main[n]) { back[n] = 1; st.push(n); }
  while (st.length) { const u = st.pop(); const r = rev.get(u); if (r) for (const v of r) if (!back[v]) { back[v] = 1; st.push(v); } }
  // trepadas: lugares fuera de la zona principal a los que se llega encadenando saltos (cajas → pared →
  // techo). Se permite subirse a cajas (hasta 2 saltos y ~2.6 m sobre el piso de donde saliste); lo demás
  // (techos, bordes de paredes) se tapa para que nadie camine por arriba del mapa.
  const jumps = new Uint8Array(T).fill(255), base = new Float32Array(T), dq = [];
  for (let n = 0; n < T; n++) if (nav.main[n]) { jumps[n] = 0; base[n] = H[Math.floor(n / N)][n % N]; dq.push(n); }
  const hOf = n => H[Math.floor(n / N)][n % N];
  for (let qi = 0; qi < dq.length; qi++) {
    const u = dq[qi], hu = hOf(u);
    nbr(u, v => {
      if (nav.main[v]) return;
      const up = hOf(v) - hu, j = jumps[u] + (up > 0.7 ? 1 : 0), b = nav.main[u] ? hu : base[u];
      if (j < jumps[v]) { jumps[v] = j; base[v] = b; dq.push(v); }
    });
  }
  // zonas trepables agrupadas: una caja es chica; un techo o el borde de una pared es grande o muy alto
  const comp = new Int32Array(T).fill(-1), cInfo = [];
  for (let n = 0; n < T; n++) {
    if (nav.main[n] || jumps[n] === 255 || comp[n] >= 0) continue;
    const id = cInfo.length, q = [n]; comp[n] = id; let cnt = 0, up = 0;
    for (let qi = 0; qi < q.length; qi++) { const u = q[qi]; cnt++; up = Math.max(up, hOf(u) - base[u]); nbr(u, v => { if (comp[v] < 0 && !nav.main[v] && jumps[v] < 255 && Math.abs(hOf(v) - hOf(u)) < 0.7) { comp[v] = id; q.push(v); } }); }
    cInfo.push({ area: cnt * nav.c * nav.c, up });
  }
  // mapa de lugares válidos para pararse (zona principal o una caja chica); el juego usa esto para bajar
  // a quien se las arregle para subir a un techo
  const ok = new Uint8Array(T);
  for (let n = 0; n < T; n++) { if (nav.main[n]) ok[n] = 1; else if (jumps[n] < 255) { const ci = cInfo[comp[n]]; if (ci && ci.area <= 14 && ci.up <= 2.0 && jumps[n] <= 2) ok[n] = 1; } }
  W.okNav = { m, N, c: nav.c, H, ok, L: W.L };
  const climb = n => {
    if (nav.main[n] || jumps[n] === 255) return false;
    return jumps[n] > 2 || hOf(n) - base[n] > 2.6;
  };
  let cells = 0;
  for (let n = 0; n < T; n++) {
    const trap = fwd[n] && !back[n];
    if (!trap && !climb(n)) continue;
    if (!trap) { // trepada: se levanta 2.2 m (no se puede volver a subir), no hasta el techo
      const l = Math.floor(n / N), i = n % N, x = i % m, z = (i - x) / m, h = H[l][i];
      for (let dz = 0; dz < nav.k; dz++) for (let dx = 0; dx < nav.k; dx++) {
        const ci = (z * nav.k + dz) * W.n + x * nav.k + dx;
        let li = -1, bd = 0.4; for (let q = 0; q < W.L; q++) { const t = W.top[q][ci]; if (!isNaN(t) && Math.abs(t - h) < bd) { bd = Math.abs(t - h); li = q; } }
        if (li < 0) continue;
        const above = li + 1 < W.L && !isNaN(W.bot[li + 1][ci]) ? W.bot[li + 1][ci] : 60;
        W.top[li][ci] = Math.min(above, W.top[li][ci] + 2.2); W.cls[li][ci] = 3; cells++;
      }
      continue;
    }
    const l = Math.floor(n / N), i = n % N, x = i % m, z = (i - x) / m, h = H[l][i];
    for (let dz = 0; dz < nav.k; dz++) for (let dx = 0; dx < nav.k; dx++) {
      const ci = (z * nav.k + dz) * W.n + x * nav.k + dx;
      let li = -1, bd = 0.4; for (let q = 0; q < W.L; q++) { const t = W.top[q][ci]; if (!isNaN(t) && Math.abs(t - h) < bd) { bd = Math.abs(t - h); li = q; } }
      if (li < 0) continue;
      const above = li + 1 < W.L && !isNaN(W.bot[li + 1][ci]) ? W.bot[li + 1][ci] : 40;
      W.top[li][ci] = above; W.cls[li][ci] = 3; cells++;
    }
  }
  return cells;
}

// ¿(x,y,z) está parado en un lugar válido? (si no se sabe, sí)
export function okSpot(W, x, y, z) {
  const O = W.okNav; if (!O) return true;
  const xi = Math.floor(x / O.c), zi = Math.floor(z / O.c); if (xi < 0 || zi < 0 || xi >= O.m || zi >= O.m) return false;
  for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
    const xx = xi + dx, zz = zi + dz; if (xx < 0 || zz < 0 || xx >= O.m || zz >= O.m) continue; const i = zz * O.m + xx;
    for (let l = 0; l < O.L; l++) { const h = O.H[l][i]; if (!isNaN(h) && Math.abs(h - y) < 1.0 && O.ok[l * O.N + i]) return true; }
  }
  return false;
}
