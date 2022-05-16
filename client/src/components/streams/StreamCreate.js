// StreamCreate now needs to show an instance of StreamForm, pass down onSubmit and do basically nothing else.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
  onSubmit=(formValues)=>{
    // Redux form does not need: event.preventDefault(); 
    console.log("formValues",formValues);
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);