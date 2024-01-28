document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".nav");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const opacity = scrollPosition > 1 ? 0.8 : 1;

    navbar.style.backgroundColor = `rgba(26,30,31, ${opacity})`;
  });
});
