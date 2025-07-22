export function sendEmail(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch("https://formspree.io/f/your-id", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    alert("Pesan berhasil dikirim!");
    form.reset();
  }).catch(() => {
    alert("Gagal mengirim pesan. Silakan coba lagi.");
  });
}
