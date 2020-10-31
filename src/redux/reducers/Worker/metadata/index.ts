import { IDistrict } from "../../../../metadata/interfaces";
import { WorkerState , WorkDetailState } from "../../../../metadata/types";

const TYPES = {
  UPDATE_NEAREST_WORKERS : 'update-nearest-workers',
  UPDATE_NEW_WORKERS : 'update-new-workers',
  UPDATE_WORKER_DETAIL_DATA : 'update-worker-detail-data',
  SET_WORKERS_WITH_FILTER : 'set-workers-with-filter',
  SET_SEARCH_LOADING : 'set-search-loading',
  SET_FILTER_ID : 'set-filter-id',
  RESET_SEARCH : 'reset-search',
  SET_WORKER_LOADING_MAP : 'set-worker-loading-map',
  SET_WORKERS_MAP : 'set-workers-map',
  SET_FILTER_SEARCH_NAME : 'set-filter-search-name',
  SET_WORKER_WORK_STATE : 'set-worker-work-state'
}

export namespace WorkerMetadata {
  export interface IWorker {
    id : number;
    availability : WorkerState;
    basePrice : number;
    createdAt : string;
    puntuaction : number;
    user : {
      id : number;
      fullName : string;
      profileImage : string;
      district: IDistrict;
      description : string;
    },
    specialty : {
      name : string;
    }
  }

  export interface IWorkState {
    id : number;
    state : WorkDetailState | '';
  }

  export interface IStore {
    main : {
      workersNearestLoading : boolean;
      workersNearest : IWorker[],
      workersNewLoading : boolean;
      workersNew : IWorker[],    
    };
    search : {
      isLoadingSearch : boolean;
      filterId : number;
      searchByName : string;
      workers : IWorker[];
    };
    detailData : {
      worker : IWorker;
      workState : IWorkState;
      isWorkStateLoading : boolean;
    };
    mapSearch : {
      isLoadingWorkers : boolean;
      workers : IWorker[]
    }
  }
}

export default TYPES;