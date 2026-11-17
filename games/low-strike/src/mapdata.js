// Decodifica los mapas (PNG de datos: R = clase|zonas, G/B = altura en cm + 200)
export function decodeMap(info, rgba, width) {
  const n = info.n, layers = [];
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
  return { info, layers: decodeMap(info, data, img.width) };
}
