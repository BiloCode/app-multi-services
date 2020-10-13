const TYPES = {
  GET_MESSAGE_LIST : 'get-message-list',
  SET_WORKER_DATA : 'set-worker-data',
  SET_MESSAGE : 'set-message',
  SET_ROOM_ID : 'set-room-id',
  SOCKET_START_CONNECTION : 'socket-start-connection'
}

export namespace ChatMetadata {
  export interface IMessageList {
    userId : number;
    message : string;
  }

  export interface IWorkerDataChat {
    id : number;
    fullName : string;
    specialty : string;
    basePrice : number;
    profileImage : string;
  }

  export interface IStore {
    roomId : string;
    workerData : IWorkerDataChat;
    isLoadingMessages : boolean;
    messagesList : IMessageList[];
    socket : SocketIOClient.Socket | null;
  }
}

export default TYPES;