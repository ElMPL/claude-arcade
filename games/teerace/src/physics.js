// Tee Race — física portada de DDNet (src/game/gamecore.cpp, collision.cpp y la parte DDRace de character.cpp).
// Código original: (c) Magnus Auvinen y los autores de DDNet, licencia zlib (ver LICENSE-DDNET.txt).
// Port a JavaScript para Claude Arcade; las fórmulas y constantes se mantienen como en el original.

export const TICK = 50;
export const T = {
  GroundControlSpeed: 10, GroundControlAccel: 100 / TICK, GroundFriction: 0.5, GroundJumpImpulse: 13.2, AirJumpImpulse: 12,
  AirControlSpeed: 250 / TICK, AirControlAccel: 1.5, AirFriction: 0.95, HookLength: 380, HookFireSpeed: 80, HookDragAccel: 3,
  HookDragSpeed: 15, Gravity: 0.5, VelrampStart: 550, VelrampRange: 2000, VelrampCurvature: 1.4, HookDuration: 1.25,
  HammerStrength: 1, GroundElasticityX: 0, GroundElasticityY: 0,
};
export const PHYS = 28, FREEZE_TICKS = 3 * TICK;
export const HOOK = { RETRACTED: -1, IDLE: 0, RETRACT_START: 1, RETRACT_END: 3, FLYING: 4, GRABBED: 5 };
export const TILE = { SOLID: 1, DEATH: 2, NOHOOK: 3, THROUGH_CUT: 5, THROUGH: 6, JUMP: 7, FREEZE: 9, TELEINEVIL: 10, UNFREEZE: 11, DFREEZE: 12, DUNFREEZE: 13, TELEINWEAPON: 14, TELEINHOOK: 15, WALLJUMP: 16, EHOOK_ENABLE: 17, EHOOK_DISABLE: 18, TELEIN: 26, TELEOUT: 27, SPEED_BOOST_OLD: 28, SPEED_BOOST: 29, TELECHECK: 29, TELECHECKOUT: 30, TELECHECKIN: 31, REFILL_JUMPS: 32, START: 33, FINISH: 34, STOP: 60, STOPS: 61, STOPA: 62, TELECHECKINEVIL: 63, THROUGH_ALL: 66, THROUGH_DIR: 67, LFREEZE: 144, LUNFREEZE: 145, UNLIMITED_JUMPS_ENABLE: 105, UNLIMITED_JUMPS_DISABLE: 89 };
const CANT = { LEFT: 1, RIGHT: 2, UP: 4, DOWN: 8 };
const ENTITY_OFFSET = 255 - 16 * 4, ENTITY_SPAWN = 1;

const len = (x, y) => Math.sqrt(x * x + y * y);
const rnd = v => Math.round(v);
function satAdd(min, max, cur, mod) {
  if (mod < 0) { if (cur < min) return cur; cur += mod; if (cur < min) cur = min; return cur; }
  if (cur > max) return cur; cur += mod; if (cur > max) cur = max; return cur;
}
function velRamp(v, start, range, curv) { return v < start ? 1 : 1 / Math.pow(curv, (v - start) / range); }

