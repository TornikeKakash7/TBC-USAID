document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentSlide = 0;
  let autoPlay;

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = slideIndex;
    }

    slidesContainer.style.transition = "opacity 1.5s ease-in-out";
    slidesContainer.style.opacity = 0;

    setTimeout(() => {
      slidesContainer.style.transition = "none";
      slidesContainer.style.opacity = 1;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 1000);
  }
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (currentSlide === index) {
      } else {
        showSlide(index);
      }
    });
  });

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  document.querySelector(".first-arrow").addEventListener("click", prevSlide);
  document.querySelector(".second-arrow").addEventListener("click", nextSlide);

  autoPlay = setInterval(nextSlide, 4000);

  const sliderContainer = document.querySelector(".slider-container");

  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    autoPlay = setInterval(nextSlide, 3000);
  });
  showSlide(currentSlide);
});
