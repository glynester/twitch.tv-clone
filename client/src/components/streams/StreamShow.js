import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component{
  // get a reference to this video element 
  constructor(props){
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    console.log("this.videoRef=>",this.videoRef);
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  // If component fetches stream at some point in the future and the component re-renders, componentDidUpdate will be called and we will 'buildPlayer' in there as well.
  componentDidUpdate(){
    console.log("this.videoRef=>",this.videoRef);
    this.buildPlayer();
  }

  // Only set up video player after we know appropriate stream has been fetched.
  buildPlayer(){
    // if we've already built it and we already have a player or if we do not have the stream, then we're not going to try to build it.
    if (this.player || !this.props.stream){
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render(){
    if (!this.props.stream){
      return <div>Loading...</div>
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width:'100%'}} controls={true}/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps=(state, ownProps)=>{
  return { stream: state.streams[ownProps.match.params.id]}
}

// export default StreamShow;
// export default connect(null, { fetchStream })(StreamShow);
export default connect(mapStateToProps, { fetchStream })(StreamShow);