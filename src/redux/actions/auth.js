import {Auth} from 'aws-amplify';
import {
  SS, ER,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_CONFIRM,
} from '../types';

export const signIn = (form) => dispatch => ({
  type: AUTH_SIGN_IN,
  payload: Auth.signIn(form.username, form.password).then(data => {
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
      cb();
      console.log('Signup data: ', data);
      dispatch({
        type: AUTH_SIGN_UP + SS,
        payload: data,
      });
    }).catch(e => console.log('Error signing up', e)),
  });
};

export const confirmSignUp = (form) => dispatch => ({
  type: AUTH_SIGN_UP_CONFIRM,
  payload: Auth.confirmSignUp(form.username, form.code).then(data => {
    console.log("CONFIRM SIGNUP", data);
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
