/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import routes from './src/routes';
import {connect} from 'react-redux';
import {getUserInfo} from './src/redux/actions/user';

const App: () => React$Node = (props) => {
  const {userInfo, dispatch, getUserInfo} = props;

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
      <View style={styles.container}>
        {    console.log('*appjs', userInfo)}
        {routes}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default withAuthenticator(
    connect(state => ({
      userInfo: state.user.userInfo,
    }), dispatch => ({
      dispatch,
      getUserInfo,
    }))(App),
);
