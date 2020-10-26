import React from 'react';
import useUserProfileInit from '../../hooks/useUserProfileInit';
import BaseStructure from '../Global/BaseStructure';
import Description from '../Global/Description';
import ProfileImage from './ProfileImage';

const UserProfile = () => {
  const { profileImage , fullName , description } = useUserProfileInit();

  return <BaseStructure>
    <ProfileImage image={profileImage!} name={fullName!} />
    <Description description={description!}  />
  </BaseStructure>
}

export default UserProfile;