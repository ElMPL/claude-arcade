# Arma un esqueleto de mano (palma, 4 dedos x 3 falanges, pulgar x 3, antebrazo) para un modelo de mano estático
# (dedos estirados) y lo pesa por cercanía a los huesos. Deja la mano en el marco del juego (mano derecha):
#   x = a lo ancho de los nudillos (índice en -x), y = dorso, -z = hacia donde apuntan los dedos, muñeca en +z.
# Uso: python3 tools/rig_hands.py <dump.json> <salida sin extensión> tools/rig_hands_spec.json <t|ct>
import json, sys, numpy as np
src, out = sys.argv[1], sys.argv[2]
meta = json.load(open(src)); b = open(src + '.bin', 'rb').read(); nv, ni = meta['nv'], meta['ni']
o = 0; P = np.frombuffer(b, np.float32, nv * 3, o).reshape(-1, 3).astype(np.float64); o += nv * 12
N = np.frombuffer(b, np.float32, nv * 3, o).reshape(-1, 3).astype(np.float64); o += nv * 12
UV = np.frombuffer(b, np.float32, nv * 2, o).reshape(-1, 2); o += nv * 8
I = np.frombuffer(b, np.uint32, ni, o).reshape(-1, 3)

# Los puntos clave (nudillos, puntas, pulgar, muñeca) se marcan a mano mirando una vista del modelo
# (tools/rig_hands_spec.json): coordenadas en el plano (eje horizontal h, eje vertical v); la profundidad se toma
# del promedio de los vértices cercanos. 'sel' elige una de las dos manos si el modelo trae el par.
spec = json.load(open(sys.argv[3]))[sys.argv[4]]
h, v_, d_ = spec['axes']
sel = np.ones(nv, bool)
if 'sel' in spec: ax_, lo, hi = spec['sel']; sel = (P[:, ax_] >= lo) & (P[:, ax_] <= hi)
keep = np.nonzero(sel)[0]; remap = -np.ones(nv, int); remap[keep] = np.arange(len(keep))
tri = I[np.all(sel[I], 1)]; I = remap[tri]; P = P[keep]; N = N[keep]; UV = UV[keep]; nv = len(keep); ni = I.size
def p3(pt):
  hh, vv = pt; r = spec.get('r', 0.03)
  m = (np.abs(P[:, h] - hh) < r) & (np.abs(P[:, v_] - vv) < r)
  out = np.zeros(3); out[h] = hh; out[v_] = vv; out[d_] = P[m, d_].mean() if m.any() else P[:, d_].mean(); return out
fingers = [(p3(a), p3(b)) for a, b in spec['fingers']]
tb, tt = p3(spec['thumb'][0]), p3(spec['thumb'][1])
wr = p3(spec['wrist'])
# marco: -z = dedos (del nudillo del mayor a su punta), x = de índice a meñique corregido para mano derecha
fdir = (fingers[1][1] - fingers[1][0]) + (fingers[2][1] - fingers[2][0]); fdir /= np.linalg.norm(fdir)
across = fingers[3][0] - fingers[0][0]; across -= fdir * (across @ fdir); across /= np.linalg.norm(across)
ez = -fdir; ex = across  # índice en -x, meñique en +x
ey = np.cross(ez, ex)  # dorso (para una mano derecha)
# pulgar del lado de la palma (-y). Si queda en +y, es una mano izquierda → se espeja
kc = np.mean([f[0] for f in fingers], 0)
mirror = bool(((tb + tt) / 2 - kc) @ ey > 0)
R = np.stack([ex, ey, ez])
X = (P - kc) @ R.T; Nn = N @ R.T
fingers = [(((f0 - kc) @ R.T), ((f1 - kc) @ R.T)) for f0, f1 in fingers]
tb, tt, wr = [(q - kc) @ R.T for q in (tb, tt, wr)]
if mirror:
  # en una mano izquierda, mirando el dorso, el índice queda a la derecha: espejar y cambiando el dorso
  X[:, 1] *= -1; Nn[:, 1] *= -1
  for q in [tb, tt, wr]: q[1] *= -1
  fingers = [(np.array([f0[0], -f0[1], f0[2]]), np.array([f1[0], -f1[1], f1[2]])) for f0, f1 in fingers]
