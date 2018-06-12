import React, {Component} from 'react';
import './App.css';
import './components/Filters/Filter.css';
import AddBirthPage from './components/AddBirthPage/AddBirthPage'
import UserPage from './components/UserPage/UserPage'
import LoginPage from './components/LoginPage/LoginPage'
import Home from './components/HomePage/HomePage'
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
