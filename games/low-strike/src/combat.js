// Balas: imprecisión, retroceso con patrón (tipo CS), atravesar paredes finas, caída de daño por distancia.
import { raycast, solidAt } from './world.js';
import { rayPlayer, PM } from './player.js';
import { WEAPONS } from './weapons.js';
import { segBlockedBySmoke } from './nades.js';
const U = 0.0254, D2R = Math.PI / 180;

export const PEN = { pistol: 0.12, smg: 0.16, rifle: 0.36, sniper: 0.6, heavy: 0.3, equip: 0, knife: 0 };
const penOf = w => w.id === 'awp' ? 0.85 : w.id === 'deagle' || w.id === 'r8' ? 0.3 : w.id === 'ak47' ? 0.42 : w.cat === 'heavy' && w.pellets > 1 ? 0 : (PEN[w.cat] ?? 0);

// imprecisión actual (radianes)
const JUMP = { rifle: 0.2, smg: 0.1, pistol: 0.08, heavy: 0.1, sniper: 0.35 };
export function inaccuracy(w, st) {
  // st: { speed, onGround, duck, scoped, shots }
  let a = w.scope && w.cat === 'sniper' ? (st.scoped ? w.scoped : w.spread) : w.spread;
  const max = w.speed * U * (st.scoped && w.cat === 'sniper' ? 0.5 : 1);
  // como CWeaponCSBase::GetInaccuracy de CS:GO: la velocidad 2D se mapea de 34 % (velocidad agachado) a 95 % de
  // la velocidad máxima del arma a 0–1, con curva x^0.25 (MOVEMENT_CURVE01_EXPONENT): apenas pasás el umbral la
  // imprecisión sube mucho, por eso hay que frenar (counter-strafe) o caminar con Shift para tirar.
  let mv = Math.max(0, Math.min(1, (st.speed - max * 0.34) / (max * 0.95 - max * 0.34)));
  if (mv > 0) mv = Math.pow(mv, 0.25);
  a += w.move * mv;
  // en el aire: imprecisión inicial de salto + otra parte según la velocidad vertical (raíz, de 25 % a 100 % del
  // impulso de salto), tope 2× la inicial (kMaxFallingPenalty)
  if (!st.onGround) {
    const j = w.jump ?? JUMP[w.cat] ?? 0.12, sImp = Math.sqrt(301.993), sV = Math.sqrt(Math.abs(st.vy || 0) / U);
    a += j + Math.max(0, Math.min(j, (sV - sImp * 0.25) / (sImp * 0.75) * j));
  }
  else if (st.sinceLand !== undefined && st.sinceLand < 0.35) a += (w.jump ?? JUMP[w.cat] ?? 0.12) * 0.5 * (1 - st.sinceLand / 0.35); // al caer
  if (st.duck > 0.5 && st.onGround) a *= w.crouch ?? 0.8;
  if (w.auto && w.pellets === 1) a += Math.min(0.022, st.shots * 0.0016);
  if (w.cat === 'pistol' && !w.auto) a += Math.min(0.03, st.shots * 0.006);
  return a;
}
// Patrón de retroceso fijo por arma, como en CS:GO: siempre el mismo dibujo (aprendible), con un temblor
// mínimo. El AK hace la "7": sube derecho ~8 balas, tira a la izquierda y después a la derecha.
// Devuelve [dPitch, dYaw] en grados para el disparo k.
const PAT = {
  ak47: [[0.6, 0], [1.1, 0.05], [1.3, 0.1], [1.35, -0.05], [1.3, 0.15], [1.15, 0.2], [0.95, 0.1], [0.75, -0.3], [0.55, -0.7], [0.4, -0.9], [0.3, -0.8], [0.25, -0.5], [0.2, 0.2], [0.18, 0.8], [0.15, 1.0], [0.15, 0.9], [0.12, 0.5], [0.12, -0.3], [0.1, -0.8], [0.1, -0.9], [0.1, -0.4], [0.1, 0.4], [0.1, 0.8], [0.1, 0.6], [0.1, -0.2], [0.1, -0.6], [0.1, -0.5], [0.1, 0.2], [0.1, 0.5], [0.1, 0.3]],
  m4a4: [[0.5, 0], [0.9, 0.05], [1.05, -0.05], [1.1, 0.1], [1.0, 0.15], [0.85, -0.1], [0.7, -0.35], [0.5, -0.55], [0.38, -0.5], [0.3, -0.2], [0.25, 0.3], [0.2, 0.55], [0.18, 0.6], [0.15, 0.35], [0.12, -0.1], [0.12, -0.45], [0.1, -0.5], [0.1, -0.2], [0.1, 0.25], [0.1, 0.45], [0.1, 0.3], [0.1, -0.1], [0.1, -0.35], [0.1, -0.3], [0.1, 0.05], [0.1, 0.3], [0.1, 0.25], [0.1, -0.05], [0.1, -0.25], [0.1, -0.1]],
};
PAT.m4a1s = PAT.m4a4.map(([u, s]) => [u * 0.85, s * 0.7]);
PAT.galil = PAT.ak47.map(([u, s]) => [u * 0.8, s * 0.85]);
PAT.famas = PAT.m4a4.map(([u, s]) => [u * 0.9, s * 0.9]);
PAT.sg553 = PAT.ak47.map(([u, s]) => [u * 0.85, -s * 0.8]);
PAT.aug = PAT.m4a4.map(([u, s]) => [u * 0.85, -s * 0.8]);
// temblor determinístico chico (mismo para todos los jugadores)
const jit = (id, k) => { let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) | 0; h = Math.imul(h ^ (k * 2654435761), 1597334677); return ((h >>> 0) / 4294967296 - 0.5); };
export function recoilStep(w, k, rnd) {
  if (w.pellets > 1 || w.cat === 'sniper') return [w.kick, (rnd() - 0.5) * w.sway];
  const pat = PAT[w.id];
  if (pat) { const [u, sd] = pat[Math.min(k, pat.length - 1)]; const sc = w.kick / 0.7; return [u * sc, sd * w.sway * 0.9 + jit(w.id, k) * w.sway * 0.12]; }
  // el resto: patrón generado a partir de la misma semilla del arma (siempre igual)
  const up = k === 0 ? w.kick * 0.6 : k < 9 ? w.kick : w.kick * 0.25;
  let side = jit(w.id, k) * w.sway * 0.45;
  if (w.auto && w.cat !== 'pistol') {
    if (k >= 7 && k < 14) side += -w.sway * 0.9;
    else if (k >= 14 && k < 22) side += w.sway * 1.0;
    else if (k >= 22) side += Math.sin(k * 0.9) * w.sway * 0.7;
  }
  return [up, side];
}
// dirección de la bala con mira (yaw, pitch en radianes) + punch (grados) + cono de imprecisión
export function shotDir(yaw, pitch, pp, py, inacc, rnd) {
  const a = rnd() * Math.PI * 2, r = inacc * rnd(); // radio uniforme como en CS:GO (más tiros cerca del centro)
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
