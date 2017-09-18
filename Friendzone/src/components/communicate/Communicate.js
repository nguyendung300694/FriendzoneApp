import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';

const { gray2, gray8, gray4, white, gray6, blue5 } = Color;

class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            comment: '',
            line: 0,
            height: 0
        });
    }

    render() {
        const { lang } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ display: 'none' }}>
                    {lang}
                </Text>
                <View style={{ backgroundColor: white, flex: 1 }}>
                    <Text>section 1</Text>
                </View>
                <View
                    style={{
                        backgroundColor: gray2,
                        flexDirection: 'row',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: 'absolute',
                        paddingVertical: 10,
                        paddingHorizontal: 3,
                        borderTopColor: gray6,
                        borderTopWidth: 1.1
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 12,
                            }}
                        >
                            <MaterialIcons
                                name={'attach-file'}
                                size={24}
                                color={blue5}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 5.5,
                            alignContent: 'stretch'
                        }}
                    >
                        <TextInput
                            style={{
                                alignSelf: 'stretch',
                                backgroundColor: 'white',
                                flex: 1,
                                fontSize: 14,
                                borderRadius: 20
                            }}
                            multiline
                            underlineColorAndroid='transparent'
                            onContentSizeChange={(event) => {
                                if (this.state.line <= 4 &&
                                    event.nativeEvent.contentSize.height > this.state.height) {
                                    this.setState(
                                        {
                                            line: this.state.line + 1,
                                            height: event.nativeEvent.contentSize.height
                                        });
                                } else
                                    if (event.nativeEvent.contentSize.height < this.state.height) {
                                        this.setState(
                                            {
                                                line: this.state.line - 1,
                                                height: event.nativeEvent.contentSize.height
                                            });
                                    }
                            }}
                            numberOfLines={this.state.line}
                            value={this.state.comment}
                        />
                        <TextInput
                            style={{
                                alignSelf: 'stretch',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 0,
                                left: 0,
                                bottom: 0,
                                top: 0,
                                fontSize: 14,
                                borderColor: gray4,
                                borderRadius: 20,
                                borderWidth: 1.3
                            }}
                            onChangeText={(comment) => {
                                this.setState({ comment });
                            }}
                            underlineColorAndroid='transparent'
                            multiline
                            placeholder='New Message'
                            value={this.state.comment}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 12
                            }}
                        >
                            <MaterialIcons
                                name={'send'}
                                size={24}
                                color={blue5}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Communication);
