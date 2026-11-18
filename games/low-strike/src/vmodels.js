// Modelos de primera persona de Source (brazos + arma + animaciones originales), convertidos por
// tools/import_vmodels.py. Están en el espacio de Source (x adelante, y izquierda, z arriba, pulgadas):
// el grupo raíz los rota y escala al de la cámara (x derecha, y arriba, -z adelante, metros).
import * as THREE from 'three';

// arma del juego → modelo de primera persona y sufijo de secuencias
export const VMAP = {
  ak47: 'v_rif_ak47', m4a4: 'v_rif_m4a1', m4a1s: 'v_rif_m4a1', famas: 'v_rif_famas', galil: 'v_rif_galil', aug: 'v_rif_aug', sg553: 'v_rif_sg552',
  awp: 'v_snip_awp', ssg08: 'v_snip_scout', g3sg1: 'v_snip_g3sg1', scar20: 'v_snip_sg550',
  glock: 'v_pist_glock18', usp: 'v_pist_usp', p2000: 'v_pist_usp', deagle: 'v_pist_deagle', p250: 'v_pist_p228', fiveseven: 'v_pist_fiveseven', dualies: 'v_pist_elite',
  mac10: 'v_smg_mac10', mp9: 'v_smg_tmp', mp5sd: 'v_smg_mp5', ump: 'v_smg_ump45', p90: 'v_smg_p90',
  xm1014: 'v_shot_xm1014', nova: 'v_shot_m3super90', m249: 'v_mach_m249para',
  knife: 'v_knife_t', c4: 'v_c4', flash: 'v_eq_flashbang', he: 'v_eq_fraggrenade', smoke: 'v_eq_smokegrenade', decoy: 'v_eq_flashbang', molotov: 'v_eq_fraggrenade', incendiary: 'v_eq_fraggrenade',
};
// los que en CS:S tienen silenciador puesto por defecto: sin él, las secuencias terminan en _unsil
const UNSIL = { m4a4: true, p2000: true };
const cache = {};
const tl = new THREE.TextureLoader();
let handsMat = null;
function hands(base) {
  if (handsMat) return handsMat;
  const map = tl.load(base + 'v_hands.jpg'); map.colorSpace = THREE.SRGBColorSpace; map.flipY = false; map.anisotropy = 4;
  const nm = tl.load(base + 'v_hands_n.jpg'); nm.flipY = false;
  return (handsMat = new THREE.MeshStandardMaterial({ map, normalMap: nm, roughness: 0.75, metalness: 0 }));
}
const gunMat = new THREE.MeshStandardMaterial({ color: '#2b2d31', roughness: 0.55, metalness: 0.4 });

export function loadVModel(name, base = 'viewmodels/') {
  if (cache[name]) return cache[name];
  return (cache[name] = (async () => {
    const [meta, buf] = await Promise.all([fetch(base + name + '.json').then(r => r.json()), fetch(base + name + '.bin').then(r => r.arrayBuffer())]);
    const nv = meta.v; let o = 0;
    const pos = new Float32Array(buf, o, nv * 3); o += nv * 12;
    const nor = new Float32Array(buf, o, nv * 3); o += nv * 12;
    const uv = new Float32Array(buf, o, nv * 2); o += nv * 8;
    const sj = new Uint8Array(buf, o, nv * 4); o += nv * 4;
    const sw = new Uint8Array(buf, o, nv * 4); o += nv * 4;
    const ix = new Uint16Array(buf.slice(o, o + meta.i * 2));
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setAttribute('skinIndex', new THREE.BufferAttribute(sj, 4)); g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4, true));
    g.setIndex(new THREE.BufferAttribute(ix, 1));
    const mats = meta.groups.map((gr, k) => { g.addGroup(gr.s, gr.c, k); return /hands/i.test(gr.tex) ? hands(base) : gunMat; });
    // animaciones: [frame][hueso][x y z qx qy qz qw] → clips de three
    const nb = meta.bones.length, clips = {};
    for (const a of meta.anims) {
      const fr = new Float32Array(buf, a.o, a.n * nb * 7), times = Float32Array.from({ length: a.n }, (_, i) => i / a.fps), tracks = [];
      for (let b = 0; b < nb; b++) {
        const P = new Float32Array(a.n * 3), Q = new Float32Array(a.n * 4);
        for (let f = 0; f < a.n; f++) { const s = (f * nb + b) * 7; P.set(fr.subarray(s, s + 3), f * 3); Q.set(fr.subarray(s + 3, s + 7), f * 4); }
        tracks.push(new THREE.VectorKeyframeTrack(`b${b}.position`, times, P), new THREE.QuaternionKeyframeTrack(`b${b}.quaternion`, times, Q));
      }
      clips[a.name] = new THREE.AnimationClip(a.name, a.n > 1 ? (a.n - 1) / a.fps : 0.1, tracks);
    }
    const seq = {}; for (const s of meta.seqs) seq[s.name.toLowerCase()] = { clip: clips[meta.anims[s.anim].name], loop: s.loop };
    return { meta, g, mats, seq };
  })());
}

