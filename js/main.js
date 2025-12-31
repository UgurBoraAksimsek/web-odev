const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (!name || !email || !message) {
      msg.textContent = "Lütfen tüm alanları doldur.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "Mesaj gönderildi ✅";
    msg.style.color = "green";
    form.reset();
  });
}
