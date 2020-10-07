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