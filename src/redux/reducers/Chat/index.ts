import io from 'socket.io-client';
import { Server } from '../../../config';
import TYPES, { ChatMetadata } from "./metadata";

const initialState : ChatMetadata.IStore = {
  roomId : '',
  workerData : {
    id : -1,
    name : '',
    lastname : '',
    basePrice : 0,
    profileImage : '',
    specialty : ''
  },
  isLoadingMessages : true,
  messagesList : [],
  socket : null
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

    case TYPES.SOCKET_START_CONNECTION:
      return {
        ...state,
        socket : io(Server)
      }

    case TYPES.SET_ROOM_ID:
      return {
        ...state,
        roomId : action.payload
      }

    default:
      return state;
  }
}

export default reducer;