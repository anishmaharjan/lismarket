/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {withAuthenticator} from 'aws-amplify-react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import routes from './src/routes';

const App: () => React$Node = () => {
  return (
      <View style={styles.container}>
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

export default withAuthenticator(App);
