import React, {Component} from 'react';
import './App.css';
import './components/Filters/Filter.css';
import BirthPage from './components/BirthPage/BirthPage'
import UserPageContainer from './containers/UserPage/UserPagecontainer'
import LoginPage from './components/LoginPage/LoginPage'
import Home from './components/HomePage/HomePage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/add' component={BirthPage} />
                    <Route exact path='/edit/:id' component={BirthPage} />
                    <Route exact path='/user/:id' component={UserPageContainer} />
                    <Route exact component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
