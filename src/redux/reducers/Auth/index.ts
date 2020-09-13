import AuthMetadata, { TYPES } from "./metadata";

const initialState : AuthMetadata.IStore = {
  userAuthenticatioState : 'not-authentication',
  isLoadingInformation : true
}

const reducer = (state = initialState , action) : AuthMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_AUTHENTICATION_STATE:
      return {
        ...state,
        userAuthenticatioState : action.payload
      }

    case TYPES.SET_LOADING_DATA :
      return {
        ...state,
        isLoadingInformation : action.payload
      }

    default:
      return state;
  }
}

export default reducer;