import React from 'react';
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
  const { SendData , ChangeContent , ChangeTitle } = useSendData(itemSelected,id);

  return <FormContainer>
    <Input.Text 
      label='Titulo'
      placeholder='Escribe algo...'
      onChangeText={ChangeTitle}
    />
    <Input.TextArea 
      label='Contenido'
      placeholder='Escribe algo...' 
      onChangeText={ChangeContent}
    />      
    <Input.Select 
      label='Especialidades'
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
      <GlobalButton text='Enviar Solicitud' onPress={SendData} />  
    </ButtonContainer>        
  </FormContainer>
}

export default Form;