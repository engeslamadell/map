import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MapWithDirectionScreen = () => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const origin = {latitude: 29.960302, longitude: 31.257642};
  const destination = {latitude: 29.860969, longitude: 31.1230420};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD_yCGQN7QUtDvKj1mmIZK04B2vT5FbXH0';
  return (
    <MapView style={StyleSheet.absoluteFill} initialRegion={{
      latitude: 29.960302,
      longitude: 31.257642,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ASPECT_RATIO,
    }}>
      <MapView.Marker
        coordinate={origin}
        title="محطة مترو المعادى"
      />
      <MapView.Marker
        coordinate={destination}
        title="مش عارف :D"
      />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={7}
        strokeColor="red"
      />
    </MapView>
  );
};

export default MapWithDirectionScreen;