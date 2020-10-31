import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';
import { colors } from '../../config';

const EmptyContent = () => (
  <Styled.ContentEmptyContainer>
    <AntDesign name="search1" size={32} color={colors.main} />
    <Styled.MessageIndicator>No se encontro resultados para la busqueda.</Styled.MessageIndicator>
  </Styled.ContentEmptyContainer>
);

export default memo(EmptyContent);