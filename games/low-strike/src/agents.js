// Agentes de CS2 (CT: SAS, T: Leet) con esqueleto. Los anima el mismo rig procedural de siempre
// (models.js calcula caderas, piernas, pecho, cuello y la IK de los brazos hacia el arma) y acá
// se copia esa pose a los huesos del modelo:
//  - pelvis, columna, cuello, cabeza, piernas y pies: rotación del grupo del rig × rotación de reposo
//  - brazos: IK propia con los largos reales del modelo, del hombro al objetivo de la mano
//  - dedos: se cierran sobre el arma
import * as THREE from 'three';

const DEFS = {};
let ready = false;
export const agentsReady = () => ready;

export async function loadAgents(base = 'agents/') {
  try {
    const tl = new THREE.TextureLoader();
    await Promise.all(['ct', 't'].map(async id => {
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
      const mats = meta.groups.map((gr, k) => {
        g.addGroup(gr.s, gr.c, k);
        const m = new THREE.MeshLambertMaterial({ color: gr.tex ? '#ffffff' : (SKIN_FIX[gr.name.replace(/\.\d+$/, '')] || gr.col) });
        if (gr.tex) { const t = tl.load(base + gr.tex); t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; m.map = t; }
        return m;
      });
      g.computeBoundingSphere(); g.boundingSphere.radius = 2.2; // los huesos mueven la malla: esfera generosa
      // huesos: reposo en espacio del modelo → local respecto del padre
      const B = meta.bones, n = B.length;
      const wq = B.map(b => new THREE.Quaternion().fromArray(b.q)), wp = B.map(b => new THREE.Vector3().fromArray(b.t));
      const lq = [], lp = [];
      for (let i = 0; i < n; i++) {
        const p = B[i].p;
        if (p < 0) { lq.push(wq[i].clone()); lp.push(wp[i].clone()); continue; }
        const inv = wq[p].clone().invert();
        lq.push(inv.clone().multiply(wq[i]));
        lp.push(wp[i].clone().sub(wp[p]).applyQuaternion(inv));
      }
      // orden padre → hijo
      const depth = i => { let d = 0; for (let p = B[i].p; p >= 0; p = B[p].p) d++; return d; };
      const order = [...Array(n).keys()].sort((a, b) => depth(a) - depth(b));
      const find = nm => B.findIndex(b => b.n === nm);
      const R = meta.roles, role = {};
      for (const k in R) role[k] = Array.isArray(R[k]) ? R[k].map(find).filter(i => i >= 0) : find(R[k]);
      // dedos de cada mano (todo lo que cuelga de la mano)
      const under = (root) => { const out = []; for (const i of order) { for (let p = B[i].p; p >= 0; p = B[p].p) if (p === root) { out.push(i); break; } } return out; };
      role.fingersR = under(role.handR); role.fingersL = under(role.handL);
      const inv = wq.map((q, i) => new THREE.Matrix4().compose(wp[i], q, new THREE.Vector3(1, 1, 1)).invert());
      DEFS[id] = { g, mats, B, n, wq, wp, lq, lp, order, role, inv };
    }));
    ready = true;
  } catch (e) { console.warn('agentes: uso los modelos simples', e); }
}
// materiales sin textura en el FBX del T: brazos (piel) y guantes
const SKIN_FIX = { Osiris: '#9a7458', w_model_leet_arms_133: '#9a7458', t_base_fingerless_glove: '#222222' };

export function makeAgent(team) {
  const D = DEFS[team === 'CT' ? 'ct' : 't']; if (!D) return null;
  const bones = D.B.map((b, i) => { const o = new THREE.Bone(); o.name = b.n; o.position.copy(D.lp[i]); o.quaternion.copy(D.lq[i]); return o; });
  const holder = new THREE.Group();
  for (let i = 0; i < D.n; i++) { const p = D.B[i].p; (p >= 0 ? bones[p] : holder).add(bones[i]); }
  const mesh = new THREE.SkinnedMesh(D.g, D.mats);
  mesh.castShadow = false; mesh.receiveShadow = true; mesh.frustumCulled = true; // el mapa de sombras es estático (se calcula una vez): si los jugadores lo proyectaran quedarían sombras fantasma
  holder.add(mesh);
  holder.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones, D.inv.map(m => m.clone())), new THREE.Matrix4());
  return { holder, mesh, bones, D, q: D.wq.map(q => q.clone()), p: D.wp.map(p => p.clone()) };
}

