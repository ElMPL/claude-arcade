"""Importa un mapa .bsp de Half-Life / CS 1.6 (versión 30) tal como viene:
 - colisión: los triángulos de las caras sólidas → import_map.py arma las columnas (PNG de datos)
 - render: caras con sus texturas originales (vienen dentro del .bsp) en un atlas, y el lightmap original en otro
 - entidades: spawns (info_player_start = CT, info_player_deathmatch = T), sitios (func_bomb_target) y zonas de compra

Uso: python3 import_bsp.py <id> <mapa.bsp>      (desde tools/)
Deja: maps/<id>.png/.json (colisión, de import_map.py), maps/<id>.bin (render), maps/<id>_tex.png, maps/<id>_lm.png
"""
import sys, os, json, math, struct, subprocess, numpy as np
from PIL import Image
from bsp import GoldSrc

mid, path = sys.argv[1], sys.argv[2]
U = 0.0254
B = GoldSrc(path)
V = B.verts(); E = B.edges(); SE = B.surfedges(); TI = B.texinfo(); F = B.faces(); MT = B.miptex(); MD = B.models(); ents = B.entities()
LM = B.lump(8)
def tr(p): p = np.asarray(p, np.float64); return np.stack([p[..., 0] * U, p[..., 2] * U, -p[..., 1] * U], -1)

# ---------- qué modelos (pinceles) van y cómo ----------
# modelo 0 = mundo. Entidades de pincel: "*N"
SOLID_ENT = {'func_wall', 'func_breakable', 'func_door', 'func_door_rotating', 'func_wall_toggle', 'func_pushable', 'func_rotating', 'func_train', 'func_tracktrain', 'func_plat', 'func_button'}
VISUAL_ENT = {'func_illusionary'}
models = {0: ('world', {}, (0, 0, 0))}
for e in ents:
  m = e.get('model', '')
  if not m.startswith('*'): continue
  k = int(m[1:]); cl = e.get('classname', '')
  org = tuple(float(x) for x in e.get('origin', '0 0 0').split())
  if cl in SOLID_ENT: models[k] = ('solid', e, org)
  elif cl in VISUAL_ENT: models[k] = ('visual', e, org)
  elif cl in ('func_bomb_target', 'func_buyzone', 'func_ladder') or cl.startswith('trigger'): models[k] = ('zone', e, org)

SKIP_TEX = ('sky', 'aaatrigger', 'clip', 'origin', 'null', 'bevel', 'hint', 'skip', 'black_hidden')
def tex_kind(name):
  n = name.lower()
  if any(n == s or n.startswith(s) for s in SKIP_TEX): return None
  if n.startswith('{'): return 'alpha'
  if n.startswith('!') or n.startswith('water'): return 'water'
  return 'opaque'

# ---------- caras → triángulos ----------
render = []  # (verts(n,3) en unidades, s, t, texidx, lmuv, kind, solid)
col = []
lm_imgs = []
for mi, (kind, e, org) in models.items():
  if kind == 'zone': continue
  mins, maxs, _, *rest = MD[mi][0:3], MD[mi][3:6], MD[mi][6:9]
  ff, nf = MD[mi][-2], MD[mi][-1]
  ent_off = np.array(org) if kind != 'world' else np.zeros(3)
  rendermode = int(e.get('rendermode', 0) or 0); renderamt = int(e.get('renderamt', 255) or 255)
  for fi in range(ff, ff + nf):
    plane, side, fe, ne, tinf, s0, s1, s2, s3, lofs = F[fi]
    idx = []
    for k in range(fe, fe + ne):
      se = SE[k]; idx.append(E[se][0] if se >= 0 else E[-se][1])
    P = V[idx].astype(np.float64) + ent_off
    ti = TI[tinf]; S = np.array(ti[0:4]); T = np.array(ti[4:8]); mt = MT[ti[8]]; flags = ti[9]
    k = tex_kind(mt['name'])
    if k is None: continue
    if kind == 'visual' and rendermode in (2, 5) and renderamt < 30: continue  # invisible
    s = P @ S[:3] + S[3]; t = P @ T[:3] + T[3]
    # lightmap de esta cara (solo el estilo 0)
    lmu = None
    if lofs >= 0 and s0 != 255 and not (flags & 1):
      mn_s, mx_s = math.floor(s.min() / 16), math.ceil(s.max() / 16); mn_t, mx_t = math.floor(t.min() / 16), math.ceil(t.max() / 16)
      w, h = mx_s - mn_s + 1, mx_t - mn_t + 1
      if 0 < w <= 64 and 0 < h <= 64 and lofs + w * h * 3 <= len(LM):
        img = np.frombuffer(LM[lofs:lofs + w * h * 3], np.uint8).reshape(h, w, 3)
        lm_imgs.append(img); li = len(lm_imgs) - 1
        lmu = (li, s / 16 - mn_s + 0.5, t / 16 - mn_t + 0.5)
    solid = kind != 'visual' and k != 'water'
    if solid:
      for j in range(1, len(P) - 1): col.append(tr(np.stack([P[0], P[j + 1], P[j]])))  # Quake: horario visto de frente → invertir
    render.append((P, s / max(1, mt['w']), t / max(1, mt['h']), ti[8], lmu, k))
