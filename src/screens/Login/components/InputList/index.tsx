import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';

import GlobalInput from '../../../../components/GlobalInput';
import InputListStyles from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { colors } from '../../../../config';

interface IProps {
  changePassword(ev : string) : void;
  changeUsername(ev : string) : void;
}

const InputList : FC<IProps> = ({ changePassword , changeUsername }) => (
  <KeyboardAvoidingView behavior='height' >
    <InputListStyles.Container>
      <GlobalInput 
        icon={<AntDesign name="user" size={20} color={colors.text} />}
        placeholder='Username...'
        onChangeText={changeUsername}
      />
      <GlobalInput 
        icon={<AntDesign name="lock" size={24} color={colors.text} />}
        placeholder='Password...'
        secureTextEntry={true}
        onChangeText={changePassword}
      />
      <TouchableOpacity onPress={() => alert('En construcción')} >
        <InputListStyles.LinkText>¿Olvidaste tu contraseña?</InputListStyles.LinkText>
      </TouchableOpacity>
    </InputListStyles.Container>    
  </KeyboardAvoidingView>
)

export default memo(InputList);