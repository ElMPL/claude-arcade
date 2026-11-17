# Counter Strika

(Antes se llamaba Low Strike; la carpeta y el id del juego siguen siendo `low-strike` para no romper enlaces ni configuraciones guardadas.)

Shooter táctico en 3D de poligonado medio para ClaudeArcade, inspirado en Counter-Strike 2. Los equipos se completan con bots.

## Qué tiene
- **Mapas:** Dust II y Mirage, importados de modelos 3D de los mapas originales (ver *Mapas*).
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
  - No son un aimbot: apuntan sobre todo al pecho, arrancan con la mira desviada y la van corrigiendo, reaccionan más lento si el enemigo aparece de costado y se desacomodan entre ráfagas.
  - Juegan en equipo: los T se juntan antes de entrar al sitio, los CT esperan mirando la entrada, rotan cuando un compañero ve a los T, cubren la bomba después de plantar y retroceden con poca vida.

## Menú de inicio
- **Pestaña JUGAR:** tu personaje en 3D, el grupo de la sala, la elección de equipo (T, CT o automático) y la tarjeta de modo.
- **Modos:** 2v2, 3v3 o 5v5, con bots o sin bots, en los 2 mapas. Se elige también la duración y el nivel de los bots.
- **2v2 (estilo Wingman):** se juega en un solo sitio. El juego busca los caminos entre los spawns y ese sitio y cierra el resto del mapa con barricadas de madera.
- **Pestaña CONFIGURACIÓN** (también desde la pausa con Esc): sensibilidad, invertir eje Y, volumen, sombras y la mira (estática o dinámica, color, largo, separación, grosor, punto central y contorno). Se guarda en el navegador.
- Por ahora no hay skins: un modelo por bando, parecido a los originales (T con pasamontañas y chaleco de cargadores, CT con casco, antiparras y máscara de gas).

## Mapas
Los mapas salen de modelos 3D de Dust II y Mirage que subió el usuario (no son obra nuestra: son recreaciones de mapas de Valve, así que conviene tenerlo en cuenta antes de publicar el juego en otro lado). `tools/import_map.py` los convierte:
- **Colisión:** muestrea la malla y arma, por celda, hasta 3 tramos sólidos (piso, techos, pasarelas) en `maps/<id>.png`. Detecta paredes, abre las hojas de puerta que tapaban el paso (`open` en `tools/zones_<id>.json`) y descarta cables y vigas colgantes.
- **Render:** guarda la malla en centímetros en `maps/<id>.bin`, separada por tipo (piso, pared, techo…). Mirage se reduce a ~200 mil triángulos.
- **Zonas:** sitios A y B y spawns se marcan a mano en `tools/zones_<id>.json` (en una grilla de 512; el mapa se importa a 1024 celdas, ~14 cm por celda en Dust II).
- Las grietas entre piezas de piso del modelo se rellenan para que no aparezcan paredes invisibles.

Al cargar, el juego tapa con paredes invisibles los lugares de los que un jugador no podría volver (afuera del mapa, pozos) y los techos a los que se llega trepando, así nadie se cae del mapa ni camina por arriba. Si un jugador queda encajado en una esquina, se lo corre al lugar libre más cercano.

En el juego la malla se pinta con texturas generadas por código al estilo de Dust II: arenisca en bloques, revoque, baldosas, madera; y los techos que no se pueden pisar van de terracota.

## Gráficos
- Texturas generadas por código en 512 px con relieve (normal maps): arenisca en bloques, revoque con partes descascaradas, arena con piedritas, baldosas irregulares, madera, tejas, chapa. Materiales PBR con luz de entorno.
- Personajes y armas de poligonado medio: cuerpos redondeados, cascos y cabezas esféricas, piernas y brazos cilíndricos, armas con biseles y cilindros suaves.
- El sol proyecta sombras (se pueden bajar o sacar en la configuración).
- Las armas se modelan por perfil con detalles: rieles, ventilaciones, estrías de la corredera, lentes de la mira, nervios del cargador. Las manos las agarran con IK.

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
| Esc | soltar el mouse / configuración |

## Código
`src/` se compila a `game.js` con esbuild:
```
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
- `tools/import_map.py` importa los mapas desde los modelos 3D (necesita `trimesh`, `pyfqmr`, `numpy` y `Pillow`).
- `wingman.js` cierra el mapa para el 2v2.
- `settings.js` tiene el panel de configuración.
- `world.js` arma el mundo de columnas, que se usa para colisiones y balas.
- `mesher.js` arma la malla low-poly.
- `nav.js` arma la grilla de navegación de los bots.
- `host.js` tiene las reglas, la economía y la bomba. Las maneja el host.
- `bots.js` tiene la IA de los bots.
