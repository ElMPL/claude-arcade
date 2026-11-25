// ClaudeArcade — cuentas de usuario: registro, sesiones e historial de coronas.
// Guarda en Postgres si existe DATABASE_URL (persiste entre deploys); si no, en data/accounts.json
// (sirve para probar en local, pero en Render se borra en cada deploy o reinicio).
// Cada usuario es un documento JSON: así más adelante se le pueden sumar skins, récords de vueltas, etc.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const HIST_MAX = 300;            // coronas guardadas con detalle por usuario
const SESSION_DAYS = 60;

// ---------- almacenamiento ----------
function fileStore(file) {
  let db = { users: {}, sessions: {} };
  try { db = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* primera vez */ }
  let t = null;
  const flush = () => { t = null; fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file + '.tmp', JSON.stringify(db)); fs.renameSync(file + '.tmp', file); };
  const save = () => { if (!t) t = setTimeout(flush, 300); };
  return {
    kind: 'archivo',
    async init() {},
    async getUser(key) { return db.users[key] || null; },
    async putUser(key, u) { db.users[key] = u; save(); },
    async getSession(h) { return db.sessions[h] || null; },
    async putSession(h, s) { db.sessions[h] = s; save(); },
    async delSession(h) { delete db.sessions[h]; save(); },
    async allUsers() { return Object.values(db.users); },
  };
}
function pgStore(url) {
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString: url, ssl: /localhost|127\.0\.0\.1/.test(url) ? false : { rejectUnauthorized: false }, max: 4 });
  return {
    kind: 'postgres',
    async init() {
      await pool.query('CREATE TABLE IF NOT EXISTS arcade_users (key TEXT PRIMARY KEY, data JSONB NOT NULL)');
      await pool.query('CREATE TABLE IF NOT EXISTS arcade_sessions (hash TEXT PRIMARY KEY, data JSONB NOT NULL)');
    },
    async getUser(key) { const r = await pool.query('SELECT data FROM arcade_users WHERE key=$1', [key]); return r.rows[0] ? r.rows[0].data : null; },
    async putUser(key, u) { await pool.query('INSERT INTO arcade_users (key, data) VALUES ($1,$2) ON CONFLICT (key) DO UPDATE SET data=EXCLUDED.data', [key, u]); },
    async getSession(h) { const r = await pool.query('SELECT data FROM arcade_sessions WHERE hash=$1', [h]); return r.rows[0] ? r.rows[0].data : null; },
    async putSession(h, s) { await pool.query('INSERT INTO arcade_sessions (hash, data) VALUES ($1,$2) ON CONFLICT (hash) DO UPDATE SET data=EXCLUDED.data', [h, s]); },
    async delSession(h) { await pool.query('DELETE FROM arcade_sessions WHERE hash=$1', [h]); },
    async allUsers() { const r = await pool.query('SELECT data FROM arcade_users'); return r.rows.map(x => x.data); },
  };
}
const store = process.env.DATABASE_URL ? pgStore(process.env.DATABASE_URL) : fileStore(path.join(__dirname, 'data', 'accounts.json'));

