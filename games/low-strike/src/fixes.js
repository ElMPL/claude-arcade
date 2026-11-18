// Arreglos puntuales de colisión que el importador no puede adivinar (en celdas del mapa de 1024 y metros).
// cut: saca todo lo sólido entre y0 e y1 dentro del rectángulo (lo de abajo queda como piso, lo de arriba se conserva).
export const FIXES = {
  mirage: [
    // Departamentos (tapete) → B: las dos ventanas tenían relleno y barrotes que no dejaban bajar al sitio
    { cut: [769, 395, 775, 408], y: [8.45, 10.75] },
    { cut: [771, 420, 775, 433], y: [8.45, 10.25] },
  ],
  dust2: [],
};
import { GHOSTS } from './ghosts.js';
export function applyFixes(W, mapId) {
  // paredes invisibles: debajo de aleros y balcones el importador había dejado la columna maciza hasta arriba
  const g = GHOSTS[mapId] || [];
  for (let k = 0; k < g.length; k += 4) {
    const j = g[k], f = g[k + 1] / 100, t = g[k + 2] / 100, li = g[k + 3];
    if (Math.abs(W.top[li][j] - t) > 0.05) continue;
    W.top[li][j] = f; W.cls[li][j] = 1;
    for (let q = 0; q < W.L; q++) if (isNaN(W.top[q][j])) { W.bot[q][j] = Math.max(f + 2.0, t - 0.4); W.top[q][j] = t; W.cls[q][j] = 4; break; }
  }
  for (const f of FIXES[mapId] || []) {
    const [x0, z0, x1, z1] = f.cut, [y0, y1] = f.y;
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      const i = z * W.n + x;
      for (let l = 0; l < W.L; l++) {
        const t = W.top[l][i], b = W.bot[l][i]; if (isNaN(t) || t <= y0 || b >= y1) continue;
        if (b < y0 - 0.05) { W.top[l][i] = y0 - 0.02; if (W.cls[l][i] === 3 || W.cls[l][i] === 4) W.cls[l][i] = 1; } // queda como piso/alféizar
        else if (t > y1) W.bot[l][i] = y1; // queda el dintel
        else { W.top[l][i] = NaN; W.bot[l][i] = NaN; W.cls[l][i] = 0; }
      }
    }
  }
}
