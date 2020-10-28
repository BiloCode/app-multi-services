import React, { FC } from 'react';
import MapView, { Marker } from 'react-native-maps';
import useCoords from '../../../../hooks/useCoords';
import * as MS from './styles';

interface IProps {
  coords : string;
  province : string;
}

const Map : FC<IProps> = ({ coords , province }) => {
  const { latitude , longitude } = useCoords(coords);
  
  return <MS.Container>
    <MS.MapContainer>
      <MS.MapStyle
        as={MapView}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={false}
      >
        <Marker title={province} coordinate={{ latitude , longitude }} />  
      </MS.MapStyle>      
    </MS.MapContainer>
  </MS.Container>
};

export default Map;