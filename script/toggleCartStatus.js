const toggleCartStatus = () => {
  const cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart_empty');

    if (cartWrapper.children.length > 0) {
      cartEmpty.style.display = 'none';
    } else {
      cartEmpty.style.display = 'block';
    }
};

toggleCartStatus();