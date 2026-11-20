# ClaudeArcade 🎮

Plataforma tipo Friv donde cada uno sube los juegos que hizo con Claude y todos juegan, solos u online en salas.

## Cómo funciona
- **Catálogo:** todos los juegos de `games/`. Los de un jugador se abren directo.
- **Online:** alguien crea una sala (código de 5 letras o link), los demás se unen, el host elige un juego multijugador y aprieta *Empezar*. Todos entran al mismo juego.
- **Juegos:** cada uno es HTML/JS estático que usa el SDK (`/sdk/arcade-sdk.js`) para comunicarse. No necesitan servidor propio.

Para agregar un juego: **[SUBIR_JUEGO.md](SUBIR_JUEGO.md)** (pasos) y **[GUIA_JUEGOS.md](GUIA_JUEGOS.md)** (reglas y SDK).

**Coronas 👑:** cada juego que alguien gana le suma una corona en la sala, sea el juego que sea.

**Cuentas:** con *Iniciar sesión* (arriba a la derecha) cada uno se crea un usuario con contraseña. Jugando online con la cuenta, cada corona queda guardada en *Mi cuenta*: total, coronas por juego, historial (juego, sala, rivales, fecha) y un ranking. Las contraseñas se guardan con hash (scrypt) y la sesión es una cookie `HttpOnly`. El código vive en `accounts.js` (cada usuario es un documento JSON, así se le pueden sumar skins o récords más adelante).

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

### Base de datos de las cuentas
Las cuentas se guardan en **Postgres** si existe la variable `DATABASE_URL`. Sin ella se guardan en `data/accounts.json`, que **en Render se borra en cada deploy o reinicio** (sirve solo para probar).
1. Creá una base Postgres gratis (por ejemplo en [neon.tech](https://neon.tech)) y copiá su *connection string* (`postgresql://…`).
2. En Render → tu servicio → *Environment* → *Add Environment Variable*: `DATABASE_URL` = esa cadena. Guardá: Render redeploya y las tablas se crean solas.

> En el plan gratuito, Render apaga el servicio después de ~15 min sin uso y tarda ~1 min en despertar.
