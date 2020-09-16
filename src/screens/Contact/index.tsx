import React, { useEffect } from 'react'
import faker from 'faker'
import MainDescription from '../../components/MainDescription'
import MainTitle from '../../components/MainTitle'
import VerticalBar from '../../components/VerticalBar'
import Input from './Input'
import { ScrollView } from 'react-native'
import GlobalButton from '../../components/GlobalButton'
import { ButtonContainer, FormContainer } from './styles'

const Contact = () => (
  <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false} >
      <MainTitle text='Forma parte de Nosotros' />
      <MainDescription text={faker.lorem.words(20)} />
      <FormContainer>
        <Input.Text 
          label='Titulo' 
          defaultValue='Solicitud de Trabajo' 
          placeholder='Escribe algo...' 
        />
        <Input.TextArea 
          label='Contenido'
          placeholder='Escribe algo...' 
        />      
        <Input.Text 
          label='Especialidad'
          placeholder='Escribe algo...' 
        />
        <ButtonContainer>
          <GlobalButton text='Enviar Solicitud' />  
        </ButtonContainer>        
      </FormContainer>
    </ScrollView>
  </VerticalBar>
)

export default Contact;