# escala: dedo mayor → 0.092 m; nudillos en z = -0.039, a la altura y = 0
mid = fingers[1]; flen = np.linalg.norm(mid[1] - mid[0]); palm = abs(wr[2] - np.mean([f[0][2] for f in fingers]))
S = 0.19 / (flen + palm)  # largo de la mano (muñeca a la punta del mayor) ≈ 19 cm
off = np.array([-(fingers[1][0][0] + fingers[2][0][0]) / 2, -np.mean([f[0][1] for f in fingers]), -0.045 / S - np.mean([f[0][2] for f in fingers])])
X = (X + off) * S
fingers = [((f0 + off) * S, (f1 + off) * S) for f0, f1 in fingers]
tb, tt, wr = (tb + off) * S, (tt + off) * S, (wr + off) * S
# 5) huesos: 0 mano, 1 antebrazo, 2..13 dedos (3 c/u), 14..16 pulgar
bones = [{'n': 'hand', 'p': -1, 't': [0, 0, 0]}, {'n': 'fore', 'p': 0, 't': [0, 0, float(wr[2])]}]
segs = []  # (bone, a, b)
props = [0.45, 0.3, 0.25]
for i, (f0, f1) in enumerate(fingers):
  pa = f0; par = 0
  for k in range(3):
    pb = pa + (f1 - f0) * props[k]
    bones.append({'n': f'f{i}{k}', 'p': par, 't': pa.tolist()}); par = len(bones) - 1; segs.append((par, pa, pb)); pa = pb
tprop = [0.4, 0.33, 0.27]; pa = tb; par = 0
for k in range(3):
  pb = pa + (tt - tb) * tprop[k]
  bones.append({'n': f't{k}', 'p': par, 't': pa.tolist()}); par = len(bones) - 1; segs.append((par, pa, pb)); pa = pb
# palma y antebrazo como segmentos
knz = np.mean([f[0][2] for f in fingers]); wrist = float(wr[2])
segs.append((0, np.array([0, 0, knz + 0.01]), np.array([0, 0, wrist])))
segs.append((1, np.array([0, 0, wrist + 0.02]), np.array([0, 0, 0.6])))
def segdist(p, a, b):
  ab = b - a; tt_ = np.clip(((p - a) @ ab) / (ab @ ab), 0, 1); return np.linalg.norm(p - (a + tt_[:, None] * ab), axis=1)
D = np.stack([segdist(X, a, b_) for _, a, b_ in segs], 1)
bid = np.array([s[0] for s in segs])
# los dedos solo toman vértices más allá de su nudillo (si no, la palma se deforma)
for j, (bi, a, b_) in enumerate(segs):
  if bi >= 2 and bi < 14 and (bi - 2) % 3 == 0: D[X[:, 2] > a[2] + 0.004, j] = 1e9
# palma/antebrazo: mezcla suave alrededor de la muñeca
W = 1.0 / np.maximum(D, 1e-4) ** 4
top = np.argsort(-W, 1)[:, :3]
J = bid[top]; WW = np.take_along_axis(W, top, 1); WW /= WW.sum(1, keepdims=True)
# muñeca: rampa lineal entre hand y fore
z = X[:, 2]; ramp = np.clip((z - (wrist - 0.012)) / 0.03, 0, 1)
isArm = np.isin(J[:, 0], [0, 1])
J[isArm] = np.array([0, 1, 0]); WW[isArm] = np.stack([1 - ramp[isArm], ramp[isArm], np.zeros(isArm.sum())], 1)
Wq = np.round(WW * 255).astype(int); Wq[:, 0] += 255 - Wq.sum(1)
# 6) salida
nq = np.clip(np.round(Nn / np.maximum(np.linalg.norm(Nn, axis=1, keepdims=True), 1e-9) * 127), -127, 127).astype(np.int8)
idx = I.copy()
if mirror: idx = idx[:, [0, 2, 1]]
blob = [X.astype(np.float32).tobytes(), nq.tobytes(), b'\0' * ((4 - nv * 3 % 4) % 4), UV.astype(np.float32).tobytes(),
        np.concatenate([J, np.zeros((nv, 1), int)], 1).astype(np.uint8).tobytes(), np.concatenate([Wq, np.zeros((nv, 1), int)], 1).astype(np.uint8).tobytes(),
        (idx.astype(np.uint16) if nv < 65536 else idx.astype(np.uint32)).tobytes()]
open(out + '.bin', 'wb').write(b''.join(blob))
json.dump({'v': nv, 'i': ni, 'i32': nv >= 65536, 'bones': bones, 'mirror': bool(mirror), 'zmax': float(X[:, 2].max())}, open(out + '.json', 'w'))
print(out, 'mirror', mirror, 'wrist', round(wrist, 3), 'S', S, 'finger len', [round(float(np.linalg.norm(f1 - f0)), 3) for f0, f1 in fingers], 'thumb', tb.round(3), tt.round(3), 'knuckles', [f[0].round(3).tolist() for f in fingers], 'z range', X[:, 2].min().round(3), X[:, 2].max().round(3))
