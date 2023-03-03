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
      total = calcPopup.querySelector('.total > span'),
      checkboxes = calcPopup.querySelectorAll('input[type="checkbox"]'),
      btnClose = calcPopup.querySelector('.icon-close'),
      btnBuy = countItem.querySelector('.btns-wrapper > button');

    plusBtn.addEventListener('click', () => {
      count++;
      spanCalc.textContent = count;
      price.textContent = `${startPrice * count} ₽`;
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        price.textContent = `${parseFloat(price.textContent) - startPrice} ₽`;
      }

      spanCalc.textContent = count;
    });

    btnBuy.addEventListener('click', () => {
      total.textContent = `${parseFloat(price.textContent)} ₽`;

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            total.textContent = `${parseFloat(total.textContent) + parseFloat(checkbox.value)} ₽`;
          } else {
            total.textContent = `${parseFloat(total.textContent) - parseFloat(checkbox.value)} ₽`;
          }
        });
      });

    });

    btnClose.addEventListener('click', () => {
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });

  });

  const btnCart = document.getElementById('cartBtn');

}

countCatalog();

const popupAnimate = () => {
  const dataPopupsBtns = document.querySelectorAll('[data-simple-popup]');

  if (dataPopupsBtns.length === 0) return;

  const overlay = document.querySelector('.overlay'),
    popups = document.querySelectorAll('.popup'),
    dataClose = document.querySelectorAll('[data-closed]');

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





