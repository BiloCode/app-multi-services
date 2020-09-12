import { AsyncStorage } from "react-native";
import { Dispatch } from "redux";
import { AuthenticationState } from "../../metadata/types";
import { setEmptyStore } from "./LoginActions";

const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
};

const updateAuthenticationState = (isAuthenticated : AuthenticationState) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: isAuthenticated
});

export const checkAuthenticationState = () => async (dispatch : Dispatch) => {
  try {
    //Request to API...

    let state : AuthenticationState = 'not-authentication';
    const payload = await AsyncStorage.getItem('user-information');

    if(payload) {
      const { isMentor } = JSON.parse(payload);

      if(isMentor) 
        state = 'authentication-worker';
      else 
        state = 'authentication-user';
    }

    dispatch(updateAuthenticationState(state));
  } catch (e) {
    console.log(e);
  }
};

export const sendLoginInformation = (username : string, password : string) => async (dispatch : Dispatch) => {
  try{
    if(username === 'billy123' && password === 'billy123'){
      //Request API...

      const payload = {
        token : 'Bearer sdsad6as5d15as',
        isMentor : false
      }

      await AsyncStorage.setItem('user-information',JSON.stringify(payload));

      dispatch(updateAuthenticationState('authentication-user'));
      dispatch(setEmptyStore());
    }
  }catch(e){
    console.log(e);
  }
}

export const closeAuthentication = () => async (dispatch : Dispatch) => {
  try{
    //Request To API...
    
    await AsyncStorage.clear();
    dispatch(updateAuthenticationState('not-authentication'));
  }catch(e){
    console.log(e);
  }
}

export default TYPES;