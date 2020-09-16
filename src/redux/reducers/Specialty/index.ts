import TYPES, { SpecialtyMetadata } from "./metadata";

const initialState : SpecialtyMetadata.IStore = {
  list : []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.SET_SPECIALTIES:
      return {
        ...state,
        list : action.payload
      }

    default:
      return state;
  }
}

export default reducer;