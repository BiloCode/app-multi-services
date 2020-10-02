import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import * as BWCS from './styles';

interface IProps {
  text : string;
  onPress?();
}

const ButtonWorkerCard : FC<IProps> = ({ text , onPress }) => (
  <BWCS.Container onPress={onPress} as={TouchableOpacity}>
    <BWCS.TextButton>{text}</BWCS.TextButton>
  </BWCS.Container>
);

export default ButtonWorkerCard;