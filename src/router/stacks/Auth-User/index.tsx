import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Contact from '../../../screens/Contact';
import useRouterUserInit from '../../hooks/useRouterUserInit';
import WorkerDetail from '../../../screens/WorkerDetail';
import Search from '../../../screens/Search';
import Profile from '../../../screens/Profile';
import SearchFilter from '../../../screens/SearchFilter';
import SearchMap from '../../../screens/SearchMap';
import WorkerChat from '../../../screens/WorkerChat';
import WorkerWorkList from '../../../screens/WorkerWorkList';
import WorkerProfile from '../../../screens/WorkerProfile';
import WorkDetail from '../../../screens/WorkDetail';

const Stack = createStackNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator headerMode='none' initialRouteName='home' >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='profile' component={Profile} />
    <Stack.Screen name='contact' component={Contact} />
    <Stack.Screen name='worker-detail' component={WorkerDetail} />
    <Stack.Screen name='search' component={Search} />
    <Stack.Screen name='search-filter' component={SearchFilter} />
    <Stack.Screen name='search-map' component={SearchMap} />
    <Stack.Screen name='worker-chat' component={WorkerChat} />
    <Stack.Screen name='worker-work-list' component={WorkerWorkList} />
    <Stack.Screen name='worker-profile' component={WorkerProfile} />
    <Stack.Screen name='work-detail' component={WorkDetail} />
  </Stack.Navigator>
}

export default AuthUser; 