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