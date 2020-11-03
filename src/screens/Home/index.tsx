import React from 'react';
import faker from 'faker';
import MainDescription from '../../components/MainDescription';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import HomeStyles from './styles';
import SpecialtiesSection from './SpecialtiesSection';

const Home = () => (
  <VerticalBar>
    <HomeStyles.Container>
      <MainTitle text='Hola ¡Somos GLOBALCID!' />
      <MainDescription text='Nos dedicamos a encontrar un experto para solucionar cada problema que requiere de nuestros especialistas.' />
      <SpecialtiesSection />
    </HomeStyles.Container>
  </VerticalBar>
)

export default Home;