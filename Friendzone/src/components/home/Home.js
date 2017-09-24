import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Avatar from '../../content/images/Avatar.jpg';
import { width, height } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5 } = Color;
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
        const Item =
            (<View
                //container item
                style={{
                    flex: 1,
                    paddingTop: 10,
                    margin: 5,
                    backgroundColor: white,
                    borderRadius: 5,
                    borderColor: '#EEE',
                    borderWidth: 1,
                    shadowColor: black,
                    shadowOpacity: 0.2,
                    shadowOffset: {
                        height: 5,
                        width: 5
                    }
                }}
            >
                <View
                    //infors item
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingVertical: 4,
                        marginHorizontal: 10
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Avatar} style={{ width: 36, height: 36, borderRadius: 18 }} />
                    </View>
                    <View style={{ flex: 6, justifyContent: 'center', paddingHorizontal: 5 }} >
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={{
                                fontSize: 13,
                                fontWeight: 'bold'
                            }}
                        >
                            Dung nguyen
                    </Text>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 10 }}>20:08</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <MaterialIcons
                            name={'settings'}
                            size={12}
                            color={gray4}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    //status
                    style={{
                        marginHorizontal: 15,
                        paddingVertical: 5
                    }}
                    numberOfLines={6}
                    ellipsizeMode={'tail'}
                >
                    Buon qua moi nguoi oi
            </Text>
                <View
                    //image item
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={Image1}
                        style={{
                            height: height / 2,
                            width: width - 30
                        }}
                    />
                </View>

                <View
                    //statistics item
                    style={{
                        flex: 1,
                        paddingHorizontal: 15
                    }}
                >
                    <View style={{ paddingVertical: 10, flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <MaterialIcons
                                name={'favorite'}
                                size={12}
                                style={{ alignSelf: 'center' }}
                                color={'red'}
                            />
                            <Text
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                                style={{
                                    flex: 1,
                                    fontSize: 12,
                                    paddingLeft: 2
                                }}
                            >
                                100.000
                        </Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                                style={{
                                    fontSize: 12,
                                }}
                            >
                                96 comment - 1000 shared
                        </Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: gray2 }} />
                </View>

                <View
                    //Love bar item
                    style={{
                        flex: 1,
                        paddingVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons
                            name={'favorite-border'}
                            size={20}
                        />
                        <Text style={{ paddingLeft: 4 }}>Love</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('CommentRouter')}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <MaterialIcons
                            name={'chat-bubble-outline'}
                            size={20}
                        />
                        <Text style={{ paddingLeft: 4 }}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons
                            name={'share'}
                            size={20}
                        />
                        <Text style={{ paddingLeft: 4 }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View >);
        const Header = (
            <View
                style={{
                    flex: 1,
                    margin: 5,
                    paddingVertical: 10,
                    backgroundColor: white,
                    borderRadius: 5,
                    borderColor: '#EEE',
                    borderWidth: 1,
                    shadowColor: black,
                    shadowOpacity: 0.2,
                    shadowOffset: {
                        height: 5,
                        width: 5
                    },
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity
                    //infors item
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingVertical: 4,
                        marginHorizontal: 10
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Avatar} style={{ width: 36, height: 36, borderRadius: 18 }} />
                    </View>
                    <View style={{ flex: 9, justifyContent: 'center', paddingHorizontal: 10 }} >
                        <Text
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                            style={{
                                fontSize: 13
                            }}
                        >
                            Dung, Nhan vao day de chia se tam trang cua ban cung moi nguoi.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
        return (
            <View>
                <Text style={{ display: 'none' }}>{lang}</Text>
                {/* <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity> */}
                {/* <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue) => this.onLanguageChange(itemValue)}
                    prompt='Choose the language'
                >
                    <Picker.Item label="Viet Nam" value="vn" />
                    <Picker.Item label="English" value="en" />
                </Picker> */}
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' },
                    { key: 'd' }, { key: 'e' }, { key: 'f' }]}
                    renderItem={({ item }) => Item}
                    ListHeaderComponent={Header}
                />
            </View >
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Home);

