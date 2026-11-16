// Personajes sentados a la mesa, con skins: modelo + color + sombrero.
import { THREE, scene, makeCard } from './scene.js';

export const MODELS = [
  { id: 'pochi', name: 'Pochi' }, { id: 'gato', name: 'Gato' }, { id: 'oso', name: 'Oso' },
  { id: 'zorro', name: 'Zorro' }, { id: 'robot', name: 'Robot' }, { id: 'pato', name: 'Pato' },
];
export const COLORS = ['#e8505b', '#3b82f6', '#f2b931', '#3fae5a', '#9b6be0', '#f08a2c', '#22b8cf', '#f06fa8', '#8d6e63', '#e9e4dc'];
export const HATS = [
  { id: 'none', name: 'Nada' }, { id: 'gorra', name: 'Gorra' }, { id: 'boina', name: 'Boina' },
  { id: 'galera', name: 'Galera' }, { id: 'sombrero', name: 'Sombrero' }, { id: 'corona', name: 'Corona' },
];
export function randomSkin() {
  return { model: MODELS[Math.floor(Math.random() * MODELS.length)].id, color: COLORS[Math.floor(Math.random() * COLORS.length)], hat: HATS[Math.floor(Math.random() * HATS.length)].id };
}
export function validSkin(s) {
  return s && MODELS.some(m => m.id === s.model) && COLORS.includes(s.color) && HATS.some(h => h.id === s.hat) ? s : null;
}

const M = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });
const SPH = new THREE.SphereGeometry(1, 24, 18), BOX = new THREE.BoxGeometry(1, 1, 1), CYL = new THREE.CylinderGeometry(1, 1, 1, 24), CONE = new THREE.ConeGeometry(1, 1, 20);
function part(parent, geo, mat, [sx, sy, sz], [x, y, z], rot) {
  const m = new THREE.Mesh(geo, mat);
  m.scale.set(sx, sy, sz); m.position.set(x, y, z);
  if (rot) m.rotation.set(...rot);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}

