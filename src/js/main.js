import { dropdownCategoryHeader } from "./dropdownCategoryHeader";
import { mobileMenu } from "./mobileMenu";
import { cardsTopRating } from "./cardsTopRating";
import { getRangeSlider } from "./rangeSlider";
import { heroSwiper } from './swiper';
import { offersSwiper } from './swiper';
import { articlesSwiper } from './swiper';
dropdownCategoryHeader();
mobileMenu();
cardsTopRating();
getRangeSlider();

//маска для телефона
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);
//валидация полей формы
function validateForms(selector, rules, messages) {
  new window.JustValidate(selector, {
    colorWrong: '#ff6972',
    rules: rules,
    messages: messages
  })
}
validateForms('.form',
  {
    email: { required: true, email: true },
    fio: { required: true },
    tel: { required: true },
  },
  { fio: 'Введите свое имя', email: 'Укажите свой ЕМАИЛ', tel: 'Укажите свой ТЕЛЕФОН' });