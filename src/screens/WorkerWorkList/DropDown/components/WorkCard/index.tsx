import React, { FC } from 'react';
import AvatarImage from '../../../../../components/AvatarImage';
import * as WCS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface IProps {

}

const WorkCard : FC<IProps> = () => (
  <WCS.Container>
    <WCS.AvatarContainer>
      <AvatarImage size={36} iconSize={20} />
    </WCS.AvatarContainer>
    <WCS.WorkInformation>
      <WCS.WorkTitle>Arreglo de mesas par...</WCS.WorkTitle>
      <WCS.WorkPrice>S/ 16.00</WCS.WorkPrice>
    </WCS.WorkInformation>
    <WCS.ActionGestureZone as={TouchableOpacity}>
      <AntDesign name="right" size={16} color="#fff" />
    </WCS.ActionGestureZone>
  </WCS.Container>
)

export default WorkCard;