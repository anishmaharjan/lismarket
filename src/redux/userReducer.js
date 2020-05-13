import {SS, ER, GET_USER_API} from './types';

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_USER_API:
      return {
        ...state,
      };
    case GET_USER_API + SS:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
