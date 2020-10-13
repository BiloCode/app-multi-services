import TYPES, { ChatMetadata } from "../metadata";

export const setWorkerChatData = (workerData : ChatMetadata.IWorkerDataChat) => ({
  type : TYPES.SET_WORKER_DATA,
  payload : workerData
});

export const setMessages = (messages : ChatMetadata.IMessageList[]) => ({
  type : TYPES.GET_MESSAGE_LIST,
  payload : messages
});

export const addNewMessage = (message : ChatMetadata.IMessageList) => ({
  type : TYPES.SET_MESSAGE,
  payload : message
})

export const setRoomId = (roomId : string) => ({
  type : TYPES.SET_ROOM_ID,
  payload : roomId
})

export const SocketStartConnection = () => ({
  type : TYPES.SOCKET_START_CONNECTION
})