// Configuración del jugador (se guarda en localStorage): sensibilidad, mira, volumen y gráficos.
// El panel se abre desde el menú (CONFIGURACIÓN) o en partida desde la pantalla de pausa (Esc).
const KEY = 'ls:cfg';
export const DEF = {
  sens: 2.1, invert: false, zoomSens: 1, // sensibilidad (x1000 rad/px) · zoom_sensitivity_ratio
  xStatic: false, xColor: '#5dff6a', xSize: 8, xGap: 4, xThick: 2, xDot: false, xOutline: true, xAlpha: 1,
  vol: 0.8, music: 0.6, uiSnd: true,
  quality: 2, // 0 sin sombras · 1 sombras bajas · 2 sombras altas
  bright: 1, rscale: 1, fx: 2, showFps: false,
  // arma en primera persona, igual que en CS2 (viewmodel_fov 54–68, offsets en unidades del juego)
  vmFov: 60, vmX: 1, vmY: 1, vmZ: -1, vmPreset: 1, bob: 1,
  aspect: '16:9', // 16:9 · 4:3b (con barras) · 4:3s (estirado)
  hudScale: 1, radarZoom: 1, radarRot: true,
};
// presets de CS2 (viewmodel_presetpos): 1 Escritorio, 2 Sillón, 3 Clásico
export const VM_PRESETS = { 1: { vmFov: 60, vmX: 1, vmY: 1, vmZ: -1 }, 2: { vmFov: 54, vmX: 0, vmY: 0, vmZ: -1.5 }, 3: { vmFov: 54, vmX: 2.5, vmY: 0, vmZ: -1.5 } };
const COLORS = ['#5dff6a', '#00e5ff', '#ffe14a', '#ff4a4a', '#ff4af0', '#ffffff'];
const TABS = [['game', 'Juego'], ['xhair', 'Mira'], ['vm', 'Arma en mano'], ['gfx', 'Gráficos'], ['snd', 'Sonido'], ['keys', 'Controles']];

