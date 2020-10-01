import React, { FC } from 'react';
import * as ITS from './styles';
import { AntDesign } from '@expo/vector-icons';
import BaseHeaderComponent from '../BaseHeaderComponent';
import { NSHeaderNavigation } from '../../namespace';

const InputSearch : FC<NSHeaderNavigation.IPropsInputSearch> = () => (
  <BaseHeaderComponent>
    <ITS.Container>
      <ITS.ContainerIcon>
        <AntDesign name="search1" size={19} color="#fff" />
      </ITS.ContainerIcon>
      <ITS.Input placeholder='Busca a un trabajador...' />      
    </ITS.Container>
  </BaseHeaderComponent>
);

export default InputSearch;