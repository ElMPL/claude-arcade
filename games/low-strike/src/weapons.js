// Armas con los valores de CS2 (precio, premio por baja, daño, penetración de blindaje, cadencia,
// cargador, velocidad de movimiento en unidades/s, caída por distancia).
// spread: imprecisión parado (rad); move: imprecisión extra a velocidad máxima; kick/sway: retroceso (grados)
export const U = 0.0254;
const W = (o) => ({ auto: false, pellets: 1, hs: 4, range: 8192, rangeMod: 0.98, spread: 0.004, move: 0.12, kick: 0.6, sway: 0.4, kickCap: 12, recover: 9, scope: null, ...o });
export const WEAPONS = {
  knife: W({ name: 'Cuchillo', cat: 'knife', side: 'both', price: 0, reward: 1500, dmg: 40, ap: 0.85, rpm: 150, mag: 0, reserve: 0, speed: 250, range: 64, auto: true }),
  // pistolas
  glock: W({ name: 'Glock-18', cat: 'pistol', side: 'T', price: 200, reward: 300, dmg: 30, ap: 0.47, rpm: 400, mag: 20, reserve: 120, reload: 2.2, speed: 240, rangeMod: 0.85, spread: 0.007, move: 0.05, kick: 0.9, sway: 0.4, kickCap: 5 }),
  usp: W({ name: 'USP-S', cat: 'pistol', side: 'CT', price: 200, reward: 300, dmg: 35, ap: 0.505, rpm: 352, mag: 12, reserve: 24, reload: 2.2, speed: 240, rangeMod: 0.91, spread: 0.004, move: 0.045, kick: 1.1, sway: 0.3, kickCap: 5, silent: true }),
  p2000: W({ name: 'P2000', cat: 'pistol', side: 'CT', price: 200, reward: 300, dmg: 35, ap: 0.505, rpm: 352, mag: 13, reserve: 52, reload: 2.2, speed: 240, rangeMod: 0.91, spread: 0.005, move: 0.045, kick: 1.1, sway: 0.3, kickCap: 5 }),
  dualies: W({ name: 'Dual Berettas', cat: 'pistol', side: 'both', price: 300, reward: 300, dmg: 38, ap: 0.575, rpm: 500, mag: 30, reserve: 120, reload: 3.8, speed: 240, rangeMod: 0.79, spread: 0.009, move: 0.05, kick: 1.0, sway: 0.5, kickCap: 6 }),
  p250: W({ name: 'P250', cat: 'pistol', side: 'both', price: 300, reward: 300, dmg: 38, ap: 0.64, rpm: 400, mag: 13, reserve: 26, reload: 2.2, speed: 240, rangeMod: 0.85, spread: 0.007, move: 0.05, kick: 1.3, sway: 0.4, kickCap: 6 }),
  tec9: W({ name: 'Tec-9', cat: 'pistol', side: 'T', price: 500, reward: 300, dmg: 33, ap: 0.903, rpm: 500, mag: 18, reserve: 90, reload: 2.5, speed: 240, rangeMod: 0.831, spread: 0.009, move: 0.04, kick: 1.2, sway: 0.5, kickCap: 7 }),
  fiveseven: W({ name: 'Five-SeveN', cat: 'pistol', side: 'CT', price: 500, reward: 300, dmg: 32, ap: 0.9115, rpm: 400, mag: 20, reserve: 100, reload: 2.2, speed: 240, rangeMod: 0.81, spread: 0.007, move: 0.045, kick: 1.1, sway: 0.4, kickCap: 6 }),
  cz75: W({ name: 'CZ75-Auto', cat: 'pistol', side: 'both', price: 500, reward: 100, dmg: 31, ap: 0.776, rpm: 600, mag: 12, reserve: 12, reload: 2.7, speed: 240, rangeMod: 0.85, spread: 0.008, move: 0.05, kick: 1.1, sway: 0.6, kickCap: 8, auto: true }),
  deagle: W({ name: 'Desert Eagle', cat: 'pistol', side: 'both', price: 700, reward: 300, dmg: 53, ap: 0.932, rpm: 267, mag: 7, reserve: 35, reload: 2.2, speed: 230, rangeMod: 0.81, spread: 0.006, move: 0.1, kick: 3.4, sway: 0.6, kickCap: 8, recover: 7 }),
  r8: W({ name: 'R8 Revolver', cat: 'pistol', side: 'both', price: 600, reward: 300, dmg: 86, ap: 0.932, rpm: 120, mag: 8, reserve: 8, reload: 2.3, speed: 220, rangeMod: 0.94, spread: 0.006, move: 0.1, kick: 3.6, sway: 0.4, kickCap: 8 }),
  // subfusiles
  mac10: W({ name: 'MAC-10', cat: 'smg', side: 'T', price: 1050, reward: 600, dmg: 29, ap: 0.575, rpm: 800, mag: 30, reserve: 100, reload: 2.6, speed: 240, rangeMod: 0.8, auto: true, spread: 0.009, move: 0.025, kick: 0.6, sway: 0.7, kickCap: 7 }),
  mp9: W({ name: 'MP9', cat: 'smg', side: 'CT', price: 1250, reward: 600, dmg: 26, ap: 0.6, rpm: 857, mag: 30, reserve: 120, reload: 2.1, speed: 240, rangeMod: 0.87, auto: true, spread: 0.008, move: 0.025, kick: 0.55, sway: 0.6, kickCap: 7 }),
  mp7: W({ name: 'MP7', cat: 'smg', side: 'both', price: 1500, reward: 600, dmg: 29, ap: 0.625, rpm: 750, mag: 30, reserve: 120, reload: 3.1, speed: 220, rangeMod: 0.85, auto: true, spread: 0.007, move: 0.03, kick: 0.5, sway: 0.5, kickCap: 7 }),
  mp5: W({ name: 'MP5-SD', cat: 'smg', side: 'both', price: 1500, reward: 600, dmg: 27, ap: 0.625, rpm: 750, mag: 30, reserve: 120, reload: 2.6, speed: 235, rangeMod: 0.85, auto: true, spread: 0.007, move: 0.025, kick: 0.45, sway: 0.5, kickCap: 6, silent: true }),
  ump: W({ name: 'UMP-45', cat: 'smg', side: 'both', price: 1200, reward: 600, dmg: 35, ap: 0.65, rpm: 666, mag: 25, reserve: 100, reload: 3.5, speed: 230, rangeMod: 0.75, auto: true, spread: 0.008, move: 0.03, kick: 0.6, sway: 0.5, kickCap: 7 }),
  p90: W({ name: 'P90', cat: 'smg', side: 'both', price: 2350, reward: 300, dmg: 26, ap: 0.69, rpm: 857, mag: 50, reserve: 100, reload: 3.3, speed: 230, rangeMod: 0.86, auto: true, spread: 0.008, move: 0.03, kick: 0.45, sway: 0.6, kickCap: 7 }),
  bizon: W({ name: 'PP-Bizon', cat: 'smg', side: 'both', price: 1400, reward: 600, dmg: 27, ap: 0.575, rpm: 750, mag: 64, reserve: 120, reload: 2.4, speed: 240, rangeMod: 0.8, auto: true, spread: 0.009, move: 0.03, kick: 0.45, sway: 0.6, kickCap: 6 }),
  // pesadas
  nova: W({ name: 'Nova', cat: 'heavy', side: 'both', price: 1050, reward: 900, dmg: 26, ap: 0.5, rpm: 68, mag: 8, reserve: 32, reload: 4.0, speed: 220, rangeMod: 0.7, pellets: 9, spread: 0.06, move: 0.04, kick: 3, sway: 0.5, range: 3000 }),
  xm1014: W({ name: 'XM1014', cat: 'heavy', side: 'both', price: 2000, reward: 900, dmg: 20, ap: 0.8, rpm: 171, mag: 7, reserve: 32, reload: 3.5, speed: 215, rangeMod: 0.7, pellets: 6, spread: 0.065, move: 0.04, kick: 2.5, sway: 0.6, range: 3500 }),
  sawedoff: W({ name: 'Sawed-Off', cat: 'heavy', side: 'T', price: 1100, reward: 900, dmg: 32, ap: 0.75, rpm: 71, mag: 7, reserve: 32, reload: 3.6, speed: 210, rangeMod: 0.45, pellets: 8, spread: 0.09, move: 0.04, kick: 3, sway: 0.6, range: 1400 }),
  mag7: W({ name: 'MAG-7', cat: 'heavy', side: 'CT', price: 1300, reward: 900, dmg: 30, ap: 0.75, rpm: 71, mag: 5, reserve: 32, reload: 2.5, speed: 225, rangeMod: 0.45, pellets: 8, spread: 0.05, move: 0.04, kick: 3, sway: 0.5, range: 1400 }),
  m249: W({ name: 'M249', cat: 'heavy', side: 'both', price: 5200, reward: 300, dmg: 32, ap: 0.8, rpm: 750, mag: 100, reserve: 200, reload: 5.7, speed: 195, rangeMod: 0.97, auto: true, spread: 0.009, move: 0.15, kick: 0.6, sway: 0.8, kickCap: 9 }),
  negev: W({ name: 'Negev', cat: 'heavy', side: 'both', price: 1700, reward: 300, dmg: 35, ap: 0.71, rpm: 800, mag: 150, reserve: 300, reload: 5.7, speed: 150, rangeMod: 0.97, auto: true, spread: 0.012, move: 0.15, kick: 0.7, sway: 0.6, kickCap: 6 }),
  // rifles
  galil: W({ name: 'Galil AR', cat: 'rifle', side: 'T', price: 1800, reward: 300, dmg: 30, ap: 0.775, rpm: 666, mag: 35, reserve: 90, reload: 3.0, speed: 215, auto: true, spread: 0.005, move: 0.14, kick: 0.62, sway: 0.5, kickCap: 10 }),
  famas: W({ name: 'FAMAS', cat: 'rifle', side: 'CT', price: 2050, reward: 300, dmg: 30, ap: 0.7, rpm: 666, mag: 25, reserve: 90, reload: 3.3, speed: 220, auto: true, spread: 0.005, move: 0.14, kick: 0.6, sway: 0.5, kickCap: 10 }),
  ak47: W({ name: 'AK-47', cat: 'rifle', side: 'T', price: 2700, reward: 300, dmg: 36, ap: 0.775, rpm: 600, mag: 30, reserve: 90, reload: 2.5, speed: 215, auto: true, spread: 0.0049, move: 0.16, kick: 0.82, sway: 0.75, kickCap: 13 }),
  m4a4: W({ name: 'M4A4', cat: 'rifle', side: 'CT', price: 3100, reward: 300, dmg: 33, ap: 0.7, rpm: 666, mag: 30, reserve: 90, reload: 3.1, speed: 225, auto: true, spread: 0.0042, move: 0.15, kick: 0.68, sway: 0.6, kickCap: 11 }),
  m4a1s: W({ name: 'M4A1-S', cat: 'rifle', side: 'CT', price: 2900, reward: 300, dmg: 38, ap: 0.7, rpm: 600, mag: 20, reserve: 80, reload: 3.1, speed: 225, auto: true, spread: 0.0035, move: 0.15, kick: 0.58, sway: 0.45, kickCap: 9, silent: true }),
  sg553: W({ name: 'SG 553', cat: 'rifle', side: 'T', price: 3000, reward: 300, dmg: 30, ap: 1.0, rpm: 545, mag: 30, reserve: 90, reload: 2.8, speed: 210, auto: true, spread: 0.0045, move: 0.15, kick: 0.72, sway: 0.6, kickCap: 11, scope: [1.8] }),
  aug: W({ name: 'AUG', cat: 'rifle', side: 'CT', price: 3300, reward: 300, dmg: 28, ap: 0.9, rpm: 600, mag: 30, reserve: 90, reload: 3.8, speed: 220, auto: true, spread: 0.004, move: 0.15, kick: 0.62, sway: 0.5, kickCap: 10, scope: [1.8] }),
  ssg08: W({ name: 'SSG 08', cat: 'sniper', side: 'both', price: 1700, reward: 300, dmg: 88, ap: 0.85, rpm: 48, mag: 10, reserve: 90, reload: 3.7, speed: 230, rangeMod: 0.99, spread: 0.035, scoped: 0.0012, move: 0.12, kick: 3, sway: 0.2, kickCap: 4, scope: [3.6, 9] }),
  awp: W({ name: 'AWP', cat: 'sniper', side: 'both', price: 4750, reward: 100, dmg: 115, ap: 0.975, rpm: 41, mag: 5, reserve: 30, reload: 3.7, speed: 200, rangeMod: 0.99, spread: 0.08, scoped: 0.0009, move: 0.2, kick: 4.5, sway: 0.2, kickCap: 5, scope: [2.25, 9] }),
  g3sg1: W({ name: 'G3SG1', cat: 'sniper', side: 'T', price: 5000, reward: 300, dmg: 80, ap: 0.825, rpm: 240, mag: 20, reserve: 90, reload: 4.7, speed: 215, rangeMod: 0.98, auto: true, spread: 0.05, scoped: 0.0018, move: 0.2, kick: 1.6, sway: 0.4, kickCap: 6, scope: [2.25, 9] }),
  scar20: W({ name: 'SCAR-20', cat: 'sniper', side: 'CT', price: 5000, reward: 300, dmg: 80, ap: 0.825, rpm: 240, mag: 20, reserve: 90, reload: 3.1, speed: 215, rangeMod: 0.98, auto: true, spread: 0.05, scoped: 0.0018, move: 0.2, kick: 1.6, sway: 0.4, kickCap: 6, scope: [2.25, 9] }),
  // equipo
  zeus: W({ name: 'Zeus x27', cat: 'equip', side: 'both', price: 200, reward: 0, dmg: 500, ap: 1, rpm: 30, mag: 1, reserve: 0, reload: 0, speed: 245, range: 183, spread: 0.01, move: 0.02, kick: 1 }),
  vest: { name: 'Chaleco', cat: 'gear', side: 'both', price: 650 },
  vesthelm: { name: 'Chaleco + Casco', cat: 'gear', side: 'both', price: 1000 },
  defuser: { name: 'Kit de desactivación', cat: 'gear', side: 'CT', price: 400 },
  // granadas (máx. 4; 2 flashes)
  he: { name: 'Granada HE', cat: 'grenade', side: 'both', price: 300, reward: 300 },
  flash: { name: 'Flashbang', cat: 'grenade', side: 'both', price: 200, reward: 300, max: 2 },
  smoke: { name: 'Humo', cat: 'grenade', side: 'both', price: 300, reward: 300 },
  molotov: { name: 'Molotov', cat: 'grenade', side: 'T', price: 400, reward: 300 },
  incendiary: { name: 'Incendiaria', cat: 'grenade', side: 'CT', price: 500, reward: 300 },
  decoy: { name: 'Señuelo', cat: 'grenade', side: 'both', price: 50, reward: 300 },
  c4: { name: 'C4', cat: 'c4', side: 'T', price: 0 },
};
for (const [id, w] of Object.entries(WEAPONS)) w.id = id;

