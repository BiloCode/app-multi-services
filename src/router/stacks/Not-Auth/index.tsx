import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Login from '../../../screens/Login';
import Register from '../../../screens/Register';

const Stack = createStackNavigator();

const NotAuth = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='login' component={Login} />
    <Stack.Screen name='register' component={Register} />
  </Stack.Navigator>
}

export default NotAuth;