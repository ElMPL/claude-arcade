// Rompibles del mapa (func_breakable del .bsp: ventanas y rejillas de madera en Mirage). Se rompen con un tiro
// o un cuchillazo: se oculta su malla y se sacan sus tramos de la grilla de colisión. Vuelven al empezar la ronda.
export function makeBreakables(W, info, mapMesh) {
  const list = (info.breakables || []).map((b, i) => ({ ...b, i, broken: false, meshes: [], cells: [] }));
  if (!list.length) return null;
  mapMesh.traverse(o => { if (o.userData && o.userData.brk !== undefined && list[o.userData.brk]) list[o.userData.brk].meshes.push(o); });
  const n = W.n, c = W.cell, M = 0.35;
  for (const b of list) {
    const [x0, y0, z0, x1, y1, z1] = b.box;
    for (let cz = Math.floor((z0 - 0.07) / c); cz <= Math.floor((z1 + 0.07) / c); cz++) for (let cx = Math.floor((x0 - 0.07) / c); cx <= Math.floor((x1 + 0.07) / c); cx++) {
      if (cx < 0 || cz < 0 || cx >= n || cz >= n) continue; const i = cz * n + cx;
      for (let l = 0; l < W.L; l++) {
        const t = W.top[l][i], bt = W.bot[l][i]; if (isNaN(t)) continue;
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
  const B = {
    list,
    // ¿el punto (impacto de bala / punta del cuchillo) toca algún rompible sano? → índice o -1
    at(x, y, z, pad = 0.2) { for (const b of list) { if (b.broken) continue; const [x0, y0, z0, x1, y1, z1] = b.box; if (x >= x0 - pad && x <= x1 + pad && y >= y0 - pad && y <= y1 + pad && z >= z0 - pad && z <= z1 + pad) return b.i; } return -1; },
    break(i) {
      const b = list[i]; if (!b || b.broken) return false; b.broken = true;
      for (const m of b.meshes) m.visible = false;
      for (const e of b.cells) { const [k, l, , , nt, nb, nc] = e; W.top[l][k] = nt; W.bot[l][k] = nb; if (nc !== undefined) { e.oc = W.cls[l][k]; W.cls[l][k] = nc; } }
      return true;
    },
    reset() { for (const b of list) { if (!b.broken) continue; b.broken = false; for (const m of b.meshes) m.visible = true; for (const e of b.cells) { const [k, l, t, bt] = e; W.top[l][k] = t; W.bot[l][k] = bt; if (e.oc !== undefined) W.cls[l][k] = e.oc; } } },
    center(i) { const [x0, y0, z0, x1, y1, z1] = list[i].box; return [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2]; },
  };
  return B;
}
