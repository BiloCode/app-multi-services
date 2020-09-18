import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Contact from '../../../screens/Contact';
import useRouterUserInit from '../../hooks/useRouterUserInit';
import WorkerDetail from '../../../screens/WorkerDetail';
import Search from '../../../screens/Search';

const Stack = createStackNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator headerMode='none' initialRouteName='home' >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='contact' component={Contact} />
    <Stack.Screen name='worker-detail' component={WorkerDetail} />
    <Stack.Screen name='search' component={Search} />
  </Stack.Navigator>
}

export default AuthUser;