import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
  render() {
    return (
      <View style={{ height: 40, paddingLeft: 8, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgb(63,80,187)'}}>
        <StatusBar backgroundColor='rgb(50,63,164)' barStyle="light-content"/>
        <TouchableOpacity 
          style={{marginLeft: 10}}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}>
          {/* <Image
            style={{ width: 20, height: 20}}
            source={require('../asset/menu.png')}
          /> */}
          <Ionicons name="md-reorder" size={30} color="#fff"/>
        </TouchableOpacity>
      </View>
    );
  }
}