import {Auth} from 'aws-amplify';
import {
  SS, ER,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_CONFIRM,
  AUTH_USER_INFO,
  AUTH_CHECK_USER
} from '../types';

export const signIn = (form, cb) => dispatch => ({
  type: AUTH_SIGN_IN,
  payload: Auth.signIn(form.username, form.password).then(data => {
    cb(data.attributes);
    dispatch({
      type: AUTH_SIGN_IN + SS,
      payload: data,
    });
  }).catch(e => console.log('Error signing in', e)),
});

export const signUp = (form, cb) => dispatch => {
  const {username, password, email, phone_number, userGroup} = form;
  return ({
    type: AUTH_SIGN_UP,
    payload: Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
        'custom:userGroup': userGroup,
      },
    }).then(data => {
      cb(data);
      console.log('Signup data: ', data);
      dispatch({
        type: AUTH_SIGN_UP + SS,
        payload: data,
      });
    }).catch(e => console.log('Error signing up', e)),
  });
};

export const confirmSignUp = (form, cb) => dispatch => ({
  type: AUTH_SIGN_UP_CONFIRM,
  payload: Auth.confirmSignUp(form.username, form.code).then(data => {
    console.log('CONFIRM SIGNUP', data);
    cb();
    dispatch({
      type: AUTH_SIGN_UP_CONFIRM + SS,
      payload: data,
    });
  }).catch(e => console.log('Error confirm signup', e)),
});

export const signOut = () => dispatch => ({
  type: AUTH_SIGN_OUT,
  payload: Auth.signOut().then(data => {
    dispatch({
      type: AUTH_SIGN_OUT + SS,
      payload: data,
    });
  }).catch(e => console.log('Error signing out', e)),
});

export const getUserInfo = () => (dispatch) => ({
  type: AUTH_USER_INFO,
  payload: Auth.currentUserInfo().then(result => {
        dispatch({
          type: AUTH_USER_INFO + SS,
          payload: result,
        });
      },
  ).catch(e => console.log('*Error: User', e)),
});

export const checkCurrentUser = () => (dispatch) => ({
  type: AUTH_CHECK_USER,
  payload: Auth.currentAuthenticatedUser().then(result => {
        dispatch({
          type: AUTH_CHECK_USER + SS,
          payload: result,
        });
      },
  ).catch(e => dispatch({
    type: AUTH_CHECK_USER + ER,
    payload: e,
  })),
});
