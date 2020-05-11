import {Auth, API, graphqlOperation} from 'aws-amplify';

import {
  USER_INFO,
  USER_INFO_SUCCESS,
} from '../types';

export const getUserInfo = () => (dispatch) => ({
  type: USER_INFO,
  payload: Auth.currentUserInfo().then(result => {
        dispatch({
          type: USER_INFO_SUCCESS,
          payload: result,
        });
      },
  ).catch(e => console.log('*Error: User', e)),
});

export const listUsers = () => (dispatch) => ({
  type: LIST_USERS,
  payload: Auth.list
});
