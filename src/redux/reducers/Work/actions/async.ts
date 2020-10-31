import { App } from "../../../../config";
import { setWorkLoading, setWorks, workUpdateById } from "./sync";

interface IUserParams {
  type : 'user' | 'worker';
  value : number;
}

export const getWorkList = (data : IUserParams) => async dispatch => {
  dispatch(setWorkLoading(true));

  try {
    let endpoint : string = '',
      requestData : any = {};

    if(data.type === 'worker') {
      endpoint = '/worker/list/work';
      requestData.workerId = String(data.value);
    }else if(data.type === 'user') {
      endpoint = '/user/list/work';
      requestData.userId = String(data.value);
    }

    const request = await App.post(endpoint,new URLSearchParams(requestData));
    const { works } = request.data;
  
    dispatch(setWorks(works));
    dispatch(setWorkLoading(false));
  }catch(e){
    console.log(e);
  }
}

export const acceptWork = (workId : number) => async dispatch => {
  try {
    const request = await App.post('/worker/service/accept', new URLSearchParams({
      workId : String(workId)
    }));

    const { work , error } = request.data;

    if(error){
      alert(error);
      return false;
    }else if(work) {
      dispatch(workUpdateById(work));
      return true;
    }
  }catch(e){  
    console.log(e);
    return false;
  }
}

export const rejectWork = (workId : number) => async dispatch => {
  try {
    const request = await App.post('/worker/reject/work', new URLSearchParams({
      workId : String(workId)
    }));

    const { work, error } = request.data;

    if(error) alert(error);
    else {
      dispatch(workUpdateById(work));
    }
  }catch(e){
    console.log(e);
    return false;
  }
}