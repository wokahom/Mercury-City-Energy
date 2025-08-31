
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const data = new FormData(form);
    const object = Object.fromEntries(data.entries());

    try {
      const response = await fetch("https://formspree.io/f/xblaygqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(object)
      });

      if (response.ok) {
        window.location.href = "/thank-you.html";
      } else {
        status.style.color = "red";
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      status.style.color = "red";
      status.textContent = "⚠️ Network error. Please try again later.";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  });
