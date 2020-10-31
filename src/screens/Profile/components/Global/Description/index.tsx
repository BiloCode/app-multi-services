import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useChangeDescription from '../../../hooks/useChangeDescription';
import * as Styled from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { colors } from '../../../../../config';

interface IProps {
  description : string;
}

const Description : FC<IProps> = ({ description }) => {
  const { descriptionText , ActivateInputDescription , ChangeDescription , inputEnabled } = useChangeDescription(description);

  return <Styled.Container>
    <Styled.DescriptionContainer>
      <AntDesign name="filetext1" size={17} color={colors.main} />
      <Styled.Label>Mi Descripción</Styled.Label>
    </Styled.DescriptionContainer>
    <Styled.Input
      value={descriptionText}
      editable={inputEnabled}
      placeholder='Sin Descripcion disponible...'
      placeholderTextColor='rgb(180,180,180)'
      onChangeText={ChangeDescription}
      multiline={true}
      numberOfLines={4}
    />
    <Styled.TextContainer as={TouchableOpacity} onPress={ActivateInputDescription}>
      <Styled.EditIconContainer>
        <AntDesign name={!inputEnabled ? 'edit' : 'save'} size={11} color={colors.mainSmoothed} />
      </Styled.EditIconContainer>
      <Styled.Message>{!inputEnabled ? 'Editar Descripción' : 'Guardar Descripcion'}</Styled.Message>
    </Styled.TextContainer> 
  </Styled.Container>
}

export default memo(Description);