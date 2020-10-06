const TYPES = {
  GET_MESSAGE_LIST : 'get-message-list',
  SET_WORKER_DATA : 'set-worker-data',
  SET_MESSAGE : 'set-message'
}

export namespace ChatMetadata {
  export interface IMessageList {
    id : number;
    text : string;
  }

  export interface IWorkerDataChat {
    id : number;
    name : string;
    lastname : string;
    specialty : string;
    basePrice : number;
    profileImage : string;
  }

  export interface IStore {
    workerData : IWorkerDataChat;
    isLoadingMessages : boolean;
    messagesList : IMessageList[];
  }
}

export default TYPES;