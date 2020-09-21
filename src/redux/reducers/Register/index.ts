import { RegisterMetadata, TYPES } from "./metadata";

const initialState : RegisterMetadata.IStore = {
  departmentData : [],
  provinceFilter : [],
  districtFilter : []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case TYPES.SET_DEPARTMENTS:
      return {
        ...state,
        departmentData : action.payload
      }

    case TYPES.SET_FILTER_PROVINCE:
      return {
        ...state,
        provinceFilter : action.payload
      }

    case TYPES.SET_FILTER_DISTRICT:
      return {
        ...state,
        districtFilter : action.payload
      }

    default:
      return state;
  }
}

export default reducer;