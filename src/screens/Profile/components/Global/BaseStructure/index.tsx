import React, { FC } from 'react';
import * as Styled from './styles';
import HeaderNavigation from '../../../../../components/HeaderNavigation';
import BackgroundGradient from '../../../../../components/BackgroundGradient';

const BaseStructure : FC = ({ children }) => (
  <Styled.Container>
    <BackgroundGradient />
    <Styled.ScrollContainer>
      <Styled.HeaderContainer>
        <HeaderNavigation.Title title='Mi Perfil' />
      </Styled.HeaderContainer>
      <Styled.ProfileInformationContainer>
        {children}
      </Styled.ProfileInformationContainer>        
    </Styled.ScrollContainer>
  </Styled.Container>
);

export default BaseStructure;