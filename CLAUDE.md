# ClaudeArcade

Plataforma tipo Friv para juegos hechos con Claude. Node + Express + Socket.io, deploy en Render.

- `server.js` — catálogo (`/api/games`), salas online y relay de mensajes.
- `public/` — la web de la plataforma (catálogo, lobby, iframe del juego) y el SDK en `public/sdk/arcade-sdk.js`.
- `games/<id>/` — un juego por carpeta.

**Si la tarea es agregar o adaptar un juego: seguí `SUBIR_JUEGO.md` (pasos) y `GUIA_JUEGOS.md` (reglas y SDK) al pie de la letra.** Solo se toca la carpeta del juego.

**Actualizar juegos (PRs de amigos):** cuando el dueño pida "actualizar los juegos", revisar cada PR abierto y confirmar que todos los cambios estén dentro de `games/<id>/` de ese juego. Si toca cualquier otra cosa (plataforma, otros juegos, scripts, config), avisarle y esperar su OK antes de fusionar. Revisar también que pase `scripts/check-games.js`, que no tenga código sospechoso y que cargue sin errores.
