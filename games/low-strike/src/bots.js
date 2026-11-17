// Bots (los corre el host): compran, van a los sitios por la grilla de navegación, plantan,
// desactivan, ven con línea de visión (paredes y humo), reaccionan y apuntan según la dificultad.
import { makePlayer, movePlayer, eyeH, PM } from './player.js';
import { findPath, zoneNodes } from './nav.js';
import { WEAPONS, slotOf } from './weapons.js';
import { canSee, inaccuracy, recoilStep, shotDir, traceShot } from './combat.js';
import { zoneAt, blocked } from './world.js';
const U = 0.0254, D2R = Math.PI / 180;

export const DIFF = {
  facil: { react: 0.62, turn: 170, err: 3.6, hs: 0.15, ctrl: 0.25, name: 'Fácil' },
  normal: { react: 0.4, turn: 290, err: 2.1, hs: 0.3, ctrl: 0.5, name: 'Normal' },
  dificil: { react: 0.26, turn: 430, err: 1.25, hs: 0.45, ctrl: 0.75, name: 'Difícil' },
  experto: { react: 0.17, turn: 620, err: 0.65, hs: 0.6, ctrl: 0.9, name: 'Experto' },
};
const rnd = Math.random;
const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };

export function makeBots(G, H) {
  const B = {};
  let plan = { site: 'A' }, senseT = 0;
  const siteNodes = { A: zoneNodes(G.nav, 4), B: zoneNodes(G.nav, 8) };
  const brains = new Map();
  B.brain = (p) => {
    let b = brains.get(p.id);
    if (!b) { b = { path: null, pi: 0, goal: null, repath: 0, tgt: null, react: 0, err: [0, 0], fireT: 0, burst: 0, shots: 0, pp: 0, py: 0, strafe: 1, strafeT: 0, stuck: 0, last: [0, 0], buyT: 0, bought: false, hold: null, plantT: 0, lastKnown: null, lkT: 0, blind: 0, mag: {}, reload: 0, look: null, wantScope: false, jumpT: 0 }; brains.set(p.id, b); }
    return b;
  };
  B.reset = () => brains.clear();
  B.roundStart = () => {
    plan.site = rnd() < 0.5 ? 'A' : 'B';
    let ct = 0;
    for (const p of G.players.values()) {
      if (!p.bot) continue;
      const b = B.brain(p);
      Object.assign(b, { path: null, goal: null, tgt: null, hold: null, plantT: 0, bought: false, buyT: 0.6 + rnd() * 2.2, lastKnown: null, blind: 0, reload: 0, shots: 0, pp: 0, py: 0, mag: {}, look: null });
      b.site = p.team === 'CT' ? (ct++ % 2 === 0 ? 'A' : 'B') : plan.site;
      if (p.team === 'CT' && rnd() < 0.25) b.site = b.site === 'A' ? 'B' : 'A';
    }
  };
  B.place = (p, pos) => {
    p.pl = makePlayer(pos[0], pos[1], pos[2], pos[3]);
    p.pl.pitch = 0;
  };
  // los bots escuchan disparos
  B.heard = (x, y, z, team, loud) => {
    for (const p of G.players.values()) {
      if (!p.bot || !p.alive || p.team === team || !p.pl) continue;
      const d = Math.hypot(p.pl.x - x, p.pl.z - z);
      if (d < (loud ? 40 : 14)) { const b = B.brain(p); if (!b.tgt) { b.lastKnown = [x, y, z]; b.lkT = 4; } }
    }
  };
  B.flash = (p, t) => { const b = B.brain(p); b.blind = Math.max(b.blind, t); };

  function weaponOf(p) {
    const inv = p.inv;
    return inv.p || inv.s || 'knife';
  }
  function buyFor(p) {
    const m = () => p.money, T = p.team === 'T';
    const want = [];
    if (m() >= 4750 + 1000 && rnd() < 0.18) want.push('awp');
    else if (m() >= 3700) want.push(T ? 'ak47' : (rnd() < 0.5 ? 'm4a4' : 'm4a1s'));
    else if (m() >= 2900) want.push(T ? 'galil' : 'famas');
    else if (m() >= 1850 && G.round > 1) want.push(T ? 'mac10' : 'mp9');
    for (const w of want) H.buy(p, w);
    if (m() >= 1000) H.buy(p, 'vesthelm'); else if (m() >= 650 && (G.round === 1 || G.round === LEN_HALF() + 1 || rnd() < 0.5)) H.buy(p, 'vest');
    if (!T && m() >= 400 && rnd() < 0.6) H.buy(p, 'defuser');
    if (G.round === 1 && m() >= 500 && !p.inv.p && rnd() < 0.3) H.buy(p, T ? 'tec9' : 'fiveseven');
  }
  const LEN_HALF = () => ({ rapida: 4, corta: 8, comp: 12 })[G.cfg.len];

  function goTo(p, b, x, y, z) {
    const nav = G.nav, pl = p.pl;
    const from = nav.nearest(pl.x, pl.y, pl.z), to = nav.nearest(x, y, z);
    b.path = findPath(nav, from, to); b.pi = 1; b.goal = [x, y, z]; b.repath = 6 + rnd() * 2;
    if (!b.path) b.repath = 1.5 + rnd();
  }
  const randNode = (list) => G.nav.pos(list[Math.floor(rnd() * list.length)]);

  B.tick = (dt) => {
    const D = DIFF[G.cfg.diff] || DIFF.normal;
    senseT -= dt;
    const sense = senseT <= 0; if (sense) senseT = 0.1;
    const live = G.phase === 'live', frozen = G.phase === 'freeze';
    for (const p of G.players.values()) {
      if (!p.bot || !p.pl) continue;
      const b = B.brain(p), pl = p.pl;
      if (!p.alive) { continue; }
      const wid = weaponOf(p), w = WEAPONS[wid];
      if (b.mag[wid] === undefined) b.mag[wid] = w.mag || 0;
      b.blind = Math.max(0, b.blind - dt); b.fireT -= dt; b.lkT -= dt; b.repath -= dt; b.jumpT -= dt;
      if (b.reload > 0) { b.reload -= dt; if (b.reload <= 0) b.mag[wid] = w.mag; }
      if (frozen) {
        b.buyT -= dt; if (b.buyT <= 0 && !b.bought) { b.bought = true; buyFor(p); }
        moveBot(p, b, 0, 0, false, dt, w); continue;
      }
      // ---------- percepción ----------
      if (sense && b.blind <= 0) {
        const eye = [pl.x, pl.y + eyeH(pl), pl.z];
        let best = null, bd = 1e9;
        for (const q of G.players.values()) {
          if (!q.alive || q.team === p.team) continue;
          const dx = q.x - pl.x, dz = q.z - pl.z, d = Math.hypot(dx, dz);
          if (d > 90) continue;
          const ang = Math.abs(angDiff(Math.atan2(-dx, -dz), pl.yaw));
          const known = b.tgt === q.id;
          if (ang > (known ? 2.6 : 1.45) && d > 2.5) continue;
          if (!canSee(G.W, G.nades, eye, [q.x, q.y, q.z, q.h / PM.hStand])) continue;
          const score = d * (known ? 0.6 : 1);
          if (score < bd) { bd = score; best = q; }
        }
        if (best) {
          if (b.tgt !== best.id) { b.tgt = best.id; b.react = D.react * (0.8 + rnd() * 0.5); b.err = [(rnd() - 0.5) * 2 * D.err * D2R * 3, (rnd() - 0.5) * 2 * D.err * D2R * 2]; b.head = rnd() < D.hs; }
          b.lastKnown = [best.x, best.y, best.z]; b.lkT = 5;
        } else if (b.tgt) { b.tgt = null; }
      }
      if (b.blind > 0) b.tgt = null;
      const tgt = b.tgt ? G.players.get(b.tgt) : null;
      let mvx = 0, mvz = 0, walk = false, crouch = false;
      // ---------- combate ----------
      if (tgt && tgt.alive) {
        const ex = pl.x, ey = pl.y + eyeH(pl), ez = pl.z;
        const hy = tgt.y + (b.head ? tgt.h - 0.12 : tgt.h * 0.68);
        const dx = tgt.x - ex, dy = hy - ey, dz = tgt.z - ez, dist = Math.hypot(dx, dz);
        const wantYaw = Math.atan2(-dx, -dz) + b.err[0], wantPitch = Math.atan2(dy, dist) + b.err[1];
        b.err[0] *= Math.max(0, 1 - dt * 2.2); b.err[1] *= Math.max(0, 1 - dt * 2.2);
        turn(pl, wantYaw, wantPitch, D.turn * D2R * dt);
        b.react -= dt;
        const off = Math.hypot(angDiff(pl.yaw, wantYaw - b.err[0]), pl.pitch - (wantPitch - b.err[1]));
        // moverse: rifles frenan para tirar, de cerca se mueven de costado
        b.strafeT -= dt; if (b.strafeT <= 0) { b.strafeT = 0.4 + rnd() * 0.8; b.strafe = rnd() < 0.5 ? -1 : 1; }
        const stopToShoot = w.cat === 'rifle' || w.cat === 'sniper' || w.cat === 'heavy' && w.pellets === 1 || dist > 14;
        if (!stopToShoot || b.reload > 0) { const r = [Math.cos(pl.yaw), -Math.sin(pl.yaw)]; mvx = r[0] * b.strafe; mvz = r[1] * b.strafe; }
        if (w.cat === 'sniper') b.wantScope = true;
        const sp = Math.hypot(pl.vx, pl.vz);
        const ready = b.react <= 0 && off < Math.max(0.02, 0.6 / Math.max(3, dist)) + 0.03 && b.reload <= 0;
        if (ready && b.fireT <= 0 && (stopToShoot ? sp < w.speed * U * 0.4 || dist < 6 : true)) {
          if (b.mag[wid] <= 0 && w.mag) { b.reload = w.reload; b.shots = 0; }
          else fire(p, b, w, wid, D, dist);
        }
        if (b.reload <= 0 && b.mag[wid] <= 0 && w.mag) { b.reload = w.reload; b.shots = 0; }
      } else {
        b.wantScope = false;
        if (b.shots && b.fireT < -0.35) { b.shots = 0; }
        // recargar si hace falta y no hay nadie
        if (w.mag && b.mag[wid] < w.mag * 0.4 && b.reload <= 0) { b.reload = w.reload; }
        // ---------- objetivos ----------
        const bomb = G.bomb;
        let goal = null, stay = false;
        if (p.team === 'T') {
          if (p.inv.c4) {
            const inSite = zoneAt(G.W, pl.x, pl.z) & 12;
            if (inSite && live && pl.onGround) {
              b.plantT += dt; stay = true; G.setPlanting(p.id, b.plantT);
              if (b.plantT >= 3.2) { b.plantT = 0; G.setPlanting(p.id, 0); H.handle('plant', { x: pl.x, y: pl.y, z: pl.z }, p.id); }
            } else { b.plantT = 0; if (!b.goal || b.goalKind !== 'site') { const n = randNode(siteNodes[b.site]); goal = n; b.goalKind = 'site'; } }
          } else if (bomb.state === 'dropped') { if (b.goalKind !== 'bomb' || b.repath <= 0) { goal = [bomb.x, bomb.y, bomb.z]; b.goalKind = 'bomb'; } if (Math.hypot(pl.x - bomb.x, pl.z - bomb.z) < 1.2) H.handle('take', { id: 'c4' }, p.id); }
          else if (bomb.state === 'planted') { if (b.goalKind !== 'post') { goal = [bomb.x + (rnd() - 0.5) * 10, bomb.y, bomb.z + (rnd() - 0.5) * 10]; b.goalKind = 'post'; } }
          else if (!b.goal || b.goalKind !== 'site') { goal = randNode(siteNodes[b.site]); b.goalKind = 'site'; }
        } else {
          if (bomb.state === 'planted') {
            const d = Math.hypot(pl.x - bomb.x, pl.z - bomb.z);
            if (d < 1.1) { stay = true; crouch = true; H.botDefuse(p); b.look = [bomb.x, bomb.y, bomb.z]; }
            else if (b.goalKind !== 'defuse' || b.repath <= 0) { goal = [bomb.x, bomb.y, bomb.z]; b.goalKind = 'defuse'; }
          } else if (!b.goal || b.goalKind !== 'hold') { goal = randNode(siteNodes[b.site]); b.goalKind = 'hold'; }
        }
        if (!goal && b.goal && !b.path && b.repath <= 0) b.goal = null;
        if (goal) goTo(p, b, goal[0], goal[1], goal[2]);
        // seguir el camino
        if (!stay && b.path && b.pi < b.path.length) {
          const wp = b.path[b.pi];
          const dx = wp[0] - pl.x, dz = wp[2] - pl.z, d = Math.hypot(dx, dz);
          if (d < 0.55) b.pi++;
          else { mvx = dx / d; mvz = dz / d; if (wp[1] - pl.y > 0.45 && d < 1.6 && b.jumpT <= 0) { b.jump = true; b.jumpT = 0.8; } }
          // atascado
          const moved = Math.hypot(pl.x - b.last[0], pl.z - b.last[1]);
          b.stuck = moved < dt * 0.6 ? b.stuck + dt : 0; b.last = [pl.x, pl.z];
          if (b.stuck > 0.6) { b.jump = true; if (b.stuck > 1.6) { b.stuck = 0; b.goal = null; b.path = null; } }
        } else if (!stay && b.goalKind === 'hold' && b.path && b.pi >= b.path.length) {
          // en posición: mirar hacia donde vienen los T
          if (!b.look) { const t = G.spawns.T; b.look = [t.cx, pl.y + 1.5, t.cz]; }
          if (rnd() < dt * 0.05) b.goal = null; // cada tanto se reubica
        } else if (!stay && b.goalKind === 'site' && b.path && b.pi >= b.path.length) { b.goal = null; }
        // mirada: a lo último conocido, o hacia donde camina
        let ly = null, lp = 0;
        if (b.lastKnown && b.lkT > 0) { const k = b.lastKnown; ly = Math.atan2(-(k[0] - pl.x), -(k[2] - pl.z)); lp = Math.atan2(k[1] + 1.4 - pl.y - eyeH(pl), Math.hypot(k[0] - pl.x, k[2] - pl.z)); }
        else if (mvx || mvz) { ly = Math.atan2(-mvx, -mvz); }
        else if (b.look) { ly = Math.atan2(-(b.look[0] - pl.x), -(b.look[2] - pl.z)); }
        if (ly !== null) turn(pl, ly, lp, D.turn * 0.55 * D2R * dt);
      }
      // retroceso se recupera
      const rec = (w.recover || 9) * dt;
      b.pp = Math.max(0, b.pp - rec * (b.fireT < -0.05 ? 1 : 0.3)); b.py *= Math.max(0, 1 - dt * 4);
      walk = !!tgt && w.cat !== 'knife';
      moveBot(p, b, mvx, mvz, walk, dt, w, crouch);
    }
  };
  function turn(pl, yaw, pitch, maxStep) {
    const dy = angDiff(yaw, pl.yaw); pl.yaw += Math.max(-maxStep, Math.min(maxStep, dy));
    const dp = pitch - pl.pitch; pl.pitch += Math.max(-maxStep, Math.min(maxStep, dp));
    pl.pitch = Math.max(-1.45, Math.min(1.45, pl.pitch));
  }
  function moveBot(p, b, mx, mz, walk, dt, w, crouch = false) {
    const pl = p.pl, fx = -Math.sin(pl.yaw), fz = -Math.cos(pl.yaw), rx = Math.cos(pl.yaw), rz = -Math.sin(pl.yaw);
    const inp = { f: mx * fx + mz * fz, s: mx * rx + mz * rz, jump: !!b.jump, crouch, walk };
    b.jump = false;
    const frozen = G.phase === 'freeze' || G.planting(p.id) > 0 || H.isDefusing(p.id);
    if (frozen) { inp.f = inp.s = 0; inp.jump = false; }
    const max = w.speed * U * (b.wantScope && w.cat === 'sniper' ? 0.42 : 1);
    let t = dt; while (t > 1e-6) { const h = Math.min(t, 1 / 90); const fall = movePlayer(G.W, pl, inp, h, max); if (fall) G.fallDamage(p, fall); t -= h; }
    if (pl.y < -20 && p.alive) H.damage(p.id, p.id, 999, 'chest', 'world', { raw: true });
    // separarse de los demás jugadores
    for (const q of G.players.values()) {
      if (q === p || !q.alive || Math.abs(q.y - pl.y) > 1.6) continue;
      const dx = pl.x - q.x, dz = pl.z - q.z, d = Math.hypot(dx, dz);
      if (d < 0.62) { const k = d > 1e-4 ? (0.62 - d) / d * 0.5 : 0; const nx = pl.x + (d > 1e-4 ? dx * k : 0.05), nz = pl.z + (d > 1e-4 ? dz * k : 0.03); if (!blocked(G.W, nx, nz, pl.y, pl.h, PM.r)) { pl.x = nx; pl.z = nz; } }
    }
    p.x = pl.x; p.y = pl.y; p.z = pl.z; p.yaw = pl.yaw; p.pitch = pl.pitch; p.duck = pl.duck; p.h = pl.h; p.vx = pl.vx; p.vz = pl.vz; p.onGround = pl.onGround;
    p.wpn = p.inv.c4 && b.plantT > 0 ? 'c4' : weaponOf(p); p.scoped = b.wantScope && w.cat === 'sniper';
  }
  function fire(p, b, w, wid, D, dist) {
    const pl = p.pl;
    const st = { speed: Math.hypot(pl.vx, pl.vz), onGround: pl.onGround, duck: pl.duck, scoped: p.scoped, shots: b.shots };
    const inacc = inaccuracy(w, st);
    const [rp, ry] = recoilStep(w, b.shots, rnd);
    const eye = [pl.x, pl.y + eyeH(pl), pl.z];
    G.fireBullets(p.id, wid, eye, (r) => shotDir(pl.yaw, pl.pitch, b.pp * (1 - D.ctrl * 0.85), b.py * (1 - D.ctrl * 0.85), inacc, r));
    b.pp = Math.min(w.kickCap || 12, b.pp + rp); b.py += ry;
    b.shots++;
    if (w.mag) b.mag[wid]--;
    const iv = 60 / w.rpm;
    // ráfagas cortas de lejos, más largas de cerca
    if (w.auto) {
      const maxBurst = dist > 25 ? 2 : dist > 12 ? 4 : 8;
      if (b.shots % maxBurst === 0) b.fireT = iv + 0.25 + rnd() * 0.25 * (2 - D.ctrl); else b.fireT = iv;
      if (b.shots % maxBurst === 0) b.shots = 0;
    } else b.fireT = Math.max(iv, w.cat === 'pistol' ? 0.2 + rnd() * 0.2 : iv);
  }
  return B;
}
