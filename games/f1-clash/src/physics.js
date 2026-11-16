// Física de un auto de fórmula: modelo de 4 ruedas con neumáticos tipo Pacejka (deslizamiento
// combinado), carga aerodinámica y arrastre ∝ v², transferencia de peso longitudinal y lateral,
// motor con curva de torque, caja de 8 marchas, embrague de largada, diferencial autoblocante,
// frenos con reparto, ABS y control de tracción opcionales, rebufo y DRS.
// Ejes del cuerpo: x hacia adelante, y hacia la izquierda, r (yaw) positivo = gira a la izquierda.
// Mundo: plano (X, Z). forward = (sin h, cos h), izquierda = (cos h, -sin h).

export const CAR = {
  mass: 798, Iz: 1150, wb: 3.6, a: 1.98, b: 1.62, tw: 1.6, h: 0.29, R: 0.36,
  ClA: 3.8, CdA: 1.25, aeroFront: 0.42,
  mu: 1.72, Fz0: 2600, loadSens: 0.07, kp: 0.11, ap: 0.105,
  IwF: 1.0, IwR: 1.3, Ie: 0.06, eff: 0.92,
  brakeF: 4300, brakeR: 3300,
  idle: 4000, limiter: 12800, upRpm: 12300, downRpm: 7700,
  gears: [15.2, 12.3, 10.4, 9.0, 7.9, 6.9, 6.0, 5.1],
  maxSteer: 0.36,
};
const RHO = 1.225, G = 9.81;
const TQ = [[3000, 330], [4000, 390], [6000, 470], [8000, 560], [10000, 620], [11000, 640], [12000, 615], [12800, 560], [13500, 400]];
export function torqueAt(rpm) {
  if (rpm <= TQ[0][0]) return TQ[0][1];
  for (let i = 1; i < TQ.length; i++) if (rpm <= TQ[i][0]) { const [r0, t0] = TQ[i - 1], [r1, t1] = TQ[i]; return t0 + (t1 - t0) * (rpm - r0) / (r1 - r0); }
  return TQ[TQ.length - 1][1];
}

// Curva del neumático normalizada: pico 1 en s=1, cae a ~0.83 en s=3 (deslizando)
const MC = 1.6, MB = Math.tan(Math.PI / (2 * MC));
function MF(s) { return Math.sin(MC * Math.atan(MB * s)); }
const TAN_AP = Math.tan(CAR.ap);

const WL = [ // posición de cada rueda: [lx, ly], 0 FL, 1 FR, 2 RL, 3 RR
  [CAR.a, CAR.tw / 2], [CAR.a, -CAR.tw / 2], [-CAR.b, CAR.tw / 2], [-CAR.b, -CAR.tw / 2],
];

export function makeCar(x, z, h) {
  return {
    x, z, h, vx: 0, vy: 0, r: 0,
    w: [0, 0, 0, 0], rot: [0, 0, 0, 0], kap: [0, 0, 0, 0], alp: [0, 0, 0, 0], Fz: [0, 0, 0, 0], use: [0, 0, 0, 0],
    surf: [0, 0, 0, 0], // 0 asfalto, 1 piano, 2 pasto, 3 grava
    gear: 1, rpm: CAR.idle, shiftT: 0, steer: 0, thr: 0, brk: 0, axs: 0, ays: 0,
    tcCut: 1, absF: [1, 1, 1, 1], drs: false, tow: 0, revCount: 0,
    dmg: new Array(11).fill(0),
    assist: { abs: true, tc: true, auto: true },
  };
}

export function speed(c) { return Math.hypot(c.vx, c.vy); }

function surfMu(s) { return s === 0 ? 1 : s === 1 ? 0.93 : s === 2 ? 0.55 : s === 3 ? 0.45 : 0.88; }

