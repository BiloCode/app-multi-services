import TYPES from "./metadata";

const initialState = {
  userInformation : {}
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case TYPES.SET_USER_INFORMATION:
      return {
        ...state,
        userInformation : action.payload
      }

    default:
      return state;
  }
}

export default reducer;