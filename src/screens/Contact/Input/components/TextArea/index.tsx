import React, { FC } from 'react';
import NSInput from '../../metadata';
import _Base from '../_Base';
import TextAreaStyles from './styles';

const TextArea : FC<NSInput.IPropsTextArea> = ({ label , defaultValue , onChangeText , placeholder }) => {
  return <_Base label={label}>
    <TextAreaStyles.Container>
      <TextAreaStyles.Input 
        placeholderTextColor='#C4C4C4'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        multiline={true}
        numberOfLines={8}
      />
    </TextAreaStyles.Container>    
  </_Base>
}

export default TextArea;