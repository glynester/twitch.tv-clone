const INITIAL_STATE={
  isSignedIn: null
};

// When our redux application first boots up, a reducer gets called one time to initialize it.
// If this reducer gets called with a first argument value of undefined, then state will be set equal to whatever value we put right here.
export default(state=INITIAL_STATE, action)=>{
  switch (action.type){
    case 'SIGN_IN':
      return { ...state, isSignedIn: true };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false };
    default: return state;
  }
}