
const addToCart = () => {
  const cartWrapper = document.querySelector('.cart-wrapper');

  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart')) {
      const catalogItem = e.target.closest('.catalog-item');

      const productInfo = {
        id: catalogItem.getAttribute('id'),
        imgSrc: catalogItem.querySelector('.catalog-item > img').getAttribute('src'),
        title: catalogItem.querySelector('.vendor-code').textContent,
        price: catalogItem.querySelector('.price').textContent,
        counter: catalogItem.querySelector('.count-num').textContent
      };
    }
  });
};

addToCart();
