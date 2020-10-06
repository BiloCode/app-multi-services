import React, { FC } from 'react';
import * as IS from './styles';

interface IProps {
  value? : string;
  onChangeText?(text : string);
}

const Input : FC<IProps> = ({ onChangeText , value }) => (
  <IS.InputText
    value={value}
    onChangeText={onChangeText}
    placeholder='Escribe un mensaje...' 
    placeholderTextColor='#6F6F6F'
  />
)

export default Input;