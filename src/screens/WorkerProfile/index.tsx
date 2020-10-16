import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as WPS from './styles';
import { useNavigation } from '@react-navigation/native';

import GlobalButton from '../../components/GlobalButton';
import HeaderNavigation from '../../components/HeaderNavigation';
import WorkerDescription from './components/WorkerDescription';
import WorkerProfileImage from './components/WorkerProfileImage';
import useWorkerInit from './hooks/useWorkerInit';

const WorkerProfile = () => {
  const { goBack } = useNavigation();
  const { fullName , description , basePrice , profileImage , specialty , stars , availability } = useWorkerInit();

  return <WPS.Container>
    <WPS.HeaderContainer>
      <HeaderNavigation.Title title='Mi Perfil' />
    </WPS.HeaderContainer>
    <WPS.ProfileInformationContainer>
      <WorkerProfileImage
        availability={availability}
        image={profileImage} 
        stars={stars}
        name={fullName}
      />
      <WPS.ContainerText>
        <WPS.WorkInformation>
          <WPS.SpecialtyContainer>
            <MaterialIcons name="work" size={20} color="black" />
            <WPS.Specialty>{specialty}</WPS.Specialty>
          </WPS.SpecialtyContainer>
          <WPS.Price>S/ {basePrice}</WPS.Price>
        </WPS.WorkInformation>
        <WorkerDescription description={description} />
        <WPS.ContainerButton>
          <GlobalButton text='Ver Trabajos' onPress={() => goBack()} />
        </WPS.ContainerButton>
      </WPS.ContainerText>
    </WPS.ProfileInformationContainer>
  </WPS.Container>
};

export default WorkerProfile;