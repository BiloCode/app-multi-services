import { WorkMetadata , TYPES } from "./metadata";

const initialState : WorkMetadata.IStore = {
  works : [],
  worksLoading : true,
  workDetail : {
    id : -1,
    createdAt : '',
    description : '',
    price : -1,
    state : 'waiting-confirmation',
    title : '',
    finished : '',
    user : {
      id : -1,
      profileImage : '',
      district : {
        id : -1,
        location : '{}',
        name : '',
        province : {
          id : -1,
          location : '{}',
          name : ''
        }
      }
    }
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) { 
    case TYPES.GET_WORKS:
      return {
        ...state,
        works : action.payload
      }

    case TYPES.SET_WORK_DETAIL:
      return {
        ...state,
        workDetail : action.payload
      }

    case TYPES.SET_WORK_LOADING:
        return {
          ...state,
          worksLoading : action.payload
        }
      
    case TYPES.WORK_UPDATE_BY_ID:
      return {
        ...state,
        workDetail : action.payload,
        works : state.works.map(v => {
          if(v.id === action.payload.id) {
            return action.payload
          }

          return v;
        })
      }

    case TYPES.RESET_DATA:
      return initialState;
      
    default:
      return state;
  }
}

export default reducer;