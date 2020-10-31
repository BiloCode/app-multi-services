import React, { FC, memo } from 'react';
import Styled from './styles';
import { useNavigation } from '@react-navigation/native';
import AvatarImage from '../../../../components/AvatarImage';

interface IProps {
  fullName : string;
  availability : string;
  profileImage? : string;
}

const ProfileSection : FC<IProps> = ({ availability , fullName , profileImage }) => (
  <Styled.MainContainer>
    <Styled.FloatingContent>
      <Styled.ImageProfileContainer>
        <AvatarImage iconSize={50} size={110} image={profileImage} />
      </Styled.ImageProfileContainer>
      <Styled.WorkerName>{fullName}</Styled.WorkerName>
      <Styled.WorkerState>{`(${availability})`}</Styled.WorkerState>
    </Styled.FloatingContent>
  </Styled.MainContainer>
)

export default memo(ProfileSection);