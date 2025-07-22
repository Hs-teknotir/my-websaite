export function renderHeader(container) {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="header-container">
      <div class="logo">
        <img src="assets/icons/logo.png" alt="Logo" class="logo-img" />
        <span class="logo-text">Hs_teknoTir</span>
      </div>

      <nav class="nav-desktop">
        <ul class="nav-links">
          <li><a href="#/" data-link="/">Beranda</a></li>
          <li><a href="#/karya" data-link="/karya">Karya</a></li>
          <li><a href="#/layanan" data-link="/layanan">Layanan</a></li>
          <li><a href="#/kontak" data-link="/kontak">Kontak</a></li>
        </ul>
      </nav>

      <div class="actions-desktop">
        <button id="theme-toggle-desktop" aria-label="Tema"><i class="fas fa-moon"></i></button>
      </div>

      <button class="menu-toggle" aria-label="Menu">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="mobile-drawer">
      <div class="drawer-header">
        <span class="drawer-title">Menu</span>
        <button class="drawer-close" aria-label="Tutup"><i class="fas fa-times"></i></button>
      </div>
      <ul class="drawer-nav">
        <li><a href="#/" data-link="/">Beranda</a></li>
        <li><a href="#/karya" data-link="/karya">Karya</a></li>
        <li><a href="#/layanan" data-link="/layanan">Layanan</a></li>
        <li><a href="#/kontak" data-link="/kontak">Kontak</a></li>
      </ul>
      <div class="drawer-footer">
        <button id="theme-toggle-mobile" aria-label="Tema"><i class="fas fa-moon"></i></button>
      </div>
    </div>
  `;

  container.appendChild(header);

  const drawer = header.querySelector(".mobile-drawer");
  const toggleBtn = header.querySelector(".menu-toggle");
  const closeBtn = header.querySelector(".drawer-close");
  toggleBtn.addEventListener("click", () => drawer.classList.add("open"));
  closeBtn.addEventListener("click", () => drawer.classList.remove("open"));

  // Link aktif
  const links = header.querySelectorAll("a[data-link]");
  const updateActive = () => {
    const path = window.location.hash.slice(1) || "/";
    links.forEach((a) =>
      a.classList.toggle("active", a.dataset.link === path)
    );
  };

  // === THEME HANDLER ===
  const html = document.documentElement;
  const themeToggleBtns = [
    header.querySelector("#theme-toggle-desktop"),
    header.querySelector("#theme-toggle-mobile"),
  ];

  // Set ikon berdasarkan tema
  const updateThemeIcons = () => {
    const current = html.getAttribute("data-theme");
    const icon = current === "light" ? "fa-moon" : "fa-sun";
    themeToggleBtns.forEach((btn) => {
      btn.innerHTML = `<i class="fas ${icon}"></i>`;
    });
  };

  // Switch tema
  const toggleTheme = () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcons();
  };

  // Tambahkan event listener ke tombol
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  // Inisialisasi tema
  const initTheme = () => {
    const saved = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const defaultTheme = saved || (systemPrefersLight ? "light" : "dark");
    html.setAttribute("data-theme", defaultTheme);
    updateThemeIcons();
  };

  // Load awal
  window.addEventListener("DOMContentLoaded", () => {
    header.classList.add("loaded");
    updateActive();
    initTheme();
  });

  window.addEventListener("hashchange", updateActive);

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}
