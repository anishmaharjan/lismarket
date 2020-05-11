import {
  LIST_PRODUCT,
  LIST_PRODUCT_SUCCESS
} from './types';

const initialState = {
  products: null,
  fetchingProducts: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      return {
        ...state,
        fetchingProducts: true,
      };

    case LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        fetchingProducts: false,
        products: action.payload,
      };

    default:
      return state;
  }
};
