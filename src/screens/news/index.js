import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'

export class index extends Component {
    constructor() {
        super()
        this.state = {
            type: 'top',
            list: []
        }
    }

    componentDidMount() {

    }

    newsItem = ({index,item})=>{
        //这里可以根据item的类型，返回不同的Item样式
    }


    render() {
        return (
            <View>
                <Text>News</Text>
                <>
                    {
                        this.state.list.length ?
                            <FlatList 
                            data={this.state.list}
                            renderItem={this.newsItem}
                            keyExtractor={item=> item.uniquekey}/> 
                            : 
                            <View>
                                <Text>
                                    无数据
                                </Text>
                            </View>
                    }
                </>
            </View>
        )
    }
}

export default index