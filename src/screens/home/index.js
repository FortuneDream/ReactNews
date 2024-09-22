import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { Text, View, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, Dimensions, Alert, FlatList } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import AsyncStorage from '@react-native-async-storage/async-storage'
export class index extends Component {

    constructor() {
        super()
        this.state = {
            city: "北京",
            indeces: [
                {
                    type: '1',
                    name: "name1"
                }, {
                    type: '2',
                    name: "name2"
                }, {
                    type: '3',
                    name: "name3"
                }, {
                    type: '4',
                    name: "name3"
                }]
        }
    }

    componentDidMount() {
        this.setState({
            city: "上海"
        })
    }

    indecesItem = ({ index, item }) => {
        return (
            <TouchableOpacity
                key={'index' + item.type}
                onPress={() => {
                    alert(item.type)
                }}>
                <View style={[styles.indexItem]}>
                    <Text style={[styles.indexName]}>
                        {item.name}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }

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
                    <View style={[styles.city]}>
                        <Text style={[styles.cityText]}>
                            {this.state.city}
                        </Text>
                    </View>
                    <View style={[styles.indexContainer]}>
                        <FlatList
                            data={this.state.indeces}
                            renderItem={this.indecesItem}
                            keyExtractor={item => item.type}
                            horizontal={true}
                        />
                    </View>
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
        resizeMode: 'center'
    },
    city: {
        flex: 1,
        justifyContent: 'center'
    },
    cityText: {
        fontSize: 24,
        marginHorizontal: 10
    },
    indexItem:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#deb',
        width:Dimensions.get('window').width/3 -10,
        height:80,
        marginTop:10,
        marginRight:10
    },
    indexName:{
        color:'#222',
        fontSize:14
    }
})

export default index