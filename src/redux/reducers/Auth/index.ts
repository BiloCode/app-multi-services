import AuthMetadata from "./metadata";
import TYPES from "../../actions/AuthActions";

const initialState : AuthMetadata.IStore = {
  userAuthenticatioState : 'not-authentication',
  isLoadingInformation : true
}

const reducer = (state = initialState , action) : AuthMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_AUTHENTICATION_STATE:
      return {
        userAuthenticatioState : action.payload,
        isLoadingInformation : false
      }

    default:
      return state;
  }
}

export default reducer;