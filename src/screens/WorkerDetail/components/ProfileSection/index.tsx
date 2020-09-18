import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PSS from './styles';
import { useNavigation } from '@react-navigation/native';

const ProfileSection = () => {
  const { goBack } = useNavigation();

  const NavigateGoBack = () => goBack();

  return <PSS.MainContainer>
    <PSS.Image source={{ uri : 'https://i.blogs.es/079f1b/looney-tunes-cartoons-bugs-bunny-and-elmer-fudd/1366_2000.jpeg' }} />  
    <PSS.FloatingContent>
      <PSS.ImageProfileContainer>
        <PSS.ImageProfile source={{ uri : 'https://polvora.com.mx/wp-content/uploads/2020/07/Bugs-bunny-80-10.jpg'  }} />
      </PSS.ImageProfileContainer>
      <PSS.WorkerName>Billy Paredes Aycho</PSS.WorkerName>
      <PSS.WorkerState>(Desocupado)</PSS.WorkerState>
    </PSS.FloatingContent>
    <PSS.FloatingIcon onPress={NavigateGoBack} as={TouchableOpacity}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </PSS.FloatingIcon>
  </PSS.MainContainer>
}

export default memo(ProfileSection);