import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from '../screens/user'


const Stack = createStackNavigator()

export default class UserStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="User" component={UserScreen}
                    options={{
                        title: "用户",
                        headerStyle: {
                            backgroundColor: 'tomato'
                        }
                    }} />
            </Stack.Navigator>

        )
    }
}

const styles = StyleSheet.create({})