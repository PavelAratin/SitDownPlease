export function getFitresCheck() {
  const checkbokses = document.querySelectorAll('.page-catalog .checkbox');
  const catalogContentList = document.querySelector('.js-catalog-content-list');
  const colors = {
    category: 'lime',
    price: 'bone',
    sale: 'pink-violet',
    color: 'grey-light',
  }

  checkbokses.forEach(function (checkbox) {
    checkbox.addEventListener('change', function (e) {
      if (checkbox.checked) {
        const parentChekboxWrapper = checkbox.closest('[data-parent-filter]')
        const text = parentChekboxWrapper.dataset.parentFilter
        const currentCheckbox = e.target.dataset.filter
        renderShield(currentCheckbox, colors[text])
      }
      deleteShield()
    })
  });
  function renderShield(currentCheckbox, colorName) {
    const htmlLi = `
    <li class="catalog-content__item catalog-content__item--${colorName} js-catalog-button">
        <button class="catalog-content__button catalog-content__button--${colorName}">${currentCheckbox}</button>
      </li>
    `
    catalogContentList.innerHTML += htmlLi
  };

  function deleteShield() {
    const catalogButtons = catalogContentList.querySelectorAll('.js-catalog-button')
    console.log(catalogButtons)
    catalogButtons.forEach(function(btn){
      btn.addEventListener('click',function(){
        this.remove();
      });
    });
  }
};