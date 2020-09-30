/**
 * @format
 */
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import FlashMessage, { showMessage } from "react-native-flash-message";
import kids from './noti/kids'
import school from './noti/school'
import { getDistance } from 'geolib'

const isNearHome = (toLat, toLng, fromLat, fromLng) => {
  const dt = getDistance(
    { latitude: toLat, longitude: toLng },
    { latitude: fromLat, longitude: fromLng },
  )
  console.log('***dt :', dt)
  if (dt < 30) { // < 30 meter
    return true
  } else {
    return false
  }
}
const isNearschool = (toLat, toLng, fromLat, fromLng) => {
  const dt = getDistance(
    { latitude: toLat, longitude: toLng },
    { latitude: fromLat, longitude: fromLng },
  )
  console.log('***dt :', dt)
  if (dt < 30) { // < 30 meter
    return true
  } else {
    return false
  }
}

const AppContainer = () => {
  useEffect(() => {
    setInterval(() => {
      fetch('http://172.16.186.65:3000/get-lo-list', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const car1 = responseJson.find(({ carId }) => carId === 'car001')
          // const car2 = responseJson.find(({ carId }) => carId === 'car002')

          kids.forEach(({ name, lat, lng }) => {
            if (isNearHome(car1.lat, car1.long, lat, lng)) {
              showMessage({
                message: `น้อง${name} ถึงบ้านแล้ว!`,
                type: "success",
                duration: 5000,
              })
            }
          })
          school.forEach(({ name, lat, lng }) => {
            if (isNearschool(car1.lat, car1.long, lat, lng)) {
              showMessage({
                message: `น้อง${name} ถึงโรงเรียน!`,
                type: "success",
                duration: 5000,
              })
            }
          })
        })
    }, 10000) // every 10 sec
  }, [])



  return (
    <View style={{ flex: 1 }}>
      <App />
      <FlashMessage position="top" />
    </View>
  )
}

AppRegistry.registerComponent(appName, () => AppContainer);
