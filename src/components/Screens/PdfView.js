import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Platform,
  Dimensions
} from 'react-native';
import Header from '../Header/HeaderBackLesson'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Pdf from 'react-native-pdf';

export default class PdfView extends Component {
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
      const pdfName = this.props.navigation.getParam('pdfName');
      const source = {uri:pdfName,cache:true};
      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
            </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
     marginTop: 25,
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
  }
});
  
