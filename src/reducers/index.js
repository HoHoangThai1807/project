import { combineReducers } from 'redux';
import params from './paramsReducer';
import auths from './authReducer';
import passengers from './PassengerReducer';

const root = combineReducers({
  params,
  auths,
  passengers,
});

export default root;