// ---------- mapa ----------
export function buildCollision(meta, bin) {
  const W = meta.game.w, H = meta.game.h, N = W * H;
  const g = new Uint8Array(bin, meta.game.game, N * 4);
  const C = { W, H, game: new Uint8Array(N), gflags: new Uint8Array(N), front: null, fflags: null, tele: null, teleT: null, speed: null, sw: null };
  for (let i = 0; i < N; i++) { C.game[i] = g[i * 4]; C.gflags[i] = g[i * 4 + 1]; }
  for (const G of meta.groups) for (const L of G.layers) {
    if (L.t === 'front') { const a = new Uint8Array(bin, L.bin, N * 4); C.front = new Uint8Array(N); C.fflags = new Uint8Array(N); for (let i = 0; i < N; i++) { C.front[i] = a[i * 4]; C.fflags[i] = a[i * 4 + 1]; } }
    else if (L.t === 'tele') { const a = new Uint8Array(bin, L.bin, N * 2); C.tele = new Uint8Array(N); C.teleT = new Uint8Array(N); for (let i = 0; i < N; i++) { C.tele[i] = a[i * 2]; C.teleT[i] = a[i * 2 + 1]; } }
    else if (L.t === 'speedup') { const a = new DataView(bin, L.bin, N * 6); C.speed = { force: new Uint8Array(N), max: new Uint8Array(N), type: new Uint8Array(N), ang: new Int16Array(N) }; for (let i = 0; i < N; i++) { C.speed.force[i] = a.getUint8(i * 6); C.speed.max[i] = a.getUint8(i * 6 + 1); C.speed.type[i] = a.getUint8(i * 6 + 2); C.speed.ang[i] = a.getInt16(i * 6 + 4, true); } }
    else if (L.t === 'switch') { const a = new Uint8Array(bin, L.bin, N * 4); C.sw = { num: new Uint8Array(N), type: new Uint8Array(N), flags: new Uint8Array(N), delay: new Uint8Array(N) }; for (let i = 0; i < N; i++) { C.sw.num[i] = a[i * 4]; C.sw.type[i] = a[i * 4 + 1]; C.sw.flags[i] = a[i * 4 + 2]; C.sw.delay[i] = a[i * 4 + 3]; } }
  }
  // spawns, salidas de teles y checkpoints
  C.spawns = []; C.teleOuts = {}; C.checkOuts = {};
  for (let i = 0; i < N; i++) {
    const e = C.game[i] - ENTITY_OFFSET;
    if (e >= ENTITY_SPAWN && e <= 3) C.spawns.push([(i % W) * 32 + 16, Math.floor(i / W) * 32 + 16]);
    if (C.front) { const f = C.front[i] - ENTITY_OFFSET; if (f >= ENTITY_SPAWN && f <= 3) C.spawns.push([(i % W) * 32 + 16, Math.floor(i / W) * 32 + 16]); }
    if (C.tele && C.tele[i]) {
      const p = [(i % W) * 32 + 16, Math.floor(i / W) * 32 + 16];
      if (C.teleT[i] === TILE.TELEOUT) (C.teleOuts[C.tele[i]] = C.teleOuts[C.tele[i]] || []).push(p);
      else if (C.teleT[i] === TILE.TELECHECKOUT) (C.checkOuts[C.tele[i]] = C.checkOuts[C.tele[i]] || []).push(p);
    }
  }
  if (!C.spawns.length) C.spawns.push([W * 16, H * 16]);
  return C;
}

// índice del casillero (con clamp como en DDNet)
export function pureIndex(C, x, y) { const nx = Math.min(Math.max(Math.trunc(x / 32), 0), C.W - 1), ny = Math.min(Math.max(Math.trunc(y / 32), 0), C.H - 1); return ny * C.W + nx; }
function getTile(C, x, y) { const i = pureIndex(C, x, y), t = C.game[i]; return t >= 1 && t <= 4 ? t : 0; }
export function isSolid(C, x, y) { const t = getTile(C, x, y); return t === TILE.SOLID || t === TILE.NOHOOK; }
export const checkPoint = (C, x, y) => isSolid(C, rnd(x), rnd(y));
export function collisionAt(C, x, y) { return getTile(C, rnd(x), rnd(y)); }
export function frontCollisionAt(C, x, y) { if (!C.front) return 0; const t = C.front[pureIndex(C, rnd(x), rnd(y))]; return t >= 1 && t <= 4 ? t : 0; }
export function testBox(C, x, y, s) { s *= 0.5; return checkPoint(C, x - s, y - s) || checkPoint(C, x + s, y - s) || checkPoint(C, x - s, y + s) || checkPoint(C, x + s, y + s); }
export function isOnGround(C, x, y, s) { return checkPoint(C, x + s / 2, y + s / 2 + 5) || checkPoint(C, x - s / 2, y + s / 2 + 5); }

