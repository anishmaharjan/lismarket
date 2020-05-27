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
