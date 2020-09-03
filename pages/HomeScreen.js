/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="Addmin" />
       
        <Mybutton
          title="อัพเดทข้อมูล"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="ข้อมูลแต่ละบุคคล"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="ข้อมูลสมาชิกทั้งหมด"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="ลบบัญชี"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}