import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../config';
import * as Styled from './styles';

interface IRoundedSectionProps {
  title : string;
  isLoading? : boolean;
  isContentEmpty? : boolean;
  icon : JSX.Element;
}

const RoundedSection : FC<IRoundedSectionProps> = ({ children , title , icon , isLoading }) => (
  <Styled.Container>
    <Styled.FilterName>
      {icon}
      <Styled.FilterText>{title}</Styled.FilterText>
    </Styled.FilterName>
    <Styled.List>
      {
        isLoading ? 
          <Styled.ContainerLoading>
            <ActivityIndicator size={32} color={colors.main} />
            <Styled.TextIndicator>Cargando Contenido...</Styled.TextIndicator>
          </Styled.ContainerLoading> :
          children
      }
    </Styled.List>
  </Styled.Container>
)

export default RoundedSection;