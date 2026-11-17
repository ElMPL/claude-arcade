// Modelos low-poly: armas (perfiles extruidos, con acabados de skin), personajes con skins,
// y brazos que agarran el arma con IK de dos huesos (en primera y en tercera persona).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { WEAPONS } from './weapons.js';

export const MAT = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
const MAT_VM = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
const TMP = new THREE.Color();

// ---------------- utilidades de geometría ----------------
function paint(g, col) {
  g = g.index ? g.toNonIndexed() : g;
  g.computeVertexNormals();
  const n = g.attributes.position.count, arr = new Float32Array(n * 3), nor = g.attributes.normal.array;
  TMP.set(col);
  for (let i = 0; i < n; i++) {
    const k = 0.8 + nor[i * 3 + 1] * 0.2 + nor[i * 3] * 0.06;
    arr[i * 3] = TMP.r * k; arr[i * 3 + 1] = TMP.g * k; arr[i * 3 + 2] = TMP.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'color') g.deleteAttribute(k);
  return g;
}
// perfil lateral [[adelante, alto], ...] extruido con ancho w (el arma mira hacia -z, la mano en el origen)
function prof(pts, w, col, x = 0) {
  const sh = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], p[1])));
  const g = new THREE.ExtrudeGeometry(sh, { depth: w, bevelEnabled: false, steps: 1, curveSegments: 3 });
  g.translate(0, 0, -w / 2); g.rotateY(Math.PI / 2); g.translate(x, 0, 0);
  return paint(g, col);
}
function cyl(r, u0, u1, y, col, sides = 7, x = 0, r2 = r) {
  const g = new THREE.CylinderGeometry(r2, r, u1 - u0, sides); g.rotateX(-Math.PI / 2); g.translate(x, y, -(u0 + u1) / 2);
  return paint(g, col);
}
function box(w, h, len, u, y, col, x = 0) {
  const g = new THREE.BoxGeometry(w, h, len); g.translate(x, y, -u);
  return paint(g, col);
}

// ---------------- acabados (skins de armas) ----------------
export const FINISHES = [
  { name: 'Original', b: null, w: null, sw: '#3a3c40' },
  { name: 'Desierto', b: '#b59a6c', w: '#8a6c44', sw: '#b59a6c' },
  { name: 'Bosque', b: '#4f6040', w: '#3d4a30', sw: '#4f6040' },
  { name: 'Ártico', b: '#dfe4ea', w: '#b9c2cc', sw: '#dfe4ea' },
  { name: 'Neón', b: '#2b1f47', w: '#ff3fa4', sw: '#ff3fa4' },
  { name: 'Oro', b: '#c9a23a', w: '#6b4a24', sw: '#c9a23a' },
  { name: 'Carmesí', b: '#7a1a1a', w: '#2a1a1a', sw: '#9a2020' },
  { name: 'Cobalto', b: '#1f3f8a', w: '#9aa6b8', sw: '#2f5fc0' },
];
export const finOf = (fin, id) => (fin && typeof fin === 'object' ? (fin[id] | 0) : (fin | 0));

