// Counter Strika — shooter táctico estilo CS para ClaudeArcade (la carpeta sigue llamándose low-strike).
// Host autoritativo para vida, rondas, plata y bomba; cada jugador mueve su personaje; los bots los corre el host.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { loadMap } from './mapdata.js';
import { buildWorld, floorAt, solidAt, zoneAt, raycast, blocked, refineSites, buildVis } from './world.js';
import { buildMeshes, buildFromModel, buildFromBsp, buildEnvironment, themeOf } from './mesher.js';
import { buildNav, sealTraps, okSpot } from './nav.js';
import { buildDecor } from './decor.js';
import { applyFixes } from './fixes.js';
import { applyWingman, wingmanMesh } from './wingman.js';
import { placeProps, propsMesh } from './props.js';
import { makePlayer, movePlayer, eyeH, PM, fallDamage } from './player.js';
import { WEAPONS, BUY, slotOf } from './weapons.js';
import { makeHost, ROUND, LENGTHS, sideOf, AR_LIST, MODES } from './host.js';
import { makeBots, DIFF } from './bots.js';
import { inaccuracy, recoilStep, shotDir, traceShot, canSee } from './combat.js';
import { segBlockedBySmoke } from './nades.js';
import { makeNade, stepNade, NADE } from './nades.js';
import { makeFx } from './fx.js';
import { loadGunModels, makePlayerModel, setModelGun, poseModel, makeViewModel, setViewGun, updateViewArms, gunMesh, gunGeo, gunInfo, finOf, MAT, GMAT } from './models.js';
import { loadAgents } from './agents.js';
import { loadArms } from './vmarms.js';
import { VMAP, loadVModel, makeVModel, playSeq, updateVModel, attachGun, inspectPose, nativeGun, c4World, nadeWorld, preloadNades } from './vmodels.js';
const skinIdx = p => (p.team === 'T' ? p.skT : p.skCT) | 0;
import * as A from './audio.js';
import { makeMenu } from './menu.js';
import { makeSettings, styleCrosshair } from './settings.js';
import { iconURL } from './icons.js';
import { makeBreakables } from './breakables.js';
import { hud, radarImage, drawRadar, renderBoard, buildBuy, refreshBuy, buyCats, weaponInfo, showWeaponInfo, WNAME } from './ui.js';

const U = 0.0254, D2R = Math.PI / 180;
const $ = id => document.getElementById(id);
const MAPS = [
  { id: 'dust2', name: 'Dust II', sub: 'Desierto · clásico' },
  { id: 'mirage', name: 'Mirage', sub: 'Pueblo marroquí' },
];
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } } };

// ---------------- estado global ----------------
const G = {
  players: new Map(), drops: new Map(), nades: [], bomb: { state: 'none', x: 0, y: 0, z: 0, t: 0 },
  phase: 'lobby', timeLeft: 0, round: 0, score: [0, 0], half: 0, time: 0,
  cfg: { map: store.get('ls:map', 'dust2'), len: 'corta', size: 5, bots: true, diff: 'normal', mode: 'comp' }, prefs: {},
};
let ctx = null, myId = 'local', H = null, BOTS = null, mapCache = {}, loaded = false;
let renderer, scene, camera, vmScene, vmCam, vm, fx, mapMesh = null, radarImg = null;
const isHost = () => !ctx || ctx.isHost || !ctx.online;

// ---------------- red ----------------
function send(type, data, opts) { if (ctx && ctx.online) Arcade.send(type, data, opts); }
G.emit = (type, data) => { send(type, data); onMsg(type, data, myId); };
G.emitTo = (id, type, data) => { const p = G.players.get(id); if (id === myId) onMsg(type, data, myId); else if (p && !p.bot) send(type, data, { to: id }); };
G.end = (winners, text) => { if (ctx && ctx.online) Arcade.end({ winners, text }); else setTimeout(backToLobby, 500); };
G.solidAt = (x, y, z) => solidAt(G.W, x, y, z);
G.floorAt = (x, z, y) => { const f = floorAt(G.W, x, z, y); return f > -1e8 ? f : y - 0.5; };
const planting = new Map();
G.setPlanting = (id, t) => { if (t > 0) planting.set(id, t); else planting.delete(id); };
G.planting = id => planting.get(id) || 0;
G.fallDamage = (p, v) => { const d = fallDamage(v); if (d > 0 && H) H.damage(p.id, p.id, d, 'leg', 'world', { raw: true }); };
function req(type, data) {
  if (isHost()) { if (H) H.handle(type, data, myId, { admin: Arcade.admin && Arcade.admin.active }); }
  else send(type, data, { to: ctx.hostId });
}
const HOSTMSG = ['team', 'hit', 'buy', 'drop', 'take', 'nade', 'plant', 'defst', 'defx', 'defok', 'adm', 'fall', 'timeout', 'vote', 'radio', 'ping'];

// ---------------- jugador local ----------------
const M = {
  pl: null, slot: 's', throwT: 0, throwPow: 1, drawT: 0, fireT: 0, reloadT: 0, shots: 0, pp: 0, py: 0, scope: 0, ammo: { p: [0, 0], s: [0, 0] }, ammoW: { p: null, s: null },
  invV: -1, gsel: 0, plantT: 0, defT: 0, defusing: false, trig: false, trig2: false, nadeHold: 0, nadeCd: 0, stepT: 0, deadT: 0, spec: null,
  blind: 0, blindMax: 0, shake: 0, bob: 0, kick: 0, rk: 0, rkV: 0, rkR: 0, rkY: 0, lastSlot: 'k', zeus: false, sway: [0, 0], swayT: [0, 0], pickCd: 0, voidSent: false, lastMoney: null, rescope: 0, knife2: false,
};
const me = () => G.players.get(myId);

// ---------------- entrada ----------------
const settings = makeSettings(store, S => { A.setVolume(S.vol * 0.7); A.setMusic(S.music ?? 0.6); applyView(); applyPrefs(); });
const CFG = settings.S; A.setVolume(CFG.vol * 0.7); A.setMusic(CFG.music ?? 0.6);
// opciones de la configuración que no son del render: HUD, FPS, brillo del mapa
let fpsEl = null, fpsAcc = 0, fpsN = 0;
function applyPrefs() {
  document.documentElement.style.setProperty('--hud-scale', CFG.hudScale ?? 1);
  if (CFG.showFps && !fpsEl) { fpsEl = document.createElement('div'); fpsEl.id = 'fpsMeter'; document.body.appendChild(fpsEl); }
  if (fpsEl) fpsEl.hidden = !CFG.showFps;
  if (typeof mapMesh !== 'undefined' && mapMesh) mapMesh.traverse(o => { const u = o.material && o.material.uniforms; if (u && u.bright) u.bright.value = 1.45 * (CFG.bright ?? 1); });
}
const keys = new Set(); let mouseL = false, mouseR = false, locked = false, lockAt = 0, mAvg = 6;
const touchState = { mx: 0, mz: 0, fire: false, look: null };
const isTouch = matchMedia('(pointer: coarse)').matches;
const QUALITY = isTouch ? Math.min(1, CFG.quality) : CFG.quality;
addEventListener('keydown', e => {
  if (e.repeat && !['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) { if (e.code === 'Tab') e.preventDefault(); return; }
  if (G.phase === 'lobby') return;
  keys.add(e.code);
  if (['Tab', 'Space', 'ControlLeft', 'ControlRight', 'AltLeft', 'KeyB'].includes(e.code)) e.preventDefault();
  if (buyOpen) { buyKey(e); return; }
  onKey(e.code);
});
// Ctrl+W (agacharse + adelante) cerraría la pestaña: en pantalla completa se bloquea el teclado,
// y si igual se intenta cerrar durante la partida, el navegador pide confirmación.
addEventListener('beforeunload', e => { if (G.phase !== 'lobby') { e.preventDefault(); e.returnValue = ''; return ''; } });
function goFullscreen() {
  const el = document.documentElement;
  try {
    const p = el.requestFullscreen ? el.requestFullscreen({ navigationUI: 'hide' }) : null;
    const lockKeys = () => { try { if (navigator.keyboard && navigator.keyboard.lock) navigator.keyboard.lock().catch(() => { }); } catch (e) { } };
    if (p && p.then) p.then(lockKeys).catch(() => { }); else lockKeys();
  } catch (e) { }
}
addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && ['KeyW', 'KeyS', 'KeyD', 'KeyA', 'KeyR', 'KeyQ', 'KeyE', 'KeyG', 'KeyB', 'KeyF'].includes(e.code) && G.phase !== 'lobby') e.preventDefault(); }, true);
addEventListener('keyup', e => { keys.delete(e.code); if (e.code === 'KeyE' && M.defusing) stopDefuse(); });
// sonidos de UI de CS:GO en todos los botones de menús
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('button')) { A.initAudio(); if (CFG.uiSnd !== false) A.sfxUI(false); } }, true);
let lastHov = null; document.addEventListener('mouseover', e => { const b = e.target.closest && e.target.closest('button'); if (b && b !== lastHov && CFG.uiSnd !== false) A.sfxUI(true); lastHov = b; });
addEventListener('blur', () => { keys.clear(); mouseL = mouseR = false; });
addEventListener('mousedown', e => {
  A.initAudio();
  if (G.phase === 'lobby' || buyOpen) return;
  if (!locked && !isTouch) { if (!document.fullscreenElement) goFullscreen(); lockPointer(); return; }
  if (e.button === 0) mouseL = true; if (e.button === 2) { mouseR = true; secondary(); }
  if (e.button === 1) { e.preventDefault(); doPing(); }
});
addEventListener('mouseup', e => { if (e.button === 0) mouseL = false; if (e.button === 2) mouseR = false; });
addEventListener('contextmenu', e => e.preventDefault());
addEventListener('mousemove', e => {
  if (!locked || !M.pl || G.phase === 'lobby') return;
  // el navegador a veces manda saltos enormes de movementX/Y (al bloquear el puntero o cuando el
  // cursor toca el borde de la ventana): esos eventos se descartan para que la mira no pegue tirones
  const mx = e.movementX, my = e.movementY, m = Math.abs(mx) + Math.abs(my), now = performance.now();
  if (now - lockAt < 80) return;
  if (m > 120 && m > mAvg * 7) return;
  mAvg = mAvg * 0.85 + Math.min(m, 150) * 0.15;
  const z = M.scope ? zoomOf() / (CFG.zoomSens ?? 1) : 1, sens = CFG.sens / 1000;
  look(mx * sens / z, my * sens / z * (CFG.invert ? -1 : 1));
});
addEventListener('wheel', e => { if (locked && G.phase !== 'lobby' && !buyOpen) cycleSlot(e.deltaY > 0 ? 1 : -1); }, { passive: true });
function look(dx, dy) {
  const p = M.pl; if (!p) return;
  p.yaw -= dx; p.pitch = Math.max(-1.5, Math.min(1.5, p.pitch - dy));
  M.swayT[0] += dx * 4; M.swayT[1] += dy * 4;
}
function lockPointer() {
  if (settings.isOpen() || teamSelOpen) return;
  const c = renderer.domElement; if (!c.requestPointerLock) return;
  // movimiento sin aceleración del sistema (menos saltos); si el navegador no lo soporta, el pedido normal
  const plain = () => { try { const r = c.requestPointerLock(); if (r && r.catch) r.catch(() => { }); } catch (e) { } };
  try { const r = c.requestPointerLock({ unadjustedMovement: true }); if (r && r.catch) r.catch(plain); else if (!r) { } } catch (e) { plain(); }
}
document.addEventListener('pointerlockchange', () => { locked = document.pointerLockElement === renderer.domElement; if (locked && teamSelOpen) { document.exitPointerLock(); locked = false; } if (locked) lockAt = performance.now(); updateClickPlay(); });
function updateClickPlay() { $('clickPlay').hidden = locked || isTouch || G.phase === 'lobby' || buyOpen || teamSelOpen || !loaded || settings.isOpen(); }
// ---------------- elegir equipo (al entrar a la partida, y con M para cambiar) ----------------
let teamSelOpen = false, teamSelForced = false;
function openTeamSel(on, forced = false) {
  teamSelOpen = on; teamSelForced = forced && on; $('teamSel').hidden = !on;
  $('tsClose').hidden = teamSelForced;
  if (on) { document.exitPointerLock && document.exitPointerLock(); renderTeamSel(); }
  updateClickPlay();
}
// retrato del agente de cada equipo (con su arma), para la pantalla de elegir equipo
const portraits = {};
function agentPortrait(team) {
  if (portraits[team]) return portraits[team];
  try {
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true }); r.setSize(360, 480); r.setClearColor(0, 0);
    const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight('#dfe6f2', '#3a3028', 2.0)); const d = new THREE.DirectionalLight('#ffe8cc', 2.6); d.position.set(2, 3, 3); sc.add(d); const d2 = new THREE.DirectionalLight('#9cc4ff', 1.6); d2.position.set(-3, 2, -2); sc.add(d2);
    const m = makePlayerModel(team, 0); setModelGun(m, team === 'T' ? 'ak47' : 'm4a4', 0); m.rotation.y = Math.PI + 0.45; sc.add(m);
    poseModel(m, { speed: 0, duck: 0, pitch: -0.05, onGround: true, dead: 0 }, 0.016);
    const cam = new THREE.PerspectiveCamera(30, 360 / 480, 0.1, 20); cam.position.set(0, 1.15, 4.4); cam.lookAt(0, 0.98, 0);
    r.render(sc, cam); portraits[team] = r.domElement.toDataURL('image/png'); r.dispose(); r.forceContextLoss();
  } catch (e) { portraits[team] = ''; }
  return portraits[team];
}
function renderTeamSel() {
  $('tsMap').textContent = (G.mapName || '') + ' · ' + ((MODES[G.cfg.mode || 'comp'] || {}).name || '');
  const P = me();
  for (const side of ['T', 'CT']) {
    const ps = [...G.players.values()].filter(p => p.team === side && !p.kicked);
    const hum = ps.filter(p => !p.bot), bots = ps.filter(p => p.bot).length;
    const full = G.cfg.bots ? !bots : false;
    const el = document.querySelector(`#teamSel [data-side="${side}"]`);
    el.classList.toggle('full', full && (!P || P.team !== side)); el.classList.toggle('mine', !!P && P.team === side);
    const img = el.querySelector('.ts-img'); if (!img.src) { const u = agentPortrait(side); if (u) img.src = u; }
    el.querySelector('.ts-count').textContent = `${hum.length} jugador${hum.length === 1 ? '' : 'es'} · ${bots} bot${bots === 1 ? '' : 's'}`;
    el.querySelector('.ts-list').innerHTML = hum.map(p => `<li>${String(p.name).replace(/[<>&"]/g, '')}</li>`).join('');
    el.querySelector('.ts-note').textContent = P && P.team === side ? 'Tu equipo' : full ? 'Lleno' : G.cfg.bots ? 'Reemplazás a un bot' : 'Entrás en la próxima ronda';
  }
}
function syncTeamSel(P) {
  if (G.phase === 'lobby') { if (teamSelOpen) openTeamSel(false); return; }
  if (P.team === 'SPEC') { const at = store.get('ls:autoTeam', null); if (at && !M.autoTeamSent) { M.autoTeamSent = true; req('team', { s: at }); return; } if (!teamSelOpen) openTeamSel(true, true); else renderTeamSel(); } // ls:autoTeam: solo para pruebas
  else if (teamSelForced) openTeamSel(false);
  else if (teamSelOpen) renderTeamSel();
}
function pickTeam(side) {
  const P = me(); if (!P) return;
  if (P.team === side) { openTeamSel(false); return; }
  req('team', { s: side }); store.set('ls:lastTeam', side);
  openTeamSel(false); A.sfxClick && A.sfxClick(null, 600, 0.3);
}

