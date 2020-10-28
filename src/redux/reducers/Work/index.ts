import { WorkMetadata , TYPES } from "./metadata";

const initialState : WorkMetadata.IStore = {
  works : [],
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
      
    default:
      return state;
  }
}

export default reducer;