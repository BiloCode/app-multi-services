import React, { FC } from 'react';
import AvatarImage from '../../../../../components/AvatarImage';
import * as WCS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WorkMetadata } from '../../../../../redux/reducers/Work/metadata';
import useIsWholeNumber from '../../../../../hooks/useIsWholeNumber';
import { useDispatch } from 'react-redux';
import { setWorkDetail } from '../../../../../redux/reducers/Work/actions/sync';

interface IProps {
  data : WorkMetadata.IWork
}

const WorkCard : FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { title , price , user : { profileImage } } = data;
  const isWholeNumber = useIsWholeNumber(price);

  const NavigateToWorkDetail = () => {
    dispatch(setWorkDetail(data));
    navigate('worker-work-detail');
  }

  return <WCS.Container>
    <WCS.AvatarContainer>
      <AvatarImage image={profileImage} size={36} iconSize={20} />
    </WCS.AvatarContainer>
    <WCS.WorkInformation>
      <WCS.WorkTitle>{title.length >= 20 ? title.substr(0,20) + '...' : title}</WCS.WorkTitle>
      <WCS.WorkPrice>S/ {isWholeNumber ? price + '.00' : price}</WCS.WorkPrice>
    </WCS.WorkInformation>
    <WCS.ActionGestureZone as={TouchableOpacity} onPress={NavigateToWorkDetail}>
      <AntDesign name="right" size={16} color="#fff" />
    </WCS.ActionGestureZone>
  </WCS.Container>
}

export default WorkCard;