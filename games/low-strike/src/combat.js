// Balas: imprecisión, retroceso con patrón (tipo CS), atravesar paredes finas, caída de daño por distancia.
import { raycast, solidAt } from './world.js';
import { rayPlayer, PM } from './player.js';
import { WEAPONS } from './weapons.js';
import { segBlockedBySmoke } from './nades.js';
const U = 0.0254, D2R = Math.PI / 180;

export const PEN = { pistol: 0.12, smg: 0.16, rifle: 0.36, sniper: 0.6, heavy: 0.3, equip: 0, knife: 0 };
const penOf = w => w.id === 'awp' ? 0.85 : w.id === 'deagle' || w.id === 'r8' ? 0.3 : w.id === 'ak47' ? 0.42 : w.cat === 'heavy' && w.pellets > 1 ? 0 : (PEN[w.cat] ?? 0);

// imprecisión actual (radianes)
export function inaccuracy(w, st) {
  // st: { speed, onGround, duck, scoped, shots }
  let a = w.scope && w.cat === 'sniper' ? (st.scoped ? w.scoped : w.spread) : w.spread;
  const max = w.speed * U * (st.scoped && w.cat === 'sniper' ? 0.5 : 1);
  const mv = Math.max(0, Math.min(1, (st.speed - max * 0.34) / (max * 0.66)));
  a += w.move * mv;
  if (!st.onGround) a += w.cat === 'sniper' ? 0.25 : 0.12;
  if (st.duck > 0.5 && st.onGround) a *= 0.75;
  if (w.auto && w.pellets === 1) a += Math.min(0.022, st.shots * 0.0016);
  if (w.cat === 'pistol' && !w.auto) a += Math.min(0.03, st.shots * 0.006);
  return a;
}
// patrón de retroceso: devuelve [dPitch, dYaw] en grados para el disparo k
export function recoilStep(w, k, rnd) {
  if (w.pellets > 1 || w.cat === 'sniper') return [w.kick, (rnd() - 0.5) * w.sway];
  const up = k === 0 ? w.kick * 0.6 : k < 9 ? w.kick : w.kick * 0.25;
  let side = (rnd() - 0.5) * w.sway * 0.5;
  if (w.auto && w.cat !== 'pistol') {
    if (k >= 7 && k < 14) side += -w.sway * 1.1;       // tira a la izquierda
    else if (k >= 14 && k < 22) side += w.sway * 1.25; // y después a la derecha (la "7" del AK)
    else if (k >= 22) side += Math.sin(k * 0.9) * w.sway;
  }
  return [up, side];
}
// dirección de la bala con mira (yaw, pitch en radianes) + punch (grados) + cono de imprecisión
export function shotDir(yaw, pitch, pp, py, inacc, rnd) {
  const a = rnd() * Math.PI * 2, r = inacc * (rnd() * 0.6 + rnd() * 0.4);
  const p = pitch + pp * D2R + Math.sin(a) * r, y = yaw - py * D2R + Math.cos(a) * r;
  return [-Math.sin(y) * Math.cos(p), Math.sin(p), -Math.cos(y) * Math.cos(p)];
}

// Traza una bala. targets: [{ id, x, y, z, h, alive }]. Devuelve { end, hit:{id,part,dmg,pos}|null, impacts:[[x,y,z,nx,ny,nz]], wb }
export function traceShot(W, nades, shooterId, ox, oy, oz, dx, dy, dz, w, targets) {
  const maxT = Math.min(w.range * U, 300);
  let dmg = w.dmg, pen = penOf(w), wb = false;
  let sx = ox, sy = oy, sz = oz, travelled = 0;
  const impacts = [];
  for (let seg = 0; seg < 3; seg++) {
    const rem = maxT - travelled; if (rem <= 0) break;
    const wall = raycast(W, sx, sy, sz, dx, dy, dz, rem);
    const tw = wall ? wall.t : rem;
    // jugadores antes de la pared
    let best = null;
    for (const t of targets) {
      if (!t.alive || t.id === shooterId) continue;
      if (Math.abs(t.x - sx) > tw + 2 || Math.abs(t.z - sz) > tw + 2) continue;
      const r = rayPlayer(t, sx, sy, sz, dx, dy, dz, tw);
      if (r && (!best || r.t < best.t)) best = { ...r, id: t.id };
    }
    if (best) {
      const dist = travelled + best.t;
      const d = dmg * Math.pow(w.rangeMod, dist / U / 500);
      const pos = [sx + dx * best.t, sy + dy * best.t, sz + dz * best.t];
      return { end: pos, hit: { id: best.id, part: best.part, dmg: d, pos }, impacts, wb };
    }
    if (!wall) return { end: [sx + dx * rem, sy + dy * rem, sz + dz * rem], hit: null, impacts, wb };
    const hp = [sx + dx * tw, sy + dy * tw, sz + dz * tw];
    impacts.push([hp[0], hp[1], hp[2], wall.nx, wall.ny, wall.nz]);
    // atravesar: buscar la salida dentro del sólido
    if (pen <= 0) return { end: hp, hit: null, impacts, wb };
    let th = 0; const st = 0.03;
    while (th < pen && solidAt(W, hp[0] + dx * (th + st), hp[1] + dy * (th + st), hp[2] + dz * (th + st))) th += st;
    if (th >= pen) return { end: hp, hit: null, impacts, wb };
    th += st;
    dmg *= Math.max(0.15, 1 - th / pen) * 0.75; pen -= th; wb = true;
    travelled += tw + th; sx = hp[0] + dx * th; sy = hp[1] + dy * th; sz = hp[2] + dz * th;
    impacts.push([sx, sy, sz, -dx, -dy, -dz]);
  }
  return { end: [sx, sy, sz], hit: null, impacts, wb };
}

// ¿A ve a B? (paredes + humo), desde ojos a pecho/cabeza
export function canSee(W, nades, a, b) {
  const ax = a[0], ay = a[1], az = a[2];
  for (const off of [1.55, 1.1]) {
    const bx = b[0], by = b[1] + off * (b[3] || 1), bz = b[2];
    const dx = bx - ax, dy = by - ay, dz = bz - az, L = Math.hypot(dx, dy, dz);
    const h = raycast(W, ax, ay, az, dx / L, dy / L, dz / L, L);
    if (h && h.t < L - 0.1) continue;
    if (segBlockedBySmoke(nades, ax, ay, az, bx, by, bz)) continue;
    return true;
  }
  return false;
}
export const isGun = id => { const w = WEAPONS[id]; return w && w.dmg && w.cat !== 'knife'; };
export { PM };
