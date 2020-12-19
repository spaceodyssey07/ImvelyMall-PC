// js-main-visual
var swiper = new Swiper(".js-main-visual", {
  slidesPerView: 1.2,
  spaceBetween: 160,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centeredSlides: true,
  loop:true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.main-visual .swiper-pagination'
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

// js-influencer
var influenceSwiper = new Swiper(".js-influencer", {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 32,
  slidesPerColumnFill:'row',
  paginationClickable: true,
  loop: true,
  pagination: {
    el: ".js-influencer .swiper-pagination",
    clickable: true,
  }
})

// group-buying
var swiper = new Swiper(".js-group-buying", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
// js-best-brand
var swiper = new Swiper(".js-best-brand", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".js-best-brand .swiper-pagination",
    clickable: true,
  },
})

// event-banner
var swiper = new Swiper(".js-evenet-banner", {
  slidesPerView: 1,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  slideToClickedSlide: true,
})
