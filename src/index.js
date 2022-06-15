import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer/reducer'
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
