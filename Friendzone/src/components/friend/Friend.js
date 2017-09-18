
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Languages } from '../../content/languages/Languages';

class Friend extends Component {
    render() {
        const { lang } = this.props;
        return (
            <View>
                 <Text style={{ display: 'none' }}>
                 {lang}
             </Text>
             <Text>
                 {Languages.hello}
             </Text>
             <Text>
                 Friend
             </Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Friend);
