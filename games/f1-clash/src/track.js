// Geometría de pista: spline cerrada, muestras uniformes, línea ideal y perfil de velocidad.
import { CAR } from './physics.js';

const SP = 3; // metros entre muestras

function catmull(p0, p1, p2, p3, t) {
  // Catmull-Rom centrípeta
  const d = (a, b) => Math.pow(Math.hypot(b[0] - a[0], b[1] - a[1]), 0.5) || 1e-4;
  const t0 = 0, t1 = t0 + d(p0, p1), t2 = t1 + d(p1, p2), t3 = t2 + d(p2, p3);
  const u = t1 + (t2 - t1) * t;
  const L = (a, b, ta, tb) => [(tb - u) / (tb - ta) * a[0] + (u - ta) / (tb - ta) * b[0], (tb - u) / (tb - ta) * a[1] + (u - ta) / (tb - ta) * b[1]];
  const A1 = L(p0, p1, t0, t1), A2 = L(p1, p2, t1, t2), A3 = L(p2, p3, t2, t3);
  const B1 = L(A1, A2, t0, t2), B2 = L(A2, A3, t1, t3);
  return L(B1, B2, t1, t2);
}

export function buildTrack(def) {
  const P = def.pts, n = P.length;
  // muestreo fino
  const fine = [];
  for (let i = 0; i < n; i++) {
    const p0 = P[(i - 1 + n) % n], p1 = P[i], p2 = P[(i + 1) % n], p3 = P[(i + 2) % n];
    const steps = Math.max(8, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 0.5));
    for (let k = 0; k < steps; k++) fine.push(catmull(p0, p1, p2, p3, k / steps));
  }
  // longitud acumulada
  const cum = [0];
  for (let i = 1; i <= fine.length; i++) { const a = fine[i - 1], b = fine[i % fine.length]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const total = cum[fine.length];
  const N = Math.round(total / SP), ds = total / N;
  const px = new Float64Array(N), pz = new Float64Array(N);
  let j = 0;
  for (let i = 0; i < N; i++) {
    const s = i * ds;
    while (cum[j + 1] < s) j++;
    const a = fine[j], b = fine[(j + 1) % fine.length], f = (s - cum[j]) / (cum[j + 1] - cum[j] || 1);
    px[i] = a[0] + (b[0] - a[0]) * f; pz[i] = a[1] + (b[1] - a[1]) * f;
  }
  const T = { def, N, ds, L: total, px, pz, width: def.width, hw: def.width / 2 };
  const tx = new Float64Array(N), tz = new Float64Array(N), nx = new Float64Array(N), nz = new Float64Array(N), curv = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const a = (i - 1 + N) % N, b = (i + 1) % N;
    let dx = px[b] - px[a], dz = pz[b] - pz[a]; const l = Math.hypot(dx, dz); dx /= l; dz /= l;
    tx[i] = dx; tz[i] = dz; nx[i] = dz; nz[i] = -dx; // izquierda = (tz, -tx)
  }
  for (let i = 0; i < N; i++) curv[i] = signedCurv(px, pz, N, i, 4);
  Object.assign(T, { tx, tz, nx, nz, curv });
  // ángulo de cada muestra (heading): forward = (sin h, cos h)
  T.head = i => Math.atan2(tx[i], tz[i]);

  // Escapatorias y muros. Exterior de curva: grava; interior: pasto.
  const wallL = new Float64Array(N), wallR = new Float64Array(N), gravL = new Uint8Array(N), gravR = new Uint8Array(N);
  const kerbL = new Uint8Array(N), kerbR = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    let cmax = 0; for (let k = -12; k <= 30; k++) { const c = curv[(i + k + N) % N]; if (Math.abs(c) > Math.abs(cmax)) cmax = c; }
    const tight = Math.min(1, Math.abs(cmax) * 70);
    const outerL = cmax < 0; // curva a la derecha -> exterior a la izquierda
    const base = 9, outer = base + 14 * tight;
    wallL[i] = T.hw + (outerL ? outer : base + 2);
    wallR[i] = T.hw + (outerL ? base + 2 : outer);
    if (tight > 0.35) { if (outerL) gravL[i] = 1; else gravR[i] = 1; }
  }
  // pianos donde la curva es cerrada
  for (let i = 0; i < N; i++) {
    const c = curv[i];
    if (Math.abs(c) > 1 / 260) for (let k = -6; k <= 6; k++) { const q = (i + k + N) % N; kerbL[q] = 1; kerbR[q] = 1; }
  }
  // limitar muros para que no se crucen con otra parte de la pista
  const cell = 40, grid = new Map();
  const key = (x, z) => Math.floor(x / cell) + ',' + Math.floor(z / cell);
  for (let i = 0; i < N; i++) { const k = key(px[i], pz[i]); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(i); }
  T.grid = grid; T.cell = cell;
  for (let i = 0; i < N; i++) {
    for (const side of [1, -1]) {
      const arr = side > 0 ? wallL : wallR;
      let w = arr[i];
      for (let r = 2; r < w + 6; r += 2) {
        const x = px[i] + nx[i] * r * side, z = pz[i] + nz[i] * r * side;
        const near = nearestFar(T, x, z, i);
        if (near < r + 1) { w = Math.max(T.hw + 1.5, Math.min(w, (r + near) / 2 - 0.5)); break; }
      }
      arr[i] = w;
    }
  }
  smoothArr(wallL, 6, N); smoothArr(wallR, 6, N);
  // la grava no puede pasar el muro
  Object.assign(T, { wallL, wallR, gravL, gravR, kerbL, kerbR });
  racingLine(T);
  speedProfile(T);
  // grilla de largada: la línea está en la muestra 0, autos hacia atrás
  T.startIdx = 0;
  return T;
}

