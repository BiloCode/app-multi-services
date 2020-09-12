import { combineReducers } from 'redux';

//Reducers
import authReducer from './Auth';
import loginReducer from './Login';

const reducers = combineReducers({
  auth : authReducer,
  login : loginReducer
})

export default reducers;