// Camino Negro — tablero, grupos y tarjetas. Valores en "miles de pesos" de la primera vuelta:
// todo se multiplica por la inflación acumulada (S.infl), menos la plata que tenés guardada. Como en la vida real.

export const GROUPS = {
  marron:  { col: '#8a5a3c', house: 50 },
  celeste: { col: '#5fc8f0', house: 50 },
  rosa:    { col: '#e64fa5', house: 100 },
  naranja: { col: '#ff9326', house: 100 },
  rojo:    { col: '#e8352f', house: 150 },
  amarillo:{ col: '#f7d722', house: 150 },
  verde:   { col: '#21b357', house: 200 },
  azul:    { col: '#2453c9', house: 200 },
};

const P = (name, g, price, rent, sub) => ({ t: 'prop', name, g, price, rent, sub });
const R = (name, sub) => ({ t: 'rail', name, price: 200, sub });
const U = (name, sub) => ({ t: 'util', name, price: 150, sub });

export const SQUARES = [
  { t: 'go', name: 'SALIDA', sub: 'Cobrás el sueldo (ya devaluado)' },
  P('Laferrere', 'marron', 60, [2, 10, 30, 90, 160, 250], 'Lejos de todo, cerca de nada'),
  { t: 'card', deck: 'rosca', name: 'La Rosca' },
  P('González Catán', 'marron', 60, [4, 20, 60, 180, 320, 450], 'El GPS dice "recalculando… mejor no"'),
  { t: 'tax', name: 'Impuesto PAIS', v: 200, sub: 'Pagás por existir' },
  R('Estación Constitución', 'Puntualidad: a veces'),
  P('Lanús', 'celeste', 100, [6, 30, 90, 270, 400, 550], 'Cuna de campeones y de baches'),
  { t: 'card', deck: 'negro', name: 'Camino Negro' },
  P('Avellaneda', 'celeste', 100, [6, 30, 90, 270, 400, 550], 'Dos estadios, cero veredas sanas'),
  P('Quilmes', 'celeste', 120, [8, 40, 100, 300, 450, 600], 'Olor a cervecería y a río'),
  { t: 'jail', name: 'PENAL DE MARCOS PAZ', sub: 'De visita (por ahora)' },
  P('Morón', 'rosa', 140, [10, 50, 150, 450, 625, 750], 'Tiene su propio gallo'),
  U('La Luz (cuando hay)', 'Factura llega, la luz no'),
  P('Ramos Mejía', 'rosa', 140, [10, 50, 150, 450, 625, 750], 'Clase media aferrada a la medialuna'),
  P('Castelar', 'rosa', 160, [12, 60, 180, 500, 700, 900], 'El country de los que no llegan al country'),
  R('Estación Once', 'Cuidá la mochila'),
  P('Rosario', 'naranja', 180, [14, 70, 200, 550, 750, 950], 'Cuna de la bandera; del resto, mejor no preguntes'),
  { t: 'card', deck: 'rosca', name: 'La Rosca' },
  P('Córdoba', 'naranja', 180, [14, 70, 200, 550, 750, 950], 'Fernet, cuarteto y rotonda'),
  P('Mendoza', 'naranja', 200, [16, 80, 220, 600, 800, 1000], 'Vino para olvidar la cuenta'),
  { t: 'free', name: 'FERIADO LARGO', sub: 'Cobrás el pozo de multas' },
  P('Mar del Plata', 'rojo', 220, [18, 90, 250, 700, 875, 1050], 'Un metro de arena por persona'),
  { t: 'card', deck: 'negro', name: 'Camino Negro' },
  P('Pinamar', 'rojo', 220, [18, 90, 250, 700, 875, 1050], 'Cuatriciclos y pulmón con arena'),
  P('Cariló', 'rojo', 240, [20, 100, 300, 750, 925, 1100], 'No hay calles, hay "senderos"'),
  R('Estación Retiro', 'Tren a ninguna parte'),
  P('Caballito', 'amarillo', 260, [22, 110, 330, 800, 975, 1150], 'El centro geográfico del chamuyo'),
  P('Belgrano', 'amarillo', 260, [22, 110, 330, 800, 975, 1150], 'Barrio chino y expensas chinas'),
  U('El Agua (marroncita)', 'Con minerales de regalo'),
  P('Palermo', 'amarillo', 280, [24, 120, 360, 850, 1025, 1200], 'Hollywood, Soho, Chico… Palermo Deuda'),
  { t: 'gojail', name: 'TE ALLANARON', sub: 'Vas preso sin escalas' },
  P('Recoleta', 'verde', 300, [26, 130, 390, 900, 1100, 1275], 'Hasta los muertos viven mejor'),
  P('San Isidro', 'verde', 300, [26, 130, 390, 900, 1100, 1275], 'Rugby, rosarios y rejas'),
  { t: 'card', deck: 'rosca', name: 'La Rosca' },
  P('Nordelta', 'verde', 320, [28, 150, 450, 1000, 1200, 1400], 'Carpinchos 1, vecinos 0'),
  R('Estación Lacroze', 'La única que anda'),
  { t: 'card', deck: 'negro', name: 'Camino Negro' },
  P('Puerto Madero', 'azul', 350, [35, 175, 500, 1100, 1300, 1500], 'Lavadero de guita premium'),
  { t: 'tax', name: 'Ganancias', v: 100, sub: 'Ganancias no tuviste, el impuesto sí' },
  P('Bariloche', 'azul', 400, [50, 200, 600, 1400, 1700, 2000], 'Viaje de egresados eterno'),
];
SQUARES.forEach((s, i) => { s.i = i; });
export const JAIL = 10;
export const RAILS = SQUARES.filter(s => s.t === 'rail').map(s => s.i);
export const UTILS = SQUARES.filter(s => s.t === 'util').map(s => s.i);
export const groupSquares = g => SQUARES.filter(s => s.g === g).map(s => s.i);

