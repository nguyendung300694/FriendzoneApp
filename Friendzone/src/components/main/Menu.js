import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Menu extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    Menu
                </Text>
                <Button
                    onPress={() => navigate('DrawerClose')}
                    title="Close Drawer"
                />
            </View>
        );
    }
}
