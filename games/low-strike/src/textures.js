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
  // arenisca en hiladas: bloques de tamaño variable, juntas hundidas, bordes gastados, vetas
  blocks() {
    const N = makeNoise(11), N2 = makeNoise(12), R = rng(5);
    const rows = 6, rowOff = [], cuts = [];
    for (let j = 0; j < rows; j++) { const c = [0]; let x = 0; while (x < 1) { x += 0.22 + R() * 0.2; c.push(Math.min(1, x)); } if (1 - c[c.length - 2] < 0.12) c.splice(c.length - 2, 1); cuts.push(c); rowOff.push(R()); }
    return build((u, v) => {
      const j = Math.floor(v * rows), fv = v * rows - j, c = cuts[j];
      const uu = (u + rowOff[j]) % 1; let k = 0; while (k < c.length - 2 && uu > c[k + 1]) k++;
      const a = c[k], b = c[k + 1], fu = (uu - a) / (b - a);
      const ex = Math.min(fu * (b - a) * 9, (1 - fu) * (b - a) * 9), ey = Math.min(fv, 1 - fv) * 1.5;
      const edge = Math.min(ex, ey) + (N(u, v, 32, 3) - 0.5) * 0.06; // borde irregular
      const tint = 0.9 + ((j * 7 + k * 13) % 11) / 11 * 0.12;
      const grain = N(u, v, 16, 5), streak = N2(u * 0.3, v * 3, 8, 3);
      let lum = tint * (0.86 + grain * 0.16) + (streak - 0.5) * 0.06;
      let hgt = 0.6 + grain * 0.35;
      if (edge < 0.035) { lum *= 0.62; hgt = 0.05; } else if (edge < 0.08) { const t = (edge - 0.035) / 0.045; lum *= lerp(0.8, 1, t); hgt = lerp(0.25, hgt, t); }
      const pit = N2(u, v, 64, 2); if (pit > 0.78) { lum *= 0.85; hgt -= 0.2; }
      return [clamp(lum * 1.0), clamp(lum * 0.97), clamp(lum * 0.92), hgt];
    }, 3.2);
  },
  // revoque: ondulado suave, manchas, grietas finas y partes descascaradas con ladrillo
  plaster() {
    const N = makeNoise(21), N2 = makeNoise(22), N3 = makeNoise(23);
    return build((u, v) => {
      const big = N(u, v, 3, 4), fine = N2(u, v, 48, 3);
      let lum = 0.88 + (big - 0.5) * 0.14 + (fine - 0.5) * 0.06, hgt = big * 0.4 + fine * 0.12;
      const cr = Math.abs(N3(u, v, 5, 5) - 0.5); if (cr < 0.004 && N(u * 2, v * 2, 3, 2) > 0.55) { lum *= 0.82; hgt -= 0.1; }
      const stain = N3(u + 0.37, v * 0.5, 4, 3); if (stain > 0.6) lum *= 1 - (stain - 0.6) * 0.25;
      const chip = N(u + 0.5, v + 0.3, 5, 4);
      if (chip > 0.79) { // revoque caído: se ven ladrillos
        const bx = (u * 16 + (Math.floor(v * 32) % 2) * 0.5) % 1, by = (v * 32) % 1;
        const mort = bx < 0.08 || by < 0.16; lum = mort ? 0.7 : 0.78 + fine * 0.1; hgt = mort ? -0.2 : 0.05;
        return [clamp(lum * 1.02), clamp(lum * 0.86), clamp(lum * 0.74), hgt];
      }
      return [clamp(lum), clamp(lum * 0.985), clamp(lum * 0.95), hgt];
    }, 2.2);
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
