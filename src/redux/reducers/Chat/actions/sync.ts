import TYPES, { ChatMetadata } from "../metadata";

export const setWorkerChatData = (workerData : ChatMetadata.IUserDataRoom | ChatMetadata.IUserWorkerDataRoom) => ({
  type : TYPES.SET_WORKER_DATA,
  payload : workerData
});

export const setMessages = (messages : ChatMetadata.IChatMessageList[]) => ({
  type : TYPES.GET_MESSAGE_LIST,
  payload : messages
});

export const addNewMessage = (message : ChatMetadata.IChatMessageList) => ({
  type : TYPES.SET_MESSAGE,
  payload : message
})

export const setRoomId = (roomId : string) => ({
  type : TYPES.SET_ROOM_ID,
  payload : roomId
})

export const chatResetData = () => ({
  type : TYPES.CHAT_RESET
})

export const SocketStartConnection = () => ({
  type : TYPES.SOCKET_START_CONNECTION
})

export const setUserChatList = (list : ChatMetadata.IUserRoomList[]) => ({
  type : TYPES.SET_USER_CHAT_LIST,
  payload : list
});

export const setUserChatLoading = (value : boolean) => ({
  type : TYPES.SET_USER_CHAT_LOADING,
  payload : value
})

export const resetChatList = () => ({
  type : TYPES.CHAT_LIST_RESET
})