const tq = new THREE.Quaternion(), tq2 = new THREE.Quaternion(), tv = new THREE.Vector3(), tv2 = new THREE.Vector3(), tv3 = new THREE.Vector3();
const mBody = new THREE.Matrix4(), mHips = new THREE.Matrix4(), mChest = new THREE.Matrix4(), mNeck = new THREE.Matrix4(), mLeg = new THREE.Matrix4(), mKnee = new THREE.Matrix4();
const qOf = (m, q) => q.setFromRotationMatrix(m);
// pone el hueso i con rotación de mundo q (espacio del modelo) y recalcula su posición desde el padre
function setW(A, i, q) {
  const D = A.D, p = D.B[i].p;
  A.q[i].copy(q);
  if (p >= 0) { A.p[i].copy(D.lp[i]).applyQuaternion(A.q[p]).add(A.p[p]); A.bones[i].quaternion.copy(tq2.copy(A.q[p]).invert().multiply(q)); }
  else A.bones[i].quaternion.copy(q);
}
// hereda la pose de reposo relativa al padre
function inherit(A, i) { const p = A.D.B[i].p; setW(A, i, tq.copy(p >= 0 ? A.q[p] : tq.identity()).multiply(A.D.lq[i])); }
// gira el hueso i (ya heredado) para que apunte desde su posición hacia 'target'
function aim(A, i, child, target) {
  const D = A.D;
  tv.copy(D.lp[child]).applyQuaternion(A.q[i]).normalize();
  tv2.copy(target).sub(A.p[i]); if (tv2.lengthSq() < 1e-8) return; tv2.normalize();
  tq.setFromUnitVectors(tv, tv2).multiply(A.q[i]); setW(A, i, tq);
}
const childOf = (D, i) => D.order.find(j => D.B[j].p === i && D.lp[j].lengthSq() > 1e-6);
const ELB = new THREE.Vector3(), TGT = new THREE.Vector3();

