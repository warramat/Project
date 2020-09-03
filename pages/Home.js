import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,Image,Alert,TextInput,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Mybutton from './components/Mybutton';


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
    }, 1000)
  }


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
                  
                  <Mybutton
                    title="เข้าสู่ระบบ"
                    customClick={() => this.props.navigation.navigate('Login2')}
                  />

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