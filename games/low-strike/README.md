# Counter Strika

(Antes se llamaba Low Strike; la carpeta y el id del juego siguen siendo `low-strike` para no romper enlaces ni configuraciones guardadas.)

Shooter táctico en 3D de poligonado medio para ClaudeArcade, inspirado en Counter-Strike 2. Los equipos se completan con bots.

## Qué tiene
- **Mapas:** Dust II y Mirage, importados de modelos 3D de los mapas originales (ver *Mapas*).
- **Armas:** todas las de CS2, con su precio, premio por baja, daño, penetración de blindaje, cadencia y cargador. El retroceso sigue un patrón y las balas atraviesan paredes finas.
- **Menú de compra:** como el de CS2, en 5 columnas (Equipo, Pistolas, Intermedias, Rifles, Granadas); se abre con **B**. Cada bando tiene el loadout más usado en partidas profesionales y solo se puede comprar lo que está en él:
  - T: Glock-18, Dual Berettas, P250, Tec-9, Desert Eagle · MAC-10, UMP-45, XM1014, Nova, P90 · Galil AR, AK-47, SSG 08, SG 553, AWP.
  - CT: USP-S, Dual Berettas, P250, Five-SeveN, Desert Eagle · MP9, UMP-45, XM1014, Nova, P90 · FAMAS, M4A1-S, M4A4, SSG 08, AWP.
- **Economía de CS2:**
  - Arrancás con $800 y el máximo es $16000.
  - Ganar una ronda paga $3250, o $3500 si fue por bomba o desactivación.
  - El bonus por derrota sube así: 1400, 1900, 2400, 2900 y 3400.
  - Plantar paga $300 al que planta y $800 a todo el equipo T si pierde la ronda.
  - Desactivar paga $300.
  - Los T que siguen vivos cuando se termina el tiempo no cobran.
- **Modos de juego:** Competitivo, Casual (plata hasta $10000, chaleco y kit gratis), Deathmatch (reaparición y compra libre), Carrera de armamentos (cada baja te sube de arma; se gana con una baja de cuchillo), Retake (la bomba arranca plantada y los CT la tienen que recuperar) y Práctica (plata infinita, marca dónde pegan las balas y muestra la trayectoria de la granada).
- **Rondas:**
  - 15 s para comprar antes de empezar y 1:55 de ronda.
  - Si termina empatado hay tiempo extra: bloques de 6 rondas con $10000, cambiando de lado cada 3.
  - Cada equipo tiene 3 tiempos muertos de 30 s y puede votar para rendirse (radio **C**). Todavía no hay votación para expulsar jugadores.
  - Con la bomba plantada hay 40 s. Desactivarla lleva 10 s, o 5 s con kit.
  - Los equipos cambian de lado en el entretiempo.
  - Duración de la partida: Rápida (gana el primero a 5), Corta (a 9) o Competitiva (a 13).
