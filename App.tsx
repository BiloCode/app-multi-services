import 'react-native-gesture-handler';
import React from 'react';

//Router
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}