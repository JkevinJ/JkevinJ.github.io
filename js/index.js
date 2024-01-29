const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const isNextButton = e.target.id === "next";
    const slideActive = document.querySelector(".active");
    let currentIndex = Array.from(slides).indexOf(slideActive);
    let newIndex = isNextButton ? (currentIndex + 1) % slides.length : (currentIndex - 1 + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    slides[newIndex].classList.add("active");
  });
});
