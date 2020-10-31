import React from 'react';
import { ScrollView } from 'react-native';
import GlobalButton from '../../components/GlobalButton';
import FooterMessage from './components/FooterMessage';
import InputList from './components/InputList';
import useSendData from './hooks/useLoginAuthentication';

import * as Styled from './styles';

const Logotipo = require('../../sources/logotipo.png');

const Login = () => {
  const { changePasswordValue , changeUsernameValue , sendData , isSend } = useSendData();

  return <Styled.Container>
    <ScrollView>
      <Styled.ImageContainer>
        <Styled.ImageLogo source={Logotipo} />
      </Styled.ImageContainer>
      <Styled.FormContainer>
        <Styled.HeaderContainer>
          <Styled.HeaderTitle>Bienvenido!</Styled.HeaderTitle>
          <Styled.HeaderSubTitle>Inicia Sesion para poder continuar</Styled.HeaderSubTitle>
        </Styled.HeaderContainer>
        <InputList 
          changePassword={changePasswordValue}
          changeUsername={changeUsernameValue} 
        />
        <GlobalButton isLoading={isSend} text='Iniciar Sesion' onPress={sendData} />
        <FooterMessage />      
      </Styled.FormContainer>        
    </ScrollView>
  </Styled.Container>
}

export default Login;