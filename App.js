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
import {checkCurrentUser} from './src/redux/actions/auth';

const App: () => React$Node = (props) => {
  const {isLoggedIn, dispatch, checkCurrentUser} = props;

  useEffect(() => {
    dispatch(checkCurrentUser());
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
        <Routes isLoggedIn={isLoggedIn}/>
      </View>
  );
};

export default (
    connect(state => ({
      isLoggedIn: state.auth.isLoggedIn,
    }), dispatch => ({
      dispatch,
      checkCurrentUser
    }))(App)
);
