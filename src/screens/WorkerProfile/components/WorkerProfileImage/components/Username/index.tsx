import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useChangeFullName from '../../../../hooks/useChangeFullName';
import * as US from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  name : string;
}

const Username : FC<IProps> = ({ name }) => {
  const { fullName , inputEnabled , ChangeFullName , ActivateInputFullName } = useChangeFullName(name);

  return <US.Container>
    <US.Username
      value={fullName}
      editable={inputEnabled}
      onChangeText={ChangeFullName}
      autoFocus={inputEnabled}
    />
    <US.UsernameIconContainer onPress={ActivateInputFullName} as={TouchableOpacity}>
      <AntDesign name={!inputEnabled ? 'edit' : 'save'} size={18} color="black" />
    </US.UsernameIconContainer>
  </US.Container>
}

export default memo(Username);