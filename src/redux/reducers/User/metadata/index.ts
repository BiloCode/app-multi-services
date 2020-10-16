import { WorkerState } from '../../../../metadata/types';

const TYPES = {
  SET_USER_INFORMATION : 'set-user-information',
  SET_WORKER_INFORMATION : 'set-worker-information'
}

export namespace UserMetadata {
  interface ILocate {
    id : number;
    name : string;
    location : string;
  }

  interface IDistrict extends ILocate {
    province : ILocate
  }

  export interface IUser {
    id : number;
    fullName : string;
    profileImage : string;
    createdAt : string;
    description : string;
    district : IDistrict
  }

  export interface IWorker {
    id : number;
    basePrice : number;
    availability : WorkerState;
    specialty : {
      name : string;
    },
    user : IUser
  }

  export interface IStore {
    userInformation : Partial<IUser>,
    workerInformation : Partial<IWorker>
  }

}

export default TYPES;