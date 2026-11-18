// Menú de inicio estilo battle royale: personaje en 3D, pestañas JUGAR / CONFIGURACIÓN,
// tarjeta de modo (2v2, 3v3, 5v5 con o sin bots), mapa, duración y nivel de bots.
import * as THREE from 'three';
import { makePlayerModel, setModelGun, poseModel } from './models.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function makeMenu(o) {
  const { G, store } = o;
  const M = {};
  const look = { t: store.get('ls:look', { t: -1 }).t ?? -1 };
  // ---------- escena 3D ----------
  const scene = new THREE.Scene();
  // fondo oscuro tipo CS2: degradé con luz cálida abajo, piso que se pierde en la niebla y polvo flotando
  const bg = document.createElement('canvas'); bg.width = 2; bg.height = 256;
  { const x = bg.getContext('2d'), gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#06090f'); gr.addColorStop(0.5, '#141c28'); gr.addColorStop(0.78, '#2a2a2c'); gr.addColorStop(1, '#3b3127'); x.fillStyle = gr; x.fillRect(0, 0, 2, 256); }
  const bgt = new THREE.CanvasTexture(bg); bgt.colorSpace = THREE.SRGBColorSpace; scene.background = bgt;
  scene.fog = new THREE.Fog('#1a1d22', 6, 16);
  const cam = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 100);
  scene.add(new THREE.HemisphereLight('#dbe5f4', '#3a3028', 1.7));
  const key = new THREE.DirectionalLight('#ffe6c4', 3.4); key.position.set(2.5, 4, 3); scene.add(key);
  const rim = new THREE.DirectionalLight('#9cc4ff', 2.4); rim.position.set(-3, 2.5, -3); scene.add(rim);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(14, 48), new THREE.MeshLambertMaterial({ color: '#2a2724' })); floor.rotation.x = -Math.PI / 2; floor.position.y = -0.2; scene.add(floor);
  // pedestal metálico con anillo del color del equipo y luz de piso
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.8, 0.2, 40), new THREE.MeshStandardMaterial({ color: '#2b2f36', roughness: 0.45, metalness: 0.6 })); ped.position.y = -0.1; scene.add(ped);
  const ringMat = new THREE.MeshBasicMaterial({ color: '#f2c04a' });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.018, 6, 64), ringMat); ring.rotation.x = Math.PI / 2; ring.position.y = 0.005; scene.add(ring);
  const glowC = document.createElement('canvas'); glowC.width = glowC.height = 128;
  { const x = glowC.getContext('2d'), r = x.createRadialGradient(64, 64, 4, 64, 64, 63); r.addColorStop(0, 'rgba(255,255,255,0.55)'); r.addColorStop(0.5, 'rgba(255,255,255,0.15)'); r.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = r; x.fillRect(0, 0, 128, 128); }
  const glowMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(glowC), color: '#f2c04a', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), glowMat); glow.rotation.x = -Math.PI / 2; glow.position.y = -0.19; scene.add(glow);
  // halo detrás del personaje
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ map: glowMat.map, color: '#4a5a72', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })); halo.position.set(0, 1.1, -2.5); scene.add(halo);
  // polvo en el aire
  const dustN = 160, dustG = new THREE.BufferGeometry(), dp = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) { dp[i * 3] = (Math.random() - 0.5) * 7; dp[i * 3 + 1] = Math.random() * 3.2; dp[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1; }
  dustG.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const rays = new THREE.Points(dustG, new THREE.PointsMaterial({ color: '#ffe2b0', size: 0.022, transparent: true, opacity: 0.5, depthWrite: false })); scene.add(rays);
  const holder = new THREE.Group(); scene.add(holder);
  let model = null, modelKey = '', spin = 0.4, drag = null, t0 = 0;

  function myTeamPreview() { return store.get('ls:lastTeam', 'T') === 'CT' ? 'CT' : 'T'; }
  function rebuildModel() {
    const team = myTeamPreview(), w = team === 'T' ? 'ak47' : 'm4a4';
    if (team === modelKey) return; modelKey = team;
    holder.clear();
    model = makePlayerModel(team, 0);
    setModelGun(model, w, 0);
    holder.add(model);
  }
  M.render = (renderer, dt) => {
    t0 += dt;
    if (!drag) spin += dt * 0.25;
    holder.rotation.y = Math.PI + Math.sin(spin) * 0.6 + 0.35;
    if (model) poseModel(model, { speed: 0, duck: 0, pitch: Math.sin(t0 * 1.3) * 0.04 - 0.05, onGround: true, dead: 0 }, dt);
    { const a = dustG.attributes.position; for (let i = 0; i < dustN; i++) { let y = a.array[i * 3 + 1] + dt * 0.06; if (y > 3.2) y = 0; a.array[i * 3 + 1] = y; a.array[i * 3] += Math.sin(t0 * 0.4 + i) * dt * 0.02; } a.needsUpdate = true; }
    { const tc = myTeamPreview() === 'CT' ? '#5b9bff' : '#f2c04a'; ringMat.color.set(tc); glowMat.color.set(tc); }
    const asp = innerWidth / innerHeight;
    cam.aspect = asp; cam.fov = asp < 1 ? 46 : 30; cam.updateProjectionMatrix();
    cam.position.set(asp < 1 ? 0 : -0.05, 1.5, 7.2); cam.lookAt(asp < 1 ? 0 : -0.05, 0.62, 0);
    renderer.setClearColor('#0b0f16'); renderer.clear();
    renderer.render(scene, cam);
  };
  addEventListener('pointerdown', e => { if (G.phase === 'lobby' && e.target.tagName === 'CANVAS') drag = { x: e.clientX, s: spin }; });
  addEventListener('pointermove', e => { if (drag) spin = drag.s - (e.clientX - drag.x) * 0.01; });
  addEventListener('pointerup', () => { drag = null; });

  // ---------- DOM ----------
  function savePref() { store.set('ls:look', look); o.sendPref({ t: look.t }); }
  M.myPref = () => ({ t: look.t });
  M.show = () => {
    $('lobby').hidden = false;
    for (const b of document.querySelectorAll('#lobby nav button')) b.onclick = () => { if (b.dataset.tab === 'settings') { b.classList.add('on'); o.openSettings(() => render()); } else render(); };
    for (const b of document.querySelectorAll('[data-pref]')) b.onclick = () => { look.t = +b.dataset.pref; savePref(); render(); };
    $('goBtn').onclick = () => { if (!o.isHost()) return; if (!canStart()) return; o.onStart(); };
    $('modeBtn').onclick = () => { $('modeSel').hidden = false; render(); };
    $('modeClose').onclick = () => { $('modeSel').hidden = true; };
    buildModeSel();
    render();
  };
  M.hide = () => { $('lobby').hidden = true; $('modeSel').hidden = true; };
  M.refresh = () => { if (!$('lobby').hidden) render(); };
  function canStart() {
    const n = (o.ctx().players || []).length;
    return G.cfg.bots || n >= 2;
  }
  function buildModeSel() {
    const box = $('modes'); box.innerHTML = '';
    for (const s of [2, 3, 5]) {
      const b = document.createElement('div'); b.className = 'mode'; b.dataset.s = s;
      b.innerHTML = `<b>${s}<i>VS</i>${s}</b><small>${s === 5 ? 'Clásico competitivo' : s === 3 ? 'Escuadra' : 'Duelo de parejas'}</small>`;
      b.onclick = () => { if (!o.isHost()) return; G.cfg.size = s; o.pushCfg(); };
      box.appendChild(b);
    }
    const gm = $('gmodes'); gm.innerHTML = '';
    for (const [k, v] of Object.entries(o.MODES)) {
      const b = document.createElement('div'); b.className = 'gmode'; b.dataset.m = k;
      b.innerHTML = `<b>${v.name}</b><small>${v.sub}</small>`;
      b.onclick = () => { if (!o.isHost()) return; G.cfg.mode = k; o.pushCfg(); };
      gm.appendChild(b);
    }
    const bt = $('botsSeg'); bt.innerHTML = '';
    for (const [v, l] of [[true, 'Con bots'], [false, 'Sin bots']]) { const b = document.createElement('button'); b.textContent = l; b.dataset.v = v; b.onclick = () => { if (!o.isHost()) return; G.cfg.bots = v; o.pushCfg(); }; bt.appendChild(b); }
    const seg = (el, opts, key) => { el.innerHTML = ''; for (const [k, l] of opts) { const b = document.createElement('button'); b.textContent = l; b.dataset.k = k; b.onclick = () => { if (!o.isHost()) return; G.cfg[key] = k; o.pushCfg(); }; el.appendChild(b); } };
    seg($('len'), Object.entries(o.LENGTHS).map(([k, v]) => [k, v.name + ' · a ' + v.win]), 'len');
    seg($('diff'), Object.entries(o.DIFF).map(([k, v]) => [k, v.name]), 'diff');
    const mp = $('maps'); mp.innerHTML = '';
    for (const m of o.MAPS) {
      const c = document.createElement('div'); c.className = 'mcard'; c.dataset.id = m.id;
      const cv = document.createElement('canvas'); cv.width = 200; cv.height = 200; c.appendChild(cv);
      const nm = document.createElement('div'); nm.className = 'mn'; nm.innerHTML = m.name + '<small>' + m.sub + '</small>'; c.appendChild(nm);
      c.onclick = () => { if (!o.isHost()) return; G.cfg.map = m.id; store.set('ls:map', m.id); o.pushCfg(); };
      mp.appendChild(c);
      o.mapThumb(m.id).then(img => { if (img) { const x = cv.getContext('2d'); x.fillStyle = '#0b1530'; x.fillRect(0, 0, 200, 200); x.drawImage(img, 0, 0, 200, 200); } });
    }
  }
  function render() {
    const ctx = o.ctx(), host = o.isHost(), me = o.myId();
    for (const b of document.querySelectorAll('#lobby nav button')) b.classList.toggle('on', b.dataset.tab === 'play');
    $('meName').textContent = ctx.me.name;
    $('roomInfo').textContent = ctx.online ? `Sala ${ctx.roomCode || ''} · ${(ctx.players || []).length} jugador${(ctx.players || []).length === 1 ? '' : 'es'}` : 'Práctica sin conexión';
    for (const b of document.querySelectorAll('[data-pref]')) b.classList.toggle('on', +b.dataset.pref === look.t);
    // equipo / grupo
    const people = (ctx.players || []).map(p => ({ ...p, pr: G.prefs[p.id] || {} }));
    const per = G.cfg.bots ? Math.max(G.cfg.size, Math.ceil(people.length / 2)) : Math.ceil(people.length / 2);
    $('party').innerHTML = `<h4>GRUPO</h4>` + people.map(p => `<div class="pm ${p.id === me ? 'me' : ''}"><i></i><span>${esc(p.name)}</span><small>${p.id === ctx.hostId ? 'host · ' : ''}elige equipo al entrar</small></div>`).join('')
      + (G.cfg.bots ? `<div class="pm bot"><i></i><span>${per * 2} bots</span><small>${o.DIFF[G.cfg.diff].name} · cada jugador reemplaza a uno</small></div>` : '');
    // tarjeta de modo
    const map = o.MAPS.find(m => m.id === G.cfg.map) || o.MAPS[0];
    $('modeTitle').textContent = `${per} VS ${per}`; $('modeMapName').textContent = map.name;
    $('modeSub').textContent = `${o.MODES[G.cfg.mode || 'comp'].name} · ${map.name} · ${G.cfg.bots ? 'con bots' : 'sin bots'}${['comp', 'casual'].includes(G.cfg.mode || 'comp') ? ' · ' + o.LENGTHS[G.cfg.len].name : ''}`;
    o.mapThumb(map.id).then(img => { if (!img) return; const cv = $('modeMap'), x = cv.getContext('2d'); x.fillStyle = '#0b1530'; x.fillRect(0, 0, cv.width, cv.height); x.drawImage(img, 0, 0, cv.width, cv.height); });
    $('modeBtn').textContent = host ? 'CAMBIAR MODO' : 'VER MODO';
    const go = $('goBtn'), ok = canStart();
    go.disabled = !host || !ok;
    go.innerHTML = host ? (ok ? 'JUGAR' : 'FALTAN JUGADORES') : 'ESPERANDO AL HOST';
    $('goNote').textContent = !ok && host ? 'Sin bots hacen falta al menos 2 jugadores en la sala.' : host ? '' : 'El host elige el modo y empieza la partida.';
    // selector de modo
    for (const el of document.querySelectorAll('#modes .mode')) el.classList.toggle('on', +el.dataset.s === G.cfg.size);
    for (const el of document.querySelectorAll('#gmodes .gmode')) el.classList.toggle('on', el.dataset.m === (G.cfg.mode || 'comp'));
    for (const el of document.querySelectorAll('#botsSeg button')) el.classList.toggle('on', String(G.cfg.bots) === el.dataset.v);
    for (const el of document.querySelectorAll('#len button')) el.classList.toggle('on', el.dataset.k === G.cfg.len);
    for (const el of document.querySelectorAll('#diff button')) el.classList.toggle('on', el.dataset.k === G.cfg.diff);
    for (const el of document.querySelectorAll('.mcard')) el.classList.toggle('on', el.dataset.id === G.cfg.map);
    $('modeSel').classList.toggle('ro', !host);
    rebuildModel();
  }
  return M;
}
