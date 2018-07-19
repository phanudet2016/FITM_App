import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let displayName, photo, email // pass to App.js

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      photo: '',
      email: ''
    };
  }

  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.configure({
      // iosClientId: '617324734115-od9b4l2mf95331gg9m4u0a4gggq0fpjo.apps.googleusercontent.com',
      webClientId: '70705103923-l6cnlsv70g1vtp8i7optutofph706vlj.apps.googleusercontent.com'
    })
  }

  handleSigninGoogle () {
    GoogleSignin.signIn().then((user) => {
      // push TO App
      displayName = user.name
      photo = user.photo
      email = user.email
      this.props.navigation.navigate('App')
    }).catch((err) => {
      console.log('WRONG SIGNIN', err);
    }).done();
  }

  handleSignoutGoogle () {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    this.setState({displayName: null})
    this.setState({photo: null})
    this.setState({email: null})
  }

  render() {
    return (
      <View style={LoginStyles.container}>
        <View  style={LoginStyles.logoContainer}>
          <Image 
            style={LoginStyles.logo}
            source={require('../../asset/logo.png')}
          />
          <Text 
          style={LoginStyles.title}>
            Classromm 4U {this.state.displayName}
          </Text>
        </View>

        {/* FORM INPUT */}
        
          <View style={formStyles.container}>
            <Image source={require('../../asset/google_logo.jpg')} style={{width: 48, height: 48}}/>
            <TouchableOpacity style={formStyles.ButtonContainer}
              onPress={() => this.handleSigninGoogle()}
            >
              <Text style={formStyles.ButtonText}>Sign in with Google +</Text>
            </TouchableOpacity>  
          </View>
      </View>
    );
  }
}
export { displayName, photo, email }
// LOIGN Styles
const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    borderBottomColor: 'red'
  },
  ButtonContainer: {
    backgroundColor: 'rgb(66,133,224)',
    paddingVertical: 10,
    width: 200,
    justifyContent: 'center',
    borderColor: 'red'
  },
  ButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16
  }
});

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {

  },
  formContainer: {
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    color: 'red',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
// END LOIGN Styles
