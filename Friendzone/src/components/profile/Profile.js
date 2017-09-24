import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Avatar from '../../content/images/Avatar.jpg';
import { width, height } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5 } = Color;

class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comment: ''
    //     };
    // }
    render() {
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
                        paddingVertical: 5,
                        fontSize: 13
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
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 250 }}>
                    <Image
                        source={Image2}
                        style={{
                            width,
                            height: 150,
                            flex: 1,
                            top: 0,
                            position: 'absolute'
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            width,
                            position: 'absolute',
                            top: 100,
                            flex: 1,
                            height: 100
                        }}
                    >
                        <View style={{ width: (width / 10) * 3.5, alignItems: 'center' }}>
                            <Image
                                source={Avatar}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderColor: white,
                                    borderRadius: 50,
                                    borderWidth: 2
                                }}
                            />
                            <Text
                                numberOfLines={2}
                                ellipsizeMode={'tail'}
                                style={{
                                    overflow: 'hidden',
                                    paddingHorizontal: 4,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >Nguyen Trung Dung</Text>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                                style={{
                                    fontSize: 10,
                                    overflow: 'hidden',
                                    paddingHorizontal: 4,
                                    textAlign: 'center'
                                }}
                            >Bien Hoa, Dong nai</Text>
                        </View>
                        <View
                            style={{
                                width: (width / 10) * 6.5,
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    backgroundColor: white,
                                    marginRight: 10,
                                    marginTop: 40
                                }}
                            >
                                <View
                                    style={{
                                        borderColor: gray2,
                                        borderWidth: 2,
                                        paddingHorizontal: 15,
                                        borderRadius: 3
                                    }}
                                >
                                    <Text style={{ fontSize: 14 }}>Edit profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text numberOfLines={2} ellipsizeMode={'tail'}></Text>
                </View>
                <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor: gray4, backgroundColor: gray2 }}>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', padding: 5 }}>Photo</Text>
                        </TouchableOpacity>
                        <View style={{ width: 2, backgroundColor: gray4 }} />
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', padding: 5 }}>Video</Text>
                        </TouchableOpacity>
                        <View style={{ width: 2, backgroundColor: gray4 }} />
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', padding: 5 }}>Album</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: gray2, height: 1.5 }} />
            </View>
        );
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ display: 'none' }}>{lang}</Text>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' },
                    { key: 'd' }, { key: 'e' }, { key: 'f' }]}
                    renderItem={({ item }) => Item}
                    ListHeaderComponent={Header}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Profile);

