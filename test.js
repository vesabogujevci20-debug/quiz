document.addEventListener("DOMContentLoaded", () => {
   Pause
  const carouselEl = document.querySelector("#quizCategoryCarousel");
  if (carouselEl) {
    new bootstrap.Carousel(carouselEl, {
      interval: 4000,
      pause: "hover",
      touch: true
    });
  }

  
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      
      contactSuccess.classList.remove("d-none");
      contactForm.reset();

    
      setTimeout(() => {
        contactSuccess.classList.add("d-none");
        const modalEl = document.getElementById("contactModal");
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }, 2000);
    });
  }
});S