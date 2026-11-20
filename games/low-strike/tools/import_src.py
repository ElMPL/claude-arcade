"""Importa un mapa de Counter-Strike: Source (.bsp versión 19/20) tal como viene:
 - colisión: pinceles sólidos del mundo y clip del jugador (cascos convexos) + caras de entidades sólidas + props estáticos sólidos
 - render: caras y desplazamientos con sus texturas (VTF de los VPK y del pakfile), lightmap original, y props estáticos
 - entidades: spawns, sitios de bomba, zonas de compra, escaleras y rompibles
Se deja afuera la caja del cielo 3D (sky_camera).

Uso: python3 import_src.py <id> <mapa.bsp> <carpeta de CS:Source (con cstrike/ y hl2/)>     (desde tools/)
"""
import sys, os, json, math, struct, subprocess, numpy as np
from PIL import Image
from bsp import BSP, CONTENTS_SOLID, CONTENTS_WINDOW, CONTENTS_GRATE, CONTENTS_PLAYERCLIP
from srcfs import FS, material, texture
from srcmdl import load_prop
from scipy.spatial import ConvexHull

mid, path, root = sys.argv[1], sys.argv[2], sys.argv[3]
U = 0.0254
B = BSP(path)
fs = FS([f'{root}/cstrike/cstrike_pak_dir.vpk', f'{root}/hl2/hl2_textures_dir.vpk', f'{root}/hl2/hl2_misc_dir.vpk'], B.pak())
V = B.verts(); E = B.edges(); SE = B.surfedges(); TI = B.texinfo(); TD = B.texdata(); TN = B.texnames(); F = B.faces(); MD = B.models(); ents = B.entities()
PL = B.planes()
LM = B.lump(8) or B.lump(53)
def tr(p): p = np.asarray(p, np.float64); return np.stack([p[..., 0] * U, p[..., 2] * U, -p[..., 1] * U], -1)

# ---------- árbol BSP: hojas, áreas y la caja del cielo 3D ----------
NODES = [struct.unpack_from('<iii6hHHhh', B.lump(5), k) for k in range(0, len(B.lump(5)), 32)]
LV = B.lump(10); LEAFSZ = 32 if B.version >= 20 else 56
LEAVES = [struct.unpack_from('<ihh6hHHHHh', LV, k) for k in range(0, len(LV) - LEAFSZ + 1, LEAFSZ)]
LFACES = np.frombuffer(B.lump(16), np.uint16); LBRUSH = np.frombuffer(B.lump(17), np.uint16)
def leaf_at(p, node=0):
  while node >= 0:
    pn, c0, c1 = NODES[node][0], NODES[node][1], NODES[node][2]
    nx, ny, nz, dist, _ = PL[pn]
    node = c0 if nx * p[0] + ny * p[1] + nz * p[2] - dist >= 0 else c1
  return -1 - node
def leaves_under(node):
  out = []; st = [node]
  while st:
    n = st.pop()
    if n < 0: out.append(-1 - n); continue
    st += [NODES[n][1], NODES[n][2]]
  return out
area_of = lambda li: (LEAVES[li][2] & 0x1ff)
sky_area = None
for e in ents:
  if e.get('classname') == 'sky_camera':
    o = [float(x) for x in e['origin'].split()]; sky_area = area_of(leaf_at(o))
skip_faces, skip_brushes = set(), set()
SKYB = None
if sky_area is not None:
  ls_ = [L for li, L in enumerate(LEAVES) if area_of(li) == sky_area and not L[0] & 1]
  SKYB = (np.min([L[3:6] for L in ls_], 0) - 96, np.max([L[6:9] for L in ls_], 0) + 96)
  print('cielo 3D', SKYB)
def in_sky(p): return SKYB is not None and bool(np.all(np.asarray(p) > SKYB[0]) and np.all(np.asarray(p) < SKYB[1]))
if sky_area is not None:
  for li, L in enumerate(LEAVES):
    if area_of(li) == sky_area and li != 0:
      ff, nf, fb, nb = L[9], L[10], L[11], L[12]
      skip_faces.update(LFACES[ff:ff + nf].tolist()); skip_brushes.update(LBRUSH[fb:fb + nb].tolist())
world_leaves = leaves_under(MD[0][9])
world_brushes = set()
for li in world_leaves:
  L = LEAVES[li]; world_brushes.update(LBRUSH[L[11]:L[11] + L[12]].tolist())
world_brushes -= skip_brushes
print('caras salteadas (cielo 3D)', len(skip_faces), 'pinceles mundo', len(world_brushes))

# ---------- materiales ----------
SURF_SKIP = 0x2 | 0x4 | 0x40 | 0x80 | 0x100 | 0x200  # sky2d, sky, trigger, nodraw, hint, skip
UNLIT = set()  # materiales que brillan solos (no llevan lightmap)
MATS = {}  # nombre → (kind, imagen PIL o None)
def mat_of(name):
  if name in MATS: return MATS[name]
  n = name.lower()
  if n.startswith('tools/'): MATS[name] = (None, None); return MATS[name]
  m = material(fs, n) or {}
  if m.get('nodraw') or m.get('sky'): MATS[name] = (None, None); return MATS[name]
  img = texture(fs, m.get('base'), 256)
  # add = luz/brillo (suma, sin oscurecer); glass = vidrio transparente de verdad (antes se recortaba y quedaba invisible
  # pero sólido: paredes invisibles); alpha = recorte (rejas, plantas)
  kind = 'water' if m.get('water') else 'add' if m.get('additive') else 'glass' if m.get('translucent') else 'alpha' if m.get('alphatest') else 'opaque'
  if m.get('unlit'): UNLIT.add(name)
  if img is None: img = Image.new('RGBA', (8, 8), (128, 128, 128, 255))
  if kind == 'water': img = Image.new('RGBA', (8, 8), (58, 84, 80, 170))  # agua: un color translúcido (la textura de Source es un mapa de distorsión, se veía negra)
  if kind == 'opaque': img = img.convert('RGB').convert('RGBA')
  MATS[name] = (kind, img); return MATS[name]

