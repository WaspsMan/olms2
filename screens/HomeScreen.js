import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';
import News from './Home/News'
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : data
    }
//console.log(this.state.data)
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
        <View>
        <News data={this.state.data}/>
        </View>
      </ScrollView>
 
    );
  }
}

 var data=[
  {key: 'Devin', text:'1111111'},
  {key: 'Jackson', text:'22222222'},
  {key: 'James', text:'33333333'},
  {key: 'Joel', text:'44444444444444'},
  {key: 'John', text:'555555555555555'},
  {key: 'Jillian', text:'6666666666666666'},
  {key: 'Jimmy', text:'77777777777777'},
  {key: 'Julie', text:'888888888888888'},
  {key: 'Julie', text:'9999999999999999'},
  {key: 'Julie', text:'00000000000000'},
  {key: 'Julie', text:'aaaaaaaaaaaaa'},
  {key: 'Julie', text:'bbbbbbbbbbbbbbb'},
  {key: 'Julie', text:'ccccccccccccccccccc'},
  {key: 'Julie', text:'ddddddddddddddd'},
  {key: 'Julie', text:'eeeeeeeeeeeee'},
  {key: 'Julie', text:'fffffffffffff'},
  {key: 'Julie', text:'ggggggggggggg'},
  {key: 'Julie', text:'hhhhhhhhhhh'},
  {key: 'Julie', text:'iiiiiiiiiiii'},
  {key: 'Julie', text:'ggggggggggggggg'},
  {key: 'Julie', text:'kkkkkkkkkkkkkk'},
];
