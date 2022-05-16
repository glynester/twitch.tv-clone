import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';    // To get info from store add in connect function then define a mapStateToProps function and wire that up to stream edit.
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// const StreamEdit=(props)=>{
class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
// Callback for StreamForm
  onSubmit=(formValues)=>{
    // console.log("StreamEdit-formValues",formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }
  
  render() {
    console.log("StreamEdit-props",this.props);
    // return <div>StreamEdit</div>
    if (!this.props.stream){ return <div>Loading...</div>}
    return (
    <div>
      <h3>Edit a Stream</h3>
      {/* initalValues is a very special property name with redux form. */}
      {/* <StreamForm initialValues={{title:'Edit Me!!!', description:'Change Meeeeeee 222222!!!'}} onSubmit={this.onSubmit}/> */}
      {/* Using lodash to pick out the form values that we care about and that we want to actually edit inside that form. */}
      <StreamForm initialValues={_.pick(this.props.stream,'title', 'description') } onSubmit={this.onSubmit}/> 
    </div>
    )
  }
}
// mapStateToProps function actually gets called with two separate arguments. 1st is always our state object , 2nd argument is the ownProps argument - a reference to the props object that shows up inside our streamEdit component 
const mapStateToProps=(state, ownProps)=>{
  console.log("StreamEdit-ownProps",ownProps);  // same as props above.
  return {stream: state.streams[ownProps.match.params.id] }
}

// export default StreamEdit;
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
