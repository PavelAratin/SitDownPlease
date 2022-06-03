export function cardsTopRating(){
  const ratingBtn = document.querySelector('.js-rating-btn');
  const cardRatingHidden = document.querySelectorAll('.js-card-rating-none');
  if(ratingBtn){
    ratingBtn.addEventListener('click',function(){
      cardRatingHidden.forEach(function(item){
        item.classList.remove('js-card-rating-none')
      });
    });
  }
};