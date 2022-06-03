export function getHeroswiper() {
  const heroSwiper = document.querySelector('.js-hero-swiper')
  if (heroSwiper) {
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
export function getOffersSwiper() {
  const offersSwiper = document.querySelector('.js-offers-swiper')
  if (offersSwiper) {
    new Swiper(offersSwiper, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.js-offers-swiper-button-next',
        prevEl: '.js-offers-swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32
        },
        986: {
          slidesPerView: 1
        }
      }
    });
  }
};
export function getArticlesSwiper() {
  const articlesSwiper = document.querySelector('.js-articles-swiper')
  if (articlesSwiper) {
    new Swiper(articlesSwiper, {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
      navigation: {
        nextEl: '.js-articles-swiper-button-next',
        prevEl: '.js-articles-swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 2,
        }
      }
    });
  }
};