export function getRangeSlider() {
  const rangeSlider = document.querySelector('.js-range-slider');
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': [2000],
        'max': [15000]
      }
    });
  }
  const inputs = document.querySelectorAll('.js-catalog-filter-input');
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
};
