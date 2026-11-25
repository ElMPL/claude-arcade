// ClaudeArcade — servidor: catálogo de juegos + salas online + relay de mensajes
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const { Server } = require('socket.io');
const crypto = require('crypto');
const Accounts = require('./accounts');

const PORT = process.env.PORT || 3000;
const GAMES_DIR = path.join(__dirname, 'games');
const MAX_ROOM_SIZE = 8;          // tope duro de una sala (cada juego define su propio max)
const MAX_MSGS_PER_SEC = 150;     // anti-spam por jugador
// Modo admin (panel oculto con F7): ya no hay código; es admin solo quien entra con una de estas cuentas.
// ADMIN_USERS (separadas por coma) las reemplaza si está definido.
const ADMIN_USERS = new Set(String(process.env.ADMIN_USERS || 'nitsuga').split(',').map(s => s.trim().toLowerCase()).filter(Boolean));

const app = express();
const server = http.createServer(app);
// pings más tolerantes (en el celu la pestaña se congela un rato) y recuperación de la conexión si se corta un momento
const io = new Server(server, { maxHttpBufferSize: 64 * 1024, pingInterval: 15000, pingTimeout: 20000, connectionStateRecovery: { maxDisconnectionDuration: 2 * 60 * 1000, skipMiddlewares: true } });

// ---------- Catálogo ----------
function clampInt(v, min, max, def) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : def;
}

function loadGames() {
  const games = [];
  if (!fs.existsSync(GAMES_DIR)) return games;
  for (const dir of fs.readdirSync(GAMES_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory() || !/^[a-z0-9-]+$/.test(dir.name)) continue;
    const manifestPath = path.join(GAMES_DIR, dir.name, 'game.json');
    if (!fs.existsSync(manifestPath)) continue;
    try {
      const m = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      const multi = m.mode === 'multi';
      const external = typeof m.url === 'string' && /^https:\/\//.test(m.url);
      const entry = typeof m.entry === 'string' ? m.entry.replace(/^\/+/, '') : 'index.html';
      // Miniatura: la del manifiesto, o thumb.(png|jpg|jpeg|webp) en la carpeta, o una generada automáticamente
      let thumbFile = null;
      const candidates = [m.thumbnail, 'thumb.png', 'thumb.jpg', 'thumb.jpeg', 'thumb.webp'].filter(Boolean).map(f => String(f).replace(/^\/+/, ''));
      for (const f of candidates) {
        const full = path.join(GAMES_DIR, dir.name, f);
        if (!full.startsWith(path.join(GAMES_DIR, dir.name) + path.sep)) continue;
        if (fs.existsSync(full)) { thumbFile = f; break; }
      }
      games.push({
        id: dir.name,
        name: String(m.name || dir.name).slice(0, 40),
        description: String(m.description || '').slice(0, 200),
        author: String(m.author || 'Anónimo').slice(0, 30),
        mode: multi ? 'multi' : 'single',
        minPlayers: multi ? clampInt(m.minPlayers, 1, MAX_ROOM_SIZE, 2) : 1,
        maxPlayers: multi ? clampInt(m.maxPlayers, 1, MAX_ROOM_SIZE, 2) : 1,
        emoji: String(m.emoji || '🎮').slice(0, 4),
        color: /^#[0-9a-fA-F]{3,8}$/.test(m.color || '') ? m.color : '#7c5cff',
        thumbnail: thumbFile ? `/games/${dir.name}/${thumbFile}` : `/thumbs/${dir.name}.svg`,
        autoThumbnail: !thumbFile,
        controls: String(m.controls || '').slice(0, 120),
        url: external ? m.url : `/games/${dir.name}/${entry}`,
        external,
      });
    } catch (e) {
      console.warn(`[games] ${dir.name}/game.json inválido:`, e.message);
    }
  }
  games.sort((a, b) => a.name.localeCompare(b.name));
  return games;
}

const GAMES = loadGames();
const GAME_BY_ID = new Map(GAMES.map(g => [g.id, g]));
console.log(`[games] ${GAMES.length} juegos cargados: ${GAMES.map(g => g.id).join(', ')}`);

