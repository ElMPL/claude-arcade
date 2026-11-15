# Guía para subir un juego a ClaudeArcade

> **Para Claude:** este archivo es la especificación. Si te piden agregar o adaptar un juego a esta plataforma, seguí estas reglas al pie de la letra.

ClaudeArcade es una plataforma tipo Friv. Cada juego es una carpeta dentro de `games/`. La plataforma se encarga del catálogo, las salas online, el lobby y la conexión entre jugadores. **Tu juego no necesita servidor propio**: solo HTML/JS/CSS en el navegador, y usa el SDK `Arcade` para mandar y recibir mensajes con los demás jugadores.

---

## 1. Estructura

```
games/
  mi-juego/            ← id del juego: minúsculas, números y guiones (kebab-case)
    game.json          ← manifiesto (obligatorio)
    index.html         ← punto de entrada (obligatorio)
    thumb.jpg          ← FOTO del juego: captura 4:3 (ideal 800x600). Muy recomendada
    ...                ← cualquier otro archivo (js, css, sprites, sonidos)
```

### Reglas obligatorias
1. **Todo dentro de tu carpeta.** No modifiques nada fuera de `games/<tu-id>/` (ni `server.js`, ni `public/`, ni otros juegos).
2. **Rutas relativas** para tus archivos (`./sprites/p1.png`, `game.js`). La **única** ruta absoluta permitida es el SDK: `/sdk/arcade-sdk.js`.
3. **Sin backend.** Nada de Node, Express ni Socket.io propio. Toda la red pasa por `Arcade.send` / `Arcade.on`.
4. Librerías externas (Three.js, Phaser, etc.) por CDN con versión fija, o copiadas dentro de tu carpeta.
5. El juego tiene que ocupar toda la ventana (`100vw x 100vh`) y adaptarse al redimensionar. Corre dentro de un iframe.
6. Peso total de la carpeta: idealmente menos de 20 MB.
7. Si querés guardar récords con `localStorage`, envolvelo en `try/catch`.

### `game.json`
```json
{
  "name": "Nombre visible",
  "description": "Una frase que explique el juego",
  "author": "Tu nombre",
  "mode": "multi",
  "minPlayers": 2,
  "maxPlayers": 2,
  "emoji": "🥊",
  "color": "#ff4d6d",
  "thumbnail": "thumb.png",
  "controls": "WASD moverse · J golpe · K patada"
}
```
| Campo | Obligatorio | Notas |
|---|---|---|
| `name` | sí | máx. 40 caracteres |
| `mode` | sí | `"multi"` (online, en sala) o `"single"` (un jugador, se juega directo desde el catálogo) |
| `minPlayers` / `maxPlayers` | si es multi | entre 2 y 8. Juego de 1v1: `2` y `2`. Hasta 4: `2` y `4`. Si el juego completa con bots, `minPlayers` puede ser `1` |
| `description`, `author`, `controls` | recomendado | se muestran en el catálogo y en la barra del juego |
| `thumbnail` | recomendado | ruta a la foto del juego (ej. `thumb.jpg`). Si no se pone, se busca `thumb.png/jpg/webp` en la carpeta |
| `emoji` + `color` | recomendado | si el juego no tiene foto, la plataforma genera una portada automática con este emoji, este color y el nombre |
| `entry` | opcional | si tu HTML principal no se llama `index.html` |

---

### Foto del juego (miniatura)
Cada juego debería tener su foto: una **captura real del juego** en 4:3 (800x600 está perfecto), guardada como `thumb.jpg` en la carpeta. Que se vea lo más lindo del juego, con colores fuertes y, si querés, el nombre grande arriba (como en `games/party-games/thumb.jpg`).
Si no hay foto, la plataforma arma una portada automática con el `emoji`, el `color` y el nombre: funciona, pero una captura real queda mucho mejor.

## 2. El SDK

Incluilo **antes** de tu código:
```html
<script src="/sdk/arcade-sdk.js"></script>
```

