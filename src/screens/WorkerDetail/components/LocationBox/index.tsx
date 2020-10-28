import React, { FC, memo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import useCoords from '../../../../hooks/useCoords';
import BaseBox from '../BaseBox';
import LBS from './styles';

interface IProps {
  coords : string;
  district : string;
  province : string;
}

const LocationBox : FC<IProps> = ({ coords , district, province }) => {
  const { latitude , longitude } = useCoords(coords);
  
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