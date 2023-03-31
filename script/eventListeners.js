const eventListeners = () => {
  const cart = document.querySelector('.cart');

  document.body.addEventListener('click', e => {
    if (e.target.id === 'cart_btn') {
      cart.style.display = 'block';
    }

    if (e.target.closest('.cart .popup-close')) {
      cart.style.display = 'none';
    }
  });

  cart.addEventListener('click', e => {
    let target = e.target;
    target = target.closest('.cart-body');

    if (!target) {
      cart.style.display = 'none';
    }
  });
};

eventListeners();