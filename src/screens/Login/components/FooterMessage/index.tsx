import React from 'react';
import { TouchableOpacity } from 'react-native';
import FooterMessageStyles from './styles';

const FooterMessage = () => {
  return <FooterMessageStyles.Container>
    <FooterMessageStyles.NotLink>¿Nuevo Usuario?</FooterMessageStyles.NotLink>
    <TouchableOpacity>
      <FooterMessageStyles.Link>Registrate Aqui</FooterMessageStyles.Link>
    </TouchableOpacity>
  </FooterMessageStyles.Container>
}

export default FooterMessage;