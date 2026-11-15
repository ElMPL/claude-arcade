# ClaudeArcade 🎮

Plataforma tipo Friv donde cada uno sube los juegos que hizo con Claude y todos juegan, solos u online en salas.

## Cómo funciona
- **Catálogo:** todos los juegos de `games/`. Los de un jugador se abren directo.
- **Online:** alguien crea una sala (código de 5 letras o link), los demás se unen, el host elige un juego multijugador y aprieta *Empezar*. Todos entran al mismo juego.
- **Juegos:** cada uno es HTML/JS estático que usa el SDK (`/sdk/arcade-sdk.js`) para comunicarse. No necesitan servidor propio.

Para agregar un juego: **[SUBIR_JUEGO.md](SUBIR_JUEGO.md)** (pasos) y **[GUIA_JUEGOS.md](GUIA_JUEGOS.md)** (reglas y SDK).

**Coronas 👑:** cada juego que alguien gana le suma una corona en la sala, sea el juego que sea.

## Correr local
```bash
npm install
npm start   # http://localhost:3000
```

## Deploy en Render
1. Subí este repo a GitHub.
2. En Render: **New → Blueprint** y elegí el repo (usa `render.yaml`).
   O **New → Web Service**: Build `npm install`, Start `npm start`.
3. **Publicación automática:** en Render → *Settings* → *Deploy Hook*, copiá la URL. En GitHub → *Settings* → *Secrets and variables* → *Actions* → *New repository secret*, nombre `RENDER_DEPLOY_HOOK`, y pegá la URL. Desde ahí, cada vez que aprobás (mergeás) un Pull Request, Render publica solo.

## Aprobar juegos de otros
1. Te llega un Pull Request "Juego: …" (también en la app de GitHub del celular).
2. Mirá que el check **Revisar juego** esté en verde ✅.
3. Tocá **Merge pull request** → en 1–2 minutos está en la página.

> En el plan gratuito, Render apaga el servicio después de ~15 min sin uso y tarda ~1 min en despertar.
