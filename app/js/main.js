/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cardsTopRating.js":
/*!**********************************!*\
  !*** ./src/js/cardsTopRating.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsTopRating": () => (/* binding */ cardsTopRating)
/* harmony export */ });
function cardsTopRating() {
  var ratingBtn = document.querySelector('.js-rating-btn');
  var cardRatingHidden = document.querySelectorAll('.js-card-rating-none');

  if (ratingBtn) {
    ratingBtn.addEventListener('click', function () {
      cardRatingHidden.forEach(function (item) {
        item.classList.remove('js-card-rating-none');
      });
    });
  }
}
;

/***/ }),

/***/ "./src/js/catalogFiltresDropdown.js":
/*!******************************************!*\
  !*** ./src/js/catalogFiltresDropdown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catalogFiltresDropdown": () => (/* binding */ catalogFiltresDropdown)
/* harmony export */ });
function catalogFiltresDropdown() {
  var btns = document.querySelectorAll('.js-catalog-content-filtres-button');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('js-catalog-filtres-hidden');
    });
  });
}
;

/***/ }),

/***/ "./src/js/filtres.js":
/*!***************************!*\
  !*** ./src/js/filtres.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filtresDisplay": () => (/* binding */ filtresDisplay)
/* harmony export */ });
function filtresDisplay() {
  var filtresLinks = document.querySelectorAll('.js-catalog-filtres-link');
  filtresLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var currentThis = this;
      var currentLink = e.target.dataset.link;
      console.log(currentLink);
      var parentCurrentLink = document.querySelector("[data-parent-filter=".concat(currentLink, "]"));
      var noneFilters = parentCurrentLink.querySelectorAll('[data-hidden]');
      noneFilters.forEach(function (noneFilter) {
        noneFilter.classList.toggle('js-catalog-filter-none');
        var span = currentThis.querySelector('span');

        if (!noneFilter.classList.contains('js-catalog-filter-none')) {
          span.innerText = 'Cкрыть';
        } else {
          span.innerText = span.dataset.text;
        }
      });
    });
  });
}

/***/ }),

/***/ "./src/js/filtresCheck.js":
/*!********************************!*\
  !*** ./src/js/filtresCheck.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFitresCheck": () => (/* binding */ getFitresCheck)
/* harmony export */ });
function getFitresCheck() {
  var checkbokses = document.querySelectorAll('.page-catalog .checkbox');
  var catalogContentList = document.querySelector('.js-catalog-content-list');
  var colors = {
    category: 'lime',
    price: 'bone',
    sale: 'pink-violet',
    color: 'grey-light'
  };
  checkbokses.forEach(function (checkbox) {
    checkbox.addEventListener('change', function (e) {
      if (checkbox.checked) {
        var parentChekboxWrapper = checkbox.closest('[data-parent-filter]');
        var text = parentChekboxWrapper.dataset.parentFilter;
        var currentCheckbox = e.target.dataset.filter;
        renderShield(currentCheckbox, colors[text]);
      }

      deleteShield();
    });
  });

  function renderShield(currentCheckbox, colorName) {
    var htmlLi = "\n    <li class=\"catalog-content__item catalog-content__item--".concat(colorName, " js-catalog-button\">\n        <button class=\"catalog-content__button catalog-content__button--").concat(colorName, "\">").concat(currentCheckbox, "</button>\n      </li>\n    ");
    catalogContentList.innerHTML += htmlLi;
  }

  ;

  function deleteShield() {
    var catalogButtons = catalogContentList.querySelectorAll('.js-catalog-button');
    console.log(catalogButtons);
    catalogButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        this.remove();
      });
    });
  }
}
;

/***/ }),

/***/ "./src/js/mobileMenu.js":
/*!******************************!*\
  !*** ./src/js/mobileMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenu": () => (/* binding */ mobileMenu)
