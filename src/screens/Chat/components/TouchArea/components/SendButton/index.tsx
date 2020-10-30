import React, { FC } from 'react';
import { Feather } from '@expo/vector-icons';
import * as SBS from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  onPress?();
}

const SendButton : FC<IProps> = ({ onPress }) => (
  <SBS.Container as={TouchableOpacity} onPress={onPress} >
    <Feather name="send" size={20} color="#fff" />
  </SBS.Container>
);

export default SendButton;