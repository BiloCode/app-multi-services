import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PSS from './styles';
import { useNavigation } from '@react-navigation/native';
import AvatarImage from '../../../../components/AvatarImage';

interface IProps {
  fullName : string;
  availability : string;
  profileImage? : string;
  backgroundImage : string;
}

const ProfileSection : FC<IProps> = ({ availability , fullName , profileImage , backgroundImage }) => {
  const { goBack } = useNavigation();

  const NavigateGoBack = () => goBack();

  return <PSS.MainContainer>
    <PSS.Image source={{ uri : backgroundImage }} />  
    <PSS.FloatingContent>
      <PSS.ImageProfileContainer>
        <AvatarImage iconSize={44} size={90} image={profileImage} />
      </PSS.ImageProfileContainer>
      <PSS.WorkerName>{fullName}</PSS.WorkerName>
      <PSS.WorkerState>{`(${availability})`}</PSS.WorkerState>
    </PSS.FloatingContent>
    <PSS.FloatingIcon onPress={NavigateGoBack} as={TouchableOpacity}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </PSS.FloatingIcon>
  </PSS.MainContainer>
}

export default memo(ProfileSection);