import TYPES, { WorkerMetadata } from "./metadata";

const initialState : WorkerMetadata.IStore = {
  main : {
    workersNearestLoading : true,
    workersNearest : [],
    workersNewLoading : true,
    workersNew : [],    
  },
  search : {
    isLoadingSearch : true,
    workers : []
  },
  detailData : {}
}

const reducer = (state = initialState, action) : WorkerMetadata.IStore => {
  switch(action.type) {
    case TYPES.UPDATE_NEAREST_WORKERS:
      return {
        ...state,
        main : {
          ...state.main,
          workersNearest : action.payload,
          workersNearestLoading : false
        }
      }

    case TYPES.UPDATE_NEW_WORKERS:
      return {
        ...state,
        main : {
          ...state.main,
          workersNew : action.payload,
          workersNewLoading : false
        }
      }

    case TYPES.UPDATE_WORKER_DETAIL_DATA:
      return {
        ...state,
        detailData : action.payload
      }

    default:
      return state;
  }
}

export default reducer;