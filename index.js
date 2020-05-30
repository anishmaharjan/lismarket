/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import {typography} from './src/typography.util';

const store = configureStore();

const ReduxInfused = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Amplify.configure(awsConfig);

typography();

AppRegistry.registerComponent(appName, () => ReduxInfused);
