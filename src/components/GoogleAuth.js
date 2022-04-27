import React from 'react';

class GoogleAuth extends React.Component {
  state={ isSignedIn: null }// Initialise state
  componentDidMount(){  // When component is loaded to screen, load up client portion of library
    window.gapi.load('client:auth2',()=>{
      // clientId set up here: https://console.cloud.google.com/apis/credentials?project=twitch-tv-clone
      window.gapi.client.init({
        clientId: '242034589938-fgvj2j79h5u0eoae5kfsf25n5he3jkkc.apps.googleusercontent.com',
        scope: 'email'
      }) // Callback only loads after 'client:auth2' library has been successfully loaded into gapi.
      // client.init returns a promise.
      .then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance();  // auth object
        this.setState({ isSignedIn: this.auth.isSignedIn.get()} ) // Update component level state to get component to re-render.
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    }); // Available on window scope inside browser
  }

  onAuthChange=()=>{
    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignIn=()=>{
    this.auth.signIn();
  }

  onSignOut=()=>{
    this.auth.signOut();
  }

  renderAuthButton(){ // helper function
    if (this.state.isSignedIn===null){
      // return <div>Not sure if signed in</div>
      return null
    } else if (this.state.isSignedIn){ 
      return (
      // <div>Signed in</div>
      <button onClick={this.onSignOut} className='ui red google button'>
        <i className="google icon"/> 
        Sign Out 
      </button>
      )
    } else return (
    // <div>Not Signed in</div>
    <button onClick={this.onSignIn} className="ui green google button">
      <i className='google icon'/>
      Sign In With Google
    </button>
    )
  }

  render(){
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;