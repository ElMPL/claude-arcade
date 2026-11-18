// Convierte los modelos de agentes (CT: GLB del SAS de CS2, T: FBX del Leet) a un formato chico propio:
// agents/<id>.json (huesos en pose de reposo + grupos de material) y agents/<id>.bin (geometría ya skineada
// en esa pose, indexada). Uso: node tools/import_agents.mjs <ct.glb> <t.fbx>   (desde la carpeta del juego)
import fs from 'fs'; import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
const OUT = 'agents/', HEIGHT = 1.84;
const blobs = new Map(), ocu = URL.createObjectURL;
URL.createObjectURL = b => { const u = ocu(b); blobs.set(u, b); return u; };
THREE.TextureLoader.prototype.load = function (u) { const t = new THREE.Texture(); t.userData.url = u; return t; };

function glbNoImages(buf) { // saca imágenes/texturas para que GLTFLoader no necesite DOM
  let off = 12, js, bin; while (off < buf.length) { const ln = buf.readUInt32LE(off), ty = buf.readUInt32LE(off + 4), d = buf.subarray(off + 8, off + 8 + ln); off += 8 + ln; if (ty === 0x4E4F534A) js = JSON.parse(d.toString()); else bin = d; }
  const texSrc = (js.textures || []).map(t => t.source);
  const matTex = js.materials.map(m => texSrc[m.pbrMetallicRoughness?.baseColorTexture?.index] ?? null);
  const imgs = (js.images || []).map(im => { const bv = js.bufferViews[im.bufferView]; return bin.subarray(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength); });
  for (const m of js.materials) { delete m.normalTexture; delete m.occlusionTexture; delete m.emissiveTexture; if (m.pbrMetallicRoughness) { delete m.pbrMetallicRoughness.baseColorTexture; delete m.pbrMetallicRoughness.metallicRoughnessTexture; } delete m.extensions; }
  delete js.textures; delete js.images; delete js.samplers; js.animations = [];
  let jb = Buffer.from(JSON.stringify(js)); while (jb.length % 4) jb = Buffer.concat([jb, Buffer.from(' ')]);
  const h = Buffer.alloc(12), c0 = Buffer.alloc(8), c1 = Buffer.alloc(8);
  h.write('glTF'); h.writeUInt32LE(2, 4); h.writeUInt32LE(12 + 8 + jb.length + 8 + bin.length, 8);
  c0.writeUInt32LE(jb.length); c0.writeUInt32LE(0x4E4F534A, 4); c1.writeUInt32LE(bin.length); c1.writeUInt32LE(0x004E4942, 4);
  const out = Buffer.concat([h, c0, jb, c1, bin]);
  return { buf: out.buffer.slice(out.byteOffset, out.byteOffset + out.length), matTex, imgs, matNames: js.materials.map(m => m.name) };
}

// rol de cada hueso (los nombres cambian entre el esqueleto de CS2 y el de Mixamo)
const ROLES = {
  ct: { pelvis: 'pelvis', spine: ['spine_0', 'spine_1', 'spine_2', 'spine_3'], neck: 'neck_0', head: 'head_0', clavL: 'clavicle_l', armL: 'arm_upper_l', foreL: 'arm_lower_l', handL: 'hand_l', clavR: 'clavicle_r', armR: 'arm_upper_r', foreR: 'arm_lower_r', handR: 'hand_r', thighL: 'leg_upper_l', calfL: 'leg_lower_l', footL: 'ankle_l', toeL: 'ball_l', thighR: 'leg_upper_r', calfR: 'leg_lower_r', footR: 'ankle_r', toeR: 'ball_r' },
  t: { pelvis: 'mixamorigHips', spine: ['mixamorigSpine', 'mixamorigSpine1', 'mixamorigSpine2'], neck: 'mixamorigNeck', head: 'mixamorigHead', clavL: 'mixamorigLeftShoulder', armL: 'mixamorigLeftArm', foreL: 'mixamorigLeftForeArm', handL: 'mixamorigLeftHand', clavR: 'mixamorigRightShoulder', armR: 'mixamorigRightArm', foreR: 'mixamorigRightForeArm', handR: 'mixamorigRightHand', thighL: 'mixamorigLeftUpLeg', calfL: 'mixamorigLeftLeg', footL: 'mixamorigLeftFoot', toeL: 'mixamorigLeftToeBase', thighR: 'mixamorigRightUpLeg', calfR: 'mixamorigRightLeg', footR: 'mixamorigRightFoot', toeR: 'mixamorigRightToeBase' },
};

