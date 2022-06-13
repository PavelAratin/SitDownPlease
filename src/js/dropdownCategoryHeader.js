export function dropdownCategoryHeader (){
  const dropdownCategorybtn = document.querySelector('.js-dropdown-category-btn');
  const dropdownCategoryTexts = document.querySelectorAll('.js-dropdown-category-text');
  dropdownCategorybtn.addEventListener('click',function(){
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('js-dropdown-category')     
  });
  dropdownCategoryTexts.forEach(function(text){
    text.addEventListener('click',function(){
      dropdownCategorybtn.innerHTML = text.innerHTML
    });
  });
};