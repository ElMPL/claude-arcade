// Lógica por auto que comparten jugadores y bots: superficie, muros, progreso y vueltas.
import { locate, at } from './track.js';
import { step, hitWall, CAR } from './physics.js';

export const SUB = 1 / 400;
const WP = [[CAR.a + 0.2, 0.85], [CAR.a + 0.2, -0.85], [-CAR.b, 0.85], [-CAR.b, -0.85]];

export function trackInfo(T, c) {
  const L = locate(T, c.x, c.z, c.ti ?? -1);
  c.ti = L.i; c.ts = L.s; c.td = L.d;
  return L;
}

export function updateSurface(T, c, L) {
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  const nx = T.nx[L.i], nz = T.nz[L.i];
  for (let k = 0; k < 4; k++) {
    const [a, b] = WP[k];
    const ox = fx * a + lx * b, oz = fz * a + lz * b;
    const d = L.d + ox * nx + oz * nz, ad = Math.abs(d);
    let s = 0;
    if (ad > T.hw) {
      const kerb = d > 0 ? T.kerbL[L.i] : T.kerbR[L.i];
      if (kerb && ad < T.hw + 1.6) s = 1;
      else if (ad < T.hw + 1.6) s = 0; // banda de asfalto/línea
      else s = (d > 0 ? T.gravL[L.i] : T.gravR[L.i]) ? 3 : 2;
    }
    c.surf[k] = s;
  }
}

// Avanza la física un frame (con subpasos) y resuelve muros. Devuelve impacto (m/s) si chocó.
export function simulate(T, c, inp, dt) {
  const n = Math.max(1, Math.round(dt / SUB)), h = dt / n;
  let hit = 0;
  for (let k = 0; k < n; k++) {
    step(c, inp, h);
    if (k % 4 === 3 || k === n - 1) {
      const L = trackInfo(T, c);
      if (k === n - 1) updateSurface(T, c, L);
      const wl = at(T, T.wallL, L.s) - 1.1, wr = at(T, T.wallR, L.s) - 1.1;
      if (L.d > wl) hit = Math.max(hit, hitWall(c, -T.nx[L.i], -T.nz[L.i], L.d - wl));
      else if (L.d < -wr) hit = Math.max(hit, hitWall(c, T.nx[L.i], T.nz[L.i], -wr - L.d));
    }
  }
  return hit;
}

// progreso de carrera: vueltas completas * L + s. Detecta cruce de meta.
export function progress(T, c) {
  if (c.lap == null) { c.lap = 0; c.prevS = c.ts; c.half = false; }
  const s = c.ts;
  if (s > T.L * 0.4 && s < T.L * 0.6) c.half = true;
  let crossed = false;
  if (c.prevS > T.L * 0.8 && s < T.L * 0.2) { if (c.half || c.lap === 0 && c.gridLap) { c.lap++; crossed = true; c.half = false; c.gridLap = false; } }
  else if (c.prevS < T.L * 0.2 && s > T.L * 0.8 && !c.half) { /* marcha atrás por la meta */ c.lap--; c.half = true; }
  c.prevS = s;
  c.prog = (c.lap - 1) * T.L + s;
  return crossed;
}

// Choque entre autos: dos círculos por auto (adelante/atrás). Solo se modifica a los autos "propios".
export function collideCars(a, b, ownA, ownB) {
  if (a.ghost > 0 || b.ghost > 0) return 0;
  const dx0 = b.x - a.x, dz0 = b.z - a.z;
  if (dx0 * dx0 + dz0 * dz0 > 49) return 0;
  const R = 0.95; let best = null;
  for (const oa of [1.45, -1.3]) for (const ob of [1.45, -1.3]) {
    const ax = a.x + Math.sin(a.h) * oa, az = a.z + Math.cos(a.h) * oa;
    const bx = b.x + Math.sin(b.h) * ob, bz = b.z + Math.cos(b.h) * ob;
    const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz);
    if (d < 2 * R && (!best || d < best.d)) best = { d, nx: dx / (d || 1), nz: dz / (d || 1) };
  }
  if (!best) return 0;
  const pen = 2 * R - best.d, { nx, nz } = best;
  const wa = worldVel(a), wb = worldVel(b);
  const rel = (wb[0] - wa[0]) * nx + (wb[1] - wa[1]) * nz;
  const share = ownA && ownB ? 0.5 : 1;
  const j = rel < 0 ? -rel * 0.6 * share : 0;
  if (ownA) { a.x -= nx * pen * (ownB ? 0.5 : 1); a.z -= nz * pen * (ownB ? 0.5 : 1); setWorldVel(a, wa[0] - nx * j, wa[1] - nz * j); }
  if (ownB) { b.x += nx * pen * (ownA ? 0.5 : 1); b.z += nz * pen * (ownA ? 0.5 : 1); setWorldVel(b, wb[0] + nx * j, wb[1] + nz * j); }
  return -Math.min(0, rel);
}
export function worldVel(c) {
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  return [c.vx * fx + c.vy * lx, c.vx * fz + c.vy * lz];
}
export function setWorldVel(c, wx, wz) {
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  const nvx = wx * fx + wz * fz;
  const dv = nvx - c.vx;
  c.vx = nvx; c.vy = wx * lx + wz * lz;
  for (let i = 0; i < 4; i++) c.w[i] += dv / CAR.R;
}

// posición de largada k (0 = pole)
export function gridSlot(T, k) {
  const s = T.L - 14 - k * 9, off = (k % 2 === 0 ? 1 : -1) * 3.2;
  return { s, off };
}
