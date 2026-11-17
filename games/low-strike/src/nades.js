// Granadas: física determinista a paso fijo (todos los clientes simulan lo mismo a partir del lanzamiento).
import { raycast, floorAt } from './world.js';
const U = 0.0254;
export const NADE = {
  g: 800 * 0.4 * U, speed: 750 * 0.9 * U, step: 1 / 64,
  fuse: { he: 1.6, flash: 1.6 }, molAir: 2.0,
  smokeLife: 18, fireLife: 7, decoyLife: 15,
  smokeR: 3.6, fireR: 2.6, heR: 350 * U, heDmg: 98,
};
// tipo de lanzamiento: 1 fuerte (clic izq), 0.5 medio (ambos), 0.3 suave (clic der)
export function makeNade(type, owner, team, ox, oy, oz, yaw, pitch, pvx, pvz, power = 1) {
  const sp = NADE.speed * (0.3 + 0.7 * power);
  // como CS: el lanzamiento sale un poco hacia arriba de la mira
  const p = pitch + (10 * Math.PI / 180) * (1 - Math.abs(pitch) / (Math.PI / 2));
  const dx = -Math.sin(yaw) * Math.cos(p), dy = Math.sin(p), dz = -Math.cos(yaw) * Math.cos(p);
  return { type, owner, team, x: ox + dx * 0.1, y: oy + dy * 0.1 - 0.05, z: oz + dz * 0.1, vx: dx * sp + pvx * 1.25, vy: dy * sp, vz: dz * sp + pvz * 1.25, t: 0, acc: 0, rest: false, state: 'fly', life: 0 };
}
// avanza; devuelve lista de eventos { type:'det'|'bounce'|'end', g }
export function stepNade(W, g, dt, out) {
  g.acc += dt;
  while (g.acc >= NADE.step) {
    g.acc -= NADE.step;
    const h = NADE.step;
    if (g.state === 'fly') {
      g.t += h;
      if (!g.rest) {
        g.vy -= NADE.g * h;
        const sp = Math.hypot(g.vx, g.vy, g.vz), dist = sp * h;
        if (dist > 1e-5) {
          const hit = raycast(W, g.x, g.y, g.z, g.vx / sp, g.vy / sp, g.vz / sp, dist + 0.04);
          if (hit && hit.t <= dist + 0.04) {
            const t = Math.max(0, hit.t - 0.04);
            g.x += g.vx / sp * t; g.y += g.vy / sp * t; g.z += g.vz / sp * t;
            const n = [hit.nx, hit.ny, hit.nz];
            if ((g.type === 'molotov' || g.type === 'incendiary') && n[1] > 0.7) { detonate(W, g, out); continue; }
            const vn = g.vx * n[0] + g.vy * n[1] + g.vz * n[2];
            g.vx -= 2 * vn * n[0]; g.vy -= 2 * vn * n[1]; g.vz -= 2 * vn * n[2];
            g.vx *= 0.45; g.vy *= 0.45; g.vz *= 0.45;
            if (n[1] > 0.7) { g.vx *= 0.75; g.vz *= 0.75; if (Math.abs(g.vy) < 1.2) { g.vy = 0; if (Math.hypot(g.vx, g.vz) < 0.25) g.rest = true; } }
            if (sp > 2) out.push({ type: 'bounce', g });
          } else { g.x += g.vx * h; g.y += g.vy * h; g.z += g.vz * h; }
        }
        // rodar por el piso
        if (!g.rest && g.vy === 0) {
          const f = floorAt(W, g.x, g.z, g.y + 0.3);
          if (f > -1e8 && g.y - f < 0.06) { g.y = f + 0.03; g.vx *= Math.max(0, 1 - h * 2.5); g.vz *= Math.max(0, 1 - h * 2.5); if (Math.hypot(g.vx, g.vz) < 0.2) g.rest = true; }
          else g.vy = -0.01;
        }
        if (g.y < -40) { g.state = 'done'; out.push({ type: 'end', g }); continue; }
      }
      const fuse = NADE.fuse[g.type];
      if (fuse && g.t >= fuse) detonate(W, g, out);
      else if ((g.type === 'molotov' || g.type === 'incendiary') && g.t >= NADE.molAir) { g.air = true; detonate(W, g, out); }
      else if ((g.type === 'smoke' || g.type === 'decoy') && g.rest && g.t > 0.9) detonate(W, g, out);
    } else if (g.state === 'active') {
      g.life -= h;
      if (g.life <= 0) { g.state = 'done'; out.push({ type: 'end', g }); }
    }
  }
}
function detonate(W, g, out) {
  g.state = 'active'; g.vx = g.vy = g.vz = 0;
  if (g.type === 'smoke') g.life = NADE.smokeLife;
  else if (g.type === 'decoy') g.life = NADE.decoyLife;
  else if (g.type === 'molotov' || g.type === 'incendiary') {
    if (g.air) { g.life = 0.01; }
    else { g.life = NADE.fireLife; const f = floorAt(W, g.x, g.z, g.y + 0.5); if (f > -1e8) g.y = f; }
  } else g.life = 0.01;
  out.push({ type: 'det', g });
}
// ¿un punto está dentro de un humo activo? / ¿el segmento atraviesa humo?
export function segBlockedBySmoke(nades, ax, ay, az, bx, by, bz) {
  for (const g of nades) {
    if (g.type !== 'smoke' || g.state !== 'active' || g.life < 0.6) continue;
    const r = NADE.smokeR * Math.min(1, (NADE.smokeLife - g.life) * 1.5 + 0.2);
    const cx = g.x, cy = g.y + 1.2, cz = g.z;
    const dx = bx - ax, dy = by - ay, dz = bz - az, L2 = dx * dx + dy * dy + dz * dz;
    let t = L2 > 0 ? ((cx - ax) * dx + (cy - ay) * dy + (cz - az) * dz) / L2 : 0; t = Math.max(0, Math.min(1, t));
    const px = ax + dx * t - cx, py = (ay + dy * t - cy) * 1.4, pz = az + dz * t - cz;
    if (px * px + py * py + pz * pz < r * r) return true;
  }
  return false;
}
export function inFire(nades, x, y, z) {
  for (const g of nades) {
    if ((g.type !== 'molotov' && g.type !== 'incendiary') || g.state !== 'active' || g.air) continue;
    if (Math.abs(y - g.y) < 1.2 && Math.hypot(x - g.x, z - g.z) < NADE.fireR) return g;
  }
  return null;
}
