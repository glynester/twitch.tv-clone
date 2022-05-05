import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE={
  isSignedIn: null, 
  userId: null
};

// When our redux application first boots up, a reducer gets called one time to initialize it.
// If this reducer gets called with a first argument value of undefined, then state will be set equal to whatever value we put right here.
// state-out {isSignedIn: true, userId: '103158730912872639137'}
export default(state=INITIAL_STATE, action)=>{
  switch (action.type){
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default: return state;
  }
}