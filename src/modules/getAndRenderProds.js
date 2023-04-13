
const getAndRenderProds = () => {

  const catalogWrapper = document.querySelector('.catalog-wrapper');

  const renderProducts = arr => {
    arr.forEach(el => {
      const productHTML = `
       <div data-id="${el.id}" class="catalog-item">
          <div class="img-wrapper">
            <img src="images/${el.imgSrc}" alt="${el['vendor code']}">
          </div>
          <div class="wrapper-info">
            <p class="vendor-code">Артикул: ${el['vendor code']}</p>
            <span class="price">${el.price} ₽</span>
          </div>
          <div class="btns-wrapper">
            <button data-cart class="btn pink-btn" data-type="simple">В корзину</button>
            <div class="counter-wrapper">
              <button data-action="minus">-</button>
              <span class="count-num">1</span>
              <button data-action="plus">+</button>
            </div>
          </div>
        </div>
    `;

      catalogWrapper.insertAdjacentHTML('beforeend', productHTML);
    });
  };

  const getProducts = async () => {
    const res = await fetch('./script/products.json');
    const productsArr = await res.json();
    renderProducts(productsArr);
  };

  getProducts();
};


export default getAndRenderProds;
