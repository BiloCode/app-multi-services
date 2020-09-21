import { App } from "../../../../config";
import { setNearestWorkers, setNewWorkers } from "./sync";

export const getNewsWorkers = () => async dispatch => {
  try{
    const request = await App.get('/worker/new');
    const { workers , error } = request.data;

    let workersData : any = [];

    if(error) alert(error);
    else if(workers){
      if(workers.length) workersData = workers;
    }

    dispatch(setNewWorkers(workersData));
  }catch(e){
    console.log(e);
  }
}

export const getNearestWorkers = (districtId : number) => async dispatch => {
  try{
    const request = await App.post('/worker/nearest', new URLSearchParams({
      districtId : String(districtId)
    }));

    let workersData : any = [];
    
    const { workers , error } = request.data;

    if(error) 
      alert(error);
    else if(workers){
      if(workers.length) workersData = workers;
    }

    dispatch(setNearestWorkers(workersData));
  }catch(e){
    console.log(e);
  }
}