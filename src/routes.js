import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Hello from './components/Hello';
import Bye from './components/Bye';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/bye" component={Bye} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
