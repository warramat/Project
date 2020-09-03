/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View , TextInput,Alert, AppRegistry, TouchableHighlight, Image ,Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Mybutton from './components/Mybutton';
import MybuttonOne from './components/MybuttonOne';
 
export default class Parent extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  _onPressButton() {
    Alert.alert('ลูกของคุณเดินทางถึงโรงเรียนแล้ว เวลา 07:30')
  }
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
   
    return (
      <View style={styles.container}>
      <View >
          <Image  style={{width:80, height: 100 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
          <Text style={styles.welcome}>สถานะ: รถกำลังเคลื่อนที่</Text>
          <View style={{alignItems: 'center',backgroundColor: "pink",width: 420,height:350,justifyContent:'space-around'}}>
      <View style={styles.container1}>
      </View>
      </View>

          <Text style={styles.welcome}>สถานะเด็ก: เด็กอยู่ในรถ</Text>
          <Text style={styles.welcome}>อุณหภูมิ: 26 องศา </Text>
            <View style={styles.button}>
          <Button	 
            onPress={this._onPressButton}
            title="ยืนยัน"
          />
         </View>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 8.651603,
            longitude: 99.917310,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 8.651603,
              longitude: 99.917310,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    container1: {
      flex:1,
      position:'absolute',
      top:20,
      left:60,
      right:30,
      bottom:30,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    map: {
      position:'absolute',
      top:300,
      left:30,
      right:30,
      bottom:150,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    button: {
      marginBottom: 20,
      width: 80,
      height:35,
      marginLeft:150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff0033',
      borderRadius:10
    },
    
    input: {
      margin: 8,
      height: 50,
      width: 260,
      borderColor: '#ff3',
      borderWidth: 1,
      borderRadius:6
    },
  });