
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux/store/Store';
import LoginRouter from './src/components/login/LoginRouter';
import Main from './src/components/main/Main';
import Communicate from './src/components/communicate/Communicate';
import Friend from './src/components/friend/Friend';

export default class Friendzone extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Friend />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Friendzone', () => Friendzone);
