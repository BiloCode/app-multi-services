import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import SBS from './styles';

interface IProps {
  onPress?() : void;
  text : string;
}

const SmallButton : FC<IProps> = ({ onPress , text }) => (
  <SBS.Button onPress={onPress} as={TouchableOpacity}>
    <SBS.ButtonText>{text}</SBS.ButtonText>  
  </SBS.Button>  
);
  
export default SmallButton;