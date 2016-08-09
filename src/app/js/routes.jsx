import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PortfolioIndex from './components/portfolio/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PortfolioIndex} />
  </Route>
);
