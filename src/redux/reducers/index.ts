import { combineReducers } from 'redux';

//Reducers
import authReducer from './Auth';
import userReducer from './User';
import specialtiesReducer from './Specialty';
import workerReducer from './Worker';

const reducers = combineReducers({
  auth : authReducer,
  user : userReducer,
  specialties : specialtiesReducer,
  worker : workerReducer,
})

export default reducers;