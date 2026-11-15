# Party Games

Minijuegos 3D estilo Hypixel para 2 a 8 jugadores, con podio al final.

- Código fuente: `src/main.js` (usa Three.js).
- `game.js` es el archivo compilado que carga el juego. Si cambiás `src/main.js`, recompilá:

```bash
cd games/party-games
npm install --no-save three@0.187.0 esbuild
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```

## Minijuegos
| Minijuego | Cómo se gana |
|---|---|
| Pisos que caen | Último en pie (los pisos se caen cuando los pisás) |
| Lluvia de yunques | Sobrevivir 45 s esquivando yunques |
| Caza de gemas | Más gemas en 45 s (las doradas valen 3) |
| Carrera de obstáculos | Llegar primero a la meta |
| Luz roja, luz verde | Llegar primero sin moverte con luz roja |

Cada ronda da ⭐3 / ⭐2 / ⭐1 a los tres primeros (los empates comparten puesto). Al final, podio con los puntos totales.

Red: cada jugador simula su propio movimiento; el host maneja las rondas, los eventos (pisos, yunques, gemas, semáforo) y los puntajes.
