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
    fullName : '',
    profileImage : '',
    id : -1
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