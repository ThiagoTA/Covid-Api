import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Covid from '../pages/covid'


const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/covid/:repository' component={Covid} />
  </Switch>
);

export default Routes;