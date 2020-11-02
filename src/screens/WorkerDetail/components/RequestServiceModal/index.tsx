import React, { FC, memo } from 'react';
import { MaterialCommunityIcons , MaterialIcons } from '@expo/vector-icons';
import GlobalInput from '../../../../components/GlobalInput';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as RSMS from './styles';

import DarkScreenFromModal from '../../../../components/DarkScreenFromModal';
import GlobalButton from '../../../../components/GlobalButton';
import useRequestServices from '../../hooks/useRequestServices';

interface IProps {
  basePrice : number;
  setClose() : void;
}

//currentPrice - description

const RequestServiceModal : FC<IProps> = ({ setClose , basePrice }) => {
  const { ChangeDescription , SendRequest , isLoading , ChangePrice , ChangeTitle } = useRequestServices(setClose, basePrice);

  if(isLoading) return <DarkScreenFromModal>
    <ActivityIndicator color='#fff' size={48} />
  </DarkScreenFromModal>

  return <DarkScreenFromModal>
    <RSMS.Container>
      <RSMS.Title>Solicitar Servicio</RSMS.Title>
      <GlobalInput
        placeholder='Motivo o Razon...'
        onChangeText={ChangeTitle}
        icon={<MaterialCommunityIcons name="format-title" size={24} color="black" />}
      />
      <GlobalInput
        icon={<MaterialIcons name="description" size={16} color="black" />}
        placeholder='Descripcion general...'
        onChangeText={ChangeDescription}
      />
      <GlobalInput 
        icon={<MaterialCommunityIcons name="currency-eur" size={16} color="black" />}
        placeholder='Precio a pagar...'
        onChangeText={ChangePrice}
        type='number-pad'
        defaultValue={String(basePrice)}
      />
      <RSMS.ButtonContainer>
        <GlobalButton text='Enviar Solicitud' onPress={SendRequest} />  
      </RSMS.ButtonContainer>
    </RSMS.Container>
    <RSMS.IconContainer>
      <TouchableOpacity onPress={setClose}>
        <FontAwesome name="times" size={32} color="#fff" />
      </TouchableOpacity>
    </RSMS.IconContainer>
  </DarkScreenFromModal>
}

export default memo(RequestServiceModal);