/* harmony export */ });
function mobileMenu() {
  var buttonBurger = document.querySelector('.js-burger');
  var mobileMenu = document.querySelector('.js-mobile-menu-none');
  var mobileMenuClose = document.querySelector('.js-close-button');
  buttonBurger.addEventListener('click', function () {
    mobileMenu.classList.remove('js-mobile-menu-none');
  });
  mobileMenuClose.addEventListener('click', function () {
    mobileMenu.classList.add('js-mobile-menu-none');
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mobile-menu')) {
      mobileMenu.classList.add('js-mobile-menu-none');
    }
  });
}

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalForm": () => (/* binding */ modalForm)
/* harmony export */ });
function modalForm() {
  function getModal(triggerSelector, modalSelector, closeSelector) {
    var triggers = document.querySelectorAll(triggerSelector);
    var modal = document.querySelector(modalSelector);
    var closes = document.querySelectorAll(closeSelector);

    if (triggers.length && modal && closes.length) {
      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          modal.classList.remove('js-modal-hidden');
          document.body.style.overflow = "hidden";
        });
      });
      closes.forEach(function (close) {
        close.addEventListener('click', function () {
          modal.classList.add('js-modal-hidden');
          document.body.style.overflow = "";
        });
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.add('js-modal-hidden');
          document.body.style.overflow = "";
        }

        if (e.target.classList.contains('js-form-button-modal')) {
          modal.remove();
        }
      });
    }
  }

  ;
  getModal('.js-card-detail-button', '.js-modal-form', '.js-close-button');
  getModal('.js-form-button-modal', '.js-modal-thanks', '.js-close-button');
  getModal('.js-detailswiper-big-thumbs-swiper-slide', '.js-modal-swiper', '.js-close-button');
}
;

/***/ }),

/***/ "./src/js/pagination.js":
/*!******************************!*\
  !*** ./src/js/pagination.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPagination": () => (/* binding */ getPagination)
/* harmony export */ });
function getPagination() {
  var btns = document.querySelectorAll('.js-pagination-btn');

  if (btns.length) {
    var cards = document.querySelectorAll('.js-card');
    var cardsWrapper = document.querySelector('.catalog-content__cards');
    var arrayCards = Array.prototype.slice.call(cards);
    var notesOnpage = 9;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
        var currentNumberPage = this.dataset.numpage;
        displayElements(currentNumberPage);
      });
    });

    function displayElements(currentNumberPage) {
      cardsWrapper.innerHTML = '';
      var numPage = Number(currentNumberPage);
      var start = (numPage - 1) * notesOnpage;
      var end = start + notesOnpage;
      arrayCards.slice(start, end).forEach(function (item) {
        cardsWrapper.appendChild(item);
      });
    }

    displayElements(1);
  }
}
;

/***/ }),

/***/ "./src/js/rangeSlider.js":
/*!*******************************!*\
  !*** ./src/js/rangeSlider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRangeSlider": () => (/* binding */ getRangeSlider)
