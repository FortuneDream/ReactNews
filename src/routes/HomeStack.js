import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text,ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home'


const Stack = createStackNavigator()

export default class HomeStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        title: "首页",
                        headerStyle: {
                            backgroundColor: '#00b38a',
                            elevation : 0, //删除Android下的阴影
                        },
                        headerRight: () => (
                            <TouchableOpacity onPress={() => alert('拍照')}>
                                <Text style={{fontSize:18,color:'white',marginRight : 10}}>拍照</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </Stack.Navigator>

        )
    }
}

const styles = StyleSheet.create({})