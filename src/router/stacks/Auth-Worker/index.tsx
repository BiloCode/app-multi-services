import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WorkerWorkList from '../../../screens/WorkerWorkList';
import WorkerProfile from '../../../screens/Profile';
import Chat from '../../../screens/Chat';
import WorkDetail from '../../../screens/WorkDetail';
import WorkerHome from '../../../screens/WorkerHome';
import ChatList from '../../../screens/ChatList';
import useRouterWorkerInit from '../../hooks/useRouterWorkerInit';

const Stack = createStackNavigator();

const AuthWorker = () => {
  const __init = useRouterWorkerInit();
  
  return <Stack.Navigator headerMode='none' initialRouteName='home' >
    <Stack.Screen name='home' component={WorkerHome} />
    <Stack.Screen name='profile' component={WorkerProfile} />
    <Stack.Screen name='work-list' component={WorkerWorkList} />
    <Stack.Screen name='chat-list' component={ChatList} />
    <Stack.Screen name='chat-user' component={Chat} />
    <Stack.Screen name='worker-work-detail' component={WorkDetail} />
  </Stack.Navigator>
}

export default AuthWorker;