// Reglas del juego (las corre el host): rondas, economía de CS2, daño, muertes, bomba, compras y armas tiradas.
import { WEAPONS, ECON, BUY, applyDamage, slotOf } from './weapons.js';
import { zoneNodes, findPath } from './nav.js';
import { NADE, inFire } from './nades.js';
import { zoneAt, lineOfSight, floorAt, blocked } from './world.js';

// tiempos de competitivo de CS:GO: 15 s de congelamiento, ronda de 1:55, 20 s de compra, bomba de 40 s
export const ROUND = { freeze: 15, live: 115, buy: 20, post: 6, bomb: 40, plant: 3.2, defuse: 10, kit: 5, over: 12 };
// modos de juego
export const MODES = {
  comp: { name: 'Competitivo', sub: 'Bomba, economía y tiempo extra' },
  casual: { name: 'Casual', sub: 'Más plata, chaleco gratis, rondas cortas' },
  dm: { name: 'Deathmatch', sub: 'Reaparecés al morir · 10 min · armas gratis' },
  ar: { name: 'Arms Race', sub: 'Cada baja te da el arma siguiente · ganás con el cuchillo' },
  retake: { name: 'Retakes', sub: 'La bomba ya está plantada: los CT recuperan el sitio' },
  practice: { name: 'Práctica', sub: 'Plata infinita, sin tiempo, impactos y trayectorias visibles' },
};
export const RESPAWN = m => m === 'dm' || m === 'ar';
// orden de armas de Arms Race (por bando)
export const AR_LIST = [['ak47', 'm4a4'], ['galil', 'famas'], ['sg553', 'aug'], ['awp', 'awp'], ['p90', 'p90'], ['ump', 'ump'], ['mac10', 'mp9'], ['mp7', 'mp7'], ['xm1014', 'xm1014'], ['nova', 'nova'], ['negev', 'negev'], ['ssg08', 'ssg08'], ['deagle', 'deagle'], ['tec9', 'fiveseven'], ['p250', 'p250'], ['glock', 'usp'], ['knife', 'knife']];
export const LENGTHS = { rapida: { win: 5, max: 8, name: 'Rápida' }, corta: { win: 9, max: 16, name: 'Corta' }, comp: { win: 13, max: 24, name: 'Competitiva' } };
const BOTN = ['Toto', 'Lalo', 'Pipo', 'Chino', 'Fede', 'Nacho', 'Rulo', 'Coco', 'Tincho', 'Beto', 'Pato', 'Quique'];
export const sideOf = (grp, half) => ((grp ^ half) === 0 ? 'T' : 'CT');
const defPistol = t => (t === 'T' ? 'glock' : 'usp');

