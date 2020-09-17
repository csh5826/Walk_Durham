import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import reducers from './reducers';
import App from "./components/App"

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={App}></Route>
        <Route path="/details"></Route>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


