// Geometría de pista: spline cerrada, muestras uniformes, línea ideal, perfil de velocidad,
// calle de boxes, escapatorias y objetos (conos, carteles).
import { CAR } from './physics.js';

const SP = 3; // metros entre muestras

function catmull(p0, p1, p2, p3, t) {
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
  const fine = [];
  for (let i = 0; i < n; i++) {
    const p0 = P[(i - 1 + n) % n], p1 = P[i], p2 = P[(i + 1) % n], p3 = P[(i + 2) % n];
    const steps = Math.max(8, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 0.5));
    for (let k = 0; k < steps; k++) fine.push(catmull(p0, p1, p2, p3, k / steps));
  }
  const cum = [0];
  for (let i = 1; i <= fine.length; i++) { const a = fine[i - 1], b = fine[i % fine.length]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const total = cum[fine.length];
  const N = Math.round(total / SP), ds = total / N;
  let px = new Float64Array(N), pz = new Float64Array(N);
  let j = 0;
  for (let i = 0; i < N; i++) {
    const s = i * ds;
    while (cum[j + 1] < s) j++;
    const a = fine[j], b = fine[(j + 1) % fine.length], f = (s - cum[j]) / (cum[j + 1] - cum[j] || 1);
    px[i] = a[0] + (b[0] - a[0]) * f; pz[i] = a[1] + (b[1] - a[1]) * f;
  }
  // La largada va en la recta más larga (≈40 % adentro), así la grilla queda en la recta
  const c0 = new Float64Array(N);
  for (let i = 0; i < N; i++) { let m = 0; for (let k = -3; k <= 3; k++) m = Math.max(m, Math.abs(signedCurv(px, pz, N, (i + k + N) % N, 4))); c0[i] = m; }
  let bestA = 0, bestLen = 0;
  {
    let o = 0; while (c0[o] < 1 / 700 && o < N) o++;
    let st = -1;
    for (let k = 0; k <= N; k++) {
      const i = (o + k) % N, ok = k < N && c0[i] < 1 / 700;
      if (ok && st < 0) st = k;
      if (!ok && st >= 0) { if (k - st > bestLen) { bestLen = k - st; bestA = (o + st) % N; } st = -1; }
    }
  }
  const strLen = bestLen * ds;
  const back = Math.min(strLen - 160, Math.max(strLen * 0.42, 270));
  const rot = (bestA + Math.round(back / ds)) % N;
  const rx = new Float64Array(N), rz = new Float64Array(N);
  for (let i = 0; i < N; i++) { rx[i] = px[(i + rot) % N]; rz[i] = pz[(i + rot) % N]; }
  px = rx; pz = rz;

  const T = { def, N, ds, L: total, px, pz, width: def.width, hw: def.width / 2, street: !!def.street };
  T.straight = { a: -back, b: strLen - back };
  const tx = new Float64Array(N), tz = new Float64Array(N), nx = new Float64Array(N), nz = new Float64Array(N), curv = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const a = (i - 1 + N) % N, b = (i + 1) % N;
    let dx = px[b] - px[a], dz = pz[b] - pz[a]; const l = Math.hypot(dx, dz); dx /= l; dz /= l;
    tx[i] = dx; tz[i] = dz; nx[i] = dz; nz[i] = -dx; // izquierda = (tz, -tx)
  }
  for (let i = 0; i < N; i++) curv[i] = signedCurv(px, pz, N, i, 4);
  Object.assign(T, { tx, tz, nx, nz, curv });
  T.head = i => Math.atan2(tx[((i % N) + N) % N], tz[((i % N) + N) % N]);
  T.idx = s => Math.floor((((s % total) + total) % total) / ds) % N;

  // Escapatorias y muros
  const wallL = new Float64Array(N), wallR = new Float64Array(N), gravL = new Uint8Array(N), gravR = new Uint8Array(N);
  const kerbL = new Uint8Array(N), kerbR = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    let cmax = 0; for (let k = -12; k <= 30; k++) { const c = curv[(i + k + N) % N]; if (Math.abs(c) > Math.abs(cmax)) cmax = c; }
    const tight = Math.min(1, Math.abs(cmax) * 70);
    const outerL = cmax < 0;
    if (T.street) {
      const base = 3.2, outer = base + 7 * tight;
      wallL[i] = T.hw + (outerL ? outer : base); wallR[i] = T.hw + (outerL ? base : outer);
    } else {
      const base = 9, outer = base + 14 * tight;
      wallL[i] = T.hw + (outerL ? outer : base + 2);
      wallR[i] = T.hw + (outerL ? base + 2 : outer);
      if (tight > 0.35) { if (outerL) gravL[i] = 1; else gravR[i] = 1; }
    }
  }
  for (let i = 0; i < N; i++) {
    if (Math.abs(curv[i]) > 1 / 260) for (let k = -6; k <= 6; k++) { const q = (i + k + N) % N; kerbL[q] = 1; kerbR[q] = 1; }
  }
  // Calle de boxes (lado izquierdo de la recta principal)
  const pit = {
    side: 1, inS: T.straight.a + 15, outS: T.straight.b - 70, blend: 75,
    lane: T.hw + 7.4, width: 7, wall: T.hw + 2.8,
  };
  pit.boxes = [];
  for (let k = 0; k < 8; k++) pit.boxes.push(pit.inS + pit.blend + 40 + k * 14);
  pit.limitA = pit.inS + pit.blend; pit.limitB = pit.outS - pit.blend;
  // desplazamiento lateral del camino de boxes en función de s (relativo a la recta)
  pit.offsetAt = (s, fromD = 0) => {
    const u = rel(s);
    const sm = x => x * x * (3 - 2 * x);
    if (u < pit.inS) return fromD;
    if (u < pit.inS + pit.blend) return fromD + (pit.lane - fromD) * sm((u - pit.inS) / pit.blend);
    if (u < pit.outS - pit.blend) return pit.lane;
    if (u < pit.outS) return pit.lane + (T.hw - 2.5 - pit.lane) * sm((u - (pit.outS - pit.blend)) / pit.blend);
    return T.hw - 2.5;
  };
  const rel = s => { let u = ((s % total) + total) % total; if (u > total / 2) u -= total; return u; };
  T.rel = rel;
  T.pit = pit;
  for (let i = 0; i < N; i++) {
    const u = rel(i * ds);
    if (u > pit.inS - 10 && u < pit.outS + 10) {
      const gap = u < pit.inS + pit.blend * 0.85 || u > pit.outS - pit.blend * 0.85;
      wallL[i] = gap ? Math.max(wallL[i], pit.lane + pit.width / 2 + 1) : pit.wall;
      gravL[i] = 0; kerbL[i] = 0;
      if (u > pit.inS - 10 && u < pit.outS + 10) gravR[i] = 0;
    }
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
  smoothArr(wallL, 3, N); smoothArr(wallR, 6, N);
  Object.assign(T, { wallL, wallR, gravL, gravR, kerbL, kerbR });
  racingLine(T);
  speedProfile(T);
  // sectores
  T.sectors = [T.L / 3, 2 * T.L / 3];
  // objetos: conos en el vértice interno de las curvas lentas y en la salida de boxes
  const props = [];
  for (let i = 0; i < N; i++) {
    const v = T.vmax[i];
    if (v < 38 && v <= T.vmax[(i - 1 + N) % N] && v <= T.vmax[(i + 1) % N]) {
      const side = curv[i] > 0 ? 1 : -1;
      const u = rel(i * ds); if (u > pit.inS - 20 && u < pit.outS + 20) continue;
      for (let k = -1; k <= 1; k++) {
        const q = (i + k * 3 + N) % N, d = side * (T.hw + 2.4 + Math.abs(k) * 0.4);
        props.push({ type: 'cone', x: px[q] + nx[q] * d, z: pz[q] + nz[q] * d });
      }
      i += 15;
    }
  }
  for (let s = pit.outS - pit.blend * 0.9; s < pit.outS + 30; s += 9) {
    const i = T.idx(s), d = T.hw + 0.9 + Math.max(0, Math.min(1, (pit.outS - s) / pit.blend)) * 1.5;
    props.push({ type: 'cone', x: px[i] + nx[i] * d, z: pz[i] + nz[i] * d });
  }
  // carteles de distancia antes de las frenadas fuertes (se pueden voltear)
  for (let i = 0; i < N; i++) {
    const a = T.vmax[i];
    if (a > 75 && a - T.vmax[(i + 40) % N] > 25 && T.vmax[(i - 1 + N) % N] >= a - 0.01 && a - T.vmax[(i + 8) % N] > 1) {
      const side = curv[(i + 40) % N] > 0 ? -1 : 1;
      for (const dist of [150, 100, 50]) {
        const q = T.idx(i * ds + 120 - dist), d = side * (T.hw + 2.6);
        props.push({ type: 'board', n: dist, x: px[q] + nx[q] * d, z: pz[q] + nz[q] * d, h: T.head(q) + Math.PI });
      }
      i += 40;
    }
  }
  T.props = props;
  T.startIdx = 0;
  return T;
}

