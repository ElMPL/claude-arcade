"""Lector mínimo de mapas BSP de Source (versión 19/20/21): caras, desplazamientos, pinceles, entidades y pakfile."""
import struct, numpy as np, re, io, zipfile

class BSP:
  def __init__(self, path):
    self.b = b = open(path, 'rb').read()
    ident, self.version = struct.unpack_from('<4si', b, 0)
    assert ident == b'VBSP', ident
    self.lumps = [struct.unpack_from('<iiii', b, 8 + i * 16) for i in range(64)]  # ofs, len, ver, fourCC
  def lump(self, i):
    o, l, _, _ = self.lumps[i]; return self.b[o:o + l]
  def arr(self, i, fmt):
    d = self.lump(i); sz = struct.calcsize(fmt); return [struct.unpack_from(fmt, d, k) for k in range(0, len(d) - sz + 1, sz)]
  # --- lumps ---
  def entities(self):
    txt = self.lump(0).decode('latin1'); ents = []
    for blk in re.findall(r'\{([^{}]*)\}', txt):
      e = {}
      for k, v in re.findall(r'"([^"]*)"\s+"([^"]*)"', blk): e[k] = v
      ents.append(e)
    return ents
  def planes(self): return self.arr(1, '<3ffi')  # nx ny nz dist type
  def verts(self): return np.frombuffer(self.lump(3), np.float32).reshape(-1, 3)
  def edges(self): return np.frombuffer(self.lump(12), np.uint16).reshape(-1, 2)
  def surfedges(self): return np.frombuffer(self.lump(13), np.int32)
  def texinfo(self): return self.arr(6, '<8f8fii')  # textureVecs, lightmapVecs, flags, texdata
  def texdata(self): return self.arr(2, '<3fiiiii')  # reflectivity, nameStringTableID, w, h, vw, vh
  def texnames(self):
    data = self.lump(43); table = np.frombuffer(self.lump(44), np.int32)
    return [data[o:data.index(b'\0', o)].decode('latin1') for o in table]
  def faces(self):
    # dface_t: planenum(H) side(B) onNode(B) firstedge(i) numedges(h) texinfo(h) dispinfo(h) surfaceFogVolumeID(h) styles(4B) lightofs(i) area(f) lmmins(2i) lmsize(2i) origFace(i) numPrims(H) firstPrim(H) smoothing(I)
    return self.arr(7, '<HBBihhhh4Bif2i2iiHHI')
  def models(self): return self.arr(14, '<3f3f3fiii')  # mins maxs origin headnode firstface numfaces
  def dispinfo(self):
    d = self.lump(26); out = []
    for k in range(0, len(d) - 175, 176):
      sx, sy, sz, dvs, dts, power, minTess, smooth, contents, mapFace = struct.unpack_from('<3fiiiifiH', d, k)
      out.append({'start': (sx, sy, sz), 'vert': dvs, 'power': power, 'face': mapFace})
    return out
  def dispverts(self): return np.frombuffer(self.lump(33), np.float32).reshape(-1, 5)  # vec(3) dist alpha
  def brushes(self): return self.arr(18, '<iii')  # firstside numsides contents
  def brushsides(self):
    d = self.lump(19); return [struct.unpack_from('<Hhhh' if len(d) % 8 == 0 else '<Hhhh', d, k) for k in range(0, len(d) - 7, 8)]  # planenum texinfo dispinfo bevel(+thin)
  def pak(self):
    d = self.lump(40)
    try: return zipfile.ZipFile(io.BytesIO(d))
    except Exception: return None

CONTENTS_SOLID, CONTENTS_WINDOW, CONTENTS_GRATE, CONTENTS_MOVEABLE, CONTENTS_PLAYERCLIP, CONTENTS_MONSTERCLIP = 0x1, 0x2, 0x8, 0x4000, 0x10000, 0x20000
SURF_SKY2D, SURF_SKY, SURF_TRIGGER, SURF_NODRAW, SURF_HINT, SURF_SKIP = 0x2, 0x4, 0x40, 0x80, 0x100, 0x200

class GoldSrc:
  """BSP v30 (Half-Life / CS 1.6)."""
  def __init__(self, path):
    self.b = b = open(path, 'rb').read()
    self.version = struct.unpack_from('<i', b, 0)[0]; assert self.version == 30
    self.lumps = [struct.unpack_from('<ii', b, 4 + i * 8) for i in range(15)]
  def lump(self, i): o, l = self.lumps[i]; return self.b[o:o + l]
  def arr(self, i, fmt):
    d = self.lump(i); sz = struct.calcsize(fmt); return [struct.unpack_from(fmt, d, k) for k in range(0, len(d) - sz + 1, sz)]
  def entities(self):
    txt = self.lump(0).decode('latin1'); ents = []
    for blk in re.findall(r'\{([^{}]*)\}', txt):
      ents.append({k: v for k, v in re.findall(r'"([^"]*)"\s+"([^"]*)"', blk)})
    return ents
  def planes(self): return self.arr(1, '<3ffi')
  def verts(self): return np.frombuffer(self.lump(3), np.float32).reshape(-1, 3)
  def edges(self): return np.frombuffer(self.lump(12), np.uint16).reshape(-1, 2)
  def surfedges(self): return np.frombuffer(self.lump(13), np.int32)
  def texinfo(self): return self.arr(6, '<8fii')  # s(4) t(4) miptex flags
  def faces(self): return self.arr(7, '<HHiHH4Bi')  # plane side firstedge numedges texinfo styles lightofs
  def models(self): return self.arr(14, '<3f3f3f4iiii')  # mins maxs origin headnodes[4] visleafs firstface numfaces
  def miptex(self):
    d = self.lump(2); n = struct.unpack_from('<i', d, 0)[0]; offs = struct.unpack_from(f'<{n}i', d, 4); out = []
    for o in offs:
      if o < 0: out.append({'name': '', 'w': 0, 'h': 0, 'data': None}); continue
      name = d[o:o + 16].split(b'\0')[0].decode('latin1'); w, h = struct.unpack_from('<II', d, o + 16); mo = struct.unpack_from('<4I', d, o + 24)
      data = None
      if mo[0]:
        px = d[o + mo[0]: o + mo[0] + w * h]
        po = o + mo[3] + (w // 8) * (h // 8) + 2; pal = d[po:po + 768]
        data = (px, pal)
      out.append({'name': name, 'w': w, 'h': h, 'data': data})
    return out

def gs_contents(B, hull, pts):
  """contenidos en el hull 'hull' (1 = jugador parado) de cada punto (unidades de GoldSrc); -2 = sólido."""
  planes = np.array([p[:4] for p in B.planes()], np.float64)
  cn = np.frombuffer(B.lump(9), np.dtype([('p', '<i4'), ('c', '<i2', (2,))]))
  root = B.models()[0][9 + hull]  # headnode[hull]
  out = np.empty(len(pts), np.int32); node = np.full(len(pts), root, np.int64); active = np.ones(len(pts), bool)
  while active.any():
    idx = np.nonzero(active)[0]; nd = node[idx]
    pl = planes[cn['p'][nd]]; d = np.einsum('ij,ij->i', pts[idx], pl[:, :3]) - pl[:, 3]
    ch = np.where(d < 0, cn['c'][nd, 1], cn['c'][nd, 0]).astype(np.int64)
    leaf = ch < 0
    out[idx[leaf]] = ch[leaf]; active[idx[leaf]] = False; node[idx[~leaf]] = ch[~leaf]
  return out