// tire force for wheel i given ang. velocity w; returns [Fl, Fs]
function tire(c, i, w, vl, vs, Fz) {
  const den = Math.max(Math.abs(vl), 3);
  const kap = (w * CAR.R - vl) / den;
  const ta = vs / den;
  const sx = kap / CAR.kp, sy = ta / TAN_AP, s = Math.hypot(sx, sy);
  if (s < 1e-6 || Fz <= 0) return [0, 0, kap, ta, 0];
  let mu = CAR.mu * (1 - CAR.loadSens * (Fz / CAR.Fz0 - 1));
  mu = Math.max(CAR.mu * 0.7, mu) * surfMu(c.surf[i]) * (i > 1 ? 1.07 : 1) * (1 - 0.3 * Math.min(1, c.dmg[4 + i])) * (c.gripX || 1);
  const F = mu * Fz * MF(s);
  return [F * sx / s, -F * sy / s, kap, ta, s];
}

// inp: { thr 0..1, brk 0..1, steer ángulo objetivo (rad) }
export function step(c, inp, dt) {
  const m = CAR.mass, v = c.vx;
  // dirección con velocidad de giro limitada
  const ds = inp.steer - c.steer, rate = 3.2 * dt;
  c.steer += Math.max(-rate, Math.min(rate, ds));
  c.steer = Math.max(-CAR.maxSteer, Math.min(CAR.maxSteer, c.steer));
  c.thr += (inp.thr - c.thr) * Math.min(1, dt * 18);
  c.brk += (inp.brk - c.brk) * Math.min(1, dt * 22);

  // aerodinámica
  const v2 = v * v;
  const drsOn = c.drs ? 1 : 0;
  const tow = c.tow || 0; // 0..1 rebufo
  const D = c.dmg;
  const fwL = D[2] >= 1 ? 1 : Math.min(1, D[0]), fwR = D[2] >= 1 ? 1 : Math.min(1, D[1]), rw = Math.min(1, D[3]);
  const body = 1 - 0.12 * (Math.min(1, D[8]) + Math.min(1, D[9]));
  const CdA = CAR.CdA * (1 - 0.18 * drsOn) * (1 - 0.28 * tow) * (1 - 0.22 * rw) * (1 + 0.04 * (fwL + fwR));
  const ClA = CAR.ClA * (1 - 0.12 * tow) * body;
  const q = 0.5 * RHO * v2;
  const downF = q * ClA * CAR.aeroFront, downR = q * ClA * (1 - CAR.aeroFront) * (1 - 0.12 * drsOn) * (1 - 0.7 * rw);
  const drag = q * CdA * Math.sign(v);

  // cargas por rueda (el alerón delantero roto descarga ese lado)
  const L = CAR.wb, Wf = m * G * CAR.b / L, Wr = m * G * CAR.a / L;
  const dLong = m * c.axs * CAR.h / L;
  const fF = (Wf - dLong) / 2, fR = (Wr + downR + dLong) / 2;
  const dLat = m * c.ays * CAR.h / CAR.tw * 0.5;
  const Fz = c.Fz;
  Fz[0] = Math.max(0, fF + downF / 2 * (1 - 0.75 * fwL) - dLat); Fz[1] = Math.max(0, fF + downF / 2 * (1 - 0.75 * fwR) + dLat);
  Fz[2] = Math.max(0, fR - dLat); Fz[3] = Math.max(0, fR + dLat);
  for (let i = 0; i < 4; i++) if (D[4 + i] >= 1) Fz[i] = 0; // rueda perdida

  // motor y caja
  const ratio = c.gear > 0 ? CAR.gears[c.gear - 1] : c.gear < 0 ? -14 : 0;
  const wRear = (c.w[2] + c.w[3]) / 2;
  let rpmW = Math.abs(wRear * ratio) * 60 / (2 * Math.PI);
  let clutch = 1;
  let rpm = rpmW;
  const launch = CAR.idle + c.thr * 5200;
  if (c.gear !== 0 && rpmW < launch && rpmW < 6500) { rpm = Math.max(rpmW, launch); clutch = 0.85; }
  if (c.gear === 0) rpm = CAR.idle + c.thr * 8000;
  c.rpm += (Math.min(13500, rpm) - c.rpm) * Math.min(1, dt * 30);
  if (c.shiftT > 0) c.shiftT -= dt;
  let Te = 0;
  if (c.gear !== 0 && c.shiftT <= 0) {
    if (c.thr > 0.02 && rpmW < CAR.limiter) Te = torqueAt(rpm) * c.thr * c.tcCut * clutch * (1 - 0.45 * Math.min(1, D[10])) * (c.limiter && v > c.limiter ? 0 : 1) * (c.powerF ?? 1);
    else Te = -(25 + rpmW * 0.004) * (1 - c.thr); // freno motor
  }
  const Tdrive = Te * ratio * CAR.eff / 2; // por rueda trasera
  const IwR = CAR.IwR + CAR.Ie * ratio * ratio / 2;

  // ruedas
  let Fx = 0, Fy = 0, Mz = 0;
    let maxSlipR = 0, minSlip = 0, useR = 0;
  for (let i = 0; i < 4; i++) {
    const [lx, ly] = WL[i];
    const vxw = c.vx - c.r * ly, vyw = c.vy + c.r * lx;
    const front = i < 2;
    const toe = D[4 + i] > 0.15 ? (ly > 0 ? 1 : -1) * 0.04 * Math.min(1, D[4 + i]) : 0;
    const ang = (front ? c.steer : 0) + toe;
    const ca = toe || front ? Math.cos(ang) : 1, sa = toe || front ? Math.sin(ang) : 0;
    const vl = vxw * ca + vyw * sa, vs = -vxw * sa + vyw * ca;
    const Iw = front ? CAR.IwF : IwR;
    const Td = front ? 0 : Tdrive;
    let w = c.w[i];
    // paso semi-implícito para la rueda (estable con neumáticos rígidos)
    const t0 = tire(c, i, w, vl, vs, Fz[i]);
    const eps = 0.05, t1 = tire(c, i, w + eps, vl, vs, Fz[i]);
    const g = Math.max(0, (t1[0] - t0[0]) / eps);
    let wn = w + dt * (Td - t0[0] * CAR.R) / (Iw + dt * g * CAR.R * CAR.R);
    // freno (fricción: no puede invertir el giro)
    let Tb = (front ? CAR.brakeF : CAR.brakeR * (1 - 0.35 * Math.min(1, Math.abs(c.ays) / 25))) * c.brk * c.absF[i];
    if (c.surf[i] >= 2) Tb += 0; // nada extra
    const dw = Tb * dt / (Iw + dt * g * CAR.R * CAR.R);
    if (Math.abs(wn) <= dw) wn = 0; else wn -= Math.sign(wn) * dw;
    c.w[i] = wn;
    const [Fl, Fs, kap, ta, s] = tire(c, i, wn, vl, vs, Fz[i]);
    c.kap[i] = kap; c.alp[i] = ta; c.use[i] = s;
    if (!front) { maxSlipR = Math.max(maxSlipR, kap); if (kap > 0.02) useR = Math.max(useR, s); }
    minSlip = Math.min(minSlip, kap);
    // rodadura + superficie blanda
    let roll = -0.012 * Fz[i] * Math.sign(vl);
    if (D[4 + i] >= 1) roll -= m * G / 4 * 0.75 * Math.sign(vl) * Math.min(1, Math.abs(vl)); // arrastra el piso
    if (c.surf[i] === 2) roll -= m / 4 * (0.9 + 0.06 * Math.abs(vl)) * Math.sign(vl);
    if (c.surf[i] === 3) roll -= m / 4 * (3.2 + 0.16 * Math.abs(vl)) * Math.sign(vl);
    if (Math.abs(vl) < 0.5) roll *= Math.abs(vl) / 0.5;
    const FL = Fl + roll;
    const bx = FL * ca - Fs * sa, by = FL * sa + Fs * ca;
    Fx += bx; Fy += by; Mz += lx * by - ly * bx;
    // ABS por rueda
    if (c.assist.abs) {
      // considera el deslizamiento combinado: frenando en curva libera presión antes de bloquear
      const over = kap < -0.1 || (s > 1.0 && kap < -0.03);
      if (over && c.brk > 0.05) c.absF[i] = Math.max(0.1, c.absF[i] - dt * 14);
      else if (s < 0.9) c.absF[i] = Math.min(1, c.absF[i] + dt * 5);
    } else c.absF[i] = 1;
  }
  // diferencial autoblocante
  const avg = (c.w[2] + c.w[3]) / 2, lock = Math.min(1, dt * 40);
  c.w[2] += (avg - c.w[2]) * lock * 0.5; c.w[3] += (avg - c.w[3]) * lock * 0.5;
  // control de tracción
  if (c.assist.tc) {
    if (maxSlipR > 0.12 || useR > 1.05) c.tcCut = Math.max(0.15, c.tcCut - dt * 7);
    else c.tcCut = Math.min(1, c.tcCut + dt * 3);
  } else c.tcCut = 1;

  Fx -= drag; Fy -= 0.5 * RHO * 2.2 * c.vy * Math.abs(c.vy);
  const ax = Fx / m, ay = Fy / m;
  c.vx += (ax + c.r * c.vy) * dt;
  c.vy += (ay - c.r * c.vx) * dt;
  c.r += Mz / CAR.Iz * dt;
  // amortiguación a muy baja velocidad (evita temblores parado)
  const sp = Math.hypot(c.vx, c.vy);
  if (sp < 0.3 && c.thr < 0.05) { c.vx *= 0.9; c.vy *= 0.9; c.r *= 0.9; }
  c.axs += (ax - c.axs) * Math.min(1, dt * 14);
  c.ays += (ay - c.ays) * Math.min(1, dt * 14);
  c.h += c.r * dt;
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lxw = Math.cos(c.h), lzw = -Math.sin(c.h);
  c.x += (c.vx * fx + c.vy * lxw) * dt;
  c.z += (c.vx * fz + c.vy * lzw) * dt;
  for (let i = 0; i < 4; i++) c.rot[i] += c.w[i] * dt;
  c.lastAx = ax; c.lastAy = ay;
}

