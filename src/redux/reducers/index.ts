import { combineReducers } from 'redux';

//Reducers
import authReducer from './Auth';
import userReducer from './User';
import specialtiesReducer from './Specialty';
import workerReducer from './Worker';
import registerReducer from './Register';
import chatReducer from './Chat';

const reducers = combineReducers({
  auth : authReducer,
  user : userReducer,
  specialties : specialtiesReducer,
  worker : workerReducer,
  register : registerReducer,
  chat : chatReducer
});

export default reducers;