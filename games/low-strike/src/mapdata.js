// Mapas: PNG de datos con tramos sólidos por celda (formato "spans") y la malla de render (.bin)
export function decodeMap(info, rgba, width) {
  const n = info.n, layers = [];
  if (info.format === 'spans') {
    // por capa: fila de arriba (R = clase+1, G/B = alto) y fila de abajo (R = zonas en la capa 0, G/B = base)
    let flags = null;
    for (let l = 0; l < info.layers; l++) {
      const cls = new Uint8Array(n * n), top = new Float32Array(n * n), bot = new Float32Array(n * n);
      if (l === 0) flags = new Uint8Array(n * n);
      for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
        const i = y * n + x, p = ((2 * l * n + y) * width + x) * 4, q = (((2 * l + 1) * n + y) * width + x) * 4;
        const c = rgba[p];
        if (!c) { top[i] = NaN; bot[i] = NaN; cls[i] = 0; }
        else { cls[i] = c - 1; top[i] = ((rgba[p + 1] << 8) | rgba[p + 2]) / 100 - 2; bot[i] = l === 0 ? -30 : ((rgba[q + 1] << 8) | rgba[q + 2]) / 100 - 2; }
        if (l === 0) flags[i] = rgba[q];
      }
      layers.push({ cls, top, bot });
    }
    layers.flags = flags;
    return layers;
  }
  for (let l = 0; l < info.layers; l++) {
    const cls = new Uint8Array(n * n), h = new Float32Array(n * n);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const p = ((l * n + y) * width + x) * 4;
      const i = y * n + x;
      cls[i] = rgba[p];
      h[i] = ((rgba[p + 1] << 8) | rgba[p + 2]) / 100 - 2;
    }
    layers.push({ cls, h });
  }
  return layers;
}
export async function loadMap(id, base = 'maps/') {
  const info = await (await fetch(base + id + '.json')).json();
  const img = new Image(); img.src = base + id + '.png';
  await img.decode();
  const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height;
  const x = cv.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0);
  const data = x.getImageData(0, 0, img.width, img.height).data;
  const out = { info, layers: decodeMap(info, data, img.width) };
  if (info.mesh) out.mesh = new Uint16Array(await (await fetch(base + info.mesh)).arrayBuffer());
  return out;
}
