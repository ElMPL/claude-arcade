"""Lee un .nav de Source (la malla de navegación de los bots de CS:Source): rectángulos caminables."""
import struct

def load_nav(buf):
  o = 0
  def rd(fmt):
    nonlocal o
    v = struct.unpack_from('<' + fmt, buf, o); o += struct.calcsize('<' + fmt); return v if len(v) > 1 else v[0]
  magic = rd('I'); assert magic == 0xFEEDFACE, 'no es un .nav'
  ver = rd('I')
  sub = rd('I') if ver >= 10 else 0  # subversión
  if ver >= 4: rd('I')   # tamaño del bsp
  if ver >= 14: rd('B')  # analizado
  if ver >= 5:
    for _ in range(rd('H')): k_ = rd('H'); o += k_
    if ver > 11: rd('B')
  areas = []
  for _ in range(rd('I')):
    aid = rd('I')
    rd('B' if ver <= 8 else 'H' if ver <= 12 else 'I')
    nw = rd('3f'); se = rd('3f'); nez, swz = rd('2f')
    conn = []
    for _d in range(4):
      k_ = rd('I'); conn += list(struct.unpack_from('<%dI' % k_, buf, o)); o += 4 * k_
    for _h in range(rd('B')): o += 4 + 12 + (1 if ver >= 2 else 0)
    if ver < 15: k_ = rd('B'); o += 14 * k_
    for _e in range(rd('I')):
      o += 4 + 1 + 4 + 1; k_ = rd('B'); o += 5 * k_
    rd('H')
    for _l in range(2): k_ = rd('I'); o += 4 * k_
    if ver >= 8: o += 8
    if ver >= 11: o += 16
    if ver >= 16:
      k_ = rd('I'); o += 5 * k_; o += 4
    if sub >= 1: o += 1  # dato propio de CS:S (1 byte)
    areas.append({'id': aid, 'nw': nw, 'se': se, 'nez': nez, 'swz': swz, 'conn': conn})
  assert o <= len(buf)
  return ver, areas
