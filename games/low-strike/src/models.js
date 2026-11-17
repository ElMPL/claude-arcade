// Modelos low-poly hechos con cajas: jugadores (T y CT), armas (en mano, en el piso y en primera persona).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { WEAPONS } from './weapons.js';

const C = (h) => new THREE.Color(h);
// caja con color por vértice. b = [w,h,d, x,y,z, color, rx?]
function boxes(list) {
  const geos = [];
  for (const b of list) {
    const [w, h, d, x, y, z, col, rx = 0, ry = 0] = b;
    const g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
    if (rx) g.rotateX(rx); if (ry) g.rotateY(ry);
    g.translate(x, y, z);
    const c = C(col), n = g.attributes.position.count, arr = new Float32Array(n * 3);
    const nor = g.attributes.normal.array;
    for (let i = 0; i < n; i++) {
      // sombreado barato por cara (arriba más claro)
      const k = 0.82 + nor[i * 3 + 1] * 0.18 + nor[i * 3] * 0.05;
      arr[i * 3] = c.r * k; arr[i * 3 + 1] = c.g * k; arr[i * 3 + 2] = c.b * k;
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    geos.push(g);
  }
  return mergeGeometries(geos);
}
export const MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
const MAT_VM = new THREE.MeshLambertMaterial({ vertexColors: true, depthTest: true });

// ---------------- armas ----------------
const BLK = '#2a2c30', GRY = '#4a4e55', WOOD = '#8a5a32', TAN = '#b59b6e', GRN = '#556b45', SIL = '#9aa0a8';
const SPEC = {
  glock: { k: 'p', body: '#3a3c40' }, usp: { k: 'p', body: '#30343a', sil: 0.13 }, p2000: { k: 'p', body: '#30343a' },
  dualies: { k: 'p', body: SIL }, p250: { k: 'p', body: '#3d3f44' }, tec9: { k: 'p', body: '#2d2f33', long: 1.25, mag: 1.6 },
  fiveseven: { k: 'p', body: '#4b4f55' }, cz75: { k: 'p', body: '#3a3a3a', mag: 1.3 }, deagle: { k: 'p', body: SIL, big: 1.35 }, r8: { k: 'r', body: '#55585e' },
  mac10: { k: 's', body: BLK, len: 0.26, mag: 0.16 }, mp9: { k: 's', body: BLK, len: 0.32, stock: 1 }, mp7: { k: 's', body: '#3a3d3f', len: 0.34, stock: 1 },
  mp5: { k: 's', body: BLK, len: 0.42, stock: 1, sil: 0.14, curve: 1 }, ump: { k: 's', body: '#2f3134', len: 0.42, stock: 1, mag: 0.18 },
  p90: { k: 'p90', body: '#3a3c3e' }, bizon: { k: 's', body: BLK, len: 0.44, stock: 1, helical: 1 },
  nova: { k: 'sg', body: BLK, wood: '#3d3f42' }, xm1014: { k: 'sg', body: BLK, wood: BLK, auto: 1 }, sawedoff: { k: 'sg', body: '#3d3d3d', wood: WOOD, short: 1 }, mag7: { k: 'sg', body: '#3a3d40', wood: BLK, short: 1, box: 1 },
  m249: { k: 'mg', body: '#3a3d36' }, negev: { k: 'mg', body: '#45453c' },
  galil: { k: 'ar', body: '#3c3a33', wood: '#4a4535', mag: 'curve' }, famas: { k: 'bp', body: '#3a3f44', handle: 1 },
  ak47: { k: 'ar', body: '#2e2e2e', wood: WOOD, mag: 'curve' }, m4a4: { k: 'ar', body: '#2f3236', wood: '#2f3236', rail: 1 }, m4a1s: { k: 'ar', body: '#33363a', wood: '#33363a', rail: 1, sil: 0.2 },
  sg553: { k: 'ar', body: '#4b4a40', wood: '#4b4a40', scope: 1, mag: 'curve' }, aug: { k: 'bp', body: '#5b6650', scope: 1 },
  ssg08: { k: 'sn', body: '#3d4a5a', len: 0.95 }, awp: { k: 'sn', body: '#3e5a3a', len: 1.12, big: 1 }, g3sg1: { k: 'sn', body: '#2f3230', len: 1.0, auto: 1 }, scar20: { k: 'sn', body: '#2c2f33', len: 1.0, auto: 1 },
  zeus: { k: 'z', body: '#2a3a6a' }, knife: { k: 'kn' },
  he: { k: 'gr', body: '#3d4a2c' }, flash: { k: 'gr', body: '#9aa3ad' }, smoke: { k: 'gr', body: '#5a6670', tall: 1 }, molotov: { k: 'mo' }, incendiary: { k: 'gr', body: '#a2552c', tall: 1 }, decoy: { k: 'gr', body: '#6b6b5b' },
  c4: { k: 'c4' }, defuser: { k: 'kit' },
};
const gcache = new Map();
export function gunGeo(id) {
  if (gcache.has(id)) return gcache.get(id);
  const s = SPEC[id] || { k: 'p', body: BLK };
  const b = s.body || BLK, L = [];
  switch (s.k) {
    case 'p': { const k = s.big || 1, lg = s.long || 1;
      L.push([0.034 * k, 0.04 * k, 0.19 * k * lg, 0, 0.02 * k, -0.06 * k, b], [0.03 * k, 0.11 * k, 0.05 * k, 0, -0.05 * k, 0.015 * k, '#222', 0.25], [0.02, 0.025, 0.04, 0, -0.012 * k, -0.035, '#222']);
      if (s.mag) L.push([0.026, 0.09 * s.mag, 0.035, 0, -0.1, -0.04, '#222']);
      if (s.sil) L.push([0.03, 0.03, s.sil, 0, 0.02, -0.15 * k - s.sil / 2, '#1d1d1d']);
      break; }
    case 'r': L.push([0.03, 0.035, 0.17, 0, 0.03, -0.1, b], [0.045, 0.05, 0.05, 0, 0.02, -0.02, b], [0.03, 0.11, 0.045, 0, -0.04, 0.03, WOOD, 0.3]); break;
    case 's': { const l = s.len;
      L.push([0.05, 0.075, l, 0, 0, -l / 2 + 0.06, b], [0.032, 0.11, 0.045, 0, -0.08, 0.02, '#222', 0.2], [0.03, s.mag || 0.15, 0.04, 0, -0.1, -l * 0.35, '#1e1e1e', s.curve ? 0.25 : 0], [0.02, 0.02, 0.08, 0, 0.01, -l + 0.02, '#1b1b1b']);
      if (s.stock) L.push([0.03, 0.05, 0.16, 0, -0.01, 0.13, '#222']);
      if (s.sil) L.push([0.04, 0.04, s.sil, 0, 0.01, -l + 0.02 - s.sil / 2, '#1a1a1a']);
      if (s.helical) L.push([0.05, 0.05, 0.22, 0, -0.06, -0.2, '#2e2e2e']);
      break; }
    case 'p90': L.push([0.06, 0.1, 0.48, 0, 0, -0.14, b], [0.04, 0.03, 0.3, 0, 0.065, -0.18, '#222'], [0.025, 0.025, 0.06, 0, 0, -0.41, '#151515']); break;
    case 'sg': { const l = s.short ? 0.5 : 0.78;
      L.push([0.05, 0.07, 0.24, 0, 0, -0.06, b], [0.022, 0.022, l, 0, 0.02, -l / 2 - 0.12, '#1e1e1e'], [0.035, 0.035, 0.24, 0, -0.025, -0.3, s.wood, 0, 0]);
      if (!s.short) L.push([0.045, 0.08, 0.26, 0, -0.04, 0.17, s.wood]); else L.push([0.032, 0.11, 0.045, 0, -0.07, 0.04, '#222', 0.3]);
      if (s.box) L.push([0.035, 0.12, 0.05, 0, -0.08, -0.14, '#222']);
      break; }
    case 'mg': L.push([0.08, 0.1, 0.42, 0, 0, -0.08, b], [0.03, 0.03, 0.55, 0, 0.02, -0.55, '#1e1e1e'], [0.1, 0.11, 0.12, 0.06, -0.08, -0.08, '#3b3b2e'], [0.05, 0.08, 0.24, 0, -0.02, 0.24, '#2a2a2a'], [0.05, 0.03, 0.04, 0, -0.04, -0.75, '#222']); break;
    case 'ar': {
      L.push([0.05, 0.075, 0.32, 0, 0, -0.08, b], [0.022, 0.022, 0.32, 0, 0.015, -0.4, '#1d1d1d'], [0.048, 0.055, 0.22, 0, 0.0, -0.3, s.wood],
        [0.045, 0.085, 0.26, 0, -0.025, 0.18, s.wood], [0.03, 0.1, 0.04, 0, -0.07, 0.05, '#222', 0.3]);
      if (s.mag === 'curve') L.push([0.032, 0.15, 0.05, 0, -0.1, -0.11, '#2a2a2a', -0.35]); else L.push([0.032, 0.14, 0.045, 0, -0.1, -0.1, '#222', -0.1]);
      if (s.rail) L.push([0.03, 0.035, 0.18, 0, 0.055, -0.08, '#25282b']);
      if (s.sil) L.push([0.035, 0.035, s.sil, 0, 0.015, -0.56 - s.sil / 2 + 0.02, '#1a1a1a']);
      if (s.scope) L.push([0.04, 0.04, 0.16, 0, 0.07, -0.05, '#1e1e1e']);
      if (!s.rail && !s.scope) L.push([0.01, 0.03, 0.01, 0, 0.045, -0.5, '#1d1d1d']);
      break; }
    case 'bp': L.push([0.06, 0.1, 0.5, 0, 0, -0.08, b], [0.022, 0.022, 0.18, 0, 0.02, -0.42, '#1e1e1e'], [0.03, 0.12, 0.05, 0, -0.1, 0.06, '#222'], [0.03, 0.09, 0.04, 0, -0.08, -0.16, '#222', 0.2]);
      if (s.handle) L.push([0.02, 0.04, 0.34, 0, 0.08, -0.12, b]); if (s.scope) L.push([0.045, 0.045, 0.16, 0, 0.08, -0.08, '#1e1e1e']); break;
    case 'sn': { const l = s.len, k = s.big ? 1.15 : 1;
      L.push([0.055 * k, 0.08 * k, 0.36, 0, 0, -0.05, b], [0.024 * k, 0.024 * k, l * 0.55, 0, 0.015, -0.23 - l * 0.275, '#1d1d1d'],
        [0.05, 0.1 * k, 0.28, 0, -0.035, 0.24, b], [0.045, 0.045, 0.28, 0, 0.085, -0.06, '#181818'], [0.06, 0.06, 0.04, 0, 0.085, -0.2, '#181818'], [0.06, 0.06, 0.04, 0, 0.085, 0.08, '#181818'], [0.03, 0.08, 0.06, 0, -0.08, -0.02, '#222']);
      if (s.auto) L.push([0.035, 0.12, 0.05, 0, -0.1, -0.12, '#222']);
      break; }
    case 'z': L.push([0.04, 0.06, 0.16, 0, 0, -0.04, b], [0.03, 0.1, 0.045, 0, -0.06, 0.03, '#222', 0.25], [0.05, 0.04, 0.03, 0, 0.0, -0.13, '#e6c84a']); break;
    case 'kn': L.push([0.008, 0.035, 0.2, 0, 0.0, -0.14, '#c9cdd2'], [0.026, 0.03, 0.11, 0, -0.005, 0.02, '#222'], [0.04, 0.012, 0.012, 0, 0.0, -0.04, '#444']); break;
    case 'gr': { const h = s.tall ? 0.12 : 0.085; L.push([0.065, h, 0.065, 0, 0, 0, b], [0.03, 0.03, 0.03, 0, h / 2 + 0.015, 0, '#888'], [0.012, 0.06, 0.02, 0.03, h / 2, 0, '#999']); break; }
    case 'mo': L.push([0.06, 0.12, 0.06, 0, 0, 0, '#5d7a3a'], [0.03, 0.06, 0.03, 0, 0.09, 0, '#4d6a2a'], [0.035, 0.04, 0.035, 0, 0.13, 0, '#e8d6b0']); break;
    case 'c4': L.push([0.2, 0.06, 0.13, 0, 0, 0, '#b8a27a'], [0.07, 0.03, 0.05, 0.03, 0.04, 0, '#1d1d1d'], [0.05, 0.012, 0.03, 0.03, 0.056, 0, '#5bdc6d'], [0.18, 0.02, 0.02, 0, 0.035, -0.04, '#a33']); break;
    case 'kit': L.push([0.16, 0.05, 0.1, 0, 0, 0, '#2d3a55'], [0.04, 0.04, 0.12, 0.05, 0.03, 0, '#d4b13a']); break;
  }
  const g = boxes(L);
  gcache.set(id, g);
  return g;
}
export function gunMesh(id) { const m = new THREE.Mesh(gunGeo(id), MAT); return m; }

// ---------------- jugador ----------------
const LOOK = {
  T: { shirt: '#8a7350', pants: '#5d5446', skin: '#c79a74', head: '#2b2b2b', vest: '#6b5c40', boots: '#2b2620', glove: '#2b2b2b' },
  CT: { shirt: '#36495f', pants: '#2f3b4a', skin: '#c79a74', head: '#26303b', vest: '#232d38', boots: '#1d1f22', glove: '#1d1f22' },
};
const pcache = {};
function partGeos(team) {
  if (pcache[team]) return pcache[team];
  const c = LOOK[team];
  const ct = team === 'CT';
  const torso = boxes([
    [0.44, 0.52, 0.26, 0, 0.26, 0, c.shirt], [0.46, 0.4, 0.29, 0, 0.3, 0, c.vest],
    [0.2, 0.12, 0.08, 0.1, 0.38, -0.15, ct ? '#1b232c' : '#4d4230'], [0.3, 0.1, 0.2, 0, -0.01, 0, '#2a2620'],
  ]);
  const head = ct
    ? boxes([[0.22, 0.24, 0.23, 0, 0.12, 0, c.skin], [0.25, 0.12, 0.26, 0, 0.23, 0.005, '#3a4a3a'], [0.2, 0.06, 0.03, 0, 0.13, -0.12, '#111'], [0.06, 0.08, 0.05, 0, 0.12, 0.12, '#333']])
    : boxes([[0.22, 0.25, 0.23, 0, 0.12, 0, c.head], [0.2, 0.07, 0.02, 0, 0.14, -0.115, c.skin], [0.06, 0.03, 0.015, -0.05, 0.145, -0.125, '#111'], [0.06, 0.03, 0.015, 0.05, 0.145, -0.125, '#111']]);
  const leg = boxes([[0.15, 0.48, 0.16, 0, -0.24, 0, c.pants], [0.16, 0.44, 0.17, 0, -0.66, 0, c.pants], [0.16, 0.08, 0.24, 0, -0.86, -0.03, c.boots], [0.165, 0.12, 0.08, 0, -0.45, -0.07, ct ? '#222' : '#4d4537']]);
  const arm = boxes([[0.12, 0.3, 0.12, 0, -0.15, 0, c.shirt], [0.1, 0.28, 0.1, 0, -0.42, 0, c.shirt], [0.1, 0.09, 0.1, 0, -0.6, 0, c.glove]]);
  return (pcache[team] = { torso, head, leg, arm });
}
// el modelo mira hacia -z; pies en y=0
export function makePlayerModel(team) {
  const G = partGeos(team);
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.92; body.add(hips);
  const legL = new THREE.Mesh(G.leg, MAT), legR = new THREE.Mesh(G.leg, MAT);
  legL.position.set(-0.11, 0, 0); legR.position.set(0.11, 0, 0); hips.add(legL, legR);
  const chest = new THREE.Group(); chest.position.y = 0.0; hips.add(chest);
  const torso = new THREE.Mesh(G.torso, MAT); chest.add(torso);
  const neck = new THREE.Group(); neck.position.y = 0.53; chest.add(neck);
  const head = new THREE.Mesh(G.head, MAT); neck.add(head);
  const armL = new THREE.Mesh(G.arm, MAT), armR = new THREE.Mesh(G.arm, MAT);
  armR.position.set(0.27, 0.47, 0); armL.position.set(-0.27, 0.47, 0);
  chest.add(armL, armR);
  const gun = new THREE.Group(); gun.position.set(0.12, 0.3, -0.38); chest.add(gun);
  root.userData = { body, hips, legL, legR, chest, neck, armL, armR, gun, gunId: null, phase: 0 };
  return root;
}
export function setModelGun(root, id) {
  const u = root.userData; if (u.gunId === id) return; u.gunId = id;
  u.gun.clear();
  if (id) { const m = gunMesh(id); m.scale.setScalar(1.15); u.gun.add(m); }
}
// pose: speed (m/s), duck (0..1), pitch, onGround, dead (0..1)
export function poseModel(root, o, dt) {
  const u = root.userData;
  u.phase += dt * Math.min(o.speed, 6) * 2.4;
  const sw = Math.sin(u.phase) * Math.min(1, o.speed / 3) * 0.7;
  const d = o.duck;
  u.hips.position.y = 0.92 - d * 0.4;
  u.legL.rotation.x = sw - d * 1.1; u.legR.rotation.x = -sw - d * 1.1;
  if (!o.onGround) { u.legL.rotation.x = -0.5; u.legR.rotation.x = 0.3; }
  u.chest.rotation.x = d * 0.25;
  const p = Math.max(-1.2, Math.min(1.2, o.pitch));
  // brazos apuntando el arma según el pitch
  u.armR.rotation.x = -1.35 + p * 0.9 - d * 0.25; u.armL.rotation.x = -1.25 + p * 0.9 - d * 0.25;
  u.armR.rotation.z = 0.15; u.armL.rotation.z = -0.55; u.armL.position.z = -0.05;
  u.gun.position.set(0.04, 0.47 - Math.cos(p) * 0.08 + Math.sin(p) * 0.45 - 0.12, -0.42 * Math.cos(p));
  u.gun.rotation.x = p;
  u.neck.rotation.x = p * 0.5;
  u.body.rotation.x = 0; u.body.position.y = 0;
  if (o.dead > 0) { // caída hacia atrás
    u.body.rotation.x = Math.min(1, o.dead) * 1.45; u.body.position.y = Math.min(1, o.dead) * 0.15;
  }
}

// ---------------- primera persona ----------------
export function makeViewModel() {
  const g = new THREE.Group();
  const hold = new THREE.Group(); g.add(hold);
  const gun = new THREE.Group(); hold.add(gun);
  const arms = new THREE.Group(); hold.add(arms);
  g.userData = { hold, gun, arms, id: null, team: null };
  return g;
}
const armGeoCache = {};
function vmArms(team, kind) {
  const key = team + kind; if (armGeoCache[key]) return armGeoCache[key];
  const c = LOOK[team];
  const R = [[0.075, 0.075, 0.42, 0.06, -0.08, 0.25, c.shirt], [0.07, 0.07, 0.08, 0.04, -0.06, 0.02, c.glove]];
  const Lh = kind === 'two'
    ? [[0.07, 0.07, 0.42, -0.12, -0.12, 0.05, c.shirt, 0, 0.5], [0.068, 0.068, 0.08, -0.03, -0.05, -0.17, c.glove]]
    : kind === 'pistol' ? [[0.07, 0.07, 0.4, -0.07, -0.12, 0.22, c.shirt, 0, 0.25], [0.068, 0.068, 0.08, -0.02, -0.07, 0.03, c.glove]] : [];
  return (armGeoCache[key] = boxes([...R, ...Lh]));
}
export function setViewGun(vm, id, team) {
  const u = vm.userData; if (u.id === id && u.team === team) return; u.id = id; u.team = team;
  u.gun.clear(); u.arms.clear();
  if (!id) return;
  const cat = WEAPONS[id]?.cat || id;
  const m = new THREE.Mesh(gunGeo(id), MAT_VM); u.gun.add(m);
  if (cat === 'grenade' || id === 'c4') { m.scale.setScalar(0.7); m.position.set(0.02, 0.02, 0.0); }
  const kind = cat === 'pistol' ? 'pistol' : (cat === 'knife' || cat === 'grenade' || cat === 'c4' || cat === 'equip' || id === 'defuser') ? 'one' : 'two';
  u.arms.add(new THREE.Mesh(vmArms(team, kind), MAT_VM));
  // dónde se sostiene
  u.base = cat === 'pistol' ? [0.14, -0.15, -0.34] : cat === 'knife' ? [0.16, -0.16, -0.3] : cat === 'grenade' || cat === 'c4' ? [0.17, -0.19, -0.38] : cat === 'sniper' ? [0.13, -0.15, -0.36] : [0.13, -0.14, -0.36];
  vm.traverse(o => { o.renderOrder = 10; o.frustumCulled = false; });
}
