import React, { FC, memo } from 'react';
import * as WPIS from './styles';

//Hooks
import useStarAmount from '../../../../hooks/useStarAmount';
import StarList from './components/StarList';
import Username from './components/Username';
import Image from './components/Image';

interface IProps {
  image : string;
  name : string;
  stars : number;
}

const WorkerProfileImage : FC<IProps> = ({ image , name , stars }) => {
  const imageSize = 120;
  const starsIcon = useStarAmount(stars || 0);

  return <WPIS.Container size={imageSize}>
    <Image size={imageSize} image={image} />
    <WPIS.ContainerInformation>
      <Username name={name} />
      <StarList stars={starsIcon} />
    </WPIS.ContainerInformation>
  </WPIS.Container>
};

export default memo(WorkerProfileImage);