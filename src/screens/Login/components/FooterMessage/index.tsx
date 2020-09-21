import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FooterMessageStyles from './styles';

const FooterMessage = () => {
  const { navigate } = useNavigation();

  const NavigateToRegister = () => navigate('register');

  return <FooterMessageStyles.Container>
    <FooterMessageStyles.NotLink>¿Nuevo Usuario?</FooterMessageStyles.NotLink>
    <TouchableOpacity onPress={NavigateToRegister}>
      <FooterMessageStyles.Link>Registrate Aqui</FooterMessageStyles.Link>
    </TouchableOpacity>
  </FooterMessageStyles.Container>
}

export default FooterMessage;