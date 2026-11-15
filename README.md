# ClaudeArcade 🎮

Plataforma tipo Friv donde cada uno sube los juegos que hizo con Claude y todos juegan, solos u online en salas.

## Cómo funciona
- **Catálogo:** todos los juegos de `games/`. Los de un jugador se abren directo.
- **Online:** alguien crea una sala (código de 5 letras o link), los demás se unen, el host elige un juego multijugador y aprieta *Empezar*. Todos entran al mismo juego.
- **Juegos:** cada uno es HTML/JS estático que usa el SDK (`/sdk/arcade-sdk.js`) para comunicarse. No necesitan servidor propio.

Para agregar un juego: **[GUIA_JUEGOS.md](GUIA_JUEGOS.md)**.

## Correr local
```bash
npm install
npm start   # http://localhost:3000
```

## Deploy en Render
1. Subí este repo a GitHub.
2. En Render: **New → Blueprint** y elegí el repo (usa `render.yaml`).
   O **New → Web Service**: Build `npm install`, Start `npm start`.
3. Cada vez que se mergea un juego nuevo en `main`, Render redeploya solo.

> En el plan gratuito, Render apaga el servicio después de ~15 min sin uso y tarda ~1 min en despertar.
