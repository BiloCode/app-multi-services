import React from 'react';
import * as Styled from './styles';
import GlobalButton from '../../../../../components/GlobalButton';
import useWorkAccept from '../../../hooks/useWorkAccept';
import useWorkReject from '../../../hooks/useWorkReject';
import { colors } from '../../../../../config';

const ButtonWorkAccept = () => {
  const WorkAccept = useWorkAccept();
  const WorkReject = useWorkReject();

  return <Styled.Container>
    <GlobalButton text='Aceptar Trabajo' onPress={WorkAccept} />
    <Styled.ButtonContainer>
      <GlobalButton 
        backgroundColor='#f1f1f1' 
        textColor={colors.main}
        text='Rechazar Trabajo'
        onPress={WorkReject} 
      />
    </Styled.ButtonContainer>
  </Styled.Container>
}

export default ButtonWorkAccept;