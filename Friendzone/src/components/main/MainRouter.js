
import React from 'react';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../home/Home';
import Notification from '../notification/Notification';
import Friend from '../friend/Friend';
import Communication from '../communication/Communication';
import Camera from '../camera/Camera';
import Menu from './Menu';
import Color from '../../content/color/Color';
import { horizontalScale, fontScale } from '../../utillities/Scale';

const { blue5, white, gray8 } = Color;

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
                    name="person-outline"
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
                    name="chat-bubble-outline"
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
                    name="notifications-none"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    }
},
    {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        initialRouteName: 'CommunicationTab',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            indicatorStyle: {
                display: 'none'
            },
            activeTintColor: blue5,
            inactiveTintColor: gray8,
            style: {
                backgroundColor: white
            }
        }
    });

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    }
}, {
        drawerPosition: 'left',
        drawerWidth: horizontalScale(250),
        contentComponent: props => <Menu {...props} />
    });

