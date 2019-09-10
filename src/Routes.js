import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './modules/components/Dashboard';
import Home from './modules/components/Home';
import NotFound from './modules/components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/home" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
