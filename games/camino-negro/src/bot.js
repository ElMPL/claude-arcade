// Camino Negro — bots. Devuelven una acción por vez; el motor los vuelve a llamar hasta que terminen el turno.
import { SQUARES, GROUPS, BAIL } from './data.js';

export function botAction(E, seat, lazy = false) {
  const S = E.S, p = S.seats[seat], inf = E.inf;
  const reserve = inf(120 + Math.min(S.round, 30) * 6);
  if (lazy) return S.phase === 'buy' ? { t: 'auction' } : S.phase === 'roll' ? { t: 'roll' } : { t: 'end' };

  if (S.phase === 'roll' && p.jail) {
    if (p.jcards) return { t: 'jcard' };
    if (S.round < 18 && p.cash > inf(BAIL) + reserve * 2) return { t: 'bail' };
    return { t: 'roll' };
  }
  if (S.phase === 'buy') {
    const s = SQUARES[S.offer], cost = inf(s.price);
    // le tiene más ganas si completa un grupo o le cierra el paso a otro
    let want = p.cash - cost >= reserve * 0.6;
    if (s.t === 'prop') {
      const gs = SQUARES.filter(q => q.g === s.g).map(q => q.i), mine = gs.filter(q => E.ownerOf(q) === seat).length;
      if (mine === gs.length - 1 && p.cash - cost >= inf(30)) want = true;
    }
    return { t: want && p.cash >= cost ? 'buy' : 'auction' };
  }
  if (S.phase === 'roll' && !S.rolled) { const o = botOffer(E, seat); if (o) return o; }
  if (S.phase === 'roll' || S.phase === 'end') {
    const mine = Object.keys(S.own).map(Number).filter(q => S.own[q].o === seat);
    // levantar hipotecas si sobra plata
    for (const q of mine) if (S.own[q].m && E.canUnmort(seat, q) && p.cash - inf(SQUARES[q].price * 0.55) > reserve * 2.5) return { t: 'unmort', sq: q };
    // construir de lo más caro a lo más barato, parejo
    const b = mine.filter(q => E.canBuild(seat, q) && p.cash - inf(GROUPS[SQUARES[q].g].house) > reserve * 1.4)
      .sort((a, c) => S.own[a].h - S.own[c].h || SQUARES[c].price - SQUARES[a].price)[0];
    if (b !== undefined && Math.random() < 0.85) return { t: 'build', sq: b };
    return { t: S.phase === 'roll' ? 'roll' : 'end' };
  }
  return { t: 'end' };
}

// cuánto vale un casillero para un bot (con ganas extra si completa o bloquea un grupo)
export function botValue(E, seat, sq) {
  const S = E.S, s = SQUARES[sq], base = E.inf(s.price);
  let k = 1;
  if (s.t === 'prop') {
    const gs = SQUARES.filter(q => q.g === s.g).map(q => q.i);
    const mine = gs.filter(q => q !== sq && E.ownerOf(q) === seat).length;
    if (mine === gs.length - 1) k = 2.0; else if (mine) k = 1.3;
    for (let o = 0; o < S.seats.length; o++) if (o !== seat && gs.filter(q => q !== sq && E.ownerOf(q) === o).length === gs.length - 1) k = Math.max(k, 1.35);
  } else if (s.t === 'rail') k = 1 + 0.15 * SQUARES.filter(q => q.t === 'rail' && E.ownerOf(q.i) === seat).length;
  return Math.round(base * k);
}
export function botBid(E, seat, A) {
  const p = E.S.seats[seat];
  const max = Math.min(botValue(E, seat, A.sq) * (0.85 + Math.random() * 0.3), p.cash - E.inf(60));
  const next = Math.max(A.step, A.bid + A.step * (1 + Math.floor(Math.random() * 3)));
  return next <= max ? next : 0;
}
// el bot decide si acepta un trato (T.to es el bot)
export function botAcceptTrade(E, T) {
  const me = T.to, them = T.from;
  let gain = T.give.c + T.give.j * E.inf(50), loss = T.get.c + T.get.j * E.inf(50);
  for (const q of T.give.p) gain += botValue(E, me, q);
  for (const q of T.get.p) loss += Math.max(botValue(E, me, q), botValue(E, them, q) * 0.9);
  if (T.get.c > E.S.seats[me].cash - E.inf(80)) return false;
  return gain >= loss * 1.12;
}
// a veces el bot ofrece plata por la propiedad que le falta para completar un grupo
function botOffer(E, seat) {
  const S = E.S, p = S.seats[seat];
  if ((p.offers || 0) >= 1 || Math.random() > 0.35 || S.round < 3) return null;
  for (const g of Object.keys(GROUPS)) {
    const gs = SQUARES.filter(q => q.g === g).map(q => q.i);
    const missing = gs.filter(q => E.ownerOf(q) !== seat);
    if (missing.length !== 1) continue;
    const q = missing[0], o = E.ownerOf(q);
    if (o < 0 || S.seats[o].out || !E.tradable(q, o)) continue;
    const offer = Math.round(Math.min(p.cash - E.inf(150), botValue(E, o, q) * (1.25 + Math.random() * 0.4)) / E.inf(10)) * E.inf(10);
    if (offer < E.inf(SQUARES[q].price)) continue;
    return { t: 'offer', to: o, give: { c: offer, p: [] }, get: { c: 0, p: [q] } };
  }
  return null;
}
