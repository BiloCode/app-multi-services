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

interface IProps {
  onClose?() : void;
}

const ModalSearch : FC<IProps> = ({ onClose }) => {
  const state = useSelector<ReduxRootState, SpecialtyMetadata.IStore>(({ specialties }) => specialties,shallowEqual);
  const styles = useModalAnimation();

  return <MSS.Container as={Animated.View} style={styles} >
    <MSS.TitleContainer>
      <MSS.TitleText>Nuestras</MSS.TitleText>
      <MSS.TitleText>Especialidades</MSS.TitleText>
    </MSS.TitleContainer>
    <MSS.ListContent>
      <ScrollView>
        {
          state.list.map((v,i) => (
            <Item key={i} text={v.name} onPress={() => alert('En construccion...')} />
          ))
        } 
      </ScrollView>
    </MSS.ListContent>
    <MSS.ButtonContainer>
      <GlobalButton text='Ver a los mas Cercanos' onPress={() => alert('En construccion...')} />
    </MSS.ButtonContainer>
    <MSS.IconClose onPress={onClose} as={TouchableOpacity}>
      <MaterialCommunityIcons name="close-circle-outline" size={32} color="#1858D4" />
    </MSS.IconClose>
  </MSS.Container>
}

export default memo(ModalSearch);