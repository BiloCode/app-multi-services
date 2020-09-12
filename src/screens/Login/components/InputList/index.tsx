import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import Input from '../Input';
import InputListStyles from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import useChangeInput from '../../hooks/useChangeInput';

const InputList = () => {
  const { changePassword , changeUsername } = useChangeInput();

  return <KeyboardAvoidingView behavior='height' >
    <InputListStyles.Container>
      <Input 
        icon={<AntDesign name="user" size={20} color="#BBBBBB" />}
        placeholder='Username...'
        onChangeText={changeUsername}
      />
      <Input 
        icon={<AntDesign name="lock" size={24} color="#BBBBBB" />}
        placeholder='Password...'
        secureTextEntry={true}
        onChangeText={changePassword}
      />
      <TouchableOpacity>
        <InputListStyles.LinkText>¿Olvidaste tu contraseña?</InputListStyles.LinkText>
      </TouchableOpacity>
    </InputListStyles.Container>    
  </KeyboardAvoidingView>
}

export default InputList;