import { AsyncStorage } from "react-native";
import { Dispatch } from "redux";
import { App } from "../../../../config";
import { AuthenticationState } from "../../../../metadata/types";
import { setUserInformation, setWorkerInformation } from "../../User/actions/sync";
import { setLoadingData, updateAuthenticationLoading, updateAuthenticationState } from "./sync";

const checkAuthenticationState = () => async (dispatch : Dispatch) => {
  try {
    let state : AuthenticationState = 'not-authentication';
    const token = await AsyncStorage.getItem('user-information');

    if(token) {
      const request = await App.post('/auth/token/verify', new URLSearchParams({ token }));
      const { isExpired , worker , user } = request.data;

      if(isExpired) {
        await AsyncStorage.clear();
        state = 'not-authentication';
      }else{
        if(worker){
          state = 'authentication-worker';
          dispatch(setWorkerInformation(worker));
        }else if(user){
          state = 'authentication-user';
          dispatch(setUserInformation(user));
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
  dispatch(updateAuthenticationLoading(true));
  
  try{
    let state : AuthenticationState = 'not-authentication';
    const request = await App.post('auth/login', new URLSearchParams({
      username,
      password
    }));

    const { token , worker , user } = request.data;

    if(!token){
      dispatch(updateAuthenticationLoading(false));
      alert('Usuario o Contraseña incorrecta.')
      return;
    }

    await AsyncStorage.setItem('user-information',request.data.token);

    if(worker){
      state = 'authentication-worker';
      dispatch(setWorkerInformation(worker));
    }else if(user){
      state = 'authentication-user';
      dispatch(setUserInformation(user));
    }

    dispatch(updateAuthenticationState(state));
    dispatch(updateAuthenticationLoading(false));
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