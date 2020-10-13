import React, { FC } from 'react';
import { KeyboardType } from 'react-native';
import InputStyles from './styles';

interface IProps {
  icon : JSX.Element;
  placeholder : string;
  secureTextEntry? : boolean;
  type?: KeyboardType;
  onChangeText?(text : string) : void;
}

const GlobalInput : FC<IProps> = ({ icon , onChangeText , placeholder , secureTextEntry , type }) => {
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
        keyboardType={type || 'default'}
      />
    </InputStyles.InputContainer>
  </InputStyles.Container>
}

GlobalInput.defaultProps = {
  secureTextEntry : false
}

export default GlobalInput;