import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Styled from './styles';
import { colors } from '../../../config';

const TemporalMessage = () => (
  <Styled.Container>
    <Ionicons name="ios-build" size={42} color={colors.main} />
    <Styled.Message>En Construcción...</Styled.Message>
  </Styled.Container>
);

export default TemporalMessage;