// Bots (los corre el host): compran, van a los sitios por la grilla de navegación, plantan,
// desactivan, ven con línea de visión (paredes y humo), reaccionan y apuntan según la dificultad.
import { makePlayer, movePlayer, eyeH, PM } from './player.js';
import { findPath, zoneNodes } from './nav.js';
import { WEAPONS, slotOf } from './weapons.js';
import { canSee, inaccuracy, recoilStep, shotDir, traceShot } from './combat.js';
import { zoneAt, blocked } from './world.js';
const U = 0.0254, D2R = Math.PI / 180;

export const DIFF = {
  // react: s antes del primer tiro · turn: °/s · err: error inicial (°) que se va corrigiendo · hs: chance de ir a la cabeza
  // track: error que queda mientras el blanco se mueve · ctrl: control del retroceso
  facil: { react: 0.75, turn: 150, err: 5.5, hs: 0.04, ctrl: 0.2, track: 1.6, settle: 1.1, name: 'Fácil' },
  normal: { react: 0.52, turn: 220, err: 4.0, hs: 0.1, ctrl: 0.42, track: 1.1, settle: 1.5, name: 'Normal' },
  dificil: { react: 0.36, turn: 320, err: 2.8, hs: 0.2, ctrl: 0.62, track: 0.7, settle: 2.0, name: 'Difícil' },
  experto: { react: 0.26, turn: 450, err: 1.9, hs: 0.32, ctrl: 0.8, track: 0.45, settle: 2.6, name: 'Experto' },
};
const rnd = Math.random;
const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };

