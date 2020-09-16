import { AsyncStorage } from "react-native";
import { Dispatch } from "redux";
import { App } from "../../../../config";
import { AuthenticationState } from "../../../../metadata/types";
import { setUserInformation } from "../../User/actions/sync";
import { setLoadingData, updateAuthenticationState } from "./sync";

const checkAuthenticationState = () => async (dispatch : Dispatch) => {
  try {
    let state : AuthenticationState = 'not-authentication';
    const token = await AsyncStorage.getItem('user-information');

    if(token) {
      const request = await App.post('/auth/token/verify', new URLSearchParams({ token }));

      if(request.data.isExpired) {
        await AsyncStorage.clear();
        state = 'not-authentication';
      }else{
        if(request.data.worker){
          state = 'authentication-worker';
          dispatch(setUserInformation(request.data.worker));
        }else if(request.data.user){
          state = 'authentication-user';
          dispatch(setUserInformation(request.data.user));
        }
      }
    }

    dispatch(updateAuthenticationState(state));
    dispatch(setLoadingData(false));
  } catch (e) {
    console.log(e);
  }
};

const sendLoginInformation = (username : string, password : string) => async (dispatch : Dispatch) => {
  dispatch(setLoadingData(true));
  
  try{
    let state : AuthenticationState = 'not-authentication';
    const request = await App.post('auth/login', new URLSearchParams({
      username,
      password
    }));

    if(request.data.token) {
      await AsyncStorage.setItem('user-information',request.data.token);

      if(request.data.worker){
        state = 'authentication-worker';
        dispatch(setUserInformation(request.data.worker));
      }else if(request.data.user){
        state = 'authentication-user';
        dispatch(setUserInformation(request.data.user));
      }
    }

    dispatch(updateAuthenticationState(state));
    dispatch(setLoadingData(false));
  }catch(e){
    console.log(e);
  }
}

const closeAuthentication = () => async (dispatch : Dispatch) => {
  dispatch(setLoadingData(true));
  try{
    await AsyncStorage.clear();
    dispatch(updateAuthenticationState('not-authentication'));
    dispatch(setLoadingData(false));
  }catch(e){
    console.log(e);
  }
}

export {
  checkAuthenticationState,
  sendLoginInformation,
  closeAuthentication
}