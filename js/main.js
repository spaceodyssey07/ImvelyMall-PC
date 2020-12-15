// js-main-visual
new Swiper(".js-main-visual", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  slideToClickedSlide: true,
  // freeMode: true,
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
})

// live-commerce
var swiper = new Swiper(".js-live-commerce", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 320,
  slideToClickedSlide: true,
})
