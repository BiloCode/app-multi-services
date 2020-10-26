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
    workers : [],
    filterId : -1
  },
  detailData : {},
  mapSearch : {
    isLoadingWorkers : true,
    workers : []
  }
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

    case TYPES.SET_WORKERS_WITH_FILTER:
      return {
        ...state,
        search : {
          ...state.search,
          workers : action.payload
        }
      }

    case TYPES.SET_SEARCH_LOADING:
      return {
        ...state,
        search : {
          ...state.search,
          isLoadingSearch : action.payload
        }
      }

    case TYPES.SET_FILTER_ID:
      return {
        ...state,
        search : {
          ...state.search,
          filterId : action.payload
        }
      }

    case TYPES.RESET_SEARCH:
      return {
        ...state,
        search : {
          ...initialState.search
        }
      }

    default:
      return state;
  }
}

export default reducer;