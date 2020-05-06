import {USER} from './actions';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
