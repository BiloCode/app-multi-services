import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../../../hooks/useStarAmount';
import SmallButton from '../SmallButton';
import * as WCS from './styles';
import { useNavigation } from '@react-navigation/native';
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';
import { useDispatch } from 'react-redux';
import { setWorkerDetailData } from '../../../../redux/reducers/Worker/actions/sync';
import { colors } from '../../../../config';

interface IProps {
  data : WorkerMetadata.IWorker
}

const WorkerCard : FC<IProps> = ({ data }) => {
  const { user : { fullName , profileImage } , specialty } = data;

  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const stars = useStarAmount(5);

  const navigateToInformation = () => {
    dispatch(setWorkerDetailData(data));
    navigate('worker-detail');
  }
  
  return <WCS.Container>
    <WCS.ImageProfileContainer>
      {
        profileImage ?
          <WCS.ImageProfile source={{ uri : profileImage}} /> :
          <WCS.Icon>
            <AntDesign name="user" size={40} color='black' />
          </WCS.Icon>
      }
    </WCS.ImageProfileContainer>
    <WCS.InformationContainer>
      <WCS.WorkerName>{fullName}</WCS.WorkerName>
      <WCS.Specialty>{specialty.name}</WCS.Specialty>
      <WCS.StarContainer>
        { stars.map((v,i) => <AntDesign key={i} name={v.name} size={9} color={colors.stars} />) }
      </WCS.StarContainer>
    </WCS.InformationContainer>
    <WCS.ButtonContainer>
      <SmallButton onPress={navigateToInformation} text='Ver informacion' />
    </WCS.ButtonContainer>
  </WCS.Container>
}

export default memo(WorkerCard);