// arms: [{ target (espacio del pecho), pole (espacio del pecho) }] derecha, izquierda; grip: 0..1 cerrar dedos
export function poseAgent(A, u, arms, grip, fp = false) {
  if (globalThis.__agentRest) return;
  { const sp = A.D.role.spine[0]; if (sp >= 0) A.bones[sp].scale.setScalar(fp ? 1e-4 : 1); } // primera persona: solo las piernas (el torso se colapsa)
  const D = A.D, R = D.role;
  u.body.updateMatrix(); u.hips.updateMatrix(); u.chest.updateMatrix(); u.neck.updateMatrix();
  mBody.copy(u.body.matrix); mHips.multiplyMatrices(mBody, u.hips.matrix); mChest.multiplyMatrices(mHips, u.chest.matrix); mNeck.multiplyMatrices(mChest, u.neck.matrix);
  // todos los huesos en reposo relativo (para los que nadie mueve: jiggle, twist, etc.)
  for (const i of D.order) {
    if (i === R.pelvis) {
      // pelvis: rotación de las caderas del rig y su desplazamiento (agacharse, caer)
      qOf(mHips, tq).multiply(D.wq[i]);
      A.q[i].copy(tq); A.bones[i].quaternion.copy(D.B[i].p >= 0 ? tq2.copy(A.q[D.B[i].p]).invert().multiply(tq) : tq);
      tv3.setFromMatrixPosition(mHips); const k = D.wp[i].y / 0.92;
      A.p[i].set(D.wp[i].x + tv3.x * k, D.wp[i].y + (tv3.y - 0.92) * k, D.wp[i].z + tv3.z * k);
      // la pelvis puede colgar de un hueso raíz: se mueve el hueso pelvis en el espacio del padre
      const p = D.B[i].p; if (p >= 0) A.bones[i].position.copy(tv.copy(A.p[i]).sub(A.p[p]).applyQuaternion(tq2.copy(A.q[p]).invert())); else A.bones[i].position.copy(A.p[i]);
      continue;
    }
    inherit(A, i);
    if (R.spine.includes(i)) { const k = R.spine.indexOf(i); setW(A, i, qOf(k === 0 ? mHips : mChest, tq).multiply(D.wq[i])); }
    else if (i === R.neck || i === R.head) setW(A, i, qOf(mNeck, tq).multiply(D.wq[i]));
    else for (let s = 0; s < 2; s++) {
      const leg = u.legs[s], left = s === 0;
      const th = left ? R.thighL : R.thighR, ca = left ? R.calfL : R.calfR, ft = left ? R.footL : R.footR, toe = left ? R.toeL : R.toeR;
      if (i !== th && i !== ca && i !== ft && i !== toe) continue;
      leg.hip.updateMatrix(); leg.knee.updateMatrix(); mLeg.multiplyMatrices(mHips, leg.hip.matrix); mKnee.multiplyMatrices(mLeg, leg.knee.matrix);
      if (i === th) setW(A, i, qOf(mLeg, tq).multiply(D.wq[i]));
      else if (i === ca) setW(A, i, qOf(mKnee, tq).multiply(D.wq[i]));
      else if (i === ft) { qOf(mKnee, tq); tq2.setFromAxisAngle(tv.set(1, 0, 0), -(leg.knee.rotation.x * 0.35)); setW(A, i, tq.multiply(tq2).multiply(D.wq[i])); }
    }
  }
  // brazos: IK de dos huesos con los largos del modelo
  for (let s = 0; s < 2; s++) {
    const right = s === 0, a = arms[s]; if (!a) continue;
    const up = right ? R.armR : R.armL, fo = right ? R.foreR : R.foreL, ha = right ? R.handR : R.handL;
    if (up < 0 || fo < 0 || ha < 0) continue;
    const L1 = D.lp[fo].length(), L2 = D.lp[ha].length();
    TGT.copy(a.target).applyMatrix4(mChest);
    const S = A.p[up]; tv.subVectors(TGT, S); let d = tv.length(); const mx = (L1 + L2) * 0.999; if (d > mx) { tv.multiplyScalar(mx / d); d = mx; TGT.copy(S).add(tv); }
    const x = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - x * x));
    const dir = tv.normalize(); const pv = tv2.copy(a.pole).applyMatrix4(mChest).sub(S); pv.addScaledVector(dir, -pv.dot(dir)).normalize();
    ELB.copy(S).addScaledVector(dir, x).addScaledVector(pv, h);
    aim(A, up, fo, ELB); inherit(A, fo); aim(A, fo, ha, TGT); inherit(A, ha);
    // mano: sigue al antebrazo, un poco quebrada hacia el arma
    if (a.handQ) { tq.copy(qOf(mChest, tq2)).multiply(a.handQ); setW(A, ha, tq.multiply(D.wq[ha]).normalize()); }
    // dedos: los que cuelgan de la mano se cierran (y se recalculan después del giro de la mano)
    const fingers = right ? R.fingersR : R.fingersL;
    for (const f of fingers) {
      inherit(A, f);
      if (grip > 0 && !/thumb/i.test(D.B[f].n) && !/meta/i.test(D.B[f].n)) {
        // eje de cierre: perpendicular al dedo y al "ancho" de la mano (de meñique a índice)
        const c = childOf(D, f); if (c === undefined) continue;
        tv.copy(D.lp[c]).applyQuaternion(A.q[f]).normalize();
        tv2.subVectors(A.p[up], A.p[ha]).normalize(); // hacia el codo
        tv3.crossVectors(tv, tv2); if (tv3.lengthSq() < 1e-6) continue; tv3.normalize();
        tq.setFromAxisAngle(tv3, (right ? 1 : 1) * grip * 1.1).multiply(A.q[f]); setW(A, f, tq);
      }
    }
  }
}
