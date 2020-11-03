import React from 'react';
import faker from 'faker';
import { ScrollView } from 'react-native'

//Components
import MainDescription from '../../components/MainDescription'
import MainTitle from '../../components/MainTitle'
import VerticalBar from '../../components/VerticalBar'
import Form from './components/Form';
import SmallText from './components/SmallText';

const Contact = () => (
  <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false} >
      <MainTitle text='¡Unete a nuestro Equipo!' />
      <MainDescription text='Tú también puedes formar parte de nuestros expertos y darte a conocer por medio de nuestra App.' />
      <SmallText text='¡Envianos tus datos aqui!' />
      <Form />
    </ScrollView>
  </VerticalBar>
);

export default Contact;