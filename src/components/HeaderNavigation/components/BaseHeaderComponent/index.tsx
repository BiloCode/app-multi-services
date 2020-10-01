import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as HTS from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { NSHeaderNavigation } from '../../namespace';

const BaseHeaderComponent : FC = ({ children }) => {
  const { goBack } = useNavigation();

  return <HTS.Container>
    <HTS.IconBackContainer as={TouchableOpacity} onPress={() => goBack()}>
      <AntDesign name="back" size={20} color={NSHeaderNavigation.colors.text} />
    </HTS.IconBackContainer>
    <HTS.RightContent>
      {children}
    </HTS.RightContent>
  </HTS.Container>
};

export default BaseHeaderComponent;