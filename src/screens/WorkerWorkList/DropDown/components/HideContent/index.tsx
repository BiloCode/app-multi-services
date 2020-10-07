import React, { FC } from 'react';
import * as HCS from './styles';

const HideContent : FC = ({ children }) => (
  <HCS.Container>
    {children}
  </HCS.Container>
);

export default HideContent;