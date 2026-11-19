"""Modelos estáticos de Source (.mdl v44–48 + .vvd + .dx90.vtx) leídos desde el FS de VPKs: posiciones en el espacio
del modelo (pose de reposo), UV y triángulos con el material de cada uno (ruta 'cdmaterials/textura')."""
import struct, numpy as np

def cstr(d, o):
  e = d.index(b'\0', o); return d[o:e].decode('latin1')

def load_prop(fs, path, skin_family=0):
  d = fs.get(path)
  if d is None: return None
  base = path[:-4]
  v = fs.get(base + '.vvd'); x = fs.get(base + '.dx90.vtx') or fs.get(base + '.dx80.vtx') or fs.get(base + '.sw.vtx')
  if v is None or x is None: return None
  ver = struct.unpack_from('<i', d, 4)[0]
  if ver not in (44, 45, 46, 47, 48, 49): return None
  H = dict(zip(['numbones', 'boneindex', 'numbonecontrollers', 'bonecontrollerindex', 'numhitboxsets', 'hitboxsetindex', 'numlocalanim', 'localanimindex', 'numlocalseq', 'localseqindex', 'activitylistversion', 'eventsindexed', 'numtextures', 'textureindex', 'numcdtextures', 'cdtextureindex', 'numskinref', 'numskinfamilies', 'skinindex', 'numbodyparts', 'bodypartindex'], struct.unpack_from('<21i', d, 12 + 64 + 4 + 72 + 4)))
  tex = [cstr(d, H['textureindex'] + i * 64 + struct.unpack_from('<i', d, H['textureindex'] + i * 64)[0]) for i in range(H['numtextures'])]
  cdm = [cstr(d, struct.unpack_from('<i', d, H['cdtextureindex'] + i * 4)[0]) for i in range(H['numcdtextures'])]
  nsr = H['numskinref']; fam = min(skin_family, max(0, H['numskinfamilies'] - 1))
  skin = list(struct.unpack_from(f'<{nsr}h', d, H['skinindex'] + fam * nsr * 2)) if nsr else list(range(len(tex)))
  # pose de reposo de los huesos (por si el modelo tiene más de uno): matriz pose→hueso invertida
  bones = []
  for i in range(H['numbones']):
    o = H['boneindex'] + i * 216
    p2b = np.array(struct.unpack_from('<12f', d, o + 96), np.float64).reshape(3, 4)
    M = np.eye(4); M[:3] = p2b; bones.append(np.linalg.inv(M))
  nfix, fixstart, vstart = struct.unpack_from('<iii', v, 48)
  nlod0 = struct.unpack_from('<i', v, 16)[0]
  rec = np.dtype([('w', '<f4', 3), ('b', 'u1', 3), ('nb', 'u1'), ('p', '<f4', 3), ('n', '<f4', 3), ('uv', '<f4', 2)])
  tanstart = struct.unpack_from('<i', v, 60)[0]
  ntot = (tanstart - vstart) // 48 if tanstart > vstart else nlod0
  V = np.frombuffer(v, rec, ntot, vstart)
  if nfix:
    idx = []
    for k in range(nfix):
      lod, src, cnt = struct.unpack_from('<iii', v, fixstart + k * 12)
      if lod >= 0: idx.extend(range(src, src + cnt))
    V = V[np.array(idx)]
  nbp, bpo = struct.unpack_from('<ii', x, 28)
  tris = []; mats = []
  for bpi in range(H['numbodyparts']):
    bo = H['bodypartindex'] + bpi * 16
    nmod, mbase, modidx = struct.unpack_from('<iii', d, bo + 4)
    xb = bpo + bpi * 8; xnm, xmo = struct.unpack_from('<ii', x, xb)
    for mi in range(min(1, nmod)):
      mo = bo + modidx + mi * 148
      nmesh, meshidx, nverts, vindex = struct.unpack_from('<iiii', d, mo + 72)
      xm = xb + xmo + mi * 8; xnl, xlo = struct.unpack_from('<ii', x, xm)
      if xnl <= 0: continue
      xl = xm + xlo
      xnmesh, xmeo = struct.unpack_from('<ii', x, xl)
      for me in range(nmesh):
        mso = mo + meshidx + me * 116
        mat, _, mnv, voff = struct.unpack_from('<iiii', d, mso)
        xme = xl + xmeo + me * 9
        nsg, sgo = struct.unpack_from('<ii', x, xme)
        for g in range(nsg):
          sg = xme + sgo + g * 25
          nvx, vxo, nix, ixo, nst, sto = struct.unpack_from('<iiiiii', x, sg)
          sv = np.array([struct.unpack_from('<H', x, sg + vxo + k * 9 + 4)[0] for k in range(nvx)], np.int64)
          ix = np.array(struct.unpack_from(f'<{nix}H', x, sg + ixo), np.int64).reshape(-1, 3)[:, [0, 2, 1]]
          tris.append(vindex // 48 + voff + sv[ix])
          mats += [skin[mat] if mat < len(skin) else mat] * len(ix)
  if not tris: return None
  T = np.concatenate(tris)
  P = V['p'].astype(np.float64)
  if len(bones) > 1 or (bones and not np.allclose(bones[0], np.eye(4))):
    # pasar a la pose de reposo: cada vértice con su primer hueso
    b0 = V['b'][:, 0]
    P = np.array([bones[b][:3, :3] @ p + bones[b][:3, 3] if b < len(bones) else p for p, b in zip(P, b0)]) if False else P
  names = []
  for t in tex:
    names.append([(c + t).replace('\\', '/').lower() for c in (cdm or [''])])
  return {'P': P, 'UV': V['uv'].astype(np.float64), 'T': T, 'M': np.array(mats), 'names': names}
