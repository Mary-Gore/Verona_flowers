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
      total.textContent = price.textContent;
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        price.textContent = `${parseFloat(price.textContent) - startPrice} ₽`;
        total.textContent = price.textContent;
      }

      spanCalc.textContent = count;
    });
  });
}

countCatalog();

// корзина
const cartBtn = document.getElementById('cart_btn'),
  modalCart = document.querySelector('.cart'),
  closeBtn = document.querySelector('.cart-close'),
  catalogItems = document.querySelectorAll('.catalog-item'),
  cartWrapper = document.querySelector('.cart-wrapper'),
  cartEmpty = document.getElementById('cart_empty');

catalogItems.forEach(item => {
  btnBuy = item.querySelector('.btns-wrapper > button');

  btnBuy.addEventListener('click', () => {
    const cardClone = item.cloneNode(true);

    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();

  });
});

cartBtn.addEventListener('click', () => {
  modalCart.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modalCart.style.display = 'none';
  document.body.style.overflow = '';
});
// end корзина

const checkPopupTotal = () => {
  const calcPopup = document.querySelector('.calc-popup'),
    total = calcPopup.querySelector('.total > span'),
    checkboxes = calcPopup.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        total.textContent = `${parseFloat(total.textContent) + parseFloat(checkbox.value)} ₽`;
      } else {
        total.textContent = `${parseFloat(total.textContent) - parseFloat(checkbox.value)} ₽`;
      }
    });
  });
};

checkPopupTotal();

const popupAnimate = () => {
  const dataPopupsBtns = document.querySelectorAll('[data-simple-popup]');

  if (dataPopupsBtns.length === 0) return;

  const overlay = document.querySelector('.overlay'),
    popups = document.querySelectorAll('.popup'),
    dataClose = document.querySelectorAll('[data-closed]'),
    checkboxes = document.querySelectorAll('input[type="checkbox"]');

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
    const total = document.querySelector('.total > span'),
      wrapperInfoSpan = document.querySelector('.wrapper-info > span');

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

      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });

      total.textContent =
        `${parseFloat(wrapperInfoSpan.textContent)} ₽`;
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





