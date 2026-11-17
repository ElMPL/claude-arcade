// HUD estilo CS2: radar, plata, reloj y marcador, vida/blindaje, munición, killfeed, tabla y menú de compra.
import { WEAPONS, BUY } from './weapons.js';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const set = (el, v) => { if (el._v !== v) { el._v = v; el.textContent = v; } };
export const WNAME = id => (WEAPONS[id] ? WEAPONS[id].name : id === 'c4' ? 'C4' : id === 'world' ? 'caída' : id);

// ---------- radar ----------
export function radarImage(W) {
  const n = W.n, cv = document.createElement('canvas'); cv.width = n; cv.height = n;
  const x = cv.getContext('2d'), img = x.createImageData(n, n), d = img.data;
  for (let i = 0; i < n * n; i++) {
    let top = -1e9, cl = 0;
    for (let l = W.L - 1; l >= 0; l--) { const t = W.top[l][i]; if (!isNaN(t) && W.cls[l][i] !== 3 && W.cls[l][i] !== 4) { if (l === W.L - 1 || top < -1e8) { top = t; cl = W.cls[l][i]; } break; } }
    let r = 0, g = 0, b = 0, a = 0;
    if (top > -1e8) { const k = Math.max(0, Math.min(1, top / 6.5)); r = 70 + k * 120; g = 78 + k * 110; b = 88 + k * 70; a = 235; if (cl === 2) { r *= 0.62; g *= 0.62; b *= 0.62; } }
    else { let wall = false; for (let l = 0; l < W.L; l++) if (W.cls[l][i] === 3) wall = true; if (wall) { r = g = b = 22; a = 230; } }
    const f = W.flags[i]; if ((f & 12) && a) { r = r * 0.6 + 120; g = g * 0.6 + 40; b *= 0.6; }
    d[i * 4] = r; d[i * 4 + 1] = g; d[i * 4 + 2] = b; d[i * 4 + 3] = a;
  }
  x.putImageData(img, 0, 0);
  // letras de los sitios
  const z = W.info.zones; x.font = 'bold 34px Rajdhani, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  for (const k of ['A', 'B']) { const b = z[k]; if (!b) continue; x.fillStyle = '#000'; x.fillText(k, (b[0] + b[2]) / 2 + 1, (b[1] + b[3]) / 2 + 1); x.fillStyle = '#ffd25a'; x.fillText(k, (b[0] + b[2]) / 2, (b[1] + b[3]) / 2); }
  return cv;
}
export function drawRadar(cv, img, W, view, list, bomb, meTeam) {
  const x = cv.getContext('2d'), S = cv.width, sc = 1.25; // celdas por píxel del radar
  x.clearRect(0, 0, S, S);
  x.save(); x.beginPath(); x.rect(0, 0, S, S); x.clip();
  x.translate(S / 2, S / 2); x.rotate(view.yaw); x.scale(sc, sc);
  const cx = view.x / W.cell, cz = view.z / W.cell;
  x.drawImage(img, -cx, -cz);
  const dot = (px, pz, col, r = 3.4) => { x.fillStyle = col; x.beginPath(); x.arc(px / W.cell - cx, pz / W.cell - cz, r / sc, 0, 7); x.fill(); x.strokeStyle = '#000'; x.lineWidth = 1 / sc; x.stroke(); };
  if (bomb && (bomb.s === 'planted' || bomb.s === 'dropped') && (meTeam === 'T' || bomb.s === 'planted' && bomb.seen)) { x.fillStyle = bomb.s === 'planted' ? '#ff4038' : '#ffb03a'; const bx = bomb.x / W.cell - cx, bz = bomb.z / W.cell - cz; x.fillRect(bx - 4 / sc, bz - 3 / sc, 8 / sc, 6 / sc); }
  for (const p of list) dot(p.x, p.z, p.col, p.me ? 0 : 3.4);
  x.restore();
  // yo: flecha en el centro
  x.fillStyle = '#fff'; x.beginPath(); x.moveTo(S / 2, S / 2 - 7); x.lineTo(S / 2 + 5, S / 2 + 5); x.lineTo(S / 2, S / 2 + 2); x.lineTo(S / 2 - 5, S / 2 + 5); x.closePath(); x.fill();
}

