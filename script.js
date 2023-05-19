window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }, 2000);
});
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});
