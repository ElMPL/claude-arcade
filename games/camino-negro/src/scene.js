// Camino Negro — escena 3D estilo "bloques de plástico": tablero grueso, fichas-muñequito, casitas y dados.
import * as THREE from 'three';
import { SQUARES, GROUPS } from './data.js';

export const HALF = 6.1, CORNER = 1.6, TILE = 1;
const BH = 0.36; // alto del tablero

export function tileCenter(i) {
  const h = HALF, c = CORNER;
  if (i === 0) return [h - c / 2, h - c / 2];
  if (i < 10) return [h - c - (i - 0.5), h - c / 2];
  if (i === 10) return [-h + c / 2, h - c / 2];
  if (i < 20) return [-h + c / 2, h - c - (i - 10 - 0.5)];
  if (i === 20) return [-h + c / 2, -h + c / 2];
  if (i < 30) return [-h + c + (i - 20 - 0.5), -h + c / 2];
  if (i === 30) return [h - c / 2, -h + c / 2];
  return [h - c / 2, -h + c + (i - 30 - 0.5)];
}
// dirección "hacia afuera" del lado del tablero de ese casillero
export function sideOut(i) { return i < 10 ? [0, 1] : i < 20 ? [-1, 0] : i < 30 ? [0, -1] : [1, 0]; }
export function squareAt(x, z) {
  const h = HALF, c = CORNER; if (Math.abs(x) > h || Math.abs(z) > h) return -1;
  const inX = Math.abs(x) <= h - c, inZ = Math.abs(z) <= h - c;
  if (inX && inZ) return -1;
  if (!inX && !inZ) return x > 0 ? (z > 0 ? 0 : 30) : (z > 0 ? 10 : 20);
  if (z > h - c) return Math.min(9, Math.max(1, Math.floor(h - c - x) + 1));
  if (x < -h + c) return 10 + Math.min(9, Math.max(1, Math.floor(h - c - z) + 1));
  if (z < -h + c) return 20 + Math.min(9, Math.max(1, Math.floor(x + h - c) + 1));
  return 30 + Math.min(9, Math.max(1, Math.floor(z + h - c) + 1));
}

