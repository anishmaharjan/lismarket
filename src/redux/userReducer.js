import {USER_INFO, USER_INFO_SUCCESS} from './types';

const initialState = {
  userInfo: null,
  fetchingUser: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        fetchingUser: true,
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        userInfo: action.payload,
      }

    default:
      return state;
  }
};
