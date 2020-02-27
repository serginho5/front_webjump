import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Camiseta from '../pages/Camisetas';
import Calca from '../pages/Calca';
import Sapatos from '../pages/Sapatos';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/camisetas" component={Camiseta} />
    <Route path="/calcas" component={Calca} />
    <Route path="/sapatos" component={Sapatos} />
  </Switch>
);

export default Routes;
