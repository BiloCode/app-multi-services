import TYPES , { UserMetadata } from "./metadata";

const initialState : UserMetadata.IStore = {
  userInformation : {
    createdAt : '',
    description : '',
    district : {
      id : -1,
      name : '',
      province : {
        id : -1,
        name : ''
      }
    },
    name : '',
    lastname : '',
    profileImage : ''
  }
}

const reducer = (state = initialState, action) : UserMetadata.IStore => {
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