const FONT = '"Lilita One", "Fredoka", Arial Black, sans-serif';
function wrap(ctx, text, maxW) {
  const words = text.split(' '), lines = []; let cur = '';
  for (const w of words) { const t = cur ? cur + ' ' + w : w; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
  if (cur) lines.push(cur); return lines;
}
function fitFont(ctx, text, maxW, size, lines = 2) {
  for (let s = size; s > 14; s -= 2) { ctx.font = `${s}px ${FONT}`; const L = wrap(ctx, text, maxW); if (L.length <= lines && L.every(l => ctx.measureText(l).width <= maxW)) return [s, L]; }
  ctx.font = `14px ${FONT}`; return [14, wrap(ctx, text, maxW)];
}
const ICON = { go: '💸', jail: '🚔', free: '🏖️', gojail: '👮', tax: '🧾', rail: '🚆', card: '❓' };

// Dibuja todo el tablero en un canvas grande (200 px por unidad)
function boardCanvas(priceText) {
  const PX = 200, N = Math.round(HALF * 2 * PX), cv = document.createElement('canvas'); cv.width = cv.height = N;
  const x = cv.getContext('2d');
  x.fillStyle = '#d9f2d0'; x.fillRect(0, 0, N, N);
  // centro: logo y fondo
  const inner = (HALF - CORNER) * PX * 2, o = CORNER * PX;
  const g = x.createRadialGradient(N / 2, N / 2, 50, N / 2, N / 2, inner * 0.7); g.addColorStop(0, '#3a3550'); g.addColorStop(1, '#16131f');
  x.fillStyle = g; x.fillRect(o, o, inner, inner);
  // calles pintadas en el centro (guiño a la ruta)
  x.save(); x.translate(N / 2, N / 2); x.rotate(-Math.PI / 4);
  x.fillStyle = '#2a2733'; x.fillRect(-inner * 0.75, -150, inner * 1.5, 300);
  x.fillStyle = '#f7d722'; for (let k = -10; k <= 10; k++) x.fillRect(k * 120 - 40, -8, 80, 16);
  x.font = `190px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 26; x.strokeStyle = '#000'; x.strokeText('CAMINO NEGRO', 0, 0);
  const tg = x.createLinearGradient(0, -90, 0, 90); tg.addColorStop(0, '#ffffff'); tg.addColorStop(1, '#ffd23f');
  x.fillStyle = tg; x.fillText('CAMINO NEGRO', 0, 0);
  x.font = `56px ${FONT}`; x.lineWidth = 12; x.strokeText('el juego de la economía argentina', 0, 150); x.fillStyle = '#ff6a5c'; x.fillText('el juego de la economía argentina', 0, 150);
  x.restore();
  // lugares de los mazos
  const deckSpot = (cx, cz, label, col, rot) => { x.save(); x.translate(cx, cz); x.rotate(rot); x.strokeStyle = col; x.lineWidth = 10; x.setLineDash([26, 18]); x.strokeRect(-170, -110, 340, 220); x.setLineDash([]); x.font = `40px ${FONT}`; x.textAlign = 'center'; x.fillStyle = col; x.fillText(label, 0, 165); x.restore(); };
  deckSpot(N / 2 - 330, N / 2 - 330, 'CAMINO NEGRO', '#ff5a4d', -Math.PI / 4);
  deckSpot(N / 2 + 330, N / 2 + 330, 'LA ROSCA', '#ffae2a', -Math.PI / 4);

  for (const s of SQUARES) {
    const [cxw, czw] = tileCenter(s.i), cx = (cxw + HALF) * PX, cz = (czw + HALF) * PX;
    const corner = s.i % 10 === 0;
    const rot = s.i < 10 ? 0 : s.i < 20 ? Math.PI / 2 : s.i < 30 ? Math.PI : -Math.PI / 2;
    x.save(); x.translate(cx, cz); x.rotate(rot);
    const w = (corner ? CORNER : TILE) * PX, hgt = CORNER * PX;
    x.fillStyle = '#fbf6e9'; x.fillRect(-w / 2, -hgt / 2, w, hgt);
    x.strokeStyle = '#1b1b1b'; x.lineWidth = 6; x.strokeRect(-w / 2 + 3, -hgt / 2 + 3, w - 6, hgt - 6);
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#1b1b1b';
    if (corner) {
      const bg = { go: '#ffe27a', jail: '#ffb1a8', free: '#a7e3ff', gojail: '#c4b5ff' }[s.t];
      x.fillStyle = bg; x.fillRect(-w / 2 + 6, -hgt / 2 + 6, w - 12, hgt - 12);
      x.rotate(Math.PI / 4 * (s.i === 0 || s.i === 20 ? -1 : 1) * 0); // derecho, más legible
      x.font = `120px ${FONT}`; x.fillText(ICON[s.t], 0, -40);
      x.fillStyle = '#1b1b1b'; const [fs, L] = fitFont(x, s.name, w - 40, 44, 2); L.forEach((l, k) => x.fillText(l, 0, 70 + k * fs * 1.05 - (L.length - 1) * fs / 2));
      if (s.t === 'jail') { x.fillStyle = '#333'; for (let k = 0; k < 5; k++) x.fillRect(-w / 2 + 16 + k * 22, -hgt / 2 + 16, 8, 120); }
      x.restore(); continue;
    }
    if (s.t === 'prop') { x.fillStyle = GROUPS[s.g].col; x.fillRect(-w / 2 + 6, -hgt / 2 + 6, w - 12, 62); x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(-w / 2 + 6, -hgt / 2 + 62, w - 12, 6); }
    x.fillStyle = '#1b1b1b';
    const top = s.t === 'prop' ? -hgt / 2 + 110 : -hgt / 2 + 60;
    const [fs, L] = fitFont(x, s.name, w - 22, 40, 3);
    L.forEach((l, k) => x.fillText(l, 0, top + k * fs * 1.0));
    if (s.t !== 'prop') { x.font = `78px ${FONT}`; x.fillText(s.t === 'util' ? (s.name.includes('Luz') ? '💡' : '🚰') : ICON[s.t], 0, 30); }
    if (s.t === 'card') { x.fillStyle = s.deck === 'negro' ? '#e8352f' : '#ff9326'; x.font = `30px ${FONT}`; x.fillText(s.deck === 'negro' ? 'MALA SUERTE' : 'TARJETA', 0, 95); }
    const pr = s.t === 'tax' ? priceText(s.v) : s.price ? priceText(s.price) : '';
    if (pr) { x.fillStyle = '#1b1b1b'; x.font = `34px ${FONT}`; x.fillText(pr, 0, hgt / 2 - 34); }
    x.restore();
  }
  x.strokeStyle = '#1b1b1b'; x.lineWidth = 10; x.strokeRect(o, o, inner, inner); x.strokeRect(5, 5, N - 10, N - 10);
  return cv;
}

function studTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
  x.fillStyle = '#5cb24a'; x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#66c052'; x.beginPath(); x.arc(64, 64, 34, 0, 7); x.fill();
  x.fillStyle = '#4fa23f'; x.beginPath(); x.arc(68, 68, 34, 0, 7); x.fill(); x.fillStyle = '#62b84e'; x.beginPath(); x.arc(64, 64, 32, 0, 7); x.fill();
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function faceTexture(kind) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
  x.fillStyle = '#000';
  if (kind === 1) { x.fillRect(34, 46, 18, 8); x.fillRect(76, 46, 18, 8); } else { x.beginPath(); x.ellipse(44, 52, 7, 11, 0, 0, 7); x.ellipse(84, 52, 7, 11, 0, 0, 7); x.fill(); }
  x.lineWidth = 7; x.lineCap = 'round'; x.beginPath();
  if (kind === 2) { x.moveTo(44, 92); x.lineTo(84, 92); } else x.arc(64, 74, 26, 0.25 * Math.PI, 0.75 * Math.PI);
  x.stroke();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const SKINS = ['#f5c542', '#e8b48a', '#c68642', '#8d5524', '#f1d0b5', '#f5c542'];
export const HATS = ['Gorra', 'Galera', 'Gorro de lana', 'Pelado', 'Casco de obra', 'Boina'];
// muñequito de bloques: piernas, torso, brazos y cabezota
export function makeAvatar(col, look = 0) {
  const g = new THREE.Group(), M = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55 });
  const shirt = M(col), pants = M('#2a3a6a'), skin = M(SKINS[look % SKINS.length]);
  const box = (w, h, d, m, x, y, z) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; g.add(b); return b; };
  const legL = box(0.11, 0.22, 0.12, pants, -0.065, 0.11, 0), legR = box(0.11, 0.22, 0.12, pants, 0.065, 0.11, 0);
  [legL, legR].forEach(l => { l.geometry.translate(0, -0.11, 0); l.position.y = 0.22; });
  const torso = box(0.26, 0.24, 0.14, shirt, 0, 0.34, 0);
  const armL = box(0.1, 0.23, 0.11, shirt, -0.18, 0.45, 0), armR = box(0.1, 0.23, 0.11, shirt, 0.18, 0.45, 0);
  [armL, armR].forEach(a => { a.geometry.translate(0, -0.1, 0); a.position.y = 0.45; });
  const head = new THREE.Group(); head.position.y = 0.55; g.add(head);
  const hm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), [skin, skin, skin, skin, new THREE.MeshStandardMaterial({ color: SKINS[look % SKINS.length], map: faceTexture(look % 3), roughness: 0.6 }), skin]);
  hm.position.y = 0.1; hm.castShadow = true; head.add(hm);
  const hat = look % HATS.length, hc = M(['#d23030', '#151515', '#3f7fd0', SKINS[look % SKINS.length], '#f2b61c', '#2b2b2b'][hat]);
  const hb = (w, h, d, x, y, z) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), hc); b.position.set(x, y, z); b.castShadow = true; head.add(b); };
  if (hat === 0) { hb(0.22, 0.07, 0.22, 0, 0.22, 0); hb(0.2, 0.02, 0.1, 0, 0.19, 0.14); }
  else if (hat === 1) { hb(0.3, 0.02, 0.3, 0, 0.21, 0); hb(0.18, 0.18, 0.18, 0, 0.3, 0); }
  else if (hat === 2) { hb(0.22, 0.09, 0.22, 0, 0.22, 0); hb(0.06, 0.06, 0.06, 0, 0.29, 0); }
  else if (hat === 4) { hb(0.24, 0.08, 0.24, 0, 0.23, 0); hb(0.3, 0.02, 0.3, 0, 0.19, 0); }
  else if (hat === 5) { hb(0.24, 0.05, 0.24, 0.02, 0.215, 0); }
  g.userData = { legL, legR, armL, armR, head, t: 0 };
  g.scale.setScalar(2.0);
  return g;
}
export function animAvatar(av, walk, dt, cheer = 0) {
  const u = av.userData; u.t += dt * (walk ? 14 : 2);
  const s = walk ? Math.sin(u.t) * 0.8 : 0;
  u.legL.rotation.x = s; u.legR.rotation.x = -s;
  u.armL.rotation.x = -s; u.armR.rotation.x = s;
  if (cheer) { u.armL.rotation.z = -2.6; u.armR.rotation.z = 2.6; } else { u.armL.rotation.z = 0; u.armR.rotation.z = 0; }
  u.head.position.y = 0.55 + (walk ? Math.abs(Math.sin(u.t)) * 0.02 : Math.sin(u.t) * 0.006);
}

function diceTex(n) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
  x.fillStyle = '#fff'; x.fillRect(0, 0, 128, 128); x.strokeStyle = '#ddd'; x.lineWidth = 6; x.strokeRect(3, 3, 122, 122);
  const P = { 1: [[64, 64]], 2: [[36, 36], [92, 92]], 3: [[34, 34], [64, 64], [94, 94]], 4: [[36, 36], [92, 36], [36, 92], [92, 92]], 5: [[34, 34], [94, 34], [64, 64], [34, 94], [94, 94]], 6: [[36, 30], [92, 30], [36, 64], [92, 64], [36, 98], [92, 98]] }[n];
  x.fillStyle = n === 1 ? '#e8352f' : '#1b1b1b'; for (const [a, b] of P) { x.beginPath(); x.arc(a, b, 12, 0, 7); x.fill(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// orden de caras de BoxGeometry: +x, -x, +y, -y, +z, -z
const FACE_NUM = [3, 4, 1, 6, 2, 5];
const FACE_ROT = { 1: [0, 0, 0], 6: [Math.PI, 0, 0], 2: [-Math.PI / 2, 0, 0], 5: [Math.PI / 2, 0, 0], 3: [0, 0, Math.PI / 2], 4: [0, 0, -Math.PI / 2] };

export function createScene(canvas, priceText) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#8fd3ff'); scene.fog = new THREE.Fog('#8fd3ff', 30, 70);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight('#ffffff', '#4f7f3a', 1.5));
  const sun = new THREE.DirectionalLight('#fff4dd', 2.4); sun.position.set(8, 16, 6); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 }); sun.shadow.bias = -0.0005; scene.add(sun);

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), new THREE.MeshStandardMaterial({ map: studTexture(), roughness: 0.9 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

  // tablero
  const tex = new THREE.CanvasTexture(boardCanvas(priceText)); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const side = new THREE.MeshStandardMaterial({ color: '#2b2440', roughness: 0.5 });
  const top = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.42 });
  const board = new THREE.Mesh(new THREE.BoxGeometry(HALF * 2, BH, HALF * 2), [side, side, top, side, side, side]);
  board.position.y = BH / 2; board.receiveShadow = true; board.castShadow = true; scene.add(board);
  // borde de plástico
  const rimM = new THREE.MeshStandardMaterial({ color: '#ffcf3a', roughness: 0.35 });
  for (const [w, d, x, z] of [[HALF * 2 + 0.3, 0.15, 0, HALF + 0.075], [HALF * 2 + 0.3, 0.15, 0, -HALF - 0.075], [0.15, HALF * 2, HALF + 0.075, 0], [0.15, HALF * 2, -HALF - 0.075, 0]]) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(w, BH + 0.06, d), rimM); r.position.set(x, (BH + 0.06) / 2, z); r.castShadow = r.receiveShadow = true; scene.add(r);
  }
  // mazos
  const deck = (x, z, col, txt) => {
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 168; const c = cv.getContext('2d');
    c.fillStyle = col; c.fillRect(0, 0, 256, 168); c.strokeStyle = '#fff'; c.lineWidth = 10; c.strokeRect(10, 10, 236, 148);
    c.fillStyle = '#fff'; c.font = `28px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(txt, 128, 58); c.font = `64px ${FONT}`; c.fillText('?', 128, 125);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const sm = new THREE.MeshStandardMaterial({ color: '#f5f0e6' });
    const m = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.22, 1), [sm, sm, new THREE.MeshStandardMaterial({ map: t, roughness: 0.4 }), sm, sm, sm]);
    m.position.set(x, BH + 0.11, z); m.rotation.y = Math.PI / 4; m.castShadow = true; scene.add(m); return m;
  };
  const decks = { negro: deck(-1.65, -1.65, '#1b1b1b', 'CAMINO NEGRO'), rosca: deck(1.65, 1.65, '#ff8a1f', 'LA ROSCA') };

  // dados
  const dmats = n => FACE_NUM.map(k => new THREE.MeshStandardMaterial({ map: diceTex(k), roughness: 0.3 }));
  const dice = [0, 1].map(k => { const d = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), dmats()); d.castShadow = true; d.position.set(k ? 0.4 : -0.4, BH + 0.21, 0); scene.add(d); return d; });
  let diceAnim = null;
  function rollDice(vals) { diceAnim = { t: 0, vals, spin: dice.map(() => new THREE.Vector3(Math.random() * 20 + 10, Math.random() * 20 + 10, Math.random() * 20 + 10)) }; }

  // propiedades: marcador del dueño, casas, hipoteca
  const props = {};
  const houseGeo = new THREE.BoxGeometry(0.16, 0.13, 0.16), roofGeo = new THREE.ConeGeometry(0.135, 0.1, 4);
  const hotelGeo = new THREE.BoxGeometry(0.5, 0.22, 0.2);
  const greenM = new THREE.MeshStandardMaterial({ color: '#21b357', roughness: 0.4 }), redM = new THREE.MeshStandardMaterial({ color: '#e8352f', roughness: 0.4 }), roofM = new THREE.MeshStandardMaterial({ color: '#156e36' });
  function setProp(i, own, colOf) {
    let P = props[i];
    const s = SQUARES[i], [cx, cz] = tileCenter(i), [ox, oz] = sideOut(i);
    if (!P) { P = props[i] = { g: new THREE.Group(), k: '' }; scene.add(P.g); }
    const key = own ? `${own.o}|${own.h}|${own.m}|${colOf(own.o)}` : '';
    if (P.k === key) return; P.k = key;
    P.g.clear(); if (!own) return;
    // banderita del dueño en el borde exterior
    const flagM = new THREE.MeshStandardMaterial({ color: colOf(own.o), roughness: 0.35 });
    const along = ox ? [0, 1] : [1, 0];
    const plate = new THREE.Mesh(new THREE.BoxGeometry(along[0] ? 0.86 : 0.22, 0.06, along[1] ? 0.86 : 0.22), flagM);
    plate.position.set(cx + ox * 0.92, BH + 0.03, cz + oz * 0.92); plate.castShadow = true; P.g.add(plate);
    if (own.m) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(ox ? 1.5 : 0.94, 0.01, oz ? 1.5 : 0.94), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.45 }));
      m.position.set(cx, BH + 0.006, cz); P.g.add(m);
      const x = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.08), redM); x.position.set(cx, BH + 0.03, cz); x.rotation.y = Math.PI / 4; P.g.add(x);
      const x2 = x.clone(); x2.rotation.y = -Math.PI / 4; P.g.add(x2);
    }
    if (s.t === 'prop' && own.h) {
      const bx = cx - ox * 0.6, bz = cz - oz * 0.6; // sobre la franja de color
      if (own.h === 5) { const h = new THREE.Mesh(hotelGeo, redM); if (ox) h.rotation.y = Math.PI / 2; h.position.set(bx, BH + 0.11, bz); h.castShadow = true; P.g.add(h); }
      else for (let k = 0; k < own.h; k++) {
        const off = (k - (own.h - 1) / 2) * 0.21;
        const h = new THREE.Mesh(houseGeo, greenM), r = new THREE.Mesh(roofGeo, roofM);
        const px = bx + along[0] * off, pz = bz + along[1] * off;
        h.position.set(px, BH + 0.065, pz); r.position.set(px, BH + 0.18, pz); r.rotation.y = Math.PI / 4; h.castShadow = r.castShadow = true; P.g.add(h, r);
      }
    }
  }

  // resaltado del casillero elegido
  const hl = new THREE.Mesh(new THREE.BoxGeometry(1, 0.02, 1), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.35 }));
  hl.visible = false; scene.add(hl);
  function highlight(i) {
    if (i < 0) { hl.visible = false; return; }
    const [cx, cz] = tileCenter(i), corner = i % 10 === 0, [ox] = sideOut(i);
    hl.scale.set(corner ? CORNER : ox ? CORNER : TILE, 1, corner ? CORNER : ox ? TILE : CORNER);
    hl.position.set(cx, BH + 0.012, cz); hl.visible = true;
  }

  // cámara orbital
  const cam = { yaw: 0, pitch: 0.95, dist: 14.5, tx: 0, tz: 0, wantX: 0, wantZ: 0, drag: null };
  canvas.addEventListener('pointerdown', e => { cam.drag = { x: e.clientX, y: e.clientY, moved: 0 }; });
  addEventListener('pointermove', e => { if (!cam.drag) return; const dx = e.clientX - cam.drag.x, dy = e.clientY - cam.drag.y; cam.drag.moved += Math.abs(dx) + Math.abs(dy); cam.drag.x = e.clientX; cam.drag.y = e.clientY; cam.yaw -= dx * 0.006; cam.pitch = Math.min(1.45, Math.max(0.35, cam.pitch + dy * 0.004)); });
  addEventListener('pointerup', () => { setTimeout(() => { cam.drag = null; }, 0); });
  canvas.addEventListener('wheel', e => { cam.dist = Math.min(26, Math.max(6, cam.dist * (1 + Math.sign(e.deltaY) * 0.08))); e.preventDefault(); }, { passive: false });
  // pinza en el celu
  let pinch = 0; canvas.addEventListener('touchmove', e => { if (e.touches.length === 2) { const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); if (pinch) cam.dist = Math.min(26, Math.max(6, cam.dist * pinch / d)); pinch = d; } }, { passive: true });
  canvas.addEventListener('touchend', () => { pinch = 0; });
  const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
  function pick(clientX, clientY) {
    const r = canvas.getBoundingClientRect(); v2.set((clientX - r.left) / r.width * 2 - 1, -(clientY - r.top) / r.height * 2 + 1);
    ray.setFromCamera(v2, camera); const hit = ray.intersectObject(board)[0]; if (!hit) return -1;
    return squareAt(hit.point.x, hit.point.z);
  }
  function resize() { const w = canvas.clientWidth, h = canvas.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 1 ? 62 : 45; camera.updateProjectionMatrix(); }
  addEventListener('resize', resize); resize();

  function update(dt) {
    cam.tx += (cam.wantX - cam.tx) * Math.min(1, dt * 2); cam.tz += (cam.wantZ - cam.tz) * Math.min(1, dt * 2);
    const d = cam.dist * (camera.aspect < 1 ? 1.5 : 1);
    camera.position.set(cam.tx + Math.sin(cam.yaw) * Math.cos(cam.pitch) * d, Math.sin(cam.pitch) * d, cam.tz + Math.cos(cam.yaw) * Math.cos(cam.pitch) * d);
    camera.lookAt(cam.tx, 0, cam.tz);
    if (diceAnim) {
      const a = diceAnim; a.t += dt; const k = Math.min(1, a.t / 0.95);
      dice.forEach((d, j) => {
        const fr = FACE_ROT[a.vals[j]];
        if (k < 1) { d.rotation.x += a.spin[j].x * dt * (1 - k); d.rotation.y += a.spin[j].y * dt * (1 - k); d.rotation.z += a.spin[j].z * dt * (1 - k); d.position.y = BH + 0.21 + Math.abs(Math.sin(k * Math.PI * 3)) * (1 - k) * 1.6; d.position.x = (j ? 0.4 : -0.4) + Math.sin(k * 9 + j) * (1 - k) * 0.8; d.position.z = Math.cos(k * 7 + j) * (1 - k) * 0.8; }
        else { d.rotation.set(fr[0], j * 0.4, fr[2]); d.position.set(j ? 0.4 : -0.4, BH + 0.21, 0); }
      });
      if (k >= 1) diceAnim = null;
    }
    renderer.render(scene, camera);
  }
  function project(v) { const p = v.clone().project(camera); return [(p.x + 1) / 2 * canvas.clientWidth, (1 - p.y) / 2 * canvas.clientHeight, p.z < 1]; }
  return { scene, camera, renderer, update, cam, rollDice, setProp, highlight, pick, project, decks, BH, dice };
}
