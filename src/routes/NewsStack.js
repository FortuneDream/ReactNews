import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import NewsScreen from '../screens/news'


const Stack = createStackNavigator()
//函数式组件
export default function NewsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="News" component={NewsScreen}
                options={{
                    title: "新闻",
                    headerStyle: {
                        backgroundColor: 'tomato'
                    },
                }} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})