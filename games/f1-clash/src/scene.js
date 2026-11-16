// Escenario 3D del circuito: asfalto, pianos, grava, muros con publicidad, tribunas, boxes,
// semáforo de largada, árboles, mar o montañas y cielo.
import * as THREE from 'three';
import { pointAt, at } from './track.js';

const THEMES = {
  day: { top: '#2f7fe0', hor: '#d6ecff', fog: '#cfe2f3', sun: '#fff1dc', sunI: 2.7, sunDir: [0.45, 0.8, 0.35], hemiS: '#cfe6ff', hemiG: '#5d7a3a', hemiI: 0.9, grass: ['#4f8a2c', '#5d9a35'], water: true, exposure: 1.0 },
  sunset: { top: '#3d5b9e', hor: '#ffb079', fog: '#e0b39a', sun: '#ffb27a', sunI: 2.3, sunDir: [-0.8, 0.32, 0.5], hemiS: '#ffc9a8', hemiG: '#4a5a2c', hemiI: 0.75, grass: ['#557c2a', '#62892f'], water: false, exposure: 1.05 },
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

// cinta a lo largo de la pista entre offA y offB; filtro opcional por muestra
function ribbon(T, offA, offB, y, mat, { vLen = 10, filter = null, colorFn = null, uFlip = false } = {}) {
  const pos = [], uv = [], col = [];
  const N = T.N;
  const pt = (i, o) => [T.px[i] + T.nx[i] * o, T.pz[i] + T.nz[i] * o];
  for (let i = 0; i < N; i++) {
    if (filter && !filter(i)) continue;
    const j = (i + 1) % N;
    const a0 = pt(i, offA(i)), b0 = pt(i, offB(i)), a1 = pt(j, offA(j)), b1 = pt(j, offB(j));
    const v0 = i * T.ds / vLen, v1 = (i + 1) * T.ds / vLen;
    const yA = typeof y === 'function' ? y(0) : y, yB = typeof y === 'function' ? y(1) : y;
    const ua = uFlip ? 1 : 0, ub = uFlip ? 0 : 1;
    pos.push(a0[0], yA, a0[1], a1[0], yA, a1[1], b0[0], yB, b0[1], b0[0], yB, b0[1], a1[0], yA, a1[1], b1[0], yB, b1[1]);
    uv.push(ua, v0, ua, v1, ub, v0, ub, v0, ua, v1, ub, v1);
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

// pared vertical a lo largo de la pista
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

const BRANDS = ['CLAUDE ARCADE', 'TURBO COLA', 'NAFTA SUR', 'BAHÍA AZUL', 'RAYO TELECOM', 'PANCHO GP', 'OLA MOTORS', 'MATE POWER'];
const BRAND_COL = [['#d7141a', '#fff'], ['#111', '#ffd21a'], ['#0b3d91', '#fff'], ['#00a6a6', '#fff'], ['#ff7a00', '#111'], ['#fff', '#d7141a'], ['#1b1b1b', '#4fc3ff'], ['#0a6b47', '#fff']];

export function buildScene(T, renderer) {
  const th = THEMES[T.def.theme] || THEMES.day;
  const scene = new THREE.Scene();
  renderer.toneMappingExposure = th.exposure;
  scene.fog = new THREE.Fog(th.fog, 350, 2600);

  // cielo
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(th.top) }, hor: { value: new THREE.Color(th.hor) }, sunDir: { value: new THREE.Vector3(...th.sunDir).normalize() }, sunC: { value: new THREE.Color(th.sun) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunC; varying vec3 vP;
      void main(){ float h = clamp(vP.y, -0.1, 1.0); vec3 c = mix(hor, top, pow(max(h,0.0), 0.55));
      float s = max(dot(normalize(vP), sunDir), 0.0); c += sunC * (pow(s, 600.0) * 2.0 + pow(s, 16.0) * 0.12);
      gl_FragColor = vec4(c, 1.0); }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 32, 16), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  // luces
  scene.add(new THREE.HemisphereLight(th.hemiS, th.hemiG, th.hemiI));
  const sun = new THREE.DirectionalLight(th.sun, th.sunI);
  const sd = new THREE.Vector3(...th.sunDir).normalize();
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);

  // límites
  let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
  for (let i = 0; i < T.N; i++) { minX = Math.min(minX, T.px[i]); maxX = Math.max(maxX, T.px[i]); minZ = Math.min(minZ, T.pz[i]); maxZ = Math.max(maxZ, T.pz[i]); }
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2, span = Math.max(maxX - minX, maxZ - minZ);

  // pasto
  const grassTex = canvasTex(512, 512, (x, w, h) => {
    noise(x, w, h, th.grass[0], 0.16, 26000, 3);
    for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.03)'; x.fillRect(0, i * h / 8, w, h / 8); }
  });
  grassTex.repeat.set(span / 12, span / 12);
  const groundSize = span + 700;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(groundSize, groundSize), new THREE.MeshStandardMaterial({ map: grassTex, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(cx, -0.03, cz); ground.receiveShadow = true;
  scene.add(ground);
  if (th.water) {
    const sand = new THREE.Mesh(new THREE.PlaneGeometry(groundSize + 120, groundSize + 120), new THREE.MeshStandardMaterial({ color: '#e7d3a1', roughness: 1 }));
    sand.rotation.x = -Math.PI / 2; sand.position.set(cx, -0.6, cz); scene.add(sand);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshStandardMaterial({ color: '#1f7fb8', roughness: 0.15, metalness: 0.3 }));
    water.rotation.x = -Math.PI / 2; water.position.set(cx, -1.2, cz); scene.add(water);
  } else {
    const far = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshStandardMaterial({ color: th.grass[0], roughness: 1 }));
    far.rotation.x = -Math.PI / 2; far.position.set(cx, -0.5, cz); scene.add(far);
  }
  // montañas lejanas
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

  // asfalto
  const asphalt = canvasTex(256, 512, (x, w, h) => {
    noise(x, w, h, '#3d3f44', 0.1, 26000, 1.6);
    x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(w * 0.3, 0, w * 0.4, h); // goma en la trazada
    x.fillStyle = '#f2f2f2'; x.fillRect(w * 0.012, 0, w * 0.022, h); x.fillRect(w * 0.966, 0, w * 0.022, h);
  });
  const roadMat = new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, metalness: 0.0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  scene.add(ribbon(T, () => -T.hw, () => T.hw, 0.0, roadMat, { vLen: 14 }));
  // banquinas de asfalto (fuera de la línea blanca)
  const shMat = new THREE.MeshStandardMaterial({ color: '#4a4b50', roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  scene.add(ribbon(T, () => T.hw, () => T.hw + 1.6, -0.005, shMat, { filter: i => !T.kerbL[i] }));
  scene.add(ribbon(T, () => -T.hw - 1.6, () => -T.hw, -0.005, shMat, { filter: i => !T.kerbR[i] }));
  // pianos
  const red = new THREE.Color('#d8202a'), white = new THREE.Color('#f4f4f4');
  const kerbMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 });
  const kc = i => (Math.floor(i * T.ds / 3) % 2 ? red : white);
  scene.add(ribbon(T, () => T.hw - 0.05, () => T.hw + 1.6, k => k ? 0.015 : 0.05, kerbMat, { filter: i => T.kerbL[i], colorFn: kc }));
  scene.add(ribbon(T, () => -T.hw - 1.6, () => -T.hw + 0.05, k => k ? 0.05 : 0.015, kerbMat, { filter: i => T.kerbR[i], colorFn: kc }));
  // grava
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
  const wallMat = new THREE.MeshStandardMaterial({ map: adTex, roughness: 0.7, side: THREE.DoubleSide });
  scene.add(wallStrip(T, i => T.wallL[i], 0, 1.1, wallMat, { uLen: 120 }));
  scene.add(wallStrip(T, i => -T.wallR[i], 0, 1.1, wallMat, { uLen: 120 }));
  const fenceTex = canvasTex(64, 64, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.strokeStyle = 'rgba(210,215,220,0.9)'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(0, 0); x.lineTo(w, h); x.moveTo(w, 0); x.lineTo(0, h); x.stroke();
    x.fillStyle = '#8b9096'; x.fillRect(0, 0, 4, h);
  });
  fenceTex.repeat.set(1, 3);
  const fenceMat = new THREE.MeshStandardMaterial({ map: fenceTex, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6 });
  const fenceF = i => T.wallL[i] < T.hw + 30;
  scene.add(wallStrip(T, i => T.wallL[i] + 0.1, 1.1, 3.6, fenceMat, { uLen: 3, filter: fenceF }));
  scene.add(wallStrip(T, i => -T.wallR[i] - 0.1, 1.1, 3.6, fenceMat, { uLen: 3, filter: i => T.wallR[i] < T.hw + 30 }));

  // línea de largada / llegada (a cuadros) y grilla
  const chk = canvasTex(256, 32, (x, w, h) => { for (let i = 0; i < 32; i++) for (let j = 0; j < 4; j++) { x.fillStyle = (i + j) % 2 ? '#111' : '#fff'; x.fillRect(i * 8, j * 8, 8, 8); } }, false);
  const finish = new THREE.Mesh(new THREE.PlaneGeometry(T.width, 1.6), new THREE.MeshStandardMaterial({ map: chk, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  finish.rotation.x = -Math.PI / 2; finish.rotation.z = T.head(0) + Math.PI / 2 - Math.PI / 2;
  {
    const g = new THREE.Group(); g.position.set(T.px[0], 0.012, T.pz[0]); g.rotation.y = T.head(0);
    finish.rotation.set(-Math.PI / 2, 0, 0); g.add(finish); scene.add(g);
  }
  const slotMat = new THREE.MeshBasicMaterial({ color: '#f2f2f2', polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  for (let k = 0; k < 8; k++) {
    const s = T.L - 14 - k * 9 + 2.6, off = (k % 2 === 0 ? 1 : -1) * 3.2;
    const [x, z] = pointAt(T, s, off);
    const g = new THREE.Group(); g.position.set(x, 0.013, z); g.rotation.y = Math.atan2(at(T, T.tx, s), at(T, T.tz, s));
    const a = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.2), slotMat); a.rotation.x = -Math.PI / 2; g.add(a);
    const b = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 1.4), slotMat); b.rotation.x = -Math.PI / 2; b.position.set(1.1 * Math.sign(-off), 0, -0.6); g.add(b);
    const c = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 1.4), slotMat); c.rotation.x = -Math.PI / 2; c.position.set(-1.1 * Math.sign(-off), 0, -0.6); g.add(c);
    scene.add(g);
  }

  // pórtico con semáforo
  const lights = [];
  {
    const s0 = 6, h0 = T.head(2), [x, z] = pointAt(T, s0, 0);
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = h0; scene.add(g);
    const steel = new THREE.MeshStandardMaterial({ color: '#2a2d33', metalness: 0.6, roughness: 0.4 });
    const wl = at(T, T.wallL, s0), wr = at(T, T.wallR, s0);
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

  // tribunas sobre la recta principal (lado derecho) y boxes (lado izquierdo)
  const crowdPos = [];
  const standMat = new THREE.MeshStandardMaterial({ color: '#cfd3d8', roughness: 0.8 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#d7141a', roughness: 0.6, side: THREE.DoubleSide });
  const pitMat = new THREE.MeshStandardMaterial({ color: '#eef0f3', roughness: 0.7 });
  const garageTex = canvasTex(1024, 128, (x, w, h) => {
    x.fillStyle = '#eef0f3'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 10; i++) { x.fillStyle = '#23262c'; x.fillRect(i * w / 10 + 10, 34, w / 10 - 20, h - 34); x.fillStyle = BRAND_COL[i % 8][0]; x.fillRect(i * w / 10 + 10, 10, w / 10 - 20, 18); }
  }, false);
  const garageMat = new THREE.MeshStandardMaterial({ map: garageTex, roughness: 0.7 });
  const blocked = [];
  const placeAlong = (s, side, extra, fn) => {
    const i = Math.floor(((s % T.L) + T.L) % T.L / T.ds);
    const wall = side > 0 ? T.wallL[i] : T.wallR[i];
    const [x, z] = pointAt(T, s, side * (wall + extra));
    fn(x, z, T.head(i), i);
  };
  for (let s = -320; s <= 160; s += 32) {
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
  for (let s = -260; s <= 120; s += 40) {
    placeAlong(s, 1, 6, (x, z, h) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = h; scene.add(g);
      const b = new THREE.Mesh(new THREE.BoxGeometry(14, 7, 40), [pitMat, garageMat, pitMat, pitMat, pitMat, pitMat]);
      b.position.set(7, 3.5, 0); b.castShadow = true; b.receiveShadow = true; g.add(b);
      blocked.push([x, z, 30]);
    });
  }
  // público (instanciado)
  if (crowdPos.length) {
    const cg = new THREE.BoxGeometry(0.5, 0.8, 0.4);
    const im = new THREE.InstancedMesh(cg, new THREE.MeshStandardMaterial({ roughness: 0.9 }), crowdPos.length);
    const o = new THREE.Object3D(), col = new THREE.Color();
    const pal = ['#d7141a', '#ffd21a', '#1d6bff', '#ffffff', '#ff7a00', '#0a6b47', '#ff4fa3', '#222', '#4fc3ff'];
    crowdPos.forEach((p, k) => { o.position.set(p[0], p[1], p[2]); o.updateMatrix(); im.setMatrixAt(k, o.matrix); im.setColorAt(k, col.set(pal[k % pal.length])); });
    scene.add(im);
  }

  // carteles de distancia antes de las frenadas fuertes
  const boardTex = n => canvasTex(128, 128, (x, w, h) => { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.strokeStyle = '#d7141a'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10); x.fillStyle = '#111'; x.font = '900 56px "Titillium Web", Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(n, w / 2, h / 2 + 3); }, false);
  const bt = { 150: boardTex('150'), 100: boardTex('100'), 50: boardTex('50') };
  for (let i = 0; i < T.N; i++) {
    const a = T.vmax[i], b = T.vmax[(i + 8) % T.N];
    if (a > 75 && a - T.vmax[(i + 40) % T.N] > 25 && T.vmax[(i - 1 + T.N) % T.N] >= a - 0.01 && a - b > 1) {
      // inicio de una frenada fuerte: la frenada empieza acá
      const sb = i * T.ds;
      const side = (T.curv[(i + 40) % T.N] > 0) ? -1 : 1; // del lado exterior
      for (const d of [150, 100, 50]) {
        placeAlong(sb + 150 - d - 30, side, -(side > 0 ? T.wallL[i] : T.wallR[i]) + T.hw + 2.6, (x, z, h) => {
          const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = h + Math.PI; scene.add(g);
          const p = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: bt[d], side: THREE.DoubleSide })); p.position.y = 1.2; g.add(p);
          const pole = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.7, 0.08), standMat); pole.position.y = 0.35; g.add(pole);
        });
      }
      i += 40;
    }
  }

  // árboles
  const trees = [];
  const nearTrack = (x, z, r) => {
    const c = T.cell, qx = Math.floor(x / c), qz = Math.floor(z / c);
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) {
      const L = T.grid.get((qx + a) + ',' + (qz + b)); if (!L) continue;
      for (const i of L) { const w = Math.max(T.wallL[i], T.wallR[i]); if (Math.hypot(T.px[i] - x, T.pz[i] - z) < w + r) return true; }
    }
    return false;
  };
  for (let k = 0; k < 2600 && trees.length < 900; k++) {
    const x = cx + (Math.random() - 0.5) * (groundSize - 60), z = cz + (Math.random() - 0.5) * (groundSize - 60);
    if (nearTrack(x, z, 12)) continue;
    if (blocked.some(b => Math.hypot(b[0] - x, b[1] - z) < b[2] + 10)) continue;
    trees.push([x, z, 0.7 + Math.random() * 0.8]);
  }
  {
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, 3, 6), new THREE.MeshStandardMaterial({ color: '#6b4a2b', roughness: 1 }), trees.length);
    const crownG = th.water ? new THREE.IcosahedronGeometry(2.6, 0) : new THREE.ConeGeometry(2.4, 6, 7);
    const crown = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: th.water ? '#3f8a3a' : '#2f6b3c', roughness: 1, flatShading: true }), trees.length);
    const o = new THREE.Object3D(), col = new THREE.Color();
    trees.forEach(([x, z, s], k) => {
      o.position.set(x, 1.5 * s, z); o.scale.set(s, s, s); o.rotation.set(0, Math.random() * 6, 0); o.updateMatrix(); trunk.setMatrixAt(k, o.matrix);
      o.position.set(x, (th.water ? 4.6 : 5.4) * s, z); o.updateMatrix(); crown.setMatrixAt(k, o.matrix);
      crown.setColorAt(k, col.set(th.water ? '#3f8a3a' : '#2f6b3c').offsetHSL((Math.random() - 0.5) * 0.04, 0, (Math.random() - 0.5) * 0.1));
    });
    crown.castShadow = true; trunk.castShadow = true;
    scene.add(trunk, crown);
  }

  return {
    scene, sun, sunDir: sd,
    setLights(n) { lights.forEach((m, k) => { m.emissiveIntensity = k < n ? 3.2 : 0; m.color.set(k < n ? '#ff2a2a' : '#2a0505'); }); },
    followSun(x, z) { sun.position.set(x + sd.x * 150, sd.y * 150, z + sd.z * 150); sun.target.position.set(x, 0, z); },
  };
}
