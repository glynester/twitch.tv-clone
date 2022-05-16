import React from 'react';
import { connect } from 'react-redux';    // To get info from store add in connect function then define a mapStateToProps function and wire that up to stream edit.
import { fetchStream } from '../../actions';

// const StreamEdit=(props)=>{
class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  
  render() {
    console.log("StreamEdit-props",this.props);
    // return <div>StreamEdit</div>
    if (!this.props.stream){ return <div>Loading...</div>}
    return (<div>
      { this.props.stream.title }<br/>
      { this.props.stream.description }
      </div>)
  }
}
// mapStateToProps function actually gets called with two separate arguments. 1st is always our state object , 2nd argument is the ownProps argument - a reference to the props object that shows up inside our streamEdit component 
const mapStateToProps=(state, ownProps)=>{
  console.log("StreamEdit-ownProps",ownProps);  // same as props above.
  return {stream: state.streams[ownProps.match.params.id] }
}

// export default StreamEdit;
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
