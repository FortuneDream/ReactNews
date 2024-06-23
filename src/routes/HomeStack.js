import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
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
                            backgroundColor: 'tomato'
                        },
                        headerRight: () => (
                            <TouchableOpacity onPress={() => Alert('Hello')}>
                                <Text>Hello</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </Stack.Navigator>

        )
    }
}

const styles = StyleSheet.create({})