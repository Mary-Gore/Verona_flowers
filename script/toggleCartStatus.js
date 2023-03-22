const toggleCartStatus = () => {
    cartEmpty = document.getElementById('cart_empty');
  const cartItems = document.querySelectorAll('.cart-item');

  if (cartItems.length > 0) {
    cartEmpty.style.display = 'none';
  } else {
    cartEmpty.style.display = 'block';
  }
};

toggleCartStatus();