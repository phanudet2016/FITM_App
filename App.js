import React, { Component } from 'react';

import { Container, Content, Icon, Header, Body, Accordion, TouchableOpacity } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, StyleSheet, ImageBackground, Text, Image, View } from 'react-native';
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator, DrawerItems } from 'react-navigation'

// Components
import Loign from './src/components/Login/LoginComponent'
import HomeScreen from './src/components/Screens/Home'
import ProfileScreen from './src/components/Screens/Profile'
import LessonScreen from './src/components/Screens/Lesson'
import PostsScreen from './src/components/Screens/Posts'
import PdfViewScreen from './src/components/Screens/PdfView'
import VideoplayerScreen from './src/components/Screens/Videoplayer'
import SignoutScreen from './src/components/Screens/Signout'

// import variablr
import { displayName, photo, email } from './src/components/Login/LoginComponent'

// Screen Name
import { Home } from './screenName'
var { width } = Dimensions.get('window');

// Hide Warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
YellowBox.ignoreWarnings(['Setting a timer'])

// Drawer Content
const CustomDrawerContentComponent = (props) => (
  <Container style={styles.container}>
    <ImageBackground style={styles.drawerHeader} source={require('./src/asset/1.jpg')}>
      <View style={{flex: 1}}>
        <View style={{flex: 1,justifyContent: 'space-around',paddingLeft:15}}>
          <View>
            <Image style={styles.drawerImage} source={{uri: photo}} />
          </View>
          
          <View>
            <Text style={{color:'#fff',fontSize:17}}>{displayName}</Text>
            <Text style={{color:'#a9c2a5'}}>{email}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);
// styles CustomDrawerContentComponent
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    height: 150
  },
  drawerImage: {
    height: 70,
    width: 70,
    borderRadius: 75
  }
})

// Creat StackNavigator
const AppStack = createStackNavigator(
  {
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions:(props) => ({
    //     headerLeft: 
    //       <TouchableOpacity onPress={() => {props.navigation.openDrawer()}}>
    //         <Text>Open Drawer</Text>
    //       </TouchableOpacity>,
    //     headerStyle: {
    //       color: 'red',
    //     }
    //   })
    // },
    Lesson: {
      screen: LessonScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    PdfView: {
      screen: PdfViewScreen,
    },
    Videoplayer: {
      screen: VideoplayerScreen,
    }
  },
  {
    headerMode: 'none'
  }
);

// comfig DrawerNavigator
let routeConfig = {
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen
  },
  Signout: {
    screen: SignoutScreen
  }
};
let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: ((width / 2) / 2) * 3,
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOption: {
    activeTiniColor: 'red',
  },
  contentOptions: {
    activeTintColor: 'rgb(50,63,164)',
  },
  drawerBackgroundColor: '#FFF',
};

const AppDrawer = createDrawerNavigator(routeConfig, drawerNavigatorConfig);

const App =  createSwitchNavigator(
  {
    App: AppDrawer,
    Stack: AppStack,
    Auth: Loign,
  },
  {
    initialRouteName: 'Auth',
  }
);
export default App


