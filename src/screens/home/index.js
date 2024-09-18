import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { Text, View, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, Dimensions } from 'react-native'
export class index extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={[styles.container]}>
                        <TouchableOpacity onPress={() => {
                            alert('扫一扫')
                        }}>
                            <View style={[styles.itemBase]}>
                                <Text style={[styles.fontBase]}>扫一扫</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.itemBase]}>
                                <Text style={[styles.fontBase]}>付款码</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.itemBase]}>
                                <Text style={[styles.fontBase]}>出行</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={[styles.itemBase]}>
                                <Text style={[styles.fontBase]}>卡包</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Swiper
                        style={[styles.wrapper]}
                        showsButtons={true}
                        autoPlay={true}>
                        <Image style={[styles.slideImage]}
                            source={require('../../images/1.jpeg')} />
                        <Image style={[styles.slideImage]}
                            source={require('../../images/2.jpeg')} />
                        <Image style={[styles.slideImage]}
                            source={require('../../images/3.jpeg')} />
                        <Image style={[styles.slideImage]}
                            source={require('../../images/4.jpeg')} />
                    </Swiper>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    itemBase: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00b38a',
        height: 90,
        width: Dimensions.get('window').width / 4
    },
    fontBase: {
        color: '#fff',
        fontSize: 14
    },
    wrapper: {
        height: 200
    },
    slideImage: {
        height: 200,
        width: Dimensions.get('window').width,
        resizeMode :'center'
    }
})

export default index