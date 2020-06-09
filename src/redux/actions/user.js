import {Auth, API, graphqlOperation} from 'aws-amplify';

import {
  SS,
  ER,
  GET_USER_API,
  CREATE_USER_API,
  LIST_USERS,
  GET_PURCHASE_HISTORY,
  EDIT_USER,
} from '../types';
import {getUser, listUsers} from '../../graphql/queries';
import {createUser, updateUser} from '../../graphql/mutations';
import {getPurchaseHistory, getUserDetailed} from '../../graphql/customQueries';

export const getUserApi = userId => dispatch => ({
  type: GET_USER_API,
  payload: API.graphql(graphqlOperation(getUserDetailed, {id: userId}))
    .then(result => {
      if (result.data.getUser) {
        dispatch({
          type: GET_USER_API + SS,
          payload: result.data.getUser,
        });
      } else {
        console.log('User Not Found!');
        //create user here
      }
    })
    .catch(e => console.log('Error Get User API: ', e)),
});

export const getAllUsers = () => dispatch => ({
  type: LIST_USERS,
  payload: API.graphql(graphqlOperation(listUsers))
    .then(r => {
      dispatch({
        type: LIST_USERS + SS,
        payload: r.data.listUsers,
      });
    })
    .catch(e =>
      dispatch({
        type: LIST_USERS + ER,
        payload: e,
      }),
    ),
});

export const createUserApi = user => dispatch => ({
  type: CREATE_USER_API,
  payload: API.graphql(graphqlOperation(createUser, {input: user}))
    .then(result => {
      dispatch({
        type: CREATE_USER_API + SS,
        payload: result.data.createUser,
      });
    })
    .catch(e => {
      dispatch({
        type: CREATE_USER_API + ER,
        payload: e,
      });
      console.log('Error create user', e);
    }),
});

export const getPurchaseHistoryApi = userId => dispatch => {
  dispatch({
    type: GET_PURCHASE_HISTORY,
    payload: API.graphql(
      graphqlOperation(getPurchaseHistory, {
        id: userId,
        sort: 'DESC',
      }),
    )
      .then(result => {
        dispatch({
          type: GET_PURCHASE_HISTORY + SS,
          payload: result.data.getUser,
        });
      })
      .catch(error => console.log('Error at getorder', error)),
  });
};

export const editUser = user => dispatch => ({
  type: EDIT_USER,
  payload: API.graphql(graphqlOperation(updateUser, {input: user}))
    .then(result => {
      dispatch({
        type: EDIT_USER + SS,
        payload: result.data.updateUser,
      });
    })
    .catch(e => {
      dispatch({
        type: EDIT_USER + ER,
        payload: e,
      });
      console.log('Error Update user', e);
    }),
});
