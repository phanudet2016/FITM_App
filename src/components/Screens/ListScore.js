import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// component
import Header from '../Header/HeaderBackScore'

// pass to App.js
let subjectName

// const subjects = subjectRef

export default class ListScore extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Score',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="ios-bulb" size={25} color={tintColor}/>
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
    this.getScore()
  }

  getScore() {
    const scoreObj = this.props.navigation.getParam('score');
    
    if (scoreObj) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(scoreObj)
      });
    }
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
    const backgroundColor = this.props.navigation.getParam('BGcolor');
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
                    style={{ width: 50, height: 50, borderRadius: 4, backgroundColor: backgroundColor, alignItems: 'center',justifyContent: 'center'}}
                  >
                    <Text style={{color: '#fff',fontSize: 18}}>{(rowData.firstname.toUpperCase()).substring(0, 1)}</Text>
                  </TouchableOpacity> 
                  <Text style={styles.itemName}>
                      {rowData.firstname} {rowData.lastname}
                  </Text>
                </View>
                <View style={styles.moreContainer}>
                  <Text>{rowData.score}</Text>
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
