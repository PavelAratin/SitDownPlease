export function customeSelect() {
  const select = document.querySelector('.js-select');
  const choices = new Choices(select, {
    searchEnabled: false
  });
  let selectActions = document.querySelector('#js-actions-select');
  // selectActions.querySelector('option').innerText = 'Категория'
  const choicesActions = new Choices(selectActions, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices choices--actions'
    }
  });

  function changeTextOptions() {
    let startWindowWidth = window.innerWidth;
    if (startWindowWidth <= 985) {
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория'
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию'
    }
  };
  changeTextOptions()
  window.addEventListener('resize', (e) => {
    if(document.documentElement.clientWidth <= 985){
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория'
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию'
    }
  });
}