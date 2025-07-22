export function renderContact(container) {
  container.innerHTML = `
    <section class="contact-section">
      <div class="contact-card">
        <div class="contact-header">
          <i data-feather="mail" class="contact-icon"></i>
          <h2 class="contact-title">Hubungi Kami</h2>
          <span class="verified-badge">
            <i data-feather="check-circle" class="verified-icon"></i> Top Rated & Verified
          </span>
        </div>
        <form id="contactForm" class="contact-form">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" name="name" placeholder="Nama lengkap" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Alamat email aktif" required />
          </div>
          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda..." required></textarea>
          </div>
          <button type="submit" class="btn btn-secondary">
            <i data-feather="send"></i> Kirim Pesan
          </button>
        </form>
        <p class="response-time">
          <i data-feather="clock"></i> Waktu respons: <strong>&lt; 1 jam</strong>
        </p>
      </div>

      <!-- Success Modal -->
      <div class="popup-modal" id="popupSuccess">
        <div class="popup-content success">
          <i data-feather="check-circle" class="popup-icon"></i>
          <p>Pesan berhasil dikirim! Kami akan segera membalas.</p>
          <button id="closePopup" class="btn-close-popup">
            <i data-feather="x-circle"></i> Tutup
          </button>
        </div>
      </div>

      <!-- Warning Modal -->
      <div class="popup-modal" id="popupWarning">
        <div class="popup-content warning">
          <i data-feather="alert-circle" class="popup-icon"></i>
          <p>Mohon isi semua kolom dengan benar sebelum mengirim.</p>
          <button id="closeWarning" class="btn-close-popup">
            <i data-feather="x-circle"></i> Tutup
          </button>
        </div>
      </div>

      <!-- Error Modal -->
      <div class="popup-modal" id="popupError">
        <div class="popup-content error">
          <i data-feather="x-octagon" class="popup-icon"></i>
          <p>Gagal mengirim pesan. Silakan coba lagi nanti.</p>
          <button id="closeError" class="btn-close-popup">
            <i data-feather="x-circle"></i> Tutup
          </button>
        </div>
      </div>
    </section>
  `;

  feather.replace();
  emailjs.init("ISIM5suwdmqCpFkCd");

  const form = document.getElementById("contactForm");
  const popupSuccess = document.getElementById("popupSuccess");
  const popupWarning = document.getElementById("popupWarning");
  const popupError = document.getElementById("popupError");

  const closePopup = document.getElementById("closePopup");
  const closeWarning = document.getElementById("closeWarning");
  const closeError = document.getElementById("closeError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    form.querySelectorAll(".error-message").forEach((msg) => msg.remove());

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    let hasError = false;

    const validateField = (field, condition, msg) => {
      if (!condition) {
        field.classList.add("has-error");
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = msg;
        field.parentNode.appendChild(error);
        hasError = true;
      }
    };

    validateField(form.name, name !== "", "Nama tidak boleh kosong");
    validateField(form.email, emailPattern.test(email), "Email tidak valid");
    validateField(form.message, message !== "", "Pesan tidak boleh kosong");

    if (hasError) {
      popupWarning.classList.add("show");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_221206", "template_voccaev", templateParams)
      .then(() => {
        form.reset();
        popupSuccess.classList.add("show");
      })
      .catch((error) => {
        popupError.classList.add("show");
        console.error("EmailJS Error:", error);
      });
  });

  closePopup.addEventListener("click", () =>
    popupSuccess.classList.remove("show")
  );
  closeWarning.addEventListener("click", () =>
    popupWarning.classList.remove("show")
  );
  closeError.addEventListener("click", () =>
    popupError.classList.remove("show")
  );
}

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});