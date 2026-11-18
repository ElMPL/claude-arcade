// Configuración del jugador (se guarda en localStorage): sensibilidad, mira, volumen y gráficos.
// El panel se abre desde el menú (CONFIGURACIÓN) o en partida desde la pantalla de pausa (Esc).
const KEY = 'ls:cfg';
export const DEF = {
  sens: 2.1, invert: false, // sensibilidad (x1000 rad/px)
  xStatic: false, xColor: '#5dff6a', xSize: 8, xGap: 4, xThick: 2, xDot: false, xOutline: true,
  vol: 0.8, quality: 2, // 0 sin sombras · 1 sombras bajas · 2 sombras altas
  // arma en primera persona, igual que en CS2 (viewmodel_fov 54–68, offsets en unidades del juego)
  vmFov: 60, vmX: 1, vmY: 1, vmZ: -1, vmPreset: 1,
  aspect: '16:9', // 16:9 · 4:3b (con barras) · 4:3s (estirado)
};
// presets de CS2 (viewmodel_presetpos): 1 Escritorio, 2 Sillón, 3 Clásico
export const VM_PRESETS = { 1: { vmFov: 60, vmX: 1, vmY: 1, vmZ: -1 }, 2: { vmFov: 54, vmX: 0, vmY: 0, vmZ: -1.5 }, 3: { vmFov: 54, vmX: 2.5, vmY: 0, vmZ: -1.5 } };
const COLORS = ['#5dff6a', '#00e5ff', '#ffe14a', '#ff4a4a', '#ff4af0', '#ffffff'];

