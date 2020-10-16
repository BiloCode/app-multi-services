import { WorkerMetadata } from "../Worker/metadata";
import { WorkMetadata , TYPES } from "./metadata";

const initialState : WorkMetadata.IStore = {
  works : [],
  workDetail : {}
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