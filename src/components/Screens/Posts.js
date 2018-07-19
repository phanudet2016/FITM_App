import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import HeaderBackLesson from '../Header/HeaderBackLesson'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        drawerLabel: 'Posts',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-person" size={25} color={tintColor}/>
        ),
      }
    };

    componentWillMount() { 
    }
  
    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
        <HeaderBackLesson {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'rgb(110,110,110)'}}>
            This is Profile Screen
          </Text>
        </View>
      </View>
      );
    }
  }
