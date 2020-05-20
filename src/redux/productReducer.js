import {
  SS, ER,
  LIST_PRODUCT,
  ADD_PRODUCT,
} from './types';

const initialState = {
  products: null,
  fetchingProducts: false,

  addingProduct: false,
  addedProduct: null,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      return {
        ...state,
        fetchingProducts: true,
      };

    case LIST_PRODUCT + SS:
      return {
        ...state,
        fetchingProducts: false,
        products: action.payload,
      };

    case ADD_PRODUCT:
      return {...state, addingProduct: true};

    case ADD_PRODUCT + SS:
      return {...state, addingProduct: false, addedProduct: action.payload};

    default:
      return state;
  }
};
