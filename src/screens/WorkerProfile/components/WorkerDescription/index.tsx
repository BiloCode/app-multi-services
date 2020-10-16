import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import useChangeDescription from '../../hooks/useChangeDescription';
import * as WDS from './styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';

interface IProps {
  description : string;
}

const WorkerDescription : FC<IProps> = ({ description }) => {
  const { descriptionText , ActivateInputDescription , ChangeDescription , inputEnabled } = useChangeDescription(description);

  return <WDS.Container>
    <KeyboardAvoidingView>
      <WDS.Input
        value={descriptionText}
        editable={inputEnabled}
        placeholder='Sin Descripcion disponible...'
        placeholderTextColor='rgb(180,180,180)'
        onChangeText={ChangeDescription}
        multiline={true}
        numberOfLines={5}
      />
      <WDS.TextContainer as={TouchableOpacity} onPress={ActivateInputDescription}>
        <WDS.EditIconContainer>
          <AntDesign name={!inputEnabled ? 'edit' : 'save'} size={13} color="blue" />
        </WDS.EditIconContainer>
        <WDS.Message>{!inputEnabled ? 'Editar Descripción' : 'Guardar Descripcion'}</WDS.Message>
      </WDS.TextContainer>      
    </KeyboardAvoidingView>
  </WDS.Container>
}

export default memo(WorkerDescription);