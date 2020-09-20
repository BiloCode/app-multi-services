import React, { FC, memo } from 'react'
import { AntDesign } from '@expo/vector-icons';
import TD from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  profileImage : string;
}

const TopDesign : FC<IProps> = ({ profileImage }) => {
  const { goBack } = useNavigation();
  const NavigateToBack = () => goBack();

  return <TD.TopDesignContainer>
    <TD.TopCircleLeft />
    <TD.TopCircleRight />
    <TD.FloatingContent>
      <TD.ScreenInformation>
        <TouchableOpacity onPress={NavigateToBack}>
          <AntDesign name='arrowleft' size={24} color='#fff' />
        </TouchableOpacity>
        <TD.ScreenTitle>Mi Perfil</TD.ScreenTitle>
      </TD.ScreenInformation>
      <TD.ProfileImageContainer>
        <TD.ProfileImage source={{ uri : profileImage }} />
      </TD.ProfileImageContainer>
    </TD.FloatingContent>
  </TD.TopDesignContainer>
}

export default memo(TopDesign);