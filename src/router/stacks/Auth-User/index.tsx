import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';

const Stack = createStackNavigator();

const AuthUser = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='home' component={Home} />
  </Stack.Navigator>
}

export default AuthUser;