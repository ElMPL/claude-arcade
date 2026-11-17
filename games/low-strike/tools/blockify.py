"""Mapas propios de Low Strike: toma la planta derivada del radar (tools/src/*.png) y la rehace
como arquitectura coherente: bloques de ~1 m (paredes rectas), pisos planos en niveles de 0.3 m
(rampas = escalones suaves), correcciones de altura a mano y cajas conservadas.

Uso: python3 blockify.py  (escribe ../maps/*.png y ../maps/*.json)
"""
import json, numpy as np
from PIL import Image
from scipy import ndimage as ndi

SRC, OUT = 'src', '../maps'
B = 4          # celdas por bloque
LEVEL = 0.3    # alturas de piso en escalones de 30 cm

# Correcciones a mano en coordenadas de la grilla 512 (x0, y0, x1, y1, alto en metros o 'wall'/'floor')
FIX = {
  # Dust II: niveles pensados a mano (T arriba, mid abajo, A sobre long, pozo al fondo de long)
  'dust2': [
    (0, 0, 511, 511, 1.2),
    (20, 380, 250, 500, 3.0),                 # base T
    (250, 420, 300, 500, (3.0, 2.1, 'x')),    # bajada al este de la base T
    (300, 400, 345, 500, 2.1),
    (40, 290, 150, 372, 2.1),                 # afuera de túneles
    (40, 372, 150, 400, (2.1, 3.0, 'y')),
    (60, 256, 120, 292, (1.2, 2.1, 'y')),     # entrada a túneles
    (30, 200, 128, 256, 1.2),                 # túneles de arriba
    (40, 150, 70, 200, 1.2),
    (30, 96, 160, 150, 1.2),                  # salida de túneles / puertas B
    (160, 90, 215, 150, (1.2, 0.6, 'x')),
    (30, 8, 145, 82, 1.8),                    # sitio B
    (30, 82, 145, 98, (1.8, 1.2, 'y')),
    (200, 60, 240, 150, 0.6),                 # CT a B
    (240, 60, 305, 150, (0.6, 3.6, 'x')),     # spawn CT subiendo a A
    (128, 205, 170, 256, (1.2, 0.0, 'x')),    # escalera de túneles
    (140, 185, 225, 222, 0.0),                # túneles de abajo
    (205, 150, 265, 280, 0.0),                # mid
    (250, 185, 275, 222, (0.0, 1.8, 'x')),    # pasillo a short
    (275, 185, 345, 222, 1.8),
    (300, 140, 345, 185, (3.6, 1.8, 'y')),    # escalera de short
    (300, 30, 480, 140, 3.6),                 # sitio A
    (385, 5, 475, 45, 3.6),
    (405, 140, 492, 185, (3.6, 2.1, 'y')),    # rampa de A
    (405, 185, 492, 300, 2.1),                # long
    (330, 225, 420, 300, 2.1),
    (330, 280, 385, 345, 2.1),                # puertas de long
    (280, 300, 385, 420, 2.1),                # afuera de long
    (405, 300, 492, 318, (2.1, 0.6, 'y')),    # pozo
    (405, 318, 492, 360, 0.6),
    (205, 280, 270, 312, (0.0, 2.1, 'y')),    # de mid a top mid
    (185, 312, 345, 380, 2.1),
    (185, 380, 250, 420, (2.1, 3.0, 'y')),    # rampa T
    (250, 380, 345, 420, 2.1),
  ],
  'mirage': [],
  'vertigo': [('band', 3.9, 4.8, 4.5)],
}

def decode(mid):
  info = json.load(open(f'{SRC}/{mid}.json'))
  a = np.asarray(Image.open(f'{SRC}/{mid}.png').convert('RGB')).astype(np.int32)
  n = info['n']; layers = []
  for l in range(info['layers']):
    p = a[l * n:(l + 1) * n]
    raw = p[:, :, 0]; h = ((p[:, :, 1] << 8) | p[:, :, 2]) / 100.0 - 2
    layers.append((raw & 3, raw & ~3 & 255, h))
  return info, layers

