import React, {Component} from 'react';
import './App.css';
import './Filters.css';
import AddBirthPage from './AddBirthPage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/add' component={AddBirthPage} />
            </div>
        );
    }
}

export default App;
