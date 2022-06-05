export function catalogFiltresDropdown(){
  const btns = document.querySelectorAll('.js-catalog-content-filtres-button');
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      this.nextElementSibling.classList.toggle('js-catalog-filtres-hidden')
    });

  });
};