/* harmony export */ });
function getRangeSlider() {
  var rangeSlider = document.querySelector('.js-range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': [2000],
        'max': [15000]
      }
    });
    var inputs = document.querySelectorAll('.js-catalog-filter-input');
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
  }
}
;

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customeSelect": () => (/* binding */ customeSelect)
/* harmony export */ });
function customeSelect() {
  var select = document.querySelector('.js-select');
  var choices = new Choices(select, {
    searchEnabled: false
  });
  var selectActions = document.querySelector('#js-actions-select'); // selectActions.querySelector('option').innerText = 'Категория'

  var choicesActions = new Choices(selectActions, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices choices--actions'
    }
  });

  function changeTextOptions() {
    var startWindowWidth = window.innerWidth;

    if (startWindowWidth <= 985) {
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория';
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию';
    }
  }

  ;
  changeTextOptions();
  window.addEventListener('resize', function (e) {
    if (document.documentElement.clientWidth <= 985) {
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория';
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию';
    }
  });
}

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticlesSwiper": () => (/* binding */ getArticlesSwiper),
/* harmony export */   "getHeroswiper": () => (/* binding */ getHeroswiper),
/* harmony export */   "getOffersSwiper": () => (/* binding */ getOffersSwiper),
/* harmony export */   "getSimilarProductsSwiper": () => (/* binding */ getSimilarProductsSwiper),
/* harmony export */   "getSwiperModal": () => (/* binding */ getSwiperModal),
/* harmony export */   "getdetailSwiperBigThumb": () => (/* binding */ getdetailSwiperBigThumb)
/* harmony export */ });
function getHeroswiper() {
  var heroSwiper = document.querySelector('.js-hero-swiper');

  if (heroSwiper) {
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.js-hero-swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
}
function getOffersSwiper() {
  var offersSwiper = document.querySelector('.js-offers-swiper');

  if (offersSwiper) {
    new Swiper(offersSwiper, {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.js-offers-swiper-button-next',
        prevEl: '.js-offers-swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
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
}
;
function getArticlesSwiper() {
  var articlesSwiper = document.querySelector('.js-articles-swiper');

  if (articlesSwiper) {
    new Swiper(articlesSwiper, {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 32,
      loop: false,
      navigation: {
        nextEl: '.js-articles-swiper-button-next',
        prevEl: '.js-articles-swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        850: {
          slidesPerView: 3
        },
        1100: {
          slidesPerView: 2
        }
      }
    });
  }
}
;
function getdetailSwiperBigThumb() {
  var detailswiperBigThumb = document.querySelector('.js-detailswiper-big-thumbs');
  var detailswiperMinThumbs = document.querySelectorAll('.js-detailswiper-min-thumbs');

  if (detailswiperBigThumb) {
    var detailSwiperBigThumb = new Swiper(detailswiperBigThumb, {
      direction: 'horizontal',
      loop: true
    });
    detailswiperMinThumbs.forEach(function (el) {
      new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        thumbs: {
          swiper: detailSwiperBigThumb
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            direction: 'horizontal'
          },
          768: {
            slidesPerView: 4,
            direction: 'vertical',
            centeredSlides: false,
            spaceBetween: 20
          },
          985: {}
        }
      });
    });
  }
}
function getSimilarProductsSwiper() {
  var similarProductSwiper = document.querySelector('.js-similar-products-swiper');

  if (similarProductSwiper) {
    new Swiper(similarProductSwiper, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: '.js-similar-products-swiper-button-next',
        prevEl: '.js-similar-products-swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 2
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 32
        },
        1100: {
          slidesPerView: 4
        }
      }
    });
  }
}
;
function getSwiperModal() {
  var modalSwiperBig = document.querySelector('.js-modal-swiper-big');
  var modalSwiperMin = document.querySelector('.js-modal-swiper-min');

  if (modalSwiperBig && modalSwiperMin) {
    new Swiper(modalSwiperBig, {
      direction: 'horizontal',
      loop: false
    });
    new Swiper(modalSwiperMin, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: '.js-modal-swiper-min-button-next',
        prevEl: '.js-modal-swiper-min-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        500: {
          slidesPerView: 2
        },
        769: {
          slidesPerView: 3
        },
        1025: {
          slidesPerView: 4
        }
      }
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenu */ "./src/js/mobileMenu.js");
/* harmony import */ var _cardsTopRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardsTopRating */ "./src/js/cardsTopRating.js");
/* harmony import */ var _rangeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangeSlider */ "./src/js/rangeSlider.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper */ "./src/js/swiper.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ "./src/js/pagination.js");
/* harmony import */ var _catalogFiltresDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalogFiltresDropdown */ "./src/js/catalogFiltresDropdown.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select */ "./src/js/select.js");
/* harmony import */ var _filtres__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtres */ "./src/js/filtres.js");
/* harmony import */ var _filtresCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtresCheck */ "./src/js/filtresCheck.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals */ "./src/js/modals.js");














 // import { searchInContacts } from './searchInContacts';

