const addToCart = () => {
  const cartWrapper = document.querySelector('.cart-wrapper');

  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart')) {
      const catalogItem = e.target.closest('.catalog-item');

      const productInfo = {
        id: catalogItem.getAttribute('id'),
        imgSrc: catalogItem.querySelector('.catalog-item img').getAttribute('src'),
        title: catalogItem.querySelector('.vendor-code').textContent,
        price: parseFloat(catalogItem.querySelector('.price').textContent),
        counter: catalogItem.querySelector('.count-num').textContent
      };

      const cartItemHTML = `
          <div class="cart-item" id="${productInfo.id}">
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

      catalogItem.querySelector('.count-num').textContent = '1';

      calcPrice();
    }
  });
};

addToCart();
