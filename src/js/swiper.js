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
  },
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 32
    },
    986:{
      slidesPerView:1
    }
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
  },
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    850:{
      slidesPerView: 3,
    },
    1100:{
      slidesPerView: 2,
    }
  }

});