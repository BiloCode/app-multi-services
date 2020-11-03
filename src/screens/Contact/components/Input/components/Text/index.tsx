import React, { FC } from 'react';
import NSInput from '../../metadata';
import _Base from '../_Base';
import Styled from './styles';

const Text : FC<NSInput.IPropsText> = ({ label , placeholder , defaultValue , onChangeText , type , maxLength }) => {
  return <_Base label={label}>
    <Styled.Container>
      <Styled.Input 
        placeholderTextColor='#C4C4C4'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        keyboardType={type}
        maxLength={maxLength}
      />
    </Styled.Container>    
  </_Base>
}

export default Text;