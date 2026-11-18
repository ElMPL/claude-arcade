// Movimiento estilo Source/CS: aceleración y fricción en el piso, aire limitado, agacharse,
// caminar con Shift, saltar. Unidades: metros (1 unidad de CS = 0.0254 m).
import { blocked, ground, ceiling, STEP } from './world.js';
const U = 0.0254;
export const PM = {
  gravity: 800 * U, jump: 301.993 * U, accel: 5.5, airAccel: 12, friction: 5.2, stop: 80 * U,
  airCap: 30 * U, hStand: 72 * U, hCrouch: 54 * U, eyeStand: 64 * U, eyeCrouch: 46 * U,
  walk: 0.52, crouchMul: 0.34, r: 0.4,
  // stamina de CS:GO (sv_staminamax 80, sv_staminajumpcost 0.08, sv_staminalandcost 0.05, sv_staminarecoveryrate 60)
  stMax: 80, stJump: 0.08, stLand: 0.05, stRecover: 60,
};

export function makePlayer(x, y, z, yaw = 0) {
  return { x, y, z, vx: 0, vy: 0, vz: 0, yaw, pitch: 0, duck: 0, onGround: true, landT: 0, h: PM.hStand, alive: true, jumpHeld: false };
}
export const eyeH = p => PM.eyeStand + (PM.eyeCrouch - PM.eyeStand) * p.duck;

// inp: { f, s (adelante/costado -1..1), jump, crouch, walk }, maxSpeed en m/s
export function movePlayer(W, p, inp, dt, maxSpeed) {
  p.sinceLand = (p.sinceLand ?? 1) + dt;
  p.st = Math.max(0, (p.st || 0) - PM.stRecover * dt); // stamina: se recupera 60 por segundo
  const stK = 1 - p.st / 100;
  // agacharse (se para solo si hay lugar)
  const want = inp.crouch ? 1 : 0;
  if (want > p.duck) p.duck = Math.min(1, p.duck + dt * 8);
  else if (want < p.duck) {
    const nd = Math.max(0, p.duck - dt * 8), nh = PM.hStand + (PM.hCrouch - PM.hStand) * nd;
    if (ceiling(W, p.x, p.z, p.y) >= p.y + nh) p.duck = nd;
  }
  const oldH = p.h;
  p.h = PM.hStand + (PM.hCrouch - PM.hStand) * p.duck;
  if (!p.onGround && p.h < oldH) p.y += (oldH - p.h) * 0.5; // agacharse en el aire levanta las piernas

  let speed = maxSpeed * (p.duck > 0.5 ? PM.crouchMul : inp.walk ? PM.walk : 1) * (p.onGround ? stK : 1);
  const sy = Math.sin(p.yaw), cy = Math.cos(p.yaw);
  // forward = (-sin yaw, -cos yaw) (cámara mira hacia -z con yaw 0); derecha = (cos yaw, -sin yaw)
  let wx = -sy * inp.f + cy * inp.s, wz = -cy * inp.f - sy * inp.s;
  const wl = Math.hypot(wx, wz);
  if (wl > 1e-6) { wx /= wl; wz /= wl; } else speed = 0;

  if (p.onGround) {
    // salto (hay que soltar y volver a apretar)
    if (inp.jump && !p.jumpHeld && ceiling(W, p.x, p.z, p.y) > p.y + p.h + 0.05) {
      // stamina de CS:GO: con stamina gastada se salta más bajo; saltar suma 0.08 × la velocidad del salto
      p.vy = PM.jump * stK; p.onGround = false; p.jumpHeld = true;
      p.st = Math.min(PM.stMax, p.st + PM.stJump * p.vy / U);
    } else {
      // fricción
      const sp = Math.hypot(p.vx, p.vz);
      if (sp > 0.001) {
        const drop = Math.max(sp, PM.stop) * PM.friction * dt;
        const ns = Math.max(0, sp - drop) / sp; p.vx *= ns; p.vz *= ns;
      }
      accelerate(p, wx, wz, speed, PM.accel, dt);
    }
  }
  if (!p.onGround) accelerate(p, wx, wz, Math.min(speed, PM.airCap), PM.airAccel, dt, speed);
  if (!inp.jump) p.jumpHeld = false;
  if (p.landT > 0) p.landT -= dt;

  // si quedó encajado en una esquina (no se puede mover para ningún lado), se lo corre al lugar libre más cercano
  if (blocked(W, p.x, p.z, p.y, p.h, PM.r) && !unstick(W, p)) { p.blkT = (p.blkT || 0) + dt; if (p.blkT > 0.3) { unpocket(W, p); p.blkT = 0; } }
  // mover en X y Z por separado (se desliza por las paredes)
  const nx = p.x + p.vx * dt;
  if (!blocked(W, nx, p.z, p.y, p.h, PM.r)) p.x = nx; else p.vx = 0;
  const nz = p.z + p.vz * dt;
  if (!blocked(W, p.x, nz, p.y, p.h, PM.r)) p.z = nz; else p.vz = 0;
  // hueco sin salida (entra el jugador pero no se puede mover hacia ningún lado): después de un rato se lo saca
  if ((inp.f || inp.s) && p.onGround && pocket(W, p)) { p.pocketT = (p.pocketT || 0) + dt; if (p.pocketT > 0.6) { unpocket(W, p); p.pocketT = 0; } } else p.pocketT = 0;

  // vertical
  const g = ground(W, p.x, p.z, p.y, PM.r - 0.02);
  if (p.onGround) {
    if (g >= p.y - STEP && g > -Infinity) { p.y = g; p.vy = 0; } // seguir escalones y rampas hacia abajo
    else p.onGround = false;
  }
  if (!p.onGround) {
    p.vy -= PM.gravity * dt;
    const y0 = p.y;
    p.y += p.vy * dt;
    const c = ceiling(W, p.x, p.z, y0);
    // golpe contra el techo: se frena, pero nunca se empuja hacia abajo (eso lo metía dentro del piso)
    if (p.y + p.h > c && p.vy > 0) { p.y = Math.max(y0, c - p.h); p.vy = 0; }
    const g2 = ground(W, p.x, p.z, p.y - p.vy * dt, PM.r - 0.02);
    if (p.vy <= 0 && p.y <= g2) {
      const fall = -p.vy; p.y = g2; p.vy = 0; p.onGround = true; p.landT = 0.12; p.sinceLand = 0;
      // al caer: la stamina sube 0.05 × la velocidad de caída y frena en proporción (el bunny hop pierde velocidad)
      p.st = Math.min(PM.stMax, p.st + PM.stLand * fall / U);
      const k = 1 - p.st / 100; p.vx *= k; p.vz *= k;
      return fall; // velocidad de caída (para daño)
    }
  }
  unsink(W, p);
  return 0;
}
function unstick(W, p) {
  for (let r = 0.04; r <= 0.8; r += 0.04) for (let k = 0; k < 16; k++) {
    const a = k * Math.PI / 8, x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
    for (const dy of [0, STEP * 0.9]) if (!blocked(W, x, z, p.y + dy, p.h, PM.r)) { p.x = x; p.z = z; p.y += dy; return true; }
  }
  return false;
}
function pocket(W, p) {
  for (let d = 0; d < 8; d++) { const a = d * Math.PI / 4; if (!blocked(W, p.x + Math.cos(a) * 0.15, p.z + Math.sin(a) * 0.15, p.y, p.h, PM.r)) return false; }
  return true;
}
function unpocket(W, p) {
  // busca el lugar libre más cercano desde el que sí se pueda caminar (mismo nivel, un escalón arriba o más abajo)
  for (let r = 0.2; r <= 4; r += r < 2.4 ? 0.1 : 0.25) for (let k = 0; k < 24; k++) {
    const a = k * Math.PI / 12, x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
    for (const dy of [0, STEP * 0.9, -0.6, -1.4, -2.5]) {
      const y = p.y + dy; if (blocked(W, x, z, y, p.h, PM.r)) continue;
      const g = ground(W, x, z, y + 0.05); if (!(g > -50)) continue;
      const q = { x, z, y: g, h: p.h }; if (blocked(W, x, z, g, p.h, PM.r) || pocket(W, q)) continue;
      p.x = x; p.z = z; p.y = g; p.vx = p.vz = 0; return true;
    }
  }
  return false;
}
// si por algún motivo los pies quedaron dentro de un sólido, se sube al piso de ese sólido
function unsink(W, p) {
  const i = W.idx(p.x, p.z); if (i < 0) return;
  for (let l = 0; l < W.L; l++) {
    const t = W.top[l][i], b = W.bot[l][i]; if (isNaN(t)) continue;
    if (b < p.y - 0.05 && t > p.y + 0.02 && t - p.y < 2.5) { p.y = t; p.vy = Math.max(0, p.vy); p.onGround = true; return; }
  }
}
function accelerate(p, wx, wz, wishspeed, accel, dt, base) {
  const cur = p.vx * wx + p.vz * wz, add = wishspeed - cur;
  if (add <= 0) return;
  let a = accel * dt * (base || wishspeed);
  if (a > add) a = add;
  p.vx += a * wx; p.vz += a * wz;
}
// daño por caída (como CS: desde ~ 580 unidades/s)
export function fallDamage(v) { const vu = v / U; return vu > 580 ? Math.round((vu - 580) * (100 / (1024 - 580))) : 0; }

