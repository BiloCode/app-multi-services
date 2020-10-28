import { WorkerState } from "../../../../metadata/types";

const TYPES = {
  UPDATE_NEAREST_WORKERS : 'update-nearest-workers',
  UPDATE_NEW_WORKERS : 'update-new-workers',
  UPDATE_WORKER_DETAIL_DATA : 'update-worker-detail-data',
  SET_WORKERS_WITH_FILTER : 'set-workers-with-filter',
  SET_SEARCH_LOADING : 'set-search-loading',
  SET_FILTER_ID : 'set-filter-id',
  RESET_SEARCH : 'reset-search',
  SET_WORKER_LOADING_MAP : 'set-worker-loading-map',
  SET_WORKERS_MAP : 'set-workers-map'
}

export namespace WorkerMetadata {
  export interface IWorker {
    id : number;
    availability : WorkerState;
    location : string;
    basePrice : number;
    createdAt : Date;
    puntuaction : number;
    user : {
      id : number;
      fullName : string;
      profileImage : string;
      district: {
        name : string;
        location : string;
        province : {
          name : string;
          location : string;
        }        
      };
      description : string;
    },
    specialty : {
      name : string;
    }
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
      workers : IWorker[];
    };
    detailData : Partial<IWorker>;
    mapSearch : {
      isLoadingWorkers : boolean;
      workers : IWorker[]
    }
  }
}

export default TYPES;