const valid = new Validator({
  selector: '#callback_form',
  pattern: {
    //name: /(^[a-z]{3,20})(-[a-z]{3,20})?$/i
    //phone: /^\+37517\d{7}$/
  },
  method: {
    'name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ]
  }
});

valid.init();
