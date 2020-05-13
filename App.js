/**
 * Author:
 * Anish Maharjan
 * gara.knoe@gmail.com
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Auth, Hub} from 'aws-amplify';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {css} from '@emotion/native';
import Routes from './src/routes';
import {connect} from 'react-redux';
import {getUserApi, getUserInfo} from './src/redux/actions/user';

const App: () => React$Node = (props) => {
  const {isLoggedIn, userInfo, dispatch, getUserInfo, getUserApi} = props;

  const checkUser = () => {
    Auth.currentAuthenticatedUser().then(user => console.log('CHecking user', {user})).catch(err => console.log(err));
  };

  useEffect(() => {
    // dispatch(getUserInfo((userId) => {
    //   dispatch(getUserApi(userId));
    // }));
  }, []);

  useEffect(() => {
    console.log('running HUB');
    Hub.listen('auth', (data) => {
      const {payload} = data;
      console.log('A new auth event has happened: ', data);
      if (payload.event === 'signIn') {
        console.log('a user has signed in!');
        // setLoggedIn(true);
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!');
        // setLoggedIn(false);
      }
      if (payload.event === 'signUp') {
        console.log('a user has signed up!!!');
      }

    });
  }, []);

  return (
        <View style={css`
          paddingTop: 60;
          flex: 1;
          `}>
          {console.log('*appjs', userInfo)}
          <Routes isLoggedIn={isLoggedIn}/>
        </View>
  );
};

export default (
    connect(state => ({
      isLoggedIn: state.auth.isLoggedIn,
      userInfo: state.user.userInfo,
    }), dispatch => ({
      dispatch,
      getUserInfo,
      getUserApi,
    }))(App)
);