// ---------------- armas ----------------
const DRK = '#34373c', WOOD = '#8b5a2e', WOOD2 = '#6e4423', MET = '#5a5f66';
// devuelve { parts: [[geo, rol]], fore, muzzle }; rol: b cuerpo, w culata/cargador, m metal
function design(id) {
  const P = [], add = (g, r = 'm') => P.push([g, r]);
  let fore = null, muzzle = [0.3, 0.05];
  const pistolGrip = (col, ang = 0.28, len = 0.11, wdt = 0.032) => add(prof([[0.03, 0.02], [-0.02, 0.02], [-0.02 - Math.sin(ang) * len, 0.02 - len], [0.03 - Math.sin(ang) * len, 0.02 - len]], wdt, col), 'w');
  switch (id) {
    // ---------- rifles ----------
    case 'ak47': case 'galil': case 'sg553': {
      const wood = id === 'ak47' ? WOOD : id === 'galil' ? '#4b4635' : '#55543f', body = id === 'ak47' ? '#2c2d2f' : id === 'galil' ? '#3a3830' : '#4a4a3e';
      add(prof([[-0.07, 0.02], [0.27, 0.02], [0.27, 0.095], [-0.07, 0.095]], 0.046, body), 'b');
      add(prof([[-0.07, 0.09], [-0.44, 0.07], [-0.46, -0.06], [-0.41, -0.07], [-0.2, 0.0], [-0.07, 0.02]], 0.038, wood), 'w');
      add(prof([[0.27, 0.025], [0.5, 0.035], [0.5, 0.09], [0.27, 0.095]], 0.05, wood), 'w');
      add(prof([[0.27, 0.098], [0.53, 0.105], [0.53, 0.125], [0.27, 0.12]], 0.026, DRK), 'm');
      add(cyl(0.011, 0.5, 0.72, 0.065, '#1c1d1f'));
      add(box(0.006, 0.05, 0.012, 0.66, 0.1, '#1c1d1f'));
      add(cyl(0.016, 0.69, 0.75, 0.065, '#1c1d1f', 6));
      add(box(0.02, 0.025, 0.04, 0.2, 0.105, '#1c1d1f'));
      if (id === 'sg553') add(cyl(0.02, -0.02, 0.14, 0.14, '#1d1d1d', 8));
      pistolGrip(id === 'ak47' ? WOOD2 : '#2a2a2a');
      add(prof([[0.09, 0.02], [0.17, 0.02], [0.27, -0.17], [0.19, -0.19]], 0.032, id === 'ak47' ? '#7a4f2a' : '#2b2b2b'), 'w');
      add(prof([[0.04, 0.02], [0.08, 0.02], [0.08, -0.025], [0.04, -0.03]], 0.008, '#1c1d1f'), 'm');
      fore = [0.38, 0.03]; muzzle = [0.75, 0.065];
      break;
    }
    case 'm4a4': case 'm4a1s': case 'famas': case 'aug': {
      if (id === 'famas' || id === 'aug') { // bullpup
        const body = id === 'aug' ? '#5d6a52' : '#3c4248';
        add(prof([[-0.36, 0.0], [0.28, 0.0], [0.32, 0.08], [0.28, 0.11], [-0.36, 0.11], [-0.38, 0.05]], 0.055, body), 'b');
        if (id === 'famas') add(prof([[-0.2, 0.11], [0.2, 0.11], [0.22, 0.16], [-0.18, 0.16]], 0.016, body), 'b');
        else add(cyl(0.022, -0.06, 0.12, 0.15, '#1d1d1d', 8));
        add(cyl(0.011, 0.3, 0.52, 0.05, '#1c1d1f'));
        pistolGrip('#2a2a2a', 0.2);
        add(prof([[-0.18, 0.0], [-0.1, 0.0], [-0.08, -0.15], [-0.16, -0.16]], 0.03, '#262626'), 'w');
        add(prof([[0.12, 0.0], [0.17, 0.0], [0.15, -0.09], [0.11, -0.09]], 0.03, body), 'b');
        fore = [0.14, -0.03]; muzzle = [0.52, 0.05];
      } else {
        const body = '#2f3236';
        add(prof([[-0.06, 0.02], [0.24, 0.02], [0.24, 0.1], [-0.06, 0.1]], 0.046, body), 'b');
        add(prof([[-0.06, 0.1], [0.24, 0.1], [0.24, 0.12], [-0.06, 0.12]], 0.028, '#1f2124'), 'm');
        add(cyl(0.012, -0.32, -0.06, 0.075, '#25272a', 6));
        add(prof([[-0.2, 0.1], [-0.38, 0.1], [-0.38, -0.02], [-0.3, -0.02], [-0.2, 0.05]], 0.036, '#222428'), 'w');
        add(prof([[0.24, 0.025], [0.5, 0.03], [0.5, 0.105], [0.24, 0.105]], 0.05, '#2a2c30'), 'b');
        add(box(0.012, 0.045, 0.012, 0.5, 0.13, '#1c1d1f'));
        add(box(0.03, 0.02, 0.03, 0.0, 0.135, '#1c1d1f'));
        if (id === 'm4a1s') { add(cyl(0.011, 0.5, 0.55, 0.065, '#1c1d1f')); add(cyl(0.022, 0.55, 0.82, 0.065, '#1a1b1d', 10)); muzzle = [0.82, 0.065]; }
        else { add(cyl(0.011, 0.5, 0.7, 0.065, '#1c1d1f')); add(cyl(0.015, 0.66, 0.72, 0.065, '#1c1d1f', 6)); muzzle = [0.72, 0.065]; }
        pistolGrip('#232427', 0.3);
        add(prof([[0.09, 0.02], [0.155, 0.02], [0.18, -0.15], [0.115, -0.155]], 0.03, '#26272a'), 'w');
        fore = [0.38, 0.03];
      }
      break;
    }
    // ---------- francotiradores ----------
    case 'awp': case 'ssg08': case 'g3sg1': case 'scar20': {
      const body = id === 'awp' ? '#3f5b3a' : id === 'ssg08' ? '#3e4c5e' : id === 'g3sg1' ? '#2d302d' : '#2b2e33';
      const big = id === 'awp' ? 1.15 : 1;
      add(prof([[-0.52, 0.04], [-0.3, 0.06], [-0.1, 0.03], [0.4, 0.03], [0.42, 0.09], [-0.06, 0.1 * big], [-0.22, 0.1 * big], [-0.52, 0.09 * big], [-0.54, -0.07], [-0.44, -0.08], [-0.2, -0.05], [-0.08, -0.06], [-0.06, 0.0]], 0.05 * big, body), 'b');
      add(prof([[-0.14, 0.04], [-0.24, 0.04], [-0.24, -0.02], [-0.14, -0.02]], 0.052 * big, '#0d0d0d'), 'm');
      add(cyl(0.013 * big, 0.4, id === 'awp' ? 1.05 : 0.92, 0.065, '#1c1d1f', 7, 0, 0.011 * big));
      add(cyl(0.028 * big, -0.08, 0.26, 0.15 * big, '#191a1c', 10));
      add(cyl(0.036 * big, 0.2, 0.3, 0.15 * big, '#191a1c', 10, 0, 0.028 * big));
      add(cyl(0.033 * big, -0.14, -0.07, 0.15 * big, '#191a1c', 10, 0, 0.026 * big));
      add(box(0.016, 0.05, 0.02, 0.02, 0.12 * big, '#1c1d1f')); add(box(0.016, 0.05, 0.02, 0.18, 0.12 * big, '#1c1d1f'));
      if (id === 'awp' || id === 'ssg08') add(box(0.06, 0.012, 0.012, -0.04, 0.09, '#2a2a2a', 0.04));
      if (id === 'g3sg1' || id === 'scar20') add(prof([[0.06, 0.03], [0.12, 0.03], [0.13, -0.12], [0.07, -0.12]], 0.03, '#222'), 'w');
      else add(prof([[0.06, 0.03], [0.12, 0.03], [0.12, -0.04], [0.06, -0.04]], 0.03, '#222'), 'w');
      fore = [0.3, 0.02]; muzzle = [id === 'awp' ? 1.05 : 0.92, 0.065];
      break;
    }
    // ---------- subfusiles ----------
    case 'p90': {
      add(prof([[-0.22, 0.02], [0.28, 0.02], [0.32, 0.07], [0.3, 0.11], [-0.22, 0.12], [-0.25, -0.04], [-0.12, -0.08], [-0.05, -0.02], [0.02, -0.08], [0.1, -0.08], [0.12, 0.02]], 0.06, '#3a3c3e'), 'b');
      add(prof([[-0.18, 0.12], [0.2, 0.12], [0.2, 0.15], [-0.18, 0.15]], 0.04, '#2a2a2a'), 'm');
      add(cyl(0.011, 0.3, 0.38, 0.06, '#1c1d1f'));
      fore = [0.12, -0.04]; muzzle = [0.38, 0.06];
      break;
    }
    case 'mac10': {
      add(prof([[-0.05, 0.02], [0.2, 0.02], [0.2, 0.11], [-0.05, 0.11]], 0.06, '#2a2b2e'), 'b');
      add(cyl(0.012, 0.2, 0.27, 0.07, '#1c1d1f'));
      add(prof([[-0.01, 0.02], [0.04, 0.02], [0.04, -0.2], [-0.01, -0.2]], 0.03, '#222'), 'w');
      add(box(0.004, 0.06, 0.14, -0.12, 0.08, '#1c1d1f', 0.02));
      fore = [0.17, 0.0]; muzzle = [0.27, 0.07];
      break;
    }
    case 'mp9': case 'mp7': case 'ump': case 'mp5': case 'bizon': {
      const len = id === 'ump' || id === 'mp5' || id === 'bizon' ? 0.36 : 0.28, body = id === 'mp7' ? '#3a3d3f' : '#2a2c30';
      add(prof([[-0.06, 0.02], [len, 0.02], [len, 0.1], [-0.06, 0.1]], 0.05, body), 'b');
      add(prof([[-0.06, 0.09], [-0.28, 0.08], [-0.28, 0.0], [-0.24, 0.0], [-0.06, 0.04]], 0.03, '#1f2124'), 'w');
      pistolGrip('#232427', 0.25);
      if (id === 'bizon') add(cyl(0.03, 0.06, 0.32, -0.01, '#2b2b2b', 8));
      else add(prof([[0.07, 0.02], [0.12, 0.02], [id === 'mp5' ? 0.16 : 0.12, -0.15], [id === 'mp5' ? 0.11 : 0.07, -0.15]], 0.028, '#222'), 'w');
      if (id === 'mp5') { add(cyl(0.022, len, len + 0.18, 0.06, '#1a1b1d', 10)); muzzle = [len + 0.18, 0.06]; }
      else { add(cyl(0.011, len, len + 0.06, 0.06, '#1c1d1f')); muzzle = [len + 0.06, 0.06]; }
      fore = [len * 0.75, 0.01];
      break;
    }
    // ---------- escopetas y ametralladoras ----------
    case 'nova': case 'xm1014': case 'sawedoff': case 'mag7': {
      const short = id === 'sawedoff' || id === 'mag7', len = short ? 0.42 : 0.68;
      add(prof([[-0.05, 0.02], [0.18, 0.02], [0.18, 0.1], [-0.05, 0.1]], 0.05, '#2b2d30'), 'b');
      add(cyl(0.016, 0.18, len, 0.075, '#1c1d1f', 8));
      add(cyl(0.014, 0.18, len - 0.06, 0.04, '#1f2022', 8));
      add(prof([[0.24, 0.01], [0.46, 0.01], [0.46, 0.06], [0.24, 0.06]], 0.045, id === 'sawedoff' ? WOOD : '#2a2a2a'), 'w');
      if (id === 'mag7') add(prof([[0.04, 0.02], [0.12, 0.02], [0.12, -0.14], [0.04, -0.14]], 0.04, '#2a2a2a'), 'w');
      if (id === 'sawedoff') add(prof([[-0.05, 0.08], [-0.12, 0.06], [-0.18, -0.08], [-0.1, -0.09], [-0.05, 0.02]], 0.035, WOOD), 'w');
      else if (id !== 'mag7') add(prof([[-0.05, 0.09], [-0.42, 0.06], [-0.44, -0.07], [-0.38, -0.08], [-0.05, 0.02]], 0.04, id === 'nova' ? '#2a2a2a' : '#26272a'), 'w');
      else pistolGrip('#232427');
      fore = [0.35, 0.0]; muzzle = [len, 0.075];
      break;
    }
    case 'm249': case 'negev': {
      add(prof([[-0.1, 0.02], [0.32, 0.02], [0.32, 0.13], [-0.1, 0.13]], 0.07, '#3a3d36'), 'b');
      add(prof([[-0.1, 0.1], [-0.44, 0.08], [-0.44, -0.06], [-0.1, 0.02]], 0.04, '#26272a'), 'w');
      add(cyl(0.016, 0.32, 0.82, 0.07, '#1c1d1f', 8));
      add(prof([[0.32, 0.03], [0.55, 0.03], [0.55, 0.1], [0.32, 0.1]], 0.06, '#2b2b2b'), 'b');
      add(box(0.1, 0.12, 0.13, 0.12, -0.04, '#3b3b2e', 0.05));
      pistolGrip('#232427');
      fore = [0.45, 0.02]; muzzle = [0.82, 0.07];
      break;
    }
    // ---------- pistolas ----------
    case 'deagle': case 'r8': {
      if (id === 'r8') {
        add(cyl(0.012, 0.03, 0.24, 0.07, MET, 8));
        add(cyl(0.03, -0.01, 0.05, 0.05, MET, 6));
        add(prof([[-0.04, 0.02], [0.04, 0.02], [0.04, 0.08], [-0.04, 0.08]], 0.03, MET), 'b');
        pistolGrip(WOOD, 0.35, 0.1, 0.03);
        muzzle = [0.24, 0.07];
      } else {
        add(prof([[-0.05, 0.035], [0.2, 0.035], [0.21, 0.06], [0.2, 0.092], [-0.05, 0.092]], 0.032, '#9aa0a8'), 'b');
        add(prof([[-0.04, 0.0], [0.17, 0.0], [0.17, 0.035], [-0.04, 0.035]], 0.03, '#8a9098'), 'b');
        add(box(0.012, 0.012, 0.01, 0.195, 0.1, '#1c1d1f'));
        pistolGrip('#26272a', 0.25, 0.11, 0.036);
        muzzle = [0.21, 0.065];
      }
      break;
    }
    case 'zeus': {
      add(prof([[-0.04, 0.02], [0.13, 0.02], [0.14, 0.07], [-0.04, 0.07]], 0.04, '#2a3a6a'), 'b');
      add(box(0.045, 0.035, 0.02, 0.14, 0.045, '#e6c84a'));
      pistolGrip('#222', 0.25, 0.09);
      muzzle = [0.15, 0.045];
      break;
    }
    case 'knife': { // cuchillo táctico: mango engomado, guarda y hoja con punta
      add(prof([[-0.12, -0.012], [-0.005, -0.014], [-0.005, 0.014], [-0.12, 0.012], [-0.13, 0.0]], 0.024, '#1f2023'), 'w');
      add(prof([[-0.005, -0.03], [0.012, -0.03], [0.012, 0.024], [-0.005, 0.024]], 0.03, '#3a3c40'), 'm');
      add(prof([[0.012, -0.016], [0.17, -0.012], [0.215, 0.006], [0.17, 0.016], [0.06, 0.016], [0.012, 0.016]], 0.005, '#c9cfd6'), 'b');
      add(prof([[0.03, 0.016], [0.16, 0.016], [0.16, 0.019], [0.03, 0.019]], 0.007, '#8d949c'), 'm');
      muzzle = [0.21, 0];
      break;
    }
    case 'he': add(paint(new THREE.IcosahedronGeometry(0.037, 0), '#3d4a2c')); add(box(0.016, 0.02, 0.016, 0, 0.04, '#999')); add(box(0.008, 0.05, 0.016, -0.02, 0.025, '#aaa', 0.03)); break;
    case 'flash': add(cyl(0.028, -0.055, 0.055, 0, '#a0a8b2', 8)); add(box(0.016, 0.02, 0.016, 0, 0.032, '#777')); break;
    case 'smoke': add(cyl(0.03, -0.065, 0.065, 0, '#5a6670', 8)); add(box(0.02, 0.012, 0.02, 0, 0.034, '#888')); break;
    case 'decoy': add(cyl(0.026, -0.05, 0.05, 0, '#6b6b5b', 6)); break;
    case 'incendiary': add(cyl(0.028, -0.06, 0.06, 0, '#a2552c', 8)); break;
    case 'molotov': add(cyl(0.03, -0.06, 0.04, 0, '#5d7a3a', 8)); add(cyl(0.012, 0.04, 0.1, 0, '#4d6a2a', 6)); add(cyl(0.016, 0.1, 0.13, 0, '#e8d6b0', 5)); break;
    case 'c4': add(box(0.2, 0.06, 0.13, 0, 0, '#b8a27a')); add(box(0.07, 0.03, 0.05, 0.01, 0.04, '#1d1d1d', 0.03)); add(box(0.05, 0.012, 0.03, 0.01, 0.058, '#5bdc6d', 0.03)); add(box(0.18, 0.02, 0.02, -0.04, 0.035, '#a33')); break;
    case 'defuser': add(box(0.16, 0.05, 0.1, 0, 0, '#2d3a55')); add(box(0.04, 0.04, 0.12, 0, 0.03, '#d4b13a', 0.05)); break;
    default: { // pistolas comunes
      const col = id === 'dualies' ? '#9aa0a8' : id === 'fiveseven' ? '#4b4f55' : id === 'tec9' ? '#2d2f33' : '#34373c';
      const L = id === 'tec9' ? 0.22 : 0.18;
      add(prof([[-0.04, 0.032], [L, 0.032], [L, 0.075], [-0.03, 0.075], [-0.045, 0.06]], 0.028, col), 'b');
      add(prof([[-0.035, 0.0], [L - 0.02, 0.0], [L - 0.02, 0.032], [-0.035, 0.032]], 0.026, '#222428'), 'm');
      pistolGrip(id === 'cz75' ? '#3a2a1a' : '#202124', 0.22, 0.1, 0.03);
      if (id === 'tec9') add(prof([[0.06, 0.0], [0.1, 0.0], [0.1, -0.16], [0.06, -0.16]], 0.024, '#202124'), 'w');
      if (id === 'usp') { add(cyl(0.017, L, L + 0.15, 0.055, '#1a1b1d', 10)); muzzle = [L + 0.15, 0.055]; }
      else muzzle = [L, 0.055];
      add(box(0.008, 0.012, 0.008, L - 0.01, 0.082, '#111'));
    }
  }
  // ---------- detalles finos por arma ----------
  const rib = (x0, x1, y, n, w, col = '#141516', h = 0.006, d = 0.006) => { for (let i = 0; i < n; i++) add(box(w, h, d, x0 + (x1 - x0) * (n > 1 ? i / (n - 1) : 0), y, col)); };
  if (id === 'ak47' || id === 'galil' || id === 'sg553') {
    add(cyl(0.012, 0.27, 0.5, 0.13, '#2a2b2d', 8)); // tubo de gases
    add(box(0.05, 0.03, 0.03, 0.26, 0.122, '#1c1d1f')); // alza
    add(box(0.008, 0.012, 0.03, 0.08, 0.06, '#151617', 0.026)); // palanca selectora
    rib(-0.05, 0.22, 0.098, 6, 0.05, '#232426', 0.004, 0.008); // nervios de la tapa
    for (let i = 0; i < 4; i++) add(box(0.034, 0.006, 0.006, 0.13 + i * 0.028, -0.04 - i * 0.035, '#1e1f21')); // nervios del cargador
    add(box(0.05, 0.016, 0.02, 0.48, 0.03, '#1c1d1f')); // abrazadera
  }
  if (id === 'm4a4' || id === 'm4a1s') {
    for (let i = 0; i < 12; i++) add(box(0.03, 0.008, 0.006, -0.05 + i * 0.026, 0.126, '#121314')); // riel picatinny
    for (let i = 0; i < 4; i++) for (const sd of [-0.026, 0.026]) add(box(0.004, 0.012, 0.022, 0.29 + i * 0.05, 0.065, '#121314', sd)); // ventilaciones del guardamanos
    add(prof([[0.48, 0.105], [0.5, 0.17], [0.505, 0.17], [0.52, 0.105]], 0.012, '#1c1d1f'), 'm'); // mira delantera
    add(box(0.03, 0.012, 0.03, -0.07, 0.112, '#1c1d1f')); // manija de carga
    add(cyl(0.008, 0.12, 0.15, 0.08, '#1c1d1f', 6, 0.03)); // asistente de cierre
    for (let i = 0; i < 4; i++) add(box(0.04, 0.006, 0.005, -0.33 + i * 0.07, 0.065, '#121314', 0.016)); // posiciones de la culata
    for (let i = 0; i < 3; i++) add(box(0.032, 0.005, 0.005, 0.13 + i * 0.03, -0.05 - i * 0.03, '#1b1c1e')); // nervios del cargador
  }
  if (id === 'famas' || id === 'aug') { rib(-0.2, 0.2, 0.114, 8, 0.012, '#1a1b1c', 0.005, 0.03); add(box(0.02, 0.03, 0.06, 0.25, 0.06, '#1a1b1c')); }
  if (id === 'awp' || id === 'ssg08' || id === 'scar20' || id === 'g3sg1') {
    const big = id === 'awp' ? 1.15 : 1;
    add(paint(new THREE.CircleGeometry(0.031 * big, 12).rotateY(Math.PI).translate(0, 0.15 * big, -0.302), '#3a6f9a')); // lente delantera
    add(paint(new THREE.CircleGeometry(0.025 * big, 12).translate(0, 0.15 * big, 0.142), '#1d3a55')); // ocular
    add(cyl(0.01, 0.05, 0.08, 0.17 * big, '#161718', 8, 0.0)); // perilla de elevación
    add(box(0.03, 0.012, 0.012, -0.12, 0.08, '#1c1d1f', 0.05)); add(paint(new THREE.SphereGeometry(0.013, 6, 4).translate(0.06, 0.08, 0.12), '#222')); // manija del cerrojo
    if (id === 'awp') { add(box(0.012, 0.03, 0.02, 0.36, 0.03, '#1c1d1f')); rib(0.43, 0.6, 0.065, 4, 0.012, '#121314', 0.032, 0.03); } // base del bípode y freno
  }
  if (id === 'deagle' || ['glock', 'usp', 'p2000', 'p250', 'fiveseven', 'cz75', 'dualies', 'tec9'].includes(id)) {
    const top = id === 'deagle' ? 0.092 : 0.075, rear = id === 'deagle' ? -0.045 : -0.035;
    for (let i = 0; i < 5; i++) for (const sd of [-0.017, 0.017]) add(box(0.004, 0.03, 0.004, rear + 0.006 + i * 0.009, top - 0.02, '#0f1011', sd * (id === 'deagle' ? 1.05 : 0.95))); // estrías de la corredera
    add(box(0.012, 0.016, 0.01, rear - 0.004, top - 0.004, '#111')); // martillo / mira trasera
  }
  if (id === 'nova' || id === 'xm1014') for (let i = 0; i < 5; i++) add(box(0.006, 0.05, 0.05, 0.27 + i * 0.04, 0.035, '#151515')); // estrías de la corredera
  if (['mp9', 'mp7', 'ump', 'mp5', 'bizon', 'mac10', 'p90'].includes(id)) { rib(-0.02, 0.18, 0.105, 7, 0.016, '#121314', 0.006, 0.02); add(box(0.024, 0.012, 0.012, 0.02, 0.07, '#111', 0.03)); }
  if (id === 'm249' || id === 'negev') { rib(-0.06, 0.28, 0.135, 10, 0.02, '#151615', 0.008, 0.03); add(cyl(0.008, 0.6, 0.65, 0.115, '#1c1d1f', 6)); }
  // detalles comunes: guardamonte, gatillo, ventana de expulsión y miras
  const wpn = WEAPONS[id];
  if (wpn && wpn.dmg && wpn.cat !== 'knife' && wpn.cat !== 'equip') {
    const pist = wpn.cat === 'pistol';
    add(prof([[0.025, 0.0], [0.07, 0.0], [0.07, -0.006], [0.06, -0.035], [0.025, -0.035], [0.025, -0.029], [0.057, -0.029], [0.064, -0.006], [0.025, -0.006]], 0.008, '#18191b'), 'm');
    add(box(0.004, 0.02, 0.008, 0.045, -0.012, '#0e0e0f'));
    if (!pist) add(box(0.004, 0.022, 0.07, 0.1, 0.07, '#0b0b0c', 0.026));
    else add(box(0.004, 0.012, 0.05, 0.06, 0.06, '#0b0b0c', 0.016));
  }
  return { parts: P, fore, muzzle };
}
const gcache = new Map(), icache = new Map();
export function gunInfo(id) { if (!icache.has(id)) { const d = design(id); icache.set(id, { fore: d.fore, muzzle: d.muzzle }); } return icache.get(id); }
export function gunGeo(id, finish = 0) {
  const key = id + ':' + finish;
  if (gcache.has(key)) return gcache.get(key);
  const d = design(id), F = FINISHES[finish] || FINISHES[0];
  const isGun = WEAPONS[id] && WEAPONS[id].dmg;
  const geos = d.parts.map(([g, role]) => {
    if (!F.b || !isGun || (role !== 'b' && role !== 'w') || (id === 'knife' && role === 'w')) return g;
    const g2 = g.clone(); const c = new THREE.Color(role === 'b' ? F.b : F.w);
    const col = g2.attributes.color.array, nor = g2.attributes.normal.array;
    for (let i = 0; i < col.length / 3; i++) { const k = 0.8 + nor[i * 3 + 1] * 0.2 + nor[i * 3] * 0.06; col[i * 3] = c.r * k; col[i * 3 + 1] = c.g * k; col[i * 3 + 2] = c.b * k; }
    return g2;
  });
  const g = mergeGeometries(geos);
  gcache.set(key, g); if (!icache.has(id)) icache.set(id, { fore: d.fore, muzzle: d.muzzle });
  return g;
}
export function gunMesh(id, finish = 0) { return new THREE.Mesh(gunGeo(id, finish), MAT); }

