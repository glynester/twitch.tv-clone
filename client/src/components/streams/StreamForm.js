// Will be used by StreamCreate and StreamEdit

import React from 'react';
// import { matchPath } from 'react-router-dom';
// import { Field, reduxForm } from 'redux-form';  // Field is a component and reduxForm is a function.
import { Form, Field } from 'react-final-form';

const StreamForm = (props) => {
  const renderError=({error, touched})=>{  // Destructured from meta
    if (touched && error){
      return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
      );
    }
  };
  // Helper method:
  // renderInput(formProps){
    const renderInput=({ input, label, meta })=>{
    console.log("meta",meta);
    const className=`field ${meta.error&&meta.touched?'error':''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input } autoComplete="off" />
        {/* <div>{meta.error}</div>         */}
        { renderError(meta) }
      </div>
    );  // Alternative syntax to get other properties inside 'input' object (besides just 'value' and 'onchange')  that redux form cares about.
  };

  // StreamForm should attempt to call a callback passed down from props from some parent component (StreamCreate or StreamEdit).
  const onSubmit=(formValues)=>{
    // Redux form does not need: event.preventDefault(); 
    console.log("formValues",formValues);
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
        if (!formValues.description) {
          errors.description = "You must enter a description";
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        // Errors don't show in Sematic UI without the error class 
        // we reference handleSubmit and then we pass in whatever callback we want to run after the form gets submitted.
        <form onSubmit={handleSubmit} className="ui form error">
          {/* label is a prop we are adding */}
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm; 




