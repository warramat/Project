/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert,Image } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
 
export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
      user_name: '',
      user_contact: '',
      user_address: '',
    };
  }
  searchUser = () => {
    const {input_user_id} =this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [input_user_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            this.setState({
             user_name:results.rows.item(0).user_name,
            });
            this.setState({
             user_contact:results.rows.item(0).user_contact,
            });
            this.setState({
             user_address:results.rows.item(0).user_address,
            });
          }else{
            alert('ไม่พบข้อมูล');
            this.setState({
              user_name:'',
              user_contact:'',
              user_address:'',
            });
          }
        }
      );
    });
  };
  updateUser = () => {
    var that=this;
    const { input_user_id } = this.state;
    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    if (user_name){
      if (user_contact){
        if (user_address){
          db.transaction((tx)=> {
            tx.executeSql(
              'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
              [user_name, user_contact, user_address, input_user_id],
              (tx, results) => {
                console.log('Results',results.rowsAffected);
                if(results.rowsAffected>0){
                  Alert.alert( 'Success', 'ยืนยันการเข้าสู่ระบบ',
                    [
                      {text: 'Ok', onPress: () => that.props.navigation.navigate('Parent')},
                    ],
                    { cancelable: false }
                  );
                }else{
                  alert('Updation Failed');
                }
              }
            );
          });
        }else{
          alert('Please fill Address');
        }
      }else{
        alert('Please fill Contact Number');
      }
    }else{
      alert('Please fill Name');
    }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Image resizeMode='center' style={{width:200, height: 240,marginLeft:80,marginTop:30,flex:1 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between',borderRadius:6 }}>
            <Mytextinput
              placeholder="รหัส SSID หรือ ID"
              style={{ padding:10 ,flex:1}}
              onChangeText={input_user_id => this.setState({ input_user_id })}
            />
            <Mybutton
              title="OK"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Name"
              value={this.state.user_name}
              style={{ padding:10 }}
              onChangeText={user_name => this.setState({ user_name })}
            />
            
            <Mybutton
              title="ยืนยัน"
              customClick={this.updateUser.bind(this)}
            />
             
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
