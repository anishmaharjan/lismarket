import {SS, ER, CREATE_ORDER} from './types';

const initialState = {
  processingPayment: false,
  successPayment: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
