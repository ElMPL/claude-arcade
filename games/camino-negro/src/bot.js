// Camino Negro — bots. Devuelven una acción por vez; el motor los vuelve a llamar hasta que terminen el turno.
import { SQUARES, GROUPS, BAIL } from './data.js';

export function botAction(E, seat, lazy = false) {
  const S = E.S, p = S.seats[seat], inf = E.inf;
  const reserve = inf(120 + Math.min(S.round, 30) * 6);
  if (lazy) return S.phase === 'buy' ? { t: 'pass' } : S.phase === 'roll' ? { t: 'roll' } : { t: 'end' };

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
    return { t: want && p.cash >= cost ? 'buy' : 'pass' };
  }
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
