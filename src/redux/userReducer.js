import {
  SS,
  ER,
  GET_USER_API,
  LIST_USERS,
  CREATE_USER_API,
  GET_PURCHASE_HISTORY,
  AUTH_SIGN_OUT,
  EDIT_USER,
} from './types';

const initialState = {
  user: null,
  userList: null,
  updateUserSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_OUT + SS:
      return {
        ...state,
        user: null,
      };
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
        updateUserSuccess: false,
        userList: action.payload,
      };

    case CREATE_USER_API + SS:
      return {...state};

    case CREATE_USER_API + ER:
      return {...state};

    case EDIT_USER + SS:
      return {...state, updateUserSuccess: true};

    case EDIT_USER + ER:
      return {...state};

    default:
      return state;
  }
};
