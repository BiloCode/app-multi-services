import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerWorkList from '../../../../screens/WorkerWorkList';

const Stack = createDrawerNavigator();

const DrawerNav = () => (
  <Stack.Navigator openByDefault={false} >
    <Stack.Screen name='home' component={WorkerWorkList} />
  </Stack.Navigator>
);

export default DrawerNav;