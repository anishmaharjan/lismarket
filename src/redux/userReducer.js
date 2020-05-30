import {
  SS,
  ER,
  GET_USER_API,
  LIST_USERS,
  CREATE_USER_API,
  GET_PURCHASE_HISTORY,
} from './types';

const initialState = {
  user: null,
  userList: null,
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
        user: action.payload,
      };

    case GET_PURCHASE_HISTORY:
      return {...state};

    case GET_PURCHASE_HISTORY + SS:
      return {
        ...state,
        user: action.payload,
      };

    case LIST_USERS + SS:
      return {
        ...state,
        userList: action.payload,
      };

    case CREATE_USER_API + SS:
      return {...state};

    case CREATE_USER_API + ER:
      return {...state};

    default:
      return state;
  }
};
