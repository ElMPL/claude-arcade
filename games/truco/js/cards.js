// Mazo español dibujado en SVG (diseño propio, estilo clásico).
// Palos: e = espadas, b = bastos, o = oros, c = copas. Números: 1-7, 10 (sota), 11 (caballo), 12 (rey).

export const SUIT_NAME = { e: 'espada', b: 'basto', o: 'oro', c: 'copa' };
const COL = { e: '#1f5fa8', b: '#2f7a3e', o: '#c98a0b', c: '#c0392b' };
const GAPS = { o: 0, c: 1, e: 2, b: 3 }; // cortes en el marco (como en la baraja española)

// ---------- Símbolos de cada palo (centrados en 0,0; tamaño ~1) ----------
function oro(x, y, s, r = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
    <circle r="0.5" fill="url(#gOro)" stroke="#8a5a00" stroke-width="0.04"/>
    <circle r="0.36" fill="none" stroke="#8a5a00" stroke-width="0.03"/>
    ${Array.from({ length: 8 }, (_, i) => `<ellipse rx="0.07" ry="0.16" fill="#e8a30c" stroke="#8a5a00" stroke-width="0.02" transform="rotate(${i * 45}) translate(0 -0.19)"/>`).join('')}
    <circle r="0.09" fill="#c0392b" stroke="#8a5a00" stroke-width="0.02"/>
  </g>`;
}
function copa(x, y, s, r = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
    <path d="M-0.36 -0.42 Q-0.38 0.06 0 0.1 Q0.38 0.06 0.36 -0.42 Z" fill="#c0392b" stroke="#6b1a12" stroke-width="0.035"/>
    <ellipse cx="0" cy="-0.42" rx="0.36" ry="0.07" fill="#f2c14e" stroke="#6b1a12" stroke-width="0.03"/>
    <path d="M-0.22 -0.25 Q0 -0.18 0.22 -0.25" fill="none" stroke="#f2c14e" stroke-width="0.04"/>
    <rect x="-0.05" y="0.08" width="0.1" height="0.24" fill="#f2c14e" stroke="#6b1a12" stroke-width="0.03"/>
    <circle cy="0.2" r="0.08" fill="#f2c14e" stroke="#6b1a12" stroke-width="0.03"/>
    <path d="M-0.25 0.46 Q0 0.28 0.25 0.46 Z" fill="#c0392b" stroke="#6b1a12" stroke-width="0.035"/>
  </g>`;
}
function espada(x, y, s, r = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
    <path d="M0 -0.52 L0.075 -0.38 L0.065 0.18 L-0.065 0.18 L-0.075 -0.38 Z" fill="#cfe0f2" stroke="#1f3f6b" stroke-width="0.03"/>
    <line x1="0" y1="-0.44" x2="0" y2="0.14" stroke="#7fa3c9" stroke-width="0.02"/>
    <path d="M-0.22 0.18 Q0 0.13 0.22 0.18 L0.24 0.24 Q0 0.2 -0.24 0.24 Z" fill="#f2c14e" stroke="#6b4a00" stroke-width="0.025"/>
    <rect x="-0.045" y="0.24" width="0.09" height="0.2" rx="0.02" fill="#1f5fa8" stroke="#10305a" stroke-width="0.02"/>
    <circle cy="0.48" r="0.06" fill="#f2c14e" stroke="#6b4a00" stroke-width="0.025"/>
  </g>`;
}
function basto(x, y, s, r = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
    <path d="M-0.15 -0.48 Q0 -0.56 0.15 -0.48 Q0.2 -0.3 0.12 -0.1 L0.06 0.5 Q0 0.54 -0.05 0.5 L-0.11 -0.1 Q-0.2 -0.3 -0.15 -0.48 Z" fill="#a8692f" stroke="#4a2a0c" stroke-width="0.035"/>
    <circle cx="-0.11" cy="-0.28" r="0.045" fill="#6b3f14"/><circle cx="0.1" cy="-0.15" r="0.04" fill="#6b3f14"/>
    <circle cx="-0.05" cy="0.08" r="0.035" fill="#6b3f14"/><circle cx="0.04" cy="0.3" r="0.03" fill="#6b3f14"/>
    <path d="M0.14 -0.36 Q0.32 -0.42 0.3 -0.26 Q0.2 -0.26 0.14 -0.36 Z" fill="#3d9a4c" stroke="#1c4f24" stroke-width="0.02"/>
    <path d="M-0.12 -0.02 Q-0.3 -0.06 -0.28 0.1 Q-0.18 0.08 -0.12 -0.02 Z" fill="#3d9a4c" stroke="#1c4f24" stroke-width="0.02"/>
  </g>`;
}
const SYM = { o: oro, c: copa, e: espada, b: basto };

