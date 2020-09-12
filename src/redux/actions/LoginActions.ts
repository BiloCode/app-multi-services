import { Dispatch } from "redux";

const TYPES = {
  SET_USERNAME_VALUE : 'set-username-value',
  SET_PASSWORD_VALUE : 'set-password-value',
  EMPTY_STORE : 'empty-store'
}

export const setPassword = (value : string) => ({
  type : TYPES.SET_PASSWORD_VALUE,
  payload : value
});

export const setUsername = (value : string) => ({
  type : TYPES.SET_USERNAME_VALUE,
  payload : value
});

const setEmptyStore = () => ({
  type : TYPES.EMPTY_STORE
})

export const sendLoginInformation = (username : string, password : string) => async (dispatch : Dispatch) => {
  try{
    console.log(username,password);
    dispatch(setEmptyStore());
  }catch(e){
    console.log(e);
  }
}

export default TYPES;