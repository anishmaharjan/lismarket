import {
  SS,
  ER,
  LIST_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from './types';

const initialState = {
  products: null,
  fetchingProducts: false,
  addingProduct: false,
  addingProductSuccess: false,
  deletingProduct: false,
  deletingProductSuccess: false,
  updatingProduct: false,
  updatingProductSuccess: false,
  addedProduct: null,
  deletedProduct: null,
  updatedProduct: null,
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
        addingProductSuccess: false,
        updatingProductSuccess: false,
        deletingProductSuccess: false,
        fetchingProducts: false,
        products: action.payload.listProducts,
      };

    case LIST_PRODUCT + ER:
      return {
        ...state,
        fetchingProducts: false,
      };

    case ADD_PRODUCT:
      return {...state, addingProduct: true};

    case ADD_PRODUCT + SS:
      return {
        ...state,
        addingProduct: false,
        addingProductSuccess: true,
        addedProduct: action.payload,
      };

    case ADD_PRODUCT + ER:
      return {...state, addingProductSuccess: false};

    case DELETE_PRODUCT:
      return {...state, deletingProduct: true};

    case DELETE_PRODUCT + SS:
      return {
        ...state,
        deletingProduct: false,
        deletingProductSuccess: true,
        deletedProduct: action.payload,
      };
    case DELETE_PRODUCT + ER:
      return {...state, deletingProductSuccess: false};
    case UPDATE_PRODUCT:
      return {...state, updatingProduct: true};

    case UPDATE_PRODUCT + SS:
      return {
        ...state,
        updatingProduct: false,
        updatingProductSuccess: true,
        updatedProduct: action.payload,
      };
    default:
      return state;
  }
};
