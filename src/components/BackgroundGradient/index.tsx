import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { colors } from '../../config';

const { height } = Dimensions.get('screen');

const BackgroundGradient = () => (
  <LinearGradient
    colors={[colors.main, colors.mainSmoothed , colors.mainSmoothed]}
    style={{
      width: '100%',
      position: 'absolute',
      top : 0,
      left: 0,
      right: 0,
      height  
    }}
  />
);

export default BackgroundGradient;