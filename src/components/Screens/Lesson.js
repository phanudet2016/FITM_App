import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  // WebView,
  Platform,
  Dimensions
} from 'react-native';
import HeaderBack from '../Header/HeaderBack'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-android-fullscreen-webview-video';

export default class Profile extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        drawerLabel: 'Lesson',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-person" size={25} color={tintColor}/>
        ),
      }
    };

    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
      this.state = {
        dataSource: dataSource
      };
    }

    componentWillMount() { 
      this.getLesson()
    }
    
    getLesson() {
      const lessonObj = this.props.navigation.getParam('lesson', 'some default value');
      if (lessonObj) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(lessonObj)
        });
      }
    }
  
    render() {
      const dimensions = Dimensions.get('window');
      const imageWidth = dimensions.width;

      const { 
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle 
      } = styles;
      return (
      //   <View style={{ flex: 1, flexDirection: 'column'}}>
      //   <HeaderBack {...this.props}/>
      //   <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
      //   <ListView
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) => 
      //         <View>
      //           <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.chapter}</Text>
      //           <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.posts}</Text>
      //         </View>
      //       }
      //   />
      //   </View>
      // </View>
      // <View style={{ height: 300 }}>
      // <WebView
      //               style={styles.WebViewContainer}
      //               javaScriptEnabled={true}
      //               domStorageEnabled={true}
      //               source={{uri: 'https://www.youtube.com/embed/RhAFq7mvtDg' }}
      //       />
            
      // </View>
      // <ListView
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) => 
      //         <View>
      //           <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.chapter}</Text>
      //           <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.posts}</Text>
      //         </View>
      //       }
      //   />
      <Container>
        <HeaderBack {...this.props}/>
        <Content>
            {/* <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>Open PDF</Text>
                </Button>
              </Left>
            </CardItem> */}
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => 
                // <View>
                //   <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.chapter}</Text>
                //   <Text onPress = {() => { this.props.navigation.navigate('Posts', {lesson: rowData.lesson})}}>{rowData.posts}</Text>
                // </View>
                <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: rowData.photoURL}} />
                    <Body>
                  <Text>{rowData.chapter}</Text>
                  <Text note>{rowData.datePosts}</Text>
                </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
              <Body>
                <TouchableOpacity style={{height: 200}} onPress = {() => { this.props.navigation.navigate('Videoplayer', {youtubeURL: rowData.youtubeUrlEmbed})}}>
                  <Image source={{uri: `https://img.youtube.com/vi/${rowData.videoId}/0.jpg`}} style={{height: 200, width: imageWidth, flex: 1}}/>
                </TouchableOpacity>
                {/* <Text style={{paddingLeft:15}}>
                  {rowData.posts}
                </Text> */}
                <Text style={{paddingLeft:15,paddingTop:5}}>
                  {rowData.posts}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Ionicons name="md-document" size={30} color="rgb(0,122,255)"/>
                  <Text onPress = {() => { this.props.navigation.navigate('PdfView', {pdfName: rowData.sheetURL})}} >{rowData.fileName}</Text>
                </Button>
              </Left>
            </CardItem>
                </Card>
              }
            />
        </Content>
      </Container>
      );
    }
  }

  const styles = {
    containerStyleCard: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
    },

    containerStyleCardSection: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
    },

    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    },
    WebViewContainer: {
 
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
   
    }
  };
