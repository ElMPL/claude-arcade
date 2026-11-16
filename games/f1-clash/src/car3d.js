// Modelo 3D de un auto de fórmula original (sin marcas). Mira hacia +z, centro en el CG.
import * as THREE from 'three';
import { CAR } from './physics.js';

export const LIVERIES = [
  { name: 'Rojo carrera', c1: '#d7141a', c2: '#ffd400', helm: '#ffd400' },
  { name: 'Plata y turquesa', c1: '#b9c3c9', c2: '#00c2a8', helm: '#1b1f24' },
  { name: 'Naranja', c1: '#ff7a00', c2: '#1d6bff', helm: '#ff7a00' },
  { name: 'Azul noche', c1: '#122a6b', c2: '#ff2a55', helm: '#ffd400' },
  { name: 'Verde', c1: '#0a6b47', c2: '#c7ff3a', helm: '#ffffff' },
  { name: 'Rosa', c1: '#ff4fa3', c2: '#2a1a5e', helm: '#ff4fa3' },
  { name: 'Celeste', c1: '#4fc3ff', c2: '#ffffff', helm: '#ffffff' },
  { name: 'Amarillo', c1: '#ffd21a', c2: '#151515', helm: '#151515' },
  { name: 'Blanco', c1: '#f3f3f3', c2: '#e3262e', helm: '#e3262e' },
  { name: 'Negro y oro', c1: '#17171a', c2: '#d4a64a', helm: '#d4a64a' },
];

const G = {}; // geometrías compartidas
function geo() {
  if (G.ok) return G;
  G.ok = true;
  G.box = new THREE.BoxGeometry(1, 1, 1);
  const nose = new THREE.CylinderGeometry(0.09, 0.27, 1.55, 14, 1); nose.rotateX(Math.PI / 2); nose.scale(1, 0.55, 1); G.nose = nose;
  const tireF = new THREE.CylinderGeometry(CAR.R, CAR.R, 0.36, 28); tireF.rotateZ(Math.PI / 2); G.tireF = tireF;
  const tireR = new THREE.CylinderGeometry(CAR.R, CAR.R, 0.44, 28); tireR.rotateZ(Math.PI / 2); G.tireR = tireR;
  const rim = new THREE.CylinderGeometry(0.235, 0.235, 1, 20); rim.rotateZ(Math.PI / 2); G.rim = rim;
  const ring = new THREE.RingGeometry(0.255, 0.3, 28); G.ring = ring;
  const halo = new THREE.TorusGeometry(0.33, 0.032, 8, 20, Math.PI); halo.rotateX(Math.PI / 2); G.halo = halo;
  G.helm = new THREE.SphereGeometry(0.155, 18, 14);
  G.arm = new THREE.CylinderGeometry(0.018, 0.018, 1, 6); G.arm.rotateZ(Math.PI / 2);
  G.pod = (() => { const g = new THREE.CylinderGeometry(0.2, 0.26, 1.6, 4, 1); g.rotateY(Math.PI / 4); g.rotateX(Math.PI / 2); g.scale(1.3, 1, 1); return g; })();
  G.cover = (() => { const g = new THREE.CylinderGeometry(0.1, 0.3, 1.9, 4, 1); g.rotateY(Math.PI / 4); g.rotateX(-Math.PI / 2); g.scale(1, 1.15, 1); return g; })();
  return G;
}

const MATS = {};
function mat(color, opts = {}) {
  const k = color + JSON.stringify(opts);
  if (!MATS[k]) MATS[k] = new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.25, ...opts });
  return MATS[k];
}

