import { WorkerState } from '../../../../metadata/types';
import { IDistrict } from '../../../../metadata/interfaces';

const TYPES = {
  SET_USER_INFORMATION : 'set-user-information',
  SET_WORKER_INFORMATION : 'set-worker-information',
  UPDATE_USER_FULLNAME : 'update-user-fullname',
  UPDATE_USER_DESCRIPTION : 'update-user-description',
  UPDATE_WORKER_FULLNAME : 'update-worker-fullname',
  UPDATE_WORKER_DESCRIPTION : 'update-worker-fullname'
}

export namespace UserMetadata {
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
    user : IUser;
  }

  export interface IStore {
    userInformation : IUser;
    workerInformation : IWorker;
  }

}

export default TYPES;