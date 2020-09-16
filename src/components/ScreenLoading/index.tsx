import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScreenViewContainer } from './styles';

const ScreenLoading = () => {
  return <ScreenViewContainer>
    <ActivityIndicator size={60} color='#1858D4' />
  </ScreenViewContainer>
}

export default ScreenLoading;