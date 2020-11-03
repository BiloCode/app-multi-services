import React from 'react';

import * as Styled from './styles';

import ProfileImage from './ProfileImage';
import Description from '../Global/Description';
import GlobalButton from '../../../../components/GlobalButton';
import useWorkerProfileInit from '../../hooks/useWorkerProfileInit';
import BaseStructure from '../Global/BaseStructure';
import BoxInformation from '../Global/BoxInformation';
import WorkInformation from './WorkInformation';

const WorkerProfile = () => {
  const { 
    fullName,
    description,
    basePrice, 
    profileImage, 
    specialty,
    createdAt,
    location,
    puntuaction,
    availability,
    BackToScreen 
  } = useWorkerProfileInit();

  return <BaseStructure>
    <ProfileImage
      availability={availability}
      image={profileImage} 
      stars={puntuaction}
      name={fullName}
    />
    <Styled.ContainerText>
      <BoxInformation title='Especialidad' ADIconName='user' value={specialty} />
      <BoxInformation title='Precio Base / Inicial' ADIconName='bank' value={'S/' + basePrice} />
      <BoxInformation title='Ubicacion' ADIconName='enviromento' value={location} />
      <BoxInformation title='Fecha de Creación' ADIconName='calendar' value={createdAt} />
      {/* <WorkInformation price={basePrice} specialty={specialty} /> */}
      <Description description={description} />
      <Styled.ContainerButton>
        <GlobalButton text='Ver Trabajos' onPress={BackToScreen} />
      </Styled.ContainerButton>
    </Styled.ContainerText>
  </BaseStructure>
};

export default WorkerProfile;