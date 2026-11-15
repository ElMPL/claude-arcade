// Inteligencia de los bots
import { rank, envido, canEnvido, envidoRaises, canTruco, canPlay, teamOf } from './rules.js';

function strength(S, seat, hand) {
  const team = teamOf(S, seat);
  const res = S.results;
  const won = res.filter(r => r === team).length, lost = res.filter(r => r !== 't' && r !== team).length;
  const rs = hand.map(rank).sort((a, b) => b - a);
  const top = (rs[0] || 0) / 14, second = (rs[1] || 0) / 14;
  let s;
  if (!res.length) s = top * 0.55 + second * 0.45;
  else if (won > lost || res[0] === 't') s = 0.3 + top * 0.7;
  else if (lost > won) s = top * 0.6 + second * 0.2 - 0.12;
  else s = top * 0.7;
  // carta de la baza actual
  const tr = S.tricks[S.tricks.length - 1] || [];
  if (tr.length) {
    const best = Math.max(...tr.map(p => rank(p.card)));
    const holder = tr.find(p => rank(p.card) === best);
    if (teamOf(S, holder.seat) === team) s += 0.1;
  }
  return Math.max(0, Math.min(1, s));
}

function chooseCard(S, seat, hand) {
  const team = teamOf(S, seat);
  const idx = hand.map((c, i) => ({ i, r: rank(c) })).sort((a, b) => a.r - b.r);
  const low = idx[0].i, high = idx[idx.length - 1].i;
  const tr = S.tricks[S.tricks.length - 1] || [];
  if (!tr.length) {
    if (!S.results.length) return idx[Math.min(1, idx.length - 1)].i;
    return high;
  }
  const best = Math.max(...tr.map(p => rank(p.card)));
  const holder = tr.find(p => rank(p.card) === best);
  if (teamOf(S, holder.seat) === team) return low;
  const beat = idx.find(x => x.r > best);
  if (beat) return beat.i;
  const tie = idx.find(x => x.r === best);
  if (tie && S.results.length && S.results[0] === team) return tie.i; // empardar alcanza
  return low;
}

export function decide(S, seat, hand, orig) {
  const R = Math.random();
  const p = S.pending;
  const tantos = envido(orig || hand);
  if (p && p.responder === seat) {
    if (p.kind === 'envido') {
      const raises = envidoRaises(S, seat);
      if (tantos >= 33 && raises.includes('falta') && R < 0.5) return { t: 'falta' };
      if (tantos >= 30 && raises.includes('real') && R < 0.55) return { t: 'real' };
      if (tantos >= 29 && raises.includes('envido') && R < 0.4) return { t: 'envido' };
      const thr = p.calls.includes('falta') ? 31 : p.calls.length > 1 ? 28 : 26;
      return { t: tantos >= thr || R < 0.06 ? 'quiero' : 'noquiero' };
    }
    if (canEnvido(S, seat) && tantos >= 27 && R < 0.75) return { t: tantos >= 31 ? 'real' : 'envido' };
    const s = strength(S, seat, hand);
    if (s > 0.8 && p.to < 3 && Math.random() < 0.55) return { t: 'truco' };
    return { t: s > 0.5 || Math.random() < 0.12 ? 'quiero' : 'noquiero' };
  }
  if (canEnvido(S, seat)) {
    if (tantos >= 31 && R < 0.55) return { t: 'real' };
    if (tantos >= 27 && R < 0.7) return { t: 'envido' };
    if (tantos >= 23 && R < 0.12) return { t: 'envido' };
  }
  if (canTruco(S, seat)) {
    const s = strength(S, seat, hand);
    if ((s > 0.72 && Math.random() < 0.5) || Math.random() < 0.05) return { t: 'truco' };
  }
  if (canPlay(S, seat) && hand.length) return { t: 'play', i: chooseCard(S, seat, hand) };
  return { t: 'mazo' };
}
