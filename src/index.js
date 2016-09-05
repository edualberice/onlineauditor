import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';

import AuditoryList from './components/AuditoryList'

ReactDOM.render(
  (
  	<Router history={hashHistory}>
  	  <Route path="/" component={App}>
  	  	<Route path="/listInventories" component={AuditoryList} />
  	  </Route>
    </Router>
  ),
  document.getElementById('root')
);