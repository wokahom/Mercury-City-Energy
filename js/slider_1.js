
  let current = 0;
  const slides = document.querySelectorAll('.hero-card');

  function showNext() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(showNext, 1000); // every 1 sec

