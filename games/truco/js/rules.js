// Reglas del Truco argentino (sin flor). Funciones puras que usan el host y los clientes.

export const SUITS = ['e', 'b', 'o', 'c'];
export const NUMS = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

export function newDeck() {
  const d = [];
  for (const s of SUITS) for (const n of NUMS) d.push({ s, n });
  for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]]; }
  return d;
}

// Jerarquía: 1e > 1b > 7e > 7o > 3 > 2 > 1 falsos > 12 > 11 > 10 > 7 falsos > 6 > 5 > 4
export function rank(c) {
  if (c.n === 1 && c.s === 'e') return 14;
  if (c.n === 1 && c.s === 'b') return 13;
  if (c.n === 7 && c.s === 'e') return 12;
  if (c.n === 7 && c.s === 'o') return 11;
  return { 3: 10, 2: 9, 1: 8, 12: 7, 11: 6, 10: 5, 7: 4, 6: 3, 5: 2, 4: 1 }[c.n];
}

const envVal = c => (c.n >= 10 ? 0 : c.n);
export function envido(cards) {
  let best = 0;
  for (let i = 0; i < cards.length; i++) {
    best = Math.max(best, envVal(cards[i]));
    for (let j = i + 1; j < cards.length; j++) if (cards[i].s === cards[j].s) best = Math.max(best, 20 + envVal(cards[i]) + envVal(cards[j]));
  }
  return best;
}

// results: lista de 0 | 1 | 't' (parda). Devuelve el equipo ganador de la mano o null si sigue.
export function handWinner(results, manoTeam) {
  const [a, b, c] = results;
  if (results.length >= 2) {
    if (a !== 't' && a === b) return a;
    if (a !== 't' && b === 't') return a;
    if (a === 't' && b !== 't') return b;
  }
  if (results.length === 3) {
    if (c !== 't') return c;
    if (a !== 't') return a;
    return manoTeam;
  }
  return null;
}

export const TRUCO_NAMES = ['Truco', 'Retruco', 'Vale cuatro'];
export const trucoValue = level => [1, 2, 3, 4][level];
export const ENVIDO_NAMES = { envido: 'Envido', real: 'Real envido', falta: 'Falta envido' };

export function faltaPoints(S) { return Math.max(1, S.cfg.goal - Math.max(S.score[0], S.score[1])); }
export function envidoPoints(S, calls, quiero) {
  if (quiero) return calls.includes('falta') ? faltaPoints(S) : calls.reduce((a, c) => a + (c === 'real' ? 3 : 2), 0);
  if (calls.length === 1) return 1;
  return calls.slice(0, -1).reduce((a, c) => a + (c === 'real' ? 3 : c === 'falta' ? 0 : 2), 0);
}

export const teamOf = (S, seat) => S.seats[seat].team;
export const hasPlayed = (S, seat, t) => !!(S.tricks[t] && S.tricks[t].some(p => p.seat === seat));

export function canEnvido(S, seat) {
  if (S.phase !== 'play' || S.envidoDone || S.tricks.length !== 1 || S.truco.level > 0) return false;
  if (hasPlayed(S, seat, 0)) return false;
  if (!S.pending) return S.turn === seat;
  return S.pending.kind === 'truco' && S.pending.to === 1 && S.pending.responder === seat; // "el envido está primero"
}
export function envidoRaises(S, seat) {
  const p = S.pending;
  if (!p || p.kind !== 'envido' || p.responder !== seat) return [];
  const out = [];
  if (p.calls.every(c => c === 'envido') && p.calls.length < 2) out.push('envido');
  if (!p.calls.includes('real') && !p.calls.includes('falta')) out.push('real');
  if (!p.calls.includes('falta')) out.push('falta');
  return out;
}
export function canTruco(S, seat) {
  if (S.phase !== 'play') return false;
  const p = S.pending;
  if (p) return p.kind === 'truco' && p.responder === seat && p.to < 3; // "quiero retruco"
  return S.turn === seat && S.truco.level < 3 && (S.truco.canRaise === null || S.truco.canRaise === teamOf(S, seat));
}
export function nextTrucoLevel(S) { return S.pending && S.pending.kind === 'truco' ? S.pending.to + 1 : S.truco.level + 1; }
export const canPlay = (S, seat) => S.phase === 'play' && !S.pending && S.turn === seat;
export const canMazo = (S, seat) => S.phase === 'play' && (S.pending ? S.pending.responder === seat : S.turn === seat);
export const isResponder = (S, seat) => S.phase === 'play' && !!S.pending && S.pending.responder === seat;

export function nextOpponent(S, seat) {
  const n = S.seats.length;
  for (let k = 1; k < n; k++) { const s = (seat + k) % n; if (S.seats[s].team !== S.seats[seat].team) return s; }
  return (seat + 1) % n;
}
