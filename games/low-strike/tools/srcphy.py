"""Colisión de props de Source (.phy): las piezas convexas que el motor usa de verdad para chocar.
Devuelve triángulos en el espacio del modelo (pulgadas, ejes de Source)."""
import struct, numpy as np

IVP2SRC = 1 / 0.0254  # IVP trabaja en metros

def load_phy(data):
  if not data or len(data) < 16: return None
  hsize, _id, nsolid, _ck = struct.unpack_from('<iiil', data, 0)
  o = hsize; tris = []
  for _ in range(nsolid):
    if o + 4 > len(data): break
    size = struct.unpack_from('<i', data, o)[0]; s0 = o + 4; end = s0 + size; o = end
    if data[s0:s0 + 4] != b'VPHY': continue  # formato viejo (sin cabecera): poco común en props
    surf = s0 + 28  # compactsurfaceheader_t
    # compactsurface_t: centro(3f) inercia(3f) radio(f) byte_size(i) offset_ledgetree_root(i) relleno(3i) = 48 bytes
    root = struct.unpack_from('<i', data, surf + 32)[0]
    stop = surf + root if root > 0 else end
    lg = surf + 48; limit = stop
    while lg + 16 <= min(stop, limit):
      pofs, _cd, flags, ntri, _f = struct.unpack_from('<iiihh', data, lg)
      if pofs <= 0 or ntri <= 0: break
      if flags & 3:  # has_children: es el casco convexo de TODO el modelo (para descartar rápido), no una pieza real
        lg += 16 + ntri * 16; continue  # si se usaba, tapaba los huecos de arcos, portones y ventanas
      sz = 16 + ntri * 16  # las piezas van seguidas; los puntos quedan todos juntos después
      pts_base = lg + pofs; limit = min(limit, pts_base); led = []
      for k in range(ntri):
        t = lg + 16 + k * 16
        idx = [struct.unpack_from('<H', data, t + 4 + e * 4)[0] for e in range(3)]
        P = []
        for i in idx:
          x, y, z = struct.unpack_from('<3f', data, pts_base + i * 16)
          P.append((x * IVP2SRC, z * IVP2SRC, -y * IVP2SRC))
        led.append(P)
      if led:  # cada pieza es convexa: normales hacia afuera del centro de la pieza
        L = np.array(led); c = L.reshape(-1, 3).mean(0)
        n = np.cross(L[:, 1] - L[:, 0], L[:, 2] - L[:, 0]); inward = np.einsum('ij,ij->i', n, L.mean(1) - c) < 0
        L[inward] = L[inward][:, [0, 2, 1]]; tris.extend(L.tolist())
      lg += sz
  if not tris: return None
  return np.array(tris, np.float64)
