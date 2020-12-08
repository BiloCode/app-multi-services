import TYPES , { UserMetadata } from "./metadata";

let initialUser = {
  id : -1,
  createdAt : '',
  district : {
    id : -1,
    location : '{}',
    name : '',
    province : {
      id : -1,
      location : '{}',
      name : ''
    }
  },
  description : '',
  fullName : '',
  profileImage : ''
}

const initialState : UserMetadata.IStore = {
  userInformation : initialUser,
  workerInformation : {
    availability : 'not-available',
    basePrice : -1,
    id : -1,
    specialty : {
      name : ''
    },
    user : initialUser
  }
}

const reducer = (state = initialState, action) : UserMetadata.IStore => {
  switch(action.type){
    case TYPES.SET_USER_INFORMATION:
      return {
        ...state,
        userInformation : action.payload
      }
    
    case TYPES.SET_WORKER_INFORMATION:
      return {
        ...state,
        workerInformation : action.payload
      }

    case TYPES.UPDATE_USER_FULLNAME:
      return {
        ...state,
        userInformation : {
          ...state.userInformation,
          fullName : action.payload
        }
      }

    case TYPES.UPDATE_USER_DESCRIPTION:
      return {
        ...state,
        userInformation : {
          ...state.userInformation,
          description : action.payload
        }
      }

    case TYPES.UPDATE_USER_PROFILE_IMAGE:
      return {
        ...state,
        userInformation : {
          ...state.userInformation,
          profileImage : action.payload
        }
      }

    case TYPES.UPDATE_WORKER_FULLNAME:
      return {
        ...state,
        workerInformation : {
          ...state.workerInformation,
          user : {
            ...state.workerInformation.user,
            fullName : action.payload
          }
        }
      }

    case TYPES.UPDATE_WORKER_DESCRIPTION:
      return {
        ...state,
        workerInformation :{
          ...state.workerInformation,
          user : {
            ...state.workerInformation.user,
            description : action.payload
          }
        }
      }

    case TYPES.UPDATE_WORKER_PROFILE_IMAGE:
      return {
        ...state,
        workerInformation : {
          ...state.workerInformation,
          user : {
            ...state.workerInformation.user,
            profileImage : action.payload
          }
        }
      }

    default:
      return state;
  }
}

export default reducer;