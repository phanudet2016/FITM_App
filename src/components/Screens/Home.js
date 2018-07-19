import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GoogleSignin } from 'react-native-google-signin';
import { subjectRef } from '../db/firebase'

// component
import Header from '../Header/Header'
import LessonScreen from './Lesson'

// pass to App.js
const displayName = ''
const photo = ''
const email = ''
let subjectName

// const subjects = subjectRef

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-home" size={25} color={tintColor}/>
      )
    }
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      displayName: '',
      photo: '',
      email: '',
      subject: [],
      dataSource: dataSource
    };
  }

  componentWillMount() {
    this.getLesson()
  }

  getLesson () {
    subjectRef.on('value', (childSnapshot) => {
      const subject = [];
      childSnapshot.forEach((doc) => {
        subject.push({
            key: doc.key,
            nameSubject: doc.toJSON().nameSubject,
            lesson: doc.val().lesson,
            backgroundColor: doc.toJSON().backgroundColor
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(subject)
      });
    });
  }

  passSubjectName (name) {
    subjectName = name
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
          <ListView
            dataSource={this.state.dataSource}
            // renderRow={(rowData) => <Text onPress = {() => { this.props.navigation.navigate('Lesson', {lesson: rowData.lesson})}}>{rowData.nameSubject}</Text>}
            renderRow={(rowData) => 
              <View style={styles.projectRow}>
                <View style={{width: Dimensions.get('window').width - 50, flexDirection: 'row',alignItems: 'center'}}>
                  <TouchableOpacity 
                    style={{ width: 50, height: 50, borderRadius: 4, backgroundColor: rowData.backgroundColor, alignItems: 'center',justifyContent: 'center'}}
                    onPress = {() => 
                      {
                        this.props.navigation.navigate('Lesson', {lesson: rowData.lesson, nameSubject: rowData.nameSubject})
                      }
                    }
                  >
                    <Text style={{color: '#fff',fontSize: 18}}>{(rowData.nameSubject.toUpperCase()).substring(0, 1)}</Text>
                  </TouchableOpacity> 
                  <Text style={styles.itemName} onPress = {() => { this.props.navigation.navigate('Lesson', {lesson: rowData.lesson, nameSubject: rowData.nameSubject})}}>
                      {rowData.nameSubject}
                  </Text>
                </View>
                <View style={styles.moreContainer}>
                  <Ionicons 
                    name="md-arrow-forward" 
                    size={25} style={styles.moreIcon} 
                    onPress = {() => 
                      {
                        this.props.navigation.navigate('Lesson', {lesson: rowData.lesson, nameSubject: rowData.nameSubject})
                      }
                    }
                  />
                </View>
              </View>
            }
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
        </View>
      </View>
    );
  }
}

// Export Variable
export { subjectName }

const styles = StyleSheet.create({

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    paddingLeft: 8,
   },

   itemName: {
     fontSize: 18,
     color: '#4A90E2',
     paddingLeft: 10
   },

   itemDetails: {
     fontSize: 12,
     color: '#BBBBBB',
   },

   moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

   moreIcon: {
     color: "#4A90E2"
   },
   
   thumbnail: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  separator: {
    height: .5,
    width: "100%",
    backgroundColor: "#8E8E8E",
  }
});