# ---------- modelos de pincel (entidades) ----------
SOLID_ENT = {'func_wall', 'func_brush', 'func_breakable', 'func_breakable_surf', 'func_wall_toggle', 'func_rotating', 'func_movelinear', 'func_physbox', 'func_lod'}
DOORS = {'func_door', 'prop_door_rotating'}  # puertas que se deslizan: quedan abiertas (no se dibujan ni chocan)
# func_door_rotating: puertas que giran (Nuke): se dibujan y se abren/cierran con E; van como rompibles con bisagra
VISUAL_ENT = {'func_illusionary'}
models = {0: ('world', {}, (0, 0, 0))}
RAILS = []
ALPHA_BOX = []  # rejas y barandas de pincel (las balas las atraviesan)
DOOR_M = {}
for e in ents:
  m = e.get('model', '')
  if not m.startswith('*'): continue
  k = int(m[1:]); cl = e.get('classname', '')
  org = tuple(float(x) for x in e.get('origin', '0 0 0').split())
  if cl in DOORS: models[k] = ('zone', e, org)
  elif cl == 'func_door_rotating': models[k] = ('brk', e, org); DOOR_M[k] = e
  elif cl == 'func_rotating' and not e.get('targetname', '').startswith('fan'): models[k] = ('zone', e, org)  # haces de las sirenas: no chocan
  elif cl in ('func_breakable', 'func_breakable_surf'): models[k] = ('brk', e, org)
  elif cl in SOLID_ENT: models[k] = ('solid' if not (cl == 'func_brush' and e.get('Solidity') == '1') else 'visual', e, org)
  elif cl in VISUAL_ENT: models[k] = ('visual', e, org)
  else: models[k] = ('zone', e, org)

# ---------- caras → triángulos ----------
render = []   # (P en unidades (n,3), s, t (normalizados por tamaño de textura), material, lightmap, kind, rompible, tris idx)
col = []
colsrc = []
def tag(lbl): colsrc.extend([lbl] * (len(col) - len(colsrc)))
lm_imgs = []
DI = B.dispinfo(); DV = B.dispverts()
def face_poly(f):
  fe, ne = f[3], f[4]
  return [E[SE[k]][0] if SE[k] >= 0 else E[-SE[k]][1] for k in range(fe, fe + ne)]
def luxels(f, ofs, w, h):
  n = w * h
  if ofs < 0 or ofs + n * 4 > len(LM): return None
  a = np.frombuffer(LM, np.uint8, n * 4, ofs).reshape(h, w, 4).astype(np.float64)
  e = a[..., 3].astype(np.int8).astype(np.float64)
  c = a[..., :3] * np.power(2.0, e)[..., None] / 255.0
  return np.clip(np.power(np.clip(c, 0, 8), 1 / 2.2) * 0.5, 0, 1)  # gamma; 0.5 = margen para sobre-exposición (el shader ×2)
for mi, (kind, e, org) in models.items():
  if kind == 'zone': continue
  ff, nf = MD[mi][10], MD[mi][11]
  off3 = np.array(org) if kind != 'world' else np.zeros(3)
  for fi in range(ff, ff + nf):
    if fi in skip_faces: continue
    f = F[fi]
    tinf, disp, lofs = f[5], f[6], f[12]
    if tinf < 0: continue
    ti = TI[tinf]; flags = ti[16]
    if flags & SURF_SKIP: continue
    td = TD[ti[17]]; name = TN[td[3]]; tw, th = max(1, td[4]), max(1, td[5])
    k, img = mat_of(name)
    nl_ = name.lower()
    colf = k != 'water' and (k is not None or (nl_.startswith('tools/') and not any(w in nl_ for w in ('trigger', 'sky', 'hint', 'skip', 'areaportal', 'occluder', 'fog', 'light'))))
    S = np.array(ti[0:4]); T = np.array(ti[4:8]); LS = np.array(ti[8:12]); LT = np.array(ti[12:16])
    lmmins, lmsize = f[14:16], f[16:18]
    lw, lh = lmsize[0] + 1, lmsize[1] + 1
    base = V[face_poly(f)].astype(np.float64) + off3
    if in_sky(base.mean(0)): continue
    if disp >= 0 and len(base) == 4:
      d = DI[disp]; p2 = d['power']; n = (1 << p2) + 1
      st = np.array(d['start']); i0 = int(np.argmin(((base - st) ** 2).sum(1))); C = np.roll(base, -i0, 0)
      gi = np.arange(n) / (n - 1)
      # grilla: filas de C0→C1 (lado 0-1) interpoladas hacia C3→C2
      A0 = C[0][None] + (C[1] - C[0])[None] * gi[:, None]; A1 = C[3][None] + (C[2] - C[3])[None] * gi[:, None]
      G = A0[:, None] + (A1 - A0)[:, None] * gi[None, :, None]   # [fila][col]
      dv = DV[d['vert']:d['vert'] + n * n]
      Gd = G.reshape(-1, 3) + dv[:, :3] * dv[:, 3:4]
      Bp = G.reshape(-1, 3)
      tri = []
      for j in range(n - 1):
        for i in range(n - 1):
          a, b, c, dd = j * n + i, j * n + i + 1, (j + 1) * n + i + 1, (j + 1) * n + i
          if (i + j) % 2 == 0: tri += [(a, b, c), (a, c, dd)]
          else: tri += [(a, b, dd), (b, c, dd)]
      tri = np.array(tri)
      P = Gd; Pb = Bp
    else:
      P = base; Pb = base
      tri = np.array([(0, j, j + 1) for j in range(1, len(P) - 1)])
    N = np.array(PL[f[0]][:3])  # en Source el plano de la cara ya mira hacia su frente (side es informativo)
    cr = np.cross(Pb[tri[:, 1]] - Pb[tri[:, 0]], Pb[tri[:, 2]] - Pb[tri[:, 0]]) @ N
    if cr.sum() < 0: tri = tri[:, [0, 2, 1]]   # col: antihorario visto de frente (normal hacia afuera)
    PL_ = Pb - off3  # entidades con origen: texturas y lightmap van en coordenadas locales del modelo
    s = PL_ @ S[:3] + S[3]; t = PL_ @ T[:3] + T[3]
    lmu = None
    if lofs >= 0 and 0 < lw <= 260 and 0 < lh <= 260 and not (flags & 0x4):
      img_l = luxels(f, lofs, lw, lh)
      if img_l is not None:
        lm_imgs.append(img_l); li = len(lm_imgs) - 1
        ls = PL_ @ LS[:3] + LS[3] - lmmins[0] + 0.5; lt = PL_ @ LT[:3] + LT[3] - lmmins[1] + 0.5
        lmu = (li, ls, lt)
    if kind in ('world', 'solid', 'brk') and colf:  # el mundo: sus caras visibles (el compilador ya sacó las tapadas)
      for a, b, c in tri: col.append(tr(np.stack([P[a], P[b], P[c]])))
      tag(f'{kind}:{name}' + (f':disp' if disp >= 0 else ''))
    if k == 'alpha' and kind in ('world', 'solid'):
      q_ = tr(P); ALPHA_BOX.append((q_.min(0), q_.max(0)))
    if k is None: continue
    render.append((P, s / tw, t / th, name, lmu, k, mi if kind == 'brk' else -1, tri))
