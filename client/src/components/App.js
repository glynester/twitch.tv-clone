import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';  // Because we are using a custom history object now.
// Switch matches only a single route.
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';


const App=()=>{
  return (
    <div className='ui container'>  
      {/* <h1>HEADER</h1>  */}
      {/* <Header /> This needs to be moved inside the router */}
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={StreamList}/>
          <Route path='/streams/new' component={StreamCreate}/>
          {/* <Route path='/streams/edit' component={StreamEdit}/> */}
          <Route path='/streams/edit/:id' component={StreamEdit}/>   {/* Colon required to add a variable element on the end of url. */}
          <Route path='/streams/delete/:id' component={StreamDelete}/>
          <Route path='/streams/:id' component={StreamShow}/>
        </Switch>
      {/* </BrowserRouter> */}
      </Router>
    </div> 
  )
}

export default App;