// Caja automática / manual. Devuelve 'up' | 'down' | null para sonido
export function gearbox(c, inp) {
  const sp = c.vx;
  // marcha atrás: frenando detenido
  if (c.gear >= 1 && sp < 0.6 && inp.brk > 0.5 && inp.thr < 0.1) { c.revCount += inp.dt; if (c.revCount > 0.45) { c.gear = -1; c.revCount = 0; return 'down'; } }
  else c.revCount = 0;
  if (c.gear === -1 && (inp.thr > 0.1 || sp > 1)) { if (inp.thr > 0.1 && sp > -0.6) { c.gear = 1; return 'up'; } }
  if (c.gear < 1) return null;
  if (c.shiftT > 0) return null;
  const rpmIn = g => Math.abs((c.w[2] + c.w[3]) / 2 * CAR.gears[g - 1]) * 60 / (2 * Math.PI);
  if (c.assist.auto) {
    if (c.gear < 8 && rpmIn(c.gear) > CAR.upRpm) { c.gear++; c.shiftT = 0.05; return 'up'; }
    if (c.gear > 1 && rpmIn(c.gear) < CAR.downRpm && rpmIn(c.gear - 1) < 11800) { c.gear--; c.shiftT = 0.03; return 'down'; }
  } else {
    if (inp.up && c.gear < 8) { c.gear++; c.shiftT = 0.05; return 'up'; }
    if (inp.down && c.gear > 1 && rpmIn(c.gear - 1) < 13200) { c.gear--; c.shiftT = 0.03; return 'down'; }
  }
  return null;
}