function onKey(c) {
  const P = me(); if (!P) return;
  if (radioMenu) { const n = parseInt(c.replace('Digit', ''), 10); if (n >= 1 && n <= 9) { const m = RADIO[radioMenu][n - 1]; if (m) { if (m.act) m.act(); else req('radio', { m: m.t }); } } closeRadio(); return; }
  if ((c === 'KeyZ' || c === 'KeyX' || c === 'KeyC') && G.phase !== 'lobby' && !buyOpen) { openRadio(c === 'KeyZ' ? 'z' : c === 'KeyX' ? 'x' : 'c'); return; }
  if (c === 'KeyV' && !buyOpen) { doPing(); return; }
  if (c === 'KeyB') { if (P.team !== 'SPEC') toggleBuy(); return; }
  if (c === 'KeyM' && G.phase !== 'lobby' && !buyOpen) { openTeamSel(!teamSelOpen); return; }
  if (c === 'Tab') return;
  if (c === 'BracketLeft' || c === 'BracketRight') { CFG.sens = +Math.max(0.4, Math.min(8, CFG.sens * (c === 'BracketLeft' ? 0.92 : 1.08))).toFixed(2); store.set('ls:cfg', CFG); hud.center('Sensibilidad ' + CFG.sens.toFixed(2), 1200); return; }
  if (!P.alive) { if (c === 'Space') nextSpec(1); return; }
  if (c === 'Digit1') pick('p'); else if (c === 'Digit2') pick('s');
  else if (c === 'Digit3') { if (M.slot === 'k' && P.inv.zeus) pick('z'); else if (M.slot === 'z') pick('k'); else pick('k'); }
  else if (c === 'Digit4') { const g = P.inv.g; if (g.length) { if (M.slot === 'g') M.gsel = (M.gsel + 1) % g.length; pick('g', true); } }
  else if (c === 'Digit5') pick('c4');
  else if (c === 'KeyQ') pick(M.lastSlot);
  else if (c === 'KeyR') reload();
  else if (c === 'KeyG') dropCurrent();
  else if (c === 'KeyE') use();
  else if (c === 'KeyF') { if (M.reloadT <= 0 && M.drawT <= 0 && !M.scope) { const ct = (WEAPONS[curId()] || {}).cat; M.inspectDur = ct === 'knife' ? 2.6 : ct === 'pistol' ? 3.2 : 4.2; M.inspect = M.inspectDur; } }
}
// táctil (básico)
function setupTouch() {
  if (!isTouch) return;
  document.body.classList.add('touch');
  // los botones táctiles solo durante la partida (no tapan el menú)
  setInterval(() => { const h = G.phase === 'lobby' || G.phase === 'loading' || !$('lobby').hidden; if ($('touch').hidden !== h) $('touch').hidden = h; }, 250);
  const st = $('stick'), knob = st.firstElementChild;
  let sid = null, c0 = null;
  st.addEventListener('touchstart', e => { const t = e.changedTouches[0]; sid = t.identifier; const r = st.getBoundingClientRect(); c0 = [r.left + r.width / 2, r.top + r.height / 2]; e.preventDefault(); }, { passive: false });
  addEventListener('touchmove', e => {
    for (const t of e.changedTouches) {
      if (t.identifier === sid) { let dx = (t.clientX - c0[0]) / 55, dz = (t.clientY - c0[1]) / 55; const l = Math.hypot(dx, dz); if (l > 1) { dx /= l; dz /= l; } touchState.mx = dx; touchState.mz = dz; knob.style.transform = `translate(${dx * 40}px,${dz * 40}px)`; }
      else if (touchState.look && t.identifier === touchState.look.id) { look((t.clientX - touchState.look.x) * 0.006, (t.clientY - touchState.look.y) * 0.006); touchState.look.x = t.clientX; touchState.look.y = t.clientY; }
    }
  }, { passive: true });
  addEventListener('touchend', e => { for (const t of e.changedTouches) { if (t.identifier === sid) { sid = null; touchState.mx = touchState.mz = 0; knob.style.transform = ''; } if (touchState.look && t.identifier === touchState.look.id) touchState.look = null; } });
  renderer.domElement.addEventListener('touchstart', e => { const t = e.changedTouches[0]; if (t.clientX > innerWidth * 0.35) touchState.look = { id: t.identifier, x: t.clientX, y: t.clientY }; A.initAudio(); }, { passive: true });
  const hold = (id, on, off) => { const b = $(id); b.addEventListener('touchstart', e => { e.preventDefault(); on(); }, { passive: false }); b.addEventListener('touchend', e => { e.preventDefault(); off && off(); }, { passive: false }); };
  hold('tFire', () => mouseL = true, () => mouseL = false);
  hold('tJump', () => keys.add('Space'), () => keys.delete('Space'));
  hold('tDuck', () => keys.add('ControlLeft'), () => keys.delete('ControlLeft'));
  hold('tReload', () => onKey('KeyR'));
  hold('tSwitch', () => cycleSlot(1));
  hold('tBuy', () => toggleBuy());
  hold('tUse', () => { keys.add('KeyE'); use(); }, () => { keys.delete('KeyE'); if (M.defusing) stopDefuse(); });
  hold('tScope', () => secondary());
}

// ---------------- armas del jugador local ----------------
function slotWeapon(slot, P = me()) {
  if (!P) return null;
  const inv = P.inv;
  if (slot === 'p') return inv.p; if (slot === 's') return inv.s; if (slot === 'k') return 'knife'; if (slot === 'z') return inv.zeus ? 'zeus' : null;
  if (slot === 'g') return inv.g.length ? inv.g[Math.min(M.gsel, inv.g.length - 1)] : null; if (slot === 'c4') return inv.c4 ? 'c4' : null;
  return null;
}
const curId = () => slotWeapon(M.slot) || 'knife';
function pick(slot, force) {
  if (!slotWeapon(slot)) return;
  if (slot === M.slot && !force) return;
  if (slot !== M.slot) M.lastSlot = M.slot;
  M.slot = slot; M.inspect = 0; M.vmEv = { kind: 'draw' }; M.drawT = slot === 'k' ? 0.35 : 0.6; M.reloadT = 0; M.scope = 0; M.plantT = 0; M.nadeHold = 0;
  if (M.defusing) stopDefuse();
  A.sfxSelect(); hud.showSlots();
}
function cycleSlot(d) {
  const order = ['p', 's', 'k', 'z', 'g', 'c4'].filter(s => slotWeapon(s));
  if (!order.length) return; const i = order.indexOf(M.slot);
  pick(order[(i + d + order.length) % order.length]);
}
function bestSlot() { return slotWeapon('p') ? 'p' : slotWeapon('s') ? 's' : 'k'; }
function syncInv() {
  const P = me(); if (!P || P.inv.v === M.invV) return;
  M.invV = P.inv.v;
  for (const s of ['p', 's']) {
    const id = P.inv[s];
    if (id !== M.ammoW[s]) {
      const had = M.ammoW[s];
      M.ammoW[s] = id;
      const w = WEAPONS[id];
      M.ammo[s] = id ? (P.inv[s + 'a'] ? [...P.inv[s + 'a']] : [w.mag, w.reserve]) : [0, 0];
      if (id && s === 'p' && P.alive && G.phase !== 'post' && had !== id) pick('p', true); // arma nueva: se equipa
    }
  }
  if (!slotWeapon(M.slot)) pick(bestSlot(), true);
}
function reload() {
  const s = M.slot; if (s !== 'p' && s !== 's') return;
  const w = WEAPONS[curId()], a = M.ammo[s];
  if (!w.mag || a[0] >= w.mag || a[1] <= 0 || M.reloadT > 0 || M.drawT > 0) return;
  M.reloadT = w.reload; M.scope = 0; M.inspect = 0; A.sfxReload(null); M.vmEv = { kind: 'reload', dur: w.reload };
}
function finishReload() {
  const s = M.slot, w = WEAPONS[curId()], a = M.ammo[s]; if (!a || !w.mag) return;
  const need = w.mag - a[0], take = admin('ls.ammo') ? need : Math.min(need, a[1]);
  a[0] += take; if (!admin('ls.ammo')) a[1] -= take;
}
const zoomOf = () => { const w = WEAPONS[curId()]; return w && w.scope ? w.scope[Math.max(0, M.scope - 1)] : 1; };
function secondary() {
  const P = me(); if (!P || !P.alive) return;
  const id = curId(), w = WEAPONS[id];
  if (w && w.scope && M.reloadT <= 0 && M.drawT <= 0) { M.scope = (M.scope + 1) % (w.scope.length + 1); A.sfxClick(null, 3000, 0.2); return; }
  if (id === 'knife' && M.fireT <= 0 && M.drawT <= 0) { knife(true); }
  if (w && w.cat === 'grenade' && !mouseL && M.throwT <= 0) { M.nadeHold = 0.001; }
}
function dropCurrent() { // G: tira el arma que tenés en la mano (no el cuchillo), como en CS
  const P = me(); const s = M.slot; if (!P || !P.alive || !M.pl) return;
  const p = M.pl, base = { x: p.x, y: p.y, z: p.z, yaw: p.yaw, pitch: p.pitch || 0 };
  if (s === 'p' || s === 's') req('drop', { ...base, s, ammo: M.ammo[s] });
  else if (s === 'c4') req('drop', { ...base, s: 'c4' });
  else if (s === 'g' && !M.nadeHold) { const w = slotWeapon('g'); if (w) req('drop', { ...base, s: 'g', w }); }
  else return;
  M.pickCd = 1.0; A.sfxDrop(null);
}
function use() {
  const P = me(); if (!P || !P.alive || !M.pl) return;
  const p = M.pl, b = G.bomb;
  if (P.team === 'CT' && b.state === 'planted' && Math.hypot(p.x - b.x, p.z - b.z) < 1.7 && Math.abs(p.y - b.y) < 1.6 && p.onGround) {
    if (!M.defusing) { M.defusing = true; M.defT = 0; req('defst', {}); A.sfxDefuse(null); }
    return;
  }
  const d = lookDrop(); if (d) req('take', { id: d.id, swap: true, ammo: M.ammo[slotOf(d.w) === 1 ? 'p' : 's'] });
}
function stopDefuse() { M.defusing = false; M.defT = 0; req('defx', {}); }
function lookDrop() {
  const p = M.pl; let best = null, bd = 1e9;
  const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw);
  for (const d of G.drops.values()) {
    const dx = d.x - p.x, dz = d.z - p.z, dist = Math.hypot(dx, dz);
    if (dist > 2.2 || Math.abs(d.y - p.y) > 1.5) continue;
    const dot = (dx * fx + dz * fz) / Math.max(0.01, dist);
    if (dist > 0.8 && dot < 0.75) continue;
    if (dist < bd) { bd = dist; best = d; }
  }
  return best;
}

// ---------------- disparos (jugador local y bots) ----------------
const targetsList = [];
function targets() {
  targetsList.length = 0;
  for (const p of G.players.values()) {
    if (!p.alive) continue;
    const h = PM.hStand + (PM.hCrouch - PM.hStand) * (p.duck || 0);
    targetsList.push({ id: p.id, x: p.x, y: p.y, z: p.z, h, alive: true });
  }
  return targetsList;
}
const muzzleV = new THREE.Vector3();
function muzzleOf(p) {
  if (p.id === myId && !M.spec) { if (vm) { vm.userData.gun.getWorldPosition(muzzleV); } return null; }
  const fx = -Math.sin(p.yaw) * Math.cos(p.pitch), fy = Math.sin(p.pitch), fz = -Math.cos(p.yaw) * Math.cos(p.pitch);
  return [p.x + fx * 0.75 + Math.cos(p.yaw) * 0.12, p.y + eyeH(p) - 0.18 + fy * 0.6, p.z + fz * 0.75 - Math.sin(p.yaw) * 0.12];
}
let tracerN = 0;
G.fireBullets = (sid, wid, eye, dirFn, wOver) => {
  const w = wOver || WEAPONS[wid], P = G.players.get(sid);
  const tg = targets(), ends = [], imps = [], hits = new Map();
  let wb = false;
  for (let k = 0; k < w.pellets; k++) {
    const d = dirFn(Math.random);
    const r = traceShot(G.W, G.nades, sid, eye[0], eye[1], eye[2], d[0], d[1], d[2], w, tg);
    ends.push(r.end.map(v => +v.toFixed(2)));
    for (const im of r.impacts) imps.push(im.map(v => +v.toFixed(2)));
    if (r.hit) {
      const h = hits.get(r.hit.id) || { d: 0, part: 'leg', pos: r.hit.pos, wb: r.wb };
      h.d += r.hit.dmg; if (rankPart(r.hit.part) > rankPart(h.part)) h.part = r.hit.part; hits.set(r.hit.id, h);
      if (r.wb) wb = true;
    }
  }
  const hitL = [...hits.entries()].map(([id, h]) => [id, h.pos.map(v => +v.toFixed(2)), h.part === 'head' ? 1 : 0]);
  // detalles para el kill feed: a través del humo, cegado, sin mira
  const blindNow = sid === myId ? M.blind > 0.6 : !!(P && P.blindT > G.time);
  const noScope = w.cat === 'sniper' && !(sid === myId ? M.scope : P && P.scoped);
  shotFx(sid, wid, eye, ends, imps, hitL, w);
  send('sh', { i: sid, w: wid, o: eye.map(v => +v.toFixed(2)), e: ends, m: imps.slice(0, 8), h: hitL });
  // daño
  for (const [tid, h] of hits) {
    const data = { t: tid, w: wid, part: h.part, d: +h.d.toFixed(1), wb: h.wb, sm: segBlockedBySmoke(G.nades, eye[0], eye[1], eye[2], h.pos[0], h.pos[1], h.pos[2]), bl: blindNow, ns: noScope };
    if (sid === myId) { req('hit', data); }
    else if (isHost() && H) H.handle('hit', data, sid);
  }
  if (isHost() && BOTS && P) BOTS.heard(eye[0], eye[1], eye[2], P.team, !w.silent);
};
const rankPart = p => (p === 'head' ? 3 : p === 'chest' ? 2 : p === 'stomach' ? 1 : 0);
function shotFx(sid, wid, eye, ends, imps, hits, w) {
  w = w || WEAPONS[wid];
  const P = G.players.get(sid), mine = sid === myId && !M.spec, spec = M.spec === sid;
  const mz = mine || spec ? null : muzzleOf(P || { yaw: 0, pitch: 0, x: eye[0], y: eye[1] - 1.6, z: eye[2] });
  const from = mine || spec ? [muzzleV.x, muzzleV.y, muzzleV.z] : mz;
  if (w.cat !== 'knife') {
    for (const e of ends) { if (w.pellets > 1 ? Math.random() < 0.35 : (tracerN++ % (w.cat === 'pistol' ? 1 : 2) === 0)) fx.tracer(from, e); }
    if (!w.silent && w.cat !== 'equip') fx.flashLight(from, w.cat === 'sniper' ? 1.5 : 1);
    if (P && P.model) { P.flashT = 0.05; P.kickT = 0.12; }
    if (mine || spec) M.flashT = 0.05;
    if (from && w.cat !== 'equip') {
      fx.muzzleSmoke(from);
      const yaw = P ? (P.id === myId && M.pl ? M.pl.yaw : P.yaw || 0) : 0;
      if (!(wid === 'nova' || wid === 'sawedoff' || wid === 'mag7' || wid === 'awp' || wid === 'ssg08' || wid === 'r8')) { fx.shell([from[0] + Math.sin(yaw) * 0.25, from[1] - 0.05, from[2] + Math.cos(yaw) * 0.25], Math.cos(yaw), -Math.sin(yaw), w.pellets > 1); if (Math.random() < 0.5) A.sfxShell([from[0], from[1] - 1.4, from[2]]); }
    }
  }
  // polvo del color de lo que se golpeó: piso (arena/baldosas) o pared (revoque/arenisca)
  const dustC = G.cfg.map === 'mirage' ? ['#d9d2c4', '#e8e1d2'] : ['#c9a776', '#d8c09a'];
  if (imps.length) A.sfxImpact([imps[0][0], imps[0][1], imps[0][2]], Math.random() < 0.15 ? 'metal' : 'concrete');
  if (BRK) for (const im of imps) { const b = BRK.at(im[0], im[1], im[2]); if (b >= 0) breakIt(b); }
  for (const im of imps) { fx.impact([im[0], im[1], im[2]], [im[3], im[4], im[5]], im[4] > 0.7 ? dustC[0] : dustC[1]); if (mine && G.cfg.mode === 'practice') fx.debugBox(im); }
  for (const h of hits) {
    const d = [h[1][0] - eye[0], h[1][1] - eye[1], h[1][2] - eye[2]], L = Math.hypot(...d) || 1, dn = d.map(v => v / L);
    fx.blood(h[1], dn, h[2]);
    // salpicadura en la pared o el piso de atrás
    const r = raycast(G.W, h[1][0], h[1][1], h[1][2], dn[0], dn[1] - 0.3, dn[2], 2.5);
    if (r) fx.decalC([h[1][0] + dn[0] * r.t, h[1][1] + (dn[1] - 0.3) * r.t, h[1][2] + dn[2] * r.t], [r.nx, r.ny, r.nz], '#6e0b0e', 0.35 + (h[2] ? 0.2 : 0));
  }
  if (w.cat === 'knife') return;
  A.sfxShot(w.cat, mine ? null : eye, !!w.silent, wid === 'deagle' || wid === 'r8');
}

