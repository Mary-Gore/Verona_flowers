const eventListeners = () => {
  document.body.addEventListener('click', e => {
    if (e.target.id === 'cart_btn') {
      document.querySelector('.cart').style.display = 'block';
    }

    if (e.target.closest('.cart-close')) {
      document.querySelector('.cart').style.display = 'none';
    }
  });
};

eventListeners();