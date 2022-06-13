export function getHeroswiper() {
  const heroSwiper = document.querySelector('.js-hero-swiper')
  if (heroSwiper) {
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.js-hero-swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });
  }
}
export function getOffersSwiper() {
  const offersSwiper = document.querySelector('.js-offers-swiper')
  if (offersSwiper) {
    new Swiper(offersSwiper, {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.js-offers-swiper-button-next',
        prevEl: '.js-offers-swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 32
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 32
        },
        1061: {
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
      loop: false,
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

export function getdetailSwiperBigThumb() {
  const detailswiperBigThumb = document.querySelector('.js-detailswiper-big-thumbs')
  const detailswiperMinThumbs = document.querySelectorAll('.js-detailswiper-min-thumbs')
  if (detailswiperBigThumb) {
    const detailSwiperBigThumb = new Swiper(detailswiperBigThumb, {
      direction: 'horizontal',
      loop: true,
    });
    detailswiperMinThumbs.forEach(function (el) {
      new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        thumbs: {
          swiper: detailSwiperBigThumb,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 4,
            direction: 'vertical',
            centeredSlides: false,
            spaceBetween: 20,
          },
          985: {
          }
        }
      });
    })
  }
}

export function getSimilarProductsSwiper() {
  const similarProductSwiper = document.querySelector('.js-similar-products-swiper')
  if (similarProductSwiper) {
    new Swiper(similarProductSwiper, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: '.js-similar-products-swiper-button-next',
        prevEl: '.js-similar-products-swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1100: {
          slidesPerView: 4,
        }
      }
    });
  }
};

export function getSwiperModal() {
  const modalSwiperBig = document.querySelector('.js-modal-swiper-big');
  const modalSwiperMin = document.querySelector('.js-modal-swiper-min');
  if (modalSwiperBig && modalSwiperMin) {
    new Swiper(modalSwiperBig, {
      direction: 'horizontal',
      loop: false,
    });
    new Swiper(modalSwiperMin, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: '.js-modal-swiper-min-button-next',
        prevEl: '.js-modal-swiper-min-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 4,
        }
      }
    });
  }


}