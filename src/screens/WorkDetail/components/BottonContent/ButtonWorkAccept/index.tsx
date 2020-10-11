import React from 'react';
import * as BWA from './styles';
import GlobalButton from '../../../../../components/GlobalButton';
import useWorkAccept from '../../../hooks/useWorkAccept';

const ButtonWorkAccept = () => {
  const WorkAccept = useWorkAccept();

  return <BWA.Container>
    <GlobalButton text='Aceptar Trabajo' onPress={WorkAccept} />            
  </BWA.Container>
}

export default ButtonWorkAccept;