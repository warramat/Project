/*import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Alert } from 'react-native';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      SwitchOnValueHolder: false
    }
  }

  ShowAlert = (value) => {
    this.setState({
      SwitchOnValueHolder: value
    })
    if (value == true) {
      //Perform any task here which you want to execute on Switch ON event.
      Alert.alert("Switch is On.");
    }
    else {
      //Perform any task here which you want to execute on Switch OFF event.
      Alert.alert("Switch is Off.");
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Switch </Text>

        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          style={{ marginBottom: 10 }}
          value={this.state.SwitchOnValueHolder} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

*/
import React, { Component } from 'react';
import { AppRegistry, View, Button, Alert, StyleSheet, Platform } from 'react-native';


export default class App extends Component {

  simpleAlertHandler = () => {
    //function to make simple alert
    alert('Hello I am Simple Alert');
  }

  twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am two option alert. Do you want to cancel me ?',
      [
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  threeOptionAlertHandler = () => {
    //function to make three option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am three option alert. Do you want to cancel me ?',
      [
        { text: 'May be', onPress: () => console.log('May be Pressed') },
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View style={styles.container}>

        {/*To generate simple alert*/}
        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.simpleAlertHandler}
            title="Simple Alert"
            color="#90A4AE"
          />
        </View>

        {/*To generate two option alert*/}
        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.twoOptionAlertHandler}
            title="Alert with Two Options"
            color="#EC407A"
          />
        </View>

        {/*To generate three option alert*/}
        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.threeOptionAlertHandler}
            title="Alert with Three Options"
            color="#1DE9B6"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    headerText: {
      fontSize: 25,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    
  });
