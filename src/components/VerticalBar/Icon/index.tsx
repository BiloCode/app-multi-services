import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import * as Styled from './styles';

interface IProps {
  iconNameAntDesign : string;
  isSelect? : boolean;
  onPress?() : void;
}

const Icon : FC<IProps> = ({ onPress , iconNameAntDesign , isSelect }) => (
  <Styled.Container>
    <TouchableOpacity onPress={onPress}>
      <Styled.Circle isSelect={isSelect} >
        <Styled.WhiteCircle isSelect={isSelect} >
          <AntDesign name={iconNameAntDesign} size={24} color={isSelect ? 'blue' : '#fff'} />
        </Styled.WhiteCircle> 
      </Styled.Circle>
    </TouchableOpacity>
  </Styled.Container>
)

export default Icon;