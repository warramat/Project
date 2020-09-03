/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import ViewAllUser from './ViewAllUser';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_talaphone: '',
      user_student:'',
      user_address: '',
      user_email: '',
      user_password: '',
    };
  }
 
  register_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_talaphone } = this.state;
    const { user_student } = this.state;
    const { user_address } = this.state;
    const { user_email } = this.state;
    const { user_password} = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (user_talaphone) {
        if (user_student) {
          if (user_address) {
            if (user_email) {
              if (user_password) {
            db.transaction(function(tx) {
              tx.executeSql(
               'INSERT INTO table_user (user_name, user_talaphone, user_address,user_email,user_password) VALUES (?,?,?,?,?)',
               [user_name, user_talaphone,user_student, user_address,user_email ,user_password],
                (tx, results) => {
                 console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                           onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            });
          } else {
            alert('Please fill Password');
          }
          } else {
            alert('Please fill Email');
          }
          } else {
            alert('Please fill Address');
          }
        } else {
          alert('Please fill Contact Student');
        }  
      }else {
          alert('Please fill Contact Number');
        }
    } else {
      alert('Please fill Name');
    }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="ชื่อ-สกุล"
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10,borderRadius:6}}
            />
            <Mytextinput
              placeholder="เบอร์โทรศัพท์"
              onChangeText={user_talaphone => this.setState({ user_talaphone})}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10,borderRadius:6 }}
            />
             <Mytextinput
              placeholder="ชื่อของนักเรียน"
              onChangeText={user_student => this.setState({ user_student})}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10,borderRadius:6 }}
            />
            <Mytextinput
              placeholder="ที่อยู่"
              onChangeText={user_address => this.setState({ user_address })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ padding:10,borderRadius:6 }}
            />
             <Mytextinput
              placeholder="Email"
              onChangeText={user_email => this.setState({ user_email })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ padding:10,borderRadius:6 }}
            />
             <Mytextinput
              placeholder="Password"
              onChangeText={user_password=> this.setState({ user_password })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ padding:10,borderRadius:6 }}
            />
            <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
      
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}