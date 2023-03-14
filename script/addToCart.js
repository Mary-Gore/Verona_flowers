const addToCart = () => {
  const cartWrapper = document.querySelector('.cart-wrapper');

  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart')) {
      const catalogItem = e.target.closest('.catalog-item');

      const productInfo = {
        id: catalogItem.dataset.id,
        imgSrc: catalogItem.querySelector('.catalog-item img').getAttribute('src'),
        title: catalogItem.querySelector('.vendor-code').textContent,
        price: parseFloat(catalogItem.querySelector('.price').textContent),
        counter: catalogItem.querySelector('.count-num').textContent
      };

      // Проверка на наличие подобного товара в корзине
      const itemInCart = cartWrapper.querySelector(`[data-id="${(productInfo.id)}"]`);

      if (itemInCart) {
        const countNum = itemInCart.querySelector('.count-num');
        countNum.textContent = parseInt(countNum.textContent) + parseInt(productInfo.counter);
      } else {
        const cartItemHTML = `
          <div class="cart-item" data-id="${productInfo.id}">
          <div class="img-wrapper">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
          </div>
          <div class="content">
            <p class="vendor-code">${productInfo.title}</p>
            <div class="calc-price-wrap">
              <div class="counter-wrapper">
                <button data-action="minus">-</button>
                <span class="count-num">${productInfo.counter}</span>
                <button data-action="plus">+</button>
              </div>
              <span class="price">${productInfo.price} ₽</span>
            </div>
          </div>
        </div>
    `;

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
      }


      catalogItem.querySelector('.count-num').textContent = '1';

      calcPrice();
    }
  });
};

addToCart();
