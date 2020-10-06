const TYPES = {

}

export namespace ChatMetadata {
  interface IMessageList {
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