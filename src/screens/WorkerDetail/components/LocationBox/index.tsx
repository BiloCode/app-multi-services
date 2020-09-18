import React, { memo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BaseBox from '../BaseBox';
import LBS from './styles';

const LocationBox = () => {
  return <LBS.Container>
    <BaseBox isMarginBottom={false}>
      <LBS.LocationTextContainer>
        <LBS.LocationTextBase>Ubicacion</LBS.LocationTextBase>
        <LBS.LocationText>Rimac, Pasaje los descalzos 146</LBS.LocationText>
      </LBS.LocationTextContainer>
    </BaseBox>    
    <LBS.MapContainer>

    </LBS.MapContainer>
  </LBS.Container>
}

export default memo(LocationBox);