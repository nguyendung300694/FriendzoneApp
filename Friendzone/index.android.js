
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux/store/Store';
import LoginRouter from './src/components/login/LoginRouter';
import Main from './src/components/main/Main';
import Home from './src/components/home/Home';
import Reply from './src/components/reply/Reply';

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