print(mid, 'caras render', len(render), 'materiales', len(MATS), 'lightmaps', len(lm_imgs))

# ---------- pinceles del mundo: sólidos y clip del jugador → cascos convexos ----------
BR = B.brushes(); BS = B.brushsides()
def brush_tris(bi):
  fs_, ns, _ = BR[bi]
  pls = []
  for k in range(fs_, fs_ + ns):
    pn = BS[k][0]; nx, ny, nz, dd, _ = PL[pn]; pls.append((np.array([nx, ny, nz]), dd))
  pts = []
  for a in range(len(pls)):
    for b in range(a + 1, len(pls)):
      for c in range(b + 1, len(pls)):
        M = np.array([pls[a][0], pls[b][0], pls[c][0]])
        if abs(np.linalg.det(M)) < 1e-6: continue
        p = np.linalg.solve(M, np.array([pls[a][1], pls[b][1], pls[c][1]]))
        if all(n @ p - dd <= 0.05 for n, dd in pls): pts.append(p)
  if len(pts) < 4: return []
  if in_sky(np.mean(pts, 0)): return []
  pts = np.unique(np.round(np.array(pts), 3), axis=0)
  if len(pts) < 4: return []
  try: h = ConvexHull(pts)
  except Exception: return []
  out = []
  ctr = pts.mean(0)
  for s_ in h.simplices:
    a, b, c = pts[s_]
    if np.cross(b - a, c - a) @ (a - ctr) < 0: b, c = c, b  # normal hacia afuera
    out.append(tr(np.stack([a, b, c])))
  return out
# solo los pinceles que no tienen caras dibujadas: clip del jugador y paredes invisibles (todas sus caras de herramientas)
def side_name(k):
  ti_ = BS[k][1]
  if ti_ < 0: return 'tools/toolsnodraw', 0
  return TN[TD[TI[ti_][17]][3]].lower(), TI[ti_][16]
nclip = ninv = nskip = nrail = 0
PASS = []  # cajas que frenan al jugador pero no a las balas (clips)
# cajas de los rompibles (en el sistema de tr, sin offset)
BRKBOX = []
for k_, (kd, e_, org_) in models.items():
  if kd == 'brk' and k_ not in DOOR_M:
    a_ = tr(np.array(MD[k_][0:3]) + org_); b_ = tr(np.array(MD[k_][3:6]) + org_); BRKBOX.append((np.minimum(a_, b_), np.maximum(a_, b_)))
for bi in sorted(world_brushes):
  cont = BR[bi][2]
  if cont & CONTENTS_PLAYERCLIP and not cont & CONTENTS_SOLID:
    t_ = brush_tris(bi)
    if t_ and BRKBOX and os.environ.get('CLIPHOLES'):  # sólo Mirage: en Nuke los clips sobre las claraboyas van
      q = np.concatenate(t_).reshape(-1, 3); lo3, hi3 = q.min(0), q.max(0)
      if any(np.all(lo3 < b[1] + 0.3) and np.all(hi3 > b[0] - 0.3) for b in BRKBOX): nskip += 1; continue  # tapa un pasadizo rompible
    if t_:
      q = np.concatenate(t_).reshape(-1, 3); lo3, hi3 = q.min(0), q.max(0)
      # clip apoyado arriba de una baranda: en Source es para que no te subas, acá era una pared invisible
      if any(abs(lo3[1] - b[1][1]) < 0.35 and lo3[0] < b[1][0] + 0.3 and hi3[0] > b[0][0] - 0.3 and lo3[2] < b[1][2] + 0.3 and hi3[2] > b[0][2] - 0.3 for b in ALPHA_BOX + RAILS):
        nrail += 1; continue
      PASS.append((lo3, hi3))
    col += t_; nclip += 1; tag(f'clip:{bi}'); continue
  if cont & (CONTENTS_SOLID | CONTENTS_WINDOW | CONTENTS_GRATE):
    sides = [side_name(k) for k in range(BR[bi][0], BR[bi][0] + BR[bi][1])]
    if any(fl & 0x6 or 'sky' in n for n, fl in sides): continue
    if all(n.startswith('tools/') or fl & 0x80 for n, fl in sides) and any('invisible' in n or 'clip' in n for n, fl in sides):
      col += brush_tris(bi); ninv += 1; tag(f'inv:{bi}')
print('clip del jugador', nclip, 'paredes invisibles', ninv, 'clips sacados de pasadizos rompibles', nskip, 'clips sobre barandas sacados', nrail)

