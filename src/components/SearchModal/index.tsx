import React, { FC, memo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated, ScrollView, TouchableOpacity } from 'react-native';
import GlobalButton from '../GlobalButton';
import useModalAnimation from './hooks/useModalAnimation';
import MSS from './styles';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../metadata/types';
import { SpecialtyMetadata } from '../../redux/reducers/Specialty/metadata';
import Item from './Item';
import useNavigateToFilterScreen from '../../hooks/useNavigateToFilterScreen';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config';

interface IProps {
  onClose?() : void;
}

const ModalSearch : FC<IProps> = ({ onClose }) => {
  const { navigate  } = useNavigation();
  const styles = useModalAnimation();
  const hookNavigate = useNavigateToFilterScreen();

  const state = useSelector<ReduxRootState, SpecialtyMetadata.IStore>(({ specialties }) => specialties,shallowEqual);
  
  const NavigateToMapScreen = async () => {
    await navigate('search-map');
    onClose!();
  }

  const NavigateToFilterScreen = async (id : number) => {
    await hookNavigate(id);
    onClose!();
  }

  return <MSS.Container as={Animated.View} style={styles} >
    <MSS.TitleContainer>
      <MSS.TitleText>Nuestras</MSS.TitleText>
      <MSS.TitleText>Especialidades</MSS.TitleText>
    </MSS.TitleContainer>
    <MSS.ListContent>
      <ScrollView>
        {
          state.list.map((v,i) => (
            <Item 
              key={i}
              text={v.name}
              onPress={() => NavigateToFilterScreen(v.id)} 
            />
          ))
        } 
      </ScrollView>
    </MSS.ListContent>
    <MSS.ButtonContainer>
      <GlobalButton text='Ver a los mas Cercanos' onPress={NavigateToMapScreen} />
    </MSS.ButtonContainer>
    <MSS.IconClose onPress={onClose} as={TouchableOpacity}>
      <MaterialCommunityIcons name="close-circle-outline" size={32} color={colors.main} />
    </MSS.IconClose>
  </MSS.Container>
}

export default memo(ModalSearch);