import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Allows chrome browser debugging.
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers);
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))   // No middleware yet but we will have later.
);

// ReactDOM.render( // Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
  ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)




