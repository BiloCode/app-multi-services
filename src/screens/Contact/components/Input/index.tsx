import React, { FC } from 'react';

//Components
import Select from './components/Select';
import Text from './components/Text';
import TextArea from './components/TextArea';
import NSInput from './metadata';

const SelectInput : FC<NSInput.IPropsSelect> = (props) => (
  <Select {...props}>
    {props.children}
  </Select>
);

const Input = {
  Text : (props : NSInput.IPropsText) => <Text {...props} />,
  TextArea : (props : NSInput.IPropsTextArea) => <TextArea {...props} />,
  Select : SelectInput
}

export default Input;