// Ángulo de dirección máximo según velocidad (para teclado / táctil)
export function steerLimit(v) { return CAR.maxSteer / (1 + Math.abs(v) / 24); }

// Choque con muro: n = normal que apunta hacia la pista (unitaria), pen = penetración (m)
export function hitWall(c, nx, nz, pen) {
  c.x += nx * pen; c.z += nz * pen;
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  let wx = c.vx * fx + c.vy * lx, wz = c.vx * fz + c.vy * lz;
  const vn = wx * nx + wz * nz;
  if (vn >= 0) return 0;
  const tx = wx - vn * nx, tz = wz - vn * nz;
  const e = 0.25, fr = Math.max(0.55, 1 - Math.abs(vn) * 0.02);
  wx = tx * fr - vn * e * nx; wz = tz * fr - vn * e * nz;
  c.vx = wx * fx + wz * fz; c.vy = wx * lx + wz * lz;
  c.r *= 0.5;
  c.r += (Math.random() - 0.5) * Math.min(1.5, -vn * 0.05);
  // las ruedas acompañan
  for (let i = 0; i < 4; i++) c.w[i] = c.vx / CAR.R;
  return -vn;
}

// ---------- Daño ----------
// Partes: 0 alerón del. izq, 1 alerón del. der, 2 trompa, 3 alerón trasero, 4-7 suspensión FL FR RL RR,
// 8 pontón izq, 9 pontón der, 10 motor. 0 = sano, 1 = roto / desprendido.
export const PARTS = ['Alerón del. izq.', 'Alerón del. der.', 'Trompa', 'Alerón trasero', 'Suspensión del. izq.', 'Suspensión del. der.', 'Suspensión tras. izq.', 'Suspensión tras. der.', 'Pontón izq.', 'Pontón der.', 'Motor'];
const STRENGTH = [9, 9, 15, 11, 15, 15, 17, 17, 18, 18, 30];
// punto de contacto en coordenadas del auto (x adelante, y izquierda) y velocidad de impacto (m/s)
export function damageAt(c, lx, ly, imp, scale = 1) {
  const e = imp - 4.5; if (e <= 0) return [];
  const add = (p, k = 1) => { const before = c.dmg[p]; c.dmg[p] = Math.min(1, c.dmg[p] + e / STRENGTH[p] * k * scale); if (before < 1 && c.dmg[p] >= 1) broke.push(p); };
  const broke = [];
  const L = ly > 0;
  if (lx > 2.2) { // trompa / alerón delantero
    if (Math.abs(ly) < 0.35) { add(0); add(1); if (imp > 13) add(2, 0.7); }
    else { add(L ? 0 : 1, 1.2); if (imp > 12) { add(L ? 4 : 5, 0.6); add(2, 0.35); } }
  } else if (lx > 0.9) { // rueda delantera
    add(L ? 4 : 5); add(L ? 0 : 1, 0.6);
  } else if (lx > -1.0) { // pontón
    add(L ? 8 : 9); if (imp > 12) add(L ? 4 : 5, 0.3);
  } else if (lx > -2.2) { // rueda trasera
    add(L ? 6 : 7); if (imp > 12) add(3, 0.4);
  } else { add(3, 1.1); if (imp > 14) add(L ? 6 : 7, 0.4); }
  if (imp > 16) add(10, 0.6);
  if (imp > 22) { add(L ? 8 : 9, 0.5); add(3, 0.3); }
  return broke;
}
// puntos extremos del auto para saber dónde tocó un muro
const EXT = [[2.95, 0.9], [2.95, -0.9], [3.05, 0], [1.98, 1.0], [1.98, -1.0], [0, 0.85], [0, -0.85], [-1.62, 1.0], [-1.62, -1.0], [-2.55, 0.48], [-2.55, -0.48]];
export function contactPoint(c, nx, nz) {
  // n apunta hacia la pista: el contacto es el punto más extremo en dirección -n
  const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
  let best = EXT[0], bd = -1e9;
  for (const p of EXT) { const wx = fx * p[0] + lx * p[1], wz = fz * p[0] + lz * p[1]; const d = -(wx * nx + wz * nz); if (d > bd) { bd = d; best = p; } }
  return best;
}
export function repair(c) { c.dmg.fill(0); }
export function dmgTotal(c) { return c.dmg.reduce((a, b) => a + b, 0); }

// Dirección asistida: la tecla a fondo pide la curva más cerrada que permite el agarre a esa velocidad.
// Corrige sola si la cola se va (control de estabilidad).
export function assistSteer(c, st, analog) {
  const v = Math.max(0.5, c.vx);
  const k = 0.5 * RHO * CAR.ClA / CAR.mass;
  const aMax = 1.45 * (G + k * v * v);
  const rDes = st * Math.min(aMax / v, v / 6); // velocidad de giro objetivo
  let d = Math.atan(CAR.wb * rDes / v) + st * Math.min(0.07, 0.0009 * v) ;
  d += (rDes - c.r) * (v > 8 ? 0.09 : 0.03);
  if (v > 5) d += Math.max(-0.14, Math.min(0.14, Math.atan2(c.vy, v) * 0.8));
  return Math.max(-CAR.maxSteer, Math.min(CAR.maxSteer, d * (analog ? 1 : 1)));
}