```js
Arcade.ready().then(ctx => {
  // ctx.online     -> true si viene de una sala, false si se abrió solo
  // ctx.me         -> { id, name, slot }   slot = 0,1,2,3 (orden de la sala; usalo para P1/P2, colores, spawn)
  // ctx.players    -> [{ id, name, slot }, ...]  todos, incluido vos
  // ctx.hostId     -> id del host
  // ctx.isHost     -> true si sos el host
  // ctx.roomCode   -> código de la sala
  iniciarJuego(ctx);
});
```

| Función | Qué hace |
|---|---|
| `Arcade.send(type, data)` | Manda `data` a **todos los demás** (a vos no te llega). `type` es un string corto (máx. 32) que no empiece con `$`. `data` tiene que ser serializable a JSON y pesar menos de 64 KB. |
| `Arcade.send(type, data, { to: playerId })` | Manda solo a un jugador. |
| `Arcade.send(type, data, { volatile: true })` | Mensaje "descartable": si la red se atrasa, se tira en vez de acumularse. **Usalo para estados/posiciones que mandás muchas veces por segundo.** No lo uses para eventos importantes (golpe, KO, fin de ronda). |
| `Arcade.on(type, (data, fromId) => {})` | Escucha mensajes de ese tipo. |
| `Arcade.off(type, fn)` | Deja de escuchar. |
| `Arcade.onPlayerLeft(id => {})` | Alguien se fue (cerró la pestaña o se cortó). |
| `Arcade.onHostChanged(newId => {})` | El host se fue y ahora hay otro. Si tu juego es "host autoritativo", el nuevo host tiene que tomar la simulación. |
| `Arcade.isHost()`, `Arcade.isOnline()`, `Arcade.me`, `Arcade.players` | Atajos. |
| `Arcade.end({ winners: [id, ...], text })` | Termina la partida y vuelve todos al lobby. **Solo cuenta si lo llama el host.** Cada id de `winners` suma **una corona 👑** en la sala (es el puntaje universal de la plataforma: juegos ganados). `text` es opcional (si no se pone, se arma solo: "👑 Gaby ganó …"). Si hay empate, pasá varios ids. En modo `single`, cierra el juego. |

Límite: unos 150 mensajes por segundo por jugador (los que sobren se descartan). Con 20–30 por segundo alcanza para cualquier juego.

### Modo solo / pruebas
Si abrís `games/mi-juego/index.html` directo (sin sala), `Arcade.ready()` resuelve con `online: false` y un solo jugador. `send` no hace nada. Aprovechalo para un modo práctica o un bot, así el juego se puede probar sin otra persona.

---

## 3. Cómo sincronizar (elegí uno)

### A. Host autoritativo — recomendado para **juegos de pelea**, deportes, todo lo que tenga física compartida
- El **host** corre la simulación completa (posiciones, hitboxes, vida, timer, rondas).
- Los **demás** solo mandan sus **inputs** y dibujan el estado que reciben.

```js
Arcade.ready().then(ctx => {
  const inputs = {};               // inputs por jugador (solo los usa el host)
  let state = estadoInicial(ctx.players);

  if (ctx.isHost) {
    Arcade.on('in', (inp, from) => { inputs[from] = inp; });
  } else {
    Arcade.on('st', s => { state = s; });              // estado completo del host
  }
  Arcade.on('ev', e => reproducirEfecto(e));           // golpes, sonidos, KO

  function tick(dt) {
    const mio = leerTeclado();     // { left, right, up, attack, ... }
    if (ctx.isHost) {
      inputs[ctx.me.id] = mio;
      state = simular(state, inputs, dt);
      enviarCada(1 / 30, () => Arcade.send('st', state, { volatile: true }));
      // eventos importantes, sin volatile:
      // Arcade.send('ev', { tipo: 'ko', ganador: id });
    } else {
      Arcade.send('in', mio, { volatile: true });      // o solo cuando cambia
    }
    dibujar(state);
  }
});
```
Para que el jugador no-host no sienta lag, podés predecir su propio movimiento localmente y corregir suave con el estado del host.

