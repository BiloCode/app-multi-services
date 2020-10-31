import TYPES, { WorkerMetadata } from "../metadata";

export const setNewWorkers = (workers : WorkerMetadata.IWorker[]) => ({
  type : TYPES.UPDATE_NEW_WORKERS,
  payload : workers
});

export const setNearestWorkers = (workers : WorkerMetadata.IWorker[]) => ({
  type : TYPES.UPDATE_NEAREST_WORKERS,
  payload : workers
})

export const setWorkerDetailData = (worker : WorkerMetadata.IWorker) => ({
  type : TYPES.UPDATE_WORKER_DETAIL_DATA,
  payload : worker
})

export const setWorkersWithFilter = (workers : WorkerMetadata.IWorker[]) => ({
  type : TYPES.SET_WORKERS_WITH_FILTER,
  payload : workers
});

export const setSearchLoading = (loading : boolean) => ({
  type : TYPES.SET_SEARCH_LOADING,
  payload : loading
})

export const setFilterId = (filterId : number) => ({
  type : TYPES.SET_FILTER_ID,
  payload : filterId
})

export const setSearchReset = () => ({
  type : TYPES.RESET_SEARCH
});

export const setSearchFilterByName = (name : string) => ({
  type : TYPES.SET_FILTER_SEARCH_NAME,
  payload : name
});

//Map
export const setWorkerLoadingMap = (value : boolean) => ({
  type : TYPES.SET_WORKER_LOADING_MAP,
  payload : value
})

export const setWorkersMap = (workers : WorkerMetadata.IWorker[]) => ({
  type : TYPES.SET_WORKERS_MAP,
  payload : workers
})