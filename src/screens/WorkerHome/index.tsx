import React from 'react';
import MainDescription from '../../components/MainDescription';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import ButtonSection from './ButtonSection';
import TemporalMessage from './TemporalMessage';

const WorkerHome = () => (
  <VerticalBar>
    <MainTitle text='Bienvenido a tu Dashboard' />
    <MainDescription text='En esta zona podras acceder a toda la informacion de tus servicios. Ademas podras visualizar otras cosas utiles para tu dia a dia.' />
    <ButtonSection />
  </VerticalBar>
)

export default WorkerHome;