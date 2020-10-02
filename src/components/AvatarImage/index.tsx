import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as AIS from './styles';

interface IProps {
  image? : string;
  iconSize? : number;
  size : number;
}

const AvatarImage : FC<IProps> = ({ size , image , iconSize }) => (
  <AIS.Container size={size}>
    { 
      image ? 
        <AIS.Image size={size} source={{ uri : image }} /> :
        <AntDesign name="user" size={iconSize || 32} color="black" />
    }
  </AIS.Container>
);

export default AvatarImage;