- **Votaciones:** rendirse o echar a un compañero (radio **C**, mayoría del equipo).
- **Radar compartido:** los enemigos que ve cualquier compañero aparecen en tu radar. Se dibuja en cada cuadro (solo el pedazo visible del mapa) y el avistaje se calcula 10 veces por segundo.
- **Al morir:** tarjeta con quién te mató, con qué arma, cuánta vida le quedó y el daño que se hicieron.
- **Inspección** del arma con **F**. **Pantalla de carga** con el plano del mapa (sitios marcados) y consejos.
- **Comunicación:** radio con **Z / X / C** (los comandos de CS:GO), marcador en el piso y en el radar con **V** o la rueda del mouse.
- **Fin de partida:** tabla con bajas, asistencias, muertes, HS%, ADR y MVP. La tabla con Tab muestra también la plata de tu equipo.
- **Kill feed:** íconos de headshot, a través de pared, sin mira, a través de humo y atacante cegado.
- **Movimiento:** saltar justo al caer salta menos y caer rápido frena, como en CS:GO. Si quedás en un hueco sin salida, te saca solo.
- **Precisión como en CS2:** cada arma tiene su imprecisión parada, agachada, corriendo y en el aire (la SSG es precisa en el punto alto del salto; la AWP no); al caer tarda un instante en recuperarse.
- **Sonido 3D:** se oye de qué lado viene cada cosa; lo que viene de abajo suena apagado y lo de arriba más agudo. Los pasos cambian según el piso (arena, piedra, madera, metal) y correr se oye más lejos.
- **Granadas como en CS:** 675 u/s × (0.3 + 0.7·fuerza), el ángulo se levanta 10°, salen 16 u adelante del ojo y se les suma 1.25 × la velocidad del jugador (también la vertical: el jumpthrow llega más lejos). Se tiran 0,1 s después de soltar el botón. No hay techo invisible: solo chocan contra lo que el mapa dibuja (las paredes de colisión que el modelo no muestra se ignoran para las granadas). Rebotan más en paredes que en el piso, el humo llena el lugar sin atravesar paredes y una flash casi no ciega si estás de espaldas.
- **Bots:** cambian de ruta, chequean ángulos mientras caminan, compran y usan humos, flashes y molotovs, y rotan con lo que avisa el equipo (radio o marcador).
- **Red:** los jugadores remotos se dibujan interpolados 100 ms atrás (movimiento suave); los tiros los decide quien dispara, según lo que veía.
- **Retroceso:** patrones fijos para AK-47, M4A4 y los demás rifles, siempre iguales para que se puedan aprender.
- **Granadas:** HE, flash, humo (tapa la vista de los bots y apaga el fuego), molotov/incendiaria y señuelo.
- **Bots:** se mueven con navegación A*, compran, plantan y desactivan. Tienen 4 niveles.
  - No son un aimbot: apuntan sobre todo al pecho, arrancan con la mira desviada y la van corrigiendo, reaccionan más lento si el enemigo aparece de costado y se desacomodan entre ráfagas.
  - Juegan en equipo: los T se juntan antes de entrar al sitio, los CT esperan mirando la entrada, rotan cuando un compañero ve a los T, cubren la bomba después de plantar y retroceden con poca vida.

## Menú de inicio
- **Pestaña JUGAR:** estética oscura tipo CS2 (pedestal con aro del color de tu equipo, polvo en el aire), tu personaje en 3D, el grupo de la sala, la elección de equipo (T, CT o automático) y la tarjeta de modo con el mapa.
- **Modos:** 2v2, 3v3 o 5v5, con bots o sin bots, en los 2 mapas. Se elige también la duración y el nivel de los bots.
- **2v2 (estilo Wingman):** se juega en un solo sitio. El otro sitio y sus entradas se cierran con una pared invisible alta (no se puede saltar); los caminos entre los spawns y el sitio quedan libres.
- **Pestaña CONFIGURACIÓN** (también desde la pausa con Esc): sensibilidad, invertir eje Y, volumen, sombras y la mira (estática o dinámica, color, largo, separación, grosor, punto central y contorno). Se guarda en el navegador.
- Por ahora no hay skins: un modelo por bando, parecido a los originales (T con pasamontañas y chaleco de cargadores, CT con casco, antiparras y máscara de gas).

## Mapas
Los mapas salen de modelos 3D de Dust II y Mirage que subió el usuario (no son obra nuestra: son recreaciones de mapas de Valve, así que conviene tenerlo en cuenta antes de publicar el juego en otro lado). `tools/import_map.py` los convierte:
- **Colisión:** muestrea la malla y arma, por celda, hasta 3 tramos sólidos (piso, techos, pasarelas) en `maps/<id>.png`. Detecta paredes, deja las puertas y portones del modelo (las hojas abiertas no tapan el paso) y descarta cables y vigas colgantes.
- **Render:** guarda la malla en centímetros en `maps/<id>.bin`, separada por tipo (piso, pared, techo…). Mirage se reduce a ~340 mil triángulos.
- **Zonas:** sitios A y B y spawns se ubicaron con las coordenadas reales de cada mapa (los carteles de los sitios y los spawns de cada equipo) y se marcan en `tools/zones_<id>.json` (en una grilla de 512; el mapa se importa a 1024 celdas, ~14 cm por celda en Dust II).
- Las grietas entre piezas de piso del modelo se rellenan para que no aparezcan paredes invisibles.

