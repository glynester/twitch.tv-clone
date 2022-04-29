import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
  // state={ isSignedIn: null }// Initialise state
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
        // this.setState({ isSignedIn: this.auth.isSignedIn.get()} ) // Update component level state to get component to re-render.
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    }); // Available on window scope inside browser
  }

  // onAuthChange=()=>{
    onAuthChange=(isSignedIn)=>{
      //   this.setState({ isSignedIn: this.auth.isSignedIn.get()})
      if (isSignedIn){
        this.props.signIn()
      } else {
        this.props.signOut();
      }
      
  }

  onSignInClick=()=>{
    this.auth.signIn();
  }

  onSignOutClick=()=>{
    this.auth.signOut();
  }

  renderAuthButton(){ // helper function
    // if (this.state.isSignedIn===null){
      if (this.props.isSignedIn===null){
      return null
    // } else if (this.state.isSignedIn){ 
    } else if (this.props.isSignedIn){ 
      return (
      // <div>Signed in</div>
      <button onClick={this.onSignOutClick} className='ui red google button'>
        <i className="google icon"/> 
        Sign Out 
      </button>
      )
    } else return (
    // <div>Not Signed in</div>
    <button onClick={this.onSignInClick} className="ui green google button">
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

const mapStateToProps=(state)=>{
  return { isSignedIn: state.auth.isSignedIn };
}

// Null passed as don't yet have mapstatetoprops function
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
