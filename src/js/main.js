
import { mobileMenu } from "./mobileMenu";
import { cardsTopRating } from "./cardsTopRating";
import { getRangeSlider } from "./rangeSlider";
import { getHeroswiper } from './swiper';
import { getOffersSwiper } from './swiper';
import { getArticlesSwiper } from './swiper';
import { getPagination } from './pagination';
import { catalogFiltresDropdown } from './catalogFiltresDropdown';
import { customeSelect } from './select';
import { filtresDisplay } from './filtres';
import { getFitresCheck } from './filtresCheck';
import { getdetailSwiperBigThumb } from './swiper';
import { getSimilarProductsSwiper } from './swiper';
import { getSwiperModal } from "./swiper";
import { modalForm } from './modals';
// import { searchInContacts } from './searchInContacts';

window.addEventListener('DOMContentLoaded', function () {
  mobileMenu();
  cardsTopRating();

  getHeroswiper();
  getOffersSwiper();
  getArticlesSwiper();


  getPagination();
  catalogFiltresDropdown();

  getRangeSlider();


  customeSelect();
  filtresDisplay();
  getFitresCheck();
  getdetailSwiperBigThumb();
  getSimilarProductsSwiper();
  modalForm();
  getSwiperModal();
  searchInContacts();

  //маска для телефона
  let inputs = document.querySelectorAll('input[type="tel"]');
  if (inputs.length) {
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);
  }
  //валидация полей формы
  const form = document.querySelector('.form');
  function validateForms(selector, rules, messages) {
    new window.JustValidate(selector, {
      colorWrong: '#ff6972',
      rules: rules,
      messages: messages,
      submitHandler: function () {
        const modalThanks = document.querySelector('.js-modal-thanks')
        const modalClose1 = document.querySelector('.js-close-button-thanks')
        const modal = document.querySelector('.js-modal-form')
        modalThanks.classList.remove('js-modal-hidden')
        document.body.style.overflow = "hidden";
        modalClose1.addEventListener('click', function () {
          modalThanks.classList.add('js-modal-hidden')
          document.body.style.overflow = "";
          modal.remove()
        });
        modalThanks.addEventListener('click', function (e) {
          if (e.target === modalThanks) {
            modalThanks.classList.add('js-modal-hidden')
            document.body.style.overflow = "";
          }
        });
      }
    })
  }
  if (form) {
    validateForms('.form',
      {
        email: { required: true, email: true },
        fio: { required: true },
        tel: { required: true },
      },
      { fio: 'Введите свое имя', email: 'Укажите свой ЕМАИЛ', tel: 'Укажите свой ТЕЛЕФОН' });
  };
});

let map;
let currentDataText;
const dropdownSearch = document.querySelector('.js-dropdown-search');
const contactsInput = document.querySelector('.js-contacts-input');
function init(targetElement) {
  if (contactsInput) {
    let center = [55.753667434988856, 37.63577574600219];
    map = new ymaps.Map('map', {
      center: center,
      zoom: 15
    })
    let placemark = new ymaps.Placemark(center, {
      balloonContent: `
        <div class="baloon js-baloon" data-baloon="soljanka">
            <ul class="baloon__list">
                <li class="baloon__item">
                    <h2 class="baloon__title">SitDownPls на Солянке</h2>
                    <p class="baloon__text baloon__text--margin">м. Китай-город, ул. Солянка, д.24</p>
                    <a class="baloon__tel" href="tel:+74958854547">+7 (495) 885-45-47<a/>
                </li>
                <li class="baloon__item">
                    <p class="baloon__text"><span>Часы работы:</span> с 10:00 до 21:00</p>
                </li>
                <li class="baloon__item">
                    <p class="baloon__text"><span>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
                </li>
            </ul>
        </div>
    `
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-mark.png',
      iconImageSize: [32, 21],
      iconImageOffset: [0, 0]
    });
    let placemark2 = new ymaps.Placemark([55.759086068985255, 37.6451055], {
      balloonContent: `
        <div class="baloon js-baloon" data-baloon="pokrovka">
            <ul class="baloon__list">
                <li class="baloon__item">
                    <h2 class="baloon__title">SitDownPls на Покровке</h2>
                    <p class="baloon__text baloon__text--margin">м. Курская, ул. Покровка, д.14</p>
                    <a class="baloon__tel" href="tel:+74958854547">+7 (495) 885-45-47<a/>
                </li>
                <li class="baloon__item">
                    <p class="baloon__text"><span>Часы работы:</span> с 10:00 до 21:00</p>
                </li>
                <li class="baloon__item">
                    <p class="baloon__text"><span>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
                </li>
            </ul>
        </div>
    `
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
      placemark.balloon.open()
    }
    if (targetElement === 'pokrovka') {
      placemark2.balloon.open()
    }
  }
}
ymaps.ready(init)

/*search contacts*/
function searchInContacts() {
  const searchWords = document.querySelectorAll('.js-dropdown-search li');
  if (contactsInput) {
    contactsInput.addEventListener('input', function () {
      let valueInput = this.value.trim();
      let valueInputApperCase = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
      this.value = valueInputApperCase;
      if (valueInputApperCase != '') {
        searchWords.forEach(function (word) {
          if (word.innerText.search(valueInputApperCase) == -1) {
            word.remove()
            if (dropdownSearch.children.length === 1) {
              word.style.borderTopColor = 'transparent';
            }
          } else {
            word.classList.remove('dropdown-search__item--hidden')
            dropdownSearch.classList.remove('dropdown-search--hidden')
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
      currentDataText = e.target.dataset.baloonText
    });
  }
}

const searchForm = document.querySelector('.js-search-form');
searchForm.addEventListener('submit', function () {
  map.destroy();
  init(currentDataText);
  dropdownSearch.classList.add('dropdown-search--hidden');
  contactsInput.value = '';
});
