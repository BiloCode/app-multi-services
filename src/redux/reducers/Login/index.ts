import store from "../..";
import TYPES from "../../actions/LoginActions";
import LoginMetadata from "./metadata";

const initialState : LoginMetadata.IStore = {
  passwordValue : '',
  usernameValue : ''
}

const reducer = (state = initialState, action) : LoginMetadata.IStore => {
  switch(action.type) {
    case TYPES.SET_PASSWORD_VALUE : 
      return {
        ...state,
        passwordValue : action.payload
      }
    case TYPES.SET_USERNAME_VALUE :
      return {
        ...state,
        usernameValue : action.payload
      }
    case TYPES.EMPTY_STORE:
      return initialState;

    default:
      return state;
  }
}

export default reducer;