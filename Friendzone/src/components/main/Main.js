import React, { Component } from 'react';

import { SideMenu } from './MainRouter';

export default class Main extends Component {
    render() {
        return (
            <SideMenu setStateLanguage />
        );
    }
}

