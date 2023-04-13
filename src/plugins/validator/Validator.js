export default class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => {
      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });

    this.btnSubmit = this.form.querySelector('button[type="submit"]');
    this.error = new Set();
  }

  init() {
    this.setPattern();

    this.elementsForm.forEach(elem => {
      if (elem.value === '') {
        this.btnSubmit.disabled = true;
        this.btnSubmit.classList.remove('active');
        this.btnSubmit.classList.add('disable');
        this.error.add(elem);
      }
    });

    this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
    this.elementsForm.forEach(elem => elem.addEventListener('change', () => {
      if (this.error.size) {
        this.btnSubmit.disabled = true;
        this.btnSubmit.classList.remove('active');
        this.btnSubmit.classList.add('disable');
      } else {
        this.btnSubmit.disabled = false;
        this.btnSubmit.classList.remove('disable');
        this.btnSubmit.classList.add('active');
      }
    }));
  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      },
      isChecked(elem) {
        if (elem.type === 'checkbox') {
          if (!elem.checked) {
            return false;
          } else {
            return true;
          }
        } else {
          console.warn('Убедитесь, что input.type === "checkbox"');
        }
      }
    };

    if (this.method) {
      const method = this.method[elem.id];
      if (method) {
        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]])
        );
      }
    } else {
      console.warn('Необходимо передать id полей ввода и их методы проверки!');
    }

    return true;
  }

  checkIt(e) {
    const target = e.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      if (target.type !== 'checkbox') {
        this.showError(target, 'Недопустимый формат');
      } else {
        this.showError(target, 'Согласитесь с условиями');
      }

      this.error.add(target);
    }
  }

  showError(elem, message) {
    elem.classList.remove('success');
    elem.classList.add('error');

    elem.parentElement.querySelector('.validator-error').textContent = message;
    elem.parentElement.querySelector('.validator-error').style.display = 'block';
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');
    elem.parentElement.querySelector('.validator-error').style.display = 'none';
  }

  setPattern() {
    this.pattern.phone = this.pattern.phone ? this.pattern.phone : this.pattern.phone = /^((8|\+7)-?)?(\(?\d{3}\)?-?)(\d{3}-?)(\d{2}-?)\d{2}$/;
    this.pattern.name ? this.pattern.name : this.pattern.name = /^[а-яё]{3,10}$/i;
  }
}

