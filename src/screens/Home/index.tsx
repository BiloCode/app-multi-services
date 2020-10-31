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
      <MainTitle text='Bienvenido a GLOBALCID' />
      <MainDescription text={faker.lorem.words(20)} />
      <SpecialtiesSection />
    </HomeStyles.Container>
  </VerticalBar>
)

export default Home;