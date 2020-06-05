import {
  SS,
  ER,
  ADD_TO_CART,
  UDPATE_CART_QUANTITY,
  CART_REMOVE_ITEM,
  CLEAR_CART,
  ADD_INVOICE_TO_CART,
} from '../types';

export const addToCart = product => dispatch =>
  dispatch({
    type: ADD_TO_CART,
    payload: {product},
  });

export const updateCartQuantity = ({index, quantity}) => dispatch =>
  dispatch({
    type: UDPATE_CART_QUANTITY,
    payload: {index, quantity},
  });

export const cartRemoveItem = index => dispatch =>
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {index},
  });

export const clearCart = () => dispatch =>
  dispatch({
    type: CLEAR_CART,
    payload: [],
  });

export const addInvoiceToCart = products => dispatch =>
  dispatch({
    type: ADD_INVOICE_TO_CART,
    payload: products,
  });
