import {SS, ER, ADD_TO_CART, UDPATE_CART_QUANTITY, CLEAR_CART} from './types';

const initialState = {
  cartItems: [],
  cartTotal: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };

    case UDPATE_CART_QUANTITY:
      const {index, quantity} = action.payload;
      let cartClone = [...state.cartItems];

      cartClone[index].quantity = quantity;
      return {...state, cartItems: cartClone};

    case CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};