Al cargar, el juego tapa con paredes invisibles los lugares de los que un jugador no podría volver (afuera del mapa, pozos) y los techos a los que se llega trepando, así nadie se cae del mapa ni camina por arriba. Si un jugador queda encajado en una esquina, se lo corre al lugar libre más cercano.

En el juego la malla se pinta con texturas generadas por código al estilo de Dust II: arenisca en bloques, revoque, baldosas, madera; y los techos que no se pueden pisar van de terracota.

## Gráficos
- Texturas generadas por código en 512 px con relieve (normal maps): arenisca en bloques, revoque con partes descascaradas, arena con piedritas, baldosas irregulares, madera, tejas, chapa. Materiales PBR con luz de entorno.
- **Modelos de armas:** geometría de los modelos de CS2 que subió el usuario (`tools/import_guns.py` los simplifica a ~10 mil triángulos los rifles y ~6 mil las pistolas, separa las piezas y les pone color: madera, polímero, metal, cargador). No son obra nuestra: son de Valve, así que hay que tenerlo en cuenta antes de publicar el juego afuera de ClaudeArcade.
- **Primera persona:** manos con guante y dedos articulados (3 falanges por dedo y pulgar) en poses distintas para empuñadura, guardamanos, pistola a dos manos, cuchillo y granadas; antebrazos que entran desde abajo de la pantalla. AK-47, M4A4/M4A1-S y pistolas rehechas con proporciones de las reales (cargador curvo, guardamanos, freno de boca, correderas redondeadas) y partes metálicas con brillo.
- **Personajes:** cuerpo con forma, cara cubierta (pasamontañas o máscara con casco, antiparras y auriculares), chalecos con bolsillos; al disparar el arma patea y al recargar la mano va al cargador. Sombras reales que siguen la pose.
- **Mapas:** toldos, ventanas con postigos y cables entre paredes (solo sobre paredes planas). Las zonas de plantar se recortan a la parte caminable del sitio.
- **HUD estilo CS2:** paneles finos, íconos propios en SVG (vida, chaleco, chaleco + casco, kit, bomba, carrito de compra) y ficha corta de cada arma en el menú de compra.
- Personajes y armas de poligonado medio: cuerpos redondeados, cascos y cabezas esféricas, piernas y brazos cilíndricos, armas con biseles y cilindros suaves.
- El sol proyecta sombras (se pueden bajar o sacar en la configuración). Cada jugador tiene además una sombra suave debajo.
- **Props:** barriles, pallets, gomas, garrafas, macetas, bolsas de arena, carros, cajas y puestos de fruta repartidos por cada mapa (también tapan balas y bloquean el paso).
- Pisos nuevos: adoquines en Dust II y losas de piedra en Mirage; zócalos de piedra al pie de las paredes.
- **Animaciones:** recarga con la mano sacando y metiendo el cargador; los cuerpos caen hacia el lado contrario al disparo, rebotan y quedan con brazos y piernas sueltos; al mirar abajo ves tus piernas.
- Agujeros de bala, música de inicio de ronda y de MVP.
- Las armas se modelan por perfil con detalles: rieles, ventilaciones, estrías de la corredera, lentes de la mira, nervios del cargador. Las manos las agarran con IK.

## Controles
| Tecla | Acción |
|---|---|
| WASD | moverse |
| Shift | caminar |
| Ctrl | agacharse (en pantalla completa Ctrl+W no cierra la pestaña) |
| Z / X / C | radio: órdenes, respuestas y tácticas (timeout táctico y rendirse están en C) |
| V o clic de la rueda | marcar un lugar para el equipo |
| Espacio | saltar |
| Clic | disparar |
| Clic derecho | mira o puñalada |
| R | recargar |
| 1-5, Q, rueda del mouse | cambiar de arma |
| B | comprar |
| E | desactivar o agarrar un arma |
| G | tirar el arma o la granada que tenés en la mano: sale en arco hacia donde mirás y cualquiera la puede agarrar (vos no la volvés a juntar sin querer) |
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
