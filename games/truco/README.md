# Truco 3D

Truco argentino (sin flor) en un bar 3D, en primera persona. 1v1, 2v2 o 3v3; los lugares libres los juegan bots.

- `js/rules.js`, `js/engine.js`, `js/bot.js`: reglas, motor (corre en el host) e IA de los bots.
- `src/scene.js`: bar, mesa, luces y cartas. `src/chars.js`: personajes y skins. `src/main.js`: mesa, red y HUD.
- `assets/cartas.webp`: frentes de las cartas (recortados de la imagen que se pasó). El dorso es un diseño propio.
- `game.js`: compilado. Para recompilar:

```bash
cd games/truco
npm install --no-save three@0.187.0 esbuild
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
