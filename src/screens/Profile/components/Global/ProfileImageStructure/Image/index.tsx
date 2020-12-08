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
  const { ChangeProfileImage , editImageEnabled } = useChangeProfileImage();

  return <Styled.Container size={size}>
    <AvatarImage image={image} size={120} iconSize={60} />
    <Styled.EditIconContainer as={TouchableOpacity} onPress={ChangeProfileImage}>
      <AntDesign name={!editImageEnabled ? 'picture' : 'save'} size={16} color="#fff" />
    </Styled.EditIconContainer>      
  </Styled.Container>
}

export default memo(Image);