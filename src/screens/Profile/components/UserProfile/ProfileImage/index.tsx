import React, { FC } from 'react';
import ProfileImageStructure from '../../Global/ProfileImageStructure';

interface IProps {
  image : string;
  name : string;
}

const ProfileImage : FC<IProps> = ({ image , name }) => (
  <ProfileImageStructure image={image} name={name} >
  </ProfileImageStructure>
);

export default ProfileImage;