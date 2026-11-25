// Tee Race — dibujado del mapa (capas de tiles, quads con envolventes, paralaje) y de los tees, en Canvas 2D.
const CH = 16;            // tiles por lado de cada pedazo cacheado
const MAX_CHUNKS = 140;

export function createMapRenderer(meta, bin, images) {
  const chunks = new Map(); let tick = 0;
  const layers = [];
  meta.groups.forEach((G, gi) => G.layers.forEach((L, li) => {
    if (L.t === 'tiles') layers.push({ gi, li, L, data: new Uint8Array(bin, L.bin, L.w * L.h * 4), img: images[L.image] || null });
  }));
  function chunkFor(lay, cx, cy) {
    const key = lay.gi + ':' + lay.li + ':' + cx + ':' + cy;
    let c = chunks.get(key);
    if (c) { c.t = ++tick; return c.cv; }
    const L = lay.L, img = lay.img, cv = document.createElement('canvas'); cv.width = cv.height = CH * 32;
    const x = cv.getContext('2d'); let any = false;
    const ts = img ? img.width / 16 : 64;
    for (let ty = 0; ty < CH; ty++) for (let tx = 0; tx < CH; tx++) {
      let gx = cx * CH + tx, gy = cy * CH + ty; if (gx >= L.w + 64 || gy >= L.h + 64) continue; gx = Math.min(Math.max(gx, 0), L.w - 1); gy = Math.min(Math.max(gy, 0), L.h - 1); // afuera del mapa se repite el borde, como en DDNet
      const o = (gy * L.w + gx) * 4, idx = lay.data[o], fl = lay.data[o + 1];
      if (!idx) continue; any = true;
      if (!img) { x.fillStyle = '#888'; x.fillRect(tx * 32, ty * 32, 32, 32); continue; }
      const sx = (idx % 16) * ts, sy = Math.floor(idx / 16) * ts;
      if (!fl) { x.drawImage(img, sx + 0.5, sy + 0.5, ts - 1, ts - 1, tx * 32, ty * 32, 32, 32); continue; }
      x.save(); x.translate(tx * 32 + 16, ty * 32 + 16);
      if (fl & 8) x.rotate(Math.PI / 2);
      x.scale(fl & 1 ? -1 : 1, fl & 2 ? -1 : 1);
      x.drawImage(img, sx + 0.5, sy + 0.5, ts - 1, ts - 1, -16, -16, 32, 32); x.restore();
    }
    let col = (L.color || [255, 255, 255, 255]).slice();
    // color animado de la capa (se toma el valor del principio de la envolvente)
    if (L.ce >= 0) { const e = env(L.ce, L.ceo || 0); if (e) col = [col[0] * e[0], col[1] * e[1], col[2] * e[2], col[3] * e[3]]; }
    if (any && (col[0] < 255 || col[1] < 255 || col[2] < 255)) {
      // teñido del color de la capa, respetando la transparencia
      const tmp = document.createElement('canvas'); tmp.width = tmp.height = cv.width; const t = tmp.getContext('2d');
      t.drawImage(cv, 0, 0); t.globalCompositeOperation = 'multiply'; t.fillStyle = `rgb(${col[0]},${col[1]},${col[2]})`; t.fillRect(0, 0, tmp.width, tmp.height);
      t.globalCompositeOperation = 'destination-in'; t.drawImage(cv, 0, 0);
      x.clearRect(0, 0, cv.width, cv.height); x.drawImage(tmp, 0, 0);
    }
    const res = any ? cv : null;
    chunks.set(key, { cv: res, t: ++tick });
    if (chunks.size > MAX_CHUNKS) { let ok = null, ot = Infinity; for (const [k, v] of chunks) if (v.t < ot) { ot = v.t; ok = k; } chunks.delete(ok); }
    return res;
  }
  // envolventes (ms → valores)
  function env(i, ms) {
    const E = meta.envs[i]; if (!E || !E.pts.length) return null;
    const P = E.pts, last = P[P.length - 1][0];
    let t = last > 0 ? ms % last : 0;
    if (t <= P[0][0]) return P[0][2];
    for (let k = 0; k < P.length - 1; k++) {
      const a = P[k], b = P[k + 1];
      if (t >= a[0] && t <= b[0]) {
        let f = (t - a[0]) / Math.max(1, b[0] - a[0]);
        if (a[1] === 0) f = 0; else if (a[1] === 2) f = f * f * f; else if (a[1] === 3) f = 1 - Math.pow(1 - f, 3); else if (a[1] === 4) f = f * f * (3 - 2 * f);
        return a[2].map((v, j) => v + (b[2][j] - v) * f);
      }
    }
    return P[P.length - 1][2];
  }
  // imagen teñida con el color del quad (se cachea por color)
  const tints = new Map();
  function tinted(img, r, g, b) {
    if (r > 250 && g > 250 && b > 250) return img;
    const key = img.src + '|' + (r >> 3) + ',' + (g >> 3) + ',' + (b >> 3);
    let c = tints.get(key); if (c) return c;
    c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const t = c.getContext('2d');
    t.drawImage(img, 0, 0); t.globalCompositeOperation = 'multiply'; t.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`; t.fillRect(0, 0, c.width, c.height);
    t.globalCompositeOperation = 'destination-in'; t.drawImage(img, 0, 0);
    tints.set(key, c); return c;
  }
  function drawQuads(x, L, ms) {
    const img0 = L.image >= 0 ? images[L.image] : null;
    for (const q of L.q) {
      const pe = q.pe >= 0 ? env(q.pe, ms + q.peo) : null;
      const ce = q.ce >= 0 ? env(q.ce, ms + q.ceo) : null;
      const xs = q.p.slice(0, 4).map(p => p[0]), ys = q.p.slice(0, 4).map(p => p[1]);
      let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const a = q.c.reduce((s, c) => s + c[3], 0) / 4 / 255 * (ce ? ce[3] : 1);
      if (a <= 0.004 || x1 - x0 < 0.5 || y1 - y0 < 0.5) continue;
      x.save(); x.globalAlpha = Math.min(1, a);
      if (pe) { x.translate(pe[0] + q.p[4][0], pe[1] + q.p[4][1]); x.rotate((pe[2] || 0) * Math.PI / 180); x.translate(-q.p[4][0], -q.p[4][1]); }
      const img = img0 && tinted(img0, q.c.reduce((s, c) => s + c[0], 0) / 4 * (ce ? ce[0] : 1), q.c.reduce((s, c) => s + c[1], 0) / 4 * (ce ? ce[1] : 1), q.c.reduce((s, c) => s + c[2], 0) / 4 * (ce ? ce[2] : 1));
      if (img) {
        const us = q.uv.map(u => u[0]), vs = q.uv.map(u => u[1]);
        let u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs);
        const flipX = q.uv[0][0] > q.uv[1][0], flipY = q.uv[0][1] > q.uv[2][1];
        const sx = Math.max(0, u0 * img.width), sy = Math.max(0, v0 * img.height), sw = Math.min(img.width, (u1 - u0) * img.width), sh = Math.min(img.height, (v1 - v0) * img.height);
        if (sw >= 1 && sh >= 1) {
          if (flipX || flipY) { x.translate((x0 + x1) / 2, (y0 + y1) / 2); x.scale(flipX ? -1 : 1, flipY ? -1 : 1); x.translate(-(x0 + x1) / 2, -(y0 + y1) / 2); }
          x.drawImage(img, sx, sy, sw, sh, x0, y0, x1 - x0, y1 - y0);
        }
      } else {
        const top = [(q.c[0][0] + q.c[1][0]) / 2, (q.c[0][1] + q.c[1][1]) / 2, (q.c[0][2] + q.c[1][2]) / 2, (q.c[0][3] + q.c[1][3]) / 510];
        const bot = [(q.c[2][0] + q.c[3][0]) / 2, (q.c[2][1] + q.c[3][1]) / 2, (q.c[2][2] + q.c[3][2]) / 2, (q.c[2][3] + q.c[3][3]) / 510];
        if (ce) for (const c of [top, bot]) { c[0] *= ce[0]; c[1] *= ce[1]; c[2] *= ce[2]; c[3] *= ce[3]; }
        const g = x.createLinearGradient(0, y0, 0, y1);
        g.addColorStop(0, `rgba(${top[0] | 0},${top[1] | 0},${top[2] | 0},${top[3]})`); g.addColorStop(1, `rgba(${bot[0] | 0},${bot[1] | 0},${bot[2] | 0},${bot[3]})`);
        x.globalAlpha = 1; x.fillStyle = g; x.fillRect(x0, y0, x1 - x0, y1 - y0);
      }
      x.restore();
    }
  }
  // dibuja todo; drawPlayers se llama en el lugar de la capa de juego
  function draw(x, cam, zoom, W, H, ms, drawPlayers, detail = true) {
    for (let gi = 0; gi < meta.groups.length; gi++) {
      const G = meta.groups[gi];
      const ccx = cam.x * G.px / 100 + G.ox, ccy = cam.y * G.py / 100 + G.oy;
      x.save();
      x.setTransform(zoom, 0, 0, zoom, W / 2 - ccx * zoom, H / 2 - ccy * zoom);
      const vx0 = ccx - W / 2 / zoom, vy0 = ccy - H / 2 / zoom, vx1 = ccx + W / 2 / zoom, vy1 = ccy + H / 2 / zoom;
      for (let li = 0; li < G.layers.length; li++) {
        const L = G.layers[li];
        if (L.t === 'game') { x.restore(); drawPlayers(); x.save(); x.setTransform(zoom, 0, 0, zoom, W / 2 - ccx * zoom, H / 2 - ccy * zoom); continue; }
        if (L.detail && !detail) continue;
        if (L.t === 'quads') { drawQuads(x, L, ms); continue; }
        if (L.t !== 'tiles') continue;
        const lay = layers.find(l => l.gi === gi && l.li === li); if (!lay) continue;
        x.globalAlpha = Math.max(0, Math.min(1, (L.color ? L.color[3] : 255) / 255 * (L.ce >= 0 ? ((env(L.ce, ms + (L.ceo || 0)) || [1, 1, 1, 1])[3]) : 1)));
        const c0 = Math.max(-4, Math.floor(vx0 / 32 / CH)), c1 = Math.min(Math.ceil(L.w / CH) + 3, Math.floor(vx1 / 32 / CH));
        const r0 = Math.max(-4, Math.floor(vy0 / 32 / CH)), r1 = Math.min(Math.ceil(L.h / CH) + 3, Math.floor(vy1 / 32 / CH));
        for (let cy = r0; cy <= r1; cy++) for (let cx = c0; cx <= c1; cx++) { const cv = chunkFor(lay, cx, cy); if (cv) x.drawImage(cv, cx * CH * 32, cy * CH * 32); }
        x.globalAlpha = 1;
      }
      x.restore();
    }
  }
  return { draw };
}

// ---------- tees ----------
const skinCache = new Map();
export function loadSkin(name) {
  if (skinCache.has(name)) return skinCache.get(name);
  const img = new Image(); img.src = 'skins/' + name + '.webp';
  const s = { img, ok: false, frozen: null };
  img.onload = () => {
    s.ok = true;
    // versión congelada: celeste y apagada
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128; const x = cv.getContext('2d');
    x.drawImage(img, 0, 0); x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(150,200,255,.62)'; x.fillRect(0, 0, 256, 128);
    s.frozen = cv;
  };
  skinCache.set(name, s); return s;
}
// partes del skin de Teeworlds (256x128, celdas de 32)
const P = { body: [0, 0, 96, 96], bodyO: [96, 0, 96, 96], foot: [192, 32, 64, 32], footO: [192, 64, 64, 32], hand: [192, 0, 32, 32], handO: [224, 0, 32, 32],
  eye: { normal: [64, 96, 32, 32], angry: [96, 96, 32, 32], pain: [128, 96, 32, 32], happy: [160, 96, 32, 32], dead: [192, 96, 32, 32], surprise: [224, 96, 32, 32] } };

// t: {x, y, aimX, aimY, vx, grounded, frozen, eyes, walk, skin, alpha}
export function drawTee(x, t) {
  const S = loadSkin(t.skin); if (!S.ok) return;
  const img = t.frozen && S.frozen ? S.frozen : S.img, base = 64;
  const al = Math.hypot(t.aimX, t.aimY) || 1, dx = t.aimX / al, dy = t.aimY / al;
  x.save(); x.globalAlpha = t.alpha ?? 1; x.translate(t.x, t.y);
  // pies: quietos, caminando (balanceo) o en el aire
  let bf = [-7, 10, 0], ff = [7, 10, 0];
  if (!t.grounded) { bf = [-3, 0, -0.1]; ff = [3, 0, -0.1]; }
  else if (Math.abs(t.vx) > 0.5) { const p = t.walk; bf = [-7 + Math.sin(p) * 9, 10 - Math.max(0, Math.cos(p)) * 4, Math.sin(p) * 0.3]; ff = [7 - Math.sin(p) * 9, 10 - Math.max(0, -Math.cos(p)) * 4, -Math.sin(p) * 0.3]; }
  const bodyY = -4;
  const foot = (f, o, dark) => { x.save(); x.translate(f[0], f[1]); x.rotate(f[2] * (t.aimX < 0 ? -1 : 1)); if (t.aimX < 0) x.scale(-1, 1); const r = o ? P.footO : P.foot; if (dark) x.filter = 'brightness(0.55)'; x.drawImage(img, r[0], r[1], r[2], r[3], -base / 2, -base / 4, base, base / 2); x.restore(); };
  const body = o => { const r = o ? P.bodyO : P.body; x.drawImage(img, r[0], r[1], r[2], r[3], -base / 2, bodyY - base / 2, base, base); };
  foot(bf, true); body(true); foot(ff, true);
  foot(bf, false, true); body(false);
  // ojos
  const eye = P.eye[t.frozen ? 'pain' : t.eyes || 'normal'], es = base * 0.4, sep = (0.075 - 0.010 * Math.abs(dx)) * base;
  const ox = dx * 0.125 * base, oy = (-0.05 + dy * 0.10) * base + bodyY;
  x.drawImage(img, eye[0], eye[1], eye[2], eye[3], ox - sep - es / 2, oy - es / 2, es, es);
  x.save(); x.translate(ox + sep, oy); x.scale(-1, 1); x.drawImage(img, eye[0], eye[1], eye[2], eye[3], -es / 2, -es / 2, es, es); x.restore();
  foot(ff, false);
  x.restore();
}
// mano y martillo apuntando
export function drawHammer(x, game, t) {
  if (!game.complete) return;
  const a = Math.atan2(t.aimY, t.aimX), sw = t.swing || 0;
  x.save(); x.translate(t.x, t.y); x.globalAlpha = t.alpha ?? 1;
  const flip = t.aimX < 0;
  x.rotate(flip ? -(Math.PI / 2) + 0.7 - sw * 1.6 : (Math.PI / 2) - 0.7 + sw * 1.6);
  x.translate(0, -30); if (flip) x.scale(-1, 1);
  // sprite del martillo en game.png: celdas (2,1) de 4x3 en una grilla de 32
  x.drawImage(game, 64, 32, 128, 96, -24, -28, 64, 48);
  x.restore();
  return a;
}
export function drawHook(x, game, t) {
  if (!game.complete) return;
  const dx = t.hx - t.x, dy = t.hy - t.y, d = Math.hypot(dx, dy); if (d < 2) return;
  const a = Math.atan2(dy, dx);
  x.save(); x.translate(t.x, t.y); x.rotate(a); x.globalAlpha = t.alpha ?? 1;
  for (let s = 24; s < d - 8; s += 24) x.drawImage(game, 64, 0, 32, 32, s - 12, -8, 24, 16);
  x.translate(d, 0); x.drawImage(game, 96, 0, 64, 32, -24, -8, 32, 16);
  x.restore();
}