const PIPS = {
  1: [[100, 150]],
  2: [[100, 92], [100, 208]],
  3: [[100, 78], [100, 150], [100, 222]],
  4: [[66, 92], [134, 92], [66, 208], [134, 208]],
  5: [[66, 88], [134, 88], [100, 150], [66, 212], [134, 212]],
  6: [[66, 80], [134, 80], [66, 150], [134, 150], [66, 220], [134, 220]],
  7: [[66, 76], [134, 76], [100, 114], [66, 152], [134, 152], [66, 224], [134, 224]],
};

function frame(s) {
  const c = COL[s], g = GAPS[s];
  const x0 = 14, x1 = 186, y0 = 14, y1 = 286;
  const side = (y) => {
    if (!g) return `M${x0 + 10} ${y} H${x1 - 10}`;
    const gap = 12, segs = [];
    const pts = Array.from({ length: g }, (_, i) => x0 + ((i + 1) * (x1 - x0)) / (g + 1));
    let start = x0 + 10;
    pts.forEach(p => { segs.push(`M${start} ${y} H${p - gap / 2}`); start = p + gap / 2; });
    segs.push(`M${start} ${y} H${x1 - 10}`);
    return segs.join(' ');
  };
  return `<path d="${side(y0)} ${side(y1)} M${x0} ${y0 + 10} V${y1 - 10} M${x1} ${y0 + 10} V${y1 - 10}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M${x0} ${y0 + 10} Q${x0} ${y0} ${x0 + 10} ${y0} M${x1 - 10} ${y0} Q${x1} ${y0} ${x1} ${y0 + 10} M${x0} ${y1 - 10} Q${x0} ${y1} ${x0 + 10} ${y1} M${x1 - 10} ${y1} Q${x1} ${y1} ${x1} ${y1 - 10}" stroke="${c}" stroke-width="3" fill="none"/>`;
}

function figure(s, n) {
  const c = COL[s];
  const robe = { o: '#e8a30c', c: '#c0392b', e: '#1f5fa8', b: '#2f7a3e' }[s];
  const robe2 = { o: '#c0392b', c: '#1f5fa8', e: '#c0392b', b: '#e8a30c' }[s];
  const face = '<circle cx="100" cy="92" r="17" fill="#f6d2a8" stroke="#5b3a1a" stroke-width="2"/><circle cx="94" cy="90" r="2" fill="#3a2410"/><circle cx="106" cy="90" r="2" fill="#3a2410"/><path d="M95 99 Q100 103 105 99" stroke="#8a3a1a" stroke-width="2" fill="none"/>';
  let hat = '', body = '', extra = '';
  if (n === 12) { // rey
    hat = '<path d="M80 78 L84 56 L92 68 L100 52 L108 68 L116 56 L120 78 Z" fill="#f2c14e" stroke="#6b4a00" stroke-width="2"/><circle cx="100" cy="60" r="3" fill="#c0392b"/>';
    body = `<path d="M70 250 L76 128 Q100 108 124 128 L130 250 Z" fill="${robe}" stroke="#2a1a0a" stroke-width="2.5"/>
      <path d="M60 252 L72 132 Q76 120 84 118 L80 252 Z" fill="${robe2}" stroke="#2a1a0a" stroke-width="2"/>
      <path d="M140 252 L128 132 Q124 120 116 118 L120 252 Z" fill="${robe2}" stroke="#2a1a0a" stroke-width="2"/>
      <path d="M84 110 Q100 124 116 110 L114 128 Q100 136 86 128 Z" fill="#fff" stroke="#2a1a0a" stroke-width="1.5"/>
      <path d="M88 108 Q100 128 112 108 L108 112 Q100 120 92 112 Z" fill="#8a5a2b"/>`;
    extra = SYM[s](140, 170, 46, s === 'e' || s === 'b' ? 25 : 0);
  } else if (n === 11) { // caballo
    hat = `<path d="M82 80 Q100 58 118 80 Z" fill="${robe2}" stroke="#2a1a0a" stroke-width="2"/><circle cx="118" cy="66" r="5" fill="#fff" stroke="#2a1a0a" stroke-width="1.5"/>`;
    body = `<path d="M84 160 L88 116 Q100 106 112 116 L116 160 Z" fill="${robe}" stroke="#2a1a0a" stroke-width="2.5"/>
      <ellipse cx="96" cy="196" rx="54" ry="30" fill="#f2efe6" stroke="#2a1a0a" stroke-width="2.5"/>
      <path d="M140 186 Q162 150 150 128 Q166 132 170 150 Q172 170 156 196 Z" fill="#f2efe6" stroke="#2a1a0a" stroke-width="2.5"/>
      <circle cx="158" cy="140" r="2.5" fill="#2a1a0a"/>
      <path d="M150 128 Q144 140 146 152" stroke="#8a5a2b" stroke-width="5" fill="none"/>
      <path d="M58 214 L54 258 M78 222 L76 262 M118 222 L120 262 M136 212 L142 256" stroke="#2a1a0a" stroke-width="7" stroke-linecap="round"/>
      <path d="M44 190 Q30 200 34 226" stroke="#8a5a2b" stroke-width="6" fill="none"/>
      <path d="M70 190 L132 190 L126 210 L76 210 Z" fill="${robe2}" stroke="#2a1a0a" stroke-width="2"/>`;
    extra = SYM[s](62, 130, 44, s === 'e' || s === 'b' ? -25 : 0);
  } else { // sota
    hat = `<path d="M80 82 Q84 64 100 64 Q116 64 120 82 Z" fill="${robe2}" stroke="#2a1a0a" stroke-width="2"/><path d="M114 70 Q126 54 132 62" stroke="#c0392b" stroke-width="4" fill="none"/>`;
    body = `<path d="M78 200 L82 126 Q100 110 118 126 L122 200 Z" fill="${robe}" stroke="#2a1a0a" stroke-width="2.5"/>
      <path d="M82 158 L118 158" stroke="${robe2}" stroke-width="6"/>
      <path d="M86 200 L84 254 M114 200 L116 254" stroke="${robe2}" stroke-width="12" stroke-linecap="round"/>
      <path d="M78 258 L92 258 M108 258 L122 258" stroke="#2a1a0a" stroke-width="6" stroke-linecap="round"/>`;
    extra = SYM[s](138, 160, 50, s === 'e' || s === 'b' ? 20 : 0);
  }
  return `<g>${body}${face}${hat}${extra}</g><text x="100" y="${n === 11 ? 280 : 278}" font-size="0" fill="${c}"></text>`;
}

