import { App } from "../../../../config";
import { setNearestWorkers, setNewWorkers , setSearchLoading, setWorkerLoadingMap, setWorkersMap, setWorkersWithFilter } from "./sync";

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

export const getNearestWorkers = (provinceId : number) => async dispatch => {
  try{
    let workersData : any = [];

    const request = await App.post('/worker/nearest', new URLSearchParams({
      provinceId : String(provinceId)
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

export const getNearestWorkersUnlimited = (provinceId : number) => async dispatch => {
  try{
    dispatch(setWorkerLoadingMap(true));
    let workersData : any = [];

    const request = await App.post('/worker/nearest/unlimited', new URLSearchParams({
      provinceId : String(provinceId)
    }));
    
    const { workers , error } = request.data;

    console.log(workers);

    if(error) console.log(error);
    else if(workers){
      if(workers.length) workersData = workers;
    }

    dispatch(setWorkersMap(workersData));
    dispatch(setWorkerLoadingMap(false));
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