export function makeHost(G) {
  const H = {};
  let dirty = true, stT = 0, lossStreak = [1, 1], plantedBy = null, defusing = new Map(), fireTick = 0, overT = 0, ended = false;
  const mode = () => G.cfg.mode || 'comp';
  const respawnQ = new Map(); // id -> segundos hasta reaparecer (DM / Arms Race)
  let timeouts = [1, 1], timeoutNext = 0, votes = { 0: new Set(), 1: new Set() }; const kickVotes = new Map();
  let dropSeq = 1, botSeq = 0;

  // ---------- armado ----------
  H.setup = (humans) => {
    G.players.clear();
    const cfg = G.cfg;
    // los humanos eligen equipo al entrar a la partida (cada uno reemplaza a un bot); hasta entonces miran
    const list = humans.slice().sort((a, b) => a.slot - b.slot);
    for (const h of list) { const P = mkP(h.id, h.name, false, -1); P.skT = 0; P.skCT = 0; P.fin = 0; P.team = 'SPEC'; G.players.set(h.id, P); }
    const per = cfg.bots ? (cfg.size || 5) : 0;
    let bi = 0;
    for (let g = 0; g < 2; g++) for (let k = 0; k < per; k++) {
      const id = 'bot' + (bi++);
      const P = mkP(id, BOTN[bi % BOTN.length] + ' (bot)', true, g); P.skT = 0; P.skCT = 0; P.fin = 0; G.players.set(id, P);
    }
    botSeq = bi;
    G.round = 0; G.score = [0, 0]; G.half = 0; G.ot = 0; lossStreak = [1, 1]; ended = false; respawnQ.clear();
    timeouts = [mode() === 'comp' ? 3 : 1, mode() === 'comp' ? 3 : 1]; timeoutNext = 0; votes = { 0: new Set(), 1: new Set() };
    for (const p of G.players.values()) { p.money = mode() === 'casual' ? 1000 : mode() === 'practice' || RESPAWN(mode()) ? 16000 : ECON.start; p.arl = 0; }
    for (const p of G.players.values()) p.team = p.grp < 0 ? 'SPEC' : sideOf(p.grp, 0);
    G.spawns = { T: spawnPoints('T'), CT: spawnPoints('CT') };
  };
  function mkP(id, name, bot, grp) {
    return { id, name, bot, grp, team: 'T', x: 0, y: 0, z: 0, yaw: 0, pitch: 0, vx: 0, vz: 0, duck: 0, hp: 100, ar: 0, helm: false, money: ECON.start, alive: false, k: 0, d: 0, a: 0, mvp: 0, dmgR: 0, dmgT: 0, hsK: 0, rounds: 0, arl: 0,
      inv: { p: null, s: null, g: [], c4: false, kit: false, zeus: false, v: 1, pa: null, sa: null }, god: false };
  }
  // Puntos de aparición: lugares despejados (sin paredes ni escalones al lado), separados ~2 m, agrupados
  // cerca del centro del spawn y mirando hacia la salida (el camino hacia los sitios), no contra una pared.
  function spawnPoints(side) {
    // mapas .bsp: los spawns originales del mapa, salvo los que no quedan sobre piso firme (barandas, bordes)
    const orig = G.info && G.info.spawns && G.info.spawns[side];
    if (orig && orig.length) {
      const ok = orig.filter(p => {
        const g = floorAt(G.W, p[0], p[2], p[1] + 0.6); if (!(g > -50) || Math.abs(g - p[1]) > 0.6) return false;
        for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, x = p[0] + Math.cos(a) * 0.45, z = p[2] + Math.sin(a) * 0.45, h = floorAt(G.W, x, z, g + 0.6); if (!(h > g - 0.3 && h < g + 0.4)) return false; }
        return !blocked(G.W, p[0], p[2], g, 1.8, 0.4);
      }).map(p => [p[0], floorAt(G.W, p[0], p[2], p[1] + 0.6), p[2], p[3]]);
      if (ok.length >= 5) { let cx = 0, cz = 0; for (const p of ok) { cx += p[0]; cz += p[2]; } return { pts: ok, cx: cx / ok.length, cz: cz / ok.length }; }
    }
    const nav = G.nav, nodes = zoneNodes(nav, side === 'T' ? 16 : 32);
    const clear = n => {
      const l = Math.floor(n / nav.N), i = n % nav.N, x = i % nav.m, z = Math.floor(i / nav.m), h = nav.H[l][i];
      for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
        const xx = x + dx, zz = z + dz; if (xx < 0 || zz < 0 || xx >= nav.m || zz >= nav.m) return false;
        const hh = nav.H[l][zz * nav.m + xx]; if (isNaN(hh) || Math.abs(hh - h) > 0.35) return false;
      }
      return true;
    };
    let good = nodes.filter(clear); if (good.length < 10) good = nodes;
    let cx = 0, cz = 0; const P = good.map(n => nav.pos(n));
    for (const p of P) { cx += p[0]; cz += p[2]; } cx /= P.length; cz /= P.length;
    P.sort((a, b) => Math.hypot(a[0] - cx, a[2] - cz) - Math.hypot(b[0] - cx, b[2] - cz));
    const out = [];
    for (const gap of [2.0, 1.5, 1.1]) {
      for (const p of P) { if (out.length >= 12) break; if (out.every(q => Math.hypot(q[0] - p[0], q[2] - p[2]) > gap)) out.push(p); }
      if (out.length >= 10) break;
    }
    // hacia dónde mirar: unos metros por el camino al sitio más cercano (o al centro de los sitios)
    const z = G.info.zones, c = G.W.cell;
    const site = k => { const b = z[k]; const n = nav.nearest((b[0] + b[2]) / 2 * c, 99, (b[1] + b[3]) / 2 * c); return n; };
    const targets = [site('A'), site('B')].filter(n => n >= 0);
    const yawFor = p => {
      const from = nav.nearest(p[0], p[1], p[2]); let best = null;
      for (const t of targets) { const path = findPath(nav, from, t); if (path && (!best || path.length < best.length)) best = path; }
      if (!best || best.length < 2) return Math.atan2(-(cx - p[0]), -(cz - p[2]));
      // el punto más lejano del camino (hasta 25 m) que se ve desde ahí: mira hacia la salida, no a la pared
      let acc = 0, q = best[Math.min(best.length - 1, 3)];
      for (let i = 1; i < best.length; i++) {
        acc += Math.hypot(best[i][0] - best[i - 1][0], best[i][2] - best[i - 1][2]); if (acc > 25) break;
        if (lineOfSight(G.W, p[0], p[1] + 1.6, p[2], best[i][0], best[i][1] + 1.2, best[i][2])) q = best[i];
      }
      return Math.atan2(-(q[0] - p[0]), -(q[2] - p[2]));
    };
    return { pts: out.map(p => [p[0], p[1], p[2], yawFor(p)]), cx, cz };
  }
  H.adopt = () => { G.spawns = { T: spawnPoints('T'), CT: spawnPoints('CT') }; };
  H.buyZone = (p) => { if (mode() === 'practice' || mode() === 'dm') return true; const s = G.spawns[p.team]; if (!s) return false; return Math.hypot(p.x - s.cx, p.z - s.cz) < 22 || (zoneAt(G.W, p.x, p.z) & (p.team === 'T' ? 16 : 32)); };
  H.liveTime = () => liveTime();
  H.canBuyTime = () => { const m = mode(); if (m === 'ar' || m === 'retake') return false; if (m === 'practice' || m === 'dm') return G.phase === 'freeze' || G.phase === 'live'; return G.phase === 'freeze' || (G.phase === 'live' && ROUND.live - G.timeLeft < ROUND.buy && G.bomb.state !== 'planted'); };
  const liveTime = () => { const m = mode(); return m === 'dm' ? 600 : m === 'ar' ? 900 : m === 'practice' ? 3600 : m === 'casual' ? 135 : m === 'retake' ? ROUND.bomb : ROUND.live; };
  const freezeTime = () => { const m = mode(); return m === 'casual' ? 6 : m === 'retake' ? 4 : RESPAWN(m) ? 3 : m === 'practice' ? 2 : ROUND.freeze; };

  // ---------- rondas ----------
  H.startMatch = () => { G.phase = 'freeze'; newRound(true); };
  function newRound(first) {
    G.round++;
    G.phase = 'freeze'; G.timeLeft = freezeTime();
    // timeout táctico pedido: 30 s más de congelamiento
    if (timeoutNext) { G.timeLeft += 30; G.emit('ev', { t: 'timeout', team: timeoutNext }); timeoutNext = 0; }
    G.drops.clear(); G.nades.length = 0; defusing.clear(); plantedBy = null; respawnQ.clear();
    votes = { 0: new Set(), 1: new Set() };
    G.bomb = { state: 'carried', carrier: null, x: 0, y: 0, z: 0, t: 0 };
    const spawnsUsed = { T: 0, CT: 0 }, pos = {};
    const plist = [...G.players.values()].sort(() => Math.random() - 0.5);
    for (const p of plist) {
      if (p.grp < 0) { p.team = 'SPEC'; p.alive = false; continue; } // todavía eligiendo equipo
      p.team = sideOf(p.grp, G.half);
      if (!p.alive || first) { // murió o arranca: equipo base
        p.inv = { p: null, s: defPistol(p.team), g: [], c4: false, kit: false, zeus: false, v: (p.inv.v || 0) + 1, pa: null, sa: null };
        if (!p.alive && !first) { p.ar = 0; p.helm = false; }
        if (first) { p.ar = 0; p.helm = false; }
      } else { p.inv.c4 = false; if (p.team === 'T') p.inv.kit = false; p.inv.pa = p.inv.sa = null; p.inv.v++; }
      p.hp = 100; p.alive = true; p.dmgR = 0; p.dmgBy = {}; p.rounds++;
      if (p.kicked) { p.alive = false; p.hp = 0; }
      if (mode() === 'casual') { p.ar = 100; p.helm = true; if (p.team === 'CT') p.inv.kit = true; }
      if (mode() === 'practice') p.money = ECON.max;
      if (mode() === 'ar') arGive(p);
      const sp = G.spawns[p.team].pts, k = spawnsUsed[p.team]++ % sp.length;
      pos[p.id] = sp[k];
    }
    const ts = plist.filter(p => p.team === 'T' && p.alive);
    if (mode() === 'retake') retakeSetup(plist, pos);
    else if (!RESPAWN(mode()) && ts.length) { const c = ts[Math.floor(Math.random() * ts.length)]; c.inv.c4 = true; G.bomb.carrier = c.id; }
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
    if (RESPAWN(mode())) { finishMatch(); return; }
    // tiempo extra (competitivo): empate al final → bloques de 6 rondas (gana el primero a 4), cambio de lado a las 3
    const target = L.win + 3 * (G.ot || 0), maxR = L.max + 6 * (G.ot || 0);
    if (mode() === 'comp' && G.round >= maxR && G.score[0] === G.score[1] && G.score[0] >= L.max / 2 + 3 * (G.ot || 0)) {
      G.ot = (G.ot || 0) + 1;
      for (const p of G.players.values()) { p.money = 10000; p.alive = false; p.ar = 0; p.helm = false; }
      lossStreak = [1, 1];
      G.emit('ev', { t: 'ot', n: G.ot });
      newRound(true);
      return;
    }
    const over = G.score[0] >= target || G.score[1] >= target || G.round >= maxR;
    if (over) { finishMatch(); return; }
    // cambio de lado en tiempo extra: cada 3 rondas
    if (G.ot && (G.round - L.max) % 3 === 0) { G.half = 1 - G.half; G.emit('ev', { t: 'half' }); for (const p of G.players.values()) p.alive = false; newRound(true); for (const p of G.players.values()) p.money = Math.max(p.money, 10000); return; }
    if (G.round === L.max / 2) { // cambio de lado
      G.half = 1;
      lossStreak = [1, 1];
      for (const p of G.players.values()) { p.money = mode() === 'casual' ? 1000 : mode() === 'practice' ? ECON.max : ECON.start; p.alive = false; p.ar = 0; p.helm = false; }
      G.emit('ev', { t: 'half' });
      newRound(true);
      return;
    }
    newRound(false);
  }
  // fin de la partida: tabla final con estadísticas
  function finishMatch() {
    {
      G.phase = 'over'; G.timeLeft = ROUND.over; overT = ROUND.over;
      let wg;
      if (RESPAWN(mode())) { const k = [0, 0]; for (const p of G.players.values()) k[p.grp] += p.k; G.score = k; wg = k[0] > k[1] ? 0 : k[1] > k[0] ? 1 : -1; if (mode() === 'ar' && G.arWinner) wg = G.players.get(G.arWinner)?.grp ?? wg; }
      else wg = G.score[0] > G.score[1] ? 0 : G.score[1] > G.score[0] ? 1 : -1;
      const stats = [...G.players.values()].map(p => ({ id: p.id, n: p.name, g: p.grp, t: p.team, k: p.k, d: p.d, a: p.a, mvp: p.mvp, adr: Math.round(p.dmgT / Math.max(1, p.rounds)), hs: p.k ? Math.round(p.hsK / p.k * 100) : 0 }));
      G.emit('ev', { t: 'over', wg, score: G.score.slice(), stats, mode: mode() });
      dirty = true;
      // con setTimeout (rAF se pausa en segundo plano)
      setTimeout(() => {
        if (ended) return; ended = true;
        const winners = [...G.players.values()].filter(p => !p.bot && (wg < 0 || p.grp === wg)).map(p => p.id);
        const txt = wg < 0 ? 'Empate ' + G.score.join(' – ') : 'Ganan ' + nameOfGroup(wg) + ' ' + Math.max(...G.score) + ' – ' + Math.min(...G.score);
        G.end(winners, txt);
      }, ROUND.over * 1000);
    }
  }
  const nameOfGroup = g => { const hs = [...G.players.values()].filter(p => p.grp === g && !p.bot).map(p => p.name); return hs.length ? hs.slice(0, 3).join(', ') : (sideOf(g, G.half) === 'T' ? 'los Terroristas' : 'los Contraterroristas'); };
  function addMoney(p, v) { p.money = Math.max(0, Math.min(mode() === 'casual' ? 10000 : ECON.max, p.money + v)); if (mode() === 'practice') p.money = ECON.max; }
  // ---------- Arms Race ----------
  function arGive(p) {
    const lv = AR_LIST[Math.min(AR_LIST.length - 1, p.arl || 0)], w = lv[p.team === 'T' ? 0 : 1];
    p.inv.p = null; p.inv.s = null; p.inv.g = []; p.inv.zeus = false;
    if (w !== 'knife') { if (slotOf(w) === 1) p.inv.p = w; else p.inv.s = w; }
    p.inv.pa = p.inv.sa = null; p.inv.v++; p.ar = 100; p.helm = true;
  }
  // ---------- Retakes: bomba plantada en un sitio, T alrededor, CT en su base; equipos al azar ----------
  function retakeSetup(plist, pos) {
    const site = Math.random() < 0.5 ? 'A' : 'B', nodes = zoneNodes(G.nav, site === 'A' ? 4 : 8);
    if (!nodes.length) return;
    const bn = G.nav.pos(nodes[Math.floor(nodes.length / 2 + (Math.random() - 0.5) * nodes.length * 0.4)]);
    Object.assign(G.bomb, { state: 'planted', carrier: null, x: bn[0], y: bn[1], z: bn[2], t: ROUND.bomb, site });
    const kits = [['ak47', 'deagle'], ['galil', 'p250'], ['awp', 'glock'], ['mac10', 'tec9'], ['ak47', 'glock']], ckits = [['m4a4', 'usp'], ['famas', 'fiveseven'], ['awp', 'usp'], ['mp9', 'p250'], ['m4a1s', 'deagle']];
    for (const p of plist) {
      const k = (p.team === 'T' ? kits : ckits)[Math.floor(Math.random() * 5)];
      p.inv.p = k[0]; p.inv.s = k[1]; p.inv.g = Math.random() < 0.6 ? [['smoke', 'flash', 'he', p.team === 'T' ? 'molotov' : 'incendiary'][Math.floor(Math.random() * 4)]] : [];
      p.inv.kit = p.team === 'CT' && Math.random() < 0.5; p.ar = 100; p.helm = true; p.inv.v++;
      if (p.team === 'T') { const n = G.nav.pos(nodes[Math.floor(Math.random() * nodes.length)]); pos[p.id] = [n[0], n[1], n[2], Math.random() * 6.28]; }
    }
    G.emit('ev', { t: 'plant', p: null, site, retake: true });
  }
  // ---------- reaparición (DM / Arms Race): lejos de los enemigos ----------
  function respawn(p) {
    if (p.kicked) return;
    const nav = G.nav, enemies = [...G.players.values()].filter(q => q.alive && q.team !== p.team);
    let best = null, bd = -1;
    const cands = [...G.spawns.T.pts, ...G.spawns.CT.pts];
    for (let k = 0; k < 30; k++) { const n = Math.floor(Math.random() * nav.L * nav.N); if (nav.main[n]) { const q = nav.pos(n); cands.push([q[0], q[1], q[2], Math.random() * 6.28]); } }
    for (const c of cands) { let d = 99; for (const e of enemies) d = Math.min(d, Math.hypot(e.x - c[0], e.z - c[2])); if (d > 12 && d < 60 && d > bd - 4 + Math.random() * 8) { bd = d; best = c; } }
    best = best || cands[Math.floor(Math.random() * cands.length)];
    p.hp = 100; p.alive = true; p.dmgBy = {}; p.ar = 100; p.helm = true;
    if (mode() === 'ar') arGive(p);
    else { p.inv = { ...p.inv, p: p.inv.p || (p.team === 'T' ? 'ak47' : 'm4a4'), s: p.inv.s || defPistol(p.team), g: [], v: (p.inv.v || 0) + 1, pa: null, sa: null }; }
    p.x = best[0]; p.y = best[1]; p.z = best[2];
    dirty = true;
    G.emit('ev', { t: 'resp', id: p.id, pos: best });
  }

  function checkEnd() {
    if (G.phase !== 'live' || RESPAWN(mode()) || mode() === 'practice') return;
    let tA = 0, cA = 0, tN = 0, cN = 0;
    for (const p of G.players.values()) { if (p.kicked) continue; if (p.team === 'T') { tN++; if (p.alive) tA++; } else { cN++; if (p.alive) cA++; } }
    if (cN && cA === 0) return endRound('T', 'elim');
    if (tN && tA === 0 && G.bomb.state !== 'planted') return endRound('CT', 'elim');
  }

  // ---------- tick ----------
  H.tick = (dt) => {
    if (G.phase === 'lobby') return;
    G.timeLeft -= dt;
    if (G.phase === 'freeze' && G.timeLeft <= 0) { G.phase = 'live'; G.timeLeft = G.bomb.state === 'planted' ? G.bomb.t : liveTime(); dirty = true; G.emit('ev', { t: 'go' }); }
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
      } else if (G.timeLeft <= 0) { if (RESPAWN(mode())) { G.phase = 'post'; G.timeLeft = 0.1; } else endRound('CT', 'time'); }
      for (const [id, t] of respawnQ) { const p = G.players.get(id); const nt = t - dt; if (!p) { respawnQ.delete(id); continue; } if (nt <= 0) { respawnQ.delete(id); respawn(p); } else respawnQ.set(id, nt); }
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
    ph: G.phase, tl: +G.timeLeft.toFixed(2), r: G.round, sc: G.score, hf: G.half, ot: G.ot || 0, md: mode(),
    b: { s: G.bomb.state, c: G.bomb.carrier, x: +G.bomb.x.toFixed(2), y: +G.bomb.y.toFixed(2), z: +G.bomb.z.toFixed(2), t: +G.bomb.t.toFixed(2), site: G.bomb.site },
    dr: [...G.drops.values()].map(d => [d.id, d.w, +d.x.toFixed(2), +d.y.toFixed(2), +d.z.toFixed(2), d.ammo, d.s ? d.s.map(v => +v.toFixed(2)) : 0, +(d.T || 0).toFixed(2), +((performance.now() - (d.t0 || 0)) / 1000).toFixed(2)]),
    p: [...G.players.values()].map(p => [p.id, p.name, p.bot ? 1 : 0, p.grp, p.team, p.hp, p.ar, p.helm ? 1 : 0, p.money, p.alive ? 1 : 0, p.k, p.d, p.a, p.mvp, p.inv, p.god ? 1 : 0, p.skT | 0, p.skCT | 0, p.fin || 0, p.arl || 0, p.hsK || 0, p.dmgT || 0, p.rounds || 0]),
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
    if (a && a !== v) { a.dmgR += hp; a.dmgT = (a.dmgT || 0) + hp; v.dmgBy[aid] = (v.dmgBy[aid] || 0) + hp; }
    dirty = true;
    G.emit('ev', { t: 'hurt', v: vid, a: aid, n: hp, hs: part === 'head', w: wid, helm: v.helm && part === 'head' });
    if (v.hp <= 0) kill(v, a, wid, part === 'head', o.wb, o);
  };
  function kill(v, a, wid, hs, wb, o = {}) {
    v.hp = 0; v.alive = false; v.d++;
    if (a && a !== v) {
      if (a.team !== v.team) {
        a.k++; a.rk = (a.rk || 0) + 1; if (hs) a.hsK = (a.hsK || 0) + 1;
        const w = WEAPONS[wid]; addMoney(a, w?.reward ?? 300);
        if (mode() === 'ar') {
          if (wid === 'knife' && (a.arl || 0) >= AR_LIST.length - 1) { G.arWinner = a.id; G.timeLeft = 0; }
          else if (wid === 'knife') { v.arl = Math.max(0, (v.arl || 0) - 1); } // apuñalado: baja un nivel
          else { a.arl = Math.min(AR_LIST.length - 1, (a.arl || 0) + 1); if (a.alive) arGive(a); G.emit('ev', { t: 'arlvl', p: a.id, l: a.arl }); }
        }
      }
      else { a.k--; addMoney(a, ECON.teamKill); }
    }
    for (const [id, n] of Object.entries(v.dmgBy || {})) if (id !== a?.id && n >= 41) { const p = G.players.get(id); if (p && p.team !== v.team) p.a++; }
    // tirar arma y bomba
    const best = v.inv.p || (v.inv.s && v.inv.s !== defPistol(v.team) ? v.inv.s : null) || v.inv.s;
    if (best && !RESPAWN(mode())) spawnDrop(best, v.x, v.y, v.z, null, v.yaw);
    if (v.inv.c4) { v.inv.c4 = false; dropBomb(v); }
    if (v.inv.kit) spawnDrop('defuser', v.x + 0.3, v.y, v.z, null, 0);
    if (mode() === 'dm') v.inv = { ...v.inv, g: [], kit: false, zeus: false, c4: false, v: v.inv.v + 1 }; // en DM se queda con sus armas
    else v.inv = { ...v.inv, p: null, s: null, g: [], kit: false, zeus: false, c4: false, v: v.inv.v + 1 };
    defusing.delete(v.id);
    dirty = true;
    G.emit('ev', { t: 'kill', k: a ? a.id : null, v: v.id, w: wid, hs: !!hs, wb: !!wb, sm: !!o.sm, bl: !!o.bl, ns: !!o.ns });
    if (RESPAWN(mode()) || mode() === 'practice') respawnQ.set(v.id, mode() === 'practice' ? 1.5 : 2);
    checkEnd();
  }
  function dropBomb(p) {
    G.bomb.state = 'dropped'; G.bomb.carrier = null;
    G.bomb.x = p.x; G.bomb.y = p.y; G.bomb.z = p.z;
    G.emit('ev', { t: 'bombdrop' });
  }
  // tirar un arma como en CS: sale desde los ojos hacia donde mirás, vuela en arco y queda donde cae
  function spawnDrop(w, x, y, z, ammo, yaw = 0, pitch = null, by = null) {
    const id = dropSeq++;
    let px = x, py = y + 1.45, pz = z, T = 0;
    if (pitch === null) { // al morir o al cambiar: cae a los pies con un empujoncito
      const fx = x - Math.sin(yaw) * 0.6, fz = z - Math.cos(yaw) * 0.6, ok = !G.solidAt(fx, y + 0.3, fz);
      G.drops.set(id, { id, w, x: ok ? fx : x, y: G.floorAt(ok ? fx : x, ok ? fz : z, y + 0.6) + 0.05, z: ok ? fz : z, ammo: ammo || null, s: null, T: 0, t0: performance.now(), by });
      dirty = true; return;
    }
    const sp = 4.2, cp = Math.cos(pitch);
    let vx = -Math.sin(yaw) * cp * sp, vz = -Math.cos(yaw) * cp * sp, vy = Math.sin(pitch) * sp + 1.2;
    const sx = px, sy = py, sz = pz, dt = 0.02;
    for (let k = 0; k < 150; k++) {
      const nx = px + vx * dt, nz = pz + vz * dt, ny = py + vy * dt; vy -= 9.8 * dt; T += dt;
      if (G.solidAt(nx, ny, nz)) { // pega en una pared: rebota hacia atrás y cae
        if (vy > 0 && G.solidAt(px, ny, pz)) vy = 0;
        if (G.solidAt(nx, py, pz)) vx = -vx * 0.25; if (G.solidAt(px, py, nz)) vz = -vz * 0.25;
        continue;
      }
      const f = G.floorAt(nx, nz, py + 0.05);
      px = nx; pz = nz; py = ny;
      if (vy < 0 && py <= f + 0.05) { py = f; break; }
    }
    G.drops.set(id, { id, w, x: px, y: py + 0.05, z: pz, ammo: ammo || null, s: [sx, sy, sz], T, t0: performance.now(), by });
    dirty = true;
  }

  // ---------- elegir equipo: el jugador toma el lugar de un bot de ese equipo (su posición, vida y armas) ----------
  function joinTeam(p, side) {
    const g = sideOf(0, G.half) === side ? 0 : 1;
    if (p.grp === g) return;
    const bots = [...G.players.values()].filter(q => q.bot && q.grp === g && !q.kicked);
    const humansIn = q => [...G.players.values()].filter(x => !x.bot && x.grp === q).length;
    const take = bots.sort((a, b) => (b.alive - a.alive))[0] || null;
    if (!take && (G.cfg.bots || humansIn(g) > humansIn(1 - g))) { G.emitTo(p.id, 'ev', { t: 'deny', why: 'Ese equipo está lleno' }); return; }
    // si ya estaba en un equipo, un bot nuevo ocupa su lugar
    if (p.grp >= 0) {
      if (G.cfg.bots) {
        const id = 'bot' + (botSeq++), b = mkP(id, BOTN[botSeq % BOTN.length] + ' (bot)', true, p.grp);
        Object.assign(b, { team: p.team, x: p.x, y: p.y, z: p.z, yaw: p.yaw, pl: null, hp: p.hp, ar: p.ar, helm: p.helm, alive: p.alive, money: p.money, inv: { ...p.inv, g: p.inv.g.slice(), v: (p.inv.v || 0) + 1 }, skT: 0, skCT: 0, fin: 0, dmgBy: {} });
        G.players.set(id, b);
        if (G.bomb.carrier === p.id) G.bomb.carrier = id;
        if (b.alive) G.emit('ev', { t: 'resp', id, pos: [b.x, b.y, b.z, b.yaw] });
      } else if (G.bomb.carrier === p.id) { G.bomb.carrier = null; }
      p.alive = false;
    }
    p.grp = g; p.team = side;
    if (take) {
      const tp = take.pl || take; // los bots se mueven con su propio estado (p.pl)
      Object.assign(p, { x: tp.x, y: tp.y, z: tp.z, yaw: tp.yaw, hp: take.hp, ar: take.ar, helm: take.helm, alive: take.alive, money: take.money, inv: { ...take.inv, g: take.inv.g.slice(), v: (take.inv.v || 0) + (p.inv.v || 0) + 1 }, dmgBy: {} });
      if (G.bomb.carrier === take.id) G.bomb.carrier = p.id;
      G.emit('ev', { t: 'gone', id: take.id });
      G.players.delete(take.id);
    } else { p.alive = false; p.money = mode() === 'practice' || RESPAWN(mode()) ? 16000 : ECON.start; if (RESPAWN(mode())) respawnQ.set(p.id, 2); }
    G.emit('ev', { t: 'joined', id: p.id, n: p.name, team: side });
    if (p.alive) G.emit('ev', { t: 'resp', id: p.id, pos: [p.x, p.y, p.z, p.yaw] });
    dirty = true; G.emit('st', H.snapshot());
  }

  // ---------- pedidos de los jugadores ----------
  H.handle = (type, d, from, meta = {}) => {
    const p = G.players.get(from); if (!p) return;
    if (p.grp < 0 && type !== 'team') return; // todavía no eligió equipo
    switch (type) {
      case 'hit': {
        if (!p.alive && G.phase !== 'post') return;
        const w = WEAPONS[d.w]; if (!w) return;
        const cap = w.cat === 'knife' ? 180 : w.dmg * w.pellets * 1.01;
        H.damage(d.t, from, Math.min(+d.d || 0, cap), d.part, d.w, { wb: d.wb, sm: d.sm, bl: d.bl, ns: d.ns });
        break;
      }
      case 'buy': buy(p, d.i); break;
      case 'team': joinTeam(p, d.s === 'CT' ? 'CT' : 'T'); break;
      case 'drop': {
        if (!p.alive) return;
        const slot = d.s, pitch = Math.max(-1.4, Math.min(1.4, +d.pitch || 0));
        if (slot === 'zeus') { p.inv.zeus = false; p.inv.v++; dirty = true; return; }
        if (slot === 'c4') { if (!p.inv.c4) return; p.inv.c4 = false; p.inv.v++; dropBomb({ x: d.x, y: d.y, z: d.z }); G.bomb.x -= Math.sin(d.yaw) * 1.4; G.bomb.z -= Math.cos(d.yaw) * 1.4; if (G.solidAt(G.bomb.x, d.y + 0.5, G.bomb.z)) { G.bomb.x = d.x; G.bomb.z = d.z; } G.bomb.y = G.floorAt(G.bomb.x, G.bomb.z, d.y + 0.6); dirty = true; return; }
        if (slot === 'g') { // granada en la mano
          const i = p.inv.g.indexOf(d.w); if (i < 0) return;
          p.inv.g.splice(i, 1); p.inv.v++; spawnDrop(d.w, d.x, d.y, d.z, null, d.yaw, pitch, from); break;
        }
        const w = slot === 'p' ? p.inv.p : slot === 's' ? p.inv.s : null; if (!w) return;
        p.inv[slot] = null; p.inv.v++;
        spawnDrop(w, d.x, d.y, d.z, d.ammo, d.yaw, pitch, from);
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
        const age = (performance.now() - (dr.t0 || 0)) / 1000;
        if (age < (dr.T || 0) || dr.by === from && age < (dr.T || 0) + 0.8 && !d.swap) return; // en el aire / recién tirada por él
        if (WEAPONS[dr.w]?.cat === 'grenade') {
          const g = p.inv.g, fam = x => x === 'incendiary' ? 'molotov' : x, same = g.filter(x => fam(x) === fam(dr.w)).length;
          if (g.length >= 4 || same >= (dr.w === 'flash' ? 2 : 1)) return;
          p.inv.g = g.concat(dr.w); p.inv.v++; G.drops.delete(dr.id); dirty = true; return;
        }
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
      case 'timeout': {
        const g = p.grp; if (p.bot || !timeouts[g] || timeoutNext || RESPAWN(mode())) { G.emitTo(p.id, 'ev', { t: 'deny', why: timeouts[g] ? 'Ya hay un timeout pedido' : 'No te quedan timeouts' }); return; }
        timeouts[g]--; timeoutNext = p.team; G.emit('ev', { t: 'timeoutReq', team: p.team, n: p.name, left: timeouts[g] });
        break;
      }
      case 'vote': {
        if (d.k === 'kick') {
          // votación para echar a un compañero: hace falta la mayoría de los humanos del equipo (sin contar al votado)
          const q = G.players.get(d.id); if (!q || q.team !== p.team || q.kicked || q.id === p.id) return;
          const set = kickVotes.get(q.id) || new Set(); set.add(p.id); kickVotes.set(q.id, set);
          const voters = [...G.players.values()].filter(x => x.team === p.team && !x.bot && !x.kicked && x.id !== q.id), need = Math.max(1, Math.ceil(voters.length * 0.6));
          G.emit('ev', { t: 'kickVote', team: p.team, who: p.name, tgt: q.name, n: set.size, of: need });
          if (set.size >= need) {
            q.kicked = true; kickVotes.delete(q.id);
            if (q.alive) { q.alive = false; q.hp = 0; }
            G.emit('ev', { t: 'kicked', id: q.id, n: q.name }); dirty = true; checkEnd();
          }
          break;
        }
        // votación para rendirse: tienen que votar todos los humanos del equipo
        const g = p.grp; votes[g].add(p.id);
        const humans = [...G.players.values()].filter(q => q.grp === g && !q.bot);
        G.emit('ev', { t: 'vote', team: p.team, n: votes[g].size, of: humans.length, who: p.name });
        if (votes[g].size >= humans.length && G.phase !== 'over') { G.score[1 - g] = Math.max(G.score[1 - g], G.score[g] + 1); G.emit('ev', { t: 'surrender', team: p.team }); finishMatch(); }
        break;
      }
      case 'radio': G.emit('ev', { t: 'radio', p: p.id, m: String(d.m || '').slice(0, 60), x: p.x, z: p.z }); break;
      case 'ping': G.emit('ev', { t: 'ping', p: p.id, team: p.team, x: +d.x, y: +d.y, z: +d.z }); break;
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
    if (!BUY.some(c => c.items[p.team].includes(id))) return deny('No está en el loadout de tu equipo');
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
