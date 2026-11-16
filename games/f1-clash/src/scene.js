// Escenario 3D del circuito: asfalto con goma, pianos, grava, muros con publicidad, tribunas
// con público, calle de boxes con garajes, semáforo, árboles/palmeras o ciudad nocturna, cielo y reflejos.
import * as THREE from 'three';
import { pointAt, at, headingAt } from './track.js';

const THEMES = {
  day: { top: '#2f7fe0', hor: '#d6ecff', fog: '#cfe2f3', fogN: 380, fogF: 2600, sun: '#fff1dc', sunI: 2.7, sunDir: [0.45, 0.8, 0.35], hemiS: '#cfe6ff', hemiG: '#5d7a3a', hemiI: 0.9, grass: ['#4f8a2c', '#5d9a35'], water: true, palms: true, clouds: true, exposure: 0.95, bloom: 0.12 },
  sunset: { top: '#3d5b9e', hor: '#ffb079', fog: '#e0b39a', fogN: 350, fogF: 2400, sun: '#ffb27a', sunI: 2.3, sunDir: [-0.8, 0.32, 0.5], hemiS: '#ffc9a8', hemiG: '#4a5a2c', hemiI: 0.75, grass: ['#557c2a', '#62892f'], water: false, clouds: true, exposure: 1.0, bloom: 0.2 },
  night: { top: '#050913', hor: '#1a2440', fog: '#101a30', fogN: 260, fogF: 1600, sun: '#b9cbff', sunI: 0.9, sunDir: [0.3, 0.85, -0.4], hemiS: '#8ea6e0', hemiG: '#2a2a35', hemiI: 0.85, grass: ['#2a2c31', '#303237'], water: true, city: true, stars: true, exposure: 1.15, bloom: 0.85 },
};

function canvasTex(w, h, draw, repeat = true) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 8;
  return t;
}
function noise(x, w, h, base, amp, n = 9000, size = 2) {
  x.fillStyle = base; x.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    const v = (Math.random() - 0.5) * amp;
    x.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
    x.fillRect(Math.random() * w, Math.random() * h, size * Math.random() + 0.6, size * Math.random() + 0.6);
  }
}

