import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
// import { MemoryRouter, Route, Link } from 'react-router-dom';
// Use Link in place of anchor tags - anchor tags are bad.

const PageOne=()=>{
  return (
  <div>
    PageOne<br/>
    {/* BAD! Don't use anchor tags with react router */}
    {/* <a href='/pagetwo'>Page Two</a> */}
    <Link to='/pagetwo'>Page Two</Link> 
  </div>)
}
const PageTwo=()=>{
  return (
  <div>
    PageTwo
    <button>Click Me</button><br/>
    {/* BAD! Don't use anchor tags with react router */}
    {/* <a href='/'>Page One</a> */}
    <Link to='/'>Page One</Link>
  </div>)
}

const App=()=>{
  return (
    // BrowserRouter is itself an app component.
    // Show the required component  if the path matches
    // Different routes can be matched by the same URL.
    // We can very easily have multiple root components that match a given URL and all show themselves to the user.
    // exact = {true} is the same as exact
    <div>   
      <BrowserRouter>
      {/* <HashRouter> */}
      {/* <MemoryRouter> */}
        {/* <Route path='/' exact component={PageOne} />  */}
        <Route path='/' exact  component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      {/* </MemoryRouter> */}
      {/* </HashRouter> */}
      </BrowserRouter>
    </div> 
  )
}

export default App;