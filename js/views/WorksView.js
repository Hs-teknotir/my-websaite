export async function renderWorks(container) {
  const response = await fetch("./data/portfolio.json");
  const portfolio = await response.json();

  container.innerHTML = `
    <section class="works-hero">
      <div class="works-hero-inner container">
        <h1 class="works-title">Karya Terbaik Kami</h1>
        <p class="works-subtitle">
          Inilah hasil dari dedikasi, kreativitas, dan kerja keras kami —
          sebuah kumpulan proyek yang telah berhasil kami realisasikan dengan sepenuh hati.
        </p>
      </div>
    </section>

    <section class="works-gallery container">
      <div class="works-grid">
        ${portfolio.map(renderProjectCard).join("")}
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  return `
    <div class="works-card shadow-md">
      <img class="works-thumb" src="${project.image}" alt="Gambar ${project.title}">
      <div class="works-content">
        <h3 class="works-name">${project.title}</h3>
        <p class="works-desc">${project.description}</p>
        <a href="${project.link}" target="_blank" class="works-link btn btn-secondary">
          Jelajahi Proyek →
        </a>
      </div>
    </div>
  `;
}

// Interaktif: posisi mouse disimpan dalam custom properties
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});