### B. Cada uno es dueño de sí mismo — para shooters estilo Krunker, carreras, juegos casuales
- Cada jugador simula **su propio** personaje y manda su posición ~20 veces/seg (`volatile`).
- Los demás interpolan hacia la última posición recibida.
- Disparos: el que dispara manda un evento `shot`. El que recibe el impacto decide si le pegaron y avisa `died`. 

### Fin de partida
Cuando hay un ganador, el **host** manda un evento a todos para mostrar la pantalla final **con una cuenta regresiva visible** ("Volviendo al menú en 10…"). Al llegar a 0 llama `Arcade.end({ winners: [idGanador] })` y todos vuelven al menú de la sala. Usá `setTimeout` para ese final (no dependas de `requestAnimationFrame`, que se pausa si la pestaña queda en segundo plano).

### Si alguien se va
Escuchá `Arcade.onPlayerLeft`. Si quedan menos jugadores que `minPlayers`, la plataforma corta la partida sola. Si el host se fue, `onHostChanged` te avisa.

---

## 4. Si tu juego ya existe con servidor propio (ej. Socket.io en Render)

**Opción recomendada — portarlo:** sacá el servidor y reemplazá cada `socket.emit` / `socket.on` por `Arcade.send` / `Arcade.on`. La lógica que estaba en el servidor pasa al **host** (patrón A). Lo que el servidor hacía para emparejar jugadores (salas, nombres, P1/P2) ya lo da la plataforma: usá `ctx.players` y `ctx.me.slot`.

**Opción alternativa — dejarlo afuera:** en vez de `index.html`, poné la URL en el manifiesto:
```json
{ "name": "Mi juego", "mode": "multi", "minPlayers": 2, "maxPlayers": 2, "url": "https://mi-juego.onrender.com" }
```
La plataforma abre esa URL en el iframe agregando `?arcade_room=CODIGO&arcade_player=ID&arcade_name=Nombre&arcade_slot=0&arcade_players=2&arcade_host=1`. Tu servidor tiene que leer `arcade_room` y meter juntos a todos los que traigan el mismo código. (Esta opción tiene la desventaja de que el plan gratuito de Render "duerme" tu servidor y tarda ~1 minuto en despertar.)

---

## Ejemplo completo
`games/party-games/` es un juego multijugador 3D (Three.js, 2 a 8 jugadores) que usa todo lo de esta guía: host que maneja rondas y puntajes, jugadores dueños de su movimiento, `volatile` para posiciones, `onPlayerLeft`, `onHostChanged` y `Arcade.end`. Su código fuente está en `src/main.js`.

## 5. Probar en tu compu
```bash
npm install
npm start
# abrí http://localhost:3000 en dos pestañas (o una normal y una incógnito)
# en una: Crear sala → en la otra: Unirse con el código → el host elige tu juego → Empezar
```

## 6. Cómo subirlo
Seguí **`SUBIR_JUEGO.md`**: fork → rama → `games/<tu-id>/` → `node scripts/check-games.js` → Pull Request. GitHub revisa el juego automáticamente y, cuando el dueño lo aprueba, la página se actualiza sola.

## Checklist antes del PR
- [ ] Carpeta `games/<id>/` en kebab-case, con `game.json` e `index.html`
- [ ] Tiene `thumb.jpg` con una captura del juego (4:3)
- [ ] `node scripts/check-games.js` dice "Todo bien"
- [ ] `mode`, `minPlayers`, `maxPlayers` correctos
- [ ] Incluye `<script src="/sdk/arcade-sdk.js"></script>` y espera `Arcade.ready()` antes de arrancar
- [ ] Usa `ctx.me.slot` para asignar P1/P2/colores (no el orden de llegada de mensajes)
- [ ] Mensajes frecuentes con `{ volatile: true }`; eventos importantes sin volatile
- [ ] El host muestra una cuenta regresiva y llama `Arcade.end({ winners })` al terminar
- [ ] Maneja `onPlayerLeft` (y `onHostChanged` si es host autoritativo)
- [ ] Funciona abriéndolo solo (modo práctica) sin errores en consola
- [ ] Se adapta al tamaño de la ventana
- [ ] No toca nada fuera de su carpeta, no tiene servidor propio
