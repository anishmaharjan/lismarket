import {SS, ER, LIST_ORDERS, CREATE_ORDER, UPDATE_ORDER} from './types';

const initialState = {
  orderList: null,
  fetchingOrders: false,
  processingPayment: false,
  successPayment: null,
  updatingOrder: false,
  updatingOrderSuccess: false,
  updatedOrder: null,
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
        orderList: action.payload.items.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }),
      };
    case LIST_ORDERS + ER:
      return {
        ...state,
        fetchingOrders: false,
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
        orderList: state.orderList.map(item => {
          if (item.id === action.payload.id) {
            item.sentPackaging = action.payload.sentPackaging;
            item.collectionReady = action.payload.collectionReady;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
