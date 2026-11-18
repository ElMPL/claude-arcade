// Texturas generadas por código en alta resolución (512 px), con mapa de relieve (normal map):
// arenisca en bloques, revoque, arena, baldosas de piedra, madera, cajas, hormigón, tejas, metal.
// Todas son repetibles sin costura (el ruido es periódico) y casi blancas: el color lo pone el material.
import * as THREE from 'three';

const S = 512;
function rng(seed) { let s = seed | 0; return () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

// ruido de valor periódico (período p celdas) y fbm
function makeNoise(seed) {
  const P = 256, tab = new Float32Array(P * P), r = rng(seed);
  for (let i = 0; i < P * P; i++) tab[i] = r();
  const sm = t => t * t * (3 - 2 * t);
  const n = (x, y, p) => {
    const xi = Math.floor(x), yi = Math.floor(y), fx = sm(x - xi), fy = sm(y - yi);
    const x0 = ((xi % p) + p) % p, y0 = ((yi % p) + p) % p, x1 = (x0 + 1) % p, y1 = (y0 + 1) % p;
    const a = tab[y0 * P + x0], b = tab[y0 * P + x1], c = tab[y1 * P + x0], d = tab[y1 * P + x1];
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  // u, v en [0,1)
  return (u, v, base = 4, oct = 4, gain = 0.5) => {
    let s = 0, amp = 1, tot = 0, p = base;
    for (let o = 0; o < oct; o++) { s += n(u * p, v * p, p) * amp; tot += amp; amp *= gain; p *= 2; }
    return s / tot;
  };
}

// arma la textura: fn(u, v) → [r, g, b, altura]
function build(fn, normalK = 2.5) {
  const col = new Uint8ClampedArray(S * S * 4), h = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const o = fn(x / S, y / S), i = y * S + x;
    col[i * 4] = o[0] * 255; col[i * 4 + 1] = o[1] * 255; col[i * 4 + 2] = o[2] * 255; col[i * 4 + 3] = 255; h[i] = o[3];
  }
  const nrm = new Uint8ClampedArray(S * S * 4);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const l = h[y * S + (x - 1 + S) % S], r = h[y * S + (x + 1) % S], u = h[((y - 1 + S) % S) * S + x], d = h[((y + 1) % S) * S + x];
    let nx = (l - r) * normalK, ny = (d - u) * normalK, nz = 1; const L = Math.hypot(nx, ny, nz); nx /= L; ny /= L; nz /= L;
    const i = (y * S + x) * 4; nrm[i] = (nx * 0.5 + 0.5) * 255; nrm[i + 1] = (ny * 0.5 + 0.5) * 255; nrm[i + 2] = (nz * 0.5 + 0.5) * 255; nrm[i + 3] = 255;
  }
  const mk = (data, srgb) => {
    const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
    t.generateMipmaps = true; t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t;
  };
  return { map: mk(col, true), normalMap: mk(nrm, false) };
}
const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
const lerp = (a, b, t) => a + (b - a) * t;

