import TYPES, { ChatMetadata } from "./metadata";

const initialState : ChatMetadata.IStore = {
  workerData : {
    id : -1,
    name : '',
    lastname : '',
    basePrice : 0,
    profileImage : '',
    specialty : ''
  },
  isLoadingMessages : true,
  messagesList : []
}

const reducer = (state = initialState, action) : ChatMetadata.IStore => {
  switch(action.type) {
    case TYPES.SET_WORKER_DATA:
      return {
        ...state,
        workerData : action.payload
      }

    case TYPES.GET_MESSAGE_LIST:
      return {
        ...state,
        messagesList : action.payload,
        isLoadingMessages : false
      }

    case TYPES.SET_MESSAGE:
      return {
        ...state,
        messagesList : [...state.messagesList , action.payload]
      }

    default:
      return state;
  }
}

export default reducer;