function fireLocal() {
  const P = me(), p = M.pl, id = curId(), w = WEAPONS[id];
  if (!w || M.drawT > 0 || M.reloadT > 0 || M.fireT > 0) return;
  if (G.phase === 'freeze' || G.phase === 'over') return;
  if (w.cat === 'knife') { if (!M.trig || w.auto) knife(false); return; }
  if (!w.auto && M.trig) return;
  const slot = M.slot === 'z' ? null : M.slot;
  if (slot && M.ammo[slot][0] <= 0) { if (!M.trig) { A.sfxClick(null, 2600, 0.35); M.trig = true; } reload(); return; }
  M.trig = true; M.inspect = 0;
  if (admin('ls.aim')) aimbot();
  const st = { speed: Math.hypot(p.vx, p.vz), vy: p.vy, onGround: p.onGround, duck: p.duck, scoped: M.scope > 0, shots: M.shots, sinceLand: p.sinceLand };
  const inacc = admin('ls.norecoil') ? w.spread * 0.2 : inaccuracy(w, st);
  const eye = [p.x, p.y + eyeH(p), p.z];
  const pp = admin('ls.norecoil') ? 0 : M.pp, py = admin('ls.norecoil') ? 0 : M.py;
  G.fireBullets(myId, id, eye, r => shotDir(p.yaw, p.pitch, pp, py, inacc, r));
  const [rp, ry] = recoilStep(w, M.shots, Math.random);
  M.pp = Math.min(w.kickCap || 12, M.pp + rp); M.py += ry; M.shots++;
  // retroceso visual del arma en la mano (como en CS): golpe hacia atrás y la boca para arriba, con un resorte que la
  // devuelve en ~0,15 s; cada disparo le suma un poco de giro al azar y en ráfaga se va acumulando
  { const id = curId(), imp = w.cat === 'sniper' ? 20 : id === 'deagle' || id === 'r8' ? 17 : w.cat === 'pistol' ? 11 : w.cat === 'shotgun' ? 16 : w.cat === 'smg' ? 7 : w.cat === 'mg' ? 8 : 9;
    M.rkV += imp; M.rkR = (Math.random() - 0.5) * (w.cat === 'pistol' ? 0.5 : 0.3) + M.rkR * 0.3; M.rkY = (Math.random() - 0.5) * 0.25; }
  M.fireT = 60 / w.rpm; M.vmEv = { kind: 'shoot' };
  if (slot && !admin('ls.ammo')) M.ammo[slot][0]--;
  if (id === 'zeus') { req('drop', { s: 'zeus' }); }
  if ((id === 'awp' || id === 'ssg08') && M.scope) { M.rescope = M.scope; M.scope = 0; }
}
function knife(stab) {
  const p = M.pl, w = WEAPONS.knife;
  const eye = [p.x, p.y + eyeH(p), p.z];
  // puñalada por la espalda
  const wk = { ...w, dmg: stab ? 65 : 40, range: 72, rangeMod: 1, pellets: 1 };
  const d = shotDir(p.yaw, p.pitch, 0, 0, 0, Math.random);
  const r = traceShot(G.W, G.nades, myId, eye[0], eye[1], eye[2], d[0], d[1], d[2], wk, targets());
  if (r.hit) { const t = G.players.get(r.hit.id); if (t) { const back = Math.cos(angDiff(t.yaw, p.yaw)) > 0.5; if (back) r.hit.dmg = stab ? 180 : 90; } }
  if (r.hit) { req('hit', { t: r.hit.id, w: 'knife', part: 'chest', d: r.hit.dmg }); fx.blood(r.hit.pos, d, false); A.sfxHit(false); }
  else if (r.impacts.length) { const im = r.impacts[0]; fx.impact([im[0], im[1], im[2]], [im[3], im[4], im[5]]); A.sfxClick(im, 1800, 0.5); const b = BRK ? BRK.at(im[0], im[1], im[2], 0.3) : -1; if (b >= 0) { breakIt(b); send('brk', { i: b }); } }
  else A.sfxThrow();
  M.fireT = stab ? 1.0 : 0.45; M.kick = 1; M.knife2 = stab; M.vmEv = { kind: stab ? 'stab_hit' : 'stab_miss' };
  send('sh', { i: myId, w: 'knife', o: eye, e: [r.end], m: [], h: r.hit ? [[r.hit.id, r.hit.pos, 0]] : [] });
}
const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
function aimbot() {
  const P = me(), p = M.pl; const eye = [p.x, p.y + eyeH(p), p.z];
  let best = null, bd = 0.35;
  for (const q of G.players.values()) {
    if (!q.alive || q.team === P.team) continue;
    const hy = q.y + (PM.hStand + (PM.hCrouch - PM.hStand) * (q.duck || 0)) - 0.12;
    const dx = q.x - eye[0], dy = hy - eye[1], dz = q.z - eye[2];
    const yaw = Math.atan2(-dx, -dz), pitch = Math.atan2(dy, Math.hypot(dx, dz));
    const a = Math.hypot(angDiff(yaw, p.yaw), pitch - p.pitch);
    if (a < bd && canSee(G.W, G.nades, eye, [q.x, q.y, q.z, 1])) { bd = a; best = [yaw, pitch]; }
  }
  if (best) { p.yaw = best[0]; p.pitch = best[1]; }
}
function throwNade(power) {
  const P = me(), p = M.pl, id = curId();
  if (!WEAPONS[id] || WEAPONS[id].cat !== 'grenade' || M.nadeCd > 0) return;
  const eye = [p.x, p.y + eyeH(p), p.z];
  const data = { i: myId, ty: id, tm: P.team, o: eye.map(v => +v.toFixed(3)), yaw: +p.yaw.toFixed(4), pitch: +p.pitch.toFixed(4), v: [+p.vx.toFixed(3), +p.vz.toFixed(3), +(p.onGround ? 0 : p.vy).toFixed(3)], pw: power };
  const n0 = P.inv.g.length;
  addNade(data); send('nd', data); req('nade', { type: id });
  M.nadeCd = 0.6; A.sfxThrow();
  // sacar la granada de la lista local ya (el host confirma); si el host es local ya la sacó
  if (P.inv.g.length === n0) { const i = P.inv.g.indexOf(id); if (i >= 0) { P.inv.g = P.inv.g.slice(); P.inv.g.splice(i, 1); } }
  setTimeout(() => { M.throwT = 0; if (!slotWeapon('g')) pick(bestSlot(), true); else pick('g', true); }, 380);
}

// ---------------- granadas (simulación en todos los clientes) ----------------
const nadeMeshes = new Map();
// los bots tiran granadas igual que un jugador (todos los clientes simulan el mismo lanzamiento)
G.botThrow = (p, type, yaw, pitch, power) => {
  const eye = [p.x, p.y + eyeH(p.pl || p), p.z];
  const data = { i: p.id, ty: type, tm: p.team, o: eye.map(v => +v.toFixed(3)), yaw: +yaw.toFixed(4), pitch: +pitch.toFixed(4), v: [0, 0], pw: power };
  addNade(data); send('nd', data); if (H) H.handle('nade', { type }, p.id);
};
function addNade(d) {
  const g = makeNade(d.ty, d.i, d.tm, d.o[0], d.o[1], d.o[2], d.yaw, d.pitch, d.v[0], d.v[1], d.pw, d.v[2] || 0, G.W);
  g.key = Math.random(); G.nades.push(g);
  const m = nadeWorld[d.ty] ? nadeWorld[d.ty].clone() : gunMesh(d.ty); if (!nadeWorld[d.ty]) m.scale.setScalar(1.6); scene.add(m); nadeMeshes.set(g, m);
}
const nadeEv = [];
function updateNades(dt) {
  nadeEv.length = 0;
  for (const g of G.nades) stepNade(G.W, g, dt, nadeEv);
  for (const e of nadeEv) nadeEvent(e);
  for (let i = G.nades.length - 1; i >= 0; i--) {
    const g = G.nades[i], m = nadeMeshes.get(g);
    if (g.state === 'fly' && !g.rest && Math.random() < 0.5) fx.particle(g.x, g.y, g.z, 0, 0.1, 0, 0.03, 0.4, '#cfcac0', -0.1, 0.1);
    if (m) { if (g.state === 'fly' || g.type === 'smoke' || g.type === 'decoy') { m.position.set(g.x, g.y, g.z); m.rotation.x += dt * (g.rest ? 0 : 9); m.visible = g.state !== 'done'; } else m.visible = false; }
    if (g.type === 'decoy' && g.state === 'active') { g.dc = (g.dc || 0) - dt; if (g.dc <= 0) { g.dc = 0.25 + Math.random() * 1.2; const n = 1 + Math.floor(Math.random() * 3); for (let k = 0; k < n; k++) setTimeout(() => A.sfxShot('rifle', [g.x, g.y, g.z]), k * 110); if (isHost() && BOTS) BOTS.heard(g.x, g.y, g.z, g.team, true); } }
    if ((g.type === 'molotov' || g.type === 'incendiary') && g.state === 'active' && !g.air) { g.ft = (g.ft || 0) - dt; if (g.ft <= 0) { g.ft = 0.6; A.sfxFireTick([g.x, g.y, g.z]); } }
    if (g.state === 'done') { G.nades.splice(i, 1); if (m) { scene.remove(m); nadeMeshes.delete(g); } }
  }
}
function nadeEvent(e) {
  const g = e.g, pos = [g.x, g.y, g.z];
  if (e.type === 'bounce') { A.sfxBounce(pos); return; }
  if (e.type !== 'det') return;
  if (g.type === 'he') {
    fx.explosion(pos, false); A.sfxExplosion(pos, false);
    const fy = floorAt(G.W, g.x, g.z, g.y + 0.5); if (fy > -1e8 && g.y - fy < 1.5) fx.decalC([g.x, fy, g.z], [0, 1, 0], '#1d1a17', 2.6);
    shakeFrom(pos, 12, 0.5);
    if (isHost() && H) H.heBlast(g, (gg, p) => { const L = Math.hypot(p.x - gg.x, p.y + 1 - gg.y, p.z - gg.z); const h = raycast(G.W, gg.x, gg.y + 0.15, gg.z, (p.x - gg.x) / L, (p.y + 1 - gg.y - 0.15) / L, (p.z - gg.z) / L, L); return !h || h.t >= L - 0.2; });
  } else if (g.type === 'flash') {
    fx.flashPop(pos); A.sfxFlash(pos);
    flashLocal(g);
    if (isHost() && BOTS) for (const p of G.players.values()) if (p.bot && p.alive) { const t = flashAmount(g, p.x, p.y + eyeH(p), p.z, p.yaw, p.pitch); if (t > 0) BOTS.flash(p, t); }
  } else if (g.type === 'smoke') {
    fx.smoke(g, G.W); A.sfxSmoke(pos);
    for (const f of G.nades) if ((f.type === 'molotov' || f.type === 'incendiary') && f.state === 'active' && Math.hypot(f.x - g.x, f.z - g.z) < NADE.smokeR + 1) f.life = Math.min(f.life, 0.3);
  } else if (g.type === 'molotov' || g.type === 'incendiary') {
    if (g.air) { fx.explosion(pos, false); return; }
    const inSmoke = G.nades.some(s => s.type === 'smoke' && s.state === 'active' && Math.hypot(s.x - g.x, s.z - g.z) < NADE.smokeR);
    if (inSmoke) { g.life = 0.05; A.sfxSmoke(pos); return; }
    fx.fire(g, G.W, floorAt); A.sfxFire(pos);
  } else if (g.type === 'decoy') { g.dc = 0.5; }
}
function flashAmount(g, ex, ey, ez, yaw, pitch) {
  const dx = g.x - ex, dy = g.y - ey, dz = g.z - ez, d = Math.hypot(dx, dy, dz);
  if (d > 40) return 0;
  const h = raycast(G.W, ex, ey, ez, dx / d, dy / d, dz / d, d);
  if (h && h.t < d - 0.25) return 0;
  const fx = -Math.sin(yaw) * Math.cos(pitch), fy = Math.sin(pitch), fz = -Math.cos(yaw) * Math.cos(pitch);
  const dot = (dx * fx + dy * fy + dz * fz) / d;
  const facing = dot > 0.7 ? 1 : dot > 0.2 ? 0.4 + (dot - 0.2) * 1.2 : dot > -0.45 ? 0.04 + (dot + 0.45) * 0.4 : 0; // de espaldas no ciega
  const dist = d < 10 ? 1 : Math.max(0, 1 - (d - 10) / 30);
  return 4.9 * facing * dist;
}
function flashLocal(g) {
  const P = me(); if (!P || !P.alive || !M.pl) return;
  const p = M.pl; const t = flashAmount(g, p.x, p.y + eyeH(p), p.z, p.yaw, p.pitch);
  if (t > 0.15) { M.blind = Math.max(M.blind, t); M.blindMax = Math.max(M.blind, 1); A.sfxRing(t); }
}
function shakeFrom(pos, R, k) { if (!M.pl) return; const d = Math.hypot(pos[0] - M.pl.x, pos[2] - M.pl.z); if (d < R) M.shake = Math.max(M.shake, k * (1 - d / R)); }

