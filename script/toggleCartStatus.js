const toggleCartStatus = () => {
  const cartItems = document.querySelectorAll('.cart-item'),
    cartEmpty = document.getElementById('cart_empty'),
    cartCounter = document.querySelector('.cart-counter');

  let totalNum = 0;

  if (cartItems.length > 0) {
    cartEmpty.style.display = 'none';
    cartItems.forEach(item => {
      const itemNum = parseInt(item.querySelector('.count-num').textContent);
      totalNum += itemNum;
    });

  } else {
    cartEmpty.style.display = 'block';
  }

  cartCounter.textContent = totalNum;
};

toggleCartStatus();