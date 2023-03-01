const countCatalog = () => {
  const catalogItems = document.querySelectorAll('.catalog-item');

  let count = 1;

  catalogItems.forEach(countItem => {
    const plusBtn = countItem.querySelector('.plus-btn'),
      minusBtn = countItem.querySelector('.minus-btn'),
      spanCalc = countItem.querySelector('.btns-calc-wrapper span'),
      price = countItem.querySelector('.wrapper-info span'),
      startPrice = parseFloat(price.textContent),
      btnBuy = countItem.querySelector('.btns-wrapper > button');



    /* const total = calcWrapper.querySelector('.total span'),
     checkboxes = calcWrapper.querySelectorAll('input[type="checkbox"]'),
           btnClose = countItem.querySelector('.icon-close'),
                 calcWrapper = countItem.querySelector('.wrapper-calc-form'),
    */


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

    /*  btnBuy.addEventListener('click', () => {
        calcWrapper.style.cssText = `
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
  
      }); */

    /*  btnClose.addEventListener('click', () => {
        calcWrapper.style.display = 'none';
  
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            checkbox.checked = false;
          }
        });
      }); */

  });

}

countCatalog();




