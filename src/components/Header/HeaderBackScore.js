import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderBackScore extends Component {

  componentWillMount() { 
  }

  render() {
    let subjectName = this.props.navigation.getParam('nameSubject');
    
    return (
      <View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgb(63,80,187)'}}>
        <StatusBar backgroundColor='rgb(50,63,164)' barStyle="light-content"/>
        <TouchableOpacity 
          style={{marginLeft: 15}}
          onPress={() => {
            this.props.navigation.navigate('Score')
          }}>
          <Ionicons name="md-arrow-back" size={25} color="#fff"/>
        </TouchableOpacity>
        <Text style={{color: '#fff',paddingLeft: 15, fontSize: 16}}>{subjectName}</Text>
      </View>
    );
  }
}