import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import Header from '../Header/Header'
import { GoogleSignin } from 'react-native-google-signin';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Signout extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        drawerLabel: 'Signout',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-exit" size={25} color={tintColor}/>
        ),
      }
    };

    constructor (props) {
      super(props);
      this.state = { curren: false};
      setTimeout(() => {
        this.setState({ curren: true })
      }, 2000)
    }

    componentWillMount() {
      this.Signout()
    }

    Signout () {
      let ex = this.state.curren === true ? true : false
      if (ex) {
        GoogleSignin.revokeAccess()
        GoogleSignin.signOut()
        this.props.navigation.navigate('Auth')
      } else {
        return(<ActivityIndicator size={80} color="#0000ff" />)
      }
    }

    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
          {this.Signout()}
        </View>
      </View>
      );
    }
  }
  
