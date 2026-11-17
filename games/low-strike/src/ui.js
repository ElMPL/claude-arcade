// HUD estilo CS2: radar, plata, reloj y marcador, vida/blindaje, munición, killfeed, tabla y menú de compra.
import { styleCrosshair } from './settings.js';
import { WEAPONS, BUY, DESC } from './weapons.js';
import { iconURL } from './icons.js';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const set = (el, v) => { if (el._v !== v) { el._v = v; el.textContent = v; } };
export const WNAME = id => (WEAPONS[id] ? WEAPONS[id].name : id === 'c4' ? 'C4' : id === 'world' ? 'caída' : id);

// ---------- radar ----------
export function radarImage(W) {
  const n = W.n, cv = document.createElement('canvas'); cv.width = n; cv.height = n;
  const x = cv.getContext('2d'), img = x.createImageData(n, n), d = img.data;
  let hmin = 1e9, hmax = -1e9;
  for (let i = 0; i < n * n; i++) if (W.cls[0][i] === 1 || W.cls[0][i] === 2) { const t = W.top[0][i]; if (t < hmin) hmin = t; if (t > hmax) hmax = t; }
  const span = Math.max(3, Math.min(hmax - hmin, 14));
  for (let i = 0; i < n * n; i++) {
    let r = 0, g = 0, b = 0, a = 0;
    const c0 = W.cls[0][i], t0 = W.top[0][i];
    if ((c0 === 1 || c0 === 2) && !isNaN(t0) && t0 - hmin < span + 1) {
      const k = Math.max(0, Math.min(1, (t0 - hmin) / span)); r = 70 + k * 130; g = 78 + k * 118; b = 88 + k * 80; a = 235;
      if (W.L > 1 && !isNaN(W.top[1][i])) { r *= 0.72; g *= 0.72; b *= 0.8; }
    } else if (c0 === 3) {
      let near = false; for (const d of [1, -1, n, -n]) { const j = i + d; if (j >= 0 && j < n * n && (W.cls[0][j] === 1)) near = true; }
      if (near) { r = g = b = 22; a = 230; }
    }
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
  init() { for (const id of ['hud', 'moneyV', 'moneyAdd', 'scT', 'scCT', 'pipsT', 'pipsCT', 'clock', 'clockV', 'bombIco', 'feed', 'hpV', 'arV', 'helmV', 'hpB', 'arB', 'ammo', 'wname', 'magV', 'resV', 'slots', 'xhair', 'hitmark', 'centerMsg', 'prog', 'progL', 'progB', 'hint', 'dmgDir', 'scope', 'flash', 'hurt', 'spec', 'banner', 'ban1', 'ban2', 'buyHint', 'zoneName', 'board']) this.el[id] = $(id); },
  money(v) { set(this.el.moneyV, String(v)); },
  moneyDelta(v, why) { if (!v) return; const d = document.createElement('div'); d.className = v < 0 ? 'neg' : ''; d.textContent = (v > 0 ? '+$' : '-$') + Math.abs(v) + (why ? '  ' + why : ''); this.el.moneyAdd.appendChild(d); setTimeout(() => d.remove(), 2300); },
  vitals(hp, ar, helm) { set(this.el.hpV, String(hp)); set(this.el.arV, String(ar)); this.el.helmV.hidden = !helm; this.el.hpV.parentElement.classList.toggle('low', hp <= 25); this.el.hpB.style.width = hp + '%'; this.el.arB.style.width = ar + '%'; },
  ammo(name, mag, res, show) { set(this.el.wname, name); this.el.ammo.querySelector('.nums').style.visibility = show ? '' : 'hidden'; set(this.el.magV, String(mag)); set(this.el.resV, String(res)); this.el.ammo.classList.toggle('low', show && mag <= 5); },
  clock(t, red, bomb) {
    const s = Math.max(0, Math.ceil(t)); set(this.el.clockV, bomb ? '' : Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'));
    this.el.clock.classList.toggle('red', red); this.el.bombIco.hidden = !bomb;
  },
  score(t, ct, listT, listCT) {
    set(this.el.scT, String(t)); set(this.el.scCT, String(ct));
    const pips = (el, list) => { const k = list.map(p => p.n + p.a).join(); if (el._k === k) return; el._k = k; el.innerHTML = list.map(p => `<i class="${p.a ? '' : 'dead'}" title="${esc(p.n)}">${esc(p.n.slice(0, 1).toUpperCase())}</i>`).join(''); };
    pips(this.el.pipsT, listT); pips(this.el.pipsCT, listCT);
  },
  feed(k, v, w, hs, wb, mine) {
    const d = document.createElement('div'); if (mine) d.className = 'mine';
    const ic = w === 'world' ? iconURL('skull', 60, 40) : w === 'molotov' || w === 'incendiary' ? iconURL('fire', 60, 40) : iconURL(w, 120, 40);
    d.innerHTML = (k ? `<span class="${k.team}">${esc(k.name)}</span>` : '') + `<img src="${ic}">` + (wb ? '<span class="w">⟂</span>' : '') + (hs ? `<img class="hs" src="${iconURL('hs', 40, 40)}">` : '') + `<span class="${v.team}">${esc(v.name)}</span>`;
    this.el.feed.appendChild(d); while (this.el.feed.children.length > 6) this.el.feed.firstChild.remove();
    setTimeout(() => d.remove(), 7000);
  },
  // inventario estilo CS2: siluetas blancas apiladas, la elegida brillante
  slots(list, cur, nades = [], gsel = 0) {
    const k = list.map(s => s.key + s.id).join() + cur + '|' + nades.join() + gsel;
    if (this.el.slots._k === k) return; this.el.slots._k = k;
    let h = list.map(s => `<div class="sl ${s.slot === cur ? 'on' : ''}"><img src="${iconURL(s.id, s.id === 'knife' ? 110 : 150, 44)}"><b>${s.key}</b></div>`).join('');
    if (nades.length) h += `<div class="sl ${cur === 'g' ? 'on' : ''}"><div class="nades">${nades.map((g, i) => `<img class="${cur === 'g' && i === gsel ? 'on' : ''}" src="${iconURL(g, 44, 52)}">`).join('')}</div><b>4</b></div>`;
    this.el.slots.innerHTML = h;
  },
  showSlots() { this.el.slots.style.opacity = 1; clearTimeout(this._st); this._st = setTimeout(() => this.el.slots.style.opacity = 0.35, 1800); },
  crosshair(gap, show, S) {
    const e = this.el.xhair; if (e._show !== show) { e._show = show; e.style.display = show ? '' : 'none'; }
    if (show) styleCrosshair(e, S, gap);
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

// ---------- menú de compra (como CS2: 5 columnas, teclas 1-5 y después 1-5) ----------
export function buildBuy(team, icon, onBuy, onHover) {
  const cols = $('buyCols'); cols.innerHTML = '';
  BUY.forEach((cat, ci) => {
    const col = document.createElement('div'); col.className = 'bcol'; col.dataset.c = ci;
    col.innerHTML = `<h5><b>${ci + 1}</b>${cat.name}</h5>`;
    cat.items[team].forEach((id, ii) => {
      const w = WEAPONS[id], it = document.createElement('div'); it.className = 'bit'; it.dataset.id = id;
      it.innerHTML = `<span class="k">${ii + 1}</span><span class="n">${esc(w.name)}</span><img src="${iconURL(id, 200, 64)}"><span class="p">$${w.price}</span>`;
      it.onclick = () => onBuy(id); it.onmouseenter = () => onHover(id); it.onmouseleave = () => onHover(null);
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
    it.classList.toggle('own', own); it.classList.toggle('no', P.money < price); it.classList.toggle('ok', P.money >= price && !own);
  }
  for (const c of document.querySelectorAll('#buyCols .bcol')) c.classList.toggle('sel', +c.dataset.c === sel);
}
export function showWeaponInfo(id) {
  const box = $('buyInfo'); if (!id) { box.hidden = true; return; }
  const w = WEAPONS[id]; if (!w) return;
  box.hidden = false; $('biName').textContent = w.name;
  $('biList').innerHTML = (DESC[id] || []).map(t => `<li>${esc(t)}</li>`).join('') + (w.reward ? `<li>Premio por baja: $${w.reward}</li>` : '');
  if (w.dmg && w.cat !== 'knife') {
    const bar = (v, max) => `<i style="width:${Math.min(100, v / max * 100).toFixed(0)}%"></i>`;
    $('biStats').innerHTML = `<span>Daño</span>${bar(w.dmg * w.pellets, 120)}<span>Cadencia</span>${bar(w.rpm, 900)}<span>Blindaje</span>${bar(w.ap * 100, 100)}<span>Movilidad</span>${bar(w.speed, 250)}<span>Cargador</span><span>${w.mag} / ${w.reserve}</span>`;
  } else $('biStats').innerHTML = '';
}
export function weaponInfo(id) { return WEAPONS[id] ? WEAPONS[id].name : ''; }
