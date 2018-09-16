import React from 'react';
import './App.css';
import './components/Filters/Filter.css';
import {Route, Switch} from 'react-router-dom';
import BirthPage from './components/BirthPage/BirthPage';
import UserPage from './containers/UserPage/UserPagecontainer';
import LoginPage from './containers/LoginPage/LoginPageContainer';
import Home from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import * as routes from './constants/routes';
import PrivateRoute from './containers/Router/PrivateRoute';

const App = () => (
  <div>
    <Switch>
      <Route exact path={routes.LOGIN} component={LoginPage} />
      <PrivateRoute exact path={routes.MAIN} component={Home} />
      <PrivateRoute exact path={routes.ADD_BIRTH} component={BirthPage} />
      <PrivateRoute exact path={routes.EDIT_BIRTH} component={BirthPage} />
      <PrivateRoute exact path={routes.USER_PAGE} component={UserPage} />
      <Route exact component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