function buildHead(head, skin, body) {
  const c = new THREE.Color(skin.color);
  const light = M(c.clone().lerp(new THREE.Color('#ffffff'), 0.55));
  const dark = M(c.clone().multiplyScalar(0.55));
  const white = M('#ffffff', { roughness: 0.3 }), black = M('#16121f', { roughness: 0.3 });
  const eyes = [];
  const eye = (x, y, z, s = 1) => {
    part(head, SPH, white, [0.065 * s, 0.08 * s, 0.04 * s], [x, y, z]);
    eyes.push(part(head, SPH, black, [0.032 * s, 0.042 * s, 0.025 * s], [x, y - 0.005, z + 0.03]));
    part(head, SPH, white, [0.01, 0.01, 0.01], [x + 0.012, y + 0.018, z + 0.05]);
  };
  switch (skin.model) {
    case 'robot': {
      const metal = M(c.clone().lerp(new THREE.Color('#9aa4b2'), 0.55), { metalness: 0.7, roughness: 0.35 });
      part(head, BOX, metal, [0.38, 0.32, 0.34], [0, 0, 0]);
      part(head, BOX, M('#10141c', { roughness: 0.2 }), [0.3, 0.1, 0.02], [0, 0.03, 0.172]);
      const glow = M('#5ef3ff', { emissive: '#5ef3ff', emissiveIntensity: 1.6 });
      eyes.push(part(head, SPH, glow, [0.04, 0.03, 0.01], [-0.07, 0.03, 0.185]), part(head, SPH, glow, [0.04, 0.03, 0.01], [0.07, 0.03, 0.185]));
      part(head, CYL, metal, [0.012, 0.16, 0.012], [0, 0.24, 0]);
      head.userData.antenna = part(head, SPH, M(skin.color, { emissive: skin.color, emissiveIntensity: 0.8 }), [0.04, 0.04, 0.04], [0, 0.33, 0]);
      part(head, CYL, metal, [0.05, 0.03, 0.05], [-0.2, 0, 0], [0, 0, Math.PI / 2]); part(head, CYL, metal, [0.05, 0.03, 0.05], [0.2, 0, 0], [0, 0, Math.PI / 2]);
      head.userData.top = 0.17;
      break;
    }
    default: {
      part(head, SPH, body, [0.22, 0.21, 0.21], [0, 0, 0]);
      eye(-0.075, 0.03, 0.17); eye(0.075, 0.03, 0.17);
      head.userData.top = 0.2;
      const pink = M('#ff8fab');
      if (skin.model === 'pochi') {
        part(head, SPH, pink, [0.04, 0.025, 0.01], [-0.13, -0.05, 0.16]); part(head, SPH, pink, [0.04, 0.025, 0.01], [0.13, -0.05, 0.16]);
        part(head, new THREE.TorusGeometry(1, 0.25, 6, 12, Math.PI), black, [0.03, 0.03, 0.03], [0, -0.07, 0.2], [0, 0, Math.PI]);
      } else if (skin.model === 'gato') {
        part(head, CONE, body, [0.07, 0.13, 0.05], [-0.13, 0.2, 0], [0, 0, 0.35]); part(head, CONE, body, [0.07, 0.13, 0.05], [0.13, 0.2, 0], [0, 0, -0.35]);
        part(head, CONE, pink, [0.04, 0.08, 0.02], [-0.125, 0.19, 0.03], [0, 0, 0.35]); part(head, CONE, pink, [0.04, 0.08, 0.02], [0.125, 0.19, 0.03], [0, 0, -0.35]);
        part(head, SPH, light, [0.09, 0.06, 0.05], [0, -0.07, 0.17]);
        part(head, SPH, pink, [0.025, 0.018, 0.015], [0, -0.04, 0.215]);
        [-1, 1].forEach(sd => [0, 1].forEach(k => part(head, BOX, M('#2a2235'), [0.12, 0.004, 0.004], [sd * 0.13, -0.06 - k * 0.02, 0.19], [0, 0, sd * (k ? -0.15 : 0.1)])));
      } else if (skin.model === 'oso') {
        part(head, SPH, body, [0.07, 0.07, 0.04], [-0.16, 0.17, 0]); part(head, SPH, body, [0.07, 0.07, 0.04], [0.16, 0.17, 0]);
        part(head, SPH, light, [0.04, 0.04, 0.02], [-0.16, 0.17, 0.03]); part(head, SPH, light, [0.04, 0.04, 0.02], [0.16, 0.17, 0.03]);
        part(head, SPH, light, [0.1, 0.075, 0.07], [0, -0.07, 0.16]);
        part(head, SPH, black, [0.035, 0.025, 0.02], [0, -0.04, 0.23]);
      } else if (skin.model === 'zorro') {
        part(head, CONE, body, [0.075, 0.18, 0.05], [-0.13, 0.23, 0], [0, 0, 0.25]); part(head, CONE, body, [0.075, 0.18, 0.05], [0.13, 0.23, 0], [0, 0, -0.25]);
        part(head, CONE, dark, [0.04, 0.07, 0.03], [-0.15, 0.3, 0.01], [0, 0, 0.25]); part(head, CONE, dark, [0.04, 0.07, 0.03], [0.15, 0.3, 0.01], [0, 0, -0.25]);
        part(head, CONE, M('#fffaf2'), [0.08, 0.17, 0.08], [0, -0.06, 0.24], [Math.PI / 2, 0, 0]);
        part(head, SPH, black, [0.025, 0.02, 0.02], [0, -0.06, 0.33]);
      } else if (skin.model === 'pato') {
        part(head, SPH, M('#f59f00'), [0.1, 0.035, 0.11], [0, -0.06, 0.2]);
        part(head, SPH, M('#e67700'), [0.09, 0.025, 0.1], [0, -0.09, 0.19]);
        part(head, CONE, body, [0.025, 0.09, 0.025], [0.02, 0.24, 0], [0, 0, -0.3]); part(head, CONE, body, [0.025, 0.07, 0.025], [-0.03, 0.23, 0], [0, 0, 0.3]);
      }
    }
  }
  eyes.forEach(e => { e.userData.sy = e.scale.y; });
  head.userData.eyes = eyes;
}

