import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import useRouterInit from './hooks/useRouterInit';
import ScreenLoading from '../components/ScreenLoading';

const Stack = createStackNavigator();

const Router = () => {
  const { isLoadingInformation , userAuthenticatioState } = useRouterInit();

  if(isLoadingInformation) return <ScreenLoading />

  return <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='login' component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Router;