import {
  SS,
  ER,
  ADD_TO_CART,
  UDPATE_CART_QUANTITY,
  CART_REMOVE_ITEM,
  CLEAR_CART,
  ADD_INVOICE_TO_CART,
} from './types';

const initialState = {
  cartItems: [],
  couponApplied: 0,
  couponsList: [{coupon: 'NEWC', value: 5}, {coupon: 'NEWC2', value: 15}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };

    case ADD_INVOICE_TO_CART:
      return {
        ...state,
        cartItems: action.payload.map(item => {
          return {
            ...item.product,
            quantity: item.orderQuantity,
            price: item.amount,
          };
        }),
      };

    case UDPATE_CART_QUANTITY:
      const {index, quantity} = action.payload;
      let cartClone = [...state.cartItems];

      cartClone[index].quantity = quantity;
      return {...state, cartItems: cartClone};

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (sub, index) => index !== action.payload.index,
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'APPLY_COUPON':
      const found = state.couponsList.find(
        cc => cc.coupon === action.payload.coupon,
      );
      console.log('Coupon status', found);
      return {
        ...state,
        couponApplied: found ? found.value : 0,
      };

    default:
      return state;
  }
};
