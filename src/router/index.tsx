import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import useRouterInit from './hooks/useRouterInit';
import ScreenLoading from '../components/ScreenLoading';
import AuthUser from './stacks/Auth-User';
import AuthWorker from './stacks/Auth-Worker';
import NotAuth from './stacks/Not-Auth';

const Router = () => {
  const { isLoadingInformation , userAuthenticatioState } = useRouterInit();

  if(isLoadingInformation) return <ScreenLoading />

  return <NavigationContainer>
    {
      userAuthenticatioState === 'not-authentication' ?
        <NotAuth /> :
        userAuthenticatioState === 'authentication-user' ?
          <AuthUser /> :
          <AuthWorker />
    }
  </NavigationContainer>
}

export default Router;