import React, { FC } from 'react';
import faker from 'faker';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../hooks/useStarAmount';
import * as GWCS from './styles';
import ButtonWorkerCard from './ButtonWorkerCard';

interface IProps {
  rounded? : boolean;
  puntuaction : number;
}

const GlobalWorkerCard : FC<IProps> = ({ rounded , puntuaction }) => {
  const stars = useStarAmount(puntuaction);

  return <GWCS.Container rounded={rounded} >
    <GWCS.UserMainInformation>
      <GWCS.UserProfileImage></GWCS.UserProfileImage>
      <GWCS.UserName>
        <GWCS.UserNameText>Billy Paredes Aycho</GWCS.UserNameText>
      </GWCS.UserName>
      <GWCS.UserPuntuaction>
        {stars.map((v,i) => <AntDesign key={i} size={12} name={v.name} color='orangered' />)}
      </GWCS.UserPuntuaction>
    </GWCS.UserMainInformation>
    <GWCS.UserWorkInformation>
      <GWCS.UserPriceAndWork>
        <GWCS.UserWork>Desarrollador de Software</GWCS.UserWork>
        <GWCS.UserPrice>S/15.00</GWCS.UserPrice>
      </GWCS.UserPriceAndWork>
      <GWCS.UserDescription>{faker.lorem.words(30)}</GWCS.UserDescription>
    </GWCS.UserWorkInformation>
    <GWCS.CardActions>
      <ButtonWorkerCard text='Ver mas' />
      <ButtonWorkerCard text='Enviar mensaje' />
    </GWCS.CardActions>
  </GWCS.Container>
};

export default GlobalWorkerCard;