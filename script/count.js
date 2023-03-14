const count = () => {
  const catalogItems = document.querySelectorAll('.catalog-item');

  catalogItems.forEach(countItem => {
    const plusBtn = countItem.querySelector('.plus-btn'),
      minusBtn = countItem.querySelector('.minus-btn'),
      spanCalc = countItem.querySelector('.btns-calc-wrapper span'),
      price = countItem.querySelector('.wrapper-info span'),
      startPrice = parseFloat(price.textContent);


    plusBtn.addEventListener('click', () => {
      spanCalc.textContent = ++spanCalc.textContent;
      price.textContent = `${startPrice * parseInt(spanCalc.textContent)} ₽`;
    });

    minusBtn.addEventListener('click', () => {
      if (parseInt(spanCalc.textContent) > 1) {
        spanCalc.textContent = --spanCalc.textContent;
        price.textContent = `${parseFloat(price.textContent) - startPrice} ₽`;
      }
    });
  });
};

count();