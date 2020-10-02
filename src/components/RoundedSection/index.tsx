import React, { FC } from 'react';
import * as SCS from './styles';

interface IRoundedSectionProps {
  title : string;
  icon : JSX.Element;
}

const RoundedSection : FC<IRoundedSectionProps> = ({ children , title , icon }) => (
  <SCS.Container>
    <SCS.FilterName>
      {icon}
      <SCS.FilterText>{title}</SCS.FilterText>
    </SCS.FilterName>
    <SCS.List>
      {children}     
    </SCS.List>
  </SCS.Container>
)

export default RoundedSection;