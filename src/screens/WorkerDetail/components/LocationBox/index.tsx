import React, { FC, memo } from 'react';
import MapView from 'react-native-maps';
import BaseBox from '../BaseBox';
import LBS from './styles';

interface IProps {
  coords : string;
  mapLocation : string;
}

const LocationBox : FC<IProps> = ({ coords , mapLocation }) => {
  return <LBS.Container>
    <BaseBox isMarginBottom={false}>
      <LBS.LocationTextContainer>
        <LBS.LocationTextBase>Ubicacion</LBS.LocationTextBase>
        <LBS.LocationText>{mapLocation}</LBS.LocationText>
      </LBS.LocationTextContainer>
    </BaseBox>    
    <LBS.MapContainer 
      as={MapView}
      initialRegion={{
        latitude: -12.0464,
        longitude: -77.0428,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      scrollEnabled={false}
    />
  </LBS.Container>
}

export default memo(LocationBox);