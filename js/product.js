let galleryThumns = new Swiper('.gallery-thumbs', {
  spaceBetween: 9,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesprogress: true,
});
let galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper:galleryThumns
  },
  pagination : {
    el : '.swiper-pagination'
  },
  loop: true,
});