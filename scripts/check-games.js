#!/usr/bin/env node
// Revisa que los juegos de games/ cumplan la guía (GUIA_JUEGOS.md).
// Uso:
//   node scripts/check-games.js                    -> revisa todos los juegos
//   node scripts/check-games.js --changed lista.txt -> además exige que los archivos cambiados estén solo en games/<id>/
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GAMES = path.join(ROOT, 'games');
const MAX_MB = 25;
// excepciones aprobadas: Counter Strika trae mapas de CS:Source completos (malla, texturas y lightmaps)
const MAX_MB_GAME = { 'low-strike': 80 };
const errors = [], warnings = [], ok = [];

function dirSize(dir) {
  let total = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) total += dirSize(p); else total += fs.statSync(p).size;
  }
  return total;
}
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p, out); } else out.push(p);
  }
  return out;
}

function checkGame(id) {
  const dir = path.join(GAMES, id);
  const err = m => errors.push(`❌ **${id}**: ${m}`);
  const warn = m => warnings.push(`⚠️ **${id}**: ${m}`);
  if (!/^[a-z0-9-]+$/.test(id)) return err('el nombre de la carpeta tiene que ser kebab-case (minúsculas, números y guiones)');
  const mf = path.join(dir, 'game.json');
  if (!fs.existsSync(mf)) return err('falta game.json');
  let m;
  try { m = JSON.parse(fs.readFileSync(mf, 'utf8')); } catch (e) { return err('game.json no es JSON válido: ' + e.message); }
  if (!m.name || typeof m.name !== 'string') err('game.json: falta "name"');
  if (!['multi', 'single'].includes(m.mode)) err('game.json: "mode" tiene que ser "multi" o "single"');
  if (m.mode === 'multi') {
    const min = m.minPlayers, max = m.maxPlayers;
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 1 || max > 8 || min > max || max < 2) err('game.json: minPlayers (1-8) y maxPlayers (2-8) tienen que ser enteros, con min ≤ max. minPlayers 1 solo si el juego tiene bots');
  }
  if (!m.description) warn('game.json: conviene agregar "description"');
  if (!m.controls) warn('game.json: conviene agregar "controls"');
  const external = typeof m.url === 'string';
  if (external && !/^https:\/\//.test(m.url)) err('game.json: "url" tiene que empezar con https://');
  if (!external) {
    const entry = path.join(dir, (m.entry || 'index.html').replace(/^\/+/, ''));
    if (!fs.existsSync(entry)) err(`falta el archivo de entrada ${m.entry || 'index.html'}`);
    else {
      const html = fs.readFileSync(entry, 'utf8');
      if (m.mode === 'multi' && !html.includes('/sdk/arcade-sdk.js')) err('es multijugador pero no incluye <script src="/sdk/arcade-sdk.js">');
      if (/src=["']\/(?!sdk\/arcade-sdk\.js)[^/]/.test(html)) warn('hay rutas absolutas (empiezan con /): usá rutas relativas para tus archivos');
    }
  }
  const thumbs = [m.thumbnail, 'thumb.png', 'thumb.jpg', 'thumb.jpeg', 'thumb.webp'].filter(Boolean);
  if (!thumbs.some(t => fs.existsSync(path.join(dir, String(t).replace(/^\/+/, ''))))) warn('no tiene foto (thumb.jpg): se va a usar una portada automática');
  const files = walk(dir).map(f => path.relative(dir, f));
  if (files.some(f => /(^|\/)(server|app)\.js$/.test(f)) && files.some(f => f.endsWith('package.json'))) warn('parece tener un servidor propio: la guía pide usar solo el SDK');
  const mb = dirSize(dir) / 1024 / 1024;
  const max = MAX_MB_GAME[id] || MAX_MB;
  if (mb > max) err(`pesa ${mb.toFixed(1)} MB (máximo ${max} MB)`);
  ok.push(`✅ **${id}** — ${m.name || '?'} (${m.mode === 'multi' ? `${m.minPlayers}-${m.maxPlayers} jugadores` : '1 jugador'}, ${mb.toFixed(1)} MB)`);
}

const args = process.argv.slice(2);
const ci = args.indexOf('--changed');
let touched = null;
if (ci >= 0) {
  const changed = fs.readFileSync(args[ci + 1], 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
  touched = new Set();
  for (const f of changed) {
    const m = f.match(/^games\/([^/]+)\//);
    if (!m) errors.push(`❌ \`${f}\`: solo se pueden subir archivos dentro de \`games/<tu-juego>/\``);
    else touched.add(m[1]);
  }
  if (!changed.length) warnings.push('⚠️ no hay archivos cambiados');
}

const ids = fs.readdirSync(GAMES, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
for (const id of (touched ? [...touched].filter(id => ids.includes(id)) : ids)) checkGame(id);

const report = [
  '## 🎮 Revisión de juegos',
  touched ? `Juegos en este cambio: ${[...touched].map(t => '`' + t + '`').join(', ') || '(ninguno)'}` : `Juegos: ${ids.length}`,
  '', ...ok, '', ...errors, ...warnings, '',
  errors.length ? '**Hay errores: arreglalos antes de que se pueda aprobar.**' : '**Todo bien. Listo para aprobar.** 👍',
].join('\n');
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + '\n');
process.exit(errors.length ? 1 : 0);
