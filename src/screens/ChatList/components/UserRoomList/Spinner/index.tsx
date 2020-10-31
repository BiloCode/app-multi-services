import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './styles';

const Spinner = () => (
  <Styled.SpinnerContainer>
    <ActivityIndicator color='#fff' />
  </Styled.SpinnerContainer>
)

export default memo(Spinner);