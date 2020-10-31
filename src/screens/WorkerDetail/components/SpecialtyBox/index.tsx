import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../../../hooks/useStarAmount';
import BaseBox from '../BaseBox';
import SBS from './styles';
import { colors } from '../../../../config';

interface IProps {
  name : string;
  puntuaction : number;
}

const SpecialtyBox : FC<IProps> = ({ name , puntuaction }) => {
  const stars = useStarAmount(puntuaction);

  return <BaseBox>
    <SBS.Container>
      <SBS.SpecialtyText>Especialidad : {name}</SBS.SpecialtyText>
      <SBS.StarContainer>
        { stars.map((v,i) => <AntDesign key={i} name={v.name} size={10} color={colors.stars} />) }
      </SBS.StarContainer>      
    </SBS.Container>
  </BaseBox>
}

export default memo(SpecialtyBox);