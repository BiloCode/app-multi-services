import React, { FC } from 'react';
import * as Styled from './styles';
import { NSHeaderNavigation } from '../../namespace';
import BaseHeaderComponent from '../BaseHeaderComponent';
import AvatarImage from '../../../AvatarImage';

const UserData : FC<NSHeaderNavigation.IPropsUserData> = ({ fullName , profileImage }) => (
  <BaseHeaderComponent>
    <Styled.ContainerData>
      <Styled.FullName>{fullName}</Styled.FullName>
      <Styled.ContainerImage>
        <AvatarImage size={32} iconSize={16} image={profileImage} />
      </Styled.ContainerImage>
    </Styled.ContainerData>
  </BaseHeaderComponent>
);

export default UserData;