function moveBox(C, P, V, size) {
  let px = P.x, py = P.y, vx = V.x, vy = V.y, grounded = false;
  const dist = len(vx, vy), max = Math.trunc(dist);
  if (dist > 0.00001) {
    const frac = 1 / (max + 1);
    for (let i = 0; i <= max; i++) {
      if (vx === 0 && vy === 0) break;
      let nx = px + vx * frac, ny = py + vy * frac;
      if (nx === px && ny === py) break;
      if (testBox(C, nx, ny, size)) {
        let hits = 0;
        if (testBox(C, px, ny, size)) { ny = py; vy *= -T.GroundElasticityY; hits++; }
        if (testBox(C, nx, py, size)) { nx = px; vx *= -T.GroundElasticityX; hits++; }
        if (hits === 0) { ny = py; vy *= -T.GroundElasticityY; nx = px; vx *= -T.GroundElasticityX; }
      }
      px = nx; py = ny;
    }
  }
  P.x = px; P.y = py; V.x = vx; V.y = vy;
  return grounded;
}

function isThrough(C, x, y, dx, dy, x0, y0, x1, y1) {
  const i = pureIndex(C, x, y);
  if (C.front) {
    const f = C.front[i], fl = C.fflags[i];
    if (f === TILE.THROUGH_ALL || f === TILE.THROUGH_CUT) return true;
    if (f === TILE.THROUGH_DIR && ((fl === 0 && y0 > y1) || (fl === 8 && x0 < x1) || (fl === 3 && y0 < y1) || (fl === 11 && x0 > x1))) return true;
  }
  const o = pureIndex(C, x + dx, y + dy);
  return C.game[o] === TILE.THROUGH || (C.front && C.front[o] === TILE.THROUGH);
}
function throughOffset(x0, y0, x1, y1) {
  const dx = x0 - x1, dy = y0 - y1;
  if (Math.abs(dx) > Math.abs(dy)) return [dx < 0 ? -32 : 32, 0];
  return [0, dy < 0 ? -32 : 32];
}
function isHookBlocker(C, x, y, x0, y0, x1, y1) {
  const i = pureIndex(C, x, y);
  const chk = (t, f) => t === TILE.THROUGH_ALL || (t === TILE.THROUGH_DIR && ((f === 0 && y0 < y1) || (f === 8 && x0 > x1) || (f === 3 && y0 > y1) || (f === 11 && x0 < x1)));
  return chk(C.game[i], C.gflags[i]) || (C.front && chk(C.front[i], C.fflags[i]));
}
// devuelve {hit, x, y, tele}
function intersectHook(C, x0, y0, x1, y1) {
  const d = len(x1 - x0, y1 - y0), end = Math.trunc(d + 1);
  const [dx, dy] = throughOffset(x0, y0, x1, y1);
  for (let i = 0; i <= end; i++) {
    const a = i / end, x = x0 + (x1 - x0) * a, y = y0 + (y1 - y0) * a;
    const ix = rnd(x), iy = rnd(y), idx = pureIndex(C, x, y);
    if (C.tele && C.teleT[idx] === TILE.TELEINHOOK && C.tele[idx]) return { hit: TILE.TELEINHOOK, x, y, tele: C.tele[idx] };
    let hit = 0;
    if (isSolid(C, ix, iy)) { if (!isThrough(C, ix, iy, dx, dy, x0, y0, x1, y1)) hit = getTile(C, ix, iy); }
    else if (isHookBlocker(C, ix, iy, x0, y0, x1, y1)) hit = TILE.NOHOOK;
    if (hit) return { hit, x, y };
  }
  return { hit: 0, x: x1, y: y1 };
}

