import { App } from "../../../../config";
import { setWorks } from "./sync";

interface IUserParams {
  type : 'user' | 'worker';
  value : number;
}

export const getWorkList = (data : IUserParams) => async dispatch => {
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
  }catch(e){
    console.log(e);
  }
}