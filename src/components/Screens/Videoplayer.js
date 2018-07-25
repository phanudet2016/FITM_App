import React, { Component } from 'react';
import {
  View,
  Platform
} from 'react-native';
import Header from '../Header/HeaderBackLesson'

import Ionicons from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-android-fullscreen-webview-video';

export default class Videoplayer extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-person" size={25} color={tintColor}/>
        ),
      }
    };

    render() {
      let youtubeURL = this.props.navigation.getParam('youtubeURL');
      return (
        <View  style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
          <WebView
            style={{marginTop: (Platform.OS == 'ios') ? 20 : 0}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: `https://${youtubeURL}` }} />
        </View>
      );
    }
  }


  
