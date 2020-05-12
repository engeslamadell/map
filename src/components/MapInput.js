import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapInput = ({ notifyChange }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      autoFocus={true}
      returnKeyType='search'
      listViewDisplayed={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        notifyChange(details.geometry.location);
      }}
      query={{
        key: 'AIzaSyD_yCGQN7QUtDvKj1mmIZK04B2vT5FbXH0',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={200}
    />
  )
}

export default MapInput;