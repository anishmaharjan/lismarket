import {LIST_CATEGORY, LIST_CATEGORY_SUCCESS, ADD_CATEGORY, ADD_CATEGORY_SUCCESS} from './actions';

const initialState = {
  categories: null,
  fetchingCategory: false,
  addingCategory: false,
  successAddingCategory: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_CATEGORY:
      console.log('*reducer', action.payload);
      return {
        ...state,
        fetchingCategory: true,
      };
    case LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        categories: action.payload,
      }

    case ADD_CATEGORY:
      return {
        ...state,
        addingCategory: true
      }

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addingCategory: false,
        successAddingCategory: true,
        categories: [...state.categories, action.payload]
      }


    default:
      return state;
  }
};
