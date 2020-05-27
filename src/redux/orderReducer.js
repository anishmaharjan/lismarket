import {SS, ER, LIST_ORDERS, CREATE_ORDER} from './types';

const initialState = {
  orderList: null,
  fetchingOrders: false,

  processingPayment: false,
  successPayment: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ORDERS:
      return {
        ...state,
        fetchingOrders: true,
      };
    case LIST_ORDERS + SS:
      return {
        ...state,
        fetchingOrders: false,
        orderList: action.payload,
      };

    case CREATE_ORDER:
      return {...state, processingPayment: true};

    case CREATE_ORDER + SS:
      return {
        ...state,
        processingPayment: false,
        successPayment: action.payload,
      };

    case CREATE_ORDER + ER:
      return {
        ...state,
        processingPayment: false,
      };

    default:
      return state;
  }
};
