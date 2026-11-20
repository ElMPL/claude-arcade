"""Importa un modelo 3D de mapa (OBJ/GLB) a Low Strike:
 - colisión: columnas por celda con varios tramos sólidos (piso, losas, techos), en PNG de datos
 - render: malla por categorías (piso, pared, cajas, puertas, ...) cuantizada a cm, en un .bin

Uso: python3 import_map.py dust2 <ruta.obj>   |   python3 import_map.py mirage <ruta.npz decimado> <ruta.glb>
"""
import sys, json, math, numpy as np, trimesh
from PIL import Image

OUT = '../maps'
mid = sys.argv[1]
import os
N = int(os.environ.get('N', 1024))
ZS = N / 512  # las zonas y puertas de tools/zones_*.json están en una grilla de 512

def load_dust2(path):
  sc = trimesh.load(path, force='scene')
  parts = []
  for name in sc.graph.nodes_geometry:
    T, g = sc.graph[name]; geo = sc.geometry[g].copy().apply_transform(T)
    mat = getattr(geo.visual, 'material', None); mn = (getattr(mat, 'name', '') or '')
    parts.append((geo, mn))
  return parts

# categoría de render según el nombre del material (Dust II)
# el OBJ de Dust II trae materiales numerados (material_N); se clasifican mirando sus texturas
D2MAT = {12: 'crate', 7: 'door', 23: 'door', 26: 'door', 28: 'door', 29: 'door', 30: 'door', 2: 'door', 9: 'door', 17: 'door',
         11: 'rock', 20: 'metal', 21: 'metal', 31: 'metal', 33: 'metal', 18: 'dark', 32: 'dark', 3: 'dark',
         0: 'trim', 13: 'trim', 14: 'trim', 19: 'trim', 24: 'trim', 5: 'road', 25: 'road', 10: 'concrete'}
def cat_dust2(mn, nrm):
  n = mn.lower()
  import re as _re
  mm = _re.search(r'material_(\d+)', n)
  if mm and int(mm.group(1)) in D2MAT:
    c = D2MAT[int(mm.group(1))]
    if c in ('road',) and nrm[1] < 0.5: return 'wall'
    if c == 'concrete': return 'floor' if nrm[1] > 0.5 else 'wall'
    return c
  if 'crt' in n or 'crte' in n: return 'crate'
  if 'door' in n: return 'door'
  if 'trim' in n: return 'trim'
  if 'road' in n: return 'road'
  if 'ccrete' in n: return 'concrete'
  if 'rock' in n: return 'rock'
  if 'generic' in n or 'lgt' in n: return 'metal'
  if n == 'black': return 'dark'
  if 'sand' in n and 'wall' not in n and 'wll' not in n: return 'floor' if nrm[1] > 0.5 else 'wall'
  if nrm[1] > 0.7: return 'floor'
  if nrm[1] < -0.7: return 'ceiling'
  return 'wall'

def cat_mirage(nrm):
  if nrm[1] > 0.7: return 'floor'
  if nrm[1] < -0.7: return 'ceiling'
  return 'wall'

# ---------- carga y transformación a metros (y arriba, x este, z sur) ----------
BSPMODE = sys.argv[2].endswith('.npz')
if BSPMODE:
  # mapa de Half-Life/CS 1.6 ya convertido por import_bsp.py: triángulos sólidos (metros) y zonas de las entidades
  d = np.load(sys.argv[2]); T_col = d['col']; T_all = np.zeros((0, 3, 3)); cats = np.array([], dtype=object)
  BSPZ = json.load(open(sys.argv[2].replace('.npz', '_ents.json')))
elif mid == 'dust2':
  parts = load_dust2(sys.argv[2])
  U = 0.0254
  def tr(v): return np.stack([v[:, 0] * U, v[:, 2] * U, -v[:, 1] * U], 1)
  tris, cats = [], []
  for geo, mn in parts:
    V = tr(geo.vertices); F = geo.faces
    t = V[F]
    nr = np.cross(t[:, 1] - t[:, 0], t[:, 2] - t[:, 0]); nl = np.linalg.norm(nr, axis=1, keepdims=True) + 1e-9; nr = nr / nl
    tris.append(t)
    cats += [cat_dust2(mn, nr[i]) for i in range(len(F))]
  T_all = np.concatenate(tris); cats = np.array(cats)
  T_col = T_all
