// File: js/app/router.js

import { renderHome } from '../views/HomeView.js';
import { renderWorks } from '../views/WorksView.js';
import { renderContact } from '../views/ContactView.js';
import { renderServices } from '../views/ServicesView.js'; 

const routes = {
  '/': renderHome,
  '/layanan': renderServices,
  '/kontak': renderContact,
  '/karya': renderWorks
};


export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);
}

function handleRoute() {
  const path = window.location.hash.slice(1) || '/';
  const container = document.getElementById('app');

  const render = routes[path];

  if (render) {
    render(container);
    setTimeout(() => {
      // Coba dua-duanya kalau perlu
      window.scrollTo(0, 0);
      container.scrollTo?.(0, 0);
    }, 0);
  } else {
    container.innerHTML = '<h2>404 - Halaman tidak ditemukan</h2>';
    setTimeout(() => {
      window.scrollTo(0, 0);
      container.scrollTo?.(0, 0);
    }, 0);
  }
}

