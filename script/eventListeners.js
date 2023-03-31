const eventListeners = () => {
  const cart = document.querySelector('.cart');

  document.body.addEventListener('click', e => {
    if (e.target.id === 'cart_btn') {
      document.querySelector('.cart').style.display = 'block';
    }

    if (e.target.closest('.cart-close')) {
      document.querySelector('.cart').style.display = 'none';
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