if not BSPMODE and mid != 'dust2':
  d = np.load(sys.argv[2]); V = d['v']; F = d['f']
  T_all = V[F]
  nr = np.cross(T_all[:, 1] - T_all[:, 0], T_all[:, 2] - T_all[:, 0]); nr /= (np.linalg.norm(nr, axis=1, keepdims=True) + 1e-9)
  cats = np.array([cat_mirage(x) for x in nr])
  # colisión con la malla completa (más precisa)
  sc = trimesh.load(sys.argv[3], force='scene'); keep = []
  for name in sc.graph.nodes_geometry:
    Tm, g = sc.graph[name]
    if 'overlay' in g: continue
    keep.append(sc.geometry[g].copy().apply_transform(Tm))
  full = trimesh.util.concatenate(keep)
  T_col = full.vertices[full.faces]

# ---------- encuadre ----------
allv = T_col.reshape(-1, 3)
lo = allv.min(0); hi = allv.max(0)
# piso más bajo: percentil bajo de las superficies hacia arriba (ignora fosos del skybox)
nrc = np.cross(T_col[:, 1] - T_col[:, 0], T_col[:, 2] - T_col[:, 0]); nrc /= (np.linalg.norm(nrc, axis=1, keepdims=True) + 1e-9)
ups = T_col[nrc[:, 1] > 0.7][:, :, 1].ravel()
y0 = np.percentile(ups, 0.5) - 0.3
margin = 2.0
size = max(hi[0] - lo[0], hi[2] - lo[2]) + margin * 2
cell = math.ceil(size / N * 1000) / 1000
off = np.array([-lo[0] + margin, -y0, -lo[2] + margin])
if os.environ.get('DBG'): _x, _z = map(float, os.environ['DBG'].split(',')); DBGC = int(_z // cell) * N + int(_x // cell)
T_col = T_col + off; T_all = T_all + off
print(mid, 'size', size, 'cell', cell, 'tris col', len(T_col), 'render', len(T_all))

# ---------- puertas abiertas: hojas de puerta (bloques en diagonal dentro del marco) que tapaban el paso ----------
_Z = {} if BSPMODE else json.load(open(f'zones_{mid}.json')) if __import__('os').path.exists(f'zones_{mid}.json') else {}
def open_doors(T, extra=None):
  if not _Z.get('open'): return T, extra
  gx = T[:, :, 0] / cell; gz = T[:, :, 2] / cell
  nr = np.cross(T[:, 1] - T[:, 0], T[:, 2] - T[:, 0]); nr /= (np.linalg.norm(nr, axis=1, keepdims=True) + 1e-9)
  kill = np.zeros(len(T), bool)
  for x0, x1, z0, z1 in ([v * ZS for v in b] for b in _Z['open']):
    cx = gx.mean(1); cz = gz.mean(1)
    ins = (cx > x0 + 0.3) & (cx < x1 - 0.3) & (cz > z0 + 0.3) & (cz < z1 - 0.3)
    if not ins.any(): continue
    fl = T[ins][:, :, 1].min()  # piso del marco
    plane = (np.ptp(gx, 1) < 0.05) & ((np.abs(gx[:, 0] - x0) < 1.2) | (np.abs(gx[:, 0] - x1) < 1.2))
    plane |= (np.ptp(gz, 1) < 0.05) & ((np.abs(gz[:, 0] - z0) < 1.2) | (np.abs(gz[:, 0] - z1) < 1.2))
    k = ins & ~plane & (nr[:, 1] < 0.9) & (T[:, :, 1].min(1) < fl + 0.6)
    # la tapa de arriba de la hoja también
    top = ins & ~plane & (nr[:, 1] > 0.9) & (T[:, :, 1].min(1) > fl + 2.5) & (T[:, :, 1].max(1) < fl + 4.3)
    kill |= k | top
  print('puertas abiertas: tris quitados', int(kill.sum()))
  return T[~kill], (extra[~kill] if extra is not None else None)
T_col, _ = open_doors(T_col)
T_all, cats = open_doors(T_all, cats)

# ---------- muestreo de superficies ----------
step = cell * float(os.environ.get('STEPK', 0.45))
xs, ys, zs, kinds = [], [], [], []
nrc = np.cross(T_col[:, 1] - T_col[:, 0], T_col[:, 2] - T_col[:, 0]); area = np.linalg.norm(nrc, axis=1); nrc /= (area[:, None] + 1e-9)
kind = np.where(nrc[:, 1] > 0.5, 0, np.where(nrc[:, 1] < -0.5, 1, 2))  # 0 arriba, 1 abajo, 2 empinado
edge = np.maximum.reduce([np.linalg.norm(T_col[:, 1] - T_col[:, 0], axis=1), np.linalg.norm(T_col[:, 2] - T_col[:, 1], axis=1), np.linalg.norm(T_col[:, 0] - T_col[:, 2], axis=1)])
# cada muestra se guarda como una sola clave entera (celda | altura en mm | tipo) y se ordena en el lugar: entra en memoria aunque sean cientos de millones
# la grilla de muestras va por los dos lados que salen del vértice 0 (na × nb): los triángulos largos y finos no gastan de más
L0 = np.linalg.norm(T_col[:, 2] - T_col[:, 1], axis=1); L1 = np.linalg.norm(T_col[:, 0] - T_col[:, 2], axis=1); L2 = np.linalg.norm(T_col[:, 1] - T_col[:, 0], axis=1)
rot = np.argmax(np.stack([L0, L1, L2], 1), 1)  # el vértice 0 pasa a ser el opuesto al lado más largo
T_col = np.stack([T_col[np.arange(len(T_col)), (rot + k) % 3] for k in range(3)], 1)
e1 = np.linalg.norm(T_col[:, 1] - T_col[:, 0], axis=1); e2 = np.linalg.norm(T_col[:, 2] - T_col[:, 0], axis=1)
NA = np.clip(np.ceil(e1 / step).astype(np.int64), 1, 3000); NB = np.clip(np.ceil(e2 / step).astype(np.int64), 1, 3000)
pair = NA * 4096 + NB
up_, inv = np.unique(pair, return_inverse=True)
def lattice(na, nb):
  i, j = np.mgrid[0:na + 1, 0:nb + 1]; m = i * nb + j * na <= na * nb
  return (i[m] / na).astype(np.float32), (j[m] / nb).astype(np.float32)
cnt = np.array([len(lattice(int(p // 4096), int(p % 4096))[0]) if (p // 4096) * (p % 4096) < 4_000_000 else 0 for p in up_])
tot = int(np.bincount(inv, minlength=len(up_)) @ cnt)
print('muestras previstas', tot)
KEY = np.empty(tot, np.int64); w = 0
order_g = np.argsort(inv, kind='stable'); bnd = np.searchsorted(inv[order_g], np.arange(len(up_) + 1))
for g, p in enumerate(up_):
  idx = order_g[bnd[g]:bnd[g + 1]]
  if not len(idx) or cnt[g] == 0: continue
  uu, vv = lattice(int(p // 4096), int(p % 4096)); u = uu[None, :, None]; v = vv[None, :, None]
  ch = max(1, 2_000_000 // u.shape[1])
  for q0 in range(0, len(idx), ch):
    t = T_col[idx[q0:q0 + ch]].astype(np.float32)
    P = t[:, 0:1] + (t[:, 1:2] - t[:, 0:1]) * u + (t[:, 2:3] - t[:, 0:1]) * v
    c_ = np.clip((P[:, :, 2] / cell).astype(np.int64), 0, N - 1) * N + np.clip((P[:, :, 0] / cell).astype(np.int64), 0, N - 1)
    yq = np.clip(np.round((P[:, :, 1] + 100) * 1000), 0, (1 << 18) - 1).astype(np.int64)
    k_ = np.broadcast_to(kind[idx[q0:q0 + ch]][:, None], c_.shape).astype(np.int64)
    kk = ((c_ << 20) | (yq << 2) | k_).ravel(); KEY[w:w + len(kk)] = kk; w += len(kk)
    del P, t, c_, yq, k_, kk
assert w == tot
KEY.sort()
ci = (KEY >> 20).astype(np.int32); ys = (((KEY >> 2) & ((1 << 18) - 1)).astype(np.float32) / 1000 - 100); kinds = (KEY & 3).astype(np.uint8); del KEY
bounds = np.searchsorted(ci, np.arange(N * N + 1))
print('samples', len(ci))

# ---------- tramos sólidos por celda ----------
LMAX = int(os.environ.get('LMAX', 3))
SRCMAP = bool(os.environ.get('SRCMAP'))  # mapas de Source: la geometría es cerrada, los parches de malla sólo inventan pilares
DBGC = DBGC if "DBGC" in dir() else None
NOUP = np.full(N * N, np.nan, np.float32)  # celdas sin superficie hacia arriba (¿cable/viga colgando o pared?)
TOP = np.full((LMAX, N * N), np.nan, np.float32); BOT = np.full((LMAX, N * N), np.nan, np.float32); CLS = np.zeros((LMAX, N * N), np.uint8)
for c in range(N * N):
  a, b = bounds[c], bounds[c + 1]
  if a == b: TOP[0, c] = 25; BOT[0, c] = -30; CLS[0, c] = 3; continue
  y = ys[a:b]; k = kinds[a:b]
  up = y[k == 0]; dn = y[k == 1]; st = y[k == 2]
  if len(up) == 0:
    TOP[0, c] = max(25, y.max()); BOT[0, c] = -30; CLS[0, c] = 3; NOUP[c] = y.min(); continue
  # superficies agrupadas
  ev = sorted([(v, 0) for v in up] + [(v, 1) for v in dn], key=lambda e: (e[0], -e[1]))  # empate: primero la cara de abajo
  merged = []
  for v, t in ev:
    if merged and merged[-1][1] == t and v - merged[-1][0] < 0.08: merged[-1] = (v, t); continue
    merged.append((v, t))
  solids = []; state = 'solid'; cur = -30.0
  if DBGC is not None and c == DBGC: print('DBG ev', [(round(float(v),2), t) for v, t in merged], 'steep', np.round(np.unique(np.round(st, 1)), 1).tolist()[:40])
  for v, t in merged:
    if t == 0:
      if state == 'solid': solids.append([cur, v]); state = 'free'
      elif solids:
        if SRCMAP and v - solids[-1][1] > 0.6: solids.append([v - 0.15, v])  # Source: superficie suelta (lámpara, chapa), no un pilar
        else: solids[-1][1] = v  # caja apoyada (sin cara de abajo)
    else:
      if state == 'free' and v - solids[-1][1] > 0.25: cur = v; state = 'solid'
  if state == 'solid' and cur > -29: solids.append([cur, cur + 0.4])
  # huecos muy chicos se rellenan
  s2 = []
  for s_ in solids:
    if s2 and s_[0] - s2[-1][1] < 0.6: s2[-1][1] = max(s2[-1][1], s_[1])
    else: s2.append(s_)
  solids = s2
  wall = [False] * len(solids)
  # paredes: algo empinado a la altura del cuerpo dentro de un hueco libre
  for li in range(len(solids)):
    fb = solids[li][1]; ft = solids[li + 1][0] if li + 1 < len(solids) else 1e9
    inside = st[(st > fb + 0.05) & (st < ft - 0.05)]
    if len(inside) and np.any((inside > fb + 1.0) & (inside < fb + 1.9)):
      # la pared llega hasta donde siguen las muestras empinadas sin cortarse (no hasta la lámpara del techo)
      ins = np.sort(inside); k0 = np.searchsorted(ins, fb + 1.0); top_ = ins[k0]
      for v_ in ins[k0 + 1:]:
        if v_ - top_ > 0.5: break
        top_ = v_
      solids[li][1] = min(top_ + 0.05, ft if ft < 1e8 else top_ + 0.05); wall[li] = True
      if li + 1 < len(solids) and solids[li][1] >= solids[li + 1][0] - 0.3:
        solids[li][1] = solids[li + 1][1]; solids.pop(li + 1); wall.pop(li + 1)
      break
  while len(solids) > LMAX:
    # sobran tramos: primero se cierran los huecos donde no entra nadie (menos de 1,15 m); si todos son caminables,
    # se juntan los dos de más arriba (techo y lo que cuelga de él), nunca un piso con lo que tiene encima
    gaps = [(solids[q + 1][0] - solids[q][1], q) for q in range(len(solids) - 1)]
    small = [g for g in gaps if g[0] < 1.15]
    k = min(small)[1] if small else len(solids) - 2
    solids[k] = [solids[k][0], solids[k + 1][1]]; wall[k] = wall[k] or wall[k + 1]; solids.pop(k + 1); wall.pop(k + 1)
  for li, s_ in enumerate(solids):
    BOT[li, c] = s_[0]; TOP[li, c] = s_[1]
    free = (solids[li + 1][0] - s_[1]) if li + 1 < len(solids) else 99
    CLS[li, c] = 3 if wall[li] else (1 if free >= 1.75 else 4)

# celdas sin cara hacia arriba cuyo punto más bajo está muy por encima del piso vecino: son cables, vigas
# o toldos colgando, no paredes -> se copian del piso vecino
fix = 0
# mapas de Source: la geometría es cerrada, estos parches sólo inventan pilares
for _ in ([] if SRCMAP else range(3)):
  for c in np.where(~np.isnan(NOUP))[0]:
    x, z = c % N, c // N; best = None
    for dz in (-1, 0, 1):
      for dx in (-1, 0, 1):
        xx, zz = x + dx, z + dz
        if (dx or dz) and 0 <= xx < N and 0 <= zz < N:
          j = zz * N + xx
          if np.isnan(NOUP[j]) and CLS[0, j] == 1 and (best is None or TOP[0, j] > TOP[0, best]): best = j
    if best is not None and NOUP[c] > TOP[0, best] + 2.0:
      TOP[:, c] = TOP[:, best]; BOT[:, c] = BOT[:, best]; CLS[:, c] = CLS[:, best]; NOUP[c] = np.nan; fix += 1
print('cables/vigas convertidos en piso:', fix)

# grietas entre piezas de piso: celdas sin nada a la altura del cuerpo entre dos pisos iguales se rellenan
def floor_h(j):
  for l in range(LMAX):
    if CLS[l, j] == 1 and not np.isnan(TOP[l, j]): return l, TOP[l, j]
  return None, None
crack = 0
for _ in ([] if SRCMAP else range(2)):
  for c in range(N * N):
    x, z = c % N, c // N
    if x < 6 or z < 6 or x >= N - 6 or z >= N - 6: continue
    _, h0 = floor_h(c)
    for dx, dz in ((1, 0), (0, 1)):
      done = False
      for d in (1, 2, 3, 4):
        a = c - dx * 1 - dz * N * 1; b = c + dx * d + dz * N * d
        la, ha = floor_h(a); lb, hb = floor_h(b)
        if ha is None or hb is None or abs(ha - hb) > 0.35: continue
        if h0 is not None and abs(h0 - ha) < 0.25: continue
        if h0 is not None and h0 < ha - 0.3: continue  # pozo real, no grieta
        y = ys[bounds[c]:bounds[c + 1]]
        if np.any((y > ha + 0.15) & (y < ha + 2.0)): continue  # hay algo a la altura del cuerpo: pared de verdad
        for k in range(d):
          cc = c + (dx + dz * N) * k
          TOP[:, cc] = TOP[:, a]; BOT[:, cc] = BOT[:, a]; CLS[:, cc] = CLS[:, a]
        crack += 1; done = True; break
      if done: break
print('grietas rellenadas:', crack)

# ---------- zonas (en coordenadas de esta grilla) ----------
ZONES = json.load(open(f'zones_{mid}.json')) if __import__('os').path.exists(f'zones_{mid}.json') else {}
ZONES = {k: [int(round(v * ZS)) for v in r] for k, r in ZONES.items() if k in ('A', 'B', 'T', 'CT')}
if BSPMODE:  # zonas de las entidades (func_bomb_target / func_buyzone), en metros → celdas
  ZONES = {k: [int((r[0] + off[0]) / cell), int((r[1] + off[2]) / cell), int((r[2] + off[0]) / cell), int((r[3] + off[2]) / cell)] for k, r in BSPZ['zones'].items()}
flags = np.zeros(N * N, np.uint8)
for key, bit in (('A', 4), ('B', 8), ('T', 16), ('CT', 32)):
  if key in ZONES:
    x0, y0_, x1, y1 = ZONES[key]
    for zz in range(y0_, y1 + 1): flags[zz * N + x0:zz * N + x1 + 1] |= bit
L = int(max(1, max(l + 1 for l in range(LMAX) if not np.all(np.isnan(TOP[l])))))
img = np.zeros((N * L * 2, N, 3), np.uint8)
for l in range(L):
  t = np.nan_to_num(TOP[l], nan=-2); bt = np.nan_to_num(BOT[l], nan=-2)
  tc = np.clip(np.round((t + 2) * 100), 0, 65535).astype(np.uint16); bc = np.clip(np.round((np.maximum(bt, -2) + 2) * 100), 0, 65535).astype(np.uint16)
  has = ~np.isnan(TOP[l])
  r = np.where(has, CLS[l] + 1, 0).astype(np.uint8)  # 0 = sin tramo
  img[(2 * l) * N:(2 * l + 1) * N, :, 0] = r.reshape(N, N); img[(2 * l) * N:(2 * l + 1) * N, :, 1] = (tc >> 8).reshape(N, N); img[(2 * l) * N:(2 * l + 1) * N, :, 2] = (tc & 255).reshape(N, N)
  img[(2 * l + 1) * N:(2 * l + 2) * N, :, 0] = (flags if l == 0 else np.zeros_like(flags)).reshape(N, N); img[(2 * l + 1) * N:(2 * l + 2) * N, :, 1] = (bc >> 8).reshape(N, N); img[(2 * l + 1) * N:(2 * l + 2) * N, :, 2] = (bc & 255).reshape(N, N)
Image.fromarray(img, 'RGB').save(f'{OUT}/{mid}.png', optimize=True)
info = {'id': mid, 'n': N, 'cell': cell, 'layers': L, 'format': 'spans', 'zones': ZONES, 'mesh': f'{mid}.bin', 'origin': [float(off[0]), float(off[1]), float(off[2])]}
if BSPMODE:
  info['spawns'] = {k: [[float(p[0] + off[0]), float(p[1] + off[1]), float(p[2] + off[2]), float(p[3])] for p in v] for k, v in BSPZ['spawns'].items()}
  info['zonesM'] = {k: [float(r[0] + off[0]), float(r[1] + off[2]), float(r[2] + off[0]), float(r[3] + off[2])] for k, r in BSPZ['zones'].items()}

# ---------- malla de render ----------
if BSPMODE:
  json.dump(info, open(f'{OUT}/{mid}.json', 'w')); print('ok (colisión)', info['layers']); sys.exit(0)
CATS = ['floor', 'road', 'wall', 'trim', 'crate', 'door', 'concrete', 'rock', 'metal', 'dark', 'ceiling']
q = np.clip(np.round(T_all * 100), 0, 65535).astype(np.uint16)
chunks, meta = [], []
for cname in CATS:
  sel = np.where(cats == cname)[0]
  if not len(sel): continue
  meta.append({'cat': cname, 'tris': int(len(sel))}); chunks.append(q[sel].ravel())
data = np.concatenate(chunks).astype('<u2').tobytes()
open(f'{OUT}/{mid}.bin', 'wb').write(data)
info['parts'] = meta
json.dump(info, open(f'{OUT}/{mid}.json', 'w'))
# imagen de control
vis = np.zeros((N, N, 3), np.uint8)
t0 = np.nan_to_num(TOP[0]); k = np.clip(t0 / 12, 0, 1)
vis[..., 0] = (40 + 200 * k).reshape(N, N); vis[..., 1] = (90 + 120 * k).reshape(N, N); vis[..., 2] = (200 - 150 * k).reshape(N, N)
vis[(CLS[0] == 3).reshape(N, N)] = 0
if L > 1: vis[(CLS[1] == 1).reshape(N, N)] = (vis[(CLS[1] == 1).reshape(N, N)] * 0.6 + np.array([255, 0, 255]) * 0.4).astype(np.uint8)
Image.fromarray(vis).save(f'/tmp/ls/imp_{mid}.png')
print('ok', info['layers'], len(data) / 1e6, 'MB')
