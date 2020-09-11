import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import authReducer from './reducers/Auth';

const reducers = combineReducers({
  auth : authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;