import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Contact from '../../../screens/Contact';
import useRouterUserInit from '../../hooks/useRouterUserInit';

const Stack = createStackNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator headerMode='none' initialRouteName='contact' >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='contact' component={Contact} />
  </Stack.Navigator>
}

export default AuthUser;