import {
  SS, ER,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT, AUTH_SIGN_UP, AUTH_SIGN_UP_CONFIRM, AUTH_USER_INFO, AUTH_CHECK_USER,
} from '../types';

const initialState = {
  isLoggedIn: false,
  fetchingSignIn: false,
  user: null,
  fetchingSignUp: false,
  fetchingConfirmSignUp: false,

  fetchingUser: false,
  authUser: null,
};

export default (state = initialState, action) => {
  console.log('Reducer: ', action.type);
  switch (action.type) {
    case AUTH_SIGN_IN:
      return {
        ...state,
        fetchingSignIn: true,
      };
    case AUTH_SIGN_IN + SS:
      return {
        ...state,
        fetchingSignIn: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case AUTH_SIGN_IN + ER:
      return {
        ...state,
        fetchingSignIn: false,
      };
    case AUTH_SIGN_UP:
      return {...state, fetchingSignUp: true};

    case AUTH_SIGN_UP + SS:
      return {...state, user: action.payload.user, fetchingSignUp: false};

    case AUTH_SIGN_UP_CONFIRM :
      return {...state, fetchingConfirmSignUp: true};

    case AUTH_SIGN_UP_CONFIRM + SS:
      return {...state, fetchingConfirmSignUp: false};

    case AUTH_SIGN_OUT:
      return {
        ...state,
      };
    case AUTH_SIGN_OUT + SS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case AUTH_USER_INFO:
      return {
        ...state,
        fetchingUser: true,
      };
    case AUTH_USER_INFO + SS:
      return {
        ...state,
        fetchingUser: false,
        authUser: action.payload,
      };

    case AUTH_CHECK_USER + SS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AUTH_CHECK_USER + ER:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
