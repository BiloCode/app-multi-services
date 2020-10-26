import { App } from "../../../../config";
import { setNearestWorkers, setNewWorkers , setSearchLoading, setWorkersWithFilter } from "./sync";

export const getNewsWorkers = () => async dispatch => {
  try{
    const request = await App.get('/worker/find/new');
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

export const getNearestWorkers = (districtId : number, unlimited : boolean = false) => async dispatch => {
  try{
    let workersData : any = [],
      endpoint = !unlimited ? '/worker/nearest' : '/worker/nearest/unlimited';

    const request = await App.post(endpoint, new URLSearchParams({
      districtId : String(districtId)
    }));
    
    const { workers , error } = request.data;

    if(error) console.log(error);
    else if(workers){
      if(workers.length) workersData = workers;
    }

    dispatch(setNearestWorkers(workersData));
  }catch(e){
    console.log(e);
  }
}

export const getWorkersByName = (name : string) => async dispatch => {
  try {
    dispatch(setSearchLoading(true));
    const request = await App.get(`/worker/find/name/${name}`);
    const { workers , error } = request.data;

    if(error){
      console.log(error);
    }else if(workers){
      dispatch(setWorkersWithFilter(workers));
    }

    dispatch(setSearchLoading(false));
  }catch(e){
    console.log(e);
  }
}

export const getWorkersBySpecialty = (specialtyId : number) => async dispatch => {
  try {
    dispatch(setSearchLoading(true));

    const request = await App.get(`/worker/find/specialty/${specialtyId}`);
    const { workers , error } = request.data;

    if(error){
      console.log(error);
    }else if(workers) {
      dispatch(setWorkersWithFilter(workers));
    }

    dispatch(setSearchLoading(false));
  }catch(e){
    console.log(e);
  }
}