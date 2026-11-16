// Sonido sintetizado: motor V6 turbo según RPM y acelerador, chirrido de neumáticos, viento,
// cambios de marcha, golpes y pitidos del semáforo. Un segundo motor para el auto rival más cercano.
let ctx = null, master = null, muted = false;
let eng = null, other = null, squeal = null, wind = null;

function noiseBuf(c) {
  const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}
function shaper(c, k = 6) {
  const s = c.createWaveShaper(), n = 1024, curve = new Float32Array(n);
  for (let i = 0; i < n; i++) { const x = i / n * 2 - 1; curve[i] = Math.tanh(k * x) / Math.tanh(k); }
  s.curve = curve; return s;
}
function makeEngine(c, out, vol) {
  const o1 = c.createOscillator(); o1.type = 'sawtooth';
  const o2 = c.createOscillator(); o2.type = 'square';
  const o3 = c.createOscillator(); o3.type = 'triangle';
  const g1 = c.createGain(), g2 = c.createGain(), g3 = c.createGain();
  g1.gain.value = 0.5; g2.gain.value = 0.25; g3.gain.value = 0.35;
  const mix = c.createGain();
  o1.connect(g1).connect(mix); o2.connect(g2).connect(mix); o3.connect(g3).connect(mix);
  const ws = shaper(c, 3);
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 2.5;
  const g = c.createGain(); g.gain.value = 0;
  mix.connect(ws).connect(lp).connect(g).connect(out);
  [o1, o2, o3].forEach(o => o.start());
  return { o1, o2, o3, lp, g, vol };
}
function setEngine(e, rpm, thr, gain) {
  if (!e) return;
  const t = ctx.currentTime, f = rpm / 60 * 3; // V6: 3 explosiones por vuelta
  e.o1.frequency.setTargetAtTime(f, t, 0.02);
  e.o2.frequency.setTargetAtTime(f * 0.5, t, 0.02);
  e.o3.frequency.setTargetAtTime(f * 2.01, t, 0.02);
  e.lp.frequency.setTargetAtTime(500 + thr * 2600 + rpm * 0.12, t, 0.03);
  e.g.gain.setTargetAtTime(gain * e.vol * (0.35 + 0.65 * thr), t, 0.04);
}

export const Audio = {
  init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.55;
    const comp = ctx.createDynamicsCompressor(); master.connect(comp).connect(ctx.destination);
    eng = makeEngine(ctx, master, 0.32);
    other = makeEngine(ctx, master, 0.22);
    const nb = noiseBuf(ctx);
    const mkNoise = (type, f, q) => { const s = ctx.createBufferSource(); s.buffer = nb; s.loop = true; const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(fl).connect(g).connect(master); s.start(); return { g, fl }; };
    squeal = mkNoise('bandpass', 1300, 9);
    wind = mkNoise('lowpass', 420, 0.7);
  },
  get muted() { return muted; },
  toggle() { muted = !muted; if (master) master.gain.value = muted ? 0 : 0.55; return muted; },
  update(me, near, nearDist) {
    if (!ctx) return;
    const t = ctx.currentTime;
    if (me) {
      setEngine(eng, me.rpm, me.shiftT > 0 ? 0.1 : me.thr, 1);
      const sl = Math.max(0, Math.max(...me.use) - 0.95);
      const onTrack = me.surf.every(s => s < 2);
      squeal.g.gain.setTargetAtTime(onTrack ? Math.min(0.22, sl * 0.25) * Math.min(1, Math.abs(me.vx) / 8) : 0, t, 0.05);
      squeal.fl.frequency.setTargetAtTime(1100 + sl * 300, t, 0.1);
      const v = Math.hypot(me.vx, me.vy);
      wind.g.gain.setTargetAtTime(Math.min(0.25, v * v / 30000) + (onTrack ? 0 : Math.min(0.2, v / 120)), t, 0.1);
      wind.fl.frequency.setTargetAtTime(onTrack ? 420 + v * 4 : 260, t, 0.1);
    } else { eng.g.gain.setTargetAtTime(0, t, 0.1); squeal.g.gain.setTargetAtTime(0, t, 0.1); wind.g.gain.setTargetAtTime(0, t, 0.1); }
    if (near && nearDist < 120) setEngine(other, near.rpm || 9000, near.thr ?? 1, Math.max(0, 1 - nearDist / 120) ** 2);
    else other.g.gain.setTargetAtTime(0, t, 0.1);
  },
  blip(kind) {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    if (kind === 'beep' || kind === 'go') {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = kind === 'go' ? 1320 : 880;
      g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + (kind === 'go' ? 0.5 : 0.18));
      o.connect(g).connect(master); o.start(t); o.stop(t + 0.6);
    } else if (kind === 'hit') {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf(ctx);
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 600;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + 0.4);
    } else if (kind === 'shift') {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square'; o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.06);
      g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      o.connect(g).connect(master); o.start(t); o.stop(t + 0.1);
    } else if (kind === 'fanfare') {
      [523, 659, 784, 1047].forEach((f, k) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t + k * 0.12); g.gain.linearRampToValueAtTime(0.18, t + k * 0.12 + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + k * 0.12 + 0.6);
        o.connect(g).connect(master); o.start(t + k * 0.12); o.stop(t + k * 0.12 + 0.7);
      });
    }
  },
};
