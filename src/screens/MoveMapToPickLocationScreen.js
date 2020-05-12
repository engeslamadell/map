import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import MapView from 'react-native-maps';

const MoveMapToPickLocationScreen = ({ navigation }) => {
  const [ region, setRegion ] = useState({
    latitude: 29.970351,
    longitude: 31.256608,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  });

  const onRegionChange = region => {
    setRegion(region);
    console.log(region);
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.map}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={onRegionChange}
        />
        <View style={styles.markerFixed}>
          <Image style={styles.marker} source={require('../assets/marker.png')} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
        </View>
      </View>
      <View style={styles.downView}>
        <Button title="Go to map with Direction" onPress={() => navigation.navigate('MapWithDirection')} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%'
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 48,
    width: 48
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  },
  downView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green",
  },
});

export default MoveMapToPickLocationScreen;