import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../../../hooks/useStarAmount';
import BaseBox from '../BaseBox';
import SBS from './styles';

const SpecialtyBox = () => {
  const stars = useStarAmount(3);

  return <BaseBox>
    <SBS.Container>
      <SBS.SpecialtyText>Desarrollador Web UX / UI</SBS.SpecialtyText>
      <SBS.StarContainer>
        { stars.map((v,i) => <AntDesign key={i} name={v.name} size={10} color='#1858D4' />) }
      </SBS.StarContainer>      
    </SBS.Container>
  </BaseBox>
}

export default memo(SpecialtyBox);