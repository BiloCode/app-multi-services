import React, { FC } from 'react';
import NSInput from '../../metadata';
import IS from './styles';

const _Base : FC<NSInput.IPropsBase> = ({ label , children }) => (
  <IS.Container>
    <IS.TitleContainer>
      <IS.Title>{label}</IS.Title>
    </IS.TitleContainer>
    {children}
  </IS.Container>
);

export default _Base;