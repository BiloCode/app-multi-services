import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import Home from '../../../screens/Home';
import Contact from '../../../screens/Contact';
import useRouterUserInit from '../../hooks/useRouterUserInit';
import WorkerDetail from '../../../screens/WorkerDetail';
import Profile from '../../../screens/Profile';

import WorkerChat from '../../../screens/WorkerChat';
import SearchFilterStack from './SearchFilterStack';

const Stack = createBottomTabNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator screenOptions={{ tabBarVisible : false }} initialRouteName='home' >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='profile' component={Profile} />
    <Stack.Screen name='contact' component={Contact} />
    <Stack.Screen name='worker-detail' component={WorkerDetail} />
    <Stack.Screen name='search' component={SearchFilterStack} />
    <Stack.Screen name='worker-chat' component={WorkerChat} />
  </Stack.Navigator>
}

export default AuthUser; 