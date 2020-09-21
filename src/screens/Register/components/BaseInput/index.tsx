import React, { FC } from 'react';
import BIS from './styles';

interface IProps {
  title : string;
  description : string;
}

const BaseInput : FC<IProps> = ({ children , title, description }) => {
  return <BIS.Container>
    <BIS.ContainerElements>
      <BIS.TextContainer>
        <BIS.TitleText>{title}</BIS.TitleText>
        <BIS.DescriptionText>{description}</BIS.DescriptionText>
      </BIS.TextContainer>
      {children}
    </BIS.ContainerElements>
  </BIS.Container>
}

export default BaseInput;