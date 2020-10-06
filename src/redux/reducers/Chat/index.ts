import { ChatMetadata } from "./metadata";

const initialState : ChatMetadata.IStore = {
  workerData : {
    id : -1,
    name : '',
    lastname : '',
    basePrice : 0,
    profileImage : '',
    specialty : ''
  },
  isLoadingMessages : true,
  messagesList : []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;