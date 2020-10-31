import { App } from "../../../../config";
import { setNearestWorkers, setNewWorkers , setSearchFilterByName, setSearchLoading, setWorkerLoadingMap, setWorkersMap, setWorkersWithFilter, setWorkerWorkState } from "./sync";

//Obtiene todos los 8 trabajadores mas nuevos
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

//Obtiene los 8 primeros trabajadores mas cercanos
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

//Obtiene todos los trabajadores cercanos disponibles
export const getNearestWorkersUnlimited = (provinceId : number) => async dispatch => {
  try{
    dispatch(setWorkerLoadingMap(true));
    let workersData : any = [];

    const request = await App.post('/worker/nearest/unlimited', new URLSearchParams({
      provinceId : String(provinceId)
    }));
    
    const { workers , error } = request.data;

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

//Busca el trabajador por el nombre
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

    dispatch(setSearchFilterByName(name));
    dispatch(setSearchLoading(false));
  }catch(e){
    console.log(e);
  }
}

//Obtener trabajadores por especialidad
export const getWorkersBySpecialty = (specialtyId : number) => async dispatch => {
  try {
    dispatch(setSearchLoading(true));

    const request = await App.get(`/worker/find/specialty/${specialtyId}`);
    const { workers , error } = request.data;

    console.log(workers);

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

//Revisa si el usuario posee un trabajo pendiente con el trabajador (WorkerDetail Screen)
export const isUserPendientWork = (userId : number, workerId : number) => async dispatch => {
  try {
    const request = await App.post('/worker/detail/work/check', new URLSearchParams({
      userId : String(userId),
      workerId : String(workerId)
    }));

    const { work, error } = request.data;

    if(error) alert(error);
    else if(work){
      dispatch(setWorkerWorkState(work));
    }else {
      dispatch(setWorkerWorkState({ id : -1 , state : '' }));
    }
  }catch (e){
    console.log(e);
  }
}

//Solicitar un servicio al trabajador
interface IRequestService {
  userId : number,
  workerId : number,
  title : string,
  price : number,
  description : string
}

export const requestService = (data : IRequestService) => async dispatch => {
  try{
    const request = await App.post('/worker/request/service', new URLSearchParams({
      userId : String(data.userId),
      workerId : String(data.workerId),
      price : String(data.price),
      description : data.description,
      title : data.title
    }));

    const { isWorkCreate , error } = request.data;

    if(error){
      console.log(error);
      return false;
    }else if(isWorkCreate){
      dispatch(setWorkerWorkState({ id : -1, state : 'waiting-confirmation' }));
      return true;
    }else{
      return false;
    }

  }catch(e){
    console.log(e);
    return false;
  }
}

//Completar el servicio
export const serviceCompletation = (workId : number) => async dispatch => {
  try {
    const request = await App.post('/user/work/completed', new URLSearchParams({
      workId : String(workId),
    }));

    const { isCompleted , error } = request.data;

    if(error){
      alert(error);
      return false;
    }else if(isCompleted){
      dispatch(setWorkerWorkState({ id : -1, state : '' }));
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}