
import React from 'react';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../home/Home';
import Notification from '../notification/Notification';
import Friend from '../friend/Friend';
import Communication from '../communication/Communication';
import CommunicationRouter from '../communication/CommunicationRouter';
import Camera from '../camera/Camera';
import CommentRouter from '../comment/CommentRouter';
import Menu from './Menu';
import Color from '../../content/color/Color';
import { horizontalScale, fontScale } from '../../utillities/Scale';

const { blue5, white, gray8, gray4 } = Color;

export const Tabs = TabNavigator({
    HomeTab: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="web"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    FriendTab: {
        screen: Friend,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="group"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    CameraTab: {
        screen: Camera,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="camera"
                    size={fontScale(26)}
                    style={{ color: tintColor }}
                />
            ),
        })
    },
    CommunicationTab: {
        screen: Communication,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="forum"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    NotificationTab: {
        screen: Notification,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="public"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    }
},
    {
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeTab',
        animationEnabled: false,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            indicatorStyle: {
                display: 'none'
            },
            activeTintColor: blue5,
            inactiveTintColor: gray8,
            style: {
                backgroundColor: white,
                borderTopColor: gray8,
                borderTopWidth: 0.3
            }
        }
    });

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },
    CommentRouter: {
        screen: CommentRouter
    },
    CommunicationRouter: {
        screen: CommunicationRouter
    }
}, {
        drawerPosition: 'left',
        drawerWidth: horizontalScale(250),
        contentComponent: props => <Menu {...props} />
    });