function ribbon(T, offA, offB, y, mat, { vLen = 10, filter = null, colorFn = null } = {}) {
  const pos = [], uv = [], col = [];
  const N = T.N;
  const pt = (i, o) => [T.px[i] + T.nx[i] * o, T.pz[i] + T.nz[i] * o];
  for (let i = 0; i < N; i++) {
    if (filter && !filter(i)) continue;
    const j = (i + 1) % N;
    const a0 = pt(i, offA(i)), b0 = pt(i, offB(i)), a1 = pt(j, offA(j)), b1 = pt(j, offB(j));
    const v0 = i * T.ds / vLen, v1 = (i + 1) * T.ds / vLen;
    const yA = typeof y === 'function' ? y(0) : y, yB = typeof y === 'function' ? y(1) : y;
    pos.push(a0[0], yA, a0[1], a1[0], yA, a1[1], b0[0], yB, b0[1], b0[0], yB, b0[1], a1[0], yA, a1[1], b1[0], yB, b1[1]);
    uv.push(0, v0, 0, v1, 1, v0, 1, v0, 0, v1, 1, v1);
    if (colorFn) { const c = colorFn(i); for (let k = 0; k < 6; k++) col.push(c.r, c.g, c.b); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  if (colorFn) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.receiveShadow = true;
  return m;
}
function wallStrip(T, off, y0, y1, mat, { uLen = 24, filter = null } = {}) {
  const pos = [], uv = [];
  let u = 0;
  for (let i = 0; i < T.N; i++) {
    const j = (i + 1) % T.N;
    const ax = T.px[i] + T.nx[i] * off(i), az = T.pz[i] + T.nz[i] * off(i);
    const bx = T.px[j] + T.nx[j] * off(j), bz = T.pz[j] + T.nz[j] * off(j);
    const len = Math.hypot(bx - ax, bz - az), u1 = u + len / uLen;
    if (!filter || filter(i)) {
      pos.push(ax, y0, az, bx, y0, bz, ax, y1, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
      uv.push(u, 0, u1, 0, u, 1, u1, 0, u1, 1, u, 1);
    }
    u = u1;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true;
  return m;
}

export const BRANDS = ['CLAUDE ARCADE', 'TURBO COLA', 'NAFTA SUR', 'BAHÍA AZUL', 'RAYO TELECOM', 'PANCHO GP', 'OLA MOTORS', 'MATE POWER'];
export const BRAND_COL = [['#d7141a', '#fff'], ['#111', '#ffd21a'], ['#0b3d91', '#fff'], ['#00a6a6', '#fff'], ['#ff7a00', '#111'], ['#fff', '#d7141a'], ['#1b1b1b', '#4fc3ff'], ['#0a6b47', '#fff']];

export function buildScene(T, renderer) {
  const th = THEMES[T.def.theme] || THEMES.day;
  const scene = new THREE.Scene();
  renderer.toneMappingExposure = th.exposure;
  scene.fog = new THREE.Fog(th.fog, th.fogN, th.fogF);
  const pit = T.pit, rel = T.rel;
  const inPit = i => { const u = rel(i * T.ds); return u > pit.inS - 10 && u < pit.outS + 10; };

  // cielo
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(th.top) }, hor: { value: new THREE.Color(th.hor) }, sunDir: { value: new THREE.Vector3(...th.sunDir).normalize() }, sunC: { value: new THREE.Color(th.sun) }, stars: { value: th.stars ? 1 : 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunC; uniform float stars; varying vec3 vP;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
      void main(){ float y = clamp(vP.y, -0.1, 1.0); vec3 c = mix(hor, top, pow(max(y,0.0), 0.55));
      float s = max(dot(normalize(vP), sunDir), 0.0); c += sunC * (pow(s, 600.0) * 2.0 + pow(s, 16.0) * 0.12);
      if (stars > 0.5 && y > 0.05) { vec3 q = floor(vP * 420.0); float r = h(q); c += vec3(step(0.9975, r) * (0.6 + 0.4 * h(q + 1.0))) * smoothstep(0.05, 0.3, y); }
      gl_FragColor = vec4(c, 1.0); }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 32, 16), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);
  {
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), skyMat.clone()));
    const gnd = new THREE.Mesh(new THREE.CircleGeometry(90, 24), new THREE.MeshBasicMaterial({ color: th.city ? '#15161b' : th.grass[0] })); gnd.rotation.x = -Math.PI / 2; gnd.position.y = -2; envScene.add(gnd);
    if (th.city) for (let k = 0; k < 14; k++) { const b = new THREE.Mesh(new THREE.BoxGeometry(6, 30, 3), new THREE.MeshBasicMaterial({ color: '#ffd9a0' })); const a = k / 14 * Math.PI * 2; b.position.set(Math.cos(a) * 80, 6, Math.sin(a) * 80); b.lookAt(0, 6, 0); envScene.add(b); }
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(envScene, 0.04).texture;
    scene.environmentIntensity = th.city ? 0.6 : 0.45;
    pm.dispose();
  }

  scene.add(new THREE.HemisphereLight(th.hemiS, th.hemiG, th.hemiI));
  const sun = new THREE.DirectionalLight(th.sun, th.sunI);
  const sd = new THREE.Vector3(...th.sunDir).normalize();
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);

  let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
  for (let i = 0; i < T.N; i++) { minX = Math.min(minX, T.px[i]); maxX = Math.max(maxX, T.px[i]); minZ = Math.min(minZ, T.pz[i]); maxZ = Math.max(maxZ, T.pz[i]); }
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2, span = Math.max(maxX - minX, maxZ - minZ);

  const groundTex = th.city
    ? canvasTex(512, 512, (x, w, h) => { noise(x, w, h, '#2b2d33', 0.12, 20000, 3); x.strokeStyle = 'rgba(255,255,255,0.05)'; x.lineWidth = 3; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * w / 4, 0); x.lineTo(i * w / 4, h); x.stroke(); x.beginPath(); x.moveTo(0, i * h / 4); x.lineTo(w, i * h / 4); x.stroke(); } })
    : canvasTex(512, 512, (x, w, h) => { noise(x, w, h, th.grass[0], 0.16, 26000, 3); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.03)'; x.fillRect(0, i * h / 8, w, h / 8); } });
  groundTex.repeat.set(span / 12, span / 12);
  const groundSize = span + 700;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(groundSize, groundSize), new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(cx, -0.03, cz); ground.receiveShadow = true;
  scene.add(ground);
  let water = null;
  if (th.water) {
    if (!th.city) { const sand = new THREE.Mesh(new THREE.PlaneGeometry(groundSize + 120, groundSize + 120), new THREE.MeshStandardMaterial({ color: '#e7d3a1', roughness: 1 })); sand.rotation.x = -Math.PI / 2; sand.position.set(cx, -0.6, cz); scene.add(sand); }
    water = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshPhysicalMaterial({ color: th.city ? '#0b1730' : '#1f7fb8', roughness: 0.08, metalness: 0.1, clearcoat: 1 }));
    water.rotation.x = -Math.PI / 2; water.position.set(cx, -1.2, cz); scene.add(water);
  } else {
    const far = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshStandardMaterial({ color: th.grass[0], roughness: 1 }));
    far.rotation.x = -Math.PI / 2; far.position.set(cx, -0.5, cz); scene.add(far);
  }
  if (!th.city) {
    const mGeo = new THREE.ConeGeometry(1, 1, 7, 1);
    const mMat = new THREE.MeshStandardMaterial({ color: th.water ? '#5c7f6a' : '#5b4f6b', roughness: 1, flatShading: true });
    const nM = 46, mountains = new THREE.InstancedMesh(mGeo, mMat, nM);
    const dm = new THREE.Object3D();
    for (let i = 0; i < nM; i++) {
      const a = i / nM * Math.PI * 2 + Math.random() * 0.1, r = span * 0.9 + 900 + Math.random() * 500;
      const hgt = 180 + Math.random() * (th.water ? 260 : 520), rad = 260 + Math.random() * 300;
      dm.position.set(cx + Math.cos(a) * r, hgt / 2 - 5, cz + Math.sin(a) * r); dm.scale.set(rad, hgt, rad); dm.rotation.y = Math.random() * 3; dm.updateMatrix();
      mountains.setMatrixAt(i, dm.matrix);
    }
    scene.add(mountains);
  }
  if (th.clouds) {
    const ct = canvasTex(128, 128, (x, w, h) => { for (let k = 0; k < 14; k++) { const g = x.createRadialGradient(20 + Math.random() * 88, 50 + Math.random() * 30, 0, 64, 64, 30 + Math.random() * 20); g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); } }, false);
    const cm = new THREE.SpriteMaterial({ map: ct, transparent: true, depthWrite: false, fog: false, color: th.water ? '#ffffff' : '#ffd0b0' });
    for (let k = 0; k < 26; k++) { const s = new THREE.Sprite(cm); const a = Math.random() * Math.PI * 2, r = 900 + Math.random() * 1600; s.position.set(cx + Math.cos(a) * r, 260 + Math.random() * 280, cz + Math.sin(a) * r); const sz = 400 + Math.random() * 500; s.scale.set(sz, sz * 0.45, 1); scene.add(s); }
  }

  // asfalto
  const asphalt = canvasTex(256, 512, (x, w, h) => {
    noise(x, w, h, th.city ? '#34363b' : '#3d3f44', 0.1, 26000, 1.6);
    for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(0,0,0,0.05)'; x.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 40, 1 + Math.random() * 3); }
    x.fillStyle = '#f2f2f2'; x.fillRect(w * 0.012, 0, w * 0.022, h); x.fillRect(w * 0.966, 0, w * 0.022, h);
  });
  const roadMat = new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.78, metalness: 0.0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  scene.add(ribbon(T, () => -T.hw, () => T.hw, 0.0, roadMat, { vLen: 14 }));
  const rubberMat = new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.16, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  scene.add(ribbon(T, i => T.line[i] - 1.1, i => T.line[i] + 1.1, 0.004, rubberMat));
  const shMat = new THREE.MeshStandardMaterial({ color: th.city ? '#3b3c41' : '#4a4b50', roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  scene.add(ribbon(T, () => T.hw, i => Math.min(T.wallL[i], T.hw + 1.6), -0.005, shMat, { filter: i => !T.kerbL[i] }));
  scene.add(ribbon(T, i => -Math.min(T.wallR[i], T.hw + 1.6), () => -T.hw, -0.005, shMat, { filter: i => !T.kerbR[i] }));
  if (T.street) {
    scene.add(ribbon(T, () => T.hw + 1.5, i => T.wallL[i], -0.006, shMat, { filter: i => T.wallL[i] > T.hw + 1.6 && !inPit(i) }));
    scene.add(ribbon(T, i => -T.wallR[i], () => -T.hw - 1.5, -0.006, shMat, { filter: i => T.wallR[i] > T.hw + 1.6 }));
  }
  const red = new THREE.Color('#d8202a'), white = new THREE.Color('#f4f4f4');
  const kerbMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });
  const kc = i => (Math.floor(i * T.ds / 3) % 2 ? red : white);
  scene.add(ribbon(T, () => T.hw - 0.05, () => T.hw + 1.6, k => k ? 0.015 : 0.05, kerbMat, { filter: i => T.kerbL[i], colorFn: kc }));
  scene.add(ribbon(T, () => -T.hw - 1.6, () => -T.hw + 0.05, k => k ? 0.05 : 0.015, kerbMat, { filter: i => T.kerbR[i], colorFn: kc }));
  const gravTex = canvasTex(256, 256, (x, w, h) => noise(x, w, h, '#cdb98f', 0.3, 20000, 2.5));
  const gravMat = new THREE.MeshStandardMaterial({ map: gravTex, roughness: 1 });
  scene.add(ribbon(T, () => T.hw + 1.6, i => T.wallL[i] - 1.2, -0.012, gravMat, { filter: i => T.gravL[i] && T.wallL[i] > T.hw + 3, vLen: 8 }));
  scene.add(ribbon(T, i => -T.wallR[i] + 1.2, () => -T.hw - 1.6, -0.012, gravMat, { filter: i => T.gravR[i] && T.wallR[i] > T.hw + 3, vLen: 8 }));

  // muros con publicidad + alambrado
  const adTex = canvasTex(2048, 64, (x, w, h) => {
    const n = 8;
    for (let k = 0; k < n; k++) {
      const [bg, fg] = BRAND_COL[k % BRAND_COL.length];
      x.fillStyle = bg; x.fillRect(k * w / n, 0, w / n, h);
      x.fillStyle = fg; x.font = 'italic 900 34px "Titillium Web", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(BRANDS[k], k * w / n + w / n / 2, h / 2 + 2);
    }
  });
  adTex.wrapT = THREE.ClampToEdgeWrapping;
  const wallMat = new THREE.MeshStandardMaterial({ map: adTex, roughness: 0.6, side: THREE.DoubleSide, emissive: th.city ? '#ffffff' : '#000000', emissiveMap: th.city ? adTex : null, emissiveIntensity: th.city ? 0.35 : 0 });
  const pitGap = i => { const u = rel(i * T.ds); return u > pit.inS - 10 && u < pit.outS + 10 && (u < pit.inS + pit.blend * 0.85 || u > pit.outS - pit.blend * 0.85); };
  const pitInner = i => { const u = rel(i * T.ds); return u >= pit.inS + pit.blend * 0.85 && u <= pit.outS - pit.blend * 0.85; };
  scene.add(wallStrip(T, i => T.wallL[i], 0, 1.1, wallMat, { uLen: 120, filter: i => !pitGap(i) && !pitInner(i) }));
  scene.add(wallStrip(T, i => -T.wallR[i], 0, 1.1, wallMat, { uLen: 120 }));
  const fenceTex = canvasTex(64, 64, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.strokeStyle = 'rgba(210,215,220,0.9)'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(0, 0); x.lineTo(w, h); x.moveTo(w, 0); x.lineTo(0, h); x.stroke();
    x.fillStyle = '#8b9096'; x.fillRect(0, 0, 4, h);
  });
  fenceTex.repeat.set(1, 3);
  const fenceMat = new THREE.MeshStandardMaterial({ map: fenceTex, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6 });
  scene.add(wallStrip(T, i => T.wallL[i] + 0.1, 1.1, 3.6, fenceMat, { uLen: 3, filter: i => T.wallL[i] < T.hw + 30 && !pitGap(i) && !pitInner(i) }));
  scene.add(wallStrip(T, i => -T.wallR[i] - 0.1, 1.1, 3.6, fenceMat, { uLen: 3, filter: i => T.wallR[i] < T.hw + 30 }));

  // calle de boxes
  const pitRoad = new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (x, w, h) => noise(x, w, h, '#45474d', 0.08, 12000, 1.5)), roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  const sOf = i => i * T.ds;
  const pitF = i => { const u = rel(sOf(i)); return u > pit.inS && u < pit.outS; };
  const po = i => pit.offsetAt(sOf(i), T.hw - 1);
  scene.add(ribbon(T, i => po(i) - pit.width / 2, i => po(i) + pit.width / 2, 0.006, pitRoad, { filter: pitF }));
  const lineM = new THREE.MeshBasicMaterial({ color: '#f2f2f2', polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  const yel = new THREE.MeshBasicMaterial({ color: '#ffd21a', polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  scene.add(ribbon(T, i => po(i) + pit.width / 2 - 0.25, i => po(i) + pit.width / 2 - 0.1, 0.012, lineM, { filter: pitF }));
  scene.add(ribbon(T, i => po(i) - pit.width / 2 + 0.1, i => po(i) - pit.width / 2 + 0.3, 0.012, yel, { filter: pitF }));
  const conc = new THREE.MeshStandardMaterial({ color: '#d9dbe0', roughness: 0.8 });
  scene.add(wallStrip(T, () => pit.wall, 0, 1.0, conc, { filter: pitInner }));
  scene.add(wallStrip(T, () => pit.wall + 0.6, 0, 1.0, conc, { filter: pitInner }));
  scene.add(wallStrip(T, () => pit.wall + 0.3, 1.0, 3.2, fenceMat, { uLen: 3, filter: pitInner }));
  const garageTex = canvasTex(1024, 128, (x, w, h) => {
    x.fillStyle = '#eef0f3'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 8; i++) { x.fillStyle = '#23262c'; x.fillRect(i * w / 8 + 10, 34, w / 8 - 20, h - 34); x.fillStyle = BRAND_COL[i % 8][0]; x.fillRect(i * w / 8 + 10, 10, w / 8 - 20, 18); }
  }, false);
  const garageMat = new THREE.MeshStandardMaterial({ map: garageTex, roughness: 0.7, emissive: th.city ? '#ffffff' : '#000', emissiveMap: th.city ? garageTex : null, emissiveIntensity: th.city ? 0.25 : 0 });
  const pitMat = new THREE.MeshStandardMaterial({ color: '#eef0f3', roughness: 0.7 });
  const boxPos = [];
  {
    const sA = pit.boxes[0] - 10, sB = pit.boxes[pit.boxes.length - 1] + 10, len = sB - sA, mid = (sA + sB) / 2;
    const [x, z] = pointAt(T, mid, pit.lane + pit.width / 2 + 7.5);
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = headingAt(T, mid); scene.add(g);
    const b = new THREE.Mesh(new THREE.BoxGeometry(14, 8, len), pitMat);
    b.position.set(0, 4, 0); b.castShadow = true; b.receiveShadow = true; g.add(b);
    const front = new THREE.Mesh(new THREE.PlaneGeometry(len, 7), garageMat); front.position.set(-7.02, 3.5, 0); front.rotation.y = -Math.PI / 2; g.add(front);
    const roofSign = new THREE.Mesh(new THREE.PlaneGeometry(len * 0.6, 1.6), new THREE.MeshBasicMaterial({ map: canvasTex(1024, 64, (c, w, h) => { c.fillStyle = '#15151e'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.font = 'italic 900 44px "Titillium Web", Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('PIT LANE · ' + T.def.name.toUpperCase(), w / 2, h / 2 + 2); }, false) }));
    roofSign.position.set(-7.05, 8.6, 0); roofSign.rotation.y = -Math.PI / 2; g.add(roofSign);
    for (const s of pit.boxes) {
      const [bx, bz] = pointAt(T, s, pit.lane + 1.2);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 6), new THREE.MeshBasicMaterial({ color: '#f2f2f2', transparent: true, opacity: 0.5, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
      m.rotation.x = -Math.PI / 2; const gg = new THREE.Group(); gg.position.set(bx, 0.013, bz); gg.rotation.y = headingAt(T, s); gg.add(m); scene.add(gg);
      boxPos.push([bx, bz]);
    }
  }
  const crew = new THREE.Group(); crew.visible = false; scene.add(crew);
  {
    const suit = new THREE.MeshStandardMaterial({ color: '#d7141a', roughness: 0.7 }), helmet = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
    const spots = [[1.45, 2.0], [-1.45, 2.0], [1.5, -1.6], [-1.5, -1.6], [0, 3.8], [2.4, 0.2]];
    for (const [x, z] of spots) {
      const p = new THREE.Group(); p.position.set(x, 0, z);
      const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.6, 4, 8), suit); b.position.y = 0.55; b.castShadow = true; p.add(b);
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), helmet); h.position.y = 1.15; p.add(h);
      crew.add(p);
    }
  }

  // línea de largada y grilla
  const chk = canvasTex(256, 32, (x) => { for (let i = 0; i < 32; i++) for (let j = 0; j < 4; j++) { x.fillStyle = (i + j) % 2 ? '#111' : '#fff'; x.fillRect(i * 8, j * 8, 8, 8); } }, false);
  {
    const finish = new THREE.Mesh(new THREE.PlaneGeometry(T.width, 1.6), new THREE.MeshStandardMaterial({ map: chk, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    const g = new THREE.Group(); g.position.set(T.px[0], 0.012, T.pz[0]); g.rotation.y = T.head(0);
    finish.rotation.set(-Math.PI / 2, 0, 0); g.add(finish); scene.add(g);
  }
  const slotMat = new THREE.MeshBasicMaterial({ color: '#f2f2f2', polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  for (let k = 0; k < 8; k++) {
    const s = T.L - 14 - k * 9 + 2.6, off = (k % 2 === 0 ? 1 : -1) * 3.2;
    const [x, z] = pointAt(T, s, off);
    const g = new THREE.Group(); g.position.set(x, 0.013, z); g.rotation.y = headingAt(T, s);
    const a = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.2), slotMat); a.rotation.x = -Math.PI / 2; g.add(a);
    for (const sx of [1.1, -1.1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 1.4), slotMat); b.rotation.x = -Math.PI / 2; b.position.set(sx, 0, -0.6); g.add(b); }
    scene.add(g);
  }

  // pórtico con semáforo
  const lights = [];
  {
    const s0 = 6, h0 = T.head(2), [x, z] = pointAt(T, s0, 0);
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = h0; scene.add(g);
    const steel = new THREE.MeshStandardMaterial({ color: '#2a2d33', metalness: 0.6, roughness: 0.4 });
    const wl = Math.min(at(T, T.wallL, s0), pit.wall), wr = at(T, T.wallR, s0);
    const span2 = wl + wr;
    for (const xo of [wl, -wr]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7.6, 0.5), steel); p.position.set(xo, 3.8, 0); p.castShadow = true; g.add(p); }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(span2, 0.7, 0.6), steel); beam.position.set((wl - wr) / 2, 7.2, 0); beam.castShadow = true; g.add(beam);
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(span2 * 0.9, 1.4), new THREE.MeshBasicMaterial({ map: canvasTex(1024, 96, (c, w, h) => { c.fillStyle = '#d7141a'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.font = 'italic 900 64px "Titillium Web", Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('F1 CLASH  ·  ' + T.def.name.toUpperCase(), w / 2, h / 2 + 3); }, false), side: THREE.DoubleSide }));
    banner.position.set((wl - wr) / 2, 8.4, -0.05); banner.rotation.y = Math.PI; g.add(banner);
    const box = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.1, 0.5), new THREE.MeshStandardMaterial({ color: '#0d0d0f', roughness: 0.6 }));
    box.position.set(0, 6.3, -0.2); g.add(box);
    const lg = new THREE.SphereGeometry(0.2, 14, 10);
    for (let k = 0; k < 5; k++) {
      const m = new THREE.MeshStandardMaterial({ color: '#2a0505', emissive: '#ff1010', emissiveIntensity: 0 });
      for (const yy of [6.55, 6.05]) { const l = new THREE.Mesh(lg, m); l.position.set(-1.4 + k * 0.7, yy, -0.45); g.add(l); }
      lights.push(m);
    }
  }

  // tribunas con público
  const crowdPos = [];
  const standMat = new THREE.MeshStandardMaterial({ color: '#cfd3d8', roughness: 0.8 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#d7141a', roughness: 0.6, side: THREE.DoubleSide });
  const blocked = [];
  const placeAlong = (s, side, extra, fn) => {
    const i = T.idx(s);
    const wall = side > 0 ? T.wallL[i] : T.wallR[i];
    const [x, z] = pointAt(T, s, side * (wall + extra));
    fn(x, z, T.head(i), i);
  };
  for (let s = T.straight.a + 30; s <= T.straight.b - 30; s += 32) {
    placeAlong(s, -1, 9, (x, z, h) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = h; scene.add(g);
      for (let t = 0; t < 5; t++) { const b = new THREE.Mesh(new THREE.BoxGeometry(30, 1.2 + t * 1.2, 2.6), standMat); b.position.set(-t * 2.4 - 1.3, (1.2 + t * 1.2) / 2, 0); b.rotation.y = Math.PI / 2; b.castShadow = true; b.receiveShadow = true; g.add(b); }
      const roof = new THREE.Mesh(new THREE.PlaneGeometry(14, 30), roofMat); roof.rotation.set(-Math.PI / 2 + 0.12, 0, Math.PI / 2); roof.position.set(-6, 11, 0); g.add(roof);
      for (let t = 0; t < 5; t++) for (let k = 0; k < 22; k++) {
        if (Math.random() < 0.15) continue;
        const local = new THREE.Vector3(-t * 2.4 - 0.8, 1.2 + t * 1.2 + 0.45, -14 + k * 1.3 + Math.random() * 0.3);
        local.applyAxisAngle(new THREE.Vector3(0, 1, 0), h); crowdPos.push([x + local.x, local.y, z + local.z]);
      }
      blocked.push([x, z, 28]);
    });
  }
  { const sA = pit.boxes[0], sB = pit.boxes[pit.boxes.length - 1]; for (let s = sA; s <= sB; s += 20) { const [x, z] = pointAt(T, s, pit.lane + 10); blocked.push([x, z, 22]); } }
  let crowd = null;
  if (crowdPos.length) {
    const cg = new THREE.BoxGeometry(0.5, 0.8, 0.4);
    crowd = new THREE.InstancedMesh(cg, new THREE.MeshStandardMaterial({ roughness: 0.9 }), crowdPos.length);
    const o = new THREE.Object3D(), col = new THREE.Color();
    const pal = ['#d7141a', '#ffd21a', '#1d6bff', '#ffffff', '#ff7a00', '#0a6b47', '#ff4fa3', '#222', '#4fc3ff'];
    crowdPos.forEach((p, k) => { o.position.set(p[0], p[1], p[2]); o.updateMatrix(); crowd.setMatrixAt(k, o.matrix); crowd.setColorAt(k, col.set(pal[k % pal.length])); });
    crowd.userData.pos = crowdPos;
    scene.add(crowd);
  }

  // paneles de banderas de los comisarios
  const panels = [];
  {
    const pg = new THREE.PlaneGeometry(1.4, 0.9);
    for (let s = 150; s < T.L - 60; s += 380) {
      const i = T.idx(s), u = rel(s); if (u > pit.inS - 20 && u < pit.outS + 20) continue;
      const side = T.curv[i] > 0 ? -1 : 1;
      const wall = side > 0 ? T.wallL[i] : T.wallR[i];
      const [x, z] = pointAt(T, s, side * (wall - 0.15));
      const m = new THREE.MeshStandardMaterial({ color: '#111', emissive: '#ffd21a', emissiveIntensity: 0 });
      const p = new THREE.Mesh(pg, m); p.position.set(x, 2.1, z); p.rotation.y = T.head(i) + Math.PI; scene.add(p);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.0, 0.12), standMat); post.position.set(x, 1.0, z); scene.add(post);
      panels.push({ s, m });
    }
  }

  const nearTrack = (x, z, r) => {
    const c = T.cell, qx = Math.floor(x / c), qz = Math.floor(z / c);
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) {
      const L = T.grid.get((qx + a) + ',' + (qz + b)); if (!L) continue;
      for (const i of L) { const w = Math.max(T.wallL[i], T.wallR[i], inPit(i) ? pit.lane + 24 : 0); if (Math.hypot(T.px[i] - x, T.pz[i] - z) < w + r) return true; }
    }
    return false;
  };
  const o = new THREE.Object3D(), col = new THREE.Color();
  if (th.city) {
    const winTex = canvasTex(128, 256, (x, w, h) => { x.fillStyle = '#14161c'; x.fillRect(0, 0, w, h); for (let r = 0; r < 32; r++) for (let c = 0; c < 8; c++) { const on = Math.random() < 0.42; x.fillStyle = on ? (Math.random() < 0.7 ? '#ffd79a' : '#9fd0ff') : '#1d2028'; x.fillRect(c * 16 + 3, r * 8 + 2, 10, 5); } });
    const bMat = new THREE.MeshStandardMaterial({ map: winTex, emissive: '#ffffff', emissiveMap: winTex, emissiveIntensity: 0.9, roughness: 0.8 });
    const spots = [];
    for (let k = 0; k < 4000 && spots.length < 260; k++) {
      const x = cx + (Math.random() - 0.5) * (span + 500), z = cz + (Math.random() - 0.5) * (span + 500);
      const w = 18 + Math.random() * 26, d = 18 + Math.random() * 26, m = Math.max(w, d);
      if (nearTrack(x, z, m * 0.75 + 6)) continue;
      if (blocked.some(b => Math.hypot(b[0] - x, b[1] - z) < b[2] + 20)) continue;
      if (spots.some(s => Math.hypot(s[0] - x, s[1] - z) < (s[3] + m) * 0.6)) continue;
      spots.push([x, z, w, m, d, 20 + Math.random() * Math.random() * 110]);
    }
    const bm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), bMat, spots.length);
    spots.forEach(([x, z, w, , d, h], k) => { o.position.set(x, h / 2, z); o.scale.set(w, h, d); o.rotation.set(0, Math.round(Math.random() * 4) * Math.PI / 2 + (Math.random() - 0.5) * 0.2, 0); o.updateMatrix(); bm.setMatrixAt(k, o.matrix); });
    bm.castShadow = true; bm.receiveShadow = true; scene.add(bm);
    const lampPos = [];
    for (let s = 0; s < T.L; s += 45) { const i = T.idx(s); for (const side of [1, -1]) { if (side > 0 && inPit(i)) continue; const w = side > 0 ? T.wallL[i] : T.wallR[i]; const [x, z] = pointAt(T, s + (side > 0 ? 0 : 22), side * (w + 0.8)); lampPos.push([x, z, T.head(i), side]); } }
    const poles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.15, 9, 6), new THREE.MeshStandardMaterial({ color: '#2c2f36', metalness: 0.6, roughness: 0.4 }), lampPos.length);
    const heads = new THREE.InstancedMesh(new THREE.BoxGeometry(1.6, 0.25, 0.6), new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff4d6', emissiveIntensity: 3 }), lampPos.length);
    const lamps = [];
    lampPos.forEach(([x, z, h, side], k) => {
      o.scale.set(1, 1, 1); o.rotation.set(0, h, 0); o.position.set(x, 4.5, z); o.updateMatrix(); poles.setMatrixAt(k, o.matrix);
      const ix = x - Math.cos(h) * side * 0.6, iz = z + Math.sin(h) * side * 0.6; o.position.set(ix, 9, iz); o.updateMatrix(); heads.setMatrixAt(k, o.matrix); lamps.push([ix, iz]);
    });
    scene.add(poles, heads);
    const glowTex = canvasTex(64, 64, (x) => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,236,200,0.5)'); g.addColorStop(1, 'rgba(255,236,200,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); }, false);
    const glow = new THREE.InstancedMesh(new THREE.PlaneGeometry(22, 22), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), lamps.length);
    lamps.forEach(([x, z], k) => { o.position.set(x, 0.03, z); o.rotation.set(-Math.PI / 2, 0, 0); o.scale.set(1, 1, 1); o.updateMatrix(); glow.setMatrixAt(k, o.matrix); });
    scene.add(glow);
  } else {
    const trees = [];
    for (let k = 0; k < 2600 && trees.length < 900; k++) {
      const x = cx + (Math.random() - 0.5) * (groundSize - 60), z = cz + (Math.random() - 0.5) * (groundSize - 60);
      if (nearTrack(x, z, 12)) continue;
      if (blocked.some(b => Math.hypot(b[0] - x, b[1] - z) < b[2] + 10)) continue;
      trees.push([x, z, 0.7 + Math.random() * 0.8]);
    }
    if (th.palms) {
      const trunkG = new THREE.CylinderGeometry(0.18, 0.3, 8, 7); trunkG.translate(0, 4, 0);
      const leaf = new THREE.PlaneGeometry(4.2, 0.9, 4, 1); leaf.translate(2.1, 0, 0);
      { const p = leaf.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setY(i, p.getY(i) * (1 - x / 4.6)); p.setZ(i, -x * x * 0.07); } }
      const leaves = []; for (let k = 0; k < 8; k++) { const g = leaf.clone(); g.rotateX(Math.PI / 2 + 0.25); g.rotateY(k / 8 * Math.PI * 2); leaves.push(g); }
      const crownG = mergeGeos(leaves); crownG.translate(0, 8, 0); crownG.computeVertexNormals();
      const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: '#8a6a45', roughness: 1 }), trees.length);
      const crown = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: '#3f8a3a', roughness: 0.9, side: THREE.DoubleSide }), trees.length);
      trees.forEach(([x, z, s], k) => {
        o.position.set(x, 0, z); o.scale.set(s, s, s); o.rotation.set((Math.random() - 0.5) * 0.25, Math.random() * 6, (Math.random() - 0.5) * 0.25); o.updateMatrix();
        trunk.setMatrixAt(k, o.matrix); crown.setMatrixAt(k, o.matrix); crown.setColorAt(k, col.set('#3f8a3a').offsetHSL((Math.random() - 0.5) * 0.05, 0, (Math.random() - 0.5) * 0.12));
      });
      trunk.castShadow = crown.castShadow = true; scene.add(trunk, crown);
    } else {
      const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, 3, 6), new THREE.MeshStandardMaterial({ color: '#6b4a2b', roughness: 1 }), trees.length);
      const c1 = new THREE.ConeGeometry(2.6, 4, 8); c1.translate(0, 4.2, 0);
      const c2 = new THREE.ConeGeometry(2.0, 3.4, 8); c2.translate(0, 6.0, 0);
      const c3 = new THREE.ConeGeometry(1.3, 2.6, 8); c3.translate(0, 7.6, 0);
      const crown = new THREE.InstancedMesh(mergeGeos([c1, c2, c3]), new THREE.MeshStandardMaterial({ color: '#2f6b3c', roughness: 1, flatShading: true }), trees.length);
      trees.forEach(([x, z, s], k) => {
        o.position.set(x, 1.5 * s, z); o.scale.set(s, s, s); o.rotation.set(0, Math.random() * 6, 0); o.updateMatrix(); trunk.setMatrixAt(k, o.matrix);
        o.position.set(x, 0, z); o.updateMatrix(); crown.setMatrixAt(k, o.matrix);
        crown.setColorAt(k, col.set('#2f6b3c').offsetHSL((Math.random() - 0.5) * 0.04, 0, (Math.random() - 0.5) * 0.1));
      });
      crown.castShadow = trunk.castShadow = true; scene.add(trunk, crown);
    }
  }

  // objetos que se pueden voltear: conos y carteles de distancia
  const props = [];
  {
    const coneG = new THREE.ConeGeometry(0.22, 0.7, 12); coneG.translate(0, 0.35, 0);
    const coneM = new THREE.MeshStandardMaterial({ color: '#ff6a00', roughness: 0.6, emissive: th.city ? '#ff4a00' : '#000', emissiveIntensity: th.city ? 0.3 : 0 });
    const stripeM = new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.5 });
    const ringG = new THREE.CylinderGeometry(0.15, 0.17, 0.12, 12, 1, true); ringG.translate(0, 0.4, 0);
    const boardTex = n => canvasTex(128, 128, (x, w, h) => { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.strokeStyle = '#d7141a'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10); x.fillStyle = '#111'; x.font = '900 56px "Titillium Web", Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(n, w / 2, h / 2 + 3); }, false);
    const bt = { 150: boardTex('150'), 100: boardTex('100'), 50: boardTex('50') };
    const bG = new THREE.BoxGeometry(1, 1, 0.08); bG.translate(0, 0.5, 0);
    for (const p of T.props) {
      const g = new THREE.Group(); g.position.set(p.x, 0, p.z);
      if (p.type === 'cone') { const m = new THREE.Mesh(coneG, coneM); m.castShadow = true; g.add(m); g.add(new THREE.Mesh(ringG, stripeM)); }
      else { const m = new THREE.Mesh(bG, [stripeM, stripeM, stripeM, stripeM, new THREE.MeshBasicMaterial({ map: bt[p.n] }), stripeM]); m.position.y = 0.3; m.castShadow = true; g.add(m); g.rotation.y = p.h; }
      scene.add(g);
      props.push({ ...p, obj: g, x0: p.x, z0: p.z, h0: g.rotation.y, vx: 0, vy: 0, vz: 0, y: 0, wx: 0, wz: 0, r: p.type === 'cone' ? 0.35 : 0.7, moved: false });
    }
  }

  return {
    scene, sun, sunDir: sd, theme: th, crowd, panels, crew, boxPos, water, props,
    setLights(n) { lights.forEach((m, k) => { m.emissiveIntensity = k < n ? 3.2 : 0; m.color.set(k < n ? '#ff2a2a' : '#2a0505'); }); },
    followSun(x, z) { sun.position.set(x + sd.x * 150, sd.y * 150, z + sd.z * 150); sun.target.position.set(x, 0, z); },
  };
}

function mergeGeos(list) {
  const out = { position: [], normal: [], uv: [] };
  for (let g of list) {
    if (g.index) g = g.toNonIndexed();
    for (const k of ['position', 'normal', 'uv']) { const a = g.attributes[k]; if (a) for (let i = 0; i < a.array.length; i++) out[k].push(a.array[i]); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(out.position, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(out.normal, 3));
  if (out.uv.length) g.setAttribute('uv', new THREE.Float32BufferAttribute(out.uv, 2));
  return g;
}
