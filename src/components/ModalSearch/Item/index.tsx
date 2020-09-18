import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native';
import ItemStyles from './styles'

interface IProps {
  text : string;
  onPress?() : void;
}

const Item : FC<IProps> = ({ text , onPress }) => {
  return <ItemStyles.Container onPress={onPress} as={TouchableOpacity}>
    <ItemStyles.Text>{text}</ItemStyles.Text>
  </ItemStyles.Container>
}

export default Item;