// ---------- HUD ----------
export const hud = {
  el: {},
  init() { for (const id of ['hud', 'moneyV', 'moneyAdd', 'scT', 'scCT', 'pipsT', 'pipsCT', 'clock', 'clockV', 'bombIco', 'feed', 'hpV', 'arV', 'helmV', 'ammo', 'wname', 'magV', 'resV', 'slots', 'xhair', 'hitmark', 'centerMsg', 'prog', 'progL', 'progB', 'hint', 'dmgDir', 'scope', 'flash', 'hurt', 'spec', 'banner', 'ban1', 'ban2', 'buyHint', 'zoneName', 'board']) this.el[id] = $(id); },
  money(v) { set(this.el.moneyV, String(v)); },
  moneyDelta(v, why) { if (!v) return; const d = document.createElement('div'); d.className = v < 0 ? 'neg' : ''; d.textContent = (v > 0 ? '+$' : '-$') + Math.abs(v) + (why ? '  ' + why : ''); this.el.moneyAdd.appendChild(d); setTimeout(() => d.remove(), 2300); },
  vitals(hp, ar, helm) { set(this.el.hpV, String(hp)); set(this.el.arV, String(ar)); this.el.helmV.hidden = !helm; this.el.hpV.parentElement.classList.toggle('low', hp <= 25); },
  ammo(name, mag, res, show) { set(this.el.wname, name); this.el.ammo.querySelector('.nums').style.visibility = show ? '' : 'hidden'; set(this.el.magV, String(mag)); set(this.el.resV, String(res)); this.el.ammo.classList.toggle('low', show && mag <= 5); },
  clock(t, red, bomb) {
    const s = Math.max(0, Math.ceil(t)); set(this.el.clockV, bomb ? '' : Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'));
    this.el.clock.classList.toggle('red', red); this.el.bombIco.hidden = !bomb;
  },
  score(t, ct, aliveT, totT, aliveCT, totCT) {
    set(this.el.scT, String(t)); set(this.el.scCT, String(ct));
    const pips = (el, a, n) => { const k = a + '/' + n; if (el._k === k) return; el._k = k; el.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i < a ? '' : 'dead'}"></i>`).join(''); };
    pips(this.el.pipsT, aliveT, totT); pips(this.el.pipsCT, aliveCT, totCT);
  },
  feed(k, v, w, hs, wb, mine) {
    const d = document.createElement('div'); if (mine) d.className = 'mine';
    d.innerHTML = (k ? `<span class="${k.team}">${esc(k.name)}</span>` : '') + `<span class="w">${esc(WNAME(w))}${wb ? ' ⟂' : ''}${hs ? ' ✛' : ''}</span><span class="${v.team}">${esc(v.name)}</span>`;
    this.el.feed.appendChild(d); while (this.el.feed.children.length > 6) this.el.feed.firstChild.remove();
    setTimeout(() => d.remove(), 7000);
  },
  slots(list, cur) {
    const k = list.map(s => s.key + s.id).join() + cur;
    if (this.el.slots._k !== k) { this.el.slots._k = k; this.el.slots.innerHTML = list.map(s => `<div class="${s.slot === cur ? 'on' : ''}"><b>${s.key}</b>${esc(s.name)}</div>`).join(''); }
  },
  showSlots() { this.el.slots.style.opacity = 1; clearTimeout(this._st); this._st = setTimeout(() => this.el.slots.style.opacity = 0.35, 1800); },
  crosshair(gap, show, dot) {
    const g = Math.round(gap), e = this.el.xhair; if (e._g === g + '' + show) return; e._g = g + '' + show;
    e.style.display = show ? '' : 'none';
    const [l, r, u, d] = e.children; l.style.left = -(g + 8) + 'px'; r.style.left = g + 'px'; u.style.top = -(g + 8) + 'px'; d.style.top = g + 'px';
  },
  hit(hs) { const h = this.el.hitmark; h.classList.remove('on'); void h.offsetWidth; h.classList.add('on'); h.style.filter = hs ? 'drop-shadow(0 0 2px red) sepia(1) saturate(8) hue-rotate(-30deg)' : ''; },
  center(txt, ms = 2200) { const c = this.el.centerMsg; c.textContent = txt; c.style.opacity = 1; clearTimeout(this._ct); if (ms) this._ct = setTimeout(() => c.style.opacity = 0, ms); },
  progress(label, k) { if (k == null) { this.el.prog.hidden = true; return; } this.el.prog.hidden = false; set(this.el.progL, label); this.el.progB.style.width = (k * 100).toFixed(1) + '%'; },
  hint(t) { set(this.el.hint, t || ''); },
  dmgDir(angle) { const i = document.createElement('i'); i.style.transform = `rotate(${angle}rad) translateY(-140px)`; this.el.dmgDir.appendChild(i); setTimeout(() => i.remove(), 1500); },
  banner(team, a, b) { const e = this.el.banner; if (!a) { e.hidden = true; return; } e.className = team || ''; e.hidden = false; set(this.el.ban1, a); set(this.el.ban2, b || ''); },
};

// ---------- tabla ----------
export function renderBoard(G, meId) {
  const ps = [...G.players.values()];
  const row = p => `<tr class="${p.team} ${p.alive ? '' : 'dead'} ${p.id === meId ? 'me' : ''}"><td>${esc(p.name)}${p.inv && p.inv.c4 && (G.players.get(meId)?.team === 'T') ? ' 💣' : ''}</td><td>$${p.money}</td><td>${p.k}</td><td>${p.d}</td><td>${p.a}</td><td>${p.mvp ? '★' + p.mvp : ''}</td><td>${p.ping || ''}</td></tr>`;
  const tbl = (team) => {
    const l = ps.filter(p => p.team === team).sort((a, b) => b.k - a.k || a.d - b.d);
    return `<div class="tt ${team}">${team === 'T' ? 'TERRORISTAS' : 'CONTRATERRORISTAS'}</div><table><tr><th>Jugador</th><th>Plata</th><th>K</th><th>D</th><th>A</th><th>MVP</th><th></th></tr>${l.map(row).join('')}</table>`;
  };
  const sT = G.score[G.half === 0 ? 0 : 1], sCT = G.score[G.half === 0 ? 1 : 0];
  return `<div class="bh"><span>${esc(G.mapName)} · Ronda ${G.round}</span><span><b style="color:var(--t)">${sT}</b> – <b style="color:var(--ct)">${sCT}</b></span></div>${tbl('T')}${tbl('CT')}`;
}

// ---------- menú de compra (como CS2: 5 columnas, teclas 1-5 y después 1-n) ----------
export function buildBuy(team, icon, onBuy, onHover) {
  const cols = $('buyCols'); cols.innerHTML = '';
  BUY.forEach((cat, ci) => {
    const col = document.createElement('div'); col.className = 'bcol'; col.dataset.c = ci;
    col.innerHTML = `<h5><b>${ci + 1}</b>${cat.name}</h5>`;
    cat.items[team].forEach((id, ii) => {
      const w = WEAPONS[id], it = document.createElement('div'); it.className = 'bit'; it.dataset.id = id;
      it.innerHTML = `<span class="k">${ii + 1}</span><span class="n">${esc(w.name)}</span><span class="p">$${w.price}</span>`;
      const ic = icon(id); if (ic) it.appendChild(ic);
      it.onclick = () => onBuy(id); it.onmouseenter = () => onHover(id);
      col.appendChild(it);
    });
    cols.appendChild(col);
  });
}
export function refreshBuy(P, sel) {
  $('buyMoney').textContent = P.money;
  for (const it of document.querySelectorAll('#buyCols .bit')) {
    const id = it.dataset.id, w = WEAPONS[id];
    let price = w.price;
    if (id === 'vesthelm' && P.ar >= 100 && !P.helm) price = 350;
    it.querySelector('.p').textContent = '$' + price;
    const own = P.inv.p === id || P.inv.s === id || (id === 'vest' && P.ar >= 100) || (id === 'vesthelm' && P.ar >= 100 && P.helm) || (id === 'defuser' && P.inv.kit) || (id === 'zeus' && P.inv.zeus) || P.inv.g.includes(id);
    it.classList.toggle('own', own); it.classList.toggle('no', P.money < price);
  }
  for (const c of document.querySelectorAll('#buyCols .bcol')) c.classList.toggle('sel', +c.dataset.c === sel);
}
export function weaponInfo(id) {
  const w = WEAPONS[id]; if (!w) return '';
  if (!w.dmg) return `${w.name} — $${w.price}` + (w.cat === 'grenade' ? ` · premio por baja $${w.reward}` : '');
  return `${w.name} — $${w.price} · daño ${w.dmg} · cargador ${w.mag || '-'} · ${w.rpm} disparos/min · penetración de blindaje ${Math.round(w.ap * 100)}% · premio por baja $${w.reward}`;
}