function nearestFar(T, x, z, self) {
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
  const cross = ax * bz - az * bx;
  const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz), lc = Math.hypot(X[b] - X[a], Z[b] - Z[a]);
  return -2 * cross / (la * lb * lc || 1); // positivo = gira a la izquierda
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
  const v = new Float64Array(N), lc = new Float64Array(N), cc = new Float64Array(N);
  for (let i = 0; i < N; i++) lc[i] = Math.abs(signedCurv(T.lx, T.lz, N, i, 5));
  for (let i = 0; i < N; i++) cc[i] = Math.abs(signedCurv(T.px, T.pz, N, i, 5));
  // perfil para la línea ideal (bots) y uno más conservador por el centro (asistencia de frenado)
  const prof = (curvArr, muX) => {
    const out = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      let c = 0; for (let q = -2; q <= 2; q++) c = Math.max(c, curvArr[(i + q + N) % N]);
      const den = c - muX * k;
      out[i] = den <= 0 ? 95 : Math.min(95, Math.sqrt(muX * g / den));
    }
    for (let r = 0; r < 2; r++) for (let i = N - 1; i >= 0; i--) {
      const nv = out[(i + 1) % N];
      const a = 1.25 * (g + k * nv * nv) + kd * nv * nv;
      const lim = Math.sqrt(nv * nv + 2 * a * ds);
      if (out[i] > lim) out[i] = lim;
    }
    return out;
  };
  T.vmax = prof(lc, mu);
  T.vsafe = prof(cc, 1.32);
}

export function locate(T, x, z, hint = -1) {
  const { N, px, pz } = T;
  let best = -1, bd = 1e18;
  if (hint < 0) {
    for (let i = 0; i < N; i++) { const d = (px[i] - x) ** 2 + (pz[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
  } else {
    for (let k = -25; k <= 25; k++) { const i = (hint + k + N) % N; const d = (px[i] - x) ** 2 + (pz[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
    if (bd > 60 * 60) return locate(T, x, z, -1);
  }
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
export function headingAt(T, s) { return Math.atan2(at(T, T.tx, s), at(T, T.tz, s)); }
