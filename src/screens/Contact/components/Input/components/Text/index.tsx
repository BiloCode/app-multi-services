import React, { FC } from 'react';
import NSInput from '../../metadata';
import _Base from '../_Base';
import TextStyles from './styles';

const Text : FC<NSInput.IPropsText> = ({ label , placeholder , defaultValue , onChangeText }) => {
  return <_Base label={label}>
    <TextStyles.Container>
      <TextStyles.Input 
        placeholderTextColor='#C4C4C4'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
    </TextStyles.Container>    
  </_Base>
}

export default Text;