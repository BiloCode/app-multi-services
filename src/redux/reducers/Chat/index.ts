import io from 'socket.io-client';
import { Server } from '../../../config';
import TYPES, { ChatMetadata } from "./metadata";

const initialState : ChatMetadata.IStore = {
  roomId : '',
  userData : {
    id : -1,
    fullName : '',
    basePrice : 0,
    profileImage : '',
    specialty : ''
  },
  userChatList : {
    isLoading : true,
    list : []
  },
  isLoadingMessages : true,
  messagesList : [],
  socket : null,
  socketLoading : true
}

const reducer = (state = initialState, action) : ChatMetadata.IStore => {
  switch(action.type) {
    case TYPES.SET_WORKER_DATA:
      return {
        ...state,
        userData : {
          ...action.payload
        }
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
        socket : io(Server),
        socketLoading : false
      }

    case TYPES.SET_ROOM_ID:
      return {
        ...state,
        roomId : action.payload
      }

    case TYPES.CHAT_RESET:
      return {
        ...state,
        isLoadingMessages : true,
        messagesList : [],
        roomId : '',
        userData : initialState.userData
      }

    case TYPES.SET_USER_CHAT_LIST:
      return {
        ...state,
        userChatList : {
          ...state.userChatList,
          list : action.payload
        }
      }

    case TYPES.SET_USER_CHAT_LOADING:
      return {
        ...state,
        userChatList : {
          ...state.userChatList,
          isLoading : action.payload
        }
      }

    default:
      return state;
  }
}

export default reducer;