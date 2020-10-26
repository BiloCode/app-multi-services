import React, { FC, memo } from 'react';

//Hooks
import useStarAmount from '../../../../../hooks/useStarAmount';
import StarList from './components/StarList';
import Availability from './components/Availability';
import { WorkerState } from '../../../../../metadata/types';
import ProfileImageStructure from '../../Global/ProfileImageStructure';

interface IProps {
  image : string;
  availability : WorkerState;
  name : string;
  stars : number;
}

const ProfileImage : FC<IProps> = ({ image , name , stars , availability }) => {
  const starsIcon = useStarAmount(stars);

  return <ProfileImageStructure image={image} name={name} >
    <Availability value={availability} />
    <StarList stars={starsIcon} />    
  </ProfileImageStructure>
};

export default memo(ProfileImage);