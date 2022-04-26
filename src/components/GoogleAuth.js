import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){  // When component is loaded to screen, load up client portion of library
    window.gapi.load('client:auth2',()=>{
      // clientId set up here: https://console.cloud.google.com/apis/credentials?project=twitch-tv-clone
      window.gapi.client.init({
        clientId: '242034589938-fgvj2j79h5u0eoae5kfsf25n5he3jkkc.apps.googleusercontent.com'
      }); // Callback only loads after 'client:auth2' library has been successfully loaded into gapi.
    }); // Available on window scope inside browser
    

  }
  render(){
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth;
