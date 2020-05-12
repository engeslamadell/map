import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MapNavigator from './src/navigation/mapNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <MapNavigator />
    </NavigationContainer>
  );
};

export default App;
