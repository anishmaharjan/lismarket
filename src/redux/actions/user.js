import {Auth, API, graphqlOperation} from 'aws-amplify';

import {
  SS, ER,
  GET_USER_API,
  CREATE_USER_API,
} from '../types';
import {getUser} from '../../graphql/queries';
import {createUser} from '../../graphql/mutations';

export const getUserApi = (userId) => (dispatch) => ({
  type: GET_USER_API,
  payload: API.graphql(graphqlOperation(getUser, {id: userId})).then(result => {
    console.log('*getUserAPi', result);
    if (result.data.getUser) {
      dispatch({
        type: GET_USER_API + SS,
        payload: result.data.getUser,
      });
    } else {
      console.log("User Not Found!");
      //create user here
    }
  }).catch(e => console.log('Error Get User API: ', e)),
});

export const listUsers = () => (dispatch) => ({
  type: LIST_USERS,
  payload: Auth.list,
});

export const createUserApi = (user) => (dispatch) => ({
  type: CREATE_USER_API,
  payload: API.graphql(graphqlOperation(createUser, {input: user})).then(r => {
    dispatch({
      type: CREATE_USER_API + SS,
      payload: result.data.createUser,
    });
  }).catch(e => {
    dispatch({
      type: CREATE_USER_API + ER,
      payload: e,
    });
    console.log('Error create user', e);
  }),
});
