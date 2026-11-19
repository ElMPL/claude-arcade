"""Convierte los modelos de primera persona de Source (.mdl + .vvd + .dx90.vtx, versión 48) a un formato propio:
viewmodels/<arma>.json (huesos, materiales, secuencias) + viewmodels/<arma>.bin (malla y animaciones horneadas).

Todo queda en el espacio del modelo de Source (x adelante, y izquierda, z arriba, en pulgadas); el juego lo rota y escala.
Uso: python3 import_vmodels.py <carpeta con models/weapons> <salida>
"""
import struct, sys, os, json, math, glob
import numpy as np

def cstr(d, o):
  e = d.index(b'\0', o); return d[o:e].decode('latin1')

def half(u):
  return float(np.frombuffer(struct.pack('<H', u), np.float16)[0])

def euler_quat(x, y, z):
  sr, cr = math.sin(x / 2), math.cos(x / 2); sp, cp = math.sin(y / 2), math.cos(y / 2); sy, cy = math.sin(z / 2), math.cos(z / 2)
  return (sr * cp * cy - cr * sp * sy, cr * sp * cy + sr * cp * sy, cr * cp * sy - sr * sp * cy, cr * cp * cy + sr * sp * sy)

def anim_value(d, o, frame, scale):
  """mstudioanimvalue_t comprimido (RLE)."""
  k = frame
  while True:
    valid, total = d[o], d[o + 1]
    if total == 0: return 0.0
    if total <= k: k -= total; o += (valid + 1) * 2; continue
    if valid > k: v = struct.unpack_from('<h', d, o + (k + 1) * 2)[0]
    else: v = struct.unpack_from('<h', d, o + valid * 2)[0]
    return v * scale

