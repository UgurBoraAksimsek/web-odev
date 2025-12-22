const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const msg = document.querySelector("#formMsg");

    if (!name || !email || !message) {
      msg.textContent = "Lütfen tüm alanları doldurun.";
      msg.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      msg.textContent = "Lütfen geçerli bir e-posta girin.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "Mesajınız alındı ✅ (Demo)";
    msg.style.color = "green";

    form.reset();
  });
}
