# Importa los modelos de armas (OBJ, en pulgadas, +z hacia la boca, y arriba, origen en la empuñadura) y los deja
# livianos para el juego: separa las piezas, las simplifica sin perder la forma, les pone color por pieza y
# guarda todo en guns/guns.bin + guns/guns.json (posiciones int16, índices uint16, color por vértice).
# Uso: python3 import_guns.py <carpeta con weapon_*.obj>
import sys, os, json, struct
import numpy as np, trimesh, pyfqmr

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), '..', 'guns')
os.makedirs(OUT, exist_ok=True)
IN2M = 0.0254  # pulgadas a metros (tamaño real)

MAP = {
  'ak47': 'rif_ak47', 'm4a4': 'rif_m4a4', 'm4a1s': 'rif_m4a1_silencer', 'galil': 'rif_galilar', 'famas': 'rif_famas', 'aug': 'rif_aug', 'sg553': 'rif_sg556',
  'awp': 'snip_awp', 'ssg08': 'snip_ssg08', 'g3sg1': 'snip_g3sg1', 'scar20': 'snip_scar20',
  'mac10': 'smg_mac10', 'mp9': 'smg_mp9', 'mp7': 'smg_mp7', 'mp5': 'smg_mp5sd', 'ump': 'smg_ump45', 'p90': 'smg_p90', 'bizon': 'smg_bizon',
  'nova': 'shot_nova', 'xm1014': 'shot_xm1014', 'sawedoff': 'shot_sawedoff', 'mag7': 'shot_mag7', 'm249': 'mach_m249', 'negev': 'mach_negev',
  'glock': 'pist_glock18', 'usp': 'pist_usp_silencer', 'p2000': 'pist_hkp2000', 'p250': 'pist_p250', 'fiveseven': 'pist_fiveseven', 'tec9': 'pist_tec9',
  'cz75': 'pist_cz75a', 'deagle': 'pist_deagle', 'dualies': 'pist_elite', 'r8': 'pist_revolver', 'zeus': 'pist_taser',
}
# cuántos triángulos dejar (aprox.) según el tipo
BUDGET = lambda wid: 6000 if wid in ('glock', 'usp', 'p2000', 'p250', 'fiveseven', 'tec9', 'cz75', 'deagle', 'dualies', 'r8', 'zeus') else 13000 if wid in ('m249', 'negev') else 10000
# colores: cuerpo por defecto y reglas por pieza (centro de la pieza en pulgadas: z0, z1, y0, y1, color)
DARK, POLY, STEEL, MAGC = '#2c2e32', '#1f2023', '#3a3d42', '#232427'
WOOD, WOOD2 = '#8a4a22', '#6c3618'
RULES = {
  'ak47': [(-13, -1.0, -9, 9, WOOD), (-1.3, 1.8, -5, 0.9, WOOD2), (9.0, 15.6, 0.6, 2.25, WOOD), (9.0, 13.6, 2.45, 3.6, WOOD), (3.5, 11, -9, 0.55, '#2a2420')],
  'sawedoff': [(-12, 1, -9, 9, WOOD), (3, 13, -2, 2.4, WOOD)],
  'awp': [(-20, 30, -9, 4.2, '#41613b')], 'ssg08': [(-20, 22, -9, 3.8, '#33414f')],
  'aug': [(-20, 20, -9, 4.8, '#566349')], 'sg553': [(-20, 20, -9, 5.2, '#59553f')], 'famas': [(-20, 20, -9, 9, '#343a3f')],
  'galil': [(-20, -2, -9, 9, '#3b3d35'), (5, 16, 0.5, 5, '#3b3d35')],
  'deagle': [(-3, 12, 0.6, 9, '#9ba1a9')], 'dualies': [(-3, 12, 0.8, 9, '#a3a9b1')], 'r8': [(-3, 1.2, -4, 2.2, WOOD)],
  'fiveseven': [(-3, 9, 1.9, 9, '#4b4f55')], 'p250': [(-3, 9, 1.8, 9, '#3a3d42')],
  'p90': [(-20, 20, -9, 9, '#3a3c3e')], 'mp7': [(-20, 20, -9, 9, '#33363a')],
  'm249': [(-20, 40, -9, 9, '#3a3d36')], 'negev': [(-20, 40, -9, 9, '#3b3d38')],
  'nova': [(-20, -1.5, -9, 9, POLY), (3, 13, -1, 2.5, POLY)],
  'zeus': [(-3, 9, -9, 9, '#1c1c1e'), (2.6, 9, -9, 9, '#d8b12a'), (-3, 9, 2.2, 9, '#d8b12a')],
}

