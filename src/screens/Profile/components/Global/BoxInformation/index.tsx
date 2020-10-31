import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';
import { colors } from '../../../../../config';

interface IProps {
  title : string;
  value : string,
  ADIconName : string;
}

const BoxInformation : FC<IProps> = ({ title , value , ADIconName }) => (
  <Styled.Container>
    <Styled.ContainerTitle>
      <AntDesign name={ADIconName} size={18} color={colors.main} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.ContainerTitle>
    <Styled.Value>{value}</Styled.Value>
  </Styled.Container>
);

export default memo(BoxInformation);