function restrictionsRaw(dir, tile, flags) {
  if (tile === TILE.STOP) {
    const m = { 0: CANT.DOWN, 8: CANT.LEFT, 3: CANT.UP, 11: CANT.RIGHT, 2: CANT.UP, 10: CANT.RIGHT, 1: CANT.DOWN, 9: CANT.LEFT }[flags];
    return m || 0;
  }
  if (tile === TILE.STOPS) return (flags & 8) ? (CANT.LEFT | CANT.RIGHT) : (CANT.DOWN | CANT.UP);
  if (tile === TILE.STOPA) return CANT.LEFT | CANT.RIGHT | CANT.UP | CANT.DOWN;
  return 0;
}
const DIRS = [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]], MASK = [0, CANT.RIGHT, CANT.DOWN, CANT.LEFT, CANT.UP];
export function moveRestrictions(C, x, y, dist = 18) {
  let r = 0;
  for (let d = 0; d < 5; d++) {
    const i = pureIndex(C, x + DIRS[d][0] * dist, y + DIRS[d][1] * dist);
    for (let f = 0; f < 2; f++) {
      const t = f ? (C.front ? C.front[i] : 0) : C.game[i], fl = f ? (C.front ? C.fflags[i] : 0) : C.gflags[i];
      const raw = restrictionsRaw(d, t, fl);
      r |= (d === 0 && t === TILE.STOP) ? raw : (raw & MASK[d]);
    }
  }
  return r;
}
export function clampVel(r, vx, vy) {
  if (vx > 0 && (r & CANT.RIGHT)) vx = 0;
  if (vx < 0 && (r & CANT.LEFT)) vx = 0;
  if (vy > 0 && (r & CANT.DOWN)) vy = 0;
  if (vy < 0 && (r & CANT.UP)) vy = 0;
  return [vx, vy];
}

// ---------- personaje ----------
export function newCore(x, y) {
  return { x, y, vx: 0, vy: 0, hookState: HOOK.IDLE, hx: x, hy: y, hdx: 0, hdy: 0, hookTick: 0, hooked: -1, jumped: 0, jumpedTotal: 0, jumps: 2,
    dir: 0, colliding: 0, leftWall: true, freeze: 0, deep: false, live: false, endlessHook: false, endlessJump: false, events: 0, newHook: false, mr: 0 };
}
export const EV = { GROUND_JUMP: 1, AIR_JUMP: 2, HOOK_LAUNCH: 4, HOOK_ATTACH_PLAYER: 8, HOOK_ATTACH_GROUND: 16, HOOK_HIT_NOHOOK: 32, HOOK_RETRACT: 64 };

