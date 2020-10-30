import AuthMetadata, { TYPES } from "./metadata";

const initialState : AuthMetadata.IStore = {
  userAuthenticationState : 'not-authentication',
  isLoadingInformation : true,
  isSend : false
}

const reducer = (state = initialState , action) : AuthMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_AUTHENTICATION_STATE:
      return {
        ...state,
        userAuthenticationState : action.payload
      }

    case TYPES.SET_LOADING_DATA :
      return {
        ...state,
        isLoadingInformation : action.payload
      }

    case TYPES.SET_IS_SEND:
      return {
        ...state,
        isSend : action.payload
      }

    default:
      return state;
  }
}

export default reducer;