export function modalForm() {
  function getModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closes = document.querySelectorAll(closeSelector);
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        modal.classList.remove('js-modal-hidden');
        document.body.style.overflow = "hidden";
      });
    });
    closes.forEach(function (close) {
      close.addEventListener('click', function () {
        modal.classList.add('js-modal-hidden');
        document.body.style.overflow = "";
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.add('js-modal-hidden');
        document.body.style.overflow = "";
      }
      if(e.target.classList.contains('js-form-button-modal')){
        modal.remove()
      }
    });
  };
  getModal('.js-card-detail-button', '.js-modal-form', '.js-close-button')
  getModal('.js-form-button-modal', '.js-modal-thanks', '.js-close-button')
  getModal('.js-detailswiper-big-thumbs-swiper-slide', '.js-modal-swiper', '.js-close-button')
};