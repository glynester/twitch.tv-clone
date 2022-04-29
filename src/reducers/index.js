import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  // replaceMe:()=>"TEST VALUE"    // Need to have one reducer at least.
  auth: authReducer
})