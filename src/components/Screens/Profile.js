import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import Header from '../Header/Header'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        drawerLabel: 'Profile',
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
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'rgb(110,110,110)'}}>
            This is Profile Screen
          </Text>
          <TouchableHighlight 
            style={{ margin: 20, width: 200, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={{color: '#FFF', fontSize: 18,}}>
              Go to Home
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      );
    }
  }
