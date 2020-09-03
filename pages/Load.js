import React from 'react';
import { View, ActivityIndicator} from 'react-native';


export default class MyApp extends React.Component {

   render() {
      return(<View style={{alignItems:'center' }}><ActivityIndicator size="large" color="#ff0000" /></View>);
   }
}