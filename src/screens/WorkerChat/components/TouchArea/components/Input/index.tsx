import React, { FC } from 'react';
import * as IS from './styles';

interface IProps {
  onChangeText?(text : string);
}

const Input : FC<IProps> = ({ onChangeText }) => (
  <IS.InputText
    onChangeText={onChangeText}
    placeholder='Escribe un mensaje...' 
    placeholderTextColor='#6F6F6F'
  />
)

export default Input;