// arma lista para usar: huesos propios, mezclador de animaciones
export function makeVModel(def) {
  const B = def.meta.bones, bones = B.map((b, i) => { const o = new THREE.Bone(); o.name = 'b' + i; o.position.fromArray(b.t); o.quaternion.fromArray(b.q); return o; });
  const root = new THREE.Group(); root.name = 'vmroot';
  // Source → cámara: x_three = -y, y_three = z, z_three = -x; pulgadas → metros
  root.matrix.set(0, -1, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 0, 1).multiply(new THREE.Matrix4().makeScale(0.0254, 0.0254, 0.0254));
  root.matrixAutoUpdate = false;
  B.forEach((b, i) => (b.p >= 0 ? bones[b.p] : root).add(bones[i]));
  const mesh = new THREE.SkinnedMesh(def.g, def.mats); mesh.frustumCulled = false; mesh.renderOrder = 10;
  root.add(mesh); root.updateMatrixWorld(true);
  const inv = B.map(b => { const m = b.inv; return new THREE.Matrix4().set(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], 0, 0, 0, 1); });
  mesh.bind(new THREE.Skeleton(bones, inv), new THREE.Matrix4());
  const holder = new THREE.Group(); holder.add(root);
  const mixer = new THREE.AnimationMixer(root);
  const V = { holder, root, mesh, mixer, def, cur: null, idle: null, bones };
  return V;
}
// Arma: el modelo de CS2 del juego (con sus colores, o con texturas cuando estén) pegado al hueso del arma,
// alineado con la del modelo de Source (largo, cañón hacia el fogonazo, arriba = arriba). La malla del arma
// de Source se oculta; los brazos y sus animaciones quedan.
const hidden = new THREE.MeshBasicMaterial({ visible: false });
export function attachGun(V, gunGeo) {
  const def = V.def, g = def.g, B = def.meta.bones;
  const pos = g.attributes.position, sj = g.attributes.skinIndex, sw = g.attributes.skinWeight, idx = g.index.array;
  const isGun = new Uint8Array(pos.count);
  def.meta.groups.forEach((gr, k) => { if (!/hands/i.test(gr.tex)) for (let i = gr.s; i < gr.s + gr.c; i++) isGun[idx[i]] = 1; });
  // hueso con más vértices del arma
  const cnt = new Map(); for (let i = 0; i < pos.count; i++) if (isGun[i]) { const b = sj.getX(i); cnt.set(b, (cnt.get(b) || 0) + 1); }
  let wb = -1, best = 0; for (const [b, c] of cnt) if (c > best) { best = c; wb = b; }
  if (wb < 0) return null;
  const inv = V.mesh.skeleton.boneInverses[wb], v = new THREE.Vector3(), pts = [];
  for (let i = 0; i < pos.count; i++) if (isGun[i] && sj.getX(i) === wb) pts.push(v.fromBufferAttribute(pos, i).applyMatrix4(inv).clone());
  const box = new THREE.Box3().setFromPoints(pts), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  const axes = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)], ext = [size.x, size.y, size.z];
  const ai = ext.indexOf(Math.max(...ext)); const fwd = axes[ai].clone();
  // sentido: hacia el fogonazo (hueso 'flash'/'muzzle'), si no, hacia donde mira la cámara en reposo (+x de Source)
  const fl = B.findIndex(b => /flash|muzzle/i.test(b.n));
  const ref = fl >= 0 ? new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().copy(V.mesh.skeleton.boneInverses[fl]).invert()).applyMatrix4(inv).sub(ctr) : new THREE.Vector3(1, 0, 0).transformDirection(inv);
  if (ref.dot(fwd) < 0) fwd.negate();
  const upW = new THREE.Vector3(0, 0, 1).transformDirection(inv); upW.addScaledVector(fwd, -upW.dot(fwd)).normalize();
  // nuestra arma: adelante = -z, arriba = +y
  const gb = new THREE.Box3().setFromBufferAttribute(gunGeo.attributes.position), gs = gb.getSize(new THREE.Vector3()), gc = gb.getCenter(new THREE.Vector3());
  const sc = ext[ai] / gs.z;
  const side = new THREE.Vector3().crossVectors(upW, fwd); // derecha del arma (en Source: adelante × arriba = izquierda → se invierte)
  const R = new THREE.Matrix4().makeBasis(side.clone().negate(), upW, fwd.clone().negate()); // columnas: x → -izq = derecha, y → arriba, z → atrás
  const m = new THREE.Mesh(gunGeo, V.gunMats || null);
  const M = new THREE.Matrix4().compose(ctr, new THREE.Quaternion().setFromRotationMatrix(R), new THREE.Vector3(sc, sc, sc)).multiply(new THREE.Matrix4().makeTranslation(-gc.x, -gc.y, -gc.z));
  m.matrixAutoUpdate = false; m.matrix.copy(M); m.renderOrder = 10; m.frustumCulled = false;
  V.bones[wb].add(m);
  V.mesh.material = def.meta.groups.map(gr => /hands/i.test(gr.tex) ? V.mesh.material[def.meta.groups.indexOf(gr)] : hidden);
  V.gun = m;
  return m;
}
// reproducir una secuencia (por nombre o por tipo: idle, draw, shoot, reload); vuelve sola al idle
export function playSeq(V, kind, opts = {}) {
  const S = V.def.seq, suf = opts.unsil ? '_unsil' : '';
  const pick = (...names) => { for (const n of names) { const k = Object.keys(S).find(k => k === n + suf || (suf === '' && k === n)); if (k) return S[k]; } for (const n of names) { const k = Object.keys(S).find(k => k.includes(n) && (suf ? k.endsWith(suf) : !k.endsWith('_unsil'))); if (k) return S[k]; } return null; };
  let s = null;
  if (kind === 'idle') s = pick('idle', 'idle1');
  else if (kind === 'draw') s = pick('draw', 'deploy');
  else if (kind === 'reload') s = pick('reload', 'reload1', 'start_reload');
  else if (kind === 'shoot') { const opts2 = Object.keys(S).filter(k => /shoot|fire|stab|throw/.test(k) && !/last|empty|left|leftlast/.test(k) && (suf ? k.endsWith(suf) : !k.endsWith('_unsil'))); s = opts2.length ? S[opts2[Math.floor(Math.random() * opts2.length)]] : null; }
  else s = S[kind] || null;
  if (!s || !s.clip) return 0;
  const a = V.mixer.clipAction(s.clip);
  if (V.cur && V.cur !== a) V.cur.fadeOut(kind === 'shoot' ? 0.02 : 0.08);
  a.reset(); a.setLoop(kind === 'idle' ? THREE.LoopRepeat : THREE.LoopOnce, Infinity); a.clampWhenFinished = kind !== 'idle';
  a.timeScale = opts.dur ? s.clip.duration / opts.dur : 1;
  a.fadeIn(kind === 'shoot' ? 0.02 : 0.08).play(); V.cur = a; V.kind = kind;
  V.until = kind === 'idle' ? Infinity : (s.clip.duration / a.timeScale);
  return V.until;
}
export function updateVModel(V, dt, unsil) {
  V.mixer.update(dt);
  if (V.kind !== 'idle') { V.until -= dt; if (V.until <= 0) playSeq(V, 'idle', { unsil }); }
}
