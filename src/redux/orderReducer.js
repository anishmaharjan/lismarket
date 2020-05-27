import {SS, ER, LIST_ORDERS} from './types';

const initialState = {
  orderList: null,
  fetchingOrders: false,
};

export default (state = initialState, action) => { 
  switch (action.type) {
    case LIST_ORDERS:
      return {
        ...state,
        fetchingOrders: true,
      };
    case LIST_ORDERS+SS:
      return {
        ...state,
        fetchingOrders: false,
        orderList: action.payload,
      };  

    default:
      return state;
  }
};
