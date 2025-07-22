export function renderFooter(container) {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer-content">

      <div class="footer-brand">
        <img src="assets/icons/logo.png" alt="Logo Hs_teknoTir" class="footer-logo" />
        <div>
          <h3 class="footer-title">Hs_teknoTir</h3>
          <p class="footer-tagline">Solusi digital kreatif dan terpercaya.</p>
        </div>
      </div>

      <nav class="footer-nav">
        <a href="#/">Beranda</a>
        <a href="#/karya">Karya</a>
        <a href="#/layanan">Layanan</a>
        <a href="#/kontak">Kontak</a>
      </nav>

      <div class="footer-contact">
        <h4 class="contact-heading">Hubungi Kami</h4>
        <a href="https://wa.me/6285189131380" target="_blank" rel="noopener" class="contact-link" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i> +62 851-8913-1380
        </a>
        <a href="mailto:hs.teknotir@gmail.com" class="contact-link" aria-label="Email">
          <i class="fas fa-envelope"></i> hs.teknotir@gmail.com
        </a>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Hs_teknoTir. All rights reserved.</p>
    </div>
  `;

  container.appendChild(footer);

  // Optional: Animasi muncul
  setTimeout(() => footer.classList.add('visible'), 100);
}
