import React from 'react'
import './App.css'
import './components/Filters/Filter.css'
import BirthPage from './components/BirthPage/BirthPage'
import UserPageContainer from './containers/UserPage/UserPagecontainer'
import LoginPageContainer from './containers/LoginPage/LoginPageContainer'
import Home from './components/HomePage/HomePage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import {Route, Switch, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {ANIMATION_DURATION} from './constants/utils'
import * as routes from './constants/routes'
import PrivateRoute from './containers/Router/PrivateRoute'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path={routes.LOGIN} component={LoginPageContainer}/>
                <PrivateRoute exact path={routes.MAIN} component={Home}/>
                <PrivateRoute exact path={routes.ADD_BIRTH} component={BirthPage}/>
                <PrivateRoute exact path={routes.EDIT_BIRTH} component={BirthPage}/>
                <PrivateRoute exact path={routes.USER_PAGE} component={UserPageContainer}/>
                <Route exact component={NotFoundPage}/>
            </Switch>
        </div>)
};

export default App;
