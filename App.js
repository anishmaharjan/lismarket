/**
 * Author:
 * Anish Maharjan
 * gara.knoe@gmail.com
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Hub} from 'aws-amplify';

import {View} from 'react-native';
import {css} from '@emotion/native';
import Routes from './src/routes';
import {connect} from 'react-redux';
import {checkCurrentUser} from './src/redux/actions/auth';
import {Root} from 'native-base';
import {listCategory} from './src/redux/actions/category';

const App: () => React$Node = props => {
  const {isLoggedIn, dispatch, listCategory, checkCurrentUser} = props;

  console.log('is logged in ', isLoggedIn);
  useEffect(() => {
    // keep user logged in
    dispatch(checkCurrentUser());
    dispatch(listCategory());
  }, [checkCurrentUser, dispatch, listCategory]);

  /*useEffect(() => {
    console.log('running HUB');
    Hub.listen('auth', data => {
      const {payload} = data;
      console.log('A new auth event has happened: ', data);
      if (payload.event === 'signIn') {
        console.log('a user has signed in!');
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!');
      }
      if (payload.event === 'signUp') {
        console.log('a user has signed up!!!');
      }
    });
  }, []);*/

  return (
    <Root>
      <View
        style={css`
          padding-top: 60;
          flex: 1;
        `}>
        <Routes />
      </View>
    </Root>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
  }),
  dispatch => ({
    dispatch,
    checkCurrentUser,
    listCategory,
  }),
)(App);
