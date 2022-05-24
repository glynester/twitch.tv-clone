import React from 'react';
import ReactDOM from 'react-dom';

const Modal=props=>{
  // Don't return jsx like for normal component
  return ReactDOM.createPortal(   // 2 arguments
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* stopPropagation() - prevents a click on any of the elements inside of here, from bubbling up to this div.*/}
      <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
        <i className="close icon" onClick={()=>props.onDismiss()}></i>
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

