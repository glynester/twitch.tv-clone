import { formValues } from 'redux-form';
import streams from '../apis/streams';  // instance of axios
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from "./types";


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
  // return async (dispatch)=>{
    // When we return, a function from an action creator, the function gets called automatically by Redux Thunk with two arguments, 'dispatch' and 'getState' - which allows us to get user ID from the redux store.
    return async (dispatch, getState)=>{
      const {userId} = getState().auth;  // Chrome redux detools shows structure of state (if you forget)
      const response=await streams.post('/streams', {...formValues, userId});
    // const response=await streams.post('/streams', formValues); // post request with axios
    // this is going to create a stream because we are following RESTful conventions.
    dispatch({ type: CREATE_STREAM, payload: response.data })
  }
}

export const fetchStreams=()=>{
  return async (dispatch)=>{
    const response= await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  }
}

export const fetchStream=(id)=>async dispatch=>{
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
}

// To edit a stream, we need to provide both the ID and the update that we're trying to make to that stream as arguments to the action creator.
export const editStream=(id, formValues)=>async dispatch=>{
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
}

// No response needed for 'delete' with axios. Payload is id of deleted stream.
export const deleteStream=(id)=>async dispatch=>{
  await streams.delete(`/stream/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
}

