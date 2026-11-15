// Personajes: "Pochis" redondos con ojos grandes, un sombrero distinto por color y animaciones con squash & stretch
import { THREE, toon, GEO, scene, labelTex, outlineMat, shade } from './core.js';

export const COLORS = [0xff4d6d, 0x4dabff, 0xffd43b, 0x51cf66, 0xb197fc, 0xff922b, 0x22d3ee, 0xf783ac];
export const CSS_COLORS = COLORS.map(c => '#' + c.toString(16).padStart(6, '0'));

const capsule = new THREE.CapsuleGeometry(0.5, 0.5, 8, 18);
capsule.userData.shared = true;

function hat(kind, color, g) {
  const add = (geo, m, sx, sy, sz, x, y, z, rx = 0, rz = 0) => {
    const o = new THREE.Mesh(geo, m); o.scale.set(sx, sy, sz); o.position.set(x, y, z); o.rotation.x = rx; o.rotation.z = rz; o.castShadow = true; g.add(o); return o;
  };
  const w = toon(0xffffff), dark = shade(color, 0.7);
  switch (kind) {
    case 0: // gorra
      add(GEO.sphere, toon(color), 0.45, 0.3, 0.45, 0, 1.47, 0);
      add(GEO.cyl, toon(dark), 0.3, 0.04, 0.3, 0, 1.43, 0.32);
      add(GEO.sphere, w, 0.1, 0.1, 0.1, 0, 1.68, 0.12);
      break;
    case 1: { // corona
      const gold = toon(0xffd43b);
      add(GEO.cyl, gold, 0.34, 0.2, 0.34, 0, 1.6, 0);
      for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; add(new THREE.ConeGeometry(0.09, 0.22, 4), gold, 1, 1, 1, Math.sin(a) * 0.3, 1.8, Math.cos(a) * 0.3); }
      add(GEO.sphere, toon(0xff4d8d), 0.07, 0.07, 0.07, 0, 1.62, 0.34);
      break;
    }
    case 2: // sombrero de fiesta
      add(new THREE.ConeGeometry(0.26, 0.6, 16), toon(color), 1, 1, 1, 0.05, 1.82, 0, 0, -0.15);
      add(GEO.sphere, w, 0.09, 0.09, 0.09, 0.1, 2.12, 0);
      break;
    case 3: { // gorro con hélice
      add(GEO.sphere, toon(color), 0.44, 0.28, 0.44, 0, 1.47, 0);
      const p = add(GEO.box, toon(0xff6b6b), 0.7, 0.03, 0.1, 0, 1.78, 0);
      add(GEO.cyl, toon(0x868e96), 0.03, 0.12, 0.03, 0, 1.72, 0);
      g.userData.propeller = p;
      break;
    }
    case 4: // moño
      add(GEO.sphere, toon(color), 0.18, 0.14, 0.1, -0.16, 1.55, 0.1, 0, 0.5);
      add(GEO.sphere, toon(color), 0.18, 0.14, 0.1, 0.16, 1.55, 0.1, 0, -0.5);
      add(GEO.sphere, toon(dark), 0.08, 0.08, 0.08, 0, 1.55, 0.14);
      break;
    case 5: // auriculares
      add(new THREE.TorusGeometry(0.46, 0.05, 8, 20, Math.PI), toon(0x343a40), 1, 1, 1, 0, 1.12, 0);
      add(GEO.cyl, toon(color), 0.15, 0.12, 0.15, -0.5, 1.12, 0, 0, Math.PI / 2);
      add(GEO.cyl, toon(color), 0.15, 0.12, 0.15, 0.5, 1.12, 0, 0, Math.PI / 2);
      break;
    case 6: // antena
      add(GEO.cyl, toon(0x495057), 0.025, 0.4, 0.025, 0, 1.68, 0);
      g.userData.antenna = add(GEO.sphere, toon(color, { emissive: color, emissiveIntensity: 0.5 }), 0.1, 0.1, 0.1, 0, 1.9, 0);
      break;
    default: // flor
      for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; add(GEO.sphere, toon(0xffffff), 0.09, 0.09, 0.05, 0.22 + Math.cos(a) * 0.09, 1.42 + Math.sin(a) * 0.09, 0.3); }
      add(GEO.sphere, toon(0xffd43b), 0.06, 0.06, 0.06, 0.22, 1.42, 0.33);
  }
}

