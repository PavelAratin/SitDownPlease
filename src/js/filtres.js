export function filtresDisplay() {
  const filtresLinks = document.querySelectorAll('.js-catalog-filtres-link')
  filtresLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const currentThis = this;
      const currentLink = e.target.dataset.link;
      console.log(currentLink)
      const parentCurrentLink = document.querySelector(`[data-parent-filter=${currentLink}]`);
      const noneFilters = parentCurrentLink.querySelectorAll('[data-hidden]');
      noneFilters.forEach(function (noneFilter) {
        noneFilter.classList.toggle('js-catalog-filter-none');
        const span = currentThis.querySelector('span');
        if (!noneFilter.classList.contains('js-catalog-filter-none')) {
          span.innerText = 'Cкрыть';
        }else{
          span.innerText = span.dataset.text;
        }
      });
    });
  })
}