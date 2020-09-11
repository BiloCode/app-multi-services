import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Router = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='login' component={Login} />
  </Stack.Navigator>
}

export default Router;