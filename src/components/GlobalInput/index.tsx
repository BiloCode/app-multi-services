import React, { FC } from 'react';
import InputStyles from './styles';

interface IProps {
  icon : JSX.Element;
  placeholder : string;
  secureTextEntry? : boolean;
  onChangeText?(text : string) : void;
}

const Input : FC<IProps> = ({ icon , onChangeText , placeholder , secureTextEntry }) => {
  return <InputStyles.Container>
    <InputStyles.IconContainer>
      {icon}
    </InputStyles.IconContainer>
    <InputStyles.InputContainer>
      <InputStyles.InputText
        placeholder={placeholder}
        placeholderTextColor='#BBBBBB'
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </InputStyles.InputContainer>
  </InputStyles.Container>
}

Input.defaultProps = {
  secureTextEntry : false
}

export default Input;