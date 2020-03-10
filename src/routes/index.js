import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';
import Home from '../pages/Home';
import Camiseta from '../pages/Camisetas';
import Calca from '../pages/Calca';
import Sapatos from '../pages/Sapatos';
import ResultsSearch from '../pages/ResultsSearch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/camisetas" component={Camiseta} />
    <Route path="/calcas" component={Calca} />
    <Route path="/sapatos" component={Sapatos} />
    <Route path="/resultados" component={ResultsSearch} />
    <Route path="*" component={() => <ErrorMessage message="Está pagina não existe" />} />
  </Switch>
);

export default Routes;
