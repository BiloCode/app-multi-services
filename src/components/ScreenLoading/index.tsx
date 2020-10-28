import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../config';
import { ScreenViewContainer } from './styles';

const ScreenLoading = () => {
  return <ScreenViewContainer>
    <ActivityIndicator size={60} color={colors.main} />
  </ScreenViewContainer>
}

export default ScreenLoading;