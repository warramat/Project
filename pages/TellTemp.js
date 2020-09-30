import React from 'react';
import { StyleSheet,View,Text,FlatList,Image} from 'react-native';
import Mybutton from './components/Mybutton';

export default class TellTemp extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.186.54:3000/get-Temperature-list'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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

        <View style={{padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>
          <Text style={{color:'#000'}}>Temp: {item.tempe}</Text>
          </Text>
        </View>
        } 
      />
       <Image  style={styles.container1} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
   
    
  },
  container1: {
    //flex: 1,
    alignItems: 'center',
    width:150, height: 120,
    marginLeft:120,
    marginRight:60,
    justifyContent: 'center',
    margin: 5,
    //backgroundColor: '#fff'
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});