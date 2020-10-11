import React, { FC, memo } from 'react';
import MapView from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as WLS from './styles';
import ButtonWorkAccept from './ButtonWorkAccept';
import RoundedSection from '../../../../components/RoundedSection';
import { WorkDetailState } from '../../../../metadata/types';
import DefaultText from './DefaultText';

interface IProps {
  location : any;
  workState  : WorkDetailState;
}

const BottonContent : FC<IProps> = ({ workState , location }) => {
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
            latitude: -12.0464,
            longitude: -77.0428,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          scrollEnabled={false}
        />
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