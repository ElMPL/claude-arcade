# F1 Clash

Carreras de fórmula en 3D (Three.js) con física realista, de 1 a 8 autos (los lugares libres se completan con bots).

## Física (`src/physics.js`)
- Modelo de 4 ruedas a 400 Hz con neumáticos tipo Pacejka y deslizamiento combinado (frenar y doblar comparten agarre).
- Carga aerodinámica y arrastre ∝ v² (≈2 g de downforce a 300 km/h), transferencia de peso longitudinal y lateral, sensibilidad a la carga.
- Motor V6 con curva de torque, caja de 8 marchas (automática o manual), embrague de largada, autoblocante, freno motor y marcha atrás.
- Frenos con reparto delantero, ABS y control de tracción opcionales.
- Rebufo detrás de otro auto y DRS en las rectas largas (a menos de 1 s del de adelante, desde la vuelta 2).
- Superficies: asfalto, pianos, pasto y grava con distinto agarre y frenado.

## Red
Cada jugador simula su propio auto y lo transmite a 20 Hz. El host simula los bots, junta las llegadas y muestra el resultado. Si el host se va, otro jugador toma los bots.

## Código
`src/` → `game.js` con esbuild:
```
npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js
```
Circuitos en `src/tracks.js` (puntos de control unidos con splines). La línea ideal y el perfil de velocidad de los bots se calculan solos.
