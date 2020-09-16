import { combineReducers } from 'redux';

//Reducers
import authReducer from './Auth';
import userReducer from './User';
import specialtiesReducer from './Specialty';

const reducers = combineReducers({
  auth : authReducer,
  user : userReducer,
  specialties : specialtiesReducer
})

export default reducers;