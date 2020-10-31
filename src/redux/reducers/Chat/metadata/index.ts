const TYPES = {
  GET_MESSAGE_LIST : 'get-message-list',
  SET_WORKER_DATA : 'set-worker-data',
  SET_MESSAGE : 'set-message',
  SET_ROOM_ID : 'set-room-id',
  SOCKET_START_CONNECTION : 'socket-start-connection',
  CHAT_RESET : 'chat-reset',
  SET_USER_CHAT_LIST : 'set-user-chat-list',
  SET_USER_CHAT_LOADING : 'set-user-chat-loading',
  CHAT_LIST_RESET : 'chat-list-reset'
}

export namespace ChatMetadata {
  export interface IChatMessageList {
    userId : number;
    message : string;
    createdAt : string;
    _id : string;
  }

  interface IUserMessageRoom {
    id : number;
    fullName : string;
    profileImage : string;
  } 

  interface IWorkerMessageRoom {
    specialty? : string;
    basePrice? : number;
  }

  export interface IUserWorkerDataRoom extends IUserMessageRoom , IWorkerMessageRoom {}
  export interface IUserDataRoom extends IUserMessageRoom {}

  export interface IUserRoomList extends IUserMessageRoom, IWorkerMessageRoom {
    message : {
      createdAt : string;
      value : string; 
    }
  }

  export interface IStore {
    roomId : string;
    userChatList : {
      list : IUserRoomList[];
      isLoading : boolean;
    };
    userData : IUserWorkerDataRoom & IUserDataRoom;
    isLoadingMessages : boolean;
    messagesList : IChatMessageList[];
    socket : SocketIOClient.Socket | null;
    socketLoading : boolean;
  }
}

export default TYPES;