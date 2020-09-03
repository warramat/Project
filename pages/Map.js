import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 8.638246;
const LONGITUDE = 99.898686;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAwuyNKkKiK_NbRMlg_4u_OrzOk3DNhWd8';

class Map extends Component {

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 8.638246,
          longitude: 99.898686,
        },
        {
          latitude: 8.639657,
          longitude: 99.894738,
        },
      ],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    const origin = {latitude: 8.638246, longitude: 99.898686};
const destination = {latitude: 8.639657, longitude:  99.894738};
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
          <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={'AIzaSyAwuyNKkKiK_NbRMlg_4u_OrzOk3DNhWd8'}
  />
      </MapView>
    );
  }
}

export default Map;