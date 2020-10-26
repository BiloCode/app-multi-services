import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Styled from './styles';

import ProfileImage from './ProfileImage';
import Description from '../Global/Description';
import GlobalButton from '../../../../components/GlobalButton';
import useWorkerProfileInit from '../../hooks/useWorkerProfileInit';
import BaseStructure from '../Global/BaseStructure';

const WorkerProfile = () => {
  const { fullName, description, basePrice, profileImage, specialty, puntuaction, availability, BackToScreen } = useWorkerProfileInit();

  return <BaseStructure>
    <ProfileImage
      availability={availability}
      image={profileImage} 
      stars={puntuaction}
      name={fullName}
    />
    <Styled.ContainerText>
      <Styled.WorkInformation>
        <Styled.SpecialtyContainer>
          <MaterialIcons name="work" size={20} color="black" />
          <Styled.Specialty>{specialty}</Styled.Specialty>
        </Styled.SpecialtyContainer>
        <Styled.Price>S/ {basePrice}</Styled.Price>
      </Styled.WorkInformation>
      <Description description={description} />
      <Styled.ContainerButton>
        <GlobalButton text='Ver Trabajos' onPress={BackToScreen} />
      </Styled.ContainerButton>
    </Styled.ContainerText>
  </BaseStructure>
};

export default WorkerProfile;