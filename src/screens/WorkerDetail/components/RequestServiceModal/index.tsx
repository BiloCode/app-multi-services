import React, { FC, memo } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './styles';

import DarkScreenFromModal from '../../../../components/DarkScreenFromModal';
import GlobalButton from '../../../../components/GlobalButton';
import useRequestServices from '../../hooks/useRequestServices';
import TextBox from './TextBox';
import { colors } from '../../../../config';

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
    <Styled.Container>
      <Styled.Title>Solicitar Servicio</Styled.Title>
      <TextBox
        title='Motivo de la Solicitud'
        iconName='menuunfold' 
        inputConfig={{
          onChangeText : ChangeTitle,
          placeholder : 'Escribe aqui...'
        }} 
      />
      <TextBox
        title='Descripcion'
        iconName='filetext1' 
        inputConfig={{
          onChangeText : ChangeDescription,
          placeholder : 'Escribe aqui...'
        }} 
      />
      <TextBox
        title='Precio Inicial / Base'
        iconName='bank'
        inputLeftText='S/'
        inputRightText='Soles peruanos'
        inputConfig={{
          onChangeText : ChangePrice,
          type : 'numeric',
          defaultValue : String(basePrice)
        }} 
      />
      <Styled.ButtonContainer marginTop={35} >
        <GlobalButton text='Enviar Solicitud' onPress={SendRequest} />  
        <Styled.ButtonContainer marginTop={5}>
          <GlobalButton 
            text='Cancelar Operacion'
            backgroundColor='rgb(245,245,245)'
            textColor={colors.main}
            onPress={setClose}
          />
        </Styled.ButtonContainer>
      </Styled.ButtonContainer>
    </Styled.Container>
  </DarkScreenFromModal>
}

export default memo(RequestServiceModal);