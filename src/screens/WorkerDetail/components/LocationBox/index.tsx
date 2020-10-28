import React, { FC, memo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import BaseBox from '../BaseBox';
import useCoordsData from './hooks/useCoordsData';
import LBS from './styles';

interface IProps {
  coords : string;
  district : string;
  province : string;
}

const LocationBox : FC<IProps> = ({ coords , district, province }) => {
  const { latitude , longitude } = useCoordsData(coords);
  
  return <LBS.Container>
    <BaseBox isMarginBottom={false}>
      <LBS.LocationTextContainer>
        <LBS.LocationTextBase>Ubicacion</LBS.LocationTextBase>
        <LBS.LocationText>{`${province}, ${district}`}</LBS.LocationText>
      </LBS.LocationTextContainer>
    </BaseBox>    
    <LBS.MapContainer 
      as={MapView}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      scrollEnabled={false}
    >
      <Marker title={province} coordinate={{ latitude, longitude }} />
    </LBS.MapContainer>
  </LBS.Container>
}

export default memo(LocationBox);