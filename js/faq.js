const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove("active");
      }
    });
    faq.classList.toggle("active");
  });
});
