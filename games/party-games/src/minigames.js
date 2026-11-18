// Los 6 minijuegos. Cada uno recibe G (helpers del juego) y devuelve su lógica.
import { THREE } from './core.js';

const R = (a = 1) => (Math.random() - 0.5) * 2 * a;
const pill = (html, cls = '') => `<div class="wg ${cls}">${html}</div>`;

function ring(G, n, r, y, fn) { for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; fn(Math.cos(a) * r, y, Math.sin(a) * r, a, i); } }
function decoIslands(G, cx, cz, r, y, n = 6) {
  ring(G, n, r, 0, (x, _y, z, a, i) => {
    const s = 3 + (i % 3);
    G.island(cx + x, cz + z, s, y + (i % 2 ? 3 : -4), 6);
    G.addTree(cx + x, y + (i % 2 ? 3 : -4), cz + z, 1 + (i % 3) * 0.3);
  });
}
function flag(G, x, y, z, color = 0xffffff) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(G.GEO.cyl, G.toon(0xdee2e6)); pole.scale.set(0.08, 3, 0.08); pole.position.y = 1.5; g.add(pole);
  const cloth = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.75, 6, 1), G.toon(color, { side: THREE.DoubleSide }));
  cloth.position.set(0.62, 2.6, 0); g.add(cloth);
  const ball = new THREE.Mesh(G.GEO.sphere, G.toon(0xffd43b)); ball.scale.setScalar(0.13); ball.position.y = 3.05; g.add(ball);
  g.position.set(x, y, z); G.world.add(g);
  const base = cloth.geometry.attributes.position.array.slice();
  G.addAnim((dt, t) => {
    const p = cloth.geometry.attributes.position.array;
    for (let i = 0; i < p.length; i += 3) p[i + 2] = Math.sin(base[i] * 4 + t * 6) * 0.08 * (base[i] + 0.6);
    cloth.geometry.attributes.position.needsUpdate = true;
  });
  return { g, cloth };
}
function arch(G, x, y, z, width, ry = 0, text = 'META') {
  const g = new THREE.Group();
  const cols = [0xff4d8d, 0xffd43b, 0x4dabff, 0x51cf66];
  for (let i = 0; i <= 14; i++) {
    const a = Math.PI * (i / 14);
    const b = new THREE.Mesh(G.GEO.sphere, G.toon(cols[i % 4])); b.scale.setScalar(0.55);
    b.position.set(Math.cos(a) * width / 2, Math.sin(a) * 4.5, 0); b.castShadow = true; g.add(b);
  }
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.2), new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: G.canvasTex(256, 72, (c, w, h) => {
    c.fillStyle = '#1d1b3a'; c.beginPath(); c.roundRect(4, 4, w - 8, h - 8, 20); c.fill();
    c.fillStyle = '#ffd43b'; c.font = "700 46px 'Fredoka', system-ui"; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2);
  }) }));
  sign.position.set(0, 4.6, 0); sign.rotation.y = Math.PI; g.add(sign);
  g.position.set(x, y, z); g.rotation.y = ry; G.world.add(g);
  G.addAnim((dt, t) => { g.children.forEach((c, i) => { if (c !== sign) c.scale.setScalar(0.55 + Math.sin(t * 4 + i) * 0.04); }); });
  return g;
}
const CTL_MOVE = [['W A S D', 'Moverse'], ['Espacio', 'Saltar'], ['Mouse', 'Cámara (click)']];

