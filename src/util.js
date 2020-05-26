export const monefy = amt => amt && `$ ${amt.toFixed(2)}`;

export const calculateTotal = (cartItems) => cartItems && cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
