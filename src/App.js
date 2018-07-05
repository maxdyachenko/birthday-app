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

const App = ({location}) => {
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    timeout={300}
                    classNames='fade'
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/add' component={BirthPage}/>
                        <Route exact path='/edit/:id' component={BirthPage}/>
                        <Route exact path='/user/:id' component={UserPageContainer}/>
                        <Route exact component={NotFoundPage}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>)
};

export default withRouter(App);