function numberTex(num, c1, c2) {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = c1; x.fillRect(0, 0, 128, 128);
  x.font = 'italic 900 92px "Titillium Web", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 8; x.strokeStyle = c2; x.strokeText(String(num), 64, 70);
  x.fillStyle = '#fff'; x.fillText(String(num), 64, 70);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function makeCarMesh(livery, num) {
  const g = geo();
  const L = typeof livery === 'number' ? LIVERIES[livery % LIVERIES.length] : livery;
  const paint = mat(L.c1, { metalness: 0.45, roughness: 0.28 });
  const accent = mat(L.c2, { metalness: 0.3, roughness: 0.35 });
  const carbon = mat('#1b1c20', { roughness: 0.55, metalness: 0.2 });
  const black = mat('#0b0b0d', { roughness: 0.8, metalness: 0 });
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const part = (geom, m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0, shadow = true) => {
    const o = new THREE.Mesh(geom, m); o.scale.set(sx, sy, sz); o.position.set(x, y, z); o.rotation.set(rx, ry, rz);
    o.castShadow = shadow; body.add(o); return o;
  };
  // piso y difusor
  part(g.box, carbon, 1.5, 0.04, 3.5, 0, 0.07, -0.15);
  part(g.box, carbon, 1.05, 0.16, 0.45, 0, 0.16, -2.12, -0.25);
  // monocasco y trompa
  part(g.box, paint, 0.62, 0.4, 1.9, 0, 0.36, 0.55);
  part(g.nose, paint, 1, 1, 1, 0, 0.3, 2.2, 0.06);
  part(g.box, accent, 0.2, 0.02, 1.2, 0, 0.47, 1.55, 0.12);
  // alerón delantero
  part(g.box, accent, 1.86, 0.03, 0.42, 0, 0.11, 2.78);
  part(g.box, carbon, 1.7, 0.03, 0.24, 0, 0.19, 2.66, -0.35);
  part(g.box, carbon, 1.6, 0.025, 0.18, 0, 0.26, 2.56, -0.6);
  part(g.box, accent, 0.03, 0.24, 0.55, 0.93, 0.18, 2.72);
  part(g.box, accent, 0.03, 0.24, 0.55, -0.93, 0.18, 2.72);
  // pontones y cubierta motor
  part(g.pod, paint, 1, 1, 1, 0.52, 0.33, -0.25);
  part(g.pod, paint, 1, 1, 1, -0.52, 0.33, -0.25);
  part(g.box, black, 0.36, 0.26, 0.04, 0.55, 0.38, 0.56);
  part(g.box, black, 0.36, 0.26, 0.04, -0.55, 0.38, 0.56);
  part(g.cover, paint, 1, 1, 1, 0, 0.52, -0.95);
  part(g.box, accent, 0.03, 0.34, 1.15, 0, 0.78, -1.25);
  part(g.box, paint, 0.28, 0.32, 0.42, 0, 0.83, -0.28);
  part(g.box, black, 0.2, 0.16, 0.04, 0, 0.88, -0.07);
  // cockpit, halo, casco
  part(g.box, black, 0.44, 0.04, 0.72, 0, 0.57, 0.2);
  part(g.halo, carbon, 1, 1, 1, 0, 0.72, 0.12);
  part(g.box, carbon, 0.05, 0.04, 0.42, 0, 0.7, 0.55, 0.45);
  part(g.helm, mat(L.helm, { metalness: 0.3, roughness: 0.25 }), 1, 1, 1, 0, 0.66, 0.02);
  part(g.box, mat('#111', { metalness: 0.6, roughness: 0.15 }), 0.2, 0.07, 0.05, 0, 0.68, 0.15, 0, 0, 0, false);
  // espejos
  part(g.box, carbon, 0.16, 0.06, 0.04, 0.42, 0.62, 0.62);
  part(g.box, carbon, 0.16, 0.06, 0.04, -0.42, 0.62, 0.62);
  // alerón trasero
  part(g.box, paint, 0.96, 0.04, 0.36, 0, 0.86, -2.36);
  part(g.box, accent, 0.96, 0.03, 0.22, 0, 0.98, -2.28, -0.3);
  part(g.box, paint, 0.03, 0.46, 0.62, 0.49, 0.8, -2.3);
  part(g.box, paint, 0.03, 0.46, 0.62, -0.49, 0.8, -2.3);
  part(g.box, carbon, 0.04, 0.42, 0.14, 0, 0.6, -2.28);
  const rain = part(g.box, mat('#ff2030', { emissive: '#ff0018', emissiveIntensity: 0.4 }), 0.1, 0.05, 0.03, 0, 0.32, -2.36, 0, 0, 0, false);
  // número
  const nt = numberTex(num, L.c1, L.c2);
  const nm = new THREE.MeshBasicMaterial({ map: nt });
  const np = new THREE.PlaneGeometry(0.3, 0.3);
  const n1 = new THREE.Mesh(np, nm); n1.rotation.x = -Math.PI / 2 + 0.12; n1.position.set(0, 0.42, 2.0); body.add(n1);
  const n2 = new THREE.Mesh(np, nm); n2.rotation.y = Math.PI / 2; n2.position.set(0.155, 0.62, -1.2); body.add(n2);
  const n3 = new THREE.Mesh(np, nm); n3.rotation.y = -Math.PI / 2; n3.position.set(-0.155, 0.62, -1.2); body.add(n3);

  // ruedas
  const rubber = mat('#151517', { roughness: 0.92, metalness: 0 });
  const rimM = mat('#2c2f35', { metalness: 0.7, roughness: 0.35 });
  const stripe = mat('#e8c21a', { roughness: 0.6, side: THREE.DoubleSide });
  const wheels = [];
  const WP = [[0.8, CAR.a, 1], [-0.8, CAR.a, 1], [0.8, -CAR.b, 0], [-0.8, -CAR.b, 0]];
  for (const [x, z, f] of WP) {
    const pivot = new THREE.Group(); pivot.position.set(x, CAR.R, z); root.add(pivot);
    const spin = new THREE.Group(); pivot.add(spin);
    const w = f ? 0.36 : 0.44;
    const t = new THREE.Mesh(f ? g.tireF : g.tireR, rubber); t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(g.rim, rimM); r.scale.set(w + 0.012, 1, 1); spin.add(r);
    for (const sd of [1, -1]) {
      const ring = new THREE.Mesh(g.ring, stripe); ring.rotation.y = sd * Math.PI / 2; ring.position.x = sd * (w / 2 + 0.004); spin.add(ring);
    }
    for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(g.box, mat('#9aa0a8', { metalness: 0.8, roughness: 0.3 })); sp.scale.set(w + 0.02, 0.05, 0.42); sp.rotation.x = k * Math.PI / 3; spin.add(sp); }
    wheels.push({ pivot, spin, front: !!f });
    // brazos de suspensión
    for (const dy of [0.08, -0.06]) {
      const len = Math.abs(x) - 0.3;
      const a = new THREE.Mesh(g.arm, carbon); a.scale.set(len, 1, 1); a.position.set(x / 2 + Math.sign(x) * 0.15, CAR.R + dy, z); root.add(a);
    }
  }
  root.userData = { wheels, body, rain, livery: L };
  return root;
}

// Actualiza ruedas y carrocería con el estado del auto
export function poseCar(mesh, c, dtVis = 0) {
  mesh.position.set(c.x, 0, c.z);
  mesh.rotation.set(0, c.h, 0);
  const W = mesh.userData.wheels;
  for (let i = 0; i < 4; i++) {
    const w = W[i];
    if (w.front) w.pivot.rotation.y = c.steer || 0;
    w.spin.rotation.x = c.rot ? c.rot[i] : 0;
  }
  // cabeceo y rolido leves por aceleraciones
  const b = mesh.userData.body;
  const ax = c.axs || 0, ay = c.ays || 0;
  b.rotation.x += ((-ax * 0.0022) - b.rotation.x) * 0.2;
  b.rotation.z += ((ay * 0.0016) - b.rotation.z) * 0.2;
  b.position.y = -0.012 * Math.min(1, (c.vx || 0) * (c.vx || 0) / 7000);
}