// Menú de compra (como el de CS2: pistolas, intermedias, rifles, equipo, granadas)
export const BUY = [
  { name: 'Pistolas', items: { T: ['glock', 'dualies', 'p250', 'tec9', 'cz75', 'deagle', 'r8'], CT: ['usp', 'p2000', 'dualies', 'p250', 'fiveseven', 'cz75', 'deagle', 'r8'] } },
  { name: 'Intermedias', items: { T: ['mac10', 'mp7', 'mp5', 'ump', 'p90', 'bizon', 'nova', 'xm1014', 'sawedoff', 'm249', 'negev'], CT: ['mp9', 'mp7', 'mp5', 'ump', 'p90', 'bizon', 'nova', 'xm1014', 'mag7', 'm249', 'negev'] } },
  { name: 'Rifles', items: { T: ['galil', 'ak47', 'sg553', 'ssg08', 'awp', 'g3sg1'], CT: ['famas', 'm4a4', 'm4a1s', 'aug', 'ssg08', 'awp', 'scar20'] } },
  { name: 'Equipo', items: { T: ['vest', 'vesthelm', 'zeus'], CT: ['vest', 'vesthelm', 'defuser', 'zeus'] } },
  { name: 'Granadas', items: { T: ['molotov', 'decoy', 'flash', 'smoke', 'he'], CT: ['incendiary', 'decoy', 'flash', 'smoke', 'he'] } },
];