def blockify(cls, flags, h, multi, fixes):
  n = cls.shape[0]; nb = n // B
  c4 = cls.reshape(nb, B, nb, B).transpose(0, 2, 1, 3).reshape(nb, nb, B * B)
  h4 = h.reshape(nb, B, nb, B).transpose(0, 2, 1, 3).reshape(nb, nb, B * B)
  walk = ((c4 == 1) | (c4 == 2)).mean(2) >= 0.5
  void = (c4 == 0).mean(2) > 0.5
  fl = np.where(c4 == 1, h4, np.nan)
  with np.errstate(all='ignore'):
    bh = np.nanmedian(fl, 2)
  bh = np.where(np.isnan(bh), np.nanmedian(np.where((c4 == 1) | (c4 == 2), h4, np.nan), 2), bh)
  # muescas y espolones de un bloque
  for _ in range(2):
    k = ndi.convolve(walk.astype(int), np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]]), mode='constant')
    walk = np.where(~walk & (k >= 3), True, walk)
    walk = np.where(walk & (k <= 1), False, walk)
  # alturas: mediana 3x3 entre bloques caminables y redondeo a niveles
  hb = np.where(walk, bh, np.nan)
  out = hb.copy()
  for y in range(nb):
    for x in range(nb):
      if not walk[y, x]: continue
      win = hb[max(0, y - 1):y + 2, max(0, x - 1):x + 2]
      v = win[~np.isnan(win)]
      if len(v): out[y, x] = np.median(v)
  out = np.nan_to_num(out)
  # escalones falsos (< 1.3 m) entre bloques vecinos → rampa de 0.3 m por bloque
  for _ in range(40):
    changed = False
    for dy, dx in ((0, 1), (1, 0)):
      a = out[:nb - dy, :nb - dx]; b = out[dy:, dx:]
      wa = walk[:nb - dy, :nb - dx]; wb = walk[dy:, dx:]
      d = b - a; m = wa & wb & (np.abs(d) > 0.31) & (np.abs(d) < 1.3)
      if m.any():
        changed = True
        corr = np.where(m, (np.abs(d) - 0.3) / 2 * np.sign(d), 0)
        out[:nb - dy, :nb - dx] += corr * 0.5; out[dy:, dx:] -= corr * 0.5
    if not changed: break
  out = np.round(out / LEVEL) * LEVEL
  # a celdas
  cw = np.repeat(np.repeat(walk, B, 0), B, 1)
  ch = np.repeat(np.repeat(out, B, 0), B, 1)
  cv = np.repeat(np.repeat(void, B, 0), B, 1)
  new = np.where(cw, 1, np.where(cv, 0, 3)).astype(np.int32)
  if not multi: new = np.where(new == 0, 0, new)
  new = np.where(cw & (cls == 2), 2, new)          # cajas del radar
  for fx in fixes:
    if fx[0] == 'band':  # ('band', lo, hi, valor): niveles parecidos → uno solo
      _, lo, hi, v = fx; m = ((new == 1) | (new == 2)) & (ch >= lo) & (ch <= hi); ch[m] = v; continue
    x0, y0, x1, y1, v = fx
    sl = (slice(y0, y1 + 1), slice(x0, x1 + 1))
    wk = (new[sl] == 1) | (new[sl] == 2)
    if v == 'wall': new[sl] = 3
    elif v == 'floor': new[sl] = 1
    elif isinstance(v, tuple):  # rampa (h0, h1, eje)
      h0, h1, ax = v
      ys, xs = np.mgrid[y0:y1 + 1, x0:x1 + 1]
      t = (xs - x0) / max(1, x1 - x0) if ax == 'x' else (ys - y0) / max(1, y1 - y0)
      ch[sl] = np.where(wk, h0 + (h1 - h0) * t, ch[sl])
    else: ch[sl] = np.where(wk, v, ch[sl])
  return new, ch

def encode(layers, n):
  img = np.zeros((n * len(layers), n, 3), np.uint8)
  for li, (cls, h, flags) in enumerate(layers):
    cm = np.clip(np.round((h + 2) * 100), 0, 65535).astype(np.uint16)
    img[li * n:(li + 1) * n, :, 0] = (cls | flags).astype(np.uint8)
    img[li * n:(li + 1) * n, :, 1] = cm >> 8
    img[li * n:(li + 1) * n, :, 2] = cm & 255
  return Image.fromarray(img, 'RGB')

for mid in ['dust2', 'mirage', 'vertigo']:
  info, layers = decode(mid)
  multi = len(layers) > 1
  outl = []
  for li, (cls, flags, h) in enumerate(layers):
    new, ch = blockify(cls, flags, h, multi, FIX[mid] if li == len(layers) - 1 or not multi else [])
    outl.append((new, ch, flags))
  n = info['n']
  encode(outl, n).save(f'{OUT}/{mid}.png', optimize=True)
  info['clean'] = True
  json.dump(info, open(f'{OUT}/{mid}.json', 'w'))
  # vista de control
  vis = []
  for new, ch, _ in outl:
    v = np.zeros((n, n, 3), np.uint8); k = np.clip(ch / 6, 0, 1)
    v[..., 0] = (60 + 190 * k); v[..., 1] = (120 + 100 * k); v[..., 2] = (220 - 160 * k)
    v[new == 3] = 0; v[new == 0] = 255; v[new == 2] = (150, 90, 40)
    vis.append(v)
  Image.fromarray(np.concatenate(vis, 1)).save(f'/tmp/ls/block_{mid}.png')
  print(mid, 'ok')