function buildHat(head, hat) {
  const y = head.userData.top || 0.2;
  const black = M('#1d1a24', { roughness: 0.5 }), brown = M('#6b4423', { roughness: 0.7 }), gold = M('#f2c14e', { metalness: 0.8, roughness: 0.3 });
  if (hat === 'gorra') {
    const cap = M('#c0392b');
    part(head, new THREE.SphereGeometry(1, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), cap, [0.215, 0.13, 0.215], [0, y - 0.05, 0]);
    part(head, CYL, cap, [0.13, 0.012, 0.12], [0, y - 0.04, 0.18]);
  } else if (hat === 'boina') {
    part(head, SPH, black, [0.22, 0.06, 0.22], [0.02, y - 0.01, 0], [0.1, 0, -0.15]);
    part(head, CYL, black, [0.012, 0.03, 0.012], [0.03, y + 0.05, 0]);
  } else if (hat === 'galera') {
    part(head, CYL, black, [0.22, 0.012, 0.22], [0, y - 0.02, 0]);
    part(head, CYL, black, [0.14, 0.24, 0.14], [0, y + 0.1, 0]);
    part(head, CYL, M('#c0392b'), [0.142, 0.035, 0.142], [0, y + 0.01, 0]);
  } else if (hat === 'sombrero') {
    part(head, CYL, brown, [0.34, 0.012, 0.34], [0, y - 0.03, 0]);
    part(head, CYL, brown, [0.15, 0.1, 0.15], [0, y + 0.02, 0]);
    part(head, CYL, M('#2a1a0d'), [0.152, 0.025, 0.152], [0, y - 0.015, 0]);
  } else if (hat === 'corona') {
    part(head, CYL, gold, [0.13, 0.06, 0.13], [0, y + 0.0, 0]);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; part(head, CONE, gold, [0.03, 0.07, 0.03], [Math.sin(a) * 0.12, y + 0.06, Math.cos(a) * 0.12]); }
    part(head, SPH, M('#e8505b', { roughness: 0.2 }), [0.02, 0.02, 0.02], [0, y + 0.01, 0.13]);
  }
}

export function makeCharacter(skin, parent = scene) {
  const root = new THREE.Group();
  const body = M(skin.model === 'robot' ? new THREE.Color(skin.color).lerp(new THREE.Color('#9aa4b2'), 0.55) : skin.color, skin.model === 'robot' ? { metalness: 0.6, roughness: 0.35 } : {});
  const torso = new THREE.Group(); root.add(torso);
  part(torso, new THREE.CapsuleGeometry(0.25, 0.3, 8, 16), body, [1, 1, 0.85], [0, 0.95, 0]);
  part(torso, SPH, M(new THREE.Color(skin.color).lerp(new THREE.Color('#ffffff'), 0.6)), [0.16, 0.18, 0.06], [0, 0.9, 0.19]);
  const head = new THREE.Group(); head.position.set(0, 1.43, 0.02); torso.add(head);
  buildHead(head, skin, body);
  buildHat(head, skin.hat);
  // brazos: hombro -> mano (sobre la mesa)
  const arms = [-1, 1].map(sd => {
    const arm = part(torso, new THREE.CapsuleGeometry(0.065, 0.3, 6, 10), body, [1, 1, 1], [0, 0, 0]);
    const hand = part(torso, SPH, M('#fdf6ec'), [0.075, 0.07, 0.075], [sd * 0.16, 0.98, 0.36]);
    return { arm, hand, sd };
  });
  const cards = new THREE.Group(); cards.position.set(0, 1.06, 0.4); torso.add(cards);
  root.userData = { torso, head, arms, cards, count: -1, t: Math.random() * 10, react: 0, mood: null, lookYaw: 0, lookPitch: 0 };
  parent.add(root);
  return root;
}

