import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';  // renaming reducer to make it less ambiguous.
import authReducer from './authReducer';
import streamReducer from'./streamReducer';

export default combineReducers({
  // replaceMe:()=>"TEST VALUE"    // Need to have one reducer at least.
  // Key has to be "form".
  auth: authReducer,
  form : formReducer,
  streams: streamReducer
})