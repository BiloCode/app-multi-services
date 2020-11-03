import React, { memo } from 'react';
import { Picker } from 'react-native'
import { shallowEqual, useSelector } from 'react-redux';
import GlobalButton from '../../../../components/GlobalButton';
import { ReduxRootState } from '../../../../metadata/types';
import useSelectAction from '../../hooks/useSelectAction';
import useSendData from '../../hooks/useSendData';
import Input from '../Input';
import { ButtonContainer, FormContainer } from './styles';

const Form = () => {
  const { userInformation : { id } } = useSelector<ReduxRootState,any>(({ user }) => user, shallowEqual);
  const { itemSelected , list , onChangeValue } = useSelectAction();
  const { SendData , ChangeContent , ChangeTitle , isSend , ChangeEmail , ChangePhoneNumber } = useSendData(itemSelected,id);

  return <FormContainer>
    <Input.Text 
      label='Razon / Asunto'
      placeholder='Escribe algo...'
      onChangeText={ChangeTitle}
      maxLength={60}
    />
    <Input.TextArea 
      label='Descripción'
      placeholder='Escribe algo...' 
      onChangeText={ChangeContent}
      maxLength={200}
    />
    <Input.Text
      label='Correo Electronico'
      placeholder='Escribe tu correo...'
      onChangeText={ChangeEmail}
      maxLength={100}
    />
    <Input.Text
      label='Celular'
      placeholder='Escribe tu numero...'
      type='numeric'
      onChangeText={ChangePhoneNumber}
      maxLength={9}
    />
    <Input.Select 
      label='¿Que especialidad desempeñas?'
      itemSelected={itemSelected}
      onChange={onChangeValue}
    >
      {
        list.map((v,i) => (
          <Picker.Item key={i} label={v.name} value={v.id} />
        ))
      }
    </Input.Select>
    <ButtonContainer>
      <GlobalButton text='Enviar Solicitud' onPress={SendData} isLoading={isSend} />  
    </ButtonContainer>        
  </FormContainer>
}

export default memo(Form);