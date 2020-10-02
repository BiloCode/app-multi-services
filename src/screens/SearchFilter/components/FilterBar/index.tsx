import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as FBS from './styles';
import { TouchableOpacity } from 'react-native';

const FilterBar = () => (
  <FBS.Container>
    <FBS.IconContainer>
      <TouchableOpacity>
        <AntDesign name="filter" size={16} color="#fff" />
      </TouchableOpacity>
    </FBS.IconContainer>
    <FBS.TextContainer>
      <FBS.Title>Aplicar Filtro</FBS.Title>
    </FBS.TextContainer>
  </FBS.Container>
);

export default FilterBar;