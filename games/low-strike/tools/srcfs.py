"""Sistema de archivos de Source para los importadores: VPKs de CS:Source (+ hl2) y el pakfile del mapa.
Resuelve materiales (.vmt → $basetexture, include de los 'patch') y decodifica texturas .vtf a PIL."""
import io, re, os, struct, zipfile
import vpk
from srctools.vtf import VTF

class FS:
  def __init__(self, vpk_dirs, pak=None):
    self.v = [vpk.open(p) for p in vpk_dirs if os.path.exists(p)]
    self.idx = []
    for v in self.v: self.idx.append({k.lower(): k for k in v})
    self.pak = {}
    if pak:
      for n in pak.namelist(): self.pak[n.lower().replace('\\', '/')] = (pak, n)
  def get(self, path):
    p = path.lower().replace('\\', '/')
    if p in self.pak: z, n = self.pak[p]; return z.read(n)
    for v, ix in zip(self.v, self.idx):
      if p in ix: return v.get_file(ix[p]).read()
    return None

def parse_vmt(txt):
  """Devuelve (shader, {clave: valor}) de un .vmt (sin anidar más que 'replace'/'insert' de los patch)."""
  txt = re.sub(r'//[^\n]*', '', txt)
  m = re.match(r'\s*"?([^"{\s]+)"?\s*\{', txt)
  shader = m.group(1).lower() if m else ''
  kv = {}
  for k, v in re.findall(r'"?(\$?[A-Za-z0-9_%]+)"?\s+"([^"]*)"', txt): kv.setdefault(k.lower(), v)
  for k, v in re.findall(r'"?(\$[A-Za-z0-9_]+)"?\s+([^\s"{}]+)', txt): kv.setdefault(k.lower(), v)
  return shader, kv

def material(fs, name, depth=0):
  """name: ruta del material sin 'materials/' ni '.vmt'. Devuelve dict con base, shader, alpha, translucent, nodraw."""
  raw = fs.get('materials/' + name.lower().strip('/') + '.vmt')
  if raw is None: return None
  txt = raw.decode('latin1', 'ignore')
  shader, kv = parse_vmt(txt)
  if shader == 'patch' and depth < 4:
    inc = kv.get('include', '')
    base = material(fs, re.sub(r'^materials/', '', inc.replace('\\', '/'), flags=re.I).rsplit('.', 1)[0], depth + 1) or {}
    out = dict(base)
    if '$basetexture' in kv: out['base'] = kv['$basetexture']
    for k in ('$translucent', '$alphatest'):
      if k in kv: out[k[1:]] = kv[k] not in ('0', '')
    return out
  return {'shader': shader, 'base': kv.get('$basetexture'), 'translucent': kv.get('$translucent', '0') not in ('0', ''),
          'alphatest': kv.get('$alphatest', '0') not in ('0', ''), 'bump': '$bumpmap' in kv, 'water': 'water' in shader,
          'nodraw': kv.get('%compilenodraw', '0') not in ('0', '') or shader in ('nodraw',), 'sky': kv.get('%compilesky', '0') not in ('0', '')}

def texture(fs, base, maxsize=256):
  if not base: return None
  raw = fs.get('materials/' + base.lower().replace('\\', '/').strip('/') + '.vtf')
  if raw is None: return None
  try:
    v = VTF.read(io.BytesIO(raw)); v.load()
    im = v.get().to_PIL().convert('RGBA')
  except Exception as e:
    return None
  w, h = im.size; s = min(1.0, maxsize / max(w, h))
  if s < 1: im = im.resize((max(4, int(w * s)), max(4, int(h * s))), 1)
  return im