const DEFS = `<defs>
  <radialGradient id="gOro" cx="0.4" cy="0.35" r="0.7"><stop offset="0" stop-color="#ffe9a3"/><stop offset="0.6" stop-color="#f2c14e"/><stop offset="1" stop-color="#c98a0b"/></radialGradient>
  <linearGradient id="gPaper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffdf6"/><stop offset="1" stop-color="#f3ead2"/></linearGradient>
</defs>`;

export function cardSVG(card) {
  const { s, n } = card;
  const c = COL[s];
  let body;
  if (n >= 10) body = figure(s, n);
  else if (n === 1) {
    const big = s === 'o' ? oro(100, 150, 112) : s === 'c' ? copa(100, 150, 120) : s === 'e' ? espada(100, 150, 170, 0) : basto(100, 150, 165, 0);
    const deco = s === 'e' || s === 'b' ? `<path d="M100 40 Q120 60 100 70 Q80 60 100 40 Z" fill="${c}" opacity=".25"/><path d="M100 260 Q120 240 100 230 Q80 240 100 260 Z" fill="${c}" opacity=".25"/>` : '';
    body = deco + big;
  } else {
    const size = (s === 'e' || s === 'b' ? 78 : 52) * (n >= 6 ? 0.9 : 1);
    body = PIPS[n].map(([x, y], i) => SYM[s](x, y, size, s === 'e' ? (i % 2 ? 18 : -18) : s === 'b' ? (i % 2 ? -18 : 18) : 0)).join('');
  }
  const idx = (x, y, rot) => `<text x="${x}" y="${y}" transform="rotate(${rot} ${x} ${y - 9})" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="26" fill="${c}" text-anchor="middle">${n}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">${DEFS}
    <rect x="1.5" y="1.5" width="197" height="297" rx="16" fill="url(#gPaper)" stroke="#b9a77c" stroke-width="3"/>
    ${frame(s)}${body}${idx(30, 44, 0)}${idx(170, 274, 180)}</svg>`;
}

export function backSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
    <defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="20" height="20" fill="#9b1c2e"/><rect width="10" height="10" fill="#b3263a"/><rect x="10" y="10" width="10" height="10" fill="#b3263a"/></pattern></defs>
    <rect x="1.5" y="1.5" width="197" height="297" rx="16" fill="#fffdf6" stroke="#b9a77c" stroke-width="3"/>
    <rect x="12" y="12" width="176" height="276" rx="10" fill="url(#p)" stroke="#f2c14e" stroke-width="3"/>
    <ellipse cx="100" cy="150" rx="48" ry="60" fill="#fffdf6" stroke="#f2c14e" stroke-width="4"/>
    <text x="100" y="140" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="21" fill="#9b1c2e">TRUCO</text>
    <path d="M70 158 H130" stroke="#f2c14e" stroke-width="3"/>
    <text x="100" y="186" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#9b1c2e">★ ★ ★</text>
  </svg>`;
}

const cache = new Map();
export function cardURL(card) {
  const k = card ? card.s + card.n : 'back';
  if (!cache.has(k)) cache.set(k, 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(card ? cardSVG(card) : backSVG()));
  return cache.get(k);
}
export function cardName(c) {
  const fig = { 10: 'sota', 11: 'caballo', 12: 'rey' }[c.n];
  return `${fig || c.n} de ${SUIT_NAME[c.s]}${c.n === 1 && 'eb'.includes(c.s) ? '' : ''}`;
}
