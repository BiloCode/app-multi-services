import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import SCS from './styles';

interface IProps {
  title : string;
  image : string;
}

const SpecialtyCard : FC<IProps> = ({ title , image }) => {
  return <SCS.Container as={TouchableOpacity}>
    <SCS.ImageContainer>
      <SCS.Image source={{ uri : image }} resizeMode='contain' />
    </SCS.ImageContainer>
    <SCS.TitleContainer>
      <SCS.Title>{title}</SCS.Title>
    </SCS.TitleContainer>
  </SCS.Container>
}

export default SpecialtyCard;