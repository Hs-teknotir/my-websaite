export function renderHome(container) {
  container.innerHTML = `
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-inner container">
        <h1 class="headline">Kamu Punya Ide Bagus. Biar Kami yang Buatkan Wadahnya.</h1>
        <p class="subheadline">
          Gak harus ngerti teknis, coding, atau desain. Kamu cukup punya niat. Kami bantu wujudkan jadi website yang rapi, cepat, dan bikin orang percaya. Karena tampil online itu bukan soal keren — tapi soal dipercaya.
        </p>
        <div class="cta-group">
          <a href="#/layanan" class="btn btn-primary">Lihat Cara Kami Bantu</a>
          <a href="#/kontak" class="btn btn-secondary">Ngobrol Dulu Yuk</a>
        </div>
      </div>
    </section>

    <section class="about-static-web">
      <div class="container">
        <h2 class="section-title">Lebih dari Sekadar Website</h2>
        <div class="features-grid">
          ${renderFeature("target", "Fokus ke Inti Masalah", "Bukan cuma tampil cantik, tapi menjawab “Kenapa orang harus percaya kamu?” Itu yang kami bantu jawab lewat desain dan kata-kata.")}
          ${renderFeature("pen-tool", "Isi Konten Dibantu", "Kamu gak harus pusing nulis. Kami bantu rapikan, memilih kata, dan membuat isi yang menyentuh targetmu.")}
          ${renderFeature("layers", "Paket Fleksibel, Bisa Tumbuh", "Mulai dari kebutuhan dasar dulu, lalu bisa bertambah seiring perjalanan. Karena kami paham, bisnis pun tumbuhnya bertahap.")}
          ${renderFeature("megaphone", "Materi Promosi Disiapkan", "Setelah web jadi, kamu gak dibiarkan bingung. Kami bantu siapkan bahan promosi yang bisa langsung kamu pakai.")}
        </div>
      </div>
    </section>

    <section class="why-us">
      <div class="container">
        <h2 class="section-title">Kenapa Harus Kami?</h2>
        <div class="features-grid">
          ${renderFeature("brush", "Bukan Sekadar Proyek", "Kami percaya setiap orang punya cerita, dan website adalah cara menyampaikannya. Maka setiap desain kami buat sungguh-sungguh, bukan sekadar pekerjaan lepas.")}
          ${renderFeature("text", "Kamu Gak Sendirian", "Gak ngerti teknis? Gak apa-apa. Kami dampingi kamu dari awal sampai web kamu tayang. Bareng-bareng, satu langkah demi langkah.")}
          ${renderFeature("rocket", "Ringan, Aman, dan Awet", "Kami pakai teknologi yang simpel tapi kuat. Sekali jadi, bisa dipakai bertahun-tahun tanpa harus ribet upgrade.")}
        </div>
      </div>
    </section>

    <section class="workflow">
      <div class="container">
        <h2 class="section-title">Gimana Prosesnya?</h2>
        <ol class="workflow-steps">
          ${renderStep(1, "Kita Ngobrol Dulu", "Kamu cerita, kami dengerin. Apa yang kamu mau capai? Ceritain aja, tanpa tekanan.")}
          ${renderStep(2, "Isi Form Ringkas", "Supaya kami bisa mulai, kami kirim form sederhana buat isi data dasar. Gak ribet.")}
          ${renderStep(3, "Pembayaran Awal", "Setelah cocok, kamu cukup bayar DP untuk mulai. Ini tanda komitmen bareng.")}
          ${renderStep(4, "Proses & Revisi", "Kami mulai desain dan susun kontennya. Hasil awal akan kami kirim — dan revisi itu hal biasa.")}
          ${renderStep(5, "Web Tayang & Siap Digarap", "Setelah semua oke dan pelunasan selesai, web kamu kami online-kan. Kamu tinggal pakai dan bagikan dengan bangga.")}
        </ol>
      </div>
    </section>

    <section class="final-cta">
      <div class="final-cta-inner container">
        <h2>Ada Ide? Jangan Disimpan Sendiri</h2>
        <p>Kalau kamu punya niat, kami bantu mewujudkannya. Web bukan lagi hal mewah — asal dibikin dengan niat, bisa jadi langkah besar buat masa depanmu.</p>
        <div class="cta-group">
          <a href="#/layanan" class="btn btn-primary large">Lihat Pilihan yang Cocok</a>
          <a href="#/kontak" class="btn btn-secondary large">Diskusi Dulu Aja</a>
        </div>
      </div>
    </section>
  `;
}

function renderFeature(icon, title, desc) {
  return `
    <div class="feature-item">
      <svg class="icon lucide" data-icon="${icon}"></svg>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
  `;
}

function renderStep(num, title, desc) {
  return `
    <li>
      <strong>${num}. ${title}</strong><br>${desc}
    </li>
  `;
}

// Track mouse position for effects
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});
