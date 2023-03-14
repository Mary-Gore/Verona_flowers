const toggleCartStatus = () => {
  const cartWrapper = document.querySelector('.cart-wrapper'),
  cartEmpty = document.querySelector('[data-cart-empty]'),
  orderForm = document.getElementById('order-form');

  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add('none');
    orderForm.classList.remove('none');
  } else {
    cartEmpty.classList.remove('none');
    orderForm.classList.add('none');
  }
};