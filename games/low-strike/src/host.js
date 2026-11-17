// Reglas del juego (las corre el host): rondas, economía de CS2, daño, muertes, bomba, compras y armas tiradas.
import { WEAPONS, ECON, applyDamage, slotOf } from './weapons.js';
import { zoneNodes } from './nav.js';
import { NADE, inFire } from './nades.js';
import { zoneAt } from './world.js';

export const ROUND = { freeze: 12, live: 115, buy: 20, post: 6, bomb: 40, plant: 3.2, defuse: 10, kit: 5, over: 10 };
export const LENGTHS = { rapida: { win: 5, max: 8, name: 'Rápida' }, corta: { win: 9, max: 16, name: 'Corta' }, comp: { win: 13, max: 24, name: 'Competitiva' } };
const BOTN = ['Toto', 'Lalo', 'Pipo', 'Chino', 'Fede', 'Nacho', 'Rulo', 'Coco', 'Tincho', 'Beto', 'Pato', 'Quique'];
export const sideOf = (grp, half) => ((grp ^ half) === 0 ? 'T' : 'CT');
const defPistol = t => (t === 'T' ? 'glock' : 'usp');

export function makeHost(G) {
  const H = {};
  let dirty = true, stT = 0, lossStreak = [1, 1], plantedBy = null, defusing = new Map(), fireTick = 0, overT = 0, ended = false;
  let dropSeq = 1;

  // ---------- armado ----------
  H.setup = (humans) => {
    G.players.clear();
    const cfg = G.cfg;
    // equipos: preferencia de cada uno; "auto" equilibra
    const cnt = [0, 0];
    const list = humans.slice().sort((a, b) => a.slot - b.slot);
    for (const h of list) if (h.pref === 0 || h.pref === 1) cnt[h.pref]++;
    for (const h of list) {
      let g = h.pref;
      if (g !== 0 && g !== 1) { g = cnt[0] <= cnt[1] ? 0 : 1; cnt[g]++; }
      const P = mkP(h.id, h.name, false, g); P.skT = 0; P.skCT = 0; P.fin = 0; G.players.set(h.id, P);
    }
    const per = cfg.bots ? Math.max(cnt[0], cnt[1], cfg.size || 5) : 0;
    let bi = 0;
    for (let g = 0; g < 2; g++) for (let k = cnt[g]; k < per; k++) {
      const id = 'bot' + (bi++);
      const P = mkP(id, BOTN[bi % BOTN.length] + ' (bot)', true, g); P.skT = 0; P.skCT = 0; P.fin = 0; G.players.set(id, P);
    }
    G.round = 0; G.score = [0, 0]; G.half = 0; lossStreak = [1, 1]; ended = false;
    for (const p of G.players.values()) p.team = sideOf(p.grp, 0);
    G.spawns = { T: spawnPoints('T'), CT: spawnPoints('CT') };
  };
  function mkP(id, name, bot, grp) {
    return { id, name, bot, grp, team: 'T', x: 0, y: 0, z: 0, yaw: 0, pitch: 0, vx: 0, vz: 0, duck: 0, hp: 100, ar: 0, helm: false, money: ECON.start, alive: false, k: 0, d: 0, a: 0, mvp: 0, dmgR: 0,
      inv: { p: null, s: null, g: [], c4: false, kit: false, zeus: false, v: 1, pa: null, sa: null }, god: false };
  }
  function spawnPoints(side) {
    const nav = G.nav, nodes = zoneNodes(nav, side === 'T' ? 16 : 32);
    let cx = 0, cz = 0; const P = nodes.map(n => nav.pos(n));
    for (const p of P) { cx += p[0]; cz += p[2]; } cx /= P.length; cz /= P.length;
    P.sort((a, b) => Math.hypot(a[0] - cx, a[2] - cz) - Math.hypot(b[0] - cx, b[2] - cz));
    const out = [];
    for (const p of P) { if (out.every(q => Math.hypot(q[0] - p[0], q[2] - p[2]) > 1.5)) out.push(p); if (out.length >= 12) break; }
    // mirar hacia el centro de los sitios
    const z = G.info.zones, c = G.W.cell;
    const tx = ((z.A[0] + z.A[2]) / 2 + (z.B[0] + z.B[2]) / 2) / 2 * c, tz = ((z.A[1] + z.A[3]) / 2 + (z.B[1] + z.B[3]) / 2) / 2 * c;
    const ox = side === 'T' ? tx : (z.T[0] + z.T[2]) / 2 * c, oz = side === 'T' ? tz : (z.T[1] + z.T[3]) / 2 * c;
    return { pts: out.map(p => [p[0], p[1], p[2], Math.atan2(-(ox - p[0]), -(oz - p[2]))]), cx, cz };
  }
  H.adopt = () => { G.spawns = { T: spawnPoints('T'), CT: spawnPoints('CT') }; };
  H.buyZone = (p) => { const s = G.spawns[p.team]; return Math.hypot(p.x - s.cx, p.z - s.cz) < 22 || (zoneAt(G.W, p.x, p.z) & (p.team === 'T' ? 16 : 32)); };
  H.canBuyTime = () => G.phase === 'freeze' || (G.phase === 'live' && ROUND.live - G.timeLeft < ROUND.buy && G.bomb.state !== 'planted');

  // ---------- rondas ----------
  H.startMatch = () => { G.phase = 'freeze'; newRound(true); };
  function newRound(first) {
    G.round++;
    G.phase = 'freeze'; G.timeLeft = ROUND.freeze;
    G.drops.clear(); G.nades.length = 0; defusing.clear(); plantedBy = null;
    G.bomb = { state: 'carried', carrier: null, x: 0, y: 0, z: 0, t: 0 };
    const spawnsUsed = { T: 0, CT: 0 }, pos = {};
    const plist = [...G.players.values()].sort(() => Math.random() - 0.5);
    for (const p of plist) {
      p.team = sideOf(p.grp, G.half);
      if (!p.alive || first) { // murió o arranca: equipo base
        p.inv = { p: null, s: defPistol(p.team), g: [], c4: false, kit: false, zeus: false, v: (p.inv.v || 0) + 1, pa: null, sa: null };
        if (!p.alive && !first) { p.ar = 0; p.helm = false; }
        if (first) { p.ar = 0; p.helm = false; }
      } else { p.inv.c4 = false; if (p.team === 'T') p.inv.kit = false; p.inv.pa = p.inv.sa = null; p.inv.v++; }
      p.hp = 100; p.alive = true; p.dmgR = 0; p.dmgBy = {};
      const sp = G.spawns[p.team].pts, k = spawnsUsed[p.team]++ % sp.length;
      pos[p.id] = sp[k];
    }
    const ts = plist.filter(p => p.team === 'T');
    if (ts.length) { const c = ts[Math.floor(Math.random() * ts.length)]; c.inv.c4 = true; G.bomb.carrier = c.id; }
    dirty = true;
    G.emit('rs', { pos, round: G.round });
    G.emit('st', H.snapshot());
  }
  function endRound(win, reason) {
    if (G.phase !== 'live' && G.phase !== 'freeze') return;
    G.phase = 'post'; G.timeLeft = ROUND.post;
    const wg = [...G.players.values()].find(p => p.team === win)?.grp ?? (win === sideOf(0, G.half) ? 0 : 1);
    G.score[wg]++;
    const reward = reason === 'bomb' ? ECON.winBombT : reason === 'defuse' ? ECON.winDefuse : reason === 'time' ? ECON.winTime : ECON.winElim;
    const lg = 1 - wg;
    lossStreak[lg] = Math.min(5, lossStreak[lg] + 1); lossStreak[wg] = Math.max(0, lossStreak[wg] - 1);
    const lossMoney = ECON.loss[Math.max(0, lossStreak[lg] - 1)];
    for (const p of G.players.values()) {
      if (p.grp === wg) addMoney(p, reward);
      else {
        // los T que sobreviven cuando se acaba el tiempo no cobran
        if (reason === 'time' && p.team === 'T' && p.alive) continue;
        addMoney(p, lossMoney + (p.team === 'T' && G.bomb.state === 'defused' ? ECON.plantBonus : 0));
      }
    }
    // MVP: el que más mató / plantó / desactivó
    let mvp = null, best = -1;
    for (const p of G.players.values()) if (p.grp === wg) { const s = (p.rk || 0) * 10 + p.dmgR / 100 + (p.id === plantedBy && reason === 'bomb' ? 30 : 0) + (p.defused ? 30 : 0); if (s > best) { best = s; mvp = p; } }
    if (mvp) mvp.mvp++;
    for (const p of G.players.values()) { p.rk = 0; p.defused = false; }
    dirty = true;
    G.emit('ev', { t: 'end', win, reason, score: G.score.slice(), mvp: mvp && mvp.id, loss: lossMoney });
  }
  function afterPost() {
    const L = LENGTHS[G.cfg.len];
    const over = G.score[0] >= L.win || G.score[1] >= L.win || G.round >= L.max;
    if (over) {
      G.phase = 'over'; G.timeLeft = ROUND.over; overT = ROUND.over;
      const wg = G.score[0] > G.score[1] ? 0 : G.score[1] > G.score[0] ? 1 : -1;
      G.emit('ev', { t: 'over', wg, score: G.score.slice() });
      dirty = true;
      // con setTimeout (rAF se pausa en segundo plano)
      setTimeout(() => {
        if (ended) return; ended = true;
        const winners = [...G.players.values()].filter(p => !p.bot && (wg < 0 || p.grp === wg)).map(p => p.id);
        const txt = wg < 0 ? 'Empate ' + G.score.join(' – ') : '👑 Ganan ' + nameOfGroup(wg) + ' ' + Math.max(...G.score) + ' – ' + Math.min(...G.score);
        G.end(winners, txt);
      }, ROUND.over * 1000);
      return;
    }
    if (G.round === L.max / 2) { // cambio de lado
      G.half = 1;
      lossStreak = [1, 1];
      for (const p of G.players.values()) { p.money = ECON.start; p.alive = false; p.ar = 0; p.helm = false; }
      G.emit('ev', { t: 'half' });
      newRound(true);
      return;
    }
    newRound(false);
  }
  const nameOfGroup = g => { const hs = [...G.players.values()].filter(p => p.grp === g && !p.bot).map(p => p.name); return hs.length ? hs.slice(0, 3).join(', ') : (sideOf(g, G.half) === 'T' ? 'los Terroristas' : 'los Contraterroristas'); };
  function addMoney(p, v) { p.money = Math.max(0, Math.min(ECON.max, p.money + v)); }

  function checkEnd() {
    if (G.phase !== 'live') return;
    let tA = 0, cA = 0, tN = 0, cN = 0;
    for (const p of G.players.values()) { if (p.team === 'T') { tN++; if (p.alive) tA++; } else { cN++; if (p.alive) cA++; } }
    if (cN && cA === 0) return endRound('T', 'elim');
    if (tN && tA === 0 && G.bomb.state !== 'planted') return endRound('CT', 'elim');
  }

  // ---------- tick ----------
  H.tick = (dt) => {
    if (G.phase === 'lobby') return;
    G.timeLeft -= dt;
    if (G.phase === 'freeze' && G.timeLeft <= 0) { G.phase = 'live'; G.timeLeft = ROUND.live; dirty = true; G.emit('ev', { t: 'go' }); }
    else if (G.phase === 'live') {
      const b = G.bomb;
      if (b.state === 'planted') {
        b.t -= dt;
        G.timeLeft = b.t;
        // desactivaciones de bots en curso
        for (const [id, d] of defusing) {
          const p = G.players.get(id);
          if (!p || !p.alive || Math.hypot(p.x - b.x, p.z - b.z) > 2.2) { defusing.delete(id); continue; }
          if (p.bot && G.time - d.t0 >= d.dur) defuseDone(p);
        }
        if (b.t <= 0 && b.state === 'planted') explode();
      } else if (G.timeLeft <= 0) endRound('CT', 'time');
      // fuego
      fireTick -= dt;
      if (fireTick <= 0) {
        fireTick = 0.25;
        for (const p of G.players.values()) {
          if (!p.alive) continue;
          const f = inFire(G.nades, p.x, p.y, p.z);
          if (f) H.damage(p.id, f.owner, 10, 'fire', f.type, { raw: true });
        }
      }
    } else if (G.phase === 'post' && G.timeLeft <= 0) afterPost();
    stT -= dt;
    if (dirty && stT <= 0 || stT < -2) { stT = 0.1; dirty = false; G.emit('st', H.snapshot()); }
  };
  H.markDirty = () => { dirty = true; };

  H.snapshot = () => ({
    ph: G.phase, tl: +G.timeLeft.toFixed(2), r: G.round, sc: G.score, hf: G.half,
    b: { s: G.bomb.state, c: G.bomb.carrier, x: +G.bomb.x.toFixed(2), y: +G.bomb.y.toFixed(2), z: +G.bomb.z.toFixed(2), t: +G.bomb.t.toFixed(2), site: G.bomb.site },
    dr: [...G.drops.values()].map(d => [d.id, d.w, +d.x.toFixed(2), +d.y.toFixed(2), +d.z.toFixed(2), d.ammo]),
    p: [...G.players.values()].map(p => [p.id, p.name, p.bot ? 1 : 0, p.grp, p.team, p.hp, p.ar, p.helm ? 1 : 0, p.money, p.alive ? 1 : 0, p.k, p.d, p.a, p.mvp, p.inv, p.god ? 1 : 0, p.skT | 0, p.skCT | 0, p.fin || 0]),
  });

  // ---------- daño ----------
  H.damage = (vid, aid, raw, part, wid, o = {}) => {
    const v = G.players.get(vid), a = G.players.get(aid);
    if (!v || !v.alive || G.phase === 'over') return;
    if (a && a !== v && a.team === v.team) return; // sin fuego amigo
    if (v.god) return;
    let hp, ar = 0;
    if (o.raw) hp = Math.round(raw);
    else { const w = WEAPONS[wid]; const r = applyDamage(raw, o.ap ?? (w?.ap || 0.5), part, v.ar, v.helm); hp = r.hp; ar = r.armor; }
    hp = Math.min(hp, v.hp);
    v.hp -= hp; v.ar = Math.max(0, v.ar - ar);
    if (a && a !== v) { a.dmgR += hp; v.dmgBy[aid] = (v.dmgBy[aid] || 0) + hp; }
    dirty = true;
    G.emit('ev', { t: 'hurt', v: vid, a: aid, n: hp, hs: part === 'head', w: wid, helm: v.helm && part === 'head' });
    if (v.hp <= 0) kill(v, a, wid, part === 'head', o.wb);
  };
  function kill(v, a, wid, hs, wb) {
    v.hp = 0; v.alive = false; v.d++;
    if (a && a !== v) {
      if (a.team !== v.team) { a.k++; a.rk = (a.rk || 0) + 1; const w = WEAPONS[wid]; addMoney(a, w?.reward ?? 300); }
      else { a.k--; addMoney(a, ECON.teamKill); }
    }
    for (const [id, n] of Object.entries(v.dmgBy || {})) if (id !== a?.id && n >= 41) { const p = G.players.get(id); if (p && p.team !== v.team) p.a++; }
    // tirar arma y bomba
    const best = v.inv.p || (v.inv.s && v.inv.s !== defPistol(v.team) ? v.inv.s : null) || v.inv.s;
    if (best) spawnDrop(best, v.x, v.y, v.z, null, v.yaw);
    if (v.inv.c4) { v.inv.c4 = false; dropBomb(v); }
    if (v.inv.kit) spawnDrop('defuser', v.x + 0.3, v.y, v.z, null, 0);
    v.inv = { ...v.inv, p: null, s: null, g: [], kit: false, zeus: false, c4: false, v: v.inv.v + 1 };
    defusing.delete(v.id);
    dirty = true;
    G.emit('ev', { t: 'kill', k: a ? a.id : null, v: v.id, w: wid, hs: !!hs, wb: !!wb });
    checkEnd();
  }
  function dropBomb(p) {
    G.bomb.state = 'dropped'; G.bomb.carrier = null;
    G.bomb.x = p.x; G.bomb.y = p.y; G.bomb.z = p.z;
    G.emit('ev', { t: 'bombdrop' });
  }
  function spawnDrop(w, x, y, z, ammo, yaw = 0) {
    const id = dropSeq++;
    const fx = x - Math.sin(yaw) * 0.6, fz = z - Math.cos(yaw) * 0.6;
    const ok = !G.solidAt(fx, y + 0.3, fz);
    G.drops.set(id, { id, w, x: ok ? fx : x, y: G.floorAt(ok ? fx : x, ok ? fz : z, y + 0.6) + 0.05, z: ok ? fz : z, ammo: ammo || null });
    dirty = true;
  }

  // ---------- pedidos de los jugadores ----------
  H.handle = (type, d, from, meta = {}) => {
    const p = G.players.get(from); if (!p) return;
    switch (type) {
      case 'hit': {
        if (!p.alive && G.phase !== 'post') return;
        const w = WEAPONS[d.w]; if (!w) return;
        const cap = w.cat === 'knife' ? 180 : w.dmg * w.pellets * 1.01;
        H.damage(d.t, from, Math.min(+d.d || 0, cap), d.part, d.w, { wb: d.wb });
        break;
      }
      case 'buy': buy(p, d.i); break;
      case 'drop': {
        if (!p.alive) return;
        const slot = d.s;
        if (slot === 'zeus') { p.inv.zeus = false; p.inv.v++; dirty = true; return; }
        if (slot === 'c4') { if (!p.inv.c4) return; p.inv.c4 = false; p.inv.v++; dropBomb({ x: d.x, y: d.y, z: d.z }); G.bomb.x -= Math.sin(d.yaw) * 0.6; G.bomb.z -= Math.cos(d.yaw) * 0.6; G.bomb.y = G.floorAt(G.bomb.x, G.bomb.z, d.y + 0.6); dirty = true; return; }
        const w = slot === 'p' ? p.inv.p : slot === 's' ? p.inv.s : null; if (!w) return;
        p.inv[slot] = null; p.inv.v++;
        spawnDrop(w, d.x, d.y, d.z, d.ammo, d.yaw);
        break;
      }
      case 'take': {
        if (!p.alive) return;
        if (d.id === 'c4') {
          if (p.team !== 'T' || G.bomb.state !== 'dropped' || Math.hypot(p.x - G.bomb.x, p.z - G.bomb.z) > 1.8) return;
          p.inv.c4 = true; p.inv.v++; G.bomb.state = 'carried'; G.bomb.carrier = p.id; dirty = true;
          G.emit('ev', { t: 'bombpick', p: p.id });
          return;
        }
        const dr = G.drops.get(d.id); if (!dr) return;
        if (Math.hypot(p.x - dr.x, p.z - dr.z) > 2.2) return;
        if (dr.w === 'defuser') { if (p.team !== 'CT' || p.inv.kit) return; p.inv.kit = true; p.inv.v++; G.drops.delete(dr.id); dirty = true; return; }
        const slot = slotOf(dr.w) === 1 ? 'p' : 's';
        if (p.inv[slot]) { if (!d.swap) return; spawnDrop(p.inv[slot], p.x, p.y, p.z, d.ammo, p.yaw); }
        p.inv[slot] = dr.w; p.inv[slot + 'a'] = dr.ammo; p.inv.v++;
        G.drops.delete(dr.id); dirty = true;
        break;
      }
      case 'nade': {
        const i = p.inv.g.indexOf(d.type); if (i < 0) return;
        p.inv.g.splice(i, 1); p.inv.v++; dirty = true;
        break;
      }
      case 'plant': {
        const site = zoneAt(G.W, d.x, d.z) & 12;
        if (!p.alive || !p.inv.c4 || G.phase !== 'live' || !site || G.bomb.state === 'planted') return;
        p.inv.c4 = false; p.inv.v++;
        Object.assign(G.bomb, { state: 'planted', carrier: null, x: d.x, y: d.y, z: d.z, t: ROUND.bomb, site: site & 4 ? 'A' : 'B' });
        plantedBy = p.id; addMoney(p, ECON.plantReward); dirty = true;
        G.emit('ev', { t: 'plant', p: p.id, site: G.bomb.site });
        checkEnd();
        break;
      }
      case 'defst': {
        if (!p.alive || p.team !== 'CT' || G.bomb.state !== 'planted') return;
        if (Math.hypot(p.x - G.bomb.x, p.z - G.bomb.z) > 2.2) return;
        defusing.set(p.id, { t0: G.time, dur: p.inv.kit ? ROUND.kit : ROUND.defuse });
        G.emit('ev', { t: 'defst', p: p.id, kit: p.inv.kit });
        break;
      }
      case 'defx': defusing.delete(from); break;
      case 'defok': {
        const ds = defusing.get(from);
        if (!ds || !p.alive || G.bomb.state !== 'planted' || G.time - ds.t0 < ds.dur - 0.5) return;
        defuseDone(p);
        break;
      }
      case 'adm': if (meta.admin) admin(p, d); break;
      case 'fall': if (p.alive) H.damage(from, from, Math.min(999, +d.d || 0), 'chest', 'world', { raw: true }); break;
    }
  };
  H.botDefuse = (p) => { if (!defusing.has(p.id)) H.handle('defst', {}, p.id); };
  H.isDefusing = id => defusing.has(id);
  function defuseDone(p) {
    defusing.clear();
    G.bomb.state = 'defused'; p.defused = true; addMoney(p, ECON.defuseReward);
    G.emit('ev', { t: 'defused', p: p.id });
    endRound('CT', 'defuse');
  }
  function explode() {
    const b = G.bomb; b.state = 'exploded';
    G.emit('ev', { t: 'boom', x: b.x, y: b.y, z: b.z });
    const R = 1750 * 0.0254 / 3;
    for (const p of G.players.values()) {
      if (!p.alive) continue;
      const d = Math.hypot(p.x - b.x, p.y - b.y, p.z - b.z);
      const dmg = 500 * Math.exp(-(d * d) / (2 * R * R));
      if (dmg > 1) {
        const r = applyDamage(dmg, 0.5, 'chest', p.ar, p.helm);
        p.hp -= Math.min(p.hp, r.hp); p.ar = Math.max(0, p.ar - r.armor);
        if (p.hp <= 0) { p.alive = false; p.d++; G.emit('ev', { t: 'kill', k: null, v: p.id, w: 'c4' }); }
      }
    }
    dirty = true;
    endRound('T', 'bomb');
  }
  // granadas: daño del HE (lo calcula el host al detonar)
  H.heBlast = (g, seeLos) => {
    for (const p of G.players.values()) {
      if (!p.alive) continue;
      const d = Math.hypot(p.x - g.x, p.y + 1 - g.y, p.z - g.z);
      if (d > NADE.heR) continue;
      if (!seeLos(g, p)) continue;
      const dmg = NADE.heDmg * (1 - d / NADE.heR);
      if (dmg < 1) continue;
      H.damage(p.id, g.owner, dmg, 'chest', 'he', { ap: 0.5 });
    }
  };

  // ---------- compras ----------
  function buy(p, id) {
    const it = WEAPONS[id];
    const deny = (why) => G.emitTo(p.id, 'ev', { t: 'deny', why });
    if (!it || !p.alive) return;
    if (!H.canBuyTime()) return deny('Se terminó el tiempo de compra');
    if (!H.buyZone(p)) return deny('Tenés que estar en tu zona de compra');
    if (it.side !== 'both' && it.side !== p.team) return deny('No disponible para tu equipo');
    let price = it.price;
    const inv = p.inv;
    if (id === 'vest') { if (p.ar >= 100) return deny('Ya tenés chaleco'); }
    else if (id === 'vesthelm') { if (p.ar >= 100 && p.helm) return deny('Ya tenés chaleco y casco'); if (p.ar >= 100) price = 350; }
    else if (id === 'defuser') { if (inv.kit) return deny('Ya tenés el kit'); }
    else if (id === 'zeus') { if (inv.zeus) return deny('Ya tenés la Zeus'); }
    else if (it.cat === 'grenade') {
      const n = inv.g.length, same = inv.g.filter(x => x === id || ((x === 'molotov' || x === 'incendiary') && (id === 'molotov' || id === 'incendiary'))).length;
      if (n >= 4) return deny('Llevás el máximo de granadas');
      if (same >= (it.max || 1)) return deny('No podés llevar más de esa granada');
    } else {
      const slot = slotOf(id) === 1 ? 'p' : 's';
      if (inv[slot] === id) return deny('Ya tenés esa arma');
    }
    if (p.money < price) return deny('No te alcanza la plata');
    p.money -= price;
    if (id === 'vest') p.ar = 100;
    else if (id === 'vesthelm') { p.ar = 100; p.helm = true; }
    else if (id === 'defuser') inv.kit = true;
    else if (id === 'zeus') inv.zeus = true;
    else if (it.cat === 'grenade') inv.g.push(id);
    else {
      const slot = slotOf(id) === 1 ? 'p' : 's';
      if (inv[slot]) spawnDrop(inv[slot], p.x, p.y, p.z, null, p.yaw + Math.PI);
      inv[slot] = id; inv[slot + 'a'] = null;
    }
    inv.v++; dirty = true;
    G.emitTo(p.id, 'ev', { t: 'bought', i: id });
  }
  H.buy = buy;

  // ---------- admin ----------
  function admin(p, d) {
    if (d.a === 'god') { p.god = !!d.v; dirty = true; }
    else if (d.a === 'money') { p.money = ECON.max; dirty = true; }
    else if (d.a === 'win') { if (G.phase === 'live' || G.phase === 'freeze') { G.phase = 'live'; endRound(p.team, 'elim'); } }
    else if (d.a === 'kill') { for (const q of G.players.values()) if (q.alive && q.team !== p.team) kill(q, p, 'knife', true, false); }
    else if (d.a === 'heal') { p.hp = 100; p.ar = 100; p.helm = true; dirty = true; }
  }
  return H;
}