// ---------- Miniaturas automáticas (para juegos sin foto) ----------
function hashStr(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function xmlEsc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c])); }
function autoThumb(g) {
  let seed = hashStr(g.id);
  const rnd = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const shapes = [];
  for (let i = 0; i < 14; i++) {
    const x = Math.round(rnd() * 400), y = Math.round(rnd() * 300), s = Math.round(14 + rnd() * 46), o = (0.08 + rnd() * 0.18).toFixed(2);
    const kind = Math.floor(rnd() * 3);
    if (kind === 0) shapes.push(`<circle cx="${x}" cy="${y}" r="${s / 2}" fill="#fff" opacity="${o}"/>`);
    else if (kind === 1) shapes.push(`<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="6" fill="#fff" opacity="${o}" transform="rotate(${Math.round(rnd() * 90)} ${x} ${y})"/>`);
    else shapes.push(`<polygon points="${x},${y - s / 2} ${x + s / 2},${y + s / 2} ${x - s / 2},${y + s / 2}" fill="#fff" opacity="${o}"/>`);
  }
  const name = g.name.length > 18 ? g.name.slice(0, 17) + '…' : g.name;
  const fs = name.length > 12 ? 30 : 38;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g.color}"/><stop offset="1" stop-color="#1b1440"/></linearGradient>