# ---------- props estáticos ----------
gl = B.lump(35); ngl = struct.unpack_from('<i', gl, 0)[0]; props = []
for i in range(ngl):
  gid, gflags, gver, gofs, glen = struct.unpack_from('<4sHHii', gl, 4 + i * 16)
  if gid != b'prps': continue
  d = B.b[gofs:gofs + glen]; nd = struct.unpack_from('<i', d, 0)[0]
  names = [d[4 + k * 128:4 + k * 128 + 128].split(b'\0')[0].decode('latin1') for k in range(nd)]
  o = 4 + nd * 128; nl = struct.unpack_from('<i', d, o)[0]; o += 4 + nl * 2; npr = struct.unpack_from('<i', d, o)[0]; o += 4
  sz = (len(d) - o) // max(1, npr)
  for k in range(npr):
    q = o + k * sz
    ox, oy, oz, ap, ay, ar = struct.unpack_from('<6f', d, q); ptype, fl_, lc, solid, pflags, skin = struct.unpack_from('<HHHBBi', d, q + 24)
    props.append((names[ptype], (ox, oy, oz), (ap, ay, ar), solid, skin))
# props de entidad (barriles, carros, macetas: prop_physics / prop_dynamic): en el juego quedan quietos y sólidos
for e in ents:
  if e.get('classname', '').startswith(('prop_physics', 'prop_dynamic')) and e.get('model', '').endswith('.mdl'):
    if e.get('classname', '').startswith('prop_dynamic') and e.get('solid', '6') == '0' and e.get('disableshadows') is None: pass
    o = tuple(float(x) for x in e.get('origin', '0 0 0').split()); a = tuple(float(x) for x in e.get('angles', '0 0 0').split())
    sk = int(e.get('skin', 0) or 0)
    if 'emergency_light' in e['model']: sk = 1  # la sirena prendida
    props.append((e['model'], o, a, 0 if e.get('solid') == '0' else 6, sk))
def rotm(p, y, r):
  p, y, r = map(math.radians, (p, y, r))
  cp, sp, cy, sy, cr, sr = math.cos(p), math.sin(p), math.cos(y), math.sin(y), math.cos(r), math.sin(r)
  # AngleMatrix de Source: columnas = adelante, izquierda, arriba
  return np.array([[cp * cy, sr * sp * cy - cr * sy, cr * sp * cy + sr * sy],
                   [cp * sy, sr * sp * sy + cr * cy, cr * sp * sy - sr * cy],
                   [-sp, sr * cp, cr * cp]])
cache = {}; nprop = 0; ptris = 0; SPIN = []
# luz ambiente de cada hoja (lo que Source usa para iluminar props): color medio del cubo de luz más cercano
AMB_I, AMB_L = B.lump(52), B.lump(56)
def rgbe(b, o):
  r, g, b_, e = struct.unpack_from('<BBBb', b, o); return np.array([r, g, b_], float) * (2.0 ** e) / 255.0
def ambient(p):
  li = leaf_at(p)
  for _ in range(6):  # si cae dentro de algo sólido, se sube de a 16 unidades
    if not LEAVES[li][0] & 1: break
    p = p + np.array([0, 0, 16]); li = leaf_at(p)
  try:
    if AMB_I:
      n, first = struct.unpack_from('<HH', AMB_I, li * 4)
      if n == 0: return None
      c = [rgbe(AMB_L, (first + k) * 28 + q * 4) for k in range(n) for q in range(5)]  # sin la cara de abajo
    elif len(AMB_L) >= (li + 1) * 24: c = [rgbe(AMB_L, li * 24 + q * 4) for q in range(5)]
    else: return None
  except struct.error: return None
  c = np.mean(c, 0)
  return np.power(np.clip(c * AMB_K, 0, 8), 1 / 2.2) * 0.5
