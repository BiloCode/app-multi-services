import React, { FC } from 'react';
import * as Styled from './styles';
import Image from './Image';
import Username from './Username';

const size = 120;

interface IProps {
  image : string;
  name : string;
}

const ProfileImageStructure : FC<IProps> = ({ children, image, name }) => (
  <Styled.Container size={size}>
    <Image size={size} image={image} />
    <Styled.ContainerInformation>
      <Username name={name} />
      { children }
    </Styled.ContainerInformation>
  </Styled.Container>
);

export default ProfileImageStructure;