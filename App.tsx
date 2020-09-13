import 'react-native-gesture-handler';
import React from 'react';

//Router
import Router from './src/router';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux';
import { useFonts } from 'expo-font';

export default function App() {
  const [ loaded ] = useFonts({
    RalewayBlack : require('./src/fonts/Raleway-Black.ttf'),
    RalewayExtraBold : require('./src/fonts/Raleway-ExtraBold.ttf'),
    RalewaySemiBold : require('./src/fonts/Raleway-SemiBold.ttf'),
    RalewayBold : require('./src/fonts/Raleway-Bold.ttf'),
    RalewayMedium : require('./src/fonts/Raleway-Medium.ttf'),
    RalewayRegular : require('./src/fonts/Raleway-Regular.ttf')
  });

  if(!loaded) return null;

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}