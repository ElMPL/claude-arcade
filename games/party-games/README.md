# Party Games

Minijuegos 3D estilo fiesta para 2 a 8 jugadores, con podio al final.

| Minijuego | Cómo se gana |
|---|---|
| 🏎️ Turbo Karts | Terminar 3 vueltas primero (turbos, derrape, objetos) |
| ⬢ Hexagonía | Último en pie (los hexágonos se caen al pisarlos, 3 pisos) |
| 💣 Bomba Caliente | No tener la bomba cuando explota |
| 🪙 Lluvia de Monedas | Juntar más monedas esquivando barras giratorias |
| 🏁 Circuito Loco | Llegar primero a la meta (checkpoints con bandera) |
| 💥 Empujones | Tirar a todos de la plataforma que se achica |

Cada ronda da ★3 / ★2 / ★1 a los tres primeros (los empates comparten puesto).

## Código
- `src/core.js`: render toon, cielo, agua, colisiones, partículas, audio.
- `src/character.js`: personajes y karts.
- `src/minigames.js`: los 6 minijuegos.
- `src/main.js`: rondas, movimiento, cámara, red y HUD.
- `game.js`: el compilado que carga el juego. Para recompilar:

```bash
cd games/party-games
npm install --no-save three@0.187.0 esbuild
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```

Para probar: `localStorage.setItem('pg:only','karts,sumo')` elige qué minijuegos se juegan y `localStorage.setItem('pg:fast','1')` acelera los tiempos.
