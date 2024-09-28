import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class index extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Abount')}>
                    <Text>User</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default index