// =====================================================================
// 1) TURBO KARTS
// =====================================================================
function createKarts(G) {
  const LAPS = 3, W = 11, N = 700;
  const pts = [[0, -30], [0, 20], [8, 46], [30, 60], [56, 54], [70, 30], [60, 8], [41, 0], [38, -20], [56, -38], [52, -64], [26, -74], [2, -62]]
    .map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
  const S = curve.getSpacedPoints(N);
  S.pop();
  const T = S.map((p, i) => S[(i + 1) % N].clone().sub(S[(i - 1 + N) % N]).normalize());
  const CX = 34, CZ = -6, IR = 92;
  G.island(CX, CZ, IR, 0, 14, 0x8ce99a);
  G.colCyl(CX, CZ, IR, 0, 2);

  // ruta
  const roadTex = G.canvasTex(64, 256, (c, w, h) => {
    c.fillStyle = '#5c5f73'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(255,255,255,${Math.random() * 0.06})`; c.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
    c.fillStyle = '#fff'; c.fillRect(w / 2 - 2, 0, 4, h / 2);
  }, { repeat: [1, 1] });
  roadTex.wrapT = THREE.RepeatWrapping;
  const curbTex = G.canvasTex(16, 64, (c, w, h) => { c.fillStyle = '#ff4d6d'; c.fillRect(0, 0, w, h / 2); c.fillStyle = '#fff'; c.fillRect(0, h / 2, w, h / 2); });
  curbTex.wrapT = THREE.RepeatWrapping;
  function ribbon(off0, off1, y, tex, vScale) {
    const pos = [], uv = [], idx = [];
    let dist = 0;
    for (let i = 0; i <= N; i++) {
      const p = S[i % N], t = T[i % N];
      const nx = t.z, nz = -t.x;
      if (i > 0) dist += S[i % N].distanceTo(S[(i - 1) % N]);
      pos.push(p.x + nx * off0, y, p.z + nz * off0, p.x + nx * off1, y, p.z + nz * off1);
      uv.push(0, dist / vScale, 1, dist / vScale);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, G.toon(0xffffff, { map: tex, side: THREE.DoubleSide }));
    m.receiveShadow = true; G.world.add(m);
    return m;
  }
  ribbon(W / 2, -W / 2, 0.04, roadTex, 10);
  ribbon(W / 2 + 0.9, W / 2, 0.07, curbTex, 3);
  ribbon(-W / 2, -W / 2 - 0.9, 0.07, curbTex, 3);
  // línea de largada
  const flat = (w, d, mat, x, z, ry, y = 0.09) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat); m.rotation.x = -Math.PI / 2; g.add(m);
    G.world.add(g); return g;
  };
  const th0 = Math.atan2(T[0].x, T[0].z);
  flat(W, 1.6, G.toon(0xffffff, { map: G.checkerTex(8) }), S[0].x, S[0].z, th0);
  arch(G, S[0].x, 0, S[0].z, W + 3, th0, 'LARGADA');

  const near = (p, from, win = 40) => {
    let best = from, bd = Infinity;
    for (let k = -win; k <= win; k++) {
      const i = (from + k + N) % N, d = (S[i].x - p.x) ** 2 + (S[i].z - p.z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return { i: best, d: Math.sqrt(bd) };
  };
  const nearGlobal = p => { let best = 0, bd = Infinity; for (let i = 0; i < N; i += 3) { const d = (S[i].x - p.x) ** 2 + (S[i].z - p.z) ** 2; if (d < bd) { bd = d; best = i; } } return near(p, best, 4); };

  // decoración: árboles (con colisión), globos, carteles
  for (let k = 0; k < 90; k++) {
    const a = Math.random() * Math.PI * 2, r = 8 + Math.random() * (IR - 12);
    const x = CX + Math.cos(a) * r, z = CZ + Math.sin(a) * r;
    if (nearGlobal({ x, z }).d < W / 2 + 5) continue;
    const s = 1 + Math.random() * 0.8;
    G.addTree(x, 0, z, s);
    G.colCyl(x, z, 0.35 * s, 3 * s, 3 * s);
  }
  for (let k = 0; k < 14; k++) { const i = Math.floor(k / 14 * N), t = T[i]; G.addBalloon(S[i].x + t.z * (W / 2 + 3), 6, S[i].z - t.x * (W / 2 + 3), G.COLORS[k % 8]); }

  // ---- Disposición aleatoria (misma para todos: usa la semilla de la ronda) ----
  const rnd = G.rand;
  const slots = [];
  for (let f = 0.07; f < 0.95; f += 0.055) slots.push(f);
  for (let k = slots.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [slots[k], slots[j]] = [slots[j], slots[k]]; }
  const take = n => slots.splice(0, n);
  const at = (f, off) => { const i = Math.floor(f * N) % N, p = S[i], t = T[i]; return { i, x: p.x + t.z * off, z: p.z - t.x * off, ry: Math.atan2(t.x, t.z) }; };

  // turbos en el piso
  const padTex = G.canvasTex(64, 128, (c, w, h) => {
    c.fillStyle = '#ffd43b'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#ff922b';
    for (let y = 0; y < 2; y++) { c.beginPath(); c.moveTo(8, 40 + y * 64); c.lineTo(32, 16 + y * 64); c.lineTo(56, 40 + y * 64); c.lineTo(56, 56 + y * 64); c.lineTo(32, 32 + y * 64); c.lineTo(8, 56 + y * 64); c.fill(); }
  });
  padTex.wrapT = THREE.RepeatWrapping;
  const pads = take(4).map(f => {
    const q = at(f, (rnd() - 0.5) * 6);
    flat(3.4, 5, new THREE.MeshBasicMaterial({ map: padTex }), q.x, q.z, q.ry + Math.PI, 0.1);
    return { x: q.x, z: q.z, cd: 0 };
  });
  G.addAnim(dt => { padTex.offset.y -= dt * 1.5; });

  // rampas de salto
  const ramps = take(2).map(f => {
    const q = at(f, 0);
    const g = new THREE.Group(); g.position.set(q.x, 0, q.z); g.rotation.y = q.ry; G.world.add(g);
    const wedge = new THREE.Mesh(G.GEO.box, G.toon(0x4dabff)); wedge.scale.set(W - 2, 0.25, 4.5); wedge.rotation.x = -0.22; wedge.position.y = 0.45; wedge.castShadow = true; g.add(wedge);
    const stripe = new THREE.Mesh(G.GEO.box, G.toon(0xffffff)); stripe.scale.set(W - 2.2, 0.27, 0.6); stripe.rotation.x = -0.22; stripe.position.set(0, 0.47, 1.2); g.add(stripe);
    return { x: q.x, z: q.z, cd: 0 };
  });

  // cajas de objetos
  const boxTex = G.canvasTex(128, 128, (c, w) => {
    const g = c.createLinearGradient(0, 0, w, w);
    ['#ff4d8d', '#ffd43b', '#51cf66', '#4dabff', '#b197fc'].forEach((col, i) => g.addColorStop(i / 4, col));
    c.fillStyle = g; c.fillRect(0, 0, w, w);
    c.fillStyle = 'rgba(255,255,255,.85)'; c.font = "700 92px 'Fredoka', system-ui"; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('?', w / 2, w / 2 + 6);
  });
  const boxMat = new THREE.MeshBasicMaterial({ map: boxTex, transparent: true, opacity: 0.92 });
  const boxes = [];
  take(4).forEach(f => {
    const n = 3 + Math.floor(rnd() * 2), spread = 2.4 + rnd() * 1.2, shift = (rnd() - 0.5) * 2;
    for (let k = 0; k < n; k++) {
      const q = at(f, shift + (k - (n - 1) / 2) * spread);
      const m = new THREE.Mesh(G.GEO.box, boxMat); m.scale.setScalar(1.3); m.position.set(q.x, 1.2, q.z); G.world.add(m);
      boxes.push({ m, x: q.x, z: q.z, off: 0 });
    }
  });

  // charcos de aceite
  const oils = new Map();
  const oilGeo = new THREE.CircleGeometry(1.6, 20);
  function addOil(d) {
    const m = new THREE.Mesh(oilGeo, G.toon(0x2b2140)); m.rotation.x = -Math.PI / 2; m.position.set(d.x, 0.12, d.z); m.scale.set(1, 0.85, 1);
    const shine = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), new THREE.MeshBasicMaterial({ color: 0xb197fc, transparent: true, opacity: 0.6 }));
    shine.position.set(0.4, 0.3, 0.01); m.add(shine);
    G.world.add(m); oils.set(d.id, { ...d, m, age: 0 });
    G.sfx.pop();
  }
  // cohetes
  const rockets = [];
  function addRocket(d) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(G.GEO.cyl, G.toon(0xff4d6d)); body.scale.set(0.28, 1.1, 0.28); body.rotation.x = Math.PI / 2; g.add(body);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.5, 12), G.toon(0xffffff)); nose.rotation.x = Math.PI / 2; nose.position.z = 0.8; g.add(nose);
    const from = G.posOf(d.from);
    g.position.set(from.x, from.y + 1.5, from.z); G.world.add(g);
    rockets.push({ ...d, g, t: 0 });
    G.sfx.rocket();
  }

  // estado local
  let idx = N - 8, lap = -1, half = true, item = null, uses = 0, oilImm = 0, seq = 0, bumpCd = {};
  const tracker = G.finishTracker();
  const progress = () => lap + idx / N;
  const progressOf = id => (id === G.myId() ? progress() : ((G.players.get(id) || {}).net || {}).pr || -1);
  const order = () => G.ids().filter(id => G.alive(id)).sort((a, b) => progressOf(b) - progressOf(a));
  function rollItem() {
    const o = order(), n = o.length, pos = Math.max(0, o.indexOf(G.myId()));
    const r = Math.random();
    if (n <= 1) return ['turbo', 'aceite', 'cohete', 'triple', 'estrella'][Math.floor(r * 5)];
    const f = pos / (n - 1); // 0 = primero, 1 = último
    if (f < 0.34) return r < 0.45 ? 'aceite' : r < 0.85 ? 'turbo' : 'cohete';
    if (f < 0.67) return r < 0.3 ? 'turbo' : r < 0.5 ? 'aceite' : r < 0.8 ? 'cohete' : 'triple';
    return r < 0.3 ? 'cohete' : r < 0.6 ? 'triple' : 'estrella';
  }
  const ICONS = { turbo: '🍄', triple: '🍄', aceite: '🛢️', cohete: '🚀', estrella: '⭐' };

  return {
    kart: true,
    introCam: { x: CX, z: CZ, y: 0, r: 70, h: 34 },
    spawn(i) {
      const row = Math.floor(i / 2), col = i % 2;
      const si = (N - 6 - row * 5) % N, p = S[si], t = T[si];
      const off = col ? -2.6 : 2.6;
      return { x: p.x + t.z * off, y: 0.1, z: p.z - t.x * off, ry: Math.atan2(t.x, t.z) };
    },
    respawnPoint() { const p = S[idx], t = T[idx]; return { x: p.x, y: 0.5, z: p.z, ry: Math.atan2(t.x, t.z) }; },
    isOffroad: p => near(p, idx, 6).d > W / 2 + 0.6,
    progress,
    onBump(id) {
      if (G.me.kart.starT <= 0 || (bumpCd[id] || 0) > G.clock()) return;
      bumpCd[id] = G.clock() + 1.5;
      G.sendTo(id, 'hit', { by: G.myId() });
      G.fx.burst(G.me.pos, [0xffd43b, 0xffffff], 14, 6);
    },
    update(dt, t) {
      for (const b of boxes) {
        b.m.rotation.y += dt * 1.6; b.m.rotation.x = Math.sin(t * 2 + b.x) * 0.3;
        b.m.position.y = 1.2 + Math.sin(t * 3 + b.z) * 0.2;
        if (b.off > 0) { b.off -= dt; b.m.visible = b.off <= 0; }
      }
      for (const [id, o] of oils) { o.age += dt; if (o.age > 25) { G.world.remove(o.m); oils.delete(id); } }
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.t += dt;
        const tp = G.posOf(r.to);
        const target = new THREE.Vector3(tp.x, tp.y + 0.8, tp.z);
        const k = Math.min(1, dt * (2 + r.t * 4));
        const prev = r.g.position.clone();
        r.g.position.lerp(target, k);
        r.g.lookAt(r.g.position.clone().add(r.g.position.clone().sub(prev)));
        G.fx.trail(r.g.position, 0xffa94d, 0.2);
        if (r.t > 0.4 && (r.g.position.distanceTo(target) < 1.2 || r.t > 3)) {
          G.fx.explosion(r.g.position); G.sfx.boom();
          G.world.remove(r.g); rockets.splice(i, 1);
          if (r.to === G.myId()) this.onMsg('hit', { by: r.from }, r.from);
        }
      }
      const me = G.me;
      if (!me.alive) return;
      const n = near(me.pos, idx, 25);
      const prev = idx; idx = n.i;
      if (prev > N * 0.85 && idx < N * 0.15) { if (half) { lap++; half = false; if (lap > 0 && lap < LAPS && G.playing()) { G.sfx.checkpoint(); G.banner(lap === LAPS - 1 ? '¡Última vuelta!' : `Vuelta ${lap + 1}`, '#ffd43b', 1.4); } } }
      else if (prev < N * 0.15 && idx > N * 0.85) { lap--; half = true; }
      if (idx > N * 0.4 && idx < N * 0.6) half = true;
      if (lap >= LAPS) tracker.reach();
      const dx = me.pos.x - CX, dz = me.pos.z - CZ, d = Math.hypot(dx, dz);
      if (d > IR - 2) { me.pos.x = CX + dx / d * (IR - 2); me.pos.z = CZ + dz / d * (IR - 2); me.kart.speed *= 0.5; }
      if (!G.playing()) return;
      for (const p of pads) {
        p.cd -= dt;
        if (p.cd <= 0 && Math.hypot(me.pos.x - p.x, me.pos.z - p.z) < 2.8) { p.cd = 1; me.kart.boostT = Math.max(me.kart.boostT, 1); G.sfx.boost(); }
      }
      for (const r of ramps) {
        r.cd -= dt;
        if (r.cd <= 0 && me.onGround && Math.hypot(me.pos.x - r.x, me.pos.z - r.z) < 3.2 && me.kart.speed > 8) {
          r.cd = 1.5; me.vel.y = 11; me.onGround = false; me.kart.boostT = Math.max(me.kart.boostT, 0.9);
          G.sfx.jump(); G.sfx.boost(); G.fx.sparkle(me.pos, 0x4dabff, 12);
        }
      }
      for (const b of boxes) {
        if (b.off <= 0 && Math.hypot(me.pos.x - b.x, me.pos.z - b.z) < 1.8) {
          b.off = 3; b.m.visible = false;
          G.fx.burst({ x: b.x, y: 1.2, z: b.z }, [0xff4d8d, 0xffd43b, 0x4dabff, 0x51cf66], 16, 5);
          if (!item) { item = rollItem(); uses = item === 'triple' ? 3 : 1; G.sfx.item(); }
        }
      }
      if (item && G.justPressed('KeyF', 'ShiftLeft', 'ShiftRight', 'KeyE', 'Mouse')) {
        if (item === 'turbo' || item === 'triple') { me.kart.boostT = 1.3; G.sfx.boost(); }
        else if (item === 'estrella') { me.kart.starT = 5.5; me.kart.spinT = 0; me.kart.spinVis = 0; G.sfx.star(); G.fx.sparkle(me.pos, 0xffe066, 20); }
        else if (item === 'aceite') G.broadcast('oil', { id: G.myId() + ':' + seq++, x: +(me.pos.x - Math.sin(me.ry) * 2.8).toFixed(2), z: +(me.pos.z - Math.cos(me.ry) * 2.8).toFixed(2), by: G.myId() });
        else if (item === 'cohete') {
          const o = order(), i = o.indexOf(G.myId());
          const target = i > 0 ? o[i - 1] : o[1];
          if (target) G.broadcast('rk', { from: G.myId(), to: target });
        }
        if (--uses <= 0) item = null;
      }
      oilImm -= dt;
      if (oilImm <= 0 && me.kart.starT <= 0) for (const o of oils.values()) {
        if ((o.by === G.myId() && o.age < 1) || Math.hypot(me.pos.x - o.x, me.pos.z - o.z) > 1.7) continue;
        oilImm = 2; me.kart.spinT = 1.1; G.sfx.spin(); G.fx.sparkle(me.pos, 0xb197fc, 12);
        break;
      }
    },
    onMsg(k, d, from) {
      if (tracker.onMsg(k, d, from)) return;
      if (k === 'oil' && !oils.has(d.id)) addOil(d);
      else if (k === 'rk') addRocket(d);
      else if (k === 'hit') {
        const me = G.me;
        if (me.kart.starT > 0 || me.kart.spinT > 0) return;
        me.kart.spinT = 1.2; me.kart.speed *= 0.4; me.vel.y = 6; me.onGround = false;
        G.sfx.spin();
      }
    },
    hostDone: () => tracker.done(),
    hostRank: () => tracker.rank(progressOf),
    hudCorner() {
      const ids = G.ids();
      const pos = 1 + ids.filter(id => id !== G.myId() && (tracker.order.includes(id) ? !tracker.order.includes(G.myId()) || tracker.order.indexOf(id) < tracker.order.indexOf(G.myId()) : progressOf(id) > progress() && !tracker.order.includes(G.myId()))).length;
      const icon = item ? ICONS[item] + (item === 'triple' ? `<b class="x">×${uses}</b>` : '') : '';
      const star = G.me.kart.starT > 0 ? ' star' : '';
      return `<div class="kart-hud${star}"><div class="kpos">${pos}<sup>º</sup></div><div class="klap">Vuelta <b>${Math.min(LAPS, Math.max(1, lap + 1))}</b>/${LAPS}</div><div class="kitem${item ? ' has' : ''}">${icon || '<span>?</span>'}${item ? '<small>F</small>' : ''}</div></div>`;
    },
  };
}

// =====================================================================
// 2) HEXAGONÍA (pisos que caen)
// =====================================================================
function createHex(G) {
  const tops = [0, -7, -14], colors = [[0xff8fab, 0xffb3c6], [0xffd43b, 0xffe066], [0x66d9e8, 0x99e9f2]];
  const r = 1.5, dx = Math.sqrt(3) * r, dz = 1.5 * r, RAD = 11.5;
  const tiles = [];
  const warn = G.toon(0xffffff, { emissive: 0xff6b6b, emissiveIntensity: 0.6 });
  tops.forEach((top, li) => {
    for (let row = -9; row <= 9; row++) for (let col = -9; col <= 9; col++) {
      const x = col * dx + (row & 1 ? dx / 2 : 0), z = row * dz;
      if (Math.hypot(x, z) > RAD) continue;
      const t = G.cyl(x, z, r * 0.97, top, 0.6, colors[li][(row + col) & 1], { sides: 6, cast: li === 0 });
      t.col.r = r * 0.9;
      tiles.push({ ...t, li, x, z, top, state: 0, t: 0, base: t.mesh.material });
    }
  });
  decoIslands(G, 0, 0, 24, -6, 7);
  ring(G, 10, 17, 0, (x, y, z, a, i) => G.addBalloon(x, 3 + (i % 3) * 2, z, G.COLORS[i % 8]));
  const findTile = p => {
    for (const t of tiles) if (t.state === 0 && Math.abs(p.y - t.top) < 0.4 && (p.x - t.x) ** 2 + (p.z - t.z) ** 2 < (r * 0.97) ** 2) return t;
    return null;
  };
  return {
    introCam: { x: 0, z: 0, y: -4, r: 26, h: 14 },
    collide: true,
    fallY: -22,
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return { x: Math.sin(a) * 5, y: 0.2, z: Math.cos(a) * 5, ry: a + Math.PI }; },
    onFall() { G.eliminate(); },
    update(dt) {
      for (const t of tiles) {
        if (t.state === 1) {
          t.t += dt;
          t.mesh.position.x = t.x + R(0.06); t.mesh.position.z = t.z + R(0.06);
          if (t.t > 0.6) { t.state = 2; t.t = 0; t.col.off = true; if (Math.random() < 0.3) G.fx.dust({ x: t.x, y: t.top, z: t.z }, 2, 0xffffff); }
        } else if (t.state === 2) {
          t.t += dt;
          t.mesh.position.y -= dt * (2 + t.t * 22);
          t.mesh.scale.x = t.mesh.scale.z = Math.max(0.01, r * 0.97 * (1 - t.t));
          if (t.t > 1) { t.state = 3; t.mesh.visible = false; }
        }
      }
    },
    hostUpdate() {
      for (const id of G.aliveIds()) {
        const t = findTile(G.posOf(id));
        if (t) G.hostBroadcast('tf', { i: tiles.indexOf(t) });
      }
    },
    onMsg(k, d) {
      const t = tiles[d.i];
      if (k === 'tf' && t && t.state === 0) { t.state = 1; t.t = 0; t.mesh.material = warn; }
    },
    hostDone: () => G.elimDone(),
    hostRank: () => G.elimRank(),
    hud() {
      const n = G.aliveIds().length;
      return pill(`🙂 Quedan <b>${n}</b>`);
    },
  };
}

// =====================================================================
// 3) BOMBA CALIENTE
// =====================================================================
function createBomba(G) {
  // ---------- Mapa: "La Casona" ----------
  const HALF = 23, HW = 3.2, T = 0.4;
  G.island(0, 0, 34, 0, 16, 0x8ce99a);
  G.colBox(0, 0, HALF * 2, HALF * 2, 0, 2);
  const cream = 0xfff1d6, trim = 0xd9480f, wood = 0xa0673a, frame = 0x6b3f20, hedge = 0x40c057;
  // Pared a lo largo de X (en z) o de Z (en x), con huecos: puertas (bot = 0) y ventanas (bot > 0)
  function wall(axis, at, from, to, holes, color = cream, H = HW) {
    const seg = (a, b, top, h) => {
      if (b - a < 0.02 || h <= 0.01) return;
      const c = (a + b) / 2, len = b - a;
      if (axis === 'x') G.box(c, at, len, T, top, h, color, { edge: false });
      else G.box(at, c, T, len, top, h, color, { edge: false });
    };
    const fr = (a, b, y0, y1) => { // marco de madera
      const add = (cx, cy, sx, sy) => { const m = new THREE.Mesh(G.GEO.box, G.toon(frame)); m.scale.set(axis === 'x' ? sx : T + 0.08, sy, axis === 'x' ? T + 0.08 : sx); m.position.set(axis === 'x' ? cx : at, cy, axis === 'x' ? at : cx); m.castShadow = true; G.world.add(m); };
      add((a + b) / 2, y1 + 0.06, b - a + 0.2, 0.12);
      if (y0 > 0) add((a + b) / 2, y0 - 0.06, b - a + 0.2, 0.12);
      add(a - 0.05, (y0 + y1) / 2, 0.1, y1 - y0); add(b + 0.05, (y0 + y1) / 2, 0.1, y1 - y0);
    };
    let cur = from;
    holes.slice().sort((p, q) => p.a - q.a).forEach(h => {
      seg(cur, h.a, H, H);
      if (h.bot > 0) seg(h.a, h.b, h.bot, h.bot);
      seg(h.a, h.b, H, H - h.top);
      fr(h.a, h.b, h.bot, h.top);
      cur = h.b;
    });
    seg(cur, to, H, H);
  }
  const door = (a, b) => ({ a, b, bot: 0, top: 2.4 }), win = (a, b) => ({ a, b, bot: 1.0, top: 2.8 });
  // casa principal (14 x 10) con techo transitable
  wall('x', 5, -7.2, 7.2, [door(-1.1, 1.1), win(-5, -3.4), win(3.4, 5)]);
  wall('x', -5, -7.2, 7.2, [door(2.6, 4.6), win(-4.8, -3)]);
  wall('z', 7, -4.8, 4.8, [win(-1, 1)]);
  wall('z', -7, -4.8, 4.8, [door(-2.6, -0.6), win(1.6, 3.4)]);
  wall('z', -1.5, -4.8, 4.8, [door(-1, 1), win(2.4, 3.6)], 0xffe3b3);
  const roof = G.box(0, 0, 14.8, 10.8, HW + 0.4, 0.4, 0xc0392b, { edgeColor: 0x8f2a1f });
  void roof;
  const floor = new THREE.Mesh(G.GEO.box, G.toon(0xd9a066)); floor.scale.set(13.6, 0.04, 9.6); floor.position.set(0, 0.02, 0); floor.receiveShadow = true; G.world.add(floor);
  // chimenea
  G.box(4.5, -2.5, 1.2, 1.2, HW + 1.6, 1.2, 0xa65a3a, { edgeColor: 0x6b3a26 });
  // muebles para hacer parkour adentro
  G.box(2.5, 1.8, 2.2, 1.2, 0.9, 0.9, wood, { edgeColor: 0x7a4a26 });   // mesa
  G.box(5.6, -3.6, 2.6, 0.8, 2.0, 2.0, 0x8d5a3b, { edgeColor: 0x6b3f20 }); // biblioteca
  G.box(-4.5, -3.8, 2.8, 1, 0.6, 0.6, 0x4dabff, { edgeColor: 0x1971c2 }); // sillón
  G.box(-4.5, -4.35, 2.8, 0.3, 1.2, 0.6, 0x4dabff, { edgeColor: 0x1971c2, col: {} });
  G.box(-5.6, 3.6, 1.1, 1.1, 1.1, 1.1, wood, { edgeColor: 0x7a4a26 });  // caja
  G.box(-4.4, 3.6, 1.1, 1.1, 2.2, 2.2, wood, { edgeColor: 0x7a4a26 });
  // cajas apiladas afuera (escalera al techo)
  const crate = (x, z, lvl, c = wood) => G.box(x, z, 1.2, 1.2, 1.2 * (lvl + 1), 1.2 * (lvl + 1), c, { edgeColor: 0x6b3f20 });
  crate(8.4, 6.2, 1); crate(9.6, 6.2, 0); crate(8.4, 7.4, 0);
  crate(-8.4, -6.2, 1); crate(-9.6, -6.2, 0); crate(-8.4, -7.4, 0);
  [[13, -4, 0], [14.2, -4, 1], [-14, 5, 0], [-12, 12, 0], [-12, 13.2, 1], [4, 12, 0], [16, 15, 0], [-17, -13, 0], [-15.8, -13, 1]].forEach(([x, z, l]) => crate(x, z, l));
  // camas elásticas para subir al techo
  [[-9, 5.6], [9.4, -5.8], [0, 9.5]].forEach(([x, z]) => {
    const c = G.cyl(x, z, 1.2, 0.5, 0.5, 0xff4d8d, { col: { bounce: 17 } });
    const top = new THREE.Mesh(G.GEO.cyl, G.toon(0xffffff)); top.scale.set(0.7, 0.04, 0.7); top.position.set(x, 0.52, z); G.world.add(top);
    G.addAnim(dt => { c.col.squash = Math.max(0, (c.col.squash || 0) - dt * 4); const k = c.col.squash; c.mesh.scale.set(1.2 + k * 0.3, 0.5 * (1 - k * 0.4), 1.2 + k * 0.3); });
  });
  // galpón chico
  const hut = (cx, cz) => {
    wall('x', cz + 2, cx - 2.2, cx + 2.2, [door(cx - 0.8, cx + 0.8)], 0xd0bfff, 2.6);
    wall('x', cz - 2, cx - 2.2, cx + 2.2, [], 0xd0bfff, 2.6);
    wall('z', cx + 2, cz - 1.8, cz + 1.8, [win(cz - 0.6, cz + 0.6)], 0xd0bfff, 2.6);
    wall('z', cx - 2, cz - 1.8, cz + 1.8, [], 0xd0bfff, 2.6);
    G.box(cx, cz, 4.8, 4.8, 2.9, 0.3, 0x5f3dc4, { edgeColor: 0x3b2a8a });
  };
  hut(13, 10); hut(-14, -2);
  // muritos bajos (se saltan)
  [[0, 15, 8, 0.6], [-6, -11, 0.6, 6], [15, -12, 6, 0.6], [-17, 9, 0.6, 5], [8, -14, 0.6, 5]].forEach(([x, z, w, d]) => G.box(x, z, w, d, 1.0, 1.0, 0xced4da, { edgeColor: 0xadb5bd }));
  // barriles
  [[6, 9], [-3, 10.5], [-11, -9], [11, 3], [-19, 18], [19, -18]].forEach(([x, z]) => {
    G.cyl(x, z, 0.55, 1.1, 1.1, 0x8d5a3b);
    [0.25, 0.85].forEach(y => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.04, 6, 20), G.toon(0x495057)); r.rotation.x = Math.PI / 2; r.position.set(x, y, z); G.world.add(r); });
  });
  // seto perimetral
  [[0, HALF, HALF * 2 + 1, 1], [0, -HALF, HALF * 2 + 1, 1], [HALF, 0, 1, HALF * 2 + 1], [-HALF, 0, 1, HALF * 2 + 1]].forEach(([x, z, w, d]) => G.box(x, z, w, d, 1.4, 1.4, hedge, { edgeColor: 0x2f9e44 }));
  // barrera invisible sobre el seto: no se puede saltar al vacío desde las cajas o el techo
  [[0, HALF + 0.3, HALF * 2 + 2, 1.6], [0, -HALF - 0.3, HALF * 2 + 2, 1.6], [HALF + 0.3, 0, 1.6, HALF * 2 + 2], [-HALF - 0.3, 0, 1.6, HALF * 2 + 2]].forEach(([x, z, w, d]) => G.colBox(x, z, w, d, 40, 41));
  for (let i = 0; i < 26; i++) { const a = (i / 26) * Math.PI * 2; G.addTree(Math.cos(a) * 28, 0, Math.sin(a) * 28, 1.4 + (i % 3) * 0.3); }
  [[-19, -19], [19, 19], [-19, 15], [18, -8], [-8, 19]].forEach(([x, z]) => { G.addTree(x, 0, z, 1.3); G.colCyl(x, z, 0.5, 4, 4); });
  for (let i = 0; i < 40; i++) { const x = (Math.random() - 0.5) * 42, z = (Math.random() - 0.5) * 42; if (Math.abs(x) > 8 || Math.abs(z) > 6) G.addFlower(x, 0, z); }
  const SPAWN_R = 12.5;

  // ---------- Bomba ----------
  const bomb = new THREE.Group();
  const ball = new THREE.Mesh(G.GEO.sphere, G.toon(0x2b2d42)); ball.scale.setScalar(0.42); bomb.add(ball);
  const shine = new THREE.Mesh(G.GEO.sphere, G.toon(0xffffff)); shine.scale.setScalar(0.08); shine.position.set(0.17, 0.2, 0.25); bomb.add(shine);
  const cap = new THREE.Mesh(G.GEO.cyl, G.toon(0x868e96)); cap.scale.set(0.14, 0.12, 0.14); cap.position.y = 0.43; bomb.add(cap);
  const fuse = new THREE.Mesh(G.GEO.cyl, G.toon(0xc59a6d)); fuse.scale.set(0.03, 0.25, 0.03); fuse.position.set(0.05, 0.6, 0); fuse.rotation.z = -0.4; bomb.add(fuse);
  bomb.visible = false; G.world.add(bomb);
  const flashMat = G.toon(0xff6b6b, { emissive: 0xff2020, emissiveIntensity: 0.8 }), darkMat = G.toon(0x2b2d42);
  // flecha que marca al que tiene la bomba (se ve a través de las paredes)
  const marker = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 4), new THREE.MeshBasicMaterial({ color: 0xff4d4d, depthTest: false, transparent: true, opacity: 0.85 }));
  marker.rotation.x = Math.PI; marker.renderOrder = 20; marker.visible = false; G.world.add(marker);
  let holder = null, fuseLeft = 0, passCd = 0;
  let hHolder = null, hTimer = 0, hWait = 2.5 * G.TS + 1, hLastPass = 0, hClock = 0;
  const tip = new THREE.Vector3();
  return {
    introCam: { x: 0, z: 0, y: 0, r: 30, h: 19 },
    collide: true,
    fallY: -10,
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return { x: Math.sin(a) * SPAWN_R, y: 0.2, z: Math.cos(a) * SPAWN_R, ry: a + Math.PI }; },
    respawnPoint() { const a = Math.random() * Math.PI * 2; return { x: Math.sin(a) * SPAWN_R, y: 0.5, z: Math.cos(a) * SPAWN_R, ry: a + Math.PI }; },
    speedMul: () => (holder === G.myId() ? 1.12 : 1),
    update(dt, t) {
      passCd -= dt;
      fuseLeft = Math.max(0, fuseLeft - dt);
      const ch = holder && G.characterOf(holder);
      bomb.visible = marker.visible = !!(ch && ch.visible);
      if (bomb.visible) {
        bomb.position.copy(ch.position); bomb.position.y += 2.35 + Math.sin(t * 10) * 0.05;
        marker.position.copy(ch.position); marker.position.y += 3.4 + Math.sin(t * 5) * 0.15; marker.rotation.y += dt * 3;
        marker.visible = holder !== G.myId();
        const urgent = fuseLeft < 3;
        bomb.scale.setScalar(1 + Math.sin(t * (urgent ? 26 : 10)) * (urgent ? 0.14 : 0.05));
        ball.material = urgent && Math.sin(t * 26) > 0 ? flashMat : darkMat;
        tip.set(bomb.position.x + 0.15, bomb.position.y + 0.75, bomb.position.z);
        G.fx.sparks(tip, 0xffd43b, 1);
        if (urgent && Math.floor(t * 6) !== Math.floor((t - dt) * 6)) G.sfx.tick();
      }
      const me = G.me;
      if (holder === G.myId() && me.alive && G.playing() && passCd <= 0) {
        for (const id of G.aliveIds()) {
          if (id === G.myId()) continue;
          const p = G.players.get(id).pos;
          if (Math.hypot(p.x - me.pos.x, p.z - me.pos.z) < 1.3 && Math.abs(p.y - me.pos.y) < 1.3) { passCd = 0.6; G.toHost('pass', { to: id }); break; }
        }
      }
    },
    hostUpdate(dt) {
      hClock += dt;
      if (!hHolder) {
        hWait -= dt;
        const alive = G.aliveIds();
        if (hWait <= 0 && alive.length >= (G.ids().length >= 2 ? 2 : 1)) {
          hHolder = alive[Math.floor(Math.random() * alive.length)];
          hTimer = (14 + Math.random() * 8) * Math.max(0.4, G.TS);
          G.hostBroadcast('bomb', { h: hHolder, t: +hTimer.toFixed(2) });
        }
        return;
      }
      hTimer -= dt;
      if (hTimer <= 0) { G.hostBroadcast('boom', { h: hHolder }); hHolder = null; hWait = 2.5; }
    },
    onMsg(k, d, from) {
      if (k === 'pass' && G.isHost()) {
        if (from !== hHolder || hClock - hLastPass < 0.5 || !G.alive(d.to)) return;
        hLastPass = hClock; hHolder = d.to;
        G.hostBroadcast('bomb', { h: d.to, t: +hTimer.toFixed(2) });
      } else if (k === 'bomb') {
        const prev = holder;
        holder = d.h; fuseLeft = d.t; passCd = 0.7;
        G.sfx.pass();
        const ch = G.characterOf(d.h);
        if (ch) G.fx.sparkle({ x: ch.position.x, y: ch.position.y + 2.2, z: ch.position.z }, 0xffd43b, 12);
        if (prev && prev !== d.h && d.h === G.myId()) G.stun(0.35);
      } else if (k === 'boom') {
        const ch = G.characterOf(d.h);
        if (ch) G.fx.explosion(ch.position);
        G.sfx.boom();
        holder = null; bomb.visible = marker.visible = false;
        if (d.h === G.myId()) G.eliminate(); else G.markOut(d.h);
      }
    },
    onPlayerLeft(id) { if (G.isHost() && id === hHolder) { hHolder = null; hWait = 1.5; } if (id === holder) holder = null; },
    hostDone: () => G.elimDone(),
    hostRank: () => G.elimRank(),
    hud() {
      if (!holder) return pill('💣 Preparando bomba…');
      if (holder === G.myId()) return pill(`💣 ¡TENÉS LA BOMBA! Tocá a alguien`, 'danger');
      return pill(`💣 La tiene <b>${G.nameOf(holder)}</b> · ¡escapá!`);
    },
  };
}

// =====================================================================
// 4) LLUVIA DE MONEDAS
// =====================================================================
function createMonedas(G) {
  const RA = 16;
  G.island(0, 0, RA, 0, 12);
  G.colCyl(0, 0, RA, 0, 2);
  G.cyl(0, 0, 3.6, 1.7, 2.6, 0xffe066);
  const topDeco = new THREE.Mesh(G.GEO.cyl, G.toon(0xffffff)); topDeco.scale.set(3.65, 0.12, 3.65); topDeco.position.y = 1.65; G.world.add(topDeco);
  for (let i = 0; i < 26; i++) { const a = Math.random() * 6.28, r = 5 + Math.random() * 9; G.addFlower(Math.cos(a) * r, 0, Math.sin(a) * r); }
  decoIslands(G, 0, 0, 27, -3, 6);
  // barras giratorias
  const bars = [{ len: RA - 0.5, y: 0.55, sp: 1.1, a: 0, color: 0xff4d6d }, { len: RA - 0.5, y: 0.55, sp: -0.8, a: Math.PI, color: 0x4dabff, from: 22 }].map(b => {
    const piv = new THREE.Group(); piv.position.y = b.y;
    const geo = new THREE.CylinderGeometry(0.32, 0.32, b.len - 3.6, 14); geo.rotateZ(Math.PI / 2); geo.translate(3.6 + (b.len - 3.6) / 2, 0, 0);
    const m = new THREE.Mesh(geo, G.toon(b.color)); m.castShadow = true; piv.add(m);
    for (let s = 0; s < 6; s++) { const st = new THREE.Mesh(G.GEO.cyl, G.toon(0xffffff)); st.scale.set(0.34, 0.25, 0.34); st.rotation.z = Math.PI / 2; st.position.x = 4.6 + s * 2; piv.add(st); }
    piv.visible = !b.from;
    G.world.add(piv);
    return { ...b, piv, ang: b.a, on: !b.from };
  });
  const coinGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.12, 20); coinGeo.rotateX(Math.PI / 2);
  const coinMat = G.toon(0xffd43b, { emissive: 0x8a6a00, emissiveIntensity: 0.4 });
  const bigMat = G.toon(0xff922b, { emissive: 0x8a3a00, emissiveIntensity: 0.4 });
  const coins = new Map(), pending = new Set();
  let scores = {}, hitCd = 0, nextId = 1, acc = 0;
  const groundY = (x, z) => (Math.hypot(x, z) < 3.6 ? 1.7 : 0);
  function spawnCoin(d) {
    const m = new THREE.Mesh(coinGeo, d.v > 1 ? bigMat : coinMat);
    if (d.v > 1) m.scale.setScalar(1.7);
    m.castShadow = true; m.position.set(d.x, d.fall ? 16 : d.y, d.z); G.world.add(m);
    coins.set(d.id, { ...d, m, t: 0 });
  }
  return {
    introCam: { x: 0, z: 0, y: 0, r: 24, h: 12 },
    collide: true,
    fallY: -12,
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return { x: Math.sin(a) * 9, y: 0.2, z: Math.cos(a) * 9, ry: a + Math.PI }; },
    respawnPoint: () => ({ x: R(2), y: 2.2, z: R(2), ry: 0 }),
    onFall() {
      G.respawn({ x: R(2), y: 2.2, z: R(2) });
      if (G.playing()) G.toHost('lose', { n: 3 });
    },
    update(dt, t) {
      const me = G.me;
      for (const b of bars) {
        if (!b.on && G.playing() && t > b.from * G.TS) { b.on = true; b.piv.visible = true; G.sfx.whoosh(); }
        if (!b.on) continue;
        if (G.playing()) b.ang += b.sp * (1 + t * 0.012) * dt;
        b.piv.rotation.y = -b.ang;
        if (!me.alive || !G.playing()) continue;
        hitCd -= dt;
        const dx = Math.cos(b.ang), dz = Math.sin(b.ang);
        const proj = me.pos.x * dx + me.pos.z * dz;
        if (proj < 3.6 || proj > b.len) continue;
        const dist = Math.abs(-me.pos.x * dz + me.pos.z * dx);
        if (dist < 0.75 && me.pos.y < b.y + 0.55 && hitCd <= 0) {
          const s = Math.sign(b.sp);
          if (G.knock({ x: -dz * s, z: dx * s }, 13, 8, 0.6)) { hitCd = 1; G.toHost('lose', { n: 2 }); G.fx.burst(me.pos, [0xffd43b], 8, 5); }
        }
      }
      for (const [id, c] of coins) {
        c.t += dt;
        if (c.fall) { const k = Math.min(1, c.t / 1.1); c.m.position.y = 16 + (c.y - 16) * k * k; }
        c.m.rotation.y += dt * 3;
        if (!c.fall || c.t > 1.1) c.m.position.y = c.y + Math.sin(t * 4 + id) * 0.12;
        if (me.alive && G.playing() && !pending.has(id) && Math.hypot(me.pos.x - c.x, me.pos.y + 0.9 - c.m.position.y, me.pos.z - c.z) < 1.3) {
          pending.add(id); G.toHost('cc', { id });
        }
      }
    },
    hostUpdate(dt, t) {
      acc += dt;
      const max = 5 + G.ids().length * 2;
      if (acc < 0.35 || coins.size >= max) return;
      acc = 0;
      const big = Math.random() < 0.08;
      let x, z;
      if (big) { const a = Math.random() * 6.28; x = Math.cos(a) * 2; z = Math.sin(a) * 2; }
      else { const a = Math.random() * 6.28, r = 2 + Math.random() * (RA - 3); x = Math.cos(a) * r; z = Math.sin(a) * r; }
      G.hostBroadcast('cs', { id: nextId++, x: +x.toFixed(2), z: +z.toFixed(2), y: groundY(x, z) + 0.9, v: big ? 5 : 1, fall: Math.random() < 0.6 ? 1 : 0 });
    },
    onMsg(k, d, from) {
      if (k === 'cs') spawnCoin(d);
      else if (k === 'cc' && G.isHost()) {
        const c = coins.get(d.id);
        if (!c || !G.playing()) return;
        scores[from] = (scores[from] || 0) + c.v;
        G.hostBroadcast('ct', { id: d.id, by: from, s: { ...scores } });
      } else if (k === 'lose' && G.isHost()) {
        const n = Math.min(d.n || 0, scores[from] || 0);
        if (!n) return;
        scores[from] -= n;
        G.hostBroadcast('sc', { s: { ...scores }, who: from, n });
        const p = G.posOf(from);
        for (let i = 0; i < n; i++) {
          let x = p.x + R(3), z = p.z + R(3);
          const dd = Math.hypot(x, z); if (dd > RA - 1.5) { x *= (RA - 1.5) / dd; z *= (RA - 1.5) / dd; }
          G.hostBroadcast('cs', { id: nextId++, x: +x.toFixed(2), z: +z.toFixed(2), y: groundY(x, z) + 0.9, v: 1, fall: 0 });
        }
      } else if (k === 'ct') {
        const c = coins.get(d.id);
        if (c) { G.fx.sparkle(c.m.position, c.v > 1 ? 0xff922b : 0xffe066, 10); G.world.remove(c.m); coins.delete(d.id); }
        pending.delete(d.id);
        scores = d.s;
        if (d.by === G.myId()) (c && c.v > 1 ? G.sfx.bigcoin : G.sfx.coin)();
      } else if (k === 'sc') {
        scores = d.s;
      }
    },
    hostRank: () => G.scoreRank(scores),
    hud() {
      const top = G.ids().sort((a, b) => (scores[b] || 0) - (scores[a] || 0))[0];
      return pill(`🪙 <b>${scores[G.myId()] || 0}</b>`, 'big') + (top && scores[top] ? pill(`👑 ${G.nameOf(top)} · ${scores[top]}`, 'small') : '');
    },
  };
}

// =====================================================================
// 5) CIRCUITO LOCO (obstáculos)
// =====================================================================
function createCircuito(G) {
  const P = 0xffc9de, B = 0xa5d8ff, Y = 0xffe066, Gr = 0xb2f2bb, L = 0xd0bfff;
  G.island(0, 4, 9, 0, 8, 0x8ce99a);
  G.box(0, 4, 12, 16, 0, 1, Gr, { edgeColor: 0x69db7c });
  G.box(0, 13.5, 4, 3, 0, 1, Y);
  // disco con barrera giratoria
  G.cyl(0, 22, 8, 0, 1, B);
  const sweep = new THREE.Group(); sweep.position.set(0, 0.7, 22); G.world.add(sweep);
  const swGeo = new THREE.CylinderGeometry(0.35, 0.35, 15.5, 14); swGeo.rotateZ(Math.PI / 2);
  const swBar = new THREE.Mesh(swGeo, G.toon(0xff4d6d)); swBar.castShadow = true; sweep.add(swBar);
  const hub = new THREE.Mesh(G.GEO.cyl, G.toon(0xffd43b)); hub.scale.set(0.8, 1.6, 0.8); sweep.add(hub);
  G.colCyl(0, 22, 0.8, 2.3, 2.3);
  G.box(0, 31.5, 4, 3, 0, 1, Y);
  // plataformas móviles
  const movers = [34.5, 40.5, 46.5, 52.5].map((z, i) => {
    const p = G.box(0, z, 4, 4, 0, 0.8, [P, L, P, L][i], { col: {} });
    return { ...p, z, ph: i * 1.7, amp: 4.2, sp: 1.3 + i * 0.15, x: 0 };
  });
  G.box(0, 60, 10, 6, 0, 1, Gr, { edgeColor: 0x69db7c });
  // hongos de rebote
  G.box(0, 66.5, 10, 7, 0, 1, Y);
  const pads = [-2.8, 2.8].map(x => {
    const c = G.cyl(x, 67, 1.3, 0.45, 0.45, 0xff4d8d, { col: { bounce: 22 } });
    const dots = new THREE.Mesh(G.GEO.cyl, G.toon(0xffffff)); dots.scale.set(0.7, 0.05, 0.7); dots.position.set(x, 0.47, 67); G.world.add(dots);
    G.addAnim(dt => { c.col.squash = Math.max(0, (c.col.squash || 0) - dt * 4); const s = c.col.squash; c.mesh.scale.set(1.3 + s * 0.4, 0.45 * (1 - s * 0.5), 1.3 + s * 0.4); });
    return c;
  });
  G.box(0, 78, 10, 12, 6, 7, L, { edgeColor: 0xb197fc });
  // puente con martillos
  G.box(0, 97, 3.6, 26, 6, 0.8, B);
  const hammers = [90, 97, 104].map((z, i) => {
    const g = new THREE.Group(); g.position.set(0, 13, z); G.world.add(g);
    [-4.5, 4.5].forEach(x => { const post = new THREE.Mesh(G.GEO.box, G.toon(0x868e96)); post.scale.set(0.4, 7.5, 0.4); post.position.set(x, -3.6, 0); g.add(post); });
    const beam = new THREE.Mesh(G.GEO.box, G.toon(0x868e96)); beam.scale.set(9.4, 0.4, 0.4); g.add(beam);
    const arm = new THREE.Group(); g.add(arm);
    const rod = new THREE.Mesh(G.GEO.box, G.toon(0xdee2e6)); rod.scale.set(0.2, 5.2, 0.2); rod.position.y = -2.6; arm.add(rod);
    const head = new THREE.Mesh(G.GEO.cyl, G.toon(0xff922b)); head.scale.set(0.9, 2.4, 0.9); head.rotation.x = Math.PI / 2; head.position.y = -5.8; head.castShadow = true; arm.add(head);
    return { z, arm, ph: i * 2.1, sp: 1.7 + i * 0.2 };
  });
  G.box(0, 117, 14, 14, 6, 7, Gr, { edgeColor: 0x69db7c });
  arch(G, 0, 6, 118.5, 12, 0, 'META');
  G.island(0, 117, 10, 6, 10);
  for (let i = 0; i < 6; i++) G.addBalloon(R(6), 12 + R(1), 121 + R(2), G.COLORS[i]);
  [[-14, 30], [14, 50], [-14, 80], [15, 105], [-15, 112], [14, 8]].forEach(([x, z], i) => { G.island(x, z, 3.5, -2 + (i % 3) * 3, 6); G.addTree(x, -2 + (i % 3) * 3, z, 1.2); });
  // checkpoints
  const cps = [
    { z: -99, y: -99, p: { x: 0, y: 0, z: 3, ry: 0 } },
    { z: 57.5, y: -1, p: { x: 0, y: 0, z: 60, ry: 0 }, f: flag(G, 4.2, 0, 59) },
    { z: 72.5, y: 5, p: { x: 0, y: 6, z: 76, ry: 0 }, f: flag(G, 4.2, 6, 75) },
  ];
  let cp = 0, hitCd = 0;
  const tracker = G.finishTracker();
  return {
    introCam: { x: 0, z: 60, y: 3, r: 55, h: 32 },
    collide: true,
    fallY: -14,
    spawn(i, n) { return { x: (i % 4 - 1.5) * 1.6, y: 0.2, z: 1 + Math.floor(i / 4) * 1.6, ry: 0 }; },
    respawnPoint: () => ({ ...cps[cp].p, x: cps[cp].p.x + R(1) }),
    progress: () => G.me.pos.z,
    update(dt, t) {
      const pt = G.playing() ? t : 0;
      sweep.rotation.y = pt * 1.6;
      for (const m of movers) {
        const nx = Math.sin(pt * m.sp + m.ph) * m.amp;
        m.col.dx = nx - m.x; m.x = nx; m.col.x = nx;
        m.mesh.position.x = nx; if (m.mesh.userData.lip) m.mesh.userData.lip.position.x = nx;
      }
      hammers.forEach(h => { h.ang = Math.sin(pt * h.sp + h.ph) * 1.15; h.arm.rotation.z = h.ang; });
      const me = G.me;
      if (!me.alive) return;
      hitCd -= dt;
      // barra giratoria
      const a = sweep.rotation.y, dx = Math.cos(a), dz = -Math.sin(a);
      const rx = me.pos.x, rz = me.pos.z - 22;
      const proj = rx * dx + rz * dz;
      if (Math.abs(proj) < 7.8 && Math.abs(-rx * dz + rz * dx) < 0.75 && me.pos.y < 1.3 && hitCd <= 0) {
        const s = Math.sign(proj) || 1;
        if (G.knock({ x: -dz * s, z: dx * s }, 15, 8)) hitCd = 0.8;
      }
      // martillos
      for (const h of hammers) {
        const hx = Math.sin(h.ang) * 5.8, hy = 13 - Math.cos(h.ang) * 5.8;
        if (Math.abs(me.pos.z - h.z) < 1.4 && Math.abs(me.pos.x - hx) < 1.5 && me.pos.y + 0.9 > hy - 1.4 && me.pos.y < hy + 1.2 && hitCd <= 0) {
          const s = Math.sign(Math.cos(t * h.sp + h.ph)) || 1;
          if (G.knock({ x: s, z: 0 }, 17, 9, 0.6)) { hitCd = 0.8; G.fx.burst(me.pos, [0xff922b, 0xffffff], 12, 5); }
        }
      }
      // checkpoints
      for (let k = cps.length - 1; k > cp; k--) {
        if (me.onGround && me.pos.z > cps[k].z && me.pos.y > cps[k].y) {
          cp = k; G.sfx.checkpoint();
          const f = cps[k].f;
          if (f) { f.cloth.material = G.toon(G.COLORS[G.slotOf(G.myId()) % 8], { side: THREE.DoubleSide }); G.fx.sparkle({ x: f.g.position.x, y: f.g.position.y + 2.6, z: f.g.position.z }, 0xffe066, 16); }
          break;
        }
      }
      if (me.pos.z > 118.5 && me.pos.y > 5) tracker.reach();
    },
    onMsg: (k, d, from) => tracker.onMsg(k, d, from),
    hostDone: () => tracker.done(),
    hostRank: () => tracker.rank(id => (id === G.myId() ? G.me.pos.z : G.players.get(id).pos.z)),
    hud() {
      const prog = Math.max(0, Math.min(1, G.me.pos.z / 118.5));
      const others = G.ids().filter(id => id !== G.myId()).map(id => { const pl = G.players.get(id); return `<i style="left:${Math.max(0, Math.min(1, pl.pos.z / 118.5)) * 100}%;--c:${['#ff4d6d', '#4dabff', '#ffd43b', '#51cf66', '#b197fc', '#ff922b', '#22d3ee', '#f783ac'][pl.slot % 8]}"></i>`; }).join('');
      return `<div class="progress">${others}<i class="me" style="left:${prog * 100}%"></i><span>🏁</span></div>`;
    },
  };
}

// =====================================================================
// 6) EMPUJONES (sumo)
// =====================================================================
function createSumo(G) {
  const R0 = 11.5;
  const plat = G.cyl(0, 0, R0, 0, 1.2, 0x74c0fc);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.035, 8, 64), G.toon(0xffffff)); rim.rotation.x = Math.PI / 2; rim.position.y = 0.02; rim.scale.setScalar(R0 - 0.4); G.world.add(rim);
  const center = new THREE.Mesh(new THREE.CircleGeometry(2.5, 32), G.toon(0xffffff)); center.rotation.x = -Math.PI / 2; center.position.y = 0.03; G.world.add(center);
  const under = new THREE.Mesh(new THREE.ConeGeometry(R0, 9, 24), G.toon(0xc59a6d)); under.rotation.x = Math.PI; under.position.y = -5.7; G.world.add(under);
  decoIslands(G, 0, 0, 22, -4, 8);
  ring(G, 12, 21, 0, (x, y, z, a, i) => G.addBalloon(x, 8 + (i % 2) * 2, z, G.COLORS[i % 8]));
  const rings = new THREE.Group(); G.world.add(rings);
  [0.75, 0.5, 0.25].forEach((f, i) => { const c = new THREE.Mesh(new THREE.TorusGeometry(R0 * f, 0.12, 6, 64), G.toon([0x4dabff, 0xffd43b, 0xff4d8d][i])); c.rotation.x = Math.PI / 2; c.position.y = 0.03; rings.add(c); });
  let radius = R0, lives = 2, hitRecent = {};
  return {
    introCam: { x: 0, z: 0, y: 0, r: 20, h: 12 },
    collide: true, dash: true,
    fallY: -9,
    spawn(i, n) { const a = (i / n) * Math.PI * 2; return { x: Math.sin(a) * 7, y: 0.2, z: Math.cos(a) * 7, ry: a + Math.PI }; },
    onFall() {
      lives--;
      if (lives > 0 && G.playing()) { G.respawn({ x: R(1.5), y: 2, z: R(1.5), ry: 0 }); G.sfx.out(); }
      else G.eliminate();
    },
    update(dt, t) {
      const target = G.playing() ? Math.max(4.5, R0 - Math.max(0, t / G.TS - 12) * 0.16) : R0;
      radius += (target - radius) * Math.min(1, dt * 2);
      plat.col.r = radius; plat.mesh.scale.set(radius, 1.2, radius); rim.scale.setScalar(radius - 0.4);
      under.scale.set(radius / R0, 1, radius / R0); rings.scale.set(radius / R0, 1, radius / R0); center.scale.setScalar(Math.min(1, radius / R0 * 1.5));
      const me = G.me;
      for (const k in hitRecent) hitRecent[k] -= dt;
      if (me.alive && me.dashT > 0 && G.playing()) {
        for (const id of G.aliveIds()) {
          if (id === G.myId() || (hitRecent[id] || 0) > 0) continue;
          const p = G.players.get(id).pos;
          const dx = p.x - me.pos.x, dz = p.z - me.pos.z, d = Math.hypot(dx, dz);
          if (d < 1.5 && Math.abs(p.y - me.pos.y) < 1.4) {
            hitRecent[id] = 0.6;
            G.sendTo(id, 'push', { x: +(dx / d).toFixed(3), z: +(dz / d).toFixed(3) });
            G.fx.burst({ x: (p.x + me.pos.x) / 2, y: me.pos.y + 1, z: (p.z + me.pos.z) / 2 }, [0xffffff, 0xffd43b], 14, 6);
            G.sfx.bump();
            me.vel.x *= -0.3; me.vel.z *= -0.3;
          }
        }
      }
    },
    onMsg(k, d) {
      if (k === 'push') G.knock({ x: d.x, z: d.z }, 19, 7, 0.5);
    },
    hostDone: () => G.elimDone(),
    hostRank: () => G.elimRank(),
    hud() {
      const hearts = '❤️'.repeat(Math.max(0, lives)) + '🤍'.repeat(Math.max(0, 2 - lives));
      return pill(`${hearts} <span class="sub">Empujón: <kbd>F</kbd> / <kbd>Shift</kbd> / click</span>`);
    },
  };
}

export const MINIGAMES = {
  karts: {
    name: 'Turbo Karts', emoji: '🏎️', time: 150, create: createKarts,
    goal: 'Terminá 3 vueltas antes que nadie',
    desc: 'Las cajas ❓ dan turbos, aceite, cohetes 🚀 o la estrella ⭐ (invencible). Usá las flechas y las rampas, y derrapá en las curvas para un turbo extra. ¡Cambia en cada carrera!',
    controls: [['W', 'Acelerar'], ['S', 'Frenar'], ['A D', 'Doblar'], ['Espacio', 'Derrapar (mantené)'], ['F', 'Usar objeto']],
  },
  hex: {
    name: 'Hexagonía', emoji: '⬢', time: 120, create: createHex,
    goal: 'Sé el último en pie',
    desc: 'Los hexágonos se caen apenas los pisás. Hay tres pisos: si caés del último, quedás afuera. ¡Saltá para que se caigan más lento!',
    controls: CTL_MOVE,
  },
  bomba: {
    name: 'Bomba Caliente', emoji: '💣', time: 150, create: createBomba,
    goal: 'Que no te explote encima',
    desc: 'Una casona con ventanas, techo y cajas. Si tenés la bomba, tocá a otro para pasársela. Saltá por las ventanas, trepate a las cajas (empujá contra el borde y saltá) y usá las camas elásticas para subir al techo.',
    controls: [['W A S D', 'Moverse'], ['Espacio', 'Saltar'], ['Espacio contra un borde', 'Trepar'], ['Mouse', 'Cámara']],
  },
  monedas: {
    name: 'Lluvia de Monedas', emoji: '🪙', time: 50, create: createMonedas,
    goal: 'Juntá la mayor cantidad de monedas',
    desc: 'Caen monedas del cielo y las naranjas valen 5. ¡Saltá las barras giratorias: si te golpean o te caés, perdés monedas!',
    controls: CTL_MOVE,
  },
  circuito: {
    name: 'Circuito Loco', emoji: '🏁', time: 120, create: createCircuito,
    goal: 'Llegá primero a la META',
    desc: 'Esquivá la barra, cruzá las plataformas que se mueven, usá los hongos para subir y pasá los martillos. Si te caés, volvés a la última bandera.',
    controls: CTL_MOVE,
  },
  sumo: {
    name: 'Empujones', emoji: '💥', time: 90, create: createSumo,
    goal: 'Tirá a todos al agua',
    desc: 'Embestí a los demás para empujarlos afuera. La plataforma se achica con el tiempo. Tenés 2 vidas.',
    controls: [['W A S D', 'Moverse'], ['Espacio', 'Saltar'], ['F / Shift', 'Empujón'], ['Click', 'Empujón (con mouse fijado)']],
  },
};
