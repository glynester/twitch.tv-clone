import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';     // Used here to navigate to another url (way to make modal window disappear) when user clicks on background modal screen.

const Modal=props=>{
  // Don't return jsx like for normal component
  return ReactDOM.createPortal(   // 2 arguments
    <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
      {/* stopPropagation() - prevents a click on any of the elements inside of here, from bubbling up to this div.*/}
      <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete this stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

