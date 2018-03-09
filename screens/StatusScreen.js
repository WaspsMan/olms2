import React from 'react';
import {ScrollView, FlatList, Text, StyleSheet, Button} from 'react-native'
import { ExpoConfigView } from '@expo/samples';
import Status from './status/Status';
import axios from 'axios';

export default class componentName extends React.Component {
    
    constructor(props){
        // let response = await fetch('https://facebook.github.io/react-native/movies.json');
        //   let responseJson = await response.json();
        //    console.log(responseJson.movies);
        super(props);
        this.state = {
            key: data,
        }
        //console.log(this.state.key)
    }

    
  render() {
    return (
        <ScrollView>
            <Status name = {this.state.key}/>
        </ScrollView>
    )
  }
}

data=[
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
    {key: 'Julie'},
  ];