export function makeBots(G, H) {
  const B = {};
  let plan = { site: 'A' }, senseT = 0;
  const siteNodes = { A: zoneNodes(G.nav, 4), B: zoneNodes(G.nav, 8) };
  B.refreshNav = () => { siteNodes.A = zoneNodes(G.nav, 4); siteNodes.B = zoneNodes(G.nav, 8); };
  const brains = new Map();
  const teams = { T: {}, CT: {} }; const team = p => teams[p.team];
  // punto sobre un camino a cierta distancia del final (para juntarse antes de entrar o mirar la entrada)
  function alongFromEnd(path, back) {
    if (!path || path.length < 2) return null;
    let acc = 0;
    for (let i = path.length - 1; i > 0; i--) { acc += Math.hypot(path[i][0] - path[i - 1][0], path[i][2] - path[i - 1][2]); if (acc >= back) return path[i - 1]; }
    return path[0];
  }
  function along(path, fwd) {
    if (!path || path.length < 2) return null;
    let acc = 0;
    for (let i = 1; i < path.length; i++) { acc += Math.hypot(path[i][0] - path[i - 1][0], path[i][2] - path[i - 1][2]); if (acc >= fwd) return path[i]; }
    return path[path.length - 1];
  }
  const center = list => { const n = G.nav; let x = 0, y = 0, z = 0; for (const id of list) { const q = n.pos(id); x += q[0]; y += q[1]; z += q[2]; } const k = Math.max(1, list.length); return [x / k, y / k, z / k]; };
  B.brain = (p) => {
    let b = brains.get(p.id);
    if (!b) { b = { path: null, pi: 0, goal: null, repath: 0, tgt: null, react: 0, err: [0, 0], fireT: 0, burst: 0, shots: 0, pp: 0, py: 0, strafe: 1, strafeT: 0, stuck: 0, last: [0, 0], buyT: 0, bought: false, hold: null, plantT: 0, lastKnown: null, lkT: 0, blind: 0, mag: {}, reload: 0, look: null, wantScope: false, jumpT: 0 }; brains.set(p.id, b); }
    return b;
  };
  B.reset = () => brains.clear();
  B.roundStart = () => {
    if (B._nav !== G.nav) { B._nav = G.nav; B.refreshNav(); }
    plan.site = G.wingSite || (rnd() < 0.5 ? 'A' : 'B');
    teams.T = {}; teams.CT = {};
    // los T se juntan antes de entrar al sitio; los CT miran hacia la entrada
    const nav = G.nav, sc = { A: center(siteNodes.A), B: center(siteNodes.B) };
    const ts = G.spawns.T, cs = G.spawns.CT;
    for (const k of ['A', 'B']) {
      if (!siteNodes[k].length) continue;
      const pT = findPath(nav, nav.nearest(ts.cx, ts.pts[0] ? ts.pts[0][1] : sc[k][1], ts.cz), nav.nearest(sc[k][0], sc[k][1], sc[k][2]));
      plan['stage' + k] = alongFromEnd(pT, 16 + rnd() * 6);
      const pIn = pT ? pT.slice().reverse() : null; plan['entry' + k] = along(pIn, 14);
      const pC = findPath(nav, nav.nearest(sc[k][0], sc[k][1], sc[k][2]), nav.nearest(cs.cx, cs.pts[0] ? cs.pts[0][1] : sc[k][1], cs.cz)); plan['ctEntry' + k] = along(pC, 14);
    }
    plan.go = false; plan.goT = 18 + rnd() * 22; // segundos de espera máxima antes de entrar
    plan.siteC = sc;
    let ct = 0;
    for (const p of G.players.values()) {
      if (!p.bot) continue;
      const b = B.brain(p);
      Object.assign(b, { path: null, goal: null, goalKind: null, rotated: false, tgt: null, hold: null, plantT: 0, bought: false, buyT: 0.6 + rnd() * 2.2, lastKnown: null, blind: 0, reload: 0, shots: 0, pp: 0, py: 0, mag: {}, look: null });
      b.site = p.team === 'CT' ? (ct++ % 2 === 0 ? 'A' : 'B') : plan.site;
      if (p.team === 'CT' && rnd() < 0.25) b.site = b.site === 'A' ? 'B' : 'A';
      if (G.wingSite) b.site = G.wingSite;
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

  const aliveCount = t => { let n = 0; for (const q of G.players.values()) if (q.team === t && q.alive) n++; return n; };
  function tgtNear(p) { const b = B.brain(p); return !!(b.lastKnown && b.lkT > 3); }
  function weaponOf(p) {
    const inv = p.inv;
    return inv.p || inv.s || 'knife';
  }
  function buyFor(p) {
    const m = () => p.money, T = p.team === 'T';
    const want = [];
    if (m() >= 4750 + 1000 && rnd() < 0.18) want.push('awp');
    else if (m() >= 3700) want.push(T ? 'ak47' : 'm4a4');
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
          if (b.tgt !== best.id) {
            // reacciona más lento si el enemigo aparece de costado o de lejos, y arranca con la mira desviada
            const dx = best.x - pl.x, dz = best.z - pl.z, side = Math.abs(angDiff(Math.atan2(-dx, -dz), pl.yaw));
            b.tgt = best.id; b.react = D.react * (0.8 + rnd() * 0.6) * (1 + side * 0.5) + Math.min(0.25, bd / 160);
            const e = D.err * D2R * (1 + side * 0.6);
            b.err = [(rnd() < 0.5 ? -1 : 1) * e * (0.6 + rnd() * 0.8), (rnd() - 0.35) * e * 0.8]; b.head = rnd() < D.hs;
            // avisa al equipo dónde vio al enemigo
            const z = zoneAt(G.W, best.x, best.z); if (z & 4) team(p).seen = { site: 'A', t: 8 }; else if (z & 8) team(p).seen = { site: 'B', t: 8 };
          }
          b.lastKnown = [best.x, best.y, best.z]; b.lkT = 5;
        } else if (b.tgt) { b.tgt = null; }
      }
      if (b.blind > 0) b.tgt = null;
      const tgt = b.tgt ? G.players.get(b.tgt) : null;
      let mvx = 0, mvz = 0, walk = false, crouch = false;
      // ---------- combate ----------
      if (tgt && tgt.alive) {
        const ex = pl.x, ey = pl.y + eyeH(pl), ez = pl.z;
        const hy = tgt.y + (b.head ? tgt.h - 0.12 : tgt.h * 0.6);
        const dx = tgt.x - ex, dy = hy - ey, dz = tgt.z - ez, dist = Math.hypot(dx, dz);
        // si el blanco se mueve de costado, la mira se queda un poco atrás
        const lat = ((tgt.vx || 0) * dz - (tgt.vz || 0) * dx) / Math.max(1, dist);
        const lag = Math.max(-0.08, Math.min(0.08, -lat / Math.max(4, dist) * D.track * 0.35));
        const wantYaw = Math.atan2(-dx, -dz) + b.err[0] + lag, wantPitch = Math.atan2(dy, dist) + b.err[1];
        b.err[0] *= Math.max(0, 1 - dt * D.settle); b.err[1] *= Math.max(0, 1 - dt * D.settle);
        // poca vida: retrocede mientras pelea
        b.rcyc = (b.rcyc || 0) + dt; b.retreat = p.hp < 35 && dist < 25 && (b.rcyc % 1.5) < 0.55;
        turn(pl, wantYaw, wantPitch, D.turn * D2R * dt);
        b.react -= dt;
        const off = Math.hypot(angDiff(pl.yaw, wantYaw - b.err[0]), pl.pitch - (wantPitch - b.err[1]));
        // moverse: rifles frenan para tirar, de cerca se mueven de costado
        b.strafeT -= dt; if (b.strafeT <= 0) { b.strafeT = 0.4 + rnd() * 0.8; b.strafe = rnd() < 0.5 ? -1 : 1; }
        const stopToShoot = w.cat === 'rifle' || w.cat === 'sniper' || w.cat === 'heavy' && w.pellets === 1 || dist > 14;
        if (!stopToShoot || b.reload > 0) { const r = [Math.cos(pl.yaw), -Math.sin(pl.yaw)]; mvx = r[0] * b.strafe; mvz = r[1] * b.strafe; }
        if (b.reload > 0 || b.retreat) { mvx += Math.sin(pl.yaw) * 0.8; mvz += Math.cos(pl.yaw) * 0.8; } // atrás, a cubrirse
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
        // los T esperan juntos antes de entrar (o entran si se acaba el tiempo / ya hay pelea en el sitio)
        if (p.team === 'T' && live && !plan.go) {
          plan.goT -= dt / Math.max(1, aliveCount('T'));
          const st = plan['stage' + b.site];
          if (!st || plan.goT <= 0 || G.timeLeft < 60) plan.go = true;
          else {
            let near = 0, n = 0; for (const q of G.players.values()) if (q.team === 'T' && q.alive) { n++; if (Math.hypot(q.x - st[0], q.z - st[2]) < 9) near++; }
            if (n && near >= Math.ceil(n * 0.75)) plan.go = true;
          }
        }
        const seen = team(p).seen; if (seen) { seen.t -= dt / Math.max(1, aliveCount(p.team)); if (seen.t <= 0) team(p).seen = null; }
        if (p.team === 'T') {
          const st = plan['stage' + b.site];
          if (bomb.state === 'dropped') { if (b.goalKind !== 'bomb' || b.repath <= 0) { goal = [bomb.x, bomb.y, bomb.z]; b.goalKind = 'bomb'; } if (Math.hypot(pl.x - bomb.x, pl.z - bomb.z) < 1.2) H.handle('take', { id: 'c4' }, p.id); }
          else if (bomb.state === 'planted') {
            // post-plant: cubrir la bomba desde distintos ángulos mirando por donde llegan los CT
            if (b.goalKind !== 'post') { const a = rnd() * 6.28, r = 5 + rnd() * 7; goal = [bomb.x + Math.cos(a) * r, bomb.y, bomb.z + Math.sin(a) * r]; b.goalKind = 'post'; b.look = plan['ctEntry' + (zoneAt(G.W, bomb.x, bomb.z) & 8 ? 'B' : 'A')] || [bomb.x, bomb.y, bomb.z]; }
          } else if (!plan.go && st) {
            if (b.goalKind !== 'stage') { goal = [st[0] + (rnd() - 0.5) * 5, st[1], st[2] + (rnd() - 0.5) * 5]; b.goalKind = 'stage'; b.look = plan.siteC[b.site]; }
          } else if (p.inv.c4) {
            const inSite = zoneAt(G.W, pl.x, pl.z) & 12;
            if (inSite && live && pl.onGround && !tgtNear(p)) {
              b.plantT += dt; stay = true; G.setPlanting(p.id, b.plantT);
              if (b.plantT >= 3.2) { b.plantT = 0; G.setPlanting(p.id, 0); H.handle('plant', { x: pl.x, y: pl.y, z: pl.z }, p.id); }
            } else { b.plantT = 0; if (!b.goal || b.goalKind !== 'site') { goal = randNode(siteNodes[b.site]); b.goalKind = 'site'; } }
          } else if (!b.goal || b.goalKind !== 'site') { goal = randNode(siteNodes[b.site]); b.goalKind = 'site'; b.look = null; }
        } else {
          if (bomb.state === 'planted') {
            const d = Math.hypot(pl.x - bomb.x, pl.z - bomb.z);
            if (d < 1.1) { stay = true; crouch = true; H.botDefuse(p); b.look = [bomb.x, bomb.y, bomb.z]; }
            else if (b.goalKind !== 'defuse' || b.repath <= 0) { goal = [bomb.x, bomb.y, bomb.z]; b.goalKind = 'defuse'; }
          } else if (seen && seen.site !== b.site && !b.rotated && rnd() < 0.6) {
            // rotar al sitio donde un compañero vio a los T (no todos: alguno se queda)
            b.rotated = true; if (aliveCount('CT') > 1 && rnd() < 0.7) { b.site = seen.site; b.goal = null; b.goalKind = null; }
          } else if (!b.goal || b.goalKind !== 'hold') { goal = randNode(siteNodes[b.site]); b.goalKind = 'hold'; b.look = plan['entry' + b.site] || null; }
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
          // en posición: agachado de vez en cuando, mirando la entrada por donde vienen los T
          if (!b.look) { const t = G.spawns.T; b.look = [t.cx, pl.y + 1.5, t.cz]; }
          b.crouchT = (b.crouchT || 0) + dt; crouch = (b.crouchT % 9) > 6;
          if (rnd() < dt * 0.03) b.goal = null; // cada tanto se reubica
        } else if (!stay && b.goalKind === 'site' && b.path && b.pi >= b.path.length) { b.goal = null; }
        else if (!stay && (b.goalKind === 'stage' || b.goalKind === 'post') && b.path && b.pi >= b.path.length) { /* esperar mirando */ }
        // mirada: a lo último conocido, o hacia donde camina
        let ly = null, lp = 0;
        if (b.lastKnown && b.lkT > 0) { const k = b.lastKnown; ly = Math.atan2(-(k[0] - pl.x), -(k[2] - pl.z)); lp = Math.atan2(k[1] + 1.4 - pl.y - eyeH(pl), Math.hypot(k[0] - pl.x, k[2] - pl.z)); }
        else if ((mvx || mvz) && !(b.goalKind === 'hold' && b.look && b.path && b.pi >= b.path.length - 3)) { ly = Math.atan2(-mvx, -mvz); }
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
    { const L = Math.hypot(inp.f, inp.s); if (L > 1) { inp.f /= L; inp.s /= L; } }
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
      if (b.shots % maxBurst === 0) { b.fireT = iv + 0.25 + rnd() * 0.3 * (2 - D.ctrl); b.shots = 0; reaim(b, D); } else b.fireT = iv;
    } else { b.fireT = Math.max(iv, w.cat === 'pistol' ? 0.22 + rnd() * 0.25 : iv); if (w.cat !== 'sniper') reaim(b, D, 0.5); }
  }
  // entre ráfagas la mira se vuelve a desacomodar un poco (nadie es un aimbot)
  function reaim(b, D, k = 1) { const e = D.err * D2R * 0.45 * k; b.err[0] += (rnd() - 0.5) * 2 * e; b.err[1] += (rnd() - 0.4) * e; b.head = rnd() < D.hs; }
  return B;
}
