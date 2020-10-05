import React, { FC, memo } from 'react';
import * as GWCS from './styles';

import ButtonWorkerCard from './components/ButtonWorkerCard';
import AvatarImage from '../AvatarImage';
import StarList from './components/StarList';
import { WorkerMetadata } from '../../redux/reducers/Worker/metadata';
import useGlobalWorkerCard from './hooks/useGlobalWorkerCard';

interface IProps {
  rounded? : boolean;
  workerData : WorkerMetadata.IWorker;
}

const GlobalWorkerCard : FC<IProps> = ({ rounded , workerData }) => {
  const { 
    basePrice,
    profileImage,
    description,
    specialty,
    stars,
    username,
    NavigateToWorkerDetail,
    NavigateToChat
  } = useGlobalWorkerCard(workerData);

  return <GWCS.Container rounded={rounded} >
    <GWCS.UserMainInformation>
      <GWCS.UserProfileImage>
        <AvatarImage image={profileImage} size={60} />
      </GWCS.UserProfileImage>
      <GWCS.UserName>
        <GWCS.UserNameText>{username}</GWCS.UserNameText>
      </GWCS.UserName>
      <GWCS.UserPuntuaction>
        <StarList stars={stars} />
      </GWCS.UserPuntuaction>
    </GWCS.UserMainInformation>
    <GWCS.UserWorkInformation>
      <GWCS.UserPriceAndWork>
        <GWCS.UserWork>{specialty}</GWCS.UserWork>
        <GWCS.UserPrice>S/{basePrice}</GWCS.UserPrice>
      </GWCS.UserPriceAndWork>
      <GWCS.UserDescription>{description}</GWCS.UserDescription>
    </GWCS.UserWorkInformation>
    <GWCS.CardActions>
      <ButtonWorkerCard text='Ver mas' onPress={NavigateToWorkerDetail} />
      <ButtonWorkerCard text='Enviar mensaje' onPress={NavigateToChat} />
    </GWCS.CardActions>
  </GWCS.Container>
};

export default memo(GlobalWorkerCard);