// ---------------- personajes ----------------
// Un solo modelo por bando, inspirado en los clásicos: T con pasamontañas, campera de cuero y chaleco de
// cargadores (estilo Fénix); CT con casco, antiparras, máscara de gas y chaleco táctico (estilo SAS).
export const SKINS = {
  T: [{ name: 'Terrorista', shirt: '#4e3b2b', pants: '#363b43', vest: '#3b3426', glove: '#1c1c1c', boots: '#2a241d', skin: '#c49670', head: 'balaclava', hc: '#1b1b1b' }],
  CT: [{ name: 'Contraterrorista', shirt: '#30342f', pants: '#2c302c', vest: '#3e443a', glove: '#151515', boots: '#141414', skin: '#c49670', head: 'sas', hc: '#262a26' }],
};
export const skinOf = (team) => (SKINS[team] || SKINS.T)[0];
const pcache = {};
function bodyGeos(team) {
  const key = team; if (pcache[key]) return pcache[key];
  const S = skinOf(team), T = team === 'T';
  const tb = [
    box(0.4, 0.5, 0.24, 0, 0.27, S.shirt), // torso
    box(0.5, 0.12, 0.26, 0, 0.47, S.shirt), // hombros
    box(0.42, 0.07, 0.26, 0, 0.03, '#26221c'), box(0.06, 0.06, 0.04, 0.13, 0.03, '#8a7a50'), // cinturón y hebilla
  ];
  if (T) {
    // campera abierta + chaleco de cargadores con 3 bolsillos y radio
    tb.push(box(0.08, 0.46, 0.02, 0.125, 0.27, '#2e241a', -0.12), box(0.08, 0.46, 0.02, 0.125, 0.27, '#2e241a', 0.12)); // solapas
    tb.push(box(0.36, 0.2, 0.27, 0, 0.27, S.vest), box(0.06, 0.32, 0.27, 0, 0.38, S.vest, 0.13), box(0.06, 0.32, 0.27, 0, 0.38, S.vest, -0.13));
    for (const zx of [-0.1, 0, 0.1]) tb.push(box(0.085, 0.13, 0.05, 0.155, 0.27, '#4a4130', zx), box(0.075, 0.03, 0.055, 0.157, 0.33, '#2a251c', zx));
    tb.push(box(0.05, 0.1, 0.04, 0.13, 0.42, '#1b1b1b', 0.12), box(0.01, 0.06, 0.01, 0.13, 0.5, '#111', 0.13)); // radio y antena
    tb.push(box(0.3, 0.3, 0.1, -0.17, 0.3, '#3a3326')); // mochila chica
  } else {
    // chaleco portaplacas con bolsillos, parches y cuello alto
    tb.push(box(0.44, 0.38, 0.29, 0, 0.32, S.vest), box(0.3, 0.1, 0.3, 0, 0.5, S.vest));
    for (const zx of [-0.11, 0, 0.11]) tb.push(box(0.09, 0.12, 0.05, 0.165, 0.22, '#353a31', zx));
    tb.push(box(0.12, 0.08, 0.04, 0.165, 0.38, '#2a2e27', -0.08), box(0.06, 0.04, 0.01, 0.17, 0.4, '#8a8f84', 0.09)); // bolsillo y parche
    tb.push(box(0.14, 0.12, 0.07, 0.12, 0.42, '#20231f', 0.15)); // radio al hombro
    tb.push(box(0.44, 0.36, 0.05, -0.15, 0.32, S.vest)); // placa trasera
    // manchas de camuflaje
    tb.push(box(0.12, 0.1, 0.245, 0, 0.1, '#3b4038', 0.1), box(0.1, 0.08, 0.245, 0, 0.16, '#24271f', -0.12));
  }
  const torso = mergeGeometries(tb);
  const hb = [box(0.22, 0.25, 0.23, 0, 0.12, S.skin)];
  const hc = S.hc;
  // los detalles de la cara van hacia adelante (-z = u positivo)
  if (T) {
    hb.push(box(0.235, 0.265, 0.245, 0, 0.125, hc)); // pasamontañas
    hb.push(box(0.17, 0.05, 0.02, 0.122, 0.15, S.skin)); // ranura de los ojos
    hb.push(box(0.035, 0.022, 0.01, 0.133, 0.152, '#111', -0.05), box(0.035, 0.022, 0.01, 0.133, 0.152, '#111', 0.05));
    hb.push(box(0.25, 0.05, 0.26, 0, 0.255, '#141414')); // costura de arriba
    hb.push(box(0.2, 0.045, 0.03, 0.105, 0.225, '#23303a'), box(0.25, 0.02, 0.25, 0, 0.225, '#111')); // antiparras levantadas en la frente
  } else {
    hb.push(box(0.27, 0.13, 0.28, 0, 0.235, hc), box(0.29, 0.03, 0.3, 0, 0.18, hc)); // casco con ala
    hb.push(box(0.03, 0.05, 0.08, 0, 0.21, '#1c1f1b', 0.145), box(0.03, 0.05, 0.08, 0, 0.21, '#1c1f1b', -0.145)); // rieles
    hb.push(box(0.05, 0.04, 0.04, 0.1, 0.3, '#111')); // soporte NVG
    hb.push(box(0.21, 0.065, 0.04, 0.125, 0.155, '#0e0e0e'), box(0.17, 0.04, 0.01, 0.146, 0.156, '#33424a')); // antiparras
    hb.push(box(0.22, 0.12, 0.06, 0.12, 0.07, '#1d1f1d')); // máscara de gas
    hb.push(box(0.06, 0.07, 0.07, 0.15, 0.04, '#3c3f3a', -0.075), box(0.06, 0.07, 0.07, 0.15, 0.04, '#3c3f3a', 0.075)); // filtros
    hb.push(box(0.04, 0.05, 0.03, 0.16, 0.06, '#555'));
  }
  const head = mergeGeometries(hb);
  const thigh = mergeGeometries([box(0.15, 0.46, 0.16, 0, -0.23, S.pants), box(0.04, 0.12, 0.1, 0, -0.2, T ? '#2b2f35' : S.vest, 0.09), ...(T ? [] : [box(0.1, 0.16, 0.06, 0.02, -0.15, '#20231f', 0.085)])]);
  const shin = mergeGeometries([box(0.14, 0.42, 0.15, 0, -0.21, S.pants), box(0.16, 0.1, 0.06, 0.06, -0.04, T ? '#1f1f1f' : '#191b19'), box(0.16, 0.12, 0.24, 0.04, -0.4, S.boots), box(0.17, 0.03, 0.25, 0.04, -0.46, '#0f0f0f')]);
  const upper = box(0.12, 0.12, 1, 0, 0, S.shirt), fore = box(0.105, 0.105, 1, 0, 0, S.shirt);
  const hand = mergeGeometries([box(0.09, 0.09, 0.1, 0, 0, S.glove)]);
  return (pcache[key] = { torso, head, thigh, shin, upper, fore, hand, S });
}
// modelo del jugador: mira hacia -z, pies en y=0. Los brazos se resuelven con IK hacia el arma.
export function makePlayerModel(team, si = 0) {
  const G = bodyGeos(team);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.92; body.add(hips);
  const legs = [];
  for (const sx of [-0.11, 0.11]) {
    const hip = new THREE.Group(); hip.position.set(sx, 0, 0); hips.add(hip);
    hip.add(new THREE.Mesh(G.thigh, MAT));
    const knee = new THREE.Group(); knee.position.y = -0.46; hip.add(knee);
    knee.add(new THREE.Mesh(G.shin, MAT));
    legs.push({ hip, knee });
  }
  const chest = new THREE.Group(); hips.add(chest);
  chest.add(new THREE.Mesh(G.torso, MAT));
  const neck = new THREE.Group(); neck.position.y = 0.53; chest.add(neck);
  neck.add(new THREE.Mesh(G.head, MAT));
  const gun = new THREE.Group(); gun.matrixAutoUpdate = true; chest.add(gun);
  const arms = [];
  for (let k = 0; k < 2; k++) { const u = new THREE.Mesh(G.upper, MAT), f = new THREE.Mesh(G.fore, MAT), h = new THREE.Mesh(G.hand, MAT); chest.add(u, f, h); arms.push({ u, f, h }); }
  root.userData = { body, hips, legs, chest, neck, gun, arms, gunId: null, phase: 0, team, si };
  return root;
}
export function setModelGun(root, id, finish = 0) {
  const u = root.userData, key = id + ':' + finish; if (u.gunId === key) return; u.gunId = key;
  u.gun.clear(); u.info = id ? gunInfo(id) : null; u.wid = id;
  if (id) { const m = gunMesh(id, finish); m.scale.setScalar(1.12); u.gun.add(m); if (id === 'dualies') { const m2 = gunMesh(id, finish); m2.scale.setScalar(1.12); m2.position.x = -0.24; u.gun.add(m2); } }
}
// IK de dos huesos: hombro S, objetivo T, largos a y b, polo → codo (out); devuelve el objetivo alcanzable
const vA = new THREE.Vector3(), vB = new THREE.Vector3(), vC = new THREE.Vector3(), vD = new THREE.Vector3(), vE = new THREE.Vector3();
function ik(S, T, a, b, pole, out) {
  vA.subVectors(T, S); let d = vA.length(); const maxd = (a + b) * 0.995;
  if (d > maxd) { vA.multiplyScalar(maxd / d); d = maxd; }
  const T2 = vB.copy(S).add(vA);
  const x = (a * a - b * b + d * d) / (2 * d), h = Math.sqrt(Math.max(0, a * a - x * x));
  const dir = vC.copy(vA).normalize();
  const pv = vD.copy(pole).sub(S); pv.sub(vE.copy(dir).multiplyScalar(pv.dot(dir))).normalize();
  out.copy(S).addScaledVector(dir, x).addScaledVector(pv, h);
  return T2;
}
const UPV = new THREE.Vector3(0, 1, 0), mtx = new THREE.Matrix4();
function placeSeg(mesh, A, B) {
  const L = A.distanceTo(B);
  mesh.position.copy(A).add(B).multiplyScalar(0.5);
  mtx.lookAt(A, B, UPV); mesh.quaternion.setFromRotationMatrix(mtx);
  mesh.scale.set(1, 1, Math.max(0.01, L));
}
const sh = new THREE.Vector3(), tg = new THREE.Vector3(), el = new THREE.Vector3(), pl = new THREE.Vector3();
// pose: speed (m/s), duck (0..1), pitch, onGround, dead (0..1)
export function poseModel(root, o, dt) {
  const u = root.userData;
  u.phase += dt * Math.min(o.speed, 6) * 2.4;
  const amp = Math.min(1, o.speed / 3) * 0.6, sw = Math.sin(u.phase) * amp;
  const d = o.duck;
  u.hips.position.y = 0.92 - d * 0.36;
  const [L, R] = u.legs;
  L.hip.rotation.x = sw - d * 1.2; R.hip.rotation.x = -sw - d * 1.2;
  L.knee.rotation.x = Math.max(0, -Math.sin(u.phase) * amp) * 1.2 + d * 2.0; R.knee.rotation.x = Math.max(0, Math.sin(u.phase) * amp) * 1.2 + d * 2.0;
  if (!o.onGround) { L.hip.rotation.x = -0.6; R.hip.rotation.x = 0.2; L.knee.rotation.x = 0.9; R.knee.rotation.x = 0.4; }
  u.chest.rotation.x = d * 0.2;
  const p = Math.max(-1.2, Math.min(1.2, o.pitch));
  u.neck.rotation.x = p * 0.55;
  const info = u.info, cat = u.wid ? (WEAPONS[u.wid]?.cat || u.wid) : null;
  const pistol = cat === 'pistol' || u.wid === 'zeus';
  // el arma va delante del pecho, a la altura del hombro derecho, y sigue el pitch
  if (cat === 'knife' || cat === 'grenade' || cat === 'c4' || u.wid === 'defuser') { u.gun.position.set(0.27, 0.16, -0.22); u.gun.rotation.set(p * 0.5 + 0.3, 0, 0); }
  else { const r = pistol ? 0.42 : 0.28; u.gun.position.set(0.11, 0.4 + Math.sin(p) * r, -Math.cos(p) * r); u.gun.rotation.set(p, 0, 0); }
  u.gun.updateMatrix();
  for (let k = 0; k < 2; k++) {
    const A = u.arms[k], right = k === 0;
    sh.set(right ? 0.24 : -0.24, 0.46, 0);
    let target = null;
    if (info) {
      if (right) target = tg.set(0, 0, cat === 'knife' ? 0.06 : 0).applyMatrix4(u.gun.matrix);
      else if (info.fore && cat !== 'knife') target = tg.set(0, info.fore[1] * 1.12 - 0.02, -info.fore[0] * 1.12).applyMatrix4(u.gun.matrix);
      else if (u.wid === 'dualies') target = tg.set(-0.24, 0, 0).applyMatrix4(u.gun.matrix);
      else if (pistol) target = tg.set(-0.04, -0.04, 0.02).applyMatrix4(u.gun.matrix);
    }
    if (!target) target = tg.set(right ? 0.3 : -0.3, 0.02, -0.05 + sw * 0.15 * (right ? -1 : 1));
    pl.set(right ? 0.7 : -0.7, -0.5, 0.4);
    const T2 = ik(sh, target, 0.29, 0.27, pl, el);
    placeSeg(A.u, sh, el); placeSeg(A.f, el, T2);
    A.h.position.copy(T2); A.h.quaternion.copy(A.f.quaternion);
  }
  u.body.rotation.x = 0; u.body.position.y = 0;
  if (o.dead > 0) { const k = Math.min(1, o.dead); u.body.rotation.x = k * 1.45; u.body.position.y = k * 0.15; }
}

