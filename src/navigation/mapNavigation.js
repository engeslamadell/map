import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoveMapToPickLocationScreen from '../screens/MoveMapToPickLocationScreen';
import MapWithDirectionScreen from '../screens/MapWithDirectionScreen';
import MapWithPlacesScreen from '../screens/MapWithPlacesScreen';

const MapStack = createStackNavigator();

const MapNavigator = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="MoveMapToPickLocation" component={MoveMapToPickLocationScreen} options={{ title: 'Pick Location' }} />
      <MapStack.Screen name="MapWithDirection" component={MapWithDirectionScreen} options={{ title: 'Directions' }} />
      <MapStack.Screen name="MapWithPlaces" component={MapWithPlacesScreen} options={{ title: 'Search Place' }} />
    </MapStack.Navigator>
  );
}

export default MapNavigator;