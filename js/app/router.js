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
  } else {
    container.innerHTML = '<h2>404 - Halaman tidak ditemukan</h2>';
  }
}
