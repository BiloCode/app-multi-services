import React, { FC, memo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as WLS from './styles';
import ButtonWorkAccept from './ButtonWorkAccept';
import RoundedSection from '../../../../components/RoundedSection';
import { WorkDetailState } from '../../../../metadata/types';
import DefaultText from './DefaultText';
import useCoords from '../../../../hooks/useCoords';

interface IProps {
  coords : string;
  province : string;
  workState  : WorkDetailState;
}

const BottonContent : FC<IProps> = ({ workState , coords , province }) => {
  const { latitude , longitude } = useCoords(coords);

  const isWorkCompleted = () => {
    return workState === 'completed' ? 'Trabajo Terminado' : 'Trabajo Pendiente';
  }

  return <RoundedSection
    title='Lima - Callao'
    icon={<MaterialCommunityIcons name="map-marker" size={20} color="#fff" />} 
  >
    <WLS.Container>
      <WLS.MapContainer>
        <WLS.Map
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
        </WLS.Map>
      </WLS.MapContainer>
      {
        workState === 'waiting-confirmation' ? 
          <ButtonWorkAccept /> :
          <DefaultText text={isWorkCompleted()} />
      }
    </WLS.Container>
  </RoundedSection>
}

export default memo(BottonContent);