import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScreenViewContainer } from './styles';

const ScreenLoading = () => {
  return <ScreenViewContainer>
    <ActivityIndicator size={60} />
  </ScreenViewContainer>
}

export default ScreenLoading;