import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

//Screens
import useRouterUserInit from '../../hooks/useRouterUserInit';
import WorkerDetail from '../../../screens/WorkerDetail';

import WorkerChat from '../../../screens/WorkerChat';
import SearchFilter from '../../../screens/SearchFilter';
import SearchMap from '../../../screens/SearchMap';
import DrawerNav from './DrawerNav';
import { NavigationContainer } from '@react-navigation/native';
import VerticalBar from '../../../components/VerticalBar';

const Stack = createDrawerNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator initialRouteName='home' >
    <Stack.Screen name='home' component={DrawerNav} options={{ gestureEnabled : false }} />
    <Stack.Screen name='worker-detail' component={WorkerDetail} />
    <Stack.Screen name='worker-chat' component={WorkerChat} />
    <Stack.Screen name='search-filter' component={SearchFilter} />
    <Stack.Screen name='search-map' component={SearchMap} />  
  </Stack.Navigator>       
}

export default AuthUser; 