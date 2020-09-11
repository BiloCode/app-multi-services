import AuthMetadata from "./metadata";
import TYPES from "../../actions/AuthActions";

const initialState : AuthMetadata.IStore = {
  isAuthenticated : false,
  isWorker : false,
  isLoadingInformation : true
}

const reducer = (state = initialState , action) : AuthMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_AUTHENTICATION_STATE:
      return {
        isAuthenticated : action.payload.isAuthenticated,
        isWorker : action.payload.isWorker,
        isLoadingInformation : false
      }

    default:
      return state;
  }
}

export default reducer;