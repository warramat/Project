/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert,Image,StyleSheet } from 'react-native';
import Mytextinputc from './components/Mytextinputc';
import Mybutton from './components/Mybutton';
import MybuttonOne from './components/MybuttonOne';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
 

export default class Login2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_contact: '',
    };
    this.state = {
      showME: true
    }
  }
  login_user = () => {
    var that = this;
    const { user_contact } = this.state;
        if (user_contact) {
          db.transaction(function(tx) {
            tx.executeSql(
              'SELECT * FROM table_user where user_contact = ?',
              [user_contact],
              (tx, results) => {
                var len = results.rows.length;
                console.log('len',len);
                if (len > 0) {
                  Alert.alert(
                    'เบอร์โทรศัพท์ถูกต้อง',
                    'ยืนยัน',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('Parent'),
                      },
                    ],
                    
                  );
                  console.log(results.rows.item(0).user_contact);
                  this.setState({
                  user_name:results.rows.item(0).user_name,
                  });
                  
                } else {
                  alert('เบอร์โทรศัพท์ไม่ถูกต้อง');
                  }
                
              }
            );
          });
       // } else {
        //  alert('Please fill Password');
       // }
        
    } else {
      alert('เบอร์โทรศัพท์ไม่ถูกต้อง');
    }
  
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 2000)
  }

  render() {
    return (
      
      <View  style={styles.container} >
        {
          this.state.showME ?
          //<Image source={pic} style={{width: 300, height: 300}}/>
          <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
            :
            <View>
               <View style={{  flex: 1 }}>
                  <View style={styles.container} >
                    <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/1545823206848.png')} />
                  </View>
                
                  <Image style={styles.bgImage} source={{ uri: "https://www.img.in.th/images/16630c9da089ef062a6237f90e010776.jpg" }}/>
                  
                  <View style={styles.Input}>
                 <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={{ flex: 2, justifyContent: 'space-between' ,marginTop: 15}}>
                      <View style={{width:400}}>
                    <Mytextinputc
                        placeholder="เบอร์โทรศัพท์"
                        style={{ padding:10 ,width:100}}
                        onChangeText={user_contact => this.setState({ user_contact })}
                    />
                    </View>  

                    <MybuttonOne
                      title="เข้าสู่ระบบ"
                      customClick={this.login_user.bind(this)}
                    />
                     <Mybutton
                    title="สมัครสมาชิก care your heart"
                    customClick={() => this.props.navigation.navigate('RegisterO')}
                  />
                    </KeyboardAvoidingView>
                  </ScrollView>
                  </View>
                </View>
          </View>
        }
      </View>
    );
  }
}

const resizeMode = 'cover';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
}); 