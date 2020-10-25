const TYPES = {
  GET_MESSAGE_LIST : 'get-message-list',
  SET_WORKER_DATA : 'set-worker-data',
  SET_MESSAGE : 'set-message',
  SET_ROOM_ID : 'set-room-id',
  SOCKET_START_CONNECTION : 'socket-start-connection',
  CHAT_RESET : 'chat-reset'
}

export namespace ChatMetadata {
  export interface IMessageList {
    userId : number;
    message : string;
    createdAt : string;
    _id : string;
  }

  export interface IUserDataRoom {
    id : number;
    fullName : string;
    profileImage : string;
    specialty? : string;
    basePrice? : number;
    userType : 'user' | 'worker'
  }

  export interface IStore {
    roomId : string;
    userData : IUserDataRoom;
    isLoadingMessages : boolean;
    messagesList : IMessageList[];
    socket : SocketIOClient.Socket | null;
    socketLoading : boolean;
  }
}

export default TYPES;