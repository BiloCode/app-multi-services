import React from 'react';
import * as Styled from './styles';
import useUserProfileInit from '../../hooks/useUserProfileInit';
import BaseStructure from '../Global/BaseStructure';
import Description from '../Global/Description';
import ProfileImage from './ProfileImage';
import BoxInformation from '../Global/BoxInformation';
import GlobalButton from '../../../../components/GlobalButton';
import useCloseSession from '../../../../hooks/useCloseSession';

const UserProfile = () => {
  const CloseSession = useCloseSession();
  const { profileImage , fullName , description , createdAt, location } = useUserProfileInit();

  return <BaseStructure>
    <ProfileImage image={profileImage!} name={fullName!} />
    <Styled.ContainerCenter>
      <BoxInformation title='Fecha de Creacion' ADIconName='calendar' value={createdAt} />
      <BoxInformation title='Ubicacion' ADIconName='enviromento' value={location} />
      <Description description={description!}  />
      <Styled.ButtonContainer>
        <GlobalButton text='Cerrar Sesión' onPress={CloseSession} />
      </Styled.ButtonContainer>
    </Styled.ContainerCenter>
  </BaseStructure>
}

export default UserProfile;