// Sonido: muestras de CS:GO (pack de sonidos subido, en sounds/*.mp3) para pasos, impactos, muertes, explosiones,
// vainas y UI; lo demás (disparos, granadas, bomba, avisos) sintetizado. Posicional 3D. Si una muestra no cargó, se sintetiza.
let ctx = null, master = null, noiseBuf = null, vol0 = 0.55;
const L = { x: 0, y: 0, z: 0, yaw: 0 };
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = vol0;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 6;
    master.connect(comp); comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    loadSamples();
  } catch (e) { ctx = null; }
}
const R = (b, n, s = '') => Array.from({ length: n }, (_, i) => b + (i + 1) + s);
const SND = {
  step: R('pl_step', 4), dirt: R('pl_dirt', 4), tile: R('pl_tile', 4), metal: R('pl_metal', 4), land: R('pl_jump', 2), fall: ['pl_fallpain1'],
  flesh: R('bhit_flesh-', 3), helmet: ['bhit_helmet-1'], kevlar: ['bhit_kevlar-1'], hs: R('headshot', 3), pain: ['pl_pain2', 'pl_pain4', 'pl_pain5'],
  die: ['die1', 'die2', 'die3', 'death6'], boom: ['explode3', 'explode4', 'explode5'], shell: R('sshell', 3),
  impC: R('debris_concrete', 3), impM: R('debris_metal', 2), impW: R('debris_wood', 2),
  drop: ['items_weapondrop1'], pickup: ['items_ammopickup2'], clip: ['items_9mmclip1'], select: ['common_wpn_select'], deny: ['common_wpn_denyselect'], move: ['common_wpn_moveselect'],
  click: ['ui_buttonclick'], hover: ['ui_buttonrollover'],
};
const buf = {};
function loadSamples() {
  for (const n of new Set(Object.values(SND).flat()))
    fetch('sounds/' + n + '.mp3').then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(b => new Promise((ok, no) => ctx.decodeAudioData(b, ok, no))).then(a => { buf[n] = a; }).catch(() => {});
}
// reproduce una muestra al azar del grupo; devuelve false si no hay ninguna cargada (para sintetizar)
function samp(o, key, vol = 1, rate = 1, at = 0) {
  if (!o) return true; const L = (SND[key] || []).filter(n => buf[n]); if (!L.length) return false;
  const s = ctx.createBufferSource(); s.buffer = buf[L[Math.floor(Math.random() * L.length)]]; s.playbackRate.value = rate * (0.96 + Math.random() * 0.08);
  const g = ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(o); s.start(ctx.currentTime + at); return true;
}
let musicVol = 0.6 / 0.6;
export function setMusic(v) { musicVol = v / 0.6; }
export function setVolume(v) { vol0 = v; if (master) master.gain.value = v; }
export function setListener(x, y, z, yaw) { L.x = x; L.y = y; L.z = z; L.yaw = yaw; }
// destino con volumen por distancia y paneo
// Posicional 3D: panner HRTF (adelante/atrás/costados) y, además, un filtro que cambia el timbre si el sonido
// viene de abajo (apagado, como a través del piso) o de arriba (más agudo), para saber si está en otro nivel.
function out(pos, vol = 1, range = 30) {
  const g = ctx.createGain();
  let gain = vol, dst = master;
  if (pos) {
    const dx = pos[0] - L.x, dy = pos[1] - L.y, dz = pos[2] - L.z, d = Math.hypot(dx, dy, dz);
    gain *= 1 / (1 + (d / range) ** 2 * 3);
    if (gain < 0.004) return null;
    if (d > 0.4 && ctx.createPanner) {
      const p = ctx.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'linear'; p.refDistance = 1; p.maxDistance = 1e6; p.rolloffFactor = 0;
      // en coordenadas del oyente (adelante = -z): así no hace falta mover el listener de Web Audio
      const fx = -Math.sin(L.yaw), fz = -Math.cos(L.yaw), rx = Math.cos(L.yaw), rz = -Math.sin(L.yaw);
      const lx = dx * rx + dz * rz, lf = dx * fx + dz * fz;
      if (p.positionX) { p.positionX.value = lx; p.positionY.value = dy * 0.6; p.positionZ.value = -lf; } else p.setPosition(lx, dy * 0.6, -lf);
      p.connect(dst); dst = p;
      if (Math.abs(dy) > 1.8) { const f = ctx.createBiquadFilter(); if (dy < 0) { f.type = 'lowpass'; f.frequency.value = Math.max(700, 2600 - (-dy - 1.8) * 500); } else { f.type = 'highshelf'; f.frequency.value = 2500; f.gain.value = 4; } f.connect(dst); dst = f; }
    }
  }
  if (gain < 0.004) return null;
  g.gain.value = gain; g.connect(dst);
  return g;
}
function noise(dst, t, dur, f0, f1, q = 0.7, type = 'lowpass', a = 0.002, vol = 1) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 0.8 + Math.random() * 0.4;
  const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(dst); s.start(t, Math.random()); s.stop(t + dur + 0.05);
}
function tone(dst, t, dur, f0, f1, type = 'sine', vol = 0.5, a = 0.003) {
  const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dst); o.start(t); o.stop(t + dur + 0.05);
}
const SHOT = {
  pistol: { f: 2400, d: 0.18, b: 160, v: 0.8 }, smg: { f: 2000, d: 0.16, b: 130, v: 0.75 }, rifle: { f: 1600, d: 0.26, b: 95, v: 1 },
  sniper: { f: 1200, d: 0.55, b: 70, v: 1.25 }, heavy: { f: 1300, d: 0.32, b: 80, v: 1.05 }, equip: { f: 4000, d: 0.3, b: 300, v: 0.6 },
};
export function sfxShot(cat, pos, silent, deagle) {
  if (!ctx) return; const s = SHOT[cat] || SHOT.rifle; const t = ctx.currentTime;
  const o = out(pos, (silent ? 0.35 : s.v) * (pos ? 1 : 0.6), silent ? 12 : 60); if (!o) return;
  if (cat === 'equip') { noise(o, t, 0.35, 6000, 3000, 2, 'bandpass', 0.002, 0.7); tone(o, t, 0.3, 90, 60, 'sawtooth', 0.4); return; }
  if (silent) { noise(o, t, 0.09, 1800, 500, 1, 'lowpass', 0.001, 0.9); tone(o, t, 0.05, 300, 120, 'triangle', 0.3); return; }
  noise(o, t, s.d, s.f * (deagle ? 0.7 : 1), 200, 0.9, 'lowpass', 0.001, 1);
  noise(o, t, 0.04, 6000, 2500, 0.8, 'highpass', 0.001, 0.45);
  tone(o, t, s.d * 0.7, s.b * 1.6, s.b * 0.5, 'sine', 0.9);
  if (pos) noise(o, t + 0.05, s.d * 2.5, 700, 150, 0.5, 'lowpass', 0.02, 0.18); // eco
}
// pasos según el piso: 1 arena, 2 piedra, 3 madera, 4 metal. Correr suena más fuerte y se oye más lejos.
export function sfxStep(pos, vol = 1, surf = 2) {
  if (!ctx) return; const o = out(pos, 0.5 * vol, 9 + vol * 6); if (!o) return; const t = ctx.currentTime, r = Math.random();
  if (samp(o, ['', 'dirt', 'step', 'tile', 'metal'][surf] || 'step', 0.9)) return;
  if (surf === 1) { noise(o, t, 0.11, 700 + r * 300, 180, 0.8, 'lowpass', 0.004, 0.75); noise(o, t + 0.02, 0.07, 3200, 1800, 1.5, 'bandpass', 0.004, 0.25); }
  else if (surf === 3) { tone(o, t, 0.07, 170 + r * 30, 110, 'triangle', 0.35); noise(o, t, 0.05, 1100, 400, 2, 'bandpass', 0.002, 0.6); }
  else if (surf === 4) { tone(o, t, 0.16, 760 + r * 80, 700, 'square', 0.06); tone(o, t, 0.12, 1310, 1250, 'sine', 0.08); noise(o, t, 0.04, 2600, 1200, 3, 'bandpass', 0.001, 0.6); }
  else { noise(o, t, 0.045, 2000 + r * 600, 900, 2.2, 'bandpass', 0.001, 0.85); tone(o, t, 0.04, 95, 60, 'sine', 0.25); }
}
export function sfxLand(pos, hard) { if (!ctx) return; const o = out(pos, 0.6, 10); if (!o) return; const t = ctx.currentTime; if (hard && !pos) samp(o, 'fall', 0.8); if (samp(o, 'land', 0.9)) return; noise(o, t, 0.1, 700, 120, 1, 'lowpass', 0.002, 0.9); }
export function sfxClick(pos, f = 2200, v = 0.4) { if (!ctx) return; const o = out(pos, v, 8); if (!o) return; const t = ctx.currentTime; noise(o, t, 0.03, f, f * 0.5, 3, 'bandpass', 0.001, 0.9); }
export function sfxReload(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.45, 8); if (!o) return; noise(o, t, 0.04, 1500, 700, 3, 'bandpass', 0.001, 0.8); noise(o, t + 0.35, 0.05, 2600, 1300, 4, 'bandpass', 0.001, 0.9); noise(o, t + 0.8, 0.05, 1800, 900, 4, 'bandpass', 0.001, 0.9); }
export function sfxHit(head, helmet) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.45);
  if (samp(o, head ? (helmet ? 'helmet' : 'hs') : 'flesh', head ? 1.1 : 0.9)) return;
  if (head) { tone(o, t, helmet ? 0.25 : 0.12, helmet ? 2900 : 1500, helmet ? 2700 : 900, 'triangle', 0.5); }
  else noise(o, t, 0.07, 900, 300, 1, 'lowpass', 0.002, 0.6);
}
export function sfxHurt(head, armor) { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.6); if (samp(o, head ? 'hs' : armor ? 'kevlar' : 'flesh', 0.9)) { if (Math.random() < 0.5) samp(o, 'pain', 0.5, 1, 0.06); return; } noise(o, t, 0.12, 600, 150, 1, 'lowpass', 0.002, 0.9); tone(o, t, 0.1, 140, 70, 'sine', 0.6); }
export function sfxKill() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.25); tone(o, t, 0.08, 1300, 1300, 'square', 0.25); tone(o, t + 0.07, 0.12, 1750, 1750, 'square', 0.25); }
export function sfxExplosion(pos, big) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(pos, big ? 1.6 : 1.2, big ? 200 : 70); if (!o) return;
  if (samp(o, 'boom', big ? 1.5 : 1.1, big ? 0.85 : 1)) { if (big) tone(o, t, 1.4, 70, 28, 'sine', 0.7); return; }
  noise(o, t, big ? 2.4 : 1.2, 1800, 60, 0.6, 'lowpass', 0.004, 1); tone(o, t, big ? 1.4 : 0.7, 80, 30, 'sine', 1);
}
export function sfxFlash(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 1.1, 50); if (!o) return; noise(o, t, 0.4, 5000, 800, 0.7, 'lowpass', 0.002, 1); tone(o, t, 0.2, 120, 50, 'sine', 0.8); }
export function sfxRing(dur) { if (!ctx || dur < 0.3) return; const t = ctx.currentTime; const o = out(null, 0.12); tone(o, t, dur, 3200, 3150, 'sine', 0.3, 0.02); }
export function sfxSmoke(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.7, 25); if (!o) return; noise(o, t, 2.2, 2500, 500, 0.4, 'highpass', 0.05, 0.5); }
export function sfxFire(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.9, 25); if (!o) return; noise(o, t, 1.2, 1200, 300, 0.6, 'lowpass', 0.01, 0.9); noise(o, t + 0.05, 0.3, 3000, 1500, 2, 'bandpass', 0.001, 0.5); }
export function sfxFireTick(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.25, 12); if (!o) return; noise(o, t, 0.25, 900 + Math.random() * 500, 300, 1, 'lowpass', 0.02, 0.6); }
export function sfxBounce(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.5, 15); if (!o) return; tone(o, t, 0.06, 900, 500, 'triangle', 0.4); noise(o, t, 0.04, 2500, 1200, 2, 'bandpass', 0.001, 0.4); }
export function sfxThrow() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.4); noise(o, t, 0.18, 400, 1600, 1, 'bandpass', 0.05, 0.5); }
export function sfxBeep(pos, hi) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.6, 40); if (!o) return; tone(o, t, 0.12, hi ? 2600 : 2100, hi ? 2600 : 2100, 'square', 0.2); }
export function sfxPlantKey() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.3); tone(o, t, 0.06, 1400 + Math.random() * 600, 1400, 'square', 0.15); }
export function sfxDefuse(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.6, 15); if (!o) return; noise(o, t, 0.2, 3000, 1500, 3, 'bandpass', 0.001, 0.8); tone(o, t + 0.1, 0.25, 600, 900, 'triangle', 0.3); }
export function sfxBuy() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.35); tone(o, t, 0.06, 900, 900, 'triangle', 0.4); tone(o, t + 0.05, 0.08, 1350, 1350, 'triangle', 0.35); }
export function sfxDeny() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.3); if (samp(o, 'deny', 1)) return; tone(o, t, 0.15, 220, 180, 'square', 0.25); }
export function sfxPickup() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.35); if (samp(o, 'pickup', 1.2)) return; noise(o, t, 0.08, 2000, 900, 2, 'bandpass', 0.002, 0.8); }
export function sfxSting(win) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.32);
  const notes = win ? [523, 659, 784, 1047] : [440, 415, 392, 330];
  notes.forEach((f, i) => { tone(o, t + i * 0.11, 0.5, f, f, 'triangle', 0.35); tone(o, t + i * 0.11, 0.5, f / 2, f / 2, 'sawtooth', 0.08); });
}
export function sfxRoundStart() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.25); [392, 523].forEach((f, i) => tone(o, t + i * 0.12, 0.25, f, f, 'triangle', 0.35)); }

