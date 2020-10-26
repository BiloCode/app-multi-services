import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AvatarImage from '../../../../../../components/AvatarImage';
import useChangeProfileImage from '../../../../hooks/useChangeProfileImage';
import * as Styled from './styles';

interface IProps {
  image : string;
  size : number;
}

const Image : FC<IProps> = ({ size , image }) => {
  const { profileImage , ChangeProfileImage , editImageEnabled } = useChangeProfileImage(image);

  return <Styled.Container size={size}>
    <AvatarImage image={profileImage} size={120} iconSize={60} />
    <Styled.EditIconContainer as={TouchableOpacity} onPress={ChangeProfileImage}>
      <AntDesign name={!editImageEnabled ? 'edit' : 'save'} size={16} color="#fff" />
    </Styled.EditIconContainer>      
  </Styled.Container>
}

export default memo(Image);