function nearestFar(T, x, z, self) {
  // distancia a la pista desde (x,z) ignorando muestras cercanas en índice
  let best = 1e9; const c = T.cell, cx = Math.floor(x / c), cz = Math.floor(z / c);
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
    const L = T.grid.get((cx + a) + ',' + (cz + b)); if (!L) continue;
    for (const i of L) {
      let di = Math.abs(i - self); di = Math.min(di, T.N - di); if (di * T.ds < 60) continue;
      const d = Math.hypot(T.px[i] - x, T.pz[i] - z) - T.hw; if (d < best) best = d;
    }
  }
  return best;
}

function smoothArr(a, r, N) {
  const b = Float64Array.from(a);
  for (let i = 0; i < N; i++) { let m = 1e9; for (let k = -r; k <= r; k++) m = Math.min(m, b[(i + k + N) % N]); a[i] = m; }
}

function signedCurv(X, Z, N, i, k) {
  const a = (i - k + N) % N, b = (i + k) % N;
  const ax = X[i] - X[a], az = Z[i] - Z[a], bx = X[b] - X[i], bz = Z[b] - Z[i];
  const cross = ax * bz - az * bx; // >0 => giro a la derecha en este sistema (x der, z abajo)... se corrige el signo abajo
  const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz), lc = Math.hypot(X[b] - X[a], Z[b] - Z[a]);
  const k2 = 2 * cross / (la * lb * lc || 1);
  return -k2; // positivo = gira a la izquierda (hacia la normal izquierda)
}

function racingLine(T) {
  const { N, px, pz, nx, nz } = T, lim = T.hw - 1.6;
  const o = new Float64Array(N);
  const X = new Float64Array(N), Z = new Float64Array(N);
  for (let it = 0; it < 1400; it++) {
    for (let i = 0; i < N; i++) { X[i] = px[i] + nx[i] * o[i]; Z[i] = pz[i] + nz[i] * o[i]; }
    for (let i = 0; i < N; i++) {
      const a = (i - 2 + N) % N, b = (i + 2) % N;
      const mx = (X[a] + X[b]) / 2, mz = (Z[a] + Z[b]) / 2;
      const want = (mx - px[i]) * nx[i] + (mz - pz[i]) * nz[i];
      o[i] += (want - o[i]) * 0.55;
      if (o[i] > lim) o[i] = lim; else if (o[i] < -lim) o[i] = -lim;
    }
  }
  T.line = o;
  T.lx = new Float64Array(N); T.lz = new Float64Array(N);
  for (let i = 0; i < N; i++) { T.lx[i] = px[i] + nx[i] * o[i]; T.lz[i] = pz[i] + nz[i] * o[i]; }
}

