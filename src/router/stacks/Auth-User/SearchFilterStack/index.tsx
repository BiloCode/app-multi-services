import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../../../../screens/Search';
import SearchFilter from '../../../../screens/SearchFilter';
import SearchMap from '../../../../screens/SearchMap';

const Stack = createStackNavigator();

const SearchFilterStack = () => (
  <Stack.Navigator headerMode='none' initialRouteName='search' >
    <Stack.Screen name='search' component={Search} />
    <Stack.Screen name='search-filter' component={SearchFilter} />
    <Stack.Screen name='search-map' component={SearchMap} />    
  </Stack.Navigator>
);

export default SearchFilterStack;