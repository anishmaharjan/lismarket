import {SS, ER, LIST_ORDERS, CREATE_ORDER,UPDATE_ORDER} from './types';

const initialState = {
  orderList: null,
  fetchingOrders: false,
  processingPayment: false,
  successPayment: null,
  updatingOrder: false,
  updatingOrderSuccess: false,
  updatedOrder: null
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
        updatingOrderSuccess: false,
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

    case UPDATE_ORDER:
      return {...state, updatingOrder: true};

    case UPDATE_ORDER + SS:
      return {
        ...state,
        updatingOrder: false,
        updatingOrderSuccess: true,
        orderList: action.payload,
      };

    default:
      return state;
  }
};
