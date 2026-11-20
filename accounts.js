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

function publicUser(u) {
  return { name: u.name, crowns: u.crowns || 0, created: u.created, history: (u.history || []).slice(-HIST_MAX).reverse(), byGame: u.byGame || {} };
}

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
  u.crowns = (u.crowns || 0) + 1;
  u.byGame = u.byGame || {}; u.byGame[entry.game] = (u.byGame[entry.game] || 0) + 1;
  u.history = u.history || []; u.history.push({ t: Date.now(), ...entry });
  if (u.history.length > HIST_MAX) u.history = u.history.slice(-HIST_MAX);
  await store.putUser(key, u);
  return u;
}
async function top(n = 20) {
  const all = await store.allUsers();
  return all.filter(u => u.crowns > 0).sort((a, b) => b.crowns - a.crowns).slice(0, n).map(u => ({ name: u.name, crowns: u.crowns }));
}

module.exports = { store, register, login, newSession, userFromToken, logout, addCrown, publicUser, top, keyOf };
