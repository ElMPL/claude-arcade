// Sonido sintetizado (sin archivos): disparos, pasos, granadas, bomba y avisos. Posicional en estéreo.
let ctx = null, master = null, noiseBuf = null;
const L = { x: 0, y: 0, z: 0, yaw: 0 };
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.55;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 6;
    master.connect(comp); comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  } catch (e) { ctx = null; }
}
export function setVolume(v) { if (master) master.gain.value = v; }
export function setListener(x, y, z, yaw) { L.x = x; L.y = y; L.z = z; L.yaw = yaw; }
// destino con volumen por distancia y paneo
function out(pos, vol = 1, range = 30) {
  const g = ctx.createGain();
  let gain = vol, pan = 0;
  if (pos) {
    const dx = pos[0] - L.x, dy = pos[1] - L.y, dz = pos[2] - L.z, d = Math.hypot(dx, dy, dz);
    gain *= 1 / (1 + (d / range) ** 2 * 3);
    if (d > 0.5) { const rx = Math.cos(L.yaw), rz = -Math.sin(L.yaw); pan = Math.max(-1, Math.min(1, (dx * rx + dz * rz) / d)) * 0.8; }
  }
  if (gain < 0.004) return null;
  g.gain.value = gain;
  if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); p.connect(master); }
  else g.connect(master);
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
export function sfxStep(pos, vol = 1) {
  if (!ctx) return; const o = out(pos, 0.5 * vol, 9); if (!o) return; const t = ctx.currentTime;
  noise(o, t, 0.06, 900 + Math.random() * 400, 200, 1.2, 'lowpass', 0.002, 0.7); tone(o, t, 0.04, 90, 60, 'sine', 0.25);
}
export function sfxLand(pos) { if (!ctx) return; const o = out(pos, 0.6, 10); if (!o) return; const t = ctx.currentTime; noise(o, t, 0.1, 700, 120, 1, 'lowpass', 0.002, 0.9); }
export function sfxClick(pos, f = 2200, v = 0.4) { if (!ctx) return; const o = out(pos, v, 8); if (!o) return; const t = ctx.currentTime; noise(o, t, 0.03, f, f * 0.5, 3, 'bandpass', 0.001, 0.9); }
export function sfxReload(pos) { if (!ctx) return; const t = ctx.currentTime; const o = out(pos, 0.45, 8); if (!o) return; noise(o, t, 0.04, 1500, 700, 3, 'bandpass', 0.001, 0.8); noise(o, t + 0.35, 0.05, 2600, 1300, 4, 'bandpass', 0.001, 0.9); noise(o, t + 0.8, 0.05, 1800, 900, 4, 'bandpass', 0.001, 0.9); }
export function sfxHit(head, helmet) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.45);
  if (head) { tone(o, t, helmet ? 0.25 : 0.12, helmet ? 2900 : 1500, helmet ? 2700 : 900, 'triangle', 0.5); }
  else noise(o, t, 0.07, 900, 300, 1, 'lowpass', 0.002, 0.6);
}
export function sfxHurt() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.6); noise(o, t, 0.12, 600, 150, 1, 'lowpass', 0.002, 0.9); tone(o, t, 0.1, 140, 70, 'sine', 0.6); }
export function sfxKill() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.25); tone(o, t, 0.08, 1300, 1300, 'square', 0.25); tone(o, t + 0.07, 0.12, 1750, 1750, 'square', 0.25); }
export function sfxExplosion(pos, big) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(pos, big ? 1.6 : 1.2, big ? 200 : 70); if (!o) return;
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
export function sfxDeny() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.3); tone(o, t, 0.15, 220, 180, 'square', 0.25); }
export function sfxPickup() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.35); noise(o, t, 0.08, 2000, 900, 2, 'bandpass', 0.002, 0.8); }
export function sfxSting(win) {
  if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.32);
  const notes = win ? [523, 659, 784, 1047] : [440, 415, 392, 330];
  notes.forEach((f, i) => { tone(o, t + i * 0.11, 0.5, f, f, 'triangle', 0.35); tone(o, t + i * 0.11, 0.5, f / 2, f / 2, 'sawtooth', 0.08); });
}
export function sfxRoundStart() { if (!ctx) return; const t = ctx.currentTime; const o = out(null, 0.25); [392, 523].forEach((f, i) => tone(o, t + i * 0.12, 0.25, f, f, 'triangle', 0.35)); }
