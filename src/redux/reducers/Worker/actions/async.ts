import { App } from "../../../../config";
import { setNearestWorkers, setNewWorkers } from "./sync";

export const getNewsWorkers = () => async dispatch => {
  try{
    const request = await App.get('/worker/new');
    const { workers } = request.data;

    dispatch(setNewWorkers(workers));
  }catch(e){
    console.log(e);
  }
}

export const getNearestWorkers = (districtId : number) => async dispatch => {
  try{
    const request = await App.post('/worker/nearest', new URLSearchParams({
      districtId : String(districtId)
    }));
    
    const { workers } = request.data;

    dispatch(setNearestWorkers(workers));
  }catch(e){
    console.log(e);
  }
}