import React from 'react';
import MapView from 'react-native-maps';
import * as MS from './styles';

const Map = () => (
  <MS.Container>
    <MS.MapContainer>
      <MS.MapStyle
        as={MapView}
        initialRegion={{
          latitude: -12.0464,
          longitude: -77.0428,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={false}
      />      
    </MS.MapContainer>
  </MS.Container>
);

export default Map;