export function makeCharacter(slot, name) {
  const color = COLORS[slot % 8];
  const root = new THREE.Group();
  const body = new THREE.Group(); // squash & stretch
  root.add(body);
  const bm = toon(color);
  const torso = new THREE.Mesh(capsule, bm); torso.position.y = 0.95; torso.castShadow = true; body.add(torso);
  const ol = new THREE.Mesh(capsule, outlineMat); ol.scale.setScalar(1.07); torso.add(ol);
  const belly = new THREE.Mesh(GEO.sphere, toon(0xfff4e6)); belly.scale.set(0.34, 0.36, 0.2); belly.position.set(0, 0.72, 0.36); body.add(belly);
  // cara
  const face = new THREE.Group(); face.position.set(0, 1.18, 0.44); body.add(face);
  const eyeW = toon(0xffffff), eyeB = new THREE.MeshBasicMaterial({ color: 0x1d1b3a });
  const pupils = [];
  [-0.15, 0.15].forEach(x => {
    const e = new THREE.Mesh(GEO.sphere, eyeW); e.scale.set(0.13, 0.17, 0.09); e.position.set(x, 0.02, 0); face.add(e);
    const p = new THREE.Mesh(GEO.sphere, eyeB); p.scale.set(0.07, 0.1, 0.05); p.position.set(x, 0.0, 0.06); face.add(p);
    const h = new THREE.Mesh(GEO.sphere, new THREE.MeshBasicMaterial({ color: 0xffffff })); h.scale.setScalar(0.025); h.position.set(x + 0.025, 0.04, 0.1); face.add(h);
    pupils.push(p);
  });
  const cheekM = toon(0xff8fab);
  [-0.27, 0.27].forEach(x => { const c = new THREE.Mesh(GEO.sphere, cheekM); c.scale.set(0.07, 0.045, 0.03); c.position.set(x, -0.12, -0.02); face.add(c); });
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 6, 12, Math.PI), eyeB); mouth.rotation.z = Math.PI; mouth.position.set(0, -0.14, 0.02); face.add(mouth);
  // manos y pies
  const glove = toon(0xffffff), shoe = toon(shade(color, 0.6));
  const mk = (m, sx, sy, sz) => { const o = new THREE.Mesh(GEO.sphere, m); o.scale.set(sx, sy, sz); o.castShadow = true; root.add(o); return o; };
  const handL = mk(glove, 0.14, 0.14, 0.14), handR = mk(glove, 0.14, 0.14, 0.14);
  const footL = mk(shoe, 0.15, 0.11, 0.22), footR = mk(shoe, 0.15, 0.11, 0.22);
  const hg = new THREE.Group(); hg.position.y = 0.22; body.add(hg);
  hat(slot % 8, color, hg);
  body.userData.propeller = hg.userData.propeller; body.userData.antenna = hg.userData.antenna;
  // nombre
  const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(name, '#' + color.toString(16).padStart(6, '0')), transparent: true, depthWrite: false, depthTest: false }));
  label.scale.set(1.9, 0.53, 1); label.position.y = 2.35; label.renderOrder = 10; root.add(label);
  // estrellitas de mareo
  const stars = new THREE.Group(); stars.position.y = 1.9; stars.visible = false; root.add(stars);
  for (let i = 0; i < 3; i++) { const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.1), toon(0xffe066, { emissive: 0x806000 })); s.position.set(Math.cos(i * 2.1) * 0.4, 0, Math.sin(i * 2.1) * 0.4); stars.add(s); }
  root.userData = { body, torso, face, pupils, mouth, handL, handR, footL, footR, label, stars, phase: Math.random() * 6, squash: 0, blink: 2 + Math.random() * 3, color, slot };
  scene.add(root);
  return root;
}

