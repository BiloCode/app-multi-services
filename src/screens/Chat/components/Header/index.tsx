import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as HS from './styles';

import AvatarImage from '../../../../components/AvatarImage';
import useHeaderInit from './hooks/useHeaderInit';

const Header = () => {
  const { fullName , profileImage, basePrice , specialty , GoToBackScreen , userAuthenticationState } = useHeaderInit();

  return <>
    <HS.Container>
      <HS.IconArea as={TouchableOpacity} onPress={GoToBackScreen} >
        <AntDesign name="back" size={24} color="#fff" />
      </HS.IconArea>
      <HS.WorkerInformationArea>
        <HS.WorkerFullName>{fullName}</HS.WorkerFullName>
        <AvatarImage size={36} iconSize={24} image={profileImage} />
      </HS.WorkerInformationArea>
    </HS.Container>
    {
      userAuthenticationState === 'authentication-user' && (
        <HS.WorkContainer>
          <HS.ExtraInformation>
            <HS.WorkName>{specialty}</HS.WorkName>
            <HS.Price>S/ {basePrice}</HS.Price>        
          </HS.ExtraInformation>
        </HS.WorkContainer>
      )
    } 
  </>
}

export default memo(Header);