import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalButton from '../../components/GlobalButton';
import TopDesign from './components/TopDesign';
import useProfileInformation from './hooks/useProfileInformation';
import PS from './styles';

const Profile = () => {
  const { profileImage , createdAt , description , fullName , location } = useProfileInformation();

  return <PS.Container>
    <ScrollView>
      <TopDesign profileImage={profileImage} />
      <PS.UserInformation>
        <PS.UserFullName>{fullName}</PS.UserFullName>
        <PS.UserSpecialty>Usuario de la App</PS.UserSpecialty>
      </PS.UserInformation>  
      <PS.UserDescription>{description}</PS.UserDescription>    
      <PS.UserLocation>{location}</PS.UserLocation>
      <PS.ButtonContainer>
        <GlobalButton onPress={() => alert('En construccion...')} text='Editar Informacion' />
      </PS.ButtonContainer>
      <PS.UserDate>{createdAt}</PS.UserDate>
    </ScrollView>
  </PS.Container>
}

export default Profile;