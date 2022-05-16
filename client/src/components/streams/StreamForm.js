// Will be used by StreamCreate and StreamEdit

import React, { Component } from 'react';
import { matchPath } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';  // Field is a component and reduxForm is a function.

class StreamForm extends React.Component{
  renderError({error, touched}){  // Destructured from meta
    if (touched && error){
      return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
      )
    }
  }
  // Helper method:
  // renderInput(formProps){
    renderInput=({ input, label, meta })=>{
    console.log("meta",meta);
    const className=`field ${meta.error&&meta.touched?'error':''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input } autoComplete="off" />
        {/* <div>{meta.error}</div>         */}
        { this.renderError(meta) }
      </div>
    )  // Alternative syntax to get other properties inside 'input' object (besides just 'value' and 'onchange')  that redux form cares about.
  }

  // StreamForm should attempt to call a callback passed down from props from some parent component (StreamCreate or StreamEdit).
  onSubmit=(formValues)=>{
    // Redux form does not need: event.preventDefault(); 
    console.log("formValues",formValues);
    this.props.onSubmit(formValues);
  }

  render() {
    console.log("Props",this.props);  // Many props available now from reduxForm helper
    return (
      // we reference handleSubmit and then we pass in whatever callback we want to run after the form gets submitted.
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">    {/* Errors don't show in Sematic UI without the error class */}
        {/* label is a prop we are adding */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate=(formValues)=>{
  const errors={};
  if (!formValues.title){
    errors.title = "You need to enter a title";
  } 
  if (!formValues.description){
    errors.description = "You need to enter a description";
  }
  return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate,
  })(StreamForm); 




