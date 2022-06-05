import { dropdownCategoryHeader } from "./dropdownCategoryHeader";
import { mobileMenu } from "./mobileMenu";
import { cardsTopRating } from "./cardsTopRating";
import { getRangeSlider } from "./rangeSlider";
import { getHeroswiper } from './swiper';
import { getOffersSwiper } from './swiper';
import { getArticlesSwiper } from './swiper';
import {getPagination} from './pagination';
import {catalogFiltresDropdown} from './catalogFiltresDropdown';
dropdownCategoryHeader();
mobileMenu();
cardsTopRating();

getHeroswiper();
getOffersSwiper();
getArticlesSwiper();

getRangeSlider();

getPagination();
catalogFiltresDropdown();


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
    messages: messages
  })
}
if(form){
  validateForms('.form',
  {
    email: { required: true, email: true },
    fio: { required: true },
    tel: { required: true },
  },
  { fio: 'Введите свое имя', email: 'Укажите свой ЕМАИЛ', tel: 'Укажите свой ТЕЛЕФОН' });
};