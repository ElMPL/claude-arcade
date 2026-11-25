#!/usr/bin/env python3
"""Convierte un .map de DDNet/Teeworlds (datafile v4) a lo que usa el juego:
   <id>.json (capas, grupos, imágenes, quads) + <id>.bin (tiles) + imágenes embebidas.
Uso: convert_map.py mapa.map carpeta_mapres salida_dir id"""
import struct, zlib, sys, os, json
from PIL import Image

def ints2str(ints):
    b = bytearray()
    for v in ints:
        v &= 0xffffffff
        for sh in (24, 16, 8, 0):
            c = ((v >> sh) & 0xff) - 128
            b.append(c & 0xff)
    return b.split(b'\0')[0].decode('utf8', 'replace')

def read_datafile(path):
    d = open(path, 'rb').read()
    assert d[:4] in (b'DATA', b'ATAD'), 'no es un datafile'
    ver, size, swaplen, nTypes, nItems, nRaw, itemSize, dataSize = struct.unpack_from('<8i', d, 4)
    assert ver in (3, 4), ver
    off = 36
    types = [struct.unpack_from('<3i', d, off + i * 12) for i in range(nTypes)]; off += nTypes * 12
    item_offs = struct.unpack_from('<%di' % nItems, d, off); off += nItems * 4
    data_offs = struct.unpack_from('<%di' % nRaw, d, off); off += nRaw * 4
    data_sizes = None
    if ver == 4:
        data_sizes = struct.unpack_from('<%di' % nRaw, d, off); off += nRaw * 4
    items_start = off; data_start = off + itemSize
    items = {}
    for i in range(nItems):
        p = items_start + item_offs[i]
        tid, sz = struct.unpack_from('<2i', d, p)
        t, idn = (tid >> 16) & 0xffff, tid & 0xffff
        items.setdefault(t, []).append((idn, struct.unpack_from('<%di' % (sz // 4), d, p + 8)))
    def data(i):
        a = data_start + data_offs[i]
        b = data_start + (data_offs[i + 1] if i + 1 < nRaw else dataSize)
        raw = d[a:b]
        return zlib.decompress(raw) if ver == 4 else raw
    return items, data

def main(src, mapres, out, mid):
    items, data = read_datafile(src)
    os.makedirs(out, exist_ok=True)
    # imágenes
    images = []
    for idn, it in sorted(items.get(2, [])):
        version, w, h, external, name_i, data_i = it[:6]
        name = data(name_i).split(b'\0')[0].decode()
        fn = f'{mid}_{len(images)}.webp'
        if external:
            fn = 'res/' + name + '.webp'
            p = os.path.join(mapres, name + '.png')
            img = Image.open(p).convert('RGBA') if os.path.exists(p) else None
        else:
            img = Image.frombytes('RGBA', (w, h), data(data_i))
        if img is None:
            images.append(None); print('falta imagen', name); continue
        os.makedirs(os.path.join(out, 'res'), exist_ok=True)
        if not (external and os.path.exists(os.path.join(out, fn))):
            img.save(os.path.join(out, fn), 'WEBP', quality=88, method=6)
        images.append({'file': fn, 'name': name, 'w': img.width, 'h': img.height})
    groups_raw = sorted(items.get(4, []))
    layers_raw = [it for _, it in sorted(items.get(5, []))]
    binparts = []; boff = 0
    def addbin(b):
        nonlocal boff
        binparts.append(b); o = boff; boff += len(b)
        pad = (-len(b)) % 4
        if pad: binparts.append(b'\0' * pad); boff += pad
        return o
    def tiles(it, data_i, w, h, skip):
        raw = data(data_i)
        if not skip:
            return raw[:w * h * 4]
        out = bytearray(); i = 0
        while i + 4 <= len(raw) and len(out) < w * h * 4:
            t = raw[i:i + 4]; out += bytes([t[0], t[1], 0, 0]) * (1 + t[2]); i += 4
        return bytes(out[:w * h * 4])
    groups = []; game = None
    for gi, (_, g) in enumerate(groups_raw):
        gver, ox, oy, px, py, start, num = g[:7]
        clip = g[7:12] if gver >= 2 and len(g) >= 12 else [0, 0, 0, 0, 0]
        gname = ints2str(g[12:15]) if len(g) >= 15 else ''
        G = {'ox': ox, 'oy': oy, 'px': px, 'py': py, 'clip': list(clip), 'name': gname, 'layers': []}
        for li in range(start, start + num):
            L = layers_raw[li]
            lver, ltype, lflags = L[:3]
            detail = bool(lflags & 1)
            if ltype == 2:  # tiles
                tv, w, h, tflags = L[3:7]
                color = list(L[7:11]); image = L[13]; data_i = L[14]
                name = ints2str(L[15:18]) if len(L) >= 18 else ''
                tele = speed = front = switch = tune = -1
                if len(L) >= 23: tele, speed, front, switch, tune = L[18:23]
                elif len(L) == 20 or len(L) == 19: pass
                skip = tv >= 4
                if tflags & 1:   # capa de juego
                    game = {'w': w, 'h': h, 'game': addbin(tiles(L, data_i, w, h, skip))}
                    G['layers'].append({'t': 'game'}); continue
                if tflags & 8:   # front
                    fb = tiles(L, front, w, h, skip); game_front = addbin(fb)
                    G['layers'].append({'t': 'front', 'w': w, 'h': h, 'bin': game_front}); continue
                if tflags & 2:
                    tb = data(tele)[:w * h * 2]; G['layers'].append({'t': 'tele', 'w': w, 'h': h, 'bin': addbin(tb)}); continue
                if tflags & 4:
                    sb = data(speed)[:w * h * 6]; G['layers'].append({'t': 'speedup', 'w': w, 'h': h, 'bin': addbin(sb)}); continue
                if tflags & 16:
                    sb = data(switch)[:w * h * 4]; G['layers'].append({'t': 'switch', 'w': w, 'h': h, 'bin': addbin(sb)}); continue
                if tflags & 32:
                    sb = data(tune)[:w * h * 2]; G['layers'].append({'t': 'tune', 'w': w, 'h': h, 'bin': addbin(sb)}); continue
                tb = tiles(L, data_i, w, h, skip)
                G['layers'].append({'t': 'tiles', 'w': w, 'h': h, 'color': color, 'ce': L[11], 'ceo': L[12], 'image': image, 'detail': detail, 'name': name, 'bin': addbin(tb)})
            elif ltype == 3:  # quads
                qv, nq, data_i, image = L[3:7]
                raw = data(data_i); qs = []
                for q in range(nq):
                    v = struct.unpack_from('<38i', raw, q * 152)
                    pts = [[v[i * 2] / 1024, v[i * 2 + 1] / 1024] for i in range(5)]
                    cols = [list(v[10 + i * 4: 14 + i * 4]) for i in range(4)]
                    tex = [[v[26 + i * 2] / 1024, v[27 + i * 2] / 1024] for i in range(4)]
                    qs.append({'p': pts, 'c': cols, 'uv': tex, 'pe': v[34], 'peo': v[35], 'ce': v[36], 'ceo': v[37]})
                G['layers'].append({'t': 'quads', 'image': image, 'detail': detail, 'q': qs})
        groups.append(G)
    # envolventes (para nubes y luces que se mueven)
    envs = []
    pts_raw = items.get(6, [])
    allpts = pts_raw[0][1] if pts_raw else []
    for _, e in sorted(items.get(3, [])):
        ever, ch, sp, npnt = e[:4]
        sync = e[12] if len(e) > 12 else 0
        stride = 22 if any(x[1][0] == 3 for x in items.get(3, [])) else 6
        P = []
        for k in range(npnt):
            b = (sp + k) * stride
            if b + 6 > len(allpts): break
            P.append([allpts[b], allpts[b + 1], [x / 1024 for x in allpts[b + 2:b + 6]]])
        envs.append({'ch': ch, 'pts': P, 'sync': sync})
    # info del mapa
    info = {}
    for _, it in items.get(1, []):
        try:
            info = {'author': data(it[1]).split(b'\0')[0].decode('utf8', 'replace') if it[1] >= 0 else '',
                    'credits': data(it[3]).split(b'\0')[0].decode('utf8', 'replace') if it[3] >= 0 else '',
                    'license': data(it[4]).split(b'\0')[0].decode('utf8', 'replace') if it[4] >= 0 else ''}
        except Exception: pass
    import gzip
    open(os.path.join(out, mid + '.dat'), 'wb').write(gzip.compress(b''.join(binparts), 9))
    meta = {'id': mid, 'game': game, 'groups': groups, 'images': images, 'envs': envs, 'info': info}
    json.dump(meta, open(os.path.join(out, mid + '.json'), 'w'), separators=(',', ':'))
    print(mid, 'juego', game and (game['w'], game['h']), 'grupos', len(groups), 'imgs', len(images), 'bin', boff, 'envs', len(envs))

if __name__ == '__main__':
    main(*sys.argv[1:5])
