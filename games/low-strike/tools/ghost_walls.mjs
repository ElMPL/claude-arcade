// Busca "paredes invisibles": celdas que la colisión toma como sólidas a la altura del cuerpo pero donde el modelo
// no tiene ninguna pared dibujada (pasa cuando el importador pierde el piso debajo de un alero o un balcón).
// Recorre desde el piso caminable y deja la lista en src/ghosts.js: [celda, altura del piso, alto original].
// Uso: node tools/ghost_walls.mjs   (desde la carpeta del juego, con node_modules → three)
import fs from 'fs';
import { PNG } from 'pngjs';
import { decodeMap } from '../src/mapdata.js';
import { buildWorld, STEP } from '../src/world.js';
import { buildNav, sealTraps } from '../src/nav.js';
import { applyFixes } from '../src/fixes.js';
const D = new URL('../maps/', import.meta.url).pathname, out = {};
for (const id of ['dust2', 'mirage']) {
  const info = JSON.parse(fs.readFileSync(D + id + '.json')), png = PNG.sync.read(fs.readFileSync(D + id + '.png'));
  const W = buildWorld(info, decodeMap(info, png.data, png.width)); applyFixes(W, id);
  const Wn = buildWorld(info, decodeMap(info, png.data, png.width)); applyFixes(Wn, id); const nav = buildNav(Wn); sealTraps(Wn, nav);
  const b = fs.readFileSync(D + info.mesh), mesh = new Uint16Array(b.buffer, b.byteOffset, b.length >> 1), n = W.n, c = W.cell;
  // paredes dibujadas: bits de 0,5 m de alto por celda (solo triángulos verticales)
  const lo = new Uint32Array(n * n), hi = new Uint32Array(n * n), dlo = new Uint32Array(n * n), dhi = new Uint32Array(n * n);
  let L0 = lo, H0 = hi;
  const mark = (x, y, z) => { const gx = Math.floor(x / c), gz = Math.floor(z / c); if (gx < 0 || gz < 0 || gx >= n || gz >= n) return; const k = Math.floor((y + 2) / 0.5); if (k < 0 || k > 63) return; const i = gz * n + gx; if (k < 32) L0[i] |= 1 << k; else H0[i] |= 1 << (k - 32); };
  for (let a = 0; a < mesh.length; a += 9) {
    const P = [0, 3, 6].map(k => [mesh[a + k] / 100, mesh[a + k + 1] / 100, mesh[a + k + 2] / 100]);
    const ux = P[1][0] - P[0][0], uy = P[1][1] - P[0][1], uz = P[1][2] - P[0][2], vx = P[2][0] - P[0][0], vy = P[2][1] - P[0][1], vz = P[2][2] - P[0][2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, cy = ny / (Math.hypot(nx, ny, nz) || 1);
    if (cy > 0.7) continue; if (cy < -0.7) { L0 = dlo; H0 = dhi; } else { L0 = lo; H0 = hi; } // techo visto desde abajo / pared
    const L = Math.max(Math.hypot(ux, uy, uz), Math.hypot(vx, vy, vz)), s = Math.max(1, Math.ceil(L / 0.08));
    for (let u = 0; u <= s; u++) for (let v = 0; v <= s - u; v++) { const w = s - u - v; mark((P[0][0] * w + P[1][0] * u + P[2][0] * v) / s, (P[0][1] * w + P[1][1] * u + P[2][1] * v) / s, (P[0][2] * w + P[1][2] * u + P[2][2] * v) / s); }
  }
  const under = (i, y0, y1) => { for (let k = Math.max(0, Math.floor((y0 + 2) / 0.5)); k <= Math.min(63, Math.floor((y1 + 2) / 0.5)); k++) if (k < 32 ? (dlo[i] >>> k) & 1 : (dhi[i] >>> (k - 32)) & 1) return true; return false; };
  const wall = (i, y0, y1) => { for (let k = Math.max(0, Math.floor((y0 + 2) / 0.5)); k <= Math.min(63, Math.floor((y1 + 2) / 0.5)); k++) if (k < 32 ? (lo[i] >>> k) & 1 : (hi[i] >>> (k - 32)) & 1) return true; return false; };
  const near = (i, y0, y1) => { const x = i % n, z = (i - x) / n; for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, zz = z + dz; if (xx >= 0 && zz >= 0 && xx < n && zz < n && wall(zz * n + xx, y0, y1)) return true; } return false; };
  // arranca del piso de la zona principal y avanza sobre celdas "fantasma"
  const isMain = (x, z, f) => { for (let ez = -1; ez <= 1; ez++) for (let ex = -1; ex <= 1; ex++) { const zz = Math.floor(z / nav.k) + ez, xx = Math.floor(x / nav.k) + ex; if (zz < 0 || xx < 0 || zz >= nav.m || xx >= nav.m) continue; const ni = zz * nav.m + xx; for (let q = 0; q < nav.L; q++) if (nav.main[q * nav.N + ni] && Math.abs(nav.H[q][ni] - f) < 0.5) return true; } return false; };
  const fixed = new Map(), q = [];
  for (let z = 1; z < n - 1; z++) for (let x = 1; x < n - 1; x++) { const i = z * n + x; for (let l = 0; l < W.L; l++) { const f = W.top[l][i]; if (!isNaN(f) && W.cls[l][i] === 1 && isMain(x, z, f)) q.push([i, f]); } }
  while (q.length) {
    const [i, f] = q.pop(), x = i % n, z = (i - x) / n;
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const j = (z + dz) * n + x + dx; if (fixed.has(j)) continue;
      let li = -1; for (let l = 0; l < W.L; l++) { const t = W.top[l][j]; if (!isNaN(t) && t > f + STEP && W.bot[l][j] < f + 1.5) li = l; }
      if (li < 0 || W.bot[li][j] > f - 0.5) continue; // solo columnas que nacen debajo del piso
      if (near(j, f + 0.25, f + 1.6)) continue;      // hay una pared dibujada: es real
      if (!under(j, f + 1.7, W.top[li][j] + 0.1)) continue; // tiene que haber un alero/techo dibujado arriba (si no, es el interior de un muro)
      fixed.set(j, [f, W.top[li][j], li]); q.push([j, f]);
    }
  }
  const arr = []; for (const [j, [f, t, li]] of fixed) arr.push(j, Math.round(f * 100), Math.round(t * 100), li);
  out[id] = arr; console.log(id, 'celdas fantasma', fixed.size);
}
fs.writeFileSync(new URL('../src/ghosts.js', import.meta.url), '// generado por tools/ghost_walls.mjs: [celda, piso×100, alto×100, capa] por celda\nexport const GHOSTS = ' + JSON.stringify(out) + ';\n');
