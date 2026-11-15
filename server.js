// ClaudeArcade — servidor: catálogo de juegos + salas online + relay de mensajes
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;
const GAMES_DIR = path.join(__dirname, 'games');
const MAX_ROOM_SIZE = 8;          // tope duro de una sala (cada juego define su propio max)
const MAX_MSGS_PER_SEC = 150;     // anti-spam por jugador

const app = express();
const server = http.createServer(app);
const io = new Server(server, { maxHttpBufferSize: 64 * 1024, pingInterval: 10000, pingTimeout: 8000 });

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
      games.push({
        id: dir.name,
        name: String(m.name || dir.name).slice(0, 40),
        description: String(m.description || '').slice(0, 200),
        author: String(m.author || 'Anónimo').slice(0, 30),
        mode: multi ? 'multi' : 'single',
        minPlayers: multi ? clampInt(m.minPlayers, 2, MAX_ROOM_SIZE, 2) : 1,
        maxPlayers: multi ? clampInt(m.maxPlayers, 2, MAX_ROOM_SIZE, 2) : 1,
        emoji: String(m.emoji || '🎮').slice(0, 4),
        color: /^#[0-9a-fA-F]{3,8}$/.test(m.color || '') ? m.color : '#7c5cff',
        thumbnail: m.thumbnail && !external ? `/games/${dir.name}/${String(m.thumbnail).replace(/^\/+/, '')}` : null,
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

app.get('/healthz', (_req, res) => res.send('ok'));
app.get('/api/games', (_req, res) => res.json(GAMES));
app.use('/games', express.static(GAMES_DIR, { fallthrough: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Salas ----------
const rooms = new Map(); // code -> room
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function makeCode() {
  let code;
  do {
    code = Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
  } while (rooms.has(code));
  return code;
}

function cleanName(n) {
  return String(n || '').replace(/[<>&"']/g, '').trim().slice(0, 16) || 'Jugador';
}

function publicRoom(r) {
  return { code: r.code, hostId: r.hostId, gameId: r.gameId, state: r.state, players: [...r.players.values()] };
}

io.on('connection', socket => {
  let room = null;
  let msgCount = 0;
  const resetTimer = setInterval(() => { msgCount = 0; }, 1000);

  function leave() {
    if (!room) return;
    const r = room;
    room = null;
    r.players.delete(socket.id);
    socket.leave(r.code);
    if (r.players.size === 0) { rooms.delete(r.code); return; }
    if (r.hostId === socket.id) r.hostId = r.players.keys().next().value;
    if (r.state === 'playing') {
      io.to(r.code).emit('game:playerLeft', { id: socket.id, hostId: r.hostId });
      const game = GAME_BY_ID.get(r.gameId);
      if (game && r.players.size < game.minPlayers) {
        r.state = 'lobby';
        io.to(r.code).emit('game:end', { results: { text: 'No quedan jugadores suficientes' } });
      }
    }
    io.to(r.code).emit('room:update', publicRoom(r));
  }

  socket.on('room:create', (payload, cb) => {
    if (typeof cb !== 'function') return;
    leave();
    const code = makeCode();
    const r = { code, hostId: socket.id, players: new Map(), gameId: null, state: 'lobby' };
    r.players.set(socket.id, { id: socket.id, name: cleanName(payload && payload.name), slot: 0 });
    rooms.set(code, r);
    room = r;
    socket.join(code);
    cb({ ok: true, me: socket.id, room: publicRoom(r) });
  });

  socket.on('room:join', (payload, cb) => {
    if (typeof cb !== 'function') return;
    const code = String((payload && payload.code) || '').toUpperCase().trim();
    const r = rooms.get(code);
    if (!r) return cb({ ok: false, error: 'No existe esa sala' });
    if (r.state === 'playing') return cb({ ok: false, error: 'La partida ya empezó, esperá a que termine' });
    if (r.players.size >= MAX_ROOM_SIZE) return cb({ ok: false, error: 'La sala está llena' });
    leave();
    r.players.set(socket.id, { id: socket.id, name: cleanName(payload && payload.name), slot: r.players.size });
    room = r;
    socket.join(code);
    cb({ ok: true, me: socket.id, room: publicRoom(r) });
    socket.to(code).emit('room:update', publicRoom(r));
  });

  socket.on('room:leave', () => leave());

  socket.on('room:selectGame', payload => {
    if (!room || room.hostId !== socket.id || room.state !== 'lobby') return;
    const game = GAME_BY_ID.get(payload && payload.gameId);
    if (!game || game.mode !== 'multi') return;
    room.gameId = game.id;
    io.to(room.code).emit('room:update', publicRoom(room));
  });

  socket.on('room:start', (_payload, cb) => {
    const reply = typeof cb === 'function' ? cb : () => {};
    if (!room || room.hostId !== socket.id) return reply({ ok: false, error: 'Solo el host puede empezar' });
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
    if (!room || room.hostId !== socket.id || room.state !== 'playing') return;
    room.state = 'lobby';
    const results = payload && typeof payload === 'object' ? { text: String(payload.text || '').slice(0, 120) } : null;
    io.to(room.code).emit('game:end', { results });
    io.to(room.code).emit('room:update', publicRoom(room));
  });

  // Relay genérico: el juego manda {type, data, to?, v?}
  socket.on('relay', msg => {
    if (!room || room.state !== 'playing' || !msg || typeof msg.type !== 'string' || msg.type.length > 32) return;
    if (++msgCount > MAX_MSGS_PER_SEC) return;
    const out = { type: msg.type, data: msg.data, from: socket.id };
    if (msg.to) {
      if (!room.players.has(msg.to)) return;
      (msg.v ? io.to(msg.to).volatile : io.to(msg.to)).emit('relay', out);
    } else {
      (msg.v ? socket.to(room.code).volatile : socket.to(room.code)).emit('relay', out);
    }
  });

  socket.on('disconnect', () => { clearInterval(resetTimer); leave(); });
});

server.listen(PORT, () => console.log(`ClaudeArcade en http://localhost:${PORT}`));
