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
    filterId : -1,
    searchByName : ''
  },
  detailData : {
    worker : {
      id : -1,
      availability : 'not-available',
      basePrice : -1,
      createdAt : '',
      puntuaction : 0,
      specialty : {
        name : ''
      },
      user : {
        id : -1,
        description : '',
        fullName : '',
        profileImage : '',
        district : {
          id : -1,
          name : '',
          location : '{}',
          province : {
            id : -1,
            location : '{}',
            name : ''
          }
        }
      }
    },
    workState : {
      state : '',
      id : -1
    },
    isWorkStateLoading : true
  },
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
        detailData : {
          ...state.detailData,
          worker : action.payload
        }
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

    case TYPES.SET_WORKER_LOADING_MAP:
      return {
        ...state,
        mapSearch : {
          ...state.mapSearch,
          isLoadingWorkers : action.payload
        }
      }

    case TYPES.SET_WORKERS_MAP:
      return {
        ...state,
        mapSearch : {
          ...state.mapSearch,
          workers : action.payload
        }
      }

    case TYPES.SET_FILTER_SEARCH_NAME:
      return {
        ...state,
        search : {
          ...state.search,
          searchByName : action.payload
        }
      }

    case TYPES.SET_WORKER_WORK_STATE:
      return {
        ...state,
        detailData : {
          ...state.detailData,
          workState : action.payload,
          isWorkStateLoading : false
        }
      }

    default:
      return state;
  }
}

export default reducer;