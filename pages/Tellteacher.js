import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Mybutton from './components/Mybutton';

export default class Tellteacher extends React.Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://172.16.186.130:3000/login'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
                <Text style={{ color: '#000000' }}>รหัสลูกค้า: {item.ID}</Text></Text>
              <Text style={{ color: '#CC0033' }}>ชื่อลูกค้า: {item.name}</Text>
              <Text style={{ color: '#fff' }}>เบอร์โทร: {item.Tell}</Text>
              <Text style={{ color: '#fff' }}>ระดับชั้น: {item.degree}</Text>
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