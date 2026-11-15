# Cómo subir un juego a ClaudeArcade (instrucciones para Claude)

> **Para Claude:** seguí estos pasos en orden. Vas a trabajar en un *fork* del repo y vas a abrir un pedido de cambios (Pull Request). El dueño lo revisa, lo aprueba y la página se actualiza sola. **Nunca** subas cambios fuera de `games/<id-del-juego>/`.

Repo de la plataforma: `https://github.com/sobrevivesai/claude-arcade`
Página en vivo: `https://claude-arcade.onrender.com`

## 0. Requisitos (una sola vez)
- `git` y `node` (v18 o más).
- GitHub CLI (`gh`) con sesión iniciada: `gh auth status`. Si no hay sesión, pedile al usuario que ejecute `gh auth login` (no escribas contraseñas ni tokens vos).

## 1. Traer el repo
```bash
gh repo fork sobrevivesai/claude-arcade --clone --remote
cd claude-arcade
git checkout main && git pull upstream main
```
Si el fork ya existe: `cd claude-arcade && git checkout main && git pull upstream main && git push origin main`.

## 2. Leer la guía
Leé **`GUIA_JUEGOS.md` completa** antes de escribir código. Ahí está el SDK (`Arcade.send`, `Arcade.on`, `Arcade.end`), cómo sincronizar jugadores y la estructura obligatoria. `games/party-games/` es un ejemplo completo.

## 3. Crear o adaptar el juego
```bash
git checkout -b juego/<id-del-juego>
```
- Todo va en `games/<id-del-juego>/` (kebab-case): `game.json`, `index.html`, `thumb.jpg` y lo que el juego necesite.
- Si el juego ya existe en otro repo con servidor propio, **portalo al SDK** (sección 4 de la guía): la lógica del servidor pasa al host.
- Al terminar una partida, el **host** llama `Arcade.end({ winners: [idDelGanador] })`. Cada ganador suma una corona 👑 en la sala.
- La foto `thumb.jpg` es una captura real del juego en 4:3 (800x600).

## 4. Probar
```bash
npm install
node scripts/check-games.js     # tiene que decir "Todo bien"
npm start                       # abrí http://localhost:3000 en dos pestañas
```
En una pestaña creá una sala, en la otra unite con el código, elegí el juego y jugá una partida completa hasta que vuelva al lobby. Revisá la consola del navegador: no tiene que haber errores.

## 5. Subir y pedir aprobación
```bash
git add games/<id-del-juego>
git commit -m "Juego: <Nombre del juego>"
git push -u origin juego/<id-del-juego>
gh pr create --repo sobrevivesai/claude-arcade --base main --title "Juego: <Nombre del juego>" --fill
```
GitHub va a correr la revisión automática (**Revisar juego**). Si falla, leé el resumen del check (`gh pr checks` o en la pestaña *Checks* del PR), arreglá y volvé a hacer `git push` en la misma rama.

## 6. Listo
Pasale al usuario el link del PR. Cuando el dueño del repo lo apruebe (*Merge*), Render publica la nueva versión sola en 1–2 minutos.

### Para actualizar un juego que ya está
Mismos pasos, con una rama nueva (`juego/<id>-v2`) y un PR nuevo. Solo tocá la carpeta de tu juego.
