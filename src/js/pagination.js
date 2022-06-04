export function getPagination() {
  const btns = document.querySelectorAll('.js-pagination-btn')
  const cards = document.querySelectorAll('.js-card');
  const cardsWrapper = document.querySelector('.catalog-content__cards')
  const arrayCards = Array.prototype.slice.call(cards);
  let notesOnpage = 9;
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (item) {
        item.classList.remove('active')
      });
      this.classList.add('active')
      let currentNumberPage = this.dataset.numpage
      displayElements(currentNumberPage)
    });
  });
  function displayElements(currentNumberPage) {
    cardsWrapper.innerHTML = '';
    let numPage = Number(currentNumberPage);
      let start = (numPage - 1) * notesOnpage;
      let end = start + notesOnpage
      arrayCards.slice(start, end).forEach(function (item) {
        cardsWrapper.appendChild(item)
      })
    }
  displayElements(1);
};