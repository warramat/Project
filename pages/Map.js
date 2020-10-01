import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StyleSheet, Image, Text, View , TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE,Polyline } from 'react-native-maps';
import school from '../noti/school';

const initialState = {
  latitude: null,
  longitude: null,  
  latitudeDelta: 0.000600,
  longitudeDelta: 0.00100,
}
const App = () => {
  const [curentPosition, setCurentPosition] = useState(initialState);
  const mapRef = React.createRef();

  useEffect(() => {
    setInterval(() => {
      fetch('http://172.16.186.51:3000/get-lo-list', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const car1 = responseJson.find(({ carId }) => carId === 'car001')
          // const car2 = responseJson.find(({ carId }) => carId === 'car002')
          setCurentPosition({
            latitude: car1.lat,
            longitude: car1.long,
          })
        })
    }, 1000)
  }, [])


  return curentPosition.latitude ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      mapType = 'standard'
      style={{ flex: 1 }}
      showsUserLocation
      ref={mapRef}    
      style={{flex: 1}}  
      region={{
        latitude: curentPosition.latitude,
        longitude: curentPosition.longitude,
        latitudeDelta: 0.00600,
        longitudeDelta: 0.00100,
      }}
    >
      
      <Marker
        coordinate={{
          latitude: curentPosition.latitude,
          longitude: curentPosition.longitude,
        }}
        title='You Here'
        description="Hello you are here!"
      >
        <Image style={{ width: 80, height: 80 }} source={require("./img/fix.png")} />
      </Marker>
      
   <Polyline
		coordinates={[
			{ latitude: curentPosition.latitude, longitude: curentPosition.longitude },
			{ latitude: school[0].lat, longitude: school[0].lng },
		]}
		strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={4}
	/>
      
    </MapView>
  ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
};


const styles = StyleSheet.create({
  container: {
    
   width: 10,
    height: 10 ,
    
  },
});

export default App;