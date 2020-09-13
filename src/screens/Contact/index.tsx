import React from 'react'
import faker from 'faker'
import MainDescription from '../../components/MainDescription'
import MainTitle from '../../components/MainTitle'
import VerticalBar from '../../components/VerticalBar'

const Contact = () => {
  return <VerticalBar>
    <MainTitle text='Forma parte de Nosotros' />
    <MainDescription text={faker.lorem.words(20)} />
  </VerticalBar>
}

export default Contact;