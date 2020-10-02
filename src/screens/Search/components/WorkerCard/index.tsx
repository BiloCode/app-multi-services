import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useStarAmount from '../../../../hooks/useStarAmount';
import SmallButton from '../SmallButton';
import WCS from './styles';
import { useNavigation } from '@react-navigation/native';
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';
import { useDispatch } from 'react-redux';
import { setWorkerDetailData } from '../../../../redux/reducers/Worker/actions/sync';

interface IProps {
  data : WorkerMetadata.IWorker
}

const WorkerCard : FC<IProps> = ({ data }) => {
  const { user : { name , lastname , profileImage } , specialty } = data;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const stars = useStarAmount(5);

  const navigateToInformation = () => {
    dispatch(setWorkerDetailData(data));
    navigation.navigate('worker-detail');
  }
  
  return <WCS.Container>
    <WCS.ImageProfileContainer>
      <WCS.ImageProfile source={{ uri : profileImage ? profileImage : 'https://s5.postimg.cc/537jajaxj/default.png' }} />  
    </WCS.ImageProfileContainer>
    <WCS.InformationContainer>
      <WCS.WorkerName>{`${name} ${lastname}`}</WCS.WorkerName>
      <WCS.Specialty>{specialty.name}</WCS.Specialty>
      <WCS.StarContainer>
        { stars.map((v,i) => <AntDesign key={i} name={v.name} size={9} color="#1858D4" />) }
      </WCS.StarContainer>
    </WCS.InformationContainer>
    <SmallButton onPress={navigateToInformation} text='Ver informacion' />
  </WCS.Container>
}

export default memo(WorkerCard);