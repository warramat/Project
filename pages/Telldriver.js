import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Mybutton from './components/Mybutton';

export default class Telldriver extends React.Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://172.16.186.130:3001/datadriver'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }
  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>

            <View style={{ backgroundColor: '#EEB4B4', padding: 10, margin: 10, borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                <Text style={{ color: '#000000' }}>รหัสคนขับรถ: {item.ID}</Text></Text>
              <Text style={{ color: '#6633CC' }}>ชื่อคนขับรถ: {item.Name_Driver}</Text>
              <Text style={{ color: '#fff' }}>รหัสรถ: {item.ID_Driver}</Text>
              <Text style={{ color: '#fff' }}>ข้อมูลรถ: {item.data_Driver}</Text>
              <Text style={{ color: '#fff' }}>คนขับ: {item.car_Driver}</Text>
            </View>
          }
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});