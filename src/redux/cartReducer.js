import {SS, ER, ADD_TO_CART} from './types';

const initialState = {
  cartItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      let thing = action.payload.product;
      return {...state, cartItems: [...state.cartItems, thing]};

    default:
      return state;
  }
};