# escala: hay mapas (los portados de CS:GO) con la luz ambiente en otra escala; se iguala la mediana de los props
# con la mediana de los lightmaps del mundo
AMB_K = 1.0
_w = np.median([float(np.mean(x)) for x in lm_imgs]) if lm_imgs else 0.4
_a = [ambient(np.array(o_) + np.array([0, 0, 40])) for _, o_, _, _, _ in props[::max(1, len(props) // 300)]]
_a = [float(np.mean(x)) for x in _a if x is not None]
if _a and np.median(_a) > 1e-4:
  AMB_K = float((_w / np.median(_a)) ** 2.2)
print('luz ambiente: escala', round(AMB_K, 3), 'mediana mundo', round(float(_w), 3))
PROP_LMS = {}  # color cuantizado → índice de bloque de lightmap
# luz del piso: el lightmap del suelo justo debajo de cada prop (lo más parecido a lo que lo rodea)
FL = []  # (x0,y0,x1,y1, zmax, triángulos, ls, lt, li)
for r in render:
  P_, lmu_, tri_ = r[0], r[4], r[7]
  if r[6] != -1 or not isinstance(lmu_, tuple) or lmu_[0] == 'flat': continue
  for a, b, c in tri_:
    A_, B_, C_ = P_[a], P_[b], P_[c]; n_ = np.cross(B_ - A_, C_ - A_); ln = np.linalg.norm(n_)
    if ln < 1e-6 or abs(n_[2]) / ln < 0.6: continue
    FL.append((min(A_[0], B_[0], C_[0]), min(A_[1], B_[1], C_[1]), max(A_[0], B_[0], C_[0]), max(A_[1], B_[1], C_[1]), A_, B_, C_, (lmu_[0], lmu_[1][[a, b, c]], lmu_[2][[a, b, c]])))
FLA = np.array([f[:4] for f in FL]) if FL else np.zeros((0, 4))
def floor_light(o):
  if not len(FLA): return None
  m_ = np.where((FLA[:, 0] <= o[0]) & (FLA[:, 2] >= o[0]) & (FLA[:, 1] <= o[1]) & (FLA[:, 3] >= o[1]))[0]
  best = None
  for i in m_:
    _, _, _, _, A_, B_, C_, (li, ls_, lt_) = FL[i]
    v0, v1, v2 = B_[:2] - A_[:2], C_[:2] - A_[:2], np.array(o[:2]) - A_[:2]
    den = v0[0] * v1[1] - v1[0] * v0[1]
    if abs(den) < 1e-9: continue
    u = (v2[0] * v1[1] - v1[0] * v2[1]) / den; v = (v0[0] * v2[1] - v2[0] * v0[1]) / den
    if u < -0.01 or v < -0.01 or u + v > 1.01: continue
    z = A_[2] + u * (B_[2] - A_[2]) + v * (C_[2] - A_[2])
    if z > o[2] + 24 or (best is not None and z <= best[0]): continue
    img = lm_imgs[li]; x_ = ls_[0] + u * (ls_[1] - ls_[0]) + v * (ls_[2] - ls_[0]); y_ = lt_[0] + u * (lt_[1] - lt_[0]) + v * (lt_[2] - lt_[0])
    yy, xx = int(np.clip(y_, 0, img.shape[0] - 1)), int(np.clip(x_, 0, img.shape[1] - 1))
    best = (z, img[max(0, yy - 1):yy + 2, max(0, xx - 1):xx + 2].reshape(-1, 3).mean(0))
  return None if best is None else best[1]
for PIDX, (name, org, ang, solid, skin) in enumerate(props):
  key = (name, skin)
  if key not in cache:
    m0 = load_prop(fs, name, skin)
    # props de CS:GO con muchos triángulos: se usa el LOD 1 (lo que el juego muestra a media distancia)
    m1 = load_prop(fs, name, skin, 1) if m0 is not None and len(m0['T']) > 400 else None
    cache[key] = m1 if m1 is not None and len(m1['T']) >= 60 else m0
  m = cache[key]
  if m is None: continue
  if in_sky(org): continue
  R = rotm(*ang); P = m['P'] @ R.T + np.array(org)
  T = m['T']; nprop += 1; ptris += len(T)
  # material de cada triángulo
  for mi_ in np.unique(m['M']):
    sel = T[m['M'] == mi_]
    nm = None
    for cand in m['names'][mi_] if mi_ < len(m['names']) else []:
      if fs.get('materials/' + cand + '.vmt') is not None: nm = cand; break
    if nm is None: continue
    k, img = mat_of(nm)
    if k is None: continue
    sp = None
    if 'emergency_lightb' in name: SPIN.append([float(v) for v in tr(np.array(org))]); sp = len(SPIN) - 1  # haz que gira
    if nm in UNLIT or k == 'add': lmk = 'unlit'
    else:
      if 'amb' not in locals() or amb_org != org:
        amb_org = org; o3 = np.array(org, float); rad = float(np.max(np.abs(P[:, :2] - o3[:2]))) + 16
        # el piso justo debajo está en la sombra del propio prop: se mira alrededor y se toma lo más iluminado
        smp = [floor_light(o3 + np.array([rad * math.cos(a_), rad * math.sin(a_), 0])) for a_ in np.arange(8) * math.pi / 4]
        smp = sorted([x for x in smp if x is not None], key=lambda c_: -float(np.mean(c_)))
        amb = np.mean(smp[:max(1, len(smp) // 2)], 0) if smp else None
        if amb is None: amb = ambient(np.array(org) + np.array([0, 0, min(64.0, float(P[:, 2].max() - org[2])) + 8]))
        else: amb = amb * 1.05
      if amb is None: lmk = None
      else:
        q = tuple(np.round(np.clip(amb, 0.1, 1) * 31).astype(int))
        if q not in PROP_LMS: lm_imgs.append(np.tile(np.array(q, float) / 31, (4, 4, 1))); PROP_LMS[q] = len(lm_imgs) - 1
        lmk = ('flat', PROP_LMS[q])
    render.append((P, m['UV'][:, 0], m['UV'][:, 1], nm, lmk, k, -1 if sp is None else -2 - sp, sel))
  # barandas sin colisión propia (en Source las cubre un clip): chocan con su malla
  if not solid and 'railing' in name.lower():
    for a, b, c in T: col.append(tr(np.stack([P[a], P[b], P[c]])))
    for a, b, c in T: col.append(tr(np.stack([P[a], P[c], P[b]])))
    tag(f'rail:{name}#{PIDX}')
  # colisión: la del .phy (piezas convexas, lo que choca de verdad en Source); sin .phy el prop no es sólido,
  # salvo los de caja (solid 2). Así las palmeras chocan sólo en el tronco y los cables/plantas no traban.
  if solid and 'phy' not in m:
    from srcphy import load_phy
    m['phy'] = load_phy(fs.get(name[:-4] + '.phy'))
  if solid and m.get('phy') is not None:
    for a, b, c in m['phy']: col.append(tr(np.stack([R @ a + org, R @ b + org, R @ c + org])))
    tag(f'phy:{name}#{PIDX}')
  elif solid == 2:
    lo3, hi3 = m['P'].min(0), m['P'].max(0)
    bx = np.array([[x, y, z] for x in (lo3[0], hi3[0]) for y in (lo3[1], hi3[1]) for z in (lo3[2], hi3[2])])
    try:
      h = ConvexHull(bx); ctr = bx.mean(0)
      for s_ in h.simplices:
        a, b, c = bx[s_]
        if np.cross(b - a, c - a) @ (a - ctr) < 0: b, c = c, b
        col.append(tr(np.stack([R @ a + org, R @ b + org, R @ c + org])))
    except Exception: pass
    tag(f'box:{name}#{PIDX}')
  if False:
    if 'vol' not in m:  # volumen con signo: si da negativo el modelo viene con la orientación al revés
      Q = m['P']; m['vol'] = float(np.einsum('ij,ij->i', Q[T[:, 0]], np.cross(Q[T[:, 1]], Q[T[:, 2]])).sum())
    TT = T if m['vol'] >= 0 else T[:, [0, 2, 1]]
    for a, b, c in TT: col.append(tr(np.stack([P[a], P[b], P[c]])))
print('props', nprop, 'de', len(props), 'tris', ptris)
col = np.array(col)
# ---------- paredes invisibles: todo lo que no se ve (clips, paredes de herramientas) o es un prop, y que se mete en
# lugares donde la malla de navegación del juego original dice que se camina, se saca entero (esa pieza)
navb = fs.get('maps/' + os.path.basename(path).replace('.bsp', '.nav'))
if navb is None and os.path.exists(path[:-4] + '.nav'): navb = open(path[:-4] + '.nav', 'rb').read()
if navb is not None and len(col):
  from srcnav import load_nav
  _, NAVA = load_nav(navb)
  REMOVABLE = ('clip:', 'inv:')  # sólo lo invisible: los props se ven, así que su colisión queda
  cand = np.array([i for i, sname in enumerate(colsrc) if sname.startswith(REMOVABLE)], int)
  if len(cand):
    CT = col[cand]; cmin = CT.min(1); cmax = CT.max(1)
    G = 1.0; buck = {}
    for j in range(len(cand)):
      for gx in range(int(math.floor(cmin[j, 0] / G)), int(math.floor(cmax[j, 0] / G)) + 1):
        for gz in range(int(math.floor(cmin[j, 2] / G)), int(math.floor(cmax[j, 2] / G)) + 1): buck.setdefault((gx, gz), []).append(j)
    def seg_hits(px, pz, y0, y1, js):
      # triángulos que cortan el segmento vertical (px, y0..y1, pz)
      out = []
      for j in js:
        t_ = CT[j]
        if cmin[j, 1] > y1 or cmax[j, 1] < y0: continue
        a, b, c = t_[0], t_[1], t_[2]
        d0 = (b[0] - a[0]) * (pz - a[2]) - (b[2] - a[2]) * (px - a[0]); d1 = (c[0] - b[0]) * (pz - b[2]) - (c[2] - b[2]) * (px - b[0]); d2 = (a[0] - c[0]) * (pz - c[2]) - (a[2] - c[2]) * (px - c[0])
        if not ((d0 >= 0 and d1 >= 0 and d2 >= 0) or (d0 <= 0 and d1 <= 0 and d2 <= 0)): continue
        n_ = np.cross(b - a, c - a)
        if abs(n_[1]) < 1e-9: out.append(j); continue  # vertical: si el punto cae en su sombra en planta, cuenta
        yy = a[1] - (n_[0] * (px - a[0]) + n_[2] * (pz - a[2])) / n_[1]
        if y0 <= yy <= y1: out.append(j)
      return out
    bad = set(); STEP = 0.35
    for ar in NAVA:
      x0, x1 = sorted([ar['nw'][0], ar['se'][0]]); yy0, yy1 = sorted([ar['nw'][1], ar['se'][1]])
      ins = 10  # un poco hacia adentro: los bordes del área tocan paredes y barandas de verdad
      nx_ = max(1, int((x1 - x0) * U / STEP)); ny_ = max(1, int((yy1 - yy0) * U / STEP))
      for i_ in range(nx_ + 1):
        for k_ in range(ny_ + 1):
          fx, fy = i_ / nx_, k_ / ny_
          X = x0 + (x1 - x0) * fx; Y = yy0 + (yy1 - yy0) * fy
          if x1 - x0 > 2 * ins: X = min(max(X, x0 + ins), x1 - ins)
          if yy1 - yy0 > 2 * ins: Y = min(max(Y, yy0 + ins), yy1 - ins)
          z = (1 - fx) * (1 - fy) * ar['nw'][2] + fx * (1 - fy) * ar['nez'] + fx * fy * ar['se'][2] + (1 - fx) * fy * ar['swz']
          px, py, pz = X * U, z * U, -Y * U
          for j in seg_hits(px, pz, py + 0.5, py + 1.3, buck.get((int(math.floor(px / G)), int(math.floor(pz / G))), [])): bad.add(colsrc[cand[j]])
    if bad:
      keep_ = np.array([sname not in bad for sname in colsrc])
      col = col[keep_]; colsrc = [sname for sname, k_ in zip(colsrc, keep_) if k_]
    from collections import Counter as _C
    print('paredes invisibles sacadas (piezas):', len(bad), _C(b_.split(':')[0] for b_ in bad).most_common(), sorted(bad)[:25])
# recorte: la caja de lo que se dibuja del mundo (las cáscaras de cielo se extienden mucho más allá)
DP = np.concatenate([r[0] for r in render if r[6] == -1 and isinstance(r[4], tuple) and r[4][0] != 'flat'])
lo_, hi_ = tr(DP).min(0) - 1.5, tr(DP).max(0) + 1.5
# mejor: la malla de navegación de los bots (.nav) dice exactamente dónde se puede caminar
navname = 'maps/' + os.path.basename(path).replace('.bsp', '.nav')
nb = fs.get(navname)
if nb is None and os.path.exists(path[:-4] + '.nav'): nb = open(path[:-4] + '.nav', 'rb').read()  # .nav suelto al lado del .bsp
NAV = None
if nb is not None:
  from srcnav import load_nav
  _, NAV = load_nav(nb)
  NP = tr(np.array([a['nw'] for a in NAV] + [a['se'] for a in NAV], float))
  lo_ = np.maximum(lo_, NP.min(0) - np.array([7, 4, 7])); hi_ = np.minimum(hi_, NP.max(0) + np.array([7, 14, 7]))
  print('nav', len(NAV), 'áreas; recorte', lo_.round(1), hi_.round(1))
cc = col.mean(1); keep = np.all((cc > lo_) & (cc < hi_), 1)
col = np.clip(col[keep], lo_, hi_); colsrc = [colsrc[i] for i in np.where(keep)[0]]
json.dump(colsrc, open(f'/tmp/ls/{mid}_colsrc.json', 'w'))
print('tris colisión', len(col), 'caja', lo_.round(1), hi_.round(1))

# ---------- entidades ----------
def ent_box(e):
  k = int(e['model'][1:]); a, b = tr(np.array(MD[k][0:3])), tr(np.array(MD[k][3:6]))
  return [float(min(a[0], b[0])), float(min(a[2], b[2])), float(max(a[0], b[0])), float(max(a[2], b[2]))]
spawns = {'T': [], 'CT': []}
for e in ents:
  cl = e.get('classname')
  if cl in ('info_player_counterterrorist', 'info_player_terrorist'):
    o = np.array([float(x) for x in e['origin'].split()]); ang = float((e.get('angles', '0 0 0').split() + ['0', '0'])[1])
    p = tr(o); yaw = math.radians(ang) - math.pi / 2
    spawns['CT' if 'counter' in cl else 'T'].append([float(p[0]), float(p[1]), float(p[2]), yaw])
zones = {}
bt = [ent_box(e) for e in ents if e.get('classname') == 'func_bomb_target' and e.get('model', '').startswith('*')]
bz = [(e, ent_box(e)) for e in ents if e.get('classname') == 'func_buyzone' and e.get('model', '').startswith('*')]
ctc = np.mean([[p[0], p[2]] for p in spawns['CT']], 0) if spawns['CT'] else np.zeros(2)
names_site = {}
for e in ents:
  if e.get('classname') == 'func_bomb_target' and e.get('targetname'): names_site[e['model']] = e['targetname']
btm = [int(e['model'][1:]) for e in ents if e.get('classname') == 'func_bomb_target' and e.get('model', '').startswith('*')]
SITE_M = {}
if len(bt) >= 2:
  o_ = sorted(range(len(bt)), key=lambda i: np.hypot((bt[i][0] + bt[i][2]) / 2 - ctc[0], (bt[i][1] + bt[i][3]) / 2 - ctc[1]))
  zones['A'], zones['B'] = bt[o_[0]], bt[o_[1]]; SITE_M = {'A': btm[o_[0]], 'B': btm[o_[1]]}
for e, r in bz:
  team = int(e.get('TeamNum', e.get('team', 0)) or 0)
  if team == 2: zones['T'] = r
  elif team == 3: zones['CT'] = r
  else:
    c = np.array([(r[0] + r[2]) / 2, (r[1] + r[3]) / 2])
    dT = min((np.hypot(c[0] - p[0], c[1] - p[2]) for p in spawns['T']), default=1e9); dC = min((np.hypot(c[0] - p[0], c[1] - p[2]) for p in spawns['CT']), default=1e9)
    zones['T' if dT < dC else 'CT'] = r
print('zonas', {k: [round(x, 1) for x in v] for k, v in zones.items()}, 'spawns', {k: len(v) for k, v in spawns.items()})
os.makedirs('/tmp/ls', exist_ok=True)
np.savez_compressed(f'/tmp/ls/{mid}_col.npz', col=col)
json.dump({'zones': zones, 'spawns': spawns}, open(f'/tmp/ls/{mid}_col_ents.json', 'w'))
ext = float(max(hi_[0] - lo_[0], hi_[2] - lo_[2])) + 4
NN = int(min(1536, max(1024, math.ceil(ext / 0.125 / 64) * 64)))
print('grilla', NN, 'celda', round(ext / NN, 3))
subprocess.run(['python3', 'import_map.py', mid, f'/tmp/ls/{mid}_col.npz'], check=True, env={**os.environ, 'N': str(NN), 'STEPK': os.environ.get('STEPK', '0.5'), 'LMAX': os.environ.get('LMAX', '4'), 'SRCMAP': os.environ.get('SRCMAP', '')})
info = json.load(open(f'../maps/{mid}.json')); off = np.array(info['origin'])

# ---------- atlas de texturas ----------
used = sorted({r[3] for r in render})
pad = 2; AW = 4096
for cap in (256, 192, 128, 96, 64):
  for n in used:
    im = MATS[n][1]
    if max(im.size) > cap: MATS[n] = (MATS[n][0], im.resize((max(4, im.size[0] * cap // max(im.size)), max(4, im.size[1] * cap // max(im.size))), Image.LANCZOS))
  tiles = {}; items = sorted(used, key=lambda n: -MATS[n][1].size[1]); x = y = rowh = 0
  for n in items:
    w, h = MATS[n][1].size
    if x + w + pad * 2 > AW: x = 0; y += rowh; rowh = 0
    tiles[n] = (x + pad, y + pad, w, h); x += w + pad * 2; rowh = max(rowh, h + pad * 2)
  if y + rowh <= 4096: break
AH = 1 << math.ceil(math.log2(max(4, y + rowh)))
print('atlas: tope', cap, 'px por textura')
atlas = np.zeros((AH, AW, 4), np.uint8)
for n in items:
  img = np.array(MATS[n][1]); w, h = MATS[n][1].size
  big = np.pad(img, ((pad, pad), (pad, pad), (0, 0)), mode='wrap')
  X, Y = tiles[n][0] - pad, tiles[n][1] - pad
  atlas[Y:Y + h + pad * 2, X:X + w + pad * 2] = big
Image.fromarray(atlas, 'RGBA').save(f'../maps/{mid}_tex.webp', quality=85, method=6)

# ---------- atlas de lightmaps (+ un bloque gris para los props) ----------
lm_imgs.append(np.full((4, 4, 3), 0.42)); PROP_LM = len(lm_imgs) - 1
lm_imgs.append(np.full((4, 4, 3), 0.5)); WHITE_LM = len(lm_imgs) - 1  # ×2 en el shader = luz plena (lo que brilla solo)
LMW = 4096; lx = ly = lrow = 0
order = sorted(range(len(lm_imgs)), key=lambda i: -lm_imgs[i].shape[0]); lpos = [None] * len(lm_imgs)
for i in order:
  h, w = lm_imgs[i].shape[:2]
  if lx + w + 4 > LMW: lx = 0; ly += lrow; lrow = 0
  lpos[i] = (lx + 2, ly + 2); lx += w + 4; lrow = max(lrow, h + 4)  # 2 px de borde: sin manchas del vecino
LMH = 1 << math.ceil(math.log2(ly + lrow))
lmA = np.zeros((LMH, LMW, 3), np.uint8)
for i, img in enumerate(lm_imgs):
  X, Y = lpos[i]; h, w = img.shape[:2]
  lmA[Y - 2:Y + h + 2, X - 2:X + w + 2] = np.pad(np.round(img * 255).astype(np.uint8), ((2, 2), (2, 2), (0, 0)), mode='edge')
Image.fromarray(lmA, 'RGB').save(f'../maps/{mid}_lm.webp', lossless=True, method=6)  # sin pérdida: la compresión corría luz y sombra entre caras vecinas

# ---------- malla de render ----------
groups = {}
brk_ids = sorted({r[6] for r in render if r[6] >= 0})
RMIN = np.min([(tr(r[0]) + off).min(0) for r in render], 0)
RS = np.maximum(0, -RMIN + 0.05).round(2)
for P, s, t, nm, lmu, k, bm, tri in render:
  if bm >= 0: k = (k, 'brk', brk_ids.index(bm)); groups.setdefault(k, [])
  elif bm <= -2: k = (k, 'spin', -2 - bm); groups.setdefault(k, [])
  W3 = tr(P) + off + RS; ti_ = used.index(nm)
  if lmu == 'unlit': X, Y = lpos[WHITE_LM]; LU = np.full(len(P), (X + 2) / LMW); LV_ = np.full(len(P), (Y + 2) / LMH)
  elif isinstance(lmu, tuple) and lmu[0] == 'flat': X, Y = lpos[lmu[1]]; LU = np.full(len(P), (X + 2) / LMW); LV_ = np.full(len(P), (Y + 2) / LMH)
  elif lmu is not None: li, ls, lt = lmu; X, Y = lpos[li]; LU = (X + ls) / LMW; LV_ = (Y + lt) / LMH
  else: X, Y = lpos[PROP_LM]; LU = np.full(len(P), (X + 2) / LMW); LV_ = np.full(len(P), (Y + 2) / LMH)
  for a, b, c in tri:
    for q in (a, b, c): groups.setdefault(k, []).append((W3[q], s[q], t[q], ti_, LU[q], LV_[q]))
parts = []; blobs = []
for k, vs in groups.items():
  if not vs: continue
  n = len(vs)
  pos = np.clip(np.round(np.array([v[0] for v in vs]) * 100), 0, 65535).astype('<u2')
  uv = np.array([[v[1], v[2]] for v in vs], '<f4')
  tl = np.array([v[3] for v in vs], '<u2')
  lm = np.clip(np.round(np.array([[v[4], v[5]] for v in vs]) * 65535), 0, 65535).astype('<u2')
  blobs.append(pos.tobytes() + uv.tobytes() + tl.tobytes() + lm.tobytes())
  if not isinstance(k, tuple): parts.append({'kind': k, 'verts': n})
  elif k[1] == 'brk': parts.append({'kind': k[0], 'verts': n, 'brk': k[2]})
  else: parts.append({'kind': k[0], 'verts': n, 'spin': [round(SPIN[k[2]][q] + off[q], 3) for q in range(3)] + [2.4]})  # pivote + vueltas por seg (rad)
import gzip
open(f'../maps/{mid}.bin.gz', 'wb').write(gzip.compress(b''.join(blobs), 9))  # comprimido: el server no comprime y los props pesan
if os.path.exists(f'../maps/{mid}.bin'): os.remove(f'../maps/{mid}.bin')
info['mesh'] = f'{mid}.bin.gz'
info['format'] = 'spans'; info['render'] = 'bsp'; info['parts'] = parts; info['lmScale'] = 2.0
info['atlas'] = {'tex': f'{mid}_tex.webp', 'w': AW, 'h': AH, 'tiles': [[tiles[n][0], tiles[n][1], tiles[n][2], tiles[n][3]] for n in used], 'names': used, 'lm': f'{mid}_lm.webp', 'lmw': LMW, 'lmh': LMH}
def box_of(m):
  o_ = np.array(models[m][2]) if m in models else np.zeros(3)
  a, b = tr(np.array(MD[m][0:3], float) + o_) + off, tr(np.array(MD[m][3:6], float) + o_) + off
  return [round(float(min(a[q], b[q])), 3) for q in range(3)] + [round(float(max(a[q], b[q])), 3) for q in range(3)]
# escaleras: pinceles con CONTENTS_LADDER (CS:S) o entidades func_ladder
LADDER = 0x20000000; lad = []
for bi in world_brushes | set(range(len(BR))):
  if BR[bi][2] & LADDER:
    t_ = brush_tris(bi)
    if t_: q = np.concatenate(t_).reshape(-1, 3) + off; lad.append([round(float(v), 3) for v in list(q.min(0)) + list(q.max(0))])
info['ladders'] = lad
def brk_info(m):
  d = {'box': box_of(m), 'mat': int(next((e for e in ents if e.get('model') == '*%d' % m), {}).get('material', 0) or 0)}
  if m in DOOR_M:  # puerta: bisagra en el origen de la entidad, gira sobre el eje vertical
    h = tr(np.array(models[m][2])) + off; d['door'] = {'hinge': [round(float(v), 3) for v in h], 'ang': float(DOOR_M[m].get('distance', 90) or 90)}
  return d
info['breakables'] = [brk_info(m) for m in brk_ids]
info['sky'] = next((e.get('skyname') for e in ents if e.get('classname') == 'worldspawn'), None)
zy = {k: [box_of(m)[1], box_of(m)[4]] for k, m in SITE_M.items()}
if len(zy) == 2: info['zonesY'] = zy
# cajas que las balas atraviesan: clips y rejas/barandas de pincel (en Source no frenan tiros)
info['pass'] = [[round(float(v), 2) for v in list(np.array(a) + off) + list(np.array(b) + off)] for a, b in PASS + [(b_[0] - 0.05, b_[1] + 0.05) for b_ in ALPHA_BOX] if np.all(np.array(b) - np.array(a) < 60)]
info['source'] = 'css'; info['rshift'] = [float(v) for v in RS]
json.dump(info, open(f'../maps/{mid}.json', 'w'))
print('render', {str(p['kind']): p['verts'] // 3 for p in parts}, 'atlas', AW, AH, 'lm', LMW, LMH, 'bin MB', round(sum(len(b) for b in blobs) / 1e6, 2), 'escaleras', len(lad), 'rompibles', len(brk_ids))
