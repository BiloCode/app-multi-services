import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';

import Input from '../Input';
import InputListStyles from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';

interface IProps {
  changePassword(ev : string) : void;
  changeUsername(ev : string) : void;
}

const InputList : FC<IProps> = ({ changePassword , changeUsername }) => (
  <KeyboardAvoidingView behavior='height' >
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
)

export default InputList;