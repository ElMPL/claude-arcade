// Brazos de primera persona con modelos reales: T = antebrazo con guante sin dedos (manga camuflada),
// CT = guante táctico (la manga sigue siendo la procedural, como en CS:GO). Los modelos venían quietos y con
// los dedos estirados: tools/rig_hands.py les arma un esqueleto (mano, antebrazo, 4 dedos × 3, pulgar × 3)
// y acá cada pose del juego (empuñadura, guardamanos, cuchillo...) dobla esos huesos.
import * as THREE from 'three';

const DEF = {};
export const armsReady = team => !!DEF[team === 'CT' ? 'ct' : 't'];

export async function loadArms(base = 'arms/') {
  const tl = new THREE.TextureLoader();
  await Promise.all(['t', 'ct'].map(async id => {
    try {
      const [meta, buf] = await Promise.all([fetch(base + id + '.json').then(r => r.json()), fetch(base + id + '.bin').then(r => r.arrayBuffer())]);
      const nv = meta.v; let o = 0;
      const pos = new Float32Array(buf, o, nv * 3); o += nv * 12;
      const nq = new Int8Array(buf, o, nv * 3); o += nv * 3; o += (4 - o % 4) % 4;
      const uv = new Float32Array(buf, o, nv * 2); o += nv * 8;
      const sj = new Uint8Array(buf, o, nv * 4); o += nv * 4;
      const sw = new Uint8Array(buf, o, nv * 4); o += nv * 4;
      const ix = meta.i32 ? new Uint32Array(buf, o, meta.i) : new Uint16Array(buf, o, meta.i);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('normal', new THREE.BufferAttribute(nq, 3, true));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      g.setAttribute('skinIndex', new THREE.BufferAttribute(sj, 4));
      g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4, true));
      g.setIndex(new THREE.BufferAttribute(ix, 1));
      const map = tl.load(base + id + '.jpg'); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4;
      const mat = new THREE.MeshStandardMaterial({ map, roughness: 0.85, metalness: 0 });
      if (id === 't') { map.flipY = true; const nm = tl.load(base + 't_n.jpg'); mat.normalMap = nm; mat.normalScale.set(0.8, 0.8); }
      else map.flipY = false;
      DEF[id] = { g, mat, bones: meta.bones, zmax: meta.zmax };
    } catch (e) { console.warn('brazos ' + id + ': uso los simples', e); }
  }));
}

// arma un brazo (o mano) con huesos dentro de 'parent' (el grupo de la mano); left = espejado
export function makeArm(team, left) {
  const D = DEF[team === 'CT' ? 'ct' : 't']; if (!D) return null;
  const rig = new THREE.Group(); if (left) rig.scale.x = -1;
  const B = D.bones, bones = B.map(b => { const o = new THREE.Bone(); o.name = b.n; return o; });
  B.forEach((b, i) => {
    const t = new THREE.Vector3().fromArray(b.t), pt = b.p >= 0 ? new THREE.Vector3().fromArray(B[b.p].t) : new THREE.Vector3();
    bones[i].position.copy(t.sub(pt));
    (b.p >= 0 ? bones[b.p] : rig).add(bones[i]);
  });
  if (globalThis.__armPlain) { const m = new THREE.Mesh(D.g, new THREE.MeshBasicMaterial({ color: 'red' })); rig.add(m); return { rig, mesh: m, bones, B, left, pose: null }; }
  const mesh = new THREE.SkinnedMesh(D.g, D.mat);
  mesh.frustumCulled = false; mesh.renderOrder = 10;
  rig.add(mesh); rig.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones, B.map(b => new THREE.Matrix4().makeTranslation(-b.t[0], -b.t[1], -b.t[2]))), new THREE.Matrix4());
  return { rig, mesh, bones, B, left, pose: null, zmax: D.zmax };
}

const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), va = new THREE.Vector3(), vb = new THREE.Vector3(), X = new THREE.Vector3(1, 0, 0), Z = new THREE.Vector3(0, 0, 1);
// curl: [[a,b,c] × 4 dedos], thumb: [dx, dy, dz, doblez] (mismo formato que las poses del juego)
export function poseArm(A, name, curl, thumb) {
  if (globalThis.__armRest) return;
  if (A.pose === name) return; A.pose = name;
  const B = A.B;
  for (let f = 0; f < 4; f++) for (let k = 0; k < 3; k++) {
    const i = B.findIndex(b => b.n === `f${f}${k}`); if (i < 0) continue;
    A.bones[i].quaternion.setFromAxisAngle(X, -((curl[f] || [0, 0, 0])[k] || 0));
  }
  // pulgar: primer hueso hacia la dirección de la pose, los demás se van doblando
  const t0 = B.findIndex(b => b.n === 't0'), t1 = B.findIndex(b => b.n === 't1');
  if (t0 >= 0 && t1 >= 0) {
    const rest = va.fromArray(B[t1].t).sub(vb.fromArray(B[t0].t)).normalize().clone();
    const dir = new THREE.Vector3(thumb[0], thumb[1], thumb[2]).normalize();
    const ax = new THREE.Vector3(0, 1, 0).cross(dir).normalize();
    let prev = new THREE.Quaternion();
    for (let k = 0; k < 3; k++) {
      const i = B.findIndex(b => b.n === 't' + k); if (i < 0) break;
      const w = new THREE.Quaternion().setFromUnitVectors(rest, dir);
      A.bones[i].quaternion.copy(prev.clone().invert().multiply(w)); prev = w;
      dir.applyAxisAngle(ax, -(thumb[3] || 0)).normalize();
    }
  }
}
// antebrazo: apunta de la muñeca al codo (dirección en el espacio de la mano)
export function aimFore(A, dirLocal) {
  if (globalThis.__armRest) return;
  const i = A.B.findIndex(b => b.n === 'fore'); if (i < 0) return;
  va.copy(dirLocal); if (A.left) va.x = -va.x; const d = va.length(); va.normalize();
  A.bones[i].quaternion.setFromUnitVectors(Z, va);
  // la manga del modelo es más corta que la distancia al codo: se estira para que no se vea el final
  const len = (A.zmax - A.B[i].t[2]) * Math.abs(A.rig.scale.y); A.bones[i].scale.set(1, 1, Math.max(1, d * 1.15 / Math.max(0.05, len)));
}
