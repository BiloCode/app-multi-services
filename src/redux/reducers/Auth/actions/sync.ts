import { AuthenticationState } from "../../../../metadata/types";
import { TYPES } from "../metadata";

export const updateAuthenticationState = (isAuthenticated : AuthenticationState) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: isAuthenticated
});

export const updateAuthenticationLoading = (isSend : boolean) => ({
  type: TYPES.SET_IS_SEND,
  payload: isSend
});

export const setLoadingData = (value : boolean) => ({
  type : TYPES.SET_LOADING_DATA,
  payload : value
})