export const slotOf = id => { const c = WEAPONS[id].cat; return c === 'pistol' ? 2 : c === 'knife' ? 3 : c === 'grenade' ? 4 : c === 'c4' ? 5 : c === 'equip' ? 3 : 1; };

// Economía de CS2
export const ECON = {
  start: 800, max: 16000,
  winElim: 3250, winBombT: 3500, winDefuse: 3500, winTime: 3250,
  loss: [1400, 1900, 2400, 2900, 3400], plantBonus: 800, plantReward: 300, defuseReward: 300,
  teamKill: -300,
};

// Daño CS: zona del cuerpo y blindaje
export const HITMUL = { head: 4, chest: 1, stomach: 1.25, arm: 1, leg: 0.75 };
export function applyDamage(dmg, ap, part, armor, helmet, hsMul = 4) {
  let d = dmg * (part === 'head' ? hsMul : HITMUL[part]);
  let armorDmg = 0;
  const protectedPart = part !== 'leg' && (part !== 'head' || helmet);
  if (armor > 0 && protectedPart) {
    let hp = d * ap;
    armorDmg = (d - hp) * 0.5;
    if (armorDmg > armor) { armorDmg = armor; hp = d - armor * 2; }
    d = hp;
  }
  return { hp: Math.max(1, Math.round(d)), armor: Math.round(armorDmg) };
}
