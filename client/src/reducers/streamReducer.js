import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

export default (state={},action)=>{
  switch (action.type){
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS: // most complicated case
    // mapKeys - takes an array and returns an object.
    return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM: 
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);  // lodash omit - creates a new object without the id passed in.
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default: return state;
  }
}