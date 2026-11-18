// Íconos del HUD dibujados en SVG (nada de emojis: se ven igual en todos los sistemas)
const sv = (d, vb = 24) => `<svg viewBox="0 0 ${vb} ${vb}" aria-hidden="true">${d}</svg>`;
export const ICON = {
  hp: sv('<path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z"/>'),
  armor: sv('<path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z"/>'),
  // chaleco + casco: el escudo con un casco encima, como el ícono de CS
  helmet: sv('<path d="M12 9.5l7 2.6v4.2c0 3.4-3 6.3-7 7.7-4-1.4-7-4.3-7-7.7v-4.2z"/><path d="M4.2 8.2C4.6 4.4 7.9 1.5 12 1.5s7.4 2.9 7.8 6.7H21v1.6H3V8.2z"/>'),
  bomb: sv('<rect x="3" y="7" width="18" height="12" rx="1.5"/><rect x="6" y="9.5" width="7" height="5" rx=".6" fill="#111"/><rect x="15" y="10" width="4" height="1.6" fill="#111"/><rect x="15" y="12.6" width="4" height="1.6" fill="#111"/><path d="M8 7V4.5h1.6V7z"/>'),
  kit: sv('<path d="M5 3h4v7.5a3 3 0 11-4 0zM15 3h4v7.5a3 3 0 11-4 0z"/><rect x="5" y="17" width="14" height="4" rx="1"/>'),
  crown: sv('<path d="M3 18l1.5-10 5 4.5L12 5l2.5 7.5 5-4.5L21 18z"/><rect x="3" y="19" width="18" height="2.4" rx=".6"/>'),
  pin: sv('<path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 4.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6z"/>'),
  cart: sv('<path d="M2 3h3.2l2.6 11.2h10.7L21 6.5H7.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.5" cy="19" r="1.8"/><circle cx="17" cy="19" r="1.8"/>'),
  gear: sv('<path d="M10.3 2h3.4l.6 2.7 2 .9 2.4-1.5 2.4 2.4-1.5 2.4.9 2 2.7.6v3.4l-2.7.6-.9 2 1.5 2.4-2.4 2.4-2.4-1.5-2 .9-.6 2.7h-3.4l-.6-2.7-2-.9-2.4 1.5-2.4-2.4 1.5-2.4-.9-2L2 13.7v-3.4l2.7-.6.9-2-1.5-2.4 2.4-2.4 2.4 1.5 2-.9zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>'),
  fire: sv('<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.4"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5" stroke="currentColor" stroke-width="2"/>'),
  skull: sv('<path d="M12 2C7 2 4 5.4 4 9.6c0 2.6 1.2 4.6 3 5.8V19h2.2v-2h1.6v2h2.4v-2h1.6v2H17v-3.6c1.8-1.2 3-3.2 3-5.8C20 5.4 17 2 12 2zM8.8 9a2 2 0 110 4 2 2 0 010-4zm6.4 0a2 2 0 110 4 2 2 0 010-4z"/>'),
};
