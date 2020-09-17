import React from 'react';
import faker from 'faker';
import { ScrollView } from 'react-native'

//Components
import MainDescription from '../../components/MainDescription'
import MainTitle from '../../components/MainTitle'
import VerticalBar from '../../components/VerticalBar'
import Form from './components/Form';

const Contact = () => (
  <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false} >
      <MainTitle text='Forma parte de Nosotros' />
      <MainDescription text={faker.lorem.words(20)} />
      <Form />
    </ScrollView>
  </VerticalBar>
);

export default Contact;