export function makeSettings(store, onChange) {
  const S = Object.assign({}, DEF, store.get(KEY, {}));
  // compatibilidad con la sensibilidad / calidad guardadas antes
  const oldSens = store.get('ls:sens', null); if (oldSens && !store.get(KEY, null)) S.sens = +(oldSens * 1000).toFixed(2);
  const oldQ = store.get('ls:q', null); if (oldQ !== null && !store.get(KEY, null)) S.quality = oldQ;
  const save = () => { store.set(KEY, S); onChange && onChange(S); };
  const el = document.createElement('div'); el.id = 'settings'; el.className = 'fn-overlay'; el.hidden = true;
  document.body.appendChild(el);
  let onClose = null;

  const row = (label, inner) => `<div class="st-row"><label>${label}</label><div class="st-c">${inner}</div></div>`;
  const slider = (k, min, max, step, fmt = v => v) => `<input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${S[k]}"><output data-o="${k}">${fmt(S[k])}</output>`;
  const toggle = (k, a, b) => `<div class="seg" data-t="${k}"><button data-v="1" class="${S[k] ? 'on' : ''}">${a}</button><button data-v="0" class="${S[k] ? '' : 'on'}">${b}</button></div>`;
  const FMT = { vmFov: v => v, vmX: v => (+v).toFixed(1), vmY: v => (+v).toFixed(1), vmZ: v => (+v).toFixed(1), sens: v => (+v).toFixed(2), vol: v => Math.round(v * 100) + '%', xSize: v => v, xGap: v => v, xThick: v => v };

  function render() {
    el.innerHTML = `<div class="ms-box st-box">
      <h2>CONFIGURACIÓN</h2>
      <div class="st-cols">
        <div>
          <h3>MOUSE</h3>
          ${row('Sensibilidad', slider('sens', 0.4, 8, 0.05, FMT.sens))}
          ${row('Invertir eje Y', toggle('invert', 'Sí', 'No'))}
          <h3>COMPRA</h3>
          <h3>SONIDO</h3>
          ${row('Volumen', slider('vol', 0, 1, 0.05, FMT.vol))}
          <h3>GRÁFICOS</h3>
          ${row('Sombras', `<div class="seg" data-q><button data-v="0" class="${S.quality === 0 ? 'on' : ''}">No</button><button data-v="1" class="${S.quality === 1 ? 'on' : ''}">Bajas</button><button data-v="2" class="${S.quality === 2 ? 'on' : ''}">Altas</button></div>`)}
          <p class="note">Las sombras se aplican al cargar la próxima partida.</p>
          ${row('Relación de aspecto', `<div class="seg" data-a>${[['16:9', '16:9'], ['4:3b', '4:3 con barras'], ['4:3s', '4:3 estirado']].map(([v, t]) => `<button data-v="${v}" class="${S.aspect === v ? 'on' : ''}">${t}</button>`).join('')}</div>`)}
          <h3>ARMA EN PRIMERA PERSONA</h3>
          ${row('Posición', `<div class="seg" data-vp>${[[1, 'Escritorio'], [2, 'Sillón'], [3, 'Clásico']].map(([v, t]) => `<button data-v="${v}" class="${S.vmPreset === v ? 'on' : ''}">${t}</button>`).join('')}</div>`)}
          ${row('Campo de visión', slider('vmFov', 54, 68, 1, FMT.vmFov))}
          ${row('Horizontal (X)', slider('vmX', -2.5, 2.5, 0.5, FMT.vmX))}
          ${row('Profundidad (Y)', slider('vmY', -2, 2, 0.5, FMT.vmY))}
          ${row('Vertical (Z)', slider('vmZ', -2, 2, 0.5, FMT.vmZ))}
        </div>
        <div>
          <h3>MIRA</h3>
          <div class="st-prev"><div id="stX" class="xh"><i class="l"></i><i class="r"></i><i class="u"></i><i class="d"></i><b></b></div></div>
          ${row('Estilo', toggle('xStatic', 'Estática', 'Dinámica'))}
          ${row('Color', `<div class="st-cols6">${COLORS.map(c => `<button class="sw ${S.xColor === c ? 'on' : ''}" data-c="${c}" style="background:${c}"></button>`).join('')}</div>`)}
          ${row('Largo', slider('xSize', 2, 16, 1, FMT.xSize))}
          ${row('Separación', slider('xGap', 0, 12, 1, FMT.xGap))}
          ${row('Grosor', slider('xThick', 1, 5, 1, FMT.xThick))}
          ${row('Punto central', toggle('xDot', 'Sí', 'No'))}
          ${row('Contorno', toggle('xOutline', 'Sí', 'No'))}
        </div>
      </div>
      <div class="st-btns"><button class="fn-play small ghost" id="stReset">VALORES POR DEFECTO</button><button class="fn-play small" id="stClose">LISTO</button></div>
    </div>`;
    for (const r of el.querySelectorAll('input[type=range]')) r.oninput = () => { const k = r.dataset.k; S[k] = +r.value; if (k.startsWith('vm')) { S.vmPreset = 0; for (const b of el.querySelectorAll('[data-vp] button')) b.classList.remove('on'); } el.querySelector(`[data-o="${k}"]`).textContent = (FMT[k] || (v => v))(S[k]); save(); preview(); };
    for (const sg of el.querySelectorAll('[data-t]')) for (const b of sg.children) b.onclick = () => { S[sg.dataset.t] = b.dataset.v === '1'; save(); render(); };
    for (const b of el.querySelectorAll('[data-q] button')) b.onclick = () => { S.quality = +b.dataset.v; save(); render(); };
    for (const b of el.querySelectorAll('[data-a] button')) b.onclick = () => { S.aspect = b.dataset.v; save(); render(); };
    for (const b of el.querySelectorAll('[data-vp] button')) b.onclick = () => { S.vmPreset = +b.dataset.v; Object.assign(S, VM_PRESETS[S.vmPreset]); save(); render(); };
    for (const b of el.querySelectorAll('[data-c]')) b.onclick = () => { S.xColor = b.dataset.c; save(); render(); };
    el.querySelector('#stReset').onclick = () => { Object.assign(S, DEF); save(); render(); };
    el.querySelector('#stClose').onclick = () => close();
    preview();
  }
  function preview() { styleCrosshair(el.querySelector('#stX'), S, S.xGap); }
  function close() { el.hidden = true; const f = onClose; onClose = null; f && f(); }
  return {
    S,
    open(cb) { onClose = cb || null; render(); el.hidden = false; },
    close, isOpen: () => !el.hidden,
  };
}

// dibuja la mira con los valores de configuración; gap = separación actual (dinámica o fija)
export function styleCrosshair(e, S, gap) {
  if (!e) return;
  const g = Math.round(gap), len = S.xSize, th = S.xThick, key = [g, len, th, S.xColor, S.xDot, S.xOutline].join();
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
