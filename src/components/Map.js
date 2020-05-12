import React from 'react';
import MapView from 'react-native-maps';

const Map = ({ region, onRegionChange,  }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      onRegionChange={(reg) => onRegionChange(reg)}
    >
      <MapView.Marker coordinate={origin} />
    </MapView>
  );
};

export default Map;