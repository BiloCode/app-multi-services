import { WorkDetailState } from "../../../../metadata/types";

export const TYPES = {
  GET_WORKS : 'get-works',
  SET_WORK_DETAIL : 'set-work-detail'
}

export namespace WorkMetadata {
  export interface IWork {
    id : number;
    price : number;
    state : WorkDetailState;
    title : string;
    description : string;
    createdAt : string;
    user : {
      id : number;
      profileImage : string;
      district : {
        location : string;
        name : string;
      }
    }
  }

  export interface IStore {
    works : IWork[],
    workDetail : Partial<IWork>
  }
}