import React, {Component} from 'react';
import './App.css';
import './Filters.css';
import Header from './Header.js'
import Main from './Main.js'
import Table from './TableGrid.js'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ButtonGroup
} from 'reactstrap';
import NewPage from './AddBirthPage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBar from '@fortawesome/fontawesome-free-solid/faBars'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <Main />
                {/*<NewPage />*/}
                {/*<UserPage />*/}
                {/*<LoginPage />*/}
            </div>
        );
    }
}

export default Home;
