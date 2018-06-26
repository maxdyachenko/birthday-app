import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faLogin from '@fortawesome/fontawesome-free-solid/faSignInAlt'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavLink to="/" className="navbar-brand">BirthApp</NavLink>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={{display: 'flex',marginRight: '20px'}}>
                                <NavLink  activeStyle={{
                                    color: 'white'
                                }} to="/add" className="nav-link">Add new <FontAwesomeIcon icon={faPlus} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/user" className="nav-link">Login <FontAwesomeIcon icon={faLogin} /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