<radialGradient id="l" cx=".5" cy=".42" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
<rect width="400" height="300" fill="url(#g)"/>${shapes.join('')}<circle cx="200" cy="125" r="110" fill="url(#l)"/>
<text x="200" y="160" font-size="96" text-anchor="middle" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${xmlEsc(g.emoji)}</text>
<text x="200" y="262" font-size="${fs}" font-weight="900" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" fill="#fff" stroke="#1b1440" stroke-width="7" paint-order="stroke" stroke-linejoin="round">${xmlEsc(name.toUpperCase())}</text>
</svg>`;
}
app.get('/thumbs/:id.svg', (req, res) => {
  const g = GAME_BY_ID.get(req.params.id);
  if (!g) return res.status(404).end();
  res.type('image/svg+xml').set('Cache-Control', 'public, max-age=3600').send(autoThumb(g));
});

app.get('/healthz', (_req, res) => res.send('ok'));
app.get('/api/games', (_req, res) => res.json(GAMES));
// ---------- Cuentas (usuario y contraseña, historial de coronas) ----------
app.set('trust proxy', 1);
const COOKIE = 'ca_s';
function readCookie(header) {
  const m = String(header || '').match(/(?:^|;\s*)ca_s=([^;]+)/); return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(req, res, token) {
  const secure = req.secure ? '; Secure' : '';
  res.setHeader('Set-Cookie', token ? `${COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${60 * 864e2}; SameSite=Lax${secure}` : `${COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secure}`);
}
const authTries = new Map(); // ip -> { n, t }: freno a probar contraseñas
function tooMany(ip) {
  const now = Date.now(), e = authTries.get(ip) || { n: 0, t: now };
  if (now - e.t > 10 * 60e3) { e.n = 0; e.t = now; }
  e.n++; authTries.set(ip, e); return e.n > 20;
}
function okAuth(ip) { const e = authTries.get(ip); if (e) e.n = Math.max(0, e.n - 1); } // un acierto no gasta intentos
const api = express.Router();
api.use(express.json({ limit: '4kb' }));
const wrap = fn => (req, res) => fn(req, res).catch(e => { console.error('cuentas', e); res.status(500).json({ ok: false, error: 'Error del servidor, probá de nuevo' }); });
api.post('/register', wrap(async (req, res) => {
  if (tooMany(req.ip)) return res.status(429).json({ ok: false, error: 'Demasiados intentos, esperá unos minutos' });
  const r = await Accounts.register(req.body && req.body.user, req.body && req.body.pass);
  if (!r.ok) return res.json(r);
  okAuth(req.ip);
  setCookie(req, res, await Accounts.newSession(r.user));
  res.json({ ok: true, user: meOut(r.user) });
}));
api.post('/login', wrap(async (req, res) => {
  if (tooMany(req.ip)) return res.status(429).json({ ok: false, error: 'Demasiados intentos, esperá unos minutos' });
  const r = await Accounts.login(req.body && req.body.user, req.body && req.body.pass);
  if (!r.ok) return res.json(r);
  okAuth(req.ip);
  setCookie(req, res, await Accounts.newSession(r.user));
  res.json({ ok: true, user: meOut(r.user) });
}));
api.post('/logout', wrap(async (req, res) => { await Accounts.logout(readCookie(req.headers.cookie)); setCookie(req, res, null); res.json({ ok: true }); }));
// lo que recibe el dueño de la cuenta; al admin además se le avisa si las cuentas no persisten
const meOut = u => { const admin = ADMIN_USERS.has(u.key); return { ...Accounts.publicUser(u), admin: admin || undefined, storage: admin ? Accounts.store.kind : undefined }; };
const authed = fn => wrap(async (req, res) => {
  const u = await Accounts.userFromToken(readCookie(req.headers.cookie));
  if (!u) return res.status(401).json({ ok: false, error: 'Tu sesión se cerró, volvé a iniciar sesión' });
  return fn(req, res, u);
});
api.get('/me', wrap(async (req, res) => {
  const u = await Accounts.userFromToken(readCookie(req.headers.cookie));
  res.json(u ? { ok: true, user: meOut(u) } : { ok: false });
}));
api.get('/options', (_req, res) => res.json({ ok: true, ...Accounts.OPTIONS, storage: Accounts.store.kind }));
api.post('/profile', authed(async (req, res, u) => {
  const r = await Accounts.updateProfile(u.key, req.body);
  if (!r.ok) return res.json(r);
  res.json({ ok: true, user: meOut(r.user) });
  updateRoomsFor(u.key, r.user);
}));
api.post('/password', authed(async (req, res, u) => {
  if (tooMany(req.ip)) return res.status(429).json({ ok: false, error: 'Demasiados intentos, esperá unos minutos' });
  const r = await Accounts.changePassword(u.key, req.body && req.body.old, req.body && req.body.pass);
  if (r.ok) okAuth(req.ip);
  res.json(r.ok ? { ok: true } : r);
}));
api.get('/u/:name', wrap(async (req, res) => {
  const u = await Accounts.getUserByName(String(req.params.name || '').slice(0, 20));
  res.json(u ? { ok: true, user: Accounts.profileCard(u) } : { ok: false, error: 'Ese usuario no existe' });
}));
api.get('/top', wrap(async (_req, res) => res.json({ ok: true, top: await Accounts.top(20) })));
app.use('/api/account', api);

app.use('/games', express.static(GAMES_DIR, { fallthrough: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Salas ----------
const rooms = new Map(); // code -> room
const accOf = new Map();   // id del jugador -> clave de la cuenta (o null si juega como invitado)
const sockOf = new Map();  // id del jugador -> socket conectado
const homeOf = new Map();  // id del jugador -> código de la sala donde está
const offTimers = new Map();
const GRACE_LOBBY = 45e3, GRACE_PLAYING = 120e3, HOST_WAIT = 8e3;

// saca a un jugador de una sala (se fue, lo echaron o no volvió a tiempo)
function removePlayer(r, pid) {
  if (!r.players.has(pid)) return;
  r.players.delete(pid); homeOf.delete(pid);
  clearTimeout(offTimers.get(pid)); offTimers.delete(pid);
  if (r.players.size === 0) { rooms.delete(r.code); return; }
  if (r.hostId === pid) r.hostId = pickHost(r);
  if (r.state === 'playing') {
    io.to(r.code).emit('game:playerLeft', { id: pid, hostId: r.hostId });
    const game = GAME_BY_ID.get(r.gameId);
    if (game && r.players.size < game.minPlayers) {
      r.state = 'lobby';
      io.to(r.code).emit('game:end', { results: { text: 'No quedan jugadores suficientes' } });
    }
  }
  io.to(r.code).emit('room:update', publicRoom(r));
}
// el nuevo host es alguien conectado (si hay)
function pickHost(r) { const on = [...r.players.values()].find(p => !p.off); return on ? on.id : r.players.keys().next().value; }
// si el host se cortó en plena partida, después de unos segundos pasa a otro para que el juego no quede trabado
function hostCheck(r, pid) {
  const pl = r.players.get(pid);
  if (!pl || !pl.off || r.hostId !== pid) return;
  const nh = pickHost(r); if (nh === pid) return;
  r.hostId = nh;
  if (r.state === 'playing') io.to(r.code).emit('game:hostChanged', { hostId: nh });
  io.to(r.code).emit('room:update', publicRoom(r));
}
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function makeCode() {
  let code;
  do {
    code = Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
  } while (rooms.has(code));
  return code;
}

function cleanName(n) {
  return String(n || '').replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, 16);
}

// si alguien cambia su avatar o color, se actualiza en las salas donde está
function updateRoomsFor(key, u) {
  const p = Accounts.profileOf(u);
  for (const r of rooms.values()) {
    let hit = false;
    for (const pl of r.players.values()) if (accOf.get(pl.id) === key) { pl.avatar = p.avatar; pl.color = p.color; hit = true; }
    if (hit) io.to(r.code).emit('room:update', publicRoom(r));
  }
}
function publicRoom(r) {
  return { code: r.code, name: r.name, locked: !!r.pass, hostId: r.hostId, gameId: r.gameId, state: r.state, players: [...r.players.values()] };
}

// Contraseña opcional de la sala: se guarda solo el hash (con sal propia de la sala)
function cleanRoomName(n) { return String(n || '').replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, 28); }
function hashPass(salt, pass) { return crypto.createHash('sha256').update(salt + ':' + String(pass).slice(0, 64)).digest('hex'); }
function setPass(r, pass) {
  pass = String(pass || '').slice(0, 64);
  if (!pass) { r.pass = null; return; }
  r.salt = crypto.randomBytes(8).toString('hex'); r.pass = hashPass(r.salt, pass);
}
function passOk(r, pass) {
  if (!r.pass) return true;
  const a = Buffer.from(hashPass(r.salt, pass || ''), 'hex'), b = Buffer.from(r.pass, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
// lista de salas para el menú "Jugar online" (sin códigos de salas privadas a la vista: se entra con la contraseña)
function roomList() {
  const out = [];
  for (const r of rooms.values()) {
    const g = r.gameId ? GAME_BY_ID.get(r.gameId) : null;
    const host = r.players.get(r.hostId);
    out.push({ code: r.code, name: r.name, locked: !!r.pass, host: host ? host.name : '', n: r.players.size, max: g ? Math.min(g.maxPlayers || MAX_ROOM_SIZE, MAX_ROOM_SIZE) : MAX_ROOM_SIZE, game: g ? g.name : null, playing: r.state === 'playing' });
  }
  return out.sort((a, b) => (a.playing - b.playing) || (b.n - a.n)).slice(0, 60);
}

io.on('connection', socket => {
  let room = null;
  // id estable del jugador: sale de un secreto que guarda la pestaña, así al reconectarse vuelve a su lugar
  const secret = String((socket.handshake.auth && socket.handshake.auth.pid) || '');
  const pid = /^[A-Za-z0-9_-]{16,64}$/.test(secret) ? 'p' + crypto.createHash('sha256').update('pid:' + secret).digest('hex').slice(0, 15) : socket.id;
  socket.join(pid);
  { const old = sockOf.get(pid); if (old && old !== socket) { old.data.replaced = true; old.emit('session:replaced'); old.disconnect(true); } }
  sockOf.set(pid, socket);
  // ¿estaba en una sala? vuelve a entrar solo
  {
    const hr = homeOf.has(pid) && rooms.get(homeOf.get(pid));
    if (hr && hr.players.has(pid)) {
      const pl = hr.players.get(pid); pl.off = 0; clearTimeout(offTimers.get(pid)); offTimers.delete(pid);
      room = hr; socket.join(hr.code);
      socket.emit('room:rejoin', { me: pid, recovered: !!socket.recovered, chat: hr.chat || [], room: publicRoom(hr), game: hr.state === 'playing' ? { gameId: hr.gameId, hostId: hr.hostId, players: [...hr.players.values()] } : null });
      socket.to(hr.code).emit('room:update', publicRoom(hr));
    }
  }
  // si el navegador tiene sesión iniciada, el jugador usa el nombre de su cuenta y sus coronas quedan guardadas
  const userP = Accounts.userFromToken(readCookie(socket.handshake.headers.cookie)).catch(() => null);
  async function playerName(payload) {
    const u0 = await userP, u = u0 && (await Accounts.store.getUser(u0.key).catch(() => null) || u0);
    if (!u) return { name: cleanName(payload && payload.name), acc: null, look: {} };
    const p = Accounts.profileOf(u);
    return { name: u.name, acc: u.key, look: { avatar: p.avatar, color: p.color } };
  }
  let msgCount = 0, passTries = 0;
  const resetTimer = setInterval(() => { msgCount = 0; }, 1000);
  const passTimer = setInterval(() => { passTries = 0; }, 60000);

  function leave() {
    if (!room) return;
    const r = room;
    room = null;
    socket.leave(r.code);
    removePlayer(r, pid);
  }

  socket.on('rooms:list', (_p, cb) => { if (typeof cb === 'function') cb({ ok: true, rooms: roomList() }); });

  socket.on('room:create', async (payload, cb) => {
    if (typeof cb !== 'function') return;
    const { name, acc, look } = await playerName(payload);
    if (!name) return cb({ ok: false, error: 'Poné tu nombre para jugar online' });
    leave();
    const code = makeCode();
    const r = { code, name: cleanRoomName(payload && payload.roomName) || 'Sala de ' + name, pass: null, salt: '', hostId: pid, players: new Map(), gameId: null, state: 'lobby' };
    setPass(r, payload && payload.pass);
    r.players.set(pid, { id: pid, name, slot: 0, crowns: 0, acc: !!acc, ...look }); accOf.set(pid, acc); homeOf.set(pid, code);
    rooms.set(code, r);
    room = r;
    socket.join(code);
    cb({ ok: true, me: pid, room: publicRoom(r) });
  });

  socket.on('room:join', async (payload, cb) => {
    if (typeof cb !== 'function') return;
    const code = String((payload && payload.code) || '').toUpperCase().trim();
    const { name, acc, look } = await playerName(payload);
    if (!name) return cb({ ok: false, error: 'Poné tu nombre para jugar online' });
    const r = rooms.get(code);
    if (!r) return cb({ ok: false, error: 'No existe esa sala' });
    // ya estaba en esa sala (se le cortó): vuelve a su lugar aunque estén jugando
    if (r.players.has(pid)) {
      const pl = r.players.get(pid); pl.off = 0; clearTimeout(offTimers.get(pid)); offTimers.delete(pid);
      room = r; socket.join(code);
      cb({ ok: true, me: pid, chat: r.chat || [], room: publicRoom(r), game: r.state === 'playing' ? { gameId: r.gameId, hostId: r.hostId, players: [...r.players.values()] } : null });
      socket.to(code).emit('room:update', publicRoom(r));
      return;
    }
    if (r.state === 'playing') return cb({ ok: false, error: 'La partida ya empezó, esperá a que termine' });
    if (r.players.size >= MAX_ROOM_SIZE) return cb({ ok: false, error: 'La sala está llena' });
    if (acc && [...r.players.keys()].some(id => id !== pid && accOf.get(id) === acc)) return cb({ ok: false, error: 'Ya estás en esta sala con tu cuenta (en otra pestaña)' });
    if (r.pass && r.hostId !== pid) {
      if (!(payload && payload.pass)) return cb({ ok: false, needPass: true, error: 'Esta sala tiene contraseña' });
      if (++passTries > 12) return cb({ ok: false, needPass: true, error: 'Demasiados intentos, esperá un minuto' });
      if (!passOk(r, payload.pass)) return cb({ ok: false, needPass: true, error: 'Contraseña incorrecta' });
    }
    leave();
    r.players.set(pid, { id: pid, name, slot: r.players.size, crowns: 0, acc: !!acc, ...look }); accOf.set(pid, acc); homeOf.set(pid, code);
    room = r;
    socket.join(code);
    cb({ ok: true, me: pid, chat: r.chat || [], room: publicRoom(r) });
    socket.to(code).emit('room:update', publicRoom(r));
  });

  socket.on('room:leave', () => leave());

  // el host puede cambiar el nombre y la contraseña de la sala desde el lobby
  socket.on('room:settings', (payload, cb) => {
    const reply = typeof cb === 'function' ? cb : () => {};
    if (!room || room.hostId !== pid) return reply({ ok: false, error: 'Solo el host puede cambiar la sala' });
    const n = cleanRoomName(payload && payload.roomName); if (n) room.name = n;
    if (payload && 'pass' in payload) setPass(room, payload.pass);
    io.to(room.code).emit('room:update', publicRoom(room));
    reply({ ok: true });
  });

  socket.on('room:selectGame', payload => {
    if (!room || room.hostId !== pid || room.state !== 'lobby') return;
    const game = GAME_BY_ID.get(payload && payload.gameId);
    if (!game || game.mode !== 'multi') return;
    room.gameId = game.id;
    io.to(room.code).emit('room:update', publicRoom(room));
  });

  socket.on('room:start', (_payload, cb) => {
    const reply = typeof cb === 'function' ? cb : () => {};
    if (!room || room.hostId !== pid) return reply({ ok: false, error: 'Solo el host puede empezar' });
    const game = GAME_BY_ID.get(room.gameId);
    if (!game) return reply({ ok: false, error: 'Elegí un juego primero' });
    const n = room.players.size;
    if (n < game.minPlayers || n > game.maxPlayers) {
      return reply({ ok: false, error: `${game.name} es para ${game.minPlayers}–${game.maxPlayers} jugadores (hay ${n})` });
    }
    let slot = 0;
    for (const p of room.players.values()) p.slot = slot++;
    room.state = 'playing';
    reply({ ok: true });
    io.to(room.code).emit('room:update', publicRoom(room));
    io.to(room.code).emit('game:start', { gameId: game.id, hostId: room.hostId, players: [...room.players.values()] });
  });

  socket.on('room:end', payload => {
    if (!room || room.hostId !== pid || room.state !== 'playing') return;
    endGame(room, payload);
  });
  function endGame(room, payload) {
    room.state = 'lobby';
    // Coronas: cada juego ganado suma 1 corona al ganador (o ganadores) en la sala
    const winners = payload && Array.isArray(payload.winners) ? [...new Set(payload.winners)].filter(id => room.players.has(id)).slice(0, 8) : [];
    for (const id of winners) room.players.get(id).crowns++;
    const game = GAME_BY_ID.get(room.gameId);
    // historial de coronas de las cuentas
    const names = [...room.players.values()].map(p => p.name);
    for (const id of winners) {
      const key = accOf.get(id); if (!key) continue;
      const me = room.players.get(id).name;
      Accounts.addCrown(key, { game: game ? game.name : '?', gameId: room.gameId, room: room.name, with: names.filter(n => n !== me).slice(0, 8), co: winners.length > 1 })
        .then(u => { if (u) io.to(id).emit('account:update', Accounts.publicUser(u)); })
        .catch(e => console.error('corona', e));
    }
    // partidas jugadas (y racha cortada) para las cuentas que no ganaron
    for (const id of room.players.keys()) {
      const key = accOf.get(id); if (!key || winners.includes(id)) continue;
      Accounts.addPlayed(key, false)
        .then(u => { if (u) io.to(id).emit('account:update', Accounts.publicUser(u)); })
        .catch(e => console.error('partida', e));
    }
    let text = payload && typeof payload === 'object' ? String(payload.text || '').slice(0, 120) : '';
    if (!text && winners.length) text = `👑 ${winners.map(id => room.players.get(id).name).join(' y ')} ${winners.length > 1 ? 'ganaron' : 'ganó'} ${game ? game.name : ''}`;
    const results = { text, winners, gameName: game ? game.name : '' };
    io.to(room.code).emit('game:end', { results });
    io.to(room.code).emit('room:update', publicRoom(room));
  }

  // ---------- Admin ----------
  let adminTries = 0;
  socket.data.leave = () => leave();
  // admin = la cuenta con la que se abrió esta conexión (cookie de sesión), nunca algo que mande el cliente
  userP.then(u => { if (u && ADMIN_USERS.has(u.key)) socket.data.admin = true; });
  socket.on('admin:auth', async (_payload, cb) => {
    if (typeof cb !== 'function') return;
    if (++adminTries > 30) return cb({ ok: false });
    const u = await userP;
    socket.data.admin = !!(u && ADMIN_USERS.has(u.key));
    cb({ ok: socket.data.admin });
  });
  socket.on('admin:action', (p, cb) => {
    const reply = typeof cb === 'function' ? cb : () => {};
    if (!socket.data.admin) return reply({ ok: false, error: 'No sos admin' });
    if (!room) return reply({ ok: false, error: 'Tenés que estar en una sala' });
    const act = p && p.act;
    if (act === 'crown') {
      const pl = room.players.get(p.id || pid); if (!pl) return reply({ ok: false });
      pl.crowns = Math.max(0, pl.crowns + (p.d === -1 ? -1 : 1));
      io.to(room.code).emit('room:update', publicRoom(room));
    } else if (act === 'win') {
      if (room.state !== 'playing') return reply({ ok: false, error: 'No hay partida en juego' });
      endGame(room, { winners: [pid] });
    } else if (act === 'end') {
      if (room.state !== 'playing') return reply({ ok: false, error: 'No hay partida en juego' });
      endGame(room, { text: 'Partida terminada por un admin' });
    } else if (act === 'host') {
      if (room.state !== 'lobby') return reply({ ok: false, error: 'Solo en el lobby' });
      room.hostId = pid;
      io.to(room.code).emit('room:update', publicRoom(room));
    } else if (act === 'kick') {
      if (!p.id || p.id === pid || !room.players.has(p.id)) return reply({ ok: false });
      const target = sockOf.get(p.id);
      if (target && target.data.leave) { target.emit('room:kicked'); target.data.leave(); } else removePlayer(room, p.id);
    } else return reply({ ok: false });
    reply({ ok: true });
  });

  // Chat de la sala (se guardan los últimos 40 mensajes para los que entran después)
  let chatAt = 0;
  socket.on('room:chat', text => {
    if (!room) return;
    const now = Date.now(); if (now - chatAt < 600) return; chatAt = now;
    text = String(text == null ? '' : text).replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
    const pl = room.players.get(pid); if (!text || !pl) return;
    const m = { id: pid, name: pl.name, avatar: pl.avatar, color: pl.color, text, t: now };
    room.chat = room.chat || []; room.chat.push(m); if (room.chat.length > 40) room.chat.shift();
    io.to(room.code).emit('room:chat', m);
  });

  // Relay genérico: el juego manda {type, data, to?, v?}
  socket.on('relay', msg => {
    if (!room || room.state !== 'playing' || !msg || typeof msg.type !== 'string' || msg.type.length > 32) return;
    if (++msgCount > MAX_MSGS_PER_SEC) return;
    const out = { type: msg.type, data: msg.data, from: pid };
    if (socket.data.admin) out.adm = 1; // los juegos pueden confiar en pedidos de un admin
    if (msg.to) {
      if (!room.players.has(msg.to)) return;
      (msg.v ? io.to(msg.to).volatile : io.to(msg.to)).emit('relay', out);
    } else {
      (msg.v ? socket.to(room.code).volatile : socket.to(room.code)).emit('relay', out);
    }
  });

  socket.on('disconnect', () => {
    clearInterval(resetTimer); clearInterval(passTimer);
    if (sockOf.get(pid) === socket) sockOf.delete(pid);
    if (socket.data.replaced) return;            // se abrió de nuevo en otro lado: ese socket sigue
    if (!room) { accOf.delete(pid); return; }
    // no lo sacamos enseguida: tiene un rato para volver (celular que se durmió, señal que se cortó)
    const r = room, pl = r.players.get(pid); room = null;
    if (!pl) return;
    pl.off = Date.now();
    io.to(r.code).emit('room:update', publicRoom(r));
    clearTimeout(offTimers.get(pid));
    offTimers.set(pid, setTimeout(() => { const q = r.players.get(pid); if (q && q.off) { removePlayer(r, pid); accOf.delete(pid); } }, r.state === 'playing' ? GRACE_PLAYING : GRACE_LOBBY));
    if (r.hostId === pid) setTimeout(() => hostCheck(r, pid), r.state === 'playing' ? HOST_WAIT : HOST_WAIT * 2);
  });
});

Accounts.store.init()
  .then(() => console.log('Cuentas guardadas en', Accounts.store.kind))
  .catch(e => console.error('No se pudo abrir la base de cuentas', e))
  .finally(() => server.listen(PORT, () => console.log(`ClaudeArcade en http://localhost:${PORT}`)));