// ---------------- primera persona ----------------
export function makeViewModel() {
  const g = new THREE.Group();
  const hold = new THREE.Group(); g.add(hold);
  const gun = new THREE.Group(); hold.add(gun);
  const arms = [];
  for (let k = 0; k < 2; k++) { const u = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1), MAT_VM), f = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 1), MAT_VM), h = new THREE.Group(); g.add(u, f, h); arms.push({ u, f, h }); }
  g.userData = { hold, gun, arms, id: null, team: null };
  return g;
}
const armCache = {};
function vmParts(team, si) {
  const key = team + si; if (armCache[key]) return armCache[key];
  const S = skinOf(team, si);
  const sleeve = box(0.07, 0.07, 1, 0, 0, S.shirt);
  const forearm = mergeGeometries([box(0.058, 0.058, 1, 0, 0, S.shirt), box(0.066, 0.066, 0.14, 0.43, 0, S.vest)]);
  // mano cerrada sobre la empuñadura: palma, nudillos y pulgar
  const hand = mergeGeometries([box(0.05, 0.065, 0.07, 0, -0.01, S.glove), box(0.056, 0.024, 0.042, 0.012, -0.038, S.glove), box(0.022, 0.022, 0.05, 0.016, 0.026, S.glove, 0.026)]);
  return (armCache[key] = { sleeve, forearm, hand });
}
export function setViewGun(vm, id, team, si = 0, finish = 0) {
  const u = vm.userData, key = id + team + si + ':' + finish; if (u.key === key) return; u.key = key; u.id = id; u.team = team;
  u.gun.clear();
  for (const a of u.arms) a.h.clear();
  if (!id) return;
  const cat = WEAPONS[id]?.cat || id;
  const m = new THREE.Mesh(gunGeo(id, finish), MAT_VM); u.gun.add(m);
  u.dual = id === 'dualies';
  if (u.dual) { const m2 = new THREE.Mesh(gunGeo(id, finish), MAT_VM); m2.position.set(-0.21, 0.0, 0.02); m2.rotation.y = -0.08; u.gun.add(m2); }
  u.info = gunInfo(id); u.cat = cat;
  const P = vmParts(team, si);
  for (const a of u.arms) { a.u.geometry = P.sleeve; a.f.geometry = P.forearm; a.h.add(new THREE.Mesh(P.hand, MAT_VM)); }
  // dónde se sostiene respecto de la cámara
  u.base = id === 'dualies' ? [0.12, -0.15, -0.48] : cat === 'pistol' || id === 'zeus' ? [0.15, -0.125, -0.44] : cat === 'knife' ? [0.17, -0.18, -0.4] : cat === 'grenade' || cat === 'c4' || id === 'defuser' ? [0.16, -0.17, -0.38] : cat === 'sniper' ? [0.19, -0.22, -0.55] : [0.19, -0.2, -0.43];
  u.rot = cat === 'knife' ? [0.35, 0.55, -0.25] : cat === 'grenade' || cat === 'c4' ? [0.1, 0.2, 0] : [0.03, 0.07, 0];
  vm.traverse(o => { o.renderOrder = 10; o.frustumCulled = false; });
}
// ubica los brazos (cada cuadro, después de mover hold)
const vS = new THREE.Vector3(), vT = new THREE.Vector3(), vEl = new THREE.Vector3(), vP = new THREE.Vector3(), gm = new THREE.Matrix4();
export function updateViewArms(vm) {
  const u = vm.userData; if (!u.id) return;
  u.hold.updateMatrix(); u.gun.updateMatrix();
  gm.multiplyMatrices(u.hold.matrix, u.gun.matrix);
  const info = u.info || {}, cat = u.cat;
  for (let k = 0; k < 2; k++) {
    const A = u.arms[k], right = k === 0;
    vS.set(right ? 0.2 : -0.22, -0.3, 0.12);
    let T = null;
    if (right) T = vT.set(0.004, -0.012, cat === 'knife' ? 0.065 : 0).applyMatrix4(gm);
    else if (info.fore && cat !== 'knife') T = vT.set(-0.004, info.fore[1] - 0.03, -info.fore[0]).applyMatrix4(gm);
    else if (u.dual) T = vT.set(-0.206, -0.012, 0.02).applyMatrix4(gm);
    else if (cat === 'pistol' || u.id === 'zeus') T = vT.set(-0.035, -0.065, 0.025).applyMatrix4(gm);
    const vis = !!T;
    A.u.visible = A.f.visible = A.h.visible = vis;
    if (!vis) continue;
    vP.set(right ? 0.6 : -0.65, -0.7, 0.3);
    const T2 = ik(vS, T, 0.4, 0.4, vP, vEl);
    placeSeg(A.u, vS, vEl); placeSeg(A.f, vEl, T2);
    A.h.position.copy(T2);
    A.h.quaternion.setFromRotationMatrix(gm);
    if (!right && !u.dual) A.h.rotateZ(0.35);
  }
}
