import React, { FC } from 'react';
import * as ITS from './styles';
import { AntDesign } from '@expo/vector-icons';
import BaseHeaderComponent from '../BaseHeaderComponent';
import { NSHeaderNavigation } from '../../namespace';
import { colors } from '../../../../config';
import { TouchableOpacity } from 'react-native';

const InputSearch : FC<NSHeaderNavigation.IPropsInputSearch> = ({ onChangeText , onPressButton }) => (
  <BaseHeaderComponent>
    <ITS.Container>
      <ITS.ContainerIcon>
        <AntDesign name="search1" size={19} color="#fff" />
      </ITS.ContainerIcon>
      <ITS.Input 
        onChangeText={onChangeText}
        placeholder='Busca a un trabajador...'
        placeholderTextColor='#fff'
      />      
      <ITS.ButtonContainer onPress={onPressButton} as={TouchableOpacity}>
        <AntDesign name="arrowright" size={16} color={colors.main} />
      </ITS.ButtonContainer>
    </ITS.Container>
  </BaseHeaderComponent>
);

export default InputSearch;