export function renderServices(container) {
  container.innerHTML = `
    <section class="services-hero">
      <div class="container">
        <h1 class="headline">Kami Bantu Kamu Tampil Meyakinkan di Dunia Digital</h1>
        <p class="subheadline">
          Gak perlu paham teknis, gak harus bisa desain. Kami hadir untuk bantu kamu punya website yang rapi, cepat, dan penuh kepercayaan diri. Semua dimulai dari niatmu, kami bantu wujudkan jadi tampilan profesional.
        </p>
      </div>
    </section>

    <section class="packages">
      <div class="container">
        <h2 class="section-title">Pilih Paket yang Sesuai dengan Langkahmu</h2>

        <div class="package-list">
          ${renderPackageCards()}
        </div>
      </div>
    </section>

    <section class="addons">
      <div class="container">
        <h2 class="section-title">Add-on: Tambahkan Sesuai Kebutuhanmu</h2>
        <p class="subheadline">Kamu bisa menyesuaikan website sesuai tahap usahamu. Tambah fitur kapan pun kamu butuh.</p>
        <div class="addon-grid">
          ${renderAddonItems()}
        </div>
      </div>
    </section>

    <section class="cta-final">
      <div class="container">
        <h2>Website Bisa Jadi Awal Perubahan Besar</h2>
        <p>Kamu gak perlu ragu mulai. Website yang rapi dan terpercaya bisa jadi titik balik buat karier atau usahamu. Dan kamu gak sendirian — kami dampingi dari awal.</p>
        <div class="cta-group">
          <a href="#/kontak" class="btn btn-primary large">Minta Rekomendasi Paket</a>
          <a href="#/karya" class="btn btn-secondary large">Lihat Dulu Contoh Nyatanya</a>
        </div>
      </div>
    </section>
  `;
}

function renderPackageCards() {
  const packages = [
    {
      title: "Tampil Dulu",
      price: "Rp 650.000",
      desc: "2-4 hari — Buat kamu yang butuh link bio rapi dan meyakinkan — tanpa ribet.",
      features: [
        "1 halaman landing statis",
        "Copywriting ringan",
        "Mobile-friendly & SEO dasar",
        "Tombol ke WhatsApp/Instagram",
        "Hosting gratis via Netlify",
        "1x revisi",
      ],
      bonus: "Rekomendasi warna dan font agar tampilan serasi.",
      icon: ["file-text", "type", "smartphone", "send", "server", "repeat"],
    },
    {
      title: "Jelas & Meyakinkan",
      price: "Rp 1.500.000",
      desc: "5-7 hari — Untuk kamu yang ingin klien paham siapa kamu, dan langsung tertarik.",
      features: [
        "Hingga 4 halaman",
        "Copywriting ringan + CTA",
        "Navigasi rapi dan struktur jelas",
        "Hosting cepat via Netlify",
        "2x revisi",
      ],
      bonus: "1 desain konten promosi (Canva), logo sederhana, panduan share ke IG & WA.",
      icon: ["files", "target", "layout", "upload-cloud", "repeat"],
    },
    {
      title: "Tampil Profesional & Siap Jualan",
      price: "Rp 2.750.000",
      desc: "8-10 hari — Saat kamu ingin tampil meyakinkan, dipercaya, dan siap langsung promosi.",
      features: [
        "Hingga 5 halaman statis",
        "Copywriting CTA yang optimal",
        "SEO + sitemap + optimasi gambar",
        "Embed Linktree, Shopee, dll",
        "3x revisi + support WA 7 hari",
        "Hosting via Netlify",
      ],
      bonus: "2 desain promosi, template broadcast WhatsApp, logo 2 versi, rekomendasi visual brand, headline alternatif.",
      icon: ["files", "text-cursor-input", "search-check", "map-pin", "repeat", "server"],
      recommended: true,
    },
  ];

  return packages
    .map((pkg) => {
      return `
        <div class="package-card ${pkg.recommended ? "recommended shadow-lg" : "shadow-md"}">
          ${pkg.recommended ? '<div class="badge">Paling Direkomendasikan</div>' : ""}
          <h3>${pkg.title}</h3>
          <p class="price">${pkg.price}</p>
          <p class="desc">${pkg.desc}</p>
          <ul class="package-features">
            ${pkg.features
              .map(
                (text, i) => `
              <li>
                <svg class="icon lucide" data-icon="${pkg.icon[i]}"></svg>
                ${text}
              </li>
            `
              )
              .join("")}
          </ul>
          <div class="package-bonus">
            <strong>${pkg.recommended ? "Bonus Eksklusif:" : "Bonus:"}</strong> ${pkg.bonus}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderAddonItems() {
  const addons = [
    ["Update Konten Ringan", "Rp 100.000", "Supaya web tetap relevan saat promo atau info baru."],
    ["Logo Sederhana", "Rp 150.000", "Logo clean yang cocok untuk IG dan website."],
    ["Desain Konten Canva", "Rp 100.000", "Kamu tinggal posting — tampil rapi & profesional."],
    ["Template Broadcast WA", "Rp 50.000", "Teks promosi yang siap kirim — gak perlu mikir caption."],
    ["Konsultasi Branding Mini", "Rp 100.000", "Bantu kamu tampil beda dengan tone warna & headline pas."],
    ["Perawatan Bulanan", "Rp 250.000", "Web tetap segar dan promosi jalan terus tiap bulan."],
    ["Setup Domain", "Rp 100.000", "Kami bantu hubungkan domain kamu ke website."],
    ["Bantu Beli Domain", "Rp 200.000 + harga domain", "Kami bantu dari cari, beli, sampai aktif."],
    ["Desain Kustom", "Rp 300.000", "Layout unik dan tampil beda dari website lain."],
    ["Tambah Halaman Statis", "Rp 250.000", "Tumbuh bareng usahamu — tambah halaman kapan pun."],
  ];

  return addons
    .map(
      ([title, price, desc]) => `
        <div class="addon-item shadow-sm">
          <h4>${title}</h4>
          <p>${price}</p>
          <p>${desc}</p>
        </div>
      `
    )
    .join("");
}

// Mouse-based dynamic styling (if needed for glowing effects)
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});
