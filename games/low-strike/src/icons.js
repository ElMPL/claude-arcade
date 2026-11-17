// Íconos blancos (siluetas) de cada arma, como los del HUD y el menú de compra de CS2.
import * as THREE from 'three';
import { gunGeo } from './models.js';

let R = null;
const cache = {};
const WHITE = new THREE.MeshBasicMaterial({ color: '#ffffff' });
function drawGear(id, x, W, H) {
  x.fillStyle = '#fff'; x.strokeStyle = '#fff'; x.lineWidth = 3; x.lineJoin = 'round';
  const cx = W / 2, cy = H / 2;
  const vest = (ox, s) => { x.beginPath(); x.moveTo(ox - 12 * s, cy - 16 * s); x.lineTo(ox - 5 * s, cy - 16 * s); x.lineTo(ox, cy - 10 * s); x.lineTo(ox + 5 * s, cy - 16 * s); x.lineTo(ox + 12 * s, cy - 16 * s); x.lineTo(ox + 15 * s, cy - 4 * s); x.lineTo(ox + 13 * s, cy + 18 * s); x.lineTo(ox - 13 * s, cy + 18 * s); x.lineTo(ox - 15 * s, cy - 4 * s); x.closePath(); x.fill(); x.fillStyle = '#000'; x.font = `bold ${10 * s}px sans-serif`; x.textAlign = 'center'; x.fillText('100', ox, cy + 8 * s); x.fillStyle = '#fff'; };
  if (id === 'vest') vest(cx, 1);
  else if (id === 'vesthelm') { vest(cx + 10, 1); x.beginPath(); x.arc(cx - 14, cy + 6, 11, Math.PI, 0); x.lineTo(cx - 1, cy + 8); x.lineTo(cx - 27, cy + 8); x.closePath(); x.fill(); }
  else if (id === 'defuser') { x.beginPath(); x.moveTo(cx - 20, cy + 8); x.quadraticCurveTo(cx, cy - 14, cx + 18, cy - 4); x.stroke(); x.beginPath(); x.moveTo(cx - 20, cy - 6); x.quadraticCurveTo(cx, cy + 14, cx + 18, cy + 4); x.stroke(); x.beginPath(); x.arc(cx - 2, cy + 1, 3, 0, 7); x.fill(); }
  else if (id === 'flash' || id === 'smoke' || id === 'decoy' || id === 'incendiary') {
    const h = id === 'smoke' ? 30 : 24, w = id === 'smoke' ? 13 : 12;
    x.beginPath(); x.roundRect(cx - w / 2, cy - h / 2 + 4, w, h, 3); x.fill();
    x.fillRect(cx - 3, cy - h / 2, 6, 5); x.fillRect(cx + 2, cy - h / 2 + 1, 10, 3); x.fillRect(cx + 9, cy - h / 2 + 1, 3, 12);
    x.fillStyle = '#000'; if (id === 'smoke') for (let k = 0; k < 3; k++) x.fillRect(cx - 4, cy - 6 + k * 7, 8, 2); if (id === 'decoy') x.fillRect(cx - 4, cy, 8, 3); if (id === 'flash') x.fillRect(cx - w / 2, cy + 2, w, 2);
  }
  else if (id === 'he') { x.beginPath(); x.ellipse(cx, cy + 4, 11, 13, 0, 0, 7); x.fill(); x.fillRect(cx - 3, cy - 12, 6, 6); x.fillRect(cx + 2, cy - 11, 9, 3); x.fillRect(cx + 8, cy - 11, 3, 13); x.fillStyle = '#000'; for (let k = -1; k <= 1; k++) x.fillRect(cx - 10, cy + 4 + k * 6, 20, 1.5); }
  else if (id === 'molotov') { x.beginPath(); x.moveTo(cx - 3, cy - 16); x.lineTo(cx + 3, cy - 16); x.lineTo(cx + 3, cy - 6); x.lineTo(cx + 9, cy); x.lineTo(cx + 9, cy + 16); x.lineTo(cx - 9, cy + 16); x.lineTo(cx - 9, cy); x.lineTo(cx - 3, cy - 6); x.closePath(); x.fill(); x.fillRect(cx - 5, cy - 22, 4, 7); }
  else if (id === 'c4') { x.fillRect(cx - 20, cy - 9, 40, 18); x.fillStyle = '#000'; x.fillRect(cx - 4, cy - 6, 14, 7); }
  else if (id === 'hs') { x.beginPath(); x.arc(cx, cy - 2, 10, 0, 7); x.fill(); x.fillStyle = '#000'; x.fillRect(cx - 7, cy - 4, 5, 4); x.fillRect(cx + 2, cy - 4, 5, 4); x.fillStyle = '#fff'; x.fillRect(cx - 6, cy + 6, 12, 6); }
  else if (id === 'world' || id === 'skull') { x.beginPath(); x.arc(cx, cy - 3, 10, 0, 7); x.fill(); x.fillRect(cx - 6, cy + 4, 12, 7); }
  else if (id === 'fire') { x.beginPath(); x.moveTo(cx, cy - 16); x.quadraticCurveTo(cx + 14, cy, cx + 8, cy + 14); x.lineTo(cx - 8, cy + 14); x.quadraticCurveTo(cx - 14, cy, cx, cy - 16); x.fill(); }
  else return false;
  return true;
}
// devuelve un dataURL con la silueta blanca del arma (de costado, mirando a la derecha)
export function iconURL(id, W = 160, H = 56) {
  const key = id + W + 'x' + H; if (cache[key]) return cache[key];
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  if (!drawGear(id, x, W, H)) {
    try {
      if (!R) { R = { r: new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true }), s: new THREE.Scene(), c: new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10) }; R.c.position.set(3, 0, 0); R.c.lookAt(0, 0, 0); R.r.setClearColor(0, 0); }
      R.r.setSize(W, H);
      const geo = gunGeo(id); geo.computeBoundingBox(); const bb = geo.boundingBox;
      const m = new THREE.Mesh(geo, WHITE);
      const len = bb.max.z - bb.min.z, hgt = bb.max.y - bb.min.y, asp = W / H;
      const half = Math.max(len / 2 / asp, hgt / 2) * 1.12;
      R.c.left = -half * asp; R.c.right = half * asp; R.c.top = half; R.c.bottom = -half; R.c.updateProjectionMatrix();
      m.position.set(0, -(bb.max.y + bb.min.y) / 2, -(bb.max.z + bb.min.z) / 2);
      R.s.add(m); R.r.render(R.s, R.c); R.s.remove(m);
      x.drawImage(R.r.domElement, 0, 0);
    } catch (e) { }
  }
  return (cache[key] = c.toDataURL());
}
