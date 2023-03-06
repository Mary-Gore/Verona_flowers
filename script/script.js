const countCatalog = () => {
  const catalogItems = document.querySelectorAll('.catalog-item');

  let count = 1;

  catalogItems.forEach(countItem => {
    const plusBtn = countItem.querySelector('.plus-btn'),
      minusBtn = countItem.querySelector('.minus-btn'),
      spanCalc = countItem.querySelector('.btns-calc-wrapper span'),
      price = countItem.querySelector('.wrapper-info span'),
      startPrice = parseFloat(price.textContent),
      calcPopup = document.querySelector('.calc-popup'),
      total = calcPopup.querySelector('.total > span');

    plusBtn.addEventListener('click', () => {
      count++;
      spanCalc.textContent = count;
      price.textContent = `${startPrice * count} ₽`;
      total.textContent = parseFloat(price.textContent);
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        price.textContent = `${parseFloat(price.textContent) - startPrice} ₽`;
        total.textContent = parseFloat(price.textContent);
      }

      spanCalc.textContent = count;
    });
  });
}

countCatalog();

const addToCart = () => {
  const calcPopup = document.getElementById('calc_popup'),
    total = calcPopup.querySelector('.total > span'),
    checkboxes = calcPopup.querySelectorAll('input[type="checkbox"]'),
    offerCartBtn = document.getElementById('offer_cart_btn'),
    cartBtn = document.getElementById('cart_btn'),
    modalCart = document.querySelector('.cart'),
    closeBtn = document.querySelector('.cart-close'),
    catalogItems = document.querySelectorAll('.catalog-item'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartCounter = document.querySelector('.cart-counter'),
    cartEmpty = document.getElementById('cart_empty');

  cartBtn.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        total.textContent = `${parseFloat(total.textContent) + parseFloat(checkbox.value)} ₽`;
      } else {
        total.textContent = `${parseFloat(total.textContent) - parseFloat(checkbox.value)} ₽`;
      }
    });
  });

  catalogItems.forEach(item => {
    const btnBuy = item.querySelector('.catalog .btns-wrapper > .pink-btn'),
      calcPopup = document.querySelector('.calc-popup'),
      sumSpan = item.querySelector('.wrapper-info > span');


    const showData = () => {
      const cartItemsSum = cartWrapper.querySelectorAll('.cart-body .wrapper-info > span'),
        cartTotal = document.querySelector('.cart-total > span');

      let cartSum = 0;

      cartItemsSum.forEach(item => {
        let price = parseFloat(item.textContent);
        cartSum += price;
      });

      cartTotal.textContent = cartSum;
    };

    btnBuy.addEventListener('click', () => {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardClone = item.cloneNode(true);
      card.appendChild(cardClone);
      cartWrapper.appendChild(card);
      cartEmpty.remove();

      total.textContent = sumSpan.textContent;

      offerCartBtn.addEventListener('click', () => {
        const catalogCartItem = cartWrapper.querySelector('.catalog-item');
        catalogCartItem.querySelector('.wrapper-info > span').textContent = total.textContent;

        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            const checkboxClone = checkbox.parentElement.cloneNode(true);
            card.appendChild(checkboxClone);
          }
        })
        showData();
      });

      if (calcPopup.classList.contains('is-open') === false) {
        total.textContent = item.querySelector('.wrapper-info > span').textContent;
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            checkbox.checked = false;
          }
        });
      } 

      showData();

      const spanContent = item.querySelector('.catalog .btns-calc-wrapper > span');
      cartCounter.textContent = parseInt(cartCounter.textContent) + parseInt(spanContent.textContent);
    });
  });
};

addToCart();

const popupAnimate = () => {
  const dataPopupsBtns = document.querySelectorAll('[data-simple-popup]');

  if (dataPopupsBtns.length === 0) return;

  const overlay = document.querySelector('.overlay'),
    popups = document.querySelectorAll('.popup'),
    dataClose = document.querySelectorAll('[data-closed]'),
    checkboxes = document.querySelectorAll('.calc-popup input[type="checkbox"]');

  const modalShow = popup => {
    if (window.innerWidth > 992) {
      overlay.classList.remove('fadeOut');
      overlay.classList.add('fadeIn');
      popup.classList.remove('fadeOut');
      popup.classList.add('fadeIn');
    } else {
      overlay.classList.remove('hide-mobile');
      overlay.classList.add('show-mobile');
      popup.classList.remove('hide-mobile');
      popup.classList.add('show-mobile');
    }

    popup.classList.add('is-open');
  };

  const modalClose = e => {
    for (let popupElem of popups) {
      if (popupElem.classList.contains('is-open') && (e.type !== 'keydown' || e.keyCode === 27)) {
        if (window.innerWidth > 992) {
          popupElem.classList.remove('fadeIn');
          popupElem.classList.add('fadeOut');
          overlay.classList.remove('fadeIn');
          overlay.classList.add('fadeOut');
        }
      } else {
        overlay.classList.remove('show-mobile');
        overlay.classList.add('hide-mobile');
        popupElem.classList.remove('show-mobile');
        popupElem.classList.add('hide-mobile');
      }

      popupElem.classList.remove('is-open');
    }
  };

  for (let elem of dataPopupsBtns) {
    elem.addEventListener('click', () => {
      let popup = document.getElementById(elem.dataset.simplePopup);
      modalShow(popup);
    });
  }

  for (let elem of dataClose) {
    elem.addEventListener('click', modalClose);
  }

  document.addEventListener('keydown', modalClose);
};

popupAnimate();
