export function customeSelect() {
  const select = document.querySelector('.js-select');
  const choices = new Choices(select,{
    searchEnabled:false
  });
}