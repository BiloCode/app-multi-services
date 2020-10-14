import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Contact from '../../../../screens/Contact';
import Home from '../../../../screens/Home';
import Profile from '../../../../screens/Profile';
import Search from '../../../../screens/Search';

const Stack = createDrawerNavigator();

const DrawerNav = () => (
  <Stack.Navigator openByDefault={false} >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='profile' component={Profile} />
    <Stack.Screen name='contact' component={Contact} />
    <Stack.Screen name='search' component={Search} />
  </Stack.Navigator>
);

export default DrawerNav;