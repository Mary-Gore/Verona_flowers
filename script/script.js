const countCatalog = () => {
  const catalogItems = document.querySelectorAll('.catalog-item');

  let count = 1;

  catalogItems.forEach(countItem => {
    const plusBtn = countItem.querySelector('.plus-btn'),
      minusBtn = countItem.querySelector('.minus-btn'),
      spanCalc = countItem.querySelector('.btns-calc-wrapper span'),
      price = countItem.querySelector('.wrapper-info span'),
      startPrice = parseFloat(price.textContent),
      calcPopup = countItem.querySelector('.calc-popup'),
      total = calcPopup.querySelector('.total span'),
      checkboxes = calcPopup.querySelectorAll('input[type="checkbox"]'),
      btnClose = countItem.querySelector('.icon-close'),
      btnBuy = countItem.querySelector('.btns-wrapper > button');

    plusBtn.addEventListener('click', () => {
      count++;
      spanCalc.textContent = count;
      price.textContent = `${startPrice * count} ₽`;
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        price.textContent = `${parseFloat(price.textContent) - startPrice} ₽`;
      }

      spanCalc.textContent = count;
    });

    btnBuy.addEventListener('click', () => {
      calcPopup.style.cssText = `
      display:flex;
      flex-direction: column;
    `;

      total.textContent = `${parseFloat(price.textContent)} ₽`;

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            total.textContent = `${parseFloat(total.textContent) + parseFloat(checkbox.value)} ₽`;
          } else {
            total.textContent = `${parseFloat(total.textContent) - parseFloat(checkbox.value)} ₽`;
          }
        });
      });

    });

    btnClose.addEventListener('click', () => {
      calcPopup.style.display = 'none';

      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });

  });

  const btnCart = document.getElementById('cartBtn');

}

countCatalog();




