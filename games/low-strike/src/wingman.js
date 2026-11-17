// Modo 2v2 (estilo "Wingman"): se juega en un solo sitio y se cierran con barricadas las zonas del
// mapa que no forman parte de los caminos entre los spawns y ese sitio, como en el juego real.
import * as THREE from 'three';
import { zoneNodes, findPath } from './nav.js';
import { texFor } from './mesher.js';

// Dijkstra sobre la grilla de navegación desde un conjunto de nodos
// rev: lista de aristas invertidas (distancia HASTA las semillas, respetando caídas de un solo sentido)
function dist(nav, seeds, rev = null) {
  const T = nav.L * nav.N, d = new Float64Array(T).fill(Infinity); let nb = [];
  const heap = []; // [costo, nodo] — montículo binario simple
  const push = (c, n) => { heap.push([c, n]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (; ;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  for (const s of seeds) { d[s] = 0; push(0, s); }
  while (heap.length) {
    const [c, u] = pop(); if (c > d[u]) continue;
    if (rev) nb = rev.get(u) || []; else nav.neighbors(u, nb);
    for (let k = 0; k < nb.length; k += 2) { const v = nb[k], nc = c + nb[k + 1]; if (nav.main[v] && nc < d[v]) { d[v] = nc; push(nc, v); } }
  }
  return d;
}

// Modifica W (bloquea celdas y deja una sola zona de bomba) y devuelve las celdas cerradas para dibujarlas.
export function applyWingman(W, nav) {
  const sT = zoneNodes(nav, 16), sC = zoneNodes(nav, 32), sA = zoneNodes(nav, 4), sB = zoneNodes(nav, 8);
  if (!sT.length || !sC.length || !sA.length || !sB.length) return null;
  const tmp = [];
  const dT = dist(nav, sT), dC = dist(nav, sC);
  const best = (list, d) => list.reduce((m, n) => Math.min(m, d[n]), Infinity);
  // sitio que queda: el que tiene el recorrido más parejo y corto para los dos equipos
  const score = l => Math.max(best(l, dT), best(l, dC)) + 0.3 * (best(l, dT) + best(l, dC));
  const site = score(sA) <= score(sB) ? 'A' : 'B';
  const sS = site === 'A' ? sA : sB;
  // zona permitida: los caminos reales (A*) entre spawns y sitio en ambos sentidos, más un margen, más
  // un círculo alrededor de cada spawn y del sitio
  const T = nav.L * nav.N, allowed = new Uint8Array(T);
  const ctr = list => { let x = 0, y = 0, z = 0; for (const n of list) { const p = nav.pos(n); x += p[0]; y += p[1]; z += p[2]; } const k = list.length; return nav.nearest(x / k, y / k, z / k); };
  const cT = ctr(sT), cC = ctr(sC), cS = ctr(sS);
  const seeds = [];
  for (const [a, b] of [[cT, cS], [cS, cT], [cC, cS], [cS, cC], [cT, cC], [cC, cT]]) {
    const path = findPath(nav, a, b); if (!path) continue;
    for (const q of path) { const n = nav.nearest(q[0], q[1], q[2]); if (n >= 0) seeds.push([n, 16]); }
  }
  for (const n of sT) seeds.push([n, 14]); for (const n of sC) seeds.push([n, 14]); for (const n of sS) seeds.push([n, 16]);
  // inundación limitada por pasos desde cada semilla
  const left = new Int8Array(T).fill(-1), q = [];
  for (const [n, r] of seeds) if (r > left[n]) { left[n] = r; q.push(n); }
  while (q.length) { const u = q.pop(); allowed[u] = 1; if (left[u] <= 0) continue; nav.neighbors(u, tmp); for (let k = 0; k < tmp.length; k += 2) { const v = tmp[k]; if (nav.main[v] && left[u] - 1 > left[v]) { left[v] = left[u] - 1; q.push(v); } } }
  // se agranda un anillo la zona permitida para que la barricada no le coma espacio a los pasillos
  const nb = [], block = new Set();
  const grow = Uint8Array.from(allowed);
  for (let n = 0; n < T; n++) if (allowed[n]) { nav.neighbors(n, nb); for (let k = 0; k < nb.length; k += 2) if (nav.main[nb[k]]) grow[nb[k]] = 1; }
  allowed.set(grow);
  // barricada: cada nodo caminable vecino de la zona permitida que no esté permitido
  for (let n = 0; n < T; n++) {
    if (!allowed[n]) continue;
    nav.neighbors(n, nb);
    for (let k = 0; k < nb.length; k += 2) { const v = nb[k]; if (!allowed[v] && nav.main[v]) block.add(v); }
  }
  const cells = [];
  for (const v of block) {
    const l = Math.floor(v / nav.N), i = v % nav.N, x = i % nav.m, z = Math.floor(i / nav.m), h = nav.H[l][i];
    for (let dz = 0; dz < nav.k; dz++) for (let dx = 0; dx < nav.k; dx++) {
      const cx = x * nav.k + dx, cz = z * nav.k + dz, ci = cz * W.n + cx;
      // la columna de esa capa se vuelve pared de 3 m sobre el piso (la capa más cercana a la altura del nodo)
      let li = -1, bd = 0.35; for (let q = 0; q < W.L; q++) { const t = W.top[q][ci]; if (!isNaN(t) && Math.abs(t - h) < bd) { bd = Math.abs(t - h); li = q; } }
      if (li < 0) continue;
      // no tapar un camino permitido que pase por arriba o por abajo en la misma columna
      let clash = false; for (let q = 0; q < nav.L && !clash; q++) { const nn = q * nav.N + i; if (allowed[nn] && Math.abs(nav.H[q][i] - h) < 3.4 && nn !== v) clash = true; }
      if (clash) continue;
      const top = W.top[li][ci];
      const above = li + 1 < W.L && !isNaN(W.bot[li + 1][ci]) ? W.bot[li + 1][ci] : Infinity;
      W.top[li][ci] = Math.min(top + 3.2, above); W.cls[li][ci] = 3;
      cells.push([cx, cz, top, Math.min(3.2, above - top)]);
    }
  }
  // solo queda una zona para plantar
  const kill = site === 'A' ? 8 : 4;
  for (let i = 0; i < W.flags.length; i++) W.flags[i] &= ~kill;
  return { site, cells };
}

// barricadas de madera con franjas de peligro
export function wingmanMesh(W, cells) {
  const g = new THREE.BoxGeometry(1, 1, 1);
  const pos = [], nor = [], uv = [], col = [];
  const P = g.attributes.position.array, N = g.attributes.normal.array, U = g.attributes.uv.array, I = g.index.array;
  const seg = (x0, z0, y0, y1, c) => {
    for (let k = 0; k < I.length; k++) {
      const j = I[k];
      const px = x0 + (P[j * 3] + 0.5) * W.cell, py = y0 + (P[j * 3 + 1] + 0.5) * (y1 - y0), pz = z0 + (P[j * 3 + 2] + 0.5) * W.cell;
      pos.push(px, py, pz); nor.push(N[j * 3], N[j * 3 + 1], N[j * 3 + 2]); uv.push((px + pz) / 1.2, py / 1.2); col.push(c[0], c[1], c[2]);
    }
  };
  for (const [cx, cz, y, hgt] of cells) {
    const x0 = cx * W.cell, z0 = cz * W.cell, stripe = ((cx + cz) >> 2) & 1;
    // tablones abajo, franja amarilla y negra de peligro, tablones arriba
    if (hgt < 1.4) { seg(x0, z0, y, y + hgt, [0.78, 0.62, 0.42]); continue; }
    seg(x0, z0, y, y + 1.0, [0.78, 0.62, 0.42]);
    seg(x0, z0, y + 1.0, y + 1.3, stripe ? [0.95, 0.75, 0.15] : [0.14, 0.14, 0.14]);
    seg(x0, z0, y + 1.3, y + hgt, [0.72, 0.57, 0.38]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: texFor('crate'), vertexColors: true }));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
