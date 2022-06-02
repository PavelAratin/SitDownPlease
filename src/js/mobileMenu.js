export function mobileMenu(){
  const buttonBurger = document.querySelector('.js-burger');
  const mobileMenu = document.querySelector('.js-mobile-menu-none');
  const mobileMenuClose = document.querySelector('.js-close-button');
  buttonBurger.addEventListener('click',function(){
    mobileMenu.classList.remove('js-mobile-menu-none')
  });
  mobileMenuClose.addEventListener('click',function(){
    mobileMenu.classList.add('js-mobile-menu-none')
  });
  document.addEventListener('click',function(e){
    if(e.target.closest('.mobile-menu')){
      mobileMenu.classList.add('js-mobile-menu-none')
    }
  });
}