// hooks: { vmPreview(canvas, S) → { update(S), stop() } } para la ventanita de vista previa del arma
export function makeSettings(store, onChange, hooks = {}) {
  const S = Object.assign({}, DEF, store.get(KEY, {}));
  // compatibilidad con la sensibilidad / calidad guardadas antes
  const oldSens = store.get('ls:sens', null); if (oldSens && !store.get(KEY, null)) S.sens = +(oldSens * 1000).toFixed(2);
  const oldQ = store.get('ls:q', null); if (oldQ !== null && !store.get(KEY, null)) S.quality = oldQ;
  const save = () => { store.set(KEY, S); onChange && onChange(S); if (vmp) vmp.update(S); };
  const el = document.createElement('div'); el.id = 'settings'; el.className = 'fn-overlay'; el.hidden = true;
  document.body.appendChild(el);
  let onClose = null, tab = 'game', vmp = null;

  const row = (label, inner, sub) => `<div class="st-row"><label>${label}${sub ? `<small>${sub}</small>` : ''}</label><div class="st-c">${inner}</div></div>`;
  const slider = (k, min, max, step, fmt = v => v) => `<input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${S[k]}"><output data-o="${k}">${fmt(S[k])}</output>`;
  const toggle = (k, a, b) => `<div class="seg" data-t="${k}"><button data-v="1" class="${S[k] ? 'on' : ''}">${a}</button><button data-v="0" class="${S[k] ? '' : 'on'}">${b}</button></div>`;
  const choice = (k, opts) => `<div class="seg" data-ch="${k}">${opts.map(([v, t]) => `<button data-v="${v}" class="${String(S[k]) === String(v) ? 'on' : ''}">${t}</button>`).join('')}</div>`;
  const pct = v => Math.round(v * 100) + '%';
  const FMT = { vmFov: v => v, vmX: v => (+v).toFixed(1), vmY: v => (+v).toFixed(1), vmZ: v => (+v).toFixed(1), sens: v => (+v).toFixed(2), zoomSens: v => (+v).toFixed(2), vol: pct, music: pct, bright: pct, rscale: pct, hudScale: pct, radarZoom: v => (+v).toFixed(2) + '×', bob: pct, xAlpha: pct, xSize: v => v, xGap: v => v, xThick: v => v };
  const xh = '<div id="stX" class="xh"><i class="l"></i><i class="r"></i><i class="u"></i><i class="d"></i><b></b></div>';

  function body() {
    if (tab === 'game') return `<h3>Mouse</h3>
      ${row('Sensibilidad', slider('sens', 0.4, 8, 0.05, FMT.sens), 'También con [ y ] durante la partida')}
      ${row('Sensibilidad con mira', slider('zoomSens', 0.4, 2, 0.05, FMT.zoomSens), 'zoom_sensitivity_ratio (1 = como CS)')}
      ${row('Invertir eje Y', toggle('invert', 'Sí', 'No'))}
      <h3>HUD</h3>
      ${row('Tamaño del HUD', slider('hudScale', 0.7, 1.3, 0.05, FMT.hudScale))}
      ${row('Zoom del radar', slider('radarZoom', 0.6, 1.8, 0.05, FMT.radarZoom))}
      ${row('Radar', toggle('radarRot', 'Gira con vos', 'Fijo'))}
      ${row('Mostrar FPS', toggle('showFps', 'Sí', 'No'))}`;
    if (tab === 'xhair') return `<div class="st-prev">${xh}</div>
      ${row('Estilo', toggle('xStatic', 'Estática', 'Dinámica'), 'La dinámica se abre al moverte y disparar')}
      ${row('Color', `<div class="st-cols6">${COLORS.map(c => `<button class="sw ${S.xColor === c ? 'on' : ''}" data-c="${c}" style="background:${c}"></button>`).join('')}</div>`)}
      ${row('Largo', slider('xSize', 0, 16, 1, FMT.xSize))}
      ${row('Separación', slider('xGap', 0, 12, 1, FMT.xGap))}
      ${row('Grosor', slider('xThick', 1, 5, 1, FMT.xThick))}
      ${row('Opacidad', slider('xAlpha', 0.3, 1, 0.05, FMT.xAlpha))}
      ${row('Punto central', toggle('xDot', 'Sí', 'No'))}
      ${row('Contorno', toggle('xOutline', 'Sí', 'No'))}`;
    if (tab === 'vm') return `<div class="st-vm"><canvas id="stVm"></canvas>${xh}<span>VISTA PREVIA</span></div>
      ${row('Posición', `<div class="seg" data-vp>${[[1, 'Escritorio'], [2, 'Sillón'], [3, 'Clásico']].map(([v, t]) => `<button data-v="${v}" class="${S.vmPreset === v ? 'on' : ''}">${t}</button>`).join('')}</div>`, 'viewmodel_presetpos')}
      ${row('Campo de visión', slider('vmFov', 54, 68, 1, FMT.vmFov), 'viewmodel_fov')}
      ${row('Horizontal (X)', slider('vmX', -2.5, 2.5, 0.5, FMT.vmX), 'viewmodel_offset_x')}
      ${row('Profundidad (Y)', slider('vmY', -2, 2, 0.5, FMT.vmY), 'viewmodel_offset_y')}
      ${row('Vertical (Z)', slider('vmZ', -2, 2, 0.5, FMT.vmZ), 'viewmodel_offset_z')}
      ${row('Balanceo al caminar', slider('bob', 0, 1.5, 0.1, FMT.bob), 'cl_bob')}`;
    if (tab === 'gfx') return `<h3>Pantalla</h3>
      ${row('Relación de aspecto', choice('aspect', [['16:9', '16:9'], ['4:3b', '4:3 con barras'], ['4:3s', '4:3 estirado']]))}
      ${row('Resolución de render', slider('rscale', 0.5, 1, 0.05, FMT.rscale), 'Menos = más FPS')}
      ${row('Brillo', slider('bright', 0.6, 1.5, 0.05, FMT.bright))}
      <h3>Calidad</h3>
      ${row('Sombras', choice('quality', [[0, 'No'], [1, 'Bajas'], [2, 'Altas']]), 'Se aplican al cargar la próxima partida')}
      ${row('Efectos y partículas', choice('fx', [[0, 'Bajos'], [1, 'Medios'], [2, 'Altos']]))}`;
    if (tab === 'snd') return `<h3>Volumen</h3>
      ${row('General', slider('vol', 0, 1, 0.05, FMT.vol))}
      ${row('Música', slider('music', 0, 1, 0.05, FMT.music), 'Inicio de ronda y MVP')}
      ${row('Sonidos del menú', toggle('uiSnd', 'Sí', 'No'))}`;
    return `<h3>Teclas</h3><div class="st-keys">${[['WASD', 'Moverse'], ['Shift', 'Caminar'], ['Ctrl', 'Agacharse'], ['Espacio', 'Saltar'], ['Clic', 'Disparar'], ['Clic der.', 'Mira / modo alternativo'], ['R', 'Recargar'], ['1-5 · Q · rueda', 'Cambiar de arma'], ['B', 'Comprar (A auto-compra, R recompra)'], ['E', 'Desactivar / agarrar'], ['G', 'Tirar arma'], ['F', 'Inspeccionar'], ['Tab', 'Tabla'], ['Z X C', 'Radio'], ['V', 'Marcar'], ['M', 'Cambiar de equipo'], ['[ ]', 'Sensibilidad']].map(([k, t]) => row(t, `<kbd>${k}</kbd>`)).join('')}</div>`;
  }
  function render() {
    if (vmp) { vmp.stop(); vmp = null; }
    el.innerHTML = `<div class="ms-box st-box">
      <div class="st-side"><h2>CONFIGURACIÓN</h2>${TABS.map(([k, t]) => `<button data-tab="${k}" class="${tab === k ? 'on' : ''}">${t}</button>`).join('')}</div>
      <div class="st-main">${body()}</div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;
    for (const b of el.querySelectorAll('.st-side [data-tab]')) b.onclick = () => { tab = b.dataset.tab; render(); };
    for (const r of el.querySelectorAll('input[type=range]')) r.oninput = () => { const k = r.dataset.k; S[k] = +r.value; if (k.startsWith('vm')) { S.vmPreset = 0; for (const b of el.querySelectorAll('[data-vp] button')) b.classList.remove('on'); } el.querySelector(`[data-o="${k}"]`).textContent = (FMT[k] || (v => v))(S[k]); save(); preview(); };
    for (const sg of el.querySelectorAll('[data-t]')) for (const b of sg.children) b.onclick = () => { S[sg.dataset.t] = b.dataset.v === '1'; save(); render(); };
    for (const sg of el.querySelectorAll('[data-ch]')) for (const b of sg.children) b.onclick = () => { const k = sg.dataset.ch; S[k] = typeof DEF[k] === 'number' ? +b.dataset.v : b.dataset.v; save(); render(); };
    for (const b of el.querySelectorAll('[data-vp] button')) b.onclick = () => { S.vmPreset = +b.dataset.v; Object.assign(S, VM_PRESETS[S.vmPreset]); save(); render(); };
    for (const b of el.querySelectorAll('[data-c]')) b.onclick = () => { S.xColor = b.dataset.c; save(); render(); };
    el.querySelector('#stReset').onclick = () => { Object.assign(S, DEF); save(); render(); };
    el.querySelector('#stClose').onclick = () => close();
    const cv = el.querySelector('#stVm'); if (cv && hooks.vmPreview) { try { vmp = hooks.vmPreview(cv, S); } catch (e) { console.warn('vista previa', e); } }
    preview();
  }
  function preview() { styleCrosshair(el.querySelector('#stX'), S, S.xGap); }
  function close() { if (vmp) { vmp.stop(); vmp = null; } el.hidden = true; const f = onClose; onClose = null; f && f(); }
  return {
    S, hooks,
    open(cb) { onClose = cb || null; el.hidden = false; render(); },
    close, isOpen: () => !el.hidden,
  };
}

// dibuja la mira con los valores de configuración; gap = separación actual (dinámica o fija)
export function styleCrosshair(e, S, gap) {
  if (!e) return;
  const g = Math.round(gap), len = S.xSize, th = S.xThick, key = [g, len, th, S.xColor, S.xDot, S.xOutline, S.xAlpha].join();
  e.style.opacity = S.xAlpha ?? 1;
  if (e._k === key) return; e._k = key;
  const [l, r, u, d, dot] = e.children, sh = S.xOutline ? '0 0 0 1px rgba(0,0,0,.7)' : 'none';
  const h0 = -Math.floor(th / 2);
  for (const x of [l, r, u, d]) { x.style.background = S.xColor; x.style.boxShadow = sh; x.style.display = len > 0 ? '' : 'none'; }
  l.style.cssText += `;width:${len}px;height:${th}px;top:${h0}px;left:${-(g + len)}px`;
  r.style.cssText += `;width:${len}px;height:${th}px;top:${h0}px;left:${g}px`;
  u.style.cssText += `;width:${th}px;height:${len}px;left:${h0}px;top:${-(g + len)}px`;
  d.style.cssText += `;width:${th}px;height:${len}px;left:${h0}px;top:${g}px`;
  dot.style.cssText = `display:${S.xDot ? 'block' : 'none'};position:absolute;width:${th}px;height:${th}px;left:${h0}px;top:${h0}px;background:${S.xColor};box-shadow:${sh}`;
}
