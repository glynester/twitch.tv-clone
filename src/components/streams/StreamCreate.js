import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // Field is a component and reduxForm is a function.

class StreamCreate extends React.Component{
  // Helper method:
  // renderInput(formProps){
    // return <div>I'm an input</div>
    renderInput({ input }){ // destructured from formProps
    // console.log("formProps",formProps);
    // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    return <input {...input } />  // Alternative syntax to get other properties inside 'input' object (besides just 'value' and 'onchange')  that redux form cares about.

  }

  render() {
    console.log("Props",this.props);  // Many props available now from reduxForm helper
    return (
      <form>
        <Field name="Title" component={this.renderInput} />
        <Field name="Description" component={this.renderInput} />
      </form>
    )
  }
}

// const StreamCreate=()=>{
//   return (
//     <div>StreamCreate</div>
//   )
// }

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate); // 'reduxForm' returns a function and we immediately call that function with 'StreamCreate'
