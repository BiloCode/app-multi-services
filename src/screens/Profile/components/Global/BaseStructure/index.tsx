import React, { FC } from 'react';
import * as Styled from './styles';
import HeaderNavigation from '../../../../../components/HeaderNavigation';

const BaseStructure : FC = ({ children }) => (
  <Styled.Container>
    <Styled.HeaderContainer>
      <HeaderNavigation.Title title='Mi Perfil' />
    </Styled.HeaderContainer>
    <Styled.ProfileInformationContainer>
      {children}
    </Styled.ProfileInformationContainer>
  </Styled.Container>
)

export default BaseStructure;