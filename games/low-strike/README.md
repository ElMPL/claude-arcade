# Low Strike

Shooter táctico 5 contra 5 en low-poly para ClaudeArcade, inspirado en Counter-Strike 2. Los equipos se completan con bots.

## Qué tiene
- **Mapas:** Dust II, Mirage y Vertigo. La forma de cada mapa sale de los radares oficiales de CS2: el plano visto desde arriba, con la altura codificada por color. Los radares no vienen con el juego, solo la geometría que se generó a partir de ellos (`maps/*.png`).
- **Armas:** todas las de CS2, con su precio, premio por baja, daño, penetración de blindaje, cadencia y cargador. El retroceso sigue un patrón y las balas atraviesan paredes finas.
- **Menú de compra:** como el de CS2, en 5 columnas: Pistolas, Intermedias, Rifles, Equipo y Granadas. Se abre con **B** y se compra con las teclas 1-5 y después 1-n, o con el mouse.
- **Economía de CS2:**
  - Arrancás con $800 y el máximo es $16000.
  - Ganar una ronda paga $3250, o $3500 si fue por bomba o desactivación.
  - El bonus por derrota sube así: 1400, 1900, 2400, 2900 y 3400.
  - Plantar paga $300 al que planta y $800 a todo el equipo T si pierde la ronda.
  - Desactivar paga $300.
  - Los T que siguen vivos cuando se termina el tiempo no cobran.
- **Rondas:**
  - 12 s para comprar antes de empezar y 1:55 de ronda.
  - Con la bomba plantada hay 40 s. Desactivarla lleva 10 s, o 5 s con kit.
  - Los equipos cambian de lado en el entretiempo.
  - Duración de la partida: Rápida (gana el primero a 5), Corta (a 9) o Competitiva (a 13).
- **Granadas:** HE, flash, humo (tapa la vista de los bots y apaga el fuego), molotov/incendiaria y señuelo.
- **Bots:** se mueven con navegación A*, compran, plantan y desactivan. Tienen 4 niveles.

## Menú de inicio
- **Pestaña JUGAR:** tu personaje en 3D, el grupo de la sala, la elección de equipo (T, CT o automático) y la tarjeta de modo.
- **Modos:** 2v2, 3v3 o 5v5, con bots o sin bots, en cualquiera de los 3 mapas. Se elige también la duración y el nivel de los bots.
- **Pestaña CASILLERO:** 4 skins por equipo y 6 acabados para las armas. La elección se guarda y la ven los demás jugadores.

## Gráficos
- Las paredes se arman con *marching squares*, así que los bordes quedan rectos o en diagonal, sin serrucho.
- Los pisos son planos y las rampas lisas.
- Los túneles e interiores tienen techo y las puertas tienen dintel.
- Las cajas son de madera, y también hay contenedores y bloques de piedra.
- Paredes y pisos usan texturas generadas por código.
- El sol proyecta sombras.
- Las armas se modelan por perfil y las manos las agarran con IK.

## Controles
| Tecla | Acción |
|---|---|
| WASD | moverse |
| Shift | caminar |
| C o Ctrl | agacharse (en pantalla completa Ctrl+W no cierra la pestaña) |
| Espacio | saltar |
| Clic | disparar |
| Clic derecho | mira o puñalada |
| R | recargar |
| 1-5, Q, rueda del mouse | cambiar de arma |
| B | comprar |
| E | desactivar o agarrar un arma |
| G | tirar el arma |
| Tab | tabla de puntajes |
| [ y ] | sensibilidad del mouse |

## Código
`src/` se compila a `game.js` con esbuild:
```
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
- `tools/build_maps.py` genera los mapas a partir de los radares.
- `world.js` arma el mundo de columnas, que se usa para colisiones y balas.
- `mesher.js` arma la malla low-poly.
- `nav.js` arma la grilla de navegación de los bots.
- `host.js` tiene las reglas, la economía y la bomba. Las maneja el host.
- `bots.js` tiene la IA de los bots.
