// Modelos de poligonado medio: armas (perfiles extruidos con biseles), personajes redondeados,
// y brazos que agarran el arma con IK de dos huesos (en primera y en tercera persona).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { WEAPONS } from './weapons.js';

export const MAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0.04 });
const MAT_VM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.15 });
const TMP = new THREE.Color();

// ---------------- utilidades de geometría ----------------
function paint(g, col) {
  if (!g.attributes.normal) g.computeVertexNormals();
  g = g.index ? g.toNonIndexed() : g;
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
  // bisel chico en los bordes: el arma deja de verse como recortada en cartón
  const bv = Math.min(0.006, w * 0.18);
  const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(0.001, w - bv * 2), bevelEnabled: true, bevelThickness: bv, bevelSize: bv * 0.8, bevelSegments: 2, steps: 1, curveSegments: 8 });
  g.translate(0, 0, -w / 2 + bv); g.rotateY(Math.PI / 2); g.translate(x, 0, 0);
  return paint(g, col);
}
function cyl(r, u0, u1, y, col, sides = 7, x = 0, r2 = r) {
  const g = new THREE.CylinderGeometry(r2, r, u1 - u0, Math.max(14, sides * 2)); g.rotateX(-Math.PI / 2); g.translate(x, y, -(u0 + u1) / 2);
  return paint(g, col);
}
function box(w, h, len, u, y, col, x = 0) {
  const g = new THREE.BoxGeometry(w, h, len); g.translate(x, y, -u);
  return paint(g, col);
}
// caja con esquinas redondeadas (cuerpos, chalecos, botas)
function rbox(w, h, len, u, y, col, x = 0, r = Math.min(w, h, len) * 0.3) {
  const g = new RoundedBoxGeometry(w, h, len, 2, Math.min(r, Math.min(w, h, len) * 0.49)); g.translate(x, y, -u);
  return paint(g, col);
}
// elipsoide (cabezas, cascos, hombros)
function ell(rx, ry, rz, u, y, col, x = 0, half = false) {
  const g = new THREE.SphereGeometry(1, 18, 12, 0, Math.PI * 2, 0, half ? Math.PI / 2 : Math.PI); g.scale(rx, ry, rz); g.translate(x, y, -u);
  return paint(g, col);
}
// cilindro vertical (piernas)
function vcyl(rTop, rBot, h, y, col, u = 0, x = 0) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, 14); g.translate(x, y, -u);
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
    case 'ak47': {
      // AK-47 de CS: madera rojiza, receptor estampado con tapa redondeada, cargador curvo y freno de boca inclinado
      const W1 = '#8c4a22', W2 = '#6e3519', ST = '#2a2b2d', BK = '#1a1b1d';
      add(prof([[-0.07, 0.022], [0.27, 0.022], [0.27, 0.088], [-0.07, 0.088], [-0.08, 0.06]], 0.044, ST), 'b'); // receptor
      add(cyl(0.022, -0.06, 0.26, 0.085, '#2f3033', 10)); // tapa del cerrojo (arriba redondeada)
      add(box(0.03, 0.012, 0.03, 0.255, 0.112, BK)); add(prof([[0.24, 0.098], [0.28, 0.098], [0.28, 0.122], [0.25, 0.118]], 0.03, BK), 'm'); // base del alza
      // culata: baja y se ensancha hacia atrás, con cantonera
      add(prof([[-0.07, 0.085], [-0.18, 0.07], [-0.44, 0.045], [-0.46, -0.075], [-0.4, -0.08], [-0.2, -0.02], [-0.07, 0.022]], 0.04, W1), 'w');
      add(prof([[-0.44, 0.045], [-0.47, 0.045], [-0.475, -0.08], [-0.46, -0.08]], 0.043, BK), 'm');
      // guardamanos inferior con ranuras para los dedos y superior sobre el tubo de gases
      add(prof([[0.27, 0.024], [0.3, 0.02], [0.52, 0.026], [0.53, 0.07], [0.27, 0.07]], 0.05, W1), 'w');
      for (let i = 0; i < 3; i++) add(box(0.052, 0.006, 0.014, 0.33 + i * 0.06, 0.03, W2));
      add(cyl(0.019, 0.29, 0.47, 0.105, W1, 10)); add(cyl(0.012, 0.47, 0.56, 0.105, '#2a2b2d', 8));
      add(box(0.05, 0.016, 0.02, 0.28, 0.08, BK)); add(box(0.05, 0.016, 0.02, 0.525, 0.06, BK)); // abrazaderas
      add(cyl(0.011, 0.5, 0.72, 0.066, '#1c1d1f', 8)); // caño
      add(prof([[0.66, 0.076], [0.675, 0.13], [0.685, 0.13], [0.695, 0.076]], 0.01, BK), 'm'); // mira delantera
      add(cyl(0.016, 0.7, 0.76, 0.066, BK, 8, 0, 0.014)); // freno de boca
      // cargador curvo
      const mag = []; for (let i = 0; i <= 8; i++) { const t = i / 8, a = t * 0.55; mag.push([0.09 + Math.sin(a) * 0.38 * t * 0.5 + t * 0.06, 0.022 - t * 0.2]); }
      const back = mag.map(([x, y], i) => [x + 0.078 - (i / 8) * 0.01, y]).reverse();
      add(prof([...mag, ...back], 0.03, '#2e2416'), 'w');
      for (let i = 1; i < 5; i++) add(box(0.033, 0.005, 0.006, mag[i * 2][0] + 0.03, mag[i * 2][1], '#1c1712'));
      pistolGrip(W2, 0.3, 0.1, 0.03);
      add(box(0.008, 0.012, 0.03, 0.08, 0.06, '#151617', 0.026)); // selector
      fore = [0.4, 0.03]; muzzle = [0.76, 0.066];
      break;
    }
    case 'galil': case 'sg553': {
      const wood = id === 'galil' ? '#4b4635' : '#55543f', body = id === 'galil' ? '#3a3830' : '#4a4a3e';
      add(prof([[-0.07, 0.02], [0.27, 0.02], [0.27, 0.095], [-0.07, 0.095]], 0.046, body), 'b');
      add(prof([[-0.07, 0.09], [-0.44, 0.07], [-0.46, -0.06], [-0.41, -0.07], [-0.2, 0.0], [-0.07, 0.02]], 0.038, wood), 'w');
      add(prof([[0.27, 0.025], [0.5, 0.035], [0.5, 0.09], [0.27, 0.095]], 0.05, wood), 'w');
      add(prof([[0.27, 0.098], [0.53, 0.105], [0.53, 0.125], [0.27, 0.12]], 0.026, DRK), 'm');
      add(cyl(0.011, 0.5, 0.72, 0.065, '#1c1d1f'));
      add(box(0.006, 0.05, 0.012, 0.66, 0.1, '#1c1d1f'));
      add(cyl(0.016, 0.69, 0.75, 0.065, '#1c1d1f', 6));
      add(box(0.02, 0.025, 0.04, 0.2, 0.105, '#1c1d1f'));
      if (id === 'sg553') add(cyl(0.02, -0.02, 0.14, 0.14, '#1d1d1d', 8));
      pistolGrip('#2a2a2a');
      add(prof([[0.09, 0.02], [0.17, 0.02], [0.27, -0.17], [0.19, -0.19]], 0.032, '#2b2b2b'), 'w');
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
        // M4: receptor superior con riel, inferior con brocal, guardamanos redondo ventilado, culata retráctil
        const UP = '#2c2f33', LO = '#33363a', PL = '#202225', BK = '#151617';
        add(prof([[-0.07, 0.06], [0.25, 0.06], [0.25, 0.108], [-0.07, 0.108]], 0.044, UP), 'b'); // superior
        add(prof([[-0.07, 0.062], [0.2, 0.062], [0.19, 0.02], [-0.05, 0.016], [-0.08, 0.036]], 0.042, LO), 'b'); // inferior
        add(prof([[0.03, 0.022], [0.17, 0.022], [0.17, -0.005], [0.03, -0.005]], 0.046, LO), 'b'); // brocal
        add(box(0.026, 0.012, 0.32, 0.09, 0.115, '#1d1f22')); // riel
        add(cyl(0.027, 0.25, 0.5, 0.075, PL, 12)); // guardamanos
        add(cyl(0.031, 0.245, 0.27, 0.075, BK, 12)); // anillo
        add(cyl(0.012, -0.36, -0.07, 0.075, '#25272a', 10)); // tubo de la culata
        add(prof([[-0.22, 0.1], [-0.38, 0.098], [-0.39, -0.03], [-0.33, -0.032], [-0.3, 0.04], [-0.22, 0.055]], 0.04, PL), 'w');
        add(prof([[0.48, 0.09], [0.495, 0.165], [0.51, 0.165], [0.52, 0.09]], 0.012, BK), 'm'); // mira delantera
        add(box(0.032, 0.03, 0.03, -0.04, 0.135, BK)); // mira trasera plegable
        // cargador (levemente curvo)
        add(prof([[0.05, 0.0], [0.145, 0.0], [0.16, -0.08], [0.18, -0.15], [0.115, -0.158], [0.095, -0.08]], 0.028, '#2b2c2e'), 'w');
        pistolGrip(PL, 0.32, 0.1, 0.032);
        if (id === 'm4a1s') { add(cyl(0.011, 0.5, 0.54, 0.075, '#1c1d1f')); add(cyl(0.021, 0.54, 0.8, 0.075, '#1a1b1d', 12)); add(cyl(0.023, 0.54, 0.56, 0.075, '#232427', 12)); muzzle = [0.8, 0.075]; }
        else { add(cyl(0.011, 0.5, 0.66, 0.075, '#1c1d1f')); add(cyl(0.015, 0.63, 0.7, 0.075, BK, 6)); muzzle = [0.7, 0.075]; }
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
    default: { // pistolas comunes: corredera y armazón redondeados, empuñadura inclinada
      const col = id === 'dualies' ? '#9aa0a8' : id === 'fiveseven' ? '#4b4f55' : id === 'tec9' ? '#2d2f33' : id === 'p250' ? '#3a3d42' : '#2e3034';
      const L = id === 'tec9' ? 0.22 : id === 'glock' ? 0.18 : 0.185, fr = id === 'usp' || id === 'p2000' ? '#26272a' : '#1f2023';
      add(rbox(0.03, 0.04, L + 0.04, (L - 0.04) / 2, 0.055, col, 0, 0.008), 'b'); // corredera
      add(rbox(0.026, 0.026, L - 0.01, (L - 0.04) / 2, 0.025, fr, 0, 0.006), 'm'); // armazón
      add(prof([[0.035, 0.02], [-0.03, 0.02], [-0.06, -0.085], [-0.055, -0.1], [0.005, -0.1], [0.012, -0.03], [0.035, 0.0]], 0.031, fr), 'w'); // empuñadura
      for (let i = 0; i < 4; i++) add(box(0.033, 0.004, 0.006, -0.02 - i * 0.008, -0.02 - i * 0.02, '#151617')); // textura de la empuñadura
      if (id === 'tec9') add(prof([[0.06, 0.0], [0.1, 0.0], [0.1, -0.16], [0.06, -0.16]], 0.024, '#202124'), 'w');
      add(cyl(0.006, L - 0.02, L + 0.002, 0.055, '#0b0b0c', 8)); // boca
      if (id === 'usp') { add(cyl(0.017, L, L + 0.15, 0.052, '#1a1b1d', 12)); muzzle = [L + 0.15, 0.052]; }
      else muzzle = [L, 0.055];
      add(box(0.006, 0.012, 0.008, L - 0.012, 0.08, '#111')); // mira delantera
    }
  }
  // ---------- detalles finos por arma ----------
  const rib = (x0, x1, y, n, w, col = '#141516', h = 0.006, d = 0.006) => { for (let i = 0; i < n; i++) add(box(w, h, d, x0 + (x1 - x0) * (n > 1 ? i / (n - 1) : 0), y, col)); };
  if (id === 'galil' || id === 'sg553') {
    add(cyl(0.012, 0.27, 0.5, 0.13, '#2a2b2d', 8)); // tubo de gases
    add(box(0.05, 0.03, 0.03, 0.26, 0.122, '#1c1d1f')); // alza
    add(box(0.008, 0.012, 0.03, 0.08, 0.06, '#151617', 0.026)); // palanca selectora
    rib(-0.05, 0.22, 0.098, 6, 0.05, '#232426', 0.004, 0.008); // nervios de la tapa
    for (let i = 0; i < 4; i++) add(box(0.034, 0.006, 0.006, 0.13 + i * 0.028, -0.04 - i * 0.035, '#1e1f21')); // nervios del cargador
    add(box(0.05, 0.016, 0.02, 0.48, 0.03, '#1c1d1f')); // abrazadera
  }
  if (id === 'm4a4' || id === 'm4a1s') {
    for (let i = 0; i < 12; i++) add(box(0.03, 0.006, 0.006, -0.05 + i * 0.026, 0.123, '#121314')); // riel picatinny
    for (let i = 0; i < 5; i++) for (const sd of [-0.025, 0.025]) add(box(0.005, 0.01, 0.026, 0.29 + i * 0.045, 0.075, '#0f1011', sd)); // ventilaciones del guardamanos
    add(box(0.03, 0.012, 0.03, -0.07, 0.112, '#1c1d1f')); // manija de carga
    add(cyl(0.008, 0.12, 0.15, 0.08, '#1c1d1f', 6, 0.03)); // asistente de cierre
    for (let i = 0; i < 4; i++) add(box(0.04, 0.006, 0.005, -0.33 + i * 0.07, 0.065, '#121314', 0.016)); // posiciones de la culata

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
    const top = id === 'deagle' ? 0.092 : 0.078, rear = id === 'deagle' ? -0.045 : -0.055;
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
  // metal primero (grupo 0) y el resto (grupo 1): en primera persona cada grupo tiene su material
  const order = d.parts.map((pr, i) => i).sort((a, b) => (d.parts[a][1] === 'm' ? 0 : 1) - (d.parts[b][1] === 'm' ? 0 : 1));
  const g = mergeGeometries(order.map(i => geos[i]), true);
  g.groups.forEach((gr, k) => { gr.materialIndex = d.parts[order[k]][1] === 'm' ? 0 : 1; });
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
    rbox(0.4, 0.5, 0.24, 0, 0.27, S.shirt, 0, 0.07), // torso
    ell(0.25, 0.08, 0.13, 0, 0.47, S.shirt), // hombros
    vcyl(0.06, 0.07, 0.08, 0.55, S.shirt), // cuello
    rbox(0.42, 0.07, 0.26, 0, 0.03, '#26221c', 0, 0.02), box(0.06, 0.06, 0.04, 0.13, 0.03, '#8a7a50'), // cinturón y hebilla
  ];
  if (T) {
    // campera abierta + chaleco de cargadores con 3 bolsillos y radio
    tb.push(box(0.08, 0.46, 0.02, 0.125, 0.27, '#2e241a', -0.12), box(0.08, 0.46, 0.02, 0.125, 0.27, '#2e241a', 0.12)); // solapas
    tb.push(rbox(0.36, 0.2, 0.27, 0, 0.27, S.vest, 0, 0.04), rbox(0.06, 0.32, 0.27, 0, 0.38, S.vest, 0.13, 0.02), rbox(0.06, 0.32, 0.27, 0, 0.38, S.vest, -0.13, 0.02));
    for (const zx of [-0.1, 0, 0.1]) tb.push(rbox(0.085, 0.13, 0.05, 0.155, 0.27, '#4a4130', zx, 0.015), rbox(0.075, 0.03, 0.055, 0.157, 0.33, '#2a251c', zx, 0.01));
    tb.push(box(0.05, 0.1, 0.04, 0.13, 0.42, '#1b1b1b', 0.12), box(0.01, 0.06, 0.01, 0.13, 0.5, '#111', 0.13)); // radio y antena
    tb.push(rbox(0.3, 0.3, 0.1, -0.17, 0.3, '#3a3326', 0, 0.04)); // mochila chica
  } else {
    // chaleco portaplacas con bolsillos, parches y cuello alto
    tb.push(rbox(0.44, 0.38, 0.29, 0, 0.32, S.vest, 0, 0.05), rbox(0.3, 0.1, 0.3, 0, 0.5, S.vest, 0, 0.04));
    for (const zx of [-0.11, 0, 0.11]) tb.push(rbox(0.09, 0.12, 0.05, 0.165, 0.22, '#353a31', zx, 0.015));
    tb.push(box(0.12, 0.08, 0.04, 0.165, 0.38, '#2a2e27', -0.08), box(0.06, 0.04, 0.01, 0.17, 0.4, '#8a8f84', 0.09)); // bolsillo y parche
    tb.push(box(0.14, 0.12, 0.07, 0.12, 0.42, '#20231f', 0.15)); // radio al hombro
    tb.push(rbox(0.44, 0.36, 0.05, -0.15, 0.32, S.vest, 0, 0.02)); // placa trasera
    // manchas de camuflaje
    tb.push(box(0.12, 0.1, 0.245, 0, 0.1, '#3b4038', 0.1), box(0.1, 0.08, 0.245, 0, 0.16, '#24271f', -0.12));
  }
  const torso = mergeGeometries(tb);
  const hb = [ell(0.115, 0.135, 0.12, 0, 0.12, S.skin)];
  const hc = S.hc;
  // los detalles de la cara van hacia adelante (-z = u positivo)
  if (T) {
    hb.push(ell(0.122, 0.142, 0.127, 0, 0.125, hc)); // pasamontañas
    hb.push(rbox(0.15, 0.045, 0.03, 0.112, 0.15, S.skin, 0, 0.012)); // ranura de los ojos
    hb.push(box(0.035, 0.022, 0.01, 0.133, 0.152, '#111', -0.05), box(0.035, 0.022, 0.01, 0.133, 0.152, '#111', 0.05));
    hb.push(rbox(0.19, 0.045, 0.04, 0.1, 0.225, '#23303a', 0, 0.015), ell(0.127, 0.012, 0.128, 0, 0.225, '#111')); // antiparras levantadas en la frente
  } else {
    hb.push(ell(0.142, 0.135, 0.148, 0, 0.17, hc, 0, true), ell(0.148, 0.02, 0.155, 0, 0.17, hc)); // casco
    hb.push(box(0.03, 0.05, 0.08, 0, 0.21, '#1c1f1b', 0.145), box(0.03, 0.05, 0.08, 0, 0.21, '#1c1f1b', -0.145)); // rieles
    hb.push(box(0.05, 0.04, 0.04, 0.1, 0.3, '#111')); // soporte NVG
    hb.push(rbox(0.2, 0.065, 0.05, 0.11, 0.155, '#0e0e0e', 0, 0.02), rbox(0.16, 0.04, 0.012, 0.137, 0.156, '#33424a', 0, 0.005)); // antiparras
    hb.push(ell(0.1, 0.07, 0.06, 0.09, 0.07, '#1d1f1d')); // máscara de gas
    hb.push(cyl(0.032, 0.12, 0.18, 0.04, '#3c3f3a', 8, -0.07), cyl(0.032, 0.12, 0.18, 0.04, '#3c3f3a', 8, 0.07)); // filtros
    hb.push(box(0.04, 0.05, 0.03, 0.16, 0.06, '#555'));
  }
  const head = mergeGeometries(hb);
  const thigh = mergeGeometries([vcyl(0.088, 0.07, 0.48, -0.23, S.pants), box(0.04, 0.12, 0.1, 0, -0.2, T ? '#2b2f35' : S.vest, 0.09), ...(T ? [] : [box(0.1, 0.16, 0.06, 0.02, -0.15, '#20231f', 0.085)])]);
  const shin = mergeGeometries([vcyl(0.068, 0.056, 0.42, -0.2, S.pants), rbox(0.15, 0.11, 0.07, 0.055, -0.04, T ? '#1f1f1f' : '#191b19', 0, 0.03), rbox(0.14, 0.13, 0.26, 0.045, -0.4, S.boots, 0, 0.04), rbox(0.15, 0.03, 0.27, 0.045, -0.465, '#0f0f0f', 0, 0.012)]);
  const limb = (r0, r1, col) => { const g = new THREE.CylinderGeometry(r0, r1, 1, 14); g.rotateX(Math.PI / 2); return paint(g, col); };
  const upper = limb(0.066, 0.058, S.shirt), fore = limb(0.055, 0.047, S.shirt);
  const hand = mergeGeometries([rbox(0.085, 0.09, 0.11, 0, 0, S.glove, 0, 0.03)]);
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
  u.body.rotation.set(0, 0, 0); u.body.position.y = 0;
  if (o.dead > 0) {
    // caída tipo ragdoll: cae con gravedad hacia el lado contrario al disparo, rebota, y brazos y piernas quedan flojos
    const t = o.dead / 2.5, dir = o.deadDir || 1, side = o.deadSide || 0;
    let a = Math.min(1, (t * 2.2) ** 2);
    if (t * 2.2 > 1) a = 1 + Math.sin((t * 2.2 - 1) * 9) * Math.exp(-(t * 2.2 - 1) * 5) * 0.08;
    const ang = 1.5 * a;
    u.body.rotation.x = ang * dir; u.body.rotation.z = side * ang * 0.35; u.body.position.y = Math.sin(ang) * 0.12;
    const k = Math.min(1, t * 2);
    // piernas: una flexionada, la otra estirada; rodillas sueltas
    L.hip.rotation.x = -0.25 * k * dir + side * 0.2; R.hip.rotation.x = 0.35 * k * dir; L.knee.rotation.x = 0.9 * k; R.knee.rotation.x = 0.25 * k;
    u.neck.rotation.x = -0.5 * k * dir; u.chest.rotation.x = 0.15 * k * dir;
    // brazos abiertos (se deja el arma)
    for (let j = 0; j < 2; j++) { const A = u.arms[j], sgn = j === 0 ? 1 : -1; sh.set(sgn * 0.24, 0.46, 0); el.set(sgn * (0.24 + 0.28 * k), 0.46 - 0.12 * k, 0.12 * k * dir); tg.set(sgn * (0.3 + 0.45 * k), 0.38 - 0.1 * k, 0.3 * k * dir); placeSeg(A.u, sh, el); placeSeg(A.f, el, tg); A.h.position.copy(tg); }
    u.gun.visible = false;
  } else u.gun.visible = true;
}

