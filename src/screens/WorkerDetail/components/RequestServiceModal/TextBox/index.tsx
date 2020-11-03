import React, { FC } from 'react';
import { KeyboardType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';

type AntDesignIconName = string;

interface IProps {
  title : string;
  iconName : AntDesignIconName;
  inputLeftText? : string;
  inputRightText? : string;
  inputConfig : {
    onChangeText?(text : string) : void;
    defaultValue? : string;
    placeholder? : string;
    type? : KeyboardType;
  }
}

const TextBox : FC<IProps> = ({ iconName , title , inputConfig , inputLeftText , inputRightText }) => (
  <Styled.Container>
    <Styled.ContainerTitle>
      <AntDesign name={iconName} size={14} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.ContainerTitle>
    <Styled.ContainerInput>
      { inputLeftText && <Styled.InputMesssage>{inputLeftText}</Styled.InputMesssage> }
      <Styled.Input
        defaultValue={inputConfig.defaultValue}
        keyboardType={inputConfig.type || 'default'}
        placeholder={inputConfig.placeholder}
        onChangeText={inputConfig.onChangeText}
      />
      { inputRightText && <Styled.InputMesssage>{inputRightText}</Styled.InputMesssage> }
    </Styled.ContainerInput>
  </Styled.Container>
);

export default TextBox;