// ---------- música (sintetizada): inicio de ronda, MVP, radio, ping ----------
function chord(o, t, notes, dur, type = 'triangle', vol = 0.18) { for (const f of notes) { tone(o, t, dur, f, f, type, vol, 0.02); tone(o, t, dur, f * 1.003, f * 1.003, 'sawtooth', vol * 0.18, 0.02); } }
// melodía corta de "kit de música" al empezar la ronda (en el congelamiento)
export function musicRoundStart() {
  if (!ctx) return; const t = ctx.currentTime, o = out(null, 0.22 * musicVol);
  const prog = [[220, 277, 330], [196, 247, 294], [175, 220, 262], [196, 247, 330]];
  prog.forEach((c, i) => chord(o, t + i * 0.55, c, 0.6, 'triangle', 0.12));
  [440, 494, 523, 587, 659, 587, 523, 494].forEach((f, i) => tone(o, t + i * 0.275, 0.25, f, f, 'square', 0.05, 0.01));
  for (let i = 0; i < 8; i++) noise(o, t + i * 0.275, 0.05, 6000, 3000, 2, 'highpass', 0.001, 0.15);
  for (let i = 0; i < 4; i++) tone(o, t + i * 0.55, 0.2, 80, 45, 'sine', 0.5);
}
// fanfarria del MVP
export function musicMVP(mine) {
  if (!ctx) return; const t = ctx.currentTime, o = out(null, (mine ? 0.32 : 0.2) * musicVol);
  const mel = [523, 659, 784, 1047, 988, 1047, 1175, 1319];
  mel.forEach((f, i) => tone(o, t + i * 0.16, 0.3, f, f, 'triangle', 0.22, 0.01));
  [[262, 330, 392], [294, 370, 440], [330, 415, 494], [349, 440, 523]].forEach((c, i) => chord(o, t + i * 0.32, c, 0.36, 'sawtooth', 0.05));
  for (let i = 0; i < 8; i++) { tone(o, t + i * 0.16, 0.12, 65, 40, 'sine', 0.45); noise(o, t + i * 0.16 + 0.08, 0.06, 5000, 2500, 1, 'highpass', 0.001, 0.2); }
}
export function sfxRadio() { if (!ctx) return; const t = ctx.currentTime, o = out(null, 0.28); noise(o, t, 0.08, 3000, 1500, 3, 'bandpass', 0.001, 0.6); tone(o, t + 0.05, 0.06, 1200, 1200, 'square', 0.12); noise(o, t + 0.45, 0.06, 2500, 1200, 3, 'bandpass', 0.001, 0.4); }
export function sfxPing(pos) { if (!ctx) return; const t = ctx.currentTime, o = out(pos, 0.5, 80) || out(null, 0.3); tone(o, t, 0.12, 1568, 1568, 'sine', 0.35); tone(o, t + 0.1, 0.18, 2093, 2093, 'sine', 0.3); }
// muestras nuevas: muerte (posicional), vaina cayendo, impacto de bala según material, tirar arma, cambiar de arma, UI
export function sfxDie(pos) { if (!ctx) return; samp(out(pos, 0.8, 25), 'die', 1); }
export function sfxShell(pos) { if (!ctx) return; const o = out(pos, 0.25, 6); if (!o) return; samp(o, 'shell', 1, 1, 0.25 + Math.random() * 0.2); }
export function sfxImpact(pos, mat) { if (!ctx) return; const o = out(pos, 0.35, 10); if (!o) return; if (!samp(o, mat === 'metal' ? 'impM' : mat === 'wood' ? 'impW' : 'impC', 0.8)) noise(o, ctx.currentTime, 0.05, 2400, 900, 2, 'bandpass', 0.001, 0.6); }
export function sfxDrop(pos) { if (!ctx) return; samp(out(pos, 0.6, 10), 'drop', 1); }
export function sfxSelect() { if (!ctx) return; const o = out(null, 0.3); if (!samp(o, 'select', 1)) noise(o, ctx.currentTime, 0.03, 1400, 700, 3, 'bandpass', 0.001, 0.9); }
export function sfxUI(hover) { if (!ctx) return; samp(out(null, hover ? 0.25 : 0.4), hover ? 'hover' : 'click', 1); }
