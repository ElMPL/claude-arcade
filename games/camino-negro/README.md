# Camino Negro

Juego de propiedades con barrios y lugares argentinos, inflación que sube cada vuelta y tarjetas de humor negro ("Camino Negro" y "La Rosca"). 2 a 6 jugadores; los lugares libres los juegan bots.

- `src/data.js`: tablero, grupos y tarjetas. `src/engine.js`: reglas (corre en el host). `src/bot.js`: bots.
- `src/scene.js`: tablero 3D, muñequitos de bloques, casas y dados. `src/main.js`: lobby, red, cola de animaciones y HUD.
- `game.js`: compilado. Para recompilar:

```bash
cd games/camino-negro
npm install --no-save three@0.187.0 esbuild
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
