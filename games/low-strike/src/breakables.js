// Rompibles del mapa (func_breakable del .bsp: ventanas y rejillas de madera en Mirage). Se rompen con un tiro
// o un cuchillazo: se oculta su malla y se sacan sus tramos de la grilla de colisión. Vuelven al empezar la ronda.
export function makeBreakables(W, info, mapMesh) {
  const list = (info.breakables || []).map((b, i) => ({ ...b, i, broken: false, meshes: [], cells: [] }));
  if (!list.length) return null;
  mapMesh.traverse(o => { if (o.userData && o.userData.brk !== undefined && list[o.userData.brk]) list[o.userData.brk].meshes.push(o); });
  const n = W.n, c = W.cell, M = 0.35;
  for (const b of list) {
    const [x0, y0, z0, x1, y1, z1] = b.box;
    // en un agujero de pared el muro es más grueso que la chapa: por el lado fino se corta todo el espesor
    const thinX = x1 - x0 < z1 - z0, ex = thinX ? 0.45 : 0.07, ez = thinX ? 0.07 : 0.45;
    for (let cz = Math.floor((z0 - ez) / c); cz <= Math.floor((z1 + ez) / c); cz++) for (let cx = Math.floor((x0 - ex) / c); cx <= Math.floor((x1 + ex) / c); cx++) {
      if (cx < 0 || cz < 0 || cx >= n || cz >= n) continue; const i = cz * n + cx;
      const inside = (cx + 0.5) * c >= x0 - 0.07 && (cx + 0.5) * c <= x1 + 0.07 && (cz + 0.5) * c >= z0 - 0.07 && (cz + 0.5) * c <= z1 + 0.07;
      for (let l = 0; l < W.L; l++) {
        const t = W.top[l][i], bt = W.bot[l][i]; if (isNaN(t)) continue;
        if (!inside && !(bt < y0 - M && t > y1 + M)) continue; // fuera de la chapa: sólo el muro que la rodea
        if (bt >= y0 - M && t <= y1 + M) b.cells.push([i, l, t, bt, NaN, bt]); // el tramo es sólo el rompible
        else if (bt < y0 - M && t > y0 && t <= y1 + M) b.cells.push([i, l, t, bt, y0, bt]); // pared abajo: se corta arriba
        else if (t > y1 + M && bt < y1 && bt >= y0 - M) b.cells.push([i, l, t, bt, t, y1]); // pared arriba: se corta abajo
        else if (bt < y0 - M && t > y1 + M) { // pared abajo y arriba (agujero en un muro): se parte en dos usando un nivel libre
          let free = -1; for (let q = 0; q < W.L; q++) if (isNaN(W.top[q][i])) { free = q; break; }
          if (free >= 0) { b.cells.push([i, l, t, bt, y0, bt]); b.cells.push([i, free, NaN, NaN, t, y1, 3]); }
        }
      }
    }
  }
  // puertas (func_door_rotating de Nuke): giran sobre la bisagra; abiertas no chocan, cerradas sí
  const doors = list.filter(b => b.door);
  for (const d of doors) { d.a = 0; d.target = 0; for (const m of d.meshes) m.matrixAutoUpdate = true; }
  const place = d => {
    const [hx, , hz] = d.door.hinge, c = Math.cos(d.a), s = Math.sin(d.a);
    for (const m of d.meshes) { m.rotation.y = d.a; m.position.set(hx - (hx * c + hz * s), 0, hz - (-hx * s + hz * c)); }
  };
  // a dónde queda el centro de la puerta girada un ángulo a
  const swung = (d, a) => { const [hx, , hz] = d.door.hinge, [x0, , z0, x1, , z1] = d.box, vx = (x0 + x1) / 2 - hx, vz = (z0 + z1) / 2 - hz, c = Math.cos(a), s = Math.sin(a); return [hx + vx * c + vz * s, hz - vx * s + vz * c]; };
  const freeAt = (x, z, y) => { const i = W.idx(x, z); if (i < 0) return false; for (let l = 0; l < W.L; l++) { const t = W.top[l][i], bt = W.bot[l][i]; if (!isNaN(t) && bt < y && t > y) return false; } return true; };
  const setDoor = (d, open) => {
    if (open && !d.broken) { d.broken = true; for (const e of d.cells) { const [k, l, , , nt, nb, nc] = e; W.top[l][k] = nt; W.bot[l][k] = nb; if (nc !== undefined) { e.oc = W.cls[l][k]; W.cls[l][k] = nc; } } }
    if (!open && d.broken) { d.broken = false; for (const e of d.cells) { const [k, l, t, bt] = e; W.top[l][k] = t; W.bot[l][k] = bt; if (e.oc !== undefined) W.cls[l][k] = e.oc; } }
  };
  const B = {
    list, doors,
    // ¿el punto (impacto de bala / punta del cuchillo) toca algún rompible sano? → índice o -1
    at(x, y, z, pad = 0.2) { for (const b of list) { if (b.broken || b.door) continue; const [x0, y0, z0, x1, y1, z1] = b.box; if (x >= x0 - pad && x <= x1 + pad && y >= y0 - pad && y <= y1 + pad && z >= z0 - pad && z <= z1 + pad) return b.i; } return -1; },
    break(i) {
      const b = list[i]; if (!b || b.broken || b.door) return false; b.broken = true;
      for (const m of b.meshes) m.visible = false;
      for (const e of b.cells) { const [k, l, , , nt, nb, nc] = e; W.top[l][k] = nt; W.bot[l][k] = nb; if (nc !== undefined) { e.oc = W.cls[l][k]; W.cls[l][k] = nc; } }
      return true;
    },
    // la puerta más cerca de (x,z) a menos de r metros
    doorNear(x, y, z, r = 1.4) { let best = -1, bd = r; for (const d of doors) { const [x0, y0, z0, x1, y1, z1] = d.box; if (y < y0 - 1 || y > y1 + 0.5) continue; const dx = Math.max(x0 - x, 0, x - x1), dz = Math.max(z0 - z, 0, z - z1), dd = Math.hypot(dx, dz); if (dd < bd) { bd = dd; best = d.i; } } return best; },
    // abre (alejándose de quien la empuja) o cierra; devuelve el estado para mandarlo por red
    toggle(i, px, pz) {
      const d = list[i]; if (!d || !d.door) return null;
      if (d.target !== 0) { d.target = 0; return { i, a: 0 }; }
      const A = d.door.ang * Math.PI / 180, [cp, cq] = swung(d, A), [cm, cn] = swung(d, -A);
      d.target = Math.hypot(cp - px, cq - pz) >= Math.hypot(cm - px, cn - pz) ? A : -A;
      setDoor(d, true); return { i, a: d.target };
    },
    setDoorTo(i, a) { const d = list[i]; if (!d || !d.door) return; d.target = a; if (a !== 0) setDoor(d, true); },
    tick(dt) {
      for (const d of doors) {
        if (d.a === d.target) continue;
        const st = 3.2 * dt; d.a = Math.abs(d.target - d.a) < st ? d.target : d.a + Math.sign(d.target - d.a) * st; place(d);
        if (d.a === 0 && d.target === 0) setDoor(d, false); // recién cerrada: vuelve a chocar
      }
    },
    // al empezar la ronda las puertas quedan abiertas hacia el lado libre (los bots no las abren solos)
    openDoors() {
      for (const d of doors) {
        const A = d.door.ang * Math.PI / 180, y = (d.box[1] + d.box[4]) / 2, [x1, z1] = swung(d, A);
        d.target = d.a = freeAt(x1, z1, y) ? A : -A; place(d); setDoor(d, true);
      }
    },
    reset() { B.openDoors(); for (const b of list) { if (!b.broken || b.door) continue; b.broken = false; for (const m of b.meshes) m.visible = true; for (const e of b.cells) { const [k, l, t, bt] = e; W.top[l][k] = t; W.bot[l][k] = bt; if (e.oc !== undefined) W.cls[l][k] = e.oc; } } },
    center(i) { const [x0, y0, z0, x1, y1, z1] = list[i].box; return [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2]; },
  };
  B.openDoors();
  return B;
}