col = np.array(col)
print(mid, 'caras render', len(render), 'tris colisión', len(col), 'lightmaps', len(lm_imgs))

# ---------- entidades: spawns, sitios, zonas de compra ----------
def ent_box(e):
  m = e.get('model', ''); k = int(m[1:]); mn = np.array(MD[k][0:3]); mx = np.array(MD[k][3:6])
  a, b = tr(mn), tr(mx); return [float(min(a[0], b[0])), float(min(a[2], b[2])), float(max(a[0], b[0])), float(max(a[2], b[2]))]
spawns = {'T': [], 'CT': []}
for e in ents:
  cl = e.get('classname')
  if cl in ('info_player_start', 'info_player_deathmatch'):
    o = np.array([float(x) for x in e['origin'].split()]); ang = float((e.get('angles', '0 0 0').split() + ['0', '0'])[1]) if 'angles' in e else float(e.get('angle', 0) or 0)
    o[2] -= 36  # el origen del jugador está a la mitad de su caja (72 u): los pies, 36 u más abajo
    p = tr(o); yaw = math.radians(ang) - math.pi / 2  # ángulo de Hammer (0 = +X) → yaw del juego (0 = mirar a -z)
    spawns['CT' if cl == 'info_player_start' else 'T'].append([float(p[0]), float(p[1]), float(p[2]), yaw])
zones = {}
bt = [ent_box(e) for e in ents if e.get('classname') == 'func_bomb_target']
bz = [(e, ent_box(e)) for e in ents if e.get('classname') == 'func_buyzone']
# A = el sitio más cercano a la base CT (así es en Dust II y en Mirage)
ctc = np.mean([[p[0], p[2]] for p in spawns['CT']], 0) if spawns['CT'] else np.zeros(2)
if len(bt) >= 2:
  bt.sort(key=lambda r: np.hypot((r[0] + r[2]) / 2 - ctc[0], (r[1] + r[3]) / 2 - ctc[1]))
  zones['A'], zones['B'] = bt[0], bt[1]
for e, r in bz:
  team = int(e.get('team', 0) or 0)
  if team == 2: zones['CT'] = r
  elif team == 1: zones['T'] = r
  else:  # sin equipo: el que esté más cerca de los spawns de cada uno
    c = np.array([(r[0] + r[2]) / 2, (r[1] + r[3]) / 2])
    dT = min((np.hypot(c[0] - p[0], c[1] - p[2]) for p in spawns['T']), default=1e9); dC = min((np.hypot(c[0] - p[0], c[1] - p[2]) for p in spawns['CT']), default=1e9)
    zones['T' if dT < dC else 'CT'] = r
print('zonas', {k: [round(x, 1) for x in v] for k, v in zones.items()}, 'spawns', {k: len(v) for k, v in spawns.items()})
os.makedirs('/tmp/ls', exist_ok=True)
np.savez_compressed(f'/tmp/ls/{mid}_col.npz', col=col)
json.dump({'zones': zones, 'spawns': spawns}, open(f'/tmp/ls/{mid}_col_ents.json', 'w'))
subprocess.run(['python3', 'import_map.py', mid, f'/tmp/ls/{mid}_col.npz'], check=True)
info = json.load(open(f'../maps/{mid}.json')); off = np.array(info['origin'])

