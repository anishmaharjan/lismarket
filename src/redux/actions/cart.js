import {
  SS, ER,
  ADD_TO_CART,
} from '../types';

export const addToCart = (product) => (dispatch) => dispatch({
  type: ADD_TO_CART,
  payload: {product},
});

