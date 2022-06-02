export function getRangeSlider() {
  const rangeSliderr = document.querySelector('.js-range-slider');
  if (rangeSliderr) {
    noUiSlider.create(rangeSliderr, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': [2000],
        'max': [15000]
      }
    });
  }
  console.log(rangeSliderr)
};
