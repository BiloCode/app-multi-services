import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import IconStyles from './styles';

interface IProps {
  content : JSX.Element;
  onPress?() : void;
}

const Icon : FC<IProps> = ({ content , onPress }) => {
  return <TouchableOpacity onPress={onPress}>
    <IconStyles.Container>
      {content}
    </IconStyles.Container>
  </TouchableOpacity>
}

export default Icon;