function speedProfile(T) {
  const { N, ds } = T, g = 9.81, mu = 1.5;
  const k = 0.5 * 1.225 * CAR.ClA / CAR.mass, kd = 0.5 * 1.225 * CAR.CdA / CAR.mass;
  const v = new Float64Array(N), lc = new Float64Array(N);
  for (let i = 0; i < N; i++) lc[i] = Math.abs(signedCurv(T.lx, T.lz, N, i, 5));
  for (let i = 0; i < N; i++) {
    let c = 0; for (let q = -2; q <= 2; q++) c = Math.max(c, lc[(i + q + N) % N]);
    const den = c - mu * k;
    v[i] = den <= 0 ? 95 : Math.min(95, Math.sqrt(mu * g / den));
  }
  // frenadas (hacia atrás, dos vueltas para cerrar el circuito)
  for (let r = 0; r < 2; r++) for (let i = N - 1; i >= 0; i--) {
    const nv = v[(i + 1) % N];
    const a = 1.25 * (g + k * nv * nv) + kd * nv * nv;
    const lim = Math.sqrt(nv * nv + 2 * a * ds);
    if (v[i] > lim) v[i] = lim;
  }
  T.vmax = v;
}

// Ubica (x,z) sobre la pista. hint: índice anterior (o -1 para búsqueda completa)
export function locate(T, x, z, hint = -1) {
  const { N, px, pz } = T;
  let best = -1, bd = 1e18;
  if (hint < 0) {
    for (let i = 0; i < N; i++) { const d = (px[i] - x) ** 2 + (pz[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
  } else {
    for (let k = -25; k <= 25; k++) { const i = (hint + k + N) % N; const d = (px[i] - x) ** 2 + (pz[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
    if (bd > 60 * 60) return locate(T, x, z, -1);
  }
  // proyectar sobre el segmento
  const i = best, j = (i + 1) % N, h = (i - 1 + N) % N;
  let seg = i, f = 0;
  const proj = (a, b) => { const ex = px[b] - px[a], ez = pz[b] - pz[a]; return ((x - px[a]) * ex + (z - pz[a]) * ez) / (ex * ex + ez * ez); };
  const f1 = proj(i, j);
  if (f1 >= 0) { seg = i; f = Math.min(1, f1); } else { seg = h; f = Math.max(0, Math.min(1, proj(h, i))); }
  const k2 = (seg + 1) % N;
  const cx = px[seg] + (px[k2] - px[seg]) * f, cz = pz[seg] + (pz[k2] - pz[seg]) * f;
  const nxx = T.nx[seg] + (T.nx[k2] - T.nx[seg]) * f, nzz = T.nz[seg] + (T.nz[k2] - T.nz[seg]) * f;
  const d = (x - cx) * nxx + (z - cz) * nzz;
  return { i: best, seg, f, s: (seg + f) * T.ds, d };
}

// valor interpolado de un arreglo por muestra en s
export function at(T, arr, s) {
  const u = ((s / T.ds) % T.N + T.N) % T.N, i = Math.floor(u), f = u - i;
  return arr[i] + (arr[(i + 1) % T.N] - arr[i]) * f;
}
export function pointAt(T, s, off = 0) {
  const u = ((s / T.ds) % T.N + T.N) % T.N, i = Math.floor(u), f = u - i, j = (i + 1) % T.N;
  const x = T.px[i] + (T.px[j] - T.px[i]) * f, z = T.pz[i] + (T.pz[j] - T.pz[i]) * f;
  const nx = T.nx[i] + (T.nx[j] - T.nx[i]) * f, nz = T.nz[i] + (T.nz[j] - T.nz[i]) * f;
  return [x + nx * off, z + nz * off];
}