// ---------------- primera persona ----------------
// Mano articulada: palma, 4 dedos de 3 falanges y pulgar de 2, con guante. Cada pose dobla los dedos
// (ángulos por articulación) y dice cómo se apoya la mano respecto del arma.
// Ejes de la mano: x a lo ancho de los nudillos, y = dorso, -z = hacia donde apuntan los dedos estirados.
const FING = [ // [x del nudillo (mano derecha), largo de las 3 falanges, radio]
  [-0.031, [0.044, 0.027, 0.021], 0.0098], [-0.0105, [0.048, 0.03, 0.022], 0.0102], [0.0105, [0.045, 0.028, 0.021], 0.0097], [0.03, [0.036, 0.022, 0.019], 0.0088],
];
const UPY = new THREE.Vector3(0, 1, 0), qq = new THREE.Quaternion();
function seg(a, b, r, col) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const g = new THREE.CapsuleGeometry(r, Math.max(0.001, len), 3, 10);
  qq.setFromUnitVectors(UPY, d.normalize()); g.applyQuaternion(qq); g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  return paint(g, col);
}
// curl: [[c1,c2,c3] x4 dedos], thumb: [abre, dobla]; spread: separación de los dedos
function handGeo(S, curl, thumb, mirror, spread = 0.06) {
  const glove = S.glove, cuff = '#1d1e20', knuckle = '#2c2d30', out = [];
  // palma con nudillos y puño del guante
  out.push(rbox(0.082, 0.03, 0.088, 0, 0, glove, 0, 0.0145));
  out.push(rbox(0.06, 0.006, 0.05, 0.0, 0.0145, knuckle, 0, 0.003)); // refuerzo del dorso
  FING.forEach(([x, , r]) => out.push(ell(r * 1.15, r * 1.05, r * 1.1, 0.04, 0.004, knuckle, x))); // nudillos
  out.push(seg(new THREE.Vector3(0, 0, 0.035), new THREE.Vector3(0, 0, 0.06), 0.031, glove));
  FING.forEach(([x, L, r], i) => {
    const c = curl[i] || [0, 0, 0];
    let p = new THREE.Vector3(x, 0.002, -0.044), ang = 0, yaw = (i - 1.5) * spread * 0.5;
    for (let k = 0; k < 3; k++) {
      ang += c[k];
      const d = new THREE.Vector3(Math.sin(yaw) * Math.cos(ang), -Math.sin(ang), -Math.cos(yaw) * Math.cos(ang));
      const q = p.clone().addScaledVector(d, L[k]);
      out.push(seg(p, q, r * (1 - k * 0.07), glove)); p = q;
    }
  });
  // pulgar: sale del costado de la palma (cerca de la muñeca) en la dirección de la pose y se va doblando
  {
    let p = new THREE.Vector3(-0.036, -0.01, 0.018), dir = new THREE.Vector3(thumb[0], thumb[1], thumb[2]).normalize();
    const bend = thumb[3] || 0, L = [0.038, 0.03, 0.024], ax = new THREE.Vector3(0, 1, 0).cross(dir).normalize();
    for (let k = 0; k < 3; k++) {
      const q = p.clone().addScaledVector(dir, L[k]); out.push(seg(p, q, 0.0118 - k * 0.0009, glove)); p = q;
      dir.applyAxisAngle(ax, -bend).normalize();
    }
  }
  let g = mergeGeometries(out); g.scale(0.88, 0.88, 0.88);
  if (mirror) { g.scale(-1, 1, 1); const idx = g.index; if (!idx) { const pos = g.attributes.position.array, col = g.attributes.color.array, nor = g.attributes.normal.array; for (let i = 0; i < pos.length; i += 9) for (const A of [pos, col, nor]) for (let j = 0; j < 3; j++) { const t = A[i + 3 + j]; A[i + 3 + j] = A[i + 6 + j]; A[i + 6 + j] = t; } } g.computeVertexNormals(); }
  return g;
}
// poses: dedos y ubicación (en coordenadas del arma: x derecha, y arriba, -z adelante)
const C = (a, b, c) => [a, b, c];
const POSES = {
  // mano derecha en la empuñadura: palma del lado derecho, dedos rodean el frente, índice en el gatillo
  grip: { curl: [C(0.35, 0.55, 0.35), C(1.35, 1.45, 0.9), C(1.4, 1.5, 0.9), C(1.45, 1.5, 0.9)], thumb: [0.35, -0.75, -0.55, 0.25], basis: [[0, -1, 0], [1, 0, 0], [0, 0, 1]], tilt: 0.3, pos: [0.034, -0.045, 0.006] },
  // mano izquierda debajo del guardamanos: palma arriba, dedos suben por el costado derecho
  fore: { curl: [C(0.5, 1.0, 0.6), C(0.55, 1.05, 0.6), C(0.6, 1.1, 0.6), C(0.65, 1.1, 0.6)], thumb: [-0.85, -0.45, 0.25, 0.1], basis: [[0, 0, -1], [0, -1, 0], [-1, 0, 0]], tilt: 0, pos: [-0.048, -0.04, 0] },
  // mano izquierda abrazando la derecha en las pistolas
  cup: { curl: [C(1.0, 1.0, 0.6), C(1.1, 1.1, 0.6), C(1.2, 1.1, 0.6), C(1.3, 1.1, 0.6)], thumb: [0.15, -0.3, -0.9, 0.05], basis: [[0, 1, 0], [-1, 0, 0], [0, 0, 1]], tilt: 0.3, pos: [-0.046, -0.06, -0.012] },
  // cuchillo: mano cerrada sobre el mango horizontal
  knife: { curl: [C(1.25, 1.35, 0.9), C(1.35, 1.45, 0.9), C(1.4, 1.5, 0.9), C(1.45, 1.5, 0.9)], thumb: [-0.25, -0.6, -0.7, 0.2], basis: [[0, 0, 1], [1, 0, 0], [0, 1, 0]], tilt: 0, pos: [0.03, 0.04, 0.065] },
  // granadas y C4: mano que sostiene algo redondo
  ball: { curl: [C(0.8, 0.8, 0.5), C(0.85, 0.85, 0.5), C(0.9, 0.85, 0.5), C(0.95, 0.85, 0.5)], thumb: [0.3, -0.7, -0.6, 0.2], basis: [[0, -1, 0], [1, 0, 0], [0, 0, 1]], tilt: 0.2, pos: [0.05, -0.01, 0.01] },
};
const PQ = {};
function poseQuat(name) {
  if (PQ[name]) return PQ[name];
  const P = POSES[name], m = new THREE.Matrix4();
  const [x, y, z] = P.basis.map(v => new THREE.Vector3(...v));
  m.makeBasis(x, y, z);
  const q = new THREE.Quaternion().setFromRotationMatrix(m);
  if (P.tilt) q.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -P.tilt));
  return (PQ[name] = q);
}
export function makeViewModel() {
  const g = new THREE.Group();
  const hold = new THREE.Group(); g.add(hold);
  const gun = new THREE.Group(); hold.add(gun);
  const arms = [];
  for (let k = 0; k < 2; k++) { const u = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1), MAT_VM), f = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 1), MAT_VM), h = new THREE.Group(); u.visible = false; g.add(u, f, h); arms.push({ u, f, h }); }
  g.userData = { hold, gun, arms, id: null, team: null };
  return g;
}
const armCache = {}, handCache = {};
function vmParts(team, si) {
  const key = team + si; if (armCache[key]) return armCache[key];
  const S = skinOf(team, si);
  const tube = (r0, r1, len, u, col) => { const g = new THREE.CylinderGeometry(r0, r1, len, 18); g.rotateX(Math.PI / 2); g.translate(0, 0, -u); return paint(g, col); };
  // antebrazo: manga con pliegues y el puño del guante (de 0 = codo a 1 = muñeca, se estira con placeSeg)
  const forearm = mergeGeometries([tube(0.044, 0.034, 1, 0, S.shirt), tube(0.045, 0.043, 0.06, 0.05, S.shirt), tube(0.042, 0.04, 0.04, -0.15, S.shirt), tube(0.037, 0.036, 0.1, 0.43, S.vest), tube(0.033, 0.032, 0.03, 0.49, '#1d1e20')]);
  return (armCache[key] = { forearm });
}
function vmHand(team, si, pose, left) {
  const key = team + si + pose + (left ? 'L' : 'R'); if (handCache[key]) return handCache[key];
  const P = POSES[pose];
  return (handCache[key] = handGeo(skinOf(team, si), P.curl, P.thumb, left));
}
const HMAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0.0 });
const GMAT = [new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.36, metalness: 0.55 }), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.08 })];
export function setViewGun(vm, id, team, si = 0, finish = 0) {
  const u = vm.userData, key = id + team + si + ':' + finish; if (u.key === key) return; u.key = key; u.id = id; u.team = team;
  u.gun.clear();
  for (const a of u.arms) a.h.clear();
  if (!id) return;
  const cat = WEAPONS[id]?.cat || id;
  const m = new THREE.Mesh(gunGeo(id, finish), GMAT); u.gun.add(m);
  u.dual = id === 'dualies';
  if (u.dual) { const m2 = new THREE.Mesh(gunGeo(id, finish), GMAT); m2.position.set(-0.21, 0.0, 0.02); m2.rotation.y = -0.08; u.gun.add(m2); }
  u.info = gunInfo(id); u.cat = cat;
  const P = vmParts(team, si);
  const nade = cat === 'grenade' || cat === 'c4' || id === 'defuser';
  u.poses = cat === 'knife' ? ['knife', null] : nade ? ['ball', null] : u.dual ? ['grip', 'grip'] : cat === 'pistol' || id === 'zeus' ? ['grip', 'cup'] : ['grip', 'fore'];
  u.arms.forEach((a, k) => { a.f.geometry = P.forearm; a.f.material = HMAT; const pz = u.poses[k] || 'fore'; a.h.add(new THREE.Mesh(vmHand(team, si, pz, k === 1), HMAT)); });
  // cargador suelto (en la mano izquierda durante la recarga)
  const isMagGun = WEAPONS[id] && WEAPONS[id].mag > 1 && cat !== 'heavy' && cat !== 'sniper' || id === 'awp';
  u.mag = null;
  if (isMagGun) { const mg = new THREE.Mesh(new RoundedBoxGeometry(0.026, cat === 'pistol' ? 0.09 : 0.13, 0.05, 2, 0.006), new THREE.MeshStandardMaterial({ color: '#2a2b2d', roughness: 0.5, metalness: 0.4 })); mg.position.set(0, -0.06, -0.03); mg.visible = false; u.arms[1].h.add(mg); u.mag = mg; }
  // dónde se sostiene respecto de la cámara
  u.base = id === 'dualies' ? [0.12, -0.13, -0.44] : cat === 'pistol' || id === 'zeus' ? [0.125, -0.12, -0.42] : cat === 'knife' ? [0.15, -0.15, -0.34] : nade ? [0.14, -0.14, -0.32] : cat === 'sniper' ? [0.15, -0.17, -0.44] : [0.15, -0.165, -0.37];
  u.rot = cat === 'knife' ? [0.35, 0.55, -0.25] : nade ? [0.1, 0.2, 0] : [0.03, 0.06, 0];
  vm.traverse(o => { o.renderOrder = 10; o.frustumCulled = false; });
}
// ubica las manos (pegadas al arma según la pose) y los antebrazos desde abajo de la pantalla
const vT = new THREE.Vector3(), vW = new THREE.Vector3(), vEl2 = new THREE.Vector3(), gm = new THREE.Matrix4(), gq = new THREE.Quaternion(), hq = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3();
export function updateViewArms(vm) {
  const u = vm.userData; if (!u.id) return;
  u.hold.updateMatrix(); u.gun.updateMatrix();
  gm.multiplyMatrices(u.hold.matrix, u.gun.matrix); gm.decompose(tmpP, gq, tmpS);
  const info = u.info || {}, cat = u.cat;
  for (let k = 0; k < 2; k++) {
    const A = u.arms[k], right = k === 0, pose = u.poses[k];
    let ok = !!pose;
    if (ok) {
      const P = POSES[pose];
      let pos = P.pos.slice();
      if (!right && pose === 'fore') pos = [-0.022, (info.fore ? info.fore[1] : 0) - 0.032, -(info.fore ? info.fore[0] : 0.3)];
      if (right && cat === 'pistol') pos = [0.033, -0.032, 0.026];
      if (!right && pose === 'cup') pos = [-0.042, -0.05, 0.012];
      if (!right && u.dual) pos = [-0.21 + 0.033, -0.05, 0.048];
      vT.set(...pos).applyMatrix4(gm);
      hq.copy(gq).multiply(poseQuat(pose));
      // recarga: la mano izquierda va al cargador, baja, vuelve con otro y lo mete
      const rk = u.reloadK || 0;
      if (!right && rk > 0.08 && rk < 0.94 && cat !== 'knife' && !u.dual) {
        const s2 = (rk - 0.08) / 0.86, sm = t => t * t * (3 - 2 * t);
        const mw = new THREE.Vector3(...(cat === 'pistol' ? [-0.01, -0.13, 0.02] : [-0.01, -0.12, -0.14])).applyMatrix4(gm), lw = new THREE.Vector3(0.05, -0.55, 0.12).applyMatrix4(gm), base = vT.clone();
        if (s2 < 0.22) vT.lerpVectors(base, mw, sm(s2 / 0.22)); else if (s2 < 0.48) vT.lerpVectors(mw, lw, sm((s2 - 0.22) / 0.26)); else if (s2 < 0.74) vT.lerpVectors(lw, mw, sm((s2 - 0.48) / 0.26)); else vT.lerpVectors(mw, base, sm((s2 - 0.74) / 0.26));
        hq.copy(gq).multiply(poseQuat('ball'));
        if (u.mag) u.mag.visible = s2 > 0.22 && s2 < 0.76;
      } else if (!right && u.mag) u.mag.visible = false;
    }
    A.f.visible = A.h.visible = ok;
    if (!ok) continue;
    A.h.position.copy(vT); A.h.quaternion.copy(hq);
    // muñeca = atrás de la palma; el codo queda fuera de la pantalla, abajo y al costado
    vW.set(0, 0, 0.065).applyQuaternion(hq).add(vT);
    vEl2.set(right ? 0.24 : -0.26, -0.42, 0.12);
    placeSeg(A.f, vEl2, vW);
  }
}
