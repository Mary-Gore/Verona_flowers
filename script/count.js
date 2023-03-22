const count = () => {
  const cartCounter = document.querySelector('.cart-counter');

  window.addEventListener('click', e => {
    let countNum;

    if (e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus') {
      const counterWrapper = e.target.closest('.counter-wrapper');
      countNum = counterWrapper.querySelector('.count-num');
    }

    if (e.target.dataset.action === 'minus') {
      if (parseInt(countNum.textContent) > 1) {
        countNum.textContent = --countNum.textContent;
      } else if (e.target.closest('.cart-wrapper') && parseInt(countNum.textContent) === 1) {
        e.target.closest('.cart-item').remove();

        calcPrice();
        toggleCartStatus();
      } 
    }

    if (e.target.dataset.action === 'plus') {
      countNum.textContent = ++countNum.textContent;
    }

    // Проверка на клик +- в корзине
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
      // Пересчёт общей стоимости в корзине
      calcPrice();
    }
  });
};

count();