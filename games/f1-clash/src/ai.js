// Piloto automático: sigue la línea ideal con persecución pura y el perfil de velocidad.
import { at, pointAt } from './track.js';
import { CAR, speed } from './physics.js';

export function makeBrain(skill) { return { skill, off: 0, offT: 0, mistake: 0 }; }

export function drive(T, c, B, others, dt) {
  const v = c.vx, s = c.ts ?? 0;
  // ¿hay un auto adelante cerca?
  let wantOff = 0, cap = 1e9;
  for (const o of others) {
    if (o === c || o.prog == null || c.prog == null) continue;
    let gap = o.prog - c.prog; if (gap < -T.L / 2) gap += T.L; if (gap > T.L / 2) gap -= T.L;
    const dd = (o.td ?? 0) - (c.td ?? 0);
    if (gap > 0 && gap < 30) {
      if (Math.abs(dd) < 2.8) {
        const ov = o.vx ?? speed(o);
        if (v > ov - 1.5) { wantOff = (o.td ?? 0) > 0 ? -3.6 : 3.6; if (gap < 14) cap = Math.min(cap, ov + Math.max(0, gap - 7) * 0.4); }
      }
    } else if (gap > -6 && gap <= 0 && Math.abs(dd) < 2.6) {
      wantOff = dd > 0 ? -2.5 : 2.5; // lado a lado: abrirse
    }
  }
  B.off += (wantOff - B.off) * Math.min(1, dt * 1.2);
  const ld = 7 + Math.max(0, v) * 0.34;
  const sA = s + ld;
  const line = at(T, T.line, sA) + B.off;
  const lim = T.hw - 1.4;
  const [tx, tz] = pointAt(T, sA, Math.max(-lim, Math.min(lim, line)));
  const dx = tx - c.x, dz = tz - c.z;
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  const px = dx * fx + dz * fz, py = dx * lx + dz * lz;
  const d2 = px * px + py * py;
  let steer = Math.atan(CAR.wb * 2 * py / d2) - c.r * 0.04;
  if (v < 0) steer = -steer;
  // velocidad objetivo (mirando un poco adelante)
  let tgt = at(T, T.vmax, s + Math.max(0, v) * 0.18) * B.skill;
  tgt = Math.min(tgt, cap);
  let thr = 0, brk = 0;
  if (v > tgt + 0.8) brk = Math.min(1, (v - tgt) / 5 + 0.25);
  else thr = Math.min(1, Math.max(0.15, (tgt - v) / 2.5 + 0.6));
  // si está desviado o cruzado, prudencia
  const slide = Math.abs(c.vy) / Math.max(5, Math.abs(v));
  if (slide > 0.08) thr *= Math.max(0.1, 1 - (slide - 0.08) * 8);
  // dosificar acelerador según el uso lateral de los neumáticos traseros
  const ru = Math.max(c.use[2], c.use[3]);
  if (ru > 0.9) thr *= Math.max(0.3, 1 - (ru - 0.9) * 3);
  // contravolante si la cola se va
  if (v > 8) steer += Math.atan2(c.vy, v) * 0.6;
  // atascado: marcha atrás
  if (c.stuck > 1.5) { return { thr: 0, brk: 1, steer: -steer }; }
  return { thr, brk, steer };
}
