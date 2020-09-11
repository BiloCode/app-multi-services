import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Login from '../../../screens/Login';

const Stack = createStackNavigator();

const NotAuth = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='login' component={Login} />
  </Stack.Navigator>
}

export default NotAuth;