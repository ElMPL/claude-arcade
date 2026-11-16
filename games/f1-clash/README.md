# F1 Clash

Carreras de fórmula en 3D (Three.js) con física realista, de 1 a 8 autos (los lugares libres se completan con bots).

## Física (`src/physics.js`)
- Modelo de 4 ruedas a 400 Hz con neumáticos tipo Pacejka y deslizamiento combinado (frenar y doblar comparten agarre).
- Carga aerodinámica y arrastre ∝ v² (≈2 g de downforce a 300 km/h), transferencia de peso longitudinal y lateral, sensibilidad a la carga.
- Motor V6 con curva de torque, caja de 8 marchas (automática o manual), embrague de largada, autoblocante, freno motor y marcha atrás.
- Frenos con reparto delantero, ABS y control de tracción opcionales.
- Rebufo detrás de otro auto y DRS en las rectas largas (a menos de 1 s del de adelante, desde la vuelta 2).
- Superficies: asfalto, pianos, pasto y grava con distinto agarre y frenado.

## Ayudas
- Dirección asistida: la tecla a fondo pide la curva más cerrada que permite el agarre y corrige sola si la cola se va.
- Aviso de frenada: se prende "FRENÁ" en el tablero si llegás muy rápido (no frena por vos).
- ABS por deslizamiento combinado: frenando en curva libera presión antes de que se bloqueen las ruedas.

## Daño, boxes y penalizaciones
- Daño por partes (alerones, trompa, suspensiones/ruedas, pontones, motor): cambia la aerodinámica, el agarre, la dirección y la potencia. Las piezas rotas se desprenden y quedan en la pista.
- `P` pide entrar a boxes en esa vuelta (calle con límite de 80 km/h + reparación según el daño). `R` (o automático si el auto queda destrozado o atascado): reaparecés en la pista titilando y con menos potencia por 6 s.
- Límites de pista: 3 avisos y después +5 s. Chocar fuerte de atrás: +5 s.

## Red
Cada jugador simula su propio auto y lo transmite a 20 Hz. El host simula los bots, junta las llegadas y muestra el resultado. Si el host se va, otro jugador toma los bots.

## Código
`src/` → `game.js` con esbuild:
```
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
Circuitos (Bahía Azul, Monte Niebla y Puerto Nocturno) en `src/tracks.js` (puntos de control unidos con splines). La línea ideal y el perfil de velocidad de los bots se calculan solos.