// in: {dir, jump, hook, tx, ty}; others: [{id, x, y, vx, vy}] (los demás jugadores, para el hook y choques)
export function coreTick(C, c, inp, others, useInput = true) {
  c.mr = moveRestrictions(C, c.x, c.y, 0);
  c.events = 0;
  const grounded = isOnGround(C, c.x, c.y, PHYS);
  let tl = len(inp.tx, inp.ty) || 1; const tdx = inp.tx / tl, tdy = inp.ty / tl;
  c.vy += T.Gravity;
  const maxSpeed = grounded ? T.GroundControlSpeed : T.AirControlSpeed;
  const accel = grounded ? T.GroundControlAccel : T.AirControlAccel;
  const fric = grounded ? T.GroundFriction : T.AirFriction;
  if (useInput) {
    c.dir = inp.dir;
    if (inp.jump) {
      if (!(c.jumped & 1)) {
        if (grounded && (!(c.jumped & 2) || c.jumps !== 0)) { c.events |= EV.GROUND_JUMP; c.vy = -T.GroundJumpImpulse; c.jumped |= c.jumps > 1 ? 1 : 3; c.jumpedTotal = 0; }
        else if (!(c.jumped & 2)) { c.events |= EV.AIR_JUMP; c.vy = -T.AirJumpImpulse; c.jumped |= 3; c.jumpedTotal++; }
      }
    } else c.jumped &= ~1;
    if (inp.hook) {
      if (c.hookState === HOOK.IDLE) {
        c.hookState = HOOK.FLYING; c.hx = c.x + tdx * PHYS * 1.5; c.hy = c.y + tdy * PHYS * 1.5; c.hdx = tdx; c.hdy = tdy;
        c.hooked = -1; c.hookTick = TICK * (1.25 - T.HookDuration); c.events |= EV.HOOK_LAUNCH;
      }
    } else { c.hooked = -1; c.hookState = HOOK.IDLE; c.hx = c.x; c.hy = c.y; }
  }
  if (grounded) { c.jumped &= ~2; c.jumpedTotal = 0; }
  if (c.dir < 0) c.vx = satAdd(-maxSpeed, maxSpeed, c.vx, -accel);
  if (c.dir > 0) c.vx = satAdd(-maxSpeed, maxSpeed, c.vx, accel);
  if (c.dir === 0) c.vx *= fric;

  if (c.hookState === HOOK.IDLE) { c.hooked = -1; c.hx = c.x; c.hy = c.y; }
  else if (c.hookState >= HOOK.RETRACT_START && c.hookState < HOOK.RETRACT_END) c.hookState++;
  else if (c.hookState === HOOK.RETRACT_END) { c.events |= EV.HOOK_RETRACT; c.hookState = HOOK.RETRACTED; }
  else if (c.hookState === HOOK.FLYING) {
    const bx = c.newHook ? c.htbx : c.x, by = c.newHook ? c.htby : c.y;
    let nx = c.hx + c.hdx * T.HookFireSpeed, ny = c.hy + c.hdy * T.HookFireSpeed;
    if (len(nx - bx, ny - by) > T.HookLength) {
      c.hookState = HOOK.RETRACT_START;
      const l = len(nx - bx, ny - by); nx = bx + (nx - bx) / l * T.HookLength; ny = by + (ny - by) / l * T.HookLength;
    }
    let toGround = false, toRetract = false, toTele = 0;
    const r = intersectHook(C, c.hx, c.hy, nx, ny);
    if (r.hit) { nx = r.x; ny = r.y; if (r.hit === TILE.NOHOOK) toRetract = true; else if (r.hit === TILE.TELEINHOOK) toTele = r.tele; else toGround = true; }
    // otros jugadores
    let best = 1e9;
    for (const o of others) {
      if (o.solo) continue;
      const cp = closestOnLine(c.hx, c.hy, nx, ny, o.x, o.y);
      if (cp && len(o.x - cp[0], o.y - cp[1]) < PHYS + 2) {
        const dd = len(c.hx - o.x, c.hy - o.y);
        if (c.hooked === -1 || dd < best) { c.events |= EV.HOOK_ATTACH_PLAYER; c.hookState = HOOK.GRABBED; c.hooked = o.id; best = dd; }
      }
    }
    if (c.hookState === HOOK.FLYING) {
      if (toGround) { c.events |= EV.HOOK_ATTACH_GROUND; c.hookState = HOOK.GRABBED; }
      else if (toRetract) { c.events |= EV.HOOK_HIT_NOHOOK; c.hookState = HOOK.RETRACT_START; }
      const outs = toTele && C.teleOuts[toTele];
      if (outs && outs.length) {
        c.events = 0; c.hooked = -1; c.newHook = true;
        const o = outs[Math.floor(Math.random() * outs.length)];
        c.hx = o[0] + tdx * PHYS * 1.5; c.hy = o[1] + tdy * PHYS * 1.5; c.hdx = tdx; c.hdy = tdy; c.htbx = c.hx; c.htby = c.hy;
      } else { c.hx = nx; c.hy = ny; }
    }
  }
  if (c.hookState === HOOK.GRABBED) {
    if (c.hooked !== -1) {
      const o = others.find(q => q.id === c.hooked);
      if (o) { c.hx = o.x; c.hy = o.y; } else { c.hooked = -1; c.hookState = HOOK.RETRACTED; c.hx = c.x; c.hy = c.y; }
    }
    if (c.hooked === -1 && len(c.hx - c.x, c.hy - c.y) > 46) {
      const l = len(c.hx - c.x, c.hy - c.y);
      let hvx = (c.hx - c.x) / l * T.HookDragAccel, hvy = (c.hy - c.y) / l * T.HookDragAccel;
      if (hvy > 0) hvy *= 0.3;
      if ((hvx < 0 && c.dir < 0) || (hvx > 0 && c.dir > 0)) hvx *= 0.95; else hvx *= 0.75;
      const nvx = c.vx + hvx, nvy = c.vy + hvy, nl = len(nvx, nvy);
      if (nl < T.HookDragSpeed || nl < len(c.vx, c.vy)) { c.vx = nvx; c.vy = nvy; }
    }
    c.hookTick++;
    if (c.hooked !== -1 && (c.hookTick > TICK + TICK / 5 || !others.some(q => q.id === c.hooked))) { c.hooked = -1; c.hookState = HOOK.RETRACTED; c.hx = c.x; c.hy = c.y; }
  }
}
function closestOnLine(x0, y0, x1, y1, px, py) {
  const dx = x1 - x0, dy = y1 - y0, l2 = dx * dx + dy * dy;
  if (l2 === 0) return null;
  const t = ((px - x0) * dx + (py - y0) * dy) / l2;
  if (t < 0 || t > 1) return null;
  return [x0 + dx * t, y0 + dy * t];
}
// choques entre jugadores y la fuerza del hook de otro sobre mí (cada cliente mueve solo su tee)
export function coreDeferred(c, myId, others) {
  for (const o of others) {
    const d = len(c.x - o.x, c.y - o.y);
    if (d <= 0) continue;
    const dx = (c.x - o.x) / d, dy = (c.y - o.y) / d;
    if (!o.solo && !c.noColl && d < PHYS * 1.25) {
      const a = PHYS * 1.45 - d; let v = 0.5;
      const vl = len(c.vx, c.vy);
      if (vl > 0.0001) v = 1 - ((c.vx / vl) * dx + (c.vy / vl) * dy + 1) / 2;
      c.vx += dx * a * (v * 0.75); c.vy += dy * a * (v * 0.75); c.vx *= 0.85; c.vy *= 0.85;
    }
    // yo engancho a otro: me tira un poquito hacia él
    if (c.hooked === o.id && d > PHYS * 1.5) {
      const acc = T.HookDragAccel * (d / T.HookLength), ds = T.HookDragSpeed;
      const [vx, vy] = clampVel(c.mr, satAdd(-ds, ds, c.vx, -acc * dx * 0.25), satAdd(-ds, ds, c.vy, -acc * dy * 0.25));
      c.vx = vx; c.vy = vy;
    }
    // otro me engancha a mí: me arrastra hacia él
    if (o.hooked === myId && d > PHYS * 1.5) {
      const acc = T.HookDragAccel * (d / T.HookLength), ds = T.HookDragSpeed;
      const [vx, vy] = clampVel(c.mr, satAdd(-ds, ds, c.vx, acc * -dx * 1.5), satAdd(-ds, ds, c.vy, acc * -dy * 1.5));
      c.vx = vx; c.vy = vy;
    }
  }
  if (c.hookState !== HOOK.FLYING) c.newHook = false;
  const l = len(c.vx, c.vy); if (l > 6000) { c.vx = c.vx / l * 6000; c.vy = c.vy / l * 6000; }
}
export function coreMove(C, c, others) {
  const ramp = velRamp(len(c.vx, c.vy) * 50, T.VelrampStart, T.VelrampRange, T.VelrampCurvature);
  c.vx *= ramp;
  const P = { x: c.x, y: c.y }, V = { x: c.vx, y: c.vy }, ovx = c.vx;
  moveBox(C, P, V, PHYS);
  c.vx = V.x; c.vy = V.y;
  c.colliding = 0;
  if (c.vx < 0.001 && c.vx > -0.001) { if (ovx > 0) c.colliding = 1; else if (ovx < 0) c.colliding = 2; } else c.leftWall = true;
  c.vx *= 1 / ramp;
  // no atravesar a los demás
  const dist = len(P.x - c.x, P.y - c.y);
  if (dist > 0 && !c.noColl) {
    const cols = others.filter(o => !o.solo);
    const end = Math.trunc(dist + 1); let lx = c.x, ly = c.y;
    for (let i = 0; i < end; i++) {
      const a = i / dist, px = c.x + (P.x - c.x) * a, py = c.y + (P.y - c.y) * a;
      for (const o of cols) {
        const D = len(px - o.x, py - o.y);
        if (D < PHYS) { if (a > 0) { c.x = lx; c.y = ly; } else if (len(P.x - o.x, P.y - o.y) > D) { c.x = P.x; c.y = P.y; } return; }
      }
      lx = px; ly = py;
    }
  }
  c.x = P.x; c.y = P.y;
}
export function quantize(c) { c.x = Math.round(c.x); c.y = Math.round(c.y); c.vx = Math.round(c.vx * 256) / 256; c.vy = Math.round(c.vy * 256) / 256; c.hx = Math.round(c.hx); c.hy = Math.round(c.hy); }

