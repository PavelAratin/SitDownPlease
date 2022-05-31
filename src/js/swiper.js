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
    nextEl: '.js-offers-swiper-button-next',
    prevEl: '.js-offers-swiper-button-prev',
  }
});

export const articlesSwiper = new Swiper('.js-articles-swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.js-articles-swiper-button-next',
    prevEl: '.js-articles-swiper-button-prev',
  }
});