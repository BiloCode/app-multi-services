import React, { FC, memo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Styled from './styles';
import { colors } from '../../../../../config';

interface IProps {
  price : string;
  specialty : string;
}

const WorkInformation : FC<IProps> = ({ specialty , price }) => (
  <Styled.WorkInformation>
    <Styled.SpecialtyContainer>
      <MaterialIcons name="work" size={20} color={colors.main} />
      <Styled.Specialty>{specialty}</Styled.Specialty>
    </Styled.SpecialtyContainer>
    <Styled.Price>S/ {price}</Styled.Price>
  </Styled.WorkInformation>
);

export default memo(WorkInformation);