async function convert(id, meshes, texOf, scene) {
  scene.updateMatrixWorld(true);
  const skel = meshes[0].skeleton, bones = skel.bones;
  // geometría skineada en la pose actual, en espacio del mundo
  const P = [], N = [], UV = [], J = [], Wt = [], groups = []; let vtx = 0, zeroW = 0;
  const m4 = new THREE.Matrix4(), acc = new THREE.Matrix4(), v = new THREE.Vector3(), n = new THREE.Vector3(), nm = new THREE.Matrix3();
  const boneMat = bones.map((b, i) => new THREE.Matrix4().multiplyMatrices(b.matrixWorld, skel.boneInverses[i]));
  for (const mesh of meshes) {
    if (mesh.skeleton !== skel) { // otro esqueleto (mismos nombres): se remapea por nombre
      const map = mesh.skeleton.bones.map(b => bones.findIndex(x => x.name === b.name)); mesh.userData.map = map;
    }
    const g = mesh.geometry, pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv, si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
    const ms = mesh.skeleton, mm = ms.bones.map((b, i) => new THREE.Matrix4().multiplyMatrices(b.matrixWorld, ms.boneInverses[i]));
    const pre = new THREE.Matrix4().multiplyMatrices(new THREE.Matrix4(), mesh.bindMatrix), post = mesh.bindMatrixInverse;
    const idx = g.index ? g.index.array : null, cnt = idx ? idx.length : pos.count;
    const mats = [].concat(mesh.material), grps = g.groups.length ? g.groups : [{ start: 0, count: cnt, materialIndex: 0 }];
    for (const gr of grps) {
      const mat = mats[gr.materialIndex]; const tex = texOf(mat);
      groups.push({ start: vtx, count: gr.count, tex, col: '#' + mat.color.getHexString(), name: mat.name });
      for (let k = gr.start; k < gr.start + gr.count; k++) {
        const i = idx ? idx[k] : k;
        acc.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const jj = [], ww = [];
        for (let q = 0; q < 4; q++) { const w = sw.getComponent(i, q); if (w <= 0) continue; const bi = si.getComponent(i, q); for (let e = 0; e < 16; e++) acc.elements[e] += mm[bi].elements[e] * w; const gb = mesh.userData.map ? mesh.userData.map[bi] : bi; jj.push(gb); ww.push(w); }
        let wsum = 0; for (const w of ww) wsum += w;
        if (wsum < 1e-4) { m4.copy(mesh.matrixWorld); zeroW++; } // sin pesos: queda fija, después se cuelga del hueso más cercano
        else { for (let e = 0; e < 16; e++) acc.elements[e] /= wsum; m4.copy(acc).multiply(pre); } // posición de mundo (bindMode attached)
        v.fromBufferAttribute(pos, i).applyMatrix4(m4); P.push(v.x, v.y, v.z);
        nm.getNormalMatrix(m4); n.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize(); N.push(n.x, n.y, n.z);
        UV.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
        while (jj.length < 4) { jj.push(0); ww.push(0); }
        const s = ww.reduce((a, b) => a + b, 0); J.push(...jj.slice(0, 4)); Wt.push(...ww.slice(0, 4).map(w => s > 1e-4 ? w / s : 0));
        vtx++;
      }
    }
  }
  // normalizar: pies en y=0, altura HEIGHT, mirando hacia -z, centrado en x/z
  const box = new THREE.Box3(); for (let i = 0; i < P.length; i += 3) box.expandByPoint(v.set(P[i], P[i + 1], P[i + 2]));
  const R = ROLES[id], byName = nm2 => bones.findIndex(b => b.name === nm2 || b.name.replace(/_\d+$/, '') === nm2);
  // ¿hacia dónde miran? del tobillo al dedo del pie
  const wp = i => new THREE.Vector3().setFromMatrixPosition(bones[i].matrixWorld);
  const fwd = wp(byName(R.toeL)).sub(wp(byName(R.footL))).add(wp(byName(R.toeR)).sub(wp(byName(R.footR))));
  const upAxis = box.max.y - box.min.y > Math.max(box.max.x - box.min.x, box.max.z - box.min.z) ? 'y' : 'z';
  console.log(id, 'box', box.min.toArray().map(x=>x.toFixed(2)), box.max.toArray().map(x=>x.toFixed(2)), 'fwd', fwd.toArray().map(x=>x.toFixed(2)));
  if (process.env.DBG) process.exit(0);
  const yaw = Math.atan2(fwd.x, fwd.z), rot = new THREE.Matrix4().makeRotationY(-yaw + Math.PI); // fwd → -z
  const sc = HEIGHT / (box.max.y - box.min.y), cx = (box.min.x + box.max.x) / 2, cz = (box.min.z + box.max.z) / 2;
  const T = new THREE.Matrix4().makeScale(sc, sc, sc).multiply(rot).multiply(new THREE.Matrix4().makeTranslation(-cx, -box.min.y, -cz));
  const TR = new THREE.Matrix3().setFromMatrix4(rot);
  for (let i = 0; i < P.length; i += 3) { v.set(P[i], P[i + 1], P[i + 2]).applyMatrix4(T); P[i] = v.x; P[i + 1] = v.y; P[i + 2] = v.z; n.set(N[i], N[i + 1], N[i + 2]).applyMatrix3(TR).normalize(); N[i] = n.x; N[i + 1] = n.y; N[i + 2] = n.z; }
  // vértices sin pesos: al hueso más cercano
  { const bp = bones.map(b => new THREE.Vector3().setFromMatrixPosition(b.matrixWorld).applyMatrix4(T)); let fixed = 0;
    for (let k = 0; k < vtx; k++) { if (Wt[k * 4] + Wt[k * 4 + 1] + Wt[k * 4 + 2] + Wt[k * 4 + 3] > 1e-4) continue; v.set(P[k * 3], P[k * 3 + 1], P[k * 3 + 2]); let bi = 0, bd = 1e9; bp.forEach((q, i) => { const d = q.distanceToSquared(v); if (d < bd) { bd = d; bi = i; } }); J[k * 4] = bi; Wt[k * 4] = 1; fixed++; }
    console.log(id, 'vértices sin pesos', zeroW, 'arreglados', fixed); }
  // huesos: matriz de mundo de reposo (ya transformada), padre
  const bl = bones.map((b, i) => {
    const w = new THREE.Matrix4().multiplyMatrices(T, b.matrixWorld), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3(); w.decompose(p, q, s);
    let pa = b.parent, pi = -1; while (pa && pi < 0) { if (pa.name !== b.name) pi = bones.findIndex(x => x.name === pa.name); pa = pa.parent; }
    return { n: b.name.replace(/_\d+$/, ''), p: pi, t: p.toArray().map(x => +x.toFixed(5)), q: q.normalize().toArray().map(x => +x.toFixed(6)) };
  });
  // indexar (fusionar vértices iguales)
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2));
  g.setAttribute('skinIndex', new THREE.Float32BufferAttribute(J, 4)); g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(Wt, 4));
  for (const gr of groups) g.addGroup(gr.start, gr.count, groups.indexOf(gr));
  g = mergeVertices(g, 1e-4);
  const nv = g.attributes.position.count, ix = g.index.array;
  const out = [];
  out.push(Buffer.from(new Float32Array(g.attributes.position.array).buffer));
  const nq = new Int8Array(nv * 3); for (let i = 0; i < nv * 3; i++) nq[i] = Math.round(g.attributes.normal.array[i] * 127); out.push(Buffer.from(nq.buffer)); if (nv * 3 % 4) out.push(Buffer.alloc(4 - nv * 3 % 4));
  out.push(Buffer.from(new Float32Array(g.attributes.uv.array).buffer));
  const jq = new Uint8Array(nv * 4), wq = new Uint8Array(nv * 4);
  for (let i = 0; i < nv; i++) { let s = 0, big = 0; for (let q = 0; q < 4; q++) { jq[i * 4 + q] = g.attributes.skinIndex.array[i * 4 + q]; const w = Math.round(g.attributes.skinWeight.array[i * 4 + q] * 255); wq[i * 4 + q] = w; s += w; if (w > wq[i * 4 + big]) big = q; } wq[i * 4 + big] = wq[i * 4 + big] + 255 - s; } // la diferencia de redondeo va al peso mayor
  out.push(Buffer.from(jq.buffer), Buffer.from(wq.buffer));
  out.push(Buffer.from((nv > 65535 ? new Uint32Array(ix) : new Uint16Array(ix)).buffer));
  fs.writeFileSync(OUT + id + '.bin', Buffer.concat(out));
  // texturas a jpg (las escribe un script de python aparte a partir de los png crudos)
  const texes = [...new Set(groups.map(g => g.tex).filter(Boolean))];
  texes.forEach((t, k) => fs.writeFileSync(`/tmp/pm/raw_${id}_${k}.png`, t));
  const json = { v: nv, i: ix.length, i32: nv > 65535, bones: bl, roles: R,
    groups: g.groups.map(gg => { const gr = groups[gg.materialIndex]; return { s: gg.start, c: gg.count, tex: gr.tex ? `${id}_${texes.indexOf(gr.tex)}.jpg` : null, col: gr.col, name: gr.name }; }) };
  fs.writeFileSync(OUT + id + '.json', JSON.stringify(json));
  console.log(id, 'verts', nv, 'tris', ix.length / 3, 'bones', bl.length, 'groups', json.groups.map(g => g.name + ':' + (g.tex || g.col)).join(' '));
}

const [glbPath, fbxPath] = process.argv.slice(2);
{ // CT
  const raw = fs.readFileSync(glbPath), G = glbNoImages(raw);
  const gl = await new Promise((res, rej) => new GLTFLoader().parse(G.buf, '', res, rej));
  const meshes = []; gl.scene.traverse(o => { if (o.isSkinnedMesh) meshes.push(o); });
  await convert('ct', meshes, mat => { const k = G.matNames.indexOf(mat.name); const im = G.matTex[k]; return im == null ? null : Buffer.from(G.imgs[im]); }, gl.scene);
}
{ // T
  const b = fs.readFileSync(fbxPath), g = new FBXLoader().parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.length), '');
  const meshes = []; g.traverse(o => { if (o.isSkinnedMesh && o.name === 'tm_leet_variantD' && o.geometry.attributes.position.count) meshes.push(o); });
  const cache = new Map();
  for (const m of [].concat(meshes[0].material)) if (m.map && blobs.has(m.map.userData.url)) cache.set(m, Buffer.from(await blobs.get(m.map.userData.url).arrayBuffer()));
  await convert('t', meshes, mat => cache.get(mat) || null, g);
}
