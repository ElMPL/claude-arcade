// Convierte el mundo de columnas en mallas low-poly: caras de arriba/abajo fusionadas por
// rectángulos (greedy meshing) y paredes laterales fusionadas en tiras. Todo en 1 malla por capa
// con colores por vértice y sombreado plano → pocas llamadas de dibujo.
import * as THREE from 'three';

const THEMES = {
  dust2: { floor: [0.80, 0.66, 0.45], floorHi: [0.86, 0.73, 0.52], wall: [0.86, 0.76, 0.58], wallTop: [0.92, 0.84, 0.68], obst: [0.62, 0.45, 0.27], obst2: [0.72, 0.64, 0.48], sky: ['#7fb7e8', '#f3e2c2'], fog: '#e9d8b8', sun: '#fff1d6', ground: '#c9a873' },
  mirage: { floor: [0.72, 0.64, 0.53], floorHi: [0.80, 0.70, 0.58], wall: [0.85, 0.74, 0.58], wallTop: [0.80, 0.55, 0.40], obst: [0.55, 0.40, 0.28], obst2: [0.66, 0.60, 0.52], sky: ['#6fa9e0', '#f6dcb6'], fog: '#efd9bb', sun: '#fff0d8', ground: '#c8ad86' },
  vertigo: { floor: [0.60, 0.60, 0.58], floorHi: [0.68, 0.67, 0.63], wall: [0.74, 0.73, 0.69], wallTop: [0.86, 0.66, 0.20], obst: [0.85, 0.62, 0.15], obst2: [0.52, 0.53, 0.55], sky: ['#3f87d6', '#cfe4f5'], fog: '#c9dbe9', sun: '#ffffff', ground: '#6d7f8f' },
};
export const themeOf = id => THEMES[id] || THEMES.dust2;

function hash(x, y) { let h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }

export function buildMeshes(W, mapId) {
  const T = themeOf(mapId), n = W.n, c = W.cell;
  const pos = [], nor = [], col = [];
  const quad = (a, b, cc, d, nx, ny, nz, rgb) => {
    for (const v of [a, b, cc, a, cc, d]) { pos.push(v[0], v[1], v[2]); nor.push(nx, ny, nz); col.push(rgb[0], rgb[1], rgb[2]); }
  };
  const tri = (a, b, cc, rgb) => {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = cc[0] - a[0], vy = cc[1] - a[1], vz = cc[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const L = Math.hypot(nx, ny, nz) || 1; nx /= L; ny /= L; nz /= L;
    for (const v of [a, b, cc]) { pos.push(v[0], v[1], v[2]); nor.push(nx, ny, nz); col.push(rgb[0], rgb[1], rgb[2]); }
  };
  const tint = (base, x, y, amt = 0.06) => { const k = 1 + (hash(x, y) - 0.5) * 2 * amt; return [base[0] * k, base[1] * k, base[2] * k]; };
  for (let l = 0; l < W.L; l++) {
    const top = W.top[l], bot = W.bot[l], cls = W.cls[l];
    // ---------- piso suave: alturas en las esquinas (promedio de las celdas vecinas parecidas) ----------
    const flat = new Uint8Array(n * n);
    const cH = (i, t, cx, cz) => { // esquina (cx,cz) en coordenadas de vértice
      let s = 0, k = 0;
      for (let dz = -1; dz <= 0; dz++) for (let dx = -1; dx <= 0; dx++) {
        const x = cx + dx, z = cz + dz; if (x < 0 || z < 0 || x >= n || z >= n) continue;
        const j = z * n + x; if (cls[j] !== 1 || isNaN(top[j]) || Math.abs(top[j] - t) > 0.6) continue;
        s += top[j]; k++;
      }
      return k ? s / k : t;
    };
    const done = new Uint8Array(n * n);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x; if (cls[i] !== 1 || isNaN(top[i])) continue;
      const t = top[i];
      const h00 = cH(i, t, x, y), h10 = cH(i, t, x + 1, y), h01 = cH(i, t, x, y + 1), h11 = cH(i, t, x + 1, y + 1);
      if (Math.abs(h00 - t) < 0.004 && Math.abs(h10 - t) < 0.004 && Math.abs(h01 - t) < 0.004 && Math.abs(h11 - t) < 0.004) { flat[i] = 1; continue; }
      done[i] = 1;
      const x0 = x * c, x1 = (x + 1) * c, z0 = y * c, z1 = (y + 1) * c;
      const rgb = tint(mix(T.floor, T.floorHi, clamp01(t / 6)), x >> 2, y >> 2, 0.05);
      tri([x0, h00, z0], [x0, h01, z1], [x1, h11, z1], rgb);
      tri([x0, h00, z0], [x1, h11, z1], [x1, h10, z0], rgb);
      if (l > 0) { const B = bot[i]; quad([x0, B, z0], [x1, B, z0], [x1, B, z1], [x0, B, z1], 0, -1, 0, mul(T.floor, 0.55)); }
    }
    // ---------- caras de arriba planas (greedy) ----------
    const key = i => isNaN(top[i]) || done[i] ? null : cls[i] * 10000 + Math.round(top[i] * 100);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const i = y * n + x; if (done[i]) continue; const k = key(i); if (k === null) continue;
      let w = 1; while (x + w < n && !done[i + w] && key(i + w) === k) w++;
      let h = 1; outer: while (y + h < n) { for (let j = 0; j < w; j++) { const ii = (y + h) * n + x + j; if (done[ii] || key(ii) !== k) break outer; } h++; }
      for (let yy = 0; yy < h; yy++) for (let j = 0; j < w; j++) done[(y + yy) * n + x + j] = 1;
      const Y = top[i], x0 = x * c, x1 = (x + w) * c, z0 = y * c, z1 = (y + h) * c;
      const cl = cls[i];
      let rgb = cl === 1 ? mix(T.floor, T.floorHi, clamp01(Y / 6)) : cl === 2 ? (hash(x, y) < 0.5 ? T.obst : T.obst2) : T.wallTop;
      rgb = tint(rgb, x, y);
      quad([x0, Y, z0], [x0, Y, z1], [x1, Y, z1], [x1, Y, z0], 0, 1, 0, rgb);
      if (l > 0) { const B = bot[i]; quad([x0, B, z0], [x1, B, z0], [x1, B, z1], [x0, B, z1], 0, -1, 0, mul(T.floor, 0.55)); }
    }
    // ---------- paredes laterales (tiras fusionadas) ----------
    // dir: 0 +x, 1 -x, 2 +z, 3 -z
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let d = 0; d < 4; d++) {
      const [dx, dz] = DIRS[d];
      const along = dx !== 0 ? 'z' : 'x';
      for (let a = 0; a < n; a++) {
        let run = null;
        const flush = () => {
          if (!run) return;
          const { s, e, y0, y1, cl, line } = run;
          let A, B, C, D;
          if (along === 'z') { const X = (dx > 0 ? line + 1 : line) * c; A = [X, y0, s * c]; B = [X, y0, (e + 1) * c]; C = [X, y1, (e + 1) * c]; D = [X, y1, s * c]; if (dx < 0) { [A, B, C, D] = [B, A, D, C]; } }
          else { const Z = (dz > 0 ? line + 1 : line) * c; A = [(e + 1) * c, y0, Z]; B = [s * c, y0, Z]; C = [s * c, y1, Z]; D = [(e + 1) * c, y1, Z]; if (dz < 0) { [A, B, C, D] = [B, A, D, C]; } }
          const base = cl === 2 ? T.obst : cl === 1 ? mul(T.floor, 0.86) : T.wall;
          const rgb = tint(mul(base, d < 2 ? 0.93 : 0.82), s, line, 0.04);
          // abajo más oscuro (oclusión barata)
          const lo = mul(rgb, y1 - y0 > 1.2 ? 0.72 : 0.85);
          for (const v of [A, D, C, A, C, B]) { pos.push(v[0], v[1], v[2]); nor.push(dx, 0, dz); const c2 = v[1] === y0 ? lo : rgb; col.push(c2[0], c2[1], c2[2]); }
          run = null;
        };
        for (let b = 0; b < n; b++) {
          const x = along === 'z' ? a : b, y = along === 'z' ? b : a;
          const i = y * n + x;
          let seg = null;
          if (!isNaN(top[i])) {
            const xx = x + dx, yy = y + dz;
            const j = xx < 0 || yy < 0 || xx >= n || yy >= n ? -1 : yy * n + xx;
            let y1 = top[i], y0 = bot[i];
            if (j >= 0 && !isNaN(top[j])) { // vecino de la misma capa tapa una parte
              if (cls[i] === 1 && cls[j] === 1 && Math.abs(top[i] - top[j]) <= 0.6) y1 = y0; // el piso suave ya lo cubre
              else if (top[j] >= y1 && bot[j] <= y0) y1 = y0; // completamente tapado
              else if (bot[j] <= y0 + 0.01) y0 = Math.max(y0, top[j]);
            } else if (l === 0) {
              // vecino vacío: bajar hasta el piso visible más bajo cercano
              let low = 1e9; for (let m = 0; m < W.L; m++) if (j >= 0 && !isNaN(W.top[m][j])) low = Math.min(low, W.top[m][j]);
              y0 = low < 1e9 ? Math.max(y0, low) : (W.voidKill ? -25 : Math.max(y0, y1 - 8));
            }
            if (y1 - y0 > 0.01) seg = { y0: Math.round(y0 * 100) / 100, y1: Math.round(y1 * 100) / 100, cl: cls[i] };
          }
          if (seg && run && run.y0 === seg.y0 && run.y1 === seg.y1 && run.cl === seg.cl && run.e === b - 1) run.e = b;
          else { flush(); if (seg) run = { s: b, e: b, ...seg, line: a }; }
        }
        flush();
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeBoundingSphere();
  const mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
  mesh.matrixAutoUpdate = false;
  return { mesh, tris: pos.length / 9, theme: T };
}
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const clamp01 = v => Math.max(0, Math.min(1, v));

// Cielo, sol, terreno lejano (dunas / ciudad debajo en Vertigo)
export function buildEnvironment(scene, W, mapId) {
  const T = themeOf(mapId), S = W.size;
  scene.background = new THREE.Color(T.sky[1]);
  scene.fog = new THREE.Fog(T.fog, 60, mapId === 'vertigo' ? 420 : 300);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { a: { value: new THREE.Color(T.sky[0]) }, b: { value: new THREE.Color(T.sky[1]) } },
    vertexShader: 'varying float vy; void main(){ vy = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: 'uniform vec3 a; uniform vec3 b; varying float vy; void main(){ gl_FragColor = vec4(mix(b, a, smoothstep(-0.05, 0.6, vy)), 1.);\n#include <colorspace_fragment>\n}',
  }));
  sky.position.set(S / 2, 0, S / 2); sky.frustumCulled = false; scene.add(sky);
  scene.add(new THREE.HemisphereLight('#ffffff', T.ground, 0.75));
  const sun = new THREE.DirectionalLight(T.sun, 1.35); sun.position.set(S / 2 + 140, 260, S / 2 + 90); sun.target.position.set(S / 2, 0, S / 2);
  scene.add(sun, sun.target);
  const amb = new THREE.AmbientLight('#ffffff', 0.18); scene.add(amb);
  const rnd = mulberry(7);
  if (mapId === 'vertigo') {
    // ciudad abajo: rascacielos low-poly
    const g = new THREE.BoxGeometry(1, 1, 1), m = new THREE.MeshLambertMaterial({ color: '#8a9db0' });
    const im = new THREE.InstancedMesh(g, m, 140), o = new THREE.Object3D();
    for (let k = 0; k < 140; k++) {
      const a = rnd() * Math.PI * 2, r = 120 + rnd() * 320, h = 40 + rnd() * 140;
      o.position.set(S / 2 + Math.cos(a) * r, -160 + h / 2, S / 2 + Math.sin(a) * r); o.scale.set(14 + rnd() * 26, h, 14 + rnd() * 26); o.updateMatrix(); im.setMatrixAt(k, o.matrix);
    }
    scene.add(im);
    const base = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: T.ground })); base.rotation.x = -Math.PI / 2; base.position.set(S / 2, -160, S / 2); scene.add(base);
  } else {
    const base = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: T.ground })); base.rotation.x = -Math.PI / 2; base.position.set(S / 2, -0.6, S / 2); scene.add(base);
    // dunas / colinas lejanas
    const g = new THREE.ConeGeometry(1, 1, 6, 1), m = new THREE.MeshLambertMaterial({ color: T.ground, flatShading: true });
    const im = new THREE.InstancedMesh(g, m, 40), o = new THREE.Object3D();
    for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2, r = 260 + rnd() * 160, h = 25 + rnd() * 50; o.position.set(S / 2 + Math.cos(a) * r, h / 2 - 1, S / 2 + Math.sin(a) * r); o.scale.set(60 + rnd() * 60, h, 60 + rnd() * 60); o.rotation.y = rnd() * 3; o.updateMatrix(); im.setMatrixAt(k, o.matrix); }
    scene.add(im);
  }
}
function mulberry(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
