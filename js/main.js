// 메인 네비게이션
var mainNav = document.querySelector(".main-nav-wrap")
var hoverGnb = document.querySelector(".header .header-left .gnb")
var navFlag = false
hoverGnb.addEventListener("mouseover", () => mainNav.classList.add("on"))

mainNav.addEventListener("mouseover", () => (navFlag = true))
mainNav.addEventListener("mouseleave", () => {
  if (navFlag) {
    navFlag = false
    mainNav.classList.remove("on")
  }
})

// 메인 검색팝업
var searchPopup = document.querySelector(".search-popup-wrap")
var searchIcon = document.querySelector(".header-right .ico-search")
var searchFlag = false
searchIcon.addEventListener("mouseover", () => searchPopup.classList.add("on"))
searchPopup.addEventListener("mouseover", () => (searchFlag = true))
searchPopup.addEventListener("mouseleave", () => {
  if (searchFlag) {
    searchFlag = false
    searchPopup.classList.remove("on")
  }
})

// js-main-visual
var swiper = new Swiper(".js-main-visual", {
  slidesPerView: 1.12,
  spaceBetween: 16,
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".main-visual .swiper-pagination",
  },
  keyboard: true,
})

// live-commerce
var swiper = new Swiper(".js-live-commerce", {
  slidesPerView: 2.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  slideToClickedSlide: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// js - influencer
var swiper = new Swiper(".js-influencer", {
  slidesPerView: 1,
  paginationClickable: true,
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: ".influencer-bUtton.swiper-pagination",
    clickable: true,
  },
})

// group-buying
var swiper = new Swiper(".js-group-buying", {
  slidesPerView: 1,
  spaceBetween: 0,
  slideToClickedSlide: true,
  paginationClickable: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// js-best-brand
var swiper = new Swiper(".js-best-brand", {
  slidesPerView: 1,
  spaceBetween: 0,
  slideToClickedSlide: true,
  paginationClickable: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

var swiper = new Swiper(".js-velypic", {
  slidesPerView: 1,
  paginationClickable: true,
  loopFillGroupWithBlank: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
})
