# ClaudeArcade

Plataforma tipo Friv para juegos hechos con Claude. Node + Express + Socket.io, deploy en Render.

- `server.js` — catálogo (`/api/games`), salas online y relay de mensajes.
- `public/` — la web de la plataforma (catálogo, lobby, iframe del juego) y el SDK en `public/sdk/arcade-sdk.js`.
- `games/<id>/` — un juego por carpeta.

**Si la tarea es agregar o adaptar un juego: seguí `SUBIR_JUEGO.md` (pasos) y `GUIA_JUEGOS.md` (reglas y SDK) al pie de la letra.** Solo se toca la carpeta del juego.
