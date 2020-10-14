import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import SCS from './styles';

interface IProps {
  id : number;
  title : string;
  image : string;
}

const SpecialtyCard : FC<IProps> = ({ id , title , image }) => {
  const { navigate } = useNavigation();
  const NavigateToFilterScreen = (filterId : number) => {
    navigate('search-filter',{
      filter : filterId
    })
  }

  return <SCS.Container onPress={() => NavigateToFilterScreen(id)} as={TouchableOpacity}>
    <SCS.ImageContainer>
      <SCS.Image source={{ uri : image }} resizeMode='contain' />
    </SCS.ImageContainer>
    <SCS.TitleContainer>
      <SCS.Title>{title}</SCS.Title>
    </SCS.TitleContainer>
  </SCS.Container>
}

export default SpecialtyCard;