window.addEventListener('DOMContentLoaded', function () {
  (0,_mobileMenu__WEBPACK_IMPORTED_MODULE_0__.mobileMenu)();
  (0,_cardsTopRating__WEBPACK_IMPORTED_MODULE_1__.cardsTopRating)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getHeroswiper)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getOffersSwiper)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getArticlesSwiper)();
  (0,_pagination__WEBPACK_IMPORTED_MODULE_4__.getPagination)();
  (0,_catalogFiltresDropdown__WEBPACK_IMPORTED_MODULE_5__.catalogFiltresDropdown)();
  (0,_rangeSlider__WEBPACK_IMPORTED_MODULE_2__.getRangeSlider)();
  (0,_select__WEBPACK_IMPORTED_MODULE_6__.customeSelect)();
  (0,_filtres__WEBPACK_IMPORTED_MODULE_7__.filtresDisplay)();
  (0,_filtresCheck__WEBPACK_IMPORTED_MODULE_8__.getFitresCheck)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getdetailSwiperBigThumb)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getSimilarProductsSwiper)();
  (0,_modals__WEBPACK_IMPORTED_MODULE_9__.modalForm)();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_3__.getSwiperModal)();
  searchInContacts(); //маска для телефона

  var inputs = document.querySelectorAll('input[type="tel"]');

  if (inputs.length) {
    var im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);
  } //валидация полей формы


  var form = document.querySelector('.form');

  function validateForms(selector, rules, messages) {
    new window.JustValidate(selector, {
      colorWrong: '#ff6972',
      rules: rules,
      messages: messages,
      submitHandler: function submitHandler() {
        var modalThanks = document.querySelector('.js-modal-thanks');
        var modalClose1 = document.querySelector('.js-close-button-thanks');
        var modal = document.querySelector('.js-modal-form');
        modalThanks.classList.remove('js-modal-hidden');
        document.body.style.overflow = "hidden";
        modalClose1.addEventListener('click', function () {
          modalThanks.classList.add('js-modal-hidden');
          document.body.style.overflow = "";
          modal.remove();
        });
        modalThanks.addEventListener('click', function (e) {
          if (e.target === modalThanks) {
            modalThanks.classList.add('js-modal-hidden');
            document.body.style.overflow = "";
          }
        });
      }
    });
  }

  if (form) {
    validateForms('.form', {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true
      },
      tel: {
        required: true
      }
    }, {
      fio: 'Введите свое имя',
      email: 'Укажите свой ЕМАИЛ',
      tel: 'Укажите свой ТЕЛЕФОН'
    });
  }

  ;
});
var map;
var currentDataText;
var dropdownSearch = document.querySelector('.js-dropdown-search');
var contactsInput = document.querySelector('.js-contacts-input');