// state: idle | run | air | stun | win | sad | sit | clap
export function animateCharacter(ch, st, dt, t) {
  const u = ch.userData;
  const speed = st.speed || 0;
  u.phase += dt * (st.state === 'run' ? 2.2 * Math.max(4, speed) : 3);
  const ph = u.phase;
  u.squash += (0 - u.squash) * Math.min(1, dt * 10);
  let sy = 1 + u.squash, sxz = 1 - u.squash * 0.5;
  let bob = 0, lean = 0, fl = [0, 0], fr = [0, 0], hl = [-0.52, 0.85, 0.05], hr = [0.52, 0.85, 0.05];
  u.stars.visible = st.state === 'stun';
  if (u.stars.visible) u.stars.rotation.y += dt * 6;
  switch (st.state) {
    case 'run': {
      const s = Math.sin(ph), c = Math.cos(ph);
      bob = Math.abs(s) * 0.12; lean = Math.min(0.25, speed * 0.025);
      fl = [s * 0.32, Math.max(0, c) * 0.18]; fr = [-s * 0.32, Math.max(0, -c) * 0.18];
      hl = [-0.55, 0.85 + bob, -s * 0.3]; hr = [0.55, 0.85 + bob, s * 0.3];
      break;
    }
    case 'air': {
      const vy = st.vy || 0;
      sy *= 1 + Math.max(-0.12, Math.min(0.18, vy * 0.015)); sxz = 1 / Math.sqrt(sy);
      fl = [0.15, 0.25]; fr = [-0.1, 0.12];
      hl = [-0.6, 1.25, 0.05]; hr = [0.6, 1.25, 0.05];
      break;
    }
    case 'stun':
      lean = Math.sin(t * 8) * 0.15; hl = [-0.6, 1.0, 0]; hr = [0.6, 1.0, 0];
      break;
    case 'win': {
      const j = Math.abs(Math.sin(t * 5));
      bob = j * 0.7; hl = [-0.55, 1.55 + bob * 0.3, 0.1]; hr = [0.55, 1.55 + bob * 0.3, 0.1];
      fl = [0, j * 0.15]; fr = [0, j * 0.15];
      break;
    }
    case 'clap': {
      const c = Math.abs(Math.sin(t * 9));
      hl = [-0.12 - c * 0.25, 1.0, 0.45]; hr = [0.12 + c * 0.25, 1.0, 0.45]; bob = Math.abs(Math.sin(t * 4.5)) * 0.08;
      break;
    }
    case 'sad':
      lean = 0.3; hl = [-0.45, 0.6, 0.15]; hr = [0.45, 0.6, 0.15]; sy *= 0.94;
      break;
    case 'sit':
      fl = [0.35, 0.35]; fr = [0.35, 0.35]; hl = [-0.35, 0.95, 0.5]; hr = [0.35, 0.95, 0.5];
      break;
    default: {
      const b = Math.sin(t * 2.5 + u.phase) * 0.025;
      sy *= 1 + b; sxz *= 1 - b * 0.5;
      hl = [-0.52, 0.83 + b, 0.02]; hr = [0.52, 0.83 + b, 0.02];
    }
  }
  u.body.scale.set(sxz, sy, sxz);
  u.body.position.y = bob;
  u.body.rotation.x = lean;
  u.handL.position.set(hl[0], hl[1], hl[2]); u.handR.position.set(hr[0], hr[1], hr[2]);
  u.footL.position.set(-0.2, 0.1 + fl[1], 0.05 + fl[0]); u.footR.position.set(0.2, 0.1 + fr[1], 0.05 + fr[0]);
  // ojos: parpadeo y mirada
  u.blink -= dt;
  const blinking = u.blink < 0.12;
  if (u.blink < 0) u.blink = 2 + Math.random() * 3.5;
  u.pupils.forEach(p => { p.scale.y = blinking ? 0.015 : 0.1; });
  u.mouth.scale.set(st.state === 'win' ? 1.6 : 1, st.state === 'sad' ? -1 : (st.state === 'win' ? 1.6 : 1), 1);
  if (u.body.userData.propeller) u.body.userData.propeller.rotation.y += dt * (8 + speed * 2);
  if (u.body.userData.antenna) u.body.userData.antenna.position.x = Math.sin(t * 6) * 0.04;
}

export function squash(ch, amount) { ch.userData.squash = amount; }

// ---------------- Kart ----------------
export function makeKart(slot) {
  const color = COLORS[slot % 8];
  const g = new THREE.Group();
  const add = (geo, m, sx, sy, sz, x, y, z) => { const o = new THREE.Mesh(geo, m); o.scale.set(sx, sy, sz); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  const bm = toon(color), dk = toon(0x2b2d42), wh = toon(0xffffff);
  add(GEO.box, bm, 1.5, 0.45, 2.3, 0, 0.45, 0);
  add(GEO.sphere, bm, 0.78, 0.35, 0.7, 0, 0.55, 0.95);
  add(GEO.box, wh, 1.3, 0.08, 0.25, 0, 0.72, 1.05);
  add(GEO.box, dk, 1.1, 0.5, 0.5, 0, 0.8, -0.5);
  add(GEO.box, toon(shade(color, 0.7)), 1.7, 0.08, 0.35, 0, 1.25, -1.15);
  add(GEO.box, dk, 0.08, 0.4, 0.08, -0.6, 1.05, -1.1); add(GEO.box, dk, 0.08, 0.4, 0.08, 0.6, 1.05, -1.1);
  add(GEO.cyl, toon(0x868e96), 0.12, 0.3, 0.12, -0.35, 0.55, -1.25).rotation.x = Math.PI / 2;
  add(GEO.cyl, toon(0x868e96), 0.12, 0.3, 0.12, 0.35, 0.55, -1.25).rotation.x = Math.PI / 2;
  const wheels = [];
  const wGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.32, 18); wGeo.rotateZ(Math.PI / 2);
  [[-0.85, 0.36, 0.78], [0.85, 0.36, 0.78], [-0.85, 0.36, -0.8], [0.85, 0.36, -0.8]].forEach(([x, y, z], i) => {
    const piv = new THREE.Group(); piv.position.set(x, y, z); g.add(piv);
    const w = new THREE.Mesh(wGeo, dk); w.castShadow = true; piv.add(w);
    const hub = new THREE.Mesh(GEO.cyl, toon(0xdee2e6)); hub.scale.set(0.16, 0.34, 0.16); hub.rotation.z = Math.PI / 2; w.add(hub);
    wheels.push({ piv, w, front: i < 2 });
  });
  g.userData = { wheels };
  scene.add(g);
  return g;
}
export function animateKart(k, speed, steer, dt) {
  for (const w of k.userData.wheels) {
    w.w.rotation.x += speed * dt / 0.36;
    if (w.front) w.piv.rotation.y = steer * 0.4;
  }
}
