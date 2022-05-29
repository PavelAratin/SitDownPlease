export const heroSwiper = new Swiper('.js-hero-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

export const offersSwiper = new Swiper('.js-offers-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.offers-swiper-button-next',
    prevEl: '.offers-swiper-button-prev',
  }
});