// ---------- reglas DDRace (freeze, start/finish, teles, speedups...) ----------
// devuelve eventos: 'die', 'start', 'finish', 'freeze', 'unfreeze', 'tele'
export function ddraceTiles(C, c, st, prevX, prevY) {
  const out = [];
  const r = PHYS / 3;
  // muerte o fuera del mapa
  const deathAt = (x, y) => collisionAt(C, x, y) === TILE.DEATH || frontCollisionAt(C, x, y) === TILE.DEATH;
  if (deathAt(c.x + r, c.y - r) || deathAt(c.x + r, c.y + r) || deathAt(c.x - r, c.y - r) || deathAt(c.x - r, c.y + r)) { out.push('die'); return out; }
  if (c.x < -200 || c.y < -200 || c.x > C.W * 32 + 200 || c.y > C.H * 32 + 200) { out.push('die'); return out; }
  // casilleros recorridos en este tick (anti-skip)
  const idxs = [], steps = Math.max(1, Math.ceil(len(c.x - prevX, c.y - prevY) / 16));
  for (let k = 1; k <= steps; k++) { const i = pureIndex(C, prevX + (c.x - prevX) * k / steps, prevY + (c.y - prevY) * k / steps); if (idxs[idxs.length - 1] !== i) idxs.push(i); }
  // speedup del casillero actual
  const cur = pureIndex(C, c.x, c.y);
  if (C.speed && C.speed.type[cur] && (C.speed.force[cur] || C.speed.max[cur])) {
    const a = C.speed.ang[cur] * Math.PI / 180, dx = Math.cos(a), dy = Math.sin(a), force = C.speed.force[cur];
    let max = C.speed.max[cur];
    if (C.speed.type[cur] === TILE.SPEED_BOOST) {
      if (!max) max = Math.max(T.VelrampRange / (50 * Math.log(Math.max(T.VelrampCurvature, 1.01))), T.VelrampStart / 50) * 5;
      const curSp = dx * c.vx + dy * c.vy, tm = max / 5;
      let vx = c.vx, vy = c.vy;
      if (curSp + force > tm) { vx += dx * (tm - curSp); vy += dy * (tm - curSp); } else { vx += dx * force; vy += dy * force; }
      [c.vx, c.vy] = clampVel(c.mr, vx, vy);
    } else {
      if (force === 255 && max) { c.vx = dx * max / 5; c.vy = dy * max / 5; }
      else { [c.vx, c.vy] = clampVel(c.mr, c.vx + dx * force, c.vy + dy * force); }
    }
  }
  for (const i of idxs) {
    const t = C.game[i], f = C.front ? C.front[i] : 0, is = k => t === k || f === k;
    if (is(TILE.START)) out.push('start');
    if (is(TILE.FINISH)) out.push('finish');
    if (is(TILE.FREEZE) && !c.deep) { if (!c.freeze || c.freezeStart < st.tick - TICK) { if (!c.freeze) out.push('freeze'); c.freeze = FREEZE_TICKS; c.freezeStart = st.tick; } }
    else if (is(TILE.UNFREEZE) && !c.deep) { if (c.freeze) out.push('unfreeze'); c.freeze = 0; }
    if (is(TILE.DFREEZE)) c.deep = true; else if (is(TILE.DUNFREEZE)) c.deep = false;
    if (is(TILE.LFREEZE)) c.live = true; else if (is(TILE.LUNFREEZE)) c.live = false;
    if (is(TILE.EHOOK_ENABLE)) c.endlessHook = true; else if (is(TILE.EHOOK_DISABLE)) c.endlessHook = false;
    if (is(TILE.UNLIMITED_JUMPS_ENABLE)) c.endlessJump = true; else if (is(TILE.UNLIMITED_JUMPS_DISABLE)) c.endlessJump = false;
    if (is(TILE.WALLJUMP) && c.vy > 0 && c.colliding && c.leftWall) { c.leftWall = false; c.jumpedTotal = c.jumps >= 2 ? c.jumps - 2 : 0; c.jumped = 1; }
    if (is(TILE.REFILL_JUMPS)) { if (!c.lastRefill) { c.jumpedTotal = 0; c.jumped = 0; c.lastRefill = true; } } else c.lastRefill = false;
    // cantidad de saltos (capa switch)
    if (C.sw && C.sw.type[i] === TILE.JUMP) { const n = C.sw.delay[i] === 255 ? -1 : C.sw.delay[i]; c.jumps = n; }
    if (C.sw && C.sw.type[i] === TILE.FREEZE && !c.freeze) { c.freeze = (C.sw.delay[i] || 3) * TICK; c.freezeStart = st.tick; out.push('freeze'); }
    // teles
    if (C.tele && C.tele[i]) {
      const n = C.tele[i], ty = C.teleT[i];
      if (ty === TILE.TELECHECK) st.check = n;
      const outs = ty === TILE.TELEIN ? C.teleOuts[n] : ty === TILE.TELEINEVIL ? C.teleOuts[n] : null;
      if (outs && outs.length) {
        const o = outs[Math.floor(Math.random() * outs.length)];
        c.x = o[0]; c.y = o[1];
        if (ty === TILE.TELEINEVIL) { c.vx = 0; c.vy = 0; }
        c.hookState = HOOK.IDLE; c.hooked = -1; out.push('tele'); return out;
      }
      if (ty === TILE.TELECHECKIN || ty === TILE.TELECHECKINEVIL) {
        for (let k = (st.check || 0); k >= 0; k--) if (C.checkOuts[k] && C.checkOuts[k].length) { const o = C.checkOuts[k][0]; c.x = o[0]; c.y = o[1]; c.vx = 0; c.vy = 0; c.hookState = HOOK.IDLE; out.push('tele'); return out; }
        const s = C.spawns[0]; c.x = s[0]; c.y = s[1]; c.vx = 0; c.vy = 0; out.push('tele'); return out;
      }
    }
  }
  // stoppers
  c.mr = moveRestrictions(C, c.x, c.y, 18);
  if (c.vy > 0 && (c.mr & CANT.DOWN)) { c.jumped = 0; c.jumpedTotal = 0; }
  [c.vx, c.vy] = clampVel(c.mr, c.vx, c.vy);
  return out;
}
// reglas de saltos después del tick (DDRacePostCoreTick)
export function jumpRules(c) {
  if (c.endlessHook) c.hookTick = 0;
  if (c.jumps === -1 || c.jumps === 0) c.jumped |= 2;
  else if (c.jumps === 1 && c.jumped > 0) c.jumped |= 2;
  else if (c.jumpedTotal < c.jumps - 1 && c.jumped > 1) c.jumped = 1;
  if (c.endlessJump && c.jumped > 1) c.jumped = 1;
}
// martillo: a quién le pega y con qué fuerza
export function hammerHits(c, tdx, tdy, others) {
  const sx = c.x + tdx * PHYS * 0.75, sy = c.y + tdy * PHYS * 0.75, hits = [];
  for (const o of others) {
    if (o.solo) continue;
    if (len(o.x - sx, o.y - sy) < PHYS * 0.5 + PHYS * 0.5) {
      let dx = o.x - c.x, dy = o.y - c.y; const l = len(dx, dy);
      if (l > 0) { dx /= l; dy /= l; } else { dx = 0; dy = -1; }
      let nx = dx, ny = dy - 1.1; const nl = len(nx, ny); nx /= nl; ny /= nl;
      hits.push({ id: o.id, fx: nx * 10 * T.HammerStrength, fy: (ny * 10 - 1) * T.HammerStrength });
    }
  }
  return hits;
}
