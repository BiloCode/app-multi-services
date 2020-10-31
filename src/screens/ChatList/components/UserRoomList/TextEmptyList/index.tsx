import React, { memo } from 'react';
import * as Styled from './styles';

const TextEmptyList = () => (
  <Styled.ContainerTextEmptyList>
    <Styled.TextEmptyList>Usted aun no ha iniciado una conversacion.</Styled.TextEmptyList>
  </Styled.ContainerTextEmptyList>
);

export default memo(TextEmptyList);