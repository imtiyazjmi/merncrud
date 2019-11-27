// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';
import Company from './containers/Company';
import CompanyDetail from './containers/CompanyDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Company} />
      <Route path="/company" component={Company} />
      <Route path="/company/:companyId" component={CompanyDetail} />
      
     {/* <IndexRoute component={Todos} />
     <Route path="/:id" component={Todo} /> */}
     
  </Route>
)
