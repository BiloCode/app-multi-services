import React from 'react';
import faker from 'faker'
import * as WPS from './styles';
import { useNavigation } from '@react-navigation/native';

import GlobalButton from '../../components/GlobalButton';
import HeaderNavigation from '../../components/HeaderNavigation';
import WorkerDescription from './components/WorkerDescription';
import WorkerProfileImage from './components/WorkerProfileImage';

const WorkerProfile = () => {
  const { navigate } = useNavigation();

  return <WPS.Container>
    <WPS.HeaderContainer>
      <HeaderNavigation.Title title='Mi Perfil' />
    </WPS.HeaderContainer>
    <WPS.ProfileInformationContainer>
      <WorkerProfileImage image='' stars={5} name='Billy Paredes Aycho' />
      <WPS.ContainerText>
        <WPS.WorkInformation>
          <WPS.Specialty>Desarrollo Web</WPS.Specialty>
          <WPS.Price>S/ 16.00</WPS.Price>
        </WPS.WorkInformation>
        <WorkerDescription description={faker.lorem.words(50)} />
        <WPS.ContainerButton>
          <GlobalButton text='Ver Trabajos' onPress={() => navigate('worker-work-list')} />
        </WPS.ContainerButton>
      </WPS.ContainerText>
    </WPS.ProfileInformationContainer>
  </WPS.Container>
};

export default WorkerProfile;