# ---------- paredes invisibles del mapa (clip): en GoldSrc no tienen caras, solo están en el hull del jugador ----------
from bsp import gs_contents
def player_clips():
  N, cell, L = info['n'], info['cell'], info['layers']
  im = np.array(Image.open(f'../maps/{mid}.png')).astype(np.int32)
  CLS = np.stack([im[2 * l * N:(2 * l + 1) * N, :, 0] for l in range(L)])
  TOP = np.stack([((im[2 * l * N:(2 * l + 1) * N, :, 1] << 8) | im[2 * l * N:(2 * l + 1) * N, :, 2]) / 100 - 2 for l in range(L)])
  BOT = np.stack([((im[(2 * l + 1) * N:(2 * l + 2) * N, :, 1] << 8) | im[(2 * l + 1) * N:(2 * l + 2) * N, :, 2]) / 100 - 2 for l in range(L)])
  has = CLS > 0; cls = CLS - 1
  marked = 0
  for l in range(L):
    fl = has[l] & (cls[l] == 1)
    zz, xx = np.nonzero(fl); y = TOP[l][zz, xx]
    # ¿hay algo sólido de verdad a menos de 16 u (0,41 m) a la altura del cuerpo? (el hull 1 está inflado 16 u)
    near = np.zeros(len(zz), bool); R = int(math.ceil(0.43 / cell))
    for dz in range(-R, R + 1):
      for dx in range(-R, R + 1):
        z2 = np.clip(zz + dz, 0, N - 1); x2 = np.clip(xx + dx, 0, N - 1)
        for l2 in range(L):
          h2 = has[l2][z2, x2]; t2 = TOP[l2][z2, x2]; b2 = BOT[l2][z2, x2]
          near |= h2 & (b2 < y + 1.9) & (t2 > y + 0.6)
    # origen del jugador (centro de la caja de 72 u) en coordenadas del .bsp
    X = (xx + 0.5) * cell - off[0]; Zg = (zz + 0.5) * cell - off[2]; Yg = y - off[1]
    # el piso del hull puede estar unas unidades más arriba que el dibujado (hasta un escalón: 18 u)
    clip = ~near
    for dzu in (38, 46, 54):
      pts = np.stack([X / U, -Zg / U, Yg / U + dzu], 1)
      clip &= gs_contents(B, 1, pts) == -2
    cz, cx = zz[clip], xx[clip]
    TOP[l][cz, cx] = TOP[l][cz, cx] + 4.0; cls[l][cz, cx] = 3; marked += int(clip.sum())
  for l in range(L):
    t = np.clip(np.round((TOP[l] + 2) * 100), 0, 65535).astype(np.int32)
    im[2 * l * N:(2 * l + 1) * N, :, 0] = np.where(has[l], cls[l] + 1, 0); im[2 * l * N:(2 * l + 1) * N, :, 1] = t >> 8; im[2 * l * N:(2 * l + 1) * N, :, 2] = t & 255
  Image.fromarray(im.astype(np.uint8), 'RGB').save(f'../maps/{mid}.png', optimize=True)
  print('clip del jugador: celdas de piso bloqueadas', marked)
player_clips()

# ---------- atlas de texturas (con 2 px de borde repetido para el filtrado) ----------
used = sorted({r[3] for r in render})
pad = 2
tiles = {}
items = sorted(used, key=lambda i: -MT[i]['h'])
AW = 2048; x = y = rowh = 0
for i in items:
  w, h = MT[i]['w'], MT[i]['h']
  if x + w + pad * 2 > AW: x = 0; y += rowh; rowh = 0
  tiles[i] = (x + pad, y + pad, w, h); x += w + pad * 2; rowh = max(rowh, h + pad * 2)
