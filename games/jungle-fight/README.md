# Jungle Fight

Juego de peleas 2D de [iamaster213-del/jungle-fight](https://github.com/iamaster213-del/jungle-fight), adaptado a ClaudeArcade.

## Cambios para la plataforma
- La red propia (WebSocket + `server.js`) se reemplazó por el SDK: el **host** de la sala es el Jugador 1 y simula la pelea, el otro jugador manda sus teclas y recibe 30 "fotos" por segundo (`volatile`).
- Con 1 jugador en la sala se juega contra la CPU (o 2 personas en el mismo teclado).
- Al terminar (2 de 3 rondas) el host muestra una cuenta regresiva y llama `Arcade.end` con el ganador (👑).
- Si el rival se va, gana el que queda.
- El menú "EN LÍNEA" se sacó: las salas las maneja la plataforma. La ayuda se abre con el botón "?".
- Modo admin (F7): vida infinita, energía llena, golpes x3 y K.O. al rival.

La lógica de pelea, los luchadores y los escenarios son los originales.
