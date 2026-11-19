// Efectos visuales con pools de instancias: trazadoras, chispas, sangre, marcas de bala, humo, fuego y explosiones.
import * as THREE from 'three';
import { NADE } from './nades.js';
import { raycast } from './world.js';

const tmpO = new THREE.Object3D(), tmpC = new THREE.Color(), UP = new THREE.Vector3(0, 1, 0), V = new THREE.Vector3();

export function makeFx(scene) {
  const fx = {};
  // ---------- partículas ----------
  const PMAX = 700;
  const pm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: '#ffffff' }), PMAX);
  pm.instanceMatrix.setUsage(THREE.DynamicDrawUsage); pm.frustumCulled = false; pm.count = 0;
  pm.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(PMAX * 3), 3);
  scene.add(pm);
  const parts = [];
  fx.quality = 2;
  fx.particle = (x, y, z, vx, vy, vz, size, life, color, grav = 9.8, grow = 0, floorY = null) => {
    if (fx.quality < 2 && Math.random() < (fx.quality === 0 ? 0.65 : 0.35)) return; // menos partículas en calidad baja/media
    if (parts.length >= PMAX) parts.shift();
    const p = { x, y, z, vx, vy, vz, s: size, life, max: life, c: new THREE.Color(color), g: grav, grow, fy: floorY };
    parts.push(p); return p;
  };
  fx.floorAt = null;
  // casquillo de bala: rebota en el piso
  fx.shell = (p, rx, rz, big) => {
    const f = fx.floorAt ? fx.floorAt(p[0], p[2], p[1]) : p[1] - 1.5;
    const q = fx.particle(p[0], p[1], p[2], rx * (1.5 + Math.random()) , 1.6 + Math.random(), rz * (1.5 + Math.random()), big ? 0.03 : 0.022, 1.6, big ? '#2d6b2a' : '#c9a23a', 9.8, 0, f + 0.01);
    q.shell = true;
  };
  // ---------- trazadoras ----------
  const TMAX = 64;
  const tg = new THREE.BoxGeometry(1, 1, 1); tg.translate(0, 0, -0.5);
  const tm = new THREE.InstancedMesh(tg, new THREE.MeshBasicMaterial({ color: '#ffe9a8', transparent: true, opacity: 0.85, depthWrite: false }), TMAX);
  tm.instanceMatrix.setUsage(THREE.DynamicDrawUsage); tm.frustumCulled = false; tm.count = 0; scene.add(tm);
  const tracers = [];
  fx.tracer = (a, b) => {
    if (tracers.length >= TMAX) tracers.shift();
    const d = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    // trazadora corta que viaja
    tracers.push({ a: [...a], b: [...b], d, t: 0, life: Math.min(0.25, d / 280 + 0.04) });
  };
  // ---------- marcas de bala ----------
  const DMAX = 220;
  const dg = new THREE.PlaneGeometry(0.1, 0.1);
  // agujero de bala: centro oscuro, borde astillado más claro y grietas
  const hc = document.createElement('canvas'); hc.width = hc.height = 64; { const x = hc.getContext('2d');
    const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(10,8,6,1)'); g.addColorStop(0.28, 'rgba(25,20,16,0.95)'); g.addColorStop(0.42, 'rgba(90,80,66,0.7)'); g.addColorStop(0.6, 'rgba(60,52,42,0.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64); x.strokeStyle = 'rgba(20,16,12,0.6)'; x.lineWidth = 1.2;
    for (let i = 0; i < 7; i++) { const a = i / 7 * 6.28 + Math.random() * 0.5; x.beginPath(); x.moveTo(32 + Math.cos(a) * 8, 32 + Math.sin(a) * 8); x.lineTo(32 + Math.cos(a + 0.2) * (16 + Math.random() * 12), 32 + Math.sin(a + 0.2) * (16 + Math.random() * 12)); x.stroke(); } }
  const htex = new THREE.CanvasTexture(hc); htex.colorSpace = THREE.SRGBColorSpace;
  const dm = new THREE.InstancedMesh(dg, new THREE.MeshBasicMaterial({ map: htex, transparent: true, polygonOffset: true, polygonOffsetFactor: -2, depthWrite: false }), DMAX);
  dm.count = 0; dm.frustumCulled = false; scene.add(dm);
  let dIdx = 0;
  fx.decal = (p, n) => {
    tmpO.position.set(p[0] + n[0] * 0.01, p[1] + n[1] * 0.01, p[2] + n[2] * 0.01);
    V.set(n[0], n[1], n[2]); tmpO.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), V);
    tmpO.rotateZ(Math.random() * 3); tmpO.scale.setScalar(0.7 + Math.random() * 0.6); tmpO.updateMatrix();
    dm.setMatrixAt(dIdx, tmpO.matrix); dIdx = (dIdx + 1) % DMAX; dm.count = Math.max(dm.count, dIdx === 0 ? DMAX : dIdx); dm.instanceMatrix.needsUpdate = true;
  };
  const colorDecals = {};
  fx.decalC = (p, n, color, size) => {
    let D = colorDecals[color];
    if (!D) { const m = new THREE.InstancedMesh(new THREE.CircleGeometry(0.5, 7), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -3, depthWrite: false }), 80); m.count = 0; m.frustumCulled = false; scene.add(m); D = colorDecals[color] = { m, i: 0 }; }
    tmpO.position.set(p[0] + n[0] * 0.012, p[1] + n[1] * 0.012, p[2] + n[2] * 0.012);
    V.set(n[0], n[1], n[2]); tmpO.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), V); tmpO.rotateZ(Math.random() * 6);
    tmpO.scale.set(size * (0.8 + Math.random() * 0.5), size * (0.6 + Math.random() * 0.5), 1); tmpO.updateMatrix();
    D.m.setMatrixAt(D.i, tmpO.matrix); D.i = (D.i + 1) % 80; D.m.count = Math.max(D.m.count, D.i === 0 ? 80 : D.i); D.m.instanceMatrix.needsUpdate = true;
  };
  fx.clearDecals = () => { dm.count = 0; dIdx = 0; for (const k in colorDecals) { colorDecals[k].m.count = 0; colorDecals[k].i = 0; } };
  fx.impact = (p, n, col = '#cdb894') => {
    fx.decal(p, n);
    for (let i = 0; i < 5; i++) fx.particle(p[0], p[1], p[2], n[0] * 2 + (Math.random() - 0.5) * 2, n[1] * 2 + Math.random() * 1.5, n[2] * 2 + (Math.random() - 0.5) * 2, 0.03 + Math.random() * 0.03, 0.35 + Math.random() * 0.3, col, 6);
    fx.particle(p[0], p[1], p[2], n[0] * 0.5, 0.4, n[2] * 0.5, 0.08, 0.5, '#d9cdb5', -0.5, 0.25);
    fx.particle(p[0], p[1], p[2], 0, 0, 0, 0.05, 0.05, '#fff2a0', 0);
    if (Math.random() < 0.45) for (let i = 0; i < 4; i++) fx.particle(p[0], p[1], p[2], n[0] * 3 + (Math.random() - 0.5) * 5, n[1] * 3 + Math.random() * 3, n[2] * 3 + (Math.random() - 0.5) * 5, 0.012, 0.18 + Math.random() * 0.15, '#ffd060', 12);
  };
  // modo práctica: cubitos donde pegó cada bala (rojo = cliente)
  const dbg = [];
  const dbgGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06), dbgMat = new THREE.MeshBasicMaterial({ color: '#ff3030', depthTest: false, transparent: true, opacity: 0.85 });
  fx.debugBox = (p) => { const m = new THREE.Mesh(dbgGeo, dbgMat); m.position.set(p[0], p[1], p[2]); m.renderOrder = 25; scene.add(m); dbg.push({ m, t: 8 }); if (dbg.length > 120) scene.remove(dbg.shift().m); };
  fx.tickDebug = (dt) => { for (let i = dbg.length - 1; i >= 0; i--) { dbg[i].t -= dt; if (dbg[i].t <= 0) { scene.remove(dbg[i].m); dbg.splice(i, 1); } } };
  fx.muzzleSmoke = (p) => { for (let i = 0; i < 2; i++) fx.particle(p[0], p[1], p[2], (Math.random() - 0.5) * 0.3, 0.25 + Math.random() * 0.2, (Math.random() - 0.5) * 0.3, 0.05, 0.6 + Math.random() * 0.4, '#bdbab4', -0.2, 0.22); };
  fx.dust = (p) => { for (let i = 0; i < 2; i++) fx.particle(p[0] + (Math.random() - 0.5) * 0.3, p[1] + 0.03, p[2] + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.4, 0.2, (Math.random() - 0.5) * 0.4, 0.05, 0.5, '#d8c4a0', 0.2, 0.15); };
  fx.blood = (p, dir, head) => {
    const n = head ? 10 : 6;
    for (let i = 0; i < n; i++) fx.particle(p[0], p[1], p[2], dir[0] * 2.5 + (Math.random() - 0.5) * 2, dir[1] * 2 + Math.random() * 1.2, dir[2] * 2.5 + (Math.random() - 0.5) * 2, 0.035 + Math.random() * 0.04, 0.4 + Math.random() * 0.3, head ? '#b3121a' : '#8f1015', 8);
  };
  // ---------- fogonazo ----------
  const flashGeo = new THREE.OctahedronGeometry(1, 0);
  const flashMat = new THREE.MeshBasicMaterial({ color: '#ffd27a', transparent: true, opacity: 0.95, depthWrite: false });
  fx.muzzleMesh = () => { const m = new THREE.Mesh(flashGeo, flashMat); m.visible = false; m.scale.set(0.05, 0.05, 0.14); return m; };
  const light = new THREE.PointLight('#ffcf80', 0, 7, 2); scene.add(light);
  let lightT = 0;
  fx.flashLight = (p, k = 1) => { light.position.set(p[0], p[1], p[2]); light.intensity = 6 * k; light.distance = 7; lightT = 0.05; };
  // ---------- humo: núcleo de esferas suaves (tapa la vista) + nubes en billboard con textura de humo ----------
  const SMAX = 10 * 66;
  const sg = new THREE.IcosahedronGeometry(1, 2);
  const sm = new THREE.InstancedMesh(sg, new THREE.MeshLambertMaterial({ color: '#aeb1b5' }), SMAX);
  sm.instanceMatrix.setUsage(THREE.DynamicDrawUsage); sm.count = 0; sm.frustumCulled = false; scene.add(sm);
  sm.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(SMAX * 3), 3);
  // textura de bocanada: gradiente radial con ruido (generada, sin archivos)
  const puffTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const img = x.createImageData(128, 128), d = img.data;
    const rnd = (i, j) => { const h = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return h - Math.floor(h); };
    const vn = (u, v) => { const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j, a = rnd(i, j), b = rnd(i + 1, j), cc = rnd(i, j + 1), dd = rnd(i + 1, j + 1), su = fu * fu * (3 - 2 * fu), sv = fv * fv * (3 - 2 * fv); return a + (b - a) * su + (cc - a) * sv + (a - b - cc + dd) * su * sv; };
    for (let y = 0; y < 128; y++) for (let X = 0; X < 128; X++) {
      const u = (X - 63.5) / 63.5, v = (y - 63.5) / 63.5, r = Math.hypot(u, v);
      let n = 0, f = 3, a = 0.5; for (let o = 0; o < 4; o++) { n += vn(X / 128 * f + o * 17, y / 128 * f) * a; f *= 2; a *= 0.5; }
      const al = Math.max(0, 1 - r * (0.75 + n * 0.55)); const k = (y * 128 + X) * 4;
      const sh = 205 + n * 50 - v * 25; d[k] = d[k + 1] = d[k + 2] = Math.min(255, sh); d[k + 3] = Math.min(255, Math.pow(al, 1.2) * 300);
    }
    x.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const pg = new THREE.PlaneGeometry(1, 1);
  const SP = 900;
  const spm = new THREE.InstancedMesh(pg, new THREE.MeshBasicMaterial({ map: puffTex, transparent: true, depthWrite: false, color: '#ffffff' }), SP);
  spm.instanceMatrix.setUsage(THREE.DynamicDrawUsage); spm.count = 0; spm.frustumCulled = false; spm.renderOrder = 2; scene.add(spm);
  spm.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(SP * 3), 3);
  // bocanadas sueltas (explosiones: bola de fuego aditiva y columna de humo)
  const FP = 300;
  const fpm = new THREE.InstancedMesh(pg, new THREE.MeshBasicMaterial({ map: puffTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: '#ffffff' }), FP);
  fpm.instanceMatrix.setUsage(THREE.DynamicDrawUsage); fpm.count = 0; fpm.frustumCulled = false; fpm.renderOrder = 3; scene.add(fpm);
  fpm.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(FP * 3), 3);
  const puffs = [];
  fx.puff = (x, y, z, vx, vy, vz, s0, s1, life, c0, c1, add, drag = 1.2) => puffs.push({ x, y, z, vx, vy, vz, s0, s1, life, max: life, c0: new THREE.Color(c0), c1: new THREE.Color(c1), add, drag, rot: Math.random() * 6.28 });
  const smokes = [];
  fx.smoke = (g, W) => {
    const balls = [];
    // las bolas se reparten como un domo, sin atravesar paredes
    // el humo llena el espacio: más bolas, más grandes, y si una pared corta el camino se queda de este lado
    const cy = g.y + 0.6;
    for (let i = 0; i < 64; i++) {
      const a = Math.random() * Math.PI * 2; let r = Math.sqrt(Math.random()) * NADE.smokeR * 0.9; const h = Math.random() * 2.8;
      const dx = Math.cos(a), dz = Math.sin(a), dy = (h + 0.2 - 0.6) / Math.max(0.5, r);
      if (W && r > 0.3) { const L = Math.hypot(1, dy), hit = raycast(W, g.x, cy, g.z, dx / L, dy / L, dz / L, r * L); if (hit) r = Math.max(0.2, hit.t / L - 0.6); }
      balls.push({ x: g.x + dx * r, y: g.y + 0.4 + h, z: g.z + dz * r, s: 1.0 + Math.random() * 0.9, ph: Math.random() * 6, c: 0.8 + Math.random() * 0.14 });
    }
    smokes.push({ g, balls });
  };
  fx.clearSmokes = () => { smokes.length = 0; fires.length = 0; };
  // ---------- fuego ----------
  const FMAX = 260;
  const fgeo = new THREE.ConeGeometry(0.22, 0.7, 4); fgeo.translate(0, 0.35, 0);
  const fmesh = new THREE.InstancedMesh(fgeo, new THREE.MeshBasicMaterial({ color: '#ffffff' }), FMAX);
  fmesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(FMAX * 3), 3);
  fmesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); fmesh.count = 0; fmesh.frustumCulled = false; scene.add(fmesh);
  const fires = [];
  const fireLight = new THREE.PointLight('#ff8a3a', 0, 9, 1.6); scene.add(fireLight);
  fx.fire = (g, W, floorAt) => {
    const fl = [];
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * NADE.fireR;
      const x = g.x + Math.cos(a) * r, z = g.z + Math.sin(a) * r, y = floorAt(W, x, z, g.y + 0.6);
      if (y < g.y - 1.2 || y > g.y + 0.7) continue;
      fl.push({ x, y, z, ph: Math.random() * 6, s: 0.7 + Math.random() * 0.8 });
    }
    fires.push({ g, fl });
  };
  // ---------- explosiones ----------
  const exps = [];
  const eg = new THREE.IcosahedronGeometry(1, 1);
  fx.explosion = (p, big) => {
    const m = new THREE.Mesh(eg, new THREE.MeshBasicMaterial({ color: '#ffb347', transparent: true, opacity: 0.9, depthWrite: false }));
    m.position.set(p[0], p[1] + 0.3, p[2]); scene.add(m);
    exps.push({ m, t: 0, life: big ? 0.5 : 0.35, size: big ? 7 : 2.2 });
    const S = big ? 1 : 0.35, y0 = p[1] + 0.4;
    // bola de fuego: bocanadas aditivas que se expanden rápido y se apagan
    for (let i = 0; i < (big ? 46 : 16); i++) { const a = Math.random() * 6.28, e = Math.random() * 1.2, v = (big ? 9 : 5) * Math.random(); fx.puff(p[0], y0, p[2], Math.cos(a) * Math.cos(e) * v, Math.sin(e) * v + 1, Math.sin(a) * Math.cos(e) * v, 1.5 * S + 0.6, (big ? 7 : 2.6) * (0.6 + Math.random() * 0.5), 0.3 + Math.random() * (big ? 0.5 : 0.25), '#fff1c0', '#b8400c', true, 3.5); }
    // humo negro/gris que sube y queda flotando (más largo en la bomba)
    for (let i = 0; i < (big ? 60 : 14); i++) { const a = Math.random() * 6.28, r = Math.random() * (big ? 4 : 1.2); fx.puff(p[0] + Math.cos(a) * r, y0 + Math.random() * (big ? 3 : 1), p[2] + Math.sin(a) * r, Math.cos(a) * (big ? 2 : 1), (big ? 2.2 : 1) + Math.random() * (big ? 3 : 1), Math.sin(a) * (big ? 2 : 1), 1.4 * S + 0.6, (big ? 9 : 3) * (0.7 + Math.random() * 0.6), (big ? 4.5 : 2) + Math.random() * 2.5, '#5a524a', '#8d8a86', false, 0.6); }
    // chispas y escombros
    for (let i = 0; i < (big ? 120 : 30); i++) { const a = Math.random() * 6.28, e = Math.random() * 1.4, s2 = (big ? 16 : 7) * (0.4 + Math.random()); fx.particle(p[0], y0, p[2], Math.cos(a) * Math.cos(e) * s2, Math.sin(e) * s2, Math.sin(a) * Math.cos(e) * s2, 0.04 + Math.random() * 0.08, 0.6 + Math.random() * (big ? 1.4 : 0.6), Math.random() < 0.6 ? '#ffc86a' : '#2e2a26', 9); }
    fx.flashLight(p, big ? 14 : 3); lightT = big ? 0.6 : 0.15; light.distance = big ? 40 : 7;
  };
  fx.flashPop = (p) => { fx.flashLight(p, 8); lightT = 0.08; for (let i = 0; i < 14; i++) fx.particle(p[0], p[1], p[2], (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, 0.04, 0.25, '#ffffff', 0); };

  // ---------- actualización ----------
  fx.update = (dt, time, cam) => {
    // partículas
    let n = 0;
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.life -= dt;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      p.vy -= p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.fy !== null && p.fy !== undefined && p.y < p.fy) { p.y = p.fy; p.vy = Math.abs(p.vy) > 0.6 ? -p.vy * 0.3 : 0; p.vx *= 0.5; p.vz *= 0.5; p.g = p.vy ? 9.8 : 0; }
      p.vx *= 1 - dt * 1.5; p.vz *= 1 - dt * 1.5;
      const k = p.life / p.max, s = p.shell ? p.s : p.s * (1 + p.grow * (1 - k) * 8) * (p.grow ? 1 : Math.min(1, k * 2));
      tmpO.position.set(p.x, p.y, p.z); tmpO.rotation.set(p.x * 7, p.y * 5, 0); if (p.shell) tmpO.scale.set(s * 0.5, s * 0.5, s * 1.6); else tmpO.scale.setScalar(s); tmpO.updateMatrix();
      pm.setMatrixAt(n, tmpO.matrix); pm.setColorAt(n, p.c); n++;
    }
    pm.count = n; pm.instanceMatrix.needsUpdate = true; if (pm.instanceColor) pm.instanceColor.needsUpdate = true;
    // trazadoras
    n = 0;
    for (let i = tracers.length - 1; i >= 0; i--) {
      const t = tracers[i]; t.t += dt; if (t.t > t.life) { tracers.splice(i, 1); continue; }
      const k = t.t / t.life, len = Math.min(t.d, 3.5);
      const head = Math.min(t.d, t.d * k + len * 0.5), tail = Math.max(0, head - len);
      const dx = (t.b[0] - t.a[0]) / t.d, dy = (t.b[1] - t.a[1]) / t.d, dz = (t.b[2] - t.a[2]) / t.d;
      tmpO.position.set(t.a[0] + dx * head, t.a[1] + dy * head, t.a[2] + dz * head);
      tmpO.lookAt(t.a[0] + dx * (head + 1), t.a[1] + dy * (head + 1), t.a[2] + dz * (head + 1));
      tmpO.rotateY(Math.PI);
      tmpO.scale.set(0.012, 0.012, Math.max(0.01, head - tail)); tmpO.updateMatrix();
      tm.setMatrixAt(n++, tmpO.matrix);
    }
    tm.count = n; tm.instanceMatrix.needsUpdate = true;
    // humo
    n = 0;
    for (let i = smokes.length - 1; i >= 0; i--) {
      const s = smokes[i], g = s.g;
      if (g.state !== 'active') { smokes.splice(i, 1); continue; }
      const age = NADE.smokeLife - g.life, grow = Math.min(1, age / 1.2), fade = Math.min(1, g.life / 1.5);
      for (const b of s.balls) {
        if (n >= SMAX) break;
        const k = grow * fade;
        tmpO.position.set(g.x + (b.x - g.x) * (0.3 + 0.7 * grow), g.y + (b.y - g.y) * (0.3 + 0.7 * grow) + Math.sin(time * 0.6 + b.ph) * 0.08, g.z + (b.z - g.z) * (0.3 + 0.7 * grow));
        tmpO.rotation.set(b.ph, time * 0.05 + b.ph, 0); tmpO.scale.setScalar(Math.max(0.01, b.s * k * 1.05)); tmpO.updateMatrix();
        sm.setMatrixAt(n, tmpO.matrix); tmpC.setScalar(b.c); sm.setColorAt(n, tmpC); n++;
      }
    }
    sm.count = n; sm.instanceMatrix.needsUpdate = true; if (sm.instanceColor) sm.instanceColor.needsUpdate = true;
    // nubes del humo en billboard (mirando a la cámara) por encima del núcleo
    n = 0; const cq = cam ? cam.quaternion : null;
    for (const s2 of smokes) {
      const g = s2.g, age = NADE.smokeLife - g.life, grow = Math.min(1, age / 1.2), fade = Math.min(1, g.life / 1.5);
      for (const b of s2.balls) {
        if (n >= SP) break;
        const k = grow * fade;
        tmpO.position.set(g.x + (b.x - g.x) * (0.3 + 0.7 * grow), g.y + (b.y - g.y) * (0.3 + 0.7 * grow) + Math.sin(time * 0.5 + b.ph) * 0.1, g.z + (b.z - g.z) * (0.3 + 0.7 * grow));
        if (cq) tmpO.quaternion.copy(cq); tmpO.rotateZ(b.ph + time * 0.04 * (b.ph > 3 ? 1 : -1)); tmpO.scale.setScalar(Math.max(0.01, b.s * k * 3.1)); tmpO.updateMatrix();
        spm.setMatrixAt(n, tmpO.matrix); tmpC.setScalar(0.72 + b.c * 0.3); spm.setColorAt(n, tmpC); n++;
      }
    }
    // bocanadas de explosiones
    let nf = 0;
    for (let i = puffs.length - 1; i >= 0; i--) {
      const q = puffs[i]; q.life -= dt; if (q.life <= 0) { puffs.splice(i, 1); continue; }
      const k = 1 - q.life / q.max; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; const dr = Math.exp(-dt * q.drag); q.vx *= dr; q.vy *= dr; q.vz *= dr;
      tmpO.position.set(q.x, q.y, q.z); if (cq) tmpO.quaternion.copy(cq); tmpO.rotateZ(q.rot + k); tmpO.scale.setScalar(q.s0 + (q.s1 - q.s0) * Math.sqrt(k)); tmpO.updateMatrix();
      tmpC.copy(q.c0).lerp(q.c1, Math.min(1, k * 1.6));
      if (q.add) { if (nf < FP) { tmpC.multiplyScalar(Math.pow(1 - k, 2.2)); fpm.setMatrixAt(nf, tmpO.matrix); fpm.setColorAt(nf, tmpC); nf++; } }
      else if (n < SP) { const fo = Math.min(1, (1 - k) * 2.5); tmpC.multiplyScalar(0.55 + 0.45 * fo); spm.setMatrixAt(n, tmpO.matrix); spm.setColorAt(n, tmpC); n++; }
    }
    spm.count = n; spm.instanceMatrix.needsUpdate = true; spm.instanceColor.needsUpdate = true;
    fpm.count = nf; fpm.instanceMatrix.needsUpdate = true; fpm.instanceColor.needsUpdate = true;
    // fuego
    n = 0; let fl = 0, lp = null;
    for (let i = fires.length - 1; i >= 0; i--) {
      const f = fires[i], g = f.g;
      if (g.state !== 'active' || g.life <= 0) { fires.splice(i, 1); continue; }
      const k = Math.min(1, g.life / 1.2) * Math.min(1, (NADE.fireLife - g.life) * 4 + 0.3);
      for (const q of f.fl) {
        if (n >= FMAX) break;
        const fl2 = 0.7 + Math.sin(time * 14 + q.ph) * 0.2 + Math.sin(time * 23 + q.ph * 2) * 0.1;
        tmpO.position.set(q.x, q.y, q.z); tmpO.rotation.set(0, q.ph + time, 0); tmpO.scale.set(q.s * k, q.s * k * fl2 * 1.3, q.s * k); tmpO.updateMatrix();
        fmesh.setMatrixAt(n, tmpO.matrix); tmpC.setRGB(1, 0.45 + fl2 * 0.35, 0.1); fmesh.setColorAt(n, tmpC); n++;
      }
      fl += k; lp = g;
    }
    fmesh.count = n; fmesh.instanceMatrix.needsUpdate = true; if (fmesh.instanceColor) fmesh.instanceColor.needsUpdate = true;
    if (lp) { fireLight.position.set(lp.x, lp.y + 1, lp.z); fireLight.intensity = Math.min(1, fl) * (3 + Math.sin(time * 20) * 0.8); } else fireLight.intensity = 0;
    // explosiones
    for (let i = exps.length - 1; i >= 0; i--) {
      const e = exps[i]; e.t += dt; const k = e.t / e.life;
      if (k >= 1) { scene.remove(e.m); e.m.material.dispose(); exps.splice(i, 1); continue; }
      e.m.scale.setScalar(e.size * (0.3 + 0.7 * Math.sqrt(k))); e.m.material.opacity = 0.9 * (1 - k); e.m.material.color.setRGB(1, 0.7 - k * 0.4, 0.3 - k * 0.25);
    }
    if (lightT > 0) { lightT -= dt; if (lightT <= 0) light.intensity = 0; }
  };
  return fx;
}
