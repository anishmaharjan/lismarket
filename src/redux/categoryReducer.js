import {
  LIST_CATEGORY,
  LIST_CATEGORY_SUCCESS,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
} from './types';

const initialState = {
  categories: null,
  fetchingCategory: false,
  addingCategory: false,
  successAddingCategory: false,
  fetchingProductsByCategory: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_CATEGORY:
      return {
        ...state,
        fetchingCategory: true,
      };
    case LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        categories: action.payload,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        addingCategory: true,
      };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addingCategory: false,
        successAddingCategory: true,
        categories: [...state.categories, action.payload],
      };

    case GET_PRODUCTS_BY_CATEGORY:
      return {...state};

    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {...state};

    default:
      return state;
  }
};
