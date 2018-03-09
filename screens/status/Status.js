import React, { Component } from 'react'
import {FlatList, StyleSheet, Text, Button, View} from 'react-native';
//import { Button } from 'react-native-elements';

export default class Status extends React.Component {
    constructor(props){
        super(props);
        // แบบนี้ก็ได้
        // this.state = {
        //     key: props
        // };
        // console.log(this.state.key.name)
    }
    
  render() {
    return (
        <FlatList data = {this.props.name}
            renderItem={({item}) => (
                <View>
                    <Text style={styles.item}>{item.key} </Text> 
                </View>
            )
        }
        />
    )
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },

  })