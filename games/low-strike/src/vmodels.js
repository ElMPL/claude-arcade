// Modelos de primera persona de Source (brazos + arma + animaciones originales), convertidos por
// tools/import_vmodels.py. Están en el espacio de Source (x adelante, y izquierda, z arriba, pulgadas):
// el grupo raíz los rota y escala al de la cámara (x derecha, y arriba, -z adelante, metros).
import * as THREE from 'three';

// arma del juego → modelo de primera persona y sufijo de secuencias
export const VMAP = {
  ak47: 'v_rif_ak47', m4a4: 'v_rif_m4a1', m4a1s: 'v_rif_m4a1', famas: 'v_rif_famas', galil: 'v_rif_galil', aug: 'v_rif_aug', sg553: 'v_rif_sg552',
  awp: 'v_snip_awp', ssg08: 'v_snip_scout', g3sg1: 'v_snip_g3sg1', scar20: 'v_snip_sg550',
  glock: 'v_pist_glock18', usp: 'v_pist_usp', p2000: 'v_pist_usp', deagle: 'v_pist_deagle', p250: 'v_pist_p228', fiveseven: 'v_pist_fiveseven', dualies: 'v_pist_elite',
  mac10: 'v_smg_mac10', mp9: 'v_smg_tmp', mp5sd: 'v_smg_ump45', mp5: 'v_smg_ump45', mp7: 'v_smg_ump45', bizon: 'v_smg_ump45',
  tec9: 'v_pist_glock18', cz75: 'v_pist_p228', r8: 'v_pist_deagle', zeus: 'v_pist_p228', sawedoff: 'v_shot_m3super90', mag7: 'v_smg_ump45', negev: 'v_mach_m249para', ump: 'v_smg_ump45', p90: 'v_smg_p90',
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
      const fr = new Int16Array(buf.slice(a.o, a.o + a.n * nb * 14)), times = Float32Array.from({ length: a.n }, (_, i) => i / a.fps), tracks = [];
      for (let b = 0; b < nb; b++) {
        const P = new Float32Array(a.n * 3), Q = new Float32Array(a.n * 4);
        for (let f = 0; f < a.n; f++) { const s = (f * nb + b) * 7; for (let k = 0; k < 3; k++) P[f * 3 + k] = fr[s + k] / 200; for (let k = 0; k < 4; k++) Q[f * 4 + k] = fr[s + 3 + k] / 32767; }
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
export function attachGun(V, gunGeo, mat, pick) {
  const def = V.def, g = def.g, B = def.meta.bones;
  const pos = g.attributes.position, sj = g.attributes.skinIndex, sw = g.attributes.skinWeight, idx = g.index.array;
  const isGun = new Uint8Array(pos.count);
  def.meta.groups.forEach((gr, k) => { if (!/hands/i.test(gr.tex)) for (let i = gr.s; i < gr.s + gr.c; i++) isGun[idx[i]] = 1; });
  // hueso con más vértices del arma
  const cnt = new Map(); for (let i = 0; i < pos.count; i++) if (isGun[i]) { const b = sj.getX(i); cnt.set(b, (cnt.get(b) || 0) + 1); }
  let wb = -1, best = 0; for (const [b, c] of cnt) if (c > best && (!pick || pick.test(B[b].n))) { best = c; wb = b; }
  if (wb < 0) return null;
  // raíz del arma: subir desde el hueso con más vértices mientras el padre no sea de la mano/brazo; después se
  // toman todas las piezas que cuelgan de esa raíz (corredera, cargador…) para el centro y el largo. En las
  // Dual Berettas cada pistola tiene su raíz, así que se usa una sola.
  const isArm = n => /Bip01|hand|finger|arm|ulna|wrist|clavicle|camera/i.test(n);
  let root = wb; while (B[root].p >= 0 && !isArm(B[B[root].p].n)) root = B[root].p;
  const under = new Uint8Array(B.length); for (let k = 0; k < B.length; k++) { let x = k; while (x >= 0 && x !== root) x = B[x].p; under[k] = x === root ? 1 : 0; }
  const inv = V.mesh.skeleton.boneInverses[wb], v = new THREE.Vector3(), pts = [];
  for (let i = 0; i < pos.count; i++) if (isGun[i] && under[sj.getX(i)]) pts.push(v.fromBufferAttribute(pos, i).applyMatrix4(inv).clone());
  const box = new THREE.Box3().setFromPoints(pts), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  const axes = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)], ext = [size.x, size.y, size.z];
  // sentido del cañón: hacia el fogonazo (hueso 'flash'/'muzzle') de esta arma; si no hay, el eje más largo hacia +x de Source
  const fl = B.findIndex((b, k) => /flash|muzzle/i.test(b.n) && under[k]);
  const ref = fl >= 0 ? new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().copy(V.mesh.skeleton.boneInverses[fl]).invert()).applyMatrix4(inv).sub(ctr) : new THREE.Vector3(1, 0, 0).transformDirection(inv);
  let ai = ext.indexOf(Math.max(...ext));
  const fwd = axes[ai].clone();
  if (ref.dot(fwd) < 0) fwd.negate();
  const upW = new THREE.Vector3(0, 0, 1).transformDirection(inv); upW.addScaledVector(fwd, -upW.dot(fwd)).normalize();
  // nuestra arma: adelante = -z, arriba = +y
  const gb = new THREE.Box3().setFromBufferAttribute(gunGeo.attributes.position), gs = gb.getSize(new THREE.Vector3()), gc = gb.getCenter(new THREE.Vector3());
  const sc = ext[ai] / gs.z;
  const side = new THREE.Vector3().crossVectors(upW, fwd);
  if (new THREE.Matrix3().setFromMatrix4(inv).determinant() < 0) side.negate(); // hueso espejado (mano izquierda): que el arma no quede dada vuelta // derecha del arma (en Source: adelante × arriba = izquierda → se invierte)
  const R = new THREE.Matrix4().makeBasis(side.clone().negate(), upW, fwd.clone().negate()); // columnas: x → -izq = derecha, y → arriba, z → atrás
  const m = new THREE.Mesh(gunGeo, mat || V.gunMats || null);
  let M = new THREE.Matrix4().compose(ctr, new THREE.Quaternion().setFromRotationMatrix(R), new THREE.Vector3(sc, sc, sc)).multiply(new THREE.Matrix4().makeTranslation(-gc.x, -gc.y, -gc.z));
  try { const M2 = fitShape(pts, gunGeo, M, inv, ref, ctr); if (M2) M = M2; } catch (e) { }
  m.matrixAutoUpdate = false; m.matrix.copy(M); m.renderOrder = 10; m.frustumCulled = false;
  V.bones[wb].add(m);
  V.mesh.material = def.meta.groups.map(gr => /hands/i.test(gr.tex) ? V.mesh.material[def.meta.groups.indexOf(gr)] : hidden);
  V.gun = m;
  return m;
}
// Ajuste por forma: prueba las 24 rotaciones de ejes del arma de CS2 contra la malla del arma de Source (la que
// el modelo agarra de verdad) y se queda con la que mejor se superpone (distancia de Chamfer), con escala por
// tamaño medio y unos pasos de ICP para la posición. Así una MP9 encaja en la mano de la TMP aunque tengan otras
// proporciones (antes se usaba el eje más largo, que en armas con cargador largo apuntaba para arriba).
function sample(arr, n) { if (arr.length <= n) return arr; const out = [], st = arr.length / n; for (let i = 0; i < n; i++) out.push(arr[Math.floor(i * st)]); return out; }
function chamfer(A, B) {
  let s = 0; for (const a of A) { let b = 1e9; for (const q of B) { const d = (a.x - q.x) ** 2 + (a.y - q.y) ** 2 + (a.z - q.z) ** 2; if (d < b) b = d; } s += Math.sqrt(b); }
  let t = 0; for (const q of B) { let b = 1e9; for (const a of A) { const d = (a.x - q.x) ** 2 + (a.y - q.y) ** 2 + (a.z - q.z) ** 2; if (d < b) b = d; } t += Math.sqrt(b); }
  return s / A.length + t / B.length;
}
const ROTS = (() => { const out = [], P = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]; for (const p of P) for (let sg = 0; sg < 8; sg++) { const m = new THREE.Matrix4(), e = new Array(16).fill(0); for (let r = 0; r < 3; r++) e[r * 4 + p[r]] = (sg >> r) & 1 ? -1 : 1; e[15] = 1; m.fromArray(e); out.push(m); } return out; })();
function fitShape(tgtAll, geo, M0, inv, ref, ctr) {
  const T = sample(tgtAll, 220); if (T.length < 20) return null;
  const pa = geo.attributes.position, G = []; const st = Math.max(1, Math.floor(pa.count / 220)); for (let i = 0; i < pa.count; i += st) G.push(new THREE.Vector3().fromBufferAttribute(pa, i));
  const gc = new THREE.Vector3(); G.forEach(p => gc.add(p)); gc.divideScalar(G.length);
  const tc = new THREE.Vector3(); T.forEach(p => tc.add(p)); tc.divideScalar(T.length);
  const rms = (A, c) => Math.sqrt(A.reduce((s, p) => s + p.distanceToSquared(c), 0) / A.length);
  const sc = rms(T, tc) / rms(G, gc);
  const want = Math.sign(new THREE.Matrix3().setFromMatrix4(inv).determinant()) || 1;
  const muzzle = new THREE.Vector3(0, 0, -1);
  let best = null, bestE = Infinity;
  const tryM = (Mx, bonus = 1) => { const P = G.map(p => p.clone().applyMatrix4(Mx)); const e = chamfer(P, T) * bonus; if (e < bestE) { bestE = e; best = Mx; } };
  tryM(M0, 0.78); // la alineación de antes gana salvo que otra encaje claramente mejor
  for (const R of ROTS) {
    if (Math.sign(new THREE.Matrix3().setFromMatrix4(R).determinant()) !== want) continue;
    if (ref && ref.lengthSq() > 1e-6) { const f = muzzle.clone().applyMatrix4(R); if (f.dot(ref) <= 0) continue; } // la boca hacia el fogonazo
    const Mx = new THREE.Matrix4().makeTranslation(tc.x, tc.y, tc.z).multiply(R).multiply(new THREE.Matrix4().makeScale(sc, sc, sc)).multiply(new THREE.Matrix4().makeTranslation(-gc.x, -gc.y, -gc.z));
    tryM(Mx);
  }
  // ICP de traslación
  for (let it = 0; it < 6; it++) {
    const P = G.map(p => p.clone().applyMatrix4(best)), d = new THREE.Vector3();
    for (const q of T) { let bi = 0, b = 1e9; P.forEach((p, i) => { const e = p.distanceToSquared(q); if (e < b) { b = e; bi = i; } }); d.add(q.clone().sub(P[bi])); }
    d.divideScalar(T.length); if (d.lengthSq() < 1e-8) break;
    best = new THREE.Matrix4().makeTranslation(d.x, d.y, d.z).multiply(best);
  }
  return best;
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
  // three sólo vuelve a escribir un hueso si la animación cambió su valor: deshacer lo que sumó la inspección
  if (V._ins) { for (const [b, q, p] of V._ins) { b.quaternion.copy(q); b.position.copy(p); } V._ins = null; }
  V.mixer.update(dt);
  if (V.kind !== 'idle') { V.until -= dt; if (V.until <= 0) playSeq(V, 'idle', { unsil }); }
}
// Inspección (F) sobre los huesos: el antebrazo derecho gira desde el codo (fuera de pantalla) para traer el arma
// al centro y la muñeca la rueda para mostrar un costado y después el otro; el antebrazo izquierdo baja mientras
// tanto. Ejes de Source: x adelante, y izquierda, z arriba.
// claves: [t, rodar muñeca (x), cabeceo antebrazo (y), guiñada antebrazo (z), cuánto baja el brazo izquierdo]
const IKF = {
  rifle: [[0, 0, 0, 0, 0], [0.16, 0.9, -0.2, 0.45, 1], [0.4, 1.0, -0.25, 0.5, 1], [0.54, 0.2, -0.1, 0.3, 1], [0.7, -0.8, -0.15, 0.25, 1], [0.86, -0.85, -0.15, 0.25, 1], [1, 0, 0, 0, 0]],
  pistol: [[0, 0, 0, 0, 0], [0.2, 1.1, -0.2, 0.45, 1], [0.46, 1.2, -0.25, 0.5, 1], [0.66, -0.9, -0.15, 0.3, 1], [0.86, -0.95, -0.15, 0.3, 1], [1, 0, 0, 0, 0]],
  knife: [[0, 0, 0, 0, 0], [0.2, 1.15, -0.2, 0.45, 1], [0.45, 1.25, -0.25, 0.5, 1], [0.62, -1.05, -0.1, 0.35, 1], [0.84, -1.1, -0.1, 0.35, 1], [1, 0, 0, 0, 0]],
};
const _q = new THREE.Quaternion(), _r = new THREE.Quaternion(), _e = new THREE.Euler(0, 0, 0, 'ZYX');
function rotRoot(bone, x, y, z) {
  _q.identity(); for (let p = bone.parent; p && p.isBone; p = p.parent) _q.premultiply(p.quaternion);
  _r.setFromEuler(_e.set(x, y, z)); bone.quaternion.premultiply(_q.clone().invert().multiply(_r).multiply(_q));
}
export function inspectPose(V, k, cat) {
  const B = V.def.meta.bones;
  if (!V.ib) { const f = n => B.findIndex(b => b.n.endsWith(n)); V.ib = { rh: f('R_Hand'), rf: f('R_Forearm'), lf: f('L_Forearm') }; }
  const KF = IKF[cat] || IKF.rifle;
  let i = 0; while (i < KF.length - 2 && k > KF[i + 1][0]) i++;
  const A0 = KF[i], A1 = KF[i + 1], t = Math.max(0, Math.min(1, (k - A0[0]) / (A1[0] - A0[0]))), e = t * t * (3 - 2 * t), L = j => A0[j] + (A1[j] - A0[j]) * e;
  const fb = V.bones[V.ib.rf], hb = V.bones[V.ib.rh], lb = V.bones[V.ib.lf];
  V._ins = [fb, hb, lb].filter(Boolean).map(b => [b, b.quaternion.clone(), b.position.clone()]);
  if (fb) rotRoot(fb, 0, L(2) * 0.5, L(3) * 0.5);
  if (hb) rotRoot(hb, L(1), 0, 0);
  if (lb) { const d = L(4); lb.position.z -= d * 14; lb.position.x -= d * 4; lb.position.y += d * 3; }
}
// Armas que existen en CS:Source: se usa la malla original de primera persona (brazos y arma animados juntos,
// agarre exacto) con las texturas de CS:S de cada pieza (viewmodels/tex/css_<material>.webp). Las de CS:GO que no
// están en CS:S (MP9, Tec-9, Negev…) siguen con el modelo de CS2 pegado a la mano.
export const NATIVE = new Set(['ak47', 'm4a1s', 'm4a4', 'aug', 'famas', 'galil', 'sg553', 'awp', 'g3sg1', 'glock', 'usp', 'p2000', 'deagle', 'fiveseven', 'dualies', 'p250', 'mac10', 'ump', 'p90', 'xm1014', 'm249', 'he', 'smoke', 'flash', 'decoy', 'c4']);
const CSS_TEX = new Set(['c4', 'c4_light', 'flashbang', 'fraggrenade', 'smokegrenade', 'knife_t', 'mach_m249para', 'deagle_skin1', 'pist_elite', 'pist_fiveseven', 'glock18', 'pist_p228_1', 'pist_usp', 'rif_ak47skin1', 'rif_aug', 'rif_famas', 'rif_galil', 'rif_m4a1', 'rif_sg552', 'shot_m3super90', 'shot_xm1014', 'smg_mac10_1', 'mp5_1', 'smg_p90', 'smg_p90_sight', 'smg_tmp', 'smg_ump45', 'v_awp', 'v_awp_scope', 'snip_g3sg1', 'snip_scout', 'snip_sg550']);
const TEX_ALIAS = { w_smg_mp5: 'mp5_1', handle: 'knife_t' };
const texMats = {};
function cssMat(name, base = 'viewmodels/') {
  let n = String(name || '').toLowerCase(); n = TEX_ALIAS[n] || n; if (!CSS_TEX.has(n)) return null;
  if (!texMats[n]) { const map = tl.load(base + 'tex/css_' + n + '.webp'); map.colorSpace = THREE.SRGBColorSpace; map.flipY = false; map.anisotropy = 8; texMats[n] = new THREE.MeshStandardMaterial({ map, roughness: 0.55, metalness: 0.3 }); }
  return texMats[n];
}
export function nativeGun(V, wid) {
  if (!NATIVE.has(wid)) return false;
  const G = V.def.meta.groups; let any = false;
  V.mesh.material = G.map((g, k) => { if (/hands/i.test(g.tex)) return V.mesh.material[k]; const m = cssMat(g.tex); if (m) { any = true; return m; } return V.mesh.material[k]; });
  return any;
}
// cuchillo: la navaja (flip knife) del pack de CS:GO para 1.6, con su textura; la malla se pega al hueso del
// cuchillo de Source (mismas animaciones de brazos). Las otras 9 terminaciones quedan en tex/knife_flip_N.webp.
let knifeP = null;
export function loadKnife(skin = 1, base = 'viewmodels/') {
  if (!knifeP) knifeP = Promise.all([fetch(base + 'knife_flip.json').then(r => r.json()), fetch(base + 'knife_flip.bin').then(r => r.arrayBuffer())]).then(([m, b]) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(b, 0, m.v * 3), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(b, m.v * 12, m.v * 2), 2));
    g.setIndex(new THREE.BufferAttribute(new Uint16Array(b, m.v * 20, m.i), 1)); g.computeVertexNormals();
    return g;
  });
  return knifeP.then(g => {
    const map = tl.load(base + 'tex/knife_flip_' + skin + '.webp'); map.colorSpace = THREE.SRGBColorSpace; map.flipY = false; map.anisotropy = 8;
    return { g, mat: new THREE.MeshStandardMaterial({ map, roughness: 0.35, metalness: 0.55, side: THREE.DoubleSide }) };
  });
}
// mallas de mundo sacadas de los modelos de primera persona (pose de reposo, sin brazos), con su textura:
// bomba plantada/tirada y granadas en vuelo
const worldCache = {};
async function staticFromV(vname, tex, opts = {}) {
  const def = await loadVModel(vname); const G = def.meta.groups;
  let k = -1, best = 0; G.forEach((g, i) => { if (!/hands/i.test(g.tex) && g.c > best) { best = g.c; k = i; } });
  const gr = G[k], src = def.g, ix = src.index.array.slice(gr.s, gr.s + gr.c);
  const used = [...new Set(ix)], remap = new Map(used.map((v, i) => [v, i]));
  const P = new Float32Array(used.length * 3), U = new Float32Array(used.length * 2), pa = src.attributes.position.array, ua = src.attributes.uv.array;
  used.forEach((v, i) => { P[i * 3] = -pa[v * 3 + 1] * 0.0254; P[i * 3 + 1] = pa[v * 3 + 2] * 0.0254; P[i * 3 + 2] = -pa[v * 3] * 0.0254; U[i * 2] = ua[v * 2]; U[i * 2 + 1] = ua[v * 2 + 1]; });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  g.setIndex(Array.from(ix, v => remap.get(v))); g.computeBoundingBox();
  if (opts.flat) { // el eje más corto queda vertical, apoyado en el piso
    const s = g.boundingBox.getSize(new THREE.Vector3()), ax = [s.x, s.y, s.z].indexOf(Math.min(s.x, s.y, s.z));
    if (ax === 0) g.rotateZ(Math.PI / 2); else if (ax === 2) g.rotateX(Math.PI / 2);
    g.computeBoundingBox(); const c = g.boundingBox.getCenter(new THREE.Vector3()); g.translate(-c.x, -g.boundingBox.min.y, -c.z);
  } else { const c = g.boundingBox.getCenter(new THREE.Vector3()); g.translate(-c.x, -c.y, -c.z); }
  g.computeVertexNormals();
  return new THREE.Mesh(g, cssMat(gr.tex) || new THREE.MeshStandardMaterial({ color: '#777', roughness: 0.5 }));
}
export function c4World() { return (worldCache.c4 ||= staticFromV('v_c4', null, { flat: true })).then(m => m.clone()); }
const NADE_V = { he: ['v_eq_fraggrenade'], smoke: ['v_eq_smokegrenade'], flash: ['v_eq_flashbang'], decoy: ['v_eq_flashbang'] };
export const nadeWorld = {};
export function preloadNades() { for (const [k, [v, t]] of Object.entries(NADE_V)) staticFromV(v, t).then(m => { nadeWorld[k] = m; }).catch(() => {}); }