// ---------- contraseñas y sesiones ----------
function hashPassword(pass, salt = crypto.randomBytes(16).toString('hex')) {
  const h = crypto.scryptSync(String(pass), salt, 64, { N: 16384, r: 8, p: 1 }).toString('hex');
  return { salt, hash: h };
}
function checkPassword(pass, u) {
  const a = Buffer.from(hashPassword(pass, u.salt).hash, 'hex'), b = Buffer.from(u.hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const sha = s => crypto.createHash('sha256').update(String(s)).digest('hex');
const keyOf = name => String(name || '').trim().toLowerCase();
function cleanUser(n) { return String(n || '').trim(); }
function validUser(n) { return /^[A-Za-z0-9_ÁÉÍÓÚáéíóúÑñÜü.\-]{3,16}$/.test(n); }

// ---------- perfil ----------
const AVATARS = ['🙂','😎','🤖','👾','🐱','🐶','🦊','🐼','🐸','🐵','🦁','🐯','🐙','🦄','🐲','👻','💀','🤠','🥷','🧙','🧛','🦸','🚀','⚽','🏎️','🎮','🔥','⚡','💎','🍕','🌵','🎯'];
const COLORS = ['#7c5cff','#ff5c8a','#ff9f43','#ffd32a','#2ed573','#1eb980','#18dcff','#3d7bff','#a55eea','#e84393','#d35400','#95a5a6'];
const BANNERS = ['aurora','atardecer','oceano','bosque','neon','lava','espacio','mono'];
const FONTS = ['normal','pixel','redonda','mono'];
const BIO_MAX = 120;
function profileOf(u) {
  const p = u.profile || {};
  return {
    avatar: AVATARS.includes(p.avatar) ? p.avatar : '🙂',
    color: COLORS.includes(p.color) ? p.color : COLORS[0],
    banner: BANNERS.includes(p.banner) ? p.banner : BANNERS[0],
    font: FONTS.includes(p.font) ? p.font : FONTS[0],
    bio: typeof p.bio === 'string' ? p.bio : '',
    fav: typeof p.fav === 'string' ? p.fav : '',
    title: typeof p.title === 'string' ? p.title : '',
  };
}
function statsOf(u) { const s = u.stats || {}; return { played: s.played || 0, wins: u.crowns || 0, streak: s.streak || 0, best: s.best || 0, last: s.last || 0 }; }
function publicUser(u) {
  return { name: u.name, crowns: u.crowns || 0, created: u.created, history: (u.history || []).slice(-HIST_MAX).reverse(), byGame: u.byGame || {}, profile: profileOf(u), stats: statsOf(u) };
}
// lo que ve cualquiera en el perfil de otro (sin el historial completo)
function profileCard(u) {
  return { name: u.name, crowns: u.crowns || 0, created: u.created, byGame: u.byGame || {}, history: (u.history || []).slice(-10).reverse(), profile: profileOf(u), stats: statsOf(u) };
}
const cleanText = (t, n) => String(t == null ? '' : t).replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, n);
async function updateProfile(key, body) {
  const u = await store.getUser(key); if (!u) return { ok: false, error: 'No hay sesión' };
  const p = profileOf(u), b = body || {};
  if (b.avatar !== undefined) { if (!AVATARS.includes(b.avatar)) return { ok: false, error: 'Avatar no válido' }; p.avatar = b.avatar; }
  if (b.color !== undefined) { if (!COLORS.includes(b.color)) return { ok: false, error: 'Color no válido' }; p.color = b.color; }
  if (b.banner !== undefined) { if (!BANNERS.includes(b.banner)) return { ok: false, error: 'Fondo no válido' }; p.banner = b.banner; }
  if (b.font !== undefined) { if (!FONTS.includes(b.font)) return { ok: false, error: 'Letra no válida' }; p.font = b.font; }
  if (b.bio !== undefined) p.bio = cleanText(b.bio, BIO_MAX);
  if (b.fav !== undefined) p.fav = cleanText(b.fav, 40);
  if (b.title !== undefined) p.title = cleanText(b.title, 24);
  u.profile = p;
  await store.putUser(key, u);
  return { ok: true, user: u };
}
async function changePassword(key, oldPass, newPass) {
  const u = await store.getUser(key); if (!u) return { ok: false, error: 'No hay sesión' };
  if (!checkPassword(String(oldPass || ''), u)) return { ok: false, error: 'La contraseña actual no es correcta' };
  newPass = String(newPass || '');
  if (newPass.length < 6 || newPass.length > 64) return { ok: false, error: 'La contraseña nueva tiene que tener entre 6 y 64 caracteres' };
  Object.assign(u, hashPassword(newPass));
  await store.putUser(key, u);
  return { ok: true, user: u };
}
// partida jugada por una cuenta (ganada o no): partidas, racha y mejor racha
async function addPlayed(key, won) {
  const u = await store.getUser(key); if (!u) return null;
  const s = u.stats || {};
  s.played = (s.played || 0) + 1; s.streak = won ? (s.streak || 0) + 1 : 0; s.best = Math.max(s.best || 0, s.streak); s.last = Date.now();
  u.stats = s;
  await store.putUser(key, u);
  return u;
}
async function getUserByName(name) { return store.getUser(keyOf(name)); }

async function register(name, pass) {
  name = cleanUser(name);
  if (!validUser(name)) return { ok: false, error: 'El usuario tiene que tener de 3 a 16 letras, números, punto, guion o guion bajo' };
  pass = String(pass || '');
  if (pass.length < 6 || pass.length > 64) return { ok: false, error: 'La contraseña tiene que tener entre 6 y 64 caracteres' };
  const key = keyOf(name);
  if (await store.getUser(key)) return { ok: false, error: 'Ese usuario ya existe' };
  const { salt, hash } = hashPassword(pass);
  const u = { name, key, salt, hash, created: Date.now(), crowns: 0, history: [], byGame: {} };
  await store.putUser(key, u);
  return { ok: true, user: u };
}
async function login(name, pass) {
  const u = await store.getUser(keyOf(name));
  if (!u || !checkPassword(String(pass || ''), u)) return { ok: false, error: 'Usuario o contraseña incorrectos' };
  return { ok: true, user: u };
}
async function newSession(u) {
  const token = crypto.randomBytes(32).toString('base64url');
  await store.putSession(sha(token), { key: u.key, exp: Date.now() + SESSION_DAYS * 864e5 });
  return token;
}
async function userFromToken(token) {
  if (!token || typeof token !== 'string' || token.length > 100) return null;
  const h = sha(token), s = await store.getSession(h);
  if (!s) return null;
  if (s.exp < Date.now()) { await store.delSession(h); return null; }
  return store.getUser(s.key);
}
async function logout(token) { if (token) await store.delSession(sha(token)); }

// una corona ganada: se suma al total y queda en el historial con el juego, la sala y los rivales
async function addCrown(key, entry) {
  const u = await store.getUser(key); if (!u) return null;
  const s = u.stats || {}; s.played = (s.played || 0) + 1; s.streak = (s.streak || 0) + 1; s.best = Math.max(s.best || 0, s.streak); s.last = Date.now(); u.stats = s;
  u.crowns = (u.crowns || 0) + 1;
  u.byGame = u.byGame || {}; u.byGame[entry.game] = (u.byGame[entry.game] || 0) + 1;
  u.history = u.history || []; u.history.push({ t: Date.now(), ...entry });
  if (u.history.length > HIST_MAX) u.history = u.history.slice(-HIST_MAX);
  await store.putUser(key, u);
  return u;
}
async function top(n = 20) {
  const all = await store.allUsers();
  return all.filter(u => u.crowns > 0).sort((a, b) => b.crowns - a.crowns).slice(0, n).map(u => { const p = profileOf(u); return { name: u.name, crowns: u.crowns, avatar: p.avatar, color: p.color }; });
}

module.exports = { store, register, login, newSession, userFromToken, logout, addCrown, addPlayed, publicUser, profileCard, profileOf, updateProfile, changePassword, getUserByName, top, keyOf, OPTIONS: { AVATARS, COLORS, BANNERS, FONTS, BIO_MAX } };
