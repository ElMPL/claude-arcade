"""Genera los mapas de Low Strike a partir de los radares de CS2 (vista desde arriba con la
altura codificada en el color). Para cada mapa sale un PNG de datos (clase + altura por celda)
y un JSON con la escala. Los radares no se incluyen en el juego: solo la geometría derivada.

Uso: python3 build_maps.py <carpeta_con_radares>   (de_dust2.png, de_mirage.png, de_vertigo*.png)
"""
import sys, json, numpy as np
from PIL import Image
from scipy import ndimage as ndi

SRC = sys.argv[1] if len(sys.argv) > 1 else '/tmp/radar/r1'
OUT = sys.argv[2] if len(sys.argv) > 2 else '../maps'
U = 0.0254  # metros por unidad del juego

# paleta de altura: color del radar -> metros
PAL = {
  'dust2': [((36,72,84),0.0),((48,72,84),0.9),((60,72,84),1.6),((60,84,84),2.2),((48,72,72),1.2),((60,72,72),2.8),((72,84,72),4.4),((84,96,72),6.2),((72,72,72),4.0)],
  'mirage': [((48,72,72),0.0),((48,60,72),0.3),((48,60,60),0.6),((60,72,72),1.2),((60,60,72),1.5),((84,84,84),3.0),((84,84,72),3.4),((96,84,72),4.6),((108,96,84),5.4),((72,72,72),2.4)],
  'vertigo_up': [((96,84,48),4.4),((84,72,48),4.2),((84,84,48),4.5),((72,72,36),4.1),((84,96,48),4.6),((72,60,36),3.6),((84,60,36),3.2),((84,72,36),3.9),((84,48,36),2.6),((84,48,48),2.4)],
  'vertigo_low': [((48,24,36),0.0),((36,24,36),0.0),((72,36,48),0.3),((48,36,36),0.4),((60,48,48),0.9),((84,36,36),1.6),((84,48,48),2.2),((84,48,36),2.4),((60,48,36),2.6),((84,60,48),3.0),((84,72,48),4.0),((96,84,48),4.4)],
}

def classify(img, mode):
  a = np.asarray(img.convert('RGBA')).astype(np.float32)
  rgb, al = a[:, :, :3], a[:, :, 3]
  mx, mn = rgb.max(2), rgb.min(2); lum = rgb.mean(2); sat = mx - mn
  cls = np.zeros(al.shape, np.uint8)  # 0 vacío
  inside = al > 160
  cls[inside] = 1
  wall = inside & (lum < 40) & (sat < 22)
  obst = inside & (sat < 14) & (lum >= 92)
  r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
  orange = inside & (r > 110) & (r - g > 35) & (g > 45) & (b < 80) & (sat > 60)
  green = inside & (g > 100) & (g - r > 45) & (g - b > 40)
  cls[obst] = 2; cls[wall] = 3
  if mode == 'vertigo_up':  # lo violeta del radar superior es el piso de abajo visto desde arriba
    purple = inside & (r < 70) & (b > g) & ~obst
    cls[purple] = 0
  if mode == 'vertigo_low':
    cls[inside & (lum < 22)] = 3  # hueco del ascensor
  return cls, rgb, orange, green

def heights(rgb, cls, mode):
  pal = PAL[mode]
  cols = np.array([c for c, _ in pal], np.float32); hs = np.array([h for _, h in pal], np.float32)
  d = ((rgb[:, :, None, :] - cols[None, None]) ** 2).sum(3)
  o = np.argsort(d, 2)[:, :, :2]
  d0 = np.take_along_axis(d, o[:, :, :1], 2)[:, :, 0] + 1; d1 = np.take_along_axis(d, o[:, :, 1:2], 2)[:, :, 0] + 1
  w0 = 1 / d0; w1 = 1 / d1
  h = (hs[o[:, :, 0]] * w0 + hs[o[:, :, 1]] * w1) / (w0 + w1)
  floor = cls == 1
  h = np.where(floor, h, np.nan)
  # suavizado solo dentro del piso (rellena obstáculos y líneas con el piso vecino)
  m = floor.astype(np.float32)
  hz = np.nan_to_num(h)
  for _ in range(2):
    num = ndi.gaussian_filter(hz * m, 2.2); den = ndi.gaussian_filter(m, 2.2) + 1e-6
    hz = np.where(floor, ndi.median_filter(np.where(floor, hz, num / den), 11), num / den)
  num = ndi.gaussian_filter(hz * m, 6); den = ndi.gaussian_filter(m, 6) + 1e-6
  fill = num / den
  return np.where(floor, hz, fill)

def downsample(cls, h, orange, green, k=2):
  H, W = cls.shape; n = W // k
  c4 = cls[:n * k, :n * k].reshape(n, k, n, k).transpose(0, 2, 1, 3).reshape(n, n, k * k)
  out = np.zeros((n, n), np.uint8)
  out[(c4 == 1).sum(2) > 0] = 1
  out[(c4 == 2).sum(2) >= 2] = 2
  out[(c4 == 3).sum(2) > 0] = 3
  out[(c4 == 0).sum(2) == k * k] = 0
  hh = h[:n * k, :n * k].reshape(n, k, n, k).mean((1, 3))
  ora = orange[:n * k, :n * k].reshape(n, k, n, k).any((1, 3)); gre = green[:n * k, :n * k].reshape(n, k, n, k).any((1, 3))
  return out, hh, ora, gre

