import { AuthenticationState } from "../../../../metadata/types";
import { TYPES } from "../metadata";

export const updateAuthenticationState = (isAuthenticated : AuthenticationState) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: isAuthenticated
});

export const setLoadingData = (value : boolean) => ({
  type : TYPES.SET_LOADING_DATA,
  payload : value
})

export default TYPES;