def load(path):
  m = trimesh.load(path, force='mesh', process=False)
  m = trimesh.Trimesh(vertices=m.vertices, faces=m.faces, process=False)  # sin uv ni normales: se unen los vértices repetidos
  m.merge_vertices()
  return m

def color_of(wid, c):
  for z0, z1, y0, y1, col in RULES.get(wid, []):
    if z0 <= c[2] <= z1 and y0 <= c[1] <= y1: return col
  # cargador / empuñadura: piezas que cuelgan por debajo del cajón
  if c[1] < -0.6 and c[2] > 1.2: return MAGC
  if c[1] < 0.5 and -2 < c[2] < 1.4: return POLY
  return DARK

def process(wid, path):
  m = load(path)
  # quita tornillos diminutos y después colorea cada triángulo según dónde está (madera, cargador, cuerpo...)
  keep = []
  for p in m.split(only_watertight=False):
    v = np.asarray(p.vertices); ext = v.max(0) - v.min(0)
    if len(p.faces) and not (ext.max() < 0.1 and len(p.faces) < 40): keep.append(p)
  m = trimesh.util.concatenate(keep)
  cen = m.triangles_center
  cols = np.array([color_of(wid, c) for c in cen])
  groups = {}
  for colhex in np.unique(cols):
    sub = m.submesh([np.nonzero(cols == colhex)[0]], append=True)
    groups[colhex] = [sub]
  total = sum(len(p.faces) for g in groups.values() for p in g)
  V, F, C = [], [], []
  rng = np.random.default_rng(len(wid))
  for colhex, ps in groups.items():
    g = trimesh.util.concatenate(ps)
    v, f = np.asarray(g.vertices, np.float64), np.asarray(g.faces, np.int32)
    tgt = max(24, int(BUDGET(wid) * len(f) / total))
    if tgt < len(f):
      s = pyfqmr.Simplify(); s.setMesh(v, f); s.simplify_mesh(target_count=tgt, aggressiveness=4, preserve_border=True, verbose=False)
      v, f, _ = s.getMesh()
    if len(f) == 0: continue
    col = np.array([int(colhex[i:i + 2], 16) for i in (1, 3, 5)], np.float64)
    F.append(f + sum(len(x) for x in V)); V.append(v); C.append(np.repeat(col[None], len(v), 0))
  V = np.concatenate(V); F = np.concatenate(F); C = np.concatenate(C)
  # a coordenadas del juego: metros, girado 180° en y (la boca hacia -z)
  P = np.stack([-V[:, 0], V[:, 1], -V[:, 2]], 1) * IN2M
  # boca: lo más adelantado; guardamanos: a mitad de camino, por debajo
  front = P[:, 2].min()
  near = P[P[:, 2] < front + 0.02]
  muzzle = [float(-front), float(np.median(near[:, 1]))]
  info = {'muzzle': muzzle, 'tris': int(len(F))}
  return P, F, C.astype(np.uint8), info

out, meta = bytearray(), {}
for wid, name in MAP.items():
  path = os.path.join(SRC, 'weapon_' + name + '.obj')
  if not os.path.exists(path): print('falta', path); continue
  P, F, C, info = process(wid, path)
  if len(P) > 65535: raise SystemExit(wid + ': demasiados vértices')
  sc = float(np.abs(P).max()) / 32000
  q = np.round(P / sc).astype(np.int16)
  while len(out) % 4: out.append(0)
  o = len(out)
  out += q.tobytes(); out += C.tobytes()
  while len(out) % 2: out.append(0)
  oi = len(out); out += F.astype(np.uint16).tobytes()
  meta[wid] = {**info, 'o': o, 'nv': int(len(P)), 'oi': oi, 'ni': int(F.size), 'sc': sc}
  print(wid, info['tris'], 'tris', len(P), 'verts')
open(os.path.join(OUT, 'guns.bin'), 'wb').write(bytes(out))
json.dump(meta, open(os.path.join(OUT, 'guns.json'), 'w'))
print('total', len(out) // 1024, 'KB')
