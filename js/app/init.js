import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function initApp() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header) renderHeader(header);
  if (footer) renderFooter(footer);

  console.log('Inisialisasi aplikasi...');
}
