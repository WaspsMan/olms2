import React, { Component } from 'react'
import {Card} from 'react-native-elements'
import {FlatList, StyleSheet, Text, Button, View} from 'react-native';
export default class News extends React.Component {
  constructor(props){
    super(props);
    console.log(props.data)
  }
  render() {
    return (
        <FlatList data = {this.props.data}
            renderItem={({item}) => (
                <Card title={item.key} >
                  <Text>
                    {item.text}
                  </Text>
                </Card>
            )
        }
        />
      //<Card title='introCom'></Card>
    )
  }
}