// Hitboxes del jugador (en metros, relativas a los pies). y0..y1 y radio
export function hitboxes(p) {
  const h = p.h, k = h / PM.hStand;
  return [
    { part: 'head', y0: h - 0.27 * k, y1: h, r: 0.13 },
    { part: 'chest', y0: h - 0.62 * k, y1: h - 0.27 * k, r: 0.22 },
    { part: 'stomach', y0: h - 0.9 * k, y1: h - 0.62 * k, r: 0.2 },
    { part: 'leg', y0: 0, y1: h - 0.9 * k, r: 0.18 },
  ];
}
// rayo vs cilindros de hitbox: devuelve { t, part } o null
export function rayPlayer(p, ox, oy, oz, dx, dy, dz, maxT) {
  let best = null;
  for (const hb of hitboxes(p)) {
    const cx = p.x, cz = p.z;
    const fx = ox - cx, fz = oz - cz;
    const a = dx * dx + dz * dz, b = 2 * (fx * dx + fz * dz), c = fx * fx + fz * fz - hb.r * hb.r;
    let t;
    if (a < 1e-9) { if (c > 0) continue; t = 0; }
    else {
      const disc = b * b - 4 * a * c; if (disc < 0) continue;
      t = (-b - Math.sqrt(disc)) / (2 * a);
      if (t < 0) t = (-b + Math.sqrt(disc)) / (2 * a);
      if (t < 0) continue;
    }
    const y = oy + dy * t;
    if (y < p.y + hb.y0 || y > p.y + hb.y1) {
      // puede entrar por arriba (tapa del cilindro)
      continue;
    }
    if (t <= maxT && (!best || t < best.t)) best = { t, part: hb.part };
  }
  return best;
}
