import React, {useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapWithPlaces = () => {
  const [mapRegion, setMapRegion] = useState(null);
  const [latitudeState, setLatitude] = useState(null);
  const [longitudeState, setLongitude] = useState(null);
  const onRegionChange = (region, latitude, longitude) => {
    setMapRegion(region);
    setLatitude(latitude || latitudeState);
    setLongitude(longitude || longitudeState); 
    // console.log(latitudeState, longitudeState);
  }
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log('firrrrrst', data, details);
          const region = { 
            latitude: parseFloat(details.geometry.location.lat), 
            longitude: parseFloat(details.geometry.location.lng), 
            latitudeDelta: 0.00922 * 1.5, 
            longitudeDelta: 0.00421 * 1.5 
          }; 
          onRegionChange(region, region.latitude, region.longitude);
          console.log('second', region);
        }}
   
        getDefaultValue={() => ''}
   
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyD_yCGQN7QUtDvKj1mmIZK04B2vT5FbXH0',
          language: 'en', // language of the results
          types: 'geocode' // default: 'geocode'
        }}
   
        styles={{
          textInputContainer: {
            width: '100%'
          },
          description: {
            fontWeight: 'bold'
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          }
        }}
   
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          type: 'cafe'
        }}
        
        // GooglePlacesDetailsQuery={{
        //   // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        //   fields: 'formatted_address',
        // }}
   
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
   
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
        // renderRightButton={() => <Text>Custom text after the input</Text>}
      />

      {latitudeState && longitudeState ? (
        <MapView 
          style = {{flex: 1, width: '100%'}}
          region = {mapRegion} 
          // onRegionChange = {(regions) => { 
          //   setMapRegion(regions);
          // }} 
          // onPress = {(e) => { 
          //   const region = { 
          //         latitude: e.nativeEvent.coordinate.latitude, 
          //         longitude: e.nativeEvent.coordinate.longitude, 
          //         latitudeDelta: 0.00922 * 1.5, 
          //         longitudeDelta: 0.00421 * 1.5 
          //       } 
          //   onRegionChange (region, region.latitude, region.longitude); 
          // }} 
          > 
          <MapView.Marker 
            coordinate = {{ 
              latitude: (latitudeState), 
              longitude: (longitudeState),
            }} 
            title="Location"
            description="Hello"
          /> 
        </MapView>
      ) : null}
    </View>
  )
};

export default MapWithPlaces;