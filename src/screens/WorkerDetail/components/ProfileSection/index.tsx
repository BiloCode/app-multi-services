import React, { FC, memo } from 'react';
import Styled from './styles';
import AvatarImage from '../../../../components/AvatarImage';
import { WorkerState } from '../../../../metadata/types';

interface IProps {
  fullName : string;
  availability : WorkerState;
  profileImage? : string;
}

const ProfileSection : FC<IProps> = ({ availability , fullName , profileImage }) => (
  <Styled.MainContainer>
    <Styled.FloatingContent>
      <Styled.ImageProfileContainer>
        <AvatarImage iconSize={50} size={110} image={profileImage} />
      </Styled.ImageProfileContainer>
      <Styled.WorkerName>{fullName}</Styled.WorkerName>
      <Styled.WorkerState>{`(${availability === 'available' ? 'Disponible' : 'No Disponible'})`}</Styled.WorkerState>
    </Styled.FloatingContent>
  </Styled.MainContainer>
)

export default memo(ProfileSection);