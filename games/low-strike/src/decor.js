// Detalles del mapa sin colisión (solo se ven): letras A y B pintadas en el piso y en una pared de cada sitio,
// toldos de tela sobre las calles, ventanas con postigos y marcos, y cables que cruzan de una pared a otra.
// Todo se ubica solo, con una semilla por mapa, así que es igual para todos los jugadores.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { raycast, floorAt } from './world.js';

function rng(seed) { let s = seed | 0; return () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const paint = (g, c) => { g = g.index ? g.toNonIndexed() : g; const n = g.attributes.position.count, a = new Float32Array(n * 3), C = new THREE.Color(c); for (let i = 0; i < n; i++) { a[i * 3] = C.r; a[i * 3 + 1] = C.g; a[i * 3 + 2] = C.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (g.attributes.uv) g.deleteAttribute('uv'); return g; };

// letra pintada con aerosol (textura de canvas)
function letterTex(L, color) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  x.font = '900 210px Impact, "Arial Black", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.shadowColor = color; x.shadowBlur = 10; x.fillStyle = color; x.fillText(L, 128, 140);
  x.shadowBlur = 0; x.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 260; i++) { x.globalAlpha = Math.random() * 0.5; x.beginPath(); x.arc(Math.random() * 256, Math.random() * 256, Math.random() * 3, 0, 7); x.fill(); } // gastado
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const DIRS8 = Array.from({ length: 8 }, (_, i) => [Math.cos(i * Math.PI / 4), Math.sin(i * Math.PI / 4)]);

export function buildDecor(W, nav, mapId, info) {
  const g = new THREE.Group(), r = rng(mapId.length * 131 + 7);
  const dust = mapId === 'dust2';
  // ---------- toldos, ventanas y cables, desde nodos de la zona principal ----------
  const nodes = []; for (let n = 0; n < nav.L * nav.N; n++) if (nav.main[n]) nodes.push(n);
  const aw = [], win = [], frame = [], cab = [], wood = [];
  const used = []; let nAw = 0, nWin = 0, nCab = 0;
  const far = (x, z, d) => used.every(u => Math.hypot(u[0] - x, u[1] - z) > d);
  const awCols = dust ? ['#b5552f', '#c79a4a', '#7c8a5a', '#9b3f2e'] : ['#b8392f', '#2f6c8f', '#d0a23a', '#5c7f3a', '#8a3f6a'];
  for (let k = 0; k < 1400 && (nAw < 16 || nWin < 44 || nCab < 14); k++) {
    const q = nav.pos(nodes[Math.floor(r() * nodes.length)]), x = q[0], y = q[1], z = q[2];
    const [dx, dz] = DIRS8[Math.floor(r() * 4) * 2];
    const hit = raycast(W, x, y + 1.2, z, dx, 0, dz, 3.5);
    if (!hit || Math.abs(hit.ny) > 0.2) continue;
    const wx = x + dx * hit.t, wz = z + dz * hit.t, nx = hit.nx, nz = hit.nz;
    // la pared tiene que seguir arriba (si no, es un murito)
    const up = raycast(W, x, y + 3.2, z, dx, 0, dz, hit.t + 0.4); if (!up) continue;
    const tx = -nz, tz = nx, ang = Math.atan2(nx, nz);
    // la pared tiene que ser plana donde va el detalle (si no, quedaría flotando o metido): 6 rayos de control
    let flat = true;
    for (const [sx, sy] of [[-1.2, 1.6], [1.2, 1.6], [-1.2, 3.2], [1.2, 3.2], [0, 2.4], [0, 3.6]]) {
      const ox = x + tx * sx, oz = z + tz * sx, h2 = raycast(W, ox, y + sy, oz, dx, 0, dz, hit.t + 0.6);
      if (!h2 || Math.abs(h2.t - hit.t) > 0.08 || Math.abs(h2.nx - nx) + Math.abs(h2.nz - nz) > 0.1) { flat = false; break; }
    }
    if (!flat) continue;
    const kind = r();
    if (kind < 0.35 && nAw < 16 && far(wx, wz, 9)) { nAw++;
      // toldo: tela inclinada saliendo de la pared, con rayas y dos soportes
      const w = 2 + r() * 1.6, depth = 1.2 + r() * 0.5, h0 = y + 2.75 + r() * 0.3, c1 = awCols[Math.floor(r() * awCols.length)];
      const stripes = 6;
      for (let i = 0; i < stripes; i++) {
        const seg = new THREE.PlaneGeometry(w / stripes, Math.hypot(depth, 0.45));
        seg.rotateX(-Math.PI / 2 + Math.atan2(0.45, depth)); seg.translate(-w / 2 + (i + 0.5) * w / stripes, -0.225, depth / 2);
        seg.rotateY(ang); seg.translate(wx, h0, wz);
        aw.push(paint(seg, i % 2 ? c1 : '#e8dcc0'));
      }
      for (const s of [-1, 1]) { const rod = new THREE.CylinderGeometry(0.012, 0.012, Math.hypot(depth, 0.6), 6); rod.rotateX(Math.atan2(depth, 0.6) - Math.PI); rod.translate(s * w / 2 * 0.95, -0.3, depth / 2); rod.rotateY(ang); rod.translate(wx, h0, wz); frame.push(paint(rod, '#2a2a2a')); }
      used.push([wx, wz]);
    } else if (kind < 0.8 && nWin < 44 && far(wx, wz, 4)) { nWin++;
      // ventana: hueco oscuro, marco y postigos de madera (en Dust II a veces con rejas)
      const h0 = y + 2.6 + r() * 0.8, ww = 0.8 + r() * 0.3, wh = 1.0 + r() * 0.3, off = 0.02;
      const base = (geo, c, list, dOut = off) => { geo.rotateY(ang); geo.translate(wx + nx * dOut, h0, wz + nz * dOut); list.push(paint(geo, c)); };
      base(new THREE.PlaneGeometry(ww, wh), '#151516', win);
      for (const [fw, fh, fx, fy] of [[ww + 0.12, 0.08, 0, wh / 2], [ww + 0.12, 0.1, 0, -wh / 2], [0.07, wh, -ww / 2, 0], [0.07, wh, ww / 2, 0]]) { const b = new THREE.BoxGeometry(fw, fh, 0.08); b.translate(fx, fy, 0); base(b, dust ? '#a88a60' : '#d8cdb8', frame, 0.04); }
      const sc = dust ? (r() < 0.5 ? '#3f6a7a' : '#7a5a3a') : (r() < 0.5 ? '#2f5f7a' : '#5c7a3a');
      for (const s of [-1, 1]) { const b = new THREE.BoxGeometry(ww / 2, wh, 0.04); b.translate(s * (ww * 0.75 + 0.02), 0, 0.02); base(b, sc, wood, 0.05 + r() * 0.03); }
      if (dust && r() < 0.5) for (let i = 1; i < 4; i++) { const b = new THREE.BoxGeometry(0.02, wh, 0.02); b.translate(-ww / 2 + i * ww / 4, 0, 0.06); base(b, '#2b2b2b', frame, 0.04); }
      used.push([wx, wz]);
    } else if (kind >= 0.8 && nCab < 14 && far(wx, wz, 7)) {
      // cable: de esta pared a la de enfrente, colgando un poco
      const back = raycast(W, wx + nx * 0.1, y + 4.6, wz + nz * 0.1, nx, 0, nz, 14);
      if (!back || back.t < 3) continue;
      const ax = wx + nx * 0.05, az = wz + nz * 0.05, bx = wx + nx * (back.t + 0.05), bz = wz + nz * (back.t + 0.05), yy = y + 4.6;
      const pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector3(ax + (bx - ax) * t, yy - Math.sin(t * Math.PI) * (0.25 + back.t * 0.04), az + (bz - az) * t)); }
      nCab++; cab.push(paint(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.012, 4, false), '#1c1c1c'));
      used.push([wx, wz]);
    }
  }
  const mk = (list, mat) => { if (!list.length) return; const m = new THREE.Mesh(mergeGeometries(list), mat); m.matrixAutoUpdate = false; m.castShadow = false; m.receiveShadow = true; g.add(m); };
  mk(aw, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide }));
  mk(win, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }));
  mk(frame, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }));
  mk(wood, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  mk(cab, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }));
  return g;
}
