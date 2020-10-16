import TYPES , { UserMetadata } from "./metadata";

const initialState : UserMetadata.IStore = {
  userInformation : {},
  workerInformation : {}
}

const reducer = (state = initialState, action) : UserMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_USER_INFORMATION:
      return {
        ...state,
        userInformation : action.payload
      }
    
    case TYPES.SET_WORKER_INFORMATION:
      return {
        ...state,
        workerInformation : action.payload
      }

    default:
      return state;
  }
}

export default reducer;