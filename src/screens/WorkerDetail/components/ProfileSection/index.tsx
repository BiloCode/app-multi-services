import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PSS from './styles';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  fullName : string;
  availability : string;
  profileImage : string;
}

const ProfileSection : FC<IProps> = ({ availability , fullName , profileImage }) => {
  const { goBack } = useNavigation();

  const NavigateGoBack = () => goBack();

  return <PSS.MainContainer>
    <PSS.Image source={{ uri : 'https://i.blogs.es/079f1b/looney-tunes-cartoons-bugs-bunny-and-elmer-fudd/1366_2000.jpeg' }} />  
    <PSS.FloatingContent>
      <PSS.ImageProfileContainer>
        <PSS.ImageProfile source={{ uri : profileImage  }} />
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