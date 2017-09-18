import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';

import { connect } from 'react-redux';
import { Languages, setLanguage } from '../../content/languages/Languages';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            language: 'vn'
        });
    }

    onLanguageChange(itemValue) {
        setLanguage(itemValue);
        this.setState({ language: itemValue });
        if (itemValue === 'en') {
            this.props.dispatch({ type: 'SET_ENGLISH_LANGUAGE' });
        } else {
            this.props.dispatch({ type: 'SET_VIETNAM_LANGUAGE' });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { lang } = this.props;
        return (
            <View>
                <Text style={{ display: 'none' }}>{lang}</Text>
                <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setLanguage('en');
                        this.props.dispatch({ type: 'SET_ENGLISH_LANGUAGE' });
                    }}
                >
                    <Text>Set Language</Text>
                </TouchableOpacity>
                <Text> {Languages.hello}</Text>
                <Text>
                    Home
                </Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue) => this.onLanguageChange(itemValue)}
                    prompt='Choose the language'
                >
                    <Picker.Item label="Viet Nam" value="vn" />
                    <Picker.Item label="English" value="en" />
                </Picker>
            </View >
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Home);