// Efectos: jail, pay, get, pct (parte de tu plata), repairs (por casa / hotel), skip (perdés un turno),
// go (a la salida), move (a un casillero), back (retroceder), rail2 (estación más cercana y pagás doble),
// jcard (salida libre), each (cada uno te paga), payeach (le pagás a cada uno)
export const CARDS = {
  negro: [
    { x: 'Te vincularon a una causa en Comodoro Py. El juez es tu primo, pero igual: VAS PRESO.', e: { t: 'jail' } },
    { x: 'Un motochorro te saludó en Palermo. Te "saludó" el celular también.', e: { t: 'pay', v: 150 } },
    { x: 'Ahorraste en pesos como un campeón. Se despertó el blue.', e: { t: 'pct', v: 0.1 } },
    { x: 'Corte de luz en pleno enero. Grupo electrógeno para todas tus propiedades.', e: { t: 'repairs', h: 40, ht: 115 } },
    { x: 'Pediste un turno en el hospital. Te lo dieron para 2031. Perdés un turno.', e: { t: 'skip' } },
    { x: 'Te paró la caminera: "¿Lo arreglamos acá, jefe?". Lo arreglaron.', e: { t: 'pay', v: 50 } },
    { x: 'Tu abuela cobró la mínima. Le sobró para un alfajor y te lo dio.', e: { t: 'get', v: 20 } },
    { x: 'Hiciste un plazo fijo. La inflación se lo comió antes del vencimiento. Te quedan las migas.', e: { t: 'get', v: 10 } },
    { x: 'Andá a Puerto Madero. Si pasás por la Salida, la guita entra lavadita.', e: { t: 'move', to: 37 } },
    { x: 'Inspección de la ARCA. Tenías todo en negro, obvio.', e: { t: 'repairs', h: 25, ht: 100 } },
    { x: 'Ganaste un juicio laboral. Te pagan en 140 cuotas. Esta es la primera.', e: { t: 'get', v: 50 } },
    { x: 'El colectivo no paró. Ni frenó. Retrocedé 3 casilleros.', e: { t: 'back', n: 3 } },
    { x: 'Te colaste en el tren y te agarró el guarda. Andá a la estación más cercana y pagá el doble.', e: { t: 'rail2' } },
    { x: 'Saliste en el noticiero: "Hombre consigue trabajo en blanco". Cobrás por la nota.', e: { t: 'get', v: 100 } },
    { x: 'Te hiciste amigo de un diputado. SALIDA LIBRE de la cárcel. Guardala, la vas a necesitar.', e: { t: 'jcard' } },
    { x: 'Te anotaron en un plan social que nunca pediste. Avanzá a la Salida y cobrá.', e: { t: 'go' } },
    { x: 'Encontraste un billete de los viejos en un pantalón. No vale nada, pero te emocionaste.', e: { t: 'get', v: 5 } },
    { x: 'Fuiste de vacaciones a Brasil "porque es más barato". Volviste fundido.', e: { t: 'pct', v: 0.15 } },
  ],
  rosca: [
    { x: 'Conseguiste un puesto de ñoqui en el Estado. Cobrás sin ir nunca.', e: { t: 'get', v: 200 } },
    { x: 'Tu cuñado te pidió plata "hasta el viernes". No dijo de qué año.', e: { t: 'pay', v: 100 } },
    { x: 'Asado familiar: te toca poner la carne. Al precio de hoy.', e: { t: 'pay', v: 150 } },
    { x: 'Herencia del tío: un auto sin papeles y tres deudas. Vendés el auto.', e: { t: 'get', v: 100 } },
    { x: 'Es tu cumpleaños: cada jugador te regala plata… que ya no vale nada.', e: { t: 'each', v: 10 } },
    { x: 'Error del banco a tu favor. El banco quebró igual.', e: { t: 'get', v: 200 } },
    { x: 'Pagaste la prepaga. Aumentó en el mismo mes. Dos veces.', e: { t: 'pay', v: 50 } },
    { x: 'El vecino se colgó de tu cable. Te cortaron a vos. Reconexión por propiedad.', e: { t: 'repairs', h: 20, ht: 80 } },
    { x: 'Corralito: tus ahorros quedaron atrapados en el banco. Para siempre.', e: { t: 'pct', v: 0.15 } },
    { x: 'Ganaste el Prode del barrio. El organizador se fue con la mitad.', e: { t: 'get', v: 100 } },
    { x: 'Firmaste como testigo sin leer. Ahora el acusado sos vos. VAS PRESO.', e: { t: 'jail' } },
    { x: '"Yo no fui, fue el contador". SALIDA LIBRE de la cárcel.', e: { t: 'jcard' } },
    { x: 'Te devolvieron lo de Ganancias. Mentira, era un chiste. Pagás.', e: { t: 'pay', v: 50 } },
    { x: 'Vendiste dólares en una cueva de la calle Florida. Negocio redondo.', e: { t: 'get', v: 150 } },
    { x: 'Choripán en la cancha: barato, y la intoxicación sale gratis. Perdés un turno.', e: { t: 'skip' } },
    { x: 'El dueño te aumentó el alquiler. En dólares. Por adelantado.', e: { t: 'pay', v: 100 } },
    { x: 'Sos el único de la mesa que paga impuestos. Le pagás a cada jugador para que no lo cuente.', e: { t: 'payeach', v: 25 } },
    { x: 'Pusiste un kiosco. Te robaron, te clausuraron y te volvieron a robar. Cobrás el seguro.', e: { t: 'get', v: 50 } },
  ],
};

export const SKIN_COLS = ['#e8352f', '#2f7be8', '#2bbd4e', '#f2c21b', '#a54de8', '#ff8a1f'];
export const SALARY = 200, BAIL = 50, START_CASH = 1500, INFL_STEP = 0.04;

// $ en miles con inflación: 1500 → "$1.500.000"
export function money(v) { return '$' + Math.round(v * 1000).toLocaleString('es-AR'); }
export function short(v) { const p = Math.round(v * 1000); return p >= 1e6 ? '$' + (p / 1e6).toLocaleString('es-AR', { maximumFractionDigits: 2 }) + 'M' : '$' + Math.round(p / 1000) + 'K'; }