// ---------------- mensajes ----------------
function onMsg(type, d, from, meta) {
  switch (type) {
    case 'st': applySt(d); break;
    case 'rs': roundStart(d); break;
    case 'brk': breakIt(d.i); break;
    case 'ev': onEvent(d); break;
    case 'p': { const p = G.players.get(from); if (p && from !== myId) netPos(p, d); break; }
    case 'pb': if (!isHost()) for (const b of d) { const p = G.players.get(b[0]); if (p) netPos(p, b.slice(1)); } break;
    case 'sh': if (d.i !== myId) { const P = G.players.get(d.i); shotFx(d.i, d.w, d.o, d.e, d.m || [], d.h || []); if (d.w === 'knife' && d.h && d.h.length) A.sfxHit(false); if (isHost() && BOTS && P) BOTS.heard(d.o[0], d.o[1], d.o[2], P.team, !(WEAPONS[d.w] || {}).silent); } break;
    case 'nd': if (d.i !== myId) addNade(d); break;
  }
}
function netPos(p, a) {
  // [x,y,z,yaw,pitch,duck,wpn,flags,vx,vz]
  p.nx = a[0]; p.ny = a[1]; p.nz = a[2]; p.nyaw = a[3]; p.npitch = a[4]; p.duck = a[5]; p.wpn = a[6]; p.flags = a[7] | 0; p.vx = a[8] || 0; p.vz = a[9] || 0; p.netT = G.time;
  p.scoped = !!(p.flags & 1); p.onGround = !(p.flags & 2); p.reloading = !!(p.flags & 4);
  // buffer de posiciones para interpolar con 100 ms de retraso (movimiento suave aunque lleguen paquetes desparejos)
  (p.snaps || (p.snaps = [])).push([performance.now() / 1000, a[0], a[1], a[2], a[3], a[4]]); if (p.snaps.length > 20) p.snaps.shift();
  if (p.x === undefined || Math.hypot(p.x - p.nx, p.z - p.nz) > 4) { p.x = p.nx; p.y = p.ny; p.z = p.nz; p.yaw = p.nyaw; p.pitch = p.npitch; }
}
function applySt(s) {
  const prevPhase = G.phase;
  G.phase = s.ph; G.timeLeft = s.tl; G.round = s.r; G.score = s.sc; G.half = s.hf; G.ot = s.ot || 0; if (s.md) G.cfg.mode = s.md;
  const b = s.b; Object.assign(G.bomb, { state: b.s, carrier: b.c, x: b.x, y: b.y, z: b.z, t: b.t, site: b.site });
  if (!isHost()) {
    const seen = new Set();
    for (const r of s.dr) { seen.add(r[0]); const o = G.drops.get(r[0]); G.drops.set(r[0], { id: r[0], w: r[1], x: r[2], y: r[3], z: r[4], ammo: r[5], s: r[6] || null, T: r[7] || 0, t0: o ? o.t0 : performance.now() - (r[8] || 0) * 1000 }); }
    for (const id of [...G.drops.keys()]) if (!seen.has(id)) G.drops.delete(id);
  }
  const ids = new Set();
  for (const r of s.p) {
    const [id, name, bot, grp, team, hp, ar, helm, money, alive, k, d, a, mvp, inv, god, skT, skCT, fin, arl, hsK, dmgT, rounds] = r;
    ids.add(id);
    let p = G.players.get(id);
    if (!p) { p = { id, x: 0, y: 0, z: 0, yaw: 0, pitch: 0, duck: 0, h: PM.hStand }; G.players.set(id, p); }
    if (!isHost()) Object.assign(p, { name, bot: !!bot, grp, team, hp, ar, helm: !!helm, money, alive: !!alive, k, d, a, mvp, inv, god: !!god, skT, skCT, fin, arl, hsK, dmgT, rounds });
  }
  if (!isHost()) for (const id of [...G.players.keys()]) if (!ids.has(id)) G.players.delete(id);
  const P = me();
  if (P) {
    if (M.lastMoney !== null && P.money > M.lastMoney) hud.moneyDelta(P.money - M.lastMoney);
    M.lastMoney = P.money;
    syncInv();
  }
  if (buyOpen) refreshBuy(P, buySel);
}
// rompibles: se rompen igual en todos los clientes (cada uno procesa los mismos impactos); el cuchillo avisa
let BRK = null;
function breakIt(i) {
  if (!BRK || !BRK.break(i)) return;
  const c = BRK.center(i);
  for (let k = 0; k < 26; k++) fx.particle(c[0] + (Math.random() - 0.5) * 0.6, c[1] + (Math.random() - 0.5) * 0.8, c[2] + (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 4, Math.random() * 3, (Math.random() - 0.5) * 4, 0.04 + Math.random() * 0.06, 0.8 + Math.random() * 0.8, Math.random() < 0.5 ? '#6b4a2b' : '#8a6a44', 9);
  A.sfxImpact(c, 'wood'); A.sfxImpact(c, 'wood');
}
function roundStart(d) {
  if (BRK) BRK.reset();
  fx.clearSmokes(); fx.clearDecals();
  for (const m of nadeMeshes.values()) scene.remove(m); nadeMeshes.clear(); G.nades.length = 0;
  planting.clear();
  hud.banner(null);
  for (const p of G.players.values()) { p.deadT = 0; p.alive = !!d.pos[p.id]; }
  const mine = d.pos[myId];
  if (mine) { M.pl = makePlayer(mine[0], mine[1], mine[2], mine[3]); }
  else { const any = Object.values(d.pos)[0]; if (any) M.pl = makePlayer(any[0], any[1], any[2], any[3]); M.deadT = 99; } // mirando hasta elegir equipo
  if (isHost() && BOTS) { for (const p of G.players.values()) if (p.bot && d.pos[p.id]) BOTS.place(p, d.pos[p.id]); BOTS.roundStart(); }
  for (const [id, pos] of Object.entries(d.pos)) { const p = G.players.get(id); if (p) { p.x = p.nx = pos[0]; p.y = p.ny = pos[1]; p.z = p.nz = pos[2]; p.yaw = p.nyaw = pos[3]; p.pitch = 0; } }
  Object.assign(M, { deadT: mine ? 0 : 99, spec: null, blind: 0, plantT: 0, defusing: false, defT: 0, scope: 0, reloadT: 0, drawT: 0.4, shots: 0, pp: 0, py: 0, voidSent: false, nadeHold: 0 });
  M.invV = -1; M.ammoW = { p: null, s: null };
  syncInv();
  M.throwT = 0;
  pick(bestSlot(), true);
  if (d.round === 1 || G.round === 1) hud.center('Ronda 1 — ¡suerte!');
  A.musicRoundStart();
  clearPings();
  dmgLog.clear(); $('deathCard').hidden = true;
}
function nameOf(id) { const p = G.players.get(id); return p ? p.name : '—'; }
// daño entre jugadores en la ronda (para la tarjeta de muerte): clave "atacante>víctima" → [daño, impactos]
const dmgLog = new Map();
function showDeathCard(e) {
  const k = e.k ? G.players.get(e.k) : null, el = $('deathCard');
  if (!k || k.id === myId) { el.hidden = true; return; }
  const g = dmgLog.get(myId + '>' + k.id) || [0, 0], r = dmgLog.get(k.id + '>' + myId) || [0, 0], w = WEAPONS[e.w];
  const sn = s => String(s).replace(/[<>&"]/g, '');
  el.innerHTML = `<div class="dc-h">TE MATÓ</div><div class="dc-k ${k.team}">${sn(k.name)}${k.bot ? ' <small>BOT</small>' : ''}</div>`
    + `<div class="dc-w">${w ? `<img src="${iconURL(e.w, 200, 64)}" alt="">` : ''}<span>${w ? sn(w.name) : 'Mundo'}${e.hs ? ' · a la cabeza' : ''}${e.wb ? ' · a través de pared' : ''}</span></div>`
    + `<div class="dc-hp">Le quedó <b>${Math.max(0, k.hp | 0)}</b> de vida</div>`
    + `<div class="dc-row"><span>Daño que le hiciste</span><b>${g[0]}</b><small>${g[1]} ${g[1] === 1 ? 'impacto' : 'impactos'}</small></div>`
    + `<div class="dc-row"><span>Daño que te hizo</span><b>${r[0]}</b><small>${r[1]} ${r[1] === 1 ? 'impacto' : 'impactos'}</small></div>`;
  el.hidden = false; clearTimeout(showDeathCard.t); showDeathCard.t = setTimeout(() => { el.hidden = true; }, 6000);
}
function onEvent(e) {
  const P = me();
  switch (e.t) {
    case 'go': hud.center(P && P.team === 'T' ? '¡Vamos! Plantá la bomba' : '¡Vamos! Defendé los sitios', 1800); A.sfxRoundStart(); break;
    case 'hurt': {
      { const key = e.a + '>' + e.v, v = dmgLog.get(key) || [0, 0]; v[0] += e.n | 0; v[1]++; dmgLog.set(key, v); }
      if (e.v === myId) {
        A.sfxHurt(e.hs, P && P.ar > 0); hurtFlash = Math.min(1, hurtFlash + e.n / 60);
        const a = G.players.get(e.a);
        if (a && a.id !== myId && M.pl) { const ang = Math.atan2(-(a.x - M.pl.x), -(a.z - M.pl.z)) - M.pl.yaw; hud.dmgDir(-ang); }
        // tagging: al recibir balas te frenás un rato (más con armas fuertes)
        if (M.pl && e.w !== 'world' && e.w !== 'molotov' && e.w !== 'incendiary') { M.pl.vx *= 0.45; M.pl.vz *= 0.45; M.punchHit = 1.2; M.tagT = Math.min(0.6, 0.25 + e.n / 120); }
      }
      if (e.a === myId && e.v !== myId) { hud.hit(e.hs); A.sfxHit(e.hs, e.helm); }
      break;
    }
    case 'kill': {
      const k = e.k ? G.players.get(e.k) : null, v = G.players.get(e.v);
      if (v) {
        v.alive = false; v.deadT = 0.001;
        // hacia dónde cae: lejos del que lo mató
        if (k && k !== v) { const a = Math.atan2(-(k.x - v.x), -(k.z - v.z)), rel = angDiff(a, v.yaw || 0); v.deadDir = Math.abs(rel) < Math.PI / 2 ? 1 : -1; v.deadSide = Math.sin(rel) * 0.8; }
        else { v.deadDir = 1; v.deadSide = (Math.random() - 0.5); }
      }
      if (v && v.id !== myId) A.sfxDie([v.x, v.y + 1, v.z]);
      if (v) hud.feed(k, v, e.w, e.hs, e.wb, e.k === myId || e.v === myId, { sm: e.sm, bl: e.bl, ns: e.ns });
      if (e.k === myId && e.v !== myId) A.sfxKill();
      if (e.v === myId) { M.deadT = 0.001; M.scope = 0; M.defusing = false; hud.progress(null); showDeathCard(e); }
      break;
    }
    case 'end': {
      const myTeam = P ? P.team : 'T', won = e.win === myTeam;
      const R = { elim: 'eliminaron al otro equipo', bomb: 'la bomba explotó', defuse: 'desactivaron la bomba', time: 'se terminó el tiempo' };
      hud.banner(e.win, e.win === 'T' ? 'GANAN LOS TERRORISTAS' : 'GANAN LOS CONTRATERRORISTAS', 'Porque ' + R[e.reason] + (e.mvp ? ' · ★ MVP: ' + nameOf(e.mvp) : ''));
      A.sfxSting(won);
      if (e.mvp) setTimeout(() => A.musicMVP(e.mvp === myId), 900);
      break;
    }
    case 'over': {
      const wg = e.wg, P2 = me();
      const myG = P2 ? P2.grp : 0;
      const t = wg < 0 ? 'EMPATE' : wg === myG ? '¡VICTORIA!' : 'DERROTA';
      hud.banner(wg < 0 ? '' : sideOf(wg, G.half), t, `${e.score[myG]} – ${e.score[1 - myG]} · Volviendo a la sala en ${ROUND.over} s`);
      if (e.stats) hud.endScreen(e.stats, myId, wg, e.score, e.mode);
      let n = ROUND.over; clearInterval(overIv); overIv = setInterval(() => { n--; if (n <= 0) { clearInterval(overIv); return; } hud.banner(wg < 0 ? '' : sideOf(wg, G.half), t, `${e.score[myG]} – ${e.score[1 - myG]} · Volviendo a la sala en ${n} s`); }, 1000);
      break;
    }
    case 'half': hud.center('Cambio de lado — empieza la segunda mitad', 4000); break;
    case 'plant': hud.center('La bomba fue plantada en el sitio ' + e.site, 3000); A.sfxBeep([G.bomb.x, G.bomb.y, G.bomb.z], true); G.bomb.seen = true; break;
    case 'defst': A.sfxDefuse([G.bomb.x, G.bomb.y, G.bomb.z]); break;
    case 'defused': hud.center('Desactivaron la bomba', 3000); break;
    case 'boom': { fx.explosion([e.x, e.y, e.z], true); A.sfxExplosion([e.x, e.y, e.z], true); shakeFrom([e.x, e.y, e.z], 70, 2.2); if (M.pl) { const d = Math.hypot(M.pl.x - e.x, M.pl.y - e.y, M.pl.z - e.z); if (d < 35) M.blind = Math.max(M.blind, 0.9 * (1 - d / 35)); } break; }
    case 'bombdrop': if (P && P.team === 'T') hud.center('Se cayó la bomba', 1600); break;
    case 'bombpick': if (e.p === myId) { hud.center('Agarraste la bomba (5)', 1600); A.sfxPickup(); } break;
    case 'deny': hud.center(e.why, 1500); A.sfxDeny(); if (P && P.team === 'SPEC') openTeamSel(true, true); break;
    case 'gone': { const q = G.players.get(e.id); if (q) { if (q.model) scene.remove(q.model); G.players.delete(e.id); } if (M.spec === e.id) M.spec = null; break; }
    case 'joined': hud.feedMsg ? hud.feedMsg(e.n + ' se unió a los ' + (e.team === 'T' ? 'Terroristas' : 'Antiterroristas')) : hud.center(e.n + ' se unió a los ' + (e.team === 'T' ? 'T' : 'CT'), 1800); if (e.id === myId) { M.deadT = M.pl && P && P.alive ? 0 : 99; } break;
    case 'resp': {
      const p = G.players.get(e.id); if (!p) break;
      p.alive = true; p.deadT = 0; p.x = p.nx = e.pos[0]; p.y = p.ny = e.pos[1]; p.z = p.nz = e.pos[2]; p.yaw = p.nyaw = e.pos[3];
      if (e.id === myId) { $('deathCard').hidden = true; M.pl = makePlayer(e.pos[0], e.pos[1], e.pos[2], e.pos[3]); Object.assign(M, { deadT: 0, spec: null, blind: 0, scope: 0, reloadT: 0, drawT: 0.4, shots: 0, pp: 0, py: 0, spawnProt: 1.5 }); M.invV = -1; M.ammoW = { p: null, s: null }; syncInv(); pick(bestSlot(), true); }
      if (isHost() && BOTS && p.bot) BOTS.place(p, e.pos);
      break;
    }
    case 'arlvl': if (e.p === myId) { hud.center('Nivel ' + (e.l + 1) + ' de ' + AR_LIST.length + ' · ' + WNAME(AR_LIST[e.l][P.team === 'T' ? 0 : 1]), 1600); A.sfxBuy(); } break;
    case 'ot': hud.center('TIEMPO EXTRA ' + e.n + ' — $10.000 para todos', 4000); break;
    case 'timeoutReq': hud.center('Timeout táctico pedido por ' + e.n + ' (' + (e.team === 'T' ? 'T' : 'CT') + ') · quedan ' + e.left, 3500); break;
    case 'timeout': hud.center('TIMEOUT TÁCTICO — 30 segundos', 4000); break;
    case 'kickVote': if (P && e.team === P.team) hud.center('Votación para echar a ' + e.tgt + ': ' + e.n + '/' + e.of + ' · votó ' + e.who, 3000); break;
    case 'kicked': { const q = G.players.get(e.id); if (q) { q.kicked = true; q.alive = false; } hud.center(e.id === myId ? 'Te echaron de la partida por votación' : e.n + ' fue echado por votación', e.id === myId ? 60000 : 3500); break; }
    case 'vote': hud.center('Votación para rendirse (' + e.team + '): ' + e.n + '/' + e.of + ' · ' + e.who, 3000); break;
    case 'surrender': hud.center((e.team === 'T' ? 'Los Terroristas' : 'Los Contraterroristas') + ' se rindieron', 4000); break;
    case 'radio': {
      { const q = G.players.get(e.p); if (q && isHost() && BOTS && /enemigo|visto|ayuda|cubr|rota|bomba/i.test(e.m)) BOTS.info(q.team, q.x, q.z); }
      const p = G.players.get(e.p); if (!p || !P || p.team !== P.team) break;
      hud.radio(p, e.m); A.sfxRadio();
      if (p.model) p.radioT = G.time + 3;
      break;
    }
    case 'ping': { if (isHost() && BOTS) BOTS.info(e.team, e.x, e.z); if (!P || e.team !== P.team) break; addPing(e); break; }
    case 'bought': A.sfxBuy(); break;
  }
}
let overIv = 0, hurtFlash = 0;

// ---------------- radio (Z / X / C) y marcadores (V o rueda del mouse) ----------------
const RADIO = {
  z: [{ t: '¡Vamos, vamos!' }, { t: 'Cubrime' }, { t: 'Mantengan esta posición' }, { t: 'Agrúpense' }, { t: 'Síganme' }, { t: 'Tomen el punto' }],
  x: [{ t: 'Afirmativo' }, { t: 'Enemigo visto' }, { t: 'Necesito apoyo' }, { t: 'Sector despejado' }, { t: 'Estoy en posición' }, { t: 'Negativo' }, { t: 'El enemigo está muerto' }],
  c: [{ t: 'Voy a A' }, { t: 'Voy a B' }, { t: 'Rotemos' }, { t: 'Plantá la bomba / desactivá' }, { t: 'Ahorremos esta ronda (eco)' },
    { t: 'Pedir timeout táctico', act: () => req('timeout', {}) }, { t: 'Votar para rendirse', act: () => req('vote', { k: 'surrender' }) }, { t: 'Votar para echar a un compañero…', act: () => setTimeout(() => openRadio('k'), 0) }],
  k: [],
};
let radioMenu = null, radioTmr = 0;
function openRadio(k) {
  if (k === 'k') { const P = me(); RADIO.k = [...G.players.values()].filter(q => P && q.team === P.team && q.id !== myId && !q.kicked).slice(0, 9).map(q => ({ t: 'Echar a ' + String(q.name).replace(/[<>&"]/g, ''), act: () => req('vote', { k: 'kick', id: q.id }) })); if (!RADIO.k.length) return; }
  radioMenu = k; const el = $('radioMenu');
  el.innerHTML = `<h5>${k === 'z' ? 'ÓRDENES' : k === 'x' ? 'RESPUESTAS' : k === 'k' ? 'VOTAR PARA ECHAR' : 'TÁCTICAS'}</h5>` + RADIO[k].map((m, i) => `<div><b>${i + 1}</b>${m.t}</div>`).join('') + '<small>0 · cerrar</small>';
  el.hidden = false; clearTimeout(radioTmr); radioTmr = setTimeout(closeRadio, 5000);
}
function closeRadio() { radioMenu = null; $('radioMenu').hidden = true; }
const pings = [];
function doPing() {
  const P = me(); if (!P || !P.alive || !M.pl) return;
  const p = M.pl, ey = p.y + eyeH(p), fxv = -Math.sin(p.yaw) * Math.cos(p.pitch), fyv = Math.sin(p.pitch), fzv = -Math.cos(p.yaw) * Math.cos(p.pitch);
  const h = raycast(G.W, p.x, ey, p.z, fxv, fyv, fzv, 120); const t = h ? h.t - 0.1 : 40;
  req('ping', { x: +(p.x + fxv * t).toFixed(2), y: +(ey + fyv * t).toFixed(2), z: +(p.z + fzv * t).toFixed(2) });
}
function addPing(e) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.strokeStyle = '#ffd34a'; x.lineWidth = 6; x.beginPath(); x.arc(32, 26, 16, 0, Math.PI * 2); x.stroke(); x.fillStyle = '#ffd34a'; x.beginPath(); x.moveTo(20, 36); x.lineTo(44, 36); x.lineTo(32, 60); x.fill();
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true, sizeAttenuation: false }));
  s.scale.set(0.04, 0.04, 1); s.renderOrder = 30; s.position.set(e.x, e.y + 0.4, e.z); scene.add(s);
  pings.push({ s, t: G.time + 5, x: e.x, z: e.z }); A.sfxPing([e.x, e.y, e.z]);
  const p = G.players.get(e.p); if (p) hud.radio(p, 'marcó un lugar');
}
// modo práctica: trayectoria de la granada mientras la tenés apretada
let trajLine = null;
function updateTraj() {
  const P = me(), id = curId();
  const show = G.cfg.mode === 'practice' && P && P.alive && M.pl && WEAPONS[id] && WEAPONS[id].cat === 'grenade' && M.nadeHold;
  if (!show) { if (trajLine) trajLine.visible = false; return; }
  const p = M.pl, g = makeNade(id, myId, P.team, p.x, p.y + eyeH(p), p.z, p.yaw, p.pitch, p.vx, p.vz, M.nadeHold, p.onGround ? 0 : p.vy, G.W);
  const pts = [], ev = [];
  for (let i = 0; i < 260 && g.state === 'fly'; i++) { stepNade(G.W, g, 1 / 64, ev); if (i % 2 === 0) pts.push(g.x, g.y, g.z); if (g.rest) break; }
  if (!trajLine) { trajLine = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#7cff8a', depthTest: false, transparent: true, opacity: 0.9 })); trajLine.renderOrder = 26; trajLine.frustumCulled = false; scene.add(trajLine); }
  trajLine.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); trajLine.visible = true;
}
function clearPings() { for (const q of pings) scene.remove(q.s); pings.length = 0; }
function updatePings() { for (let i = pings.length - 1; i >= 0; i--) { const q = pings[i]; q.s.material.opacity = Math.min(1, (q.t - G.time) / 1.5); if (G.time > q.t) { scene.remove(q.s); pings.splice(i, 1); } } }

// ---------------- compra ----------------
let buyOpen = false, buySel = -1, iconR = null;
const icons = {};
function iconOf(id) {
  if (icons[id]) { const c = document.createElement('canvas'); c.width = 192; c.height = 48; c.getContext('2d').drawImage(icons[id], 0, 0); return c; }
  try {
    if (!iconR) { iconR = { r: new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true }), s: new THREE.Scene(), c: new THREE.OrthographicCamera(-0.62, 0.62, 0.155, -0.155, 0.01, 10) }; iconR.r.setSize(192, 48); iconR.s.add(new THREE.HemisphereLight('#fff', '#666', 2.2)); iconR.c.position.set(3, 0, 0); iconR.c.lookAt(0, 0, 0); }
    const geo = gunGeo(id); geo.computeBoundingBox(); const bb = geo.boundingBox;
    const m = new THREE.Mesh(geo, MAT); const len = Math.max(0.12, bb.max.z - bb.min.z, (bb.max.y - bb.min.y) * 4);
    m.scale.setScalar(1.1 / len); m.position.set(0, -(bb.max.y + bb.min.y) / 2 / len * 1.1, -(bb.max.z + bb.min.z) / 2 / len * 1.1);
    iconR.s.add(m); iconR.r.render(iconR.s, iconR.c); iconR.s.remove(m);
    const c = document.createElement('canvas'); c.width = 192; c.height = 48; c.getContext('2d').drawImage(iconR.r.domElement, 0, 0);
    icons[id] = c; return iconOf(id);
  } catch (e) { return null; }
}
let builtFor = null;
function toggleBuy(force) {
  const P = me(); if (!P) return;
  const open = force !== undefined ? force : !buyOpen;
  if (open) {
    if (!P.alive) return;
    if (!canBuyNow()) { hud.center(G.phase === 'live' ? 'Se terminó el tiempo de compra' : 'No podés comprar ahora', 1400); return; }
    const style = 'grid';
    if (builtFor !== P.team + style) { builtFor = P.team + style; buildBuy(P.team, iconOf, id => doBuy(id), id => showWeaponInfo(id), style, (c) => { buySel = c; refreshBuy(me(), buySel); }); }
    buySel = -1; refreshBuy(P, buySel);
    buyOpen = true; $('buy').hidden = false; document.exitPointerLock && document.exitPointerLock();
  } else { buyOpen = false; $('buy').hidden = true; showWeaponInfo(null); if (!isTouch) lockPointer(); }
  updateClickPlay();
}
function canBuyNow() {
  const P = me(); if (!P || !P.alive || !M.pl) return false;
  const md = G.cfg.mode || 'comp';
  if (md === 'ar' || md === 'retake') return false;
  if (md === 'practice' || md === 'dm') return G.phase === 'freeze' || G.phase === 'live';
  const lt = md === 'casual' ? 135 : ROUND.live;
  const inTime = G.phase === 'freeze' || (G.phase === 'live' && lt - G.timeLeft < ROUND.buy && G.bomb.state !== 'planted');
  if (!inTime) return false;
  const s = G.spawns ? G.spawns[P.team] : null;
  return !s || Math.hypot(M.pl.x - s.cx, M.pl.z - s.cz) < 22 || !!(zoneAt(G.W, M.pl.x, M.pl.z) & (P.team === 'T' ? 16 : 32));
}
// compras de la ronda (para RECOMPRAR ANTERIOR) y auto-compra: chaleco+casco, el mejor rifle que alcance, kit y granadas
const buyLog = { round: -1, cur: [], prev: [] };
function doBuy(id) {
  const r = G.round ?? 0; if (buyLog.round !== r) { if (buyLog.cur.length) buyLog.prev = buyLog.cur; buyLog.cur = []; buyLog.round = r; }
  buyLog.cur.push(id); req('buy', { i: id });
}
function autoBuy() {
  const P = me(); if (!P) return; let m = P.money; const t = P.team, want = [];
  const take = (id) => { const w = WEAPONS[id]; if (w && m >= w.price) { want.push(id); m -= w.price; return true; } return false; };
  if (P.ar < 100 || !P.helm) take('vesthelm') || take('vest');
  if (!P.inv.p) for (const id of (t === 'T' ? ['ak47', 'galil', 'mac10'] : ['m4a1s', 'm4a4', 'famas', 'mp9'])) if (take(id)) break;
  if (t === 'CT' && !P.inv.kit) take('defuser');
  for (const id of ['smoke', 'flash', t === 'T' ? 'molotov' : 'incendiary', 'he']) take(id);
  for (const id of want) doBuy(id);
}
function reBuy() { const r = G.round ?? 0; const list = buyLog.round === r ? buyLog.prev : buyLog.cur.length ? buyLog.cur : buyLog.prev; for (const id of list.slice()) if (WEAPONS[id] && (WEAPONS[id].side === 'both' || !WEAPONS[id].side || WEAPONS[id].side === me().team)) doBuy(id); }
for (const b of document.querySelectorAll('.buy-foot [data-act]')) b.onclick = () => { const a = b.dataset.act; if (a === 'cancel') toggleBuy(false); else if (a === 'auto') autoBuy(); else reBuy(); setTimeout(() => refreshBuy(me(), buySel), 80); };
function buyKey(e) {
  if (e.code === 'KeyB') { toggleBuy(false); return; }
  if (e.code === 'KeyA') { autoBuy(); setTimeout(() => refreshBuy(me(), buySel), 80); return; }
  if (e.code === 'KeyR') { reBuy(); setTimeout(() => refreshBuy(me(), buySel), 80); return; }
  if (e.code === 'Escape' || e.code === 'Digit0') { toggleBuy(false); return; }
  const n = parseInt(e.key, 10);
  if (!(n >= 1 && n <= 9)) return;
  const P = me();
  const cats = buyCats();
  if (buySel < 0) { if (n <= cats.length) buySel = n - 1; }
  else { const list = cats[buySel].items[P.team]; if (list[n - 1]) doBuy(list[n - 1]); buySel = -1; }
  refreshBuy(P, buySel);
}
$('buy').addEventListener('mousedown', e => e.stopPropagation());

// ---------------- render ----------------
// relación de aspecto (16:9, 4:3 con barras o 4:3 estirado, como en CS) y campo de visión del arma (viewmodel_fov)
function applyView() {
  if (!renderer) return;
  { const pr = Math.min(devicePixelRatio, isTouch ? 1 : 1.5) * (CFG.rscale ?? 1); if (Math.abs(renderer.getPixelRatio() - pr) > 0.01) renderer.setPixelRatio(pr); }
  const S = settings.S, W = innerWidth, H = innerHeight, cv = renderer.domElement;
  let asp = W / H;
  if (S.aspect === '4:3b') { const w = Math.min(W, Math.round(H * 4 / 3)); renderer.setSize(w, H); cv.style.marginLeft = ((W - w) / 2) + 'px'; asp = w / H; }
  else if (S.aspect === '4:3s') { renderer.setSize(Math.round(H * 4 / 3), H, false); cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.style.marginLeft = '0'; asp = 4 / 3; }
  else { renderer.setSize(W, H); cv.style.marginLeft = '0'; }
  document.body.classList.toggle('bars43', S.aspect === '4:3b');
  camera.aspect = vmCam.aspect = asp; camera.updateProjectionMatrix();
  // viewmodel_fov: horizontal a 4:3 en Source; se escala desde el valor de siempre (60 ↔ 66° vertical acá)
  const t = Math.tan((S.vmFov || 60) * Math.PI / 360) / Math.tan(30 * Math.PI / 180);
  vmFovProc = 2 * Math.atan(Math.tan(33 * Math.PI / 180) * t) * 180 / Math.PI;
  // modelos originales: viewmodel_fov es horizontal a 4:3 (como en Source)
  vmFovSrc = 2 * Math.atan(Math.tan((S.vmFov || 60) * Math.PI / 360) * 0.75) * 180 / Math.PI;
  vmCam.fov = vmFovProc; vmCam.updateProjectionMatrix();
}
let vmFovProc = 66, vmFovSrc = 46.8;
function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: QUALITY > 1 && !isTouch, stencil: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1 : 1.5) * (CFG.rscale ?? 1));
  renderer.setSize(innerWidth, innerHeight);
  renderer.autoClear = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = QUALITY > 0; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
  $('view').appendChild(renderer.domElement);
  scene = new THREE.Scene();
  // luz ambiente de entorno para los materiales con relieve y las armas
  { const pm = new THREE.PMREMGenerator(renderer); const env = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environment = env; scene.environmentIntensity = 0.18; }
  camera = new THREE.PerspectiveCamera(74, innerWidth / innerHeight, 0.05, 1500);
  vmScene = new THREE.Scene(); vmCam = new THREE.PerspectiveCamera(66, innerWidth / innerHeight, 0.01, 10);
  vmScene.add(new THREE.HemisphereLight('#ffffff', '#555', 1.3)); const dl = new THREE.DirectionalLight('#fff', 1.1); dl.position.set(1, 2, 1); vmScene.add(dl);
  vmScene.environment = scene.environment; vmScene.environmentIntensity = 0.7;
  vm = makeViewModel(); vmScene.add(vm);
  const mz = makeFxMuzzle(); vm.userData.flash = mz;
  addEventListener('resize', applyView); applyView();
  renderer.domElement.addEventListener('click', () => { if (G.phase !== 'lobby' && !locked && !isTouch && !buyOpen) lockPointer(); });
  $('clickPlay').addEventListener('click', e => { if (e.target.id === 'cpSettings') return; A.initAudio(); A.setVolume(CFG.vol * 0.7); lockPointer(); });
  $('cpSettings').addEventListener('click', e => { e.stopPropagation(); settings.open(() => updateClickPlay()); updateClickPlay(); });
}
function makeFxMuzzle() {
  const m = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), new THREE.MeshBasicMaterial({ color: '#ffd27a', transparent: true, opacity: 0.95, depthWrite: false }));
  m.scale.set(0.04, 0.04, 0.12); m.visible = false; m.renderOrder = 11; vm.add(m); return m;
}
// pantalla de carga: plano del mapa (guardado de la última vez) con los sitios marcados y consejos que van rotando
const TIPS = [
  'Pará antes de disparar: moverse con un rifle arruina la precisión.', 'Agachado sos un poco más preciso con casi todas las armas.',
  'Caminar con Shift no hace ruido: los pasos se oyen según el piso.', 'Si un sonido viene de abajo se oye apagado; de arriba, más agudo.',
  'Una flash te ciega mucho menos si te das vuelta a tiempo.', 'Los humos tapan la vista y apagan el fuego.',
  'Marcá un lugar con V para que lo vea tu equipo en el radar.', 'Lo que ven tus compañeros aparece en tu radar.',
  'Con F inspeccionás el arma.', 'La radio está en Z, X y C. Con C también podés votar.',
  'Los primeros tiros de la AK y la M4 son los más precisos: tirá en ráfagas cortas.', 'El kit de desactivación baja de 10 a 5 segundos.',
];
function labelRadar(cv, info) {
  if (!cv || !cv.getContext || !info || !info.zones) return;
  const x = cv.getContext('2d'), n = info.n || cv.width, k = cv.width / n;
  x.font = `700 ${Math.round(cv.width / 22)}px Rajdhani, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = cv.width / 160;
  for (const [key, col] of [['A', '#ff5a4a'], ['B', '#ff5a4a']]) {
    const z = info.zones[key]; if (!z) continue;
    const cx = (z[0] + z[2]) / 2 * k, cz = (z[1] + z[3]) / 2 * k;
    x.strokeStyle = 'rgba(0,0,0,.8)'; x.strokeText(key, cx, cz); x.fillStyle = col; x.fillText(key, cx, cz);
  }
}
function showLoadInfo(id) {
  const box = $('loadInfo'); if (!box) return;
  const ov = store.get('ls:ov:' + id, null);
  box.innerHTML = (ov ? `<img src="${ov}" alt="">` : '') + '<p id="loadTip"></p>';
  let i = Math.floor(Math.random() * TIPS.length); const set = () => { const t = $('loadTip'); if (t) t.textContent = 'Consejo: ' + TIPS[i++ % TIPS.length]; };
  set(); clearInterval(showLoadInfo.t); showLoadInfo.t = setInterval(set, 3500);
}
async function loadGame(id) {
  $('loading').hidden = false; $('loadMsg').textContent = 'Cargando ' + (MAPS.find(m => m.id === id)?.name || id) + '…';
  showLoadInfo(id);
  await new Promise(r => setTimeout(r, 30));
  const data = mapCache[id] || (mapCache[id] = await loadMap(id));
  let W, wing = null;
  // mundo: geometría importada + props (con colisión) + paredes invisibles en trampas; en 2v2 además barricadas
  const prep = () => {
    const L2 = data.layers.map(l => ({ ...l, cls: l.cls.slice(), top: l.top ? l.top.slice() : l.top, bot: l.bot ? l.bot.slice() : l.bot, h: l.h ? l.h.slice() : l.h }));
    if (data.layers.flags) L2.flags = data.layers.flags.slice();
    const W2 = buildWorld(data.info, L2);
    if (!data.bsp) applyFixes(W2, id); // los arreglos eran para los mapas anteriores
    refineSites(W2);
    if (data.mesh) buildVis(W2, data.mesh);
    const props = data.mesh && !data.bsp ? placeProps(W2, buildNav(W2), id) : []; // los .bsp ya traen todo
    if (W2.vis) for (let l = 0; l < W2.L; l++) { const T = W2.top[l], Cc = W2.cls[l], V = W2.vis; for (let i = 0; i < T.length; i++) if (Cc[i] === 2 && !(V[i] >= T[i])) V[i] = T[i] + 0.05; } // props: sí chocan
    if (data.mesh) sealTraps(W2, buildNav(W2));
    return { W: W2, props };
  };
  if (G.cfg.size === 2 && ['comp', 'casual', 'retake'].includes(G.cfg.mode || 'comp')) {
    if (!data.wing) { const b = prep(); const r = applyWingman(b.W, buildNav(b.W)); data.wing = { W: b.W, nav: buildNav(b.W), r, props: b.props }; }
    W = data.wing.W; G.nav = data.wing.nav; wing = data.wing.r; G.props = data.wing.props;
  } else {
    if (!data.full) { const b = prep(); data.full = { W: b.W, nav: buildNav(b.W), props: b.props }; }
    W = data.full.W; G.nav = data.full.nav; G.props = data.full.props;
  }
  G.W = W; G.info = data.info; G.wingSite = wing ? wing.site : null;
  G.mapName = MAPS.find(m => m.id === id)?.name || id;
  // escena nueva
  while (scene.children.length) scene.remove(scene.children[0]);
  trajLine = null; pings.length = 0;
  if (mapMesh) mapMesh.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  const built = data.bsp ? buildFromBsp(data.bsp, data.info) : data.mesh ? buildFromModel(W, data.mesh, data.info, id, G.nav) : buildMeshes(W, id); mapMesh = built.mesh; scene.add(mapMesh);
  // mapas de GoldSrc: sus túneles/ventiletas miden 48 u (pensados para el hull agachado de 36 u): agachado más bajo
  PM.hCrouch = (data.bsp ? 44 : 54) * 0.0254; PM.eyeCrouch = (data.bsp ? 38 : 46) * 0.0254;
  applyPrefs();
  try { BRK = makeBreakables(W, data.info, mapMesh); } catch (e) { BRK = null; console.warn('rompibles', e); }
  if (wing && wing.cells.length) mapMesh.add(wingmanMesh(W, wing.cells));
  if (G.props && G.props.length) scene.add(propsMesh(G.props));
  if (data.mesh && !data.bsp) { try { scene.add(buildDecor(W, G.nav, id, data.info)); } catch (e) { console.warn('decor', e); } }
  buildEnvironment(scene, W, id, QUALITY);
  renderer.shadowMap.needsUpdate = true;
  fx = makeFx(scene); fx.floorAt = (x, z, y) => floorAt(G.W, x, z, y + 0.2);
  radarImg = radarImage(W, G.nav); preloadVMs(); preloadNades();
  try { const c = document.createElement('canvas'); c.width = c.height = 320; c.getContext('2d').drawImage(radarImg, 0, 0, 320, 320); store.set('ls:ov:' + id, c.toDataURL('image/jpeg', 0.8)); } catch (e) { /* sin lugar: no pasa nada */ }
  clearInterval(showLoadInfo.t);
  for (const p of G.players.values()) { if (p.model) { p.model = null; p.tag = null; } }
  for (const d of dropMeshes.values()) scene.remove(d); dropMeshes.clear();
  bombMesh = null;
  loaded = true;
  $('loading').hidden = true;
}

// ---------------- modelos de otros jugadores ----------------
function tagSprite(name, team) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 48; const x = c.getContext('2d');
  x.font = 'bold 30px Rajdhani, sans-serif'; x.textAlign = 'center'; x.fillStyle = 'rgba(0,0,0,.5)'; const w = Math.min(250, x.measureText(name).width + 20); x.fillRect(128 - w / 2, 4, w, 40);
  x.fillStyle = team === 'T' ? '#f0c060' : '#8ab8ff'; x.fillText(name, 128, 35);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true, sizeAttenuation: false }));
  s.scale.set(0.1, 0.019, 1); s.renderOrder = 20; return s;
}
const espMat = new THREE.MeshBasicMaterial({ color: '#ff3030', wireframe: true, depthTest: false, transparent: true, opacity: 0.8 });
const espGeo = new THREE.BoxGeometry(0.7, 1.8, 0.7); espGeo.translate(0, 0.9, 0);
function updateModels(dt) {
  const P = me();
  for (const p of G.players.values()) {
    const local = p.id === myId;
    const mk = p.team + skinIdx(p);
    if (!p.model || p.modelTeam !== mk) {
      if (p.model) scene.remove(p.model);
      p.model = makePlayerModel(p.team, skinIdx(p)); p.modelTeam = mk; scene.add(p.model);
      p.tag = null;
      const esp = new THREE.Mesh(espGeo, espMat); esp.renderOrder = 19; esp.visible = false; p.model.add(esp); p.esp = esp;
      const fl = fx.muzzleMesh(); p.model.userData.gun.add(fl); p.mflash = fl;
      const bl = new THREE.Mesh(blobGeo, blobMat); bl.rotation.x = -Math.PI / 2; bl.position.y = 0.025; bl.renderOrder = 2; p.model.add(bl); p.blob = bl;
    }
    const m = p.model;
    // posición (los remotos se interpolan; los bots en el host ya están al día)
    if (!local && !(isHost() && p.bot) && p.nx !== undefined) interpRemote(p, dt);
    // en primera persona se ve solo de la cintura para abajo (piernas al mirar al piso) y la sombra
    const fp = local && !M.spec && P && P.alive;
    const hide = local && !M.spec && !fp && M.deadT < 0.01 || (M.spec === p.id);
    m.visible = !hide && (p.alive || (p.deadT || 0) > 0);
    if (!m.visible) continue;
    m.userData.chest.visible = !fp;
    const back = fp ? 0.2 + Math.max(0, -(p.pitch || 0)) * 0.12 : 0;
    m.position.set(p.x + Math.sin(p.yaw) * back, p.y, p.z + Math.cos(p.yaw) * back); m.rotation.y = p.yaw;
    if (p.blob) { const dk = p.alive ? 0 : Math.min(1, (p.deadT || 0) / 1.2); p.blob.scale.set(1, 1 + dk * 1.6, 1); p.blob.position.z = dk * 0.75 * (p.deadDir || 1); p.blob.position.x = fp ? 0 : 0; }
    if (!p.alive) p.deadT = Math.min(3, (p.deadT || 0) + dt * 2.5);
    const sp = Math.hypot(p.vx || 0, p.vz || 0);
    setModelGun(m, p.alive ? (p.wpn || 'knife') : null, finOf(p.fin, p.wpn || 'knife'));
    if (p.mflash && p.wpn) { const gi = gunInfo(p.wpn); p.mflash.position.set(0, gi.muzzle[1] * 1.12, -gi.muzzle[0] * 1.12 - 0.05); if (p.mflash.parent !== m.userData.gun) m.userData.gun.add(p.mflash); }
    poseModel(m, { speed: p.alive ? sp : 0, duck: p.duck || 0, pitch: p.pitch || 0, onGround: p.onGround !== false, dead: p.alive ? 0 : p.deadT, deadDir: p.deadDir, deadSide: p.deadSide, fire: Math.max(0, p.flashT || 0), reload: p.alive && p.reloading, fp }, dt);
    if (p.mflash) { p.flashT = (p.flashT || 0) - dt; p.mflash.visible = p.flashT > 0; if (p.mflash.visible) p.mflash.rotation.z = Math.random() * 3; }
    // nombres de compañeros
    if (P && p.team === P.team && !local && p.alive) { if (!p.tag) { p.tag = tagSprite(p.name, p.team); m.add(p.tag); } p.tag.visible = true; p.tag.position.y = 2.15 - (p.duck || 0) * 0.45; }
    else if (p.tag) p.tag.visible = false;
    p.esp.visible = !!(admin('ls.wall') && P && p.team !== P.team && p.alive);
    // pasos
    if (!local && p.alive && sp > 3.6 && p.onGround !== false) { p.stepT = (p.stepT || 0) - dt; if (p.stepT <= 0) { p.stepT = 0.34; const sf = surfAt(p.x, p.y, p.z); A.sfxStep([p.x, p.y, p.z], Math.min(1.4, sp / 4.5), sf); if (sf === 1) fx.dust([p.x, p.y, p.z]); } }
  }
}
// jugadores remotos: se dibujan 100 ms en el pasado, entre dos posiciones recibidas; si faltan paquetes, se
// extrapola con la velocidad un rato corto y después se acerca suave
const INTERP = 0.1;
function interpRemote(p, dt) {
  const S = p.snaps, t = performance.now() / 1000 - INTERP;
  if (!S || S.length < 2) { const k = Math.min(1, dt * 14); p.x += (p.nx - p.x) * k; p.y += (p.ny - p.y) * k; p.z += (p.nz - p.z) * k; p.yaw += angDiff(p.nyaw || 0, p.yaw || 0) * k; return; }
  let i = S.length - 1; while (i > 0 && S[i - 1][0] > t) i--;
  let x, y, z, yaw, pitch;
  if (i > 0 && S[i][0] >= t) {
    const a = S[i - 1], b = S[i], k = Math.max(0, Math.min(1, (t - a[0]) / Math.max(1e-3, b[0] - a[0])));
    x = a[1] + (b[1] - a[1]) * k; y = a[2] + (b[2] - a[2]) * k; z = a[3] + (b[3] - a[3]) * k; yaw = a[4] + angDiff(b[4], a[4]) * k; pitch = a[5] + (b[5] - a[5]) * k;
  } else {
    const b = S[S.length - 1], ex = Math.min(0.15, Math.max(0, t - b[0]));
    x = b[1] + (p.vx || 0) * ex; y = b[2]; z = b[3] + (p.vz || 0) * ex; yaw = b[4]; pitch = b[5];
  }
  const k = Math.min(1, dt * 25);
  if (!isFinite(p.x) || Math.hypot(x - p.x, z - p.z) > 3) { p.x = x; p.y = y; p.z = z; } else { p.x += (x - p.x) * k; p.y += (y - p.y) * k; p.z += (z - p.z) * k; }
  p.yaw = yaw; p.pitch = pitch;
}
// tipo de piso bajo un punto (para el sonido de los pasos)
function surfAt(x, y, z) {
  const S = G.W && G.W.surf; if (!S) return G.cfg.map === 'dust2' ? 1 : 2;
  const gx = Math.floor(x / S.sc), gz = Math.floor(z / S.sc); if (gx < 0 || gz < 0 || gx >= S.sm || gz >= S.sm) return 2;
  return S.surf[gz * S.sm + gx] || 2;
}
// sombras reales de los jugadores: el modelo se aplasta contra el piso en la dirección del sol (sombra planar).
// El stencil evita que se oscurezca dos veces donde se superponen brazos y piernas.
const SUN = new THREE.Vector3(0.45, 0.62, 0.3).normalize();
const shScene = new THREE.Scene(), shRoot = new THREE.Group(); shRoot.matrixAutoUpdate = false; shScene.add(shRoot);
const shMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.42, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, stencilWrite: true, stencilFunc: THREE.NotEqualStencilFunc, stencilZPass: THREE.ReplaceStencilOp });
function renderPlayerShadows() {
  const lx = SUN.x / SUN.y, lz = SUN.z / SUN.y; let ref = 1;
  shScene.overrideMaterial = shMat;
  for (const p of G.players.values()) {
    const m = p.model; if (!m || !m.visible || Math.hypot(m.position.x - camera.position.x, m.position.z - camera.position.z) > 45) continue;
    const h = m.position.y + 0.025, par = m.parent;
    shRoot.matrix.set(1, -lx, 0, h * lx, 0, 0, 0, h, 0, -lz, 1, h * lz, 0, 0, 0, 1);
    const ch = m.userData.chest, chv = ch.visible, esp = p.esp, ev = esp && esp.visible, tag = p.tag, tv = tag && tag.visible, fl = p.mflash, fv = fl && fl.visible, bl = p.blob;
    ch.visible = true; if (esp) esp.visible = false; if (tag) tag.visible = false; if (fl) fl.visible = false; if (bl) bl.visible = false;
    shMat.stencilRef = ref++; shRoot.add(m);
    renderer.render(shScene, camera);
    par.add(m); ch.visible = chv; if (esp) esp.visible = ev; if (tag) tag.visible = tv; if (fl) fl.visible = fv; if (bl) bl.visible = true;
    if (ref > 250) break;
  }
}
// sombra suave debajo de cada jugador (oclusión de contacto)
const blobGeo = new THREE.PlaneGeometry(0.95, 0.95);
const blobMat = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const r = g.createRadialGradient(32, 32, 2, 32, 32, 31); r.addColorStop(0, 'rgba(0,0,0,0.4)'); r.addColorStop(0.6, 'rgba(0,0,0,0.16)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); return new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }); })();
// armas en el piso y bomba
const dropMeshes = new Map(); let bombMesh = null, bombLight = null, beepT = 0;
function updateDrops(dt) {
  for (const [id, d] of G.drops) {
    let m = dropMeshes.get(id);
    if (!m) { m = gunMesh(d.w); m.scale.setScalar(1.2); m.userData.ry = Math.random() * 6; m.rotation.set(0, m.userData.ry, Math.PI / 2 * 0.98); scene.add(m); dropMeshes.set(id, m); }
    const u = d.s && d.T ? Math.min(1, (performance.now() - (d.t0 || 0)) / 1000 / d.T) : 1;
    if (u < 1) { // en vuelo: arco entre la mano y donde cae, girando
      const h = Math.max(0.25, d.s[1] - d.y) * 0.35 + 0.3;
      m.position.set(d.s[0] + (d.x - d.s[0]) * u, d.s[1] + (d.y + 0.04 - d.s[1]) * u + h * 4 * u * (1 - u), d.s[2] + (d.z - d.s[2]) * u);
      m.rotation.set(u * 5, m.userData.ry + u * 3, Math.PI / 2 * 0.98 * u);
    } else { m.position.set(d.x, d.y + 0.04, d.z); m.rotation.set(0, m.userData.ry, Math.PI / 2 * 0.98); }
  }
  for (const [id, m] of dropMeshes) if (!G.drops.has(id)) { scene.remove(m); dropMeshes.delete(id); }
  const b = G.bomb;
  if (!bombMesh) { bombMesh = new THREE.Group(); const proc = gunMesh('c4'); proc.scale.setScalar(1.6); bombMesh.add(proc); c4World().then(m => { m.scale.setScalar(1.3); bombMesh.remove(proc); bombMesh.add(m); }).catch(() => {}); scene.add(bombMesh); bombLight = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: '#ff2020' })); bombLight.position.set(-0.05, 0.05, 0.03); bombMesh.add(bombLight); }
  bombMesh.visible = b.state === 'planted' || b.state === 'dropped' || b.state === 'defused';
  if (bombMesh.visible) bombMesh.position.set(b.x, b.y + 0.05, b.z);
  if (b.state === 'planted') {
    const t = Math.max(0, b.t), iv = Math.max(0.12, Math.min(1, t / 35));
    beepT -= dt; bombLight.visible = beepT > iv * 0.6;
    if (beepT <= 0) { beepT = iv; A.sfxBeep([b.x, b.y, b.z], t < 10); }
  } else bombLight.visible = false;
}

// ---------------- jugador local: mover, disparar, plantar ----------------
let sendT = 0, botSendT = 0;
function updateLocal(dt) {
  const P = me(); if (!P || !M.pl) return;
  const p = M.pl;
  syncInv();
  if (!P.alive) { M.deadT += dt; return; }
  M.drawT -= dt; M.fireT -= dt; M.nadeCd -= dt; M.pickCd -= dt; if (M.inspect) M.inspect = Math.max(0, M.inspect - dt);
  if (M.reloadT > 0) { M.reloadT -= dt; if (M.reloadT <= 0) finishReload(); }
  if (M.rescope && M.fireT <= 0) { if (curId() === 'awp' || curId() === 'ssg08') M.scope = M.rescope; M.rescope = 0; }
  const id = curId(), w = WEAPONS[id] || WEAPONS.knife;
  // movimiento
  const frozen = G.phase === 'freeze' || M.plantT > 0 || M.defusing || buyOpen && false;
  let f = 0, s = 0;
  if (!buyOpen) { if (keys.has('KeyW')) f += 1; if (keys.has('KeyS')) f -= 1; if (keys.has('KeyD')) s += 1; if (keys.has('KeyA')) s -= 1; }
  if (touchState.mx || touchState.mz) { f = -touchState.mz; s = touchState.mx; }
  const inp = { f: frozen ? 0 : f, s: frozen ? 0 : s, jump: !frozen && keys.has('Space'), crouch: keys.has('ControlLeft') || keys.has('ControlRight'), walk: keys.has('ShiftLeft') || keys.has('ShiftRight') };
  let max = (w.speed || 250) * U * (M.scope && w.cat === 'sniper' ? 0.5 : M.scope ? 0.7 : 1);
  if (M.tagT > 0) { M.tagT -= dt; max *= 0.45 + 0.55 * (1 - Math.min(1, M.tagT / 0.4)); }
  if (id === 'c4' || WEAPONS[id]?.cat === 'grenade') max = 245 * U;
  if (admin('ls.speed')) max *= 1.6;
  let t = dt, fall = 0;
  const wasGround = p.onGround;
  while (t > 1e-6) { const h = Math.min(t, 1 / 120); const fv = movePlayer(G.W, p, inp, h, max); if (fv) fall = fv; t -= h; }
  // no atravesar a otros jugadores
  for (const q of G.players.values()) {
    if (q.id === myId || !q.alive || Math.abs(q.y - p.y) > 1.6) continue;
    const dx = p.x - q.x, dz = p.z - q.z, d = Math.hypot(dx, dz);
    if (d < 0.62 && d > 1e-4) { const k = (0.62 - d) / d; const nx = p.x + dx * k, nz = p.z + dz * k; if (!blocked(G.W, nx, nz, p.y, p.h, PM.r)) { p.x = nx; p.z = nz; } }
  }
  if (fall) { const dmg = fallDamage(fall); if (dmg > 0) req('fall', { d: dmg }); A.sfxLand(null, dmg > 0); }
  if (p.y < -20 && !M.voidSent) { M.voidSent = true; req('fall', { d: 999 }); }
  // pasos propios
  const sp = Math.hypot(p.vx, p.vz);
  if (p.onGround && sp > 3.6) { M.stepT -= dt; if (M.stepT <= 0) { M.stepT = 0.36; A.sfxStep(null, 0.45, surfAt(p.x, p.y, p.z)); } }
  M.bob += dt * sp * 1.4 * (p.onGround ? 1 : 0);
  // copiar al roster (para radar, balas de otros, etc.)
  P.x = p.x; P.y = p.y; P.z = p.z; P.yaw = p.yaw; P.pitch = p.pitch; P.duck = p.duck; P.vx = p.vx; P.vz = p.vz; P.onGround = p.onGround; P.wpn = id; P.h = p.h; P.scoped = M.scope > 0;
  // retroceso: se recupera cuando no se dispara
  if (M.fireT < -0.06) { M.pp = Math.max(0, M.pp - (w.recover || 9) * dt * (1 + M.pp * 0.15)); M.py *= Math.exp(-dt * 7); if (M.pp < 0.4) M.shots = 0; }
  if (!mouseL) M.trig = false;
  // disparar / granadas / bomba
  const wcat = (WEAPONS[id] || {}).cat;
  if (wcat === 'grenade') {
    // como CS2: apretás para sacar el seguro y soltás para tirar (der. = suave, ambos = medio)
    if ((mouseL || mouseR) && !M.nadeHold && M.throwT <= 0) M.nadeHold = mouseL && mouseR ? 0.5 : mouseL ? 1 : 0.001;
    if (mouseL && mouseR && M.nadeHold) M.nadeHold = 0.5;
    if (M.nadeHold && !mouseL && !mouseR && M.drawT <= 0 && M.throwT <= 0) {
      if (G.phase === 'freeze') { hud.center('Esperá a que empiece la ronda', 1000); M.nadeHold = 0; }
      else { M.throwT = 0.45; M.throwPow = M.nadeHold; M.nadeHold = 0; M.vmEv = { kind: 'throw' }; }
    }
    if (M.throwT > 0) { const prev = M.throwT; M.throwT -= dt; if (prev > 0.35 && M.throwT <= 0.35) throwNade(M.throwPow ?? 1); }
  } else if (id === 'c4') {
    const site = zoneAt(G.W, p.x, p.z) & 12;
    if (mouseL && site && p.onGround && G.phase === 'live' && M.drawT <= 0) {
      if (!M.plantT) A.sfxPlantKey();
      const prev = M.plantT; M.plantT += dt;
      if (Math.floor(prev * 4) !== Math.floor(M.plantT * 4)) A.sfxPlantKey();
      hud.progress('Plantando la bomba…', M.plantT / ROUND.plant);
      if (M.plantT >= ROUND.plant) { M.plantT = 0; hud.progress(null); req('plant', { x: p.x, y: p.y, z: p.z }); }
    } else {
      if (M.plantT) hud.progress(null);
      M.plantT = 0;
      if (mouseL && !site && !M.trig) { hud.center('Tenés que estar en un sitio de bomba (A o B)', 1300); M.trig = true; }
    }
  } else if (mouseL && !buyOpen) fireLocal();
  // desactivar
  if (M.defusing) {
    const b = G.bomb;
    if (b.state !== 'planted' || !keys.has('KeyE') || Math.hypot(p.x - b.x, p.z - b.z) > 1.9) stopDefuse();
    else {
      M.defT += dt; const dur = P.inv.kit ? ROUND.kit : ROUND.defuse;
      hud.progress(P.inv.kit ? 'Desactivando (con kit)…' : 'Desactivando…', M.defT / dur);
      if (M.defT >= dur) { req('defok', {}); M.defusing = false; hud.progress(null); }
    }
  } else if (!M.plantT) hud.progress(null);
  // juntar armas pisándolas / la bomba
  if (M.pickCd <= 0) {
    for (const d of G.drops.values()) {
      if (Math.hypot(d.x - p.x, d.z - p.z) > 0.9 || Math.abs(d.y - p.y) > 1.2) continue;
      const age = (performance.now() - (d.t0 || 0)) / 1000; if (age < (d.T || 0) + 0.1) continue;
      const isN = WEAPONS[d.w]?.cat === 'grenade';
      if (d.w === 'defuser' ? (P.team === 'CT' && !P.inv.kit) : isN ? P.inv.g.length < 4 && !P.inv.g.includes(d.w === 'incendiary' ? 'molotov' : d.w) && !P.inv.g.includes(d.w) : !slotWeapon(slotOf(d.w) === 1 ? 'p' : 's')) { req('take', { id: d.id }); M.pickCd = 0.6; break; }
    }
    const b = G.bomb;
    if (P.team === 'T' && b.state === 'dropped' && Math.hypot(b.x - p.x, b.z - p.z) < 1.0 && Math.abs(b.y - p.y) < 1.4) { req('take', { id: 'c4' }); M.pickCd = 0.8; }
  }
  // pistas
  let hint = '';
  const ld = lookDrop();
  if (ld) hint = 'E · agarrar ' + WNAME(ld.w);
  if (P.team === 'CT' && G.bomb.state === 'planted' && Math.hypot(p.x - G.bomb.x, p.z - G.bomb.z) < 1.7 && !M.defusing) hint = 'Mantené E para desactivar';
  if (id === 'c4' && (zoneAt(G.W, p.x, p.z) & 12) && !M.plantT && G.phase === 'live') hint = 'Mantené clic para plantar';
  hud.hint(hint);
  // enviar estado
  sendT -= dt;
  if (sendT <= 0) {
    sendT = 0.05;
    send('p', [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2), +p.yaw.toFixed(3), +p.pitch.toFixed(3), +p.duck.toFixed(2), id, (M.scope ? 1 : 0) | (p.onGround ? 0 : 2) | (M.reloadT > 0 ? 4 : 0), +p.vx.toFixed(2), +p.vz.toFixed(2)], { volatile: true });
  }
}
function sendBots(dt) {
  botSendT -= dt; if (botSendT > 0) return; botSendT = 0.05;
  const arr = [];
  for (const p of G.players.values()) if (p.bot && p.pl) arr.push([p.id, +p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2), +p.yaw.toFixed(3), +p.pitch.toFixed(3), +(p.duck || 0).toFixed(2), p.wpn || 'knife', (p.scoped ? 1 : 0) | (p.onGround ? 0 : 2) | (p.reloading ? 4 : 0), +(p.vx || 0).toFixed(2), +(p.vz || 0).toFixed(2)]);
  if (arr.length) send('pb', arr, { volatile: true });
}

// ---------------- modelos de primera persona originales ----------------
let srcCur = null; const srcVMs = {};
// ventanita de vista previa del arma en la configuración: el mismo modelo de primera persona con el FOV y los
// offsets elegidos (viewmodel_fov se toma horizontal en 4:3, como en CS)
settings.hooks.vmPreview = (cv, S) => {
  const w = cv.clientWidth || 600, h = cv.clientHeight || 230;
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); r.setPixelRatio(Math.min(devicePixelRatio, 1.5)); r.setSize(w, h, false); r.setClearColor(0, 0);
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.95;
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight('#fff4e0', '#5a4a38', 1.6)); const dl = new THREE.DirectionalLight('#ffffff', 2.2); dl.position.set(-1, 2, 1); sc.add(dl);
  const cam = new THREE.PerspectiveCamera(50, w / h, 0.01, 10);
  const P = me(); let wid = (P && P.alive && curId()) || 'ak47'; if (!VMAP[wid]) wid = 'ak47';
  let V = null, raf = 0, last = performance.now(), dead = false;
  loadVModel(VMAP[wid]).then(def => { if (dead) return; V = makeVModel(def); V.gunMats = GMAT; try { if (!nativeGun(V, wid) && gunGeo(wid, 0)) attachGun(V, gunGeo(wid, 0)); } catch (e) { } sc.add(V.holder); playSeq(V, 'idle'); }).catch(() => {});
  const loop = () => {
    if (dead) return; raf = requestAnimationFrame(loop);
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (V) { updateVModel(V, dt); const U = 0.0254, t = now / 1000, bb = (S.bob ?? 1); V.holder.position.set((S.vmX ?? 1) * U + Math.cos(t * 3) * 0.004 * bb, (S.vmZ ?? -1) * U + Math.abs(Math.sin(t * 3)) * 0.005 * bb, -(S.vmY ?? 1) * U); }
    // FOV vertical para 4:3 a partir de viewmodel_fov; si la ventanita es más ancha se ve igual de alto que en el juego
    cam.fov = 2 * Math.atan(Math.tan((S.vmFov || 60) * Math.PI / 360) * 0.75) * 180 / Math.PI; cam.aspect = w / h; cam.updateProjectionMatrix();
    r.render(sc, cam);
  };
  loop();
  return { update() {}, stop() { dead = true; cancelAnimationFrame(raf); r.dispose(); try { r.forceContextLoss(); } catch (e) { } } };
};
function buildSrcVM(wid, fin = 0) {
  const name = VMAP[wid], key = wid + ':' + fin; if (!name || srcVMs[key]) return;
  srcVMs[key] = 'loading';
  loadVModel(name).then(def => { const v = makeVModel(def); v.holder.name = 'srcvm'; v.gunMats = GMAT; try { if (wid === 'dualies') { attachGun(v, gunGeo(wid, fin), null, /_R_/); attachGun(v, gunGeo(wid, fin), null, /_L_/); } else if (!(fin === 0 && nativeGun(v, wid)) && gunGeo(wid, fin)) attachGun(v, gunGeo(wid, fin)); } catch (e) { console.warn('arma', wid, e); } srcVMs[key] = v; }).catch(e => { console.warn('viewmodel', name, e); srcVMs[key] = 'fail'; });
}
// precarga de todos los modelos de primera persona al entrar (de a uno, sin trabar): así al comprar o cambiar de
// arma ya están listos y no aparece por un instante el modelo de repuesto
function preloadVMs() { const ids = Object.keys(VMAP); let k = 0; const step = () => { if (k >= ids.length) return; buildSrcVM(ids[k++], 0); setTimeout(step, 60); }; step(); }
function srcVM(wid, dt) {
  const name = VMAP[wid]; if (!name) { srcCur = null; return null; }
  const P = me(), fin = P ? finOf(P.fin, wid) : 0, key = wid + ':' + fin;
  let V = srcVMs[key];
  if (!V) { buildSrcVM(wid, fin); return null; }
  if (typeof V === 'string') return null;
  const unsil = wid === 'm4a4' || wid === 'p2000';
  if (srcCur !== V) { if (srcCur) srcCur.holder.visible = false; srcCur = V; playSeq(V, 'draw', { unsil }); V.wid = wid; }
  if (M.vmEv) { const e = M.vmEv; M.vmEv = null; if (playSeq(V, e.kind, { unsil, dur: e.dur }) === 0 && e.kind.startsWith('stab')) playSeq(V, 'shoot', { unsil }); }
  updateVModel(V, dt, unsil);
  if (M.inspect && P && P.alive) { const c = (WEAPONS[wid] || {}).cat; inspectPose(V, 1 - M.inspect / (M.inspectDur || 3), c === 'knife' || c === 'pistol' ? c : 'rifle'); }
  return V;
}
// ---------------- cámara, arma en primera persona y HUD ----------------
const tmpE = new THREE.Euler(0, 0, 0, 'YXZ');
let specList = [];
function nextSpec(d) {
  const P = me(); if (!P) return;
  specList = [...G.players.values()].filter(p => p.alive && p.team === P.team);
  if (!specList.length) specList = [...G.players.values()].filter(p => p.alive);
  if (!specList.length) { M.spec = null; return; }
  const i = specList.findIndex(p => p.id === M.spec);
  M.spec = specList[(i + d + specList.length) % specList.length].id;
}
function updateCamera(dt) {
  const P = me(); if (!P || !M.pl) return;
  let x, y, z, yaw, pitch, wid = curId(), team = P.team, scoped = M.scope, vsk = skinIdx(P), vfin = finOf(P.fin, curId());
  if (P.alive) {
    const p = M.pl; x = p.x; y = p.y + eyeH(p); z = p.z;
    yaw = p.yaw - M.py * 0.5 * D2R; pitch = p.pitch + M.pp * 0.5 * D2R + (M.punchHit || 0) * 0.02;
    M.spec = null;
  } else if (M.deadT < 2.2 || !G.players.size) {
    const p = M.pl, k = Math.min(1, M.deadT / 1.2);
    yaw = p.yaw + M.deadT * 0.3; pitch = -0.35 * k + p.pitch * (1 - k);
    x = p.x + Math.sin(yaw) * 2.6 * k; z = p.z + Math.cos(yaw) * 2.6 * k; y = p.y + eyeH(p) * (1 - k) + 1.6 * k;
    wid = null;
  } else {
    const sp = M.spec && G.players.get(M.spec);
    if (!sp || !sp.alive) nextSpec(1);
    const s = M.spec && G.players.get(M.spec);
    if (s) { x = s.x; y = s.y + eyeH({ duck: s.duck || 0 }); z = s.z; yaw = s.yaw; pitch = s.pitch; wid = s.wpn || 'knife'; team = s.team; scoped = s.scoped ? 1 : 0; vsk = skinIdx(s); vfin = finOf(s.fin, wid); }
    else { const p = M.pl; x = p.x; y = p.y + 3; z = p.z; yaw = p.yaw; pitch = -0.5; wid = null; }
  }
  M.punchHit = Math.max(0, (M.punchHit || 0) - dt * 6);
  // temblor
  if (M.shake > 0) { M.shake = Math.max(0, M.shake - dt * 1.5); x += (Math.random() - 0.5) * M.shake * 0.12; y += (Math.random() - 0.5) * M.shake * 0.12; }
  camera.position.set(x, y, z);
  tmpE.set(pitch, yaw, 0); camera.quaternion.setFromEuler(tmpE);
  const w = WEAPONS[wid];
  const zoom = scoped && w && w.scope ? w.scope[Math.max(0, scoped - 1)] : 1;
  const fov = 74 / zoom;
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  A.setListener(x, y, z, yaw);
  // arma en primera persona
  const sniperScope = scoped && w && w.cat === 'sniper';
  vm.visible = !!wid && !sniperScope && (P.alive || M.spec);
  if (vm.visible) {
    setViewGun(vm, wid, team, vsk, vfin);
    const u = vm.userData, b = u.base || [0.13, -0.14, -0.36];
    M.sway[0] += (M.swayT[0] - M.sway[0]) * Math.min(1, dt * 10); M.sway[1] += (M.swayT[1] - M.sway[1]) * Math.min(1, dt * 10);
    M.swayT[0] *= Math.exp(-dt * 10); M.swayT[1] *= Math.exp(-dt * 10);
    M.kick = Math.max(0, M.kick - dt * 7);
    { // resorte del retroceso visual (sub-pasos para que sea estable)
      const n = Math.ceil(dt / 0.004), h = dt / n; for (let k = 0; k < n; k++) { const acc = -650 * M.rk - 38 * M.rkV; M.rkV += acc * h; M.rk += M.rkV * h; } }
    const bob = P.alive ? M.bob : G.time * 2, ba = P.alive ? Math.min(1, Math.hypot(M.pl.vx, M.pl.vz) / 5) : 0.3;
    let ox = b[0] + Math.cos(bob) * 0.008 * ba * (CFG.bob ?? 1) + M.sway[0] * 0.02, oy = b[1] + Math.abs(Math.sin(bob)) * 0.01 * ba * (CFG.bob ?? 1) - M.sway[1] * 0.02, oz = b[2] + (w && w.cat === 'knife' ? M.kick * 0.045 : 0);
    { const S = settings.S, U = 0.0254; ox += ((S.vmX ?? 1) - 1) * U; oz -= ((S.vmY ?? 1) - 1) * U; oy += ((S.vmZ ?? -1) + 1) * U; } // viewmodel_offset_x/y/z
    let rx = M.kick * 0.12, ry = 0, rz = 0;
    // el modelo de Source ya trae su animación de disparo (el retroceso visual del juego original): el resorte
    // propio sólo se usa con los brazos de repuesto
    const base0 = [ox, oy, oz, rx, ry, rz];
    if (P.alive && w && w.cat !== 'knife') { const r = M.rk; oz += r * 0.18; oy += r * 0.02; rx += r * 0.45; rz += r * M.rkR; ry += r * M.rkY * 0.4; }
    vm.userData.reloadK = 0;
    if (P.alive && M.reloadT > 0) {
      const rw = WEAPONS[curId()], k = 1 - M.reloadT / rw.reload, e = Math.sin(Math.min(1, k) * Math.PI);
      // el arma se inclina hacia la izquierda y arriba para dejar ver el cambio de cargador; al final, golpe de palanca
      rx += e * 0.25; oy -= e * 0.03; rz += e * 0.55; ox -= e * 0.03;
      if (k > 0.86) { const c = Math.sin((k - 0.86) / 0.14 * Math.PI); oz += c * 0.03; rx -= c * 0.15; }
      vm.userData.reloadK = k;
    }
    if (P.alive && M.drawT > 0) { const k = Math.max(0, M.drawT) / 0.6; oy -= k * 0.25; rx -= k * 0.8; }
    if (P.alive && M.inspect) {
      // inspección como en CS, distinta según el arma: [t, rx, ry, rz, dx, dy, dz]
      const cat = (WEAPONS[wid] || {}).cat, D = M.inspectDur || 3;
      const KF = cat === 'knife'
        ? [[0, 0, 0, 0, 0, 0, 0], [0.18, -0.15, 0.55, 0.3, -0.05, 0.03, 0], [0.42, -0.15, 0.6, 2.9, -0.06, 0.05, 0.02], [0.6, -0.1, 0.5, 3.1, -0.06, 0.05, 0.02], [0.8, 0.3, -0.4, 0.2, 0.02, 0.0, 0], [1, 0, 0, 0, 0, 0, 0]] // gira la hoja y la mira de los dos lados
        : cat === 'pistol'
          ? [[0, 0, 0, 0, 0, 0, 0], [0.22, 0.1, 0.95, 0.35, -0.05, 0.03, 0.03], [0.48, 0.12, 1.05, 0.4, -0.06, 0.035, 0.03], [0.68, -0.25, -0.5, -1.2, -0.02, 0.05, 0.02], [0.86, -0.22, -0.45, -1.1, -0.02, 0.045, 0.02], [1, 0, 0, 0, 0, 0, 0]]
          : [[0, 0, 0, 0, 0, 0, 0], [0.16, 0.08, 0.9, 0.5, -0.08, 0.04, 0.02], [0.4, 0.1, 1.0, 0.55, -0.09, 0.045, 0.02], [0.55, 0.45, 0.35, -0.2, -0.04, 0.02, -0.02], [0.7, -0.3, -0.45, -0.95, -0.02, 0.06, 0.03], [0.88, -0.28, -0.4, -0.9, -0.02, 0.055, 0.03], [1, 0, 0, 0, 0, 0, 0]]; // costado, cargador y el otro costado
      const k = 1 - M.inspect / D; let i = 0; while (i < KF.length - 2 && k > KF[i + 1][0]) i++;
      const A0 = KF[i], A1 = KF[i + 1], t = Math.max(0, Math.min(1, (k - A0[0]) / (A1[0] - A0[0]))), e = t * t * (3 - 2 * t), L = j => A0[j] + (A1[j] - A0[j]) * e;
      rx += L(1); ry += L(2); rz += L(3); ox += L(4); oy += L(5); oz += L(6);
      if (cat !== 'knife' && cat !== 'pistol' && k > 0.42 && k < 0.62) vm.userData.reloadK = 0.08 + (k - 0.42) / 0.2 * 0.18; // la mano izquierda toca el cargador
    }
    if (wid === 'knife' && P.alive && M.fireT > 0) { const k = M.fireT / (M.knife2 ? 1 : 0.45); ry -= Math.sin(k * Math.PI) * 0.9; oz -= Math.sin(k * Math.PI) * 0.08; }
    if (M.plantT > 0 || M.defusing) { oy -= 0.08; rx -= 0.7; }
    if (P.alive && M.nadeHold) { oy -= 0.03; oz += 0.06; rx += 0.25; }
    if (P.alive && M.throwT > 0) { const k = 1 - M.throwT / 0.45; const e = Math.sin(Math.min(1, k) * Math.PI); oz -= e * 0.25; oy += e * 0.12; rx -= e * 1.2; if (k > 0.4) vm.userData.gun.visible = false; } else vm.userData.gun.visible = true;
    const r0 = u.rot || [0, 0, 0];
    u.hold.position.set(ox, oy, oz); u.hold.rotation.set(rx + r0[0], ry + r0[1], rz + r0[2]);
    updateViewArms(vm);
    // modelo de primera persona original (brazos + arma + animaciones de CS) si existe para esta arma
    const sv = srcVM(wid, dt);
    if (sv) {
      for (const c of vm.children) if (c !== sv.holder) c.visible = false;
      if (sv.holder.parent !== vm) vm.add(sv.holder);
      sv.holder.visible = vm.userData.gun.visible !== false || !(M.throwT > 0);
      const S = settings.S, U = 0.0254;
      // offsets de CS2 (x derecha, y adelante, z arriba) + bob, retroceso y recarga del código de siempre (más suaves)
      const [bx, by, bz, brx, bry, brz] = base0;
      sv.holder.position.set((S.vmX ?? 1) * U + (bx - b[0]) * 0.5, (S.vmZ ?? -1) * U + (by - b[1]) * 0.5, -(S.vmY ?? 1) * U + (bz - b[2]) * 0.4);
      sv.holder.rotation.set(brx * 0.35, bry * 0.35, brz * 0.2);
    } else { for (const c of vm.children) if (c.name !== 'srcvm') c.visible = true; if (srcCur) srcCur.holder.visible = false; }
    { const f = sv ? vmFovSrc : vmFovProc; if (Math.abs(vmCam.fov - f) > 0.01) { vmCam.fov = f; vmCam.updateProjectionMatrix(); } }
    vm.position.copy(camera.position); vm.quaternion.copy(camera.quaternion);
    vmCam.position.copy(camera.position); vmCam.quaternion.copy(camera.quaternion);
    if (window.__ls && window.__ls.vmView) { const c = window.__ls.vmView; vm.updateMatrixWorld(); vmCam.position.copy(vm.localToWorld(new THREE.Vector3(c[0], c[1], c[2]))); vmCam.up.copy(camera.up); vmCam.lookAt(vm.localToWorld(new THREE.Vector3(c[3], c[4], c[5]))); }
    const fl = u.flash; M.flashT = (M.flashT || 0) - dt;
    const gi = gunInfo(wid);
    if (fl) { fl.visible = M.flashT > 0 && w && !w.silent && w.cat !== 'knife'; if (fl.visible) { fl.position.set(0, gi.muzzle[1], -gi.muzzle[0] - 0.05).applyMatrix4(u.hold.matrix); fl.quaternion.setFromEuler(u.hold.rotation); fl.rotateZ(Math.random() * 3); } }
    // posición de la boca del arma (para trazadoras)
    u.gun.updateWorldMatrix(true, false);
    muzzleV.set(0, gi.muzzle[1], -gi.muzzle[0]).applyMatrix4(u.gun.matrixWorld);
  }
  // HUD de mira
  $('scope').hidden = !sniperScope;
  const showX = !sniperScope && (P.alive || M.spec) && !(w && w.cat === 'sniper');
  let gap = CFG.xGap;
  if (!CFG.xStatic && P.alive && w && w.dmg) gap = CFG.xGap + Math.max(0, inaccuracy(w, { speed: Math.hypot(M.pl.vx, M.pl.vz), vy: M.pl.vy, onGround: M.pl.onGround, duck: M.pl.duck, scoped: M.scope > 0, shots: M.shots }) * 900 - 1);
  hud.crosshair(Math.min(60, gap), showX, CFG);
}
let hudT = 0, radarT = 0;
const radarDots = [];
function drawRadarNow(P) {
  if (!radarImg || !M.pl) return;
  const S = M.spec && !P.alive ? G.players.get(M.spec) : P;
  const view = S && S !== P ? { x: S.x, z: S.z, yaw: S.yaw } : { x: M.pl.x, z: M.pl.z, yaw: M.pl.yaw }; view.zoom = CFG.radarZoom ?? 1; view.rot = CFG.radarRot !== false;
  radarDots.length = 0;
  for (const p of G.players.values()) {
    if (!p.alive) continue;
    if (p.team === P.team) radarDots.push({ x: p.id === myId ? M.pl.x : p.x, z: p.id === myId ? M.pl.z : p.z, col: p.team === 'T' ? '#f0c060' : '#8ab8ff', me: p.id === myId });
    else if (p.seenT > G.time - 0.6) radarDots.push({ x: p.x, z: p.z, col: '#ff4040' });
  }
  for (const q of pings) radarDots.push({ x: q.x, z: q.z, col: '#ffd34a', ping: true });
  drawRadar($('radar'), radarImg, G.W, view, radarDots, { s: G.bomb.state, x: G.bomb.x, z: G.bomb.z, seen: P.team === 'T' || G.bomb.seen || G.bomb.state === 'planted' }, P.team);
}
function updateHud(dt) {
  const P = me(); if (!P) return;
  syncTeamSel(P);
  hurtFlash = Math.max(0, hurtFlash - dt * 1.4);
  hud.el.hurt.style.opacity = Math.max(hurtFlash, P.alive && P.hp <= 30 ? 0.22 + 0.14 * Math.sin(G.time * 4) : 0).toFixed(2);
  M.blind = Math.max(0, M.blind - dt);
  hud.el.flash.style.opacity = Math.min(1, M.blind / 1.6).toFixed(3);
  drawRadarNow(P);
  hudT -= dt; if (hudT > 0) return; hudT = 0.05;
  const S = M.spec && !P.alive ? G.players.get(M.spec) : P;
  hud.money(P.money);
  hud.vitals(S ? S.hp : 0, S ? S.ar : 0, S && S.helm, S && S.team === 'CT' && S.inv && S.inv.kit);
  const id = P.alive ? curId() : S && S.wpn, w = WEAPONS[id];
  const slot = M.slot, a = (slot === 'p' || slot === 's') ? M.ammo[slot] : null;
  hud.ammo(id ? WNAME(id) : '', a ? a[0] : 0, a ? a[1] : 0, P.alive && !!a && !!w && !!w.mag);
  const list = [];
  if (P.alive) {
    if (P.inv.p) list.push({ key: 1, slot: 'p', id: P.inv.p, name: WNAME(P.inv.p) });
    if (P.inv.s) list.push({ key: 2, slot: 's', id: P.inv.s, name: WNAME(P.inv.s) });
    list.push({ key: 3, slot: 'k', id: 'knife', name: 'Cuchillo' });
    if (P.inv.zeus) list.push({ key: 3, slot: 'z', id: 'zeus', name: 'Zeus x27' });
    if (P.inv.g.length) list.push({ key: 4, slot: 'g', id: P.inv.g.join(), name: P.inv.g.map(WNAME).join(' · ') });
    if (P.inv.c4) list.push({ key: 5, slot: 'c4', id: 'c4', name: 'C4' });
    if (P.inv.kit) list.push({ key: '', slot: 'kit', id: 'kit', name: 'Kit de desactivación' });
  }
  hud.slots(list.filter(x => x.slot !== 'g' && x.slot !== 'kit'), M.slot, P.alive ? P.inv.g : [], M.gsel);
  const planted = G.bomb.state === 'planted';
  hud.clock(G.timeLeft, planted || G.phase === 'live' && G.timeLeft < 10, planted);
  const sT = G.score[G.half], sCT = G.score[1 - G.half];
  let aT = 0, nT = 0, aC = 0, nC = 0;
  for (const p of G.players.values()) { if (p.team === 'T') { nT++; if (p.alive) aT++; } else { nC++; if (p.alive) aC++; } }
  const ls = t => [...G.players.values()].filter(p => p.team === t).map(p => ({ n: p.name, a: p.alive }));
  hud.score(sT, sCT, ls('T'), ls('CT'));
  { const cb = canBuyNow(); hud.el.buyHint.hidden = !(cb && !buyOpen); hud.el.cartIco.classList.toggle('on', cb); }
  if (buyOpen) { if (!canBuyNow()) toggleBuy(false); else { const el = $('buyTime'); const md = G.cfg.mode || 'comp'; const bt = md === 'dm' || md === 'practice' ? 0 : G.phase === 'freeze' ? Math.ceil(G.timeLeft + ROUND.buy) : Math.max(0, Math.ceil(ROUND.buy - ((md === 'casual' ? 135 : ROUND.live) - G.timeLeft))); el.textContent = bt ? '0:' + String(bt).padStart(2, '0') : '∞'; } }
  // espectador
  const specEl = hud.el.spec;
  if (!P.alive && M.deadT > 2.2 && S && S !== P) { specEl.hidden = false; specEl.innerHTML = 'Mirando a <b>' + S.name.replace(/</g, '') + '</b><small>Clic o Espacio: siguiente</small>'; }
  else specEl.hidden = true;
  if (G.phase === 'freeze' && P.alive) hud.center('La ronda empieza en ' + Math.ceil(G.timeLeft) + ' · B para comprar', 0);
  else if (G.phase === 'freeze') { } else if (hud.el.centerMsg.textContent.startsWith('La ronda empieza')) hud.center('', 1);
  // tabla
  const showBoard = keys.has('Tab') || G.phase === 'over';
  hud.el.board.hidden = !showBoard;
  if (showBoard) hud.el.board.innerHTML = renderBoard(G, myId);
  // radar: el dibujo va en drawRadarNow (cada frame); acá solo el avistaje (más caro) 10 veces por segundo
  radarT -= 0.05;
  if (radarT <= 0 && radarImg) {
    radarT = 0.1;
    const view = S && S !== P ? { x: S.x, z: S.z, yaw: S.yaw } : { x: M.pl.x, z: M.pl.z, yaw: M.pl.yaw };
    const eye = [M.pl.x, M.pl.y + 1.6, M.pl.z];
    // detectar enemigos a la vista (para el radar)
    // un enemigo aparece en el radar si lo ve cualquier compañero vivo (dentro de su campo de visión), como en CS
    const mates = [...G.players.values()].filter(q => q.alive && q.team === P.team);
    for (const p of G.players.values()) {
      if (!p.alive || p.team === P.team) continue;
      for (const q of mates) {
        const dx = p.x - q.x, dz = p.z - q.z, d = Math.hypot(dx, dz); if (d > 60) continue;
        if (q.id !== myId && Math.abs(angDiff(Math.atan2(-dx, -dz), q.yaw || 0)) > 1.25) continue;
        const e = q.id === myId ? eye : [q.x, q.y + 1.6, q.z];
        if (canSee(G.W, G.nades, e, [p.x, p.y, p.z, 1])) { p.seenT = G.time; break; }
      }
    }
    const z = zoneAt(G.W, view.x, view.z);
    hud.el.zoneName.textContent = z & 4 ? 'Sitio A' : z & 8 ? 'Sitio B' : z & 16 ? 'Base T' : z & 32 ? 'Base CT' : '';
  }
}

// ---------------- bucle ----------------
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.phase === 'lobby' && menu && renderer) { menu.render(renderer, dt); return; }
  if (G.phase !== 'lobby' && loaded) {
    const ff = (window.__ls && window.__ls.ff) || 0;
    for (let k = 0; k < ff; k++) simulate(0.05);
    simulate(dt);
    fx.quality = CFG.fx ?? 2; fx.update(dt, G.time, camera);
    if (fpsEl && CFG.showFps) { fpsAcc += dt; fpsN++; if (fpsAcc > 0.5) { fpsEl.textContent = Math.round(fpsN / fpsAcc) + ' FPS'; fpsAcc = 0; fpsN = 0; } } updatePings(); fx.tickDebug(dt); updateTraj();
    updateCamera(dt);
    updateHud(dt);
    if (window.__ls.cam) { const c = window.__ls.cam; camera.position.set(c[0], c[1], c[2]); camera.lookAt(c[3], c[4], c[5]); if (camera.fov !== 74) { camera.fov = 74; camera.updateProjectionMatrix(); } vm.visible = false; }
    // si estoy muerto, el clic cambia a quién miro
    if (mouseL && me() && !me().alive && M.deadT > 2.2) { mouseL = false; nextSpec(1); }
    renderer.clear();
    renderer.render(scene, camera);
    if (QUALITY > 0) renderPlayerShadows();
    renderer.clearDepth();
    if (vm.visible) renderer.render(vmScene, vmCam);
  }
}
function simulate(dt) {
  {
    G.time += dt;
    if (isHost() && H) { H.tick(dt); if (BOTS) BOTS.tick(dt); sendBots(dt); }
    else if (G.phase !== 'lobby') { G.timeLeft -= dt; if (G.bomb.state === 'planted') G.bomb.t -= dt; }
    updateLocal(dt);
    updateNades(dt);
    updateModels(dt);
    updateDrops(dt);
  }
}

// ---------------- admin ----------------
const admin = id => !!(window.Arcade && Arcade.admin && Arcade.admin.get(id));
function setupAdmin() {
  if (!Arcade.admin) return;
  Arcade.admin.define([
    { id: 'ls.god', label: 'Inmortal', type: 'toggle' },
    { id: 'ls.wall', label: 'Ver a través de paredes', type: 'toggle' },
    { id: 'ls.aim', label: 'Aimbot (al disparar)', type: 'toggle' },
    { id: 'ls.norecoil', label: 'Sin retroceso ni dispersión', type: 'toggle' },
    { id: 'ls.ammo', label: 'Balas infinitas', type: 'toggle' },
    { id: 'ls.speed', label: 'Súper velocidad', type: 'toggle' },
    { id: 'ls.money', label: 'Plata al máximo', type: 'button' },
    { id: 'ls.heal', label: 'Curarme + chaleco', type: 'button' },
    { id: 'ls.kill', label: 'Matar a los enemigos', type: 'button' },
    { id: 'ls.win', label: 'Ganar la ronda', type: 'button' },
  ]);
  Arcade.admin.on('ls.god', v => req('adm', { a: 'god', v: !!v }));
  Arcade.admin.on('ls.money', () => req('adm', { a: 'money' }));
  Arcade.admin.on('ls.heal', () => req('adm', { a: 'heal' }));
  Arcade.admin.on('ls.kill', () => req('adm', { a: 'kill' }));
  Arcade.admin.on('ls.win', () => req('adm', { a: 'win' }));
}

// ---------------- menú / sala ----------------
const thumbCache = {};
function mapThumb(id) {
  if (!thumbCache[id]) thumbCache[id] = (async () => {
    try { const data = mapCache[id] || (mapCache[id] = await loadMap(id)); data.W = data.W || buildWorld(data.info, data.layers); return radarImage(data.W); } catch (e) { console.warn(e); return null; }
  })();
  return thumbCache[id];
}
let menu = null;
function lobbyInit() { menu.show(); menuBackdrop(); }
function renderLobby() { menu.refresh(); menuBackdrop(); }
// fondo del menú: el mapa elegido, como en CS2
let menuBgId = null;
async function menuBackdrop() {
  const id = G.cfg.map; if (!menu || menuBgId === id) return; menuBgId = id;
  try {
    const data = mapCache[id] || (mapCache[id] = await loadMap(id));
    if (G.cfg.map !== id || G.phase !== 'lobby') return;
    menu.setBackdrop(data.bsp ? buildFromBsp(data.bsp, data.info).mesh : null, data.info);
  } catch (e) { console.warn('fondo del menú', e); }
}
function pushCfg() { if (!isHost()) return; send('cfg', { cfg: G.cfg, prefs: G.prefs }); renderLobby(); }
const readySet = new Set(); let startTimer = 0;
async function startGame(d) {
  G.cfg = d.cfg; G.prefs = d.prefs || {};
  menu.hide();
  await loadGame(G.cfg.map);
  G.phase = 'loading';
  $('hud').hidden = false;
  if (isHost()) {
    readySet.add(myId);
    const tryBegin = () => { const all = (ctx.players || []).every(p => readySet.has(p.id)); if (all || startTimer <= 0) beginMatch(); };
    startTimer = 1; setTimeout(() => { startTimer = 0; tryBegin(); }, 15000);
    G.tryBegin = tryBegin; tryBegin();
  } else send('ready', {}, { to: ctx.hostId });
  updateClickPlay();
  if (!isTouch) lockPointer();
}
let begun = false;
function beginMatch() {
  if (begun) return; begun = true;
  H = makeHost(G);
  const humans = (ctx.players || [{ id: myId, name: 'Jugador', slot: 0 }]).map(p => { const pr = G.prefs[p.id] || {}; return { id: p.id, name: p.name, slot: p.slot, pref: pr.t ?? -1 }; });
  H.setup(humans);
  BOTS = makeBots(G, H);
  H.startMatch();
}
function backToLobby() {
  G.phase = 'lobby'; begun = false; H = null; BOTS = null; readySet.clear();
  G.players.clear(); G.drops.clear(); G.nades.length = 0;
  $('hud').hidden = true; hud.banner(null); clearInterval(overIv);
  document.exitPointerLock && document.exitPointerLock();
  lobbyInit(); updateClickPlay();
}
function becomeHost() {
  // el host se fue: tomo la simulación con lo último que sé
  if (G.phase === 'lobby' || G.phase === 'loading' || H) return;
  H = makeHost(G); H.adopt();
  BOTS = makeBots(G, H);
  for (const p of G.players.values()) {
    if (p.bot && p.alive) { BOTS.place(p, [p.x, p.y, p.z, p.yaw]); }
    if (!p.dmgBy) p.dmgBy = {};
  }
  BOTS.roundStart();
  H.markDirty();
}

// ---------------- arranque ----------------
async function boot() {
  hud.init();
  await Promise.all([loadGunModels(), loadAgents(), loadArms()]);
  initRender(); applyPrefs();
  setupTouch();
  requestAnimationFrame(frame);
  ctx = await Arcade.ready();
  myId = ctx.me.id;
  if (!ctx.players || !ctx.players.length) ctx.players = [ctx.me];
  $('loading').hidden = true;
  setupAdmin();
  // red
  for (const t of HOSTMSG) Arcade.on(t, (d, from, meta) => { if (isHost() && H) H.handle(t, d, from, meta || {}); });
  for (const t of ['st', 'rs', 'ev', 'p', 'pb', 'sh', 'nd']) Arcade.on(t, (d, from) => { if (t === 'ev' || t === 'st' || t === 'rs') { if (isHost()) return; } onMsg(t, d, from); });
  Arcade.on('cfg', d => { if (isHost()) return; G.cfg = d.cfg; G.prefs = d.prefs || {}; if (G.phase === 'lobby') renderLobby(); });
  Arcade.on('pref', (d, from) => { if (!isHost()) return; G.prefs[from] = d; pushCfg(); });
  Arcade.on('start', d => { if (G.phase === 'lobby') startGame(d); });
  Arcade.on('ready', (d, from) => { if (!isHost()) return; readySet.add(from); if (G.tryBegin) G.tryBegin(); });
  Arcade.on('hello', (d, from) => { if (isHost() && G.phase === 'lobby') pushCfg(); });
  Arcade.onPlayerLeft(id => {
    ctx.players = (ctx.players || []).filter(p => p.id !== id);
    const p = G.players.get(id);
    if (p && isHost() && H) { p.bot = true; p.name = p.name + ' (bot)'; if (p.alive && BOTS) BOTS.place(p, [p.x, p.y, p.z, p.yaw]); H.markDirty(); }
    if (G.phase === 'lobby') renderLobby();
    if (isHost() && G.tryBegin) G.tryBegin();
  });
  Arcade.onHostChanged(() => { if (isHost()) { becomeHost(); if (G.phase === 'lobby') { lobbyInit(); pushCfg(); } } });
  // el host local inicia 'start' con G.emit → también llega a onMsg; lo resolvemos acá
  const origEmit = G.emit;
  G.emit = (type, data) => { if (type === 'start') { send('start', data); startGame(data); return; } origEmit(type, data); };
  for (const b of document.querySelectorAll('#teamSel [data-side]')) b.onclick = () => pickTeam(b.dataset.side);
  $('tsClose').onclick = () => openTeamSel(false);
  menu = makeMenu({
    G, store, MAPS, LENGTHS, DIFF, MODES, mapThumb, WNAME, ctx: () => ctx, myId: () => myId, isHost, pushCfg,
    openSettings: (cb) => settings.open(cb),
    sendPref: (pr) => { G.prefs[myId] = pr; if (isHost()) pushCfg(); else send('pref', pr, { to: ctx.hostId }); },
    onStart: () => { A.initAudio(); if (!isTouch) goFullscreen(); G.emit('start', { cfg: G.cfg, prefs: G.prefs }); },
  });
  G.prefs[myId] = menu.myPref();
  lobbyInit();
  if (!isHost()) { send('hello', {}, { to: ctx.hostId }); send('pref', G.prefs[myId], { to: ctx.hostId }); } else pushCfg();
}
boot();
// para pruebas automáticas
window.__ls = { G, M, me, req, get fx() { return fx; }, get H() { return H; }, get BOTS() { return BOTS; }, get camera() { return camera; }, get vm() { return vm; }, get scene() { return scene; }, keys, look, onKey, traceShot, targets, shotDir, setMouse(l, r) { mouseL = l; mouseR = !!r; if (r) secondary(); } };
