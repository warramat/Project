import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,Image,Alert,TextInput,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Mybutton from './components/Mybutton';
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert,Image } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
 

export default class App extends Component {


  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 3000)
  }
  constructor(props) {
    super(props);
    this.state = {
      user_contact: '',
      //user_password: '',
      

    };
  }
  login_user = () => {
    var that = this;
    const { user_contact } = this.state;
    //const { user_password } = this.state;
    //alert(user_name, user_lastname, user_contact, user_address, user_bod);

      
        if (user_contact) {
           // if (user_password) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_contact) VALUES (?)',
              [user_contact],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Login Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('Parent'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Login Failed');
                  }
                
              }
            );
          });
       // } else {
        //  alert('Please fill Password');
       // }
        
    } else {
      alert('Please fill Contact Number');
    }
  
  };


  render() {
    return (

      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.state.showME ?
          //<Image source={pic} style={{width: 300, height: 300}}/>
          <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
            :

            <View>
                  <View style={styles.container} >
        <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
        
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 2, justifyContent: 'space-between' ,marginTop: 15}}>
            <Mytextinput
              placeholder="เบอร์โทรศัพท์"
              style={{ padding:10 }}
              onChangeText={user_contact => this.setState({ user_contact })}
            />
          
          <Mybutton
              title="เข้าสู่ระบบ"
              customClick={this.login_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>

        <Mybutton
          title="สมัครสมาชิก care your heart"
          customClick={() => this.props.navigation.navigate('RegisterO')}
        />
      
        </View>
            

          </View>
        }
      </View>
     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCCC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});