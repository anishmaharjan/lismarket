import axios from 'axios';

export const monefy = amt => amt && `$ ${amt.toFixed(2)}`;

export const calculateTotal = cartItems =>
  cartItems &&
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export const getRandomInt = (min, max) => {
  //The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const sendEmail = data => {
  axios
    .post(
      'https://0cli622ocj.execute-api.ap-southeast-2.amazonaws.com/dev/sendmail',
      // 'http://localhost:3000/dev/sendmail',
      JSON.stringify(data),
    )
    .then(response => {
      console.log('Success sending email', response);
    })
    .catch(error => {
      console.log('Sendgrid errro",', error);
    });
};
