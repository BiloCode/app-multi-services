import React from 'react';

//Components
import Select from './components/Select';
import Text from './components/Text';
import TextArea from './components/TextArea';
import NSInput from './metadata';

const Input = {
  Text : (props : NSInput.IPropsText) => <Text {...props} />,
  Select : (props : NSInput.IPropsSelect) => <Select {...props} />,
  TextArea : (props : NSInput.IPropsTextArea) => <TextArea {...props} />
}

export default Input;