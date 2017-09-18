
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux/store/Store';
import LoginRouter from './src/components/login/LoginRouter';
import Main from './src/components/main/Main';
import Communicate from './src/components/communicate/Communicate';

export default class Friendzone extends Component {
  render() {
    return (
      <Provider store={Store}>
        <LoginRouter />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Friendzone', () => Friendzone);
