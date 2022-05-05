import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';


const App=()=>{
  return (
    <div className='ui container'>  
      {/* <h1>HEADER</h1>  */}
      {/* <Header /> This needs to be moved inside the router */}
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList}/>
        <Route path='/streams/new' component={StreamCreate}/>
        <Route path='/streams/edit' component={StreamEdit}/>
        <Route path='/streams/delete' component={StreamDelete}/>
        <Route path='/streams/show' component={StreamShow}/>
      </BrowserRouter>
    </div> 
  )
}

export default App;