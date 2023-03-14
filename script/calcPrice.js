const calcPrice = () => {
  const cartItems = document.querySelectorAll('.cart-item'),
    totalSpan = document.querySelector('.cart-total > span');

  let totalPrice = 0;

  cartItems.forEach(item => {
    const countNum = item.querySelector('.count-num'),
      price = item.querySelector('.price'),
      currentPrice = parseInt(countNum.textContent) * parseFloat(price.textContent);

    totalPrice += currentPrice;
  });

  totalSpan.textContent = totalPrice;
};

