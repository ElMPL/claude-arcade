// Modelos de poligonado medio: armas (perfiles extruidos con biseles), personajes redondeados,
// y brazos que agarran el arma con IK de dos huesos (en primera y en tercera persona).
import * as THREE from 'three';
import { makeAgent, poseAgent } from './agents.js';
import { armsReady, makeArm, poseArm, aimFore } from './vmarms.js';
import { mergeGeometries, toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';
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
function profH(pts, holes, w, col) {
  const sh = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], p[1])));
  for (const h of holes) sh.holes.push(new THREE.Path(h.map(p => new THREE.Vector2(p[0], p[1]))));
  const bv = Math.min(0.006, w * 0.18);
  const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(0.001, w - bv * 2), bevelEnabled: true, bevelThickness: bv, bevelSize: bv * 0.8, bevelSegments: 2, steps: 1, curveSegments: 8 });
  g.translate(0, 0, -w / 2 + bv); g.rotateY(Math.PI / 2);
  return paint(g, col);
}
// cargador curvo: arco desde (u0,y0) bajando len, curvatura k, ancho de frente a fondo d
function curvedMag(u0, y0, len, k, d, w, col) {
  const f = [], b = []; for (let i = 0; i <= 8; i++) { const t = i / 8, du = k * t * t * len, dy = -t * len; f.push([u0 + d + du, y0 + dy]); b.push([u0 + du - t * 0.006, y0 + dy]); }
  return prof([...f, ...b.reverse()], w, col);
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
  let fore = null, muzzle = [0.3, 0.05], grip = null;
  const pistolGrip = (col, ang = 0.28, len = 0.11, wdt = 0.032) => add(prof([[0.03, 0.02], [-0.02, 0.02], [-0.02 - Math.sin(ang) * len, 0.02 - len], [0.03 - Math.sin(ang) * len, 0.02 - len]], wdt, col), 'w');
  switch (id) {
    // ---------- rifles ----------
    // ---------- rifles rehechos ----------
    case 'galil': { // Galil AR: polímero oscuro, culata esqueleto plegable, guardamanos con ranuras y cargador curvo
      const BD = '#2d2f2b', PL = '#3b3d35', BK = '#171816';
      add(prof([[-0.06, 0.022], [0.26, 0.022], [0.26, 0.092], [-0.06, 0.092], [-0.07, 0.06]], 0.046, BD), 'b');
      add(cyl(0.023, -0.05, 0.25, 0.088, '#262825', 10));
      add(profH([[-0.06, 0.09], [-0.42, 0.075], [-0.43, -0.07], [-0.37, -0.075], [-0.12, 0.0], [-0.06, 0.025]], [[[-0.14, 0.065], [-0.36, 0.055], [-0.36, -0.035], [-0.3, -0.04]]], 0.032, PL), 'w');
      add(prof([[0.26, 0.026], [0.5, 0.032], [0.5, 0.098], [0.26, 0.1]], 0.054, PL), 'w');
      for (let i = 0; i < 5; i++) for (const sd of [-0.027, 0.027]) add(box(0.004, 0.04, 0.02, 0.29 + i * 0.045, 0.064, BK, sd));
      add(cyl(0.011, 0.5, 0.7, 0.064, '#1c1d1f', 8)); add(cyl(0.016, 0.66, 0.72, 0.064, BK, 8));
      add(prof([[0.62, 0.08], [0.63, 0.13], [0.64, 0.13], [0.65, 0.08]], 0.012, BK), 'm');
      add(curvedMag(0.095, 0.022, 0.19, 0.35, 0.075, 0.03, '#25261f'), 'w');
      pistolGrip('#1f201c', 0.3, 0.1, 0.03);
      fore = [0.39, 0.03]; muzzle = [0.72, 0.064];
      break;
    }
    case 'sg553': { // SG 553: polímero arena, mira telescópica, culata esqueleto, cargador translúcido
      const BD = '#4d4936', PL = '#5c5741', BK = '#1a1a17';
      add(prof([[-0.07, 0.02], [0.26, 0.02], [0.27, 0.1], [-0.07, 0.1]], 0.048, BD), 'b');
      add(profH([[-0.07, 0.095], [-0.4, 0.085], [-0.41, -0.06], [-0.35, -0.065], [-0.07, 0.02]], [[[-0.12, 0.07], [-0.34, 0.065], [-0.34, -0.03], [-0.2, 0.0]]], 0.03, PL), 'w');
      add(prof([[0.27, 0.025], [0.5, 0.035], [0.52, 0.09], [0.27, 0.1]], 0.052, PL), 'w');
      add(cyl(0.011, 0.5, 0.68, 0.062, '#1c1d1f', 8)); add(cyl(0.016, 0.64, 0.7, 0.062, BK, 8));
      add(cyl(0.02, -0.02, 0.16, 0.145, BK, 10)); add(cyl(0.026, 0.12, 0.17, 0.145, BK, 10, 0, 0.02)); add(box(0.016, 0.03, 0.03, 0.03, 0.115, BK)); add(box(0.016, 0.03, 0.03, 0.13, 0.115, BK));
      add(paint(new THREE.CircleGeometry(0.022, 12).rotateY(Math.PI).translate(0, 0.145, -0.172), '#2f5f86'));
      add(curvedMag(0.095, 0.02, 0.18, 0.3, 0.072, 0.03, '#a07a3c'), 'w');
      pistolGrip('#26251f', 0.3, 0.1, 0.03);
      fore = [0.39, 0.03]; muzzle = [0.7, 0.062];
      break;
    }
    case 'famas': { // FAMAS: bullpup con manija de transporte larga encima
      const BD = '#343a3f', BK = '#16181a';
      add(prof([[-0.38, 0.03], [-0.36, 0.0], [0.24, 0.0], [0.3, 0.03], [0.32, 0.07], [0.28, 0.1], [-0.36, 0.1], [-0.39, 0.07]], 0.056, BD), 'b');
      add(profH([[-0.24, 0.1], [0.24, 0.1], [0.27, 0.18], [0.22, 0.19], [-0.2, 0.19], [-0.25, 0.17]], [[[-0.18, 0.115], [0.2, 0.115], [0.2, 0.165], [-0.18, 0.165]]], 0.018, BD), 'b');
      add(cyl(0.011, 0.32, 0.55, 0.05, '#1c1d1f', 8)); add(cyl(0.015, 0.5, 0.56, 0.05, BK, 8));
      pistolGrip('#1f2124', 0.2);
      add(prof([[-0.2, 0.0], [-0.12, 0.0], [-0.11, -0.13], [-0.18, -0.135]], 0.026, '#202225'), 'w');
      add(prof([[0.12, 0.0], [0.24, 0.0], [0.24, -0.02], [0.12, -0.02]], 0.05, '#2c3135'), 'b');
      fore = [0.18, -0.02]; muzzle = [0.56, 0.05];
      break;
    }
    case 'aug': { // AUG: bullpup verde con mira integrada y empuñadura delantera
      const BD = '#566349', BK = '#141514';
      add(prof([[-0.38, 0.02], [-0.36, -0.01], [0.2, -0.01], [0.3, 0.02], [0.32, 0.07], [0.28, 0.095], [-0.36, 0.1], [-0.39, 0.07]], 0.058, BD), 'b');
      add(cyl(0.024, -0.12, 0.12, 0.15, BK, 12)); add(cyl(0.03, 0.08, 0.14, 0.15, BK, 12, 0, 0.024));
      add(prof([[-0.14, 0.095], [0.14, 0.095], [0.1, 0.13], [-0.1, 0.13]], 0.03, BK), 'm');
      add(paint(new THREE.CircleGeometry(0.026, 12).rotateY(Math.PI).translate(0, 0.15, -0.142), '#2f5f86'));
      add(cyl(0.011, 0.32, 0.56, 0.05, '#1c1d1f', 8)); add(cyl(0.016, 0.52, 0.58, 0.05, BK, 8));
      add(prof([[-0.04, -0.01], [0.16, -0.01], [0.17, -0.11], [0.13, -0.12], [0.12, -0.04], [0.0, -0.04], [-0.02, -0.12], [-0.06, -0.11]], 0.04, BD), 'b'); // guardamonte grande
      add(prof([[-0.22, -0.01], [-0.14, -0.01], [-0.13, -0.11], [-0.2, -0.115]], 0.026, '#2a3324'), 'w');
      fore = [0.17, -0.06]; muzzle = [0.58, 0.05];
      break;
    }
    case 'awp': case 'ssg08': { // francotiradores: culata con agujero para el pulgar, caño estriado, mira grande
      const big = id === 'awp' ? 1.12 : 1, BD = id === 'awp' ? '#41613b' : '#33414f', BK = '#151617';
      add(profH([[-0.58, -0.08], [-0.56, 0.1 * big], [-0.4, 0.11 * big], [-0.16, 0.1 * big], [-0.04, 0.085 * big], [0.44, 0.075], [0.42, 0.04], [-0.02, 0.04], [-0.02, 0.0], [-0.04, -0.075], [-0.1, -0.075], [-0.2, -0.03], [-0.46, -0.09]],
        [[[-0.12, 0.03], [-0.21, 0.035], [-0.2, -0.015], [-0.13, -0.035]]], 0.05 * big, BD), 'b');
      add(prof([[-0.56, 0.1 * big], [-0.4, 0.11 * big], [-0.4, 0.125 * big], [-0.55, 0.12 * big]], 0.03, '#2e4429'), 'b'); // apoyo de mejilla
      add(cyl(0.022, -0.06, 0.2, 0.07, '#2a2c2e', 10)); // cajón de mecanismos
      add(cyl(0.014 * big, 0.2, id === 'awp' ? 1.0 : 0.88, 0.07, '#1c1d1f', 8, 0, 0.011 * big));
      for (let i = 0; i < 4; i++) add(box(0.004, 0.004, 0.32, 0.5, 0.07 + 0.012 * big * (i % 2 ? 1 : -1), BK, (i < 2 ? 1 : -1) * 0.012 * big)); // estrías
      if (id === 'awp') { add(cyl(0.022, 0.98, 1.08, 0.07, BK, 10)); for (const sd of [-1, 1]) add(box(0.004, 0.012, 0.05, 1.03, 0.07, '#0c0c0d', sd * 0.022)); }
      add(cyl(0.029 * big, -0.1, 0.24, 0.155 * big, '#161718', 12)); add(cyl(0.037 * big, 0.2, 0.3, 0.155 * big, '#161718', 12, 0, 0.029 * big)); add(cyl(0.034 * big, -0.16, -0.08, 0.155 * big, '#161718', 12, 0, 0.026 * big));
      add(box(0.018, 0.05, 0.022, 0.0, 0.11 * big, BK)); add(box(0.018, 0.05, 0.022, 0.16, 0.11 * big, BK));
      add(paint(new THREE.CircleGeometry(0.032 * big, 14).rotateY(Math.PI).translate(0, 0.155 * big, -0.302), '#3a6f9a'));
      add(paint(new THREE.CircleGeometry(0.025 * big, 14).translate(0, 0.155 * big, 0.162), '#1d3a55'));
      add(cyl(0.011, 0.03, 0.07, 0.19 * big, '#161718', 8)); add(box(0.024, 0.02, 0.02, 0.05, 0.155 * big, '#161718', 0.032));
      add(box(0.05, 0.01, 0.01, -0.06, 0.08, '#1c1d1f', 0.045)); add(paint(new THREE.SphereGeometry(0.014, 8, 6).translate(0.07, 0.08, 0.06), '#222'));
      add(prof([[0.06, 0.02], [0.13, 0.02], [0.13, -0.05], [0.06, -0.05]], 0.03, '#1f2022'), 'w'); // cargador
      fore = [0.3, 0.02]; muzzle = [id === 'awp' ? 1.08 : 0.88, 0.07]; grip = [-0.1, -0.03];
      break;
    }
    // ---------- subfusiles rehechos ----------
    case 'mac10': { // MAC-10: cajón metálico, cargador en la empuñadura, correa delantera
      const BD = '#2b2c2f', BK = '#151617';
      add(rbox(0.05, 0.085, 0.27, 0.07, 0.065, BD, 0, 0.008), 'b');
      add(prof([[-0.02, 0.025], [0.04, 0.025], [0.035, -0.16], [-0.02, -0.165]], 0.034, '#1d1e20'), 'w');
      add(box(0.03, 0.012, 0.03, 0.02, -0.162, BK));
      add(cyl(0.012, 0.205, 0.26, 0.075, BK, 8)); add(cyl(0.016, 0.25, 0.3, 0.075, '#1c1d1f', 10));
      add(box(0.006, 0.006, 0.2, -0.04, 0.1, '#1c1d1f', 0.02)); add(box(0.006, 0.006, 0.2, -0.04, 0.1, '#1c1d1f', -0.02)); add(box(0.05, 0.03, 0.008, -0.14, 0.09, '#1c1d1f')); // culata de alambre plegada
      add(box(0.012, 0.016, 0.02, 0.1, 0.112, BK)); add(box(0.02, 0.01, 0.06, 0.16, 0.035, BK, 0.0)); // traba y correa
      fore = [0.17, 0.0]; muzzle = [0.3, 0.075]; grip = [-0.01, 0.0];
      break;
    }
    case 'mp9': { // MP9: polímero compacto, empuñadura delantera, culata plegada al costado
      const BD = '#25272a', BK = '#141516';
      add(rbox(0.05, 0.075, 0.26, 0.06, 0.07, BD, 0, 0.012), 'b');
      add(box(0.024, 0.01, 0.2, 0.06, 0.112, '#1a1b1d'));
      add(prof([[0.03, 0.035], [-0.03, 0.035], [-0.06, -0.08], [-0.055, -0.15], [0.0, -0.15], [0.01, -0.08]], 0.032, '#1d1f22'), 'w'); // empuñadura con cargador
      add(prof([[0.14, 0.035], [0.18, 0.035], [0.19, -0.07], [0.15, -0.075]], 0.026, '#1d1f22'), 'w'); // empuñadura delantera
      add(cyl(0.012, 0.19, 0.24, 0.072, BK, 8));
      add(prof([[-0.07, 0.09], [-0.32, 0.075], [-0.32, 0.04], [-0.07, 0.05]], 0.012, '#202225'), 'w'); // culata plegada
      fore = [0.17, -0.02]; muzzle = [0.24, 0.072]; grip = [-0.02, -0.02];
      break;
    }
    case 'ump': { // UMP-45: polímero, cargador recto ancho, culata plegable
      const BD = '#2b2d30', BK = '#141516';
      add(prof([[-0.08, 0.02], [0.3, 0.02], [0.32, 0.06], [0.3, 0.105], [-0.08, 0.105]], 0.05, BD), 'b');
      add(box(0.024, 0.01, 0.3, 0.1, 0.112, '#1a1b1d'));
      add(prof([[0.06, 0.02], [0.12, 0.02], [0.12, -0.16], [0.07, -0.16]], 0.034, '#222428'), 'w');
      add(cyl(0.012, 0.32, 0.38, 0.065, BK, 8));
      add(profH([[-0.08, 0.1], [-0.36, 0.09], [-0.37, -0.02], [-0.31, -0.025], [-0.08, 0.03]], [[[-0.12, 0.08], [-0.3, 0.072], [-0.3, 0.0], [-0.14, 0.04]]], 0.03, '#202225'), 'w');
      pistolGrip('#1d1f22', 0.25);
      fore = [0.26, 0.01]; muzzle = [0.38, 0.065];
      break;
    }
    // ---------- escopetas rehechas ----------
    case 'nova': case 'xm1014': {
      const BD = id === 'nova' ? '#26282b' : '#2b2d30', BK = '#141516', len = 0.7;
      add(prof([[-0.06, 0.02], [0.2, 0.02], [0.2, 0.1], [-0.04, 0.1], [-0.07, 0.08]], 0.05, BD), 'b');
      add(cyl(0.016, 0.2, len, 0.08, '#1c1d1f', 10)); add(cyl(0.017, 0.2, len - 0.05, 0.042, '#1f2022', 10));
      add(cyl(0.024, id === 'nova' ? 0.28 : 0.24, id === 'nova' ? 0.46 : 0.5, 0.045, id === 'nova' ? '#1e2023' : '#2a2c2f', 12)); // corredera / guardamanos
      if (id === 'nova') for (let i = 0; i < 6; i++) add(cyl(0.026, 0.3 + i * 0.026, 0.312 + i * 0.026, 0.045, BK, 12));
      else for (let i = 0; i < 12; i++) add(box(0.03, 0.006, 0.006, -0.02 + i * 0.018, 0.105, '#121314'));
      add(prof([[-0.04, 0.09], [-0.42, 0.065], [-0.44, -0.075], [-0.38, -0.08], [-0.12, -0.01], [-0.05, 0.02]], 0.042, id === 'nova' ? '#202225' : '#26282b'), 'w');
      add(box(0.006, 0.02, 0.006, len - 0.02, 0.1, '#bb3333'));
      fore = [0.37, 0.0]; muzzle = [len, 0.08];
      break;
    }
    case 'deagle': { // Desert Eagle: corredera ancha, caño con perfil triangular, empuñadura grande
      const SL = '#9ba1a9', FR = '#8a9098';
      add(prof([[-0.06, 0.04], [0.19, 0.04], [0.2, 0.06], [0.19, 0.095], [-0.05, 0.095], [-0.065, 0.075]], 0.036, SL), 'b');
      add(prof([[0.05, 0.095], [0.2, 0.095], [0.2, 0.105], [0.05, 0.105]], 0.012, '#7f858d'), 'b'); // riel del caño
      add(prof([[-0.05, 0.0], [0.17, 0.0], [0.17, 0.04], [-0.05, 0.04]], 0.033, FR), 'b');
      add(prof([[0.035, 0.005], [-0.035, 0.005], [-0.07, -0.1], [-0.064, -0.115], [0.0, -0.115], [0.008, -0.04], [0.035, -0.01]], 0.036, '#26272a'), 'w');
      add(cyl(0.008, 0.195, 0.205, 0.068, '#0b0b0c', 8));
      muzzle = [0.205, 0.068];
      break;
    }
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
    case 'knife': { // cuchillo táctico: mango engomado grueso con ranuras, guarda, hoja con punta recortada y canal
      add(rbox(0.028, 0.036, 0.122, -0.066, 0.0, '#202124', 0, 0.011), 'w');
      for (let i = 0; i < 4; i++) add(box(0.03, 0.006, 0.008, -0.025 - i * 0.022, -0.017, '#141416'));
      add(rbox(0.03, 0.03, 0.016, -0.13, 0.0, '#3a3c40', 0, 0.006), 'm'); // pomo
      add(prof([[-0.004, -0.03], [0.012, -0.03], [0.012, 0.028], [-0.004, 0.028]], 0.034, '#3a3c40'), 'm'); // guarda
      add(prof([[0.012, -0.017], [0.16, -0.015], [0.205, 0.004], [0.175, 0.012], [0.12, 0.019], [0.012, 0.019]], 0.006, '#c9cfd6'), 'b'); // hoja
      add(prof([[0.03, 0.002], [0.13, 0.002], [0.13, 0.008], [0.03, 0.008]], 0.0075, '#8d949c'), 'm'); // canal
      add(prof([[0.012, -0.017], [0.16, -0.015], [0.165, -0.011], [0.012, -0.012]], 0.0065, '#e8edf2'), 'm'); // filo
      muzzle = [0.2, 0];
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
  if (false) {
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
  if (false) { rib(-0.2, 0.2, 0.114, 8, 0.012, '#1a1b1c', 0.005, 0.03); add(box(0.02, 0.03, 0.06, 0.25, 0.06, '#1a1b1c')); }
  if (id === 'scar20' || id === 'g3sg1') {
    const big = 1;
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
  if (false) for (let i = 0; i < 5; i++) add(box(0.006, 0.05, 0.05, 0.27 + i * 0.04, 0.035, '#151515')); // estrías de la corredera
  if (['mp7', 'mp5', 'bizon', 'p90'].includes(id)) { rib(-0.02, 0.18, 0.105, 7, 0.016, '#121314', 0.006, 0.02); add(box(0.024, 0.012, 0.012, 0.02, 0.07, '#111', 0.03)); }
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
  return { parts: P, fore, muzzle, grip };
}
const gcache = new Map(), icache = new Map();
// ---------- modelos importados (guns/guns.bin, ver tools/import_guns.py) ----------
let GUNS = null, GUNBUF = null;
export async function loadGunModels(base = 'guns/') {
  try {
    const [meta, buf] = await Promise.all([fetch(base + 'guns.json').then(r => r.json()), fetch(base + 'guns.bin').then(r => r.arrayBuffer())]);
    GUNS = meta; GUNBUF = buf; gcache.clear(); icache.clear();
  } catch (e) { console.warn('armas: uso los modelos simples', e); }
}
const METAL_COLS = new Set(['2c2e32', '3a3d42', '232427', '9ba1a9', 'a3a9b1']);
function importedGeo(id, finish) {
  const m = GUNS[id], F = FINISHES[finish] || FINISHES[0];
  const q = new Int16Array(GUNBUF, m.o, m.nv * 3), c = new Uint8Array(GUNBUF, m.o + m.nv * 6, m.nv * 3), ix = new Uint16Array(GUNBUF, m.oi, m.ni);
  const pos = new Float32Array(m.nv * 3); for (let i = 0; i < pos.length; i++) pos[i] = q[i] * m.sc;
  const col = new Float32Array(m.nv * 3), metal = new Uint8Array(m.nv), fb = F.b ? new THREE.Color(F.b) : null, fw = F.w ? new THREE.Color(F.w) : null, tc = new THREE.Color();
  for (let i = 0; i < m.nv; i++) {
    const hex = ((c[i * 3] << 16) | (c[i * 3 + 1] << 8) | c[i * 3 + 2]).toString(16).padStart(6, '0');
    tc.setRGB(c[i * 3] / 255, c[i * 3 + 1] / 255, c[i * 3 + 2] / 255, THREE.SRGBColorSpace);
    if (id === 'deagle' && hex === '9ba1a9') tc.set('#4a4d53'); // la Deagle por defecto es pavonada, no plateada (se veía blanca)
    metal[i] = METAL_COLS.has(hex) || hex === '2c2e32' ? 1 : 0;
    // acabado (skin): el cuerpo toma el color principal y las piezas de color (madera, polímero) el secundario
    if (fb && id !== 'knife') { if (hex === '2c2e32' || !metal[i] && hex !== '1f2023') tc.copy(metal[i] ? fb : (fw || fb)); }
    col[i * 3] = tc.r; col[i * 3 + 1] = tc.g; col[i * 3 + 2] = tc.b;
  }
  let g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setIndex(new THREE.BufferAttribute(ix, 1));
  // grupos: metal (material brillante) y el resto
  const tri = ix.length / 3, order = [...Array(tri).keys()].sort((a, b) => metal[ix[b * 3]] - metal[ix[a * 3]]);
  const ix2 = new Uint16Array(ix.length); order.forEach((t, k) => { ix2[k * 3] = ix[t * 3]; ix2[k * 3 + 1] = ix[t * 3 + 1]; ix2[k * 3 + 2] = ix[t * 3 + 2]; });
  let nm = 0; for (const t of order) if (metal[ix[t * 3]]) nm++;
  g.setIndex(new THREE.BufferAttribute(ix2, 1));
  g = toCreasedNormals(g, Math.PI / 5);
  g.clearGroups(); g.addGroup(0, nm * 3, 0); g.addGroup(nm * 3, (tri - nm) * 3, 1);
  g.computeBoundingSphere();
  return g;
}
// datos para las manos: boca, guardamanos y empuñadura del modelo importado
function importedInfo(id) {
  const m = GUNS[id], d = design(id), q = new Int16Array(GUNBUF, m.o, m.nv * 3);
  const muzzle = m.muzzle; let fore = null;
  if (d.fore) {
    const fu = d.fore[0] / Math.max(0.05, d.muzzle[0]) * muzzle[0]; let lo = 9;
    for (let i = 0; i < m.nv; i++) { const u = -q[i * 3 + 2] * m.sc, y = q[i * 3 + 1] * m.sc; if (Math.abs(u - fu) < 0.025 && y > -0.03 && y < lo) lo = y; }
    fore = [fu, lo < 9 ? lo + 0.012 : d.fore[1]];
  }
  const cat = WEAPONS[id] ? WEAPONS[id].cat : '';
  const grip = cat === 'pistol' || id === 'zeus' ? [0.0, 0.03] : [0.0, -0.005];
  return { fore, muzzle, grip };
}
export function gunInfo(id) { if (GUNS && GUNS[id]) { if (!icache.has(id)) icache.set(id, importedInfo(id)); return icache.get(id); } if (!icache.has(id)) { const d = design(id); icache.set(id, { fore: d.fore, muzzle: d.muzzle, grip: d.grip }); } return icache.get(id); }
export function gunGeo(id, finish = 0) {
  const key = id + ':' + finish;
  if (gcache.has(key)) return gcache.get(key);
  if (GUNS && GUNS[id]) { const g = importedGeo(id, finish); gcache.set(key, g); return g; }
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
  gcache.set(key, g); if (!icache.has(id)) icache.set(id, { fore: d.fore, muzzle: d.muzzle, grip: d.grip });
  return g;
}
export function gunMesh(id, finish = 0) { return new THREE.Mesh(gunGeo(id, finish), MAT); }

// ---------------- personajes ----------------
// Un solo modelo por bando, inspirado en los clásicos: T con pasamontañas, campera de cuero y chaleco de
// cargadores (estilo Fénix); CT con casco, antiparras, máscara de gas y chaleco táctico (estilo SAS).
export const SKINS = {
  T: [{ name: 'Terrorista', shirt: '#6a2a22', pants: '#2c2b29', vest: '#46402f', glove: '#1e1e1e', boots: '#2a241d', skin: '#9a7458', head: 'balaclava', hc: '#2c2c2a' }],
  CT: [{ name: 'Contraterrorista', shirt: '#3d4352', pants: '#33373f', vest: '#4a5142', glove: '#141414', boots: '#1b1b1b', skin: '#c49670', head: 'sas', hc: '#4f5544' }],
};
export const skinOf = (team) => (SKINS[team] || SKINS.T)[0];
const pcache = {};
// cápsula escalada (torso, pelvis): radio r, largo del tramo recto len, escala en x y z
function caps(r, len, sx, sz, u, y, col, x = 0) { const g = new THREE.CapsuleGeometry(r, len, 6, 16); g.scale(sx, 1, sz); g.translate(x, y, -u); return paint(g, col); }
function bodyGeos(team) {
  const key = team; if (pcache[key]) return pcache[key];
  const S = skinOf(team), T = team === 'T';
  // torso con forma: más ancho en el pecho que en la cintura
  const tb = [
    caps(0.15, 0.2, 1.22, 0.74, 0, 0.3, S.shirt), // pecho y abdomen
    caps(0.13, 0.04, 1.3, 0.8, 0, 0.02, S.pants), // pelvis
    ell(0.075, 0.07, 0.075, 0, 0.46, S.shirt, 0.19), ell(0.075, 0.07, 0.075, 0, 0.46, S.shirt, -0.19), // hombros
    vcyl(0.055, 0.062, 0.1, 0.55, T ? S.hc : '#2b2e29'), // cuello (cubierto)
    rbox(0.34, 0.05, 0.22, 0, 0.1, '#26221c', 0, 0.02), box(0.05, 0.04, 0.03, 0.115, 0.1, '#8a7a50'), // cinturón y hebilla
  ];
  if (T) {
    // campera de cuero abierta, chaleco de cargadores (Fénix): 4 bolsillos con cargadores asomando, radio
    tb.push(box(0.07, 0.38, 0.02, 0.11, 0.3, '#2e241a', -0.1), box(0.07, 0.38, 0.02, 0.11, 0.3, '#2e241a', 0.1)); // solapas
    tb.push(rbox(0.34, 0.17, 0.25, 0, 0.27, S.vest, 0, 0.04), rbox(0.05, 0.26, 0.25, 0, 0.4, S.vest, 0.12, 0.02), rbox(0.05, 0.26, 0.25, 0, 0.4, S.vest, -0.12, 0.02));
    for (const zx of [-0.12, -0.04, 0.04, 0.12]) tb.push(rbox(0.07, 0.12, 0.045, 0.14, 0.26, '#5a4c35', zx, 0.012), rbox(0.05, 0.05, 0.02, 0.135, 0.34, '#1b1b1b', zx, 0.008));
    tb.push(box(0.045, 0.1, 0.035, 0.115, 0.42, '#1b1b1b', 0.1), box(0.008, 0.07, 0.008, 0.115, 0.5, '#111', 0.11)); // radio y antena
    tb.push(rbox(0.28, 0.3, 0.1, -0.14, 0.3, '#3a3326', 0, 0.04), rbox(0.2, 0.08, 0.04, -0.2, 0.38, '#2b261c', 0, 0.015)); // mochila
  } else {
    // chaleco portaplacas (SAS/SEAL): placas, bolsillos de cargadores, cinta molle, parche y radio
    tb.push(rbox(0.38, 0.34, 0.27, 0, 0.32, S.vest, 0, 0.05), rbox(0.36, 0.3, 0.05, -0.14, 0.32, S.vest, 0, 0.02));
    for (const zx of [-0.1, 0, 0.1]) tb.push(rbox(0.085, 0.13, 0.05, 0.155, 0.22, '#353a31', zx, 0.015), box(0.07, 0.025, 0.03, 0.16, 0.3, '#2a2e27', zx));
    for (let i = 0; i < 4; i++) tb.push(box(0.34, 0.012, 0.012, 0.15, 0.36 + i * 0.03, '#2a2e27'));
    tb.push(box(0.06, 0.04, 0.01, 0.17, 0.44, '#8a8f84', 0.09)); // parche
    tb.push(box(0.06, 0.12, 0.05, 0.08, 0.44, '#1b1d1a', -0.17), box(0.008, 0.08, 0.008, 0.08, 0.53, '#111', -0.18)); // radio al hombro
    tb.push(ell(0.08, 0.04, 0.085, 0, 0.5, S.vest, 0.15), ell(0.08, 0.04, 0.085, 0, 0.5, S.vest, -0.15)); // hombreras
  }
  const torso = mergeGeometries(tb);
  // cabeza: cráneo, mandíbula, nariz y orejas; T con pasamontañas, CT con casco, antiparras y protección auditiva
  const hb = [], hc = S.hc, face = T ? hc : '#2a2d28'; // los dos con la cara cubierta (pasamontañas / máscara)
  hb.push(ell(0.098, 0.118, 0.108, 0, 0.12, face)); // cráneo
  hb.push(ell(0.082, 0.06, 0.088, 0.02, 0.055, face)); // mandíbula
  hb.push(ell(0.016, 0.024, 0.02, 0.1, 0.105, face)); // nariz
  hb.push(ell(0.018, 0.034, 0.026, 0, 0.115, face, 0.1), ell(0.018, 0.034, 0.026, 0, 0.115, face, -0.1)); // orejas
  if (T) {
    hb.push(rbox(0.14, 0.04, 0.03, 0.09, 0.145, S.skin, 0, 0.012)); // ranura de los ojos
    for (const sx of [-0.035, 0.035]) hb.push(ell(0.016, 0.01, 0.006, 0.107, 0.145, '#efe8de', sx), ell(0.007, 0.007, 0.004, 0.112, 0.145, '#221a14', sx)); // ojos
    hb.push(ell(0.104, 0.015, 0.114, 0, 0.215, '#1d1d1d')); // vincha de las antiparras
    hb.push(rbox(0.17, 0.045, 0.035, 0.09, 0.215, '#2b3a44', 0, 0.015), rbox(0.13, 0.03, 0.008, 0.108, 0.215, '#6d8ea0', 0, 0.006)); // antiparras levantadas
  } else {
    hb.push(ell(0.096, 0.07, 0.04, 0.08, 0.06, '#2b2e29')); // cuello/máscara de tela
    hb.push(ell(0.128, 0.11, 0.135, 0, 0.165, hc, 0, true), ell(0.132, 0.018, 0.14, 0, 0.165, hc)); // casco
    hb.push(rbox(0.05, 0.05, 0.085, 0, 0.185, '#2a2d26', 0.128, 0.015), rbox(0.05, 0.05, 0.085, 0, 0.185, '#2a2d26', -0.128, 0.015)); // rieles
    hb.push(ell(0.035, 0.045, 0.045, 0, 0.11, '#1e201c', 0.112), ell(0.035, 0.045, 0.045, 0, 0.11, '#1e201c', -0.112)); // auriculares
    hb.push(box(0.05, 0.035, 0.035, 0.11, 0.255, '#111')); // soporte NVG
    hb.push(rbox(0.18, 0.06, 0.04, 0.09, 0.145, '#121212', 0, 0.02), rbox(0.15, 0.04, 0.01, 0.112, 0.146, '#3a4f5a', 0, 0.005)); // antiparras
  }
  const head = mergeGeometries(hb);
  const kneepad = col => rbox(0.1, 0.11, 0.05, 0.065, -0.02, col, 0, 0.025);
  const thigh = mergeGeometries([vcyl(0.085, 0.066, 0.48, -0.23, S.pants), rbox(0.04, 0.12, 0.09, 0, -0.22, T ? '#2b2f35' : '#2a2e27', 0.085, 0.012)]); // bolsillo cargo
  const shin = mergeGeometries([vcyl(0.064, 0.052, 0.42, -0.2, S.pants), kneepad(T ? '#202020' : '#191b19'), rbox(0.12, 0.12, 0.25, 0.04, -0.4, S.boots, 0, 0.04), rbox(0.13, 0.03, 0.26, 0.04, -0.465, '#0f0f0f', 0, 0.012)]);
  const limb = (r0, r1, col) => { const g = new THREE.CylinderGeometry(r0, r1, 1, 14); g.rotateX(Math.PI / 2); return paint(g, col); };
  const upper = limb(0.06, 0.052, S.shirt), fore = limb(0.05, 0.042, S.shirt);
  const hand = mergeGeometries([rbox(0.07, 0.08, 0.1, 0, 0, S.glove, 0, 0.03), ell(0.02, 0.02, 0.04, 0.02, 0.0, S.glove, 0.035)]);
  return (pcache[key] = { torso, head, thigh, shin, upper, fore, hand, S });
}
// modelo del jugador: mira hacia -z, pies en y=0. Los brazos se resuelven con IK hacia el arma.
export function makePlayerModel(team, si = 0) {
  const G = bodyGeos(team);
  const ag = makeAgent(team);
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
  root.userData = { body, hips, legs, chest, neck, gun, arms, gunId: null, phase: 0, team, si, ag, armT: [{ target: new THREE.Vector3(), pole: new THREE.Vector3() }, { target: new THREE.Vector3(), pole: new THREE.Vector3() }] };
  if (ag) { // modelo de CS2 con esqueleto: el rig procedural queda invisible y solo lo maneja
    root.add(ag.holder);
    root.traverse(o => { if (o.isMesh && o !== ag.mesh && !isUnder(o, gun)) o.visible = false; });
  }
  return root;
}
export function setModelGun(root, id, finish = 0) {
  const u = root.userData, key = id + ':' + finish; if (u.gunId === key) return; u.gunId = key;
  u.gun.clear(); u.info = id ? gunInfo(id) : null; u.wid = id;
  if (id) { const m = gunMesh(id, finish); m.scale.setScalar(1.12); u.gun.add(m); if (id === 'dualies') { const m2 = gunMesh(id, finish); m2.scale.setScalar(1.12); m2.position.x = -0.24; u.gun.add(m2); } }
}
function isUnder(o, g) { for (let p = o; p; p = p.parent) if (p === g) return true; return false; }
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
  // disparo: el arma patea hacia atrás y arriba; recarga: se inclina y baja un poco
  u.kick = Math.max(0, (u.kick || 0) - dt * 8); if (o.fire > 0.03) u.kick = 1;
  u.rel = (u.rel || 0) + ((o.reload ? 1 : 0) - (u.rel || 0)) * Math.min(1, dt * 8); u.relPh = (u.relPh || 0) + dt * (o.reload ? 3 : 0);
  if (u.kick > 0) { u.gun.position.z += u.kick * 0.05; u.gun.rotation.x += u.kick * 0.12; }
  if (u.rel > 0.01) { u.gun.rotation.z = -u.rel * 0.5; u.gun.rotation.x -= u.rel * 0.35; u.gun.position.y -= u.rel * 0.06; }
  u.gun.updateMatrix();
  for (let k = 0; k < 2; k++) {
    const A = u.arms[k], right = k === 0;
    sh.set(right ? 0.24 : -0.24, 0.46, 0);
    let target = null;
    if (info) {
      if (right) target = tg.set(0, 0, cat === 'knife' ? 0.06 : 0).applyMatrix4(u.gun.matrix);
      else if (u.rel > 0.3 && cat !== 'knife') target = tg.set(-0.02, -0.12 - Math.abs(Math.sin(u.relPh)) * 0.12, -0.12).applyMatrix4(u.gun.matrix); // mano al cargador
      else if (info.fore && cat !== 'knife') target = tg.set(0, info.fore[1] * 1.12 - 0.02, -info.fore[0] * 1.12).applyMatrix4(u.gun.matrix);
      else if (u.wid === 'dualies') target = tg.set(-0.24, 0, 0).applyMatrix4(u.gun.matrix);
      else if (pistol) target = tg.set(-0.04, -0.04, 0.02).applyMatrix4(u.gun.matrix);
    }
    if (!target) target = tg.set(right ? 0.3 : -0.3, 0.02, -0.05 + sw * 0.15 * (right ? -1 : 1));
    pl.set(right ? 0.7 : -0.7, -0.5, 0.4);
    u.armT[k].target.copy(target); u.armT[k].pole.copy(pl); u.armT[k].handQ = null;
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
    for (let j = 0; j < 2; j++) { const A = u.arms[j], sgn = j === 0 ? 1 : -1; sh.set(sgn * 0.24, 0.46, 0); el.set(sgn * (0.24 + 0.28 * k), 0.46 - 0.12 * k, 0.12 * k * dir); tg.set(sgn * (0.3 + 0.45 * k), 0.38 - 0.1 * k, 0.3 * k * dir); placeSeg(A.u, sh, el); placeSeg(A.f, el, tg); A.h.position.copy(tg); u.armT[j].target.copy(tg); u.armT[j].pole.set(sgn * 0.6, 0.2, 0.5); }
    u.gun.visible = false;
  } else u.gun.visible = true;
  if (u.ag) poseAgent(u.ag, u, u.armT, o.dead > 0 ? 0.2 : (info ? 1 : 0.4), !!o.fp);
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
// cuchillo: agarre de martillo con el mango cruzado en diagonal por la palma (pomo en la base del meñique,
// hoja saliendo entre pulgar e índice); el dorso mira hacia adentro y la muñeca queda abajo/atrás.
// th = inclinación del mango en la palma, ph = giro del dorso alrededor de la hoja.
function knifePose(th, ph) {
  const c = Math.cos(th), s = Math.sin(th), cp = Math.cos(ph), sp = Math.sin(ph);
  const X = [s * sp, -s * cp, c], Y = [cp, sp, 0], Z = [-c * sp, c * cp, s];
  const h0 = [-0.004, -0.026, -0.036], H = [0, 0.002, 0.07];
  const pos = [0, 1, 2].map(i => H[i] - (X[i] * h0[0] + Y[i] * h0[1] + Z[i] * h0[2]));
  return { curl: [C(1.25, 1.5, 1.0), C(1.3, 1.5, 1.0), C(1.38, 1.5, 1.0), C(1.48, 1.5, 1.0)], thumb: [0.55, -0.8, -0.25, 0.75], basis: [X, Y, Z], tilt: 0, pos };
}
const POSES = {
  // mano derecha en la empuñadura: palma del lado derecho, dedos rodean el frente, índice en el gatillo
  grip: { curl: [C(0.35, 0.55, 0.35), C(1.35, 1.45, 0.9), C(1.4, 1.5, 0.9), C(1.45, 1.5, 0.9)], thumb: [0.35, -0.75, -0.55, 0.25], basis: [[0, -1, 0], [1, 0, 0], [0, 0, 1]], tilt: 0.3, pos: [0.034, -0.045, 0.006] },
  // mano izquierda debajo del guardamanos: palma arriba, dedos suben por el costado derecho
  fore: { curl: [C(0.5, 1.0, 0.6), C(0.55, 1.05, 0.6), C(0.6, 1.1, 0.6), C(0.65, 1.1, 0.6)], thumb: [-0.85, -0.45, 0.25, 0.1], basis: [[0, 0, -1], [0, -1, 0], [-1, 0, 0]], tilt: 0, pos: [-0.048, -0.04, 0] },
  // mano izquierda abrazando la derecha en las pistolas
  cup: { curl: [C(1.0, 1.0, 0.6), C(1.1, 1.1, 0.6), C(1.2, 1.1, 0.6), C(1.3, 1.1, 0.6)], thumb: [0.15, -0.3, -0.9, 0.05], basis: [[0, 1, 0], [-1, 0, 0], [0, 0, 1]], tilt: 0.3, pos: [-0.046, -0.06, -0.012] },
  // cuchillo: mano cerrada sobre el mango horizontal
  knife: knifePose(0.42, Math.PI + 0.45),
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
  // T (Leet): manga arremangada sobre el codo, antebrazo al aire y guante sin dedos; CT (SAS): manga gris azulada y guante
  const forearm = team === 'T'
    ? mergeGeometries([tube(0.04, 0.031, 1, 0, S.skin), tube(0.05, 0.047, 0.16, -0.1, S.shirt), tube(0.051, 0.05, 0.03, 0.0, '#4e1d17'), tube(0.034, 0.033, 0.07, 0.46, S.glove)])
    : mergeGeometries([tube(0.044, 0.034, 1, 0, S.shirt), tube(0.045, 0.043, 0.06, 0.05, S.shirt), tube(0.042, 0.04, 0.04, -0.15, S.shirt), tube(0.037, 0.036, 0.1, 0.43, '#2b2f38'), tube(0.033, 0.032, 0.03, 0.49, '#1d1e20')]);
  return (armCache[key] = { forearm });
}
function vmHand(team, si, pose, left) {
  const key = team + si + pose + (left ? 'L' : 'R'); if (handCache[key]) return handCache[key];
  const P = POSES[pose];
  return (handCache[key] = handGeo(skinOf(team, si), P.curl, P.thumb, left));
}
const HMAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0.0 });
export const GMAT = [new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.36, metalness: 0.55 }), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.08 })];
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
  const real = armsReady(team); u.rig = [null, null]; u.realT = real && team !== 'CT';
  u.arms.forEach((a, k) => {
    a.f.geometry = P.forearm; a.f.material = HMAT; const pz = u.poses[k] || 'fore';
    if (real) { // modelo real con huesos (se reusa por equipo y lado)
      u.rigs = u.rigs || {}; const key = team + k; let R = u.rigs[key]; if (!R) { R = u.rigs[key] = makeArm(team, k === 1); R.rig.scale.multiplyScalar(0.92); }
      const PP = POSES[pz]; R.pose = null; poseArm(R, pz, PP.curl, PP.thumb); a.h.add(R.rig); u.rig[k] = R;
    } else a.h.add(new THREE.Mesh(vmHand(team, si, pz, k === 1), HMAT));
  });
  // cargador suelto (en la mano izquierda durante la recarga)
  const isMagGun = WEAPONS[id] && WEAPONS[id].mag > 1 && cat !== 'heavy' && cat !== 'sniper' || id === 'awp';
  u.mag = null;
  if (isMagGun) { const mg = new THREE.Mesh(new RoundedBoxGeometry(0.026, cat === 'pistol' ? 0.09 : 0.13, 0.05, 2, 0.006), new THREE.MeshStandardMaterial({ color: '#2a2b2d', roughness: 0.5, metalness: 0.4 })); mg.position.set(0, -0.06, -0.03); mg.visible = false; u.arms[1].h.add(mg); u.mag = mg; }
  // dónde se sostiene respecto de la cámara
  u.base = id === 'dualies' ? [0.12, -0.13, -0.44] : cat === 'pistol' || id === 'zeus' ? [0.125, -0.12, -0.42] : cat === 'knife' ? [0.14, -0.125, -0.36] : nade ? [0.14, -0.14, -0.32] : cat === 'sniper' ? [0.15, -0.17, -0.44] : [0.15, -0.165, -0.37];
  u.rot = cat === 'knife' ? [0.12, 0.38, -0.18] : nade ? [0.1, 0.2, 0] : [0.03, 0.06, 0];
  vm.traverse(o => { o.renderOrder = 10; o.frustumCulled = false; });
}
// ubica las manos (pegadas al arma según la pose) y los antebrazos desde abajo de la pantalla
const hq2 = new THREE.Quaternion(), vT = new THREE.Vector3(), vW = new THREE.Vector3(), vEl2 = new THREE.Vector3(), gm = new THREE.Matrix4(), gq = new THREE.Quaternion(), hq = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3();
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
      if (info.grip && (right || pose === 'cup' || u.dual)) pos = [pos[0], pos[1] + info.grip[1], pos[2] - info.grip[0]];
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
    const R = u.rig && u.rig[k];
    if (R) { // el antebrazo del modelo apunta al codo; el T trae su propia manga, el CT usa la procedural
      if (R.pose !== pose && POSES[pose]) poseArm(R, pose, POSES[pose].curl, POSES[pose].thumb);
      tmpS.subVectors(vEl2, vW).applyQuaternion(hq2.copy(hq).invert()); aimFore(R, tmpS);
      if (u.realT) A.f.visible = false;
    }
  }
}
