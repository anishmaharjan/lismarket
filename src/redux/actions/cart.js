import {
  SS, ER,
  ADD_TO_CART,
  UDPATE_CART_QUANTITY
} from '../types';

export const addToCart = (product) => (dispatch) => dispatch({
  type: ADD_TO_CART,
  payload: {product},
});

export const updateCartQuantity = ({index, quantity}) => (dispatch) => dispatch({
  type: UDPATE_CART_QUANTITY,
  payload: {index, quantity}
})
