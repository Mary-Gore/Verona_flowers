const sendForm = id => {
  const form = document.getElementById(id),
    statusMessage = document.createElement('div'),
    errorMessage = 'Что-то пошло не так...',
    btnSubmit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.parentNode.append(statusMessage);

    btnSubmit.classList.remove('active');
    btnSubmit.classList.add('disable');
    btnSubmit.disabled = true;

    if (window.innerWidth > 992) {
      statusMessage.innerHTML = `<img class='img-preloader' src='icons/iconSpinnerAnimated.svg'/>`;
    } else {
      statusMessage.innerHTML = 'Загрузка...';
      statusMessage.style.cssText = `
            font-size: 16px;
            text-align: center;
            display: block;
            color: #000;
            margin-top: 30px;
      `;
    }

    const formData = new FormData(form),
      body = {};

    formData.forEach((key, val) => {
      body[key] = val;
    });

    const postData = body => {
      return fetch('server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    }

    postData(body)
      .then(response => {
        [...form.elements].forEach(item => item.value = '');

        const btnSubmit = form.querySelector('button[type="submit"]'),
          popup = document.getElementById(btnSubmit.dataset.finishPopup);

        if (response.status !== 200) {
          statusMessage.textContent = errorMessage;
          statusMessage.style.marginTop = '35px';

          throw new Error('status network is not 200');
        }

        animateFinishPopup(popup);
        statusMessage.textContent = '';
        statusMessage.style.display = 'none';
      })
      .catch(error => {
        console.error(error);
      });
  });
};

export default sendForm;
