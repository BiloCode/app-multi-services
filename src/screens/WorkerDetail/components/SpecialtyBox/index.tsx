import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../../../hooks/useStarAmount';
import BaseBox from '../BaseBox';
import SBS from './styles';

interface IProps {
  data : string;
}

const SpecialtyBox : FC<IProps> = ({ data }) => {
  const stars = useStarAmount(3);

  return <BaseBox>
    <SBS.Container>
      <SBS.SpecialtyText>Especialidad : {data}</SBS.SpecialtyText>
      <SBS.StarContainer>
        { stars.map((v,i) => <AntDesign key={i} name={v.name} size={10} color='#1858D4' />) }
      </SBS.StarContainer>      
    </SBS.Container>
  </BaseBox>
}

export default memo(SpecialtyBox);