import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkerHome from '../../../screens/WorkerHome';

const Stack = createStackNavigator();

const AuthWorker = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='home' component={WorkerHome} />
  </Stack.Navigator>
}

export default AuthWorker;