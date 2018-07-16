import React from 'react'
import './App.css'
import './components/Filters/Filter.css'
import BirthPage from './components/BirthPage/BirthPage'
import UserPageContainer from './containers/UserPage/UserPagecontainer'
import LoginPage from './components/LoginPage/LoginPage'
import Home from './components/HomePage/HomePage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import {Route, Switch, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {ANIMATION_DURATION} from './constants/utils'
import * as routes from './constants/routes'

const App = ({location}) => {
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    timeout={ANIMATION_DURATION}
                    classNames='fade'
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path={routes.MAIN} component={Home}/>
                        <Route exact path={routes.LOGIN} component={LoginPage}/>
                        <Route exact path={routes.ADD_BIRTH} component={BirthPage}/>
                        <Route exact path={routes.EDIT_BIRTH} component={BirthPage}/>
                        <Route exact path={routes.USER_PAGE} component={UserPageContainer}/>
                        <Route exact component={NotFoundPage}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>)
};

export default withRouter(App);