const GEN = {
  // arenisca en hiladas: bloques de tamaño variable con color propio, aristas gastadas y redondeadas,
  // esquinas saltadas, vetas horizontales de sedimento, juntas de mortero hundidas
  blocks() {
    const N = makeNoise(11), N2 = makeNoise(12), N3 = makeNoise(13), R = rng(5);
    const rows = 6, rowOff = [], cuts = [], btint = [];
    for (let j = 0; j < rows; j++) { const c = [0]; let x = 0; while (x < 1) { x += 0.2 + R() * 0.22; c.push(Math.min(1, x)); } if (1 - c[c.length - 2] < 0.12) c.splice(c.length - 2, 1); cuts.push(c); rowOff.push(R()); btint.push(c.map(() => [0.84 + R() * 0.2, (R() - 0.5) * 0.05, R(), R()])); }
    return build((u, v) => {
      const j = Math.floor(v * rows), fv = v * rows - j, c = cuts[j];
      const uu = (u + rowOff[j]) % 1; let k = 0; while (k < c.length - 2 && uu > c[k + 1]) k++;
      const a = c[k], b = c[k + 1], fu = (uu - a) / (b - a), [tl, hue, cx, cy] = btint[j][k];
      const ex = Math.min(fu * (b - a) * 9, (1 - fu) * (b - a) * 9), ey = Math.min(fv, 1 - fv) * 1.5;
      const wob = (N(u, v, 32, 3) - 0.5) * 0.07;
      // esquina saltada: un trozo cerca de una de las 4 esquinas del bloque
      const cxp = cx < 0.5 ? fu : 1 - fu, cyp = cy < 0.5 ? fv : 1 - fv, chip = cx > 0.55 && (cxp * (b - a) * 9 + cyp * 1.5) < 0.22 + N3(u, v, 24, 2) * 0.1;
      const edge = Math.min(ex, ey) + wob;
      const grain = N(u, v, 16, 5), strata = N2(u * 0.25, v * 6, 4, 3), fine = N3(u, v, 96, 2);
      let lum = tl * (0.86 + grain * 0.14) + (strata - 0.5) * 0.09 + (fine - 0.5) * 0.04;
      let hgt = 0.62 + grain * 0.28 + (strata - 0.5) * 0.15;
      if (chip) { lum *= 0.84; hgt = 0.3 + fine * 0.1; }
      if (edge < 0.03) { lum *= 0.58; hgt = 0.02; } // junta
      else if (edge < 0.11) { const t = (edge - 0.03) / 0.08, e2 = t * t * (3 - 2 * t); lum *= lerp(0.76, 1, e2); hgt = lerp(0.2, hgt, e2); } // arista redondeada
      const pit = N2(u, v, 64, 2); if (pit > 0.76) { lum *= 0.86; hgt -= 0.18; }
      return [clamp(lum * (1.0 + hue)), clamp(lum * 0.965), clamp(lum * (0.9 - hue)), hgt];
    }, 3.6);
  },
  // revoque: ondulado de llana, manchones grandes, chorreaduras verticales de suciedad,
  // grietas finas y pocos parches grandes donde se cayó el revoque y se ve el ladrillo
  plaster() {
    const N = makeNoise(21), N2 = makeNoise(22), N3 = makeNoise(23), N4 = makeNoise(24);
    return build((u, v) => {
      const big = N(u, v, 2, 4), mid = N4(u, v, 8, 3), fine = N2(u, v, 64, 3), trowel = N2(u * 1.6 + v * 0.4, v * 0.8, 12, 2);
      let lum = 0.86 + (big - 0.5) * 0.22 + (mid - 0.5) * 0.12 + (fine - 0.5) * 0.08 + (trowel - 0.5) * 0.07;
      let hgt = big * 0.25 + trowel * 0.25 + fine * 0.12;
      const drip = N3(u * 1.0, v * 0.12, 6, 3); if (drip > 0.55) lum *= 1 - (drip - 0.55) * 0.6 * (0.4 + v * 0.6);
      const cr = Math.abs(N3(u, v, 5, 5) - 0.5); if (cr < 0.003 && N(u * 2, v * 2, 3, 2) > 0.62) { lum *= 0.9; hgt -= 0.08; }
      const patch = N(u + 0.5, v + 0.3, 2, 4) + (N4(u, v, 16, 2) - 0.5) * 0.08;
      if (patch > 0.7) { // revoque caído: borde levantado y ladrillo atrás
        if (patch < 0.712) { lum *= 0.82; hgt = 0.55; return [clamp(lum), clamp(lum * 0.97), clamp(lum * 0.93), hgt]; }
        const bx = (u * 14 + (Math.floor(v * 28) % 2) * 0.5) % 1, by = (v * 28) % 1;
        const mort = bx < 0.07 || by < 0.14, bt = 0.72 + N4(Math.floor(u * 14) / 14, Math.floor(v * 28) / 28, 64, 1) * 0.16;
        lum = mort ? 0.66 : bt + fine * 0.06; hgt = mort ? -0.25 : -0.05;
        return [clamp(lum * 1.0), clamp(lum * 0.8), clamp(lum * 0.66), hgt];
      }
      return [clamp(lum), clamp(lum * 0.98), clamp(lum * 0.94), hgt];
    }, 2.4);
  },
  // arena con piedritas y ondas
  sand() {
    const N = makeNoise(31), N2 = makeNoise(32), R = rng(9), peb = [];
    for (let i = 0; i < 70; i++) peb.push([R(), R(), 0.002 + R() * 0.006]);
    return build((u, v) => {
      const g = N(u, v, 64, 3), rip = Math.sin((v + N2(u, v, 4, 3) * 0.3) * Math.PI * 28) * 0.5 + 0.5, big = N2(u, v, 4, 3);
      let lum = 0.86 + (g - 0.5) * 0.14 + (big - 0.5) * 0.1 + rip * 0.025, hgt = rip * 0.25 + g * 0.3;
      for (const [px, py, r] of peb) { let dx = Math.abs(u - px), dy = Math.abs(v - py); dx = Math.min(dx, 1 - dx); dy = Math.min(dy, 1 - dy); const d = Math.hypot(dx, dy); if (d < r) { lum = 0.68 + g * 0.15; hgt = 0.7 + (1 - d / r) * 0.5; } else if (d < r * 1.6) lum *= 0.9; }
      return [clamp(lum), clamp(lum * 0.95), clamp(lum * 0.86), hgt];
    }, 2.0);
  },
  // baldosas de piedra irregulares (voronoi) con juntas
  tiles() {
    const N = makeNoise(41), R = rng(4), pts = [];
    const G = 5; for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) pts.push([(i + 0.2 + R() * 0.6) / G, (j + 0.2 + R() * 0.6) / G, 0.85 + R() * 0.15]);
    return build((u, v) => {
      let d1 = 9, d2 = 9, t = 1;
      for (const [px, py, tt] of pts) for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
        const d = Math.hypot(u - px - ox, v - py - oy); if (d < d1) { d2 = d1; d1 = d; t = tt; } else if (d < d2) d2 = d;
      }
      const e = d2 - d1, g = N(u, v, 32, 4);
      let lum = t * (0.84 + g * 0.16), hgt = 0.6 + g * 0.3;
      if (e < 0.01) { lum *= 0.7; hgt = 0; } else if (e < 0.026) { const k = (e - 0.01) / 0.016; lum *= lerp(0.88, 1, k); hgt = lerp(0.2, hgt, k); }
      return [clamp(lum), clamp(lum * 0.97), clamp(lum * 0.92), hgt];
    }, 3.0);
  },
  // losas rectangulares de piedra en hiladas (pisos de Mirage)
  slabs() {
    const N = makeNoise(43), N2 = makeNoise(44), R = rng(8), rows = 8, cuts = [], tint = [];
    for (let j = 0; j < rows; j++) { const c = [0]; let x = 0; while (x < 1) { x += 0.14 + R() * 0.18; c.push(Math.min(1, x)); } if (1 - c[c.length - 2] < 0.08) c.splice(c.length - 2, 1); cuts.push(c); tint.push(c.map(() => 0.86 + R() * 0.14)); }
    return build((u, v) => {
      const j = Math.floor(v * rows), fv = v * rows - j, c = cuts[j]; let k = 0; while (k < c.length - 2 && u > c[k + 1]) k++;
      const a = c[k], b = c[k + 1], fu = (u - a) / (b - a);
      const e = Math.min(fu * (b - a) * rows, (1 - fu) * (b - a) * rows, fv, 1 - fv);
      const g = N(u, v, 32, 4), dirt = N2(u, v, 3, 3);
      let lum = tint[j][k] * (0.82 + g * 0.18) * (0.92 + dirt * 0.12), hgt = 0.6 + g * 0.25 - (1 - Math.min(1, e * 12)) * 0.2;
      if (e < 0.03) { lum *= 0.72; hgt = 0.05; }
      const cr = Math.abs(N2(u * 2, v * 2, 6, 3) - 0.5); if (cr < 0.004) lum *= 0.8;
      return [clamp(lum), clamp(lum * 0.96), clamp(lum * 0.9), hgt];
    }, 2.6);
  },
  // empedrado de piedras redondeadas (calles de Dust II)
  cobble() {
    const N = makeNoise(45), R = rng(14), pts = [];
    const G = 9; for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) pts.push([(i + 0.15 + R() * 0.7) / G, (j + 0.15 + R() * 0.7) / G, 0.8 + R() * 0.2]);
    return build((u, v) => {
      let d1 = 9, d2 = 9, t = 1;
      for (const [px, py, tt] of pts) { let dx = Math.abs(u - px), dy = Math.abs(v - py); dx = Math.min(dx, 1 - dx); dy = Math.min(dy, 1 - dy); if (dx > 0.25 || dy > 0.25) continue; const d = Math.hypot(dx, dy); if (d < d1) { d2 = d1; d1 = d; t = tt; } else if (d < d2) d2 = d; }
      const e = d2 - d1, g = N(u, v, 48, 3), dome = Math.min(1, e * 18);
      let lum = t * (0.76 + g * 0.18) * (0.75 + dome * 0.25), hgt = dome * 0.9 + g * 0.1;
      if (e < 0.01) { lum = 0.62 + g * 0.1; hgt = 0; }
      return [clamp(lum), clamp(lum * 0.92), clamp(lum * 0.8), hgt];
    }, 3.2);
  },
  // piedra natural / zócalos
  stone() {
    const N = makeNoise(51), N2 = makeNoise(52);
    return build((u, v) => {
      const a = N(u, v, 8, 5), b = N2(u, v, 3, 3);
      const lum = 0.74 + a * 0.24 + (b - 0.5) * 0.1;
      return [clamp(lum), clamp(lum * 0.96), clamp(lum * 0.9), a * 0.8 + b * 0.3];
    }, 3.5);
  },
  // madera: tablones con veta
  wood() {
    const N = makeNoise(61), R = rng(6), shade = [];
    for (let i = 0; i < 6; i++) shade.push(0.8 + R() * 0.2);
    return build((u, v) => {
      const k = Math.floor(v * 6), fv = v * 6 - k;
      const grain = Math.sin((u * 40 + N(u, v, 8, 3) * 6 + k * 3) * Math.PI) * 0.5 + 0.5, n = N(u * 0.2, v, 64, 2);
      let lum = shade[k] * (0.82 + grain * 0.1 + n * 0.08), hgt = 0.5 + grain * 0.15;
      if (fv < 0.04 || fv > 0.96) { lum *= 0.45; hgt = 0; }
      const knot = N(u + 0.3, v, 6, 2); if (knot > 0.8) lum *= 0.8;
      return [clamp(lum), clamp(lum * 0.86), clamp(lum * 0.7), hgt];
    }, 2.5);
  },
  // caja de madera: marco, diagonal y tablas
  crate() {
    const N = makeNoise(71);
    return build((u, v) => {
      const fr = Math.min(u, v, 1 - u, 1 - v), diag = Math.abs(u - v), diag2 = Math.abs(u + v - 1);
      const plank = (v * 5) % 1, grain = N(u, v * 0.2, 32, 3);
      let lum = 0.78 + grain * 0.14, hgt = 0.4 + grain * 0.1;
      if (plank < 0.04) { lum *= 0.55; hgt = 0.1; }
      if (fr < 0.09 || diag < 0.06) { lum = 0.86 + grain * 0.1; hgt = 0.9; if (fr < 0.09 && fr > 0.08) lum *= 0.6; }
      if (diag2 < 0.004) lum *= 0.9;
      if ((Math.abs(fr - 0.045) < 0.012) && ((u * 8) % 1 < 0.08 || (v * 8) % 1 < 0.08)) { lum = 0.35; hgt = 1; } // clavos
      return [clamp(lum), clamp(lum * 0.84), clamp(lum * 0.66), hgt];
    }, 3.0);
  },
  // hormigón con paneles y agujeros de encofrado
  concrete() {
    const N = makeNoise(81), N2 = makeNoise(82);
    return build((u, v) => {
      const g = N(u, v, 32, 4), b = N2(u, v, 4, 3);
      let lum = 0.8 + (g - 0.5) * 0.12 + (b - 0.5) * 0.12, hgt = g * 0.3;
      if (u % 0.5 < 0.006 || v % 0.5 < 0.006) { lum *= 0.75; hgt = 0; }
      for (const [x, y] of [[0.125, 0.125], [0.375, 0.125], [0.125, 0.375], [0.375, 0.375]]) { const d = Math.hypot((u % 0.5) - x, (v % 0.5) - y); if (d < 0.012) { lum *= 0.55; hgt = -0.3; } }
      return [clamp(lum), clamp(lum), clamp(lum * 0.97), hgt];
    }, 2.5);
  },
  // tejas árabes (canal): franjas onduladas superpuestas
  roof() {
    const N = makeNoise(91);
    return build((u, v) => {
      const cx = (u * 8) % 1, cy = (v * 8) % 1, wave = Math.sin(cx * Math.PI);
      let lum = 0.72 + wave * 0.26 + (N(u, v, 32, 3) - 0.5) * 0.12, hgt = wave * 0.7 + (1 - cy) * 0.25;
      if (cy < 0.06) { lum *= 0.55; hgt = -0.2; }
      return [clamp(lum), clamp(lum * 0.92), clamp(lum * 0.86), hgt];
    }, 3.0);
  },
  // chapa acanalada
  metal() {
    const N = makeNoise(95);
    return build((u, v) => {
      const r = Math.sin(u * Math.PI * 24) * 0.5 + 0.5, g = N(u, v, 16, 4);
      const rust = N(u + 0.2, v, 4, 4) > 0.66;
      let lum = 0.7 + r * 0.25 + (g - 0.5) * 0.1;
      return rust ? [clamp(lum * 0.9), clamp(lum * 0.6), clamp(lum * 0.4), r * 0.5] : [clamp(lum), clamp(lum), clamp(lum), r * 0.5];
    }, 2.0);
  },
  // tela (ropa de los personajes)
  fabric() {
    const N = makeNoise(99);
    return build((u, v) => {
      const w = (Math.sin(u * Math.PI * 160) * Math.sin(v * Math.PI * 160)) * 0.5 + 0.5, g = N(u, v, 16, 3);
      const lum = 0.85 + w * 0.08 + (g - 0.5) * 0.12;
      return [clamp(lum), clamp(lum), clamp(lum), w * 0.3];
    }, 1.5);
  },
};
const CACHE = {};
export function hiTex(kind) {
  if (CACHE[kind]) return CACHE[kind];
  const g = GEN[kind] || GEN.stone;
  return (CACHE[kind] = g());
}
// material estándar con textura y relieve
export function texMat(kind, opt = {}) {
  const t = kind ? hiTex(kind) : null;
  return new THREE.MeshStandardMaterial({
    vertexColors: true, map: t ? t.map : null, normalMap: t ? t.normalMap : null,
    normalScale: new THREE.Vector2(opt.bump ?? 1, opt.bump ?? 1), roughness: opt.rough ?? 0.92, metalness: opt.metal ?? 0, side: opt.side ?? THREE.FrontSide,
  });
}
