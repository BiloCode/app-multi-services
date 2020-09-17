import React from 'react';
import { Picker } from 'react-native'
import GlobalButton from '../../../../components/GlobalButton';
import useSelectAction from '../../hooks/useSelectAction';
import Input from '../Input';
import { ButtonContainer, FormContainer } from './styles';

const Form = () => {
  const { itemSelected , list , onChangeValue } = useSelectAction();

  return <FormContainer>
    <Input.Text 
      label='Titulo' 
      defaultValue='Solicitud de Trabajo' 
      placeholder='Escribe algo...' 
    />
    <Input.TextArea 
      label='Contenido'
      placeholder='Escribe algo...' 
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
      <GlobalButton text='Enviar Solicitud' />  
    </ButtonContainer>        
  </FormContainer>
}

export default Form;