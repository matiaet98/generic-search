// @flow
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Search from './containers/Search';
import Results from './containers/Results';
//import submitHost from './reducers';

const middleware = [thunk];

const store = createStore(combineReducers({ /*submitHost: submitHost,*/ routing: routerReducer }),applyMiddleware(...middleware));

const history = syncHistoryWithStore(browserHistory, store);

const mountNode = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Search}/>
      <Route path="/results" component={Results}/>
    </Router>
  </Provider>,
  mountNode
);