import { combineReducers } from 'redux';

//Reducers
import authReducer from './Auth';

const reducers = combineReducers({
  auth : authReducer,
})

export default reducers;