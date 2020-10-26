import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useChangeDescription from '../../../hooks/useChangeDescription';
import * as Styled from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';

interface IProps {
  description : string;
}

const Description : FC<IProps> = ({ description }) => {
  const { descriptionText , ActivateInputDescription , ChangeDescription , inputEnabled } = useChangeDescription(description);

  return <Styled.Container>
    <KeyboardAvoidingView>
      <Styled.Input
        value={descriptionText}
        editable={inputEnabled}
        placeholder='Sin Descripcion disponible...'
        placeholderTextColor='rgb(180,180,180)'
        onChangeText={ChangeDescription}
        multiline={true}
        numberOfLines={5}
      />
      <Styled.TextContainer as={TouchableOpacity} onPress={ActivateInputDescription}>
        <Styled.EditIconContainer>
          <AntDesign name={!inputEnabled ? 'edit' : 'save'} size={13} color="blue" />
        </Styled.EditIconContainer>
        <Styled.Message>{!inputEnabled ? 'Editar Descripción' : 'Guardar Descripcion'}</Styled.Message>
      </Styled.TextContainer>      
    </KeyboardAvoidingView>
  </Styled.Container>
}

export default memo(Description);