AH = 1 << math.ceil(math.log2(y + rowh))
atlas = np.zeros((AH, AW, 4), np.uint8)
for i in items:
  m = MT[i]; px, pal = m['data']; w, h = m['w'], m['h']
  idx = np.frombuffer(px, np.uint8).reshape(h, w); pal = np.frombuffer(pal, np.uint8).reshape(256, 3)
  rgb = pal[idx]; a = np.full((h, w, 1), 255, np.uint8)
  if m['name'].startswith('{'): a[idx == 255] = 0
  img = np.concatenate([rgb, a], 2)
  big = np.pad(img, ((pad, pad), (pad, pad), (0, 0)), mode='wrap')
  X, Y = tiles[i][0] - pad, tiles[i][1] - pad
  atlas[Y:Y + h + pad * 2, X:X + w + pad * 2] = big
Image.fromarray(atlas, 'RGBA').save(f'../maps/{mid}_tex.webp', quality=90, method=6)

# ---------- atlas de lightmaps ----------
LMW = 1024; lx = ly = lrow = 0; lpos = []
order = sorted(range(len(lm_imgs)), key=lambda i: -lm_imgs[i].shape[0]); lpos = [None] * len(lm_imgs)
for i in order:
  h, w = lm_imgs[i].shape[:2]
  if lx + w + 2 > LMW: lx = 0; ly += lrow; lrow = 0
  lpos[i] = (lx + 1, ly + 1); lx += w + 2; lrow = max(lrow, h + 2)
LMH = 1 << math.ceil(math.log2(ly + lrow))
lmA = np.full((LMH, LMW, 3), 0, np.uint8)
for i, img in enumerate(lm_imgs):
  X, Y = lpos[i]; h, w = img.shape[:2]
  lmA[Y - 1:Y + h + 1, X - 1:X + w + 1] = np.pad(img, ((1, 1), (1, 1), (0, 0)), mode='edge')
Image.fromarray(lmA, 'RGB').save(f'../maps/{mid}_lm.webp', quality=92, method=6)

# ---------- malla de render: por grupo (opaco / alpha / agua) ----------
# vértice: pos (u16 cm ×3) | uv de textura (f32 ×2, en repeticiones) | tile (u16) | uv del lightmap (u16 ×2, /65535)
groups = {'opaque': [], 'alpha': [], 'water': []}
for P, s, t, texi, lmu, k in render:
  W3 = tr(P) + off
  for j in range(1, len(P) - 1):
    tri = [0, j, j + 1]
    for q in tri:
      lu = lv = 0
      if lmu is not None:
        li, ls, lt = lmu; X, Y = lpos[li]; lu = (X + ls[q]) / LMW; lv = (Y + lt[q]) / LMH
      groups[k].append((W3[q], s[q], t[q], used.index(texi), lu, lv))
parts = []; blobs = []
for k, vs in groups.items():
  if not vs: continue
  n = len(vs)
  pos = np.clip(np.round(np.array([v[0] for v in vs]) * 100), 0, 65535).astype('<u2')
  uv = np.array([[v[1], v[2]] for v in vs], '<f4')
  tl = np.array([v[3] for v in vs], '<u2')
  lm = np.clip(np.round(np.array([[v[4], v[5]] for v in vs]) * 65535), 0, 65535).astype('<u2')
  blob = pos.tobytes() + uv.tobytes() + tl.tobytes() + lm.tobytes()
  blobs.append(blob); parts.append({'kind': k, 'verts': n})
open(f'../maps/{mid}.bin', 'wb').write(b''.join(blobs))
info['format'] = 'spans'; info['render'] = 'bsp'; info['parts'] = parts
info['atlas'] = {'tex': f'{mid}_tex.webp', 'w': AW, 'h': AH, 'tiles': [[tiles[i][0], tiles[i][1], tiles[i][2], tiles[i][3]] for i in used], 'names': [MT[i]['name'] for i in used], 'lm': f'{mid}_lm.webp', 'lmw': LMW, 'lmh': LMH}
info['sky'] = next((e.get('skyname') for e in ents if e.get('classname') == 'worldspawn'), None)
json.dump(info, open(f'../maps/{mid}.json', 'w'))
print('render', {p['kind']: p['verts'] // 3 for p in parts}, 'atlas', AW, AH, 'lm', LMW, LMH, 'bin MB', round(sum(len(b) for b in blobs) / 1e6, 2))
