
import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text,  View ,FlatList,Image} from 'react-native';

import Mybutton from './components/Mybutton';


export default class test extends React.Component {
  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.186.73:3000/get-Temperature-list'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}
render() {
  return (
     
    
    <View style={styles.container}>
       
    <FlatList
      data={this.state.data}
      keyExtractor= {(item,index) => index.toString()}
      renderItem={({item})=>

      <View style={styles.container1}>
        <Text style={{color:'#fff', fontWeight:'bold'}}>
        <Text style={{color:'#000'}}>Tempe: {item.tempe}</Text>
        </Text>
      </View>
      } 
      />
        <Image  style={styles.container2} 
        
             source={require('./img/test.png')} />
             
         
        <Mybutton
          title="อุณหภูมิ"
          customClick={() => this.props.navigation.navigate('TellTemp')}
        />
        <Mybutton
          title="ตำแหน่งของเด็ก"
          customClick={() => this.props.navigation.navigate('Map')}
        />
        <Mybutton
          title="ติดต่อครูประจำรถ"
          customClick={() => this.props.navigation.navigate('Tellteacher')}
        />
         <Mybutton
          title="ติดต่อคนขับรถ"
          customClick={() => this.props.navigation.navigate('Telldriver')}
        />
        <Mybutton
          title="แจ้งหยุดการรับ-ส่ง"
          customClick={() => this.props.navigation.navigate('Stoptravel')}
        />
        <Mybutton
          title="test"
          customClick={() => this.props.navigation.navigate('test')}
        />
        </View>
       
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
   // width:150,
  
   margin: 5,
    height: 20 ,
   // marginLeft:130,
    justifyContent: 'center',
    
    
  },
  container1: {
   //flex: 1,
   alignItems: 'center',
   width:150, height: 120,
   marginLeft:20,
   marginRight:60,
   justifyContent: 'center',
   margin: -30,
   //backgroundColor: '#fff'
   
 },
 container2: {
 alignItems: 'center',
    width:100,
    height: 180 ,
    marginLeft:130,
    marginRight:100,
    justifyContent: 'center',
    
    
  },
  container3: {
 padding:50,margin:5,borderRadius:100,
   marginLeft:30,
    marginRight:40,
    justifyContent: 'center',
 },
 container4: {
   //flex: 1,
   alignItems: 'center',
   width: 150,
   height: 150,
   marginLeft: 120,
   marginRight: 100,
   justifyContent: 'center',
   margin: -20,

 },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginBottom: 20,
    width: 100,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9999',
    borderRadius:10
  },
  
  input: {
    margin: 8,
    height: 40,
    width: 260,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius:6
  },
});