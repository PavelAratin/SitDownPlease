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
      console.log(document.querySelector('.choices--actions .choices__item').innerText)
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория'
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию'
    }
  };
  changeTextOptions()
  window.addEventListener('resize', (e) => {
    let startWindowWidth = window.innerWidth;
    console.log(document.documentElement.clientWidth)
    if(document.documentElement.clientWidth <= 985){
      document.querySelector('.choices--actions .choices__item').innerText = 'Категория'
    } else {
      document.querySelector('.choices--actions .choices__item').innerText = 'Выбрать категорию'
    }
  });
}