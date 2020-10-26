import { App } from "../../../../config";
import { setUserDescription, setUserFullName, setWorkerDescription, setWorkerFullName } from "./sync";

export const updateFullName = (userId : number, fullName : string, isWorker : boolean = false) => async dispatch => {
  try {
    const request = await App.post('/user/update/fullname', new URLSearchParams({
      userId : String(userId),
      fullName
    }));

    const { isUpdated , error } = request.data;

    if(error) console.log(error);
    else if(isUpdated){
      !isWorker ?
        dispatch(setUserFullName(fullName)) :
        dispatch(setWorkerFullName(fullName));
    }
  }catch(e){
    console.log(e);
  }
}

export const updateDescription = (userId : number, description : string, isWorker : boolean = false) => async dispatch => {
  try {
    const request = await App.post('/user/update/description', new URLSearchParams({
      userId : String(userId),
      description
    }));

    const { isUpdated , error } = request.data;

    if(error) console.log(error);
    else if(isUpdated){
      !isWorker ?
        dispatch(setUserDescription(description)) :
        dispatch(setWorkerDescription(description));
    }
  }catch(e){
    console.log(e);
  }
}