def load(base):
  d = open(base + '.mdl', 'rb').read()
  ver = struct.unpack_from('<i', d, 4)[0]; assert ver in (44, 45, 46, 47, 48, 49), ver
  H = dict(zip(['numbones', 'boneindex', 'numbonecontrollers', 'bonecontrollerindex', 'numhitboxsets', 'hitboxsetindex', 'numlocalanim', 'localanimindex', 'numlocalseq', 'localseqindex', 'activitylistversion', 'eventsindexed', 'numtextures', 'textureindex', 'numcdtextures', 'cdtextureindex', 'numskinref', 'numskinfamilies', 'skinindex', 'numbodyparts', 'bodypartindex'], struct.unpack_from('<21i', d, 12 + 64 + 4 + 72 + 4)))
  # ---- huesos ----
  bones = []
  for i in range(H['numbones']):
    o = H['boneindex'] + i * 216
    name = cstr(d, o + struct.unpack_from('<i', d, o)[0]); parent = struct.unpack_from('<i', d, o + 4)[0]
    pos = struct.unpack_from('<3f', d, o + 32); quat = struct.unpack_from('<4f', d, o + 44); rot = struct.unpack_from('<3f', d, o + 60)
    posscale = struct.unpack_from('<3f', d, o + 72); rotscale = struct.unpack_from('<3f', d, o + 84)
    p2b = struct.unpack_from('<12f', d, o + 96)
    bones.append({'name': name, 'parent': parent, 'pos': pos, 'quat': quat, 'rot': rot, 'posscale': posscale, 'rotscale': rotscale, 'p2b': p2b})
  # ---- texturas y skins ----
  tex = [cstr(d, H['textureindex'] + i * 64 + struct.unpack_from('<i', d, H['textureindex'] + i * 64)[0]) for i in range(H['numtextures'])]
  skin = list(struct.unpack_from(f'<{H["numskinref"]}h', d, H['skinindex'])) if H['numskinref'] else list(range(len(tex)))
  # ---- vértices (VVD) ----
  v = open(base + '.vvd', 'rb').read()
  nfix, fixstart, vstart = struct.unpack_from('<iii', v, 48)
  nlod0 = struct.unpack_from('<i', v, 16)[0]
  raw = np.frombuffer(v, np.uint8, struct.unpack_from('<i', v, 16)[0] * 48 if nfix == 0 else None, vstart) if False else None
  allv = []
  nv_total = (struct.unpack_from('<i', v, 60)[0] - vstart) // 48 if struct.unpack_from('<i', v, 60)[0] > vstart else nlod0
  rec = np.dtype([('w', '<f4', 3), ('b', 'u1', 3), ('nb', 'u1'), ('p', '<f4', 3), ('n', '<f4', 3), ('uv', '<f4', 2)])
  V = np.frombuffer(v, rec, nv_total, vstart)
  if nfix:  # vértices reordenados por LOD: armar la lista del LOD 0
    idx = []
    for k in range(nfix):
      lod, src, cnt = struct.unpack_from('<iii', v, fixstart + k * 12)
      if lod >= 0: idx.extend(range(src, src + cnt))
    V = V[np.array(idx)]
  # ---- caras (VTX) ----
  x = open(base + '.dx90.vtx', 'rb').read()
  nbp, bpo = struct.unpack_from('<ii', x, 28)
  tris = []  # (vertex global, material)
  for bpi in range(H['numbodyparts']):
    bo = H['bodypartindex'] + bpi * 16
    nmod, mbase, modidx = struct.unpack_from('<iii', d, bo + 4)
    xb = bpo + bpi * 8; xnm, xmo = struct.unpack_from('<ii', x, xb)
    for mi in range(min(1, nmod)):  # bodygroups: solo el modelo por defecto
      mo = bo + modidx + mi * 148
      nmesh, meshidx, nverts, vindex = struct.unpack_from('<iiii', d, mo + 72)
      xm = xb + xmo + mi * 8; xnl, xlo = struct.unpack_from('<ii', x, xm)
      xl = xm + xlo  # LOD 0
      xnmesh, xmeo = struct.unpack_from('<ii', x, xl)
      for me in range(nmesh):
        mso = mo + meshidx + me * 116
        mat, _, mnv, voff = struct.unpack_from('<iiii', d, mso)
        xme = xl + xmeo + me * 9
        nsg, sgo = struct.unpack_from('<ii', x, xme)
        for g in range(nsg):
          sg = xme + sgo + g * 25
          nvx, vxo, nix, ixo, nst, sto = struct.unpack_from('<iiiiii', x, sg)
          sv = [struct.unpack_from('<H', x, sg + vxo + k * 9 + 4)[0] for k in range(nvx)]
          ix = struct.unpack_from(f'<{nix}H', x, sg + ixo)
          for k in range(0, nix - 2, 3):
            tri = [vindex // 48 + voff + sv[ix[k + j]] for j in (0, 2, 1)]  # DirectX: horario = de frente
            tris.append((tri, skin[mat] if mat < len(skin) else mat))
  # ---- animaciones ----
  anims = []
  for ai in range(H['numlocalanim']):
    ao = H['localanimindex'] + ai * 100
    name = cstr(d, ao + struct.unpack_from('<i', d, ao + 4)[0]); fps, flags, nframes = struct.unpack_from('<fii', d, ao + 8)
    animblock, animindex = struct.unpack_from('<ii', d, ao + 52)
    sectionindex, sectionframes = struct.unpack_from('<ii', d, ao + 80)
    frames = np.zeros((nframes, len(bones), 7), np.float32)
    for f in range(nframes):
      if sectionframes:
        s = f // sectionframes; lf = f - s * sectionframes
        sblock, sindex = struct.unpack_from('<ii', d, ao + sectionindex + s * 8); po = ao + sindex
      else: lf = f; po = ao + animindex
      got = set()
      while True:
        bi, fl, nxt = struct.unpack_from('<BBh', d, po)
        B = bones[bi]; data = po + 4
        # rotación
        if fl & 0x20:  # Quaternion64
          q = struct.unpack_from('<Q', d, data)[0]
          qx = ((q & 0x1fffff) - 1048576) / 1048576.5; qy = (((q >> 21) & 0x1fffff) - 1048576) / 1048576.5; qz = (((q >> 42) & 0x1fffff) - 1048576) / 1048576.5
          qw = math.sqrt(max(0, 1 - qx * qx - qy * qy - qz * qz)) * (-1 if (q >> 63) & 1 else 1); quat = (qx, qy, qz, qw); rs = 8
        elif fl & 0x02:  # Quaternion48
          a, b, c = struct.unpack_from('<HHH', d, data)
          qx = (a - 32768) / 32768; qy = (b - 32768) / 32768; qz = ((c & 0x7fff) - 16384) / 16384
          qw = math.sqrt(max(0, 1 - qx * qx - qy * qy - qz * qz)) * (-1 if c >> 15 else 1); quat = (qx, qy, qz, qw); rs = 6
        elif fl & 0x08:  # valores animados (euler)
          vp = struct.unpack_from('<3h', d, data); ang = []
          for j in range(3): ang.append(anim_value(d, data + vp[j], lf, B['rotscale'][j]) if vp[j] else 0.0)
          if not fl & 0x10: ang = [ang[j] + B['rot'][j] for j in range(3)]
          quat = euler_quat(*ang); rs = 6
        else: quat = B['quat']; rs = 0
        # posición
        pd = data + rs
        if fl & 0x01: pos = tuple(half(u) for u in struct.unpack_from('<3H', d, pd))
        elif fl & 0x04:
          vp = struct.unpack_from('<3h', d, pd); pos = []
          for j in range(3): pos.append(anim_value(d, pd + vp[j], lf, B['posscale'][j]) if vp[j] else 0.0)
          if not fl & 0x10: pos = [pos[j] + B['pos'][j] for j in range(3)]
        else: pos = B['pos']
        frames[f, bi, :3] = pos; frames[f, bi, 3:] = quat; got.add(bi)
        if nxt == 0: break
        po += nxt
      for bi, B in enumerate(bones):
        if bi not in got: frames[f, bi, :3] = B['pos']; frames[f, bi, 3:] = B['quat']
    anims.append({'name': name, 'fps': fps, 'frames': frames})
  # ---- secuencias (nombre → animación) ----
  seqs = []
  for si in range(H['numlocalseq']):
    so = H['localseqindex'] + si * 212
    label = cstr(d, so + struct.unpack_from('<i', d, so + 4)[0]); act = cstr(d, so + struct.unpack_from('<i', d, so + 8)[0])
    flags = struct.unpack_from('<i', d, so + 12)[0]
    animidx = struct.unpack_from('<i', d, so + 60)[0]; a0 = struct.unpack_from('<h', d, so + animidx)[0]
    seqs.append({'name': label, 'act': act, 'anim': a0, 'loop': bool(flags & 1)})
  return {'bones': bones, 'tex': tex, 'V': V, 'tris': tris, 'anims': anims, 'seqs': seqs}

def export(m, out):
  V, tris = m['V'], m['tris']
  used = sorted({i for t, _ in tris for i in t}); remap = {i: k for k, i in enumerate(used)}
  U = V[np.array(used)]
  groups = {}
  for t, mat in tris: groups.setdefault(mat, []).extend(remap[i] for i in t)
  order = sorted(groups)
  idx = np.concatenate([np.array(groups[k], np.uint16) for k in order]); gl = []
  s = 0
  for k in order: gl.append({'s': s, 'c': len(groups[k]), 'tex': m['tex'][k] if k < len(m['tex']) else str(k)}); s += len(groups[k])
  nv = len(U)
  J = np.zeros((nv, 4), np.uint8); Wt = np.zeros((nv, 4), np.float32)
  for k in range(3):
    has = U['nb'] > k; J[has, k] = U['b'][has, k]; Wt[has, k] = U['w'][has, k]
  Wt /= np.maximum(Wt.sum(1, keepdims=True), 1e-6)
  Wq = np.round(Wt * 255).astype(np.int32); big = Wq.argmax(1); Wq[np.arange(nv), big] += 255 - Wq.sum(1)
  blob = [U['p'].astype('<f4').tobytes(), U['n'].astype('<f4').tobytes(), U['uv'].astype('<f4').tobytes(), J.tobytes(), Wq.astype(np.uint8).tobytes(), idx.astype('<u2').tobytes()]
  if len(idx) % 2: blob.append(b'\0\0')
  aoff = sum(len(b) for b in blob); alist = []
  for a in m['anims']:
    fr = a['frames'].copy()  # cuantizado a int16: posición /200 (pulgadas), cuaternión ×32767
    q = np.empty(fr.shape, '<i2'); q[..., :3] = np.clip(np.round(fr[..., :3] * 200), -32767, 32767); q[..., 3:] = np.clip(np.round(fr[..., 3:] * 32767), -32767, 32767)
    alist.append({'name': a['name'], 'fps': a['fps'], 'n': int(fr.shape[0]), 'o': aoff}); blob.append(q.tobytes()); aoff += q.nbytes
  open(out + '.bin', 'wb').write(b''.join(blob))
  meta = {'v': nv, 'i': int(len(idx)), 'groups': gl,
          'bones': [{'n': b['name'], 'p': b['parent'], 't': [round(x, 5) for x in b['pos']], 'q': [round(x, 6) for x in b['quat']], 'inv': [round(x, 6) for x in b['p2b']]} for b in m['bones']],
          'anims': alist, 'seqs': m['seqs']}
  json.dump(meta, open(out + '.json', 'w'))
  return nv, len(idx) // 3

if __name__ == '__main__':
  src, dst = sys.argv[1], sys.argv[2]; os.makedirs(dst, exist_ok=True)
  for p in sorted(glob.glob(os.path.join(src, 'models/weapons/v_*.mdl'))):
    base = p[:-4]; name = os.path.basename(base)
    try:
      m = load(base); nv, nt = export(m, os.path.join(dst, name))
      print(name, 'verts', nv, 'tris', nt, 'bones', len(m['bones']), 'tex', m['tex'], 'seqs', [s['name'] for s in m['seqs']])
    except Exception as e:
      import traceback; print(name, 'ERROR', e); traceback.print_exc()
