import streams from '../apis/streams';  // instance of axios
import { SIGN_IN, SIGN_OUT } from "./types";


export const signIn=(userId)=>{
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut=()=>{
  return {
    type: SIGN_OUT
  }
}
// Auth state reducer will flip the boolean flag  for signed in status when it sees "SIGN_IN" or "SIGN_OUT"

// new action creator
export const createStream=(formValues)=>{
  // asynchronous action creator - any time we make an asynchronous action creator, we are making use of redux thunk.
  return async (dispatch)=>{
    streams.post('/streams', formValues); // post request with axios
    // this is going to create a stream because we are following RESTful conventions.
  }
}

