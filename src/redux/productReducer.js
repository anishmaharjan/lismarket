import {LIST_CATEGORY, ADD_CATEGORY} from './actions';

const initialState = {
  categories: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_CATEGORY:
        console.log("*reducer", action.payload);
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
