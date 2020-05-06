import {ITEMS, ADD_ITEM} from './actions';

const initialState = {
  items: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload ]
      }

    default:
      return state;
  }
};