def zones(mask, cls):
  # rectángulos marcados (contorno naranja = sitio, verde = spawn): componente conexo y su caja
  lab, n = ndi.label(ndi.binary_dilation(mask, iterations=2))
  out = []
  for i in range(1, n + 1):
    ys, xs = np.where(lab == i)
    if len(ys) < 12: continue
    out.append([int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())])
  return out

def encode(layers, n):
  img = np.zeros((n * len(layers), n, 3), np.uint8)
  for li, (cls, h, flags) in enumerate(layers):
    cm = np.clip(np.round((h + 2) * 100), 0, 65535).astype(np.uint16)
    img[li * n:(li + 1) * n, :, 0] = cls | flags
    img[li * n:(li + 1) * n, :, 1] = cm >> 8
    img[li * n:(li + 1) * n, :, 2] = cm & 255
  return Image.fromarray(img, 'RGB')

def meta(name):
  t = open(f'{SRC}/{name}.txt').read()
  get = lambda k: float(__import__('re').search(r'"' + k + r'"\s*"([-\d.]+)"', t).group(1))
  return {k: get(k) for k in ['scale', 'CTSpawn_x', 'CTSpawn_y', 'TSpawn_x', 'TSpawn_y', 'bombA_x', 'bombA_y', 'bombB_x', 'bombB_y']}

def flags_from(n, zA, zB, zT, zC):
  f = np.zeros((n, n), np.uint8)
  for z, bit in ((zA, 4), (zB, 8), (zT, 16), (zC, 32)):
    if z: x0, y0, x1, y1 = z; f[y0:y1 + 1, x0:x1 + 1] |= bit
  return f

def pick(boxes, pt, n, r=70):
  if not boxes: return None
  px, py = pt[0] * n, pt[1] * n
  dist = lambda b: (max(b[0] - px, 0, px - b[2]) ** 2 + max(b[1] - py, 0, py - b[3]) ** 2) ** 0.5
  best = min(boxes, key=dist)
  near = [b for b in boxes if dist(b) < max(r, dist(best) + 4)]
  # une las partes del mismo contorno (cerca del más cercano)
  bx = list(best)
  for b in sorted(near, key=dist):
    cand = [min(bx[0], b[0]), min(bx[1], b[1]), max(bx[2], b[2]), max(bx[3], b[3])]
    if cand[2] - cand[0] < 100 and cand[3] - cand[1] < 100: bx = cand
  return bx

def build(mid, files):
  K = 2
  M = meta(files[-1][0]); n = 1024 // K
  layers, dbg = [], []
  zA = zB = zT = zC = None
  for fname, mode in files:
    img = Image.open(f'{SRC}/{fname}.png')
    cls, rgb, ora, gre = classify(img, mode)
    h = heights(rgb, cls, mode)
    c, hh, o2, g2 = downsample(cls, h, ora, gre, K)
    if zA is None and fname == files[-1][0] or (zA is None and len(files) == 1):
      sites = zones(o2, c); spawns = zones(g2, c)
      zA = pick(sites, (M['bombA_x'], M['bombA_y']), n); zB = pick(sites, (M['bombB_x'], M['bombB_y']), n)
      zT = pick(spawns, (M['TSpawn_x'], M['TSpawn_y']), n); zC = pick(spawns, (M['CTSpawn_x'], M['CTSpawn_y']), n)
    layers.append([c, hh])
    dbg.append((c, hh))
  OVR = {'vertigo': {'T': [160, 347, 244, 409]}}
  if mid in OVR and 'T' in OVR[mid]: zT = OVR[mid]['T']
  fl = flags_from(n, zA, zB, zT, zC)
  data = [(c, hh, fl) for c, hh in layers]
  encode(data, n).save(f'{OUT}/{mid}.png', optimize=True)
  cell = M['scale'] * K * U
  info = {'id': mid, 'n': n, 'cell': round(cell, 5), 'layers': len(layers), 'zones': {'A': zA, 'B': zB, 'T': zT, 'CT': zC}}
  json.dump(info, open(f'{OUT}/{mid}.json', 'w'))
  # imagen de control
  vis = np.zeros((n, n * len(layers), 3), np.uint8)
  for li, (c, hh) in enumerate(dbg):
    hn = np.clip(hh / 7, 0, 1)
    v = np.stack([hn * 255, 80 + hn * 120, 255 - hn * 200], 2)
    v[c == 0] = (255, 255, 255); v[c == 3] = (0, 0, 0); v[c == 2] = (150, 150, 150)
    vis[:, li * n:(li + 1) * n] = v
  for z, col in ((zA, (255, 120, 0)), (zB, (255, 0, 200)), (zT, (0, 220, 0)), (zC, (0, 120, 255))):
    if z:
      x0, y0, x1, y1 = z; vis[y0, x0:x1] = col; vis[y1, x0:x1] = col; vis[y0:y1, x0] = col; vis[y0:y1, x1] = col
  Image.fromarray(vis).save(f'/tmp/radar/dbg_{mid}.png')
  print(mid, info)

build('dust2', [('de_dust2', 'dust2')])
build('mirage', [('de_mirage', 'mirage')])
build('vertigo', [('de_vertigo_lower', 'vertigo_low'), ('de_vertigo', 'vertigo_up')])
