import { IDistrict } from "../../../../metadata/interfaces";
import { WorkDetailState } from "../../../../metadata/types";

export const TYPES = {
  GET_WORKS : 'get-works',
  SET_WORK_DETAIL : 'set-work-detail',
  SET_WORK_LOADING : 'set-work-loading',
  RESET_DATA : 'reset-data',
  WORK_UPDATE_BY_ID : 'work-update-by-id'
}

export namespace WorkMetadata {
  export interface IWork {
    id : number;
    price : number;
    state : WorkDetailState;
    title : string;
    description : string;
    createdAt : string;
    finished : string;
    user : {
      id : number;
      profileImage : string;
      district : IDistrict
    }
  }

  export interface IStore {
    works : IWork[];
    worksLoading : boolean;
    workDetail : IWork;
  }
}