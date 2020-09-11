import { Dispatch } from "redux";
import { AuthenticationState } from "../../metadata/types";

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

    dispatch(updateAuthenticationState('not-authentication'));
  } catch (e) {
    console.log(e);
  }
};

export default TYPES;
