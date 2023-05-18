const slidesContainer = document.querySelector(".slides_container");
const slides = Array.from(slidesContainer.getElementsByClassName("slide"));
const totalSlides = slides.length;
const prevButton = document.querySelector(".carousel_button_left");
const nextButton = document.querySelector(".carousel_button_right");
const indicators = Array.from(document.getElementsByClassName("carousel_indicator"));
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(function(slide) {
    slide.style.display = "none";
  });

  indicators.forEach(function(indicator) {
    indicator.classList.remove("current_slide");
  });

  slides[index].style.display = "block";
  indicators[index].classList.add("current_slide");
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

indicators.forEach(function(indicator, index) {
  indicator.addEventListener("click", function() {
    showSlide(index);
  });
});

showSlide(currentIndex);
