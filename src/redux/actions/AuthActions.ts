import { Dispatch } from "redux";

const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
};

const updateAuthenticationState = (isAuthenticated : boolean, isWorker : boolean) => ({
  type: TYPES.SET_AUTHENTICATION_STATE,
  payload: {
    isAuthenticated,
    isWorker
  }
});

export const checkAuthenticationState = () => async (dispatch : Dispatch) => {
  try {
    //Request to API...

    dispatch(updateAuthenticationState(true,false));
  } catch (e) {
    console.log(e);
  }
};

export default TYPES;