function init(targetElement) {
  if (contactsInput) {
    var center = [55.753667434988856, 37.63577574600219];
    map = new ymaps.Map('map', {
      center: center,
      zoom: 15
    });
    var placemark = new ymaps.Placemark(center, {
      balloonContent: "\n        <div class=\"baloon js-baloon\" data-baloon=\"soljanka\">\n            <ul class=\"baloon__list\">\n                <li class=\"baloon__item\">\n                    <h2 class=\"baloon__title\">SitDownPls \u043D\u0430 \u0421\u043E\u043B\u044F\u043D\u043A\u0435</h2>\n                    <p class=\"baloon__text baloon__text--margin\">\u043C. \u041A\u0438\u0442\u0430\u0439-\u0433\u043E\u0440\u043E\u0434, \u0443\u043B. \u0421\u043E\u043B\u044F\u043D\u043A\u0430, \u0434.24</p>\n                    <a class=\"baloon__tel\" href=\"tel:+74958854547\">+7 (495) 885-45-47<a/>\n                </li>\n                <li class=\"baloon__item\">\n                    <p class=\"baloon__text\"><span>\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B:</span> \u0441 10:00 \u0434\u043E 21:00</p>\n                </li>\n                <li class=\"baloon__item\">\n                    <p class=\"baloon__text\"><span>\u0427\u0442\u043E \u0437\u0434\u0435\u0441\u044C:</span>\u0448\u043E\u0443\u0440\u0443\u043C, \u043F\u0443\u043D\u043A\u0442 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438, \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438, \u043F\u0443\u043D\u043A\u0442 \u043E\u0431\u043C\u0435\u043D\u0430-\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430, \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440</p>\n                </li>\n            </ul>\n        </div>\n    "
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-mark.png',
      iconImageSize: [32, 21],
      iconImageOffset: [0, 0]
    });
    var placemark2 = new ymaps.Placemark([55.759086068985255, 37.6451055], {
      balloonContent: "\n        <div class=\"baloon js-baloon\" data-baloon=\"pokrovka\">\n            <ul class=\"baloon__list\">\n                <li class=\"baloon__item\">\n                    <h2 class=\"baloon__title\">SitDownPls \u043D\u0430 \u041F\u043E\u043A\u0440\u043E\u0432\u043A\u0435</h2>\n                    <p class=\"baloon__text baloon__text--margin\">\u043C. \u041A\u0443\u0440\u0441\u043A\u0430\u044F, \u0443\u043B. \u041F\u043E\u043A\u0440\u043E\u0432\u043A\u0430, \u0434.14</p>\n                    <a class=\"baloon__tel\" href=\"tel:+74958854547\">+7 (495) 885-45-47<a/>\n                </li>\n                <li class=\"baloon__item\">\n                    <p class=\"baloon__text\"><span>\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B:</span> \u0441 10:00 \u0434\u043E 21:00</p>\n                </li>\n                <li class=\"baloon__item\">\n                    <p class=\"baloon__text\"><span>\u0427\u0442\u043E \u0437\u0434\u0435\u0441\u044C:</span>\u0448\u043E\u0443\u0440\u0443\u043C, \u043F\u0443\u043D\u043A\u0442 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438, \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438, \u043F\u0443\u043D\u043A\u0442 \u043E\u0431\u043C\u0435\u043D\u0430-\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430, \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440</p>\n                </li>\n            </ul>\n        </div>\n    "
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-mark.png',
      iconImageSize: [32, 21],
      iconImageOffset: [0, 0]
    });
    map.controls.remove('searchControl'); // удаляем поиск

    map.controls.remove('trafficControl'); // удаляем контроль трафика

    map.controls.remove('typeSelector'); // удаляем тип

    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);

    if (targetElement === 'soljanka') {
      placemark.balloon.open();
    }

    if (targetElement === 'pokrovka') {
      placemark2.balloon.open();
    }
  }
}

ymaps.ready(init);
/*search contacts*/

function searchInContacts() {
  var searchWords = document.querySelectorAll('.js-dropdown-search li');

  if (contactsInput) {
    contactsInput.addEventListener('input', function () {
      var valueInput = this.value.trim();
      var valueInputApperCase = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
      this.value = valueInputApperCase;

      if (valueInputApperCase != '') {
        searchWords.forEach(function (word) {
          if (word.innerText.search(valueInputApperCase) == -1) {
            word.remove();

            if (dropdownSearch.children.length === 1) {
              word.style.borderTopColor = 'transparent';
            }
          } else {
            word.classList.remove('dropdown-search__item--hidden');
            dropdownSearch.classList.remove('dropdown-search--hidden');
          }

          word.addEventListener('click', function () {
            word.style.borderRadius = '10px';
            contactsInput.value = this.querySelector('p').innerText;
          });
        });
      } else {
        dropdownSearch.classList.add('dropdown-search--hidden');
      }
    });
    dropdownSearch.addEventListener('click', function (e) {
      currentDataText = e.target.dataset.baloonText;
    });
  }
}

var searchForm = document.querySelector('.js-search-form');
searchForm.addEventListener('submit', function () {
  map.destroy();
  init(currentDataText);
  dropdownSearch.classList.add('dropdown-search--hidden');
  contactsInput.value = '';
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
