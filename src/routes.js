import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import StarshipDetail from './components/starship_detail';


export default (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/detail/:id" component={StarshipDetail} />
  </div>
);