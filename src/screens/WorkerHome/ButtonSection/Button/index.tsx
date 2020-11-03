import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Styled from './styles';

interface IProps {
  text : string;
  isLight? : boolean;
  onPress?() : void;
}

const Button : FC<IProps> = ({ text, onPress , isLight }) => (
  <Styled.Container light={isLight} onPress={onPress} as={TouchableOpacity}>
    <Styled.TextButton light={isLight} >{text}</Styled.TextButton>
  </Styled.Container>
);

export default Button;