export function setHeldCards(ch, n) {
  const u = ch.userData;
  if (u.count === n) return;
  u.count = n;
  u.cards.clear();
  for (let i = 0; i < n; i++) {
    const c = makeCard(null);
    scene.remove(c);
    c.scale.setScalar(0.62);
    c.position.set((i - (n - 1) / 2) * 0.055, 0.02 - Math.abs(i - (n - 1) / 2) * 0.01, i * 0.003);
    c.rotation.set(-0.35, Math.PI, (i - (n - 1) / 2) * -0.22);
    u.cards.add(c);
  }
}

const tmpV = new THREE.Vector3();
export function animateCharacter(ch, dt, lookAt, active) {
  const u = ch.userData;
  u.t += dt;
  u.react = Math.max(0, u.react - dt * 1.4);
  const r = u.react;
  const breathe = Math.sin(u.t * 2.2) * 0.015;
  let lift = r > 0 ? Math.sin(r * Math.PI) * 0.12 : 0;
  let slump = 0, armsUp = 0;
  if (u.mood === 'win') { lift = Math.abs(Math.sin(u.t * 6)) * 0.12; armsUp = 1; }
  else if (u.mood === 'sad') slump = 0.25;
  u.torso.position.y = lift;
  u.torso.scale.set(1, 1 + breathe, 1);
  u.torso.rotation.x = (active ? 0.08 : 0) + slump + (r > 0 ? -Math.sin(r * Math.PI) * 0.12 : 0);
  // cabeza mira al que juega
  if (lookAt) {
    ch.updateMatrixWorld();
    tmpV.copy(lookAt); u.head.parent.worldToLocal(tmpV);
    const dx = tmpV.x - u.head.position.x, dy = tmpV.y - u.head.position.y, dz = tmpV.z - u.head.position.z;
    const yaw = Math.max(-1.1, Math.min(1.1, Math.atan2(dx, dz))), pitch = Math.max(-0.5, Math.min(0.4, -Math.atan2(dy, Math.hypot(dx, dz))));
    u.lookYaw += (yaw - u.lookYaw) * Math.min(1, dt * 4);
    u.lookPitch += (pitch - u.lookPitch) * Math.min(1, dt * 4);
  }
  u.head.rotation.set(u.lookPitch + slump * 0.8, u.lookYaw, Math.sin(u.t * 0.7) * 0.04);
  if (u.head.userData.antenna) u.head.userData.antenna.position.x = Math.sin(u.t * 5) * 0.015;
  // parpadeo
  const blink = (u.t % 4) < 0.12;
  u.head.userData.eyes.forEach(e => { e.scale.y = blink ? 0.005 : e.userData.sy; });
  // brazos
  for (const a of u.arms) {
    const sh = new THREE.Vector3(a.sd * 0.29, 1.15, 0.02);
    const hp = armsUp ? new THREE.Vector3(a.sd * 0.32, 1.65 + Math.sin(u.t * 6) * 0.05, 0.1) : new THREE.Vector3(a.sd * (u.count > 0 ? 0.08 : 0.2), 0.98 + (r > 0 && a.sd > 0 ? Math.sin(r * Math.PI) * 0.35 : 0), 0.38);
    a.hand.position.copy(hp);
    a.arm.position.copy(sh).add(hp).multiplyScalar(0.5);
    const dir = hp.clone().sub(sh);
    a.arm.scale.y = Math.max(0.5, dir.length() / 0.43);
    a.arm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  }
  u.cards.visible = !armsUp;
}
export function react(ch, mood) { ch.userData.react = 1; if (mood !== undefined) ch.userData.mood = mood; }
